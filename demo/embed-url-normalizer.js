(function () {
  const workflowRpcPattern = /\/rest\/v1\/rpc\/get_embed_workflow_actions(?:\?|$)/;

  function getDemoBaseUrl() {
    const currentScript = document.currentScript;

    if (currentScript && currentScript.src) {
      return new URL("./", currentScript.src);
    }

    const scriptEl = document.querySelector('script[src*="embed-url-normalizer.js"]');

    if (scriptEl && scriptEl.src) {
      return new URL("./", scriptEl.src);
    }

    return new URL("./", window.location.href);
  }

  function getLocalDemoTarget(pathname) {
    if (!pathname || pathname === "/") {
      return "./";
    }

    if (
      pathname.endsWith("/app.html") ||
      pathname.endsWith("/app") ||
      pathname.endsWith("/app/")
    ) {
      return "app.html";
    }

    if (
      pathname.endsWith("/index.html") ||
      pathname.endsWith("/demo") ||
      pathname.endsWith("/demo/")
    ) {
      return "./";
    }

    return null;
  }

  function normalizePageUrl(rawUrl) {
    if (typeof rawUrl !== "string" || rawUrl.length === 0) {
      return rawUrl;
    }

    let parsedUrl;

    try {
      parsedUrl = new URL(rawUrl, window.location.href);
    } catch (error) {
      return rawUrl;
    }

    const localTarget = getLocalDemoTarget(parsedUrl.pathname);

    if (!localTarget) {
      return rawUrl;
    }

    const normalizedUrl = new URL(localTarget, getDemoBaseUrl());
    normalizedUrl.search = parsedUrl.search;
    normalizedUrl.hash = parsedUrl.hash;

    return normalizedUrl.href;
  }

  function normalizeWorkflowPayload(payload) {
    if (!payload || !Array.isArray(payload.actions)) {
      return payload;
    }

    let changed = false;

    const actions = payload.actions.map((action) => {
      const pageUrl = action?.page?.url;
      const normalizedPageUrl = normalizePageUrl(pageUrl);

      if (normalizedPageUrl === pageUrl) {
        return action;
      }

      changed = true;

      return {
        ...action,
        page: {
          ...action.page,
          url: normalizedPageUrl,
        },
      };
    });

    if (!changed) {
      return payload;
    }

    return {
      ...payload,
      actions,
    };
  }

  const originalFetch = window.fetch.bind(window);

  window.fetch = async function patchedFetch(...args) {
    const response = await originalFetch(...args);
    const requestUrl = args[0] instanceof Request ? args[0].url : String(args[0] || "");

    if (!workflowRpcPattern.test(requestUrl)) {
      return response;
    }

    let payload;

    try {
      payload = await response.clone().json();
    } catch (error) {
      return response;
    }

    const normalizedPayload = normalizeWorkflowPayload(payload);

    if (normalizedPayload === payload) {
      return response;
    }

    const headers = new Headers(response.headers);
    headers.set("content-type", "application/json");
    headers.delete("content-length");
    headers.delete("content-encoding");

    return new Response(JSON.stringify(normalizedPayload), {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  };

  window.__aevraNormalizeDemoPageUrl = normalizePageUrl;
})();
