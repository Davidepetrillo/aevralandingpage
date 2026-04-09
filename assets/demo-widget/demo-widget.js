var ir = { exports: {} }, Bi = {};
var a_;
function ag() {
  if (a_) return Bi;
  a_ = 1;
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
  return Bi.Fragment = a, Bi.jsx = f, Bi.jsxs = f, Bi;
}
var i_;
function ig() {
  return i_ || (i_ = 1, ir.exports = ag()), ir.exports;
}
var O = ig(), ur = { exports: {} }, Li = {}, fr = { exports: {} }, cr = {};
var u_;
function ug() {
  return u_ || (u_ = 1, (function(m) {
    function a(R, k) {
      var P = R.length;
      R.push(k);
      t: for (; 0 < P; ) {
        var st = P - 1 >>> 1, dt = R[st];
        if (0 < s(dt, k))
          R[st] = k, R[P] = dt, P = st;
        else break t;
      }
    }
    function f(R) {
      return R.length === 0 ? null : R[0];
    }
    function i(R) {
      if (R.length === 0) return null;
      var k = R[0], P = R.pop();
      if (P !== k) {
        R[0] = P;
        t: for (var st = 0, dt = R.length, T = dt >>> 1; st < T; ) {
          var L = 2 * (st + 1) - 1, W = R[L], $ = L + 1, it = R[$];
          if (0 > s(W, P))
            $ < dt && 0 > s(it, W) ? (R[st] = it, R[$] = P, st = $) : (R[st] = W, R[L] = P, st = L);
          else if ($ < dt && 0 > s(it, P))
            R[st] = it, R[$] = P, st = $;
          else break t;
        }
      }
      return k;
    }
    function s(R, k) {
      var P = R.sortIndex - k.sortIndex;
      return P !== 0 ? P : R.id - k.id;
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
    var y = [], _ = [], v = 1, p = null, A = 3, E = !1, D = !1, S = !1, U = !1, G = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, Y = typeof setImmediate < "u" ? setImmediate : null;
    function J(R) {
      for (var k = f(_); k !== null; ) {
        if (k.callback === null) i(_);
        else if (k.startTime <= R)
          i(_), k.sortIndex = k.expirationTime, a(y, k);
        else break;
        k = f(_);
      }
    }
    function w(R) {
      if (S = !1, J(R), !D)
        if (f(y) !== null)
          D = !0, K || (K = !0, nt());
        else {
          var k = f(_);
          k !== null && ot(w, k.startTime - R);
        }
    }
    var K = !1, q = -1, F = 5, X = -1;
    function lt() {
      return U ? !0 : !(m.unstable_now() - X < F);
    }
    function rt() {
      if (U = !1, K) {
        var R = m.unstable_now();
        X = R;
        var k = !0;
        try {
          t: {
            D = !1, S && (S = !1, Z(q), q = -1), E = !0;
            var P = A;
            try {
              e: {
                for (J(R), p = f(y); p !== null && !(p.expirationTime > R && lt()); ) {
                  var st = p.callback;
                  if (typeof st == "function") {
                    p.callback = null, A = p.priorityLevel;
                    var dt = st(
                      p.expirationTime <= R
                    );
                    if (R = m.unstable_now(), typeof dt == "function") {
                      p.callback = dt, J(R), k = !0;
                      break e;
                    }
                    p === f(y) && i(y), J(R);
                  } else i(y);
                  p = f(y);
                }
                if (p !== null) k = !0;
                else {
                  var T = f(_);
                  T !== null && ot(
                    w,
                    T.startTime - R
                  ), k = !1;
                }
              }
              break t;
            } finally {
              p = null, A = P, E = !1;
            }
            k = void 0;
          }
        } finally {
          k ? nt() : K = !1;
        }
      }
    }
    var nt;
    if (typeof Y == "function")
      nt = function() {
        Y(rt);
      };
    else if (typeof MessageChannel < "u") {
      var ut = new MessageChannel(), ct = ut.port2;
      ut.port1.onmessage = rt, nt = function() {
        ct.postMessage(null);
      };
    } else
      nt = function() {
        G(rt, 0);
      };
    function ot(R, k) {
      q = G(function() {
        R(m.unstable_now());
      }, k);
    }
    m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, m.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : F = 0 < R ? Math.floor(1e3 / R) : 5;
    }, m.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, m.unstable_next = function(R) {
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
        return R();
      } finally {
        A = P;
      }
    }, m.unstable_requestPaint = function() {
      U = !0;
    }, m.unstable_runWithPriority = function(R, k) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var P = A;
      A = R;
      try {
        return k();
      } finally {
        A = P;
      }
    }, m.unstable_scheduleCallback = function(R, k, P) {
      var st = m.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? st + P : st) : P = st, R) {
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
      return dt = P + dt, R = {
        id: v++,
        callback: k,
        priorityLevel: R,
        startTime: P,
        expirationTime: dt,
        sortIndex: -1
      }, P > st ? (R.sortIndex = P, a(_, R), f(y) === null && R === f(_) && (S ? (Z(q), q = -1) : S = !0, ot(w, P - st))) : (R.sortIndex = dt, a(y, R), D || E || (D = !0, K || (K = !0, nt()))), R;
    }, m.unstable_shouldYield = lt, m.unstable_wrapCallback = function(R) {
      var k = A;
      return function() {
        var P = A;
        A = k;
        try {
          return R.apply(this, arguments);
        } finally {
          A = P;
        }
      };
    };
  })(cr)), cr;
}
var f_;
function fg() {
  return f_ || (f_ = 1, fr.exports = ug()), fr.exports;
}
var sr = { exports: {} }, ht = {};
var c_;
function cg() {
  if (c_) return ht;
  c_ = 1;
  var m = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), r = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), d = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), A = Symbol.iterator;
  function E(T) {
    return T === null || typeof T != "object" ? null : (T = A && T[A] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var D = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, S = Object.assign, U = {};
  function G(T, L, W) {
    this.props = T, this.context = L, this.refs = U, this.updater = W || D;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(T, L) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, T, L, "setState");
  }, G.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = G.prototype;
  function Y(T, L, W) {
    this.props = T, this.context = L, this.refs = U, this.updater = W || D;
  }
  var J = Y.prototype = new Z();
  J.constructor = Y, S(J, G.prototype), J.isPureReactComponent = !0;
  var w = Array.isArray;
  function K() {
  }
  var q = { H: null, A: null, T: null, S: null }, F = Object.prototype.hasOwnProperty;
  function X(T, L, W) {
    var $ = W.ref;
    return {
      $$typeof: m,
      type: T,
      key: L,
      ref: $ !== void 0 ? $ : null,
      props: W
    };
  }
  function lt(T, L) {
    return X(T.type, L, T.props);
  }
  function rt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === m;
  }
  function nt(T) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(W) {
      return L[W];
    });
  }
  var ut = /\/+/g;
  function ct(T, L) {
    return typeof T == "object" && T !== null && T.key != null ? nt("" + T.key) : L.toString(36);
  }
  function ot(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(K, K) : (T.status = "pending", T.then(
          function(L) {
            T.status === "pending" && (T.status = "fulfilled", T.value = L);
          },
          function(L) {
            T.status === "pending" && (T.status = "rejected", T.reason = L);
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
  function R(T, L, W, $, it) {
    var yt = typeof T;
    (yt === "undefined" || yt === "boolean") && (T = null);
    var zt = !1;
    if (T === null) zt = !0;
    else
      switch (yt) {
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
            case v:
              return zt = T._init, R(
                zt(T._payload),
                L,
                W,
                $,
                it
              );
          }
      }
    if (zt)
      return it = it(T), zt = $ === "" ? "." + ct(T, 0) : $, w(it) ? (W = "", zt != null && (W = zt.replace(ut, "$&/") + "/"), R(it, L, W, "", function(Qa) {
        return Qa;
      })) : it != null && (rt(it) && (it = lt(
        it,
        W + (it.key == null || T && T.key === it.key ? "" : ("" + it.key).replace(
          ut,
          "$&/"
        ) + "/") + zt
      )), L.push(it)), 1;
    zt = 0;
    var _e = $ === "" ? "." : $ + ":";
    if (w(T))
      for (var Zt = 0; Zt < T.length; Zt++)
        $ = T[Zt], yt = _e + ct($, Zt), zt += R(
          $,
          L,
          W,
          yt,
          it
        );
    else if (Zt = E(T), typeof Zt == "function")
      for (T = Zt.call(T), Zt = 0; !($ = T.next()).done; )
        $ = $.value, yt = _e + ct($, Zt++), zt += R(
          $,
          L,
          W,
          yt,
          it
        );
    else if (yt === "object") {
      if (typeof T.then == "function")
        return R(
          ot(T),
          L,
          W,
          $,
          it
        );
      throw L = String(T), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return zt;
  }
  function k(T, L, W) {
    if (T == null) return T;
    var $ = [], it = 0;
    return R(T, $, "", "", function(yt) {
      return L.call(W, yt, it++);
    }), $;
  }
  function P(T) {
    if (T._status === -1) {
      var L = T._result;
      L = L(), L.then(
        function(W) {
          (T._status === 0 || T._status === -1) && (T._status = 1, T._result = W);
        },
        function(W) {
          (T._status === 0 || T._status === -1) && (T._status = 2, T._result = W);
        }
      ), T._status === -1 && (T._status = 0, T._result = L);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var st = typeof reportError == "function" ? reportError : function(T) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
        error: T
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", T);
      return;
    }
    console.error(T);
  }, dt = {
    map: k,
    forEach: function(T, L, W) {
      k(
        T,
        function() {
          L.apply(this, arguments);
        },
        W
      );
    },
    count: function(T) {
      var L = 0;
      return k(T, function() {
        L++;
      }), L;
    },
    toArray: function(T) {
      return k(T, function(L) {
        return L;
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
  return ht.Activity = p, ht.Children = dt, ht.Component = G, ht.Fragment = f, ht.Profiler = s, ht.PureComponent = Y, ht.StrictMode = i, ht.Suspense = y, ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, ht.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(T) {
      return q.H.useMemoCache(T);
    }
  }, ht.cache = function(T) {
    return function() {
      return T.apply(null, arguments);
    };
  }, ht.cacheSignal = function() {
    return null;
  }, ht.cloneElement = function(T, L, W) {
    if (T == null)
      throw Error(
        "The argument must be a React element, but you passed " + T + "."
      );
    var $ = S({}, T.props), it = T.key;
    if (L != null)
      for (yt in L.key !== void 0 && (it = "" + L.key), L)
        !F.call(L, yt) || yt === "key" || yt === "__self" || yt === "__source" || yt === "ref" && L.ref === void 0 || ($[yt] = L[yt]);
    var yt = arguments.length - 2;
    if (yt === 1) $.children = W;
    else if (1 < yt) {
      for (var zt = Array(yt), _e = 0; _e < yt; _e++)
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
  }, ht.createElement = function(T, L, W) {
    var $, it = {}, yt = null;
    if (L != null)
      for ($ in L.key !== void 0 && (yt = "" + L.key), L)
        F.call(L, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (it[$] = L[$]);
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
    return X(T, yt, it);
  }, ht.createRef = function() {
    return { current: null };
  }, ht.forwardRef = function(T) {
    return { $$typeof: d, render: T };
  }, ht.isValidElement = rt, ht.lazy = function(T) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: T },
      _init: P
    };
  }, ht.memo = function(T, L) {
    return {
      $$typeof: _,
      type: T,
      compare: L === void 0 ? null : L
    };
  }, ht.startTransition = function(T) {
    var L = q.T, W = {};
    q.T = W;
    try {
      var $ = T(), it = q.S;
      it !== null && it(W, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(K, st);
    } catch (yt) {
      st(yt);
    } finally {
      L !== null && W.types !== null && (L.types = W.types), q.T = L;
    }
  }, ht.unstable_useCacheRefresh = function() {
    return q.H.useCacheRefresh();
  }, ht.use = function(T) {
    return q.H.use(T);
  }, ht.useActionState = function(T, L, W) {
    return q.H.useActionState(T, L, W);
  }, ht.useCallback = function(T, L) {
    return q.H.useCallback(T, L);
  }, ht.useContext = function(T) {
    return q.H.useContext(T);
  }, ht.useDebugValue = function() {
  }, ht.useDeferredValue = function(T, L) {
    return q.H.useDeferredValue(T, L);
  }, ht.useEffect = function(T, L) {
    return q.H.useEffect(T, L);
  }, ht.useEffectEvent = function(T) {
    return q.H.useEffectEvent(T);
  }, ht.useId = function() {
    return q.H.useId();
  }, ht.useImperativeHandle = function(T, L, W) {
    return q.H.useImperativeHandle(T, L, W);
  }, ht.useInsertionEffect = function(T, L) {
    return q.H.useInsertionEffect(T, L);
  }, ht.useLayoutEffect = function(T, L) {
    return q.H.useLayoutEffect(T, L);
  }, ht.useMemo = function(T, L) {
    return q.H.useMemo(T, L);
  }, ht.useOptimistic = function(T, L) {
    return q.H.useOptimistic(T, L);
  }, ht.useReducer = function(T, L, W) {
    return q.H.useReducer(T, L, W);
  }, ht.useRef = function(T) {
    return q.H.useRef(T);
  }, ht.useState = function(T) {
    return q.H.useState(T);
  }, ht.useSyncExternalStore = function(T, L, W) {
    return q.H.useSyncExternalStore(
      T,
      L,
      W
    );
  }, ht.useTransition = function() {
    return q.H.useTransition();
  }, ht.version = "19.2.5", ht;
}
var s_;
function wr() {
  return s_ || (s_ = 1, sr.exports = cg()), sr.exports;
}
var rr = { exports: {} }, re = {};
var r_;
function sg() {
  if (r_) return re;
  r_ = 1;
  var m = wr();
  function a(y) {
    var _ = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        _ += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + y + "; visit " + _ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function r(y, _, v) {
    var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: p == null ? null : "" + p,
      children: y,
      containerInfo: _,
      implementation: v
    };
  }
  var h = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(y, _) {
    if (y === "font") return "";
    if (typeof _ == "string")
      return _ === "use-credentials" ? _ : "";
  }
  return re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, re.createPortal = function(y, _) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11)
      throw Error(a(299));
    return r(y, _, null, v);
  }, re.flushSync = function(y) {
    var _ = h.T, v = i.p;
    try {
      if (h.T = null, i.p = 2, y) return y();
    } finally {
      h.T = _, i.p = v, i.d.f();
    }
  }, re.preconnect = function(y, _) {
    typeof y == "string" && (_ ? (_ = _.crossOrigin, _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null, i.d.C(y, _));
  }, re.prefetchDNS = function(y) {
    typeof y == "string" && i.d.D(y);
  }, re.preinit = function(y, _) {
    if (typeof y == "string" && _ && typeof _.as == "string") {
      var v = _.as, p = d(v, _.crossOrigin), A = typeof _.integrity == "string" ? _.integrity : void 0, E = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
      v === "style" ? i.d.S(
        y,
        typeof _.precedence == "string" ? _.precedence : void 0,
        {
          crossOrigin: p,
          integrity: A,
          fetchPriority: E
        }
      ) : v === "script" && i.d.X(y, {
        crossOrigin: p,
        integrity: A,
        fetchPriority: E,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0
      });
    }
  }, re.preinitModule = function(y, _) {
    if (typeof y == "string")
      if (typeof _ == "object" && _ !== null) {
        if (_.as == null || _.as === "script") {
          var v = d(
            _.as,
            _.crossOrigin
          );
          i.d.M(y, {
            crossOrigin: v,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
            nonce: typeof _.nonce == "string" ? _.nonce : void 0
          });
        }
      } else _ == null && i.d.M(y);
  }, re.preload = function(y, _) {
    if (typeof y == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
      var v = _.as, p = d(v, _.crossOrigin);
      i.d.L(y, v, {
        crossOrigin: p,
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
  }, re.preloadModule = function(y, _) {
    if (typeof y == "string")
      if (_) {
        var v = d(_.as, _.crossOrigin);
        i.d.m(y, {
          as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
          crossOrigin: v,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0
        });
      } else i.d.m(y);
  }, re.requestFormReset = function(y) {
    i.d.r(y);
  }, re.unstable_batchedUpdates = function(y, _) {
    return y(_);
  }, re.useFormState = function(y, _, v) {
    return h.H.useFormState(y, _, v);
  }, re.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, re.version = "19.2.5", re;
}
var o_;
function rg() {
  if (o_) return rr.exports;
  o_ = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (a) {
        console.error(a);
      }
  }
  return m(), rr.exports = sg(), rr.exports;
}
var h_;
function og() {
  if (h_) return Li;
  h_ = 1;
  var m = fg(), a = wr(), f = rg();
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
  function y(t) {
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
          if (c === l) return y(u), t;
          if (c === n) return y(u), e;
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (l.return !== n.return) l = u, n = c;
      else {
        for (var o = !1, g = u.child; g; ) {
          if (g === l) {
            o = !0, l = u, n = c;
            break;
          }
          if (g === n) {
            o = !0, n = u, l = c;
            break;
          }
          g = g.sibling;
        }
        if (!o) {
          for (g = c.child; g; ) {
            if (g === l) {
              o = !0, l = c, n = u;
              break;
            }
            if (g === n) {
              o = !0, n = c, l = u;
              break;
            }
            g = g.sibling;
          }
          if (!o) throw Error(i(189));
        }
      }
      if (l.alternate !== n) throw Error(i(190));
    }
    if (l.tag !== 3) throw Error(i(188));
    return l.stateNode.current === l ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var p = Object.assign, A = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), U = /* @__PURE__ */ Symbol.for("react.strict_mode"), G = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), Y = /* @__PURE__ */ Symbol.for("react.context"), J = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), q = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), X = /* @__PURE__ */ Symbol.for("react.activity"), lt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), rt = Symbol.iterator;
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
      case S:
        return "Fragment";
      case G:
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
        case D:
          return "Portal";
        case Y:
          return t.displayName || "Context";
        case Z:
          return (t._context.displayName || "Context") + ".Consumer";
        case J:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case q:
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
  var ot = Array.isArray, R = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, st = [], dt = -1;
  function T(t) {
    return { current: t };
  }
  function L(t) {
    0 > dt || (t.current = st[dt], st[dt] = null, dt--);
  }
  function W(t, e) {
    dt++, st[dt] = t.current, t.current = e;
  }
  var $ = T(null), it = T(null), yt = T(null), zt = T(null);
  function _e(t, e) {
    switch (W(yt, e), W(it, t), W($, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? O0(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = O0(e), t = M0(e, t);
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
    L($), W($, t);
  }
  function Zt() {
    L($), L(it), L(yt);
  }
  function Qa(t) {
    t.memoizedState !== null && W(zt, t);
    var e = $.current, l = M0(e, t.type);
    e !== l && (W(it, t), W($, l));
  }
  function nu(t) {
    it.current === t && (L($), L(it)), zt.current === t && (L(zt), Ui._currentValue = P);
  }
  var Vf, lo;
  function Sn(t) {
    if (Vf === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Vf = e && e[1] || "", lo = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Vf + t + lo;
  }
  var Gf = !1;
  function Xf(t, e) {
    if (!t || Gf) return "";
    Gf = !0;
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
                  var N = j;
                }
                Reflect.construct(t, [], Q);
              } else {
                try {
                  Q.call();
                } catch (j) {
                  N = j;
                }
                t.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                N = j;
              }
              (Q = t()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (j) {
            if (j && N && typeof j.stack == "string")
              return [j.stack, N.stack];
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
      var c = n.DetermineComponentFrameRoot(), o = c[0], g = c[1];
      if (o && g) {
        var b = o.split(`
`), C = g.split(`
`);
        for (u = n = 0; n < b.length && !b[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; u < C.length && !C[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (n === b.length || u === C.length)
          for (n = b.length - 1, u = C.length - 1; 1 <= n && 0 <= u && b[n] !== C[u]; )
            u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (b[n] !== C[u]) {
            if (n !== 1 || u !== 1)
              do
                if (n--, u--, 0 > u || b[n] !== C[u]) {
                  var B = `
` + b[n].replace(" at new ", " at ");
                  return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), B;
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      Gf = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Sn(l) : "";
  }
  function wm(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Sn(t.type);
      case 16:
        return Sn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Sn("Suspense Fallback") : Sn("Suspense");
      case 19:
        return Sn("SuspenseList");
      case 0:
      case 15:
        return Xf(t.type, !1);
      case 11:
        return Xf(t.type.render, !1);
      case 1:
        return Xf(t.type, !0);
      case 31:
        return Sn("Activity");
      default:
        return "";
    }
  }
  function no(t) {
    try {
      var e = "", l = null;
      do
        e += wm(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Qf = Object.prototype.hasOwnProperty, Zf = m.unstable_scheduleCallback, Kf = m.unstable_cancelCallback, Hm = m.unstable_shouldYield, Bm = m.unstable_requestPaint, Ce = m.unstable_now, Lm = m.unstable_getCurrentPriorityLevel, ao = m.unstable_ImmediatePriority, io = m.unstable_UserBlockingPriority, au = m.unstable_NormalPriority, Ym = m.unstable_LowPriority, uo = m.unstable_IdlePriority, qm = m.log, Vm = m.unstable_setDisableYieldValue, Za = null, De = null;
  function Yl(t) {
    if (typeof qm == "function" && Vm(t), De && typeof De.setStrictMode == "function")
      try {
        De.setStrictMode(Za, t);
      } catch {
      }
  }
  var Re = Math.clz32 ? Math.clz32 : Qm, Gm = Math.log, Xm = Math.LN2;
  function Qm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Gm(t) / Xm | 0) | 0;
  }
  var iu = 256, uu = 262144, fu = 4194304;
  function bn(t) {
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
    var g = n & 134217727;
    return g !== 0 ? (n = g & ~c, n !== 0 ? u = bn(n) : (o &= g, o !== 0 ? u = bn(o) : l || (l = g & ~t, l !== 0 && (u = bn(l))))) : (g = n & ~c, g !== 0 ? u = bn(g) : o !== 0 ? u = bn(o) : l || (l = n & ~t, l !== 0 && (u = bn(l)))), u === 0 ? 0 : e !== 0 && e !== u && (e & c) === 0 && (c = u & -u, l = e & -e, c >= l || c === 32 && (l & 4194048) !== 0) ? e : u;
  }
  function Ka(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Zm(t, e) {
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
  function fo() {
    var t = fu;
    return fu <<= 1, (fu & 62914560) === 0 && (fu = 4194304), t;
  }
  function Jf(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ja(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Km(t, e, l, n, u, c) {
    var o = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var g = t.entanglements, b = t.expirationTimes, C = t.hiddenUpdates;
    for (l = o & ~l; 0 < l; ) {
      var B = 31 - Re(l), Q = 1 << B;
      g[B] = 0, b[B] = -1;
      var N = C[B];
      if (N !== null)
        for (C[B] = null, B = 0; B < N.length; B++) {
          var j = N[B];
          j !== null && (j.lane &= -536870913);
        }
      l &= ~Q;
    }
    n !== 0 && co(t, n, 0), c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(o & ~e));
  }
  function co(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - Re(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function so(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - Re(l), u = 1 << n;
      u & e | t[n] & e && (t[n] |= e), l &= ~u;
    }
  }
  function ro(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : kf(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function kf(t) {
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
  function Ff(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function oo() {
    var t = k.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : $0(t.type));
  }
  function ho(t, e) {
    var l = k.p;
    try {
      return k.p = t, e();
    } finally {
      k.p = l;
    }
  }
  var ql = Math.random().toString(36).slice(2), ae = "__reactFiber$" + ql, ge = "__reactProps$" + ql, kn = "__reactContainer$" + ql, Wf = "__reactEvents$" + ql, Jm = "__reactListeners$" + ql, km = "__reactHandles$" + ql, _o = "__reactResources$" + ql, ka = "__reactMarker$" + ql;
  function $f(t) {
    delete t[ae], delete t[ge], delete t[Wf], delete t[Jm], delete t[km];
  }
  function Fn(t) {
    var e = t[ae];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[kn] || l[ae]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = w0(t); t !== null; ) {
            if (l = t[ae]) return l;
            t = w0(t);
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
  function Fa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(i(33));
  }
  function $n(t) {
    var e = t[_o];
    return e || (e = t[_o] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ee(t) {
    t[ka] = !0;
  }
  var mo = /* @__PURE__ */ new Set(), yo = {};
  function Tn(t, e) {
    Pn(t, e), Pn(t + "Capture", e);
  }
  function Pn(t, e) {
    for (yo[t] = e, t = 0; t < e.length; t++)
      mo.add(e[t]);
  }
  var Fm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), go = {}, vo = {};
  function Wm(t) {
    return Qf.call(vo, t) ? !0 : Qf.call(go, t) ? !1 : Fm.test(t) ? vo[t] = !0 : (go[t] = !0, !1);
  }
  function su(t, e, l) {
    if (Wm(e))
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
  function gl(t, e, l, n) {
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
  function Ke(t) {
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
  function po(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function $m(t, e, l) {
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
  function Pf(t) {
    if (!t._valueTracker) {
      var e = po(t) ? "checked" : "value";
      t._valueTracker = $m(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function So(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = po(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function ou(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Pm = /[\n"\\]/g;
  function Je(t) {
    return t.replace(
      Pm,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function If(t, e, l, n, u, c, o, g) {
    t.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.type = o : t.removeAttribute("type"), e != null ? o === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ke(e)) : t.value !== "" + Ke(e) && (t.value = "" + Ke(e)) : o !== "submit" && o !== "reset" || t.removeAttribute("value"), e != null ? tc(t, o, Ke(e)) : l != null ? tc(t, o, Ke(l)) : n != null && t.removeAttribute("value"), u == null && c != null && (t.defaultChecked = !!c), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.name = "" + Ke(g) : t.removeAttribute("name");
  }
  function bo(t, e, l, n, u, c, o, g) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || l != null) {
      if (!(c !== "submit" && c !== "reset" || e != null)) {
        Pf(t);
        return;
      }
      l = l != null ? "" + Ke(l) : "", e = e != null ? "" + Ke(e) : l, g || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? u, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = g ? t.checked : !!n, t.defaultChecked = !!n, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.name = o), Pf(t);
  }
  function tc(t, e, l) {
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
      for (l = "" + Ke(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          t[u].selected = !0, n && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function To(t, e, l) {
    if (e != null && (e = "" + Ke(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Ke(l) : "";
  }
  function xo(t, e, l, n) {
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
    l = Ke(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), Pf(t);
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
  var Im = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ao(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Im.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Eo(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(i(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var u in e)
        n = e[u], e.hasOwnProperty(u) && l[u] !== n && Ao(t, u, n);
    } else
      for (var c in e)
        e.hasOwnProperty(c) && Ao(t, c, e[c]);
  }
  function ec(t) {
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
  var t1 = /* @__PURE__ */ new Map([
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
  ]), e1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function hu(t) {
    return e1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function vl() {
  }
  var lc = null;
  function nc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ea = null, la = null;
  function zo(t) {
    var e = Wn(t);
    if (e && (t = e.stateNode)) {
      var l = t[ge] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (If(
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
              'input[name="' + Je(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var u = n[ge] || null;
                if (!u) throw Error(i(90));
                If(
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
              n = l[e], n.form === t.form && So(n);
          }
          break t;
        case "textarea":
          To(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && In(t, !!l.multiple, e, !1);
      }
    }
  }
  var ac = !1;
  function Oo(t, e, l) {
    if (ac) return t(e, l);
    ac = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (ac = !1, (ea !== null || la !== null) && (Iu(), ea && (e = ea, t = la, la = ea = null, zo(e), t)))
        for (e = 0; e < t.length; e++) zo(t[e]);
    }
  }
  function Wa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ge] || null;
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
  var pl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ic = !1;
  if (pl)
    try {
      var $a = {};
      Object.defineProperty($a, "passive", {
        get: function() {
          ic = !0;
        }
      }), window.addEventListener("test", $a, $a), window.removeEventListener("test", $a, $a);
    } catch {
      ic = !1;
    }
  var Vl = null, uc = null, du = null;
  function Mo() {
    if (du) return du;
    var t, e = uc, l = e.length, n, u = "value" in Vl ? Vl.value : Vl.textContent, c = u.length;
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
  function Co() {
    return !1;
  }
  function ve(t) {
    function e(l, n, u, c, o) {
      this._reactName = l, this._targetInst = u, this.type = n, this.nativeEvent = c, this.target = o, this.currentTarget = null;
      for (var g in t)
        t.hasOwnProperty(g) && (l = t[g], this[g] = l ? l(c) : c[g]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? mu : Co, this.isPropagationStopped = Co, this;
    }
    return p(e.prototype, {
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
  }, yu = ve(xn), Pa = p({}, xn, { view: 0, detail: 0 }), l1 = ve(Pa), fc, cc, Ia, gu = p({}, Pa, {
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
    getModifierState: rc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ia && (Ia && t.type === "mousemove" ? (fc = t.screenX - Ia.screenX, cc = t.screenY - Ia.screenY) : cc = fc = 0, Ia = t), fc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : cc;
    }
  }), Do = ve(gu), n1 = p({}, gu, { dataTransfer: 0 }), a1 = ve(n1), i1 = p({}, Pa, { relatedTarget: 0 }), sc = ve(i1), u1 = p({}, xn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), f1 = ve(u1), c1 = p({}, xn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), s1 = ve(c1), r1 = p({}, xn, { data: 0 }), Ro = ve(r1), o1 = {
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
  }, h1 = {
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
  }, d1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function _1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = d1[t]) ? !!e[t] : !1;
  }
  function rc() {
    return _1;
  }
  var m1 = p({}, Pa, {
    key: function(t) {
      if (t.key) {
        var e = o1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = _u(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? h1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rc,
    charCode: function(t) {
      return t.type === "keypress" ? _u(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? _u(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), y1 = ve(m1), g1 = p({}, gu, {
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
  }), No = ve(g1), v1 = p({}, Pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rc
  }), p1 = ve(v1), S1 = p({}, xn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), b1 = ve(S1), T1 = p({}, gu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), x1 = ve(T1), A1 = p({}, xn, {
    newState: 0,
    oldState: 0
  }), E1 = ve(A1), z1 = [9, 13, 27, 32], oc = pl && "CompositionEvent" in window, ti = null;
  pl && "documentMode" in document && (ti = document.documentMode);
  var O1 = pl && "TextEvent" in window && !ti, Uo = pl && (!oc || ti && 8 < ti && 11 >= ti), jo = " ", wo = !1;
  function Ho(t, e) {
    switch (t) {
      case "keyup":
        return z1.indexOf(e.keyCode) !== -1;
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
  function Bo(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var na = !1;
  function M1(t, e) {
    switch (t) {
      case "compositionend":
        return Bo(e);
      case "keypress":
        return e.which !== 32 ? null : (wo = !0, jo);
      case "textInput":
        return t = e.data, t === jo && wo ? null : t;
      default:
        return null;
    }
  }
  function C1(t, e) {
    if (na)
      return t === "compositionend" || !oc && Ho(t, e) ? (t = Mo(), du = uc = Vl = null, na = !1, t) : null;
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
        return Uo && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var D1 = {
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
    return e === "input" ? !!D1[t.type] : e === "textarea";
  }
  function Yo(t, e, l, n) {
    ea ? la ? la.push(n) : la = [n] : ea = n, e = ff(e, "onChange"), 0 < e.length && (l = new yu(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var ei = null, li = null;
  function R1(t) {
    b0(t, 0);
  }
  function vu(t) {
    var e = Fa(t);
    if (So(e)) return t;
  }
  function qo(t, e) {
    if (t === "change") return e;
  }
  var Vo = !1;
  if (pl) {
    var hc;
    if (pl) {
      var dc = "oninput" in document;
      if (!dc) {
        var Go = document.createElement("div");
        Go.setAttribute("oninput", "return;"), dc = typeof Go.oninput == "function";
      }
      hc = dc;
    } else hc = !1;
    Vo = hc && (!document.documentMode || 9 < document.documentMode);
  }
  function Xo() {
    ei && (ei.detachEvent("onpropertychange", Qo), li = ei = null);
  }
  function Qo(t) {
    if (t.propertyName === "value" && vu(li)) {
      var e = [];
      Yo(
        e,
        li,
        t,
        nc(t)
      ), Oo(R1, e);
    }
  }
  function N1(t, e, l) {
    t === "focusin" ? (Xo(), ei = e, li = l, ei.attachEvent("onpropertychange", Qo)) : t === "focusout" && Xo();
  }
  function U1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return vu(li);
  }
  function j1(t, e) {
    if (t === "click") return vu(e);
  }
  function w1(t, e) {
    if (t === "input" || t === "change")
      return vu(e);
  }
  function H1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ne = typeof Object.is == "function" ? Object.is : H1;
  function ni(t, e) {
    if (Ne(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var u = l[n];
      if (!Qf.call(e, u) || !Ne(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function Zo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ko(t, e) {
    var l = Zo(t);
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
      l = Zo(l);
    }
  }
  function Jo(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Jo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function ko(t) {
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
  function _c(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var B1 = pl && "documentMode" in document && 11 >= document.documentMode, aa = null, mc = null, ai = null, yc = !1;
  function Fo(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    yc || aa == null || aa !== ou(n) || (n = aa, "selectionStart" in n && _c(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ai && ni(ai, n) || (ai = n, n = ff(mc, "onSelect"), 0 < n.length && (e = new yu(
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
  }, gc = {}, Wo = {};
  pl && (Wo = document.createElement("div").style, "AnimationEvent" in window || (delete ia.animationend.animation, delete ia.animationiteration.animation, delete ia.animationstart.animation), "TransitionEvent" in window || delete ia.transitionend.transition);
  function En(t) {
    if (gc[t]) return gc[t];
    if (!ia[t]) return t;
    var e = ia[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Wo)
        return gc[t] = e[l];
    return t;
  }
  var $o = En("animationend"), Po = En("animationiteration"), Io = En("animationstart"), L1 = En("transitionrun"), Y1 = En("transitionstart"), q1 = En("transitioncancel"), th = En("transitionend"), eh = /* @__PURE__ */ new Map(), vc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vc.push("scrollEnd");
  function ul(t, e) {
    eh.set(t, e), Tn(e, [t]);
  }
  var pu = typeof reportError == "function" ? reportError : function(t) {
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
  }, ke = [], ua = 0, pc = 0;
  function Su() {
    for (var t = ua, e = pc = ua = 0; e < t; ) {
      var l = ke[e];
      ke[e++] = null;
      var n = ke[e];
      ke[e++] = null;
      var u = ke[e];
      ke[e++] = null;
      var c = ke[e];
      if (ke[e++] = null, n !== null && u !== null) {
        var o = n.pending;
        o === null ? u.next = u : (u.next = o.next, o.next = u), n.pending = u;
      }
      c !== 0 && lh(l, u, c);
    }
  }
  function bu(t, e, l, n) {
    ke[ua++] = t, ke[ua++] = e, ke[ua++] = l, ke[ua++] = n, pc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function Sc(t, e, l, n) {
    return bu(t, e, l, n), Tu(t);
  }
  function zn(t, e) {
    return bu(t, null, null, e), Tu(t);
  }
  function lh(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var u = !1, c = t.return; c !== null; )
      c.childLanes |= l, n = c.alternate, n !== null && (n.childLanes |= l), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (u = !0)), t = c, c = c.return;
    return t.tag === 3 ? (c = t.stateNode, u && e !== null && (u = 31 - Re(l), t = c.hiddenUpdates, n = t[u], n === null ? t[u] = [e] : n.push(e), e.lane = l | 536870912), c) : null;
  }
  function Tu(t) {
    if (50 < zi)
      throw zi = 0, Cs = null, Error(i(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var fa = {};
  function V1(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ue(t, e, l, n) {
    return new V1(t, e, l, n);
  }
  function bc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Sl(t, e) {
    var l = t.alternate;
    return l === null ? (l = Ue(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function nh(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function xu(t, e, l, n, u, c) {
    var o = 0;
    if (n = t, typeof t == "function") bc(t) && (o = 1);
    else if (typeof t == "string")
      o = Ky(
        t,
        l,
        $.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case X:
          return t = Ue(31, l, e, u), t.elementType = X, t.lanes = c, t;
        case S:
          return On(l.children, u, c, e);
        case U:
          o = 8, u |= 24;
          break;
        case G:
          return t = Ue(12, l, e, u | 2), t.elementType = G, t.lanes = c, t;
        case w:
          return t = Ue(13, l, e, u), t.elementType = w, t.lanes = c, t;
        case K:
          return t = Ue(19, l, e, u), t.elementType = K, t.lanes = c, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Y:
                o = 10;
                break t;
              case Z:
                o = 9;
                break t;
              case J:
                o = 11;
                break t;
              case q:
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
    return e = Ue(o, l, e, u), e.elementType = t, e.type = n, e.lanes = c, e;
  }
  function On(t, e, l, n) {
    return t = Ue(7, t, n, e), t.lanes = l, t;
  }
  function Tc(t, e, l) {
    return t = Ue(6, t, null, e), t.lanes = l, t;
  }
  function ah(t) {
    var e = Ue(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function xc(t, e, l) {
    return e = Ue(
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
  var ih = /* @__PURE__ */ new WeakMap();
  function Fe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = ih.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: no(e)
      }, ih.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: no(e)
    };
  }
  var ca = [], sa = 0, Au = null, ii = 0, We = [], $e = 0, Gl = null, sl = 1, rl = "";
  function bl(t, e) {
    ca[sa++] = ii, ca[sa++] = Au, Au = t, ii = e;
  }
  function uh(t, e, l) {
    We[$e++] = sl, We[$e++] = rl, We[$e++] = Gl, Gl = t;
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
  function Ac(t) {
    t.return !== null && (bl(t, 1), uh(t, 1, 0));
  }
  function Ec(t) {
    for (; t === Au; )
      Au = ca[--sa], ca[sa] = null, ii = ca[--sa], ca[sa] = null;
    for (; t === Gl; )
      Gl = We[--$e], We[$e] = null, rl = We[--$e], We[$e] = null, sl = We[--$e], We[$e] = null;
  }
  function fh(t, e) {
    We[$e++] = sl, We[$e++] = rl, We[$e++] = Gl, sl = e.id, rl = e.overflow, Gl = t;
  }
  var ie = null, wt = null, bt = !1, Xl = null, Pe = !1, zc = Error(i(519));
  function Ql(t) {
    var e = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ui(Fe(e, t)), zc;
  }
  function ch(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[ae] = t, e[ge] = n, l) {
      case "dialog":
        vt("cancel", e), vt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Mi.length; l++)
          vt(Mi[l], e);
        break;
      case "source":
        vt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        vt("error", e), vt("load", e);
        break;
      case "details":
        vt("toggle", e);
        break;
      case "input":
        vt("invalid", e), bo(
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
        vt("invalid", e);
        break;
      case "textarea":
        vt("invalid", e), xo(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || E0(e.textContent, l) ? (n.popover != null && (vt("beforetoggle", e), vt("toggle", e)), n.onScroll != null && vt("scroll", e), n.onScrollEnd != null && vt("scrollend", e), n.onClick != null && (e.onclick = vl), e = !0) : e = !1, e || Ql(t, !0);
  }
  function sh(t) {
    for (ie = t.return; ie; )
      switch (ie.tag) {
        case 5:
        case 31:
        case 13:
          Pe = !1;
          return;
        case 27:
        case 3:
          Pe = !0;
          return;
        default:
          ie = ie.return;
      }
  }
  function ra(t) {
    if (t !== ie) return !1;
    if (!bt) return sh(t), bt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Qs(t.type, t.memoizedProps)), l = !l), l && wt && Ql(t), sh(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
      wt = j0(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
      wt = j0(t);
    } else
      e === 27 ? (e = wt, an(t.type) ? (t = Fs, Fs = null, wt = t) : wt = e) : wt = ie ? tl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Mn() {
    wt = ie = null, bt = !1;
  }
  function Oc() {
    var t = Xl;
    return t !== null && (Te === null ? Te = t : Te.push.apply(
      Te,
      t
    ), Xl = null), t;
  }
  function ui(t) {
    Xl === null ? Xl = [t] : Xl.push(t);
  }
  var Mc = T(null), Cn = null, Tl = null;
  function Zl(t, e, l) {
    W(Mc, e._currentValue), e._currentValue = l;
  }
  function xl(t) {
    t._currentValue = Mc.current, L(Mc);
  }
  function Cc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Dc(t, e, l, n) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var o = u.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var g = c;
          c = u;
          for (var b = 0; b < e.length; b++)
            if (g.context === e[b]) {
              c.lanes |= l, g = c.alternate, g !== null && (g.lanes |= l), Cc(
                c.return,
                l,
                t
              ), n || (o = null);
              break t;
            }
          c = g.next;
        }
      } else if (u.tag === 18) {
        if (o = u.return, o === null) throw Error(i(341));
        o.lanes |= l, c = o.alternate, c !== null && (c.lanes |= l), Cc(o, l, t), o = null;
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
          var g = u.type;
          Ne(u.pendingProps.value, o.value) || (t !== null ? t.push(g) : t = [g]);
        }
      } else if (u === zt.current) {
        if (o = u.alternate, o === null) throw Error(i(387));
        o.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Ui) : t = [Ui]);
      }
      u = u.return;
    }
    t !== null && Dc(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function Eu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ne(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Dn(t) {
    Cn = t, Tl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ue(t) {
    return rh(Cn, t);
  }
  function zu(t, e) {
    return Cn === null && Dn(t), rh(t, e);
  }
  function rh(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Tl === null) {
      if (t === null) throw Error(i(308));
      Tl = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Tl = Tl.next = e;
    return l;
  }
  var G1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, X1 = m.unstable_scheduleCallback, Q1 = m.unstable_NormalPriority, Ft = {
    $$typeof: Y,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Rc() {
    return {
      controller: new G1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function fi(t) {
    t.refCount--, t.refCount === 0 && X1(Q1, function() {
      t.controller.abort();
    });
  }
  var ci = null, Nc = 0, ha = 0, da = null;
  function Z1(t, e) {
    if (ci === null) {
      var l = ci = [];
      Nc = 0, ha = ws(), da = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Nc++, e.then(oh, oh), e;
  }
  function oh() {
    if (--Nc === 0 && ci !== null) {
      da !== null && (da.status = "fulfilled");
      var t = ci;
      ci = null, ha = 0, da = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function K1(t, e) {
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
  var hh = R.S;
  R.S = function(t, e) {
    Fd = Ce(), typeof e == "object" && e !== null && typeof e.then == "function" && Z1(t, e), hh !== null && hh(t, e);
  };
  var Rn = T(null);
  function Uc() {
    var t = Rn.current;
    return t !== null ? t : Nt.pooledCache;
  }
  function Ou(t, e) {
    e === null ? W(Rn, Rn.current) : W(Rn, e.pool);
  }
  function dh() {
    var t = Uc();
    return t === null ? null : { parent: Ft._currentValue, pool: t };
  }
  var _a = Error(i(460)), jc = Error(i(474)), Mu = Error(i(542)), Cu = { then: function() {
  } };
  function _h(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function mh(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(vl, vl), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, gh(t), t;
      default:
        if (typeof e.status == "string") e.then(vl, vl);
        else {
          if (t = Nt, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = e.reason, gh(t), t;
        }
        throw Un = e, _a;
    }
  }
  function Nn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Un = l, _a) : l;
    }
  }
  var Un = null;
  function yh() {
    if (Un === null) throw Error(i(459));
    var t = Un;
    return Un = null, t;
  }
  function gh(t) {
    if (t === _a || t === Mu)
      throw Error(i(483));
  }
  var ma = null, si = 0;
  function Du(t) {
    var e = si;
    return si += 1, ma === null && (ma = []), mh(ma, t, e);
  }
  function ri(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ru(t, e) {
    throw e.$$typeof === A ? Error(i(525)) : (t = Object.prototype.toString.call(e), Error(
      i(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function vh(t) {
    function e(z, x) {
      if (t) {
        var M = z.deletions;
        M === null ? (z.deletions = [x], z.flags |= 16) : M.push(x);
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
      return z = Sl(z, x), z.index = 0, z.sibling = null, z;
    }
    function c(z, x, M) {
      return z.index = M, t ? (M = z.alternate, M !== null ? (M = M.index, M < x ? (z.flags |= 67108866, x) : M) : (z.flags |= 67108866, x)) : (z.flags |= 1048576, x);
    }
    function o(z) {
      return t && z.alternate === null && (z.flags |= 67108866), z;
    }
    function g(z, x, M, V) {
      return x === null || x.tag !== 6 ? (x = Tc(M, z.mode, V), x.return = z, x) : (x = u(x, M), x.return = z, x);
    }
    function b(z, x, M, V) {
      var et = M.type;
      return et === S ? B(
        z,
        x,
        M.props.children,
        V,
        M.key
      ) : x !== null && (x.elementType === et || typeof et == "object" && et !== null && et.$$typeof === F && Nn(et) === x.type) ? (x = u(x, M.props), ri(x, M), x.return = z, x) : (x = xu(
        M.type,
        M.key,
        M.props,
        null,
        z.mode,
        V
      ), ri(x, M), x.return = z, x);
    }
    function C(z, x, M, V) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== M.containerInfo || x.stateNode.implementation !== M.implementation ? (x = xc(M, z.mode, V), x.return = z, x) : (x = u(x, M.children || []), x.return = z, x);
    }
    function B(z, x, M, V, et) {
      return x === null || x.tag !== 7 ? (x = On(
        M,
        z.mode,
        V,
        et
      ), x.return = z, x) : (x = u(x, M), x.return = z, x);
    }
    function Q(z, x, M) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return x = Tc(
          "" + x,
          z.mode,
          M
        ), x.return = z, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case E:
            return M = xu(
              x.type,
              x.key,
              x.props,
              null,
              z.mode,
              M
            ), ri(M, x), M.return = z, M;
          case D:
            return x = xc(
              x,
              z.mode,
              M
            ), x.return = z, x;
          case F:
            return x = Nn(x), Q(z, x, M);
        }
        if (ot(x) || nt(x))
          return x = On(
            x,
            z.mode,
            M,
            null
          ), x.return = z, x;
        if (typeof x.then == "function")
          return Q(z, Du(x), M);
        if (x.$$typeof === Y)
          return Q(
            z,
            zu(z, x),
            M
          );
        Ru(z, x);
      }
      return null;
    }
    function N(z, x, M, V) {
      var et = x !== null ? x.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return et !== null ? null : g(z, x, "" + M, V);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case E:
            return M.key === et ? b(z, x, M, V) : null;
          case D:
            return M.key === et ? C(z, x, M, V) : null;
          case F:
            return M = Nn(M), N(z, x, M, V);
        }
        if (ot(M) || nt(M))
          return et !== null ? null : B(z, x, M, V, null);
        if (typeof M.then == "function")
          return N(
            z,
            x,
            Du(M),
            V
          );
        if (M.$$typeof === Y)
          return N(
            z,
            x,
            zu(z, M),
            V
          );
        Ru(z, M);
      }
      return null;
    }
    function j(z, x, M, V, et) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return z = z.get(M) || null, g(x, z, "" + V, et);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case E:
            return z = z.get(
              V.key === null ? M : V.key
            ) || null, b(x, z, V, et);
          case D:
            return z = z.get(
              V.key === null ? M : V.key
            ) || null, C(x, z, V, et);
          case F:
            return V = Nn(V), j(
              z,
              x,
              M,
              V,
              et
            );
        }
        if (ot(V) || nt(V))
          return z = z.get(M) || null, B(x, z, V, et, null);
        if (typeof V.then == "function")
          return j(
            z,
            x,
            M,
            Du(V),
            et
          );
        if (V.$$typeof === Y)
          return j(
            z,
            x,
            M,
            zu(x, V),
            et
          );
        Ru(x, V);
      }
      return null;
    }
    function I(z, x, M, V) {
      for (var et = null, xt = null, tt = x, mt = x = 0, St = null; tt !== null && mt < M.length; mt++) {
        tt.index > mt ? (St = tt, tt = null) : St = tt.sibling;
        var At = N(
          z,
          tt,
          M[mt],
          V
        );
        if (At === null) {
          tt === null && (tt = St);
          break;
        }
        t && tt && At.alternate === null && e(z, tt), x = c(At, x, mt), xt === null ? et = At : xt.sibling = At, xt = At, tt = St;
      }
      if (mt === M.length)
        return l(z, tt), bt && bl(z, mt), et;
      if (tt === null) {
        for (; mt < M.length; mt++)
          tt = Q(z, M[mt], V), tt !== null && (x = c(
            tt,
            x,
            mt
          ), xt === null ? et = tt : xt.sibling = tt, xt = tt);
        return bt && bl(z, mt), et;
      }
      for (tt = n(tt); mt < M.length; mt++)
        St = j(
          tt,
          z,
          mt,
          M[mt],
          V
        ), St !== null && (t && St.alternate !== null && tt.delete(
          St.key === null ? mt : St.key
        ), x = c(
          St,
          x,
          mt
        ), xt === null ? et = St : xt.sibling = St, xt = St);
      return t && tt.forEach(function(rn) {
        return e(z, rn);
      }), bt && bl(z, mt), et;
    }
    function at(z, x, M, V) {
      if (M == null) throw Error(i(151));
      for (var et = null, xt = null, tt = x, mt = x = 0, St = null, At = M.next(); tt !== null && !At.done; mt++, At = M.next()) {
        tt.index > mt ? (St = tt, tt = null) : St = tt.sibling;
        var rn = N(z, tt, At.value, V);
        if (rn === null) {
          tt === null && (tt = St);
          break;
        }
        t && tt && rn.alternate === null && e(z, tt), x = c(rn, x, mt), xt === null ? et = rn : xt.sibling = rn, xt = rn, tt = St;
      }
      if (At.done)
        return l(z, tt), bt && bl(z, mt), et;
      if (tt === null) {
        for (; !At.done; mt++, At = M.next())
          At = Q(z, At.value, V), At !== null && (x = c(At, x, mt), xt === null ? et = At : xt.sibling = At, xt = At);
        return bt && bl(z, mt), et;
      }
      for (tt = n(tt); !At.done; mt++, At = M.next())
        At = j(tt, z, mt, At.value, V), At !== null && (t && At.alternate !== null && tt.delete(At.key === null ? mt : At.key), x = c(At, x, mt), xt === null ? et = At : xt.sibling = At, xt = At);
      return t && tt.forEach(function(ng) {
        return e(z, ng);
      }), bt && bl(z, mt), et;
    }
    function Rt(z, x, M, V) {
      if (typeof M == "object" && M !== null && M.type === S && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case E:
            t: {
              for (var et = M.key; x !== null; ) {
                if (x.key === et) {
                  if (et = M.type, et === S) {
                    if (x.tag === 7) {
                      l(
                        z,
                        x.sibling
                      ), V = u(
                        x,
                        M.props.children
                      ), V.return = z, z = V;
                      break t;
                    }
                  } else if (x.elementType === et || typeof et == "object" && et !== null && et.$$typeof === F && Nn(et) === x.type) {
                    l(
                      z,
                      x.sibling
                    ), V = u(x, M.props), ri(V, M), V.return = z, z = V;
                    break t;
                  }
                  l(z, x);
                  break;
                } else e(z, x);
                x = x.sibling;
              }
              M.type === S ? (V = On(
                M.props.children,
                z.mode,
                V,
                M.key
              ), V.return = z, z = V) : (V = xu(
                M.type,
                M.key,
                M.props,
                null,
                z.mode,
                V
              ), ri(V, M), V.return = z, z = V);
            }
            return o(z);
          case D:
            t: {
              for (et = M.key; x !== null; ) {
                if (x.key === et)
                  if (x.tag === 4 && x.stateNode.containerInfo === M.containerInfo && x.stateNode.implementation === M.implementation) {
                    l(
                      z,
                      x.sibling
                    ), V = u(x, M.children || []), V.return = z, z = V;
                    break t;
                  } else {
                    l(z, x);
                    break;
                  }
                else e(z, x);
                x = x.sibling;
              }
              V = xc(M, z.mode, V), V.return = z, z = V;
            }
            return o(z);
          case F:
            return M = Nn(M), Rt(
              z,
              x,
              M,
              V
            );
        }
        if (ot(M))
          return I(
            z,
            x,
            M,
            V
          );
        if (nt(M)) {
          if (et = nt(M), typeof et != "function") throw Error(i(150));
          return M = et.call(M), at(
            z,
            x,
            M,
            V
          );
        }
        if (typeof M.then == "function")
          return Rt(
            z,
            x,
            Du(M),
            V
          );
        if (M.$$typeof === Y)
          return Rt(
            z,
            x,
            zu(z, M),
            V
          );
        Ru(z, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, x !== null && x.tag === 6 ? (l(z, x.sibling), V = u(x, M), V.return = z, z = V) : (l(z, x), V = Tc(M, z.mode, V), V.return = z, z = V), o(z)) : l(z, x);
    }
    return function(z, x, M, V) {
      try {
        si = 0;
        var et = Rt(
          z,
          x,
          M,
          V
        );
        return ma = null, et;
      } catch (tt) {
        if (tt === _a || tt === Mu) throw tt;
        var xt = Ue(29, tt, null, z.mode);
        return xt.lanes = V, xt.return = z, xt;
      }
    };
  }
  var jn = vh(!0), ph = vh(!1), Kl = !1;
  function wc(t) {
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
      return u === null ? e.next = e : (e.next = u.next, u.next = e), n.pending = e, e = Tu(t), lh(t, null, l), e;
    }
    return bu(t, n, e, l), Tu(t);
  }
  function oi(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, so(t, l);
    }
  }
  function Bc(t, e) {
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
  var Lc = !1;
  function hi() {
    if (Lc) {
      var t = da;
      if (t !== null) throw t;
    }
  }
  function di(t, e, l, n) {
    Lc = !1;
    var u = t.updateQueue;
    Kl = !1;
    var c = u.firstBaseUpdate, o = u.lastBaseUpdate, g = u.shared.pending;
    if (g !== null) {
      u.shared.pending = null;
      var b = g, C = b.next;
      b.next = null, o === null ? c = C : o.next = C, o = b;
      var B = t.alternate;
      B !== null && (B = B.updateQueue, g = B.lastBaseUpdate, g !== o && (g === null ? B.firstBaseUpdate = C : g.next = C, B.lastBaseUpdate = b));
    }
    if (c !== null) {
      var Q = u.baseState;
      o = 0, B = C = b = null, g = c;
      do {
        var N = g.lane & -536870913, j = N !== g.lane;
        if (j ? (pt & N) === N : (n & N) === N) {
          N !== 0 && N === ha && (Lc = !0), B !== null && (B = B.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          t: {
            var I = t, at = g;
            N = e;
            var Rt = l;
            switch (at.tag) {
              case 1:
                if (I = at.payload, typeof I == "function") {
                  Q = I.call(Rt, Q, N);
                  break t;
                }
                Q = I;
                break t;
              case 3:
                I.flags = I.flags & -65537 | 128;
              case 0:
                if (I = at.payload, N = typeof I == "function" ? I.call(Rt, Q, N) : I, N == null) break t;
                Q = p({}, Q, N);
                break t;
              case 2:
                Kl = !0;
            }
          }
          N = g.callback, N !== null && (t.flags |= 64, j && (t.flags |= 8192), j = u.callbacks, j === null ? u.callbacks = [N] : j.push(N));
        } else
          j = {
            lane: N,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, B === null ? (C = B = j, b = Q) : B = B.next = j, o |= N;
        if (g = g.next, g === null) {
          if (g = u.shared.pending, g === null)
            break;
          j = g, g = j.next, j.next = null, u.lastBaseUpdate = j, u.shared.pending = null;
        }
      } while (!0);
      B === null && (b = Q), u.baseState = b, u.firstBaseUpdate = C, u.lastBaseUpdate = B, c === null && (u.shared.lanes = 0), Il |= o, t.lanes = o, t.memoizedState = Q;
    }
  }
  function Sh(t, e) {
    if (typeof t != "function")
      throw Error(i(191, t));
    t.call(e);
  }
  function bh(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Sh(l[t], e);
  }
  var ya = T(null), Nu = T(0);
  function Th(t, e) {
    t = Nl, W(Nu, t), W(ya, e), Nl = t | e.baseLanes;
  }
  function Yc() {
    W(Nu, Nl), W(ya, ya.current);
  }
  function qc() {
    Nl = Nu.current, L(ya), L(Nu);
  }
  var je = T(null), Ie = null;
  function Fl(t) {
    var e = t.alternate;
    W(Kt, Kt.current & 1), W(je, t), Ie === null && (e === null || ya.current !== null || e.memoizedState !== null) && (Ie = t);
  }
  function Vc(t) {
    W(Kt, Kt.current), W(je, t), Ie === null && (Ie = t);
  }
  function xh(t) {
    t.tag === 22 ? (W(Kt, Kt.current), W(je, t), Ie === null && (Ie = t)) : Wl();
  }
  function Wl() {
    W(Kt, Kt.current), W(je, je.current);
  }
  function we(t) {
    L(je), Ie === t && (Ie = null), L(Kt);
  }
  var Kt = T(0);
  function Uu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Js(l) || ks(l)))
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
  var Al = 0, _t = null, Ct = null, Wt = null, ju = !1, ga = !1, wn = !1, wu = 0, _i = 0, va = null, J1 = 0;
  function Gt() {
    throw Error(i(321));
  }
  function Gc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Ne(t[l], e[l])) return !1;
    return !0;
  }
  function Xc(t, e, l, n, u, c) {
    return Al = c, _t = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, R.H = t === null || t.memoizedState === null ? ud : as, wn = !1, c = l(n, u), wn = !1, ga && (c = Eh(
      e,
      l,
      n,
      u
    )), Ah(t), c;
  }
  function Ah(t) {
    R.H = gi;
    var e = Ct !== null && Ct.next !== null;
    if (Al = 0, Wt = Ct = _t = null, ju = !1, _i = 0, va = null, e) throw Error(i(300));
    t === null || $t || (t = t.dependencies, t !== null && Eu(t) && ($t = !0));
  }
  function Eh(t, e, l, n) {
    _t = t;
    var u = 0;
    do {
      if (ga && (va = null), _i = 0, ga = !1, 25 <= u) throw Error(i(301));
      if (u += 1, Wt = Ct = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      R.H = fd, c = e(l, n);
    } while (ga);
    return c;
  }
  function k1() {
    var t = R.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? mi(e) : e, t = t.useState()[0], (Ct !== null ? Ct.memoizedState : null) !== t && (_t.flags |= 1024), e;
  }
  function Qc() {
    var t = wu !== 0;
    return wu = 0, t;
  }
  function Zc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Kc(t) {
    if (ju) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ju = !1;
    }
    Al = 0, Wt = Ct = _t = null, ga = !1, _i = wu = 0, va = null;
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
    if (Ct === null) {
      var t = _t.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ct.next;
    var e = Wt === null ? _t.memoizedState : Wt.next;
    if (e !== null)
      Wt = e, Ct = t;
    else {
      if (t === null)
        throw _t.alternate === null ? Error(i(467)) : Error(i(310));
      Ct = t, t = {
        memoizedState: Ct.memoizedState,
        baseState: Ct.baseState,
        baseQueue: Ct.baseQueue,
        queue: Ct.queue,
        next: null
      }, Wt === null ? _t.memoizedState = Wt = t : Wt = Wt.next = t;
    }
    return Wt;
  }
  function Hu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mi(t) {
    var e = _i;
    return _i += 1, va === null && (va = []), t = mh(va, t, e), e = _t, (Wt === null ? e.memoizedState : Wt.next) === null && (e = e.alternate, R.H = e === null || e.memoizedState === null ? ud : as), t;
  }
  function Bu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return mi(t);
      if (t.$$typeof === Y) return ue(t);
    }
    throw Error(i(438, String(t)));
  }
  function Jc(t) {
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
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Hu(), _t.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = lt;
    return e.index++, l;
  }
  function El(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Lu(t) {
    var e = Jt();
    return kc(e, Ct, t);
  }
  function kc(t, e, l) {
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
      var g = o = null, b = null, C = e, B = !1;
      do {
        var Q = C.lane & -536870913;
        if (Q !== C.lane ? (pt & Q) === Q : (Al & Q) === Q) {
          var N = C.revertLane;
          if (N === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), Q === ha && (B = !0);
          else if ((Al & N) === N) {
            C = C.next, N === ha && (B = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, b === null ? (g = b = Q, o = c) : b = b.next = Q, _t.lanes |= N, Il |= N;
          Q = C.action, wn && l(c, Q), c = C.hasEagerState ? C.eagerState : l(c, Q);
        } else
          N = {
            lane: Q,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, b === null ? (g = b = N, o = c) : b = b.next = N, _t.lanes |= Q, Il |= Q;
        C = C.next;
      } while (C !== null && C !== e);
      if (b === null ? o = c : b.next = g, !Ne(c, t.memoizedState) && ($t = !0, B && (l = da, l !== null)))
        throw l;
      t.memoizedState = c, t.baseState = o, t.baseQueue = b, n.lastRenderedState = c;
    }
    return u === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Fc(t) {
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
      Ne(c, e.memoizedState) || ($t = !0), e.memoizedState = c, e.baseQueue === null && (e.baseState = c), l.lastRenderedState = c;
    }
    return [c, n];
  }
  function zh(t, e, l) {
    var n = _t, u = Jt(), c = bt;
    if (c) {
      if (l === void 0) throw Error(i(407));
      l = l();
    } else l = e();
    var o = !Ne(
      (Ct || u).memoizedState,
      l
    );
    if (o && (u.memoizedState = l, $t = !0), u = u.queue, Pc(Ch.bind(null, n, u, t), [
      t
    ]), u.getSnapshot !== e || o || Wt !== null && Wt.memoizedState.tag & 1) {
      if (n.flags |= 2048, pa(
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
      ), Nt === null) throw Error(i(349));
      c || (Al & 127) !== 0 || Oh(n, e, l);
    }
    return l;
  }
  function Oh(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = _t.updateQueue, e === null ? (e = Hu(), _t.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Mh(t, e, l, n) {
    e.value = l, e.getSnapshot = n, Dh(e) && Rh(t);
  }
  function Ch(t, e, l) {
    return l(function() {
      Dh(e) && Rh(t);
    });
  }
  function Dh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Ne(t, l);
    } catch {
      return !0;
    }
  }
  function Rh(t) {
    var e = zn(t, 2);
    e !== null && xe(e, t, 2);
  }
  function Wc(t) {
    var e = me();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), wn) {
        Yl(!0);
        try {
          l();
        } finally {
          Yl(!1);
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
  function Nh(t, e, l, n) {
    return t.baseState = l, kc(
      t,
      Ct,
      typeof n == "function" ? n : El
    );
  }
  function F1(t, e, l, n, u) {
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
      R.T !== null ? l(!0) : c.isTransition = !1, n(c), l = e.pending, l === null ? (c.next = e.pending = c, Uh(e, c)) : (c.next = l.next, e.pending = l.next = c);
    }
  }
  function Uh(t, e) {
    var l = e.action, n = e.payload, u = t.state;
    if (e.isTransition) {
      var c = R.T, o = {};
      R.T = o;
      try {
        var g = l(u, n), b = R.S;
        b !== null && b(o, g), jh(t, e, g);
      } catch (C) {
        $c(t, e, C);
      } finally {
        c !== null && o.types !== null && (c.types = o.types), R.T = c;
      }
    } else
      try {
        c = l(u, n), jh(t, e, c);
      } catch (C) {
        $c(t, e, C);
      }
  }
  function jh(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        wh(t, e, n);
      },
      function(n) {
        return $c(t, e, n);
      }
    ) : wh(t, e, l);
  }
  function wh(t, e, l) {
    e.status = "fulfilled", e.value = l, Hh(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Uh(t, l)));
  }
  function $c(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, Hh(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function Hh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Bh(t, e) {
    return e;
  }
  function Lh(t, e) {
    if (bt) {
      var l = Nt.formState;
      if (l !== null) {
        t: {
          var n = _t;
          if (bt) {
            if (wt) {
              e: {
                for (var u = wt, c = Pe; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break e;
                  }
                  if (u = tl(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                c = u.data, u = c === "F!" || c === "F" ? u : null;
              }
              if (u) {
                wt = tl(
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
      lastRenderedReducer: Bh,
      lastRenderedState: e
    }, l.queue = n, l = nd.bind(
      null,
      _t,
      n
    ), n.dispatch = l, n = Wc(!1), c = ns.bind(
      null,
      _t,
      !1,
      n.queue
    ), n = me(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = u, l = F1.bind(
      null,
      _t,
      u,
      c,
      l
    ), u.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function Yh(t) {
    var e = Jt();
    return qh(e, Ct, t);
  }
  function qh(t, e, l) {
    if (e = kc(
      t,
      e,
      Bh
    )[0], t = Lu(El)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = mi(e);
      } catch (o) {
        throw o === _a ? Mu : o;
      }
    else n = e;
    e = Jt();
    var u = e.queue, c = u.dispatch;
    return l !== e.memoizedState && (_t.flags |= 2048, pa(
      9,
      { destroy: void 0 },
      W1.bind(null, u, l),
      null
    )), [n, c, t];
  }
  function W1(t, e) {
    t.action = e;
  }
  function Vh(t) {
    var e = Jt(), l = Ct;
    if (l !== null)
      return qh(e, l, t);
    Jt(), e = e.memoizedState, l = Jt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function pa(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = _t.updateQueue, e === null && (e = Hu(), _t.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function Gh() {
    return Jt().memoizedState;
  }
  function Yu(t, e, l, n) {
    var u = me();
    _t.flags |= t, u.memoizedState = pa(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function qu(t, e, l, n) {
    var u = Jt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState.inst;
    Ct !== null && n !== null && Gc(n, Ct.memoizedState.deps) ? u.memoizedState = pa(e, c, l, n) : (_t.flags |= t, u.memoizedState = pa(
      1 | e,
      c,
      l,
      n
    ));
  }
  function Xh(t, e) {
    Yu(8390656, 8, t, e);
  }
  function Pc(t, e) {
    qu(2048, 8, t, e);
  }
  function $1(t) {
    _t.flags |= 4;
    var e = _t.updateQueue;
    if (e === null)
      e = Hu(), _t.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Qh(t) {
    var e = Jt().memoizedState;
    return $1({ ref: e, nextImpl: t }), function() {
      if ((Et & 2) !== 0) throw Error(i(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Zh(t, e) {
    return qu(4, 2, t, e);
  }
  function Kh(t, e) {
    return qu(4, 4, t, e);
  }
  function Jh(t, e) {
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
  function kh(t, e, l) {
    l = l != null ? l.concat([t]) : null, qu(4, 4, Jh.bind(null, e, t), l);
  }
  function Ic() {
  }
  function Fh(t, e) {
    var l = Jt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Gc(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function Wh(t, e) {
    var l = Jt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Gc(e, n[1]))
      return n[0];
    if (n = t(), wn) {
      Yl(!0);
      try {
        t();
      } finally {
        Yl(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function ts(t, e, l) {
    return l === void 0 || (Al & 1073741824) !== 0 && (pt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = $d(), _t.lanes |= t, Il |= t, l);
  }
  function $h(t, e, l, n) {
    return Ne(l, e) ? l : ya.current !== null ? (t = ts(t, l, n), Ne(t, e) || ($t = !0), t) : (Al & 42) === 0 || (Al & 1073741824) !== 0 && (pt & 261930) === 0 ? ($t = !0, t.memoizedState = l) : (t = $d(), _t.lanes |= t, Il |= t, e);
  }
  function Ph(t, e, l, n, u) {
    var c = k.p;
    k.p = c !== 0 && 8 > c ? c : 8;
    var o = R.T, g = {};
    R.T = g, ns(t, !1, e, l);
    try {
      var b = u(), C = R.S;
      if (C !== null && C(g, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var B = K1(
          b,
          n
        );
        yi(
          t,
          e,
          B,
          Le(t)
        );
      } else
        yi(
          t,
          e,
          n,
          Le(t)
        );
    } catch (Q) {
      yi(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: Q },
        Le()
      );
    } finally {
      k.p = c, o !== null && g.types !== null && (o.types = g.types), R.T = o;
    }
  }
  function P1() {
  }
  function es(t, e, l, n) {
    if (t.tag !== 5) throw Error(i(476));
    var u = Ih(t).queue;
    Ph(
      t,
      u,
      e,
      P,
      l === null ? P1 : function() {
        return td(t), l(n);
      }
    );
  }
  function Ih(t) {
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
  function td(t) {
    var e = Ih(t);
    e.next === null && (e = t.alternate.memoizedState), yi(
      t,
      e.next.queue,
      {},
      Le()
    );
  }
  function ls() {
    return ue(Ui);
  }
  function ed() {
    return Jt().memoizedState;
  }
  function ld() {
    return Jt().memoizedState;
  }
  function I1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Le();
          t = Jl(l);
          var n = kl(e, t, l);
          n !== null && (xe(n, e, l), oi(n, e, l)), e = { cache: Rc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function ty(t, e, l) {
    var n = Le();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vu(t) ? ad(e, l) : (l = Sc(t, e, l, n), l !== null && (xe(l, t, n), id(l, e, n)));
  }
  function nd(t, e, l) {
    var n = Le();
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
    if (Vu(t)) ad(e, u);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var o = e.lastRenderedState, g = c(o, l);
          if (u.hasEagerState = !0, u.eagerState = g, Ne(g, o))
            return bu(t, e, u, 0), Nt === null && Su(), !1;
        } catch {
        }
      if (l = Sc(t, e, u, n), l !== null)
        return xe(l, t, n), id(l, e, n), !0;
    }
    return !1;
  }
  function ns(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: ws(),
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
  function ad(t, e) {
    ga = ju = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function id(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, so(t, l);
    }
  }
  var gi = {
    readContext: ue,
    use: Bu,
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
  gi.useEffectEvent = Gt;
  var ud = {
    readContext: ue,
    use: Bu,
    useCallback: function(t, e) {
      return me().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ue,
    useEffect: Xh,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Yu(
        4194308,
        4,
        Jh.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Yu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Yu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = me();
      e = e === void 0 ? null : e;
      var n = t();
      if (wn) {
        Yl(!0);
        try {
          t();
        } finally {
          Yl(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = me();
      if (l !== void 0) {
        var u = l(e);
        if (wn) {
          Yl(!0);
          try {
            l(e);
          } finally {
            Yl(!1);
          }
        }
      } else u = e;
      return n.memoizedState = n.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, n.queue = t, t = t.dispatch = ty.bind(
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
      t = Wc(t);
      var e = t.queue, l = nd.bind(null, _t, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: Ic,
    useDeferredValue: function(t, e) {
      var l = me();
      return ts(l, t, e);
    },
    useTransition: function() {
      var t = Wc(!1);
      return t = Ph.bind(
        null,
        _t,
        t.queue,
        !0,
        !1
      ), me().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = _t, u = me();
      if (bt) {
        if (l === void 0)
          throw Error(i(407));
        l = l();
      } else {
        if (l = e(), Nt === null)
          throw Error(i(349));
        (pt & 127) !== 0 || Oh(n, e, l);
      }
      u.memoizedState = l;
      var c = { value: l, getSnapshot: e };
      return u.queue = c, Xh(Ch.bind(null, n, c, t), [
        t
      ]), n.flags |= 2048, pa(
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
      var t = me(), e = Nt.identifierPrefix;
      if (bt) {
        var l = rl, n = sl;
        l = (n & ~(1 << 32 - Re(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = wu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = J1++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: ls,
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
      return e.queue = l, e = ns.bind(
        null,
        _t,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Jc,
    useCacheRefresh: function() {
      return me().memoizedState = I1.bind(
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
  }, as = {
    readContext: ue,
    use: Bu,
    useCallback: Fh,
    useContext: ue,
    useEffect: Pc,
    useImperativeHandle: kh,
    useInsertionEffect: Zh,
    useLayoutEffect: Kh,
    useMemo: Wh,
    useReducer: Lu,
    useRef: Gh,
    useState: function() {
      return Lu(El);
    },
    useDebugValue: Ic,
    useDeferredValue: function(t, e) {
      var l = Jt();
      return $h(
        l,
        Ct.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Lu(El)[0], e = Jt().memoizedState;
      return [
        typeof t == "boolean" ? t : mi(t),
        e
      ];
    },
    useSyncExternalStore: zh,
    useId: ed,
    useHostTransitionStatus: ls,
    useFormState: Yh,
    useActionState: Yh,
    useOptimistic: function(t, e) {
      var l = Jt();
      return Nh(l, Ct, t, e);
    },
    useMemoCache: Jc,
    useCacheRefresh: ld
  };
  as.useEffectEvent = Qh;
  var fd = {
    readContext: ue,
    use: Bu,
    useCallback: Fh,
    useContext: ue,
    useEffect: Pc,
    useImperativeHandle: kh,
    useInsertionEffect: Zh,
    useLayoutEffect: Kh,
    useMemo: Wh,
    useReducer: Fc,
    useRef: Gh,
    useState: function() {
      return Fc(El);
    },
    useDebugValue: Ic,
    useDeferredValue: function(t, e) {
      var l = Jt();
      return Ct === null ? ts(l, t, e) : $h(
        l,
        Ct.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Fc(El)[0], e = Jt().memoizedState;
      return [
        typeof t == "boolean" ? t : mi(t),
        e
      ];
    },
    useSyncExternalStore: zh,
    useId: ed,
    useHostTransitionStatus: ls,
    useFormState: Vh,
    useActionState: Vh,
    useOptimistic: function(t, e) {
      var l = Jt();
      return Ct !== null ? Nh(l, Ct, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Jc,
    useCacheRefresh: ld
  };
  fd.useEffectEvent = Qh;
  function is(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : p({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var us = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = Le(), u = Jl(n);
      u.payload = e, l != null && (u.callback = l), e = kl(t, u, n), e !== null && (xe(e, t, n), oi(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = Le(), u = Jl(n);
      u.tag = 1, u.payload = e, l != null && (u.callback = l), e = kl(t, u, n), e !== null && (xe(e, t, n), oi(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Le(), n = Jl(l);
      n.tag = 2, e != null && (n.callback = e), e = kl(t, n, l), e !== null && (xe(e, t, l), oi(e, t, l));
    }
  };
  function cd(t, e, l, n, u, c, o) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, c, o) : e.prototype && e.prototype.isPureReactComponent ? !ni(l, n) || !ni(u, c) : !0;
  }
  function sd(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && us.enqueueReplaceState(e, e.state, null);
  }
  function Hn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = p({}, l));
      for (var u in t)
        l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  function rd(t) {
    pu(t);
  }
  function od(t) {
    console.error(t);
  }
  function hd(t) {
    pu(t);
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
  function dd(t, e, l) {
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
  function fs(t, e, l) {
    return l = Jl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Gu(t, e);
    }, l;
  }
  function _d(t) {
    return t = Jl(t), t.tag = 3, t;
  }
  function md(t, e, l, n) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = n.value;
      t.payload = function() {
        return u(c);
      }, t.callback = function() {
        dd(e, l, n);
      };
    }
    var o = l.stateNode;
    o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      dd(e, l, n), typeof u != "function" && (tn === null ? tn = /* @__PURE__ */ new Set([this]) : tn.add(this));
      var g = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function ey(t, e, l, n, u) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && oa(
        e,
        l,
        u,
        !0
      ), l = je.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ie === null ? tf() : l.alternate === null && Xt === 0 && (Xt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = u, n === Cu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Ns(t, n, u)), !1;
          case 22:
            return l.flags |= 65536, n === Cu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Ns(t, n, u)), !1;
        }
        throw Error(i(435, l.tag));
      }
      return Ns(t, n, u), tf(), !1;
    }
    if (bt)
      return e = je.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, n !== zc && (t = Error(i(422), { cause: n }), ui(Fe(t, l)))) : (n !== zc && (e = Error(i(423), {
        cause: n
      }), ui(
        Fe(e, l)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, n = Fe(n, l), u = fs(
        t.stateNode,
        n,
        u
      ), Bc(t, u), Xt !== 4 && (Xt = 2)), !1;
    var c = Error(i(520), { cause: n });
    if (c = Fe(c, l), Ei === null ? Ei = [c] : Ei.push(c), Xt !== 4 && (Xt = 2), e === null) return !0;
    n = Fe(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = u & -u, l.lanes |= t, t = fs(l.stateNode, n, t), Bc(l, t), !1;
        case 1:
          if (e = l.type, c = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (tn === null || !tn.has(c))))
            return l.flags |= 65536, u &= -u, l.lanes |= u, u = _d(u), md(
              u,
              t,
              l,
              n
            ), Bc(l, u), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var cs = Error(i(461)), $t = !1;
  function fe(t, e, l, n) {
    e.child = t === null ? ph(e, null, l, n) : jn(
      e,
      t.child,
      l,
      n
    );
  }
  function yd(t, e, l, n, u) {
    l = l.render;
    var c = e.ref;
    if ("ref" in n) {
      var o = {};
      for (var g in n)
        g !== "ref" && (o[g] = n[g]);
    } else o = n;
    return Dn(e), n = Xc(
      t,
      e,
      l,
      o,
      c,
      u
    ), g = Qc(), t !== null && !$t ? (Zc(t, e, u), zl(t, e, u)) : (bt && g && Ac(e), e.flags |= 1, fe(t, e, n, u), e.child);
  }
  function gd(t, e, l, n, u) {
    if (t === null) {
      var c = l.type;
      return typeof c == "function" && !bc(c) && c.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = c, vd(
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
      if (l = l.compare, l = l !== null ? l : ni, l(o, n) && t.ref === e.ref)
        return zl(t, e, u);
    }
    return e.flags |= 1, t = Sl(c, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function vd(t, e, l, n, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (ni(c, n) && t.ref === e.ref)
        if ($t = !1, e.pendingProps = n = c, ys(t, u))
          (t.flags & 131072) !== 0 && ($t = !0);
        else
          return e.lanes = t.lanes, zl(t, e, u);
    }
    return ss(
      t,
      e,
      l,
      n,
      u
    );
  }
  function pd(t, e, l, n) {
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
        return Sd(
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
        ), c !== null ? Th(e, c) : Yc(), xh(e);
      else
        return n = e.lanes = 536870912, Sd(
          t,
          e,
          c !== null ? c.baseLanes | l : l,
          l,
          n
        );
    } else
      c !== null ? (Ou(e, c.cachePool), Th(e, c), Wl(), e.memoizedState = null) : (t !== null && Ou(e, null), Yc(), Wl());
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
  function Sd(t, e, l, n, u) {
    var c = Uc();
    return c = c === null ? null : { parent: Ft._currentValue, pool: c }, e.memoizedState = {
      baseLanes: l,
      cachePool: c
    }, t !== null && Ou(e, null), Yc(), xh(e), t !== null && oa(t, e, n, !0), e.childLanes = u, null;
  }
  function Xu(t, e) {
    return e = Zu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function bd(t, e, l) {
    return jn(e, t.child, null, l), t = Xu(e, e.pendingProps), t.flags |= 2, we(e), e.memoizedState = null, t;
  }
  function ly(t, e, l) {
    var n = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (bt) {
        if (n.mode === "hidden")
          return t = Xu(e, n), e.lanes = 536870912, vi(null, t);
        if (Vc(e), (t = wt) ? (t = U0(
          t,
          Pe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Gl !== null ? { id: sl, overflow: rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ah(t), l.return = e, e.child = l, ie = e, wt = null)) : t = null, t === null) throw Ql(e);
        return e.lanes = 536870912, null;
      }
      return Xu(e, n);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var o = c.dehydrated;
      if (Vc(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = bd(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(i(558));
      else if ($t || oa(t, e, l, !1), u = (l & t.childLanes) !== 0, $t || u) {
        if (n = Nt, n !== null && (o = ro(n, l), o !== 0 && o !== c.retryLane))
          throw c.retryLane = o, zn(t, o), xe(n, t, o), cs;
        tf(), e = bd(
          t,
          e,
          l
        );
      } else
        t = c.treeContext, wt = tl(o.nextSibling), ie = e, bt = !0, Xl = null, Pe = !1, t !== null && fh(e, t), e = Xu(e, n), e.flags |= 4096;
      return e;
    }
    return t = Sl(t.child, {
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
  function ss(t, e, l, n, u) {
    return Dn(e), l = Xc(
      t,
      e,
      l,
      n,
      void 0,
      u
    ), n = Qc(), t !== null && !$t ? (Zc(t, e, u), zl(t, e, u)) : (bt && n && Ac(e), e.flags |= 1, fe(t, e, l, u), e.child);
  }
  function Td(t, e, l, n, u, c) {
    return Dn(e), e.updateQueue = null, l = Eh(
      e,
      n,
      l,
      u
    ), Ah(t), n = Qc(), t !== null && !$t ? (Zc(t, e, c), zl(t, e, c)) : (bt && n && Ac(e), e.flags |= 1, fe(t, e, l, c), e.child);
  }
  function xd(t, e, l, n, u) {
    if (Dn(e), e.stateNode === null) {
      var c = fa, o = l.contextType;
      typeof o == "object" && o !== null && (c = ue(o)), c = new l(n, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = us, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = n, c.state = e.memoizedState, c.refs = {}, wc(e), o = l.contextType, c.context = typeof o == "object" && o !== null ? ue(o) : fa, c.state = e.memoizedState, o = l.getDerivedStateFromProps, typeof o == "function" && (is(
        e,
        l,
        o,
        n
      ), c.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (o = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), o !== c.state && us.enqueueReplaceState(c, c.state, null), di(e, n, c, u), hi(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      c = e.stateNode;
      var g = e.memoizedProps, b = Hn(l, g);
      c.props = b;
      var C = c.context, B = l.contextType;
      o = fa, typeof B == "object" && B !== null && (o = ue(B));
      var Q = l.getDerivedStateFromProps;
      B = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function", g = e.pendingProps !== g, B || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g || C !== o) && sd(
        e,
        c,
        n,
        o
      ), Kl = !1;
      var N = e.memoizedState;
      c.state = N, di(e, n, c, u), hi(), C = e.memoizedState, g || N !== C || Kl ? (typeof Q == "function" && (is(
        e,
        l,
        Q,
        n
      ), C = e.memoizedState), (b = Kl || cd(
        e,
        l,
        b,
        n,
        N,
        C,
        o
      )) ? (B || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = C), c.props = n, c.state = C, c.context = o, n = b) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      c = e.stateNode, Hc(t, e), o = e.memoizedProps, B = Hn(l, o), c.props = B, Q = e.pendingProps, N = c.context, C = l.contextType, b = fa, typeof C == "object" && C !== null && (b = ue(C)), g = l.getDerivedStateFromProps, (C = typeof g == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (o !== Q || N !== b) && sd(
        e,
        c,
        n,
        b
      ), Kl = !1, N = e.memoizedState, c.state = N, di(e, n, c, u), hi();
      var j = e.memoizedState;
      o !== Q || N !== j || Kl || t !== null && t.dependencies !== null && Eu(t.dependencies) ? (typeof g == "function" && (is(
        e,
        l,
        g,
        n
      ), j = e.memoizedState), (B = Kl || cd(
        e,
        l,
        B,
        n,
        N,
        j,
        b
      ) || t !== null && t.dependencies !== null && Eu(t.dependencies)) ? (C || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(n, j, b), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        n,
        j,
        b
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || o === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = j), c.props = n, c.state = j, c.context = b, n = B) : (typeof c.componentDidUpdate != "function" || o === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), n = !1);
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
  function Ad(t, e, l, n) {
    return Mn(), e.flags |= 256, fe(t, e, l, n), e.child;
  }
  var rs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function os(t) {
    return { baseLanes: t, cachePool: dh() };
  }
  function hs(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Be), t;
  }
  function Ed(t, e, l) {
    var n = e.pendingProps, u = !1, c = (e.flags & 128) !== 0, o;
    if ((o = c) || (o = t !== null && t.memoizedState === null ? !1 : (Kt.current & 2) !== 0), o && (u = !0, e.flags &= -129), o = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (bt) {
        if (u ? Fl(e) : Wl(), (t = wt) ? (t = U0(
          t,
          Pe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Gl !== null ? { id: sl, overflow: rl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ah(t), l.return = e, e.child = l, ie = e, wt = null)) : t = null, t === null) throw Ql(e);
        return ks(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var g = n.children;
      return n = n.fallback, u ? (Wl(), u = e.mode, g = Zu(
        { mode: "hidden", children: g },
        u
      ), n = On(
        n,
        u,
        l,
        null
      ), g.return = e, n.return = e, g.sibling = n, e.child = g, n = e.child, n.memoizedState = os(l), n.childLanes = hs(
        t,
        o,
        l
      ), e.memoizedState = rs, vi(null, n)) : (Fl(e), ds(e, g));
    }
    var b = t.memoizedState;
    if (b !== null && (g = b.dehydrated, g !== null)) {
      if (c)
        e.flags & 256 ? (Fl(e), e.flags &= -257, e = _s(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (Wl(), e.child = t.child, e.flags |= 128, e = null) : (Wl(), g = n.fallback, u = e.mode, n = Zu(
          { mode: "visible", children: n.children },
          u
        ), g = On(
          g,
          u,
          l,
          null
        ), g.flags |= 2, n.return = e, g.return = e, n.sibling = g, e.child = n, jn(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = os(l), n.childLanes = hs(
          t,
          o,
          l
        ), e.memoizedState = rs, e = vi(null, n));
      else if (Fl(e), ks(g)) {
        if (o = g.nextSibling && g.nextSibling.dataset, o) var C = o.dgst;
        o = C, n = Error(i(419)), n.stack = "", n.digest = o, ui({ value: n, source: null, stack: null }), e = _s(
          t,
          e,
          l
        );
      } else if ($t || oa(t, e, l, !1), o = (l & t.childLanes) !== 0, $t || o) {
        if (o = Nt, o !== null && (n = ro(o, l), n !== 0 && n !== b.retryLane))
          throw b.retryLane = n, zn(t, n), xe(o, t, n), cs;
        Js(g) || tf(), e = _s(
          t,
          e,
          l
        );
      } else
        Js(g) ? (e.flags |= 192, e.child = t.child, e = null) : (t = b.treeContext, wt = tl(
          g.nextSibling
        ), ie = e, bt = !0, Xl = null, Pe = !1, t !== null && fh(e, t), e = ds(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (Wl(), g = n.fallback, u = e.mode, b = t.child, C = b.sibling, n = Sl(b, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = b.subtreeFlags & 65011712, C !== null ? g = Sl(
      C,
      g
    ) : (g = On(
      g,
      u,
      l,
      null
    ), g.flags |= 2), g.return = e, n.return = e, n.sibling = g, e.child = n, vi(null, n), n = e.child, g = t.child.memoizedState, g === null ? g = os(l) : (u = g.cachePool, u !== null ? (b = Ft._currentValue, u = u.parent !== b ? { parent: b, pool: b } : u) : u = dh(), g = {
      baseLanes: g.baseLanes | l,
      cachePool: u
    }), n.memoizedState = g, n.childLanes = hs(
      t,
      o,
      l
    ), e.memoizedState = rs, vi(t.child, n)) : (Fl(e), l = t.child, t = l.sibling, l = Sl(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (o = e.deletions, o === null ? (e.deletions = [t], e.flags |= 16) : o.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function ds(t, e) {
    return e = Zu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Zu(t, e) {
    return t = Ue(22, t, null, e), t.lanes = 0, t;
  }
  function _s(t, e, l) {
    return jn(e, t.child, null, l), t = ds(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function zd(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), Cc(t.return, e, l);
  }
  function ms(t, e, l, n, u, c) {
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
  function Od(t, e, l) {
    var n = e.pendingProps, u = n.revealOrder, c = n.tail;
    n = n.children;
    var o = Kt.current, g = (o & 2) !== 0;
    if (g ? (o = o & 1 | 2, e.flags |= 128) : o &= 1, W(Kt, o), fe(t, e, n, l), n = bt ? ii : 0, !g && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && zd(t, l, e);
        else if (t.tag === 19)
          zd(t, l, e);
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
        l = u, l === null ? (u = e.child, e.child = null) : (u = l.sibling, l.sibling = null), ms(
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
        ms(
          e,
          !0,
          l,
          null,
          c,
          n
        );
        break;
      case "together":
        ms(
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
      for (t = e.child, l = Sl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Sl(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function ys(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Eu(t)));
  }
  function ny(t, e, l) {
    switch (e.tag) {
      case 3:
        _e(e, e.stateNode.containerInfo), Zl(e, Ft, t.memoizedState.cache), Mn();
        break;
      case 27:
      case 5:
        Qa(e);
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
          return e.flags |= 128, Vc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Fl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Ed(t, e, l) : (Fl(e), t = zl(
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
            return Od(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), W(Kt, Kt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, pd(
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
          return $t = !1, ny(
            t,
            e,
            l
          );
        $t = (t.flags & 131072) !== 0;
      }
    else
      $t = !1, bt && (e.flags & 1048576) !== 0 && uh(e, ii, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = Nn(e.elementType), e.type = t, typeof t == "function")
            bc(t) ? (n = Hn(t, n), e.tag = 1, e = xd(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = ss(
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
                e.tag = 11, e = yd(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (u === q) {
                e.tag = 14, e = gd(
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
        return ss(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, u = Hn(
          n,
          e.pendingProps
        ), xd(
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
          u = c.element, Hc(t, e), di(e, n, null, l);
          var o = e.memoizedState;
          if (n = o.cache, Zl(e, Ft, n), n !== c.cache && Dc(
            e,
            [Ft],
            l,
            !0
          ), hi(), n = o.element, c.isDehydrated)
            if (c = {
              element: n,
              isDehydrated: !1,
              cache: o.cache
            }, e.updateQueue.baseState = c, e.memoizedState = c, e.flags & 256) {
              e = Ad(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== u) {
              u = Fe(
                Error(i(424)),
                e
              ), ui(u), e = Ad(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, wt = tl(t.firstChild), ie = e, bt = !0, Xl = null, Pe = !0, l = ph(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Mn(), n === u) {
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
        return Qu(t, e), t === null ? (l = Y0(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : bt || (l = e.type, t = e.pendingProps, n = cf(
          yt.current
        ).createElement(l), n[ae] = e, n[ge] = t, ce(n, l, t), ee(n), e.stateNode = n) : e.memoizedState = Y0(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Qa(e), t === null && bt && (n = e.stateNode = H0(
          e.type,
          e.pendingProps,
          yt.current
        ), ie = e, Pe = !0, u = wt, an(e.type) ? (Fs = u, wt = tl(n.firstChild)) : wt = u), fe(
          t,
          e,
          e.pendingProps.children,
          l
        ), Qu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && bt && ((u = n = wt) && (n = Uy(
          n,
          e.type,
          e.pendingProps,
          Pe
        ), n !== null ? (e.stateNode = n, ie = e, wt = tl(n.firstChild), Pe = !1, u = !0) : u = !1), u || Ql(e)), Qa(e), u = e.type, c = e.pendingProps, o = t !== null ? t.memoizedProps : null, n = c.children, Qs(u, c) ? n = null : o !== null && Qs(u, o) && (e.flags |= 32), e.memoizedState !== null && (u = Xc(
          t,
          e,
          k1,
          null,
          null,
          l
        ), Ui._currentValue = u), Qu(t, e), fe(t, e, n, l), e.child;
      case 6:
        return t === null && bt && ((t = l = wt) && (l = jy(
          l,
          e.pendingProps,
          Pe
        ), l !== null ? (e.stateNode = l, ie = e, wt = null, t = !0) : t = !1), t || Ql(e)), null;
      case 13:
        return Ed(t, e, l);
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
        return yd(
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
        return u = e.type._context, n = e.pendingProps.children, Dn(e), u = ue(u), n = n(u), e.flags |= 1, fe(t, e, n, l), e.child;
      case 14:
        return gd(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return vd(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Od(t, e, l);
      case 31:
        return ly(t, e, l);
      case 22:
        return pd(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Dn(e), n = ue(Ft), t === null ? (u = Uc(), u === null && (u = Nt, c = Rc(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= l), u = c), e.memoizedState = { parent: n, cache: u }, wc(e), Zl(e, Ft, u)) : ((t.lanes & l) !== 0 && (Hc(t, e), di(e, null, null, l), hi()), u = t.memoizedState, c = e.memoizedState, u.parent !== n ? (u = { parent: n, cache: n }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Zl(e, Ft, n)) : (n = c.cache, Zl(e, Ft, n), n !== u.cache && Dc(
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
  function gs(t, e, l, n, u) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (e0()) t.flags |= 8192;
        else
          throw Un = Cu, jc;
    } else t.flags &= -16777217;
  }
  function Cd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Q0(e))
      if (e0()) t.flags |= 8192;
      else
        throw Un = Cu, jc;
  }
  function Ku(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? fo() : 536870912, t.lanes |= e, xa |= e);
  }
  function pi(t, e) {
    if (!bt)
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
  function Ht(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e)
      for (var u = t.child; u !== null; )
        l |= u.lanes | u.childLanes, n |= u.subtreeFlags & 65011712, n |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        l |= u.lanes | u.childLanes, n |= u.subtreeFlags, n |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function ay(t, e, l) {
    var n = e.pendingProps;
    switch (Ec(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ht(e), null;
      case 1:
        return Ht(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), xl(Ft), Zt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ra(e) ? Ol(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Oc())), Ht(e), null;
      case 26:
        var u = e.type, c = e.memoizedState;
        return t === null ? (Ol(e), c !== null ? (Ht(e), Cd(e, c)) : (Ht(e), gs(
          e,
          u,
          null,
          n,
          l
        ))) : c ? c !== t.memoizedState ? (Ol(e), Ht(e), Cd(e, c)) : (Ht(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && Ol(e), Ht(e), gs(
          e,
          u,
          t,
          n,
          l
        )), null;
      case 27:
        if (nu(e), l = yt.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && Ol(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(i(166));
            return Ht(e), null;
          }
          t = $.current, ra(e) ? ch(e) : (t = H0(u, n, l), e.stateNode = t, Ol(e));
        }
        return Ht(e), null;
      case 5:
        if (nu(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && Ol(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(i(166));
            return Ht(e), null;
          }
          if (c = $.current, ra(e))
            ch(e);
          else {
            var o = cf(
              yt.current
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
            c[ae] = e, c[ge] = n;
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
        return Ht(e), gs(
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
          if (t = yt.current, ra(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, u = ie, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            t[ae] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || E0(t.nodeValue, l)), t || Ql(e, !0);
          } else
            t = cf(t).createTextNode(
              n
            ), t[ae] = e, e.stateNode = t;
        }
        return Ht(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = ra(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(i(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(557));
              t[ae] = e;
            } else
              Mn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ht(e), t = !1;
          } else
            l = Oc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(i(558));
        }
        return Ht(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = ra(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(i(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[ae] = e;
            } else
              Mn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ht(e), u = !1;
          } else
            u = Oc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        return we(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, u = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (u = n.alternate.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Ku(e, e.updateQueue), Ht(e), null);
      case 4:
        return Zt(), t === null && Ys(e.stateNode.containerInfo), Ht(e), null;
      case 10:
        return xl(e.type), Ht(e), null;
      case 19:
        if (L(Kt), n = e.memoizedState, n === null) return Ht(e), null;
        if (u = (e.flags & 128) !== 0, c = n.rendering, c === null)
          if (u) pi(n, !1);
          else {
            if (Xt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (c = Uu(t), c !== null) {
                  for (e.flags |= 128, pi(n, !1), t = c.updateQueue, e.updateQueue = t, Ku(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    nh(l, t), l = l.sibling;
                  return W(
                    Kt,
                    Kt.current & 1 | 2
                  ), bt && bl(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && Ce() > $u && (e.flags |= 128, u = !0, pi(n, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = Uu(c), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, Ku(e, t), pi(n, !0), n.tail === null && n.tailMode === "hidden" && !c.alternate && !bt)
                return Ht(e), null;
            } else
              2 * Ce() - n.renderingStartTime > $u && l !== 536870912 && (e.flags |= 128, u = !0, pi(n, !1), e.lanes = 4194304);
          n.isBackwards ? (c.sibling = e.child, e.child = c) : (t = n.last, t !== null ? t.sibling = c : e.child = c, n.last = c);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Ce(), t.sibling = null, l = Kt.current, W(
          Kt,
          u ? l & 1 | 2 : l & 1
        ), bt && bl(e, n.treeForkCount), t) : (Ht(e), null);
      case 22:
      case 23:
        return we(e), qc(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Ht(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ht(e), l = e.updateQueue, l !== null && Ku(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && L(Rn), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), xl(Ft), Ht(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, e.tag));
  }
  function iy(t, e) {
    switch (Ec(e), e.tag) {
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
          if (we(e), e.alternate === null)
            throw Error(i(340));
          Mn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (we(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(i(340));
          Mn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return L(Kt), null;
      case 4:
        return Zt(), null;
      case 10:
        return xl(e.type), null;
      case 22:
      case 23:
        return we(e), qc(), t !== null && L(Rn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return xl(Ft), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dd(t, e) {
    switch (Ec(e), e.tag) {
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
        e.memoizedState !== null && we(e);
        break;
      case 13:
        we(e);
        break;
      case 19:
        L(Kt);
        break;
      case 10:
        xl(e.type);
        break;
      case 22:
      case 23:
        we(e), qc(), t !== null && L(Rn);
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
    } catch (g) {
      Mt(e, e.return, g);
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
            var o = n.inst, g = o.destroy;
            if (g !== void 0) {
              o.destroy = void 0, u = e;
              var b = l, C = g;
              try {
                C();
              } catch (B) {
                Mt(
                  u,
                  b,
                  B
                );
              }
            }
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (B) {
      Mt(e, e.return, B);
    }
  }
  function Rd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        bh(e, l);
      } catch (n) {
        Mt(t, t.return, n);
      }
    }
  }
  function Nd(t, e, l) {
    l.props = Hn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Mt(t, e, n);
    }
  }
  function bi(t, e) {
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
      Mt(t, e, u);
    }
  }
  function ol(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (u) {
          Mt(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          Mt(t, e, u);
        }
      else l.current = null;
  }
  function Ud(t) {
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
      Mt(t, t.return, u);
    }
  }
  function vs(t, e, l) {
    try {
      var n = t.stateNode;
      Oy(n, t.type, l, e), n[ge] = e;
    } catch (u) {
      Mt(t, t.return, u);
    }
  }
  function jd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && an(t.type) || t.tag === 4;
  }
  function ps(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || jd(t.return)) return null;
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
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = vl));
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
  function wd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      ce(e, n, l), e[ae] = t, e[ge] = l;
    } catch (c) {
      Mt(t, t.return, c);
    }
  }
  var Ml = !1, Pt = !1, bs = !1, Hd = typeof WeakSet == "function" ? WeakSet : Set, le = null;
  function uy(t, e) {
    if (t = t.containerInfo, Gs = mf, t = ko(t), _c(t)) {
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
            var o = 0, g = -1, b = -1, C = 0, B = 0, Q = t, N = null;
            e: for (; ; ) {
              for (var j; Q !== l || u !== 0 && Q.nodeType !== 3 || (g = o + u), Q !== c || n !== 0 && Q.nodeType !== 3 || (b = o + n), Q.nodeType === 3 && (o += Q.nodeValue.length), (j = Q.firstChild) !== null; )
                N = Q, Q = j;
              for (; ; ) {
                if (Q === t) break e;
                if (N === l && ++C === u && (g = o), N === c && ++B === n && (b = o), (j = Q.nextSibling) !== null) break;
                Q = N, N = Q.parentNode;
              }
              Q = j;
            }
            l = g === -1 || b === -1 ? null : { start: g, end: b };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Xs = { focusedElem: t, selectionRange: l }, mf = !1, le = e; le !== null; )
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
                  var I = Hn(
                    l.type,
                    u
                  );
                  t = n.getSnapshotBeforeUpdate(
                    I,
                    c
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (at) {
                  Mt(
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
                  Ks(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ks(t);
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
  function Bd(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Dl(t, l), n & 4 && Si(5, l);
        break;
      case 1:
        if (Dl(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (o) {
              Mt(l, l.return, o);
            }
          else {
            var u = Hn(
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
              Mt(
                l,
                l.return,
                o
              );
            }
          }
        n & 64 && Rd(l), n & 512 && bi(l, l.return);
        break;
      case 3:
        if (Dl(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
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
            bh(t, e);
          } catch (o) {
            Mt(l, l.return, o);
          }
        }
        break;
      case 27:
        e === null && n & 4 && wd(l);
      case 26:
      case 5:
        Dl(t, l), e === null && n & 4 && Ud(l), n & 512 && bi(l, l.return);
        break;
      case 12:
        Dl(t, l);
        break;
      case 31:
        Dl(t, l), n & 4 && qd(t, l);
        break;
      case 13:
        Dl(t, l), n & 4 && Vd(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = my.bind(
          null,
          l
        ), wy(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || Ml, !n) {
          e = e !== null && e.memoizedState !== null || Pt, u = Ml;
          var c = Pt;
          Ml = n, (Pt = e) && !c ? Rl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Dl(t, l), Ml = u, Pt = c;
        }
        break;
      case 30:
        break;
      default:
        Dl(t, l);
    }
  }
  function Ld(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Ld(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && $f(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Bt = null, pe = !1;
  function Cl(t, e, l) {
    for (l = l.child; l !== null; )
      Yd(t, e, l), l = l.sibling;
  }
  function Yd(t, e, l) {
    if (De && typeof De.onCommitFiberUnmount == "function")
      try {
        De.onCommitFiberUnmount(Za, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Pt || ol(l, e), Cl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Pt || ol(l, e);
        var n = Bt, u = pe;
        an(l.type) && (Bt = l.stateNode, pe = !1), Cl(
          t,
          e,
          l
        ), Di(l.stateNode), Bt = n, pe = u;
        break;
      case 5:
        Pt || ol(l, e);
      case 6:
        if (n = Bt, u = pe, Bt = null, Cl(
          t,
          e,
          l
        ), Bt = n, pe = u, Bt !== null)
          if (pe)
            try {
              (Bt.nodeType === 9 ? Bt.body : Bt.nodeName === "HTML" ? Bt.ownerDocument.body : Bt).removeChild(l.stateNode);
            } catch (c) {
              Mt(
                l,
                e,
                c
              );
            }
          else
            try {
              Bt.removeChild(l.stateNode);
            } catch (c) {
              Mt(
                l,
                e,
                c
              );
            }
        break;
      case 18:
        Bt !== null && (pe ? (t = Bt, R0(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Ra(t)) : R0(Bt, l.stateNode));
        break;
      case 4:
        n = Bt, u = pe, Bt = l.stateNode.containerInfo, pe = !0, Cl(
          t,
          e,
          l
        ), Bt = n, pe = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        $l(2, l, e), Pt || $l(4, l, e), Cl(
          t,
          e,
          l
        );
        break;
      case 1:
        Pt || (ol(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && Nd(
          l,
          e,
          n
        )), Cl(
          t,
          e,
          l
        );
        break;
      case 21:
        Cl(
          t,
          e,
          l
        );
        break;
      case 22:
        Pt = (n = Pt) || l.memoizedState !== null, Cl(
          t,
          e,
          l
        ), Pt = n;
        break;
      default:
        Cl(
          t,
          e,
          l
        );
    }
  }
  function qd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ra(t);
      } catch (l) {
        Mt(e, e.return, l);
      }
    }
  }
  function Vd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ra(t);
      } catch (l) {
        Mt(e, e.return, l);
      }
  }
  function fy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Hd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Hd()), e;
      default:
        throw Error(i(435, t.tag));
    }
  }
  function ku(t, e) {
    var l = fy(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var u = yy.bind(null, t, n);
        n.then(u, u);
      }
    });
  }
  function Se(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var u = l[n], c = t, o = e, g = o;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (an(g.type)) {
                Bt = g.stateNode, pe = !1;
                break t;
              }
              break;
            case 5:
              Bt = g.stateNode, pe = !1;
              break t;
            case 3:
            case 4:
              Bt = g.stateNode.containerInfo, pe = !0;
              break t;
          }
          g = g.return;
        }
        if (Bt === null) throw Error(i(160));
        Yd(c, o, u), Bt = null, pe = !1, c = u.alternate, c !== null && (c.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Gd(e, t), e = e.sibling;
  }
  var fl = null;
  function Gd(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Se(e, t), be(t), n & 4 && ($l(3, t, t.return), Si(3, t), $l(5, t, t.return));
        break;
      case 1:
        Se(e, t), be(t), n & 512 && (Pt || l === null || ol(l, l.return)), n & 64 && Ml && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var u = fl;
        if (Se(e, t), be(t), n & 512 && (Pt || l === null || ol(l, l.return)), n & 4) {
          var c = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (n) {
                    case "title":
                      c = u.getElementsByTagName("title")[0], (!c || c[ka] || c[ae] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(n), u.head.insertBefore(
                        c,
                        u.querySelector("head > title")
                      )), ce(c, n, l), c[ae] = t, ee(c), n = c;
                      break t;
                    case "link":
                      var o = G0(
                        "link",
                        "href",
                        u
                      ).get(n + (l.href || ""));
                      if (o) {
                        for (var g = 0; g < o.length; g++)
                          if (c = o[g], c.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && c.getAttribute("rel") === (l.rel == null ? null : l.rel) && c.getAttribute("title") === (l.title == null ? null : l.title) && c.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            o.splice(g, 1);
                            break e;
                          }
                      }
                      c = u.createElement(n), ce(c, n, l), u.head.appendChild(c);
                      break;
                    case "meta":
                      if (o = G0(
                        "meta",
                        "content",
                        u
                      ).get(n + (l.content || ""))) {
                        for (g = 0; g < o.length; g++)
                          if (c = o[g], c.getAttribute("content") === (l.content == null ? null : "" + l.content) && c.getAttribute("name") === (l.name == null ? null : l.name) && c.getAttribute("property") === (l.property == null ? null : l.property) && c.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && c.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            o.splice(g, 1);
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
                X0(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = V0(
                u,
                n,
                t.memoizedProps
              );
          else
            c !== n ? (c === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : c.count--, n === null ? X0(
              u,
              t.type,
              t.stateNode
            ) : V0(
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
        Se(e, t), be(t), n & 512 && (Pt || l === null || ol(l, l.return)), l !== null && n & 4 && vs(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Se(e, t), be(t), n & 512 && (Pt || l === null || ol(l, l.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            ta(u, "");
          } catch (I) {
            Mt(t, t.return, I);
          }
        }
        n & 4 && t.stateNode != null && (u = t.memoizedProps, vs(
          t,
          u,
          l !== null ? l.memoizedProps : u
        )), n & 1024 && (bs = !0);
        break;
      case 6:
        if (Se(e, t), be(t), n & 4) {
          if (t.stateNode === null)
            throw Error(i(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (I) {
            Mt(t, t.return, I);
          }
        }
        break;
      case 3:
        if (of = null, u = fl, fl = sf(e.containerInfo), Se(e, t), fl = u, be(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ra(e.containerInfo);
          } catch (I) {
            Mt(t, t.return, I);
          }
        bs && (bs = !1, Xd(t));
        break;
      case 4:
        n = fl, fl = sf(
          t.stateNode.containerInfo
        ), Se(e, t), be(t), fl = n;
        break;
      case 12:
        Se(e, t), be(t);
        break;
      case 31:
        Se(e, t), be(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ku(t, n)));
        break;
      case 13:
        Se(e, t), be(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Wu = Ce()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ku(t, n)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var b = l !== null && l.memoizedState !== null, C = Ml, B = Pt;
        if (Ml = C || u, Pt = B || b, Se(e, t), Pt = B, Ml = C, be(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (l === null || b || Ml || Pt || Bn(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                b = l = e;
                try {
                  if (c = b.stateNode, u)
                    o = c.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                  else {
                    g = b.stateNode;
                    var Q = b.memoizedProps.style, N = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                    g.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (I) {
                  Mt(b, b.return, I);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                b = e;
                try {
                  b.stateNode.nodeValue = u ? "" : b.memoizedProps;
                } catch (I) {
                  Mt(b, b.return, I);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                b = e;
                try {
                  var j = b.stateNode;
                  u ? N0(j, !0) : N0(b.stateNode, !1);
                } catch (I) {
                  Mt(b, b.return, I);
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
        Se(e, t), be(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ku(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Se(e, t), be(t);
    }
  }
  function be(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (jd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(i(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode, c = ps(t);
            Ju(t, c, u);
            break;
          case 5:
            var o = l.stateNode;
            l.flags & 32 && (ta(o, ""), l.flags &= -33);
            var g = ps(t);
            Ju(t, g, o);
            break;
          case 3:
          case 4:
            var b = l.stateNode.containerInfo, C = ps(t);
            Ss(
              t,
              C,
              b
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (B) {
        Mt(t, t.return, B);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Xd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Xd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Dl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Bd(t, e.alternate, e), e = e.sibling;
  }
  function Bn(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $l(4, e, e.return), Bn(e);
          break;
        case 1:
          ol(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Nd(
            e,
            e.return,
            l
          ), Bn(e);
          break;
        case 27:
          Di(e.stateNode);
        case 26:
        case 5:
          ol(e, e.return), Bn(e);
          break;
        case 22:
          e.memoizedState === null && Bn(e);
          break;
        case 30:
          Bn(e);
          break;
        default:
          Bn(e);
      }
      t = t.sibling;
    }
  }
  function Rl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, u = t, c = e, o = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Rl(
            u,
            c,
            l
          ), Si(4, c);
          break;
        case 1:
          if (Rl(
            u,
            c,
            l
          ), n = c, u = n.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (C) {
              Mt(n, n.return, C);
            }
          if (n = c, u = n.updateQueue, u !== null) {
            var g = n.stateNode;
            try {
              var b = u.shared.hiddenCallbacks;
              if (b !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < b.length; u++)
                  Sh(b[u], g);
            } catch (C) {
              Mt(n, n.return, C);
            }
          }
          l && o & 64 && Rd(c), bi(c, c.return);
          break;
        case 27:
          wd(c);
        case 26:
        case 5:
          Rl(
            u,
            c,
            l
          ), l && n === null && o & 4 && Ud(c), bi(c, c.return);
          break;
        case 12:
          Rl(
            u,
            c,
            l
          );
          break;
        case 31:
          Rl(
            u,
            c,
            l
          ), l && o & 4 && qd(u, c);
          break;
        case 13:
          Rl(
            u,
            c,
            l
          ), l && o & 4 && Vd(u, c);
          break;
        case 22:
          c.memoizedState === null && Rl(
            u,
            c,
            l
          ), bi(c, c.return);
          break;
        case 30:
          break;
        default:
          Rl(
            u,
            c,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Ts(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && fi(l));
  }
  function xs(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && fi(t));
  }
  function cl(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Qd(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function Qd(t, e, l, n) {
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
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && fi(t)));
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
            var c = e.memoizedProps, o = c.id, g = c.onPostCommit;
            typeof g == "function" && g(
              o,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (b) {
            Mt(e, e.return, b);
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
        ) : Ti(t, e) : c._visibility & 2 ? cl(
          t,
          e,
          l,
          n
        ) : (c._visibility |= 2, Sa(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Ts(o, e);
        break;
      case 24:
        cl(
          t,
          e,
          l,
          n
        ), u & 2048 && xs(e.alternate, e);
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
  function Sa(t, e, l, n, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var c = t, o = e, g = l, b = n, C = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Sa(
            c,
            o,
            g,
            b,
            u
          ), Si(8, o);
          break;
        case 23:
          break;
        case 22:
          var B = o.stateNode;
          o.memoizedState !== null ? B._visibility & 2 ? Sa(
            c,
            o,
            g,
            b,
            u
          ) : Ti(
            c,
            o
          ) : (B._visibility |= 2, Sa(
            c,
            o,
            g,
            b,
            u
          )), u && C & 2048 && Ts(
            o.alternate,
            o
          );
          break;
        case 24:
          Sa(
            c,
            o,
            g,
            b,
            u
          ), u && C & 2048 && xs(o.alternate, o);
          break;
        default:
          Sa(
            c,
            o,
            g,
            b,
            u
          );
      }
      e = e.sibling;
    }
  }
  function Ti(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, u = n.flags;
        switch (n.tag) {
          case 22:
            Ti(l, n), u & 2048 && Ts(
              n.alternate,
              n
            );
            break;
          case 24:
            Ti(l, n), u & 2048 && xs(n.alternate, n);
            break;
          default:
            Ti(l, n);
        }
        e = e.sibling;
      }
  }
  var xi = 8192;
  function ba(t, e, l) {
    if (t.subtreeFlags & xi)
      for (t = t.child; t !== null; )
        Zd(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Zd(t, e, l) {
    switch (t.tag) {
      case 26:
        ba(
          t,
          e,
          l
        ), t.flags & xi && t.memoizedState !== null && Jy(
          l,
          fl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ba(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = fl;
        fl = sf(t.stateNode.containerInfo), ba(
          t,
          e,
          l
        ), fl = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = xi, xi = 16777216, ba(
          t,
          e,
          l
        ), xi = n) : ba(
          t,
          e,
          l
        ));
        break;
      default:
        ba(
          t,
          e,
          l
        );
    }
  }
  function Kd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ai(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          le = n, kd(
            n,
            t
          );
        }
      Kd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Jd(t), t = t.sibling;
  }
  function Jd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ai(t), t.flags & 2048 && $l(9, t, t.return);
        break;
      case 3:
        Ai(t);
        break;
      case 12:
        Ai(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Fu(t)) : Ai(t);
        break;
      default:
        Ai(t);
    }
  }
  function Fu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          le = n, kd(
            n,
            t
          );
        }
      Kd(t);
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
  function kd(t, e) {
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
          fi(l.memoizedState.cache);
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
  var cy = {
    getCacheForType: function(t) {
      var e = ue(Ft), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return ue(Ft).controller.signal;
    }
  }, sy = typeof WeakMap == "function" ? WeakMap : Map, Et = 0, Nt = null, gt = null, pt = 0, Ot = 0, He = null, Pl = !1, Ta = !1, As = !1, Nl = 0, Xt = 0, Il = 0, Ln = 0, Es = 0, Be = 0, xa = 0, Ei = null, Te = null, zs = !1, Wu = 0, Fd = 0, $u = 1 / 0, Pu = null, tn = null, te = 0, en = null, Aa = null, Ul = 0, Os = 0, Ms = null, Wd = null, zi = 0, Cs = null;
  function Le() {
    return (Et & 2) !== 0 && pt !== 0 ? pt & -pt : R.T !== null ? ws() : oo();
  }
  function $d() {
    if (Be === 0)
      if ((pt & 536870912) === 0 || bt) {
        var t = uu;
        uu <<= 1, (uu & 3932160) === 0 && (uu = 262144), Be = t;
      } else Be = 536870912;
    return t = je.current, t !== null && (t.flags |= 32), Be;
  }
  function xe(t, e, l) {
    (t === Nt && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (Ea(t, 0), ln(
      t,
      pt,
      Be,
      !1
    )), Ja(t, l), ((Et & 2) === 0 || t !== Nt) && (t === Nt && ((Et & 2) === 0 && (Ln |= l), Xt === 4 && ln(
      t,
      pt,
      Be,
      !1
    )), hl(t));
  }
  function Pd(t, e, l) {
    if ((Et & 6) !== 0) throw Error(i(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ka(t, e), u = n ? hy(t, e) : Rs(t, e, !0), c = n;
    do {
      if (u === 0) {
        Ta && !n && ln(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, c && !ry(l)) {
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
              var g = t;
              u = Ei;
              var b = g.current.memoizedState.isDehydrated;
              if (b && (Ea(g, o).flags |= 256), o = Rs(
                g,
                o,
                !1
              ), o !== 2) {
                if (As && !b) {
                  g.errorRecoveryDisabledLanes |= c, Ln |= c, u = 4;
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
                Be,
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
          if ((e & 62914560) === e && (u = Wu + 300 - Ce(), 10 < u)) {
            if (ln(
              n,
              e,
              Be,
              !Pl
            ), cu(n, 0, !0) !== 0) break t;
            Ul = e, n.timeoutHandle = C0(
              Id.bind(
                null,
                n,
                l,
                Te,
                Pu,
                zs,
                e,
                Be,
                Ln,
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
          Id(
            n,
            l,
            Te,
            Pu,
            zs,
            e,
            Be,
            Ln,
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
  function Id(t, e, l, n, u, c, o, g, b, C, B, Q, N, j) {
    if (t.timeoutHandle = -1, Q = e.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
      Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: vl
      }, Zd(
        e,
        c,
        Q
      );
      var I = (c & 62914560) === c ? Wu - Ce() : (c & 4194048) === c ? Fd - Ce() : 0;
      if (I = ky(
        Q,
        I
      ), I !== null) {
        Ul = c, t.cancelPendingCommit = I(
          f0.bind(
            null,
            t,
            e,
            c,
            l,
            n,
            u,
            o,
            g,
            b,
            B,
            Q,
            null,
            N,
            j
          )
        ), ln(t, c, o, !C);
        return;
      }
    }
    f0(
      t,
      e,
      c,
      l,
      n,
      u,
      o,
      g,
      b
    );
  }
  function ry(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var u = l[n], c = u.getSnapshot;
          u = u.value;
          try {
            if (!Ne(c(), u)) return !1;
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
    e &= ~Es, e &= ~Ln, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var c = 31 - Re(u), o = 1 << c;
      n[c] = -1, u &= ~o;
    }
    l !== 0 && co(t, l, e);
  }
  function Iu() {
    return (Et & 6) === 0 ? (Oi(0), !1) : !0;
  }
  function Ds() {
    if (gt !== null) {
      if (Ot === 0)
        var t = gt.return;
      else
        t = gt, Tl = Cn = null, Kc(t), ma = null, si = 0, t = gt;
      for (; t !== null; )
        Dd(t.alternate, t), t = t.return;
      gt = null;
    }
  }
  function Ea(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Dy(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Ul = 0, Ds(), Nt = t, gt = l = Sl(t.current, null), pt = e, Ot = 0, He = null, Pl = !1, Ta = Ka(t, e), As = !1, xa = Be = Es = Ln = Il = Xt = 0, Te = Ei = null, zs = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var u = 31 - Re(n), c = 1 << u;
        e |= t[u], n &= ~c;
      }
    return Nl = e, Su(), l;
  }
  function t0(t, e) {
    _t = null, R.H = gi, e === _a || e === Mu ? (e = yh(), Ot = 3) : e === jc ? (e = yh(), Ot = 4) : Ot = e === cs ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, He = e, gt === null && (Xt = 1, Gu(
      t,
      Fe(e, t.current)
    ));
  }
  function e0() {
    var t = je.current;
    return t === null ? !0 : (pt & 4194048) === pt ? Ie === null : (pt & 62914560) === pt || (pt & 536870912) !== 0 ? t === Ie : !1;
  }
  function l0() {
    var t = R.H;
    return R.H = gi, t === null ? gi : t;
  }
  function n0() {
    var t = R.A;
    return R.A = cy, t;
  }
  function tf() {
    Xt = 4, Pl || (pt & 4194048) !== pt && je.current !== null || (Ta = !0), (Il & 134217727) === 0 && (Ln & 134217727) === 0 || Nt === null || ln(
      Nt,
      pt,
      Be,
      !1
    );
  }
  function Rs(t, e, l) {
    var n = Et;
    Et |= 2;
    var u = l0(), c = n0();
    (Nt !== t || pt !== e) && (Pu = null, Ea(t, e)), e = !1;
    var o = Xt;
    t: do
      try {
        if (Ot !== 0 && gt !== null) {
          var g = gt, b = He;
          switch (Ot) {
            case 8:
              Ds(), o = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              je.current === null && (e = !0);
              var C = Ot;
              if (Ot = 0, He = null, za(t, g, b, C), l && Ta) {
                o = 0;
                break t;
              }
              break;
            default:
              C = Ot, Ot = 0, He = null, za(t, g, b, C);
          }
        }
        oy(), o = Xt;
        break;
      } catch (B) {
        t0(t, B);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Tl = Cn = null, Et = n, R.H = u, R.A = c, gt === null && (Nt = null, pt = 0, Su()), o;
  }
  function oy() {
    for (; gt !== null; ) a0(gt);
  }
  function hy(t, e) {
    var l = Et;
    Et |= 2;
    var n = l0(), u = n0();
    Nt !== t || pt !== e ? (Pu = null, $u = Ce() + 500, Ea(t, e)) : Ta = Ka(
      t,
      e
    );
    t: do
      try {
        if (Ot !== 0 && gt !== null) {
          e = gt;
          var c = He;
          e: switch (Ot) {
            case 1:
              Ot = 0, He = null, za(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (_h(c)) {
                Ot = 0, He = null, i0(e);
                break;
              }
              e = function() {
                Ot !== 2 && Ot !== 9 || Nt !== t || (Ot = 7), hl(t);
              }, c.then(e, e);
              break t;
            case 3:
              Ot = 7;
              break t;
            case 4:
              Ot = 5;
              break t;
            case 7:
              _h(c) ? (Ot = 0, He = null, i0(e)) : (Ot = 0, He = null, za(t, e, c, 7));
              break;
            case 5:
              var o = null;
              switch (gt.tag) {
                case 26:
                  o = gt.memoizedState;
                case 5:
                case 27:
                  var g = gt;
                  if (o ? Q0(o) : g.stateNode.complete) {
                    Ot = 0, He = null;
                    var b = g.sibling;
                    if (b !== null) gt = b;
                    else {
                      var C = g.return;
                      C !== null ? (gt = C, ef(C)) : gt = null;
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
              Ds(), Xt = 6;
              break t;
            default:
              throw Error(i(462));
          }
        }
        dy();
        break;
      } catch (B) {
        t0(t, B);
      }
    while (!0);
    return Tl = Cn = null, R.H = n, R.A = u, Et = l, gt !== null ? 0 : (Nt = null, pt = 0, Su(), Xt);
  }
  function dy() {
    for (; gt !== null && !Hm(); )
      a0(gt);
  }
  function a0(t) {
    var e = Md(t.alternate, t, Nl);
    t.memoizedProps = t.pendingProps, e === null ? ef(t) : gt = e;
  }
  function i0(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Td(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          pt
        );
        break;
      case 11:
        e = Td(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          pt
        );
        break;
      case 5:
        Kc(e);
      default:
        Dd(l, e), e = gt = nh(e, Nl), e = Md(l, e, Nl);
    }
    t.memoizedProps = t.pendingProps, e === null ? ef(t) : gt = e;
  }
  function za(t, e, l, n) {
    Tl = Cn = null, Kc(e), ma = null, si = 0;
    var u = e.return;
    try {
      if (ey(
        t,
        u,
        e,
        l,
        pt
      )) {
        Xt = 1, Gu(
          t,
          Fe(l, t.current)
        ), gt = null;
        return;
      }
    } catch (c) {
      if (u !== null) throw gt = u, c;
      Xt = 1, Gu(
        t,
        Fe(l, t.current)
      ), gt = null;
      return;
    }
    e.flags & 32768 ? (bt || n === 1 ? t = !0 : Ta || (pt & 536870912) !== 0 ? t = !1 : (Pl = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = je.current, n !== null && n.tag === 13 && (n.flags |= 16384))), u0(e, t)) : ef(e);
  }
  function ef(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        u0(
          e,
          Pl
        );
        return;
      }
      t = e.return;
      var l = ay(
        e.alternate,
        e,
        Nl
      );
      if (l !== null) {
        gt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        gt = e;
        return;
      }
      gt = e = t;
    } while (e !== null);
    Xt === 0 && (Xt = 5);
  }
  function u0(t, e) {
    do {
      var l = iy(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, gt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        gt = t;
        return;
      }
      gt = t = l;
    } while (t !== null);
    Xt = 6, gt = null;
  }
  function f0(t, e, l, n, u, c, o, g, b) {
    t.cancelPendingCommit = null;
    do
      lf();
    while (te !== 0);
    if ((Et & 6) !== 0) throw Error(i(327));
    if (e !== null) {
      if (e === t.current) throw Error(i(177));
      if (c = e.lanes | e.childLanes, c |= pc, Km(
        t,
        l,
        c,
        o,
        g,
        b
      ), t === Nt && (gt = Nt = null, pt = 0), Aa = e, en = t, Ul = l, Os = c, Ms = u, Wd = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, gy(au, function() {
        return h0(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null, u = k.p, k.p = 2, o = Et, Et |= 4;
        try {
          uy(t, e, l);
        } finally {
          Et = o, k.p = u, R.T = n;
        }
      }
      te = 1, c0(), s0(), r0();
    }
  }
  function c0() {
    if (te === 1) {
      te = 0;
      var t = en, e = Aa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = R.T, R.T = null;
        var n = k.p;
        k.p = 2;
        var u = Et;
        Et |= 4;
        try {
          Gd(e, t);
          var c = Xs, o = ko(t.containerInfo), g = c.focusedElem, b = c.selectionRange;
          if (o !== g && g && g.ownerDocument && Jo(
            g.ownerDocument.documentElement,
            g
          )) {
            if (b !== null && _c(g)) {
              var C = b.start, B = b.end;
              if (B === void 0 && (B = C), "selectionStart" in g)
                g.selectionStart = C, g.selectionEnd = Math.min(
                  B,
                  g.value.length
                );
              else {
                var Q = g.ownerDocument || document, N = Q && Q.defaultView || window;
                if (N.getSelection) {
                  var j = N.getSelection(), I = g.textContent.length, at = Math.min(b.start, I), Rt = b.end === void 0 ? at : Math.min(b.end, I);
                  !j.extend && at > Rt && (o = Rt, Rt = at, at = o);
                  var z = Ko(
                    g,
                    at
                  ), x = Ko(
                    g,
                    Rt
                  );
                  if (z && x && (j.rangeCount !== 1 || j.anchorNode !== z.node || j.anchorOffset !== z.offset || j.focusNode !== x.node || j.focusOffset !== x.offset)) {
                    var M = Q.createRange();
                    M.setStart(z.node, z.offset), j.removeAllRanges(), at > Rt ? (j.addRange(M), j.extend(x.node, x.offset)) : (M.setEnd(x.node, x.offset), j.addRange(M));
                  }
                }
              }
            }
            for (Q = [], j = g; j = j.parentNode; )
              j.nodeType === 1 && Q.push({
                element: j,
                left: j.scrollLeft,
                top: j.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < Q.length; g++) {
              var V = Q[g];
              V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
            }
          }
          mf = !!Gs, Xs = Gs = null;
        } finally {
          Et = u, k.p = n, R.T = l;
        }
      }
      t.current = e, te = 2;
    }
  }
  function s0() {
    if (te === 2) {
      te = 0;
      var t = en, e = Aa, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = R.T, R.T = null;
        var n = k.p;
        k.p = 2;
        var u = Et;
        Et |= 4;
        try {
          Bd(t, e.alternate, e);
        } finally {
          Et = u, k.p = n, R.T = l;
        }
      }
      te = 3;
    }
  }
  function r0() {
    if (te === 4 || te === 3) {
      te = 0, Bm();
      var t = en, e = Aa, l = Ul, n = Wd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? te = 5 : (te = 0, Aa = en = null, o0(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (tn = null), Ff(l), e = e.stateNode, De && typeof De.onCommitFiberRoot == "function")
        try {
          De.onCommitFiberRoot(
            Za,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = R.T, u = k.p, k.p = 2, R.T = null;
        try {
          for (var c = t.onRecoverableError, o = 0; o < n.length; o++) {
            var g = n[o];
            c(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          R.T = e, k.p = u;
        }
      }
      (Ul & 3) !== 0 && lf(), hl(t), u = t.pendingLanes, (l & 261930) !== 0 && (u & 42) !== 0 ? t === Cs ? zi++ : (zi = 0, Cs = t) : zi = 0, Oi(0);
    }
  }
  function o0(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, fi(e)));
  }
  function lf() {
    return c0(), s0(), r0(), h0();
  }
  function h0() {
    if (te !== 5) return !1;
    var t = en, e = Os;
    Os = 0;
    var l = Ff(Ul), n = R.T, u = k.p;
    try {
      k.p = 32 > l ? 32 : l, R.T = null, l = Ms, Ms = null;
      var c = en, o = Ul;
      if (te = 0, Aa = en = null, Ul = 0, (Et & 6) !== 0) throw Error(i(331));
      var g = Et;
      if (Et |= 4, Jd(c.current), Qd(
        c,
        c.current,
        o,
        l
      ), Et = g, Oi(0, !1), De && typeof De.onPostCommitFiberRoot == "function")
        try {
          De.onPostCommitFiberRoot(Za, c);
        } catch {
        }
      return !0;
    } finally {
      k.p = u, R.T = n, o0(t, e);
    }
  }
  function d0(t, e, l) {
    e = Fe(l, e), e = fs(t.stateNode, e, 2), t = kl(t, e, 2), t !== null && (Ja(t, 2), hl(t));
  }
  function Mt(t, e, l) {
    if (t.tag === 3)
      d0(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          d0(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (tn === null || !tn.has(n))) {
            t = Fe(l, t), l = _d(2), n = kl(e, l, 2), n !== null && (md(
              l,
              n,
              e,
              t
            ), Ja(n, 2), hl(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Ns(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new sy();
      var u = /* @__PURE__ */ new Set();
      n.set(e, u);
    } else
      u = n.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), n.set(e, u));
    u.has(l) || (As = !0, u.add(l), t = _y.bind(null, t, e, l), e.then(t, t));
  }
  function _y(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Nt === t && (pt & l) === l && (Xt === 4 || Xt === 3 && (pt & 62914560) === pt && 300 > Ce() - Wu ? (Et & 2) === 0 && Ea(t, 0) : Es |= l, xa === pt && (xa = 0)), hl(t);
  }
  function _0(t, e) {
    e === 0 && (e = fo()), t = zn(t, e), t !== null && (Ja(t, e), hl(t));
  }
  function my(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), _0(t, l);
  }
  function yy(t, e) {
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
    n !== null && n.delete(e), _0(t, l);
  }
  function gy(t, e) {
    return Zf(t, e);
  }
  var nf = null, Oa = null, Us = !1, af = !1, js = !1, nn = 0;
  function hl(t) {
    t !== Oa && t.next === null && (Oa === null ? nf = Oa = t : Oa = Oa.next = t), af = !0, Us || (Us = !0, py());
  }
  function Oi(t, e) {
    if (!js && af) {
      js = !0;
      do
        for (var l = !1, n = nf; n !== null; ) {
          if (t !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var o = n.suspendedLanes, g = n.pingedLanes;
              c = (1 << 31 - Re(42 | t) + 1) - 1, c &= u & ~(o & ~g), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (l = !0, v0(n, c));
          } else
            c = pt, c = cu(
              n,
              n === Nt ? c : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (c & 3) === 0 || Ka(n, c) || (l = !0, v0(n, c));
          n = n.next;
        }
      while (l);
      js = !1;
    }
  }
  function vy() {
    m0();
  }
  function m0() {
    af = Us = !1;
    var t = 0;
    nn !== 0 && Cy() && (t = nn);
    for (var e = Ce(), l = null, n = nf; n !== null; ) {
      var u = n.next, c = y0(n, e);
      c === 0 ? (n.next = null, l === null ? nf = u : l.next = u, u === null && (Oa = l)) : (l = n, (t !== 0 || (c & 3) !== 0) && (af = !0)), n = u;
    }
    te !== 0 && te !== 5 || Oi(t), nn !== 0 && (nn = 0);
  }
  function y0(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, u = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var o = 31 - Re(c), g = 1 << o, b = u[o];
      b === -1 ? ((g & l) === 0 || (g & n) !== 0) && (u[o] = Zm(g, e)) : b <= e && (t.expiredLanes |= g), c &= ~g;
    }
    if (e = Nt, l = pt, l = cu(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && Kf(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Ka(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && Kf(n), Ff(l)) {
        case 2:
        case 8:
          l = io;
          break;
        case 32:
          l = au;
          break;
        case 268435456:
          l = uo;
          break;
        default:
          l = au;
      }
      return n = g0.bind(null, t), l = Zf(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && Kf(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function g0(t, e) {
    if (te !== 0 && te !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (lf() && t.callbackNode !== l)
      return null;
    var n = pt;
    return n = cu(
      t,
      t === Nt ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (Pd(t, n, e), y0(t, Ce()), t.callbackNode != null && t.callbackNode === l ? g0.bind(null, t) : null);
  }
  function v0(t, e) {
    if (lf()) return null;
    Pd(t, e, !0);
  }
  function py() {
    Ry(function() {
      (Et & 6) !== 0 ? Zf(
        ao,
        vy
      ) : m0();
    });
  }
  function ws() {
    if (nn === 0) {
      var t = ha;
      t === 0 && (t = iu, iu <<= 1, (iu & 261888) === 0 && (iu = 256)), nn = t;
    }
    return nn;
  }
  function p0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : hu("" + t);
  }
  function S0(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Sy(t, e, l, n, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var c = p0(
        (u[ge] || null).action
      ), o = n.submitter;
      o && (e = (e = o[ge] || null) ? p0(e.formAction) : o.getAttribute("formAction"), e !== null && (c = e, o = null));
      var g = new yu(
        "action",
        "action",
        null,
        n,
        u
      );
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (nn !== 0) {
                  var b = o ? S0(u, o) : new FormData(u);
                  es(
                    l,
                    {
                      pending: !0,
                      data: b,
                      method: u.method,
                      action: c
                    },
                    null,
                    b
                  );
                }
              } else
                typeof c == "function" && (g.preventDefault(), b = o ? S0(u, o) : new FormData(u), es(
                  l,
                  {
                    pending: !0,
                    data: b,
                    method: u.method,
                    action: c
                  },
                  c,
                  b
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Hs = 0; Hs < vc.length; Hs++) {
    var Bs = vc[Hs], by = Bs.toLowerCase(), Ty = Bs[0].toUpperCase() + Bs.slice(1);
    ul(
      by,
      "on" + Ty
    );
  }
  ul($o, "onAnimationEnd"), ul(Po, "onAnimationIteration"), ul(Io, "onAnimationStart"), ul("dblclick", "onDoubleClick"), ul("focusin", "onFocus"), ul("focusout", "onBlur"), ul(L1, "onTransitionRun"), ul(Y1, "onTransitionStart"), ul(q1, "onTransitionCancel"), ul(th, "onTransitionEnd"), Pn("onMouseEnter", ["mouseout", "mouseover"]), Pn("onMouseLeave", ["mouseout", "mouseover"]), Pn("onPointerEnter", ["pointerout", "pointerover"]), Pn("onPointerLeave", ["pointerout", "pointerover"]), Tn(
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
  var Mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), xy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mi)
  );
  function b0(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], u = n.event;
      n = n.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var o = n.length - 1; 0 <= o; o--) {
            var g = n[o], b = g.instance, C = g.currentTarget;
            if (g = g.listener, b !== c && u.isPropagationStopped())
              break t;
            c = g, u.currentTarget = C;
            try {
              c(u);
            } catch (B) {
              pu(B);
            }
            u.currentTarget = null, c = b;
          }
        else
          for (o = 0; o < n.length; o++) {
            if (g = n[o], b = g.instance, C = g.currentTarget, g = g.listener, b !== c && u.isPropagationStopped())
              break t;
            c = g, u.currentTarget = C;
            try {
              c(u);
            } catch (B) {
              pu(B);
            }
            u.currentTarget = null, c = b;
          }
      }
    }
  }
  function vt(t, e) {
    var l = e[Wf];
    l === void 0 && (l = e[Wf] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (T0(e, t, 2, !1), l.add(n));
  }
  function Ls(t, e, l) {
    var n = 0;
    e && (n |= 4), T0(
      l,
      t,
      n,
      e
    );
  }
  var uf = "_reactListening" + Math.random().toString(36).slice(2);
  function Ys(t) {
    if (!t[uf]) {
      t[uf] = !0, mo.forEach(function(l) {
        l !== "selectionchange" && (xy.has(l) || Ls(l, !1, t), Ls(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[uf] || (e[uf] = !0, Ls("selectionchange", !1, e));
    }
  }
  function T0(t, e, l, n) {
    switch ($0(e)) {
      case 2:
        var u = $y;
        break;
      case 8:
        u = Py;
        break;
      default:
        u = tr;
    }
    l = u.bind(
      null,
      e,
      l,
      t
    ), u = void 0, !ic || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), n ? u !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, l, !0) : u !== void 0 ? t.addEventListener(e, l, {
      passive: u
    }) : t.addEventListener(e, l, !1);
  }
  function qs(t, e, l, n, u) {
    var c = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
          var g = n.stateNode.containerInfo;
          if (g === u) break;
          if (o === 4)
            for (o = n.return; o !== null; ) {
              var b = o.tag;
              if ((b === 3 || b === 4) && o.stateNode.containerInfo === u)
                return;
              o = o.return;
            }
          for (; g !== null; ) {
            if (o = Fn(g), o === null) return;
            if (b = o.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              n = c = o;
              continue t;
            }
            g = g.parentNode;
          }
        }
        n = n.return;
      }
    Oo(function() {
      var C = c, B = nc(l), Q = [];
      t: {
        var N = eh.get(t);
        if (N !== void 0) {
          var j = yu, I = t;
          switch (t) {
            case "keypress":
              if (_u(l) === 0) break t;
            case "keydown":
            case "keyup":
              j = y1;
              break;
            case "focusin":
              I = "focus", j = sc;
              break;
            case "focusout":
              I = "blur", j = sc;
              break;
            case "beforeblur":
            case "afterblur":
              j = sc;
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
              j = Do;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = a1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = p1;
              break;
            case $o:
            case Po:
            case Io:
              j = f1;
              break;
            case th:
              j = b1;
              break;
            case "scroll":
            case "scrollend":
              j = l1;
              break;
            case "wheel":
              j = x1;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = s1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = No;
              break;
            case "toggle":
            case "beforetoggle":
              j = E1;
          }
          var at = (e & 4) !== 0, Rt = !at && (t === "scroll" || t === "scrollend"), z = at ? N !== null ? N + "Capture" : null : N;
          at = [];
          for (var x = C, M; x !== null; ) {
            var V = x;
            if (M = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || M === null || z === null || (V = Wa(x, z), V != null && at.push(
              Ci(x, V, M)
            )), Rt) break;
            x = x.return;
          }
          0 < at.length && (N = new j(
            N,
            I,
            null,
            l,
            B
          ), Q.push({ event: N, listeners: at }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", j = t === "mouseout" || t === "pointerout", N && l !== lc && (I = l.relatedTarget || l.fromElement) && (Fn(I) || I[kn]))
            break t;
          if ((j || N) && (N = B.window === B ? B : (N = B.ownerDocument) ? N.defaultView || N.parentWindow : window, j ? (I = l.relatedTarget || l.toElement, j = C, I = I ? Fn(I) : null, I !== null && (Rt = r(I), at = I.tag, I !== Rt || at !== 5 && at !== 27 && at !== 6) && (I = null)) : (j = null, I = C), j !== I)) {
            if (at = Do, V = "onMouseLeave", z = "onMouseEnter", x = "mouse", (t === "pointerout" || t === "pointerover") && (at = No, V = "onPointerLeave", z = "onPointerEnter", x = "pointer"), Rt = j == null ? N : Fa(j), M = I == null ? N : Fa(I), N = new at(
              V,
              x + "leave",
              j,
              l,
              B
            ), N.target = Rt, N.relatedTarget = M, V = null, Fn(B) === C && (at = new at(
              z,
              x + "enter",
              I,
              l,
              B
            ), at.target = M, at.relatedTarget = Rt, V = at), Rt = V, j && I)
              e: {
                for (at = Ay, z = j, x = I, M = 0, V = z; V; V = at(V))
                  M++;
                V = 0;
                for (var et = x; et; et = at(et))
                  V++;
                for (; 0 < M - V; )
                  z = at(z), M--;
                for (; 0 < V - M; )
                  x = at(x), V--;
                for (; M--; ) {
                  if (z === x || x !== null && z === x.alternate) {
                    at = z;
                    break e;
                  }
                  z = at(z), x = at(x);
                }
                at = null;
              }
            else at = null;
            j !== null && x0(
              Q,
              N,
              j,
              at,
              !1
            ), I !== null && Rt !== null && x0(
              Q,
              Rt,
              I,
              at,
              !0
            );
          }
        }
        t: {
          if (N = C ? Fa(C) : window, j = N.nodeName && N.nodeName.toLowerCase(), j === "select" || j === "input" && N.type === "file")
            var xt = qo;
          else if (Lo(N))
            if (Vo)
              xt = w1;
            else {
              xt = U1;
              var tt = N1;
            }
          else
            j = N.nodeName, !j || j.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? C && ec(C.elementType) && (xt = qo) : xt = j1;
          if (xt && (xt = xt(t, C))) {
            Yo(
              Q,
              xt,
              l,
              B
            );
            break t;
          }
          tt && tt(t, N, C), t === "focusout" && C && N.type === "number" && C.memoizedProps.value != null && tc(N, "number", N.value);
        }
        switch (tt = C ? Fa(C) : window, t) {
          case "focusin":
            (Lo(tt) || tt.contentEditable === "true") && (aa = tt, mc = C, ai = null);
            break;
          case "focusout":
            ai = mc = aa = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, Fo(Q, l, B);
            break;
          case "selectionchange":
            if (B1) break;
          case "keydown":
          case "keyup":
            Fo(Q, l, B);
        }
        var mt;
        if (oc)
          t: {
            switch (t) {
              case "compositionstart":
                var St = "onCompositionStart";
                break t;
              case "compositionend":
                St = "onCompositionEnd";
                break t;
              case "compositionupdate":
                St = "onCompositionUpdate";
                break t;
            }
            St = void 0;
          }
        else
          na ? Ho(t, l) && (St = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (St = "onCompositionStart");
        St && (Uo && l.locale !== "ko" && (na || St !== "onCompositionStart" ? St === "onCompositionEnd" && na && (mt = Mo()) : (Vl = B, uc = "value" in Vl ? Vl.value : Vl.textContent, na = !0)), tt = ff(C, St), 0 < tt.length && (St = new Ro(
          St,
          t,
          null,
          l,
          B
        ), Q.push({ event: St, listeners: tt }), mt ? St.data = mt : (mt = Bo(l), mt !== null && (St.data = mt)))), (mt = O1 ? M1(t, l) : C1(t, l)) && (St = ff(C, "onBeforeInput"), 0 < St.length && (tt = new Ro(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          B
        ), Q.push({
          event: tt,
          listeners: St
        }), tt.data = mt)), Sy(
          Q,
          t,
          C,
          l,
          B
        );
      }
      b0(Q, e);
    });
  }
  function Ci(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function ff(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var u = t, c = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = Wa(t, l), u != null && n.unshift(
        Ci(t, u, c)
      ), u = Wa(t, e), u != null && n.push(
        Ci(t, u, c)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function Ay(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function x0(t, e, l, n, u) {
    for (var c = e._reactName, o = []; l !== null && l !== n; ) {
      var g = l, b = g.alternate, C = g.stateNode;
      if (g = g.tag, b !== null && b === n) break;
      g !== 5 && g !== 26 && g !== 27 || C === null || (b = C, u ? (C = Wa(l, c), C != null && o.unshift(
        Ci(l, C, b)
      )) : u || (C = Wa(l, c), C != null && o.push(
        Ci(l, C, b)
      ))), l = l.return;
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
  }
  var Ey = /\r\n?/g, zy = /\u0000|\uFFFD/g;
  function A0(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ey, `
`).replace(zy, "");
  }
  function E0(t, e) {
    return e = A0(e), A0(t) === e;
  }
  function Dt(t, e, l, n, u, c) {
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
        Eo(t, n, c);
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
          typeof c == "function" && (l === "formAction" ? (e !== "input" && Dt(t, e, "name", u.name, u, null), Dt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Dt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Dt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Dt(t, e, "encType", u.encType, u, null), Dt(t, e, "method", u.method, u, null), Dt(t, e, "target", u.target, u, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = hu("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = vl);
        break;
      case "onScroll":
        n != null && vt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && vt("scrollend", t);
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
        vt("beforetoggle", t), vt("toggle", t), su(t, "popover", n);
        break;
      case "xlinkActuate":
        gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        gl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        gl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        gl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        gl(
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = t1.get(l) || l, su(t, l, n));
    }
  }
  function Vs(t, e, l, n, u, c) {
    switch (l) {
      case "style":
        Eo(t, n, c);
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
        n != null && vt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && vt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = vl);
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
        if (!yo.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (u = l.endsWith("Capture"), e = l.slice(2, u ? l.length - 7 : void 0), c = t[ge] || null, c = c != null ? c[l] : null, typeof c == "function" && t.removeEventListener(e, c, u), typeof n == "function")) {
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
        vt("error", t), vt("load", t);
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
                  Dt(t, e, c, o, l, null);
              }
          }
        u && Dt(t, e, "srcSet", l.srcSet, l, null), n && Dt(t, e, "src", l.src, l, null);
        return;
      case "input":
        vt("invalid", t);
        var g = c = o = u = null, b = null, C = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var B = l[n];
            if (B != null)
              switch (n) {
                case "name":
                  u = B;
                  break;
                case "type":
                  o = B;
                  break;
                case "checked":
                  b = B;
                  break;
                case "defaultChecked":
                  C = B;
                  break;
                case "value":
                  c = B;
                  break;
                case "defaultValue":
                  g = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null)
                    throw Error(i(137, e));
                  break;
                default:
                  Dt(t, e, n, B, l, null);
              }
          }
        bo(
          t,
          c,
          g,
          b,
          C,
          o,
          u,
          !1
        );
        return;
      case "select":
        vt("invalid", t), n = o = c = null;
        for (u in l)
          if (l.hasOwnProperty(u) && (g = l[u], g != null))
            switch (u) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                o = g;
                break;
              case "multiple":
                n = g;
              default:
                Dt(t, e, u, g, l, null);
            }
        e = c, l = o, t.multiple = !!n, e != null ? In(t, !!n, e, !1) : l != null && In(t, !!n, l, !0);
        return;
      case "textarea":
        vt("invalid", t), c = u = n = null;
        for (o in l)
          if (l.hasOwnProperty(o) && (g = l[o], g != null))
            switch (o) {
              case "value":
                n = g;
                break;
              case "defaultValue":
                u = g;
                break;
              case "children":
                c = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(i(91));
                break;
              default:
                Dt(t, e, o, g, l, null);
            }
        xo(t, n, u, c);
        return;
      case "option":
        for (b in l)
          l.hasOwnProperty(b) && (n = l[b], n != null) && (b === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : Dt(t, e, b, n, l, null));
        return;
      case "dialog":
        vt("beforetoggle", t), vt("toggle", t), vt("cancel", t), vt("close", t);
        break;
      case "iframe":
      case "object":
        vt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Mi.length; n++)
          vt(Mi[n], t);
        break;
      case "image":
        vt("error", t), vt("load", t);
        break;
      case "details":
        vt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        vt("error", t), vt("load", t);
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
        for (C in l)
          if (l.hasOwnProperty(C) && (n = l[C], n != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, e));
              default:
                Dt(t, e, C, n, l, null);
            }
        return;
      default:
        if (ec(e)) {
          for (B in l)
            l.hasOwnProperty(B) && (n = l[B], n !== void 0 && Vs(
              t,
              e,
              B,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (g in l)
      l.hasOwnProperty(g) && (n = l[g], n != null && Dt(t, e, g, n, l, null));
  }
  function Oy(t, e, l, n) {
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
        var u = null, c = null, o = null, g = null, b = null, C = null, B = null;
        for (j in l) {
          var Q = l[j];
          if (l.hasOwnProperty(j) && Q != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = Q;
              default:
                n.hasOwnProperty(j) || Dt(t, e, j, null, n, Q);
            }
        }
        for (var N in n) {
          var j = n[N];
          if (Q = l[N], n.hasOwnProperty(N) && (j != null || Q != null))
            switch (N) {
              case "type":
                c = j;
                break;
              case "name":
                u = j;
                break;
              case "checked":
                C = j;
                break;
              case "defaultChecked":
                B = j;
                break;
              case "value":
                o = j;
                break;
              case "defaultValue":
                g = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(i(137, e));
                break;
              default:
                j !== Q && Dt(
                  t,
                  e,
                  N,
                  j,
                  n,
                  Q
                );
            }
        }
        If(
          t,
          o,
          g,
          b,
          C,
          B,
          c,
          u
        );
        return;
      case "select":
        j = o = g = N = null;
        for (c in l)
          if (b = l[c], l.hasOwnProperty(c) && b != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                j = b;
              default:
                n.hasOwnProperty(c) || Dt(
                  t,
                  e,
                  c,
                  null,
                  n,
                  b
                );
            }
        for (u in n)
          if (c = n[u], b = l[u], n.hasOwnProperty(u) && (c != null || b != null))
            switch (u) {
              case "value":
                N = c;
                break;
              case "defaultValue":
                g = c;
                break;
              case "multiple":
                o = c;
              default:
                c !== b && Dt(
                  t,
                  e,
                  u,
                  c,
                  n,
                  b
                );
            }
        e = g, l = o, n = j, N != null ? In(t, !!l, N, !1) : !!n != !!l && (e != null ? In(t, !!l, e, !0) : In(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        j = N = null;
        for (g in l)
          if (u = l[g], l.hasOwnProperty(g) && u != null && !n.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Dt(t, e, g, null, n, u);
            }
        for (o in n)
          if (u = n[o], c = l[o], n.hasOwnProperty(o) && (u != null || c != null))
            switch (o) {
              case "value":
                N = u;
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
                u !== c && Dt(t, e, o, u, n, c);
            }
        To(t, N, j);
        return;
      case "option":
        for (var I in l)
          N = l[I], l.hasOwnProperty(I) && N != null && !n.hasOwnProperty(I) && (I === "selected" ? t.selected = !1 : Dt(
            t,
            e,
            I,
            null,
            n,
            N
          ));
        for (b in n)
          N = n[b], j = l[b], n.hasOwnProperty(b) && N !== j && (N != null || j != null) && (b === "selected" ? t.selected = N && typeof N != "function" && typeof N != "symbol" : Dt(
            t,
            e,
            b,
            N,
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
          N = l[at], l.hasOwnProperty(at) && N != null && !n.hasOwnProperty(at) && Dt(t, e, at, null, n, N);
        for (C in n)
          if (N = n[C], j = l[C], n.hasOwnProperty(C) && N !== j && (N != null || j != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(i(137, e));
                break;
              default:
                Dt(
                  t,
                  e,
                  C,
                  N,
                  n,
                  j
                );
            }
        return;
      default:
        if (ec(e)) {
          for (var Rt in l)
            N = l[Rt], l.hasOwnProperty(Rt) && N !== void 0 && !n.hasOwnProperty(Rt) && Vs(
              t,
              e,
              Rt,
              void 0,
              n,
              N
            );
          for (B in n)
            N = n[B], j = l[B], !n.hasOwnProperty(B) || N === j || N === void 0 && j === void 0 || Vs(
              t,
              e,
              B,
              N,
              n,
              j
            );
          return;
        }
    }
    for (var z in l)
      N = l[z], l.hasOwnProperty(z) && N != null && !n.hasOwnProperty(z) && Dt(t, e, z, null, n, N);
    for (Q in n)
      N = n[Q], j = l[Q], !n.hasOwnProperty(Q) || N === j || N == null && j == null || Dt(t, e, Q, N, n, j);
  }
  function z0(t) {
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
  function My() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var u = l[n], c = u.transferSize, o = u.initiatorType, g = u.duration;
        if (c && g && z0(o)) {
          for (o = 0, g = u.responseEnd, n += 1; n < l.length; n++) {
            var b = l[n], C = b.startTime;
            if (C > g) break;
            var B = b.transferSize, Q = b.initiatorType;
            B && z0(Q) && (b = b.responseEnd, o += B * (b < g ? 1 : (g - C) / (b - C)));
          }
          if (--n, e += 8 * (c + o) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Gs = null, Xs = null;
  function cf(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function O0(t) {
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
  function Qs(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Zs = null;
  function Cy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Zs ? !1 : (Zs = t, !0) : (Zs = null, !1);
  }
  var C0 = typeof setTimeout == "function" ? setTimeout : void 0, Dy = typeof clearTimeout == "function" ? clearTimeout : void 0, D0 = typeof Promise == "function" ? Promise : void 0, Ry = typeof queueMicrotask == "function" ? queueMicrotask : typeof D0 < "u" ? function(t) {
    return D0.resolve(null).then(t).catch(Ny);
  } : C0;
  function Ny(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function an(t) {
    return t === "head";
  }
  function R0(t, e) {
    var l = e, n = 0;
    do {
      var u = l.nextSibling;
      if (t.removeChild(l), u && u.nodeType === 8)
        if (l = u.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(u), Ra(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          Di(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Di(l);
          for (var c = l.firstChild; c; ) {
            var o = c.nextSibling, g = c.nodeName;
            c[ka] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c), c = o;
          }
        } else
          l === "body" && Di(t.ownerDocument.body);
      l = u;
    } while (l);
    Ra(e);
  }
  function N0(t, e) {
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
  function Ks(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ks(l), $f(l);
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
  function Uy(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[ka])
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
      if (t = tl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function jy(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = tl(t.nextSibling), t === null)) return null;
    return t;
  }
  function U0(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = tl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Js(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function ks(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function wy(t, e) {
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
  function tl(t) {
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
  var Fs = null;
  function j0(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return tl(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function w0(t) {
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
  function H0(t, e, l) {
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
  function Di(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    $f(t);
  }
  var el = /* @__PURE__ */ new Map(), B0 = /* @__PURE__ */ new Set();
  function sf(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var jl = k.d;
  k.d = {
    f: Hy,
    r: By,
    D: Ly,
    C: Yy,
    L: qy,
    m: Vy,
    X: Xy,
    S: Gy,
    M: Qy
  };
  function Hy() {
    var t = jl.f(), e = Iu();
    return t || e;
  }
  function By(t) {
    var e = Wn(t);
    e !== null && e.tag === 5 && e.type === "form" ? td(e) : jl.r(t);
  }
  var Ma = typeof document > "u" ? null : document;
  function L0(t, e, l) {
    var n = Ma;
    if (n && typeof e == "string" && e) {
      var u = Je(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof l == "string" && (u += '[crossorigin="' + l + '"]'), B0.has(u) || (B0.add(u), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(u) === null && (e = n.createElement("link"), ce(e, "link", t), ee(e), n.head.appendChild(e)));
    }
  }
  function Ly(t) {
    jl.D(t), L0("dns-prefetch", t, null);
  }
  function Yy(t, e) {
    jl.C(t, e), L0("preconnect", t, e);
  }
  function qy(t, e, l) {
    jl.L(t, e, l);
    var n = Ma;
    if (n && t && e) {
      var u = 'link[rel="preload"][as="' + Je(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (u += '[imagesrcset="' + Je(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (u += '[imagesizes="' + Je(
        l.imageSizes
      ) + '"]')) : u += '[href="' + Je(t) + '"]';
      var c = u;
      switch (e) {
        case "style":
          c = Ca(t);
          break;
        case "script":
          c = Da(t);
      }
      el.has(c) || (t = p(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), el.set(c, t), n.querySelector(u) !== null || e === "style" && n.querySelector(Ri(c)) || e === "script" && n.querySelector(Ni(c)) || (e = n.createElement("link"), ce(e, "link", t), ee(e), n.head.appendChild(e)));
    }
  }
  function Vy(t, e) {
    jl.m(t, e);
    var l = Ma;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Je(n) + '"][href="' + Je(t) + '"]', c = u;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Da(t);
      }
      if (!el.has(c) && (t = p({ rel: "modulepreload", href: t }, e), el.set(c, t), l.querySelector(u) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ni(c)))
              return;
        }
        n = l.createElement("link"), ce(n, "link", t), ee(n), l.head.appendChild(n);
      }
    }
  }
  function Gy(t, e, l) {
    jl.S(t, e, l);
    var n = Ma;
    if (n && t) {
      var u = $n(n).hoistableStyles, c = Ca(t);
      e = e || "default";
      var o = u.get(c);
      if (!o) {
        var g = { loading: 0, preload: null };
        if (o = n.querySelector(
          Ri(c)
        ))
          g.loading = 5;
        else {
          t = p(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = el.get(c)) && Ws(t, l);
          var b = o = n.createElement("link");
          ee(b), ce(b, "link", t), b._p = new Promise(function(C, B) {
            b.onload = C, b.onerror = B;
          }), b.addEventListener("load", function() {
            g.loading |= 1;
          }), b.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, rf(o, e, n);
        }
        o = {
          type: "stylesheet",
          instance: o,
          count: 1,
          state: g
        }, u.set(c, o);
      }
    }
  }
  function Xy(t, e) {
    jl.X(t, e);
    var l = Ma;
    if (l && t) {
      var n = $n(l).hoistableScripts, u = Da(t), c = n.get(u);
      c || (c = l.querySelector(Ni(u)), c || (t = p({ src: t, async: !0 }, e), (e = el.get(u)) && $s(t, e), c = l.createElement("script"), ee(c), ce(c, "link", t), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, n.set(u, c));
    }
  }
  function Qy(t, e) {
    jl.M(t, e);
    var l = Ma;
    if (l && t) {
      var n = $n(l).hoistableScripts, u = Da(t), c = n.get(u);
      c || (c = l.querySelector(Ni(u)), c || (t = p({ src: t, async: !0, type: "module" }, e), (e = el.get(u)) && $s(t, e), c = l.createElement("script"), ee(c), ce(c, "link", t), l.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, n.set(u, c));
    }
  }
  function Y0(t, e, l, n) {
    var u = (u = yt.current) ? sf(u) : null;
    if (!u) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ca(l.href), l = $n(
          u
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Ca(l.href);
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
          )) && !c._p && (o.instance = c, o.state.loading = 5), el.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, el.set(t, l), c || Zy(
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
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Da(l), l = $n(
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
  function Ca(t) {
    return 'href="' + Je(t) + '"';
  }
  function Ri(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function q0(t) {
    return p({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Zy(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), ce(e, "link", l), ee(e), t.head.appendChild(e));
  }
  function Da(t) {
    return '[src="' + Je(t) + '"]';
  }
  function Ni(t) {
    return "script[async]" + t;
  }
  function V0(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Je(l.href) + '"]'
          );
          if (n)
            return e.instance = n, ee(n), n;
          var u = p({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), ee(n), ce(n, "style", u), rf(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          u = Ca(l.href);
          var c = t.querySelector(
            Ri(u)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, ee(c), c;
          n = q0(l), (u = el.get(u)) && Ws(n, u), c = (t.ownerDocument || t).createElement("link"), ee(c);
          var o = c;
          return o._p = new Promise(function(g, b) {
            o.onload = g, o.onerror = b;
          }), ce(c, "link", n), e.state.loading |= 4, rf(c, l.precedence, t), e.instance = c;
        case "script":
          return c = Da(l.src), (u = t.querySelector(
            Ni(c)
          )) ? (e.instance = u, ee(u), u) : (n = l, (u = el.get(c)) && (n = p({}, l), $s(n, u)), t = t.ownerDocument || t, u = t.createElement("script"), ee(u), ce(u, "link", n), t.head.appendChild(u), e.instance = u);
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
      var g = n[o];
      if (g.dataset.precedence === e) c = g;
      else if (c !== u) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Ws(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function $s(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var of = null;
  function G0(t, e, l) {
    if (of === null) {
      var n = /* @__PURE__ */ new Map(), u = of = /* @__PURE__ */ new Map();
      u.set(l, n);
    } else
      u = of, n = u.get(l), n || (n = /* @__PURE__ */ new Map(), u.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), u = 0; u < l.length; u++) {
      var c = l[u];
      if (!(c[ka] || c[ae] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var o = c.getAttribute(e) || "";
        o = t + o;
        var g = n.get(o);
        g ? g.push(c) : n.set(o, [c]);
      }
    }
    return n;
  }
  function X0(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Ky(t, e, l) {
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
  function Q0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Jy(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var u = Ca(n.href), c = e.querySelector(
          Ri(u)
        );
        if (c) {
          e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = hf.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = c, ee(c);
          return;
        }
        c = e.ownerDocument || e, n = q0(n), (u = el.get(u)) && Ws(n, u), c = c.createElement("link"), ee(c);
        var o = c;
        o._p = new Promise(function(g, b) {
          o.onload = g, o.onerror = b;
        }), ce(c, "link", n), l.instance = c;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = hf.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var Ps = 0;
  function ky(t, e) {
    return t.stylesheets && t.count === 0 && _f(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && _f(t, t.stylesheets), t.unsuspend) {
          var c = t.unsuspend;
          t.unsuspend = null, c();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Ps === 0 && (Ps = 62500 * My());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && _f(t, t.stylesheets), t.unsuspend)) {
            var c = t.unsuspend;
            t.unsuspend = null, c();
          }
        },
        (t.imgBytes > Ps ? 50 : 800) + e
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
    t.stylesheets = null, t.unsuspend !== null && (t.count++, df = /* @__PURE__ */ new Map(), e.forEach(Fy, t), df = null, hf.call(t));
  }
  function Fy(t, e) {
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
  var Ui = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function Wy(t, e, l, n, u, c, o, g, b) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jf(0), this.hiddenUpdates = Jf(null), this.identifierPrefix = n, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Z0(t, e, l, n, u, c, o, g, b, C, B, Q) {
    return t = new Wy(
      t,
      e,
      l,
      o,
      b,
      C,
      B,
      Q,
      g
    ), e = 1, c === !0 && (e |= 24), c = Ue(3, null, null, e), t.current = c, c.stateNode = t, e = Rc(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, wc(c), t;
  }
  function K0(t) {
    return t ? (t = fa, t) : fa;
  }
  function J0(t, e, l, n, u, c) {
    u = K0(u), n.context === null ? n.context = u : n.pendingContext = u, n = Jl(e), n.payload = { element: l }, c = c === void 0 ? null : c, c !== null && (n.callback = c), l = kl(t, n, e), l !== null && (xe(l, t, e), oi(l, t, e));
  }
  function k0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Is(t, e) {
    k0(t, e), (t = t.alternate) && k0(t, e);
  }
  function F0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = zn(t, 67108864);
      e !== null && xe(e, t, 67108864), Is(t, 67108864);
    }
  }
  function W0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Le();
      e = kf(e);
      var l = zn(t, e);
      l !== null && xe(l, t, e), Is(t, e);
    }
  }
  var mf = !0;
  function $y(t, e, l, n) {
    var u = R.T;
    R.T = null;
    var c = k.p;
    try {
      k.p = 2, tr(t, e, l, n);
    } finally {
      k.p = c, R.T = u;
    }
  }
  function Py(t, e, l, n) {
    var u = R.T;
    R.T = null;
    var c = k.p;
    try {
      k.p = 8, tr(t, e, l, n);
    } finally {
      k.p = c, R.T = u;
    }
  }
  function tr(t, e, l, n) {
    if (mf) {
      var u = er(n);
      if (u === null)
        qs(
          t,
          e,
          n,
          yf,
          l
        ), P0(t, n);
      else if (tg(
        u,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (P0(t, n), e & 4 && -1 < Iy.indexOf(t)) {
        for (; u !== null; ) {
          var c = Wn(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var o = bn(c.pendingLanes);
                  if (o !== 0) {
                    var g = c;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; o; ) {
                      var b = 1 << 31 - Re(o);
                      g.entanglements[1] |= b, o &= ~b;
                    }
                    hl(c), (Et & 6) === 0 && ($u = Ce() + 500, Oi(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = zn(c, 2), g !== null && xe(g, c, 2), Iu(), Is(c, 2);
            }
          if (c = er(n), c === null && qs(
            t,
            e,
            n,
            yf,
            l
          ), c === u) break;
          u = c;
        }
        u !== null && n.stopPropagation();
      } else
        qs(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function er(t) {
    return t = nc(t), lr(t);
  }
  var yf = null;
  function lr(t) {
    if (yf = null, t = Fn(t), t !== null) {
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
    return yf = t, null;
  }
  function $0(t) {
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
        switch (Lm()) {
          case ao:
            return 2;
          case io:
            return 8;
          case au:
          case Ym:
            return 32;
          case uo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var nr = !1, un = null, fn = null, cn = null, ji = /* @__PURE__ */ new Map(), wi = /* @__PURE__ */ new Map(), sn = [], Iy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function P0(t, e) {
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
        ji.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wi.delete(e.pointerId);
    }
  }
  function Hi(t, e, l, n, u, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: c,
      targetContainers: [u]
    }, e !== null && (e = Wn(e), e !== null && F0(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function tg(t, e, l, n, u) {
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
        return ji.set(
          c,
          Hi(
            ji.get(c) || null,
            t,
            e,
            l,
            n,
            u
          )
        ), !0;
      case "gotpointercapture":
        return c = u.pointerId, wi.set(
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
    }
    return !1;
  }
  function I0(t) {
    var e = Fn(t.target);
    if (e !== null) {
      var l = r(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = h(l), e !== null) {
            t.blockedOn = e, ho(t.priority, function() {
              W0(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = d(l), e !== null) {
            t.blockedOn = e, ho(t.priority, function() {
              W0(l);
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
  function gf(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = er(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        lc = n, l.target.dispatchEvent(n), lc = null;
      } else
        return e = Wn(l), e !== null && F0(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function t_(t, e, l) {
    gf(t) && l.delete(e);
  }
  function eg() {
    nr = !1, un !== null && gf(un) && (un = null), fn !== null && gf(fn) && (fn = null), cn !== null && gf(cn) && (cn = null), ji.forEach(t_), wi.forEach(t_);
  }
  function vf(t, e) {
    t.blockedOn === e && (t.blockedOn = null, nr || (nr = !0, m.unstable_scheduleCallback(
      m.unstable_NormalPriority,
      eg
    )));
  }
  var pf = null;
  function e_(t) {
    pf !== t && (pf = t, m.unstable_scheduleCallback(
      m.unstable_NormalPriority,
      function() {
        pf === t && (pf = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], u = t[e + 2];
          if (typeof n != "function") {
            if (lr(n || l) === null)
              continue;
            break;
          }
          var c = Wn(l);
          c !== null && (t.splice(e, 3), e -= 3, es(
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
  function Ra(t) {
    function e(b) {
      return vf(b, t);
    }
    un !== null && vf(un, t), fn !== null && vf(fn, t), cn !== null && vf(cn, t), ji.forEach(e), wi.forEach(e);
    for (var l = 0; l < sn.length; l++) {
      var n = sn[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < sn.length && (l = sn[0], l.blockedOn === null); )
      I0(l), l.blockedOn === null && sn.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var u = l[n], c = l[n + 1], o = u[ge] || null;
        if (typeof c == "function")
          o || e_(l);
        else if (o) {
          var g = null;
          if (c && c.hasAttribute("formAction")) {
            if (u = c, o = c[ge] || null)
              g = o.formAction;
            else if (lr(u) !== null) continue;
          } else g = o.action;
          typeof g == "function" ? l[n + 1] = g : (l.splice(n, 3), n -= 3), e_(l);
        }
      }
  }
  function l_() {
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
  function ar(t) {
    this._internalRoot = t;
  }
  Sf.prototype.render = ar.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(i(409));
    var l = e.current, n = Le();
    J0(l, n, t, e, null, null);
  }, Sf.prototype.unmount = ar.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      J0(t.current, 2, null, t, null, null), Iu(), e[kn] = null;
    }
  };
  function Sf(t) {
    this._internalRoot = t;
  }
  Sf.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = oo();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < sn.length && e !== 0 && e < sn[l].priority; l++) ;
      sn.splice(l, 0, t), l === 0 && I0(t);
    }
  };
  var n_ = a.version;
  if (n_ !== "19.2.5")
    throw Error(
      i(
        527,
        n_,
        "19.2.5"
      )
    );
  k.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","), Error(i(268, t)));
    return t = _(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var lg = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bf.isDisabled && bf.supportsFiber)
      try {
        Za = bf.inject(
          lg
        ), De = bf;
      } catch {
      }
  }
  return Li.createRoot = function(t, e) {
    if (!s(t)) throw Error(i(299));
    var l = !1, n = "", u = rd, c = od, o = hd;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = Z0(
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
      l_
    ), t[kn] = e.current, Ys(t), new ar(e);
  }, Li.hydrateRoot = function(t, e, l) {
    if (!s(t)) throw Error(i(299));
    var n = !1, u = "", c = rd, o = od, g = hd, b = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (c = l.onUncaughtError), l.onCaughtError !== void 0 && (o = l.onCaughtError), l.onRecoverableError !== void 0 && (g = l.onRecoverableError), l.formState !== void 0 && (b = l.formState)), e = Z0(
      t,
      1,
      !0,
      e,
      l ?? null,
      n,
      u,
      b,
      c,
      o,
      g,
      l_
    ), e.context = K0(null), l = e.current, n = Le(), n = kf(n), u = Jl(n), u.callback = null, kl(l, u, n), l = n, e.current.lanes = l, Ja(e, l), hl(e), t[kn] = e.current, Ys(t), new Sf(e);
  }, Li.version = "19.2.5", Li;
}
var d_;
function hg() {
  if (d_) return ur.exports;
  d_ = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (a) {
        console.error(a);
      }
  }
  return m(), ur.exports = og(), ur.exports;
}
var dg = hg(), ft = wr();
function wl(m) {
  if (m === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return m;
}
function w_(m, a) {
  m.prototype = Object.create(a.prototype), m.prototype.constructor = m, m.__proto__ = a;
}
var Xe = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, La = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Hr, se, Lt, al = 1e8, jt = 1 / al, br = Math.PI * 2, _g = br / 4, mg = 0, H_ = Math.sqrt, yg = Math.cos, gg = Math.sin, ne = function(a) {
  return typeof a == "string";
}, Qt = function(a) {
  return typeof a == "function";
}, Bl = function(a) {
  return typeof a == "number";
}, Br = function(a) {
  return typeof a > "u";
}, yl = function(a) {
  return typeof a == "object";
}, Ae = function(a) {
  return a !== !1;
}, Lr = function() {
  return typeof window < "u";
}, Tf = function(a) {
  return Qt(a) || ne(a);
}, B_ = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, de = Array.isArray, vg = /random\([^)]+\)/g, pg = /,\s*/g, __ = /(?:-?\.?\d|\.)+/gi, L_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ua = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, or = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Y_ = /[+-]=-?[.\d]+/, Sg = /[^,'"\[\]\s]+/gi, bg = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, qt, dl, Tr, Yr, Qe = {}, Rf = {}, q_, V_ = function(a) {
  return (Rf = Ya(a, Qe)) && Me;
}, qr = function(a, f) {
  return console.warn("Invalid property", a, "set to", f, "Missing plugin? gsap.registerPlugin()");
}, Fi = function(a, f) {
  return !f && console.warn(a);
}, G_ = function(a, f) {
  return a && (Qe[a] = f) && Rf && (Rf[a] = f) || Qe;
}, Wi = function() {
  return 0;
}, Tg = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Af = {
  suppressEvents: !0,
  kill: !1
}, xg = {
  suppressEvents: !0
}, Vr = {}, _n = [], xr = {}, X_, Ye = {}, hr = {}, m_ = 30, Ef = [], Gr = "", Xr = function(a) {
  var f = a[0], i, s;
  if (yl(f) || Qt(f) || (a = [a]), !(i = (f._gsap || {}).harness)) {
    for (s = Ef.length; s-- && !Ef[s].targetTest(f); )
      ;
    i = Ef[s];
  }
  for (s = a.length; s--; )
    a[s] && (a[s]._gsap || (a[s]._gsap = new dm(a[s], i))) || a.splice(s, 1);
  return a;
}, Xn = function(a) {
  return a._gsap || Xr(il(a))[0]._gsap;
}, Q_ = function(a, f, i) {
  return (i = a[f]) && Qt(i) ? a[f]() : Br(i) && a.getAttribute && a.getAttribute(f) || i;
}, Ee = function(a, f) {
  return (a = a.split(",")).forEach(f) || a;
}, kt = function(a) {
  return Math.round(a * 1e5) / 1e5 || 0;
}, Yt = function(a) {
  return Math.round(a * 1e7) / 1e7 || 0;
}, wa = function(a, f) {
  var i = f.charAt(0), s = parseFloat(f.substr(2));
  return a = parseFloat(a), i === "+" ? a + s : i === "-" ? a - s : i === "*" ? a * s : a / s;
}, Ag = function(a, f) {
  for (var i = f.length, s = 0; a.indexOf(f[s]) < 0 && ++s < i; )
    ;
  return s < i;
}, Nf = function() {
  var a = _n.length, f = _n.slice(0), i, s;
  for (xr = {}, _n.length = 0, i = 0; i < a; i++)
    s = f[i], s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0);
}, Qr = function(a) {
  return !!(a._initted || a._startAt || a.add);
}, Z_ = function(a, f, i, s) {
  _n.length && !se && Nf(), a.render(f, i, !!(se && f < 0 && Qr(a))), _n.length && !se && Nf();
}, K_ = function(a) {
  var f = parseFloat(a);
  return (f || f === 0) && (a + "").match(Sg).length < 2 ? f : ne(a) ? a.trim() : a;
}, J_ = function(a) {
  return a;
}, Ze = function(a, f) {
  for (var i in f)
    i in a || (a[i] = f[i]);
  return a;
}, Eg = function(a) {
  return function(f, i) {
    for (var s in i)
      s in f || s === "duration" && a || s === "ease" || (f[s] = i[s]);
  };
}, Ya = function(a, f) {
  for (var i in f)
    a[i] = f[i];
  return a;
}, y_ = function m(a, f) {
  for (var i in f)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (a[i] = yl(f[i]) ? m(a[i] || (a[i] = {}), f[i]) : f[i]);
  return a;
}, Uf = function(a, f) {
  var i = {}, s;
  for (s in a)
    s in f || (i[s] = a[s]);
  return i;
}, Qi = function(a) {
  var f = a.parent || qt, i = a.keyframes ? Eg(de(a.keyframes)) : Ze;
  if (Ae(a.inherit))
    for (; f; )
      i(a, f.vars.defaults), f = f.parent || f._dp;
  return a;
}, zg = function(a, f) {
  for (var i = a.length, s = i === f.length; s && i-- && a[i] === f[i]; )
    ;
  return i < 0;
}, k_ = function(a, f, i, s, r) {
  var h = a[s], d;
  if (r)
    for (d = f[r]; h && h[r] > d; )
      h = h._prev;
  return h ? (f._next = h._next, h._next = f) : (f._next = a[i], a[i] = f), f._next ? f._next._prev = f : a[s] = f, f._prev = h, f.parent = f._dp = a, f;
}, Lf = function(a, f, i, s) {
  i === void 0 && (i = "_first"), s === void 0 && (s = "_last");
  var r = f._prev, h = f._next;
  r ? r._next = h : a[i] === f && (a[i] = h), h ? h._prev = r : a[s] === f && (a[s] = r), f._next = f._prev = f.parent = null;
}, yn = function(a, f) {
  a.parent && (!f || a.parent.autoRemoveChildren) && a.parent.remove && a.parent.remove(a), a._act = 0;
}, Qn = function(a, f) {
  if (a && (!f || f._end > a._dur || f._start < 0))
    for (var i = a; i; )
      i._dirty = 1, i = i.parent;
  return a;
}, Og = function(a) {
  for (var f = a.parent; f && f.parent; )
    f._dirty = 1, f.totalDuration(), f = f.parent;
  return a;
}, Ar = function(a, f, i, s) {
  return a._startAt && (se ? a._startAt.revert(Af) : a.vars.immediateRender && !a.vars.autoRevert || a._startAt.render(f, !0, s));
}, Mg = function m(a) {
  return !a || a._ts && m(a.parent);
}, g_ = function(a) {
  return a._repeat ? qa(a._tTime, a = a.duration() + a._rDelay) * a : 0;
}, qa = function(a, f) {
  var i = Math.floor(a = Yt(a / f));
  return a && i === a ? i - 1 : i;
}, jf = function(a, f) {
  return (a - f._start) * f._ts + (f._ts >= 0 ? 0 : f._dirty ? f.totalDuration() : f._tDur);
}, Yf = function(a) {
  return a._end = Yt(a._start + (a._tDur / Math.abs(a._ts || a._rts || jt) || 0));
}, qf = function(a, f) {
  var i = a._dp;
  return i && i.smoothChildTiming && a._ts && (a._start = Yt(i._time - (a._ts > 0 ? f / a._ts : ((a._dirty ? a.totalDuration() : a._tDur) - f) / -a._ts)), Yf(a), i._dirty || Qn(i, a)), a;
}, F_ = function(a, f) {
  var i;
  if ((f._time || !f._dur && f._initted || f._start < a._time && (f._dur || !f.add)) && (i = jf(a.rawTime(), f), (!f._dur || lu(0, f.totalDuration(), i) - f._tTime > jt) && f.render(i, !0)), Qn(a, f)._dp && a._initted && a._time >= a._dur && a._ts) {
    if (a._dur < a.duration())
      for (i = a; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    a._zTime = -jt;
  }
}, _l = function(a, f, i, s) {
  return f.parent && yn(f), f._start = Yt((Bl(i) ? i : i || a !== qt ? nl(a, i, f) : a._time) + f._delay), f._end = Yt(f._start + (f.totalDuration() / Math.abs(f.timeScale()) || 0)), k_(a, f, "_first", "_last", a._sort ? "_start" : 0), Er(f) || (a._recent = f), s || F_(a, f), a._ts < 0 && qf(a, a._tTime), a;
}, W_ = function(a, f) {
  return (Qe.ScrollTrigger || qr("scrollTrigger", f)) && Qe.ScrollTrigger.create(f, a);
}, $_ = function(a, f, i, s, r) {
  if (Kr(a, f, r), !a._initted)
    return 1;
  if (!i && a._pt && !se && (a._dur && a.vars.lazy !== !1 || !a._dur && a.vars.lazy) && X_ !== qe.frame)
    return _n.push(a), a._lazy = [r, s], 1;
}, Cg = function m(a) {
  var f = a.parent;
  return f && f._ts && f._initted && !f._lock && (f.rawTime() < 0 || m(f));
}, Er = function(a) {
  var f = a.data;
  return f === "isFromStart" || f === "isStart";
}, Dg = function(a, f, i, s) {
  var r = a.ratio, h = f < 0 || !f && (!a._start && Cg(a) && !(!a._initted && Er(a)) || (a._ts < 0 || a._dp._ts < 0) && !Er(a)) ? 0 : 1, d = a._rDelay, y = 0, _, v, p;
  if (d && a._repeat && (y = lu(0, a._tDur, f), v = qa(y, d), a._yoyo && v & 1 && (h = 1 - h), v !== qa(a._tTime, d) && (r = 1 - h, a.vars.repeatRefresh && a._initted && a.invalidate())), h !== r || se || s || a._zTime === jt || !f && a._zTime) {
    if (!a._initted && $_(a, f, s, i, y))
      return;
    for (p = a._zTime, a._zTime = f || (i ? jt : 0), i || (i = f && !p), a.ratio = h, a._from && (h = 1 - h), a._time = 0, a._tTime = y, _ = a._pt; _; )
      _.r(h, _.d), _ = _._next;
    f < 0 && Ar(a, f, i, !0), a._onUpdate && !i && Ve(a, "onUpdate"), y && a._repeat && !i && a.parent && Ve(a, "onRepeat"), (f >= a._tDur || f < 0) && a.ratio === h && (h && yn(a, 1), !i && !se && (Ve(a, h ? "onComplete" : "onReverseComplete", !0), a._prom && a._prom()));
  } else a._zTime || (a._zTime = f);
}, Rg = function(a, f, i) {
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
}, Va = function(a, f, i, s) {
  var r = a._repeat, h = Yt(f) || 0, d = a._tTime / a._tDur;
  return d && !s && (a._time *= h / a._dur), a._dur = h, a._tDur = r ? r < 0 ? 1e10 : Yt(h * (r + 1) + a._rDelay * r) : h, d > 0 && !s && qf(a, a._tTime = a._tDur * d), a.parent && Yf(a), i || Qn(a.parent, a), a;
}, v_ = function(a) {
  return a instanceof ye ? Qn(a) : Va(a, a._dur);
}, Ng = {
  _start: 0,
  endTime: Wi,
  totalDuration: Wi
}, nl = function m(a, f, i) {
  var s = a.labels, r = a._recent || Ng, h = a.duration() >= al ? r.endTime(!1) : a._dur, d, y, _;
  return ne(f) && (isNaN(f) || f in s) ? (y = f.charAt(0), _ = f.substr(-1) === "%", d = f.indexOf("="), y === "<" || y === ">" ? (d >= 0 && (f = f.replace(/=/, "")), (y === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(f.substr(1)) || 0) * (_ ? (d < 0 ? r : i).totalDuration() / 100 : 1)) : d < 0 ? (f in s || (s[f] = h), s[f]) : (y = parseFloat(f.charAt(d - 1) + f.substr(d + 1)), _ && i && (y = y / 100 * (de(i) ? i[0] : i).totalDuration()), d > 1 ? m(a, f.substr(0, d - 1), i) + y : h + y)) : f == null ? h : +f;
}, Zi = function(a, f, i) {
  var s = Bl(f[1]), r = (s ? 2 : 1) + (a < 2 ? 0 : 1), h = f[r], d, y;
  if (s && (h.duration = f[1]), h.parent = i, a) {
    for (d = h, y = i; y && !("immediateRender" in d); )
      d = y.vars.defaults || {}, y = Ae(y.vars.inherit) && y.parent;
    h.immediateRender = Ae(d.immediateRender), a < 2 ? h.runBackwards = 1 : h.startAt = f[r - 1];
  }
  return new It(f[0], h, f[r + 1]);
}, pn = function(a, f) {
  return a || a === 0 ? f(a) : f;
}, lu = function(a, f, i) {
  return i < a ? a : i > f ? f : i;
}, he = function(a, f) {
  return !ne(a) || !(f = bg.exec(a)) ? "" : f[1];
}, Ug = function(a, f, i) {
  return pn(i, function(s) {
    return lu(a, f, s);
  });
}, zr = [].slice, P_ = function(a, f) {
  return a && yl(a) && "length" in a && (!f && !a.length || a.length - 1 in a && yl(a[0])) && !a.nodeType && a !== dl;
}, jg = function(a, f, i) {
  return i === void 0 && (i = []), a.forEach(function(s) {
    var r;
    return ne(s) && !f || P_(s, 1) ? (r = i).push.apply(r, il(s)) : i.push(s);
  }) || i;
}, il = function(a, f, i) {
  return Lt && !f && Lt.selector ? Lt.selector(a) : ne(a) && !i && (Tr || !Ga()) ? zr.call((f || Yr).querySelectorAll(a), 0) : de(a) ? jg(a, i) : P_(a) ? zr.call(a, 0) : a ? [a] : [];
}, Or = function(a) {
  return a = il(a)[0] || Fi("Invalid scope") || {}, function(f) {
    var i = a.current || a.nativeElement || a;
    return il(f, i.querySelectorAll ? i : i === a ? Fi("Invalid scope") || Yr.createElement("div") : a);
  };
}, I_ = function(a) {
  return a.sort(function() {
    return 0.5 - Math.random();
  });
}, tm = function(a) {
  if (Qt(a))
    return a;
  var f = yl(a) ? a : {
    each: a
  }, i = Zn(f.ease), s = f.from || 0, r = parseFloat(f.base) || 0, h = {}, d = s > 0 && s < 1, y = isNaN(s) || d, _ = f.axis, v = s, p = s;
  return ne(s) ? v = p = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[s] || 0 : !d && y && (v = s[0], p = s[1]), function(A, E, D) {
    var S = (D || f).length, U = h[S], G, Z, Y, J, w, K, q, F, X;
    if (!U) {
      if (X = f.grid === "auto" ? 0 : (f.grid || [1, al])[1], !X) {
        for (q = -al; q < (q = D[X++].getBoundingClientRect().left) && X < S; )
          ;
        X < S && X--;
      }
      for (U = h[S] = [], G = y ? Math.min(X, S) * v - 0.5 : s % X, Z = X === al ? 0 : y ? S * p / X - 0.5 : s / X | 0, q = 0, F = al, K = 0; K < S; K++)
        Y = K % X - G, J = Z - (K / X | 0), U[K] = w = _ ? Math.abs(_ === "y" ? J : Y) : H_(Y * Y + J * J), w > q && (q = w), w < F && (F = w);
      s === "random" && I_(U), U.max = q - F, U.min = F, U.v = S = (parseFloat(f.amount) || parseFloat(f.each) * (X > S ? S - 1 : _ ? _ === "y" ? S / X : X : Math.max(X, S / X)) || 0) * (s === "edges" ? -1 : 1), U.b = S < 0 ? r - S : r, U.u = he(f.amount || f.each) || 0, i = i && S < 0 ? rm(i) : i;
    }
    return S = (U[A] - U.min) / U.max || 0, Yt(U.b + (i ? i(S) : S) * U.v) + U.u;
  };
}, Mr = function(a) {
  var f = Math.pow(10, ((a + "").split(".")[1] || "").length);
  return function(i) {
    var s = Yt(Math.round(parseFloat(i) / a) * a * f);
    return (s - s % 1) / f + (Bl(i) ? 0 : he(i));
  };
}, em = function(a, f) {
  var i = de(a), s, r;
  return !i && yl(a) && (s = i = a.radius || al, a.values ? (a = il(a.values), (r = !Bl(a[0])) && (s *= s)) : a = Mr(a.increment)), pn(f, i ? Qt(a) ? function(h) {
    return r = a(h), Math.abs(r - h) <= s ? r : h;
  } : function(h) {
    for (var d = parseFloat(r ? h.x : h), y = parseFloat(r ? h.y : 0), _ = al, v = 0, p = a.length, A, E; p--; )
      r ? (A = a[p].x - d, E = a[p].y - y, A = A * A + E * E) : A = Math.abs(a[p] - d), A < _ && (_ = A, v = p);
    return v = !s || _ <= s ? a[v] : h, r || v === h || Bl(h) ? v : v + he(h);
  } : Mr(a));
}, lm = function(a, f, i, s) {
  return pn(de(a) ? !f : i === !0 ? !!(i = 0) : !s, function() {
    return de(a) ? a[~~(Math.random() * a.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((a - i / 2 + Math.random() * (f - a + i * 0.99)) / i) * i * s) / s;
  });
}, wg = function() {
  for (var a = arguments.length, f = new Array(a), i = 0; i < a; i++)
    f[i] = arguments[i];
  return function(s) {
    return f.reduce(function(r, h) {
      return h(r);
    }, s);
  };
}, Hg = function(a, f) {
  return function(i) {
    return a(parseFloat(i)) + (f || he(i));
  };
}, Bg = function(a, f, i) {
  return am(a, f, 0, 1, i);
}, nm = function(a, f, i) {
  return pn(i, function(s) {
    return a[~~f(s)];
  });
}, Lg = function m(a, f, i) {
  var s = f - a;
  return de(a) ? nm(a, m(0, a.length), f) : pn(i, function(r) {
    return (s + (r - a) % s) % s + a;
  });
}, Yg = function m(a, f, i) {
  var s = f - a, r = s * 2;
  return de(a) ? nm(a, m(0, a.length - 1), f) : pn(i, function(h) {
    return h = (r + (h - a) % r) % r || 0, a + (h > s ? r - h : h);
  });
}, $i = function(a) {
  return a.replace(vg, function(f) {
    var i = f.indexOf("[") + 1, s = f.substring(i || 7, i ? f.indexOf("]") : f.length - 1).split(pg);
    return lm(i ? s : +s[0], i ? 0 : +s[1], +s[2] || 1e-5);
  });
}, am = function(a, f, i, s, r) {
  var h = f - a, d = s - i;
  return pn(r, function(y) {
    return i + ((y - a) / h * d || 0);
  });
}, qg = function m(a, f, i, s) {
  var r = isNaN(a + f) ? 0 : function(E) {
    return (1 - E) * a + E * f;
  };
  if (!r) {
    var h = ne(a), d = {}, y, _, v, p, A;
    if (i === !0 && (s = 1) && (i = null), h)
      a = {
        p: a
      }, f = {
        p: f
      };
    else if (de(a) && !de(f)) {
      for (v = [], p = a.length, A = p - 2, _ = 1; _ < p; _++)
        v.push(m(a[_ - 1], a[_]));
      p--, r = function(D) {
        D *= p;
        var S = Math.min(A, ~~D);
        return v[S](D - S);
      }, i = f;
    } else s || (a = Ya(de(a) ? [] : {}, a));
    if (!v) {
      for (y in f)
        Zr.call(d, a, y, "get", f[y]);
      r = function(D) {
        return Fr(D, d) || (h ? a.p : a);
      };
    }
  }
  return pn(i, r);
}, p_ = function(a, f, i) {
  var s = a.labels, r = al, h, d, y;
  for (h in s)
    d = s[h] - f, d < 0 == !!i && d && r > (d = Math.abs(d)) && (y = h, r = d);
  return y;
}, Ve = function(a, f, i) {
  var s = a.vars, r = s[f], h = Lt, d = a._ctx, y, _, v;
  if (r)
    return y = s[f + "Params"], _ = s.callbackScope || a, i && _n.length && Nf(), d && (Lt = d), v = y ? r.apply(_, y) : r.call(_), Lt = h, v;
}, qi = function(a) {
  return yn(a), a.scrollTrigger && a.scrollTrigger.kill(!!se), a.progress() < 1 && Ve(a, "onInterrupt"), a;
}, ja, im = [], um = function(a) {
  if (a)
    if (a = !a.name && a.default || a, Lr() || a.headless) {
      var f = a.name, i = Qt(a), s = f && !i && a.init ? function() {
        this._props = [];
      } : a, r = {
        init: Wi,
        render: Fr,
        add: Zr,
        kill: lv,
        modifier: ev,
        rawVars: 0
      }, h = {
        targetTest: 0,
        get: 0,
        getSetter: kr,
        aliases: {},
        register: 0
      };
      if (Ga(), a !== s) {
        if (Ye[f])
          return;
        Ze(s, Ze(Uf(a, r), h)), Ya(s.prototype, Ya(r, Uf(a, h))), Ye[s.prop = f] = s, a.targetTest && (Ef.push(s), Vr[f] = 1), f = (f === "css" ? "CSS" : f.charAt(0).toUpperCase() + f.substr(1)) + "Plugin";
      }
      G_(f, s), a.register && a.register(Me, s, ze);
    } else
      im.push(a);
}, Ut = 255, Vi = {
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
}, dr = function(a, f, i) {
  return a += a < 0 ? 1 : a > 1 ? -1 : 0, (a * 6 < 1 ? f + (i - f) * a * 6 : a < 0.5 ? i : a * 3 < 2 ? f + (i - f) * (2 / 3 - a) * 6 : f) * Ut + 0.5 | 0;
}, fm = function(a, f, i) {
  var s = a ? Bl(a) ? [a >> 16, a >> 8 & Ut, a & Ut] : 0 : Vi.black, r, h, d, y, _, v, p, A, E, D;
  if (!s) {
    if (a.substr(-1) === "," && (a = a.substr(0, a.length - 1)), Vi[a])
      s = Vi[a];
    else if (a.charAt(0) === "#") {
      if (a.length < 6 && (r = a.charAt(1), h = a.charAt(2), d = a.charAt(3), a = "#" + r + r + h + h + d + d + (a.length === 5 ? a.charAt(4) + a.charAt(4) : "")), a.length === 9)
        return s = parseInt(a.substr(1, 6), 16), [s >> 16, s >> 8 & Ut, s & Ut, parseInt(a.substr(7), 16) / 255];
      a = parseInt(a.substr(1), 16), s = [a >> 16, a >> 8 & Ut, a & Ut];
    } else if (a.substr(0, 3) === "hsl") {
      if (s = D = a.match(__), !f)
        y = +s[0] % 360 / 360, _ = +s[1] / 100, v = +s[2] / 100, h = v <= 0.5 ? v * (_ + 1) : v + _ - v * _, r = v * 2 - h, s.length > 3 && (s[3] *= 1), s[0] = dr(y + 1 / 3, r, h), s[1] = dr(y, r, h), s[2] = dr(y - 1 / 3, r, h);
      else if (~a.indexOf("="))
        return s = a.match(L_), i && s.length < 4 && (s[3] = 1), s;
    } else
      s = a.match(__) || Vi.transparent;
    s = s.map(Number);
  }
  return f && !D && (r = s[0] / Ut, h = s[1] / Ut, d = s[2] / Ut, p = Math.max(r, h, d), A = Math.min(r, h, d), v = (p + A) / 2, p === A ? y = _ = 0 : (E = p - A, _ = v > 0.5 ? E / (2 - p - A) : E / (p + A), y = p === r ? (h - d) / E + (h < d ? 6 : 0) : p === h ? (d - r) / E + 2 : (r - h) / E + 4, y *= 60), s[0] = ~~(y + 0.5), s[1] = ~~(_ * 100 + 0.5), s[2] = ~~(v * 100 + 0.5)), i && s.length < 4 && (s[3] = 1), s;
}, cm = function(a) {
  var f = [], i = [], s = -1;
  return a.split(mn).forEach(function(r) {
    var h = r.match(Ua) || [];
    f.push.apply(f, h), i.push(s += h.length + 1);
  }), f.c = i, f;
}, S_ = function(a, f, i) {
  var s = "", r = (a + s).match(mn), h = f ? "hsla(" : "rgba(", d = 0, y, _, v, p;
  if (!r)
    return a;
  if (r = r.map(function(A) {
    return (A = fm(A, f, 1)) && h + (f ? A[0] + "," + A[1] + "%," + A[2] + "%," + A[3] : A.join(",")) + ")";
  }), i && (v = cm(a), y = i.c, y.join(s) !== v.c.join(s)))
    for (_ = a.replace(mn, "1").split(Ua), p = _.length - 1; d < p; d++)
      s += _[d] + (~y.indexOf(d) ? r.shift() || h + "0,0,0,0)" : (v.length ? v : r.length ? r : i).shift());
  if (!_)
    for (_ = a.split(mn), p = _.length - 1; d < p; d++)
      s += _[d] + r[d];
  return s + _[p];
}, mn = (function() {
  var m = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", a;
  for (a in Vi)
    m += "|" + a + "\\b";
  return new RegExp(m + ")", "gi");
})(), Vg = /hsl[a]?\(/, sm = function(a) {
  var f = a.join(" "), i;
  if (mn.lastIndex = 0, mn.test(f))
    return i = Vg.test(f), a[1] = S_(a[1], i), a[0] = S_(a[0], i, cm(a[1])), !0;
}, Pi, qe = (function() {
  var m = Date.now, a = 500, f = 33, i = m(), s = i, r = 1e3 / 240, h = r, d = [], y, _, v, p, A, E, D = function S(U) {
    var G = m() - s, Z = U === !0, Y, J, w, K;
    if ((G > a || G < 0) && (i += G - f), s += G, w = s - i, Y = w - h, (Y > 0 || Z) && (K = ++p.frame, A = w - p.time * 1e3, p.time = w = w / 1e3, h += Y + (Y >= r ? 4 : r - Y), J = 1), Z || (y = _(S)), J)
      for (E = 0; E < d.length; E++)
        d[E](w, A, K, U);
  };
  return p = {
    time: 0,
    frame: 0,
    tick: function() {
      D(!0);
    },
    deltaRatio: function(U) {
      return A / (1e3 / (U || 60));
    },
    wake: function() {
      q_ && (!Tr && Lr() && (dl = Tr = window, Yr = dl.document || {}, Qe.gsap = Me, (dl.gsapVersions || (dl.gsapVersions = [])).push(Me.version), V_(Rf || dl.GreenSockGlobals || !dl.gsap && dl || {}), im.forEach(um)), v = typeof requestAnimationFrame < "u" && requestAnimationFrame, y && p.sleep(), _ = v || function(U) {
        return setTimeout(U, h - p.time * 1e3 + 1 | 0);
      }, Pi = 1, D(2));
    },
    sleep: function() {
      (v ? cancelAnimationFrame : clearTimeout)(y), Pi = 0, _ = Wi;
    },
    lagSmoothing: function(U, G) {
      a = U || 1 / 0, f = Math.min(G || 33, a);
    },
    fps: function(U) {
      r = 1e3 / (U || 240), h = p.time * 1e3 + r;
    },
    add: function(U, G, Z) {
      var Y = G ? function(J, w, K, q) {
        U(J, w, K, q), p.remove(Y);
      } : U;
      return p.remove(U), d[Z ? "unshift" : "push"](Y), Ga(), Y;
    },
    remove: function(U, G) {
      ~(G = d.indexOf(U)) && d.splice(G, 1) && E >= G && E--;
    },
    _listeners: d
  }, p;
})(), Ga = function() {
  return !Pi && qe.wake();
}, Tt = {}, Gg = /^[\d.\-M][\d.\-,\s]/, Xg = /["']/g, Qg = function(a) {
  for (var f = {}, i = a.substr(1, a.length - 3).split(":"), s = i[0], r = 1, h = i.length, d, y, _; r < h; r++)
    y = i[r], d = r !== h - 1 ? y.lastIndexOf(",") : y.length, _ = y.substr(0, d), f[s] = isNaN(_) ? _.replace(Xg, "").trim() : +_, s = y.substr(d + 1).trim();
  return f;
}, Zg = function(a) {
  var f = a.indexOf("(") + 1, i = a.indexOf(")"), s = a.indexOf("(", f);
  return a.substring(f, ~s && s < i ? a.indexOf(")", i + 1) : i);
}, Kg = function(a) {
  var f = (a + "").split("("), i = Tt[f[0]];
  return i && f.length > 1 && i.config ? i.config.apply(null, ~a.indexOf("{") ? [Qg(f[1])] : Zg(a).split(",").map(K_)) : Tt._CE && Gg.test(a) ? Tt._CE("", a) : i;
}, rm = function(a) {
  return function(f) {
    return 1 - a(1 - f);
  };
}, om = function m(a, f) {
  for (var i = a._first, s; i; )
    i instanceof ye ? m(i, f) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== f && (i.timeline ? m(i.timeline, f) : (s = i._ease, i._ease = i._yEase, i._yEase = s, i._yoyo = f)), i = i._next;
}, Zn = function(a, f) {
  return a && (Qt(a) ? a : Tt[a] || Kg(a)) || f;
}, Jn = function(a, f, i, s) {
  i === void 0 && (i = function(y) {
    return 1 - f(1 - y);
  }), s === void 0 && (s = function(y) {
    return y < 0.5 ? f(y * 2) / 2 : 1 - f((1 - y) * 2) / 2;
  });
  var r = {
    easeIn: f,
    easeOut: i,
    easeInOut: s
  }, h;
  return Ee(a, function(d) {
    Tt[d] = Qe[d] = r, Tt[h = d.toLowerCase()] = i;
    for (var y in r)
      Tt[h + (y === "easeIn" ? ".in" : y === "easeOut" ? ".out" : ".inOut")] = Tt[d + "." + y] = r[y];
  }), r;
}, hm = function(a) {
  return function(f) {
    return f < 0.5 ? (1 - a(1 - f * 2)) / 2 : 0.5 + a((f - 0.5) * 2) / 2;
  };
}, _r = function m(a, f, i) {
  var s = f >= 1 ? f : 1, r = (i || (a ? 0.3 : 0.45)) / (f < 1 ? f : 1), h = r / br * (Math.asin(1 / s) || 0), d = function(v) {
    return v === 1 ? 1 : s * Math.pow(2, -10 * v) * gg((v - h) * r) + 1;
  }, y = a === "out" ? d : a === "in" ? function(_) {
    return 1 - d(1 - _);
  } : hm(d);
  return r = br / r, y.config = function(_, v) {
    return m(a, _, v);
  }, y;
}, mr = function m(a, f) {
  f === void 0 && (f = 1.70158);
  var i = function(h) {
    return h ? --h * h * ((f + 1) * h + f) + 1 : 0;
  }, s = a === "out" ? i : a === "in" ? function(r) {
    return 1 - i(1 - r);
  } : hm(i);
  return s.config = function(r) {
    return m(a, r);
  }, s;
};
Ee("Linear,Quad,Cubic,Quart,Quint,Strong", function(m, a) {
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
Jn("Elastic", _r("in"), _r("out"), _r());
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
  return -(H_(1 - m * m) - 1);
});
Jn("Sine", function(m) {
  return m === 1 ? 1 : -yg(m * _g) + 1;
});
Jn("Back", mr("in"), mr("out"), mr());
Tt.SteppedEase = Tt.steps = Qe.SteppedEase = {
  config: function(a, f) {
    a === void 0 && (a = 1);
    var i = 1 / a, s = a + (f ? 0 : 1), r = f ? 1 : 0, h = 1 - jt;
    return function(d) {
      return ((s * lu(0, h, d) | 0) + r) * i;
    };
  }
};
La.ease = Tt["quad.out"];
Ee("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(m) {
  return Gr += m + "," + m + "Params,";
});
var dm = function(a, f) {
  this.id = mg++, a._gsap = this, this.target = a, this.harness = f, this.get = f ? f.get : Q_, this.set = f ? f.getSetter : kr;
}, Ii = /* @__PURE__ */ (function() {
  function m(f) {
    this.vars = f, this._delay = +f.delay || 0, (this._repeat = f.repeat === 1 / 0 ? -2 : f.repeat || 0) && (this._rDelay = f.repeatDelay || 0, this._yoyo = !!f.yoyo || !!f.yoyoEase), this._ts = 1, Va(this, +f.duration, 1, 1), this.data = f.data, Lt && (this._ctx = Lt, Lt.data.push(this)), Pi || qe.wake();
  }
  var a = m.prototype;
  return a.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, a.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, a.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Va(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, a.totalTime = function(i, s) {
    if (Ga(), !arguments.length)
      return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (qf(this, i), !r._dp || r.parent || F_(r, this); r && r.parent; )
        r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && _l(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !s || this._initted && Math.abs(this._zTime) === jt || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Z_(this, i, s)), this;
  }, a.time = function(i, s) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + g_(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), s) : this._time;
  }, a.totalProgress = function(i, s) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, a.progress = function(i, s) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + g_(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, a.iteration = function(i, s) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * r, s) : this._repeat ? qa(this._tTime, r) + 1 : 1;
  }, a.timeScale = function(i, s) {
    if (!arguments.length)
      return this._rts === -jt ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var r = this.parent && this._ts ? jf(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -jt ? 0 : this._rts, this.totalTime(lu(-Math.abs(this._delay), this.totalDuration(), r), s !== !1), Yf(this), Og(this);
  }, a.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ga(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== jt && (this._tTime -= jt)))), this) : this._ps;
  }, a.startTime = function(i) {
    if (arguments.length) {
      this._start = Yt(i);
      var s = this.parent || this._dp;
      return s && (s._sort || !this.parent) && _l(s, this, this._start - this._delay), this;
    }
    return this._start;
  }, a.endTime = function(i) {
    return this._start + (Ae(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, a.rawTime = function(i) {
    var s = this.parent || this._dp;
    return s ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? jf(s.rawTime(i), this) : this._tTime : this._tTime;
  }, a.revert = function(i) {
    i === void 0 && (i = xg);
    var s = se;
    return se = i, Qr(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), se = s, this;
  }, a.globalTime = function(i) {
    for (var s = this, r = arguments.length ? i : s.rawTime(); s; )
      r = s._start + r / (Math.abs(s._ts) || 1), s = s._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : r;
  }, a.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, v_(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, a.repeatDelay = function(i) {
    if (arguments.length) {
      var s = this._time;
      return this._rDelay = i, v_(this), s ? this.time(s) : this;
    }
    return this._rDelay;
  }, a.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, a.seek = function(i, s) {
    return this.totalTime(nl(this, i), Ae(s));
  }, a.restart = function(i, s) {
    return this.play().totalTime(i ? -this._delay : 0, Ae(s)), this._dur || (this._zTime = -jt), this;
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
      var d = Qt(i) ? i : J_, y = function() {
        var v = s.then;
        s.then = null, r && r(), Qt(d) && (d = d(s)) && (d.then || d === s) && (s.then = v), h(d), s.then = v;
      };
      s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? y() : s._prom = y;
    });
  }, a.kill = function() {
    qi(this);
  }, m;
})();
Ze(Ii.prototype, {
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
var ye = /* @__PURE__ */ (function(m) {
  w_(a, m);
  function a(i, s) {
    var r;
    return i === void 0 && (i = {}), r = m.call(this, i) || this, r.labels = {}, r.smoothChildTiming = !!i.smoothChildTiming, r.autoRemoveChildren = !!i.autoRemoveChildren, r._sort = Ae(i.sortChildren), qt && _l(i.parent || qt, wl(r), s), i.reversed && r.reverse(), i.paused && r.paused(!0), i.scrollTrigger && W_(wl(r), i.scrollTrigger), r;
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
  }, f.staggerTo = function(s, r, h, d, y, _, v) {
    return h.duration = r, h.stagger = h.stagger || d, h.onComplete = _, h.onCompleteParams = v, h.parent = this, new It(s, h, nl(this, y)), this;
  }, f.staggerFrom = function(s, r, h, d, y, _, v) {
    return h.runBackwards = 1, Qi(h).immediateRender = Ae(h.immediateRender), this.staggerTo(s, r, h, d, y, _, v);
  }, f.staggerFromTo = function(s, r, h, d, y, _, v, p) {
    return d.startAt = h, Qi(d).immediateRender = Ae(d.immediateRender), this.staggerTo(s, r, d, y, _, v, p);
  }, f.render = function(s, r, h) {
    var d = this._time, y = this._dirty ? this.totalDuration() : this._tDur, _ = this._dur, v = s <= 0 ? 0 : Yt(s), p = this._zTime < 0 != s < 0 && (this._initted || !_), A, E, D, S, U, G, Z, Y, J, w, K, q;
    if (this !== qt && v > y && s >= 0 && (v = y), v !== this._tTime || h || p) {
      if (d !== this._time && _ && (v += this._time - d, s += this._time - d), A = v, J = this._start, Y = this._ts, G = !Y, p && (_ || (d = this._zTime), (s || !r) && (this._zTime = s)), this._repeat) {
        if (K = this._yoyo, U = _ + this._rDelay, this._repeat < -1 && s < 0)
          return this.totalTime(U * 100 + s, r, h);
        if (A = Yt(v % U), v === y ? (S = this._repeat, A = _) : (w = Yt(v / U), S = ~~w, S && S === w && (A = _, S--), A > _ && (A = _)), w = qa(this._tTime, U), !d && this._tTime && w !== S && this._tTime - w * U - this._dur <= 0 && (w = S), K && S & 1 && (A = _ - A, q = 1), S !== w && !this._lock) {
          var F = K && w & 1, X = F === (K && S & 1);
          if (S < w && (F = !F), d = F ? 0 : v % _ ? _ : v, this._lock = 1, this.render(d || (q ? 0 : Yt(S * U)), r, !_)._lock = 0, this._tTime = v, !r && this.parent && Ve(this, "onRepeat"), this.vars.repeatRefresh && !q && (this.invalidate()._lock = 1, w = S), d && d !== this._time || G !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (_ = this._dur, y = this._tDur, X && (this._lock = 2, d = F ? _ : -1e-4, this.render(d, !0), this.vars.repeatRefresh && !q && this.invalidate()), this._lock = 0, !this._ts && !G)
            return this;
          om(this, q);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (Z = Rg(this, Yt(d), Yt(A)), Z && (v -= A - (A = Z._start))), this._tTime = v, this._time = A, this._act = !Y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = s, d = 0), !d && v && _ && !r && !w && (Ve(this, "onStart"), this._tTime !== v))
        return this;
      if (A >= d && s >= 0)
        for (E = this._first; E; ) {
          if (D = E._next, (E._act || A >= E._start) && E._ts && Z !== E) {
            if (E.parent !== this)
              return this.render(s, r, h);
            if (E.render(E._ts > 0 ? (A - E._start) * E._ts : (E._dirty ? E.totalDuration() : E._tDur) + (A - E._start) * E._ts, r, h), A !== this._time || !this._ts && !G) {
              Z = 0, D && (v += this._zTime = -jt);
              break;
            }
          }
          E = D;
        }
      else {
        E = this._last;
        for (var lt = s < 0 ? s : A; E; ) {
          if (D = E._prev, (E._act || lt <= E._end) && E._ts && Z !== E) {
            if (E.parent !== this)
              return this.render(s, r, h);
            if (E.render(E._ts > 0 ? (lt - E._start) * E._ts : (E._dirty ? E.totalDuration() : E._tDur) + (lt - E._start) * E._ts, r, h || se && Qr(E)), A !== this._time || !this._ts && !G) {
              Z = 0, D && (v += this._zTime = lt ? -jt : jt);
              break;
            }
          }
          E = D;
        }
      }
      if (Z && !r && (this.pause(), Z.render(A >= d ? 0 : -jt)._zTime = A >= d ? 1 : -1, this._ts))
        return this._start = J, Yf(this), this.render(s, r, h);
      this._onUpdate && !r && Ve(this, "onUpdate", !0), (v === y && this._tTime >= this.totalDuration() || !v && d) && (J === this._start || Math.abs(Y) !== Math.abs(this._ts)) && (this._lock || ((s || !_) && (v === y && this._ts > 0 || !v && this._ts < 0) && yn(this, 1), !r && !(s < 0 && !d) && (v || d || !y) && (Ve(this, v === y && s >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < y && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, f.add = function(s, r) {
    var h = this;
    if (Bl(r) || (r = nl(this, r, s)), !(s instanceof Ii)) {
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
    for (var y = [], _ = this._first; _; )
      _._start >= d && (_ instanceof It ? r && y.push(_) : (h && y.push(_), s && y.push.apply(y, _.getChildren(!0, r, h)))), _ = _._next;
    return y;
  }, f.getById = function(s) {
    for (var r = this.getChildren(1, 1, 1), h = r.length; h--; )
      if (r[h].vars.id === s)
        return r[h];
  }, f.remove = function(s) {
    return ne(s) ? this.removeLabel(s) : Qt(s) ? this.killTweensOf(s) : (s.parent === this && Lf(this, s), s === this._recent && (this._recent = this._last), Qn(this));
  }, f.totalTime = function(s, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Yt(qe.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))), m.prototype.totalTime.call(this, s, r), this._forcing = 0, this) : this._tTime;
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
      r._start === s && r.data === "isPause" && yn(r), r = r._next;
  }, f.killTweensOf = function(s, r, h) {
    for (var d = this.getTweensOf(s, h), y = d.length; y--; )
      on !== d[y] && d[y].kill(s, r);
    return this;
  }, f.getTweensOf = function(s, r) {
    for (var h = [], d = il(s), y = this._first, _ = Bl(r), v; y; )
      y instanceof It ? Ag(y._targets, d) && (_ ? (!on || y._initted && y._ts) && y.globalTime(0) <= r && y.globalTime(y.totalDuration()) > r : !r || y.isActive()) && h.push(y) : (v = y.getTweensOf(d, r)).length && h.push.apply(h, v), y = y._next;
    return h;
  }, f.tweenTo = function(s, r) {
    r = r || {};
    var h = this, d = nl(h, s), y = r, _ = y.startAt, v = y.onStart, p = y.onStartParams, A = y.immediateRender, E, D = It.to(h, Ze({
      ease: r.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: d,
      overwrite: "auto",
      duration: r.duration || Math.abs((d - (_ && "time" in _ ? _.time : h._time)) / h.timeScale()) || jt,
      onStart: function() {
        if (h.pause(), !E) {
          var U = r.duration || Math.abs((d - (_ && "time" in _ ? _.time : h._time)) / h.timeScale());
          D._dur !== U && Va(D, U, 0, 1).render(D._time, !0, !0), E = 1;
        }
        v && v.apply(D, p || []);
      }
    }, r));
    return A ? D.render(0) : D;
  }, f.tweenFromTo = function(s, r, h) {
    return this.tweenTo(r, Ze({
      startAt: {
        time: nl(this, s)
      }
    }, h));
  }, f.recent = function() {
    return this._recent;
  }, f.nextLabel = function(s) {
    return s === void 0 && (s = this._time), p_(this, nl(this, s));
  }, f.previousLabel = function(s) {
    return s === void 0 && (s = this._time), p_(this, nl(this, s), 1);
  }, f.currentLabel = function(s) {
    return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + jt);
  }, f.shiftChildren = function(s, r, h) {
    h === void 0 && (h = 0);
    var d = this._first, y = this.labels, _;
    for (s = Yt(s); d; )
      d._start >= h && (d._start += s, d._end += s), d = d._next;
    if (r)
      for (_ in y)
        y[_] >= h && (y[_] += s);
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
    var r = 0, h = this, d = h._last, y = al, _, v, p;
    if (arguments.length)
      return h.timeScale((h._repeat < 0 ? h.duration() : h.totalDuration()) / (h.reversed() ? -s : s));
    if (h._dirty) {
      for (p = h.parent; d; )
        _ = d._prev, d._dirty && d.totalDuration(), v = d._start, v > y && h._sort && d._ts && !h._lock ? (h._lock = 1, _l(h, d, v - d._delay, 1)._lock = 0) : y = v, v < 0 && d._ts && (r -= v, (!p && !h._dp || p && p.smoothChildTiming) && (h._start += Yt(v / h._ts), h._time -= v, h._tTime -= v), h.shiftChildren(-v, !1, -1 / 0), y = 0), d._end > r && d._ts && (r = d._end), d = _;
      Va(h, h === qt && h._time > r ? h._time : r, 1, 1), h._dirty = 0;
    }
    return h._tDur;
  }, a.updateRoot = function(s) {
    if (qt._ts && (Z_(qt, jf(s, qt)), X_ = qe.frame), qe.frame >= m_) {
      m_ += Xe.autoSleep || 120;
      var r = qt._first;
      if ((!r || !r._ts) && Xe.autoSleep && qe._listeners.length < 2) {
        for (; r && !r._ts; )
          r = r._next;
        r || qe.sleep();
      }
    }
  }, a;
})(Ii);
Ze(ye.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Jg = function(a, f, i, s, r, h, d) {
  var y = new ze(this._pt, a, f, 0, 1, pm, null, r), _ = 0, v = 0, p, A, E, D, S, U, G, Z;
  for (y.b = i, y.e = s, i += "", s += "", (G = ~s.indexOf("random(")) && (s = $i(s)), h && (Z = [i, s], h(Z, a, f), i = Z[0], s = Z[1]), A = i.match(or) || []; p = or.exec(s); )
    D = p[0], S = s.substring(_, p.index), E ? E = (E + 1) % 5 : S.substr(-5) === "rgba(" && (E = 1), D !== A[v++] && (U = parseFloat(A[v - 1]) || 0, y._pt = {
      _next: y._pt,
      p: S || v === 1 ? S : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: U,
      c: D.charAt(1) === "=" ? wa(U, D) - U : parseFloat(D) - U,
      m: E && E < 4 ? Math.round : 0
    }, _ = or.lastIndex);
  return y.c = _ < s.length ? s.substring(_, s.length) : "", y.fp = d, (Y_.test(s) || G) && (y.e = 0), this._pt = y, y;
}, Zr = function(a, f, i, s, r, h, d, y, _, v) {
  Qt(s) && (s = s(r || 0, a, h));
  var p = a[f], A = i !== "get" ? i : Qt(p) ? _ ? a[f.indexOf("set") || !Qt(a["get" + f.substr(3)]) ? f : "get" + f.substr(3)](_) : a[f]() : p, E = Qt(p) ? _ ? Pg : gm : Jr, D;
  if (ne(s) && (~s.indexOf("random(") && (s = $i(s)), s.charAt(1) === "=" && (D = wa(A, s) + (he(A) || 0), (D || D === 0) && (s = D))), !v || A !== s || Cr)
    return !isNaN(A * s) && s !== "" ? (D = new ze(this._pt, a, f, +A || 0, s - (A || 0), typeof p == "boolean" ? tv : vm, 0, E), _ && (D.fp = _), d && D.modifier(d, this, a), this._pt = D) : (!p && !(f in a) && qr(f, s), Jg.call(this, a, f, A, s, E, y || Xe.stringFilter, _));
}, kg = function(a, f, i, s, r) {
  if (Qt(a) && (a = Ki(a, r, f, i, s)), !yl(a) || a.style && a.nodeType || de(a) || B_(a))
    return ne(a) ? Ki(a, r, f, i, s) : a;
  var h = {}, d;
  for (d in a)
    h[d] = Ki(a[d], r, f, i, s);
  return h;
}, _m = function(a, f, i, s, r, h) {
  var d, y, _, v;
  if (Ye[a] && (d = new Ye[a]()).init(r, d.rawVars ? f[a] : kg(f[a], s, r, h, i), i, s, h) !== !1 && (i._pt = y = new ze(i._pt, r, a, 0, 1, d.render, d, 0, d.priority), i !== ja))
    for (_ = i._ptLookup[i._targets.indexOf(r)], v = d._props.length; v--; )
      _[d._props[v]] = y;
  return d;
}, on, Cr, Kr = function m(a, f, i) {
  var s = a.vars, r = s.ease, h = s.startAt, d = s.immediateRender, y = s.lazy, _ = s.onUpdate, v = s.runBackwards, p = s.yoyoEase, A = s.keyframes, E = s.autoRevert, D = a._dur, S = a._startAt, U = a._targets, G = a.parent, Z = G && G.data === "nested" ? G.vars.targets : U, Y = a._overwrite === "auto" && !Hr, J = a.timeline, w, K, q, F, X, lt, rt, nt, ut, ct, ot, R, k;
  if (J && (!A || !r) && (r = "none"), a._ease = Zn(r, La.ease), a._yEase = p ? rm(Zn(p === !0 ? r : p, La.ease)) : 0, p && a._yoyo && !a._repeat && (p = a._yEase, a._yEase = a._ease, a._ease = p), a._from = !J && !!s.runBackwards, !J || A && !s.stagger) {
    if (nt = U[0] ? Xn(U[0]).harness : 0, R = nt && s[nt.prop], w = Uf(s, Vr), S && (S._zTime < 0 && S.progress(1), f < 0 && v && d && !E ? S.render(-1, !0) : S.revert(v && D ? Af : Tg), S._lazy = 0), h) {
      if (yn(a._startAt = It.set(U, Ze({
        data: "isStart",
        overwrite: !1,
        parent: G,
        immediateRender: !0,
        lazy: !S && Ae(y),
        startAt: null,
        delay: 0,
        onUpdate: _ && function() {
          return Ve(a, "onUpdate");
        },
        stagger: 0
      }, h))), a._startAt._dp = 0, a._startAt._sat = a, f < 0 && (se || !d && !E) && a._startAt.revert(Af), d && D && f <= 0 && i <= 0) {
        f && (a._zTime = f);
        return;
      }
    } else if (v && D && !S) {
      if (f && (d = !1), q = Ze({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: d && !S && Ae(y),
        immediateRender: d,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: G
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, w), R && (q[nt.prop] = R), yn(a._startAt = It.set(U, q)), a._startAt._dp = 0, a._startAt._sat = a, f < 0 && (se ? a._startAt.revert(Af) : a._startAt.render(-1, !0)), a._zTime = f, !d)
        m(a._startAt, jt, jt);
      else if (!f)
        return;
    }
    for (a._pt = a._ptCache = 0, y = D && Ae(y) || y && !D, K = 0; K < U.length; K++) {
      if (X = U[K], rt = X._gsap || Xr(U)[K]._gsap, a._ptLookup[K] = ct = {}, xr[rt.id] && _n.length && Nf(), ot = Z === U ? K : Z.indexOf(X), nt && (ut = new nt()).init(X, R || w, a, ot, Z) !== !1 && (a._pt = F = new ze(a._pt, X, ut.name, 0, 1, ut.render, ut, 0, ut.priority), ut._props.forEach(function(P) {
        ct[P] = F;
      }), ut.priority && (lt = 1)), !nt || R)
        for (q in w)
          Ye[q] && (ut = _m(q, w, a, ot, X, Z)) ? ut.priority && (lt = 1) : ct[q] = F = Zr.call(a, X, q, "get", w[q], ot, Z, 0, s.stringFilter);
      a._op && a._op[K] && a.kill(X, a._op[K]), Y && a._pt && (on = a, qt.killTweensOf(X, ct, a.globalTime(f)), k = !a.parent, on = 0), a._pt && y && (xr[rt.id] = 1);
    }
    lt && Sm(a), a._onInit && a._onInit(a);
  }
  a._onUpdate = _, a._initted = (!a._op || a._pt) && !k, A && f <= 0 && J.render(al, !0, !0);
}, Fg = function(a, f, i, s, r, h, d, y) {
  var _ = (a._pt && a._ptCache || (a._ptCache = {}))[f], v, p, A, E;
  if (!_)
    for (_ = a._ptCache[f] = [], A = a._ptLookup, E = a._targets.length; E--; ) {
      if (v = A[E][f], v && v.d && v.d._pt)
        for (v = v.d._pt; v && v.p !== f && v.fp !== f; )
          v = v._next;
      if (!v)
        return Cr = 1, a.vars[f] = "+=0", Kr(a, d), Cr = 0, y ? Fi(f + " not eligible for reset") : 1;
      _.push(v);
    }
  for (E = _.length; E--; )
    p = _[E], v = p._pt || p, v.s = (s || s === 0) && !r ? s : v.s + (s || 0) + h * v.c, v.c = i - v.s, p.e && (p.e = kt(i) + he(p.e)), p.b && (p.b = v.s + he(p.b));
}, Wg = function(a, f) {
  var i = a[0] ? Xn(a[0]).harness : 0, s = i && i.aliases, r, h, d, y;
  if (!s)
    return f;
  r = Ya({}, f);
  for (h in s)
    if (h in r)
      for (y = s[h].split(","), d = y.length; d--; )
        r[y[d]] = r[h];
  return r;
}, $g = function(a, f, i, s) {
  var r = f.ease || s || "power1.inOut", h, d;
  if (de(f))
    d = i[a] || (i[a] = []), f.forEach(function(y, _) {
      return d.push({
        t: _ / (f.length - 1) * 100,
        v: y,
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
}, mm = Gr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ym = {};
Ee(mm + ",id,stagger,delay,duration,paused,scrollTrigger", function(m) {
  return ym[m] = 1;
});
var It = /* @__PURE__ */ (function(m) {
  w_(a, m);
  function a(i, s, r, h) {
    var d;
    typeof s == "number" && (r.duration = s, s = r, r = null), d = m.call(this, h ? s : Qi(s)) || this;
    var y = d.vars, _ = y.duration, v = y.delay, p = y.immediateRender, A = y.stagger, E = y.overwrite, D = y.keyframes, S = y.defaults, U = y.scrollTrigger, G = y.yoyoEase, Z = s.parent || qt, Y = (de(i) || B_(i) ? Bl(i[0]) : "length" in s) ? [i] : il(i), J, w, K, q, F, X, lt, rt;
    if (d._targets = Y.length ? Xr(Y) : Fi("GSAP target " + i + " not found. https://gsap.com", !Xe.nullTargetWarn) || [], d._ptLookup = [], d._overwrite = E, D || A || Tf(_) || Tf(v)) {
      if (s = d.vars, J = d.timeline = new ye({
        data: "nested",
        defaults: S || {},
        targets: Z && Z.data === "nested" ? Z.vars.targets : Y
      }), J.kill(), J.parent = J._dp = wl(d), J._start = 0, A || Tf(_) || Tf(v)) {
        if (q = Y.length, lt = A && tm(A), yl(A))
          for (F in A)
            ~mm.indexOf(F) && (rt || (rt = {}), rt[F] = A[F]);
        for (w = 0; w < q; w++)
          K = Uf(s, ym), K.stagger = 0, G && (K.yoyoEase = G), rt && Ya(K, rt), X = Y[w], K.duration = +Ki(_, wl(d), w, X, Y), K.delay = (+Ki(v, wl(d), w, X, Y) || 0) - d._delay, !A && q === 1 && K.delay && (d._delay = v = K.delay, d._start += v, K.delay = 0), J.to(X, K, lt ? lt(w, X, Y) : 0), J._ease = Tt.none;
        J.duration() ? _ = v = 0 : d.timeline = 0;
      } else if (D) {
        Qi(Ze(J.vars.defaults, {
          ease: "none"
        })), J._ease = Zn(D.ease || s.ease || "none");
        var nt = 0, ut, ct, ot;
        if (de(D))
          D.forEach(function(R) {
            return J.to(Y, R, ">");
          }), J.duration();
        else {
          K = {};
          for (F in D)
            F === "ease" || F === "easeEach" || $g(F, D[F], K, D.easeEach);
          for (F in K)
            for (ut = K[F].sort(function(R, k) {
              return R.t - k.t;
            }), nt = 0, w = 0; w < ut.length; w++)
              ct = ut[w], ot = {
                ease: ct.e,
                duration: (ct.t - (w ? ut[w - 1].t : 0)) / 100 * _
              }, ot[F] = ct.v, J.to(Y, ot, nt), nt += ot.duration;
          J.duration() < _ && J.to({}, {
            duration: _ - J.duration()
          });
        }
      }
      _ || d.duration(_ = J.duration());
    } else
      d.timeline = 0;
    return E === !0 && !Hr && (on = wl(d), qt.killTweensOf(Y), on = 0), _l(Z, wl(d), r), s.reversed && d.reverse(), s.paused && d.paused(!0), (p || !_ && !D && d._start === Yt(Z._time) && Ae(p) && Mg(wl(d)) && Z.data !== "nested") && (d._tTime = -jt, d.render(Math.max(0, -v) || 0)), U && W_(wl(d), U), d;
  }
  var f = a.prototype;
  return f.render = function(s, r, h) {
    var d = this._time, y = this._tDur, _ = this._dur, v = s < 0, p = s > y - jt && !v ? y : s < jt ? 0 : s, A, E, D, S, U, G, Z, Y, J;
    if (!_)
      Dg(this, s, r, h);
    else if (p !== this._tTime || !s || h || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== v || this._lazy) {
      if (A = p, Y = this.timeline, this._repeat) {
        if (S = _ + this._rDelay, this._repeat < -1 && v)
          return this.totalTime(S * 100 + s, r, h);
        if (A = Yt(p % S), p === y ? (D = this._repeat, A = _) : (U = Yt(p / S), D = ~~U, D && D === U ? (A = _, D--) : A > _ && (A = _)), G = this._yoyo && D & 1, G && (J = this._yEase, A = _ - A), U = qa(this._tTime, S), A === d && !h && this._initted && D === U)
          return this._tTime = p, this;
        D !== U && (Y && this._yEase && om(Y, G), this.vars.repeatRefresh && !G && !this._lock && A !== S && this._initted && (this._lock = h = 1, this.render(Yt(S * D), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if ($_(this, v ? s : A, h, r, p))
          return this._tTime = 0, this;
        if (d !== this._time && !(h && this.vars.repeatRefresh && D !== U))
          return this;
        if (_ !== this._dur)
          return this.render(s, r, h);
      }
      if (this._tTime = p, this._time = A, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = Z = (J || this._ease)(A / _), this._from && (this.ratio = Z = 1 - Z), !d && p && !r && !U && (Ve(this, "onStart"), this._tTime !== p))
        return this;
      for (E = this._pt; E; )
        E.r(Z, E.d), E = E._next;
      Y && Y.render(s < 0 ? s : Y._dur * Y._ease(A / this._dur), r, h) || this._startAt && (this._zTime = s), this._onUpdate && !r && (v && Ar(this, s, r, h), Ve(this, "onUpdate")), this._repeat && D !== U && this.vars.onRepeat && !r && this.parent && Ve(this, "onRepeat"), (p === this._tDur || !p) && this._tTime === p && (v && !this._onUpdate && Ar(this, s, !0, !0), (s || !_) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && yn(this, 1), !r && !(v && !d) && (p || d || G) && (Ve(this, p === y ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < y && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, f.targets = function() {
    return this._targets;
  }, f.invalidate = function(s) {
    return (!s || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(s), m.prototype.invalidate.call(this, s);
  }, f.resetTo = function(s, r, h, d, y) {
    Pi || qe.wake(), this._ts || this.play();
    var _ = Math.min(this._dur, (this._dp._time - this._start) * this._ts), v;
    return this._initted || Kr(this, _), v = this._ease(_ / this._dur), Fg(this, s, r, h, d, v, _, y) ? this.resetTo(s, r, h, d, 1) : (qf(this, 0), this.parent || k_(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, f.kill = function(s, r) {
    if (r === void 0 && (r = "all"), !s && (!r || r === "all"))
      return this._lazy = this._pt = 0, this.parent ? qi(this) : this.scrollTrigger && this.scrollTrigger.kill(!!se), this;
    if (this.timeline) {
      var h = this.timeline.totalDuration();
      return this.timeline.killTweensOf(s, r, on && on.vars.overwrite !== !0)._first || qi(this), this.parent && h !== this.timeline.totalDuration() && Va(this, this._dur * this.timeline._tDur / h, 0, 1), this;
    }
    var d = this._targets, y = s ? il(s) : d, _ = this._ptLookup, v = this._pt, p, A, E, D, S, U, G;
    if ((!r || r === "all") && zg(d, y))
      return r === "all" && (this._pt = 0), qi(this);
    for (p = this._op = this._op || [], r !== "all" && (ne(r) && (S = {}, Ee(r, function(Z) {
      return S[Z] = 1;
    }), r = S), r = Wg(d, r)), G = d.length; G--; )
      if (~y.indexOf(d[G])) {
        A = _[G], r === "all" ? (p[G] = r, D = A, E = {}) : (E = p[G] = p[G] || {}, D = r);
        for (S in D)
          U = A && A[S], U && ((!("kill" in U.d) || U.d.kill(S) === !0) && Lf(this, U, "_pt"), delete A[S]), E !== "all" && (E[S] = 1);
      }
    return this._initted && !this._pt && v && qi(this), this;
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
    return qt.killTweensOf(s, r, h);
  }, a;
})(Ii);
Ze(It.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ee("staggerTo,staggerFrom,staggerFromTo", function(m) {
  It[m] = function() {
    var a = new ye(), f = zr.call(arguments, 0);
    return f.splice(m === "staggerFromTo" ? 5 : 4, 0, 0), a[m].apply(a, f);
  };
});
var Jr = function(a, f, i) {
  return a[f] = i;
}, gm = function(a, f, i) {
  return a[f](i);
}, Pg = function(a, f, i, s) {
  return a[f](s.fp, i);
}, Ig = function(a, f, i) {
  return a.setAttribute(f, i);
}, kr = function(a, f) {
  return Qt(a[f]) ? gm : Br(a[f]) && a.setAttribute ? Ig : Jr;
}, vm = function(a, f) {
  return f.set(f.t, f.p, Math.round((f.s + f.c * a) * 1e6) / 1e6, f);
}, tv = function(a, f) {
  return f.set(f.t, f.p, !!(f.s + f.c * a), f);
}, pm = function(a, f) {
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
}, Fr = function(a, f) {
  for (var i = f._pt; i; )
    i.r(a, i.d), i = i._next;
}, ev = function(a, f, i, s) {
  for (var r = this._pt, h; r; )
    h = r._next, r.p === s && r.modifier(a, f, i), r = h;
}, lv = function(a) {
  for (var f = this._pt, i, s; f; )
    s = f._next, f.p === a && !f.op || f.op === a ? Lf(this, f, "_pt") : f.dep || (i = 1), f = s;
  return !i;
}, nv = function(a, f, i, s) {
  s.mSet(a, f, s.m.call(s.tween, i, s.mt), s);
}, Sm = function(a) {
  for (var f = a._pt, i, s, r, h; f; ) {
    for (i = f._next, s = r; s && s.pr > f.pr; )
      s = s._next;
    (f._prev = s ? s._prev : h) ? f._prev._next = f : r = f, (f._next = s) ? s._prev = f : h = f, f = i;
  }
  a._pt = r;
}, ze = /* @__PURE__ */ (function() {
  function m(f, i, s, r, h, d, y, _, v) {
    this.t = i, this.s = r, this.c = h, this.p = s, this.r = d || vm, this.d = y || this, this.set = _ || Jr, this.pr = v || 0, this._next = f, f && (f._prev = this);
  }
  var a = m.prototype;
  return a.modifier = function(i, s, r) {
    this.mSet = this.mSet || this.set, this.set = nv, this.m = i, this.mt = r, this.tween = s;
  }, m;
})();
Ee(Gr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(m) {
  return Vr[m] = 1;
});
Qe.TweenMax = Qe.TweenLite = It;
Qe.TimelineLite = Qe.TimelineMax = ye;
qt = new ye({
  sortChildren: !1,
  defaults: La,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Xe.stringFilter = sm;
var Kn = [], zf = {}, av = [], b_ = 0, iv = 0, yr = function(a) {
  return (zf[a] || av).map(function(f) {
    return f();
  });
}, Dr = function() {
  var a = Date.now(), f = [];
  a - b_ > 2 && (yr("matchMediaInit"), Kn.forEach(function(i) {
    var s = i.queries, r = i.conditions, h, d, y, _;
    for (d in s)
      h = dl.matchMedia(s[d]).matches, h && (y = 1), h !== r[d] && (r[d] = h, _ = 1);
    _ && (i.revert(), y && f.push(i));
  }), yr("matchMediaRevert"), f.forEach(function(i) {
    return i.onMatch(i, function(s) {
      return i.add(null, s);
    });
  }), b_ = a, yr("matchMedia"));
}, bm = /* @__PURE__ */ (function() {
  function m(f, i) {
    this.selector = i && Or(i), this.data = [], this._r = [], this.isReverted = !1, this.id = iv++, f && this.add(f);
  }
  var a = m.prototype;
  return a.add = function(i, s, r) {
    Qt(i) && (r = s, s = i, i = Qt);
    var h = this, d = function() {
      var _ = Lt, v = h.selector, p;
      return _ && _ !== h && _.data.push(h), r && (h.selector = Or(r)), Lt = h, p = s.apply(h, arguments), Qt(p) && h._r.push(p), Lt = _, h.selector = v, h.isReverted = !1, p;
    };
    return h.last = d, i === Qt ? d(h, function(y) {
      return h.add(null, y);
    }) : i ? h[i] = d : d;
  }, a.ignore = function(i) {
    var s = Lt;
    Lt = null, i(this), Lt = s;
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
      for (var d = r.getTweens(), y = r.data.length, _; y--; )
        _ = r.data[y], _.data === "isFlip" && (_.revert(), _.getChildren(!0, !0, !1).forEach(function(v) {
          return d.splice(d.indexOf(v), 1);
        }));
      for (d.map(function(v) {
        return {
          g: v._dur || v._delay || v._sat && !v._sat.vars.immediateRender ? v.globalTime(0) : -1 / 0,
          t: v
        };
      }).sort(function(v, p) {
        return p.g - v.g || -1 / 0;
      }).forEach(function(v) {
        return v.t.revert(i);
      }), y = r.data.length; y--; )
        _ = r.data[y], _ instanceof ye ? _.data !== "nested" && (_.scrollTrigger && _.scrollTrigger.revert(), _.kill()) : !(_ instanceof It) && _.revert && _.revert(i);
      r._r.forEach(function(v) {
        return v(i, r);
      }), r.isReverted = !0;
    })() : this.data.forEach(function(d) {
      return d.kill && d.kill();
    }), this.clear(), s)
      for (var h = Kn.length; h--; )
        Kn[h].id === this.id && Kn.splice(h, 1);
  }, a.revert = function(i) {
    this.kill(i || {});
  }, m;
})(), uv = /* @__PURE__ */ (function() {
  function m(f) {
    this.contexts = [], this.scope = f, Lt && Lt.data.push(this);
  }
  var a = m.prototype;
  return a.add = function(i, s, r) {
    yl(i) || (i = {
      matches: i
    });
    var h = new bm(0, r || this.scope), d = h.conditions = {}, y, _, v;
    Lt && !h.selector && (h.selector = Lt.selector), this.contexts.push(h), s = h.add("onMatch", s), h.queries = i;
    for (_ in i)
      _ === "all" ? v = 1 : (y = dl.matchMedia(i[_]), y && (Kn.indexOf(h) < 0 && Kn.push(h), (d[_] = y.matches) && (v = 1), y.addListener ? y.addListener(Dr) : y.addEventListener("change", Dr)));
    return v && s(h, function(p) {
      return h.add(null, p);
    }), this;
  }, a.revert = function(i) {
    this.kill(i || {});
  }, a.kill = function(i) {
    this.contexts.forEach(function(s) {
      return s.kill(i, !0);
    });
  }, m;
})(), wf = {
  registerPlugin: function() {
    for (var a = arguments.length, f = new Array(a), i = 0; i < a; i++)
      f[i] = arguments[i];
    f.forEach(function(s) {
      return um(s);
    });
  },
  timeline: function(a) {
    return new ye(a);
  },
  getTweensOf: function(a, f) {
    return qt.getTweensOf(a, f);
  },
  getProperty: function(a, f, i, s) {
    ne(a) && (a = il(a)[0]);
    var r = Xn(a || {}).get, h = i ? J_ : K_;
    return i === "native" && (i = ""), a && (f ? h((Ye[f] && Ye[f].get || r)(a, f, i, s)) : function(d, y, _) {
      return h((Ye[d] && Ye[d].get || r)(a, d, y, _));
    });
  },
  quickSetter: function(a, f, i) {
    if (a = il(a), a.length > 1) {
      var s = a.map(function(v) {
        return Me.quickSetter(v, f, i);
      }), r = s.length;
      return function(v) {
        for (var p = r; p--; )
          s[p](v);
      };
    }
    a = a[0] || {};
    var h = Ye[f], d = Xn(a), y = d.harness && (d.harness.aliases || {})[f] || f, _ = h ? function(v) {
      var p = new h();
      ja._pt = 0, p.init(a, i ? v + i : v, ja, 0, [a]), p.render(1, p), ja._pt && Fr(1, ja);
    } : d.set(a, y);
    return h ? _ : function(v) {
      return _(a, y, i ? v + i : v, d, 1);
    };
  },
  quickTo: function(a, f, i) {
    var s, r = Me.to(a, Ze((s = {}, s[f] = "+=0.1", s.paused = !0, s.stagger = 0, s), i || {})), h = function(y, _, v) {
      return r.resetTo(f, y, _, v);
    };
    return h.tween = r, h;
  },
  isTweening: function(a) {
    return qt.getTweensOf(a, !0).length > 0;
  },
  defaults: function(a) {
    return a && a.ease && (a.ease = Zn(a.ease, La.ease)), y_(La, a || {});
  },
  config: function(a) {
    return y_(Xe, a || {});
  },
  registerEffect: function(a) {
    var f = a.name, i = a.effect, s = a.plugins, r = a.defaults, h = a.extendTimeline;
    (s || "").split(",").forEach(function(d) {
      return d && !Ye[d] && !Qe[d] && Fi(f + " effect requires " + d + " plugin.");
    }), hr[f] = function(d, y, _) {
      return i(il(d), Ze(y || {}, r), _);
    }, h && (ye.prototype[f] = function(d, y, _) {
      return this.add(hr[f](d, yl(y) ? y : (_ = y) && {}, this), _);
    });
  },
  registerEase: function(a, f) {
    Tt[a] = Zn(f);
  },
  parseEase: function(a, f) {
    return arguments.length ? Zn(a, f) : Tt;
  },
  getById: function(a) {
    return qt.getById(a);
  },
  exportRoot: function(a, f) {
    a === void 0 && (a = {});
    var i = new ye(a), s, r;
    for (i.smoothChildTiming = Ae(a.smoothChildTiming), qt.remove(i), i._dp = 0, i._time = i._tTime = qt._time, s = qt._first; s; )
      r = s._next, (f || !(!s._dur && s instanceof It && s.vars.onComplete === s._targets[0])) && _l(i, s, s._start - s._delay), s = r;
    return _l(qt, i, 0), i;
  },
  context: function(a, f) {
    return a ? new bm(a, f) : Lt;
  },
  matchMedia: function(a) {
    return new uv(a);
  },
  matchMediaRefresh: function() {
    return Kn.forEach(function(a) {
      var f = a.conditions, i, s;
      for (s in f)
        f[s] && (f[s] = !1, i = 1);
      i && a.revert();
    }) || Dr();
  },
  addEventListener: function(a, f) {
    var i = zf[a] || (zf[a] = []);
    ~i.indexOf(f) || i.push(f);
  },
  removeEventListener: function(a, f) {
    var i = zf[a], s = i && i.indexOf(f);
    s >= 0 && i.splice(s, 1);
  },
  utils: {
    wrap: Lg,
    wrapYoyo: Yg,
    distribute: tm,
    random: lm,
    snap: em,
    normalize: Bg,
    getUnit: he,
    clamp: Ug,
    splitColor: fm,
    toArray: il,
    selector: Or,
    mapRange: am,
    pipe: wg,
    unitize: Hg,
    interpolate: qg,
    shuffle: I_
  },
  install: V_,
  effects: hr,
  ticker: qe,
  updateRoot: ye.updateRoot,
  plugins: Ye,
  globalTimeline: qt,
  core: {
    PropTween: ze,
    globals: G_,
    Tween: It,
    Timeline: ye,
    Animation: Ii,
    getCache: Xn,
    _removeLinkedListItem: Lf,
    reverting: function() {
      return se;
    },
    context: function(a) {
      return a && Lt && (Lt.data.push(a), a._ctx = Lt), Lt;
    },
    suppressOverwrites: function(a) {
      return Hr = a;
    }
  }
};
Ee("to,from,fromTo,delayedCall,set,killTweensOf", function(m) {
  return wf[m] = It[m];
});
qe.add(ye.updateRoot);
ja = wf.to({}, {
  duration: 0
});
var fv = function(a, f) {
  for (var i = a._pt; i && i.p !== f && i.op !== f && i.fp !== f; )
    i = i._next;
  return i;
}, cv = function(a, f) {
  var i = a._targets, s, r, h;
  for (s in f)
    for (r = i.length; r--; )
      h = a._ptLookup[r][s], h && (h = h.d) && (h._pt && (h = fv(h, s)), h && h.modifier && h.modifier(f[s], a, i[r], s));
}, gr = function(a, f) {
  return {
    name: a,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(s, r, h) {
      h._onInit = function(d) {
        var y, _;
        if (ne(r) && (y = {}, Ee(r, function(v) {
          return y[v] = 1;
        }), r = y), f) {
          y = {};
          for (_ in r)
            y[_] = f(r[_]);
          r = y;
        }
        cv(d, r);
      };
    }
  };
}, Me = wf.registerPlugin({
  name: "attr",
  init: function(a, f, i, s, r) {
    var h, d, y;
    this.tween = i;
    for (h in f)
      y = a.getAttribute(h) || "", d = this.add(a, "setAttribute", (y || 0) + "", f[h], s, r, 0, 0, h), d.op = h, d.b = y, this._props.push(h);
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
}, gr("roundProps", Mr), gr("modifiers"), gr("snap", em)) || wf;
It.version = ye.version = Me.version = "3.14.2";
q_ = 1;
Lr() && Ga();
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
var T_, hn, Ha, Wr, Gn, x_, $r, sv = function() {
  return typeof window < "u";
}, Ll = {}, Vn = 180 / Math.PI, Ba = Math.PI / 180, Na = Math.atan2, A_ = 1e8, Pr = /([A-Z])/g, rv = /(left|right|width|margin|padding|x)/i, ov = /[\s,\(]\S/, ml = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Rr = function(a, f) {
  return f.set(f.t, f.p, Math.round((f.s + f.c * a) * 1e4) / 1e4 + f.u, f);
}, hv = function(a, f) {
  return f.set(f.t, f.p, a === 1 ? f.e : Math.round((f.s + f.c * a) * 1e4) / 1e4 + f.u, f);
}, dv = function(a, f) {
  return f.set(f.t, f.p, a ? Math.round((f.s + f.c * a) * 1e4) / 1e4 + f.u : f.b, f);
}, _v = function(a, f) {
  return f.set(f.t, f.p, a === 1 ? f.e : a ? Math.round((f.s + f.c * a) * 1e4) / 1e4 + f.u : f.b, f);
}, mv = function(a, f) {
  var i = f.s + f.c * a;
  f.set(f.t, f.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + f.u, f);
}, Tm = function(a, f) {
  return f.set(f.t, f.p, a ? f.e : f.b, f);
}, xm = function(a, f) {
  return f.set(f.t, f.p, a !== 1 ? f.b : f.e, f);
}, yv = function(a, f, i) {
  return a.style[f] = i;
}, gv = function(a, f, i) {
  return a.style.setProperty(f, i);
}, vv = function(a, f, i) {
  return a._gsap[f] = i;
}, pv = function(a, f, i) {
  return a._gsap.scaleX = a._gsap.scaleY = i;
}, Sv = function(a, f, i, s, r) {
  var h = a._gsap;
  h.scaleX = h.scaleY = i, h.renderTransform(r, h);
}, bv = function(a, f, i, s, r) {
  var h = a._gsap;
  h[f] = i, h.renderTransform(r, h);
}, Vt = "transform", Oe = Vt + "Origin", Tv = function m(a, f) {
  var i = this, s = this.target, r = s.style, h = s._gsap;
  if (a in Ll && r) {
    if (this.tfm = this.tfm || {}, a !== "transform")
      a = ml[a] || a, ~a.indexOf(",") ? a.split(",").forEach(function(d) {
        return i.tfm[d] = Hl(s, d);
      }) : this.tfm[a] = h.x ? h[a] : Hl(s, a), a === Oe && (this.tfm.zOrigin = h.zOrigin);
    else
      return ml.transform.split(",").forEach(function(d) {
        return m.call(i, d, f);
      });
    if (this.props.indexOf(Vt) >= 0)
      return;
    h.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(Oe, f, "")), a = Vt;
  }
  (r || f) && this.props.push(a, f, r[a]);
}, Am = function(a) {
  a.translate && (a.removeProperty("translate"), a.removeProperty("scale"), a.removeProperty("rotate"));
}, xv = function() {
  var a = this.props, f = this.target, i = f.style, s = f._gsap, r, h;
  for (r = 0; r < a.length; r += 3)
    a[r + 1] ? a[r + 1] === 2 ? f[a[r]](a[r + 2]) : f[a[r]] = a[r + 2] : a[r + 2] ? i[a[r]] = a[r + 2] : i.removeProperty(a[r].substr(0, 2) === "--" ? a[r] : a[r].replace(Pr, "-$1").toLowerCase());
  if (this.tfm) {
    for (h in this.tfm)
      s[h] = this.tfm[h];
    s.svg && (s.renderTransform(), f.setAttribute("data-svg-origin", this.svgo || "")), r = $r(), (!r || !r.isStart) && !i[Vt] && (Am(i), s.zOrigin && i[Oe] && (i[Oe] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1);
  }
}, Em = function(a, f) {
  var i = {
    target: a,
    props: [],
    revert: xv,
    save: Tv
  };
  return a._gsap || Me.core.getCache(a), f && a.style && a.nodeType && f.split(",").forEach(function(s) {
    return i.save(s);
  }), i;
}, zm, Nr = function(a, f) {
  var i = hn.createElementNS ? hn.createElementNS((f || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), a) : hn.createElement(a);
  return i && i.style ? i : hn.createElement(a);
}, Ge = function m(a, f, i) {
  var s = getComputedStyle(a);
  return s[f] || s.getPropertyValue(f.replace(Pr, "-$1").toLowerCase()) || s.getPropertyValue(f) || !i && m(a, Xa(f) || f, 1) || "";
}, E_ = "O,Moz,ms,Ms,Webkit".split(","), Xa = function(a, f, i) {
  var s = f || Gn, r = s.style, h = 5;
  if (a in r && !i)
    return a;
  for (a = a.charAt(0).toUpperCase() + a.substr(1); h-- && !(E_[h] + a in r); )
    ;
  return h < 0 ? null : (h === 3 ? "ms" : h >= 0 ? E_[h] : "") + a;
}, Ur = function() {
  sv() && window.document && (T_ = window, hn = T_.document, Ha = hn.documentElement, Gn = Nr("div") || {
    style: {}
  }, Nr("div"), Vt = Xa(Vt), Oe = Vt + "Origin", Gn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", zm = !!Xa("perspective"), $r = Me.core.reverting, Wr = 1);
}, z_ = function(a) {
  var f = a.ownerSVGElement, i = Nr("svg", f && f.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = a.cloneNode(!0), r;
  s.style.display = "block", i.appendChild(s), Ha.appendChild(i);
  try {
    r = s.getBBox();
  } catch {
  }
  return i.removeChild(s), Ha.removeChild(i), r;
}, O_ = function(a, f) {
  for (var i = f.length; i--; )
    if (a.hasAttribute(f[i]))
      return a.getAttribute(f[i]);
}, Om = function(a) {
  var f, i;
  try {
    f = a.getBBox();
  } catch {
    f = z_(a), i = 1;
  }
  return f && (f.width || f.height) || i || (f = z_(a)), f && !f.width && !f.x && !f.y ? {
    x: +O_(a, ["x", "cx", "x1"]) || 0,
    y: +O_(a, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : f;
}, Mm = function(a) {
  return !!(a.getCTM && (!a.parentNode || a.ownerSVGElement) && Om(a));
}, gn = function(a, f) {
  if (f) {
    var i = a.style, s;
    f in Ll && f !== Oe && (f = Vt), i.removeProperty ? (s = f.substr(0, 2), (s === "ms" || f.substr(0, 6) === "webkit") && (f = "-" + f), i.removeProperty(s === "--" ? f : f.replace(Pr, "-$1").toLowerCase())) : i.removeAttribute(f);
  }
}, dn = function(a, f, i, s, r, h) {
  var d = new ze(a._pt, f, i, 0, 1, h ? xm : Tm);
  return a._pt = d, d.b = s, d.e = r, a._props.push(i), d;
}, M_ = {
  deg: 1,
  rad: 1,
  turn: 1
}, Av = {
  grid: 1,
  flex: 1
}, vn = function m(a, f, i, s) {
  var r = parseFloat(i) || 0, h = (i + "").trim().substr((r + "").length) || "px", d = Gn.style, y = rv.test(f), _ = a.tagName.toLowerCase() === "svg", v = (_ ? "client" : "offset") + (y ? "Width" : "Height"), p = 100, A = s === "px", E = s === "%", D, S, U, G;
  if (s === h || !r || M_[s] || M_[h])
    return r;
  if (h !== "px" && !A && (r = m(a, f, i, "px")), G = a.getCTM && Mm(a), (E || h === "%") && (Ll[f] || ~f.indexOf("adius")))
    return D = G ? a.getBBox()[y ? "width" : "height"] : a[v], kt(E ? r / D * p : r / 100 * D);
  if (d[y ? "width" : "height"] = p + (A ? h : s), S = s !== "rem" && ~f.indexOf("adius") || s === "em" && a.appendChild && !_ ? a : a.parentNode, G && (S = (a.ownerSVGElement || {}).parentNode), (!S || S === hn || !S.appendChild) && (S = hn.body), U = S._gsap, U && E && U.width && y && U.time === qe.time && !U.uncache)
    return kt(r / U.width * p);
  if (E && (f === "height" || f === "width")) {
    var Z = a.style[f];
    a.style[f] = p + s, D = a[v], Z ? a.style[f] = Z : gn(a, f);
  } else
    (E || h === "%") && !Av[Ge(S, "display")] && (d.position = Ge(a, "position")), S === a && (d.position = "static"), S.appendChild(Gn), D = Gn[v], S.removeChild(Gn), d.position = "absolute";
  return y && E && (U = Xn(S), U.time = qe.time, U.width = S[v]), kt(A ? D * r / p : D && r ? p / D * r : 0);
}, Hl = function(a, f, i, s) {
  var r;
  return Wr || Ur(), f in ml && f !== "transform" && (f = ml[f], ~f.indexOf(",") && (f = f.split(",")[0])), Ll[f] && f !== "transform" ? (r = eu(a, s), r = f !== "transformOrigin" ? r[f] : r.svg ? r.origin : Bf(Ge(a, Oe)) + " " + r.zOrigin + "px") : (r = a.style[f], (!r || r === "auto" || s || ~(r + "").indexOf("calc(")) && (r = Hf[f] && Hf[f](a, f, i) || Ge(a, f) || Q_(a, f) || (f === "opacity" ? 1 : 0))), i && !~(r + "").trim().indexOf(" ") ? vn(a, f, r, i) + i : r;
}, Ev = function(a, f, i, s) {
  if (!i || i === "none") {
    var r = Xa(f, a, 1), h = r && Ge(a, r, 1);
    h && h !== i ? (f = r, i = h) : f === "borderColor" && (i = Ge(a, "borderTopColor"));
  }
  var d = new ze(this._pt, a.style, f, 0, 1, pm), y = 0, _ = 0, v, p, A, E, D, S, U, G, Z, Y, J, w;
  if (d.b = i, d.e = s, i += "", s += "", s.substring(0, 6) === "var(--" && (s = Ge(a, s.substring(4, s.indexOf(")")))), s === "auto" && (S = a.style[f], a.style[f] = s, s = Ge(a, f) || s, S ? a.style[f] = S : gn(a, f)), v = [i, s], sm(v), i = v[0], s = v[1], A = i.match(Ua) || [], w = s.match(Ua) || [], w.length) {
    for (; p = Ua.exec(s); )
      U = p[0], Z = s.substring(y, p.index), D ? D = (D + 1) % 5 : (Z.substr(-5) === "rgba(" || Z.substr(-5) === "hsla(") && (D = 1), U !== (S = A[_++] || "") && (E = parseFloat(S) || 0, J = S.substr((E + "").length), U.charAt(1) === "=" && (U = wa(E, U) + J), G = parseFloat(U), Y = U.substr((G + "").length), y = Ua.lastIndex - Y.length, Y || (Y = Y || Xe.units[f] || J, y === s.length && (s += Y, d.e += Y)), J !== Y && (E = vn(a, f, S, Y) || 0), d._pt = {
        _next: d._pt,
        p: Z || _ === 1 ? Z : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: E,
        c: G - E,
        m: D && D < 4 || f === "zIndex" ? Math.round : 0
      });
    d.c = y < s.length ? s.substring(y, s.length) : "";
  } else
    d.r = f === "display" && s === "none" ? xm : Tm;
  return Y_.test(s) && (d.e = 0), this._pt = d, d;
}, C_ = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, zv = function(a) {
  var f = a.split(" "), i = f[0], s = f[1] || "50%";
  return (i === "top" || i === "bottom" || s === "left" || s === "right") && (a = i, i = s, s = a), f[0] = C_[i] || i, f[1] = C_[s] || s, f.join(" ");
}, Ov = function(a, f) {
  if (f.tween && f.tween._time === f.tween._dur) {
    var i = f.t, s = i.style, r = f.u, h = i._gsap, d, y, _;
    if (r === "all" || r === !0)
      s.cssText = "", y = 1;
    else
      for (r = r.split(","), _ = r.length; --_ > -1; )
        d = r[_], Ll[d] && (y = 1, d = d === "transformOrigin" ? Oe : Vt), gn(i, d);
    y && (gn(i, Vt), h && (h.svg && i.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", eu(i, 1), h.uncache = 1, Am(s)));
  }
}, Hf = {
  clearProps: function(a, f, i, s, r) {
    if (r.data !== "isFromStart") {
      var h = a._pt = new ze(a._pt, f, i, 0, 0, Ov);
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
}, tu = [1, 0, 0, 1, 0, 0], Cm = {}, Dm = function(a) {
  return a === "matrix(1, 0, 0, 1, 0, 0)" || a === "none" || !a;
}, D_ = function(a) {
  var f = Ge(a, Vt);
  return Dm(f) ? tu : f.substr(7).match(L_).map(kt);
}, Ir = function(a, f) {
  var i = a._gsap || Xn(a), s = a.style, r = D_(a), h, d, y, _;
  return i.svg && a.getAttribute("transform") ? (y = a.transform.baseVal.consolidate().matrix, r = [y.a, y.b, y.c, y.d, y.e, y.f], r.join(",") === "1,0,0,1,0,0" ? tu : r) : (r === tu && !a.offsetParent && a !== Ha && !i.svg && (y = s.display, s.display = "block", h = a.parentNode, (!h || !a.offsetParent && !a.getBoundingClientRect().width) && (_ = 1, d = a.nextElementSibling, Ha.appendChild(a)), r = D_(a), y ? s.display = y : gn(a, "display"), _ && (d ? h.insertBefore(a, d) : h ? h.appendChild(a) : Ha.removeChild(a))), f && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, jr = function(a, f, i, s, r, h) {
  var d = a._gsap, y = r || Ir(a, !0), _ = d.xOrigin || 0, v = d.yOrigin || 0, p = d.xOffset || 0, A = d.yOffset || 0, E = y[0], D = y[1], S = y[2], U = y[3], G = y[4], Z = y[5], Y = f.split(" "), J = parseFloat(Y[0]) || 0, w = parseFloat(Y[1]) || 0, K, q, F, X;
  i ? y !== tu && (q = E * U - D * S) && (F = J * (U / q) + w * (-S / q) + (S * Z - U * G) / q, X = J * (-D / q) + w * (E / q) - (E * Z - D * G) / q, J = F, w = X) : (K = Om(a), J = K.x + (~Y[0].indexOf("%") ? J / 100 * K.width : J), w = K.y + (~(Y[1] || Y[0]).indexOf("%") ? w / 100 * K.height : w)), s || s !== !1 && d.smooth ? (G = J - _, Z = w - v, d.xOffset = p + (G * E + Z * S) - G, d.yOffset = A + (G * D + Z * U) - Z) : d.xOffset = d.yOffset = 0, d.xOrigin = J, d.yOrigin = w, d.smooth = !!s, d.origin = f, d.originIsAbsolute = !!i, a.style[Oe] = "0px 0px", h && (dn(h, d, "xOrigin", _, J), dn(h, d, "yOrigin", v, w), dn(h, d, "xOffset", p, d.xOffset), dn(h, d, "yOffset", A, d.yOffset)), a.setAttribute("data-svg-origin", J + " " + w);
}, eu = function(a, f) {
  var i = a._gsap || new dm(a);
  if ("x" in i && !f && !i.uncache)
    return i;
  var s = a.style, r = i.scaleX < 0, h = "px", d = "deg", y = getComputedStyle(a), _ = Ge(a, Oe) || "0", v, p, A, E, D, S, U, G, Z, Y, J, w, K, q, F, X, lt, rt, nt, ut, ct, ot, R, k, P, st, dt, T, L, W, $, it;
  return v = p = A = S = U = G = Z = Y = J = 0, E = D = 1, i.svg = !!(a.getCTM && Mm(a)), y.translate && ((y.translate !== "none" || y.scale !== "none" || y.rotate !== "none") && (s[Vt] = (y.translate !== "none" ? "translate3d(" + (y.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (y.rotate !== "none" ? "rotate(" + y.rotate + ") " : "") + (y.scale !== "none" ? "scale(" + y.scale.split(" ").join(",") + ") " : "") + (y[Vt] !== "none" ? y[Vt] : "")), s.scale = s.rotate = s.translate = "none"), q = Ir(a, i.svg), i.svg && (i.uncache ? (P = a.getBBox(), _ = i.xOrigin - P.x + "px " + (i.yOrigin - P.y) + "px", k = "") : k = !f && a.getAttribute("data-svg-origin"), jr(a, k || _, !!k || i.originIsAbsolute, i.smooth !== !1, q)), w = i.xOrigin || 0, K = i.yOrigin || 0, q !== tu && (rt = q[0], nt = q[1], ut = q[2], ct = q[3], v = ot = q[4], p = R = q[5], q.length === 6 ? (E = Math.sqrt(rt * rt + nt * nt), D = Math.sqrt(ct * ct + ut * ut), S = rt || nt ? Na(nt, rt) * Vn : 0, Z = ut || ct ? Na(ut, ct) * Vn + S : 0, Z && (D *= Math.abs(Math.cos(Z * Ba))), i.svg && (v -= w - (w * rt + K * ut), p -= K - (w * nt + K * ct))) : (it = q[6], W = q[7], dt = q[8], T = q[9], L = q[10], $ = q[11], v = q[12], p = q[13], A = q[14], F = Na(it, L), U = F * Vn, F && (X = Math.cos(-F), lt = Math.sin(-F), k = ot * X + dt * lt, P = R * X + T * lt, st = it * X + L * lt, dt = ot * -lt + dt * X, T = R * -lt + T * X, L = it * -lt + L * X, $ = W * -lt + $ * X, ot = k, R = P, it = st), F = Na(-ut, L), G = F * Vn, F && (X = Math.cos(-F), lt = Math.sin(-F), k = rt * X - dt * lt, P = nt * X - T * lt, st = ut * X - L * lt, $ = ct * lt + $ * X, rt = k, nt = P, ut = st), F = Na(nt, rt), S = F * Vn, F && (X = Math.cos(F), lt = Math.sin(F), k = rt * X + nt * lt, P = ot * X + R * lt, nt = nt * X - rt * lt, R = R * X - ot * lt, rt = k, ot = P), U && Math.abs(U) + Math.abs(S) > 359.9 && (U = S = 0, G = 180 - G), E = kt(Math.sqrt(rt * rt + nt * nt + ut * ut)), D = kt(Math.sqrt(R * R + it * it)), F = Na(ot, R), Z = Math.abs(F) > 2e-4 ? F * Vn : 0, J = $ ? 1 / ($ < 0 ? -$ : $) : 0), i.svg && (k = a.getAttribute("transform"), i.forceCSS = a.setAttribute("transform", "") || !Dm(Ge(a, Vt)), k && a.setAttribute("transform", k))), Math.abs(Z) > 90 && Math.abs(Z) < 270 && (r ? (E *= -1, Z += S <= 0 ? 180 : -180, S += S <= 0 ? 180 : -180) : (D *= -1, Z += Z <= 0 ? 180 : -180)), f = f || i.uncache, i.x = v - ((i.xPercent = v && (!f && i.xPercent || (Math.round(a.offsetWidth / 2) === Math.round(-v) ? -50 : 0))) ? a.offsetWidth * i.xPercent / 100 : 0) + h, i.y = p - ((i.yPercent = p && (!f && i.yPercent || (Math.round(a.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? a.offsetHeight * i.yPercent / 100 : 0) + h, i.z = A + h, i.scaleX = kt(E), i.scaleY = kt(D), i.rotation = kt(S) + d, i.rotationX = kt(U) + d, i.rotationY = kt(G) + d, i.skewX = Z + d, i.skewY = Y + d, i.transformPerspective = J + h, (i.zOrigin = parseFloat(_.split(" ")[2]) || !f && i.zOrigin || 0) && (s[Oe] = Bf(_)), i.xOffset = i.yOffset = 0, i.force3D = Xe.force3D, i.renderTransform = i.svg ? Cv : zm ? Rm : Mv, i.uncache = 0, i;
}, Bf = function(a) {
  return (a = a.split(" "))[0] + " " + a[1];
}, vr = function(a, f, i) {
  var s = he(f);
  return kt(parseFloat(f) + parseFloat(vn(a, "x", i + "px", s))) + s;
}, Mv = function(a, f) {
  f.z = "0px", f.rotationY = f.rotationX = "0deg", f.force3D = 0, Rm(a, f);
}, Yn = "0deg", Yi = "0px", qn = ") ", Rm = function(a, f) {
  var i = f || this, s = i.xPercent, r = i.yPercent, h = i.x, d = i.y, y = i.z, _ = i.rotation, v = i.rotationY, p = i.rotationX, A = i.skewX, E = i.skewY, D = i.scaleX, S = i.scaleY, U = i.transformPerspective, G = i.force3D, Z = i.target, Y = i.zOrigin, J = "", w = G === "auto" && a && a !== 1 || G === !0;
  if (Y && (p !== Yn || v !== Yn)) {
    var K = parseFloat(v) * Ba, q = Math.sin(K), F = Math.cos(K), X;
    K = parseFloat(p) * Ba, X = Math.cos(K), h = vr(Z, h, q * X * -Y), d = vr(Z, d, -Math.sin(K) * -Y), y = vr(Z, y, F * X * -Y + Y);
  }
  U !== Yi && (J += "perspective(" + U + qn), (s || r) && (J += "translate(" + s + "%, " + r + "%) "), (w || h !== Yi || d !== Yi || y !== Yi) && (J += y !== Yi || w ? "translate3d(" + h + ", " + d + ", " + y + ") " : "translate(" + h + ", " + d + qn), _ !== Yn && (J += "rotate(" + _ + qn), v !== Yn && (J += "rotateY(" + v + qn), p !== Yn && (J += "rotateX(" + p + qn), (A !== Yn || E !== Yn) && (J += "skew(" + A + ", " + E + qn), (D !== 1 || S !== 1) && (J += "scale(" + D + ", " + S + qn), Z.style[Vt] = J || "translate(0, 0)";
}, Cv = function(a, f) {
  var i = f || this, s = i.xPercent, r = i.yPercent, h = i.x, d = i.y, y = i.rotation, _ = i.skewX, v = i.skewY, p = i.scaleX, A = i.scaleY, E = i.target, D = i.xOrigin, S = i.yOrigin, U = i.xOffset, G = i.yOffset, Z = i.forceCSS, Y = parseFloat(h), J = parseFloat(d), w, K, q, F, X;
  y = parseFloat(y), _ = parseFloat(_), v = parseFloat(v), v && (v = parseFloat(v), _ += v, y += v), y || _ ? (y *= Ba, _ *= Ba, w = Math.cos(y) * p, K = Math.sin(y) * p, q = Math.sin(y - _) * -A, F = Math.cos(y - _) * A, _ && (v *= Ba, X = Math.tan(_ - v), X = Math.sqrt(1 + X * X), q *= X, F *= X, v && (X = Math.tan(v), X = Math.sqrt(1 + X * X), w *= X, K *= X)), w = kt(w), K = kt(K), q = kt(q), F = kt(F)) : (w = p, F = A, K = q = 0), (Y && !~(h + "").indexOf("px") || J && !~(d + "").indexOf("px")) && (Y = vn(E, "x", h, "px"), J = vn(E, "y", d, "px")), (D || S || U || G) && (Y = kt(Y + D - (D * w + S * q) + U), J = kt(J + S - (D * K + S * F) + G)), (s || r) && (X = E.getBBox(), Y = kt(Y + s / 100 * X.width), J = kt(J + r / 100 * X.height)), X = "matrix(" + w + "," + K + "," + q + "," + F + "," + Y + "," + J + ")", E.setAttribute("transform", X), Z && (E.style[Vt] = X);
}, Dv = function(a, f, i, s, r) {
  var h = 360, d = ne(r), y = parseFloat(r) * (d && ~r.indexOf("rad") ? Vn : 1), _ = y - s, v = s + _ + "deg", p, A;
  return d && (p = r.split("_")[1], p === "short" && (_ %= h, _ !== _ % (h / 2) && (_ += _ < 0 ? h : -h)), p === "cw" && _ < 0 ? _ = (_ + h * A_) % h - ~~(_ / h) * h : p === "ccw" && _ > 0 && (_ = (_ - h * A_) % h - ~~(_ / h) * h)), a._pt = A = new ze(a._pt, f, i, s, _, hv), A.e = v, A.u = "deg", a._props.push(i), A;
}, R_ = function(a, f) {
  for (var i in f)
    a[i] = f[i];
  return a;
}, Rv = function(a, f, i) {
  var s = R_({}, i._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", h = i.style, d, y, _, v, p, A, E, D;
  s.svg ? (_ = i.getAttribute("transform"), i.setAttribute("transform", ""), h[Vt] = f, d = eu(i, 1), gn(i, Vt), i.setAttribute("transform", _)) : (_ = getComputedStyle(i)[Vt], h[Vt] = f, d = eu(i, 1), h[Vt] = _);
  for (y in Ll)
    _ = s[y], v = d[y], _ !== v && r.indexOf(y) < 0 && (E = he(_), D = he(v), p = E !== D ? vn(i, y, _, D) : parseFloat(_), A = parseFloat(v), a._pt = new ze(a._pt, d, y, p, A - p, Rr), a._pt.u = D || 0, a._props.push(y));
  R_(d, s);
};
Ee("padding,margin,Width,Radius", function(m, a) {
  var f = "Top", i = "Right", s = "Bottom", r = "Left", h = (a < 3 ? [f, i, s, r] : [f + r, f + i, s + i, s + r]).map(function(d) {
    return a < 2 ? m + d : "border" + d + m;
  });
  Hf[a > 1 ? "border" + m : m] = function(d, y, _, v, p) {
    var A, E;
    if (arguments.length < 4)
      return A = h.map(function(D) {
        return Hl(d, D, _);
      }), E = A.join(" "), E.split(A[0]).length === 5 ? A[0] : E;
    A = (v + "").split(" "), E = {}, h.forEach(function(D, S) {
      return E[D] = A[S] = A[S] || A[(S - 1) / 2 | 0];
    }), d.init(y, E, p);
  };
});
var Nm = {
  name: "css",
  register: Ur,
  targetTest: function(a) {
    return a.style && a.nodeType;
  },
  init: function(a, f, i, s, r) {
    var h = this._props, d = a.style, y = i.vars.startAt, _, v, p, A, E, D, S, U, G, Z, Y, J, w, K, q, F, X;
    Wr || Ur(), this.styles = this.styles || Em(a), F = this.styles.props, this.tween = i;
    for (S in f)
      if (S !== "autoRound" && (v = f[S], !(Ye[S] && _m(S, f, i, s, a, r)))) {
        if (E = typeof v, D = Hf[S], E === "function" && (v = v.call(i, s, a, r), E = typeof v), E === "string" && ~v.indexOf("random(") && (v = $i(v)), D)
          D(this, a, S, v, i) && (q = 1);
        else if (S.substr(0, 2) === "--")
          _ = (getComputedStyle(a).getPropertyValue(S) + "").trim(), v += "", mn.lastIndex = 0, mn.test(_) || (U = he(_), G = he(v), G ? U !== G && (_ = vn(a, S, _, G) + G) : U && (v += U)), this.add(d, "setProperty", _, v, s, r, 0, 0, S), h.push(S), F.push(S, 0, d[S]);
        else if (E !== "undefined") {
          if (y && S in y ? (_ = typeof y[S] == "function" ? y[S].call(i, s, a, r) : y[S], ne(_) && ~_.indexOf("random(") && (_ = $i(_)), he(_ + "") || _ === "auto" || (_ += Xe.units[S] || he(Hl(a, S)) || ""), (_ + "").charAt(1) === "=" && (_ = Hl(a, S))) : _ = Hl(a, S), A = parseFloat(_), Z = E === "string" && v.charAt(1) === "=" && v.substr(0, 2), Z && (v = v.substr(2)), p = parseFloat(v), S in ml && (S === "autoAlpha" && (A === 1 && Hl(a, "visibility") === "hidden" && p && (A = 0), F.push("visibility", 0, d.visibility), dn(this, d, "visibility", A ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), S !== "scale" && S !== "transform" && (S = ml[S], ~S.indexOf(",") && (S = S.split(",")[0]))), Y = S in Ll, Y) {
            if (this.styles.save(S), X = v, E === "string" && v.substring(0, 6) === "var(--") {
              if (v = Ge(a, v.substring(4, v.indexOf(")"))), v.substring(0, 5) === "calc(") {
                var lt = a.style.perspective;
                a.style.perspective = v, v = Ge(a, "perspective"), lt ? a.style.perspective = lt : gn(a, "perspective");
              }
              p = parseFloat(v);
            }
            if (J || (w = a._gsap, w.renderTransform && !f.parseTransform || eu(a, f.parseTransform), K = f.smoothOrigin !== !1 && w.smooth, J = this._pt = new ze(this._pt, d, Vt, 0, 1, w.renderTransform, w, 0, -1), J.dep = 1), S === "scale")
              this._pt = new ze(this._pt, w, "scaleY", w.scaleY, (Z ? wa(w.scaleY, Z + p) : p) - w.scaleY || 0, Rr), this._pt.u = 0, h.push("scaleY", S), S += "X";
            else if (S === "transformOrigin") {
              F.push(Oe, 0, d[Oe]), v = zv(v), w.svg ? jr(a, v, 0, K, 0, this) : (G = parseFloat(v.split(" ")[2]) || 0, G !== w.zOrigin && dn(this, w, "zOrigin", w.zOrigin, G), dn(this, d, S, Bf(_), Bf(v)));
              continue;
            } else if (S === "svgOrigin") {
              jr(a, v, 1, K, 0, this);
              continue;
            } else if (S in Cm) {
              Dv(this, w, S, A, Z ? wa(A, Z + v) : v);
              continue;
            } else if (S === "smoothOrigin") {
              dn(this, w, "smooth", w.smooth, v);
              continue;
            } else if (S === "force3D") {
              w[S] = v;
              continue;
            } else if (S === "transform") {
              Rv(this, v, a);
              continue;
            }
          } else S in d || (S = Xa(S) || S);
          if (Y || (p || p === 0) && (A || A === 0) && !ov.test(v) && S in d)
            U = (_ + "").substr((A + "").length), p || (p = 0), G = he(v) || (S in Xe.units ? Xe.units[S] : U), U !== G && (A = vn(a, S, _, G)), this._pt = new ze(this._pt, Y ? w : d, S, A, (Z ? wa(A, Z + p) : p) - A, !Y && (G === "px" || S === "zIndex") && f.autoRound !== !1 ? mv : Rr), this._pt.u = G || 0, Y && X !== v ? (this._pt.b = _, this._pt.e = X, this._pt.r = _v) : U !== G && G !== "%" && (this._pt.b = _, this._pt.r = dv);
          else if (S in d)
            Ev.call(this, a, S, _, Z ? Z + v : v);
          else if (S in a)
            this.add(a, S, _ || a[S], Z ? Z + v : v, s, r);
          else if (S !== "parseTransform") {
            qr(S, v);
            continue;
          }
          Y || (S in d ? F.push(S, 0, d[S]) : typeof a[S] == "function" ? F.push(S, 2, a[S]()) : F.push(S, 1, _ || a[S])), h.push(S);
        }
      }
    q && Sm(this);
  },
  render: function(a, f) {
    if (f.tween._time || !$r())
      for (var i = f._pt; i; )
        i.r(a, i.d), i = i._next;
    else
      f.styles.revert();
  },
  get: Hl,
  aliases: ml,
  getSetter: function(a, f, i) {
    var s = ml[f];
    return s && s.indexOf(",") < 0 && (f = s), f in Ll && f !== Oe && (a._gsap.x || Hl(a, "x")) ? i && x_ === i ? f === "scale" ? pv : vv : (x_ = i || {}) && (f === "scale" ? Sv : bv) : a.style && !Br(a.style[f]) ? yv : ~f.indexOf("-") ? gv : kr(a, f);
  },
  core: {
    _removeProperty: gn,
    _getMatrix: Ir
  }
};
Me.utils.checkPrefix = Xa;
Me.core.getStyleSaver = Em;
(function(m, a, f, i) {
  var s = Ee(m + "," + a + "," + f, function(r) {
    Ll[r] = 1;
  });
  Ee(a, function(r) {
    Xe.units[r] = "deg", Cm[r] = 1;
  }), ml[s[13]] = m + "," + a, Ee(i, function(r) {
    var h = r.split(":");
    ml[h[1]] = s[h[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ee("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(m) {
  Xe.units[m] = "px";
});
Me.registerPlugin(Nm);
var Gi = Me.registerPlugin(Nm) || Me;
Gi.core.Tween;
const Nv = "_dualPane_1wyel_116", Uv = "_agentFullPane_1wyel_135", jv = "_agentPhasePanel_1wyel_144", wv = "_agentPhasePanelVisible_1wyel_154", Hv = "_agentPhasePanelHidden_1wyel_161", Bv = "_agentCard_1wyel_168", Lv = "_agentCardHead_1wyel_180", Yv = "_agentCardEyebrow_1wyel_184", qv = "_agentCardTitle_1wyel_195", Vv = "_agentDropZoneLarge_1wyel_204", Gv = "_agentDropZoneLargeActive_1wyel_216", Xv = "_agentDropHint_1wyel_223", Qv = "_agentFloatingPdf_1wyel_231", Zv = "_agentFloatingPdfDropped_1wyel_242", Kv = "_agentDragCursor_1wyel_246", Jv = "_browser_1wyel_317", kv = "_browserChrome_1wyel_332", Fv = "_dots_1wyel_344", Wv = "_dot_1wyel_344", $v = "_urlBar_1wyel_365", Pv = "_browserPage_1wyel_379", Iv = "_form_1wyel_393", tp = "_formIntro_1wyel_400", ep = "_formHeading_1wyel_406", lp = "_formSub_1wyel_415", np = "_fieldGroup_1wyel_423", ap = "_inputLabel_1wyel_429", ip = "_agentFieldLabel_1wyel_438", up = "_input_1wyel_429", fp = "_inputAgent_1wyel_469", cp = "_button_1wyel_474", sp = "_highlight_1wyel_489", rp = "_highlightReplay_1wyel_500", op = "_highlightLabel_1wyel_506", hp = "_highlightLabelReplay_1wyel_522", dp = "_flash_1wyel_527", _p = "_cursor_1wyel_544", mp = "_cursorInner_1wyel_554", yp = "_cursorInnerClicking_1wyel_558", gp = "_extension_1wyel_563", vp = "_panelTopbar_1wyel_574", pp = "_panelIconButton_1wyel_587", Sp = "_panelIconButtonHidden_1wyel_603", bp = "_panelHomeButton_1wyel_608", Tp = "_panelIconSvg_1wyel_615", xp = "_panelTopbarSpacer_1wyel_619", Ap = "_panelBody_1wyel_624", Ep = "_panelStatusRow_1wyel_635", zp = "_panelStatusPill_1wyel_643", Op = "_panelCount_1wyel_650", Mp = "_extContent_1wyel_659", Cp = "_panelEmptyState_1wyel_673", Dp = "_extRecDot_1wyel_689", Rp = "_extRecLabel_1wyel_698", Np = "_actionItem_1wyel_707", Up = "_actionItemCurrent_1wyel_730", jp = "_actionHeaderRow_1wyel_734", wp = "_actionTitle_1wyel_741", Hp = "_screenshot_1wyel_782", Bp = "_replayHeader_1wyel_792", Lp = "_replayTitle_1wyel_803", Yp = "_replayProgress_1wyel_817", qp = "_replayProgressTrack_1wyel_827", Vp = "_replayProgressFill_1wyel_836", Gp = "_replayList_1wyel_844", Xp = "_replayActionItem_1wyel_857", Qp = "_replayActionItemCompleted_1wyel_886", Zp = "_replayActionItemCurrent_1wyel_897", Kp = "_replayActionHeader_1wyel_902", Jp = "_replayStepNumber_1wyel_909", kp = "_replayActionTitle_1wyel_918", Fp = "_replayActionMeta_1wyel_928", Wp = "_replayComplete_1wyel_940", $p = "_replayCompleteIcon_1wyel_951", Pp = "_replayCompleteTitle_1wyel_965", Ip = "_replayCompleteSub_1wyel_976", t2 = "_websiteFields_1wyel_1095", e2 = "_agentAnalysisRow_1wyel_1128", l2 = "_agentAnalysisRowVisible_1wyel_1139", n2 = "_agentAnalysisRowDone_1wyel_1143", a2 = "_agentAnalysisCard_1wyel_1147", i2 = "_agentAnalysisCardActive_1wyel_1157", u2 = "_agentAnalysisCardDone_1wyel_1162", f2 = "_agentAnalysisDot_1wyel_1167", c2 = "_agentVariableList_1wyel_1180", s2 = "_agentVariableListVisible_1wyel_1190", r2 = "_agentVariableRow_1wyel_1195", o2 = "_agentVariableRowVisible_1wyel_1210", h2 = "_agentVariableKey_1wyel_1216", d2 = "_agentVariableValue_1wyel_1224", _2 = "_agentScanLine_1wyel_1236", m2 = "_singleFieldCard_1wyel_1249", y2 = "_singleFieldCardAgent_1wyel_1260", g2 = "_singleFieldCardAgentPulse_1wyel_1265", v2 = "_agentValueSurface_1wyel_1269", p2 = "_agentValueText_1wyel_1279", S2 = "_inputAgentTyping_1wyel_1290", b2 = "_agentCaretInline_1wyel_1294", H = {
  dualPane: Nv,
  agentFullPane: Uv,
  agentPhasePanel: jv,
  agentPhasePanelVisible: wv,
  agentPhasePanelHidden: Hv,
  agentCard: Bv,
  agentCardHead: Lv,
  agentCardEyebrow: Yv,
  agentCardTitle: qv,
  agentDropZoneLarge: Vv,
  agentDropZoneLargeActive: Gv,
  agentDropHint: Xv,
  agentFloatingPdf: Qv,
  agentFloatingPdfDropped: Zv,
  agentDragCursor: Kv,
  browser: Jv,
  browserChrome: kv,
  dots: Fv,
  dot: Wv,
  urlBar: $v,
  browserPage: Pv,
  form: Iv,
  formIntro: tp,
  formHeading: ep,
  formSub: lp,
  fieldGroup: np,
  inputLabel: ap,
  agentFieldLabel: ip,
  input: up,
  inputAgent: fp,
  button: cp,
  highlight: sp,
  highlightReplay: rp,
  highlightLabel: op,
  highlightLabelReplay: hp,
  flash: dp,
  cursor: _p,
  cursorInner: mp,
  cursorInnerClicking: yp,
  extension: gp,
  panelTopbar: vp,
  panelIconButton: pp,
  panelIconButtonHidden: Sp,
  panelHomeButton: bp,
  panelIconSvg: Tp,
  panelTopbarSpacer: xp,
  panelBody: Ap,
  panelStatusRow: Ep,
  panelStatusPill: zp,
  panelCount: Op,
  extContent: Mp,
  panelEmptyState: Cp,
  extRecDot: Dp,
  extRecLabel: Rp,
  actionItem: Np,
  actionItemCurrent: Up,
  actionHeaderRow: jp,
  actionTitle: wp,
  screenshot: Hp,
  replayHeader: Bp,
  replayTitle: Lp,
  replayProgress: Yp,
  replayProgressTrack: qp,
  replayProgressFill: Vp,
  replayList: Gp,
  replayActionItem: Xp,
  replayActionItemCompleted: Qp,
  replayActionItemCurrent: Zp,
  replayActionHeader: Kp,
  replayStepNumber: Jp,
  replayActionTitle: kp,
  replayActionMeta: Fp,
  replayComplete: Wp,
  replayCompleteIcon: $p,
  replayCompleteTitle: Pp,
  replayCompleteSub: Ip,
  websiteFields: t2,
  agentAnalysisRow: e2,
  agentAnalysisRowVisible: l2,
  agentAnalysisRowDone: n2,
  agentAnalysisCard: a2,
  agentAnalysisCardActive: i2,
  agentAnalysisCardDone: u2,
  agentAnalysisDot: f2,
  agentVariableList: c2,
  agentVariableListVisible: s2,
  agentVariableRow: r2,
  agentVariableRowVisible: o2,
  agentVariableKey: h2,
  agentVariableValue: d2,
  agentScanLine: _2,
  singleFieldCard: m2,
  singleFieldCardAgent: y2,
  singleFieldCardAgentPulse: g2,
  agentValueSurface: v2,
  agentValueText: p2,
  inputAgentTyping: S2,
  agentCaretInline: b2
}, Of = "sarah@acme.io", Mf = "Sarah Chen", Cf = "sarah@acme.io", T2 = "accounts@northstar.io", x2 = "Northstar Labs", A2 = "V-20418", E2 = "Net 30", Xi = [
  { label: "Vendor name", value: x2 },
  { label: "Vendor email", value: T2 },
  { label: "Vendor ID", value: A2 },
  { label: "Payment terms", value: E2 }
], xf = Object.fromEntries(Xi.map((m) => [m.label, ""])), Df = 90, z2 = 1360 + Of.length * 68 + 120 + 2e3, O2 = 1080 + Mf.length * 62 + 180, M2 = O2 + 920 + Cf.length * 58 + 180 + 1500, C2 = 4556, pr = [
  (Df + z2) / 1e3,
  (Df + M2) / 1e3,
  (Df + C2) / 1e3
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
function D2(m, a) {
  if (!m || !a) return null;
  const f = m.getBoundingClientRect(), i = a.getBoundingClientRect();
  return {
    x: i.left - f.left + i.width / 2,
    y: i.top - f.top + i.height / 2
  };
}
function to() {
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
function N_() {
  return /* @__PURE__ */ O.jsxs("svg", { width: "100%", height: "48", viewBox: "0 0 172 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("rect", { width: "172", height: "48", fill: "#f9f9f8" }),
    /* @__PURE__ */ O.jsx("rect", { x: "12", y: "8", width: "28", height: "4", rx: "2", fill: "#d8d8d4" }),
    /* @__PURE__ */ O.jsx("rect", { x: "12", y: "16", width: "148", height: "22", rx: "6", fill: "white", stroke: "#e0e0dc", strokeWidth: "1" }),
    /* @__PURE__ */ O.jsx("rect", { x: "20", y: "24.5", width: "52", height: "5", rx: "2", fill: "#bbbbb7" }),
    /* @__PURE__ */ O.jsx("rect", { x: "74", y: "22", width: "1.5", height: "10", rx: "0.75", fill: "#ec4899", opacity: "0.8" })
  ] });
}
function R2() {
  return /* @__PURE__ */ O.jsxs("svg", { width: "100%", height: "48", viewBox: "0 0 172 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("rect", { width: "172", height: "48", fill: "#f9f9f8" }),
    /* @__PURE__ */ O.jsx("rect", { x: "12", y: "8", width: "148", height: "14", rx: "6", fill: "white", stroke: "#e0e0dc", strokeWidth: "1" }),
    /* @__PURE__ */ O.jsx("rect", { x: "20", y: "12.5", width: "40", height: "5", rx: "2", fill: "#c8c8c4" }),
    /* @__PURE__ */ O.jsx("rect", { x: "12", y: "28", width: "148", height: "14", rx: "6", fill: "#111" }),
    /* @__PURE__ */ O.jsx("rect", { x: "58", y: "33", width: "56", height: "4", rx: "2", fill: "rgba(255,255,255,0.65)" })
  ] });
}
function N2() {
  return /* @__PURE__ */ O.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("polyline", { points: "20 6 9 17 4 12" }) });
}
function U2() {
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
function Um({ url: m }) {
  return /* @__PURE__ */ O.jsxs("div", { className: H.browserChrome, children: [
    /* @__PURE__ */ O.jsxs("div", { className: H.dots, children: [
      /* @__PURE__ */ O.jsx("span", { className: H.dot }),
      /* @__PURE__ */ O.jsx("span", { className: H.dot }),
      /* @__PURE__ */ O.jsx("span", { className: H.dot })
    ] }),
    /* @__PURE__ */ O.jsx("div", { className: H.urlBar, children: m })
  ] });
}
function jm({ showBack: m = !1 }) {
  return /* @__PURE__ */ O.jsxs("div", { className: H.panelTopbar, children: [
    /* @__PURE__ */ O.jsx(
      "button",
      {
        type: "button",
        className: oe(H.panelIconButton, !m && H.panelIconButtonHidden),
        "aria-label": "Back",
        children: /* @__PURE__ */ O.jsx("svg", { className: H.panelIconSvg, viewBox: "0 0 24 24", width: "16", height: "16", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("path", { d: "M15.5 19.5L8 12l7.5-7.5", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) })
      }
    ),
    /* @__PURE__ */ O.jsx("button", { type: "button", className: oe(H.panelIconButton, H.panelHomeButton), "aria-label": "Home", children: /* @__PURE__ */ O.jsxs("svg", { className: H.panelIconSvg, viewBox: "0 0 24 24", width: "16", height: "16", "aria-hidden": "true", children: [
      /* @__PURE__ */ O.jsx("path", { d: "M3 10.5l9-7 9 7", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ O.jsx("path", { d: "M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }) }),
    /* @__PURE__ */ O.jsx("span", { className: H.panelTopbarSpacer, "aria-hidden": "true" })
  ] });
}
function j2({ label: m, value: a, displayValue: f, showCaret: i, pulse: s }) {
  const r = i || f.length > 0;
  return /* @__PURE__ */ O.jsxs("div", { className: oe(H.singleFieldCard, r && H.singleFieldCardAgent, s && H.singleFieldCardAgentPulse), children: [
    /* @__PURE__ */ O.jsx("div", { className: H.agentFieldLabel, children: m }),
    /* @__PURE__ */ O.jsxs("div", { className: oe(H.input, H.agentValueSurface, r && H.inputAgent, i && H.inputAgentTyping), children: [
      /* @__PURE__ */ O.jsx("span", { className: H.agentValueText, children: f || " " }),
      i && f.length < a.length ? /* @__PURE__ */ O.jsx("span", { className: H.agentCaretInline, "aria-hidden": "true" }) : null
    ] })
  ] });
}
function w2({ label: m, value: a, visible: f }) {
  return /* @__PURE__ */ O.jsxs("div", { className: oe(H.agentVariableRow, f && H.agentVariableRowVisible), children: [
    /* @__PURE__ */ O.jsx("span", { className: H.agentVariableKey, children: m }),
    /* @__PURE__ */ O.jsx("span", { className: H.agentVariableValue, children: a })
  ] });
}
function eo(m, a, f) {
  const i = ft.useRef([]), s = ft.useCallback(() => {
    i.current.forEach(clearTimeout), i.current = [];
  }, []), r = ft.useCallback((h, d) => {
    const y = setTimeout(d, h);
    i.current.push(y);
  }, []);
  return ft.useEffect(() => (a(), () => {
    s();
  }), [s, a]), ft.useEffect(() => {
    if (m < 1) return;
    s(), a();
    const h = setTimeout(() => {
      f({ clearScene: s, at: r });
    }, Df);
    return i.current.push(h), () => {
      clearTimeout(h), s();
    };
  }, [f, r, s, m, a]), { clearScene: s };
}
function H2({ playToken: m }) {
  const a = ft.useRef(null), f = ft.useRef(null), i = ft.useRef(null), [s, r] = ft.useState({ x: -40, y: -40 }), [h, d] = ft.useState(!1), [y, _] = ft.useState(null), [v, p] = ft.useState(""), [A, E] = ft.useState([]), [D, S] = ft.useState(0), U = ft.useCallback(() => {
    E([]), p(""), _(null), d(!1), r({ x: -40, y: -40 });
  }, []), G = ft.useCallback(({ clearScene: Z, at: Y }) => {
    Z();
    const J = a.current, w = f.current, K = i.current;
    if (!J || !w || !K) return;
    const q = J.getBoundingClientRect(), X = { x: w.getBoundingClientRect().left - q.left - 80, y: q.height - 44 }, lt = ki(J, w), rt = ki(J, K);
    if (!lt || !rt) return;
    E([]), p(""), _(null), d(!1), r(X), Y(480, () => r(lt)), Y(1e3, () => _({ rect: Ji(J, w), visible: !0 }));
    const nt = 1360;
    Of.split("").forEach((ct, ot) => {
      Y(nt + ot * 68, () => p(Of.slice(0, ot + 1)));
    }), Y(nt + 180, () => E([
      { text: "Navigated to signup", type: "navigate", Screenshot: Sr }
    ]));
    const ut = nt + Of.length * 68 + 120;
    Y(ut, () => S((ct) => ct + 1)), Y(ut + 120, () => E([
      { text: "Navigated to signup", type: "navigate", Screenshot: Sr },
      { text: "Filled email field", type: "input", Screenshot: N_ }
    ])), Y(ut + 220, () => _((ct) => ct && { ...ct, visible: !1 })), Y(ut + 560, () => r(rt)), Y(ut + 980, () => _({ rect: Ji(J, K), visible: !0 })), Y(ut + 1360, () => {
      d(!0), S((ct) => ct + 1);
    }), Y(ut + 1640, () => d(!1)), Y(ut + 1460, () => {
      _((ct) => ct && { ...ct, visible: !1 }), E([
        { text: "Navigated to signup", type: "navigate", Screenshot: Sr },
        { text: "Filled email field", type: "input", Screenshot: N_ },
        { text: 'Clicked "Get started"', type: "click", Screenshot: R2 }
      ]);
    }), Y(ut + 2e3, () => r(X));
  }, []);
  return eo(m, U, G), /* @__PURE__ */ O.jsxs("div", { className: H.dualPane, children: [
    /* @__PURE__ */ O.jsxs("div", { className: H.browser, ref: a, children: [
      /* @__PURE__ */ O.jsx(Um, { url: "app.nari.ai/invite" }),
      /* @__PURE__ */ O.jsx("div", { className: H.browserPage, children: /* @__PURE__ */ O.jsxs("div", { className: H.form, children: [
        /* @__PURE__ */ O.jsxs("div", { className: H.formIntro, children: [
          /* @__PURE__ */ O.jsx("div", { className: H.formHeading, children: "Join your team" }),
          /* @__PURE__ */ O.jsx("div", { className: H.formSub, children: "Free trial. No card needed." })
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: H.fieldGroup, children: [
          /* @__PURE__ */ O.jsx("div", { className: H.inputLabel, children: "Work email" }),
          /* @__PURE__ */ O.jsx(
            "input",
            {
              ref: f,
              className: H.input,
              placeholder: "you@company.com",
              value: v,
              readOnly: !0
            }
          )
        ] }),
        /* @__PURE__ */ O.jsxs("button", { ref: i, className: H.button, children: [
          "Get started ",
          "->"
        ] })
      ] }) }),
      y?.rect ? /* @__PURE__ */ O.jsx(
        "div",
        {
          className: H.highlight,
          style: {
            top: y.rect.top,
            left: y.rect.left,
            width: y.rect.width,
            height: y.rect.height,
            opacity: y.visible ? 1 : 0
          },
          children: /* @__PURE__ */ O.jsx("div", { className: H.highlightLabel, children: "Will capture this" })
        }
      ) : null,
      D > 0 ? /* @__PURE__ */ O.jsx("div", { className: H.flash }, D) : null,
      /* @__PURE__ */ O.jsx("div", { className: H.cursor, style: { transform: `translate(${s.x}px, ${s.y}px)` }, children: /* @__PURE__ */ O.jsx("div", { className: h ? H.cursorInnerClicking : H.cursorInner, children: /* @__PURE__ */ O.jsx(to, {}) }) })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: H.extension, children: [
      /* @__PURE__ */ O.jsx(jm, {}),
      /* @__PURE__ */ O.jsxs("div", { className: H.panelBody, children: [
        /* @__PURE__ */ O.jsxs("div", { className: H.panelStatusRow, children: [
          /* @__PURE__ */ O.jsxs("span", { className: H.panelStatusPill, children: [
            /* @__PURE__ */ O.jsx("span", { className: H.extRecDot }),
            /* @__PURE__ */ O.jsx("span", { className: H.extRecLabel, children: "Recording" })
          ] }),
          /* @__PURE__ */ O.jsxs("span", { className: H.panelCount, children: [
            A.length,
            " steps"
          ] })
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: H.extContent, children: [
          A.length === 0 ? /* @__PURE__ */ O.jsx("div", { className: H.panelEmptyState, children: "Captured steps appear here" }) : null,
          A.map((Z, Y) => {
            const J = Y === A.length - 1;
            return /* @__PURE__ */ O.jsxs(
              "div",
              {
                className: oe(H.actionItem, J && H.actionItemCurrent),
                children: [
                  /* @__PURE__ */ O.jsx("div", { className: H.actionHeaderRow, children: /* @__PURE__ */ O.jsx("span", { className: H.actionTitle, children: Z.text }) }),
                  J ? /* @__PURE__ */ O.jsx("div", { className: H.screenshot, children: /* @__PURE__ */ O.jsx(Z.Screenshot, {}) }) : null
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
function B2({ playToken: m }) {
  const a = ft.useRef(null), f = ft.useRef(null), i = ft.useRef(null), s = ft.useRef(null), [r, h] = ft.useState({ x: -40, y: -40 }), [d, y] = ft.useState(!1), [_, v] = ft.useState(null), [p, A] = ft.useState(""), [E, D] = ft.useState(""), [S, U] = ft.useState(0), G = ft.useCallback(() => {
    A(""), D(""), U(0), y(!1), v(null), h({ x: -40, y: -40 });
  }, []), Z = ft.useCallback(({ clearScene: w, at: K }) => {
    w();
    const q = a.current, F = f.current, X = i.current, lt = s.current;
    if (!q || !F || !X || !lt) return;
    const rt = q.getBoundingClientRect(), ut = { x: F.getBoundingClientRect().left - rt.left - 80, y: rt.height - 44 }, ct = ki(q, F), ot = ki(q, X), R = ki(q, lt);
    if (!ct || !ot || !R) return;
    A(""), D(""), U(0), y(!1), v(null), h(ut), K(320, () => h(ct)), K(780, () => v({ rect: Ji(q, F), visible: !0 }));
    const k = 1080;
    Mf.split("").forEach((T, L) => {
      K(k + L * 62, () => A(Mf.slice(0, L + 1)));
    }), K(k - 80, () => U(1));
    const P = k + Mf.length * 62 + 180;
    K(P, () => v((T) => T && { ...T, visible: !1 })), K(P + 280, () => h(ot)), K(P + 700, () => v({ rect: Ji(q, X), visible: !0 }));
    const st = P + 920;
    K(st - 60, () => U(2)), Cf.split("").forEach((T, L) => {
      K(st + L * 58, () => D(Cf.slice(0, L + 1)));
    });
    const dt = st + Cf.length * 58 + 180;
    K(dt, () => v((T) => T && { ...T, visible: !1 })), K(dt + 280, () => h(R)), K(dt + 660, () => v({ rect: Ji(q, lt), visible: !0 })), K(dt + 720, () => U(3)), K(dt + 980, () => y(!0)), K(dt + 1130, () => y(!1)), K(dt + 1080, () => v((T) => T && { ...T, visible: !1 })), K(dt + 1280, () => U(4)), K(dt + 1500, () => h(ut));
  }, []);
  eo(m, G, Z);
  const Y = [
    { number: "01", label: "Add teammate name", state: S > 1 ? "done" : S === 1 ? "active" : "idle" },
    { number: "02", label: "Add work email", state: S > 2 ? "done" : S === 2 ? "active" : "idle" },
    { number: "03", label: "Send invite", state: S > 3 ? "done" : S === 3 ? "active" : "idle" }
  ], J = S > 3 ? 100 : Math.min(S, 3) / 3 * 100;
  return /* @__PURE__ */ O.jsxs("div", { className: H.dualPane, children: [
    /* @__PURE__ */ O.jsxs("div", { className: H.browser, ref: a, children: [
      /* @__PURE__ */ O.jsx(Um, { url: "app.nari.ai/invite" }),
      /* @__PURE__ */ O.jsx("div", { className: H.browserPage, children: /* @__PURE__ */ O.jsxs("div", { className: H.form, children: [
        /* @__PURE__ */ O.jsxs("div", { className: H.formIntro, children: [
          /* @__PURE__ */ O.jsx("div", { className: H.formHeading, children: "Invite a teammate" }),
          /* @__PURE__ */ O.jsx("div", { className: H.formSub, children: "Nari shows one next step at a time." })
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: H.fieldGroup, children: [
          /* @__PURE__ */ O.jsx("div", { className: H.inputLabel, children: "Name" }),
          /* @__PURE__ */ O.jsx("input", { ref: f, className: H.input, placeholder: "Sarah Chen", value: p, readOnly: !0 })
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: H.fieldGroup, children: [
          /* @__PURE__ */ O.jsx("div", { className: H.inputLabel, children: "Work email" }),
          /* @__PURE__ */ O.jsx("input", { ref: i, className: H.input, placeholder: "sarah@acme.io", value: E, readOnly: !0 })
        ] }),
        /* @__PURE__ */ O.jsx("button", { ref: s, className: H.button, children: "Send invite" })
      ] }) }),
      _?.rect ? /* @__PURE__ */ O.jsx(
        "div",
        {
          className: oe(H.highlight, H.highlightReplay),
          style: {
            top: _.rect.top,
            left: _.rect.left,
            width: _.rect.width,
            height: _.rect.height,
            opacity: _.visible ? 1 : 0
          },
          children: /* @__PURE__ */ O.jsx("div", { className: oe(H.highlightLabel, H.highlightLabelReplay), children: "Do this next" })
        }
      ) : null,
      /* @__PURE__ */ O.jsx("div", { className: H.cursor, style: { transform: `translate(${r.x}px, ${r.y}px)` }, children: /* @__PURE__ */ O.jsx("div", { className: d ? H.cursorInnerClicking : H.cursorInner, children: /* @__PURE__ */ O.jsx(to, {}) }) })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: H.extension, children: [
      /* @__PURE__ */ O.jsx(jm, { showBack: !0 }),
      /* @__PURE__ */ O.jsxs("div", { className: H.panelBody, children: [
        /* @__PURE__ */ O.jsxs("div", { className: H.replayHeader, children: [
          /* @__PURE__ */ O.jsx("h3", { className: H.replayTitle, children: "Invite teammate" }),
          /* @__PURE__ */ O.jsx("span", { className: H.replayProgress, children: S > 3 ? "Done" : `${Math.min(S, 3)} / 3` }),
          /* @__PURE__ */ O.jsx("div", { className: H.replayProgressTrack, children: /* @__PURE__ */ O.jsx("div", { className: H.replayProgressFill, style: { width: `${J}%` } }) })
        ] }),
        S > 3 ? /* @__PURE__ */ O.jsxs("div", { className: H.replayComplete, children: [
          /* @__PURE__ */ O.jsx("div", { className: H.replayCompleteIcon, children: /* @__PURE__ */ O.jsx(N2, {}) }),
          /* @__PURE__ */ O.jsx("p", { className: H.replayCompleteTitle, children: "Done" }),
          /* @__PURE__ */ O.jsx("p", { className: H.replayCompleteSub, children: "3 steps completed" })
        ] }) : /* @__PURE__ */ O.jsx("div", { className: H.replayList, children: Y.map((w) => /* @__PURE__ */ O.jsxs(
          "div",
          {
            className: oe(
              H.replayActionItem,
              w.state === "done" && H.replayActionItemCompleted,
              w.state === "active" && H.replayActionItemCurrent
            ),
            children: [
              /* @__PURE__ */ O.jsxs("div", { className: H.replayActionHeader, children: [
                /* @__PURE__ */ O.jsx("span", { className: H.replayStepNumber, children: w.number }),
                /* @__PURE__ */ O.jsx("span", { className: H.replayActionTitle, children: w.label })
              ] }),
              /* @__PURE__ */ O.jsx("span", { className: H.replayActionMeta, children: w.state === "active" ? "Next" : w.state === "done" ? "Done" : "Queued" })
            ]
          },
          w.number
        )) })
      ] })
    ] })
  ] });
}
function L2({ playToken: m, mode: a = "full" }) {
  const f = ft.useRef(null), i = ft.useRef(null), [s, r] = ft.useState(a === "fill" ? "website" : "nari"), [h, d] = ft.useState(!1), [y, _] = ft.useState(!1), [v, p] = ft.useState({ x: -160, y: 70 }), [A, E] = ft.useState(!1), [D, S] = ft.useState(!1), [U, G] = ft.useState(!1), [Z, Y] = ft.useState(xf), [J, w] = ft.useState(!1), K = ft.useCallback(() => {
    r(a === "fill" ? "website" : "nari"), d(!1), _(!1), p({ x: -160, y: 70 }), E(!1), S(!1), G(!1), Y(xf), w(!1);
  }, [a]), q = ft.useCallback(({ clearScene: F, at: X }) => {
    if (F(), a === "fill") {
      r("website"), d(!1), Y(xf), G(!1), w(!1), X(280, () => G(!0));
      const ot = 380, R = 12;
      for (let k = 1; k <= R; k += 1)
        X(ot + k * 72, () => {
          const P = k / R;
          Y(
            Object.fromEntries(
              Xi.map((st) => [
                st.label,
                st.value.slice(0, Math.max(1, Math.round(st.value.length * P)))
              ])
            )
          );
        });
      X(ot + R * 72 + 100, () => {
        G(!1), w(!0);
      }), X(ot + R * 72 + 650, () => w(!1));
      return;
    }
    const lt = f.current, rt = i.current;
    if (!lt || !rt) return;
    const nt = D2(lt, rt);
    if (!nt) return;
    const ut = { x: nt.x - 58, y: -84 }, ct = { x: nt.x - 58, y: nt.y - 20 };
    if (r("nari"), d(!0), _(!1), E(!1), S(!1), G(!1), Y(xf), w(!1), p(ut), X(260, () => p(ct)), X(900, () => _(!0)), X(980, () => E(!0)), X(1380, () => d(!1)), X(1700, () => {
      E(!1), S(!0);
    }), a === "full") {
      X(2520, () => r("website")), X(2800, () => G(!0));
      const ot = 2900, R = 12;
      for (let k = 1; k <= R; k += 1)
        X(ot + k * 78, () => {
          const P = k / R;
          Y(
            Object.fromEntries(
              Xi.map((st) => [
                st.label,
                st.value.slice(0, Math.max(1, Math.round(st.value.length * P)))
              ])
            )
          );
        });
      X(ot + R * 78 + 120, () => {
        G(!1), w(!0);
      }), X(ot + R * 78 + 720, () => w(!1));
    }
  }, [a]);
  return eo(m, K, q), /* @__PURE__ */ O.jsxs("div", { className: H.agentFullPane, ref: f, children: [
    h && /* @__PURE__ */ O.jsxs(
      "div",
      {
        className: oe(H.agentFloatingPdf, y && H.agentFloatingPdfDropped),
        style: { transform: `translate(${v.x}px, ${v.y}px)` },
        children: [
          /* @__PURE__ */ O.jsx(U2, {}),
          /* @__PURE__ */ O.jsx("div", { className: H.agentDragCursor, children: /* @__PURE__ */ O.jsx(to, {}) })
        ]
      }
    ),
    /* @__PURE__ */ O.jsx("div", { className: oe(H.agentPhasePanel, s === "nari" ? H.agentPhasePanelVisible : H.agentPhasePanelHidden), children: /* @__PURE__ */ O.jsxs("div", { className: H.agentCard, children: [
      /* @__PURE__ */ O.jsxs("div", { className: H.agentCardHead, children: [
        /* @__PURE__ */ O.jsx("span", { className: H.agentCardEyebrow, children: "Nari Agent" }),
        /* @__PURE__ */ O.jsx("div", { className: H.agentCardTitle, children: "Select documents" })
      ] }),
      /* @__PURE__ */ O.jsx(
        "div",
        {
          ref: i,
          className: oe(H.agentDropZoneLarge, y && H.agentDropZoneLargeActive),
          children: y ? /* @__PURE__ */ O.jsxs(
            "div",
            {
              className: oe(
                H.agentAnalysisCard,
                A && H.agentAnalysisCardActive,
                D && H.agentAnalysisCardDone
              ),
              children: [
                A ? /* @__PURE__ */ O.jsx("div", { className: H.agentScanLine }) : null,
                /* @__PURE__ */ O.jsxs(
                  "div",
                  {
                    className: oe(
                      H.agentAnalysisRow,
                      (A || D) && H.agentAnalysisRowVisible,
                      D && H.agentAnalysisRowDone
                    ),
                    children: [
                      /* @__PURE__ */ O.jsx("span", { className: H.agentAnalysisDot }),
                      /* @__PURE__ */ O.jsx("span", { children: A ? "Analyzing PDF…" : D ? "Mapped 4 variables" : "Processing…" })
                    ]
                  }
                ),
                /* @__PURE__ */ O.jsx("div", { className: oe(H.agentVariableList, D && H.agentVariableListVisible), children: Xi.map((F) => /* @__PURE__ */ O.jsx(w2, { label: F.label, value: F.value, visible: D }, F.label)) })
              ]
            }
          ) : /* @__PURE__ */ O.jsx("span", { className: H.agentDropHint, children: "Drop PDF here" })
        }
      )
    ] }) }),
    /* @__PURE__ */ O.jsx("div", { className: oe(H.agentPhasePanel, s === "website" ? H.agentPhasePanelVisible : H.agentPhasePanelHidden), children: /* @__PURE__ */ O.jsxs("div", { className: H.agentCard, children: [
      /* @__PURE__ */ O.jsxs("div", { className: H.agentCardHead, children: [
        /* @__PURE__ */ O.jsx("span", { className: H.agentCardEyebrow, children: "Website · vendorhub.io" }),
        /* @__PURE__ */ O.jsx("div", { className: H.agentCardTitle, children: "Vendor setup form" })
      ] }),
      /* @__PURE__ */ O.jsx("div", { className: H.websiteFields, children: Xi.map((F) => /* @__PURE__ */ O.jsx(
        j2,
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
const Y2 = "_hero_txw9x_1", q2 = "_scene_txw9x_70", V2 = "_sceneFlip_txw9x_101", G2 = "_text_txw9x_105", X2 = "_eyebrow_txw9x_114", Q2 = "_h2_txw9x_137", Z2 = "_body_txw9x_148", K2 = "_line_txw9x_157", J2 = "_lineMuted_txw9x_161", k2 = "_bodyLine_txw9x_165", F2 = "_bodyLineMuted_txw9x_169", W2 = "_demo_txw9x_173", ll = {
  hero: Y2,
  scene: q2,
  sceneFlip: V2,
  text: G2,
  eyebrow: X2,
  h2: Q2,
  body: Z2,
  line: K2,
  lineMuted: J2,
  bodyLine: k2,
  bodyLineMuted: F2,
  demo: W2
}, $2 = [
  {
    eyebrow: "Chrome Extension",
    lines: ["Record anything", "on the web"],
    body: ["Capture any workflow in one click.", "Share knowledge with your team."],
    hold: 4.2
  },
  {
    eyebrow: "Workflow Guides",
    lines: ["Visual guides.", "30h/month saved per employee"],
    body: ["Every recording becomes a", "step-by-step guide instantly."],
    flip: !0,
    hold: 4.2
  },
  {
    eyebrow: "AI Agent",
    lines: ["Agent extracts", "context."],
    body: ["AI autofills every input from the context.", "The workflow can be executed in seconds."],
    hold: 8
  }
], P2 = 0.5, U_ = 0.79;
function I2() {
  const [m, a] = ft.useState([1, 0, 0]), f = ft.useRef(null), i = [ft.useRef(null), ft.useRef(null), ft.useRef(null)];
  return ft.useEffect(() => {
    const s = i.map((y) => y.current);
    Gi.set(s, { opacity: 0, x: 0, scale: 1, filter: "blur(0px)" }), Gi.set(s[0], { opacity: 1 });
    const r = s[0].querySelectorAll("[data-anim]");
    Gi.fromTo(
      r,
      { opacity: 0, y: 22, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.1, ease: "power3.out", delay: 0.3 }
    );
    const h = Gi.timeline({ repeat: -1 });
    function d(y, _, v) {
      const p = s[y], A = s[_], E = p.querySelectorAll("[data-anim]"), D = A.querySelectorAll("[data-anim]"), S = Math.max(v, 0), U = { value: 0 };
      h.to(U, {
        value: 1,
        duration: S,
        ease: "none"
      }).to(U, {
        value: 2,
        duration: P2,
        ease: "none"
      }).to(E, {
        opacity: 0,
        y: -18,
        scale: 0.94,
        duration: 0.22,
        stagger: 0.05,
        ease: "power3.in"
      }).to(p, {
        x: -80,
        opacity: 0,
        scale: 0.91,
        filter: "blur(10px)",
        duration: 0.42,
        ease: "power2.in"
      }, "<+0.04").set(A, { x: 90, opacity: 0, scale: 1.08, filter: "blur(10px)" }).set(D, { opacity: 0, y: 24, scale: 0.95 }).call(() => a((G) => {
        const Z = [...G];
        return Z[_] += 1, Z;
      })).to(A, {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.46,
        ease: "power2.out"
      }).to(D, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.09,
        ease: "power3.out"
      }, "<+0.06");
    }
    return d(0, 1, pr[0]), d(1, 2, pr[1] - U_), d(2, 0, pr[2] - U_), () => h.kill();
  }, []), /* @__PURE__ */ O.jsx("div", { ref: f, className: ll.hero, children: $2.map((s, r) => /* @__PURE__ */ O.jsxs(
    "div",
    {
      ref: i[r],
      className: `${ll.scene} ${s.flip ? ll.sceneFlip : ""}`,
      children: [
        /* @__PURE__ */ O.jsxs("div", { className: ll.text, children: [
          /* @__PURE__ */ O.jsx("p", { className: ll.eyebrow, "data-anim": "", children: s.eyebrow }),
          /* @__PURE__ */ O.jsx("h2", { className: ll.h2, "data-anim": "", children: s.lines.map((h, d) => /* @__PURE__ */ O.jsx(
            "span",
            {
              className: `${ll.line} ${d > 0 ? ll.lineMuted : ""}`,
              children: h
            },
            d
          )) }),
          /* @__PURE__ */ O.jsx("p", { className: ll.body, "data-anim": "", children: s.body.map((h, d) => /* @__PURE__ */ O.jsx(
            "span",
            {
              className: `${ll.bodyLine} ${d > 0 ? ll.bodyLineMuted : ""}`,
              children: h
            },
            d
          )) })
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: ll.demo, children: [
          r === 0 && /* @__PURE__ */ O.jsx(H2, { playToken: m[0] }),
          r === 1 && /* @__PURE__ */ O.jsx(B2, { playToken: m[1] }),
          r === 2 && /* @__PURE__ */ O.jsx(L2, { playToken: m[2], mode: "full" })
        ] })
      ]
    },
    r
  )) });
}
const j_ = document.getElementById("hero-demo-root");
j_ && dg.createRoot(j_).render(/* @__PURE__ */ O.jsx(I2, {}));
