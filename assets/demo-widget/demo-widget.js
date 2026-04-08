var ur = { exports: {} }, Yi = {};
var u_;
function uy() {
  if (u_) return Yi;
  u_ = 1;
  var m = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function f(i, s, r) {
    var h = null;
    if (r !== void 0 && (h = "" + r), s.key !== void 0 && (h = "" + s.key), "key" in s) {
      r = {};
      for (var d in s)
        d !== "key" && (r[d] = s[d]);
    } else r = s;
    return s = r.ref, {
      $$typeof: m,
      type: i,
      key: h,
      ref: s !== void 0 ? s : null,
      props: r
    };
  }
  return Yi.Fragment = a, Yi.jsx = f, Yi.jsxs = f, Yi;
}
var f_;
function fy() {
  return f_ || (f_ = 1, ur.exports = uy()), ur.exports;
}
var O = fy(), fr = { exports: {} }, qi = {}, cr = { exports: {} }, sr = {};
var c_;
function cy() {
  return c_ || (c_ = 1, (function(m) {
    function a(M, k) {
      var P = M.length;
      M.push(k);
      t: for (; 0 < P; ) {
        var st = P - 1 >>> 1, dt = M[st];
        if (0 < s(dt, k))
          M[st] = k, M[P] = dt, P = st;
        else break t;
      }
    }
    function f(M) {
      return M.length === 0 ? null : M[0];
    }
    function i(M) {
      if (M.length === 0) return null;
      var k = M[0], P = M.pop();
      if (P !== k) {
        M[0] = P;
        t: for (var st = 0, dt = M.length, T = dt >>> 1; st < T; ) {
          var q = 2 * (st + 1) - 1, W = M[q], $ = q + 1, it = M[$];
          if (0 > s(W, P))
            $ < dt && 0 > s(it, W) ? (M[st] = it, M[$] = P, st = $) : (M[st] = W, M[q] = P, st = q);
          else if ($ < dt && 0 > s(it, P))
            M[st] = it, M[$] = P, st = $;
          else break t;
        }
      }
      return k;
    }
    function s(M, k) {
      var P = M.sortIndex - k.sortIndex;
      return P !== 0 ? P : M.id - k.id;
    }
    if (m.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var r = performance;
      m.unstable_now = function() {
        return r.now();
      };
    } else {
      var h = Date, d = h.now();
      m.unstable_now = function() {
        return h.now() - d;
      };
    }
    var g = [], _ = [], p = 1, v = null, A = 3, E = !1, N = !1, b = !1, U = !1, V = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function J(M) {
      for (var k = f(_); k !== null; ) {
        if (k.callback === null) i(_);
        else if (k.startTime <= M)
          i(_), k.sortIndex = k.expirationTime, a(g, k);
        else break;
        k = f(_);
      }
    }
    function w(M) {
      if (b = !1, J(M), !N)
        if (f(g) !== null)
          N = !0, K || (K = !0, nt());
        else {
          var k = f(_);
          k !== null && ot(w, k.startTime - M);
        }
    }
    var K = !1, L = -1, F = 5, X = -1;
    function lt() {
      return U ? !0 : !(m.unstable_now() - X < F);
    }
    function rt() {
      if (U = !1, K) {
        var M = m.unstable_now();
        X = M;
        var k = !0;
        try {
          t: {
            N = !1, b && (b = !1, Z(L), L = -1), E = !0;
            var P = A;
            try {
              e: {
                for (J(M), v = f(g); v !== null && !(v.expirationTime > M && lt()); ) {
                  var st = v.callback;
                  if (typeof st == "function") {
                    v.callback = null, A = v.priorityLevel;
                    var dt = st(
                      v.expirationTime <= M
                    );
                    if (M = m.unstable_now(), typeof dt == "function") {
                      v.callback = dt, J(M), k = !0;
                      break e;
                    }
                    v === f(g) && i(g), J(M);
                  } else i(g);
                  v = f(g);
                }
                if (v !== null) k = !0;
                else {
                  var T = f(_);
                  T !== null && ot(
                    w,
                    T.startTime - M
                  ), k = !1;
                }
              }
              break t;
            } finally {
              v = null, A = P, E = !1;
            }
            k = void 0;
          }
        } finally {
          k ? nt() : K = !1;
        }
      }
    }
    var nt;
    if (typeof H == "function")
      nt = function() {
        H(rt);
      };
    else if (typeof MessageChannel < "u") {
      var ut = new MessageChannel(), ct = ut.port2;
      ut.port1.onmessage = rt, nt = function() {
        ct.postMessage(null);
      };
    } else
      nt = function() {
        V(rt, 0);
      };
    function ot(M, k) {
      L = V(function() {
        M(m.unstable_now());
      }, k);
    }
    m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, m.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : F = 0 < M ? Math.floor(1e3 / M) : 5;
    }, m.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, m.unstable_next = function(M) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = A;
      }
      var P = A;
      A = k;
      try {
        return M();
      } finally {
        A = P;
      }
    }, m.unstable_requestPaint = function() {
      U = !0;
    }, m.unstable_runWithPriority = function(M, k) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var P = A;
      A = M;
      try {
        return k();
      } finally {
        A = P;
      }
    }, m.unstable_scheduleCallback = function(M, k, P) {
      var st = m.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? st + P : st) : P = st, M) {
        case 1:
          var dt = -1;
          break;
        case 2:
          dt = 250;
          break;
        case 5:
          dt = 1073741823;
          break;
        case 4:
          dt = 1e4;
          break;
        default:
          dt = 5e3;
      }
      return dt = P + dt, M = {
        id: p++,
        callback: k,
        priorityLevel: M,
        startTime: P,
        expirationTime: dt,
        sortIndex: -1
      }, P > st ? (M.sortIndex = P, a(_, M), f(g) === null && M === f(_) && (b ? (Z(L), L = -1) : b = !0, ot(w, P - st))) : (M.sortIndex = dt, a(g, M), N || E || (N = !0, K || (K = !0, nt()))), M;
    }, m.unstable_shouldYield = lt, m.unstable_wrapCallback = function(M) {
      var k = A;
      return function() {
        var P = A;
        A = k;
        try {
          return M.apply(this, arguments);
        } finally {
          A = P;
        }
      };
    };
  })(sr)), sr;
}
var s_;
function sy() {
  return s_ || (s_ = 1, cr.exports = cy()), cr.exports;
}
var rr = { exports: {} }, ht = {};
var r_;
function ry() {
  if (r_) return ht;
  r_ = 1;
  var m = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), r = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), d = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.activity"), A = Symbol.iterator;
  function E(T) {
    return T === null || typeof T != "object" ? null : (T = A && T[A] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var N = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, b = Object.assign, U = {};
  function V(T, q, W) {
    this.props = T, this.context = q, this.refs = U, this.updater = W || N;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(T, q) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, T, q, "setState");
  }, V.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = V.prototype;
  function H(T, q, W) {
    this.props = T, this.context = q, this.refs = U, this.updater = W || N;
  }
  var J = H.prototype = new Z();
  J.constructor = H, b(J, V.prototype), J.isPureReactComponent = !0;
  var w = Array.isArray;
  function K() {
  }
  var L = { H: null, A: null, T: null, S: null }, F = Object.prototype.hasOwnProperty;
  function X(T, q, W) {
    var $ = W.ref;
    return {
      $$typeof: m,
      type: T,
      key: q,
      ref: $ !== void 0 ? $ : null,
      props: W
    };
  }
  function lt(T, q) {
    return X(T.type, q, T.props);
  }
  function rt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === m;
  }
  function nt(T) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(W) {
      return q[W];
    });
  }
  var ut = /\/+/g;
  function ct(T, q) {
    return typeof T == "object" && T !== null && T.key != null ? nt("" + T.key) : q.toString(36);
  }
  function ot(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(K, K) : (T.status = "pending", T.then(
          function(q) {
            T.status === "pending" && (T.status = "fulfilled", T.value = q);
          },
          function(q) {
            T.status === "pending" && (T.status = "rejected", T.reason = q);
          }
        )), T.status) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function M(T, q, W, $, it) {
    var gt = typeof T;
    (gt === "undefined" || gt === "boolean") && (T = null);
    var zt = !1;
    if (T === null) zt = !0;
    else
      switch (gt) {
        case "bigint":
        case "string":
        case "number":
          zt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case m:
            case a:
              zt = !0;
              break;
            case p:
              return zt = T._init, M(
                zt(T._payload),
                q,
                W,
                $,
                it
              );
          }
      }
    if (zt)
      return it = it(T), zt = $ === "" ? "." + ct(T, 0) : $, w(it) ? (W = "", zt != null && (W = zt.replace(ut, "$&/") + "/"), M(it, q, W, "", function(Za) {
        return Za;
      })) : it != null && (rt(it) && (it = lt(
        it,
        W + (it.key == null || T && T.key === it.key ? "" : ("" + it.key).replace(
          ut,
          "$&/"
        ) + "/") + zt
      )), q.push(it)), 1;
    zt = 0;
    var _e = $ === "" ? "." : $ + ":";
    if (w(T))
      for (var Zt = 0; Zt < T.length; Zt++)
        $ = T[Zt], gt = _e + ct($, Zt), zt += M(
          $,
          q,
          W,
          gt,
          it
        );
    else if (Zt = E(T), typeof Zt == "function")
      for (T = Zt.call(T), Zt = 0; !($ = T.next()).done; )
        $ = $.value, gt = _e + ct($, Zt++), zt += M(
          $,
          q,
          W,
          gt,
          it
        );
    else if (gt === "object") {
      if (typeof T.then == "function")
        return M(
          ot(T),
          q,
          W,
          $,
          it
        );
      throw q = String(T), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return zt;
  }
  function k(T, q, W) {
    if (T == null) return T;
    var $ = [], it = 0;
    return M(T, $, "", "", function(gt) {
      return q.call(W, gt, it++);
    }), $;
  }
  function P(T) {
    if (T._status === -1) {
      var q = T._result;
      q = q(), q.then(
        function(W) {
          (T._status === 0 || T._status === -1) && (T._status = 1, T._result = W);
        },
        function(W) {
          (T._status === 0 || T._status === -1) && (T._status = 2, T._result = W);
        }
      ), T._status === -1 && (T._status = 0, T._result = q);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var st = typeof reportError == "function" ? reportError : function(T) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
        error: T
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", T);
      return;
    }
    console.error(T);
  }, dt = {
    map: k,
    forEach: function(T, q, W) {
      k(
        T,
        function() {
          q.apply(this, arguments);
        },
        W
      );
    },
    count: function(T) {
      var q = 0;
      return k(T, function() {
        q++;
      }), q;
    },
    toArray: function(T) {
      return k(T, function(q) {
        return q;
      }) || [];
    },
    only: function(T) {
      if (!rt(T))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return T;
    }
  };
  return ht.Activity = v, ht.Children = dt, ht.Component = V, ht.Fragment = f, ht.Profiler = s, ht.PureComponent = H, ht.StrictMode = i, ht.Suspense = g, ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, ht.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(T) {
      return L.H.useMemoCache(T);
    }
  }, ht.cache = function(T) {
    return function() {
      return T.apply(null, arguments);
    };
  }, ht.cacheSignal = function() {
    return null;
  }, ht.cloneElement = function(T, q, W) {
    if (T == null)
      throw Error(
        "The argument must be a React element, but you passed " + T + "."
      );
    var $ = b({}, T.props), it = T.key;
    if (q != null)
      for (gt in q.key !== void 0 && (it = "" + q.key), q)
        !F.call(q, gt) || gt === "key" || gt === "__self" || gt === "__source" || gt === "ref" && q.ref === void 0 || ($[gt] = q[gt]);
    var gt = arguments.length - 2;
    if (gt === 1) $.children = W;
    else if (1 < gt) {
      for (var zt = Array(gt), _e = 0; _e < gt; _e++)
        zt[_e] = arguments[_e + 2];
      $.children = zt;
    }
    return X(T.type, it, $);
  }, ht.createContext = function(T) {
    return T = {
      $$typeof: h,
      _currentValue: T,
      _currentValue2: T,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, T.Provider = T, T.Consumer = {
      $$typeof: r,
      _context: T
    }, T;
  }, ht.createElement = function(T, q, W) {
    var $, it = {}, gt = null;
    if (q != null)
      for ($ in q.key !== void 0 && (gt = "" + q.key), q)
        F.call(q, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (it[$] = q[$]);
    var zt = arguments.length - 2;
    if (zt === 1) it.children = W;
    else if (1 < zt) {
      for (var _e = Array(zt), Zt = 0; Zt < zt; Zt++)
        _e[Zt] = arguments[Zt + 2];
      it.children = _e;
    }
    if (T && T.defaultProps)
      for ($ in zt = T.defaultProps, zt)
        it[$] === void 0 && (it[$] = zt[$]);
    return X(T, gt, it);
  }, ht.createRef = function() {
    return { current: null };
  }, ht.forwardRef = function(T) {
    return { $$typeof: d, render: T };
  }, ht.isValidElement = rt, ht.lazy = function(T) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: T },
      _init: P
    };
  }, ht.memo = function(T, q) {
    return {
      $$typeof: _,
      type: T,
      compare: q === void 0 ? null : q
    };
  }, ht.startTransition = function(T) {
    var q = L.T, W = {};
    L.T = W;
    try {
      var $ = T(), it = L.S;
      it !== null && it(W, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(K, st);
    } catch (gt) {
      st(gt);
    } finally {
      q !== null && W.types !== null && (q.types = W.types), L.T = q;
    }
  }, ht.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, ht.use = function(T) {
    return L.H.use(T);
  }, ht.useActionState = function(T, q, W) {
    return L.H.useActionState(T, q, W);
  }, ht.useCallback = function(T, q) {
    return L.H.useCallback(T, q);
  }, ht.useContext = function(T) {
    return L.H.useContext(T);
  }, ht.useDebugValue = function() {
  }, ht.useDeferredValue = function(T, q) {
    return L.H.useDeferredValue(T, q);
  }, ht.useEffect = function(T, q) {
    return L.H.useEffect(T, q);
  }, ht.useEffectEvent = function(T) {
    return L.H.useEffectEvent(T);
  }, ht.useId = function() {
    return L.H.useId();
  }, ht.useImperativeHandle = function(T, q, W) {
    return L.H.useImperativeHandle(T, q, W);
  }, ht.useInsertionEffect = function(T, q) {
    return L.H.useInsertionEffect(T, q);
  }, ht.useLayoutEffect = function(T, q) {
    return L.H.useLayoutEffect(T, q);
  }, ht.useMemo = function(T, q) {
    return L.H.useMemo(T, q);
  }, ht.useOptimistic = function(T, q) {
    return L.H.useOptimistic(T, q);
  }, ht.useReducer = function(T, q, W) {
    return L.H.useReducer(T, q, W);
  }, ht.useRef = function(T) {
    return L.H.useRef(T);
  }, ht.useState = function(T) {
    return L.H.useState(T);
  }, ht.useSyncExternalStore = function(T, q, W) {
    return L.H.useSyncExternalStore(
      T,
      q,
      W
    );
  }, ht.useTransition = function() {
    return L.H.useTransition();
  }, ht.version = "19.2.5", ht;
}
var o_;
function Hr() {
  return o_ || (o_ = 1, rr.exports = ry()), rr.exports;
}
var or = { exports: {} }, re = {};
var h_;
function oy() {
  if (h_) return re;
  h_ = 1;
  var m = Hr();
  function a(g) {
    var _ = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        _ += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return "Minified React error #" + g + "; visit " + _ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var i = {
    d: {
      f,
      r: function() {
        throw Error(a(522));
      },
      D: f,
      C: f,
      L: f,
      m: f,
      X: f,
      S: f,
      M: f
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function r(g, _, p) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : "" + v,
      children: g,
      containerInfo: _,
      implementation: p
    };
  }
  var h = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(g, _) {
    if (g === "font") return "";
    if (typeof _ == "string")
      return _ === "use-credentials" ? _ : "";
  }
  return re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, re.createPortal = function(g, _) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11)
      throw Error(a(299));
    return r(g, _, null, p);
  }, re.flushSync = function(g) {
    var _ = h.T, p = i.p;
    try {
      if (h.T = null, i.p = 2, g) return g();
    } finally {
      h.T = _, i.p = p, i.d.f();
    }
  }, re.preconnect = function(g, _) {
    typeof g == "string" && (_ ? (_ = _.crossOrigin, _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null, i.d.C(g, _));
  }, re.prefetchDNS = function(g) {
    typeof g == "string" && i.d.D(g);
  }, re.preinit = function(g, _) {
    if (typeof g == "string" && _ && typeof _.as == "string") {
      var p = _.as, v = d(p, _.crossOrigin), A = typeof _.integrity == "string" ? _.integrity : void 0, E = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
      p === "style" ? i.d.S(
        g,
        typeof _.precedence == "string" ? _.precedence : void 0,
        {
          crossOrigin: v,
          integrity: A,
          fetchPriority: E
        }
      ) : p === "script" && i.d.X(g, {
        crossOrigin: v,
        integrity: A,
        fetchPriority: E,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0
      });
    }
  }, re.preinitModule = function(g, _) {
    if (typeof g == "string")
      if (typeof _ == "object" && _ !== null) {
        if (_.as == null || _.as === "script") {
          var p = d(
            _.as,
            _.crossOrigin
          );
          i.d.M(g, {
            crossOrigin: p,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
            nonce: typeof _.nonce == "string" ? _.nonce : void 0
          });
        }
      } else _ == null && i.d.M(g);
  }, re.preload = function(g, _) {
    if (typeof g == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
      var p = _.as, v = d(p, _.crossOrigin);
      i.d.L(g, p, {
        crossOrigin: v,
        integrity: typeof _.integrity == "string" ? _.integrity : void 0,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0,
        type: typeof _.type == "string" ? _.type : void 0,
        fetchPriority: typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
        referrerPolicy: typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
        imageSrcSet: typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
        imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
        media: typeof _.media == "string" ? _.media : void 0
      });
    }
  }, re.preloadModule = function(g, _) {
    if (typeof g == "string")
      if (_) {
        var p = d(_.as, _.crossOrigin);
        i.d.m(g, {
          as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
          crossOrigin: p,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0
        });
      } else i.d.m(g);
  }, re.requestFormReset = function(g) {
    i.d.r(g);
  }, re.unstable_batchedUpdates = function(g, _) {
    return g(_);
  }, re.useFormState = function(g, _, p) {
    return h.H.useFormState(g, _, p);
  }, re.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, re.version = "19.2.5", re;
}
var d_;
function hy() {
  if (d_) return or.exports;
  d_ = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (a) {
        console.error(a);
      }
  }
  return m(), or.exports = oy(), or.exports;
}
var __;
function dy() {
  if (__) return qi;
  __ = 1;
  var m = sy(), a = Hr(), f = hy();
  function i(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function r(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function d(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (r(t) !== t)
      throw Error(i(188));
  }
  function _(t) {
    var e = t.alternate;
    if (!e) {
      if (e = r(t), e === null) throw Error(i(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (n = u.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === l) return g(u), t;
          if (c === n) return g(u), e;
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (l.return !== n.return) l = u, n = c;
      else {
        for (var o = !1, y = u.child; y; ) {
          if (y === l) {
            o = !0, l = u, n = c;
            break;
          }
          if (y === n) {
            o = !0, n = u, l = c;
            break;
          }
          y = y.sibling;
        }
        if (!o) {
          for (y = c.child; y; ) {
            if (y === l) {
              o = !0, l = c, n = u;
              break;
            }
            if (y === n) {
              o = !0, n = c, l = u;
              break;
            }
            y = y.sibling;
          }
          if (!o) throw Error(i(189));
        }
      }
      if (l.alternate !== n) throw Error(i(190));
    }
    if (l.tag !== 3) throw Error(i(188));
    return l.stateNode.current === l ? t : e;
  }
  function p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = p(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign, A = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), N = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), V = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), J = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), L = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), X = /* @__PURE__ */ Symbol.for("react.activity"), lt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), rt = Symbol.iterator;
  function nt(t) {
    return t === null || typeof t != "object" ? null : (t = rt && t[rt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ut = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ct(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ut ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case b:
        return "Fragment";
      case V:
        return "Profiler";
      case U:
        return "StrictMode";
      case w:
        return "Suspense";
      case K:
        return "SuspenseList";
      case X:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case N:
          return "Portal";
        case H:
          return t.displayName || "Context";
        case Z:
          return (t._context.displayName || "Context") + ".Consumer";
        case J:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case L:
          return e = t.displayName || null, e !== null ? e : ct(t.type) || "Memo";
        case F:
          e = t._payload, t = t._init;
          try {
            return ct(t(e));
          } catch {
          }
      }
    return null;
  }
  var ot = Array.isArray, M = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, st = [], dt = -1;
  function T(t) {
    return { current: t };
  }
  function q(t) {
    0 > dt || (t.current = st[dt], st[dt] = null, dt--);
  }
  function W(t, e) {
    dt++, st[dt] = t.current, t.current = e;
  }
  var $ = T(null), it = T(null), gt = T(null), zt = T(null);
  function _e(t, e) {
    switch (W(gt, e), W(it, t), W($, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? D0(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = D0(e), t = M0(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    q($), W($, t);
  }
  function Zt() {
    q($), q(it), q(gt);
  }
  function Za(t) {
    t.memoizedState !== null && W(zt, t);
    var e = $.current, l = M0(e, t.type);
    e !== l && (W(it, t), W($, l));
  }
  function nu(t) {
    it.current === t && (q($), q(it)), zt.current === t && (q(zt), ji._currentValue = P);
  }
  var Gf, ao;
  function bn(t) {
    if (Gf === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Gf = e && e[1] || "", ao = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Gf + t + ao;
  }
  var Xf = !1;
  function Qf(t, e) {
    if (!t || Xf) return "";
    Xf = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (j) {
                  var R = j;
                }
                Reflect.construct(t, [], Q);
              } else {
                try {
                  Q.call();
                } catch (j) {
                  R = j;
                }
                t.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                R = j;
              }
              (Q = t()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (j) {
            if (j && R && typeof j.stack == "string")
              return [j.stack, R.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = n.DetermineComponentFrameRoot(), o = c[0], y = c[1];
      if (o && y) {
        var S = o.split(`
`), D = y.split(`
`);
        for (u = n = 0; n < S.length && !S[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; u < D.length && !D[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (n === S.length || u === D.length)
          for (n = S.length - 1, u = D.length - 1; 1 <= n && 0 <= u && S[n] !== D[u]; )
            u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (S[n] !== D[u]) {
            if (n !== 1 || u !== 1)
              do
                if (n--, u--, 0 > u || S[n] !== D[u]) {
                  var Y = `
` + S[n].replace(" at new ", " at ");
                  return t.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", t.displayName)), Y;
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      Xf = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? bn(l) : "";
  }
  function H1(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return bn(t.type);
      case 16:
        return bn("Lazy");
      case 13:
        return t.child !== e && e !== null ? bn("Suspense Fallback") : bn("Suspense");
      case 19:
        return bn("SuspenseList");
      case 0:
      case 15:
        return Qf(t.type, !1);
      case 11:
        return Qf(t.type.render, !1);
      case 1:
        return Qf(t.type, !0);
      case 31:
        return bn("Activity");
      default:
        return "";
    }
  }
  function io(t) {
    try {
      var e = "", l = null;
      do
        e += H1(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Zf = Object.prototype.hasOwnProperty, Kf = m.unstable_scheduleCallback, Jf = m.unstable_cancelCallback, Y1 = m.unstable_shouldYield, q1 = m.unstable_requestPaint, Me = m.unstable_now, L1 = m.unstable_getCurrentPriorityLevel, uo = m.unstable_ImmediatePriority, fo = m.unstable_UserBlockingPriority, au = m.unstable_NormalPriority, V1 = m.unstable_LowPriority, co = m.unstable_IdlePriority, G1 = m.log, X1 = m.unstable_setDisableYieldValue, Ka = null, Ne = null;
  function ql(t) {
    if (typeof G1 == "function" && X1(t), Ne && typeof Ne.setStrictMode == "function")
      try {
        Ne.setStrictMode(Ka, t);
      } catch {
      }
  }
  var Re = Math.clz32 ? Math.clz32 : K1, Q1 = Math.log, Z1 = Math.LN2;
  function K1(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Q1(t) / Z1 | 0) | 0;
  }
  var iu = 256, uu = 262144, fu = 4194304;
  function Sn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function cu(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var u = 0, c = t.suspendedLanes, o = t.pingedLanes;
    t = t.warmLanes;
    var y = n & 134217727;
    return y !== 0 ? (n = y & ~c, n !== 0 ? u = Sn(n) : (o &= y, o !== 0 ? u = Sn(o) : l || (l = y & ~t, l !== 0 && (u = Sn(l))))) : (y = n & ~c, y !== 0 ? u = Sn(y) : o !== 0 ? u = Sn(o) : l || (l = n & ~t, l !== 0 && (u = Sn(l)))), u === 0 ? 0 : e !== 0 && e !== u && (e & c) === 0 && (c = u & -u, l = e & -e, c >= l || c === 32 && (l & 4194048) !== 0) ? e : u;
  }
  function Ja(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function J1(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function so() {
    var t = fu;
    return fu <<= 1, (fu & 62914560) === 0 && (fu = 4194304), t;
  }
  function kf(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function ka(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function k1(t, e, l, n, u, c) {
    var o = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var y = t.entanglements, S = t.expirationTimes, D = t.hiddenUpdates;
    for (l = o & ~l; 0 < l; ) {
      var Y = 31 - Re(l), Q = 1 << Y;
      y[Y] = 0, S[Y] = -1;
      var R = D[Y];
      if (R !== null)
        for (D[Y] = null, Y = 0; Y < R.length; Y++) {
          var j = R[Y];
          j !== null && (j.lane &= -536870913);
        }
      l &= ~Q;
    }
    n !== 0 && ro(t, n, 0), c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(o & ~e));
  }
  function ro(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - Re(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function oo(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - Re(l), u = 1 << n;
      u & e | t[n] & e && (t[n] |= e), l &= ~u;
    }
  }
  function ho(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Ff(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Ff(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Wf(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function _o() {
    var t = k.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : I0(t.type));
  }
  function mo(t, e) {
    var l = k.p;
    try {
      return k.p = t, e();
    } finally {
      k.p = l;
    }
  }
  var Ll = Math.random().toString(36).slice(2), ae = "__reactFiber$" + Ll, ye = "__reactProps$" + Ll, kn = "__reactContainer$" + Ll, $f = "__reactEvents$" + Ll, F1 = "__reactListeners$" + Ll, W1 = "__reactHandles$" + Ll, go = "__reactResources$" + Ll, Fa = "__reactMarker$" + Ll;
  function Pf(t) {
    delete t[ae], delete t[ye], delete t[$f], delete t[F1], delete t[W1];
  }
  function Fn(t) {
    var e = t[ae];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[kn] || l[ae]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = H0(t); t !== null; ) {
            if (l = t[ae]) return l;
            t = H0(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Wn(t) {
    if (t = t[ae] || t[kn]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Wa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(i(33));
  }
  function $n(t) {
    var e = t[go];
    return e || (e = t[go] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ee(t) {
    t[Fa] = !0;
  }
  var yo = /* @__PURE__ */ new Set(), po = {};
  function Tn(t, e) {
    Pn(t, e), Pn(t + "Capture", e);
  }
  function Pn(t, e) {
    for (po[t] = e, t = 0; t < e.length; t++)
      yo.add(e[t]);
  }
  var $1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), vo = {}, bo = {};
  function P1(t) {
    return Zf.call(bo, t) ? !0 : Zf.call(vo, t) ? !1 : $1.test(t) ? bo[t] = !0 : (vo[t] = !0, !1);
  }
  function su(t, e, l) {
    if (P1(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function ru(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function yl(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + n);
    }
  }
  function Je(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function So(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function I1(t, e, l) {
    var n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var u = n.get, c = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(o) {
          l = "" + o, c.call(this, o);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(o) {
          l = "" + o;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function If(t) {
    if (!t._valueTracker) {
      var e = So(t) ? "checked" : "value";
      t._valueTracker = I1(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function To(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = So(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function ou(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var tm = /[\n"\\]/g;
  function ke(t) {
    return t.replace(
      tm,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function tc(t, e, l, n, u, c, o, y) {
    t.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.type = o : t.removeAttribute("type"), e != null ? o === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Je(e)) : t.value !== "" + Je(e) && (t.value = "" + Je(e)) : o !== "submit" && o !== "reset" || t.removeAttribute("value"), e != null ? ec(t, o, Je(e)) : l != null ? ec(t, o, Je(l)) : n != null && t.removeAttribute("value"), u == null && c != null && (t.defaultChecked = !!c), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.name = "" + Je(y) : t.removeAttribute("name");
  }
  function xo(t, e, l, n, u, c, o, y) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || l != null) {
      if (!(c !== "submit" && c !== "reset" || e != null)) {
        If(t);
        return;
      }
      l = l != null ? "" + Je(l) : "", e = e != null ? "" + Je(e) : l, y || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? u, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = y ? t.checked : !!n, t.defaultChecked = !!n, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.name = o), If(t);
  }
  function ec(t, e, l) {
    e === "number" && ou(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function In(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < l.length; u++)
        e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        u = e.hasOwnProperty("$" + t[l].value), t[l].selected !== u && (t[l].selected = u), u && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Je(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          t[u].selected = !0, n && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ao(t, e, l) {
    if (e != null && (e = "" + Je(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Je(l) : "";
  }
  function Eo(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(i(92));
        if (ot(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = Je(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), If(t);
  }
  function ta(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var em = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function zo(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || em.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Oo(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(i(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var u in e)
        n = e[u], e.hasOwnProperty(u) && l[u] !== n && zo(t, u, n);
    } else
      for (var c in e)
        e.hasOwnProperty(c) && zo(t, c, e[c]);
  }
  function lc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var lm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), nm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hu(t) {
    return nm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function pl() {
  }
  var nc = null;
  function ac(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ea = null, la = null;
  function Co(t) {
    var e = Wn(t);
    if (e && (t = e.stateNode)) {
      var l = t[ye] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (tc(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + ke(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var u = n[ye] || null;
                if (!u) throw Error(i(90));
                tc(
                  n,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              n = l[e], n.form === t.form && To(n);
          }
          break t;
        case "textarea":
          Ao(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && In(t, !!l.multiple, e, !1);
      }
    }
  }
  var ic = !1;
  function Do(t, e, l) {
    if (ic) return t(e, l);
    ic = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (ic = !1, (ea !== null || la !== null) && (Iu(), ea && (e = ea, t = la, la = ea = null, Co(e), t)))
        for (e = 0; e < t.length; e++) Co(t[e]);
    }
  }
  function $a(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ye] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        i(231, e, typeof l)
      );
    return l;
  }
  var vl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uc = !1;
  if (vl)
    try {
      var Pa = {};
      Object.defineProperty(Pa, "passive", {
        get: function() {
          uc = !0;
        }
      }), window.addEventListener("test", Pa, Pa), window.removeEventListener("test", Pa, Pa);
    } catch {
      uc = !1;
    }
  var Vl = null, fc = null, du = null;
  function Mo() {
    if (du) return du;
    var t, e = fc, l = e.length, n, u = "value" in Vl ? Vl.value : Vl.textContent, c = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++) ;
    var o = l - t;
    for (n = 1; n <= o && e[l - n] === u[c - n]; n++) ;
    return du = u.slice(t, 1 < n ? 1 - n : void 0);
  }
  function _u(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function mu() {
    return !0;
  }
  function No() {
    return !1;
  }
  function pe(t) {
    function e(l, n, u, c, o) {
      this._reactName = l, this._targetInst = u, this.type = n, this.nativeEvent = c, this.target = o, this.currentTarget = null;
      for (var y in t)
        t.hasOwnProperty(y) && (l = t[y], this[y] = l ? l(c) : c[y]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? mu : No, this.isPropagationStopped = No, this;
    }
    return v(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = mu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = mu);
      },
      persist: function() {
      },
      isPersistent: mu
    }), e;
  }
  var xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, gu = pe(xn), Ia = v({}, xn, { view: 0, detail: 0 }), am = pe(Ia), cc, sc, ti, yu = v({}, Ia, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ti && (ti && t.type === "mousemove" ? (cc = t.screenX - ti.screenX, sc = t.screenY - ti.screenY) : sc = cc = 0, ti = t), cc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : sc;
    }
  }), Ro = pe(yu), im = v({}, yu, { dataTransfer: 0 }), um = pe(im), fm = v({}, Ia, { relatedTarget: 0 }), rc = pe(fm), cm = v({}, xn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sm = pe(cm), rm = v({}, xn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), om = pe(rm), hm = v({}, xn, { data: 0 }), Uo = pe(hm), dm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, _m = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, mm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = mm[t]) ? !!e[t] : !1;
  }
  function oc() {
    return gm;
  }
  var ym = v({}, Ia, {
    key: function(t) {
      if (t.key) {
        var e = dm[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = _u(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? _m[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oc,
    charCode: function(t) {
      return t.type === "keypress" ? _u(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? _u(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), pm = pe(ym), vm = v({}, yu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), jo = pe(vm), bm = v({}, Ia, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oc
  }), Sm = pe(bm), Tm = v({}, xn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xm = pe(Tm), Am = v({}, yu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Em = pe(Am), zm = v({}, xn, {
    newState: 0,
    oldState: 0
  }), Om = pe(zm), Cm = [9, 13, 27, 32], hc = vl && "CompositionEvent" in window, ei = null;
  vl && "documentMode" in document && (ei = document.documentMode);
  var Dm = vl && "TextEvent" in window && !ei, wo = vl && (!hc || ei && 8 < ei && 11 >= ei), Bo = " ", Ho = !1;
  function Yo(t, e) {
    switch (t) {
      case "keyup":
        return Cm.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qo(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var na = !1;
  function Mm(t, e) {
    switch (t) {
      case "compositionend":
        return qo(e);
      case "keypress":
        return e.which !== 32 ? null : (Ho = !0, Bo);
      case "textInput":
        return t = e.data, t === Bo && Ho ? null : t;
      default:
        return null;
    }
  }
  function Nm(t, e) {
    if (na)
      return t === "compositionend" || !hc && Yo(t, e) ? (t = Mo(), du = fc = Vl = null, na = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return wo && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Rm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Lo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Rm[t.type] : e === "textarea";
  }
  function Vo(t, e, l, n) {
    ea ? la ? la.push(n) : la = [n] : ea = n, e = ff(e, "onChange"), 0 < e.length && (l = new gu(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var li = null, ni = null;
  function Um(t) {
    x0(t, 0);
  }
  function pu(t) {
    var e = Wa(t);
    if (To(e)) return t;
  }
  function Go(t, e) {
    if (t === "change") return e;
  }
  var Xo = !1;
  if (vl) {
    var dc;
    if (vl) {
      var _c = "oninput" in document;
      if (!_c) {
        var Qo = document.createElement("div");
        Qo.setAttribute("oninput", "return;"), _c = typeof Qo.oninput == "function";
      }
      dc = _c;
    } else dc = !1;
    Xo = dc && (!document.documentMode || 9 < document.documentMode);
  }
  function Zo() {
    li && (li.detachEvent("onpropertychange", Ko), ni = li = null);
  }
  function Ko(t) {
    if (t.propertyName === "value" && pu(ni)) {
      var e = [];
      Vo(
        e,
        ni,
        t,
        ac(t)
      ), Do(Um, e);
    }
  }
  function jm(t, e, l) {
    t === "focusin" ? (Zo(), li = e, ni = l, li.attachEvent("onpropertychange", Ko)) : t === "focusout" && Zo();
  }
  function wm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return pu(ni);
  }
  function Bm(t, e) {
    if (t === "click") return pu(e);
  }
  function Hm(t, e) {
    if (t === "input" || t === "change")
      return pu(e);
  }
  function Ym(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ue = typeof Object.is == "function" ? Object.is : Ym;
  function ai(t, e) {
    if (Ue(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var u = l[n];
      if (!Zf.call(e, u) || !Ue(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function Jo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ko(t, e) {
    var l = Jo(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = t + l.textContent.length, t <= e && n >= e)
          return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Jo(l);
    }
  }
  function Fo(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Fo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Wo(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = ou(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = ou(t.document);
    }
    return e;
  }
  function mc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var qm = vl && "documentMode" in document && 11 >= document.documentMode, aa = null, gc = null, ii = null, yc = !1;
  function $o(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    yc || aa == null || aa !== ou(n) || (n = aa, "selectionStart" in n && mc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ii && ai(ii, n) || (ii = n, n = ff(gc, "onSelect"), 0 < n.length && (e = new gu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = aa)));
  }
  function An(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var ia = {
    animationend: An("Animation", "AnimationEnd"),
    animationiteration: An("Animation", "AnimationIteration"),
    animationstart: An("Animation", "AnimationStart"),
    transitionrun: An("Transition", "TransitionRun"),
    transitionstart: An("Transition", "TransitionStart"),
    transitioncancel: An("Transition", "TransitionCancel"),
    transitionend: An("Transition", "TransitionEnd")
  }, pc = {}, Po = {};
  vl && (Po = document.createElement("div").style, "AnimationEvent" in window || (delete ia.animationend.animation, delete ia.animationiteration.animation, delete ia.animationstart.animation), "TransitionEvent" in window || delete ia.transitionend.transition);
  function En(t) {
    if (pc[t]) return pc[t];
    if (!ia[t]) return t;
    var e = ia[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Po)
        return pc[t] = e[l];
    return t;
  }
  var Io = En("animationend"), th = En("animationiteration"), eh = En("animationstart"), Lm = En("transitionrun"), Vm = En("transitionstart"), Gm = En("transitioncancel"), lh = En("transitionend"), nh = /* @__PURE__ */ new Map(), vc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vc.push("scrollEnd");
  function ul(t, e) {
    nh.set(t, e), Tn(e, [t]);
  }
  var vu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Fe = [], ua = 0, bc = 0;
  function bu() {
    for (var t = ua, e = bc = ua = 0; e < t; ) {
      var l = Fe[e];
      Fe[e++] = null;
      var n = Fe[e];
      Fe[e++] = null;
      var u = Fe[e];
      Fe[e++] = null;
      var c = Fe[e];
      if (Fe[e++] = null, n !== null && u !== null) {
        var o = n.pending;
        o === null ? u.next = u : (u.next = o.next, o.next = u), n.pending = u;
      }
      c !== 0 && ah(l, u, c);
    }
  }
  function Su(t, e, l, n) {
    Fe[ua++] = t, Fe[ua++] = e, Fe[ua++] = l, Fe[ua++] = n, bc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function Sc(t, e, l, n) {
    return Su(t, e, l, n), Tu(t);
  }
  function zn(t, e) {
    return Su(t, null, null, e), Tu(t);
  }
  function ah(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var u = !1, c = t.return; c !== null; )
      c.childLanes |= l, n = c.alternate, n !== null && (n.childLanes |= l), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (u = !0)), t = c, c = c.return;
    return t.tag === 3 ? (c = t.stateNode, u && e !== null && (u = 31 - Re(l), t = c.hiddenUpdates, n = t[u], n === null ? t[u] = [e] : n.push(e), e.lane = l | 536870912), c) : null;
  }
  function Tu(t) {
    if (50 < Oi)
      throw Oi = 0, Ms = null, Error(i(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var fa = {};
  function Xm(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function je(t, e, l, n) {
    return new Xm(t, e, l, n);
  }
  function Tc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function bl(t, e) {
    var l = t.alternate;
    return l === null ? (l = je(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function ih(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function xu(t, e, l, n, u, c) {
    var o = 0;
    if (n = t, typeof t == "function") Tc(t) && (o = 1);
    else if (typeof t == "string")
      o = kg(
        t,
        l,
        $.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case X:
          return t = je(31, l, e, u), t.elementType = X, t.lanes = c, t;
        case b:
          return On(l.children, u, c, e);
        case U:
          o = 8, u |= 24;
          break;
        case V:
          return t = je(12, l, e, u | 2), t.elementType = V, t.lanes = c, t;
        case w:
          return t = je(13, l, e, u), t.elementType = w, t.lanes = c, t;
        case K:
          return t = je(19, l, e, u), t.elementType = K, t.lanes = c, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case H:
                o = 10;
                break t;
              case Z:
                o = 9;
                break t;
              case J:
                o = 11;
                break t;
              case L:
                o = 14;
                break t;
              case F:
                o = 16, n = null;
                break t;
            }
          o = 29, l = Error(
            i(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = je(o, l, e, u), e.elementType = t, e.type = n, e.lanes = c, e;
  }
  function On(t, e, l, n) {
    return t = je(7, t, n, e), t.lanes = l, t;
  }
  function xc(t, e, l) {
    return t = je(6, t, null, e), t.lanes = l, t;
  }
  function uh(t) {
    var e = je(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Ac(t, e, l) {
    return e = je(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var fh = /* @__PURE__ */ new WeakMap();
  function We(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = fh.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: io(e)
      }, fh.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: io(e)
    };
  }
  var ca = [], sa = 0, Au = null, ui = 0, $e = [], Pe = 0, Gl = null, sl = 1, rl = "";
  function Sl(t, e) {
    ca[sa++] = ui, ca[sa++] = Au, Au = t, ui = e;
  }
  function ch(t, e, l) {
    $e[Pe++] = sl, $e[Pe++] = rl, $e[Pe++] = Gl, Gl = t;
    var n = sl;
    t = rl;
    var u = 32 - Re(n) - 1;
    n &= ~(1 << u), l += 1;
    var c = 32 - Re(e) + u;
    if (30 < c) {
      var o = u - u % 5;
      c = (n & (1 << o) - 1).toString(32), n >>= o, u -= o, sl = 1 << 32 - Re(e) + u | l << u | n, rl = c + t;
    } else
      sl = 1 << c | l << u | n, rl = t;
  }
  function Ec(t) {
    t.return !== null && (Sl(t, 1), ch(t, 1, 0));
  }
  function zc(t) {
    for (; t === Au; )
      Au = ca[--sa], ca[sa] = null, ui = ca[--sa], ca[sa] = null;
    for (; t === Gl; )
      Gl = $e[--Pe], $e[Pe] = null, rl = $e[--Pe], $e[Pe] = null, sl = $e[--Pe], $e[Pe] = null;
  }
  function sh(t, e) {
    $e[Pe++] = sl, $e[Pe++] = rl, $e[Pe++] = Gl, sl = e.id, rl = e.overflow, Gl = t;
  }
  var ie = null, wt = null, St = !1, Xl = null, Ie = !1, Oc = Error(i(519));
  function Ql(t) {
    var e = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw fi(We(e, t)), Oc;
  }
  function rh(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[ae] = t, e[ye] = n, l) {
      case "dialog":
        pt("cancel", e), pt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        pt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Di.length; l++)
          pt(Di[l], e);
        break;
      case "source":
        pt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        pt("error", e), pt("load", e);
        break;
      case "details":
        pt("toggle", e);
        break;
      case "input":
        pt("invalid", e), xo(
          e,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        pt("invalid", e);
        break;
      case "textarea":
        pt("invalid", e), Eo(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || O0(e.textContent, l) ? (n.popover != null && (pt("beforetoggle", e), pt("toggle", e)), n.onScroll != null && pt("scroll", e), n.onScrollEnd != null && pt("scrollend", e), n.onClick != null && (e.onclick = pl), e = !0) : e = !1, e || Ql(t, !0);
  }
  function oh(t) {
    for (ie = t.return; ie; )
      switch (ie.tag) {
        case 5:
        case 31:
        case 13:
          Ie = !1;
          return;
        case 27:
        case 3:
          Ie = !0;
          return;
        default:
          ie = ie.return;
      }
  }
  function ra(t) {
    if (t !== ie) return !1;
    if (!St) return oh(t), St = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Zs(t.type, t.memoizedProps)), l = !l), l && wt && Ql(t), oh(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
      wt = B0(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
      wt = B0(t);
    } else
      e === 27 ? (e = wt, an(t.type) ? (t = Ws, Ws = null, wt = t) : wt = e) : wt = ie ? el(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Cn() {
    wt = ie = null, St = !1;
  }
  function Cc() {
    var t = Xl;
    return t !== null && (Te === null ? Te = t : Te.push.apply(
      Te,
      t
    ), Xl = null), t;
  }
  function fi(t) {
    Xl === null ? Xl = [t] : Xl.push(t);
  }
  var Dc = T(null), Dn = null, Tl = null;
  function Zl(t, e, l) {
    W(Dc, e._currentValue), e._currentValue = l;
  }
  function xl(t) {
    t._currentValue = Dc.current, q(Dc);
  }
  function Mc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Nc(t, e, l, n) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var o = u.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var y = c;
          c = u;
          for (var S = 0; S < e.length; S++)
            if (y.context === e[S]) {
              c.lanes |= l, y = c.alternate, y !== null && (y.lanes |= l), Mc(
                c.return,
                l,
                t
              ), n || (o = null);
              break t;
            }
          c = y.next;
        }
      } else if (u.tag === 18) {
        if (o = u.return, o === null) throw Error(i(341));
        o.lanes |= l, c = o.alternate, c !== null && (c.lanes |= l), Mc(o, l, t), o = null;
      } else o = u.child;
      if (o !== null) o.return = u;
      else
        for (o = u; o !== null; ) {
          if (o === t) {
            o = null;
            break;
          }
          if (u = o.sibling, u !== null) {
            u.return = o.return, o = u;
            break;
          }
          o = o.return;
        }
      u = o;
    }
  }
  function oa(t, e, l, n) {
    t = null;
    for (var u = e, c = !1; u !== null; ) {
      if (!c) {
        if ((u.flags & 524288) !== 0) c = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var o = u.alternate;
        if (o === null) throw Error(i(387));
        if (o = o.memoizedProps, o !== null) {
          var y = u.type;
          Ue(u.pendingProps.value, o.value) || (t !== null ? t.push(y) : t = [y]);
        }
      } else if (u === zt.current) {
        if (o = u.alternate, o === null) throw Error(i(387));
        o.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(ji) : t = [ji]);
      }
      u = u.return;
    }
    t !== null && Nc(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function Eu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ue(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Mn(t) {
    Dn = t, Tl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ue(t) {
    return hh(Dn, t);
  }
  function zu(t, e) {
    return Dn === null && Mn(t), hh(t, e);
  }
  function hh(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Tl === null) {
      if (t === null) throw Error(i(308));
      Tl = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Tl = Tl.next = e;
    return l;
  }
  var Qm = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        t.push(n);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, Zm = m.unstable_scheduleCallback, Km = m.unstable_NormalPriority, Ft = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Rc() {
    return {
      controller: new Qm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ci(t) {
    t.refCount--, t.refCount === 0 && Zm(Km, function() {
      t.controller.abort();
    });
  }
  var si = null, Uc = 0, ha = 0, da = null;
  function Jm(t, e) {
    if (si === null) {
      var l = si = [];
      Uc = 0, ha = Bs(), da = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Uc++, e.then(dh, dh), e;
  }
  function dh() {
    if (--Uc === 0 && si !== null) {
      da !== null && (da.status = "fulfilled");
      var t = si;
      si = null, ha = 0, da = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function km(t, e) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        l.push(u);
      }
    };
    return t.then(
      function() {
        n.status = "fulfilled", n.value = e;
        for (var u = 0; u < l.length; u++) (0, l[u])(e);
      },
      function(u) {
        for (n.status = "rejected", n.reason = u, u = 0; u < l.length; u++)
          (0, l[u])(void 0);
      }
    ), n;
  }
  var _h = M.S;
  M.S = function(t, e) {
    $d = Me(), typeof e == "object" && e !== null && typeof e.then == "function" && Jm(t, e), _h !== null && _h(t, e);
  };
  var Nn = T(null);
  function jc() {
    var t = Nn.current;
    return t !== null ? t : Rt.pooledCache;
  }
  function Ou(t, e) {
    e === null ? W(Nn, Nn.current) : W(Nn, e.pool);
  }
  function mh() {
    var t = jc();
    return t === null ? null : { parent: Ft._currentValue, pool: t };
  }
  var _a = Error(i(460)), wc = Error(i(474)), Cu = Error(i(542)), Du = { then: function() {
  } };
  function gh(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function yh(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(pl, pl), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, vh(t), t;
      default:
        if (typeof e.status == "string") e.then(pl, pl);
        else {
          if (t = Rt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(i(482));
          t = e, t.status = "pending", t.then(
            function(n) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = n;
              }
            },
            function(n) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = n;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, vh(t), t;
        }
        throw Un = e, _a;
    }
  }
  function Rn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Un = l, _a) : l;
    }
  }
  var Un = null;
  function ph() {
    if (Un === null) throw Error(i(459));
    var t = Un;
    return Un = null, t;
  }
  function vh(t) {
    if (t === _a || t === Cu)
      throw Error(i(483));
  }
  var ma = null, ri = 0;
  function Mu(t) {
    var e = ri;
    return ri += 1, ma === null && (ma = []), yh(ma, t, e);
  }
  function oi(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Nu(t, e) {
    throw e.$$typeof === A ? Error(i(525)) : (t = Object.prototype.toString.call(e), Error(
      i(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function bh(t) {
    function e(z, x) {
      if (t) {
        var C = z.deletions;
        C === null ? (z.deletions = [x], z.flags |= 16) : C.push(x);
      }
    }
    function l(z, x) {
      if (!t) return null;
      for (; x !== null; )
        e(z, x), x = x.sibling;
      return null;
    }
    function n(z) {
      for (var x = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? x.set(z.key, z) : x.set(z.index, z), z = z.sibling;
      return x;
    }
    function u(z, x) {
      return z = bl(z, x), z.index = 0, z.sibling = null, z;
    }
    function c(z, x, C) {
      return z.index = C, t ? (C = z.alternate, C !== null ? (C = C.index, C < x ? (z.flags |= 67108866, x) : C) : (z.flags |= 67108866, x)) : (z.flags |= 1048576, x);
    }
    function o(z) {
      return t && z.alternate === null && (z.flags |= 67108866), z;
    }
    function y(z, x, C, G) {
      return x === null || x.tag !== 6 ? (x = xc(C, z.mode, G), x.return = z, x) : (x = u(x, C), x.return = z, x);
    }
    function S(z, x, C, G) {
      var et = C.type;
      return et === b ? Y(
        z,
        x,
        C.props.children,
        G,
        C.key
      ) : x !== null && (x.elementType === et || typeof et == "object" && et !== null && et.$$typeof === F && Rn(et) === x.type) ? (x = u(x, C.props), oi(x, C), x.return = z, x) : (x = xu(
        C.type,
        C.key,
        C.props,
        null,
        z.mode,
        G
      ), oi(x, C), x.return = z, x);
    }
    function D(z, x, C, G) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== C.containerInfo || x.stateNode.implementation !== C.implementation ? (x = Ac(C, z.mode, G), x.return = z, x) : (x = u(x, C.children || []), x.return = z, x);
    }
    function Y(z, x, C, G, et) {
      return x === null || x.tag !== 7 ? (x = On(
        C,
        z.mode,
        G,
        et
      ), x.return = z, x) : (x = u(x, C), x.return = z, x);
    }
    function Q(z, x, C) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return x = xc(
          "" + x,
          z.mode,
          C
        ), x.return = z, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case E:
            return C = xu(
              x.type,
              x.key,
              x.props,
              null,
              z.mode,
              C
            ), oi(C, x), C.return = z, C;
          case N:
            return x = Ac(
              x,
              z.mode,
              C
            ), x.return = z, x;
          case F:
            return x = Rn(x), Q(z, x, C);
        }
        if (ot(x) || nt(x))
          return x = On(
            x,
            z.mode,
            C,
            null
          ), x.return = z, x;
        if (typeof x.then == "function")
          return Q(z, Mu(x), C);
        if (x.$$typeof === H)
          return Q(
            z,
            zu(z, x),
            C
          );
        Nu(z, x);
      }
      return null;
    }
    function R(z, x, C, G) {
      var et = x !== null ? x.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return et !== null ? null : y(z, x, "" + C, G);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case E:
            return C.key === et ? S(z, x, C, G) : null;
          case N:
            return C.key === et ? D(z, x, C, G) : null;
          case F:
            return C = Rn(C), R(z, x, C, G);
        }
        if (ot(C) || nt(C))
          return et !== null ? null : Y(z, x, C, G, null);
        if (typeof C.then == "function")
          return R(
            z,
            x,
            Mu(C),
            G
          );
        if (C.$$typeof === H)
          return R(
            z,
            x,
            zu(z, C),
            G
          );
        Nu(z, C);
      }
      return null;
    }
    function j(z, x, C, G, et) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return z = z.get(C) || null, y(x, z, "" + G, et);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case E:
            return z = z.get(
              G.key === null ? C : G.key
            ) || null, S(x, z, G, et);
          case N:
            return z = z.get(
              G.key === null ? C : G.key
            ) || null, D(x, z, G, et);
          case F:
            return G = Rn(G), j(
              z,
              x,
              C,
              G,
              et
            );
        }
        if (ot(G) || nt(G))
          return z = z.get(C) || null, Y(x, z, G, et, null);
        if (typeof G.then == "function")
          return j(
            z,
            x,
            C,
            Mu(G),
            et
          );
        if (G.$$typeof === H)
          return j(
            z,
            x,
            C,
            zu(x, G),
            et
          );
        Nu(x, G);
      }
      return null;
    }
    function I(z, x, C, G) {
      for (var et = null, xt = null, tt = x, mt = x = 0, bt = null; tt !== null && mt < C.length; mt++) {
        tt.index > mt ? (bt = tt, tt = null) : bt = tt.sibling;
        var At = R(
          z,
          tt,
          C[mt],
          G
        );
        if (At === null) {
          tt === null && (tt = bt);
          break;
        }
        t && tt && At.alternate === null && e(z, tt), x = c(At, x, mt), xt === null ? et = At : xt.sibling = At, xt = At, tt = bt;
      }
      if (mt === C.length)
        return l(z, tt), St && Sl(z, mt), et;
      if (tt === null) {
        for (; mt < C.length; mt++)
          tt = Q(z, C[mt], G), tt !== null && (x = c(
            tt,
            x,
            mt
          ), xt === null ? et = tt : xt.sibling = tt, xt = tt);
        return St && Sl(z, mt), et;
      }
      for (tt = n(tt); mt < C.length; mt++)
        bt = j(
          tt,
          z,
          mt,
          C[mt],
          G
        ), bt !== null && (t && bt.alternate !== null && tt.delete(
          bt.key === null ? mt : bt.key
        ), x = c(
          bt,
          x,
          mt
        ), xt === null ? et = bt : xt.sibling = bt, xt = bt);
      return t && tt.forEach(function(rn) {
        return e(z, rn);
      }), St && Sl(z, mt), et;
    }
    function at(z, x, C, G) {
      if (C == null) throw Error(i(151));
      for (var et = null, xt = null, tt = x, mt = x = 0, bt = null, At = C.next(); tt !== null && !At.done; mt++, At = C.next()) {
        tt.index > mt ? (bt = tt, tt = null) : bt = tt.sibling;
        var rn = R(z, tt, At.value, G);
        if (rn === null) {
          tt === null && (tt = bt);
          break;
        }
        t && tt && rn.alternate === null && e(z, tt), x = c(rn, x, mt), xt === null ? et = rn : xt.sibling = rn, xt = rn, tt = bt;
      }
      if (At.done)
        return l(z, tt), St && Sl(z, mt), et;
      if (tt === null) {
        for (; !At.done; mt++, At = C.next())
          At = Q(z, At.value, G), At !== null && (x = c(At, x, mt), xt === null ? et = At : xt.sibling = At, xt = At);
        return St && Sl(z, mt), et;
      }
      for (tt = n(tt); !At.done; mt++, At = C.next())
        At = j(tt, z, mt, At.value, G), At !== null && (t && At.alternate !== null && tt.delete(At.key === null ? mt : At.key), x = c(At, x, mt), xt === null ? et = At : xt.sibling = At, xt = At);
      return t && tt.forEach(function(iy) {
        return e(z, iy);
      }), St && Sl(z, mt), et;
    }
    function Nt(z, x, C, G) {
      if (typeof C == "object" && C !== null && C.type === b && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case E:
            t: {
              for (var et = C.key; x !== null; ) {
                if (x.key === et) {
                  if (et = C.type, et === b) {
                    if (x.tag === 7) {
                      l(
                        z,
                        x.sibling
                      ), G = u(
                        x,
                        C.props.children
                      ), G.return = z, z = G;
                      break t;
                    }
                  } else if (x.elementType === et || typeof et == "object" && et !== null && et.$$typeof === F && Rn(et) === x.type) {
                    l(
                      z,
                      x.sibling
                    ), G = u(x, C.props), oi(G, C), G.return = z, z = G;
                    break t;
                  }
                  l(z, x);
                  break;
                } else e(z, x);
                x = x.sibling;
              }
              C.type === b ? (G = On(
                C.props.children,
                z.mode,
                G,
                C.key
              ), G.return = z, z = G) : (G = xu(
                C.type,
                C.key,
                C.props,
                null,
                z.mode,
                G
              ), oi(G, C), G.return = z, z = G);
            }
            return o(z);
          case N:
            t: {
              for (et = C.key; x !== null; ) {
                if (x.key === et)
                  if (x.tag === 4 && x.stateNode.containerInfo === C.containerInfo && x.stateNode.implementation === C.implementation) {
                    l(
                      z,
                      x.sibling
                    ), G = u(x, C.children || []), G.return = z, z = G;
                    break t;
                  } else {
                    l(z, x);
                    break;
                  }
                else e(z, x);
                x = x.sibling;
              }
              G = Ac(C, z.mode, G), G.return = z, z = G;
            }
            return o(z);
          case F:
            return C = Rn(C), Nt(
              z,
              x,
              C,
              G
            );
        }
        if (ot(C))
          return I(
            z,
            x,
            C,
            G
          );
        if (nt(C)) {
          if (et = nt(C), typeof et != "function") throw Error(i(150));
          return C = et.call(C), at(
            z,
            x,
            C,
            G
          );
        }
        if (typeof C.then == "function")
          return Nt(
            z,
            x,
            Mu(C),
            G
          );
        if (C.$$typeof === H)
          return Nt(
            z,
            x,
            zu(z, C),
            G
          );
        Nu(z, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, x !== null && x.tag === 6 ? (l(z, x.sibling), G = u(x, C), G.return = z, z = G) : (l(z, x), G = xc(C, z.mode, G), G.return = z, z = G), o(z)) : l(z, x);
    }
    return function(z, x, C, G) {
      try {
        ri = 0;
        var et = Nt(
          z,
          x,
          C,
          G
        );
        return ma = null, et;
      } catch (tt) {
        if (tt === _a || tt === Cu) throw tt;
        var xt = je(29, tt, null, z.mode);
        return xt.lanes = G, xt.return = z, xt;
      }
    };
  }
  var jn = bh(!0), Sh = bh(!1), Kl = !1;
  function Bc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Jl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function kl(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Et & 2) !== 0) {
      var u = n.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), n.pending = e, e = Tu(t), ah(t, null, l), e;
    }
    return Su(t, n, e, l), Tu(t);
  }
  function hi(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, oo(t, l);
    }
  }
  function Yc(t, e) {
    var l = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var u = null, c = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var o = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          c === null ? u = c = o : c = c.next = o, l = l.next;
        } while (l !== null);
        c === null ? u = c = e : c = c.next = e;
      } else u = c = e;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: n.shared,
        callbacks: n.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var qc = !1;
  function di() {
    if (qc) {
      var t = da;
      if (t !== null) throw t;
    }
  }
  function _i(t, e, l, n) {
    qc = !1;
    var u = t.updateQueue;
    Kl = !1;
    var c = u.firstBaseUpdate, o = u.lastBaseUpdate, y = u.shared.pending;
    if (y !== null) {
      u.shared.pending = null;
      var S = y, D = S.next;
      S.next = null, o === null ? c = D : o.next = D, o = S;
      var Y = t.alternate;
      Y !== null && (Y = Y.updateQueue, y = Y.lastBaseUpdate, y !== o && (y === null ? Y.firstBaseUpdate = D : y.next = D, Y.lastBaseUpdate = S));
    }
    if (c !== null) {
      var Q = u.baseState;
      o = 0, Y = D = S = null, y = c;
      do {
        var R = y.lane & -536870913, j = R !== y.lane;
        if (j ? (vt & R) === R : (n & R) === R) {
          R !== 0 && R === ha && (qc = !0), Y !== null && (Y = Y.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          t: {
            var I = t, at = y;
            R = e;
            var Nt = l;
            switch (at.tag) {
              case 1:
                if (I = at.payload, typeof I == "function") {
                  Q = I.call(Nt, Q, R);
                  break t;
                }
                Q = I;
                break t;
              case 3:
                I.flags = I.flags & -65537 | 128;
              case 0:
                if (I = at.payload, R = typeof I == "function" ? I.call(Nt, Q, R) : I, R == null) break t;
                Q = v({}, Q, R);
                break t;
              case 2:
                Kl = !0;
            }
          }
          R = y.callback, R !== null && (t.flags |= 64, j && (t.flags |= 8192), j = u.callbacks, j === null ? u.callbacks = [R] : j.push(R));
        } else
          j = {
            lane: R,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, Y === null ? (D = Y = j, S = Q) : Y = Y.next = j, o |= R;
        if (y = y.next, y === null) {
          if (y = u.shared.pending, y === null)
            break;
          j = y, y = j.next, j.next = null, u.lastBaseUpdate = j, u.shared.pending = null;
        }
      } while (!0);
      Y === null && (S = Q), u.baseState = S, u.firstBaseUpdate = D, u.lastBaseUpdate = Y, c === null && (u.shared.lanes = 0), Il |= o, t.lanes = o, t.memoizedState = Q;
    }
  }
  function Th(t, e) {
    if (typeof t != "function")
      throw Error(i(191, t));
    t.call(e);
  }
  function xh(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Th(l[t], e);
  }
  var ga = T(null), Ru = T(0);
  function Ah(t, e) {
    t = Rl, W(Ru, t), W(ga, e), Rl = t | e.baseLanes;
  }
  function Lc() {
    W(Ru, Rl), W(ga, ga.current);
  }
  function Vc() {
    Rl = Ru.current, q(ga), q(Ru);
  }
  var we = T(null), tl = null;
  function Fl(t) {
    var e = t.alternate;
    W(Kt, Kt.current & 1), W(we, t), tl === null && (e === null || ga.current !== null || e.memoizedState !== null) && (tl = t);
  }
  function Gc(t) {
    W(Kt, Kt.current), W(we, t), tl === null && (tl = t);
  }
  function Eh(t) {
    t.tag === 22 ? (W(Kt, Kt.current), W(we, t), tl === null && (tl = t)) : Wl();
  }
  function Wl() {
    W(Kt, Kt.current), W(we, we.current);
  }
  function Be(t) {
    q(we), tl === t && (tl = null), q(Kt);
  }
  var Kt = T(0);
  function Uu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || ks(l) || Fs(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Al = 0, _t = null, Dt = null, Wt = null, ju = !1, ya = !1, wn = !1, wu = 0, mi = 0, pa = null, Fm = 0;
  function Gt() {
    throw Error(i(321));
  }
  function Xc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Ue(t[l], e[l])) return !1;
    return !0;
  }
  function Qc(t, e, l, n, u, c) {
    return Al = c, _t = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? cd : is, wn = !1, c = l(n, u), wn = !1, ya && (c = Oh(
      e,
      l,
      n,
      u
    )), zh(t), c;
  }
  function zh(t) {
    M.H = pi;
    var e = Dt !== null && Dt.next !== null;
    if (Al = 0, Wt = Dt = _t = null, ju = !1, mi = 0, pa = null, e) throw Error(i(300));
    t === null || $t || (t = t.dependencies, t !== null && Eu(t) && ($t = !0));
  }
  function Oh(t, e, l, n) {
    _t = t;
    var u = 0;
    do {
      if (ya && (pa = null), mi = 0, ya = !1, 25 <= u) throw Error(i(301));
      if (u += 1, Wt = Dt = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      M.H = sd, c = e(l, n);
    } while (ya);
    return c;
  }
  function Wm() {
    var t = M.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? gi(e) : e, t = t.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== t && (_t.flags |= 1024), e;
  }
  function Zc() {
    var t = wu !== 0;
    return wu = 0, t;
  }
  function Kc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Jc(t) {
    if (ju) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ju = !1;
    }
    Al = 0, Wt = Dt = _t = null, ya = !1, mi = wu = 0, pa = null;
  }
  function me() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Wt === null ? _t.memoizedState = Wt = t : Wt = Wt.next = t, Wt;
  }
  function Jt() {
    if (Dt === null) {
      var t = _t.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Wt === null ? _t.memoizedState : Wt.next;
    if (e !== null)
      Wt = e, Dt = t;
    else {
      if (t === null)
        throw _t.alternate === null ? Error(i(467)) : Error(i(310));
      Dt = t, t = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
        next: null
      }, Wt === null ? _t.memoizedState = Wt = t : Wt = Wt.next = t;
    }
    return Wt;
  }
  function Bu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function gi(t) {
    var e = mi;
    return mi += 1, pa === null && (pa = []), t = yh(pa, t, e), e = _t, (Wt === null ? e.memoizedState : Wt.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? cd : is), t;
  }
  function Hu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return gi(t);
      if (t.$$typeof === H) return ue(t);
    }
    throw Error(i(438, String(t)));
  }
  function kc(t) {
    var e = null, l = _t.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = _t.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Bu(), _t.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = lt;
    return e.index++, l;
  }
  function El(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Yu(t) {
    var e = Jt();
    return Fc(e, Dt, t);
  }
  function Fc(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = l;
    var u = t.baseQueue, c = n.pending;
    if (c !== null) {
      if (u !== null) {
        var o = u.next;
        u.next = c.next, c.next = o;
      }
      e.baseQueue = u = c, n.pending = null;
    }
    if (c = t.baseState, u === null) t.memoizedState = c;
    else {
      e = u.next;
      var y = o = null, S = null, D = e, Y = !1;
      do {
        var Q = D.lane & -536870913;
        if (Q !== D.lane ? (vt & Q) === Q : (Al & Q) === Q) {
          var R = D.revertLane;
          if (R === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), Q === ha && (Y = !0);
          else if ((Al & R) === R) {
            D = D.next, R === ha && (Y = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, S === null ? (y = S = Q, o = c) : S = S.next = Q, _t.lanes |= R, Il |= R;
          Q = D.action, wn && l(c, Q), c = D.hasEagerState ? D.eagerState : l(c, Q);
        } else
          R = {
            lane: Q,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, S === null ? (y = S = R, o = c) : S = S.next = R, _t.lanes |= Q, Il |= Q;
        D = D.next;
      } while (D !== null && D !== e);
      if (S === null ? o = c : S.next = y, !Ue(c, t.memoizedState) && ($t = !0, Y && (l = da, l !== null)))
        throw l;
      t.memoizedState = c, t.baseState = o, t.baseQueue = S, n.lastRenderedState = c;
    }
    return u === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Wc(t) {
    var e = Jt(), l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, u = l.pending, c = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var o = u = u.next;
      do
        c = t(c, o.action), o = o.next;
      while (o !== u);
      Ue(c, e.memoizedState) || ($t = !0), e.memoizedState = c, e.baseQueue === null && (e.baseState = c), l.lastRenderedState = c;
    }
    return [c, n];
  }
  function Ch(t, e, l) {
    var n = _t, u = Jt(), c = St;
    if (c) {
      if (l === void 0) throw Error(i(407));
      l = l();
    } else l = e();
    var o = !Ue(
      (Dt || u).memoizedState,
      l
    );
    if (o && (u.memoizedState = l, $t = !0), u = u.queue, Ic(Nh.bind(null, n, u, t), [
      t
    ]), u.getSnapshot !== e || o || Wt !== null && Wt.memoizedState.tag & 1) {
      if (n.flags |= 2048, va(
        9,
        { destroy: void 0 },
        Mh.bind(
          null,
          n,
          u,
          l,
          e
        ),
        null
      ), Rt === null) throw Error(i(349));
      c || (Al & 127) !== 0 || Dh(n, e, l);
    }
    return l;
  }
  function Dh(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = _t.updateQueue, e === null ? (e = Bu(), _t.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Mh(t, e, l, n) {
    e.value = l, e.getSnapshot = n, Rh(e) && Uh(t);
  }
  function Nh(t, e, l) {
    return l(function() {
      Rh(e) && Uh(t);
    });
  }
  function Rh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Ue(t, l);
    } catch {
      return !0;
    }
  }
  function Uh(t) {
    var e = zn(t, 2);
    e !== null && xe(e, t, 2);
  }
  function $c(t) {
    var e = me();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), wn) {
        ql(!0);
        try {
          l();
        } finally {
          ql(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: El,
      lastRenderedState: t
    }, e;
  }
  function jh(t, e, l, n) {
    return t.baseState = l, Fc(
      t,
      Dt,
      typeof n == "function" ? n : El
    );
  }
  function $m(t, e, l, n, u) {
    if (Vu(t)) throw Error(i(485));
    if (t = e.action, t !== null) {
      var c = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(o) {
          c.listeners.push(o);
        }
      };
      M.T !== null ? l(!0) : c.isTransition = !1, n(c), l = e.pending, l === null ? (c.next = e.pending = c, wh(e, c)) : (c.next = l.next, e.pending = l.next = c);
    }
  }
  function wh(t, e) {
    var l = e.action, n = e.payload, u = t.state;
    if (e.isTransition) {
      var c = M.T, o = {};
      M.T = o;
      try {
        var y = l(u, n), S = M.S;
        S !== null && S(o, y), Bh(t, e, y);
      } catch (D) {
        Pc(t, e, D);
      } finally {
        c !== null && o.types !== null && (c.types = o.types), M.T = c;
      }
    } else
      try {
        c = l(u, n), Bh(t, e, c);
      } catch (D) {
        Pc(t, e, D);
      }
  }
  function Bh(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        Hh(t, e, n);
      },
      function(n) {
        return Pc(t, e, n);
      }
    ) : Hh(t, e, l);
  }
  function Hh(t, e, l) {
    e.status = "fulfilled", e.value = l, Yh(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, wh(t, l)));
  }
  function Pc(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, Yh(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function Yh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function qh(t, e) {
    return e;
  }
  function Lh(t, e) {
    if (St) {
      var l = Rt.formState;
      if (l !== null) {
        t: {
          var n = _t;
          if (St) {
            if (wt) {
              e: {
                for (var u = wt, c = Ie; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break e;
                  }
                  if (u = el(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                c = u.data, u = c === "F!" || c === "F" ? u : null;
              }
              if (u) {
                wt = el(
                  u.nextSibling
                ), n = u.data === "F!";
                break t;
              }
            }
            Ql(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = me(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qh,
      lastRenderedState: e
    }, l.queue = n, l = id.bind(
      null,
      _t,
      n
    ), n.dispatch = l, n = $c(!1), c = as.bind(
      null,
      _t,
      !1,
      n.queue
    ), n = me(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = u, l = $m.bind(
      null,
      _t,
      u,
      c,
      l
    ), u.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function Vh(t) {
    var e = Jt();
    return Gh(e, Dt, t);
  }
  function Gh(t, e, l) {
    if (e = Fc(
      t,
      e,
      qh
    )[0], t = Yu(El)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = gi(e);
      } catch (o) {
        throw o === _a ? Cu : o;
      }
    else n = e;
    e = Jt();
    var u = e.queue, c = u.dispatch;
    return l !== e.memoizedState && (_t.flags |= 2048, va(
      9,
      { destroy: void 0 },
      Pm.bind(null, u, l),
      null
    )), [n, c, t];
  }
  function Pm(t, e) {
    t.action = e;
  }
  function Xh(t) {
    var e = Jt(), l = Dt;
    if (l !== null)
      return Gh(e, l, t);
    Jt(), e = e.memoizedState, l = Jt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function va(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = _t.updateQueue, e === null && (e = Bu(), _t.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function Qh() {
    return Jt().memoizedState;
  }
  function qu(t, e, l, n) {
    var u = me();
    _t.flags |= t, u.memoizedState = va(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Lu(t, e, l, n) {
    var u = Jt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState.inst;
    Dt !== null && n !== null && Xc(n, Dt.memoizedState.deps) ? u.memoizedState = va(e, c, l, n) : (_t.flags |= t, u.memoizedState = va(
      1 | e,
      c,
      l,
      n
    ));
  }
  function Zh(t, e) {
    qu(8390656, 8, t, e);
  }
  function Ic(t, e) {
    Lu(2048, 8, t, e);
  }
  function Im(t) {
    _t.flags |= 4;
    var e = _t.updateQueue;
    if (e === null)
      e = Bu(), _t.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Kh(t) {
    var e = Jt().memoizedState;
    return Im({ ref: e, nextImpl: t }), function() {
      if ((Et & 2) !== 0) throw Error(i(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Jh(t, e) {
    return Lu(4, 2, t, e);
  }
  function kh(t, e) {
    return Lu(4, 4, t, e);
  }
  function Fh(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Wh(t, e, l) {
    l = l != null ? l.concat([t]) : null, Lu(4, 4, Fh.bind(null, e, t), l);
  }
  function ts() {
  }
  function $h(t, e) {
    var l = Jt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Xc(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function Ph(t, e) {
    var l = Jt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Xc(e, n[1]))
      return n[0];
    if (n = t(), wn) {
      ql(!0);
      try {
        t();
      } finally {
        ql(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function es(t, e, l) {
    return l === void 0 || (Al & 1073741824) !== 0 && (vt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Id(), _t.lanes |= t, Il |= t, l);
  }
  function Ih(t, e, l, n) {
    return Ue(l, e) ? l : ga.current !== null ? (t = es(t, l, n), Ue(t, e) || ($t = !0), t) : (Al & 42) === 0 || (Al & 1073741824) !== 0 && (vt & 261930) === 0 ? ($t = !0, t.memoizedState = l) : (t = Id(), _t.lanes |= t, Il |= t, e);
  }
  function td(t, e, l, n, u) {
    var c = k.p;
    k.p = c !== 0 && 8 > c ? c : 8;
    var o = M.T, y = {};
    M.T = y, as(t, !1, e, l);
    try {
      var S = u(), D = M.S;
      if (D !== null && D(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var Y = km(
          S,
          n
        );
        yi(
          t,
          e,
          Y,
          qe(t)
        );
      } else
        yi(
          t,
          e,
          n,
          qe(t)
        );
    } catch (Q) {
      yi(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: Q },
        qe()
      );
    } finally {
      k.p = c, o !== null && y.types !== null && (o.types = y.types), M.T = o;
    }
  }
  function tg() {
  }
  function ls(t, e, l, n) {
    if (t.tag !== 5) throw Error(i(476));
    var u = ed(t).queue;
    td(
      t,
      u,
      e,
      P,
      l === null ? tg : function() {
        return ld(t), l(n);
      }
    );
  }
  function ed(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: El,
        lastRenderedState: P
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: El,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function ld(t) {
    var e = ed(t);
    e.next === null && (e = t.alternate.memoizedState), yi(
      t,
      e.next.queue,
      {},
      qe()
    );
  }
  function ns() {
    return ue(ji);
  }
  function nd() {
    return Jt().memoizedState;
  }
  function ad() {
    return Jt().memoizedState;
  }
  function eg(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = qe();
          t = Jl(l);
          var n = kl(e, t, l);
          n !== null && (xe(n, e, l), hi(n, e, l)), e = { cache: Rc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function lg(t, e, l) {
    var n = qe();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vu(t) ? ud(e, l) : (l = Sc(t, e, l, n), l !== null && (xe(l, t, n), fd(l, e, n)));
  }
  function id(t, e, l) {
    var n = qe();
    yi(t, e, l, n);
  }
  function yi(t, e, l, n) {
    var u = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Vu(t)) ud(e, u);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var o = e.lastRenderedState, y = c(o, l);
          if (u.hasEagerState = !0, u.eagerState = y, Ue(y, o))
            return Su(t, e, u, 0), Rt === null && bu(), !1;
        } catch {
        }
      if (l = Sc(t, e, u, n), l !== null)
        return xe(l, t, n), fd(l, e, n), !0;
    }
    return !1;
  }
  function as(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: Bs(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vu(t)) {
      if (e) throw Error(i(479));
    } else
      e = Sc(
        t,
        l,
        n,
        2
      ), e !== null && xe(e, t, 2);
  }
  function Vu(t) {
    var e = t.alternate;
    return t === _t || e !== null && e === _t;
  }
  function ud(t, e) {
    ya = ju = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function fd(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, oo(t, l);
    }
  }
  var pi = {
    readContext: ue,
    use: Hu,
    useCallback: Gt,
    useContext: Gt,
    useEffect: Gt,
    useImperativeHandle: Gt,
    useLayoutEffect: Gt,
    useInsertionEffect: Gt,
    useMemo: Gt,
    useReducer: Gt,
    useRef: Gt,
    useState: Gt,
    useDebugValue: Gt,
    useDeferredValue: Gt,
    useTransition: Gt,
    useSyncExternalStore: Gt,
    useId: Gt,
    useHostTransitionStatus: Gt,
    useFormState: Gt,
    useActionState: Gt,
    useOptimistic: Gt,
    useMemoCache: Gt,
    useCacheRefresh: Gt
  };
  pi.useEffectEvent = Gt;
  var cd = {
    readContext: ue,
    use: Hu,
    useCallback: function(t, e) {
      return me().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ue,
    useEffect: Zh,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, qu(
        4194308,
        4,
        Fh.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return qu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      qu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = me();
      e = e === void 0 ? null : e;
      var n = t();
      if (wn) {
        ql(!0);
        try {
          t();
        } finally {
          ql(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = me();
      if (l !== void 0) {
        var u = l(e);
        if (wn) {
          ql(!0);
          try {
            l(e);
          } finally {
            ql(!1);
          }
        }
      } else u = e;
      return n.memoizedState = n.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, n.queue = t, t = t.dispatch = lg.bind(
        null,
        _t,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = me();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = $c(t);
      var e = t.queue, l = id.bind(null, _t, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: ts,
    useDeferredValue: function(t, e) {
      var l = me();
      return es(l, t, e);
    },
    useTransition: function() {
      var t = $c(!1);
      return t = td.bind(
        null,
        _t,
        t.queue,
        !0,
        !1
      ), me().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = _t, u = me();
      if (St) {
        if (l === void 0)
          throw Error(i(407));
        l = l();
      } else {
        if (l = e(), Rt === null)
          throw Error(i(349));
        (vt & 127) !== 0 || Dh(n, e, l);
      }
      u.memoizedState = l;
      var c = { value: l, getSnapshot: e };
      return u.queue = c, Zh(Nh.bind(null, n, c, t), [
        t
      ]), n.flags |= 2048, va(
        9,
        { destroy: void 0 },
        Mh.bind(
          null,
          n,
          c,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = me(), e = Rt.identifierPrefix;
      if (St) {
        var l = rl, n = sl;
        l = (n & ~(1 << 32 - Re(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = wu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = Fm++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: ns,
    useFormState: Lh,
    useActionState: Lh,
    useOptimistic: function(t) {
      var e = me();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = as.bind(
        null,
        _t,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: kc,
    useCacheRefresh: function() {
      return me().memoizedState = eg.bind(
        null,
        _t
      );
    },
    useEffectEvent: function(t) {
      var e = me(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((Et & 2) !== 0)
          throw Error(i(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, is = {
    readContext: ue,
    use: Hu,
    useCallback: $h,
    useContext: ue,
    useEffect: Ic,
    useImperativeHandle: Wh,
    useInsertionEffect: Jh,
    useLayoutEffect: kh,
    useMemo: Ph,
    useReducer: Yu,
    useRef: Qh,
    useState: function() {
      return Yu(El);
    },
    useDebugValue: ts,
    useDeferredValue: function(t, e) {
      var l = Jt();
      return Ih(
        l,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Yu(El)[0], e = Jt().memoizedState;
      return [
        typeof t == "boolean" ? t : gi(t),
        e
      ];
    },
    useSyncExternalStore: Ch,
    useId: nd,
    useHostTransitionStatus: ns,
    useFormState: Vh,
    useActionState: Vh,
    useOptimistic: function(t, e) {
      var l = Jt();
      return jh(l, Dt, t, e);
    },
    useMemoCache: kc,
    useCacheRefresh: ad
  };
  is.useEffectEvent = Kh;
  var sd = {
    readContext: ue,
    use: Hu,
    useCallback: $h,
    useContext: ue,
    useEffect: Ic,
    useImperativeHandle: Wh,
    useInsertionEffect: Jh,
    useLayoutEffect: kh,
    useMemo: Ph,
    useReducer: Wc,
    useRef: Qh,
    useState: function() {
      return Wc(El);
    },
    useDebugValue: ts,
    useDeferredValue: function(t, e) {
      var l = Jt();
      return Dt === null ? es(l, t, e) : Ih(
        l,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Wc(El)[0], e = Jt().memoizedState;
      return [
        typeof t == "boolean" ? t : gi(t),
        e
      ];
    },
    useSyncExternalStore: Ch,
    useId: nd,
    useHostTransitionStatus: ns,
    useFormState: Xh,
    useActionState: Xh,
    useOptimistic: function(t, e) {
      var l = Jt();
      return Dt !== null ? jh(l, Dt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: kc,
    useCacheRefresh: ad
  };
  sd.useEffectEvent = Kh;
  function us(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : v({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var fs = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = qe(), u = Jl(n);
      u.payload = e, l != null && (u.callback = l), e = kl(t, u, n), e !== null && (xe(e, t, n), hi(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = qe(), u = Jl(n);
      u.tag = 1, u.payload = e, l != null && (u.callback = l), e = kl(t, u, n), e !== null && (xe(e, t, n), hi(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = qe(), n = Jl(l);
      n.tag = 2, e != null && (n.callback = e), e = kl(t, n, l), e !== null && (xe(e, t, l), hi(e, t, l));
    }
  };
  function rd(t, e, l, n, u, c, o) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, c, o) : e.prototype && e.prototype.isPureReactComponent ? !ai(l, n) || !ai(u, c) : !0;
  }
  function od(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && fs.enqueueReplaceState(e, e.state, null);
  }
  function Bn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = v({}, l));
      for (var u in t)
        l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  function hd(t) {
    vu(t);
  }
  function dd(t) {
    console.error(t);
  }
  function _d(t) {
    vu(t);
  }
  function Gu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function md(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function cs(t, e, l) {
    return l = Jl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Gu(t, e);
    }, l;
  }
  function gd(t) {
    return t = Jl(t), t.tag = 3, t;
  }
  function yd(t, e, l, n) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = n.value;
      t.payload = function() {
        return u(c);
      }, t.callback = function() {
        md(e, l, n);
      };
    }
    var o = l.stateNode;
    o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      md(e, l, n), typeof u != "function" && (tn === null ? tn = /* @__PURE__ */ new Set([this]) : tn.add(this));
      var y = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function ng(t, e, l, n, u) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && oa(
        e,
        l,
        u,
        !0
      ), l = we.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return tl === null ? tf() : l.alternate === null && Xt === 0 && (Xt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = u, n === Du ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Us(t, n, u)), !1;
          case 22:
            return l.flags |= 65536, n === Du ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Us(t, n, u)), !1;
        }
        throw Error(i(435, l.tag));
      }
      return Us(t, n, u), tf(), !1;
    }
    if (St)
      return e = we.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, n !== Oc && (t = Error(i(422), { cause: n }), fi(We(t, l)))) : (n !== Oc && (e = Error(i(423), {
        cause: n
      }), fi(
        We(e, l)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, n = We(n, l), u = cs(
        t.stateNode,
        n,
        u
      ), Yc(t, u), Xt !== 4 && (Xt = 2)), !1;
    var c = Error(i(520), { cause: n });
    if (c = We(c, l), zi === null ? zi = [c] : zi.push(c), Xt !== 4 && (Xt = 2), e === null) return !0;
    n = We(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = u & -u, l.lanes |= t, t = cs(l.stateNode, n, t), Yc(l, t), !1;
        case 1:
          if (e = l.type, c = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (tn === null || !tn.has(c))))
            return l.flags |= 65536, u &= -u, l.lanes |= u, u = gd(u), yd(
              u,
              t,
              l,
              n
            ), Yc(l, u), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ss = Error(i(461)), $t = !1;
  function fe(t, e, l, n) {
    e.child = t === null ? Sh(e, null, l, n) : jn(
      e,
      t.child,
      l,
      n
    );
  }
  function pd(t, e, l, n, u) {
    l = l.render;
    var c = e.ref;
    if ("ref" in n) {
      var o = {};
      for (var y in n)
        y !== "ref" && (o[y] = n[y]);
    } else o = n;
    return Mn(e), n = Qc(
      t,
      e,
      l,
      o,
      c,
      u
    ), y = Zc(), t !== null && !$t ? (Kc(t, e, u), zl(t, e, u)) : (St && y && Ec(e), e.flags |= 1, fe(t, e, n, u), e.child);
  }
  function vd(t, e, l, n, u) {
    if (t === null) {
      var c = l.type;
      return typeof c == "function" && !Tc(c) && c.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = c, bd(
        t,
        e,
        c,
        n,
        u
      )) : (t = xu(
        l.type,
        null,
        n,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (c = t.child, !ys(t, u)) {
      var o = c.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ai, l(o, n) && t.ref === e.ref)
        return zl(t, e, u);
    }
    return e.flags |= 1, t = bl(c, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function bd(t, e, l, n, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (ai(c, n) && t.ref === e.ref)
        if ($t = !1, e.pendingProps = n = c, ys(t, u))
          (t.flags & 131072) !== 0 && ($t = !0);
        else
          return e.lanes = t.lanes, zl(t, e, u);
    }
    return rs(
      t,
      e,
      l,
      n,
      u
    );
  }
  function Sd(t, e, l, n) {
    var u = n.children, c = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (c = c !== null ? c.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, u = 0; n !== null; )
            u = u | n.lanes | n.childLanes, n = n.sibling;
          n = u & ~c;
        } else n = 0, e.child = null;
        return Td(
          t,
          e,
          c,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ou(
          e,
          c !== null ? c.cachePool : null
        ), c !== null ? Ah(e, c) : Lc(), Eh(e);
      else
        return n = e.lanes = 536870912, Td(
          t,
          e,
          c !== null ? c.baseLanes | l : l,
          l,
          n
        );
    } else
      c !== null ? (Ou(e, c.cachePool), Ah(e, c), Wl(), e.memoizedState = null) : (t !== null && Ou(e, null), Lc(), Wl());
    return fe(t, e, u, l), e.child;
  }
  function vi(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Td(t, e, l, n, u) {
    var c = jc();
    return c = c === null ? null : { parent: Ft._currentValue, pool: c }, e.memoizedState = {
      baseLanes: l,
      cachePool: c
    }, t !== null && Ou(e, null), Lc(), Eh(e), t !== null && oa(t, e, n, !0), e.childLanes = u, null;
  }
  function Xu(t, e) {
    return e = Zu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function xd(t, e, l) {
    return jn(e, t.child, null, l), t = Xu(e, e.pendingProps), t.flags |= 2, Be(e), e.memoizedState = null, t;
  }
  function ag(t, e, l) {
    var n = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (St) {
        if (n.mode === "hidden")
          return t = Xu(e, n), e.lanes = 536870912, vi(null, t);
        if (Gc(e), (t = wt) ? (t = w0(
          t,
          Ie
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Gl !== null ? { id: sl, overflow: rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = uh(t), l.return = e, e.child = l, ie = e, wt = null)) : t = null, t === null) throw Ql(e);
        return e.lanes = 536870912, null;
      }
      return Xu(e, n);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var o = c.dehydrated;
      if (Gc(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = xd(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(i(558));
      else if ($t || oa(t, e, l, !1), u = (l & t.childLanes) !== 0, $t || u) {
        if (n = Rt, n !== null && (o = ho(n, l), o !== 0 && o !== c.retryLane))
          throw c.retryLane = o, zn(t, o), xe(n, t, o), ss;
        tf(), e = xd(
          t,
          e,
          l
        );
      } else
        t = c.treeContext, wt = el(o.nextSibling), ie = e, St = !0, Xl = null, Ie = !1, t !== null && sh(e, t), e = Xu(e, n), e.flags |= 4096;
      return e;
    }
    return t = bl(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Qu(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(i(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function rs(t, e, l, n, u) {
    return Mn(e), l = Qc(
      t,
      e,
      l,
      n,
      void 0,
      u
    ), n = Zc(), t !== null && !$t ? (Kc(t, e, u), zl(t, e, u)) : (St && n && Ec(e), e.flags |= 1, fe(t, e, l, u), e.child);
  }
  function Ad(t, e, l, n, u, c) {
    return Mn(e), e.updateQueue = null, l = Oh(
      e,
      n,
      l,
      u
    ), zh(t), n = Zc(), t !== null && !$t ? (Kc(t, e, c), zl(t, e, c)) : (St && n && Ec(e), e.flags |= 1, fe(t, e, l, c), e.child);
  }
  function Ed(t, e, l, n, u) {
    if (Mn(e), e.stateNode === null) {
      var c = fa, o = l.contextType;
      typeof o == "object" && o !== null && (c = ue(o)), c = new l(n, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = fs, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = n, c.state = e.memoizedState, c.refs = {}, Bc(e), o = l.contextType, c.context = typeof o == "object" && o !== null ? ue(o) : fa, c.state = e.memoizedState, o = l.getDerivedStateFromProps, typeof o == "function" && (us(
        e,
        l,
        o,
        n
      ), c.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (o = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), o !== c.state && fs.enqueueReplaceState(c, c.state, null), _i(e, n, c, u), di(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      c = e.stateNode;
      var y = e.memoizedProps, S = Bn(l, y);
      c.props = S;
      var D = c.context, Y = l.contextType;
      o = fa, typeof Y == "object" && Y !== null && (o = ue(Y));
      var Q = l.getDerivedStateFromProps;
      Y = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function", y = e.pendingProps !== y, Y || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y || D !== o) && od(
        e,
        c,
        n,
        o
      ), Kl = !1;
      var R = e.memoizedState;
      c.state = R, _i(e, n, c, u), di(), D = e.memoizedState, y || R !== D || Kl ? (typeof Q == "function" && (us(
        e,
        l,
        Q,
        n
      ), D = e.memoizedState), (S = Kl || rd(
        e,
        l,
        S,
        n,
        R,
        D,
        o
      )) ? (Y || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = D), c.props = n, c.state = D, c.context = o, n = S) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      c = e.stateNode, Hc(t, e), o = e.memoizedProps, Y = Bn(l, o), c.props = Y, Q = e.pendingProps, R = c.context, D = l.contextType, S = fa, typeof D == "object" && D !== null && (S = ue(D)), y = l.getDerivedStateFromProps, (D = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (o !== Q || R !== S) && od(
        e,
        c,
        n,
        S
      ), Kl = !1, R = e.memoizedState, c.state = R, _i(e, n, c, u), di();
      var j = e.memoizedState;
      o !== Q || R !== j || Kl || t !== null && t.dependencies !== null && Eu(t.dependencies) ? (typeof y == "function" && (us(
        e,
        l,
        y,
        n
      ), j = e.memoizedState), (Y = Kl || rd(
        e,
        l,
        Y,
        n,
        R,
        j,
        S
      ) || t !== null && t.dependencies !== null && Eu(t.dependencies)) ? (D || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(n, j, S), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        n,
        j,
        S
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || o === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = j), c.props = n, c.state = j, c.context = S, n = Y) : (typeof c.componentDidUpdate != "function" || o === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return c = n, Qu(t, e), n = (e.flags & 128) !== 0, c || n ? (c = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : c.render(), e.flags |= 1, t !== null && n ? (e.child = jn(
      e,
      t.child,
      null,
      u
    ), e.child = jn(
      e,
      null,
      l,
      u
    )) : fe(t, e, l, u), e.memoizedState = c.state, t = e.child) : t = zl(
      t,
      e,
      u
    ), t;
  }
  function zd(t, e, l, n) {
    return Cn(), e.flags |= 256, fe(t, e, l, n), e.child;
  }
  var os = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function hs(t) {
    return { baseLanes: t, cachePool: mh() };
  }
  function ds(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Ye), t;
  }
  function Od(t, e, l) {
    var n = e.pendingProps, u = !1, c = (e.flags & 128) !== 0, o;
    if ((o = c) || (o = t !== null && t.memoizedState === null ? !1 : (Kt.current & 2) !== 0), o && (u = !0, e.flags &= -129), o = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (St) {
        if (u ? Fl(e) : Wl(), (t = wt) ? (t = w0(
          t,
          Ie
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Gl !== null ? { id: sl, overflow: rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = uh(t), l.return = e, e.child = l, ie = e, wt = null)) : t = null, t === null) throw Ql(e);
        return Fs(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var y = n.children;
      return n = n.fallback, u ? (Wl(), u = e.mode, y = Zu(
        { mode: "hidden", children: y },
        u
      ), n = On(
        n,
        u,
        l,
        null
      ), y.return = e, n.return = e, y.sibling = n, e.child = y, n = e.child, n.memoizedState = hs(l), n.childLanes = ds(
        t,
        o,
        l
      ), e.memoizedState = os, vi(null, n)) : (Fl(e), _s(e, y));
    }
    var S = t.memoizedState;
    if (S !== null && (y = S.dehydrated, y !== null)) {
      if (c)
        e.flags & 256 ? (Fl(e), e.flags &= -257, e = ms(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (Wl(), e.child = t.child, e.flags |= 128, e = null) : (Wl(), y = n.fallback, u = e.mode, n = Zu(
          { mode: "visible", children: n.children },
          u
        ), y = On(
          y,
          u,
          l,
          null
        ), y.flags |= 2, n.return = e, y.return = e, n.sibling = y, e.child = n, jn(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = hs(l), n.childLanes = ds(
          t,
          o,
          l
        ), e.memoizedState = os, e = vi(null, n));
      else if (Fl(e), Fs(y)) {
        if (o = y.nextSibling && y.nextSibling.dataset, o) var D = o.dgst;
        o = D, n = Error(i(419)), n.stack = "", n.digest = o, fi({ value: n, source: null, stack: null }), e = ms(
          t,
          e,
          l
        );
      } else if ($t || oa(t, e, l, !1), o = (l & t.childLanes) !== 0, $t || o) {
        if (o = Rt, o !== null && (n = ho(o, l), n !== 0 && n !== S.retryLane))
          throw S.retryLane = n, zn(t, n), xe(o, t, n), ss;
        ks(y) || tf(), e = ms(
          t,
          e,
          l
        );
      } else
        ks(y) ? (e.flags |= 192, e.child = t.child, e = null) : (t = S.treeContext, wt = el(
          y.nextSibling
        ), ie = e, St = !0, Xl = null, Ie = !1, t !== null && sh(e, t), e = _s(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (Wl(), y = n.fallback, u = e.mode, S = t.child, D = S.sibling, n = bl(S, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = S.subtreeFlags & 65011712, D !== null ? y = bl(
      D,
      y
    ) : (y = On(
      y,
      u,
      l,
      null
    ), y.flags |= 2), y.return = e, n.return = e, n.sibling = y, e.child = n, vi(null, n), n = e.child, y = t.child.memoizedState, y === null ? y = hs(l) : (u = y.cachePool, u !== null ? (S = Ft._currentValue, u = u.parent !== S ? { parent: S, pool: S } : u) : u = mh(), y = {
      baseLanes: y.baseLanes | l,
      cachePool: u
    }), n.memoizedState = y, n.childLanes = ds(
      t,
      o,
      l
    ), e.memoizedState = os, vi(t.child, n)) : (Fl(e), l = t.child, t = l.sibling, l = bl(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (o = e.deletions, o === null ? (e.deletions = [t], e.flags |= 16) : o.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function _s(t, e) {
    return e = Zu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Zu(t, e) {
    return t = je(22, t, null, e), t.lanes = 0, t;
  }
  function ms(t, e, l) {
    return jn(e, t.child, null, l), t = _s(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Cd(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), Mc(t.return, e, l);
  }
  function gs(t, e, l, n, u, c) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: u,
      treeForkCount: c
    } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = l, o.tailMode = u, o.treeForkCount = c);
  }
  function Dd(t, e, l) {
    var n = e.pendingProps, u = n.revealOrder, c = n.tail;
    n = n.children;
    var o = Kt.current, y = (o & 2) !== 0;
    if (y ? (o = o & 1 | 2, e.flags |= 128) : o &= 1, W(Kt, o), fe(t, e, n, l), n = St ? ui : 0, !y && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Cd(t, l, e);
        else if (t.tag === 19)
          Cd(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          t = l.alternate, t !== null && Uu(t) === null && (u = l), l = l.sibling;
        l = u, l === null ? (u = e.child, e.child = null) : (u = l.sibling, l.sibling = null), gs(
          e,
          !1,
          u,
          l,
          c,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Uu(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = l, l = u, u = t;
        }
        gs(
          e,
          !0,
          l,
          null,
          c,
          n
        );
        break;
      case "together":
        gs(
          e,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function zl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Il |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (oa(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(i(153));
    if (e.child !== null) {
      for (t = e.child, l = bl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = bl(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function ys(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Eu(t)));
  }
  function ig(t, e, l) {
    switch (e.tag) {
      case 3:
        _e(e, e.stateNode.containerInfo), Zl(e, Ft, t.memoizedState.cache), Cn();
        break;
      case 27:
      case 5:
        Za(e);
        break;
      case 4:
        _e(e, e.stateNode.containerInfo);
        break;
      case 10:
        Zl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Gc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Fl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Od(t, e, l) : (Fl(e), t = zl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Fl(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || (oa(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), u) {
          if (n)
            return Dd(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), W(Kt, Kt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, Sd(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        Zl(e, Ft, t.memoizedState.cache);
    }
    return zl(t, e, l);
  }
  function Md(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        $t = !0;
      else {
        if (!ys(t, l) && (e.flags & 128) === 0)
          return $t = !1, ig(
            t,
            e,
            l
          );
        $t = (t.flags & 131072) !== 0;
      }
    else
      $t = !1, St && (e.flags & 1048576) !== 0 && ch(e, ui, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = Rn(e.elementType), e.type = t, typeof t == "function")
            Tc(t) ? (n = Bn(t, n), e.tag = 1, e = Ed(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = rs(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === J) {
                e.tag = 11, e = pd(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (u === L) {
                e.tag = 14, e = vd(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              }
            }
            throw e = ct(t) || t, Error(i(306, e, ""));
          }
        }
        return e;
      case 0:
        return rs(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, u = Bn(
          n,
          e.pendingProps
        ), Ed(
          t,
          e,
          n,
          u,
          l
        );
      case 3:
        t: {
          if (_e(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(i(387));
          n = e.pendingProps;
          var c = e.memoizedState;
          u = c.element, Hc(t, e), _i(e, n, null, l);
          var o = e.memoizedState;
          if (n = o.cache, Zl(e, Ft, n), n !== c.cache && Nc(
            e,
            [Ft],
            l,
            !0
          ), di(), n = o.element, c.isDehydrated)
            if (c = {
              element: n,
              isDehydrated: !1,
              cache: o.cache
            }, e.updateQueue.baseState = c, e.memoizedState = c, e.flags & 256) {
              e = zd(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== u) {
              u = We(
                Error(i(424)),
                e
              ), fi(u), e = zd(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, wt = el(t.firstChild), ie = e, St = !0, Xl = null, Ie = !0, l = Sh(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Cn(), n === u) {
              e = zl(
                t,
                e,
                l
              );
              break t;
            }
            fe(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Qu(t, e), t === null ? (l = V0(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : St || (l = e.type, t = e.pendingProps, n = cf(
          gt.current
        ).createElement(l), n[ae] = e, n[ye] = t, ce(n, l, t), ee(n), e.stateNode = n) : e.memoizedState = V0(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Za(e), t === null && St && (n = e.stateNode = Y0(
          e.type,
          e.pendingProps,
          gt.current
        ), ie = e, Ie = !0, u = wt, an(e.type) ? (Ws = u, wt = el(n.firstChild)) : wt = u), fe(
          t,
          e,
          e.pendingProps.children,
          l
        ), Qu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && St && ((u = n = wt) && (n = wg(
          n,
          e.type,
          e.pendingProps,
          Ie
        ), n !== null ? (e.stateNode = n, ie = e, wt = el(n.firstChild), Ie = !1, u = !0) : u = !1), u || Ql(e)), Za(e), u = e.type, c = e.pendingProps, o = t !== null ? t.memoizedProps : null, n = c.children, Zs(u, c) ? n = null : o !== null && Zs(u, o) && (e.flags |= 32), e.memoizedState !== null && (u = Qc(
          t,
          e,
          Wm,
          null,
          null,
          l
        ), ji._currentValue = u), Qu(t, e), fe(t, e, n, l), e.child;
      case 6:
        return t === null && St && ((t = l = wt) && (l = Bg(
          l,
          e.pendingProps,
          Ie
        ), l !== null ? (e.stateNode = l, ie = e, wt = null, t = !0) : t = !1), t || Ql(e)), null;
      case 13:
        return Od(t, e, l);
      case 4:
        return _e(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = jn(
          e,
          null,
          n,
          l
        ) : fe(t, e, n, l), e.child;
      case 11:
        return pd(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return fe(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return fe(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return fe(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return n = e.pendingProps, Zl(e, e.type, n.value), fe(t, e, n.children, l), e.child;
      case 9:
        return u = e.type._context, n = e.pendingProps.children, Mn(e), u = ue(u), n = n(u), e.flags |= 1, fe(t, e, n, l), e.child;
      case 14:
        return vd(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return bd(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Dd(t, e, l);
      case 31:
        return ag(t, e, l);
      case 22:
        return Sd(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Mn(e), n = ue(Ft), t === null ? (u = jc(), u === null && (u = Rt, c = Rc(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= l), u = c), e.memoizedState = { parent: n, cache: u }, Bc(e), Zl(e, Ft, u)) : ((t.lanes & l) !== 0 && (Hc(t, e), _i(e, null, null, l), di()), u = t.memoizedState, c = e.memoizedState, u.parent !== n ? (u = { parent: n, cache: n }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Zl(e, Ft, n)) : (n = c.cache, Zl(e, Ft, n), n !== u.cache && Nc(
          e,
          [Ft],
          l,
          !0
        ))), fe(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(i(156, e.tag));
  }
  function Ol(t) {
    t.flags |= 4;
  }
  function ps(t, e, l, n, u) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (n0()) t.flags |= 8192;
        else
          throw Un = Du, wc;
    } else t.flags &= -16777217;
  }
  function Nd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !K0(e))
      if (n0()) t.flags |= 8192;
      else
        throw Un = Du, wc;
  }
  function Ku(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? so() : 536870912, t.lanes |= e, xa |= e);
  }
  function bi(t, e) {
    if (!St)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
      }
  }
  function Bt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e)
      for (var u = t.child; u !== null; )
        l |= u.lanes | u.childLanes, n |= u.subtreeFlags & 65011712, n |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        l |= u.lanes | u.childLanes, n |= u.subtreeFlags, n |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function ug(t, e, l) {
    var n = e.pendingProps;
    switch (zc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Bt(e), null;
      case 1:
        return Bt(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), xl(Ft), Zt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ra(e) ? Ol(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Cc())), Bt(e), null;
      case 26:
        var u = e.type, c = e.memoizedState;
        return t === null ? (Ol(e), c !== null ? (Bt(e), Nd(e, c)) : (Bt(e), ps(
          e,
          u,
          null,
          n,
          l
        ))) : c ? c !== t.memoizedState ? (Ol(e), Bt(e), Nd(e, c)) : (Bt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && Ol(e), Bt(e), ps(
          e,
          u,
          t,
          n,
          l
        )), null;
      case 27:
        if (nu(e), l = gt.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && Ol(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(i(166));
            return Bt(e), null;
          }
          t = $.current, ra(e) ? rh(e) : (t = Y0(u, n, l), e.stateNode = t, Ol(e));
        }
        return Bt(e), null;
      case 5:
        if (nu(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && Ol(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(i(166));
            return Bt(e), null;
          }
          if (c = $.current, ra(e))
            rh(e);
          else {
            var o = cf(
              gt.current
            );
            switch (c) {
              case 1:
                c = o.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                c = o.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    c = o.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    c = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    c = o.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(
                      c.firstChild
                    );
                    break;
                  case "select":
                    c = typeof n.is == "string" ? o.createElement("select", {
                      is: n.is
                    }) : o.createElement("select"), n.multiple ? c.multiple = !0 : n.size && (c.size = n.size);
                    break;
                  default:
                    c = typeof n.is == "string" ? o.createElement(u, { is: n.is }) : o.createElement(u);
                }
            }
            c[ae] = e, c[ye] = n;
            t: for (o = e.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6)
                c.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
              if (o === e) break t;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === e)
                  break t;
                o = o.return;
              }
              o.sibling.return = o.return, o = o.sibling;
            }
            e.stateNode = c;
            t: switch (ce(c, u, n), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && Ol(e);
          }
        }
        return Bt(e), ps(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && Ol(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(i(166));
          if (t = gt.current, ra(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, u = ie, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            t[ae] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || O0(t.nodeValue, l)), t || Ql(e, !0);
          } else
            t = cf(t).createTextNode(
              n
            ), t[ae] = e, e.stateNode = t;
        }
        return Bt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = ra(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(i(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(557));
              t[ae] = e;
            } else
              Cn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Bt(e), t = !1;
          } else
            l = Cc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Be(e), e) : (Be(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(i(558));
        }
        return Bt(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = ra(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(i(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[ae] = e;
            } else
              Cn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Bt(e), u = !1;
          } else
            u = Cc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (Be(e), e) : (Be(e), null);
        }
        return Be(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, u = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (u = n.alternate.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Ku(e, e.updateQueue), Bt(e), null);
      case 4:
        return Zt(), t === null && Ls(e.stateNode.containerInfo), Bt(e), null;
      case 10:
        return xl(e.type), Bt(e), null;
      case 19:
        if (q(Kt), n = e.memoizedState, n === null) return Bt(e), null;
        if (u = (e.flags & 128) !== 0, c = n.rendering, c === null)
          if (u) bi(n, !1);
          else {
            if (Xt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = Uu(t), c !== null) {
                  for (e.flags |= 128, bi(n, !1), t = c.updateQueue, e.updateQueue = t, Ku(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    ih(l, t), l = l.sibling;
                  return W(
                    Kt,
                    Kt.current & 1 | 2
                  ), St && Sl(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && Me() > $u && (e.flags |= 128, u = !0, bi(n, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = Uu(c), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, Ku(e, t), bi(n, !0), n.tail === null && n.tailMode === "hidden" && !c.alternate && !St)
                return Bt(e), null;
            } else
              2 * Me() - n.renderingStartTime > $u && l !== 536870912 && (e.flags |= 128, u = !0, bi(n, !1), e.lanes = 4194304);
          n.isBackwards ? (c.sibling = e.child, e.child = c) : (t = n.last, t !== null ? t.sibling = c : e.child = c, n.last = c);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Me(), t.sibling = null, l = Kt.current, W(
          Kt,
          u ? l & 1 | 2 : l & 1
        ), St && Sl(e, n.treeForkCount), t) : (Bt(e), null);
      case 22:
      case 23:
        return Be(e), Vc(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Bt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Bt(e), l = e.updateQueue, l !== null && Ku(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && q(Nn), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), xl(Ft), Bt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, e.tag));
  }
  function fg(t, e) {
    switch (zc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return xl(Ft), Zt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return nu(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Be(e), e.alternate === null)
            throw Error(i(340));
          Cn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Be(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(i(340));
          Cn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return q(Kt), null;
      case 4:
        return Zt(), null;
      case 10:
        return xl(e.type), null;
      case 22:
      case 23:
        return Be(e), Vc(), t !== null && q(Nn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return xl(Ft), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rd(t, e) {
    switch (zc(e), e.tag) {
      case 3:
        xl(Ft), Zt();
        break;
      case 26:
      case 27:
      case 5:
        nu(e);
        break;
      case 4:
        Zt();
        break;
      case 31:
        e.memoizedState !== null && Be(e);
        break;
      case 13:
        Be(e);
        break;
      case 19:
        q(Kt);
        break;
      case 10:
        xl(e.type);
        break;
      case 22:
      case 23:
        Be(e), Vc(), t !== null && q(Nn);
        break;
      case 24:
        xl(Ft);
    }
  }
  function Si(t, e) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var c = l.create, o = l.inst;
            n = c(), o.destroy = n;
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (y) {
      Ct(e, e.return, y);
    }
  }
  function $l(t, e, l) {
    try {
      var n = e.updateQueue, u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        n = c;
        do {
          if ((n.tag & t) === t) {
            var o = n.inst, y = o.destroy;
            if (y !== void 0) {
              o.destroy = void 0, u = e;
              var S = l, D = y;
              try {
                D();
              } catch (Y) {
                Ct(
                  u,
                  S,
                  Y
                );
              }
            }
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (Y) {
      Ct(e, e.return, Y);
    }
  }
  function Ud(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        xh(e, l);
      } catch (n) {
        Ct(t, t.return, n);
      }
    }
  }
  function jd(t, e, l) {
    l.props = Bn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Ct(t, e, n);
    }
  }
  function Ti(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(n) : l.current = n;
      }
    } catch (u) {
      Ct(t, e, u);
    }
  }
  function ol(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (u) {
          Ct(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          Ct(t, e, u);
        }
      else l.current = null;
  }
  function wd(t) {
    var e = t.type, l = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (u) {
      Ct(t, t.return, u);
    }
  }
  function vs(t, e, l) {
    try {
      var n = t.stateNode;
      Dg(n, t.type, l, e), n[ye] = e;
    } catch (u) {
      Ct(t, t.return, u);
    }
  }
  function Bd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && an(t.type) || t.tag === 4;
  }
  function bs(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Bd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && an(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ss(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = pl));
    else if (n !== 4 && (n === 27 && an(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Ss(t, e, l), t = t.sibling; t !== null; )
        Ss(t, e, l), t = t.sibling;
  }
  function Ju(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && an(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Ju(t, e, l), t = t.sibling; t !== null; )
        Ju(t, e, l), t = t.sibling;
  }
  function Hd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      ce(e, n, l), e[ae] = t, e[ye] = l;
    } catch (c) {
      Ct(t, t.return, c);
    }
  }
  var Cl = !1, Pt = !1, Ts = !1, Yd = typeof WeakSet == "function" ? WeakSet : Set, le = null;
  function cg(t, e) {
    if (t = t.containerInfo, Xs = mf, t = Wo(t), mc(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var u = n.anchorOffset, c = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, c.nodeType;
            } catch {
              l = null;
              break t;
            }
            var o = 0, y = -1, S = -1, D = 0, Y = 0, Q = t, R = null;
            e: for (; ; ) {
              for (var j; Q !== l || u !== 0 && Q.nodeType !== 3 || (y = o + u), Q !== c || n !== 0 && Q.nodeType !== 3 || (S = o + n), Q.nodeType === 3 && (o += Q.nodeValue.length), (j = Q.firstChild) !== null; )
                R = Q, Q = j;
              for (; ; ) {
                if (Q === t) break e;
                if (R === l && ++D === u && (y = o), R === c && ++Y === n && (S = o), (j = Q.nextSibling) !== null) break;
                Q = R, R = Q.parentNode;
              }
              Q = j;
            }
            l = y === -1 || S === -1 ? null : { start: y, end: S };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Qs = { focusedElem: t, selectionRange: l }, mf = !1, le = e; le !== null; )
      if (e = le, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, le = t;
      else
        for (; le !== null; ) {
          switch (e = le, c = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  u = t[l], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                t = void 0, l = e, u = c.memoizedProps, c = c.memoizedState, n = l.stateNode;
                try {
                  var I = Bn(
                    l.type,
                    u
                  );
                  t = n.getSnapshotBeforeUpdate(
                    I,
                    c
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (at) {
                  Ct(
                    l,
                    l.return,
                    at
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Js(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Js(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(i(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, le = t;
            break;
          }
          le = e.return;
        }
  }
  function qd(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ml(t, l), n & 4 && Si(5, l);
        break;
      case 1:
        if (Ml(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (o) {
              Ct(l, l.return, o);
            }
          else {
            var u = Bn(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (o) {
              Ct(
                l,
                l.return,
                o
              );
            }
          }
        n & 64 && Ud(l), n & 512 && Ti(l, l.return);
        break;
      case 3:
        if (Ml(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            xh(t, e);
          } catch (o) {
            Ct(l, l.return, o);
          }
        }
        break;
      case 27:
        e === null && n & 4 && Hd(l);
      case 26:
      case 5:
        Ml(t, l), e === null && n & 4 && wd(l), n & 512 && Ti(l, l.return);
        break;
      case 12:
        Ml(t, l);
        break;
      case 31:
        Ml(t, l), n & 4 && Gd(t, l);
        break;
      case 13:
        Ml(t, l), n & 4 && Xd(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = yg.bind(
          null,
          l
        ), Hg(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || Cl, !n) {
          e = e !== null && e.memoizedState !== null || Pt, u = Cl;
          var c = Pt;
          Cl = n, (Pt = e) && !c ? Nl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Ml(t, l), Cl = u, Pt = c;
        }
        break;
      case 30:
        break;
      default:
        Ml(t, l);
    }
  }
  function Ld(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Ld(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Pf(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ht = null, ve = !1;
  function Dl(t, e, l) {
    for (l = l.child; l !== null; )
      Vd(t, e, l), l = l.sibling;
  }
  function Vd(t, e, l) {
    if (Ne && typeof Ne.onCommitFiberUnmount == "function")
      try {
        Ne.onCommitFiberUnmount(Ka, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Pt || ol(l, e), Dl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Pt || ol(l, e);
        var n = Ht, u = ve;
        an(l.type) && (Ht = l.stateNode, ve = !1), Dl(
          t,
          e,
          l
        ), Ni(l.stateNode), Ht = n, ve = u;
        break;
      case 5:
        Pt || ol(l, e);
      case 6:
        if (n = Ht, u = ve, Ht = null, Dl(
          t,
          e,
          l
        ), Ht = n, ve = u, Ht !== null)
          if (ve)
            try {
              (Ht.nodeType === 9 ? Ht.body : Ht.nodeName === "HTML" ? Ht.ownerDocument.body : Ht).removeChild(l.stateNode);
            } catch (c) {
              Ct(
                l,
                e,
                c
              );
            }
          else
            try {
              Ht.removeChild(l.stateNode);
            } catch (c) {
              Ct(
                l,
                e,
                c
              );
            }
        break;
      case 18:
        Ht !== null && (ve ? (t = Ht, U0(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Na(t)) : U0(Ht, l.stateNode));
        break;
      case 4:
        n = Ht, u = ve, Ht = l.stateNode.containerInfo, ve = !0, Dl(
          t,
          e,
          l
        ), Ht = n, ve = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $l(2, l, e), Pt || $l(4, l, e), Dl(
          t,
          e,
          l
        );
        break;
      case 1:
        Pt || (ol(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && jd(
          l,
          e,
          n
        )), Dl(
          t,
          e,
          l
        );
        break;
      case 21:
        Dl(
          t,
          e,
          l
        );
        break;
      case 22:
        Pt = (n = Pt) || l.memoizedState !== null, Dl(
          t,
          e,
          l
        ), Pt = n;
        break;
      default:
        Dl(
          t,
          e,
          l
        );
    }
  }
  function Gd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Na(t);
      } catch (l) {
        Ct(e, e.return, l);
      }
    }
  }
  function Xd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Na(t);
      } catch (l) {
        Ct(e, e.return, l);
      }
  }
  function sg(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Yd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Yd()), e;
      default:
        throw Error(i(435, t.tag));
    }
  }
  function ku(t, e) {
    var l = sg(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var u = pg.bind(null, t, n);
        n.then(u, u);
      }
    });
  }
  function be(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var u = l[n], c = t, o = e, y = o;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (an(y.type)) {
                Ht = y.stateNode, ve = !1;
                break t;
              }
              break;
            case 5:
              Ht = y.stateNode, ve = !1;
              break t;
            case 3:
            case 4:
              Ht = y.stateNode.containerInfo, ve = !0;
              break t;
          }
          y = y.return;
        }
        if (Ht === null) throw Error(i(160));
        Vd(c, o, u), Ht = null, ve = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Qd(e, t), e = e.sibling;
  }
  var fl = null;
  function Qd(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        be(e, t), Se(t), n & 4 && ($l(3, t, t.return), Si(3, t), $l(5, t, t.return));
        break;
      case 1:
        be(e, t), Se(t), n & 512 && (Pt || l === null || ol(l, l.return)), n & 64 && Cl && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var u = fl;
        if (be(e, t), Se(t), n & 512 && (Pt || l === null || ol(l, l.return)), n & 4) {
          var c = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (n) {
                    case "title":
                      c = u.getElementsByTagName("title")[0], (!c || c[Fa] || c[ae] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(n), u.head.insertBefore(
                        c,
                        u.querySelector("head > title")
                      )), ce(c, n, l), c[ae] = t, ee(c), n = c;
                      break t;
                    case "link":
                      var o = Q0(
                        "link",
                        "href",
                        u
                      ).get(n + (l.href || ""));
                      if (o) {
                        for (var y = 0; y < o.length; y++)
                          if (c = o[y], c.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && c.getAttribute("rel") === (l.rel == null ? null : l.rel) && c.getAttribute("title") === (l.title == null ? null : l.title) && c.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            o.splice(y, 1);
                            break e;
                          }
                      }
                      c = u.createElement(n), ce(c, n, l), u.head.appendChild(c);
                      break;
                    case "meta":
                      if (o = Q0(
                        "meta",
                        "content",
                        u
                      ).get(n + (l.content || ""))) {
                        for (y = 0; y < o.length; y++)
                          if (c = o[y], c.getAttribute("content") === (l.content == null ? null : "" + l.content) && c.getAttribute("name") === (l.name == null ? null : l.name) && c.getAttribute("property") === (l.property == null ? null : l.property) && c.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && c.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            o.splice(y, 1);
                            break e;
                          }
                      }
                      c = u.createElement(n), ce(c, n, l), u.head.appendChild(c);
                      break;
                    default:
                      throw Error(i(468, n));
                  }
                  c[ae] = t, ee(c), n = c;
                }
                t.stateNode = n;
              } else
                Z0(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = X0(
                u,
                n,
                t.memoizedProps
              );
          else
            c !== n ? (c === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : c.count--, n === null ? Z0(
              u,
              t.type,
              t.stateNode
            ) : X0(
              u,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && vs(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        be(e, t), Se(t), n & 512 && (Pt || l === null || ol(l, l.return)), l !== null && n & 4 && vs(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (be(e, t), Se(t), n & 512 && (Pt || l === null || ol(l, l.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            ta(u, "");
          } catch (I) {
            Ct(t, t.return, I);
          }
        }
        n & 4 && t.stateNode != null && (u = t.memoizedProps, vs(
          t,
          u,
          l !== null ? l.memoizedProps : u
        )), n & 1024 && (Ts = !0);
        break;
      case 6:
        if (be(e, t), Se(t), n & 4) {
          if (t.stateNode === null)
            throw Error(i(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (I) {
            Ct(t, t.return, I);
          }
        }
        break;
      case 3:
        if (of = null, u = fl, fl = sf(e.containerInfo), be(e, t), fl = u, Se(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Na(e.containerInfo);
          } catch (I) {
            Ct(t, t.return, I);
          }
        Ts && (Ts = !1, Zd(t));
        break;
      case 4:
        n = fl, fl = sf(
          t.stateNode.containerInfo
        ), be(e, t), Se(t), fl = n;
        break;
      case 12:
        be(e, t), Se(t);
        break;
      case 31:
        be(e, t), Se(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ku(t, n)));
        break;
      case 13:
        be(e, t), Se(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Wu = Me()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ku(t, n)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var S = l !== null && l.memoizedState !== null, D = Cl, Y = Pt;
        if (Cl = D || u, Pt = Y || S, be(e, t), Pt = Y, Cl = D, Se(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (l === null || S || Cl || Pt || Hn(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                S = l = e;
                try {
                  if (c = S.stateNode, u)
                    o = c.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                  else {
                    y = S.stateNode;
                    var Q = S.memoizedProps.style, R = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                    y.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (I) {
                  Ct(S, S.return, I);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = u ? "" : S.memoizedProps;
                } catch (I) {
                  Ct(S, S.return, I);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                S = e;
                try {
                  var j = S.stateNode;
                  u ? j0(j, !0) : j0(S.stateNode, !1);
                } catch (I) {
                  Ct(S, S.return, I);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, ku(t, l))));
        break;
      case 19:
        be(e, t), Se(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ku(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        be(e, t), Se(t);
    }
  }
  function Se(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (Bd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(i(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode, c = bs(t);
            Ju(t, c, u);
            break;
          case 5:
            var o = l.stateNode;
            l.flags & 32 && (ta(o, ""), l.flags &= -33);
            var y = bs(t);
            Ju(t, y, o);
            break;
          case 3:
          case 4:
            var S = l.stateNode.containerInfo, D = bs(t);
            Ss(
              t,
              D,
              S
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (Y) {
        Ct(t, t.return, Y);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Zd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Zd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Ml(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        qd(t, e.alternate, e), e = e.sibling;
  }
  function Hn(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $l(4, e, e.return), Hn(e);
          break;
        case 1:
          ol(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && jd(
            e,
            e.return,
            l
          ), Hn(e);
          break;
        case 27:
          Ni(e.stateNode);
        case 26:
        case 5:
          ol(e, e.return), Hn(e);
          break;
        case 22:
          e.memoizedState === null && Hn(e);
          break;
        case 30:
          Hn(e);
          break;
        default:
          Hn(e);
      }
      t = t.sibling;
    }
  }
  function Nl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, u = t, c = e, o = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Nl(
            u,
            c,
            l
          ), Si(4, c);
          break;
        case 1:
          if (Nl(
            u,
            c,
            l
          ), n = c, u = n.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (D) {
              Ct(n, n.return, D);
            }
          if (n = c, u = n.updateQueue, u !== null) {
            var y = n.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  Th(S[u], y);
            } catch (D) {
              Ct(n, n.return, D);
            }
          }
          l && o & 64 && Ud(c), Ti(c, c.return);
          break;
        case 27:
          Hd(c);
        case 26:
        case 5:
          Nl(
            u,
            c,
            l
          ), l && n === null && o & 4 && wd(c), Ti(c, c.return);
          break;
        case 12:
          Nl(
            u,
            c,
            l
          );
          break;
        case 31:
          Nl(
            u,
            c,
            l
          ), l && o & 4 && Gd(u, c);
          break;
        case 13:
          Nl(
            u,
            c,
            l
          ), l && o & 4 && Xd(u, c);
          break;
        case 22:
          c.memoizedState === null && Nl(
            u,
            c,
            l
          ), Ti(c, c.return);
          break;
        case 30:
          break;
        default:
          Nl(
            u,
            c,
            l
          );
      }
      e = e.sibling;
    }
  }
  function xs(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && ci(l));
  }
  function As(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ci(t));
  }
  function cl(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Kd(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function Kd(t, e, l, n) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        cl(
          t,
          e,
          l,
          n
        ), u & 2048 && Si(9, e);
        break;
      case 1:
        cl(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        cl(
          t,
          e,
          l,
          n
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ci(t)));
        break;
      case 12:
        if (u & 2048) {
          cl(
            t,
            e,
            l,
            n
          ), t = e.stateNode;
          try {
            var c = e.memoizedProps, o = c.id, y = c.onPostCommit;
            typeof y == "function" && y(
              o,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (S) {
            Ct(e, e.return, S);
          }
        } else
          cl(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        cl(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        cl(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        c = e.stateNode, o = e.alternate, e.memoizedState !== null ? c._visibility & 2 ? cl(
          t,
          e,
          l,
          n
        ) : xi(t, e) : c._visibility & 2 ? cl(
          t,
          e,
          l,
          n
        ) : (c._visibility |= 2, ba(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && xs(o, e);
        break;
      case 24:
        cl(
          t,
          e,
          l,
          n
        ), u & 2048 && As(e.alternate, e);
        break;
      default:
        cl(
          t,
          e,
          l,
          n
        );
    }
  }
  function ba(t, e, l, n, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var c = t, o = e, y = l, S = n, D = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          ba(
            c,
            o,
            y,
            S,
            u
          ), Si(8, o);
          break;
        case 23:
          break;
        case 22:
          var Y = o.stateNode;
          o.memoizedState !== null ? Y._visibility & 2 ? ba(
            c,
            o,
            y,
            S,
            u
          ) : xi(
            c,
            o
          ) : (Y._visibility |= 2, ba(
            c,
            o,
            y,
            S,
            u
          )), u && D & 2048 && xs(
            o.alternate,
            o
          );
          break;
        case 24:
          ba(
            c,
            o,
            y,
            S,
            u
          ), u && D & 2048 && As(o.alternate, o);
          break;
        default:
          ba(
            c,
            o,
            y,
            S,
            u
          );
      }
      e = e.sibling;
    }
  }
  function xi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, u = n.flags;
        switch (n.tag) {
          case 22:
            xi(l, n), u & 2048 && xs(
              n.alternate,
              n
            );
            break;
          case 24:
            xi(l, n), u & 2048 && As(n.alternate, n);
            break;
          default:
            xi(l, n);
        }
        e = e.sibling;
      }
  }
  var Ai = 8192;
  function Sa(t, e, l) {
    if (t.subtreeFlags & Ai)
      for (t = t.child; t !== null; )
        Jd(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Jd(t, e, l) {
    switch (t.tag) {
      case 26:
        Sa(
          t,
          e,
          l
        ), t.flags & Ai && t.memoizedState !== null && Fg(
          l,
          fl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Sa(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = fl;
        fl = sf(t.stateNode.containerInfo), Sa(
          t,
          e,
          l
        ), fl = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = Ai, Ai = 16777216, Sa(
          t,
          e,
          l
        ), Ai = n) : Sa(
          t,
          e,
          l
        ));
        break;
      default:
        Sa(
          t,
          e,
          l
        );
    }
  }
  function kd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ei(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          le = n, Wd(
            n,
            t
          );
        }
      kd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Fd(t), t = t.sibling;
  }
  function Fd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ei(t), t.flags & 2048 && $l(9, t, t.return);
        break;
      case 3:
        Ei(t);
        break;
      case 12:
        Ei(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Fu(t)) : Ei(t);
        break;
      default:
        Ei(t);
    }
  }
  function Fu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          le = n, Wd(
            n,
            t
          );
        }
      kd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          $l(8, e, e.return), Fu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Fu(e));
          break;
        default:
          Fu(e);
      }
      t = t.sibling;
    }
  }
  function Wd(t, e) {
    for (; le !== null; ) {
      var l = le;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          $l(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ci(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, le = n;
      else
        t: for (l = t; le !== null; ) {
          n = le;
          var u = n.sibling, c = n.return;
          if (Ld(n), n === l) {
            le = null;
            break t;
          }
          if (u !== null) {
            u.return = c, le = u;
            break t;
          }
          le = c;
        }
    }
  }
  var rg = {
    getCacheForType: function(t) {
      var e = ue(Ft), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return ue(Ft).controller.signal;
    }
  }, og = typeof WeakMap == "function" ? WeakMap : Map, Et = 0, Rt = null, yt = null, vt = 0, Ot = 0, He = null, Pl = !1, Ta = !1, Es = !1, Rl = 0, Xt = 0, Il = 0, Yn = 0, zs = 0, Ye = 0, xa = 0, zi = null, Te = null, Os = !1, Wu = 0, $d = 0, $u = 1 / 0, Pu = null, tn = null, te = 0, en = null, Aa = null, Ul = 0, Cs = 0, Ds = null, Pd = null, Oi = 0, Ms = null;
  function qe() {
    return (Et & 2) !== 0 && vt !== 0 ? vt & -vt : M.T !== null ? Bs() : _o();
  }
  function Id() {
    if (Ye === 0)
      if ((vt & 536870912) === 0 || St) {
        var t = uu;
        uu <<= 1, (uu & 3932160) === 0 && (uu = 262144), Ye = t;
      } else Ye = 536870912;
    return t = we.current, t !== null && (t.flags |= 32), Ye;
  }
  function xe(t, e, l) {
    (t === Rt && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (Ea(t, 0), ln(
      t,
      vt,
      Ye,
      !1
    )), ka(t, l), ((Et & 2) === 0 || t !== Rt) && (t === Rt && ((Et & 2) === 0 && (Yn |= l), Xt === 4 && ln(
      t,
      vt,
      Ye,
      !1
    )), hl(t));
  }
  function t0(t, e, l) {
    if ((Et & 6) !== 0) throw Error(i(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ja(t, e), u = n ? _g(t, e) : Rs(t, e, !0), c = n;
    do {
      if (u === 0) {
        Ta && !n && ln(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, c && !hg(l)) {
          u = Rs(t, e, !1), c = !1;
          continue;
        }
        if (u === 2) {
          if (c = e, t.errorRecoveryDisabledLanes & c)
            var o = 0;
          else
            o = t.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
          if (o !== 0) {
            e = o;
            t: {
              var y = t;
              u = zi;
              var S = y.current.memoizedState.isDehydrated;
              if (S && (Ea(y, o).flags |= 256), o = Rs(
                y,
                o,
                !1
              ), o !== 2) {
                if (Es && !S) {
                  y.errorRecoveryDisabledLanes |= c, Yn |= c, u = 4;
                  break t;
                }
                c = Te, Te = u, c !== null && (Te === null ? Te = c : Te.push.apply(
                  Te,
                  c
                ));
              }
              u = o;
            }
            if (c = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Ea(t, 0), ln(t, e, 0, !0);
          break;
        }
        t: {
          switch (n = t, c = u, c) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ln(
                n,
                e,
                Ye,
                !Pl
              );
              break t;
            case 2:
              Te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((e & 62914560) === e && (u = Wu + 300 - Me(), 10 < u)) {
            if (ln(
              n,
              e,
              Ye,
              !Pl
            ), cu(n, 0, !0) !== 0) break t;
            Ul = e, n.timeoutHandle = N0(
              e0.bind(
                null,
                n,
                l,
                Te,
                Pu,
                Os,
                e,
                Ye,
                Yn,
                xa,
                Pl,
                c,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          e0(
            n,
            l,
            Te,
            Pu,
            Os,
            e,
            Ye,
            Yn,
            xa,
            Pl,
            c,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    hl(t);
  }
  function e0(t, e, l, n, u, c, o, y, S, D, Y, Q, R, j) {
    if (t.timeoutHandle = -1, Q = e.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
      Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: pl
      }, Jd(
        e,
        c,
        Q
      );
      var I = (c & 62914560) === c ? Wu - Me() : (c & 4194048) === c ? $d - Me() : 0;
      if (I = Wg(
        Q,
        I
      ), I !== null) {
        Ul = c, t.cancelPendingCommit = I(
          s0.bind(
            null,
            t,
            e,
            c,
            l,
            n,
            u,
            o,
            y,
            S,
            Y,
            Q,
            null,
            R,
            j
          )
        ), ln(t, c, o, !D);
        return;
      }
    }
    s0(
      t,
      e,
      c,
      l,
      n,
      u,
      o,
      y,
      S
    );
  }
  function hg(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var u = l[n], c = u.getSnapshot;
          u = u.value;
          try {
            if (!Ue(c(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function ln(t, e, l, n) {
    e &= ~zs, e &= ~Yn, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var c = 31 - Re(u), o = 1 << c;
      n[c] = -1, u &= ~o;
    }
    l !== 0 && ro(t, l, e);
  }
  function Iu() {
    return (Et & 6) === 0 ? (Ci(0), !1) : !0;
  }
  function Ns() {
    if (yt !== null) {
      if (Ot === 0)
        var t = yt.return;
      else
        t = yt, Tl = Dn = null, Jc(t), ma = null, ri = 0, t = yt;
      for (; t !== null; )
        Rd(t.alternate, t), t = t.return;
      yt = null;
    }
  }
  function Ea(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Rg(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Ul = 0, Ns(), Rt = t, yt = l = bl(t.current, null), vt = e, Ot = 0, He = null, Pl = !1, Ta = Ja(t, e), Es = !1, xa = Ye = zs = Yn = Il = Xt = 0, Te = zi = null, Os = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var u = 31 - Re(n), c = 1 << u;
        e |= t[u], n &= ~c;
      }
    return Rl = e, bu(), l;
  }
  function l0(t, e) {
    _t = null, M.H = pi, e === _a || e === Cu ? (e = ph(), Ot = 3) : e === wc ? (e = ph(), Ot = 4) : Ot = e === ss ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, He = e, yt === null && (Xt = 1, Gu(
      t,
      We(e, t.current)
    ));
  }
  function n0() {
    var t = we.current;
    return t === null ? !0 : (vt & 4194048) === vt ? tl === null : (vt & 62914560) === vt || (vt & 536870912) !== 0 ? t === tl : !1;
  }
  function a0() {
    var t = M.H;
    return M.H = pi, t === null ? pi : t;
  }
  function i0() {
    var t = M.A;
    return M.A = rg, t;
  }
  function tf() {
    Xt = 4, Pl || (vt & 4194048) !== vt && we.current !== null || (Ta = !0), (Il & 134217727) === 0 && (Yn & 134217727) === 0 || Rt === null || ln(
      Rt,
      vt,
      Ye,
      !1
    );
  }
  function Rs(t, e, l) {
    var n = Et;
    Et |= 2;
    var u = a0(), c = i0();
    (Rt !== t || vt !== e) && (Pu = null, Ea(t, e)), e = !1;
    var o = Xt;
    t: do
      try {
        if (Ot !== 0 && yt !== null) {
          var y = yt, S = He;
          switch (Ot) {
            case 8:
              Ns(), o = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              we.current === null && (e = !0);
              var D = Ot;
              if (Ot = 0, He = null, za(t, y, S, D), l && Ta) {
                o = 0;
                break t;
              }
              break;
            default:
              D = Ot, Ot = 0, He = null, za(t, y, S, D);
          }
        }
        dg(), o = Xt;
        break;
      } catch (Y) {
        l0(t, Y);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Tl = Dn = null, Et = n, M.H = u, M.A = c, yt === null && (Rt = null, vt = 0, bu()), o;
  }
  function dg() {
    for (; yt !== null; ) u0(yt);
  }
  function _g(t, e) {
    var l = Et;
    Et |= 2;
    var n = a0(), u = i0();
    Rt !== t || vt !== e ? (Pu = null, $u = Me() + 500, Ea(t, e)) : Ta = Ja(
      t,
      e
    );
    t: do
      try {
        if (Ot !== 0 && yt !== null) {
          e = yt;
          var c = He;
          e: switch (Ot) {
            case 1:
              Ot = 0, He = null, za(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (gh(c)) {
                Ot = 0, He = null, f0(e);
                break;
              }
              e = function() {
                Ot !== 2 && Ot !== 9 || Rt !== t || (Ot = 7), hl(t);
              }, c.then(e, e);
              break t;
            case 3:
              Ot = 7;
              break t;
            case 4:
              Ot = 5;
              break t;
            case 7:
              gh(c) ? (Ot = 0, He = null, f0(e)) : (Ot = 0, He = null, za(t, e, c, 7));
              break;
            case 5:
              var o = null;
              switch (yt.tag) {
                case 26:
                  o = yt.memoizedState;
                case 5:
                case 27:
                  var y = yt;
                  if (o ? K0(o) : y.stateNode.complete) {
                    Ot = 0, He = null;
                    var S = y.sibling;
                    if (S !== null) yt = S;
                    else {
                      var D = y.return;
                      D !== null ? (yt = D, ef(D)) : yt = null;
                    }
                    break e;
                  }
              }
              Ot = 0, He = null, za(t, e, c, 5);
              break;
            case 6:
              Ot = 0, He = null, za(t, e, c, 6);
              break;
            case 8:
              Ns(), Xt = 6;
              break t;
            default:
              throw Error(i(462));
          }
        }
        mg();
        break;
      } catch (Y) {
        l0(t, Y);
      }
    while (!0);
    return Tl = Dn = null, M.H = n, M.A = u, Et = l, yt !== null ? 0 : (Rt = null, vt = 0, bu(), Xt);
  }
  function mg() {
    for (; yt !== null && !Y1(); )
      u0(yt);
  }
  function u0(t) {
    var e = Md(t.alternate, t, Rl);
    t.memoizedProps = t.pendingProps, e === null ? ef(t) : yt = e;
  }
  function f0(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ad(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          vt
        );
        break;
      case 11:
        e = Ad(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          vt
        );
        break;
      case 5:
        Jc(e);
      default:
        Rd(l, e), e = yt = ih(e, Rl), e = Md(l, e, Rl);
    }
    t.memoizedProps = t.pendingProps, e === null ? ef(t) : yt = e;
  }
  function za(t, e, l, n) {
    Tl = Dn = null, Jc(e), ma = null, ri = 0;
    var u = e.return;
    try {
      if (ng(
        t,
        u,
        e,
        l,
        vt
      )) {
        Xt = 1, Gu(
          t,
          We(l, t.current)
        ), yt = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw yt = u, c;
      Xt = 1, Gu(
        t,
        We(l, t.current)
      ), yt = null;
      return;
    }
    e.flags & 32768 ? (St || n === 1 ? t = !0 : Ta || (vt & 536870912) !== 0 ? t = !1 : (Pl = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = we.current, n !== null && n.tag === 13 && (n.flags |= 16384))), c0(e, t)) : ef(e);
  }
  function ef(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        c0(
          e,
          Pl
        );
        return;
      }
      t = e.return;
      var l = ug(
        e.alternate,
        e,
        Rl
      );
      if (l !== null) {
        yt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        yt = e;
        return;
      }
      yt = e = t;
    } while (e !== null);
    Xt === 0 && (Xt = 5);
  }
  function c0(t, e) {
    do {
      var l = fg(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, yt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        yt = t;
        return;
      }
      yt = t = l;
    } while (t !== null);
    Xt = 6, yt = null;
  }
  function s0(t, e, l, n, u, c, o, y, S) {
    t.cancelPendingCommit = null;
    do
      lf();
    while (te !== 0);
    if ((Et & 6) !== 0) throw Error(i(327));
    if (e !== null) {
      if (e === t.current) throw Error(i(177));
      if (c = e.lanes | e.childLanes, c |= bc, k1(
        t,
        l,
        c,
        o,
        y,
        S
      ), t === Rt && (yt = Rt = null, vt = 0), Aa = e, en = t, Ul = l, Cs = c, Ds = u, Pd = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, vg(au, function() {
        return _0(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null, u = k.p, k.p = 2, o = Et, Et |= 4;
        try {
          cg(t, e, l);
        } finally {
          Et = o, k.p = u, M.T = n;
        }
      }
      te = 1, r0(), o0(), h0();
    }
  }
  function r0() {
    if (te === 1) {
      te = 0;
      var t = en, e = Aa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null;
        var n = k.p;
        k.p = 2;
        var u = Et;
        Et |= 4;
        try {
          Qd(e, t);
          var c = Qs, o = Wo(t.containerInfo), y = c.focusedElem, S = c.selectionRange;
          if (o !== y && y && y.ownerDocument && Fo(
            y.ownerDocument.documentElement,
            y
          )) {
            if (S !== null && mc(y)) {
              var D = S.start, Y = S.end;
              if (Y === void 0 && (Y = D), "selectionStart" in y)
                y.selectionStart = D, y.selectionEnd = Math.min(
                  Y,
                  y.value.length
                );
              else {
                var Q = y.ownerDocument || document, R = Q && Q.defaultView || window;
                if (R.getSelection) {
                  var j = R.getSelection(), I = y.textContent.length, at = Math.min(S.start, I), Nt = S.end === void 0 ? at : Math.min(S.end, I);
                  !j.extend && at > Nt && (o = Nt, Nt = at, at = o);
                  var z = ko(
                    y,
                    at
                  ), x = ko(
                    y,
                    Nt
                  );
                  if (z && x && (j.rangeCount !== 1 || j.anchorNode !== z.node || j.anchorOffset !== z.offset || j.focusNode !== x.node || j.focusOffset !== x.offset)) {
                    var C = Q.createRange();
                    C.setStart(z.node, z.offset), j.removeAllRanges(), at > Nt ? (j.addRange(C), j.extend(x.node, x.offset)) : (C.setEnd(x.node, x.offset), j.addRange(C));
                  }
                }
              }
            }
            for (Q = [], j = y; j = j.parentNode; )
              j.nodeType === 1 && Q.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < Q.length; y++) {
              var G = Q[y];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          mf = !!Xs, Qs = Xs = null;
        } finally {
          Et = u, k.p = n, M.T = l;
        }
      }
      t.current = e, te = 2;
    }
  }
  function o0() {
    if (te === 2) {
      te = 0;
      var t = en, e = Aa, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = M.T, M.T = null;
        var n = k.p;
        k.p = 2;
        var u = Et;
        Et |= 4;
        try {
          qd(t, e.alternate, e);
        } finally {
          Et = u, k.p = n, M.T = l;
        }
      }
      te = 3;
    }
  }
  function h0() {
    if (te === 4 || te === 3) {
      te = 0, q1();
      var t = en, e = Aa, l = Ul, n = Pd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? te = 5 : (te = 0, Aa = en = null, d0(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (tn = null), Wf(l), e = e.stateNode, Ne && typeof Ne.onCommitFiberRoot == "function")
        try {
          Ne.onCommitFiberRoot(
            Ka,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = M.T, u = k.p, k.p = 2, M.T = null;
        try {
          for (var c = t.onRecoverableError, o = 0; o < n.length; o++) {
            var y = n[o];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          M.T = e, k.p = u;
        }
      }
      (Ul & 3) !== 0 && lf(), hl(t), u = t.pendingLanes, (l & 261930) !== 0 && (u & 42) !== 0 ? t === Ms ? Oi++ : (Oi = 0, Ms = t) : Oi = 0, Ci(0);
    }
  }
  function d0(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ci(e)));
  }
  function lf() {
    return r0(), o0(), h0(), _0();
  }
  function _0() {
    if (te !== 5) return !1;
    var t = en, e = Cs;
    Cs = 0;
    var l = Wf(Ul), n = M.T, u = k.p;
    try {
      k.p = 32 > l ? 32 : l, M.T = null, l = Ds, Ds = null;
      var c = en, o = Ul;
      if (te = 0, Aa = en = null, Ul = 0, (Et & 6) !== 0) throw Error(i(331));
      var y = Et;
      if (Et |= 4, Fd(c.current), Kd(
        c,
        c.current,
        o,
        l
      ), Et = y, Ci(0, !1), Ne && typeof Ne.onPostCommitFiberRoot == "function")
        try {
          Ne.onPostCommitFiberRoot(Ka, c);
        } catch {
        }
      return !0;
    } finally {
      k.p = u, M.T = n, d0(t, e);
    }
  }
  function m0(t, e, l) {
    e = We(l, e), e = cs(t.stateNode, e, 2), t = kl(t, e, 2), t !== null && (ka(t, 2), hl(t));
  }
  function Ct(t, e, l) {
    if (t.tag === 3)
      m0(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          m0(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (tn === null || !tn.has(n))) {
            t = We(l, t), l = gd(2), n = kl(e, l, 2), n !== null && (yd(
              l,
              n,
              e,
              t
            ), ka(n, 2), hl(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Us(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new og();
      var u = /* @__PURE__ */ new Set();
      n.set(e, u);
    } else
      u = n.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), n.set(e, u));
    u.has(l) || (Es = !0, u.add(l), t = gg.bind(null, t, e, l), e.then(t, t));
  }
  function gg(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Rt === t && (vt & l) === l && (Xt === 4 || Xt === 3 && (vt & 62914560) === vt && 300 > Me() - Wu ? (Et & 2) === 0 && Ea(t, 0) : zs |= l, xa === vt && (xa = 0)), hl(t);
  }
  function g0(t, e) {
    e === 0 && (e = so()), t = zn(t, e), t !== null && (ka(t, e), hl(t));
  }
  function yg(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), g0(t, l);
  }
  function pg(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    n !== null && n.delete(e), g0(t, l);
  }
  function vg(t, e) {
    return Kf(t, e);
  }
  var nf = null, Oa = null, js = !1, af = !1, ws = !1, nn = 0;
  function hl(t) {
    t !== Oa && t.next === null && (Oa === null ? nf = Oa = t : Oa = Oa.next = t), af = !0, js || (js = !0, Sg());
  }
  function Ci(t, e) {
    if (!ws && af) {
      ws = !0;
      do
        for (var l = !1, n = nf; n !== null; ) {
          if (t !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var o = n.suspendedLanes, y = n.pingedLanes;
              c = (1 << 31 - Re(42 | t) + 1) - 1, c &= u & ~(o & ~y), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (l = !0, b0(n, c));
          } else
            c = vt, c = cu(
              n,
              n === Rt ? c : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (c & 3) === 0 || Ja(n, c) || (l = !0, b0(n, c));
          n = n.next;
        }
      while (l);
      ws = !1;
    }
  }
  function bg() {
    y0();
  }
  function y0() {
    af = js = !1;
    var t = 0;
    nn !== 0 && Ng() && (t = nn);
    for (var e = Me(), l = null, n = nf; n !== null; ) {
      var u = n.next, c = p0(n, e);
      c === 0 ? (n.next = null, l === null ? nf = u : l.next = u, u === null && (Oa = l)) : (l = n, (t !== 0 || (c & 3) !== 0) && (af = !0)), n = u;
    }
    te !== 0 && te !== 5 || Ci(t), nn !== 0 && (nn = 0);
  }
  function p0(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, u = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var o = 31 - Re(c), y = 1 << o, S = u[o];
      S === -1 ? ((y & l) === 0 || (y & n) !== 0) && (u[o] = J1(y, e)) : S <= e && (t.expiredLanes |= y), c &= ~y;
    }
    if (e = Rt, l = vt, l = cu(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && Jf(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Ja(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && Jf(n), Wf(l)) {
        case 2:
        case 8:
          l = fo;
          break;
        case 32:
          l = au;
          break;
        case 268435456:
          l = co;
          break;
        default:
          l = au;
      }
      return n = v0.bind(null, t), l = Kf(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && Jf(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function v0(t, e) {
    if (te !== 0 && te !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (lf() && t.callbackNode !== l)
      return null;
    var n = vt;
    return n = cu(
      t,
      t === Rt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (t0(t, n, e), p0(t, Me()), t.callbackNode != null && t.callbackNode === l ? v0.bind(null, t) : null);
  }
  function b0(t, e) {
    if (lf()) return null;
    t0(t, e, !0);
  }
  function Sg() {
    Ug(function() {
      (Et & 6) !== 0 ? Kf(
        uo,
        bg
      ) : y0();
    });
  }
  function Bs() {
    if (nn === 0) {
      var t = ha;
      t === 0 && (t = iu, iu <<= 1, (iu & 261888) === 0 && (iu = 256)), nn = t;
    }
    return nn;
  }
  function S0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : hu("" + t);
  }
  function T0(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Tg(t, e, l, n, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var c = S0(
        (u[ye] || null).action
      ), o = n.submitter;
      o && (e = (e = o[ye] || null) ? S0(e.formAction) : o.getAttribute("formAction"), e !== null && (c = e, o = null));
      var y = new gu(
        "action",
        "action",
        null,
        n,
        u
      );
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (nn !== 0) {
                  var S = o ? T0(u, o) : new FormData(u);
                  ls(
                    l,
                    {
                      pending: !0,
                      data: S,
                      method: u.method,
                      action: c
                    },
                    null,
                    S
                  );
                }
              } else
                typeof c == "function" && (y.preventDefault(), S = o ? T0(u, o) : new FormData(u), ls(
                  l,
                  {
                    pending: !0,
                    data: S,
                    method: u.method,
                    action: c
                  },
                  c,
                  S
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Hs = 0; Hs < vc.length; Hs++) {
    var Ys = vc[Hs], xg = Ys.toLowerCase(), Ag = Ys[0].toUpperCase() + Ys.slice(1);
    ul(
      xg,
      "on" + Ag
    );
  }
  ul(Io, "onAnimationEnd"), ul(th, "onAnimationIteration"), ul(eh, "onAnimationStart"), ul("dblclick", "onDoubleClick"), ul("focusin", "onFocus"), ul("focusout", "onBlur"), ul(Lm, "onTransitionRun"), ul(Vm, "onTransitionStart"), ul(Gm, "onTransitionCancel"), ul(lh, "onTransitionEnd"), Pn("onMouseEnter", ["mouseout", "mouseover"]), Pn("onMouseLeave", ["mouseout", "mouseover"]), Pn("onPointerEnter", ["pointerout", "pointerover"]), Pn("onPointerLeave", ["pointerout", "pointerover"]), Tn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Tn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Tn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Tn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Tn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Tn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Eg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Di)
  );
  function x0(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], u = n.event;
      n = n.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var o = n.length - 1; 0 <= o; o--) {
            var y = n[o], S = y.instance, D = y.currentTarget;
            if (y = y.listener, S !== c && u.isPropagationStopped())
              break t;
            c = y, u.currentTarget = D;
            try {
              c(u);
            } catch (Y) {
              vu(Y);
            }
            u.currentTarget = null, c = S;
          }
        else
          for (o = 0; o < n.length; o++) {
            if (y = n[o], S = y.instance, D = y.currentTarget, y = y.listener, S !== c && u.isPropagationStopped())
              break t;
            c = y, u.currentTarget = D;
            try {
              c(u);
            } catch (Y) {
              vu(Y);
            }
            u.currentTarget = null, c = S;
          }
      }
    }
  }
  function pt(t, e) {
    var l = e[$f];
    l === void 0 && (l = e[$f] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (A0(e, t, 2, !1), l.add(n));
  }
  function qs(t, e, l) {
    var n = 0;
    e && (n |= 4), A0(
      l,
      t,
      n,
      e
    );
  }
  var uf = "_reactListening" + Math.random().toString(36).slice(2);
  function Ls(t) {
    if (!t[uf]) {
      t[uf] = !0, yo.forEach(function(l) {
        l !== "selectionchange" && (Eg.has(l) || qs(l, !1, t), qs(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[uf] || (e[uf] = !0, qs("selectionchange", !1, e));
    }
  }
  function A0(t, e, l, n) {
    switch (I0(e)) {
      case 2:
        var u = Ig;
        break;
      case 8:
        u = ty;
        break;
      default:
        u = er;
    }
    l = u.bind(
      null,
      e,
      l,
      t
    ), u = void 0, !uc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), n ? u !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, l, !0) : u !== void 0 ? t.addEventListener(e, l, {
      passive: u
    }) : t.addEventListener(e, l, !1);
  }
  function Vs(t, e, l, n, u) {
    var c = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
          var y = n.stateNode.containerInfo;
          if (y === u) break;
          if (o === 4)
            for (o = n.return; o !== null; ) {
              var S = o.tag;
              if ((S === 3 || S === 4) && o.stateNode.containerInfo === u)
                return;
              o = o.return;
            }
          for (; y !== null; ) {
            if (o = Fn(y), o === null) return;
            if (S = o.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              n = c = o;
              continue t;
            }
            y = y.parentNode;
          }
        }
        n = n.return;
      }
    Do(function() {
      var D = c, Y = ac(l), Q = [];
      t: {
        var R = nh.get(t);
        if (R !== void 0) {
          var j = gu, I = t;
          switch (t) {
            case "keypress":
              if (_u(l) === 0) break t;
            case "keydown":
            case "keyup":
              j = pm;
              break;
            case "focusin":
              I = "focus", j = rc;
              break;
            case "focusout":
              I = "blur", j = rc;
              break;
            case "beforeblur":
            case "afterblur":
              j = rc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = Ro;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = um;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Sm;
              break;
            case Io:
            case th:
            case eh:
              j = sm;
              break;
            case lh:
              j = xm;
              break;
            case "scroll":
            case "scrollend":
              j = am;
              break;
            case "wheel":
              j = Em;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = om;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = jo;
              break;
            case "toggle":
            case "beforetoggle":
              j = Om;
          }
          var at = (e & 4) !== 0, Nt = !at && (t === "scroll" || t === "scrollend"), z = at ? R !== null ? R + "Capture" : null : R;
          at = [];
          for (var x = D, C; x !== null; ) {
            var G = x;
            if (C = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || C === null || z === null || (G = $a(x, z), G != null && at.push(
              Mi(x, G, C)
            )), Nt) break;
            x = x.return;
          }
          0 < at.length && (R = new j(
            R,
            I,
            null,
            l,
            Y
          ), Q.push({ event: R, listeners: at }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (R = t === "mouseover" || t === "pointerover", j = t === "mouseout" || t === "pointerout", R && l !== nc && (I = l.relatedTarget || l.fromElement) && (Fn(I) || I[kn]))
            break t;
          if ((j || R) && (R = Y.window === Y ? Y : (R = Y.ownerDocument) ? R.defaultView || R.parentWindow : window, j ? (I = l.relatedTarget || l.toElement, j = D, I = I ? Fn(I) : null, I !== null && (Nt = r(I), at = I.tag, I !== Nt || at !== 5 && at !== 27 && at !== 6) && (I = null)) : (j = null, I = D), j !== I)) {
            if (at = Ro, G = "onMouseLeave", z = "onMouseEnter", x = "mouse", (t === "pointerout" || t === "pointerover") && (at = jo, G = "onPointerLeave", z = "onPointerEnter", x = "pointer"), Nt = j == null ? R : Wa(j), C = I == null ? R : Wa(I), R = new at(
              G,
              x + "leave",
              j,
              l,
              Y
            ), R.target = Nt, R.relatedTarget = C, G = null, Fn(Y) === D && (at = new at(
              z,
              x + "enter",
              I,
              l,
              Y
            ), at.target = C, at.relatedTarget = Nt, G = at), Nt = G, j && I)
              e: {
                for (at = zg, z = j, x = I, C = 0, G = z; G; G = at(G))
                  C++;
                G = 0;
                for (var et = x; et; et = at(et))
                  G++;
                for (; 0 < C - G; )
                  z = at(z), C--;
                for (; 0 < G - C; )
                  x = at(x), G--;
                for (; C--; ) {
                  if (z === x || x !== null && z === x.alternate) {
                    at = z;
                    break e;
                  }
                  z = at(z), x = at(x);
                }
                at = null;
              }
            else at = null;
            j !== null && E0(
              Q,
              R,
              j,
              at,
              !1
            ), I !== null && Nt !== null && E0(
              Q,
              Nt,
              I,
              at,
              !0
            );
          }
        }
        t: {
          if (R = D ? Wa(D) : window, j = R.nodeName && R.nodeName.toLowerCase(), j === "select" || j === "input" && R.type === "file")
            var xt = Go;
          else if (Lo(R))
            if (Xo)
              xt = Hm;
            else {
              xt = wm;
              var tt = jm;
            }
          else
            j = R.nodeName, !j || j.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? D && lc(D.elementType) && (xt = Go) : xt = Bm;
          if (xt && (xt = xt(t, D))) {
            Vo(
              Q,
              xt,
              l,
              Y
            );
            break t;
          }
          tt && tt(t, R, D), t === "focusout" && D && R.type === "number" && D.memoizedProps.value != null && ec(R, "number", R.value);
        }
        switch (tt = D ? Wa(D) : window, t) {
          case "focusin":
            (Lo(tt) || tt.contentEditable === "true") && (aa = tt, gc = D, ii = null);
            break;
          case "focusout":
            ii = gc = aa = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, $o(Q, l, Y);
            break;
          case "selectionchange":
            if (qm) break;
          case "keydown":
          case "keyup":
            $o(Q, l, Y);
        }
        var mt;
        if (hc)
          t: {
            switch (t) {
              case "compositionstart":
                var bt = "onCompositionStart";
                break t;
              case "compositionend":
                bt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                bt = "onCompositionUpdate";
                break t;
            }
            bt = void 0;
          }
        else
          na ? Yo(t, l) && (bt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (bt = "onCompositionStart");
        bt && (wo && l.locale !== "ko" && (na || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && na && (mt = Mo()) : (Vl = Y, fc = "value" in Vl ? Vl.value : Vl.textContent, na = !0)), tt = ff(D, bt), 0 < tt.length && (bt = new Uo(
          bt,
          t,
          null,
          l,
          Y
        ), Q.push({ event: bt, listeners: tt }), mt ? bt.data = mt : (mt = qo(l), mt !== null && (bt.data = mt)))), (mt = Dm ? Mm(t, l) : Nm(t, l)) && (bt = ff(D, "onBeforeInput"), 0 < bt.length && (tt = new Uo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          Y
        ), Q.push({
          event: tt,
          listeners: bt
        }), tt.data = mt)), Tg(
          Q,
          t,
          D,
          l,
          Y
        );
      }
      x0(Q, e);
    });
  }
  function Mi(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function ff(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var u = t, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = $a(t, l), u != null && n.unshift(
        Mi(t, u, c)
      ), u = $a(t, e), u != null && n.push(
        Mi(t, u, c)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function zg(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function E0(t, e, l, n, u) {
    for (var c = e._reactName, o = []; l !== null && l !== n; ) {
      var y = l, S = y.alternate, D = y.stateNode;
      if (y = y.tag, S !== null && S === n) break;
      y !== 5 && y !== 26 && y !== 27 || D === null || (S = D, u ? (D = $a(l, c), D != null && o.unshift(
        Mi(l, D, S)
      )) : u || (D = $a(l, c), D != null && o.push(
        Mi(l, D, S)
      ))), l = l.return;
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
  }
  var Og = /\r\n?/g, Cg = /\u0000|\uFFFD/g;
  function z0(t) {
    return (typeof t == "string" ? t : "" + t).replace(Og, `
`).replace(Cg, "");
  }
  function O0(t, e) {
    return e = z0(e), z0(t) === e;
  }
  function Mt(t, e, l, n, u, c) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || ta(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && ta(t, "" + n);
        break;
      case "className":
        ru(t, "class", n);
        break;
      case "tabIndex":
        ru(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ru(t, l, n);
        break;
      case "style":
        Oo(t, n, c);
        break;
      case "data":
        if (e !== "object") {
          ru(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = hu("" + n), t.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (l === "formAction" ? (e !== "input" && Mt(t, e, "name", u.name, u, null), Mt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Mt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Mt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Mt(t, e, "encType", u.encType, u, null), Mt(t, e, "method", u.method, u, null), Mt(t, e, "target", u.target, u, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = hu("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = pl);
        break;
      case "onScroll":
        n != null && pt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && pt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(i(61));
          if (l = n.__html, l != null) {
            if (u.children != null) throw Error(i(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = hu("" + n), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "" + n) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? t.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(l) : t.setAttribute(l, n);
        break;
      case "popover":
        pt("beforetoggle", t), pt("toggle", t), su(t, "popover", n);
        break;
      case "xlinkActuate":
        yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        yl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        yl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        yl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        su(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = lm.get(l) || l, su(t, l, n));
    }
  }
  function Gs(t, e, l, n, u, c) {
    switch (l) {
      case "style":
        Oo(t, n, c);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(i(61));
          if (l = n.__html, l != null) {
            if (u.children != null) throw Error(i(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? ta(t, n) : (typeof n == "number" || typeof n == "bigint") && ta(t, "" + n);
        break;
      case "onScroll":
        n != null && pt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && pt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = pl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!po.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (u = l.endsWith("Capture"), e = l.slice(2, u ? l.length - 7 : void 0), c = t[ye] || null, c = c != null ? c[l] : null, typeof c == "function" && t.removeEventListener(e, c, u), typeof n == "function")) {
              typeof c != "function" && c !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, u);
              break t;
            }
            l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : su(t, l, n);
          }
    }
  }
  function ce(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        pt("error", t), pt("load", t);
        var n = !1, u = !1, c;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var o = l[c];
            if (o != null)
              switch (c) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, e));
                default:
                  Mt(t, e, c, o, l, null);
              }
          }
        u && Mt(t, e, "srcSet", l.srcSet, l, null), n && Mt(t, e, "src", l.src, l, null);
        return;
      case "input":
        pt("invalid", t);
        var y = c = o = u = null, S = null, D = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var Y = l[n];
            if (Y != null)
              switch (n) {
                case "name":
                  u = Y;
                  break;
                case "type":
                  o = Y;
                  break;
                case "checked":
                  S = Y;
                  break;
                case "defaultChecked":
                  D = Y;
                  break;
                case "value":
                  c = Y;
                  break;
                case "defaultValue":
                  y = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(i(137, e));
                  break;
                default:
                  Mt(t, e, n, Y, l, null);
              }
          }
        xo(
          t,
          c,
          y,
          S,
          D,
          o,
          u,
          !1
        );
        return;
      case "select":
        pt("invalid", t), n = o = c = null;
        for (u in l)
          if (l.hasOwnProperty(u) && (y = l[u], y != null))
            switch (u) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                o = y;
                break;
              case "multiple":
                n = y;
              default:
                Mt(t, e, u, y, l, null);
            }
        e = c, l = o, t.multiple = !!n, e != null ? In(t, !!n, e, !1) : l != null && In(t, !!n, l, !0);
        return;
      case "textarea":
        pt("invalid", t), c = u = n = null;
        for (o in l)
          if (l.hasOwnProperty(o) && (y = l[o], y != null))
            switch (o) {
              case "value":
                n = y;
                break;
              case "defaultValue":
                u = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(i(91));
                break;
              default:
                Mt(t, e, o, y, l, null);
            }
        Eo(t, n, u, c);
        return;
      case "option":
        for (S in l)
          l.hasOwnProperty(S) && (n = l[S], n != null) && (S === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : Mt(t, e, S, n, l, null));
        return;
      case "dialog":
        pt("beforetoggle", t), pt("toggle", t), pt("cancel", t), pt("close", t);
        break;
      case "iframe":
      case "object":
        pt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Di.length; n++)
          pt(Di[n], t);
        break;
      case "image":
        pt("error", t), pt("load", t);
        break;
      case "details":
        pt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        pt("error", t), pt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in l)
          if (l.hasOwnProperty(D) && (n = l[D], n != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, e));
              default:
                Mt(t, e, D, n, l, null);
            }
        return;
      default:
        if (lc(e)) {
          for (Y in l)
            l.hasOwnProperty(Y) && (n = l[Y], n !== void 0 && Gs(
              t,
              e,
              Y,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (y in l)
      l.hasOwnProperty(y) && (n = l[y], n != null && Mt(t, e, y, n, l, null));
  }
  function Dg(t, e, l, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, c = null, o = null, y = null, S = null, D = null, Y = null;
        for (j in l) {
          var Q = l[j];
          if (l.hasOwnProperty(j) && Q != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = Q;
              default:
                n.hasOwnProperty(j) || Mt(t, e, j, null, n, Q);
            }
        }
        for (var R in n) {
          var j = n[R];
          if (Q = l[R], n.hasOwnProperty(R) && (j != null || Q != null))
            switch (R) {
              case "type":
                c = j;
                break;
              case "name":
                u = j;
                break;
              case "checked":
                D = j;
                break;
              case "defaultChecked":
                Y = j;
                break;
              case "value":
                o = j;
                break;
              case "defaultValue":
                y = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(i(137, e));
                break;
              default:
                j !== Q && Mt(
                  t,
                  e,
                  R,
                  j,
                  n,
                  Q
                );
            }
        }
        tc(
          t,
          o,
          y,
          S,
          D,
          Y,
          c,
          u
        );
        return;
      case "select":
        j = o = y = R = null;
        for (c in l)
          if (S = l[c], l.hasOwnProperty(c) && S != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                j = S;
              default:
                n.hasOwnProperty(c) || Mt(
                  t,
                  e,
                  c,
                  null,
                  n,
                  S
                );
            }
        for (u in n)
          if (c = n[u], S = l[u], n.hasOwnProperty(u) && (c != null || S != null))
            switch (u) {
              case "value":
                R = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                o = c;
              default:
                c !== S && Mt(
                  t,
                  e,
                  u,
                  c,
                  n,
                  S
                );
            }
        e = y, l = o, n = j, R != null ? In(t, !!l, R, !1) : !!n != !!l && (e != null ? In(t, !!l, e, !0) : In(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        j = R = null;
        for (y in l)
          if (u = l[y], l.hasOwnProperty(y) && u != null && !n.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Mt(t, e, y, null, n, u);
            }
        for (o in n)
          if (u = n[o], c = l[o], n.hasOwnProperty(o) && (u != null || c != null))
            switch (o) {
              case "value":
                R = u;
                break;
              case "defaultValue":
                j = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(i(91));
                break;
              default:
                u !== c && Mt(t, e, o, u, n, c);
            }
        Ao(t, R, j);
        return;
      case "option":
        for (var I in l)
          R = l[I], l.hasOwnProperty(I) && R != null && !n.hasOwnProperty(I) && (I === "selected" ? t.selected = !1 : Mt(
            t,
            e,
            I,
            null,
            n,
            R
          ));
        for (S in n)
          R = n[S], j = l[S], n.hasOwnProperty(S) && R !== j && (R != null || j != null) && (S === "selected" ? t.selected = R && typeof R != "function" && typeof R != "symbol" : Mt(
            t,
            e,
            S,
            R,
            n,
            j
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var at in l)
          R = l[at], l.hasOwnProperty(at) && R != null && !n.hasOwnProperty(at) && Mt(t, e, at, null, n, R);
        for (D in n)
          if (R = n[D], j = l[D], n.hasOwnProperty(D) && R !== j && (R != null || j != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(i(137, e));
                break;
              default:
                Mt(
                  t,
                  e,
                  D,
                  R,
                  n,
                  j
                );
            }
        return;
      default:
        if (lc(e)) {
          for (var Nt in l)
            R = l[Nt], l.hasOwnProperty(Nt) && R !== void 0 && !n.hasOwnProperty(Nt) && Gs(
              t,
              e,
              Nt,
              void 0,
              n,
              R
            );
          for (Y in n)
            R = n[Y], j = l[Y], !n.hasOwnProperty(Y) || R === j || R === void 0 && j === void 0 || Gs(
              t,
              e,
              Y,
              R,
              n,
              j
            );
          return;
        }
    }
    for (var z in l)
      R = l[z], l.hasOwnProperty(z) && R != null && !n.hasOwnProperty(z) && Mt(t, e, z, null, n, R);
    for (Q in n)
      R = n[Q], j = l[Q], !n.hasOwnProperty(Q) || R === j || R == null && j == null || Mt(t, e, Q, R, n, j);
  }
  function C0(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Mg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var u = l[n], c = u.transferSize, o = u.initiatorType, y = u.duration;
        if (c && y && C0(o)) {
          for (o = 0, y = u.responseEnd, n += 1; n < l.length; n++) {
            var S = l[n], D = S.startTime;
            if (D > y) break;
            var Y = S.transferSize, Q = S.initiatorType;
            Y && C0(Q) && (S = S.responseEnd, o += Y * (S < y ? 1 : (y - D) / (S - D)));
          }
          if (--n, e += 8 * (c + o) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Xs = null, Qs = null;
  function cf(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function D0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function M0(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Zs(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Ks = null;
  function Ng() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Ks ? !1 : (Ks = t, !0) : (Ks = null, !1);
  }
  var N0 = typeof setTimeout == "function" ? setTimeout : void 0, Rg = typeof clearTimeout == "function" ? clearTimeout : void 0, R0 = typeof Promise == "function" ? Promise : void 0, Ug = typeof queueMicrotask == "function" ? queueMicrotask : typeof R0 < "u" ? function(t) {
    return R0.resolve(null).then(t).catch(jg);
  } : N0;
  function jg(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function an(t) {
    return t === "head";
  }
  function U0(t, e) {
    var l = e, n = 0;
    do {
      var u = l.nextSibling;
      if (t.removeChild(l), u && u.nodeType === 8)
        if (l = u.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(u), Na(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          Ni(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Ni(l);
          for (var c = l.firstChild; c; ) {
            var o = c.nextSibling, y = c.nodeName;
            c[Fa] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c), c = o;
          }
        } else
          l === "body" && Ni(t.ownerDocument.body);
      l = u;
    } while (l);
    Na(e);
  }
  function j0(t, e) {
    var l = t;
    t = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = n;
    } while (l);
  }
  function Js(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Js(l), Pf(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function wg(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[Fa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (c = t.getAttribute("rel"), c === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (c !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (c = t.getAttribute("src"), (c !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === c)
          return t;
      } else return t;
      if (t = el(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Bg(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = el(t.nextSibling), t === null)) return null;
    return t;
  }
  function w0(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = el(t.nextSibling), t === null)) return null;
    return t;
  }
  function ks(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Fs(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Hg(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var n = function() {
        e(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function el(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Ws = null;
  function B0(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return el(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function H0(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Y0(t, e, l) {
    switch (e = cf(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(i(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(i(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function Ni(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Pf(t);
  }
  var ll = /* @__PURE__ */ new Map(), q0 = /* @__PURE__ */ new Set();
  function sf(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var jl = k.d;
  k.d = {
    f: Yg,
    r: qg,
    D: Lg,
    C: Vg,
    L: Gg,
    m: Xg,
    X: Zg,
    S: Qg,
    M: Kg
  };
  function Yg() {
    var t = jl.f(), e = Iu();
    return t || e;
  }
  function qg(t) {
    var e = Wn(t);
    e !== null && e.tag === 5 && e.type === "form" ? ld(e) : jl.r(t);
  }
  var Ca = typeof document > "u" ? null : document;
  function L0(t, e, l) {
    var n = Ca;
    if (n && typeof e == "string" && e) {
      var u = ke(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof l == "string" && (u += '[crossorigin="' + l + '"]'), q0.has(u) || (q0.add(u), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(u) === null && (e = n.createElement("link"), ce(e, "link", t), ee(e), n.head.appendChild(e)));
    }
  }
  function Lg(t) {
    jl.D(t), L0("dns-prefetch", t, null);
  }
  function Vg(t, e) {
    jl.C(t, e), L0("preconnect", t, e);
  }
  function Gg(t, e, l) {
    jl.L(t, e, l);
    var n = Ca;
    if (n && t && e) {
      var u = 'link[rel="preload"][as="' + ke(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (u += '[imagesrcset="' + ke(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (u += '[imagesizes="' + ke(
        l.imageSizes
      ) + '"]')) : u += '[href="' + ke(t) + '"]';
      var c = u;
      switch (e) {
        case "style":
          c = Da(t);
          break;
        case "script":
          c = Ma(t);
      }
      ll.has(c) || (t = v(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), ll.set(c, t), n.querySelector(u) !== null || e === "style" && n.querySelector(Ri(c)) || e === "script" && n.querySelector(Ui(c)) || (e = n.createElement("link"), ce(e, "link", t), ee(e), n.head.appendChild(e)));
    }
  }
  function Xg(t, e) {
    jl.m(t, e);
    var l = Ca;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + ke(n) + '"][href="' + ke(t) + '"]', c = u;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Ma(t);
      }
      if (!ll.has(c) && (t = v({ rel: "modulepreload", href: t }, e), ll.set(c, t), l.querySelector(u) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ui(c)))
              return;
        }
        n = l.createElement("link"), ce(n, "link", t), ee(n), l.head.appendChild(n);
      }
    }
  }
  function Qg(t, e, l) {
    jl.S(t, e, l);
    var n = Ca;
    if (n && t) {
      var u = $n(n).hoistableStyles, c = Da(t);
      e = e || "default";
      var o = u.get(c);
      if (!o) {
        var y = { loading: 0, preload: null };
        if (o = n.querySelector(
          Ri(c)
        ))
          y.loading = 5;
        else {
          t = v(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = ll.get(c)) && $s(t, l);
          var S = o = n.createElement("link");
          ee(S), ce(S, "link", t), S._p = new Promise(function(D, Y) {
            S.onload = D, S.onerror = Y;
          }), S.addEventListener("load", function() {
            y.loading |= 1;
          }), S.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, rf(o, e, n);
        }
        o = {
          type: "stylesheet",
          instance: o,
          count: 1,
          state: y
        }, u.set(c, o);
      }
    }
  }
  function Zg(t, e) {
    jl.X(t, e);
    var l = Ca;
    if (l && t) {
      var n = $n(l).hoistableScripts, u = Ma(t), c = n.get(u);
      c || (c = l.querySelector(Ui(u)), c || (t = v({ src: t, async: !0 }, e), (e = ll.get(u)) && Ps(t, e), c = l.createElement("script"), ee(c), ce(c, "link", t), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, n.set(u, c));
    }
  }
  function Kg(t, e) {
    jl.M(t, e);
    var l = Ca;
    if (l && t) {
      var n = $n(l).hoistableScripts, u = Ma(t), c = n.get(u);
      c || (c = l.querySelector(Ui(u)), c || (t = v({ src: t, async: !0, type: "module" }, e), (e = ll.get(u)) && Ps(t, e), c = l.createElement("script"), ee(c), ce(c, "link", t), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, n.set(u, c));
    }
  }
  function V0(t, e, l, n) {
    var u = (u = gt.current) ? sf(u) : null;
    if (!u) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Da(l.href), l = $n(
          u
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Da(l.href);
          var c = $n(
            u
          ).hoistableStyles, o = c.get(t);
          if (o || (u = u.ownerDocument || u, o = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(t, o), (c = u.querySelector(
            Ri(t)
          )) && !c._p && (o.instance = c, o.state.loading = 5), ll.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, ll.set(t, l), c || Jg(
            u,
            t,
            l,
            o.state
          ))), e && n === null)
            throw Error(i(528, ""));
          return o;
        }
        if (e && n !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ma(l), l = $n(
          u
        ).hoistableScripts, n = l.get(e), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, t));
    }
  }
  function Da(t) {
    return 'href="' + ke(t) + '"';
  }
  function Ri(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function G0(t) {
    return v({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Jg(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), ce(e, "link", l), ee(e), t.head.appendChild(e));
  }
  function Ma(t) {
    return '[src="' + ke(t) + '"]';
  }
  function Ui(t) {
    return "script[async]" + t;
  }
  function X0(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + ke(l.href) + '"]'
          );
          if (n)
            return e.instance = n, ee(n), n;
          var u = v({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), ee(n), ce(n, "style", u), rf(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          u = Da(l.href);
          var c = t.querySelector(
            Ri(u)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, ee(c), c;
          n = G0(l), (u = ll.get(u)) && $s(n, u), c = (t.ownerDocument || t).createElement("link"), ee(c);
          var o = c;
          return o._p = new Promise(function(y, S) {
            o.onload = y, o.onerror = S;
          }), ce(c, "link", n), e.state.loading |= 4, rf(c, l.precedence, t), e.instance = c;
        case "script":
          return c = Ma(l.src), (u = t.querySelector(
            Ui(c)
          )) ? (e.instance = u, ee(u), u) : (n = l, (u = ll.get(c)) && (n = v({}, l), Ps(n, u)), t = t.ownerDocument || t, u = t.createElement("script"), ee(u), ce(u, "link", n), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(i(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, rf(n, l.precedence, t));
    return e.instance;
  }
  function rf(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = n.length ? n[n.length - 1] : null, c = u, o = 0; o < n.length; o++) {
      var y = n[o];
      if (y.dataset.precedence === e) c = y;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function $s(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Ps(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var of = null;
  function Q0(t, e, l) {
    if (of === null) {
      var n = /* @__PURE__ */ new Map(), u = of = /* @__PURE__ */ new Map();
      u.set(l, n);
    } else
      u = of, n = u.get(l), n || (n = /* @__PURE__ */ new Map(), u.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), u = 0; u < l.length; u++) {
      var c = l[u];
      if (!(c[Fa] || c[ae] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var o = c.getAttribute(e) || "";
        o = t + o;
        var y = n.get(o);
        y ? y.push(c) : n.set(o, [c]);
      }
    }
    return n;
  }
  function Z0(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function kg(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function K0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Fg(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var u = Da(n.href), c = e.querySelector(
          Ri(u)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = hf.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = c, ee(c);
          return;
        }
        c = e.ownerDocument || e, n = G0(n), (u = ll.get(u)) && $s(n, u), c = c.createElement("link"), ee(c);
        var o = c;
        o._p = new Promise(function(y, S) {
          o.onload = y, o.onerror = S;
        }), ce(c, "link", n), l.instance = c;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = hf.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Is = 0;
  function Wg(t, e) {
    return t.stylesheets && t.count === 0 && _f(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && _f(t, t.stylesheets), t.unsuspend) {
          var c = t.unsuspend;
          t.unsuspend = null, c();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Is === 0 && (Is = 62500 * Mg());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && _f(t, t.stylesheets), t.unsuspend)) {
            var c = t.unsuspend;
            t.unsuspend = null, c();
          }
        },
        (t.imgBytes > Is ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(u);
      };
    } : null;
  }
  function hf() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) _f(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var df = null;
  function _f(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, df = /* @__PURE__ */ new Map(), e.forEach($g, t), df = null, hf.call(t));
  }
  function $g(t, e) {
    if (!(e.state.loading & 4)) {
      var l = df.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), df.set(t, l);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < u.length; c++) {
          var o = u[c];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (l.set(o.dataset.precedence, o), n = o);
        }
        n && l.set(null, n);
      }
      u = e.instance, o = u.getAttribute("data-precedence"), c = l.get(o) || n, c === n && l.set(null, u), l.set(o, u), this.count++, n = hf.bind(this), u.addEventListener("load", n), u.addEventListener("error", n), c ? c.parentNode.insertBefore(u, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ji = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function Pg(t, e, l, n, u, c, o, y, S) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = kf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kf(0), this.hiddenUpdates = kf(null), this.identifierPrefix = n, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function J0(t, e, l, n, u, c, o, y, S, D, Y, Q) {
    return t = new Pg(
      t,
      e,
      l,
      o,
      S,
      D,
      Y,
      Q,
      y
    ), e = 1, c === !0 && (e |= 24), c = je(3, null, null, e), t.current = c, c.stateNode = t, e = Rc(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, Bc(c), t;
  }
  function k0(t) {
    return t ? (t = fa, t) : fa;
  }
  function F0(t, e, l, n, u, c) {
    u = k0(u), n.context === null ? n.context = u : n.pendingContext = u, n = Jl(e), n.payload = { element: l }, c = c === void 0 ? null : c, c !== null && (n.callback = c), l = kl(t, n, e), l !== null && (xe(l, t, e), hi(l, t, e));
  }
  function W0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function tr(t, e) {
    W0(t, e), (t = t.alternate) && W0(t, e);
  }
  function $0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = zn(t, 67108864);
      e !== null && xe(e, t, 67108864), tr(t, 67108864);
    }
  }
  function P0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = qe();
      e = Ff(e);
      var l = zn(t, e);
      l !== null && xe(l, t, e), tr(t, e);
    }
  }
  var mf = !0;
  function Ig(t, e, l, n) {
    var u = M.T;
    M.T = null;
    var c = k.p;
    try {
      k.p = 2, er(t, e, l, n);
    } finally {
      k.p = c, M.T = u;
    }
  }
  function ty(t, e, l, n) {
    var u = M.T;
    M.T = null;
    var c = k.p;
    try {
      k.p = 8, er(t, e, l, n);
    } finally {
      k.p = c, M.T = u;
    }
  }
  function er(t, e, l, n) {
    if (mf) {
      var u = lr(n);
      if (u === null)
        Vs(
          t,
          e,
          n,
          gf,
          l
        ), t_(t, n);
      else if (ly(
        u,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (t_(t, n), e & 4 && -1 < ey.indexOf(t)) {
        for (; u !== null; ) {
          var c = Wn(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var o = Sn(c.pendingLanes);
                  if (o !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; o; ) {
                      var S = 1 << 31 - Re(o);
                      y.entanglements[1] |= S, o &= ~S;
                    }
                    hl(c), (Et & 6) === 0 && ($u = Me() + 500, Ci(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = zn(c, 2), y !== null && xe(y, c, 2), Iu(), tr(c, 2);
            }
          if (c = lr(n), c === null && Vs(
            t,
            e,
            n,
            gf,
            l
          ), c === u) break;
          u = c;
        }
        u !== null && n.stopPropagation();
      } else
        Vs(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function lr(t) {
    return t = ac(t), nr(t);
  }
  var gf = null;
  function nr(t) {
    if (gf = null, t = Fn(t), t !== null) {
      var e = r(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return gf = t, null;
  }
  function I0(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (L1()) {
          case uo:
            return 2;
          case fo:
            return 8;
          case au:
          case V1:
            return 32;
          case co:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ar = !1, un = null, fn = null, cn = null, wi = /* @__PURE__ */ new Map(), Bi = /* @__PURE__ */ new Map(), sn = [], ey = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function t_(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        un = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        cn = null;
        break;
      case "pointerover":
      case "pointerout":
        wi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bi.delete(e.pointerId);
    }
  }
  function Hi(t, e, l, n, u, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: c,
      targetContainers: [u]
    }, e !== null && (e = Wn(e), e !== null && $0(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function ly(t, e, l, n, u) {
    switch (e) {
      case "focusin":
        return un = Hi(
          un,
          t,
          e,
          l,
          n,
          u
        ), !0;
      case "dragenter":
        return fn = Hi(
          fn,
          t,
          e,
          l,
          n,
          u
        ), !0;
      case "mouseover":
        return cn = Hi(
          cn,
          t,
          e,
          l,
          n,
          u
        ), !0;
      case "pointerover":
        var c = u.pointerId;
        return wi.set(
          c,
          Hi(
            wi.get(c) || null,
            t,
            e,
            l,
            n,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, Bi.set(
          c,
          Hi(
            Bi.get(c) || null,
            t,
            e,
            l,
            n,
            u
          )
        ), !0;
    }
    return !1;
  }
  function e_(t) {
    var e = Fn(t.target);
    if (e !== null) {
      var l = r(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = h(l), e !== null) {
            t.blockedOn = e, mo(t.priority, function() {
              P0(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = d(l), e !== null) {
            t.blockedOn = e, mo(t.priority, function() {
              P0(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function yf(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = lr(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        nc = n, l.target.dispatchEvent(n), nc = null;
      } else
        return e = Wn(l), e !== null && $0(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function l_(t, e, l) {
    yf(t) && l.delete(e);
  }
  function ny() {
    ar = !1, un !== null && yf(un) && (un = null), fn !== null && yf(fn) && (fn = null), cn !== null && yf(cn) && (cn = null), wi.forEach(l_), Bi.forEach(l_);
  }
  function pf(t, e) {
    t.blockedOn === e && (t.blockedOn = null, ar || (ar = !0, m.unstable_scheduleCallback(
      m.unstable_NormalPriority,
      ny
    )));
  }
  var vf = null;
  function n_(t) {
    vf !== t && (vf = t, m.unstable_scheduleCallback(
      m.unstable_NormalPriority,
      function() {
        vf === t && (vf = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], u = t[e + 2];
          if (typeof n != "function") {
            if (nr(n || l) === null)
              continue;
            break;
          }
          var c = Wn(l);
          c !== null && (t.splice(e, 3), e -= 3, ls(
            c,
            {
              pending: !0,
              data: u,
              method: l.method,
              action: n
            },
            n,
            u
          ));
        }
      }
    ));
  }
  function Na(t) {
    function e(S) {
      return pf(S, t);
    }
    un !== null && pf(un, t), fn !== null && pf(fn, t), cn !== null && pf(cn, t), wi.forEach(e), Bi.forEach(e);
    for (var l = 0; l < sn.length; l++) {
      var n = sn[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < sn.length && (l = sn[0], l.blockedOn === null); )
      e_(l), l.blockedOn === null && sn.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var u = l[n], c = l[n + 1], o = u[ye] || null;
        if (typeof c == "function")
          o || n_(l);
        else if (o) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, o = c[ye] || null)
              y = o.formAction;
            else if (nr(u) !== null) continue;
          } else y = o.action;
          typeof y == "function" ? l[n + 1] = y : (l.splice(n, 3), n -= 3), n_(l);
        }
      }
  }
  function a_() {
    function t(c) {
      c.canIntercept && c.info === "react-transition" && c.intercept({
        handler: function() {
          return new Promise(function(o) {
            return u = o;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      u !== null && (u(), u = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var c = navigation.currentEntry;
        c && c.url != null && navigation.navigate(c.url, {
          state: c.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function ir(t) {
    this._internalRoot = t;
  }
  bf.prototype.render = ir.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(i(409));
    var l = e.current, n = qe();
    F0(l, n, t, e, null, null);
  }, bf.prototype.unmount = ir.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      F0(t.current, 2, null, t, null, null), Iu(), e[kn] = null;
    }
  };
  function bf(t) {
    this._internalRoot = t;
  }
  bf.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = _o();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < sn.length && e !== 0 && e < sn[l].priority; l++) ;
      sn.splice(l, 0, t), l === 0 && e_(t);
    }
  };
  var i_ = a.version;
  if (i_ !== "19.2.5")
    throw Error(
      i(
        527,
        i_,
        "19.2.5"
      )
    );
  k.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","), Error(i(268, t)));
    return t = _(e), t = t !== null ? p(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var ay = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sf.isDisabled && Sf.supportsFiber)
      try {
        Ka = Sf.inject(
          ay
        ), Ne = Sf;
      } catch {
      }
  }
  return qi.createRoot = function(t, e) {
    if (!s(t)) throw Error(i(299));
    var l = !1, n = "", u = hd, c = dd, o = _d;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = J0(
      t,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      u,
      c,
      o,
      a_
    ), t[kn] = e.current, Ls(t), new ir(e);
  }, qi.hydrateRoot = function(t, e, l) {
    if (!s(t)) throw Error(i(299));
    var n = !1, u = "", c = hd, o = dd, y = _d, S = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (c = l.onUncaughtError), l.onCaughtError !== void 0 && (o = l.onCaughtError), l.onRecoverableError !== void 0 && (y = l.onRecoverableError), l.formState !== void 0 && (S = l.formState)), e = J0(
      t,
      1,
      !0,
      e,
      l ?? null,
      n,
      u,
      S,
      c,
      o,
      y,
      a_
    ), e.context = k0(null), l = e.current, n = qe(), n = Ff(n), u = Jl(n), u.callback = null, kl(l, u, n), l = n, e.current.lanes = l, ka(e, l), hl(e), t[kn] = e.current, Ls(t), new bf(e);
  }, qi.version = "19.2.5", qi;
}
var m_;
function _y() {
  if (m_) return fr.exports;
  m_ = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (a) {
        console.error(a);
      }
  }
  return m(), fr.exports = dy(), fr.exports;
}
var my = _y(), ft = Hr();
function wl(m) {
  if (m === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return m;
}
function H_(m, a) {
  m.prototype = Object.create(a.prototype), m.prototype.constructor = m, m.__proto__ = a;
}
var Qe = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, qa = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Yr, se, Yt, al = 1e8, jt = 1 / al, xr = Math.PI * 2, gy = xr / 4, yy = 0, Y_ = Math.sqrt, py = Math.cos, vy = Math.sin, ne = function(a) {
  return typeof a == "string";
}, Qt = function(a) {
  return typeof a == "function";
}, Hl = function(a) {
  return typeof a == "number";
}, qr = function(a) {
  return typeof a > "u";
}, gl = function(a) {
  return typeof a == "object";
}, Ee = function(a) {
  return a !== !1;
}, Lr = function() {
  return typeof window < "u";
}, Tf = function(a) {
  return Qt(a) || ne(a);
}, q_ = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, de = Array.isArray, by = /random\([^)]+\)/g, Sy = /,\s*/g, g_ = /(?:-?\.?\d|\.)+/gi, L_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ja = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, hr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, V_ = /[+-]=-?[.\d]+/, Ty = /[^,'"\[\]\s]+/gi, xy = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Lt, dl, Ar, Vr, Ze = {}, Rf = {}, G_, X_ = function(a) {
  return (Rf = La(a, Ze)) && De;
}, Gr = function(a, f) {
  return console.warn("Invalid property", a, "set to", f, "Missing plugin? gsap.registerPlugin()");
}, Fi = function(a, f) {
  return !f && console.warn(a);
}, Q_ = function(a, f) {
  return a && (Ze[a] = f) && Rf && (Rf[a] = f) || Ze;
}, Wi = function() {
  return 0;
}, Ay = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ef = {
  suppressEvents: !0,
  kill: !1
}, Ey = {
  suppressEvents: !0
}, Xr = {}, _n = [], Er = {}, Z_, Le = {}, dr = {}, y_ = 30, zf = [], Qr = "", Zr = function(a) {
  var f = a[0], i, s;
  if (gl(f) || Qt(f) || (a = [a]), !(i = (f._gsap || {}).harness)) {
    for (s = zf.length; s-- && !zf[s].targetTest(f); )
      ;
    i = zf[s];
  }
  for (s = a.length; s--; )
    a[s] && (a[s]._gsap || (a[s]._gsap = new m1(a[s], i))) || a.splice(s, 1);
  return a;
}, Xn = function(a) {
  return a._gsap || Zr(il(a))[0]._gsap;
}, K_ = function(a, f, i) {
  return (i = a[f]) && Qt(i) ? a[f]() : qr(i) && a.getAttribute && a.getAttribute(f) || i;
}, ze = function(a, f) {
  return (a = a.split(",")).forEach(f) || a;
}, kt = function(a) {
  return Math.round(a * 1e5) / 1e5 || 0;
}, qt = function(a) {
  return Math.round(a * 1e7) / 1e7 || 0;
}, Ba = function(a, f) {
  var i = f.charAt(0), s = parseFloat(f.substr(2));
  return a = parseFloat(a), i === "+" ? a + s : i === "-" ? a - s : i === "*" ? a * s : a / s;
}, zy = function(a, f) {
  for (var i = f.length, s = 0; a.indexOf(f[s]) < 0 && ++s < i; )
    ;
  return s < i;
}, Uf = function() {
  var a = _n.length, f = _n.slice(0), i, s;
  for (Er = {}, _n.length = 0, i = 0; i < a; i++)
    s = f[i], s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0);
}, Kr = function(a) {
  return !!(a._initted || a._startAt || a.add);
}, J_ = function(a, f, i, s) {
  _n.length && !se && Uf(), a.render(f, i, !!(se && f < 0 && Kr(a))), _n.length && !se && Uf();
}, k_ = function(a) {
  var f = parseFloat(a);
  return (f || f === 0) && (a + "").match(Ty).length < 2 ? f : ne(a) ? a.trim() : a;
}, F_ = function(a) {
  return a;
}, Ke = function(a, f) {
  for (var i in f)
    i in a || (a[i] = f[i]);
  return a;
}, Oy = function(a) {
  return function(f, i) {
    for (var s in i)
      s in f || s === "duration" && a || s === "ease" || (f[s] = i[s]);
  };
}, La = function(a, f) {
  for (var i in f)
    a[i] = f[i];
  return a;
}, p_ = function m(a, f) {
  for (var i in f)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (a[i] = gl(f[i]) ? m(a[i] || (a[i] = {}), f[i]) : f[i]);
  return a;
}, jf = function(a, f) {
  var i = {}, s;
  for (s in a)
    s in f || (i[s] = a[s]);
  return i;
}, Qi = function(a) {
  var f = a.parent || Lt, i = a.keyframes ? Oy(de(a.keyframes)) : Ke;
  if (Ee(a.inherit))
    for (; f; )
      i(a, f.vars.defaults), f = f.parent || f._dp;
  return a;
}, Cy = function(a, f) {
  for (var i = a.length, s = i === f.length; s && i-- && a[i] === f[i]; )
    ;
  return i < 0;
}, W_ = function(a, f, i, s, r) {
  var h = a[s], d;
  if (r)
    for (d = f[r]; h && h[r] > d; )
      h = h._prev;
  return h ? (f._next = h._next, h._next = f) : (f._next = a[i], a[i] = f), f._next ? f._next._prev = f : a[s] = f, f._prev = h, f.parent = f._dp = a, f;
}, qf = function(a, f, i, s) {
  i === void 0 && (i = "_first"), s === void 0 && (s = "_last");
  var r = f._prev, h = f._next;
  r ? r._next = h : a[i] === f && (a[i] = h), h ? h._prev = r : a[s] === f && (a[s] = r), f._next = f._prev = f.parent = null;
}, gn = function(a, f) {
  a.parent && (!f || a.parent.autoRemoveChildren) && a.parent.remove && a.parent.remove(a), a._act = 0;
}, Qn = function(a, f) {
  if (a && (!f || f._end > a._dur || f._start < 0))
    for (var i = a; i; )
      i._dirty = 1, i = i.parent;
  return a;
}, Dy = function(a) {
  for (var f = a.parent; f && f.parent; )
    f._dirty = 1, f.totalDuration(), f = f.parent;
  return a;
}, zr = function(a, f, i, s) {
  return a._startAt && (se ? a._startAt.revert(Ef) : a.vars.immediateRender && !a.vars.autoRevert || a._startAt.render(f, !0, s));
}, My = function m(a) {
  return !a || a._ts && m(a.parent);
}, v_ = function(a) {
  return a._repeat ? Va(a._tTime, a = a.duration() + a._rDelay) * a : 0;
}, Va = function(a, f) {
  var i = Math.floor(a = qt(a / f));
  return a && i === a ? i - 1 : i;
}, wf = function(a, f) {
  return (a - f._start) * f._ts + (f._ts >= 0 ? 0 : f._dirty ? f.totalDuration() : f._tDur);
}, Lf = function(a) {
  return a._end = qt(a._start + (a._tDur / Math.abs(a._ts || a._rts || jt) || 0));
}, Vf = function(a, f) {
  var i = a._dp;
  return i && i.smoothChildTiming && a._ts && (a._start = qt(i._time - (a._ts > 0 ? f / a._ts : ((a._dirty ? a.totalDuration() : a._tDur) - f) / -a._ts)), Lf(a), i._dirty || Qn(i, a)), a;
}, $_ = function(a, f) {
  var i;
  if ((f._time || !f._dur && f._initted || f._start < a._time && (f._dur || !f.add)) && (i = wf(a.rawTime(), f), (!f._dur || lu(0, f.totalDuration(), i) - f._tTime > jt) && f.render(i, !0)), Qn(a, f)._dp && a._initted && a._time >= a._dur && a._ts) {
    if (a._dur < a.duration())
      for (i = a; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    a._zTime = -jt;
  }
}, _l = function(a, f, i, s) {
  return f.parent && gn(f), f._start = qt((Hl(i) ? i : i || a !== Lt ? nl(a, i, f) : a._time) + f._delay), f._end = qt(f._start + (f.totalDuration() / Math.abs(f.timeScale()) || 0)), W_(a, f, "_first", "_last", a._sort ? "_start" : 0), Or(f) || (a._recent = f), s || $_(a, f), a._ts < 0 && Vf(a, a._tTime), a;
}, P_ = function(a, f) {
  return (Ze.ScrollTrigger || Gr("scrollTrigger", f)) && Ze.ScrollTrigger.create(f, a);
}, I_ = function(a, f, i, s, r) {
  if (kr(a, f, r), !a._initted)
    return 1;
  if (!i && a._pt && !se && (a._dur && a.vars.lazy !== !1 || !a._dur && a.vars.lazy) && Z_ !== Ve.frame)
    return _n.push(a), a._lazy = [r, s], 1;
}, Ny = function m(a) {
  var f = a.parent;
  return f && f._ts && f._initted && !f._lock && (f.rawTime() < 0 || m(f));
}, Or = function(a) {
  var f = a.data;
  return f === "isFromStart" || f === "isStart";
}, Ry = function(a, f, i, s) {
  var r = a.ratio, h = f < 0 || !f && (!a._start && Ny(a) && !(!a._initted && Or(a)) || (a._ts < 0 || a._dp._ts < 0) && !Or(a)) ? 0 : 1, d = a._rDelay, g = 0, _, p, v;
  if (d && a._repeat && (g = lu(0, a._tDur, f), p = Va(g, d), a._yoyo && p & 1 && (h = 1 - h), p !== Va(a._tTime, d) && (r = 1 - h, a.vars.repeatRefresh && a._initted && a.invalidate())), h !== r || se || s || a._zTime === jt || !f && a._zTime) {
    if (!a._initted && I_(a, f, s, i, g))
      return;
    for (v = a._zTime, a._zTime = f || (i ? jt : 0), i || (i = f && !v), a.ratio = h, a._from && (h = 1 - h), a._time = 0, a._tTime = g, _ = a._pt; _; )
      _.r(h, _.d), _ = _._next;
    f < 0 && zr(a, f, i, !0), a._onUpdate && !i && Ge(a, "onUpdate"), g && a._repeat && !i && a.parent && Ge(a, "onRepeat"), (f >= a._tDur || f < 0) && a.ratio === h && (h && gn(a, 1), !i && !se && (Ge(a, h ? "onComplete" : "onReverseComplete", !0), a._prom && a._prom()));
  } else a._zTime || (a._zTime = f);
}, Uy = function(a, f, i) {
  var s;
  if (i > f)
    for (s = a._first; s && s._start <= i; ) {
      if (s.data === "isPause" && s._start > f)
        return s;
      s = s._next;
    }
  else
    for (s = a._last; s && s._start >= i; ) {
      if (s.data === "isPause" && s._start < f)
        return s;
      s = s._prev;
    }
}, Ga = function(a, f, i, s) {
  var r = a._repeat, h = qt(f) || 0, d = a._tTime / a._tDur;
  return d && !s && (a._time *= h / a._dur), a._dur = h, a._tDur = r ? r < 0 ? 1e10 : qt(h * (r + 1) + a._rDelay * r) : h, d > 0 && !s && Vf(a, a._tTime = a._tDur * d), a.parent && Lf(a), i || Qn(a.parent, a), a;
}, b_ = function(a) {
  return a instanceof ge ? Qn(a) : Ga(a, a._dur);
}, jy = {
  _start: 0,
  endTime: Wi,
  totalDuration: Wi
}, nl = function m(a, f, i) {
  var s = a.labels, r = a._recent || jy, h = a.duration() >= al ? r.endTime(!1) : a._dur, d, g, _;
  return ne(f) && (isNaN(f) || f in s) ? (g = f.charAt(0), _ = f.substr(-1) === "%", d = f.indexOf("="), g === "<" || g === ">" ? (d >= 0 && (f = f.replace(/=/, "")), (g === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(f.substr(1)) || 0) * (_ ? (d < 0 ? r : i).totalDuration() / 100 : 1)) : d < 0 ? (f in s || (s[f] = h), s[f]) : (g = parseFloat(f.charAt(d - 1) + f.substr(d + 1)), _ && i && (g = g / 100 * (de(i) ? i[0] : i).totalDuration()), d > 1 ? m(a, f.substr(0, d - 1), i) + g : h + g)) : f == null ? h : +f;
}, Zi = function(a, f, i) {
  var s = Hl(f[1]), r = (s ? 2 : 1) + (a < 2 ? 0 : 1), h = f[r], d, g;
  if (s && (h.duration = f[1]), h.parent = i, a) {
    for (d = h, g = i; g && !("immediateRender" in d); )
      d = g.vars.defaults || {}, g = Ee(g.vars.inherit) && g.parent;
    h.immediateRender = Ee(d.immediateRender), a < 2 ? h.runBackwards = 1 : h.startAt = f[r - 1];
  }
  return new It(f[0], h, f[r + 1]);
}, vn = function(a, f) {
  return a || a === 0 ? f(a) : f;
}, lu = function(a, f, i) {
  return i < a ? a : i > f ? f : i;
}, he = function(a, f) {
  return !ne(a) || !(f = xy.exec(a)) ? "" : f[1];
}, wy = function(a, f, i) {
  return vn(i, function(s) {
    return lu(a, f, s);
  });
}, Cr = [].slice, t1 = function(a, f) {
  return a && gl(a) && "length" in a && (!f && !a.length || a.length - 1 in a && gl(a[0])) && !a.nodeType && a !== dl;
}, By = function(a, f, i) {
  return i === void 0 && (i = []), a.forEach(function(s) {
    var r;
    return ne(s) && !f || t1(s, 1) ? (r = i).push.apply(r, il(s)) : i.push(s);
  }) || i;
}, il = function(a, f, i) {
  return Yt && !f && Yt.selector ? Yt.selector(a) : ne(a) && !i && (Ar || !Xa()) ? Cr.call((f || Vr).querySelectorAll(a), 0) : de(a) ? By(a, i) : t1(a) ? Cr.call(a, 0) : a ? [a] : [];
}, Dr = function(a) {
  return a = il(a)[0] || Fi("Invalid scope") || {}, function(f) {
    var i = a.current || a.nativeElement || a;
    return il(f, i.querySelectorAll ? i : i === a ? Fi("Invalid scope") || Vr.createElement("div") : a);
  };
}, e1 = function(a) {
  return a.sort(function() {
    return 0.5 - Math.random();
  });
}, l1 = function(a) {
  if (Qt(a))
    return a;
  var f = gl(a) ? a : {
    each: a
  }, i = Zn(f.ease), s = f.from || 0, r = parseFloat(f.base) || 0, h = {}, d = s > 0 && s < 1, g = isNaN(s) || d, _ = f.axis, p = s, v = s;
  return ne(s) ? p = v = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[s] || 0 : !d && g && (p = s[0], v = s[1]), function(A, E, N) {
    var b = (N || f).length, U = h[b], V, Z, H, J, w, K, L, F, X;
    if (!U) {
      if (X = f.grid === "auto" ? 0 : (f.grid || [1, al])[1], !X) {
        for (L = -al; L < (L = N[X++].getBoundingClientRect().left) && X < b; )
          ;
        X < b && X--;
      }
      for (U = h[b] = [], V = g ? Math.min(X, b) * p - 0.5 : s % X, Z = X === al ? 0 : g ? b * v / X - 0.5 : s / X | 0, L = 0, F = al, K = 0; K < b; K++)
        H = K % X - V, J = Z - (K / X | 0), U[K] = w = _ ? Math.abs(_ === "y" ? J : H) : Y_(H * H + J * J), w > L && (L = w), w < F && (F = w);
      s === "random" && e1(U), U.max = L - F, U.min = F, U.v = b = (parseFloat(f.amount) || parseFloat(f.each) * (X > b ? b - 1 : _ ? _ === "y" ? b / X : X : Math.max(X, b / X)) || 0) * (s === "edges" ? -1 : 1), U.b = b < 0 ? r - b : r, U.u = he(f.amount || f.each) || 0, i = i && b < 0 ? h1(i) : i;
    }
    return b = (U[A] - U.min) / U.max || 0, qt(U.b + (i ? i(b) : b) * U.v) + U.u;
  };
}, Mr = function(a) {
  var f = Math.pow(10, ((a + "").split(".")[1] || "").length);
  return function(i) {
    var s = qt(Math.round(parseFloat(i) / a) * a * f);
    return (s - s % 1) / f + (Hl(i) ? 0 : he(i));
  };
}, n1 = function(a, f) {
  var i = de(a), s, r;
  return !i && gl(a) && (s = i = a.radius || al, a.values ? (a = il(a.values), (r = !Hl(a[0])) && (s *= s)) : a = Mr(a.increment)), vn(f, i ? Qt(a) ? function(h) {
    return r = a(h), Math.abs(r - h) <= s ? r : h;
  } : function(h) {
    for (var d = parseFloat(r ? h.x : h), g = parseFloat(r ? h.y : 0), _ = al, p = 0, v = a.length, A, E; v--; )
      r ? (A = a[v].x - d, E = a[v].y - g, A = A * A + E * E) : A = Math.abs(a[v] - d), A < _ && (_ = A, p = v);
    return p = !s || _ <= s ? a[p] : h, r || p === h || Hl(h) ? p : p + he(h);
  } : Mr(a));
}, a1 = function(a, f, i, s) {
  return vn(de(a) ? !f : i === !0 ? !!(i = 0) : !s, function() {
    return de(a) ? a[~~(Math.random() * a.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((a - i / 2 + Math.random() * (f - a + i * 0.99)) / i) * i * s) / s;
  });
}, Hy = function() {
  for (var a = arguments.length, f = new Array(a), i = 0; i < a; i++)
    f[i] = arguments[i];
  return function(s) {
    return f.reduce(function(r, h) {
      return h(r);
    }, s);
  };
}, Yy = function(a, f) {
  return function(i) {
    return a(parseFloat(i)) + (f || he(i));
  };
}, qy = function(a, f, i) {
  return u1(a, f, 0, 1, i);
}, i1 = function(a, f, i) {
  return vn(i, function(s) {
    return a[~~f(s)];
  });
}, Ly = function m(a, f, i) {
  var s = f - a;
  return de(a) ? i1(a, m(0, a.length), f) : vn(i, function(r) {
    return (s + (r - a) % s) % s + a;
  });
}, Vy = function m(a, f, i) {
  var s = f - a, r = s * 2;
  return de(a) ? i1(a, m(0, a.length - 1), f) : vn(i, function(h) {
    return h = (r + (h - a) % r) % r || 0, a + (h > s ? r - h : h);
  });
}, $i = function(a) {
  return a.replace(by, function(f) {
    var i = f.indexOf("[") + 1, s = f.substring(i || 7, i ? f.indexOf("]") : f.length - 1).split(Sy);
    return a1(i ? s : +s[0], i ? 0 : +s[1], +s[2] || 1e-5);
  });
}, u1 = function(a, f, i, s, r) {
  var h = f - a, d = s - i;
  return vn(r, function(g) {
    return i + ((g - a) / h * d || 0);
  });
}, Gy = function m(a, f, i, s) {
  var r = isNaN(a + f) ? 0 : function(E) {
    return (1 - E) * a + E * f;
  };
  if (!r) {
    var h = ne(a), d = {}, g, _, p, v, A;
    if (i === !0 && (s = 1) && (i = null), h)
      a = {
        p: a
      }, f = {
        p: f
      };
    else if (de(a) && !de(f)) {
      for (p = [], v = a.length, A = v - 2, _ = 1; _ < v; _++)
        p.push(m(a[_ - 1], a[_]));
      v--, r = function(N) {
        N *= v;
        var b = Math.min(A, ~~N);
        return p[b](N - b);
      }, i = f;
    } else s || (a = La(de(a) ? [] : {}, a));
    if (!p) {
      for (g in f)
        Jr.call(d, a, g, "get", f[g]);
      r = function(N) {
        return $r(N, d) || (h ? a.p : a);
      };
    }
  }
  return vn(i, r);
}, S_ = function(a, f, i) {
  var s = a.labels, r = al, h, d, g;
  for (h in s)
    d = s[h] - f, d < 0 == !!i && d && r > (d = Math.abs(d)) && (g = h, r = d);
  return g;
}, Ge = function(a, f, i) {
  var s = a.vars, r = s[f], h = Yt, d = a._ctx, g, _, p;
  if (r)
    return g = s[f + "Params"], _ = s.callbackScope || a, i && _n.length && Uf(), d && (Yt = d), p = g ? r.apply(_, g) : r.call(_), Yt = h, p;
}, Vi = function(a) {
  return gn(a), a.scrollTrigger && a.scrollTrigger.kill(!!se), a.progress() < 1 && Ge(a, "onInterrupt"), a;
}, wa, f1 = [], c1 = function(a) {
  if (a)
    if (a = !a.name && a.default || a, Lr() || a.headless) {
      var f = a.name, i = Qt(a), s = f && !i && a.init ? function() {
        this._props = [];
      } : a, r = {
        init: Wi,
        render: $r,
        add: Jr,
        kill: ap,
        modifier: np,
        rawVars: 0
      }, h = {
        targetTest: 0,
        get: 0,
        getSetter: Wr,
        aliases: {},
        register: 0
      };
      if (Xa(), a !== s) {
        if (Le[f])
          return;
        Ke(s, Ke(jf(a, r), h)), La(s.prototype, La(r, jf(a, h))), Le[s.prop = f] = s, a.targetTest && (zf.push(s), Xr[f] = 1), f = (f === "css" ? "CSS" : f.charAt(0).toUpperCase() + f.substr(1)) + "Plugin";
      }
      Q_(f, s), a.register && a.register(De, s, Oe);
    } else
      f1.push(a);
}, Ut = 255, Gi = {
  aqua: [0, Ut, Ut],
  lime: [0, Ut, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Ut],
  navy: [0, 0, 128],
  white: [Ut, Ut, Ut],
  olive: [128, 128, 0],
  yellow: [Ut, Ut, 0],
  orange: [Ut, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Ut, 0, 0],
  pink: [Ut, 192, 203],
  cyan: [0, Ut, Ut],
  transparent: [Ut, Ut, Ut, 0]
}, _r = function(a, f, i) {
  return a += a < 0 ? 1 : a > 1 ? -1 : 0, (a * 6 < 1 ? f + (i - f) * a * 6 : a < 0.5 ? i : a * 3 < 2 ? f + (i - f) * (2 / 3 - a) * 6 : f) * Ut + 0.5 | 0;
}, s1 = function(a, f, i) {
  var s = a ? Hl(a) ? [a >> 16, a >> 8 & Ut, a & Ut] : 0 : Gi.black, r, h, d, g, _, p, v, A, E, N;
  if (!s) {
    if (a.substr(-1) === "," && (a = a.substr(0, a.length - 1)), Gi[a])
      s = Gi[a];
    else if (a.charAt(0) === "#") {
      if (a.length < 6 && (r = a.charAt(1), h = a.charAt(2), d = a.charAt(3), a = "#" + r + r + h + h + d + d + (a.length === 5 ? a.charAt(4) + a.charAt(4) : "")), a.length === 9)
        return s = parseInt(a.substr(1, 6), 16), [s >> 16, s >> 8 & Ut, s & Ut, parseInt(a.substr(7), 16) / 255];
      a = parseInt(a.substr(1), 16), s = [a >> 16, a >> 8 & Ut, a & Ut];
    } else if (a.substr(0, 3) === "hsl") {
      if (s = N = a.match(g_), !f)
        g = +s[0] % 360 / 360, _ = +s[1] / 100, p = +s[2] / 100, h = p <= 0.5 ? p * (_ + 1) : p + _ - p * _, r = p * 2 - h, s.length > 3 && (s[3] *= 1), s[0] = _r(g + 1 / 3, r, h), s[1] = _r(g, r, h), s[2] = _r(g - 1 / 3, r, h);
      else if (~a.indexOf("="))
        return s = a.match(L_), i && s.length < 4 && (s[3] = 1), s;
    } else
      s = a.match(g_) || Gi.transparent;
    s = s.map(Number);
  }
  return f && !N && (r = s[0] / Ut, h = s[1] / Ut, d = s[2] / Ut, v = Math.max(r, h, d), A = Math.min(r, h, d), p = (v + A) / 2, v === A ? g = _ = 0 : (E = v - A, _ = p > 0.5 ? E / (2 - v - A) : E / (v + A), g = v === r ? (h - d) / E + (h < d ? 6 : 0) : v === h ? (d - r) / E + 2 : (r - h) / E + 4, g *= 60), s[0] = ~~(g + 0.5), s[1] = ~~(_ * 100 + 0.5), s[2] = ~~(p * 100 + 0.5)), i && s.length < 4 && (s[3] = 1), s;
}, r1 = function(a) {
  var f = [], i = [], s = -1;
  return a.split(mn).forEach(function(r) {
    var h = r.match(ja) || [];
    f.push.apply(f, h), i.push(s += h.length + 1);
  }), f.c = i, f;
}, T_ = function(a, f, i) {
  var s = "", r = (a + s).match(mn), h = f ? "hsla(" : "rgba(", d = 0, g, _, p, v;
  if (!r)
    return a;
  if (r = r.map(function(A) {
    return (A = s1(A, f, 1)) && h + (f ? A[0] + "," + A[1] + "%," + A[2] + "%," + A[3] : A.join(",")) + ")";
  }), i && (p = r1(a), g = i.c, g.join(s) !== p.c.join(s)))
    for (_ = a.replace(mn, "1").split(ja), v = _.length - 1; d < v; d++)
      s += _[d] + (~g.indexOf(d) ? r.shift() || h + "0,0,0,0)" : (p.length ? p : r.length ? r : i).shift());
  if (!_)
    for (_ = a.split(mn), v = _.length - 1; d < v; d++)
      s += _[d] + r[d];
  return s + _[v];
}, mn = (function() {
  var m = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", a;
  for (a in Gi)
    m += "|" + a + "\\b";
  return new RegExp(m + ")", "gi");
})(), Xy = /hsl[a]?\(/, o1 = function(a) {
  var f = a.join(" "), i;
  if (mn.lastIndex = 0, mn.test(f))
    return i = Xy.test(f), a[1] = T_(a[1], i), a[0] = T_(a[0], i, r1(a[1])), !0;
}, Pi, Ve = (function() {
  var m = Date.now, a = 500, f = 33, i = m(), s = i, r = 1e3 / 240, h = r, d = [], g, _, p, v, A, E, N = function b(U) {
    var V = m() - s, Z = U === !0, H, J, w, K;
    if ((V > a || V < 0) && (i += V - f), s += V, w = s - i, H = w - h, (H > 0 || Z) && (K = ++v.frame, A = w - v.time * 1e3, v.time = w = w / 1e3, h += H + (H >= r ? 4 : r - H), J = 1), Z || (g = _(b)), J)
      for (E = 0; E < d.length; E++)
        d[E](w, A, K, U);
  };
  return v = {
    time: 0,
    frame: 0,
    tick: function() {
      N(!0);
    },
    deltaRatio: function(U) {
      return A / (1e3 / (U || 60));
    },
    wake: function() {
      G_ && (!Ar && Lr() && (dl = Ar = window, Vr = dl.document || {}, Ze.gsap = De, (dl.gsapVersions || (dl.gsapVersions = [])).push(De.version), X_(Rf || dl.GreenSockGlobals || !dl.gsap && dl || {}), f1.forEach(c1)), p = typeof requestAnimationFrame < "u" && requestAnimationFrame, g && v.sleep(), _ = p || function(U) {
        return setTimeout(U, h - v.time * 1e3 + 1 | 0);
      }, Pi = 1, N(2));
    },
    sleep: function() {
      (p ? cancelAnimationFrame : clearTimeout)(g), Pi = 0, _ = Wi;
    },
    lagSmoothing: function(U, V) {
      a = U || 1 / 0, f = Math.min(V || 33, a);
    },
    fps: function(U) {
      r = 1e3 / (U || 240), h = v.time * 1e3 + r;
    },
    add: function(U, V, Z) {
      var H = V ? function(J, w, K, L) {
        U(J, w, K, L), v.remove(H);
      } : U;
      return v.remove(U), d[Z ? "unshift" : "push"](H), Xa(), H;
    },
    remove: function(U, V) {
      ~(V = d.indexOf(U)) && d.splice(V, 1) && E >= V && E--;
    },
    _listeners: d
  }, v;
})(), Xa = function() {
  return !Pi && Ve.wake();
}, Tt = {}, Qy = /^[\d.\-M][\d.\-,\s]/, Zy = /["']/g, Ky = function(a) {
  for (var f = {}, i = a.substr(1, a.length - 3).split(":"), s = i[0], r = 1, h = i.length, d, g, _; r < h; r++)
    g = i[r], d = r !== h - 1 ? g.lastIndexOf(",") : g.length, _ = g.substr(0, d), f[s] = isNaN(_) ? _.replace(Zy, "").trim() : +_, s = g.substr(d + 1).trim();
  return f;
}, Jy = function(a) {
  var f = a.indexOf("(") + 1, i = a.indexOf(")"), s = a.indexOf("(", f);
  return a.substring(f, ~s && s < i ? a.indexOf(")", i + 1) : i);
}, ky = function(a) {
  var f = (a + "").split("("), i = Tt[f[0]];
  return i && f.length > 1 && i.config ? i.config.apply(null, ~a.indexOf("{") ? [Ky(f[1])] : Jy(a).split(",").map(k_)) : Tt._CE && Qy.test(a) ? Tt._CE("", a) : i;
}, h1 = function(a) {
  return function(f) {
    return 1 - a(1 - f);
  };
}, d1 = function m(a, f) {
  for (var i = a._first, s; i; )
    i instanceof ge ? m(i, f) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== f && (i.timeline ? m(i.timeline, f) : (s = i._ease, i._ease = i._yEase, i._yEase = s, i._yoyo = f)), i = i._next;
}, Zn = function(a, f) {
  return a && (Qt(a) ? a : Tt[a] || ky(a)) || f;
}, Jn = function(a, f, i, s) {
  i === void 0 && (i = function(g) {
    return 1 - f(1 - g);
  }), s === void 0 && (s = function(g) {
    return g < 0.5 ? f(g * 2) / 2 : 1 - f((1 - g) * 2) / 2;
  });
  var r = {
    easeIn: f,
    easeOut: i,
    easeInOut: s
  }, h;
  return ze(a, function(d) {
    Tt[d] = Ze[d] = r, Tt[h = d.toLowerCase()] = i;
    for (var g in r)
      Tt[h + (g === "easeIn" ? ".in" : g === "easeOut" ? ".out" : ".inOut")] = Tt[d + "." + g] = r[g];
  }), r;
}, _1 = function(a) {
  return function(f) {
    return f < 0.5 ? (1 - a(1 - f * 2)) / 2 : 0.5 + a((f - 0.5) * 2) / 2;
  };
}, mr = function m(a, f, i) {
  var s = f >= 1 ? f : 1, r = (i || (a ? 0.3 : 0.45)) / (f < 1 ? f : 1), h = r / xr * (Math.asin(1 / s) || 0), d = function(p) {
    return p === 1 ? 1 : s * Math.pow(2, -10 * p) * vy((p - h) * r) + 1;
  }, g = a === "out" ? d : a === "in" ? function(_) {
    return 1 - d(1 - _);
  } : _1(d);
  return r = xr / r, g.config = function(_, p) {
    return m(a, _, p);
  }, g;
}, gr = function m(a, f) {
  f === void 0 && (f = 1.70158);
  var i = function(h) {
    return h ? --h * h * ((f + 1) * h + f) + 1 : 0;
  }, s = a === "out" ? i : a === "in" ? function(r) {
    return 1 - i(1 - r);
  } : _1(i);
  return s.config = function(r) {
    return m(a, r);
  }, s;
};
ze("Linear,Quad,Cubic,Quart,Quint,Strong", function(m, a) {
  var f = a < 5 ? a + 1 : a;
  Jn(m + ",Power" + (f - 1), a ? function(i) {
    return Math.pow(i, f);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, f);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, f) / 2 : 1 - Math.pow((1 - i) * 2, f) / 2;
  });
});
Tt.Linear.easeNone = Tt.none = Tt.Linear.easeIn;
Jn("Elastic", mr("in"), mr("out"), mr());
(function(m, a) {
  var f = 1 / a, i = 2 * f, s = 2.5 * f, r = function(d) {
    return d < f ? m * d * d : d < i ? m * Math.pow(d - 1.5 / a, 2) + 0.75 : d < s ? m * (d -= 2.25 / a) * d + 0.9375 : m * Math.pow(d - 2.625 / a, 2) + 0.984375;
  };
  Jn("Bounce", function(h) {
    return 1 - r(1 - h);
  }, r);
})(7.5625, 2.75);
Jn("Expo", function(m) {
  return Math.pow(2, 10 * (m - 1)) * m + m * m * m * m * m * m * (1 - m);
});
Jn("Circ", function(m) {
  return -(Y_(1 - m * m) - 1);
});
Jn("Sine", function(m) {
  return m === 1 ? 1 : -py(m * gy) + 1;
});
Jn("Back", gr("in"), gr("out"), gr());
Tt.SteppedEase = Tt.steps = Ze.SteppedEase = {
  config: function(a, f) {
    a === void 0 && (a = 1);
    var i = 1 / a, s = a + (f ? 0 : 1), r = f ? 1 : 0, h = 1 - jt;
    return function(d) {
      return ((s * lu(0, h, d) | 0) + r) * i;
    };
  }
};
qa.ease = Tt["quad.out"];
ze("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(m) {
  return Qr += m + "," + m + "Params,";
});
var m1 = function(a, f) {
  this.id = yy++, a._gsap = this, this.target = a, this.harness = f, this.get = f ? f.get : K_, this.set = f ? f.getSetter : Wr;
}, Ii = /* @__PURE__ */ (function() {
  function m(f) {
    this.vars = f, this._delay = +f.delay || 0, (this._repeat = f.repeat === 1 / 0 ? -2 : f.repeat || 0) && (this._rDelay = f.repeatDelay || 0, this._yoyo = !!f.yoyo || !!f.yoyoEase), this._ts = 1, Ga(this, +f.duration, 1, 1), this.data = f.data, Yt && (this._ctx = Yt, Yt.data.push(this)), Pi || Ve.wake();
  }
  var a = m.prototype;
  return a.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, a.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, a.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Ga(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, a.totalTime = function(i, s) {
    if (Xa(), !arguments.length)
      return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (Vf(this, i), !r._dp || r.parent || $_(r, this); r && r.parent; )
        r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && _l(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !s || this._initted && Math.abs(this._zTime) === jt || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), J_(this, i, s)), this;
  }, a.time = function(i, s) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + v_(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), s) : this._time;
  }, a.totalProgress = function(i, s) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, a.progress = function(i, s) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + v_(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, a.iteration = function(i, s) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * r, s) : this._repeat ? Va(this._tTime, r) + 1 : 1;
  }, a.timeScale = function(i, s) {
    if (!arguments.length)
      return this._rts === -jt ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var r = this.parent && this._ts ? wf(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -jt ? 0 : this._rts, this.totalTime(lu(-Math.abs(this._delay), this.totalDuration(), r), s !== !1), Lf(this), Dy(this);
  }, a.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Xa(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== jt && (this._tTime -= jt)))), this) : this._ps;
  }, a.startTime = function(i) {
    if (arguments.length) {
      this._start = qt(i);
      var s = this.parent || this._dp;
      return s && (s._sort || !this.parent) && _l(s, this, this._start - this._delay), this;
    }
    return this._start;
  }, a.endTime = function(i) {
    return this._start + (Ee(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, a.rawTime = function(i) {
    var s = this.parent || this._dp;
    return s ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wf(s.rawTime(i), this) : this._tTime : this._tTime;
  }, a.revert = function(i) {
    i === void 0 && (i = Ey);
    var s = se;
    return se = i, Kr(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), se = s, this;
  }, a.globalTime = function(i) {
    for (var s = this, r = arguments.length ? i : s.rawTime(); s; )
      r = s._start + r / (Math.abs(s._ts) || 1), s = s._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : r;
  }, a.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, b_(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, a.repeatDelay = function(i) {
    if (arguments.length) {
      var s = this._time;
      return this._rDelay = i, b_(this), s ? this.time(s) : this;
    }
    return this._rDelay;
  }, a.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, a.seek = function(i, s) {
    return this.totalTime(nl(this, i), Ee(s));
  }, a.restart = function(i, s) {
    return this.play().totalTime(i ? -this._delay : 0, Ee(s)), this._dur || (this._zTime = -jt), this;
  }, a.play = function(i, s) {
    return i != null && this.seek(i, s), this.reversed(!1).paused(!1);
  }, a.reverse = function(i, s) {
    return i != null && this.seek(i || this.totalDuration(), s), this.reversed(!0).paused(!1);
  }, a.pause = function(i, s) {
    return i != null && this.seek(i, s), this.paused(!0);
  }, a.resume = function() {
    return this.paused(!1);
  }, a.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -jt : 0)), this) : this._rts < 0;
  }, a.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -jt, this;
  }, a.isActive = function() {
    var i = this.parent || this._dp, s = this._start, r;
    return !!(!i || this._ts && this._initted && i.isActive() && (r = i.rawTime(!0)) >= s && r < this.endTime(!0) - jt);
  }, a.eventCallback = function(i, s, r) {
    var h = this.vars;
    return arguments.length > 1 ? (s ? (h[i] = s, r && (h[i + "Params"] = r), i === "onUpdate" && (this._onUpdate = s)) : delete h[i], this) : h[i];
  }, a.then = function(i) {
    var s = this, r = s._prom;
    return new Promise(function(h) {
      var d = Qt(i) ? i : F_, g = function() {
        var p = s.then;
        s.then = null, r && r(), Qt(d) && (d = d(s)) && (d.then || d === s) && (s.then = p), h(d), s.then = p;
      };
      s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? g() : s._prom = g;
    });
  }, a.kill = function() {
    Vi(this);
  }, m;
})();
Ke(Ii.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -jt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ge = /* @__PURE__ */ (function(m) {
  H_(a, m);
  function a(i, s) {
    var r;
    return i === void 0 && (i = {}), r = m.call(this, i) || this, r.labels = {}, r.smoothChildTiming = !!i.smoothChildTiming, r.autoRemoveChildren = !!i.autoRemoveChildren, r._sort = Ee(i.sortChildren), Lt && _l(i.parent || Lt, wl(r), s), i.reversed && r.reverse(), i.paused && r.paused(!0), i.scrollTrigger && P_(wl(r), i.scrollTrigger), r;
  }
  var f = a.prototype;
  return f.to = function(s, r, h) {
    return Zi(0, arguments, this), this;
  }, f.from = function(s, r, h) {
    return Zi(1, arguments, this), this;
  }, f.fromTo = function(s, r, h, d) {
    return Zi(2, arguments, this), this;
  }, f.set = function(s, r, h) {
    return r.duration = 0, r.parent = this, Qi(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new It(s, r, nl(this, h), 1), this;
  }, f.call = function(s, r, h) {
    return _l(this, It.delayedCall(0, s, r), h);
  }, f.staggerTo = function(s, r, h, d, g, _, p) {
    return h.duration = r, h.stagger = h.stagger || d, h.onComplete = _, h.onCompleteParams = p, h.parent = this, new It(s, h, nl(this, g)), this;
  }, f.staggerFrom = function(s, r, h, d, g, _, p) {
    return h.runBackwards = 1, Qi(h).immediateRender = Ee(h.immediateRender), this.staggerTo(s, r, h, d, g, _, p);
  }, f.staggerFromTo = function(s, r, h, d, g, _, p, v) {
    return d.startAt = h, Qi(d).immediateRender = Ee(d.immediateRender), this.staggerTo(s, r, d, g, _, p, v);
  }, f.render = function(s, r, h) {
    var d = this._time, g = this._dirty ? this.totalDuration() : this._tDur, _ = this._dur, p = s <= 0 ? 0 : qt(s), v = this._zTime < 0 != s < 0 && (this._initted || !_), A, E, N, b, U, V, Z, H, J, w, K, L;
    if (this !== Lt && p > g && s >= 0 && (p = g), p !== this._tTime || h || v) {
      if (d !== this._time && _ && (p += this._time - d, s += this._time - d), A = p, J = this._start, H = this._ts, V = !H, v && (_ || (d = this._zTime), (s || !r) && (this._zTime = s)), this._repeat) {
        if (K = this._yoyo, U = _ + this._rDelay, this._repeat < -1 && s < 0)
          return this.totalTime(U * 100 + s, r, h);
        if (A = qt(p % U), p === g ? (b = this._repeat, A = _) : (w = qt(p / U), b = ~~w, b && b === w && (A = _, b--), A > _ && (A = _)), w = Va(this._tTime, U), !d && this._tTime && w !== b && this._tTime - w * U - this._dur <= 0 && (w = b), K && b & 1 && (A = _ - A, L = 1), b !== w && !this._lock) {
          var F = K && w & 1, X = F === (K && b & 1);
          if (b < w && (F = !F), d = F ? 0 : p % _ ? _ : p, this._lock = 1, this.render(d || (L ? 0 : qt(b * U)), r, !_)._lock = 0, this._tTime = p, !r && this.parent && Ge(this, "onRepeat"), this.vars.repeatRefresh && !L && (this.invalidate()._lock = 1, w = b), d && d !== this._time || V !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (_ = this._dur, g = this._tDur, X && (this._lock = 2, d = F ? _ : -1e-4, this.render(d, !0), this.vars.repeatRefresh && !L && this.invalidate()), this._lock = 0, !this._ts && !V)
            return this;
          d1(this, L);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (Z = Uy(this, qt(d), qt(A)), Z && (p -= A - (A = Z._start))), this._tTime = p, this._time = A, this._act = !H, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = s, d = 0), !d && p && _ && !r && !w && (Ge(this, "onStart"), this._tTime !== p))
        return this;
      if (A >= d && s >= 0)
        for (E = this._first; E; ) {
          if (N = E._next, (E._act || A >= E._start) && E._ts && Z !== E) {
            if (E.parent !== this)
              return this.render(s, r, h);
            if (E.render(E._ts > 0 ? (A - E._start) * E._ts : (E._dirty ? E.totalDuration() : E._tDur) + (A - E._start) * E._ts, r, h), A !== this._time || !this._ts && !V) {
              Z = 0, N && (p += this._zTime = -jt);
              break;
            }
          }
          E = N;
        }
      else {
        E = this._last;
        for (var lt = s < 0 ? s : A; E; ) {
          if (N = E._prev, (E._act || lt <= E._end) && E._ts && Z !== E) {
            if (E.parent !== this)
              return this.render(s, r, h);
            if (E.render(E._ts > 0 ? (lt - E._start) * E._ts : (E._dirty ? E.totalDuration() : E._tDur) + (lt - E._start) * E._ts, r, h || se && Kr(E)), A !== this._time || !this._ts && !V) {
              Z = 0, N && (p += this._zTime = lt ? -jt : jt);
              break;
            }
          }
          E = N;
        }
      }
      if (Z && !r && (this.pause(), Z.render(A >= d ? 0 : -jt)._zTime = A >= d ? 1 : -1, this._ts))
        return this._start = J, Lf(this), this.render(s, r, h);
      this._onUpdate && !r && Ge(this, "onUpdate", !0), (p === g && this._tTime >= this.totalDuration() || !p && d) && (J === this._start || Math.abs(H) !== Math.abs(this._ts)) && (this._lock || ((s || !_) && (p === g && this._ts > 0 || !p && this._ts < 0) && gn(this, 1), !r && !(s < 0 && !d) && (p || d || !g) && (Ge(this, p === g && s >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < g && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, f.add = function(s, r) {
    var h = this;
    if (Hl(r) || (r = nl(this, r, s)), !(s instanceof Ii)) {
      if (de(s))
        return s.forEach(function(d) {
          return h.add(d, r);
        }), this;
      if (ne(s))
        return this.addLabel(s, r);
      if (Qt(s))
        s = It.delayedCall(0, s);
      else
        return this;
    }
    return this !== s ? _l(this, s, r) : this;
  }, f.getChildren = function(s, r, h, d) {
    s === void 0 && (s = !0), r === void 0 && (r = !0), h === void 0 && (h = !0), d === void 0 && (d = -al);
    for (var g = [], _ = this._first; _; )
      _._start >= d && (_ instanceof It ? r && g.push(_) : (h && g.push(_), s && g.push.apply(g, _.getChildren(!0, r, h)))), _ = _._next;
    return g;
  }, f.getById = function(s) {
    for (var r = this.getChildren(1, 1, 1), h = r.length; h--; )
      if (r[h].vars.id === s)
        return r[h];
  }, f.remove = function(s) {
    return ne(s) ? this.removeLabel(s) : Qt(s) ? this.killTweensOf(s) : (s.parent === this && qf(this, s), s === this._recent && (this._recent = this._last), Qn(this));
  }, f.totalTime = function(s, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = qt(Ve.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))), m.prototype.totalTime.call(this, s, r), this._forcing = 0, this) : this._tTime;
  }, f.addLabel = function(s, r) {
    return this.labels[s] = nl(this, r), this;
  }, f.removeLabel = function(s) {
    return delete this.labels[s], this;
  }, f.addPause = function(s, r, h) {
    var d = It.delayedCall(0, r || Wi, h);
    return d.data = "isPause", this._hasPause = 1, _l(this, d, nl(this, s));
  }, f.removePause = function(s) {
    var r = this._first;
    for (s = nl(this, s); r; )
      r._start === s && r.data === "isPause" && gn(r), r = r._next;
  }, f.killTweensOf = function(s, r, h) {
    for (var d = this.getTweensOf(s, h), g = d.length; g--; )
      on !== d[g] && d[g].kill(s, r);
    return this;
  }, f.getTweensOf = function(s, r) {
    for (var h = [], d = il(s), g = this._first, _ = Hl(r), p; g; )
      g instanceof It ? zy(g._targets, d) && (_ ? (!on || g._initted && g._ts) && g.globalTime(0) <= r && g.globalTime(g.totalDuration()) > r : !r || g.isActive()) && h.push(g) : (p = g.getTweensOf(d, r)).length && h.push.apply(h, p), g = g._next;
    return h;
  }, f.tweenTo = function(s, r) {
    r = r || {};
    var h = this, d = nl(h, s), g = r, _ = g.startAt, p = g.onStart, v = g.onStartParams, A = g.immediateRender, E, N = It.to(h, Ke({
      ease: r.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: d,
      overwrite: "auto",
      duration: r.duration || Math.abs((d - (_ && "time" in _ ? _.time : h._time)) / h.timeScale()) || jt,
      onStart: function() {
        if (h.pause(), !E) {
          var U = r.duration || Math.abs((d - (_ && "time" in _ ? _.time : h._time)) / h.timeScale());
          N._dur !== U && Ga(N, U, 0, 1).render(N._time, !0, !0), E = 1;
        }
        p && p.apply(N, v || []);
      }
    }, r));
    return A ? N.render(0) : N;
  }, f.tweenFromTo = function(s, r, h) {
    return this.tweenTo(r, Ke({
      startAt: {
        time: nl(this, s)
      }
    }, h));
  }, f.recent = function() {
    return this._recent;
  }, f.nextLabel = function(s) {
    return s === void 0 && (s = this._time), S_(this, nl(this, s));
  }, f.previousLabel = function(s) {
    return s === void 0 && (s = this._time), S_(this, nl(this, s), 1);
  }, f.currentLabel = function(s) {
    return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + jt);
  }, f.shiftChildren = function(s, r, h) {
    h === void 0 && (h = 0);
    var d = this._first, g = this.labels, _;
    for (s = qt(s); d; )
      d._start >= h && (d._start += s, d._end += s), d = d._next;
    if (r)
      for (_ in g)
        g[_] >= h && (g[_] += s);
    return Qn(this);
  }, f.invalidate = function(s) {
    var r = this._first;
    for (this._lock = 0; r; )
      r.invalidate(s), r = r._next;
    return m.prototype.invalidate.call(this, s);
  }, f.clear = function(s) {
    s === void 0 && (s = !0);
    for (var r = this._first, h; r; )
      h = r._next, this.remove(r), r = h;
    return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), Qn(this);
  }, f.totalDuration = function(s) {
    var r = 0, h = this, d = h._last, g = al, _, p, v;
    if (arguments.length)
      return h.timeScale((h._repeat < 0 ? h.duration() : h.totalDuration()) / (h.reversed() ? -s : s));
    if (h._dirty) {
      for (v = h.parent; d; )
        _ = d._prev, d._dirty && d.totalDuration(), p = d._start, p > g && h._sort && d._ts && !h._lock ? (h._lock = 1, _l(h, d, p - d._delay, 1)._lock = 0) : g = p, p < 0 && d._ts && (r -= p, (!v && !h._dp || v && v.smoothChildTiming) && (h._start += qt(p / h._ts), h._time -= p, h._tTime -= p), h.shiftChildren(-p, !1, -1 / 0), g = 0), d._end > r && d._ts && (r = d._end), d = _;
      Ga(h, h === Lt && h._time > r ? h._time : r, 1, 1), h._dirty = 0;
    }
    return h._tDur;
  }, a.updateRoot = function(s) {
    if (Lt._ts && (J_(Lt, wf(s, Lt)), Z_ = Ve.frame), Ve.frame >= y_) {
      y_ += Qe.autoSleep || 120;
      var r = Lt._first;
      if ((!r || !r._ts) && Qe.autoSleep && Ve._listeners.length < 2) {
        for (; r && !r._ts; )
          r = r._next;
        r || Ve.sleep();
      }
    }
  }, a;
})(Ii);
Ke(ge.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Fy = function(a, f, i, s, r, h, d) {
  var g = new Oe(this._pt, a, f, 0, 1, S1, null, r), _ = 0, p = 0, v, A, E, N, b, U, V, Z;
  for (g.b = i, g.e = s, i += "", s += "", (V = ~s.indexOf("random(")) && (s = $i(s)), h && (Z = [i, s], h(Z, a, f), i = Z[0], s = Z[1]), A = i.match(hr) || []; v = hr.exec(s); )
    N = v[0], b = s.substring(_, v.index), E ? E = (E + 1) % 5 : b.substr(-5) === "rgba(" && (E = 1), N !== A[p++] && (U = parseFloat(A[p - 1]) || 0, g._pt = {
      _next: g._pt,
      p: b || p === 1 ? b : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: U,
      c: N.charAt(1) === "=" ? Ba(U, N) - U : parseFloat(N) - U,
      m: E && E < 4 ? Math.round : 0
    }, _ = hr.lastIndex);
  return g.c = _ < s.length ? s.substring(_, s.length) : "", g.fp = d, (V_.test(s) || V) && (g.e = 0), this._pt = g, g;
}, Jr = function(a, f, i, s, r, h, d, g, _, p) {
  Qt(s) && (s = s(r || 0, a, h));
  var v = a[f], A = i !== "get" ? i : Qt(v) ? _ ? a[f.indexOf("set") || !Qt(a["get" + f.substr(3)]) ? f : "get" + f.substr(3)](_) : a[f]() : v, E = Qt(v) ? _ ? tp : v1 : Fr, N;
  if (ne(s) && (~s.indexOf("random(") && (s = $i(s)), s.charAt(1) === "=" && (N = Ba(A, s) + (he(A) || 0), (N || N === 0) && (s = N))), !p || A !== s || Nr)
    return !isNaN(A * s) && s !== "" ? (N = new Oe(this._pt, a, f, +A || 0, s - (A || 0), typeof v == "boolean" ? lp : b1, 0, E), _ && (N.fp = _), d && N.modifier(d, this, a), this._pt = N) : (!v && !(f in a) && Gr(f, s), Fy.call(this, a, f, A, s, E, g || Qe.stringFilter, _));
}, Wy = function(a, f, i, s, r) {
  if (Qt(a) && (a = Ki(a, r, f, i, s)), !gl(a) || a.style && a.nodeType || de(a) || q_(a))
    return ne(a) ? Ki(a, r, f, i, s) : a;
  var h = {}, d;
  for (d in a)
    h[d] = Ki(a[d], r, f, i, s);
  return h;
}, g1 = function(a, f, i, s, r, h) {
  var d, g, _, p;
  if (Le[a] && (d = new Le[a]()).init(r, d.rawVars ? f[a] : Wy(f[a], s, r, h, i), i, s, h) !== !1 && (i._pt = g = new Oe(i._pt, r, a, 0, 1, d.render, d, 0, d.priority), i !== wa))
    for (_ = i._ptLookup[i._targets.indexOf(r)], p = d._props.length; p--; )
      _[d._props[p]] = g;
  return d;
}, on, Nr, kr = function m(a, f, i) {
  var s = a.vars, r = s.ease, h = s.startAt, d = s.immediateRender, g = s.lazy, _ = s.onUpdate, p = s.runBackwards, v = s.yoyoEase, A = s.keyframes, E = s.autoRevert, N = a._dur, b = a._startAt, U = a._targets, V = a.parent, Z = V && V.data === "nested" ? V.vars.targets : U, H = a._overwrite === "auto" && !Yr, J = a.timeline, w, K, L, F, X, lt, rt, nt, ut, ct, ot, M, k;
  if (J && (!A || !r) && (r = "none"), a._ease = Zn(r, qa.ease), a._yEase = v ? h1(Zn(v === !0 ? r : v, qa.ease)) : 0, v && a._yoyo && !a._repeat && (v = a._yEase, a._yEase = a._ease, a._ease = v), a._from = !J && !!s.runBackwards, !J || A && !s.stagger) {
    if (nt = U[0] ? Xn(U[0]).harness : 0, M = nt && s[nt.prop], w = jf(s, Xr), b && (b._zTime < 0 && b.progress(1), f < 0 && p && d && !E ? b.render(-1, !0) : b.revert(p && N ? Ef : Ay), b._lazy = 0), h) {
      if (gn(a._startAt = It.set(U, Ke({
        data: "isStart",
        overwrite: !1,
        parent: V,
        immediateRender: !0,
        lazy: !b && Ee(g),
        startAt: null,
        delay: 0,
        onUpdate: _ && function() {
          return Ge(a, "onUpdate");
        },
        stagger: 0
      }, h))), a._startAt._dp = 0, a._startAt._sat = a, f < 0 && (se || !d && !E) && a._startAt.revert(Ef), d && N && f <= 0 && i <= 0) {
        f && (a._zTime = f);
        return;
      }
    } else if (p && N && !b) {
      if (f && (d = !1), L = Ke({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: d && !b && Ee(g),
        immediateRender: d,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: V
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), M && (L[nt.prop] = M), gn(a._startAt = It.set(U, L)), a._startAt._dp = 0, a._startAt._sat = a, f < 0 && (se ? a._startAt.revert(Ef) : a._startAt.render(-1, !0)), a._zTime = f, !d)
        m(a._startAt, jt, jt);
      else if (!f)
        return;
    }
    for (a._pt = a._ptCache = 0, g = N && Ee(g) || g && !N, K = 0; K < U.length; K++) {
      if (X = U[K], rt = X._gsap || Zr(U)[K]._gsap, a._ptLookup[K] = ct = {}, Er[rt.id] && _n.length && Uf(), ot = Z === U ? K : Z.indexOf(X), nt && (ut = new nt()).init(X, M || w, a, ot, Z) !== !1 && (a._pt = F = new Oe(a._pt, X, ut.name, 0, 1, ut.render, ut, 0, ut.priority), ut._props.forEach(function(P) {
        ct[P] = F;
      }), ut.priority && (lt = 1)), !nt || M)
        for (L in w)
          Le[L] && (ut = g1(L, w, a, ot, X, Z)) ? ut.priority && (lt = 1) : ct[L] = F = Jr.call(a, X, L, "get", w[L], ot, Z, 0, s.stringFilter);
      a._op && a._op[K] && a.kill(X, a._op[K]), H && a._pt && (on = a, Lt.killTweensOf(X, ct, a.globalTime(f)), k = !a.parent, on = 0), a._pt && g && (Er[rt.id] = 1);
    }
    lt && T1(a), a._onInit && a._onInit(a);
  }
  a._onUpdate = _, a._initted = (!a._op || a._pt) && !k, A && f <= 0 && J.render(al, !0, !0);
}, $y = function(a, f, i, s, r, h, d, g) {
  var _ = (a._pt && a._ptCache || (a._ptCache = {}))[f], p, v, A, E;
  if (!_)
    for (_ = a._ptCache[f] = [], A = a._ptLookup, E = a._targets.length; E--; ) {
      if (p = A[E][f], p && p.d && p.d._pt)
        for (p = p.d._pt; p && p.p !== f && p.fp !== f; )
          p = p._next;
      if (!p)
        return Nr = 1, a.vars[f] = "+=0", kr(a, d), Nr = 0, g ? Fi(f + " not eligible for reset") : 1;
      _.push(p);
    }
  for (E = _.length; E--; )
    v = _[E], p = v._pt || v, p.s = (s || s === 0) && !r ? s : p.s + (s || 0) + h * p.c, p.c = i - p.s, v.e && (v.e = kt(i) + he(v.e)), v.b && (v.b = p.s + he(v.b));
}, Py = function(a, f) {
  var i = a[0] ? Xn(a[0]).harness : 0, s = i && i.aliases, r, h, d, g;
  if (!s)
    return f;
  r = La({}, f);
  for (h in s)
    if (h in r)
      for (g = s[h].split(","), d = g.length; d--; )
        r[g[d]] = r[h];
  return r;
}, Iy = function(a, f, i, s) {
  var r = f.ease || s || "power1.inOut", h, d;
  if (de(f))
    d = i[a] || (i[a] = []), f.forEach(function(g, _) {
      return d.push({
        t: _ / (f.length - 1) * 100,
        v: g,
        e: r
      });
    });
  else
    for (h in f)
      d = i[h] || (i[h] = []), h === "ease" || d.push({
        t: parseFloat(a),
        v: f[h],
        e: r
      });
}, Ki = function(a, f, i, s, r) {
  return Qt(a) ? a.call(f, i, s, r) : ne(a) && ~a.indexOf("random(") ? $i(a) : a;
}, y1 = Qr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", p1 = {};
ze(y1 + ",id,stagger,delay,duration,paused,scrollTrigger", function(m) {
  return p1[m] = 1;
});
var It = /* @__PURE__ */ (function(m) {
  H_(a, m);
  function a(i, s, r, h) {
    var d;
    typeof s == "number" && (r.duration = s, s = r, r = null), d = m.call(this, h ? s : Qi(s)) || this;
    var g = d.vars, _ = g.duration, p = g.delay, v = g.immediateRender, A = g.stagger, E = g.overwrite, N = g.keyframes, b = g.defaults, U = g.scrollTrigger, V = g.yoyoEase, Z = s.parent || Lt, H = (de(i) || q_(i) ? Hl(i[0]) : "length" in s) ? [i] : il(i), J, w, K, L, F, X, lt, rt;
    if (d._targets = H.length ? Zr(H) : Fi("GSAP target " + i + " not found. https://gsap.com", !Qe.nullTargetWarn) || [], d._ptLookup = [], d._overwrite = E, N || A || Tf(_) || Tf(p)) {
      if (s = d.vars, J = d.timeline = new ge({
        data: "nested",
        defaults: b || {},
        targets: Z && Z.data === "nested" ? Z.vars.targets : H
      }), J.kill(), J.parent = J._dp = wl(d), J._start = 0, A || Tf(_) || Tf(p)) {
        if (L = H.length, lt = A && l1(A), gl(A))
          for (F in A)
            ~y1.indexOf(F) && (rt || (rt = {}), rt[F] = A[F]);
        for (w = 0; w < L; w++)
          K = jf(s, p1), K.stagger = 0, V && (K.yoyoEase = V), rt && La(K, rt), X = H[w], K.duration = +Ki(_, wl(d), w, X, H), K.delay = (+Ki(p, wl(d), w, X, H) || 0) - d._delay, !A && L === 1 && K.delay && (d._delay = p = K.delay, d._start += p, K.delay = 0), J.to(X, K, lt ? lt(w, X, H) : 0), J._ease = Tt.none;
        J.duration() ? _ = p = 0 : d.timeline = 0;
      } else if (N) {
        Qi(Ke(J.vars.defaults, {
          ease: "none"
        })), J._ease = Zn(N.ease || s.ease || "none");
        var nt = 0, ut, ct, ot;
        if (de(N))
          N.forEach(function(M) {
            return J.to(H, M, ">");
          }), J.duration();
        else {
          K = {};
          for (F in N)
            F === "ease" || F === "easeEach" || Iy(F, N[F], K, N.easeEach);
          for (F in K)
            for (ut = K[F].sort(function(M, k) {
              return M.t - k.t;
            }), nt = 0, w = 0; w < ut.length; w++)
              ct = ut[w], ot = {
                ease: ct.e,
                duration: (ct.t - (w ? ut[w - 1].t : 0)) / 100 * _
              }, ot[F] = ct.v, J.to(H, ot, nt), nt += ot.duration;
          J.duration() < _ && J.to({}, {
            duration: _ - J.duration()
          });
        }
      }
      _ || d.duration(_ = J.duration());
    } else
      d.timeline = 0;
    return E === !0 && !Yr && (on = wl(d), Lt.killTweensOf(H), on = 0), _l(Z, wl(d), r), s.reversed && d.reverse(), s.paused && d.paused(!0), (v || !_ && !N && d._start === qt(Z._time) && Ee(v) && My(wl(d)) && Z.data !== "nested") && (d._tTime = -jt, d.render(Math.max(0, -p) || 0)), U && P_(wl(d), U), d;
  }
  var f = a.prototype;
  return f.render = function(s, r, h) {
    var d = this._time, g = this._tDur, _ = this._dur, p = s < 0, v = s > g - jt && !p ? g : s < jt ? 0 : s, A, E, N, b, U, V, Z, H, J;
    if (!_)
      Ry(this, s, r, h);
    else if (v !== this._tTime || !s || h || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== p || this._lazy) {
      if (A = v, H = this.timeline, this._repeat) {
        if (b = _ + this._rDelay, this._repeat < -1 && p)
          return this.totalTime(b * 100 + s, r, h);
        if (A = qt(v % b), v === g ? (N = this._repeat, A = _) : (U = qt(v / b), N = ~~U, N && N === U ? (A = _, N--) : A > _ && (A = _)), V = this._yoyo && N & 1, V && (J = this._yEase, A = _ - A), U = Va(this._tTime, b), A === d && !h && this._initted && N === U)
          return this._tTime = v, this;
        N !== U && (H && this._yEase && d1(H, V), this.vars.repeatRefresh && !V && !this._lock && A !== b && this._initted && (this._lock = h = 1, this.render(qt(b * N), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (I_(this, p ? s : A, h, r, v))
          return this._tTime = 0, this;
        if (d !== this._time && !(h && this.vars.repeatRefresh && N !== U))
          return this;
        if (_ !== this._dur)
          return this.render(s, r, h);
      }
      if (this._tTime = v, this._time = A, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = Z = (J || this._ease)(A / _), this._from && (this.ratio = Z = 1 - Z), !d && v && !r && !U && (Ge(this, "onStart"), this._tTime !== v))
        return this;
      for (E = this._pt; E; )
        E.r(Z, E.d), E = E._next;
      H && H.render(s < 0 ? s : H._dur * H._ease(A / this._dur), r, h) || this._startAt && (this._zTime = s), this._onUpdate && !r && (p && zr(this, s, r, h), Ge(this, "onUpdate")), this._repeat && N !== U && this.vars.onRepeat && !r && this.parent && Ge(this, "onRepeat"), (v === this._tDur || !v) && this._tTime === v && (p && !this._onUpdate && zr(this, s, !0, !0), (s || !_) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && gn(this, 1), !r && !(p && !d) && (v || d || V) && (Ge(this, v === g ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < g && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, f.targets = function() {
    return this._targets;
  }, f.invalidate = function(s) {
    return (!s || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(s), m.prototype.invalidate.call(this, s);
  }, f.resetTo = function(s, r, h, d, g) {
    Pi || Ve.wake(), this._ts || this.play();
    var _ = Math.min(this._dur, (this._dp._time - this._start) * this._ts), p;
    return this._initted || kr(this, _), p = this._ease(_ / this._dur), $y(this, s, r, h, d, p, _, g) ? this.resetTo(s, r, h, d, 1) : (Vf(this, 0), this.parent || W_(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, f.kill = function(s, r) {
    if (r === void 0 && (r = "all"), !s && (!r || r === "all"))
      return this._lazy = this._pt = 0, this.parent ? Vi(this) : this.scrollTrigger && this.scrollTrigger.kill(!!se), this;
    if (this.timeline) {
      var h = this.timeline.totalDuration();
      return this.timeline.killTweensOf(s, r, on && on.vars.overwrite !== !0)._first || Vi(this), this.parent && h !== this.timeline.totalDuration() && Ga(this, this._dur * this.timeline._tDur / h, 0, 1), this;
    }
    var d = this._targets, g = s ? il(s) : d, _ = this._ptLookup, p = this._pt, v, A, E, N, b, U, V;
    if ((!r || r === "all") && Cy(d, g))
      return r === "all" && (this._pt = 0), Vi(this);
    for (v = this._op = this._op || [], r !== "all" && (ne(r) && (b = {}, ze(r, function(Z) {
      return b[Z] = 1;
    }), r = b), r = Py(d, r)), V = d.length; V--; )
      if (~g.indexOf(d[V])) {
        A = _[V], r === "all" ? (v[V] = r, N = A, E = {}) : (E = v[V] = v[V] || {}, N = r);
        for (b in N)
          U = A && A[b], U && ((!("kill" in U.d) || U.d.kill(b) === !0) && qf(this, U, "_pt"), delete A[b]), E !== "all" && (E[b] = 1);
      }
    return this._initted && !this._pt && p && Vi(this), this;
  }, a.to = function(s, r) {
    return new a(s, r, arguments[2]);
  }, a.from = function(s, r) {
    return Zi(1, arguments);
  }, a.delayedCall = function(s, r, h, d) {
    return new a(r, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: s,
      onComplete: r,
      onReverseComplete: r,
      onCompleteParams: h,
      onReverseCompleteParams: h,
      callbackScope: d
    });
  }, a.fromTo = function(s, r, h) {
    return Zi(2, arguments);
  }, a.set = function(s, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new a(s, r);
  }, a.killTweensOf = function(s, r, h) {
    return Lt.killTweensOf(s, r, h);
  }, a;
})(Ii);
Ke(It.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ze("staggerTo,staggerFrom,staggerFromTo", function(m) {
  It[m] = function() {
    var a = new ge(), f = Cr.call(arguments, 0);
    return f.splice(m === "staggerFromTo" ? 5 : 4, 0, 0), a[m].apply(a, f);
  };
});
var Fr = function(a, f, i) {
  return a[f] = i;
}, v1 = function(a, f, i) {
  return a[f](i);
}, tp = function(a, f, i, s) {
  return a[f](s.fp, i);
}, ep = function(a, f, i) {
  return a.setAttribute(f, i);
}, Wr = function(a, f) {
  return Qt(a[f]) ? v1 : qr(a[f]) && a.setAttribute ? ep : Fr;
}, b1 = function(a, f) {
  return f.set(f.t, f.p, Math.round((f.s + f.c * a) * 1e6) / 1e6, f);
}, lp = function(a, f) {
  return f.set(f.t, f.p, !!(f.s + f.c * a), f);
}, S1 = function(a, f) {
  var i = f._pt, s = "";
  if (!a && f.b)
    s = f.b;
  else if (a === 1 && f.e)
    s = f.e;
  else {
    for (; i; )
      s = i.p + (i.m ? i.m(i.s + i.c * a) : Math.round((i.s + i.c * a) * 1e4) / 1e4) + s, i = i._next;
    s += f.c;
  }
  f.set(f.t, f.p, s, f);
}, $r = function(a, f) {
  for (var i = f._pt; i; )
    i.r(a, i.d), i = i._next;
}, np = function(a, f, i, s) {
  for (var r = this._pt, h; r; )
    h = r._next, r.p === s && r.modifier(a, f, i), r = h;
}, ap = function(a) {
  for (var f = this._pt, i, s; f; )
    s = f._next, f.p === a && !f.op || f.op === a ? qf(this, f, "_pt") : f.dep || (i = 1), f = s;
  return !i;
}, ip = function(a, f, i, s) {
  s.mSet(a, f, s.m.call(s.tween, i, s.mt), s);
}, T1 = function(a) {
  for (var f = a._pt, i, s, r, h; f; ) {
    for (i = f._next, s = r; s && s.pr > f.pr; )
      s = s._next;
    (f._prev = s ? s._prev : h) ? f._prev._next = f : r = f, (f._next = s) ? s._prev = f : h = f, f = i;
  }
  a._pt = r;
}, Oe = /* @__PURE__ */ (function() {
  function m(f, i, s, r, h, d, g, _, p) {
    this.t = i, this.s = r, this.c = h, this.p = s, this.r = d || b1, this.d = g || this, this.set = _ || Fr, this.pr = p || 0, this._next = f, f && (f._prev = this);
  }
  var a = m.prototype;
  return a.modifier = function(i, s, r) {
    this.mSet = this.mSet || this.set, this.set = ip, this.m = i, this.mt = r, this.tween = s;
  }, m;
})();
ze(Qr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(m) {
  return Xr[m] = 1;
});
Ze.TweenMax = Ze.TweenLite = It;
Ze.TimelineLite = Ze.TimelineMax = ge;
Lt = new ge({
  sortChildren: !1,
  defaults: qa,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Qe.stringFilter = o1;
var Kn = [], Of = {}, up = [], x_ = 0, fp = 0, yr = function(a) {
  return (Of[a] || up).map(function(f) {
    return f();
  });
}, Rr = function() {
  var a = Date.now(), f = [];
  a - x_ > 2 && (yr("matchMediaInit"), Kn.forEach(function(i) {
    var s = i.queries, r = i.conditions, h, d, g, _;
    for (d in s)
      h = dl.matchMedia(s[d]).matches, h && (g = 1), h !== r[d] && (r[d] = h, _ = 1);
    _ && (i.revert(), g && f.push(i));
  }), yr("matchMediaRevert"), f.forEach(function(i) {
    return i.onMatch(i, function(s) {
      return i.add(null, s);
    });
  }), x_ = a, yr("matchMedia"));
}, x1 = /* @__PURE__ */ (function() {
  function m(f, i) {
    this.selector = i && Dr(i), this.data = [], this._r = [], this.isReverted = !1, this.id = fp++, f && this.add(f);
  }
  var a = m.prototype;
  return a.add = function(i, s, r) {
    Qt(i) && (r = s, s = i, i = Qt);
    var h = this, d = function() {
      var _ = Yt, p = h.selector, v;
      return _ && _ !== h && _.data.push(h), r && (h.selector = Dr(r)), Yt = h, v = s.apply(h, arguments), Qt(v) && h._r.push(v), Yt = _, h.selector = p, h.isReverted = !1, v;
    };
    return h.last = d, i === Qt ? d(h, function(g) {
      return h.add(null, g);
    }) : i ? h[i] = d : d;
  }, a.ignore = function(i) {
    var s = Yt;
    Yt = null, i(this), Yt = s;
  }, a.getTweens = function() {
    var i = [];
    return this.data.forEach(function(s) {
      return s instanceof m ? i.push.apply(i, s.getTweens()) : s instanceof It && !(s.parent && s.parent.data === "nested") && i.push(s);
    }), i;
  }, a.clear = function() {
    this._r.length = this.data.length = 0;
  }, a.kill = function(i, s) {
    var r = this;
    if (i ? (function() {
      for (var d = r.getTweens(), g = r.data.length, _; g--; )
        _ = r.data[g], _.data === "isFlip" && (_.revert(), _.getChildren(!0, !0, !1).forEach(function(p) {
          return d.splice(d.indexOf(p), 1);
        }));
      for (d.map(function(p) {
        return {
          g: p._dur || p._delay || p._sat && !p._sat.vars.immediateRender ? p.globalTime(0) : -1 / 0,
          t: p
        };
      }).sort(function(p, v) {
        return v.g - p.g || -1 / 0;
      }).forEach(function(p) {
        return p.t.revert(i);
      }), g = r.data.length; g--; )
        _ = r.data[g], _ instanceof ge ? _.data !== "nested" && (_.scrollTrigger && _.scrollTrigger.revert(), _.kill()) : !(_ instanceof It) && _.revert && _.revert(i);
      r._r.forEach(function(p) {
        return p(i, r);
      }), r.isReverted = !0;
    })() : this.data.forEach(function(d) {
      return d.kill && d.kill();
    }), this.clear(), s)
      for (var h = Kn.length; h--; )
        Kn[h].id === this.id && Kn.splice(h, 1);
  }, a.revert = function(i) {
    this.kill(i || {});
  }, m;
})(), cp = /* @__PURE__ */ (function() {
  function m(f) {
    this.contexts = [], this.scope = f, Yt && Yt.data.push(this);
  }
  var a = m.prototype;
  return a.add = function(i, s, r) {
    gl(i) || (i = {
      matches: i
    });
    var h = new x1(0, r || this.scope), d = h.conditions = {}, g, _, p;
    Yt && !h.selector && (h.selector = Yt.selector), this.contexts.push(h), s = h.add("onMatch", s), h.queries = i;
    for (_ in i)
      _ === "all" ? p = 1 : (g = dl.matchMedia(i[_]), g && (Kn.indexOf(h) < 0 && Kn.push(h), (d[_] = g.matches) && (p = 1), g.addListener ? g.addListener(Rr) : g.addEventListener("change", Rr)));
    return p && s(h, function(v) {
      return h.add(null, v);
    }), this;
  }, a.revert = function(i) {
    this.kill(i || {});
  }, a.kill = function(i) {
    this.contexts.forEach(function(s) {
      return s.kill(i, !0);
    });
  }, m;
})(), Bf = {
  registerPlugin: function() {
    for (var a = arguments.length, f = new Array(a), i = 0; i < a; i++)
      f[i] = arguments[i];
    f.forEach(function(s) {
      return c1(s);
    });
  },
  timeline: function(a) {
    return new ge(a);
  },
  getTweensOf: function(a, f) {
    return Lt.getTweensOf(a, f);
  },
  getProperty: function(a, f, i, s) {
    ne(a) && (a = il(a)[0]);
    var r = Xn(a || {}).get, h = i ? F_ : k_;
    return i === "native" && (i = ""), a && (f ? h((Le[f] && Le[f].get || r)(a, f, i, s)) : function(d, g, _) {
      return h((Le[d] && Le[d].get || r)(a, d, g, _));
    });
  },
  quickSetter: function(a, f, i) {
    if (a = il(a), a.length > 1) {
      var s = a.map(function(p) {
        return De.quickSetter(p, f, i);
      }), r = s.length;
      return function(p) {
        for (var v = r; v--; )
          s[v](p);
      };
    }
    a = a[0] || {};
    var h = Le[f], d = Xn(a), g = d.harness && (d.harness.aliases || {})[f] || f, _ = h ? function(p) {
      var v = new h();
      wa._pt = 0, v.init(a, i ? p + i : p, wa, 0, [a]), v.render(1, v), wa._pt && $r(1, wa);
    } : d.set(a, g);
    return h ? _ : function(p) {
      return _(a, g, i ? p + i : p, d, 1);
    };
  },
  quickTo: function(a, f, i) {
    var s, r = De.to(a, Ke((s = {}, s[f] = "+=0.1", s.paused = !0, s.stagger = 0, s), i || {})), h = function(g, _, p) {
      return r.resetTo(f, g, _, p);
    };
    return h.tween = r, h;
  },
  isTweening: function(a) {
    return Lt.getTweensOf(a, !0).length > 0;
  },
  defaults: function(a) {
    return a && a.ease && (a.ease = Zn(a.ease, qa.ease)), p_(qa, a || {});
  },
  config: function(a) {
    return p_(Qe, a || {});
  },
  registerEffect: function(a) {
    var f = a.name, i = a.effect, s = a.plugins, r = a.defaults, h = a.extendTimeline;
    (s || "").split(",").forEach(function(d) {
      return d && !Le[d] && !Ze[d] && Fi(f + " effect requires " + d + " plugin.");
    }), dr[f] = function(d, g, _) {
      return i(il(d), Ke(g || {}, r), _);
    }, h && (ge.prototype[f] = function(d, g, _) {
      return this.add(dr[f](d, gl(g) ? g : (_ = g) && {}, this), _);
    });
  },
  registerEase: function(a, f) {
    Tt[a] = Zn(f);
  },
  parseEase: function(a, f) {
    return arguments.length ? Zn(a, f) : Tt;
  },
  getById: function(a) {
    return Lt.getById(a);
  },
  exportRoot: function(a, f) {
    a === void 0 && (a = {});
    var i = new ge(a), s, r;
    for (i.smoothChildTiming = Ee(a.smoothChildTiming), Lt.remove(i), i._dp = 0, i._time = i._tTime = Lt._time, s = Lt._first; s; )
      r = s._next, (f || !(!s._dur && s instanceof It && s.vars.onComplete === s._targets[0])) && _l(i, s, s._start - s._delay), s = r;
    return _l(Lt, i, 0), i;
  },
  context: function(a, f) {
    return a ? new x1(a, f) : Yt;
  },
  matchMedia: function(a) {
    return new cp(a);
  },
  matchMediaRefresh: function() {
    return Kn.forEach(function(a) {
      var f = a.conditions, i, s;
      for (s in f)
        f[s] && (f[s] = !1, i = 1);
      i && a.revert();
    }) || Rr();
  },
  addEventListener: function(a, f) {
    var i = Of[a] || (Of[a] = []);
    ~i.indexOf(f) || i.push(f);
  },
  removeEventListener: function(a, f) {
    var i = Of[a], s = i && i.indexOf(f);
    s >= 0 && i.splice(s, 1);
  },
  utils: {
    wrap: Ly,
    wrapYoyo: Vy,
    distribute: l1,
    random: a1,
    snap: n1,
    normalize: qy,
    getUnit: he,
    clamp: wy,
    splitColor: s1,
    toArray: il,
    selector: Dr,
    mapRange: u1,
    pipe: Hy,
    unitize: Yy,
    interpolate: Gy,
    shuffle: e1
  },
  install: X_,
  effects: dr,
  ticker: Ve,
  updateRoot: ge.updateRoot,
  plugins: Le,
  globalTimeline: Lt,
  core: {
    PropTween: Oe,
    globals: Q_,
    Tween: It,
    Timeline: ge,
    Animation: Ii,
    getCache: Xn,
    _removeLinkedListItem: qf,
    reverting: function() {
      return se;
    },
    context: function(a) {
      return a && Yt && (Yt.data.push(a), a._ctx = Yt), Yt;
    },
    suppressOverwrites: function(a) {
      return Yr = a;
    }
  }
};
ze("to,from,fromTo,delayedCall,set,killTweensOf", function(m) {
  return Bf[m] = It[m];
});
Ve.add(ge.updateRoot);
wa = Bf.to({}, {
  duration: 0
});
var sp = function(a, f) {
  for (var i = a._pt; i && i.p !== f && i.op !== f && i.fp !== f; )
    i = i._next;
  return i;
}, rp = function(a, f) {
  var i = a._targets, s, r, h;
  for (s in f)
    for (r = i.length; r--; )
      h = a._ptLookup[r][s], h && (h = h.d) && (h._pt && (h = sp(h, s)), h && h.modifier && h.modifier(f[s], a, i[r], s));
}, pr = function(a, f) {
  return {
    name: a,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(s, r, h) {
      h._onInit = function(d) {
        var g, _;
        if (ne(r) && (g = {}, ze(r, function(p) {
          return g[p] = 1;
        }), r = g), f) {
          g = {};
          for (_ in r)
            g[_] = f(r[_]);
          r = g;
        }
        rp(d, r);
      };
    }
  };
}, De = Bf.registerPlugin({
  name: "attr",
  init: function(a, f, i, s, r) {
    var h, d, g;
    this.tween = i;
    for (h in f)
      g = a.getAttribute(h) || "", d = this.add(a, "setAttribute", (g || 0) + "", f[h], s, r, 0, 0, h), d.op = h, d.b = g, this._props.push(h);
  },
  render: function(a, f) {
    for (var i = f._pt; i; )
      se ? i.set(i.t, i.p, i.b, i) : i.r(a, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(a, f) {
    for (var i = f.length; i--; )
      this.add(a, i, a[i] || 0, f[i], 0, 0, 0, 0, 0, 1);
  }
}, pr("roundProps", Mr), pr("modifiers"), pr("snap", n1)) || Bf;
It.version = ge.version = De.version = "3.14.2";
G_ = 1;
Lr() && Xa();
Tt.Power0;
Tt.Power1;
Tt.Power2;
Tt.Power3;
Tt.Power4;
Tt.Linear;
Tt.Quad;
Tt.Cubic;
Tt.Quart;
Tt.Quint;
Tt.Strong;
Tt.Elastic;
Tt.Back;
Tt.SteppedEase;
Tt.Bounce;
Tt.Sine;
Tt.Expo;
Tt.Circ;
var A_, hn, Ha, Pr, Gn, E_, Ir, op = function() {
  return typeof window < "u";
}, Yl = {}, Vn = 180 / Math.PI, Ya = Math.PI / 180, Ra = Math.atan2, z_ = 1e8, to = /([A-Z])/g, hp = /(left|right|width|margin|padding|x)/i, dp = /[\s,\(]\S/, ml = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ur = function(a, f) {
  return f.set(f.t, f.p, Math.round((f.s + f.c * a) * 1e4) / 1e4 + f.u, f);
}, _p = function(a, f) {
  return f.set(f.t, f.p, a === 1 ? f.e : Math.round((f.s + f.c * a) * 1e4) / 1e4 + f.u, f);
}, mp = function(a, f) {
  return f.set(f.t, f.p, a ? Math.round((f.s + f.c * a) * 1e4) / 1e4 + f.u : f.b, f);
}, gp = function(a, f) {
  return f.set(f.t, f.p, a === 1 ? f.e : a ? Math.round((f.s + f.c * a) * 1e4) / 1e4 + f.u : f.b, f);
}, yp = function(a, f) {
  var i = f.s + f.c * a;
  f.set(f.t, f.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + f.u, f);
}, A1 = function(a, f) {
  return f.set(f.t, f.p, a ? f.e : f.b, f);
}, E1 = function(a, f) {
  return f.set(f.t, f.p, a !== 1 ? f.b : f.e, f);
}, pp = function(a, f, i) {
  return a.style[f] = i;
}, vp = function(a, f, i) {
  return a.style.setProperty(f, i);
}, bp = function(a, f, i) {
  return a._gsap[f] = i;
}, Sp = function(a, f, i) {
  return a._gsap.scaleX = a._gsap.scaleY = i;
}, Tp = function(a, f, i, s, r) {
  var h = a._gsap;
  h.scaleX = h.scaleY = i, h.renderTransform(r, h);
}, xp = function(a, f, i, s, r) {
  var h = a._gsap;
  h[f] = i, h.renderTransform(r, h);
}, Vt = "transform", Ce = Vt + "Origin", Ap = function m(a, f) {
  var i = this, s = this.target, r = s.style, h = s._gsap;
  if (a in Yl && r) {
    if (this.tfm = this.tfm || {}, a !== "transform")
      a = ml[a] || a, ~a.indexOf(",") ? a.split(",").forEach(function(d) {
        return i.tfm[d] = Bl(s, d);
      }) : this.tfm[a] = h.x ? h[a] : Bl(s, a), a === Ce && (this.tfm.zOrigin = h.zOrigin);
    else
      return ml.transform.split(",").forEach(function(d) {
        return m.call(i, d, f);
      });
    if (this.props.indexOf(Vt) >= 0)
      return;
    h.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(Ce, f, "")), a = Vt;
  }
  (r || f) && this.props.push(a, f, r[a]);
}, z1 = function(a) {
  a.translate && (a.removeProperty("translate"), a.removeProperty("scale"), a.removeProperty("rotate"));
}, Ep = function() {
  var a = this.props, f = this.target, i = f.style, s = f._gsap, r, h;
  for (r = 0; r < a.length; r += 3)
    a[r + 1] ? a[r + 1] === 2 ? f[a[r]](a[r + 2]) : f[a[r]] = a[r + 2] : a[r + 2] ? i[a[r]] = a[r + 2] : i.removeProperty(a[r].substr(0, 2) === "--" ? a[r] : a[r].replace(to, "-$1").toLowerCase());
  if (this.tfm) {
    for (h in this.tfm)
      s[h] = this.tfm[h];
    s.svg && (s.renderTransform(), f.setAttribute("data-svg-origin", this.svgo || "")), r = Ir(), (!r || !r.isStart) && !i[Vt] && (z1(i), s.zOrigin && i[Ce] && (i[Ce] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1);
  }
}, O1 = function(a, f) {
  var i = {
    target: a,
    props: [],
    revert: Ep,
    save: Ap
  };
  return a._gsap || De.core.getCache(a), f && a.style && a.nodeType && f.split(",").forEach(function(s) {
    return i.save(s);
  }), i;
}, C1, jr = function(a, f) {
  var i = hn.createElementNS ? hn.createElementNS((f || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), a) : hn.createElement(a);
  return i && i.style ? i : hn.createElement(a);
}, Xe = function m(a, f, i) {
  var s = getComputedStyle(a);
  return s[f] || s.getPropertyValue(f.replace(to, "-$1").toLowerCase()) || s.getPropertyValue(f) || !i && m(a, Qa(f) || f, 1) || "";
}, O_ = "O,Moz,ms,Ms,Webkit".split(","), Qa = function(a, f, i) {
  var s = f || Gn, r = s.style, h = 5;
  if (a in r && !i)
    return a;
  for (a = a.charAt(0).toUpperCase() + a.substr(1); h-- && !(O_[h] + a in r); )
    ;
  return h < 0 ? null : (h === 3 ? "ms" : h >= 0 ? O_[h] : "") + a;
}, wr = function() {
  op() && window.document && (A_ = window, hn = A_.document, Ha = hn.documentElement, Gn = jr("div") || {
    style: {}
  }, jr("div"), Vt = Qa(Vt), Ce = Vt + "Origin", Gn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", C1 = !!Qa("perspective"), Ir = De.core.reverting, Pr = 1);
}, C_ = function(a) {
  var f = a.ownerSVGElement, i = jr("svg", f && f.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = a.cloneNode(!0), r;
  s.style.display = "block", i.appendChild(s), Ha.appendChild(i);
  try {
    r = s.getBBox();
  } catch {
  }
  return i.removeChild(s), Ha.removeChild(i), r;
}, D_ = function(a, f) {
  for (var i = f.length; i--; )
    if (a.hasAttribute(f[i]))
      return a.getAttribute(f[i]);
}, D1 = function(a) {
  var f, i;
  try {
    f = a.getBBox();
  } catch {
    f = C_(a), i = 1;
  }
  return f && (f.width || f.height) || i || (f = C_(a)), f && !f.width && !f.x && !f.y ? {
    x: +D_(a, ["x", "cx", "x1"]) || 0,
    y: +D_(a, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : f;
}, M1 = function(a) {
  return !!(a.getCTM && (!a.parentNode || a.ownerSVGElement) && D1(a));
}, yn = function(a, f) {
  if (f) {
    var i = a.style, s;
    f in Yl && f !== Ce && (f = Vt), i.removeProperty ? (s = f.substr(0, 2), (s === "ms" || f.substr(0, 6) === "webkit") && (f = "-" + f), i.removeProperty(s === "--" ? f : f.replace(to, "-$1").toLowerCase())) : i.removeAttribute(f);
  }
}, dn = function(a, f, i, s, r, h) {
  var d = new Oe(a._pt, f, i, 0, 1, h ? E1 : A1);
  return a._pt = d, d.b = s, d.e = r, a._props.push(i), d;
}, M_ = {
  deg: 1,
  rad: 1,
  turn: 1
}, zp = {
  grid: 1,
  flex: 1
}, pn = function m(a, f, i, s) {
  var r = parseFloat(i) || 0, h = (i + "").trim().substr((r + "").length) || "px", d = Gn.style, g = hp.test(f), _ = a.tagName.toLowerCase() === "svg", p = (_ ? "client" : "offset") + (g ? "Width" : "Height"), v = 100, A = s === "px", E = s === "%", N, b, U, V;
  if (s === h || !r || M_[s] || M_[h])
    return r;
  if (h !== "px" && !A && (r = m(a, f, i, "px")), V = a.getCTM && M1(a), (E || h === "%") && (Yl[f] || ~f.indexOf("adius")))
    return N = V ? a.getBBox()[g ? "width" : "height"] : a[p], kt(E ? r / N * v : r / 100 * N);
  if (d[g ? "width" : "height"] = v + (A ? h : s), b = s !== "rem" && ~f.indexOf("adius") || s === "em" && a.appendChild && !_ ? a : a.parentNode, V && (b = (a.ownerSVGElement || {}).parentNode), (!b || b === hn || !b.appendChild) && (b = hn.body), U = b._gsap, U && E && U.width && g && U.time === Ve.time && !U.uncache)
    return kt(r / U.width * v);
  if (E && (f === "height" || f === "width")) {
    var Z = a.style[f];
    a.style[f] = v + s, N = a[p], Z ? a.style[f] = Z : yn(a, f);
  } else
    (E || h === "%") && !zp[Xe(b, "display")] && (d.position = Xe(a, "position")), b === a && (d.position = "static"), b.appendChild(Gn), N = Gn[p], b.removeChild(Gn), d.position = "absolute";
  return g && E && (U = Xn(b), U.time = Ve.time, U.width = b[p]), kt(A ? N * r / v : N && r ? v / N * r : 0);
}, Bl = function(a, f, i, s) {
  var r;
  return Pr || wr(), f in ml && f !== "transform" && (f = ml[f], ~f.indexOf(",") && (f = f.split(",")[0])), Yl[f] && f !== "transform" ? (r = eu(a, s), r = f !== "transformOrigin" ? r[f] : r.svg ? r.origin : Yf(Xe(a, Ce)) + " " + r.zOrigin + "px") : (r = a.style[f], (!r || r === "auto" || s || ~(r + "").indexOf("calc(")) && (r = Hf[f] && Hf[f](a, f, i) || Xe(a, f) || K_(a, f) || (f === "opacity" ? 1 : 0))), i && !~(r + "").trim().indexOf(" ") ? pn(a, f, r, i) + i : r;
}, Op = function(a, f, i, s) {
  if (!i || i === "none") {
    var r = Qa(f, a, 1), h = r && Xe(a, r, 1);
    h && h !== i ? (f = r, i = h) : f === "borderColor" && (i = Xe(a, "borderTopColor"));
  }
  var d = new Oe(this._pt, a.style, f, 0, 1, S1), g = 0, _ = 0, p, v, A, E, N, b, U, V, Z, H, J, w;
  if (d.b = i, d.e = s, i += "", s += "", s.substring(0, 6) === "var(--" && (s = Xe(a, s.substring(4, s.indexOf(")")))), s === "auto" && (b = a.style[f], a.style[f] = s, s = Xe(a, f) || s, b ? a.style[f] = b : yn(a, f)), p = [i, s], o1(p), i = p[0], s = p[1], A = i.match(ja) || [], w = s.match(ja) || [], w.length) {
    for (; v = ja.exec(s); )
      U = v[0], Z = s.substring(g, v.index), N ? N = (N + 1) % 5 : (Z.substr(-5) === "rgba(" || Z.substr(-5) === "hsla(") && (N = 1), U !== (b = A[_++] || "") && (E = parseFloat(b) || 0, J = b.substr((E + "").length), U.charAt(1) === "=" && (U = Ba(E, U) + J), V = parseFloat(U), H = U.substr((V + "").length), g = ja.lastIndex - H.length, H || (H = H || Qe.units[f] || J, g === s.length && (s += H, d.e += H)), J !== H && (E = pn(a, f, b, H) || 0), d._pt = {
        _next: d._pt,
        p: Z || _ === 1 ? Z : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: E,
        c: V - E,
        m: N && N < 4 || f === "zIndex" ? Math.round : 0
      });
    d.c = g < s.length ? s.substring(g, s.length) : "";
  } else
    d.r = f === "display" && s === "none" ? E1 : A1;
  return V_.test(s) && (d.e = 0), this._pt = d, d;
}, N_ = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Cp = function(a) {
  var f = a.split(" "), i = f[0], s = f[1] || "50%";
  return (i === "top" || i === "bottom" || s === "left" || s === "right") && (a = i, i = s, s = a), f[0] = N_[i] || i, f[1] = N_[s] || s, f.join(" ");
}, Dp = function(a, f) {
  if (f.tween && f.tween._time === f.tween._dur) {
    var i = f.t, s = i.style, r = f.u, h = i._gsap, d, g, _;
    if (r === "all" || r === !0)
      s.cssText = "", g = 1;
    else
      for (r = r.split(","), _ = r.length; --_ > -1; )
        d = r[_], Yl[d] && (g = 1, d = d === "transformOrigin" ? Ce : Vt), yn(i, d);
    g && (yn(i, Vt), h && (h.svg && i.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", eu(i, 1), h.uncache = 1, z1(s)));
  }
}, Hf = {
  clearProps: function(a, f, i, s, r) {
    if (r.data !== "isFromStart") {
      var h = a._pt = new Oe(a._pt, f, i, 0, 0, Dp);
      return h.u = s, h.pr = -10, h.tween = r, a._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, tu = [1, 0, 0, 1, 0, 0], N1 = {}, R1 = function(a) {
  return a === "matrix(1, 0, 0, 1, 0, 0)" || a === "none" || !a;
}, R_ = function(a) {
  var f = Xe(a, Vt);
  return R1(f) ? tu : f.substr(7).match(L_).map(kt);
}, eo = function(a, f) {
  var i = a._gsap || Xn(a), s = a.style, r = R_(a), h, d, g, _;
  return i.svg && a.getAttribute("transform") ? (g = a.transform.baseVal.consolidate().matrix, r = [g.a, g.b, g.c, g.d, g.e, g.f], r.join(",") === "1,0,0,1,0,0" ? tu : r) : (r === tu && !a.offsetParent && a !== Ha && !i.svg && (g = s.display, s.display = "block", h = a.parentNode, (!h || !a.offsetParent && !a.getBoundingClientRect().width) && (_ = 1, d = a.nextElementSibling, Ha.appendChild(a)), r = R_(a), g ? s.display = g : yn(a, "display"), _ && (d ? h.insertBefore(a, d) : h ? h.appendChild(a) : Ha.removeChild(a))), f && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, Br = function(a, f, i, s, r, h) {
  var d = a._gsap, g = r || eo(a, !0), _ = d.xOrigin || 0, p = d.yOrigin || 0, v = d.xOffset || 0, A = d.yOffset || 0, E = g[0], N = g[1], b = g[2], U = g[3], V = g[4], Z = g[5], H = f.split(" "), J = parseFloat(H[0]) || 0, w = parseFloat(H[1]) || 0, K, L, F, X;
  i ? g !== tu && (L = E * U - N * b) && (F = J * (U / L) + w * (-b / L) + (b * Z - U * V) / L, X = J * (-N / L) + w * (E / L) - (E * Z - N * V) / L, J = F, w = X) : (K = D1(a), J = K.x + (~H[0].indexOf("%") ? J / 100 * K.width : J), w = K.y + (~(H[1] || H[0]).indexOf("%") ? w / 100 * K.height : w)), s || s !== !1 && d.smooth ? (V = J - _, Z = w - p, d.xOffset = v + (V * E + Z * b) - V, d.yOffset = A + (V * N + Z * U) - Z) : d.xOffset = d.yOffset = 0, d.xOrigin = J, d.yOrigin = w, d.smooth = !!s, d.origin = f, d.originIsAbsolute = !!i, a.style[Ce] = "0px 0px", h && (dn(h, d, "xOrigin", _, J), dn(h, d, "yOrigin", p, w), dn(h, d, "xOffset", v, d.xOffset), dn(h, d, "yOffset", A, d.yOffset)), a.setAttribute("data-svg-origin", J + " " + w);
}, eu = function(a, f) {
  var i = a._gsap || new m1(a);
  if ("x" in i && !f && !i.uncache)
    return i;
  var s = a.style, r = i.scaleX < 0, h = "px", d = "deg", g = getComputedStyle(a), _ = Xe(a, Ce) || "0", p, v, A, E, N, b, U, V, Z, H, J, w, K, L, F, X, lt, rt, nt, ut, ct, ot, M, k, P, st, dt, T, q, W, $, it;
  return p = v = A = b = U = V = Z = H = J = 0, E = N = 1, i.svg = !!(a.getCTM && M1(a)), g.translate && ((g.translate !== "none" || g.scale !== "none" || g.rotate !== "none") && (s[Vt] = (g.translate !== "none" ? "translate3d(" + (g.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (g.rotate !== "none" ? "rotate(" + g.rotate + ") " : "") + (g.scale !== "none" ? "scale(" + g.scale.split(" ").join(",") + ") " : "") + (g[Vt] !== "none" ? g[Vt] : "")), s.scale = s.rotate = s.translate = "none"), L = eo(a, i.svg), i.svg && (i.uncache ? (P = a.getBBox(), _ = i.xOrigin - P.x + "px " + (i.yOrigin - P.y) + "px", k = "") : k = !f && a.getAttribute("data-svg-origin"), Br(a, k || _, !!k || i.originIsAbsolute, i.smooth !== !1, L)), w = i.xOrigin || 0, K = i.yOrigin || 0, L !== tu && (rt = L[0], nt = L[1], ut = L[2], ct = L[3], p = ot = L[4], v = M = L[5], L.length === 6 ? (E = Math.sqrt(rt * rt + nt * nt), N = Math.sqrt(ct * ct + ut * ut), b = rt || nt ? Ra(nt, rt) * Vn : 0, Z = ut || ct ? Ra(ut, ct) * Vn + b : 0, Z && (N *= Math.abs(Math.cos(Z * Ya))), i.svg && (p -= w - (w * rt + K * ut), v -= K - (w * nt + K * ct))) : (it = L[6], W = L[7], dt = L[8], T = L[9], q = L[10], $ = L[11], p = L[12], v = L[13], A = L[14], F = Ra(it, q), U = F * Vn, F && (X = Math.cos(-F), lt = Math.sin(-F), k = ot * X + dt * lt, P = M * X + T * lt, st = it * X + q * lt, dt = ot * -lt + dt * X, T = M * -lt + T * X, q = it * -lt + q * X, $ = W * -lt + $ * X, ot = k, M = P, it = st), F = Ra(-ut, q), V = F * Vn, F && (X = Math.cos(-F), lt = Math.sin(-F), k = rt * X - dt * lt, P = nt * X - T * lt, st = ut * X - q * lt, $ = ct * lt + $ * X, rt = k, nt = P, ut = st), F = Ra(nt, rt), b = F * Vn, F && (X = Math.cos(F), lt = Math.sin(F), k = rt * X + nt * lt, P = ot * X + M * lt, nt = nt * X - rt * lt, M = M * X - ot * lt, rt = k, ot = P), U && Math.abs(U) + Math.abs(b) > 359.9 && (U = b = 0, V = 180 - V), E = kt(Math.sqrt(rt * rt + nt * nt + ut * ut)), N = kt(Math.sqrt(M * M + it * it)), F = Ra(ot, M), Z = Math.abs(F) > 2e-4 ? F * Vn : 0, J = $ ? 1 / ($ < 0 ? -$ : $) : 0), i.svg && (k = a.getAttribute("transform"), i.forceCSS = a.setAttribute("transform", "") || !R1(Xe(a, Vt)), k && a.setAttribute("transform", k))), Math.abs(Z) > 90 && Math.abs(Z) < 270 && (r ? (E *= -1, Z += b <= 0 ? 180 : -180, b += b <= 0 ? 180 : -180) : (N *= -1, Z += Z <= 0 ? 180 : -180)), f = f || i.uncache, i.x = p - ((i.xPercent = p && (!f && i.xPercent || (Math.round(a.offsetWidth / 2) === Math.round(-p) ? -50 : 0))) ? a.offsetWidth * i.xPercent / 100 : 0) + h, i.y = v - ((i.yPercent = v && (!f && i.yPercent || (Math.round(a.offsetHeight / 2) === Math.round(-v) ? -50 : 0))) ? a.offsetHeight * i.yPercent / 100 : 0) + h, i.z = A + h, i.scaleX = kt(E), i.scaleY = kt(N), i.rotation = kt(b) + d, i.rotationX = kt(U) + d, i.rotationY = kt(V) + d, i.skewX = Z + d, i.skewY = H + d, i.transformPerspective = J + h, (i.zOrigin = parseFloat(_.split(" ")[2]) || !f && i.zOrigin || 0) && (s[Ce] = Yf(_)), i.xOffset = i.yOffset = 0, i.force3D = Qe.force3D, i.renderTransform = i.svg ? Np : C1 ? U1 : Mp, i.uncache = 0, i;
}, Yf = function(a) {
  return (a = a.split(" "))[0] + " " + a[1];
}, vr = function(a, f, i) {
  var s = he(f);
  return kt(parseFloat(f) + parseFloat(pn(a, "x", i + "px", s))) + s;
}, Mp = function(a, f) {
  f.z = "0px", f.rotationY = f.rotationX = "0deg", f.force3D = 0, U1(a, f);
}, qn = "0deg", Li = "0px", Ln = ") ", U1 = function(a, f) {
  var i = f || this, s = i.xPercent, r = i.yPercent, h = i.x, d = i.y, g = i.z, _ = i.rotation, p = i.rotationY, v = i.rotationX, A = i.skewX, E = i.skewY, N = i.scaleX, b = i.scaleY, U = i.transformPerspective, V = i.force3D, Z = i.target, H = i.zOrigin, J = "", w = V === "auto" && a && a !== 1 || V === !0;
  if (H && (v !== qn || p !== qn)) {
    var K = parseFloat(p) * Ya, L = Math.sin(K), F = Math.cos(K), X;
    K = parseFloat(v) * Ya, X = Math.cos(K), h = vr(Z, h, L * X * -H), d = vr(Z, d, -Math.sin(K) * -H), g = vr(Z, g, F * X * -H + H);
  }
  U !== Li && (J += "perspective(" + U + Ln), (s || r) && (J += "translate(" + s + "%, " + r + "%) "), (w || h !== Li || d !== Li || g !== Li) && (J += g !== Li || w ? "translate3d(" + h + ", " + d + ", " + g + ") " : "translate(" + h + ", " + d + Ln), _ !== qn && (J += "rotate(" + _ + Ln), p !== qn && (J += "rotateY(" + p + Ln), v !== qn && (J += "rotateX(" + v + Ln), (A !== qn || E !== qn) && (J += "skew(" + A + ", " + E + Ln), (N !== 1 || b !== 1) && (J += "scale(" + N + ", " + b + Ln), Z.style[Vt] = J || "translate(0, 0)";
}, Np = function(a, f) {
  var i = f || this, s = i.xPercent, r = i.yPercent, h = i.x, d = i.y, g = i.rotation, _ = i.skewX, p = i.skewY, v = i.scaleX, A = i.scaleY, E = i.target, N = i.xOrigin, b = i.yOrigin, U = i.xOffset, V = i.yOffset, Z = i.forceCSS, H = parseFloat(h), J = parseFloat(d), w, K, L, F, X;
  g = parseFloat(g), _ = parseFloat(_), p = parseFloat(p), p && (p = parseFloat(p), _ += p, g += p), g || _ ? (g *= Ya, _ *= Ya, w = Math.cos(g) * v, K = Math.sin(g) * v, L = Math.sin(g - _) * -A, F = Math.cos(g - _) * A, _ && (p *= Ya, X = Math.tan(_ - p), X = Math.sqrt(1 + X * X), L *= X, F *= X, p && (X = Math.tan(p), X = Math.sqrt(1 + X * X), w *= X, K *= X)), w = kt(w), K = kt(K), L = kt(L), F = kt(F)) : (w = v, F = A, K = L = 0), (H && !~(h + "").indexOf("px") || J && !~(d + "").indexOf("px")) && (H = pn(E, "x", h, "px"), J = pn(E, "y", d, "px")), (N || b || U || V) && (H = kt(H + N - (N * w + b * L) + U), J = kt(J + b - (N * K + b * F) + V)), (s || r) && (X = E.getBBox(), H = kt(H + s / 100 * X.width), J = kt(J + r / 100 * X.height)), X = "matrix(" + w + "," + K + "," + L + "," + F + "," + H + "," + J + ")", E.setAttribute("transform", X), Z && (E.style[Vt] = X);
}, Rp = function(a, f, i, s, r) {
  var h = 360, d = ne(r), g = parseFloat(r) * (d && ~r.indexOf("rad") ? Vn : 1), _ = g - s, p = s + _ + "deg", v, A;
  return d && (v = r.split("_")[1], v === "short" && (_ %= h, _ !== _ % (h / 2) && (_ += _ < 0 ? h : -h)), v === "cw" && _ < 0 ? _ = (_ + h * z_) % h - ~~(_ / h) * h : v === "ccw" && _ > 0 && (_ = (_ - h * z_) % h - ~~(_ / h) * h)), a._pt = A = new Oe(a._pt, f, i, s, _, _p), A.e = p, A.u = "deg", a._props.push(i), A;
}, U_ = function(a, f) {
  for (var i in f)
    a[i] = f[i];
  return a;
}, Up = function(a, f, i) {
  var s = U_({}, i._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", h = i.style, d, g, _, p, v, A, E, N;
  s.svg ? (_ = i.getAttribute("transform"), i.setAttribute("transform", ""), h[Vt] = f, d = eu(i, 1), yn(i, Vt), i.setAttribute("transform", _)) : (_ = getComputedStyle(i)[Vt], h[Vt] = f, d = eu(i, 1), h[Vt] = _);
  for (g in Yl)
    _ = s[g], p = d[g], _ !== p && r.indexOf(g) < 0 && (E = he(_), N = he(p), v = E !== N ? pn(i, g, _, N) : parseFloat(_), A = parseFloat(p), a._pt = new Oe(a._pt, d, g, v, A - v, Ur), a._pt.u = N || 0, a._props.push(g));
  U_(d, s);
};
ze("padding,margin,Width,Radius", function(m, a) {
  var f = "Top", i = "Right", s = "Bottom", r = "Left", h = (a < 3 ? [f, i, s, r] : [f + r, f + i, s + i, s + r]).map(function(d) {
    return a < 2 ? m + d : "border" + d + m;
  });
  Hf[a > 1 ? "border" + m : m] = function(d, g, _, p, v) {
    var A, E;
    if (arguments.length < 4)
      return A = h.map(function(N) {
        return Bl(d, N, _);
      }), E = A.join(" "), E.split(A[0]).length === 5 ? A[0] : E;
    A = (p + "").split(" "), E = {}, h.forEach(function(N, b) {
      return E[N] = A[b] = A[b] || A[(b - 1) / 2 | 0];
    }), d.init(g, E, v);
  };
});
var j1 = {
  name: "css",
  register: wr,
  targetTest: function(a) {
    return a.style && a.nodeType;
  },
  init: function(a, f, i, s, r) {
    var h = this._props, d = a.style, g = i.vars.startAt, _, p, v, A, E, N, b, U, V, Z, H, J, w, K, L, F, X;
    Pr || wr(), this.styles = this.styles || O1(a), F = this.styles.props, this.tween = i;
    for (b in f)
      if (b !== "autoRound" && (p = f[b], !(Le[b] && g1(b, f, i, s, a, r)))) {
        if (E = typeof p, N = Hf[b], E === "function" && (p = p.call(i, s, a, r), E = typeof p), E === "string" && ~p.indexOf("random(") && (p = $i(p)), N)
          N(this, a, b, p, i) && (L = 1);
        else if (b.substr(0, 2) === "--")
          _ = (getComputedStyle(a).getPropertyValue(b) + "").trim(), p += "", mn.lastIndex = 0, mn.test(_) || (U = he(_), V = he(p), V ? U !== V && (_ = pn(a, b, _, V) + V) : U && (p += U)), this.add(d, "setProperty", _, p, s, r, 0, 0, b), h.push(b), F.push(b, 0, d[b]);
        else if (E !== "undefined") {
          if (g && b in g ? (_ = typeof g[b] == "function" ? g[b].call(i, s, a, r) : g[b], ne(_) && ~_.indexOf("random(") && (_ = $i(_)), he(_ + "") || _ === "auto" || (_ += Qe.units[b] || he(Bl(a, b)) || ""), (_ + "").charAt(1) === "=" && (_ = Bl(a, b))) : _ = Bl(a, b), A = parseFloat(_), Z = E === "string" && p.charAt(1) === "=" && p.substr(0, 2), Z && (p = p.substr(2)), v = parseFloat(p), b in ml && (b === "autoAlpha" && (A === 1 && Bl(a, "visibility") === "hidden" && v && (A = 0), F.push("visibility", 0, d.visibility), dn(this, d, "visibility", A ? "inherit" : "hidden", v ? "inherit" : "hidden", !v)), b !== "scale" && b !== "transform" && (b = ml[b], ~b.indexOf(",") && (b = b.split(",")[0]))), H = b in Yl, H) {
            if (this.styles.save(b), X = p, E === "string" && p.substring(0, 6) === "var(--") {
              if (p = Xe(a, p.substring(4, p.indexOf(")"))), p.substring(0, 5) === "calc(") {
                var lt = a.style.perspective;
                a.style.perspective = p, p = Xe(a, "perspective"), lt ? a.style.perspective = lt : yn(a, "perspective");
              }
              v = parseFloat(p);
            }
            if (J || (w = a._gsap, w.renderTransform && !f.parseTransform || eu(a, f.parseTransform), K = f.smoothOrigin !== !1 && w.smooth, J = this._pt = new Oe(this._pt, d, Vt, 0, 1, w.renderTransform, w, 0, -1), J.dep = 1), b === "scale")
              this._pt = new Oe(this._pt, w, "scaleY", w.scaleY, (Z ? Ba(w.scaleY, Z + v) : v) - w.scaleY || 0, Ur), this._pt.u = 0, h.push("scaleY", b), b += "X";
            else if (b === "transformOrigin") {
              F.push(Ce, 0, d[Ce]), p = Cp(p), w.svg ? Br(a, p, 0, K, 0, this) : (V = parseFloat(p.split(" ")[2]) || 0, V !== w.zOrigin && dn(this, w, "zOrigin", w.zOrigin, V), dn(this, d, b, Yf(_), Yf(p)));
              continue;
            } else if (b === "svgOrigin") {
              Br(a, p, 1, K, 0, this);
              continue;
            } else if (b in N1) {
              Rp(this, w, b, A, Z ? Ba(A, Z + p) : p);
              continue;
            } else if (b === "smoothOrigin") {
              dn(this, w, "smooth", w.smooth, p);
              continue;
            } else if (b === "force3D") {
              w[b] = p;
              continue;
            } else if (b === "transform") {
              Up(this, p, a);
              continue;
            }
          } else b in d || (b = Qa(b) || b);
          if (H || (v || v === 0) && (A || A === 0) && !dp.test(p) && b in d)
            U = (_ + "").substr((A + "").length), v || (v = 0), V = he(p) || (b in Qe.units ? Qe.units[b] : U), U !== V && (A = pn(a, b, _, V)), this._pt = new Oe(this._pt, H ? w : d, b, A, (Z ? Ba(A, Z + v) : v) - A, !H && (V === "px" || b === "zIndex") && f.autoRound !== !1 ? yp : Ur), this._pt.u = V || 0, H && X !== p ? (this._pt.b = _, this._pt.e = X, this._pt.r = gp) : U !== V && V !== "%" && (this._pt.b = _, this._pt.r = mp);
          else if (b in d)
            Op.call(this, a, b, _, Z ? Z + p : p);
          else if (b in a)
            this.add(a, b, _ || a[b], Z ? Z + p : p, s, r);
          else if (b !== "parseTransform") {
            Gr(b, p);
            continue;
          }
          H || (b in d ? F.push(b, 0, d[b]) : typeof a[b] == "function" ? F.push(b, 2, a[b]()) : F.push(b, 1, _ || a[b])), h.push(b);
        }
      }
    L && T1(this);
  },
  render: function(a, f) {
    if (f.tween._time || !Ir())
      for (var i = f._pt; i; )
        i.r(a, i.d), i = i._next;
    else
      f.styles.revert();
  },
  get: Bl,
  aliases: ml,
  getSetter: function(a, f, i) {
    var s = ml[f];
    return s && s.indexOf(",") < 0 && (f = s), f in Yl && f !== Ce && (a._gsap.x || Bl(a, "x")) ? i && E_ === i ? f === "scale" ? Sp : bp : (E_ = i || {}) && (f === "scale" ? Tp : xp) : a.style && !qr(a.style[f]) ? pp : ~f.indexOf("-") ? vp : Wr(a, f);
  },
  core: {
    _removeProperty: yn,
    _getMatrix: eo
  }
};
De.utils.checkPrefix = Qa;
De.core.getStyleSaver = O1;
(function(m, a, f, i) {
  var s = ze(m + "," + a + "," + f, function(r) {
    Yl[r] = 1;
  });
  ze(a, function(r) {
    Qe.units[r] = "deg", N1[r] = 1;
  }), ml[s[13]] = m + "," + a, ze(i, function(r) {
    var h = r.split(":");
    ml[h[1]] = s[h[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ze("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(m) {
  Qe.units[m] = "px";
});
De.registerPlugin(j1);
var Ua = De.registerPlugin(j1) || De;
Ua.core.Tween;
const jp = "_dualPane_15ppw_95", wp = "_agentFullPane_15ppw_114", Bp = "_agentPhasePanel_15ppw_123", Hp = "_agentPhasePanelVisible_15ppw_133", Yp = "_agentPhasePanelHidden_15ppw_140", qp = "_agentCard_15ppw_147", Lp = "_agentCardHead_15ppw_157", Vp = "_agentCardEyebrow_15ppw_161", Gp = "_agentCardTitle_15ppw_172", Xp = "_agentDropZoneLarge_15ppw_180", Qp = "_agentDropZoneLargeActive_15ppw_192", Zp = "_agentDropHint_15ppw_199", Kp = "_agentFloatingPdf_15ppw_207", Jp = "_agentFloatingPdfDropped_15ppw_218", kp = "_agentDragCursor_15ppw_222", Fp = "_browser_15ppw_293", Wp = "_browserChrome_15ppw_308", $p = "_dots_15ppw_320", Pp = "_dot_15ppw_320", Ip = "_urlBar_15ppw_341", tv = "_browserPage_15ppw_355", ev = "_form_15ppw_369", lv = "_formIntro_15ppw_376", nv = "_formHeading_15ppw_382", av = "_formSub_15ppw_390", iv = "_fieldGroup_15ppw_396", uv = "_inputLabel_15ppw_402", fv = "_agentFieldLabel_15ppw_410", cv = "_input_15ppw_402", sv = "_inputAgent_15ppw_440", rv = "_button_15ppw_445", ov = "_highlight_15ppw_460", hv = "_highlightReplay_15ppw_471", dv = "_highlightLabel_15ppw_477", _v = "_highlightLabelReplay_15ppw_493", mv = "_flash_15ppw_498", gv = "_cursor_15ppw_515", yv = "_cursorInner_15ppw_525", pv = "_cursorInnerClicking_15ppw_529", vv = "_extension_15ppw_534", bv = "_panelTopbar_15ppw_545", Sv = "_panelIconButton_15ppw_557", Tv = "_panelIconButtonHidden_15ppw_573", xv = "_panelHomeButton_15ppw_578", Av = "_panelIconSvg_15ppw_585", Ev = "_panelTopbarSpacer_15ppw_589", zv = "_panelBody_15ppw_594", Ov = "_panelStatusRow_15ppw_604", Cv = "_panelStatusPill_15ppw_612", Dv = "_panelCount_15ppw_619", Mv = "_extContent_15ppw_627", Nv = "_panelEmptyState_15ppw_641", Rv = "_extRecDot_15ppw_656", Uv = "_extRecLabel_15ppw_665", jv = "_actionItem_15ppw_674", wv = "_actionItemCurrent_15ppw_697", Bv = "_actionHeaderRow_15ppw_702", Hv = "_actionTitle_15ppw_709", Yv = "_screenshot_15ppw_750", qv = "_replayHeader_15ppw_759", Lv = "_replayTitle_15ppw_770", Vv = "_replayProgress_15ppw_782", Gv = "_replayProgressTrack_15ppw_791", Xv = "_replayProgressFill_15ppw_800", Qv = "_replayList_15ppw_808", Zv = "_replayActionItem_15ppw_821", Kv = "_replayActionItemCompleted_15ppw_850", Jv = "_replayActionItemCurrent_15ppw_861", kv = "_replayActionHeader_15ppw_866", Fv = "_replayStepNumber_15ppw_873", Wv = "_replayActionTitle_15ppw_881", $v = "_replayActionMeta_15ppw_889", Pv = "_replayComplete_15ppw_900", Iv = "_replayCompleteIcon_15ppw_911", t2 = "_replayCompleteTitle_15ppw_925", e2 = "_replayCompleteSub_15ppw_934", l2 = "_websiteFields_15ppw_1046", n2 = "_agentAnalysisRow_15ppw_1078", a2 = "_agentAnalysisRowVisible_15ppw_1089", i2 = "_agentAnalysisRowDone_15ppw_1093", u2 = "_agentAnalysisCard_15ppw_1097", f2 = "_agentAnalysisCardActive_15ppw_1107", c2 = "_agentAnalysisCardDone_15ppw_1112", s2 = "_agentAnalysisDot_15ppw_1117", r2 = "_agentVariableList_15ppw_1130", o2 = "_agentVariableListVisible_15ppw_1140", h2 = "_agentVariableRow_15ppw_1145", d2 = "_agentVariableRowVisible_15ppw_1160", _2 = "_agentVariableKey_15ppw_1166", m2 = "_agentVariableValue_15ppw_1174", g2 = "_agentScanLine_15ppw_1186", y2 = "_singleFieldCard_15ppw_1199", p2 = "_singleFieldCardAgent_15ppw_1210", v2 = "_singleFieldCardAgentPulse_15ppw_1215", b2 = "_agentValueSurface_15ppw_1219", S2 = "_agentValueText_15ppw_1229", T2 = "_inputAgentTyping_15ppw_1240", x2 = "_agentCaretInline_15ppw_1244", B = {
  dualPane: jp,
  agentFullPane: wp,
  agentPhasePanel: Bp,
  agentPhasePanelVisible: Hp,
  agentPhasePanelHidden: Yp,
  agentCard: qp,
  agentCardHead: Lp,
  agentCardEyebrow: Vp,
  agentCardTitle: Gp,
  agentDropZoneLarge: Xp,
  agentDropZoneLargeActive: Qp,
  agentDropHint: Zp,
  agentFloatingPdf: Kp,
  agentFloatingPdfDropped: Jp,
  agentDragCursor: kp,
  browser: Fp,
  browserChrome: Wp,
  dots: $p,
  dot: Pp,
  urlBar: Ip,
  browserPage: tv,
  form: ev,
  formIntro: lv,
  formHeading: nv,
  formSub: av,
  fieldGroup: iv,
  inputLabel: uv,
  agentFieldLabel: fv,
  input: cv,
  inputAgent: sv,
  button: rv,
  highlight: ov,
  highlightReplay: hv,
  highlightLabel: dv,
  highlightLabelReplay: _v,
  flash: mv,
  cursor: gv,
  cursorInner: yv,
  cursorInnerClicking: pv,
  extension: vv,
  panelTopbar: bv,
  panelIconButton: Sv,
  panelIconButtonHidden: Tv,
  panelHomeButton: xv,
  panelIconSvg: Av,
  panelTopbarSpacer: Ev,
  panelBody: zv,
  panelStatusRow: Ov,
  panelStatusPill: Cv,
  panelCount: Dv,
  extContent: Mv,
  panelEmptyState: Nv,
  extRecDot: Rv,
  extRecLabel: Uv,
  actionItem: jv,
  actionItemCurrent: wv,
  actionHeaderRow: Bv,
  actionTitle: Hv,
  screenshot: Yv,
  replayHeader: qv,
  replayTitle: Lv,
  replayProgress: Vv,
  replayProgressTrack: Gv,
  replayProgressFill: Xv,
  replayList: Qv,
  replayActionItem: Zv,
  replayActionItemCompleted: Kv,
  replayActionItemCurrent: Jv,
  replayActionHeader: kv,
  replayStepNumber: Fv,
  replayActionTitle: Wv,
  replayActionMeta: $v,
  replayComplete: Pv,
  replayCompleteIcon: Iv,
  replayCompleteTitle: t2,
  replayCompleteSub: e2,
  websiteFields: l2,
  agentAnalysisRow: n2,
  agentAnalysisRowVisible: a2,
  agentAnalysisRowDone: i2,
  agentAnalysisCard: u2,
  agentAnalysisCardActive: f2,
  agentAnalysisCardDone: c2,
  agentAnalysisDot: s2,
  agentVariableList: r2,
  agentVariableListVisible: o2,
  agentVariableRow: h2,
  agentVariableRowVisible: d2,
  agentVariableKey: _2,
  agentVariableValue: m2,
  agentScanLine: g2,
  singleFieldCard: y2,
  singleFieldCardAgent: p2,
  singleFieldCardAgentPulse: v2,
  agentValueSurface: b2,
  agentValueText: S2,
  inputAgentTyping: T2,
  agentCaretInline: x2
}, Cf = "sarah@acme.io", Df = "Sarah Chen", Mf = "sarah@acme.io", A2 = "accounts@northstar.io", E2 = "Northstar Labs", z2 = "V-20418", O2 = "Net 30", Xi = [
  { label: "Vendor name", value: E2 },
  { label: "Vendor email", value: A2 },
  { label: "Vendor ID", value: z2 },
  { label: "Payment terms", value: O2 }
], xf = Object.fromEntries(Xi.map((m) => [m.label, ""])), Nf = 90, C2 = 1360 + Cf.length * 68 + 120 + 2e3, D2 = 1080 + Df.length * 62 + 180, M2 = D2 + 920 + Mf.length * 58 + 180 + 1500, N2 = 4556, br = [
  (Nf + C2) / 1e3,
  (Nf + M2) / 1e3,
  (Nf + N2) / 1e3
];
function oe(...m) {
  return m.filter(Boolean).join(" ");
}
function Ji(m, a, f = 5) {
  if (!m || !a) return null;
  const i = m.getBoundingClientRect(), s = a.getBoundingClientRect();
  return {
    top: s.top - i.top - f,
    left: s.left - i.left - f,
    width: s.width + f * 2,
    height: s.height + f * 2
  };
}
function ki(m, a) {
  if (!m || !a) return null;
  const f = m.getBoundingClientRect(), i = a.getBoundingClientRect();
  return {
    x: i.left - f.left + 12,
    y: i.top - f.top + i.height / 2 - 7
  };
}
function R2(m, a) {
  if (!m || !a) return null;
  const f = m.getBoundingClientRect(), i = a.getBoundingClientRect();
  return {
    x: i.left - f.left + i.width / 2,
    y: i.top - f.top + i.height / 2
  };
}
function lo() {
  return /* @__PURE__ */ O.jsxs("svg", { width: "17", height: "22", viewBox: "0 0 17 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx(
      "path",
      {
        d: "M2 1.5L2 17.5L5.8 14L8.8 21L11.5 19.9L8.5 12.8L14.5 12.8Z",
        fill: "#1a1a1a",
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ O.jsx(
      "path",
      {
        d: "M2.9 3.2L2.9 16.4L6.2 13.3L9 19.6L10.7 18.9L7.9 12.1L12.8 12.1Z",
        fill: "white",
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )
  ] });
}
function Sr() {
  return /* @__PURE__ */ O.jsxs("svg", { width: "100%", height: "48", viewBox: "0 0 172 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("rect", { width: "172", height: "48", fill: "#f4f5f2" }),
    /* @__PURE__ */ O.jsx("rect", { x: "0", y: "0", width: "172", height: "11", fill: "#ececea" }),
    /* @__PURE__ */ O.jsx("rect", { x: "6", y: "3.5", width: "4", height: "4", rx: "2", fill: "#d4d4d0" }),
    /* @__PURE__ */ O.jsx("rect", { x: "12", y: "3.5", width: "4", height: "4", rx: "2", fill: "#d4d4d0" }),
    /* @__PURE__ */ O.jsx("rect", { x: "18", y: "3.5", width: "4", height: "4", rx: "2", fill: "#d4d4d0" }),
    /* @__PURE__ */ O.jsx("rect", { x: "28", y: "3", width: "72", height: "5", rx: "2.5", fill: "#e2e2df" }),
    /* @__PURE__ */ O.jsx("rect", { x: "38", y: "19", width: "50", height: "5", rx: "2.5", fill: "#d0d0cc" }),
    /* @__PURE__ */ O.jsx("rect", { x: "50", y: "28", width: "72", height: "3", rx: "1.5", fill: "#e0e0dc" }),
    /* @__PURE__ */ O.jsx("rect", { x: "56", y: "34", width: "60", height: "3", rx: "1.5", fill: "#e8e8e5" })
  ] });
}
function j_() {
  return /* @__PURE__ */ O.jsxs("svg", { width: "100%", height: "48", viewBox: "0 0 172 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("rect", { width: "172", height: "48", fill: "#f9f9f8" }),
    /* @__PURE__ */ O.jsx("rect", { x: "12", y: "8", width: "28", height: "4", rx: "2", fill: "#d8d8d4" }),
    /* @__PURE__ */ O.jsx("rect", { x: "12", y: "16", width: "148", height: "22", rx: "6", fill: "white", stroke: "#e0e0dc", strokeWidth: "1" }),
    /* @__PURE__ */ O.jsx("rect", { x: "20", y: "24.5", width: "52", height: "5", rx: "2", fill: "#bbbbb7" }),
    /* @__PURE__ */ O.jsx("rect", { x: "74", y: "22", width: "1.5", height: "10", rx: "0.75", fill: "#ec4899", opacity: "0.8" })
  ] });
}
function U2() {
  return /* @__PURE__ */ O.jsxs("svg", { width: "100%", height: "48", viewBox: "0 0 172 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("rect", { width: "172", height: "48", fill: "#f9f9f8" }),
    /* @__PURE__ */ O.jsx("rect", { x: "12", y: "8", width: "148", height: "14", rx: "6", fill: "white", stroke: "#e0e0dc", strokeWidth: "1" }),
    /* @__PURE__ */ O.jsx("rect", { x: "20", y: "12.5", width: "40", height: "5", rx: "2", fill: "#c8c8c4" }),
    /* @__PURE__ */ O.jsx("rect", { x: "12", y: "28", width: "148", height: "14", rx: "6", fill: "#111" }),
    /* @__PURE__ */ O.jsx("rect", { x: "58", y: "33", width: "56", height: "4", rx: "2", fill: "rgba(255,255,255,0.65)" })
  ] });
}
function j2() {
  return /* @__PURE__ */ O.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("polyline", { points: "20 6 9 17 4 12" }) });
}
function w2() {
  return /* @__PURE__ */ O.jsxs("svg", { width: "58", height: "72", viewBox: "0 0 58 72", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx(
      "path",
      {
        d: "M14 3.5H34.5L46 15V62C46 65.3137 43.3137 68 40 68H14C10.6863 68 8 65.3137 8 62V9.5C8 6.18629 10.6863 3.5 14 3.5Z",
        fill: "#FCFBF8",
        stroke: "rgba(17,24,39,0.14)"
      }
    ),
    /* @__PURE__ */ O.jsx(
      "path",
      {
        d: "M34.5 3.5V12C34.5 13.6569 35.8431 15 37.5 15H46",
        fill: "#F4EFE7"
      }
    ),
    /* @__PURE__ */ O.jsx(
      "path",
      {
        d: "M34.5 3.5V12C34.5 13.6569 35.8431 15 37.5 15H46",
        stroke: "rgba(17,24,39,0.12)",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ O.jsx("rect", { x: "14", y: "12", width: "16", height: "7", rx: "3.5", fill: "#D96B5B" }),
    /* @__PURE__ */ O.jsx("rect", { x: "18", y: "14.3", width: "8", height: "2.3", rx: "1.15", fill: "rgba(255,255,255,0.9)" }),
    /* @__PURE__ */ O.jsx("rect", { x: "14", y: "28", width: "26", height: "4", rx: "2", fill: "#D9D4CB" }),
    /* @__PURE__ */ O.jsx("rect", { x: "14", y: "36", width: "24", height: "4", rx: "2", fill: "#E7E1D8" }),
    /* @__PURE__ */ O.jsx("rect", { x: "14", y: "44", width: "18", height: "4", rx: "2", fill: "#E7E1D8" }),
    /* @__PURE__ */ O.jsx("rect", { x: "14", y: "56", width: "24", height: "1.5", rx: "0.75", fill: "rgba(17,24,39,0.1)" })
  ] });
}
function w1({ url: m }) {
  return /* @__PURE__ */ O.jsxs("div", { className: B.browserChrome, children: [
    /* @__PURE__ */ O.jsxs("div", { className: B.dots, children: [
      /* @__PURE__ */ O.jsx("span", { className: B.dot }),
      /* @__PURE__ */ O.jsx("span", { className: B.dot }),
      /* @__PURE__ */ O.jsx("span", { className: B.dot })
    ] }),
    /* @__PURE__ */ O.jsx("div", { className: B.urlBar, children: m })
  ] });
}
function B1({ showBack: m = !1 }) {
  return /* @__PURE__ */ O.jsxs("div", { className: B.panelTopbar, children: [
    /* @__PURE__ */ O.jsx(
      "button",
      {
        type: "button",
        className: oe(B.panelIconButton, !m && B.panelIconButtonHidden),
        "aria-label": "Back",
        children: /* @__PURE__ */ O.jsx("svg", { className: B.panelIconSvg, viewBox: "0 0 24 24", width: "16", height: "16", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("path", { d: "M15.5 19.5L8 12l7.5-7.5", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    /* @__PURE__ */ O.jsx("button", { type: "button", className: oe(B.panelIconButton, B.panelHomeButton), "aria-label": "Home", children: /* @__PURE__ */ O.jsxs("svg", { className: B.panelIconSvg, viewBox: "0 0 24 24", width: "16", height: "16", "aria-hidden": "true", children: [
      /* @__PURE__ */ O.jsx("path", { d: "M3 10.5l9-7 9 7", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ O.jsx("path", { d: "M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ O.jsx("span", { className: B.panelTopbarSpacer, "aria-hidden": "true" })
  ] });
}
function B2({ label: m, value: a, displayValue: f, showCaret: i, pulse: s }) {
  const r = i || f.length > 0;
  return /* @__PURE__ */ O.jsxs("div", { className: oe(B.singleFieldCard, r && B.singleFieldCardAgent, s && B.singleFieldCardAgentPulse), children: [
    /* @__PURE__ */ O.jsx("div", { className: B.agentFieldLabel, children: m }),
    /* @__PURE__ */ O.jsxs("div", { className: oe(B.input, B.agentValueSurface, r && B.inputAgent, i && B.inputAgentTyping), children: [
      /* @__PURE__ */ O.jsx("span", { className: B.agentValueText, children: f || " " }),
      i && f.length < a.length ? /* @__PURE__ */ O.jsx("span", { className: B.agentCaretInline, "aria-hidden": "true" }) : null
    ] })
  ] });
}
function H2({ label: m, value: a, visible: f }) {
  return /* @__PURE__ */ O.jsxs("div", { className: oe(B.agentVariableRow, f && B.agentVariableRowVisible), children: [
    /* @__PURE__ */ O.jsx("span", { className: B.agentVariableKey, children: m }),
    /* @__PURE__ */ O.jsx("span", { className: B.agentVariableValue, children: a })
  ] });
}
function no(m, a, f) {
  const i = ft.useRef([]), s = ft.useCallback(() => {
    i.current.forEach(clearTimeout), i.current = [];
  }, []), r = ft.useCallback((h, d) => {
    const g = setTimeout(d, h);
    i.current.push(g);
  }, []);
  return ft.useEffect(() => (a(), () => {
    s();
  }), [s, a]), ft.useEffect(() => {
    if (m < 1) return;
    s(), a();
    const h = setTimeout(() => {
      f({ clearScene: s, at: r });
    }, Nf);
    return i.current.push(h), () => {
      clearTimeout(h), s();
    };
  }, [f, r, s, m, a]), { clearScene: s };
}
function Y2({ playToken: m }) {
  const a = ft.useRef(null), f = ft.useRef(null), i = ft.useRef(null), [s, r] = ft.useState({ x: -40, y: -40 }), [h, d] = ft.useState(!1), [g, _] = ft.useState(null), [p, v] = ft.useState(""), [A, E] = ft.useState([]), [N, b] = ft.useState(0), U = ft.useCallback(() => {
    E([]), v(""), _(null), d(!1), r({ x: -40, y: -40 });
  }, []), V = ft.useCallback(({ clearScene: Z, at: H }) => {
    Z();
    const J = a.current, w = f.current, K = i.current;
    if (!J || !w || !K) return;
    const L = J.getBoundingClientRect(), X = { x: w.getBoundingClientRect().left - L.left - 80, y: L.height - 44 }, lt = ki(J, w), rt = ki(J, K);
    if (!lt || !rt) return;
    E([]), v(""), _(null), d(!1), r(X), H(480, () => r(lt)), H(1e3, () => _({ rect: Ji(J, w), visible: !0 }));
    const nt = 1360;
    Cf.split("").forEach((ct, ot) => {
      H(nt + ot * 68, () => v(Cf.slice(0, ot + 1)));
    }), H(nt + 180, () => E([
      { text: "Navigated to signup", type: "navigate", Screenshot: Sr }
    ]));
    const ut = nt + Cf.length * 68 + 120;
    H(ut, () => b((ct) => ct + 1)), H(ut + 120, () => E([
      { text: "Navigated to signup", type: "navigate", Screenshot: Sr },
      { text: "Filled email field", type: "input", Screenshot: j_ }
    ])), H(ut + 220, () => _((ct) => ct && { ...ct, visible: !1 })), H(ut + 560, () => r(rt)), H(ut + 980, () => _({ rect: Ji(J, K), visible: !0 })), H(ut + 1360, () => {
      d(!0), b((ct) => ct + 1);
    }), H(ut + 1640, () => d(!1)), H(ut + 1460, () => {
      _((ct) => ct && { ...ct, visible: !1 }), E([
        { text: "Navigated to signup", type: "navigate", Screenshot: Sr },
        { text: "Filled email field", type: "input", Screenshot: j_ },
        { text: 'Clicked "Get started"', type: "click", Screenshot: U2 }
      ]);
    }), H(ut + 2e3, () => r(X));
  }, []);
  return no(m, U, V), /* @__PURE__ */ O.jsxs("div", { className: B.dualPane, children: [
    /* @__PURE__ */ O.jsxs("div", { className: B.browser, ref: a, children: [
      /* @__PURE__ */ O.jsx(w1, { url: "app.nari.ai/invite" }),
      /* @__PURE__ */ O.jsx("div", { className: B.browserPage, children: /* @__PURE__ */ O.jsxs("div", { className: B.form, children: [
        /* @__PURE__ */ O.jsxs("div", { className: B.formIntro, children: [
          /* @__PURE__ */ O.jsx("div", { className: B.formHeading, children: "Join your team" }),
          /* @__PURE__ */ O.jsx("div", { className: B.formSub, children: "Free trial. No card needed." })
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: B.fieldGroup, children: [
          /* @__PURE__ */ O.jsx("div", { className: B.inputLabel, children: "Work email" }),
          /* @__PURE__ */ O.jsx(
            "input",
            {
              ref: f,
              className: B.input,
              placeholder: "you@company.com",
              value: p,
              readOnly: !0
            }
          )
        ] }),
        /* @__PURE__ */ O.jsxs("button", { ref: i, className: B.button, children: [
          "Get started ",
          "->"
        ] })
      ] }) }),
      g?.rect ? /* @__PURE__ */ O.jsx(
        "div",
        {
          className: B.highlight,
          style: {
            top: g.rect.top,
            left: g.rect.left,
            width: g.rect.width,
            height: g.rect.height,
            opacity: g.visible ? 1 : 0
          },
          children: /* @__PURE__ */ O.jsx("div", { className: B.highlightLabel, children: "Will capture this" })
        }
      ) : null,
      N > 0 ? /* @__PURE__ */ O.jsx("div", { className: B.flash }, N) : null,
      /* @__PURE__ */ O.jsx("div", { className: B.cursor, style: { transform: `translate(${s.x}px, ${s.y}px)` }, children: /* @__PURE__ */ O.jsx("div", { className: h ? B.cursorInnerClicking : B.cursorInner, children: /* @__PURE__ */ O.jsx(lo, {}) }) })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: B.extension, children: [
      /* @__PURE__ */ O.jsx(B1, {}),
      /* @__PURE__ */ O.jsxs("div", { className: B.panelBody, children: [
        /* @__PURE__ */ O.jsxs("div", { className: B.panelStatusRow, children: [
          /* @__PURE__ */ O.jsxs("span", { className: B.panelStatusPill, children: [
            /* @__PURE__ */ O.jsx("span", { className: B.extRecDot }),
            /* @__PURE__ */ O.jsx("span", { className: B.extRecLabel, children: "Recording" })
          ] }),
          /* @__PURE__ */ O.jsxs("span", { className: B.panelCount, children: [
            A.length,
            " steps"
          ] })
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: B.extContent, children: [
          A.length === 0 ? /* @__PURE__ */ O.jsx("div", { className: B.panelEmptyState, children: "Captured steps appear here" }) : null,
          A.map((Z, H) => {
            const J = H === A.length - 1;
            return /* @__PURE__ */ O.jsxs(
              "div",
              {
                className: oe(B.actionItem, J && B.actionItemCurrent),
                children: [
                  /* @__PURE__ */ O.jsx("div", { className: B.actionHeaderRow, children: /* @__PURE__ */ O.jsx("span", { className: B.actionTitle, children: Z.text }) }),
                  J ? /* @__PURE__ */ O.jsx("div", { className: B.screenshot, children: /* @__PURE__ */ O.jsx(Z.Screenshot, {}) }) : null
                ]
              },
              Z.text
            );
          })
        ] })
      ] })
    ] })
  ] });
}
function q2({ playToken: m }) {
  const a = ft.useRef(null), f = ft.useRef(null), i = ft.useRef(null), s = ft.useRef(null), [r, h] = ft.useState({ x: -40, y: -40 }), [d, g] = ft.useState(!1), [_, p] = ft.useState(null), [v, A] = ft.useState(""), [E, N] = ft.useState(""), [b, U] = ft.useState(0), V = ft.useCallback(() => {
    A(""), N(""), U(0), g(!1), p(null), h({ x: -40, y: -40 });
  }, []), Z = ft.useCallback(({ clearScene: w, at: K }) => {
    w();
    const L = a.current, F = f.current, X = i.current, lt = s.current;
    if (!L || !F || !X || !lt) return;
    const rt = L.getBoundingClientRect(), ut = { x: F.getBoundingClientRect().left - rt.left - 80, y: rt.height - 44 }, ct = ki(L, F), ot = ki(L, X), M = ki(L, lt);
    if (!ct || !ot || !M) return;
    A(""), N(""), U(0), g(!1), p(null), h(ut), K(320, () => h(ct)), K(780, () => p({ rect: Ji(L, F), visible: !0 }));
    const k = 1080;
    Df.split("").forEach((T, q) => {
      K(k + q * 62, () => A(Df.slice(0, q + 1)));
    }), K(k - 80, () => U(1));
    const P = k + Df.length * 62 + 180;
    K(P, () => p((T) => T && { ...T, visible: !1 })), K(P + 280, () => h(ot)), K(P + 700, () => p({ rect: Ji(L, X), visible: !0 }));
    const st = P + 920;
    K(st - 60, () => U(2)), Mf.split("").forEach((T, q) => {
      K(st + q * 58, () => N(Mf.slice(0, q + 1)));
    });
    const dt = st + Mf.length * 58 + 180;
    K(dt, () => p((T) => T && { ...T, visible: !1 })), K(dt + 280, () => h(M)), K(dt + 660, () => p({ rect: Ji(L, lt), visible: !0 })), K(dt + 720, () => U(3)), K(dt + 980, () => g(!0)), K(dt + 1130, () => g(!1)), K(dt + 1080, () => p((T) => T && { ...T, visible: !1 })), K(dt + 1280, () => U(4)), K(dt + 1500, () => h(ut));
  }, []);
  no(m, V, Z);
  const H = [
    { number: "01", label: "Add teammate name", state: b > 1 ? "done" : b === 1 ? "active" : "idle" },
    { number: "02", label: "Add work email", state: b > 2 ? "done" : b === 2 ? "active" : "idle" },
    { number: "03", label: "Send invite", state: b > 3 ? "done" : b === 3 ? "active" : "idle" }
  ], J = b > 3 ? 100 : Math.min(b, 3) / 3 * 100;
  return /* @__PURE__ */ O.jsxs("div", { className: B.dualPane, children: [
    /* @__PURE__ */ O.jsxs("div", { className: B.browser, ref: a, children: [
      /* @__PURE__ */ O.jsx(w1, { url: "app.nari.ai/invite" }),
      /* @__PURE__ */ O.jsx("div", { className: B.browserPage, children: /* @__PURE__ */ O.jsxs("div", { className: B.form, children: [
        /* @__PURE__ */ O.jsxs("div", { className: B.formIntro, children: [
          /* @__PURE__ */ O.jsx("div", { className: B.formHeading, children: "Invite a teammate" }),
          /* @__PURE__ */ O.jsx("div", { className: B.formSub, children: "Nari shows one next step at a time." })
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: B.fieldGroup, children: [
          /* @__PURE__ */ O.jsx("div", { className: B.inputLabel, children: "Name" }),
          /* @__PURE__ */ O.jsx("input", { ref: f, className: B.input, placeholder: "Sarah Chen", value: v, readOnly: !0 })
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: B.fieldGroup, children: [
          /* @__PURE__ */ O.jsx("div", { className: B.inputLabel, children: "Work email" }),
          /* @__PURE__ */ O.jsx("input", { ref: i, className: B.input, placeholder: "sarah@acme.io", value: E, readOnly: !0 })
        ] }),
        /* @__PURE__ */ O.jsx("button", { ref: s, className: B.button, children: "Send invite" })
      ] }) }),
      _?.rect ? /* @__PURE__ */ O.jsx(
        "div",
        {
          className: oe(B.highlight, B.highlightReplay),
          style: {
            top: _.rect.top,
            left: _.rect.left,
            width: _.rect.width,
            height: _.rect.height,
            opacity: _.visible ? 1 : 0
          },
          children: /* @__PURE__ */ O.jsx("div", { className: oe(B.highlightLabel, B.highlightLabelReplay), children: "Do this next" })
        }
      ) : null,
      /* @__PURE__ */ O.jsx("div", { className: B.cursor, style: { transform: `translate(${r.x}px, ${r.y}px)` }, children: /* @__PURE__ */ O.jsx("div", { className: d ? B.cursorInnerClicking : B.cursorInner, children: /* @__PURE__ */ O.jsx(lo, {}) }) })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: B.extension, children: [
      /* @__PURE__ */ O.jsx(B1, { showBack: !0 }),
      /* @__PURE__ */ O.jsxs("div", { className: B.panelBody, children: [
        /* @__PURE__ */ O.jsxs("div", { className: B.replayHeader, children: [
          /* @__PURE__ */ O.jsx("h3", { className: B.replayTitle, children: "Invite teammate" }),
          /* @__PURE__ */ O.jsx("span", { className: B.replayProgress, children: b > 3 ? "Done" : `${Math.min(b, 3)} / 3` }),
          /* @__PURE__ */ O.jsx("div", { className: B.replayProgressTrack, children: /* @__PURE__ */ O.jsx("div", { className: B.replayProgressFill, style: { width: `${J}%` } }) })
        ] }),
        b > 3 ? /* @__PURE__ */ O.jsxs("div", { className: B.replayComplete, children: [
          /* @__PURE__ */ O.jsx("div", { className: B.replayCompleteIcon, children: /* @__PURE__ */ O.jsx(j2, {}) }),
          /* @__PURE__ */ O.jsx("p", { className: B.replayCompleteTitle, children: "Done" }),
          /* @__PURE__ */ O.jsx("p", { className: B.replayCompleteSub, children: "3 steps completed" })
        ] }) : /* @__PURE__ */ O.jsx("div", { className: B.replayList, children: H.map((w) => /* @__PURE__ */ O.jsxs(
          "div",
          {
            className: oe(
              B.replayActionItem,
              w.state === "done" && B.replayActionItemCompleted,
              w.state === "active" && B.replayActionItemCurrent
            ),
            children: [
              /* @__PURE__ */ O.jsxs("div", { className: B.replayActionHeader, children: [
                /* @__PURE__ */ O.jsx("span", { className: B.replayStepNumber, children: w.number }),
                /* @__PURE__ */ O.jsx("span", { className: B.replayActionTitle, children: w.label })
              ] }),
              /* @__PURE__ */ O.jsx("span", { className: B.replayActionMeta, children: w.state === "active" ? "Next" : w.state === "done" ? "Done" : "Queued" })
            ]
          },
          w.number
        )) })
      ] })
    ] })
  ] });
}
function L2({ playToken: m, mode: a = "full" }) {
  const f = ft.useRef(null), i = ft.useRef(null), [s, r] = ft.useState(a === "fill" ? "website" : "nari"), [h, d] = ft.useState(!1), [g, _] = ft.useState(!1), [p, v] = ft.useState({ x: -160, y: 70 }), [A, E] = ft.useState(!1), [N, b] = ft.useState(!1), [U, V] = ft.useState(!1), [Z, H] = ft.useState(xf), [J, w] = ft.useState(!1), K = ft.useCallback(() => {
    r(a === "fill" ? "website" : "nari"), d(!1), _(!1), v({ x: -160, y: 70 }), E(!1), b(!1), V(!1), H(xf), w(!1);
  }, [a]), L = ft.useCallback(({ clearScene: F, at: X }) => {
    if (F(), a === "fill") {
      r("website"), d(!1), H(xf), V(!1), w(!1), X(280, () => V(!0));
      const ot = 380, M = 12;
      for (let k = 1; k <= M; k += 1)
        X(ot + k * 72, () => {
          const P = k / M;
          H(
            Object.fromEntries(
              Xi.map((st) => [
                st.label,
                st.value.slice(0, Math.max(1, Math.round(st.value.length * P)))
              ])
            )
          );
        });
      X(ot + M * 72 + 100, () => {
        V(!1), w(!0);
      }), X(ot + M * 72 + 650, () => w(!1));
      return;
    }
    const lt = f.current, rt = i.current;
    if (!lt || !rt) return;
    const nt = R2(lt, rt);
    if (!nt) return;
    const ut = { x: nt.x - 58, y: -84 }, ct = { x: nt.x - 58, y: nt.y - 20 };
    if (r("nari"), d(!0), _(!1), E(!1), b(!1), V(!1), H(xf), w(!1), v(ut), X(260, () => v(ct)), X(900, () => _(!0)), X(980, () => E(!0)), X(1380, () => d(!1)), X(1700, () => {
      E(!1), b(!0);
    }), a === "full") {
      X(2520, () => r("website")), X(2800, () => V(!0));
      const ot = 2900, M = 12;
      for (let k = 1; k <= M; k += 1)
        X(ot + k * 78, () => {
          const P = k / M;
          H(
            Object.fromEntries(
              Xi.map((st) => [
                st.label,
                st.value.slice(0, Math.max(1, Math.round(st.value.length * P)))
              ])
            )
          );
        });
      X(ot + M * 78 + 120, () => {
        V(!1), w(!0);
      }), X(ot + M * 78 + 720, () => w(!1));
    }
  }, [a]);
  return no(m, K, L), /* @__PURE__ */ O.jsxs("div", { className: B.agentFullPane, ref: f, children: [
    h && /* @__PURE__ */ O.jsxs(
      "div",
      {
        className: oe(B.agentFloatingPdf, g && B.agentFloatingPdfDropped),
        style: { transform: `translate(${p.x}px, ${p.y}px)` },
        children: [
          /* @__PURE__ */ O.jsx(w2, {}),
          /* @__PURE__ */ O.jsx("div", { className: B.agentDragCursor, children: /* @__PURE__ */ O.jsx(lo, {}) })
        ]
      }
    ),
    /* @__PURE__ */ O.jsx("div", { className: oe(B.agentPhasePanel, s === "nari" ? B.agentPhasePanelVisible : B.agentPhasePanelHidden), children: /* @__PURE__ */ O.jsxs("div", { className: B.agentCard, children: [
      /* @__PURE__ */ O.jsxs("div", { className: B.agentCardHead, children: [
        /* @__PURE__ */ O.jsx("span", { className: B.agentCardEyebrow, children: "Nari Agent" }),
        /* @__PURE__ */ O.jsx("div", { className: B.agentCardTitle, children: "Select documents" })
      ] }),
      /* @__PURE__ */ O.jsx(
        "div",
        {
          ref: i,
          className: oe(B.agentDropZoneLarge, g && B.agentDropZoneLargeActive),
          children: g ? /* @__PURE__ */ O.jsxs(
            "div",
            {
              className: oe(
                B.agentAnalysisCard,
                A && B.agentAnalysisCardActive,
                N && B.agentAnalysisCardDone
              ),
              children: [
                A ? /* @__PURE__ */ O.jsx("div", { className: B.agentScanLine }) : null,
                /* @__PURE__ */ O.jsxs(
                  "div",
                  {
                    className: oe(
                      B.agentAnalysisRow,
                      (A || N) && B.agentAnalysisRowVisible,
                      N && B.agentAnalysisRowDone
                    ),
                    children: [
                      /* @__PURE__ */ O.jsx("span", { className: B.agentAnalysisDot }),
                      /* @__PURE__ */ O.jsx("span", { children: A ? "Analyzing PDF…" : N ? "Mapped 4 variables" : "Processing…" })
                    ]
                  }
                ),
                /* @__PURE__ */ O.jsx("div", { className: oe(B.agentVariableList, N && B.agentVariableListVisible), children: Xi.map((F) => /* @__PURE__ */ O.jsx(H2, { label: F.label, value: F.value, visible: N }, F.label)) })
              ]
            }
          ) : /* @__PURE__ */ O.jsx("span", { className: B.agentDropHint, children: "Drop PDF here" })
        }
      )
    ] }) }),
    /* @__PURE__ */ O.jsx("div", { className: oe(B.agentPhasePanel, s === "website" ? B.agentPhasePanelVisible : B.agentPhasePanelHidden), children: /* @__PURE__ */ O.jsxs("div", { className: B.agentCard, children: [
      /* @__PURE__ */ O.jsxs("div", { className: B.agentCardHead, children: [
        /* @__PURE__ */ O.jsx("span", { className: B.agentCardEyebrow, children: "Website · vendorhub.io" }),
        /* @__PURE__ */ O.jsx("div", { className: B.agentCardTitle, children: "Vendor setup form" })
      ] }),
      /* @__PURE__ */ O.jsx("div", { className: B.websiteFields, children: Xi.map((F) => /* @__PURE__ */ O.jsx(
        B2,
        {
          label: F.label,
          value: F.value,
          displayValue: Z[F.label] ?? "",
          showCaret: U,
          pulse: J
        },
        F.label
      )) })
    ] }) })
  ] });
}
const V2 = "_hero_1khrf_1", G2 = "_orb_1khrf_11", X2 = "_scene_1khrf_73", Q2 = "_sceneBackdrop_1khrf_83", Z2 = "_sceneFlip_1khrf_108", K2 = "_text_1khrf_112", J2 = "_eyebrow_1khrf_121", k2 = "_h2_1khrf_131", F2 = "_body_1khrf_141", W2 = "_line_1khrf_149", $2 = "_bodyLine_1khrf_153", P2 = "_demo_1khrf_157", Ae = {
  hero: V2,
  orb: G2,
  scene: X2,
  sceneBackdrop: Q2,
  sceneFlip: Z2,
  text: K2,
  eyebrow: J2,
  h2: k2,
  body: F2,
  line: W2,
  bodyLine: $2,
  demo: P2
}, Tr = [
  {
    eyebrow: "Chrome Extension",
    lines: ["Record anything", "on the web"],
    body: ["Capture any workflow in one click.", "Share knowledge with your team."],
    bgColor: "#0a0e0b",
    hold: 4.2
  },
  {
    eyebrow: "Workflow Guides",
    lines: ["Visual guides.", "30h saved per employee"],
    body: ["Every recording becomes a", "step-by-step guide instantly."],
    bgColor: "#09090f",
    flip: !0,
    hold: 4.2
  },
  {
    eyebrow: "AI Agent",
    lines: ["Agent extracts", "context."],
    body: ["AI autofills every input from the context.", "The workflow can be executed in seconds."],
    bgColor: "#0e0c08",
    hold: 8
  }
], Af = [
  {
    glowA: "rgba(79, 172, 132, 0.24)",
    glowB: "rgba(104, 122, 255, 0.16)",
    grid: "rgba(255, 255, 255, 0.06)",
    beam: "rgba(255, 255, 255, 0.12)"
  },
  {
    glowA: "rgba(80, 123, 255, 0.2)",
    glowB: "rgba(122, 96, 255, 0.14)",
    grid: "rgba(255, 255, 255, 0.06)",
    beam: "rgba(255, 255, 255, 0.1)"
  },
  {
    glowA: "rgba(214, 159, 86, 0.2)",
    glowB: "rgba(97, 123, 153, 0.16)",
    grid: "rgba(255, 255, 255, 0.05)",
    beam: "rgba(255, 255, 255, 0.1)"
  }
], I2 = 0.5, w_ = 0.79;
function tb() {
  const [m, a] = ft.useState([1, 0, 0]), f = ft.useRef(null), i = [ft.useRef(null), ft.useRef(null), ft.useRef(null)];
  return ft.useEffect(() => {
    const s = f.current, r = i.map((_) => _.current);
    Ua.set(s, { backgroundColor: Tr[0].bgColor }), Ua.set(r, { opacity: 0, x: 0, scale: 1, filter: "blur(0px)" }), Ua.set(r[0], { opacity: 1 });
    const h = r[0].querySelectorAll("[data-anim]");
    Ua.fromTo(
      h,
      { opacity: 0, y: 22, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.1, ease: "power3.out", delay: 0.3 }
    );
    const d = Ua.timeline({ repeat: -1 });
    function g(_, p, v) {
      const A = r[_], E = r[p], N = A.querySelectorAll("[data-anim]"), b = E.querySelectorAll("[data-anim]"), U = Math.max(v, 0), V = { value: 0 };
      d.to(V, {
        value: 1,
        duration: U,
        ease: "none"
      }).to(V, {
        value: 2,
        duration: I2,
        ease: "none"
      }).to(N, {
        opacity: 0,
        y: -18,
        scale: 0.94,
        duration: 0.22,
        stagger: 0.05,
        ease: "power3.in"
      }).to(A, {
        x: -80,
        opacity: 0,
        scale: 0.91,
        filter: "blur(10px)",
        duration: 0.42,
        ease: "power2.in"
      }, "<+0.04").to(s, {
        backgroundColor: Tr[p].bgColor,
        duration: 0.55,
        ease: "power2.inOut"
      }, "<+0.08").set(E, { x: 90, opacity: 0, scale: 1.08, filter: "blur(10px)" }).set(b, { opacity: 0, y: 24, scale: 0.95 }).call(() => a((Z) => {
        const H = [...Z];
        return H[p] += 1, H;
      })).to(E, {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.46,
        ease: "power2.out"
      }).to(b, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.09,
        ease: "power3.out"
      }, "<+0.06");
    }
    return g(0, 1, br[0]), g(1, 2, br[1] - w_), g(2, 0, br[2] - w_), () => d.kill();
  }, []), /* @__PURE__ */ O.jsxs("div", { ref: f, className: Ae.hero, children: [
    /* @__PURE__ */ O.jsx("div", { className: Ae.orb }),
    /* @__PURE__ */ O.jsx("div", { className: Ae.orb }),
    /* @__PURE__ */ O.jsx("div", { className: Ae.orb }),
    Tr.map((s, r) => /* @__PURE__ */ O.jsxs(
      "div",
      {
        ref: i[r],
        className: `${Ae.scene} ${s.flip ? Ae.sceneFlip : ""}`,
        children: [
          /* @__PURE__ */ O.jsx(
            "div",
            {
              className: Ae.sceneBackdrop,
              style: {
                "--scene-bg": s.bgColor,
                "--scene-glow-a": Af[r].glowA,
                "--scene-glow-b": Af[r].glowB,
                "--scene-grid": Af[r].grid,
                "--scene-beam": Af[r].beam
              }
            }
          ),
          /* @__PURE__ */ O.jsxs("div", { className: Ae.text, children: [
            /* @__PURE__ */ O.jsx("p", { className: Ae.eyebrow, "data-anim": "", children: s.eyebrow }),
            /* @__PURE__ */ O.jsx("h2", { className: Ae.h2, "data-anim": "", children: s.lines.map((h, d) => /* @__PURE__ */ O.jsx("span", { className: Ae.line, children: h }, d)) }),
            /* @__PURE__ */ O.jsx("p", { className: Ae.body, "data-anim": "", children: s.body.map((h, d) => /* @__PURE__ */ O.jsx("span", { className: Ae.bodyLine, children: h }, d)) })
          ] }),
          /* @__PURE__ */ O.jsxs("div", { className: Ae.demo, children: [
            r === 0 && /* @__PURE__ */ O.jsx(Y2, { playToken: m[0] }),
            r === 1 && /* @__PURE__ */ O.jsx(q2, { playToken: m[1] }),
            r === 2 && /* @__PURE__ */ O.jsx(L2, { playToken: m[2], mode: "full" })
          ] })
        ]
      },
      r
    ))
  ] });
}
const B_ = document.getElementById("hero-demo-root");
B_ && my.createRoot(B_).render(/* @__PURE__ */ O.jsx(tb, {}));
