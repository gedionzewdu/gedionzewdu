var v2 = t => {
    throw TypeError(t)
};
var Xd = (t, e, n) => e.has(t) || v2("Cannot " + n);
var O = (t, e, n) => (Xd(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
    _e = (t, e, n) => e.has(t) ? v2("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n),
    le = (t, e, n, o) => (Xd(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n),
    Ht = (t, e, n) => (Xd(t, e, "access private method"), n);
var fc = (t, e, n, o) => ({
    set _(r) {
        le(t, e, r, n)
    },
    get _() {
        return O(t, e, o)
    }
});

function Q_(t, e) {
    for (var n = 0; n < e.length; n++) {
        const o = e[n];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const r in o)
                if (r !== "default" && !(r in t)) {
                    const a = Object.getOwnPropertyDescriptor(o, r);
                    a && Object.defineProperty(t, r, a.get ? a : {
                        enumerable: !0,
                        get: () => o[r]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
    new MutationObserver(r => {
        for (const a of r)
            if (a.type === "childList")
                for (const i of a.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && o(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(r) {
        const a = {};
        return r.integrity && (a.integrity = r.integrity), r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function o(r) {
        if (r.ep) return;
        r.ep = !0;
        const a = n(r);
        fetch(r.href, a)
    }
})();

function xs(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var ug = {
        exports: {}
    },
    hd = {},
    dg = {
        exports: {}
    },
    pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc = Symbol.for("react.element"),
    X_ = Symbol.for("react.portal"),
    q_ = Symbol.for("react.fragment"),
    K_ = Symbol.for("react.strict_mode"),
    Z_ = Symbol.for("react.profiler"),
    J_ = Symbol.for("react.provider"),
    eS = Symbol.for("react.context"),
    tS = Symbol.for("react.forward_ref"),
    nS = Symbol.for("react.suspense"),
    oS = Symbol.for("react.memo"),
    rS = Symbol.for("react.lazy"),
    g2 = Symbol.iterator;

function aS(t) {
    return t === null || typeof t != "object" ? null : (t = g2 && t[g2] || t["@@iterator"], typeof t == "function" ? t : null)
}
var pg = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    fg = Object.assign,
    mg = {};

function ys(t, e, n) {
    this.props = t, this.context = e, this.refs = mg, this.updater = n || pg
}
ys.prototype.isReactComponent = {};
ys.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
};
ys.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
};

function hg() {}
hg.prototype = ys.prototype;

function Om(t, e, n) {
    this.props = t, this.context = e, this.refs = mg, this.updater = n || pg
}
var Mm = Om.prototype = new hg;
Mm.constructor = Om;
fg(Mm, ys.prototype);
Mm.isPureReactComponent = !0;
var x2 = Array.isArray,
    vg = Object.prototype.hasOwnProperty,
    jm = {
        current: null
    },
    gg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function xg(t, e, n) {
    var o, r = {},
        a = null,
        i = null;
    if (e != null)
        for (o in e.ref !== void 0 && (i = e.ref), e.key !== void 0 && (a = "" + e.key), e) vg.call(e, o) && !gg.hasOwnProperty(o) && (r[o] = e[o]);
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
        r.children = l
    }
    if (t && t.defaultProps)
        for (o in s = t.defaultProps, s) r[o] === void 0 && (r[o] = s[o]);
    return {
        $$typeof: rc,
        type: t,
        key: a,
        ref: i,
        props: r,
        _owner: jm.current
    }
}

function iS(t, e) {
    return {
        $$typeof: rc,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}

function Fm(t) {
    return typeof t == "object" && t !== null && t.$$typeof === rc
}

function sS(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var y2 = /\/+/g;

function qd(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? sS("" + t.key) : e.toString(36)
}

function Kc(t, e, n, o, r) {
    var a = typeof t;
    (a === "undefined" || a === "boolean") && (t = null);
    var i = !1;
    if (t === null) i = !0;
    else switch (a) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (t.$$typeof) {
                case rc:
                case X_:
                    i = !0
            }
    }
    if (i) return i = t, r = r(i), t = o === "" ? "." + qd(i, 0) : o, x2(r) ? (n = "", t != null && (n = t.replace(y2, "$&/") + "/"), Kc(r, e, n, "", function(c) {
        return c
    })) : r != null && (Fm(r) && (r = iS(r, n + (!r.key || i && i.key === r.key ? "" : ("" + r.key).replace(y2, "$&/") + "/") + t)), e.push(r)), 1;
    if (i = 0, o = o === "" ? "." : o + ":", x2(t))
        for (var s = 0; s < t.length; s++) {
            a = t[s];
            var l = o + qd(a, s);
            i += Kc(a, e, n, l, r)
        } else if (l = aS(t), typeof l == "function")
            for (t = l.call(t), s = 0; !(a = t.next()).done;) a = a.value, l = o + qd(a, s++), i += Kc(a, e, n, l, r);
        else if (a === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function mc(t, e, n) {
    if (t == null) return t;
    var o = [],
        r = 0;
    return Kc(t, o, "", "", function(a) {
        return e.call(n, a, r++)
    }), o
}

function lS(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(), e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n)
        }), t._status === -1 && (t._status = 0, t._result = e)
    }
    if (t._status === 1) return t._result.default;
    throw t._result
}
var mn = {
        current: null
    },
    Zc = {
        transition: null
    },
    cS = {
        ReactCurrentDispatcher: mn,
        ReactCurrentBatchConfig: Zc,
        ReactCurrentOwner: jm
    };

function yg() {
    throw Error("act(...) is not supported in production builds of React.")
}
pe.Children = {
    map: mc,
    forEach: function(t, e, n) {
        mc(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return mc(t, function() {
            e++
        }), e
    },
    toArray: function(t) {
        return mc(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!Fm(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
pe.Component = ys;
pe.Fragment = q_;
pe.Profiler = Z_;
pe.PureComponent = Om;
pe.StrictMode = K_;
pe.Suspense = nS;
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cS;
pe.act = yg;
pe.cloneElement = function(t, e, n) {
    if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var o = fg({}, t.props),
        r = t.key,
        a = t.ref,
        i = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (a = e.ref, i = jm.current), e.key !== void 0 && (r = "" + e.key), t.type && t.type.defaultProps) var s = t.type.defaultProps;
        for (l in e) vg.call(e, l) && !gg.hasOwnProperty(l) && (o[l] = e[l] === void 0 && s !== void 0 ? s[l] : e[l])
    }
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        s = Array(l);
        for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
        o.children = s
    }
    return {
        $$typeof: rc,
        type: t.type,
        key: r,
        ref: a,
        props: o,
        _owner: i
    }
};
pe.createContext = function(t) {
    return t = {
        $$typeof: eS,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, t.Provider = {
        $$typeof: J_,
        _context: t
    }, t.Consumer = t
};
pe.createElement = xg;
pe.createFactory = function(t) {
    var e = xg.bind(null, t);
    return e.type = t, e
};
pe.createRef = function() {
    return {
        current: null
    }
};
pe.forwardRef = function(t) {
    return {
        $$typeof: tS,
        render: t
    }
};
pe.isValidElement = Fm;
pe.lazy = function(t) {
    return {
        $$typeof: rS,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: lS
    }
};
pe.memo = function(t, e) {
    return {
        $$typeof: oS,
        type: t,
        compare: e === void 0 ? null : e
    }
};
pe.startTransition = function(t) {
    var e = Zc.transition;
    Zc.transition = {};
    try {
        t()
    } finally {
        Zc.transition = e
    }
};
pe.unstable_act = yg;
pe.useCallback = function(t, e) {
    return mn.current.useCallback(t, e)
};
pe.useContext = function(t) {
    return mn.current.useContext(t)
};
pe.useDebugValue = function() {};
pe.useDeferredValue = function(t) {
    return mn.current.useDeferredValue(t)
};
pe.useEffect = function(t, e) {
    return mn.current.useEffect(t, e)
};
pe.useId = function() {
    return mn.current.useId()
};
pe.useImperativeHandle = function(t, e, n) {
    return mn.current.useImperativeHandle(t, e, n)
};
pe.useInsertionEffect = function(t, e) {
    return mn.current.useInsertionEffect(t, e)
};
pe.useLayoutEffect = function(t, e) {
    return mn.current.useLayoutEffect(t, e)
};
pe.useMemo = function(t, e) {
    return mn.current.useMemo(t, e)
};
pe.useReducer = function(t, e, n) {
    return mn.current.useReducer(t, e, n)
};
pe.useRef = function(t) {
    return mn.current.useRef(t)
};
pe.useState = function(t) {
    return mn.current.useState(t)
};
pe.useSyncExternalStore = function(t, e, n) {
    return mn.current.useSyncExternalStore(t, e, n)
};
pe.useTransition = function() {
    return mn.current.useTransition()
};
pe.version = "18.3.1";
dg.exports = pe;
var S = dg.exports;
const F = xs(S),
    uS = Q_({
        __proto__: null,
        default: F
    }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dS = S,
    pS = Symbol.for("react.element"),
    fS = Symbol.for("react.fragment"),
    mS = Object.prototype.hasOwnProperty,
    hS = dS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    vS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function wg(t, e, n) {
    var o, r = {},
        a = null,
        i = null;
    n !== void 0 && (a = "" + n), e.key !== void 0 && (a = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (o in e) mS.call(e, o) && !vS.hasOwnProperty(o) && (r[o] = e[o]);
    if (t && t.defaultProps)
        for (o in e = t.defaultProps, e) r[o] === void 0 && (r[o] = e[o]);
    return {
        $$typeof: pS,
        type: t,
        key: a,
        ref: i,
        props: r,
        _owner: hS.current
    }
}
hd.Fragment = fS;
hd.jsx = wg;
hd.jsxs = wg;
ug.exports = hd;
var w = ug.exports,
    _g = {
        exports: {}
    },
    qn = {},
    Sg = {
        exports: {}
    },
    bg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(N, j) {
        var T = N.length;
        N.push(j);
        e: for (; 0 < T;) {
            var I = T - 1 >>> 1,
                W = N[I];
            if (0 < r(W, j)) N[I] = j, N[T] = W, T = I;
            else break e
        }
    }

    function n(N) {
        return N.length === 0 ? null : N[0]
    }

    function o(N) {
        if (N.length === 0) return null;
        var j = N[0],
            T = N.pop();
        if (T !== j) {
            N[0] = T;
            e: for (var I = 0, W = N.length, J = W >>> 1; I < J;) {
                var ee = 2 * (I + 1) - 1,
                    ye = N[ee],
                    te = ee + 1,
                    xe = N[te];
                if (0 > r(ye, T)) te < W && 0 > r(xe, ye) ? (N[I] = xe, N[te] = T, I = te) : (N[I] = ye, N[ee] = T, I = ee);
                else if (te < W && 0 > r(xe, T)) N[I] = xe, N[te] = T, I = te;
                else break e
            }
        }
        return j
    }

    function r(N, j) {
        var T = N.sortIndex - j.sortIndex;
        return T !== 0 ? T : N.id - j.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        t.unstable_now = function() {
            return a.now()
        }
    } else {
        var i = Date,
            s = i.now();
        t.unstable_now = function() {
            return i.now() - s
        }
    }
    var l = [],
        c = [],
        u = 1,
        p = null,
        d = 3,
        f = !1,
        g = !1,
        m = !1,
        y = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function x(N) {
        for (var j = n(c); j !== null;) {
            if (j.callback === null) o(c);
            else if (j.startTime <= N) o(c), j.sortIndex = j.expirationTime, e(l, j);
            else break;
            j = n(c)
        }
    }

    function _(N) {
        if (m = !1, x(N), !g)
            if (n(l) !== null) g = !0, z(b);
            else {
                var j = n(c);
                j !== null && $(_, j.startTime - N)
            }
    }

    function b(N, j) {
        g = !1, m && (m = !1, v(A), A = -1), f = !0;
        var T = d;
        try {
            for (x(j), p = n(l); p !== null && (!(p.expirationTime > j) || N && !L());) {
                var I = p.callback;
                if (typeof I == "function") {
                    p.callback = null, d = p.priorityLevel;
                    var W = I(p.expirationTime <= j);
                    j = t.unstable_now(), typeof W == "function" ? p.callback = W : p === n(l) && o(l), x(j)
                } else o(l);
                p = n(l)
            }
            if (p !== null) var J = !0;
            else {
                var ee = n(c);
                ee !== null && $(_, ee.startTime - j), J = !1
            }
            return J
        } finally {
            p = null, d = T, f = !1
        }
    }
    var E = !1,
        C = null,
        A = -1,
        P = 5,
        k = -1;

    function L() {
        return !(t.unstable_now() - k < P)
    }

    function R() {
        if (C !== null) {
            var N = t.unstable_now();
            k = N;
            var j = !0;
            try {
                j = C(!0, N)
            } finally {
                j ? H() : (E = !1, C = null)
            }
        } else E = !1
    }
    var H;
    if (typeof h == "function") H = function() {
        h(R)
    };
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel,
            V = M.port2;
        M.port1.onmessage = R, H = function() {
            V.postMessage(null)
        }
    } else H = function() {
        y(R, 0)
    };

    function z(N) {
        C = N, E || (E = !0, H())
    }

    function $(N, j) {
        A = y(function() {
            N(t.unstable_now())
        }, j)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(N) {
        N.callback = null
    }, t.unstable_continueExecution = function() {
        g || f || (g = !0, z(b))
    }, t.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < N ? Math.floor(1e3 / N) : 5
    }, t.unstable_getCurrentPriorityLevel = function() {
        return d
    }, t.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, t.unstable_next = function(N) {
        switch (d) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = d
        }
        var T = d;
        d = j;
        try {
            return N()
        } finally {
            d = T
        }
    }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(N, j) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var T = d;
        d = N;
        try {
            return j()
        } finally {
            d = T
        }
    }, t.unstable_scheduleCallback = function(N, j, T) {
        var I = t.unstable_now();
        switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? I + T : I) : T = I, N) {
            case 1:
                var W = -1;
                break;
            case 2:
                W = 250;
                break;
            case 5:
                W = 1073741823;
                break;
            case 4:
                W = 1e4;
                break;
            default:
                W = 5e3
        }
        return W = T + W, N = {
            id: u++,
            callback: j,
            priorityLevel: N,
            startTime: T,
            expirationTime: W,
            sortIndex: -1
        }, T > I ? (N.sortIndex = T, e(c, N), n(l) === null && N === n(c) && (m ? (v(A), A = -1) : m = !0, $(_, T - I))) : (N.sortIndex = W, e(l, N), g || f || (g = !0, z(b))), N
    }, t.unstable_shouldYield = L, t.unstable_wrapCallback = function(N) {
        var j = d;
        return function() {
            var T = d;
            d = j;
            try {
                return N.apply(this, arguments)
            } finally {
                d = T
            }
        }
    }
})(bg);
Sg.exports = bg;
var gS = Sg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xS = S,
    Gn = gS;

function B(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Cg = new Set,
    Cl = {};

function ri(t, e) {
    ns(t, e), ns(t + "Capture", e)
}

function ns(t, e) {
    for (Cl[t] = e, t = 0; t < e.length; t++) Cg.add(e[t])
}
var vr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Qp = Object.prototype.hasOwnProperty,
    yS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w2 = {},
    _2 = {};

function wS(t) {
    return Qp.call(_2, t) ? !0 : Qp.call(w2, t) ? !1 : yS.test(t) ? _2[t] = !0 : (w2[t] = !0, !1)
}

function _S(t, e, n, o) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return o ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
        default:
            return !1
    }
}

function SS(t, e, n, o) {
    if (e === null || typeof e > "u" || _S(t, e, n, o)) return !0;
    if (o) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
    }
    return !1
}

function hn(t, e, n, o, r, a, i) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = o, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = a, this.removeEmptyString = i
}
var Bt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    Bt[t] = new hn(t, 0, !1, t, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(t) {
    var e = t[0];
    Bt[e] = new hn(e, 1, !1, t[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    Bt[t] = new hn(t, 2, !1, t.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    Bt[t] = new hn(t, 2, !1, t, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    Bt[t] = new hn(t, 3, !1, t.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    Bt[t] = new hn(t, 3, !0, t, null, !1, !1)
});
["capture", "download"].forEach(function(t) {
    Bt[t] = new hn(t, 4, !1, t, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    Bt[t] = new hn(t, 6, !1, t, null, !1, !1)
});
["rowSpan", "start"].forEach(function(t) {
    Bt[t] = new hn(t, 5, !1, t.toLowerCase(), null, !1, !1)
});
var Bm = /[\-:]([a-z])/g;

function Lm(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(Bm, Lm);
    Bt[e] = new hn(e, 1, !1, t, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(Bm, Lm);
    Bt[e] = new hn(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(Bm, Lm);
    Bt[e] = new hn(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    Bt[t] = new hn(t, 1, !1, t.toLowerCase(), null, !1, !1)
});
Bt.xlinkHref = new hn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
    Bt[t] = new hn(t, 1, !1, t.toLowerCase(), null, !0, !0)
});

function Im(t, e, n, o) {
    var r = Bt.hasOwnProperty(e) ? Bt[e] : null;
    (r !== null ? r.type !== 0 : o || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (SS(e, n, r, o) && (n = null), o || r === null ? wS(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : r.mustUseProperty ? t[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (e = r.attributeName, o = r.attributeNamespace, n === null ? t.removeAttribute(e) : (r = r.type, n = r === 3 || r === 4 && n === !0 ? "" : "" + n, o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n))))
}
var Tr = xS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    hc = Symbol.for("react.element"),
    hi = Symbol.for("react.portal"),
    vi = Symbol.for("react.fragment"),
    zm = Symbol.for("react.strict_mode"),
    Xp = Symbol.for("react.profiler"),
    Tg = Symbol.for("react.provider"),
    Eg = Symbol.for("react.context"),
    $m = Symbol.for("react.forward_ref"),
    qp = Symbol.for("react.suspense"),
    Kp = Symbol.for("react.suspense_list"),
    Hm = Symbol.for("react.memo"),
    Rr = Symbol.for("react.lazy"),
    Ag = Symbol.for("react.offscreen"),
    S2 = Symbol.iterator;

function ks(t) {
    return t === null || typeof t != "object" ? null : (t = S2 && t[S2] || t["@@iterator"], typeof t == "function" ? t : null)
}
var Ge = Object.assign,
    Kd;

function Ws(t) {
    if (Kd === void 0) try {
        throw Error()
    } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Kd = e && e[1] || ""
    }
    return `
` + Kd + t
}
var Zd = !1;

function Jd(t, e) {
    if (!t || Zd) return "";
    Zd = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                    throw Error()
                }, Object.defineProperty(e.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (c) {
                    var o = c
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (c) {
                    o = c
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                o = c
            }
            t()
        }
    } catch (c) {
        if (c && o && typeof c.stack == "string") {
            for (var r = c.stack.split(`
`), a = o.stack.split(`
`), i = r.length - 1, s = a.length - 1; 1 <= i && 0 <= s && r[i] !== a[s];) s--;
            for (; 1 <= i && 0 <= s; i--, s--)
                if (r[i] !== a[s]) {
                    if (i !== 1 || s !== 1)
                        do
                            if (i--, s--, 0 > s || r[i] !== a[s]) {
                                var l = `
` + r[i].replace(" at new ", " at ");
                                return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)), l
                            }
                    while (1 <= i && 0 <= s);
                    break
                }
        }
    } finally {
        Zd = !1, Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? Ws(t) : ""
}

function bS(t) {
    switch (t.tag) {
        case 5:
            return Ws(t.type);
        case 16:
            return Ws("Lazy");
        case 13:
            return Ws("Suspense");
        case 19:
            return Ws("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = Jd(t.type, !1), t;
        case 11:
            return t = Jd(t.type.render, !1), t;
        case 1:
            return t = Jd(t.type, !0), t;
        default:
            return ""
    }
}

function Zp(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
        case vi:
            return "Fragment";
        case hi:
            return "Portal";
        case Xp:
            return "Profiler";
        case zm:
            return "StrictMode";
        case qp:
            return "Suspense";
        case Kp:
            return "SuspenseList"
    }
    if (typeof t == "object") switch (t.$$typeof) {
        case Eg:
            return (t.displayName || "Context") + ".Consumer";
        case Tg:
            return (t._context.displayName || "Context") + ".Provider";
        case $m:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Hm:
            return e = t.displayName || null, e !== null ? e : Zp(t.type) || "Memo";
        case Rr:
            e = t._payload, t = t._init;
            try {
                return Zp(t(e))
            } catch {}
    }
    return null
}

function CS(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Zp(e);
        case 8:
            return e === zm ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e
    }
    return null
}

function sa(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
    }
}

function Ng(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}

function TS(t) {
    var e = Ng(t) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        o = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var r = n.get,
            a = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return r.call(this)
            },
            set: function(i) {
                o = "" + i, a.call(this, i)
            }
        }), Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return o
            },
            setValue: function(i) {
                o = "" + i
            },
            stopTracking: function() {
                t._valueTracker = null, delete t[e]
            }
        }
    }
}

function vc(t) {
    t._valueTracker || (t._valueTracker = TS(t))
}

function Pg(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        o = "";
    return t && (o = Ng(t) ? t.checked ? "true" : "false" : t.value), t = o, t !== n ? (e.setValue(t), !0) : !1
}

function Cu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}

function Jp(t, e) {
    var n = e.checked;
    return Ge({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? t._wrapperState.initialChecked
    })
}

function b2(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue,
        o = e.checked != null ? e.checked : e.defaultChecked;
    n = sa(e.value != null ? e.value : n), t._wrapperState = {
        initialChecked: o,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}

function kg(t, e) {
    e = e.checked, e != null && Im(t, "checked", e, !1)
}

function ef(t, e) {
    kg(t, e);
    var n = sa(e.value),
        o = e.type;
    if (n != null) o === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (o === "submit" || o === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? tf(t, e.type, n) : e.hasOwnProperty("defaultValue") && tf(t, e.type, sa(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}

function C2(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var o = e.type;
        if (!(o !== "submit" && o !== "reset" || e.value !== void 0 && e.value !== null)) return;
        e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
    }
    n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n)
}

function tf(t, e, n) {
    (e !== "number" || Cu(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var Ys = Array.isArray;

function Di(t, e, n, o) {
    if (t = t.options, e) {
        e = {};
        for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
        for (n = 0; n < t.length; n++) r = e.hasOwnProperty("$" + t[n].value), t[n].selected !== r && (t[n].selected = r), r && o && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + sa(n), e = null, r = 0; r < t.length; r++) {
            if (t[r].value === n) {
                t[r].selected = !0, o && (t[r].defaultSelected = !0);
                return
            }
            e !== null || t[r].disabled || (e = t[r])
        }
        e !== null && (e.selected = !0)
    }
}

function nf(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(B(91));
    return Ge({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}

function T2(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children, e = e.defaultValue, n != null) {
            if (e != null) throw Error(B(92));
            if (Ys(n)) {
                if (1 < n.length) throw Error(B(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""), n = e
    }
    t._wrapperState = {
        initialValue: sa(n)
    }
}

function Dg(t, e) {
    var n = sa(e.value),
        o = sa(e.defaultValue);
    n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), o != null && (t.defaultValue = "" + o)
}

function E2(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}

function Rg(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function of (t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Rg(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var gc, Og = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, o, r) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, o, r)
        })
    } : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
    else {
        for (gc = gc || document.createElement("div"), gc.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = gc.firstChild; t.firstChild;) t.removeChild(t.firstChild);
        for (; e.firstChild;) t.appendChild(e.firstChild)
    }
});

function Tl(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var nl = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    ES = ["Webkit", "ms", "Moz", "O"];
Object.keys(nl).forEach(function(t) {
    ES.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1), nl[e] = nl[t]
    })
});

function Mg(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || nl.hasOwnProperty(t) && nl[t] ? ("" + e).trim() : e + "px"
}

function jg(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var o = n.indexOf("--") === 0,
                r = Mg(n, e[n], o);
            n === "float" && (n = "cssFloat"), o ? t.setProperty(n, r) : t[n] = r
        }
}
var AS = Ge({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function rf(t, e) {
    if (e) {
        if (AS[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(B(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(B(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(B(61))
        }
        if (e.style != null && typeof e.style != "object") throw Error(B(62))
    }
}

function af(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
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
            return !0
    }
}
var sf = null;

function Um(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
}
var lf = null,
    Ri = null,
    Oi = null;

function A2(t) {
    if (t = sc(t)) {
        if (typeof lf != "function") throw Error(B(280));
        var e = t.stateNode;
        e && (e = wd(e), lf(t.stateNode, t.type, e))
    }
}

function Fg(t) {
    Ri ? Oi ? Oi.push(t) : Oi = [t] : Ri = t
}

function Bg() {
    if (Ri) {
        var t = Ri,
            e = Oi;
        if (Oi = Ri = null, A2(t), e)
            for (t = 0; t < e.length; t++) A2(e[t])
    }
}

function Lg(t, e) {
    return t(e)
}

function Ig() {}
var ep = !1;

function zg(t, e, n) {
    if (ep) return t(e, n);
    ep = !0;
    try {
        return Lg(t, e, n)
    } finally {
        ep = !1, (Ri !== null || Oi !== null) && (Ig(), Bg())
    }
}

function El(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var o = wd(n);
    if (o === null) return null;
    n = o[e];
    e: switch (e) {
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
            (o = !o.disabled) || (t = t.type, o = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !o;
            break e;
        default:
            t = !1
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(B(231, e, typeof n));
    return n
}
var cf = !1;
if (vr) try {
    var Ds = {};
    Object.defineProperty(Ds, "passive", {
        get: function() {
            cf = !0
        }
    }), window.addEventListener("test", Ds, Ds), window.removeEventListener("test", Ds, Ds)
} catch {
    cf = !1
}

function NS(t, e, n, o, r, a, i, s, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}
var ol = !1,
    Tu = null,
    Eu = !1,
    uf = null,
    PS = {
        onError: function(t) {
            ol = !0, Tu = t
        }
    };

function kS(t, e, n, o, r, a, i, s, l) {
    ol = !1, Tu = null, NS.apply(PS, arguments)
}

function DS(t, e, n, o, r, a, i, s, l) {
    if (kS.apply(this, arguments), ol) {
        if (ol) {
            var c = Tu;
            ol = !1, Tu = null
        } else throw Error(B(198));
        Eu || (Eu = !0, uf = c)
    }
}

function ai(t) {
    var e = t,
        n = t;
    if (t.alternate)
        for (; e.return;) e = e.return;
    else {
        t = e;
        do e = t, e.flags & 4098 && (n = e.return), t = e.return; while (t)
    }
    return e.tag === 3 ? n : null
}

function $g(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
    }
    return null
}

function N2(t) {
    if (ai(t) !== t) throw Error(B(188))
}

function RS(t) {
    var e = t.alternate;
    if (!e) {
        if (e = ai(t), e === null) throw Error(B(188));
        return e !== t ? null : t
    }
    for (var n = t, o = e;;) {
        var r = n.return;
        if (r === null) break;
        var a = r.alternate;
        if (a === null) {
            if (o = r.return, o !== null) {
                n = o;
                continue
            }
            break
        }
        if (r.child === a.child) {
            for (a = r.child; a;) {
                if (a === n) return N2(r), t;
                if (a === o) return N2(r), e;
                a = a.sibling
            }
            throw Error(B(188))
        }
        if (n.return !== o.return) n = r, o = a;
        else {
            for (var i = !1, s = r.child; s;) {
                if (s === n) {
                    i = !0, n = r, o = a;
                    break
                }
                if (s === o) {
                    i = !0, o = r, n = a;
                    break
                }
                s = s.sibling
            }
            if (!i) {
                for (s = a.child; s;) {
                    if (s === n) {
                        i = !0, n = a, o = r;
                        break
                    }
                    if (s === o) {
                        i = !0, o = a, n = r;
                        break
                    }
                    s = s.sibling
                }
                if (!i) throw Error(B(189))
            }
        }
        if (n.alternate !== o) throw Error(B(190))
    }
    if (n.tag !== 3) throw Error(B(188));
    return n.stateNode.current === n ? t : e
}

function Hg(t) {
    return t = RS(t), t !== null ? Ug(t) : null
}

function Ug(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null;) {
        var e = Ug(t);
        if (e !== null) return e;
        t = t.sibling
    }
    return null
}
var Vg = Gn.unstable_scheduleCallback,
    P2 = Gn.unstable_cancelCallback,
    OS = Gn.unstable_shouldYield,
    MS = Gn.unstable_requestPaint,
    ct = Gn.unstable_now,
    jS = Gn.unstable_getCurrentPriorityLevel,
    Vm = Gn.unstable_ImmediatePriority,
    Wg = Gn.unstable_UserBlockingPriority,
    Au = Gn.unstable_NormalPriority,
    FS = Gn.unstable_LowPriority,
    Yg = Gn.unstable_IdlePriority,
    vd = null,
    Qo = null;

function BS(t) {
    if (Qo && typeof Qo.onCommitFiberRoot == "function") try {
        Qo.onCommitFiberRoot(vd, t, void 0, (t.current.flags & 128) === 128)
    } catch {}
}
var Ao = Math.clz32 ? Math.clz32 : zS,
    LS = Math.log,
    IS = Math.LN2;

function zS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (LS(t) / IS | 0) | 0
}
var xc = 64,
    yc = 4194304;

function Gs(t) {
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
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
    }
}

function Nu(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var o = 0,
        r = t.suspendedLanes,
        a = t.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var s = i & ~r;
        s !== 0 ? o = Gs(s) : (a &= i, a !== 0 && (o = Gs(a)))
    } else i = n & ~r, i !== 0 ? o = Gs(i) : a !== 0 && (o = Gs(a));
    if (o === 0) return 0;
    if (e !== 0 && e !== o && !(e & r) && (r = o & -o, a = e & -e, r >= a || r === 16 && (a & 4194240) !== 0)) return e;
    if (o & 4 && (o |= n & 16), e = t.entangledLanes, e !== 0)
        for (t = t.entanglements, e &= o; 0 < e;) n = 31 - Ao(e), r = 1 << n, o |= t[n], e &= ~r;
    return o
}

function $S(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function HS(t, e) {
    for (var n = t.suspendedLanes, o = t.pingedLanes, r = t.expirationTimes, a = t.pendingLanes; 0 < a;) {
        var i = 31 - Ao(a),
            s = 1 << i,
            l = r[i];
        l === -1 ? (!(s & n) || s & o) && (r[i] = $S(s, e)) : l <= e && (t.expiredLanes |= s), a &= ~s
    }
}

function df(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}

function Gg() {
    var t = xc;
    return xc <<= 1, !(xc & 4194240) && (xc = 64), t
}

function tp(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e
}

function ac(t, e, n) {
    t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Ao(e), t[e] = n
}

function US(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
    var o = t.eventTimes;
    for (t = t.expirationTimes; 0 < n;) {
        var r = 31 - Ao(n),
            a = 1 << r;
        e[r] = 0, o[r] = -1, t[r] = -1, n &= ~a
    }
}

function Wm(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n;) {
        var o = 31 - Ao(n),
            r = 1 << o;
        r & e | t[o] & e && (t[o] |= e), n &= ~r
    }
}
var be = 0;

function Qg(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Xg, Ym, qg, Kg, Zg, pf = !1,
    wc = [],
    Xr = null,
    qr = null,
    Kr = null,
    Al = new Map,
    Nl = new Map,
    Mr = [],
    VS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function k2(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            Xr = null;
            break;
        case "dragenter":
        case "dragleave":
            qr = null;
            break;
        case "mouseover":
        case "mouseout":
            Kr = null;
            break;
        case "pointerover":
        case "pointerout":
            Al.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Nl.delete(e.pointerId)
    }
}

function Rs(t, e, n, o, r, a) {
    return t === null || t.nativeEvent !== a ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: o,
        nativeEvent: a,
        targetContainers: [r]
    }, e !== null && (e = sc(e), e !== null && Ym(e)), t) : (t.eventSystemFlags |= o, e = t.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), t)
}

function WS(t, e, n, o, r) {
    switch (e) {
        case "focusin":
            return Xr = Rs(Xr, t, e, n, o, r), !0;
        case "dragenter":
            return qr = Rs(qr, t, e, n, o, r), !0;
        case "mouseover":
            return Kr = Rs(Kr, t, e, n, o, r), !0;
        case "pointerover":
            var a = r.pointerId;
            return Al.set(a, Rs(Al.get(a) || null, t, e, n, o, r)), !0;
        case "gotpointercapture":
            return a = r.pointerId, Nl.set(a, Rs(Nl.get(a) || null, t, e, n, o, r)), !0
    }
    return !1
}

function Jg(t) {
    var e = ka(t.target);
    if (e !== null) {
        var n = ai(e);
        if (n !== null) {
            if (e = n.tag, e === 13) {
                if (e = $g(n), e !== null) {
                    t.blockedOn = e, Zg(t.priority, function() {
                        qg(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}

function Jc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
        var n = ff(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var o = new n.constructor(n.type, n);
            sf = o, n.target.dispatchEvent(o), sf = null
        } else return e = sc(n), e !== null && Ym(e), t.blockedOn = n, !1;
        e.shift()
    }
    return !0
}

function D2(t, e, n) {
    Jc(t) && n.delete(e)
}

function YS() {
    pf = !1, Xr !== null && Jc(Xr) && (Xr = null), qr !== null && Jc(qr) && (qr = null), Kr !== null && Jc(Kr) && (Kr = null), Al.forEach(D2), Nl.forEach(D2)
}

function Os(t, e) {
    t.blockedOn === e && (t.blockedOn = null, pf || (pf = !0, Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority, YS)))
}

function Pl(t) {
    function e(r) {
        return Os(r, t)
    }
    if (0 < wc.length) {
        Os(wc[0], t);
        for (var n = 1; n < wc.length; n++) {
            var o = wc[n];
            o.blockedOn === t && (o.blockedOn = null)
        }
    }
    for (Xr !== null && Os(Xr, t), qr !== null && Os(qr, t), Kr !== null && Os(Kr, t), Al.forEach(e), Nl.forEach(e), n = 0; n < Mr.length; n++) o = Mr[n], o.blockedOn === t && (o.blockedOn = null);
    for (; 0 < Mr.length && (n = Mr[0], n.blockedOn === null);) Jg(n), n.blockedOn === null && Mr.shift()
}
var Mi = Tr.ReactCurrentBatchConfig,
    Pu = !0;

function GS(t, e, n, o) {
    var r = be,
        a = Mi.transition;
    Mi.transition = null;
    try {
        be = 1, Gm(t, e, n, o)
    } finally {
        be = r, Mi.transition = a
    }
}

function QS(t, e, n, o) {
    var r = be,
        a = Mi.transition;
    Mi.transition = null;
    try {
        be = 4, Gm(t, e, n, o)
    } finally {
        be = r, Mi.transition = a
    }
}

function Gm(t, e, n, o) {
    if (Pu) {
        var r = ff(t, e, n, o);
        if (r === null) dp(t, e, o, ku, n), k2(t, o);
        else if (WS(r, t, e, n, o)) o.stopPropagation();
        else if (k2(t, o), e & 4 && -1 < VS.indexOf(t)) {
            for (; r !== null;) {
                var a = sc(r);
                if (a !== null && Xg(a), a = ff(t, e, n, o), a === null && dp(t, e, o, ku, n), a === r) break;
                r = a
            }
            r !== null && o.stopPropagation()
        } else dp(t, e, o, null, n)
    }
}
var ku = null;

function ff(t, e, n, o) {
    if (ku = null, t = Um(o), t = ka(t), t !== null)
        if (e = ai(t), e === null) t = null;
        else if (n = e.tag, n === 13) {
        if (t = $g(e), t !== null) return t;
        t = null
    } else if (n === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
        t = null
    } else e !== t && (t = null);
    return ku = t, null
}

function ex(t) {
    switch (t) {
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
            return 1;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (jS()) {
                case Vm:
                    return 1;
                case Wg:
                    return 4;
                case Au:
                case FS:
                    return 16;
                case Yg:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var $r = null,
    Qm = null,
    eu = null;

function tx() {
    if (eu) return eu;
    var t, e = Qm,
        n = e.length,
        o, r = "value" in $r ? $r.value : $r.textContent,
        a = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var i = n - t;
    for (o = 1; o <= i && e[n - o] === r[a - o]; o++);
    return eu = r.slice(t, 1 < o ? 1 - o : void 0)
}

function tu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
}

function _c() {
    return !0
}

function R2() {
    return !1
}

function Kn(t) {
    function e(n, o, r, a, i) {
        this._reactName = n, this._targetInst = r, this.type = o, this.nativeEvent = a, this.target = i, this.currentTarget = null;
        for (var s in t) t.hasOwnProperty(s) && (n = t[s], this[s] = n ? n(a) : a[s]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? _c : R2, this.isPropagationStopped = R2, this
    }
    return Ge(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _c)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _c)
        },
        persist: function() {},
        isPersistent: _c
    }), e
}
var ws = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Xm = Kn(ws),
    ic = Ge({}, ws, {
        view: 0,
        detail: 0
    }),
    XS = Kn(ic),
    np, op, Ms, gd = Ge({}, ic, {
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
        getModifierState: qm,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX" in t ? t.movementX : (t !== Ms && (Ms && t.type === "mousemove" ? (np = t.screenX - Ms.screenX, op = t.screenY - Ms.screenY) : op = np = 0, Ms = t), np)
        },
        movementY: function(t) {
            return "movementY" in t ? t.movementY : op
        }
    }),
    O2 = Kn(gd),
    qS = Ge({}, gd, {
        dataTransfer: 0
    }),
    KS = Kn(qS),
    ZS = Ge({}, ic, {
        relatedTarget: 0
    }),
    rp = Kn(ZS),
    JS = Ge({}, ws, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    eb = Kn(JS),
    tb = Ge({}, ws, {
        clipboardData: function(t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData
        }
    }),
    nb = Kn(tb),
    ob = Ge({}, ws, {
        data: 0
    }),
    M2 = Kn(ob),
    rb = {
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
    },
    ab = {
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
    },
    ib = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function sb(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = ib[t]) ? !!e[t] : !1
}

function qm() {
    return sb
}
var lb = Ge({}, ic, {
        key: function(t) {
            if (t.key) {
                var e = rb[t.key] || t.key;
                if (e !== "Unidentified") return e
            }
            return t.type === "keypress" ? (t = tu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? ab[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: qm,
        charCode: function(t) {
            return t.type === "keypress" ? tu(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? tu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    }),
    cb = Kn(lb),
    ub = Ge({}, gd, {
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
    }),
    j2 = Kn(ub),
    db = Ge({}, ic, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: qm
    }),
    pb = Kn(db),
    fb = Ge({}, ws, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    mb = Kn(fb),
    hb = Ge({}, gd, {
        deltaX: function(t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    vb = Kn(hb),
    gb = [9, 13, 27, 32],
    Km = vr && "CompositionEvent" in window,
    rl = null;
vr && "documentMode" in document && (rl = document.documentMode);
var xb = vr && "TextEvent" in window && !rl,
    nx = vr && (!Km || rl && 8 < rl && 11 >= rl),
    F2 = " ",
    B2 = !1;

function ox(t, e) {
    switch (t) {
        case "keyup":
            return gb.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function rx(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
}
var gi = !1;

function yb(t, e) {
    switch (t) {
        case "compositionend":
            return rx(e);
        case "keypress":
            return e.which !== 32 ? null : (B2 = !0, F2);
        case "textInput":
            return t = e.data, t === F2 && B2 ? null : t;
        default:
            return null
    }
}

function wb(t, e) {
    if (gi) return t === "compositionend" || !Km && ox(t, e) ? (t = tx(), eu = Qm = $r = null, gi = !1, t) : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return nx && e.locale !== "ko" ? null : e.data;
        default:
            return null
    }
}
var _b = {
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

function L2(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!_b[t.type] : e === "textarea"
}

function ax(t, e, n, o) {
    Fg(o), e = Du(e, "onChange"), 0 < e.length && (n = new Xm("onChange", "change", null, n, o), t.push({
        event: n,
        listeners: e
    }))
}
var al = null,
    kl = null;

function Sb(t) {
    vx(t, 0)
}

function xd(t) {
    var e = wi(t);
    if (Pg(e)) return t
}

function bb(t, e) {
    if (t === "change") return e
}
var ix = !1;
if (vr) {
    var ap;
    if (vr) {
        var ip = "oninput" in document;
        if (!ip) {
            var I2 = document.createElement("div");
            I2.setAttribute("oninput", "return;"), ip = typeof I2.oninput == "function"
        }
        ap = ip
    } else ap = !1;
    ix = ap && (!document.documentMode || 9 < document.documentMode)
}

function z2() {
    al && (al.detachEvent("onpropertychange", sx), kl = al = null)
}

function sx(t) {
    if (t.propertyName === "value" && xd(kl)) {
        var e = [];
        ax(e, kl, t, Um(t)), zg(Sb, e)
    }
}

function Cb(t, e, n) {
    t === "focusin" ? (z2(), al = e, kl = n, al.attachEvent("onpropertychange", sx)) : t === "focusout" && z2()
}

function Tb(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return xd(kl)
}

function Eb(t, e) {
    if (t === "click") return xd(e)
}

function Ab(t, e) {
    if (t === "input" || t === "change") return xd(e)
}

function Nb(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Po = typeof Object.is == "function" ? Object.is : Nb;

function Dl(t, e) {
    if (Po(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
        o = Object.keys(e);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
        var r = n[o];
        if (!Qp.call(e, r) || !Po(t[r], e[r])) return !1
    }
    return !0
}

function $2(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t
}

function H2(t, e) {
    var n = $2(t);
    t = 0;
    for (var o; n;) {
        if (n.nodeType === 3) {
            if (o = t + n.textContent.length, t <= e && o >= e) return {
                node: n,
                offset: e - t
            };
            t = o
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = $2(n)
    }
}

function lx(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? lx(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}

function cx() {
    for (var t = window, e = Cu(); e instanceof t.HTMLIFrameElement;) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) t = e.contentWindow;
        else break;
        e = Cu(t.document)
    }
    return e
}

function Zm(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}

function Pb(t) {
    var e = cx(),
        n = t.focusedElem,
        o = t.selectionRange;
    if (e !== n && n && n.ownerDocument && lx(n.ownerDocument.documentElement, n)) {
        if (o !== null && Zm(n)) {
            if (e = o.start, t = o.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
                t = t.getSelection();
                var r = n.textContent.length,
                    a = Math.min(o.start, r);
                o = o.end === void 0 ? a : Math.min(o.end, r), !t.extend && a > o && (r = o, o = a, a = r), r = H2(n, a);
                var i = H2(n, o);
                r && i && (t.rangeCount !== 1 || t.anchorNode !== r.node || t.anchorOffset !== r.offset || t.focusNode !== i.node || t.focusOffset !== i.offset) && (e = e.createRange(), e.setStart(r.node, r.offset), t.removeAllRanges(), a > o ? (t.addRange(e), t.extend(i.node, i.offset)) : (e.setEnd(i.node, i.offset), t.addRange(e)))
            }
        }
        for (e = [], t = n; t = t.parentNode;) t.nodeType === 1 && e.push({
            element: t,
            left: t.scrollLeft,
            top: t.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++) t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
    }
}
var kb = vr && "documentMode" in document && 11 >= document.documentMode,
    xi = null,
    mf = null,
    il = null,
    hf = !1;

function U2(t, e, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hf || xi == null || xi !== Cu(o) || (o = xi, "selectionStart" in o && Zm(o) ? o = {
        start: o.selectionStart,
        end: o.selectionEnd
    } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
        anchorNode: o.anchorNode,
        anchorOffset: o.anchorOffset,
        focusNode: o.focusNode,
        focusOffset: o.focusOffset
    }), il && Dl(il, o) || (il = o, o = Du(mf, "onSelect"), 0 < o.length && (e = new Xm("onSelect", "select", null, e, n), t.push({
        event: e,
        listeners: o
    }), e.target = xi)))
}

function Sc(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
}
var yi = {
        animationend: Sc("Animation", "AnimationEnd"),
        animationiteration: Sc("Animation", "AnimationIteration"),
        animationstart: Sc("Animation", "AnimationStart"),
        transitionend: Sc("Transition", "TransitionEnd")
    },
    sp = {},
    ux = {};
vr && (ux = document.createElement("div").style, "AnimationEvent" in window || (delete yi.animationend.animation, delete yi.animationiteration.animation, delete yi.animationstart.animation), "TransitionEvent" in window || delete yi.transitionend.transition);

function yd(t) {
    if (sp[t]) return sp[t];
    if (!yi[t]) return t;
    var e = yi[t],
        n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in ux) return sp[t] = e[n];
    return t
}
var dx = yd("animationend"),
    px = yd("animationiteration"),
    fx = yd("animationstart"),
    mx = yd("transitionend"),
    hx = new Map,
    V2 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function va(t, e) {
    hx.set(t, e), ri(e, [t])
}
for (var lp = 0; lp < V2.length; lp++) {
    var cp = V2[lp],
        Db = cp.toLowerCase(),
        Rb = cp[0].toUpperCase() + cp.slice(1);
    va(Db, "on" + Rb)
}
va(dx, "onAnimationEnd");
va(px, "onAnimationIteration");
va(fx, "onAnimationStart");
va("dblclick", "onDoubleClick");
va("focusin", "onFocus");
va("focusout", "onBlur");
va(mx, "onTransitionEnd");
ns("onMouseEnter", ["mouseout", "mouseover"]);
ns("onMouseLeave", ["mouseout", "mouseover"]);
ns("onPointerEnter", ["pointerout", "pointerover"]);
ns("onPointerLeave", ["pointerout", "pointerover"]);
ri("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ri("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ri("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ri("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ri("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ri("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Ob = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));

function W2(t, e, n) {
    var o = t.type || "unknown-event";
    t.currentTarget = n, DS(o, e, void 0, t), t.currentTarget = null
}

function vx(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var o = t[n],
            r = o.event;
        o = o.listeners;
        e: {
            var a = void 0;
            if (e)
                for (var i = o.length - 1; 0 <= i; i--) {
                    var s = o[i],
                        l = s.instance,
                        c = s.currentTarget;
                    if (s = s.listener, l !== a && r.isPropagationStopped()) break e;
                    W2(r, s, c), a = l
                } else
                    for (i = 0; i < o.length; i++) {
                        if (s = o[i], l = s.instance, c = s.currentTarget, s = s.listener, l !== a && r.isPropagationStopped()) break e;
                        W2(r, s, c), a = l
                    }
        }
    }
    if (Eu) throw t = uf, Eu = !1, uf = null, t
}

function Me(t, e) {
    var n = e[wf];
    n === void 0 && (n = e[wf] = new Set);
    var o = t + "__bubble";
    n.has(o) || (gx(e, t, 2, !1), n.add(o))
}

function up(t, e, n) {
    var o = 0;
    e && (o |= 4), gx(n, t, o, e)
}
var bc = "_reactListening" + Math.random().toString(36).slice(2);

function Rl(t) {
    if (!t[bc]) {
        t[bc] = !0, Cg.forEach(function(n) {
            n !== "selectionchange" && (Ob.has(n) || up(n, !1, t), up(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[bc] || (e[bc] = !0, up("selectionchange", !1, e))
    }
}

function gx(t, e, n, o) {
    switch (ex(e)) {
        case 1:
            var r = GS;
            break;
        case 4:
            r = QS;
            break;
        default:
            r = Gm
    }
    n = r.bind(null, e, n, t), r = void 0, !cf || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), o ? r !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: r
    }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
        passive: r
    }) : t.addEventListener(e, n, !1)
}

function dp(t, e, n, o, r) {
    var a = o;
    if (!(e & 1) && !(e & 2) && o !== null) e: for (;;) {
        if (o === null) return;
        var i = o.tag;
        if (i === 3 || i === 4) {
            var s = o.stateNode.containerInfo;
            if (s === r || s.nodeType === 8 && s.parentNode === r) break;
            if (i === 4)
                for (i = o.return; i !== null;) {
                    var l = i.tag;
                    if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo, l === r || l.nodeType === 8 && l.parentNode === r)) return;
                    i = i.return
                }
            for (; s !== null;) {
                if (i = ka(s), i === null) return;
                if (l = i.tag, l === 5 || l === 6) {
                    o = a = i;
                    continue e
                }
                s = s.parentNode
            }
        }
        o = o.return
    }
    zg(function() {
        var c = a,
            u = Um(n),
            p = [];
        e: {
            var d = hx.get(t);
            if (d !== void 0) {
                var f = Xm,
                    g = t;
                switch (t) {
                    case "keypress":
                        if (tu(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        f = cb;
                        break;
                    case "focusin":
                        g = "focus", f = rp;
                        break;
                    case "focusout":
                        g = "blur", f = rp;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        f = rp;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        f = O2;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        f = KS;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        f = pb;
                        break;
                    case dx:
                    case px:
                    case fx:
                        f = eb;
                        break;
                    case mx:
                        f = mb;
                        break;
                    case "scroll":
                        f = XS;
                        break;
                    case "wheel":
                        f = vb;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        f = nb;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        f = j2
                }
                var m = (e & 4) !== 0,
                    y = !m && t === "scroll",
                    v = m ? d !== null ? d + "Capture" : null : d;
                m = [];
                for (var h = c, x; h !== null;) {
                    x = h;
                    var _ = x.stateNode;
                    if (x.tag === 5 && _ !== null && (x = _, v !== null && (_ = El(h, v), _ != null && m.push(Ol(h, _, x)))), y) break;
                    h = h.return
                }
                0 < m.length && (d = new f(d, g, null, n, u), p.push({
                    event: d,
                    listeners: m
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (d = t === "mouseover" || t === "pointerover", f = t === "mouseout" || t === "pointerout", d && n !== sf && (g = n.relatedTarget || n.fromElement) && (ka(g) || g[gr])) break e;
                if ((f || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : window, f ? (g = n.relatedTarget || n.toElement, f = c, g = g ? ka(g) : null, g !== null && (y = ai(g), g !== y || g.tag !== 5 && g.tag !== 6) && (g = null)) : (f = null, g = c), f !== g)) {
                    if (m = O2, _ = "onMouseLeave", v = "onMouseEnter", h = "mouse", (t === "pointerout" || t === "pointerover") && (m = j2, _ = "onPointerLeave", v = "onPointerEnter", h = "pointer"), y = f == null ? d : wi(f), x = g == null ? d : wi(g), d = new m(_, h + "leave", f, n, u), d.target = y, d.relatedTarget = x, _ = null, ka(u) === c && (m = new m(v, h + "enter", g, n, u), m.target = x, m.relatedTarget = y, _ = m), y = _, f && g) t: {
                        for (m = f, v = g, h = 0, x = m; x; x = li(x)) h++;
                        for (x = 0, _ = v; _; _ = li(_)) x++;
                        for (; 0 < h - x;) m = li(m),
                        h--;
                        for (; 0 < x - h;) v = li(v),
                        x--;
                        for (; h--;) {
                            if (m === v || v !== null && m === v.alternate) break t;
                            m = li(m), v = li(v)
                        }
                        m = null
                    }
                    else m = null;
                    f !== null && Y2(p, d, f, m, !1), g !== null && y !== null && Y2(p, y, g, m, !0)
                }
            }
            e: {
                if (d = c ? wi(c) : window, f = d.nodeName && d.nodeName.toLowerCase(), f === "select" || f === "input" && d.type === "file") var b = bb;
                else if (L2(d))
                    if (ix) b = Ab;
                    else {
                        b = Tb;
                        var E = Cb
                    }
                else(f = d.nodeName) && f.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (b = Eb);
                if (b && (b = b(t, c))) {
                    ax(p, b, n, u);
                    break e
                }
                E && E(t, d, c),
                t === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && tf(d, "number", d.value)
            }
            switch (E = c ? wi(c) : window, t) {
                case "focusin":
                    (L2(E) || E.contentEditable === "true") && (xi = E, mf = c, il = null);
                    break;
                case "focusout":
                    il = mf = xi = null;
                    break;
                case "mousedown":
                    hf = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    hf = !1, U2(p, n, u);
                    break;
                case "selectionchange":
                    if (kb) break;
                case "keydown":
                case "keyup":
                    U2(p, n, u)
            }
            var C;
            if (Km) e: {
                switch (t) {
                    case "compositionstart":
                        var A = "onCompositionStart";
                        break e;
                    case "compositionend":
                        A = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        A = "onCompositionUpdate";
                        break e
                }
                A = void 0
            }
            else gi ? ox(t, n) && (A = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");A && (nx && n.locale !== "ko" && (gi || A !== "onCompositionStart" ? A === "onCompositionEnd" && gi && (C = tx()) : ($r = u, Qm = "value" in $r ? $r.value : $r.textContent, gi = !0)), E = Du(c, A), 0 < E.length && (A = new M2(A, t, null, n, u), p.push({
                event: A,
                listeners: E
            }), C ? A.data = C : (C = rx(n), C !== null && (A.data = C)))),
            (C = xb ? yb(t, n) : wb(t, n)) && (c = Du(c, "onBeforeInput"), 0 < c.length && (u = new M2("onBeforeInput", "beforeinput", null, n, u), p.push({
                event: u,
                listeners: c
            }), u.data = C))
        }
        vx(p, e)
    })
}

function Ol(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}

function Du(t, e) {
    for (var n = e + "Capture", o = []; t !== null;) {
        var r = t,
            a = r.stateNode;
        r.tag === 5 && a !== null && (r = a, a = El(t, n), a != null && o.unshift(Ol(t, a, r)), a = El(t, e), a != null && o.push(Ol(t, a, r))), t = t.return
    }
    return o
}

function li(t) {
    if (t === null) return null;
    do t = t.return; while (t && t.tag !== 5);
    return t || null
}

function Y2(t, e, n, o, r) {
    for (var a = e._reactName, i = []; n !== null && n !== o;) {
        var s = n,
            l = s.alternate,
            c = s.stateNode;
        if (l !== null && l === o) break;
        s.tag === 5 && c !== null && (s = c, r ? (l = El(n, a), l != null && i.unshift(Ol(n, l, s))) : r || (l = El(n, a), l != null && i.push(Ol(n, l, s)))), n = n.return
    }
    i.length !== 0 && t.push({
        event: e,
        listeners: i
    })
}
var Mb = /\r\n?/g,
    jb = /\u0000|\uFFFD/g;

function G2(t) {
    return (typeof t == "string" ? t : "" + t).replace(Mb, `
`).replace(jb, "")
}

function Cc(t, e, n) {
    if (e = G2(e), G2(t) !== e && n) throw Error(B(425))
}

function Ru() {}
var vf = null,
    gf = null;

function xf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var yf = typeof setTimeout == "function" ? setTimeout : void 0,
    Fb = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Q2 = typeof Promise == "function" ? Promise : void 0,
    Bb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Q2 < "u" ? function(t) {
        return Q2.resolve(null).then(t).catch(Lb)
    } : yf;

function Lb(t) {
    setTimeout(function() {
        throw t
    })
}

function pp(t, e) {
    var n = e,
        o = 0;
    do {
        var r = n.nextSibling;
        if (t.removeChild(n), r && r.nodeType === 8)
            if (n = r.data, n === "/$") {
                if (o === 0) {
                    t.removeChild(r), Pl(e);
                    return
                }
                o--
            } else n !== "$" && n !== "$?" && n !== "$!" || o++;
        n = r
    } while (n);
    Pl(e)
}

function Zr(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
            if (e === "/$") return null
        }
    }
    return t
}

function X2(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0) return t;
                e--
            } else n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var _s = Math.random().toString(36).slice(2),
    Vo = "__reactFiber$" + _s,
    Ml = "__reactProps$" + _s,
    gr = "__reactContainer$" + _s,
    wf = "__reactEvents$" + _s,
    Ib = "__reactListeners$" + _s,
    zb = "__reactHandles$" + _s;

function ka(t) {
    var e = t[Vo];
    if (e) return e;
    for (var n = t.parentNode; n;) {
        if (e = n[gr] || n[Vo]) {
            if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
                for (t = X2(t); t !== null;) {
                    if (n = t[Vo]) return n;
                    t = X2(t)
                }
            return e
        }
        t = n, n = t.parentNode
    }
    return null
}

function sc(t) {
    return t = t[Vo] || t[gr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}

function wi(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(B(33))
}

function wd(t) {
    return t[Ml] || null
}
var _f = [],
    _i = -1;

function ga(t) {
    return {
        current: t
    }
}

function je(t) {
    0 > _i || (t.current = _f[_i], _f[_i] = null, _i--)
}

function De(t, e) {
    _i++, _f[_i] = t.current, t.current = e
}
var la = {},
    Zt = ga(la),
    wn = ga(!1),
    Qa = la;

function os(t, e) {
    var n = t.type.contextTypes;
    if (!n) return la;
    var o = t.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === e) return o.__reactInternalMemoizedMaskedChildContext;
    var r = {},
        a;
    for (a in n) r[a] = e[a];
    return o && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = r), r
}

function _n(t) {
    return t = t.childContextTypes, t != null
}

function Ou() {
    je(wn), je(Zt)
}

function q2(t, e, n) {
    if (Zt.current !== la) throw Error(B(168));
    De(Zt, e), De(wn, n)
}

function xx(t, e, n) {
    var o = t.stateNode;
    if (e = e.childContextTypes, typeof o.getChildContext != "function") return n;
    o = o.getChildContext();
    for (var r in o)
        if (!(r in e)) throw Error(B(108, CS(t) || "Unknown", r));
    return Ge({}, n, o)
}

function Mu(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || la, Qa = Zt.current, De(Zt, t), De(wn, wn.current), !0
}

function K2(t, e, n) {
    var o = t.stateNode;
    if (!o) throw Error(B(169));
    n ? (t = xx(t, e, Qa), o.__reactInternalMemoizedMergedChildContext = t, je(wn), je(Zt), De(Zt, t)) : je(wn), De(wn, n)
}
var lr = null,
    _d = !1,
    fp = !1;

function yx(t) {
    lr === null ? lr = [t] : lr.push(t)
}

function $b(t) {
    _d = !0, yx(t)
}

function xa() {
    if (!fp && lr !== null) {
        fp = !0;
        var t = 0,
            e = be;
        try {
            var n = lr;
            for (be = 1; t < n.length; t++) {
                var o = n[t];
                do o = o(!0); while (o !== null)
            }
            lr = null, _d = !1
        } catch (r) {
            throw lr !== null && (lr = lr.slice(t + 1)), Vg(Vm, xa), r
        } finally {
            be = e, fp = !1
        }
    }
    return null
}
var Si = [],
    bi = 0,
    ju = null,
    Fu = 0,
    oo = [],
    ro = 0,
    Xa = null,
    dr = 1,
    pr = "";

function Ta(t, e) {
    Si[bi++] = Fu, Si[bi++] = ju, ju = t, Fu = e
}

function wx(t, e, n) {
    oo[ro++] = dr, oo[ro++] = pr, oo[ro++] = Xa, Xa = t;
    var o = dr;
    t = pr;
    var r = 32 - Ao(o) - 1;
    o &= ~(1 << r), n += 1;
    var a = 32 - Ao(e) + r;
    if (30 < a) {
        var i = r - r % 5;
        a = (o & (1 << i) - 1).toString(32), o >>= i, r -= i, dr = 1 << 32 - Ao(e) + r | n << r | o, pr = a + t
    } else dr = 1 << a | n << r | o, pr = t
}

function Jm(t) {
    t.return !== null && (Ta(t, 1), wx(t, 1, 0))
}

function eh(t) {
    for (; t === ju;) ju = Si[--bi], Si[bi] = null, Fu = Si[--bi], Si[bi] = null;
    for (; t === Xa;) Xa = oo[--ro], oo[ro] = null, pr = oo[--ro], oo[ro] = null, dr = oo[--ro], oo[ro] = null
}
var Vn = null,
    Hn = null,
    Le = !1,
    Eo = null;

function _x(t, e) {
    var n = lo(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n)
}

function Z2(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, Vn = t, Hn = Zr(e.firstChild), !0) : !1;
        case 6:
            return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, Vn = t, Hn = null, !0) : !1;
        case 13:
            return e = e.nodeType !== 8 ? null : e, e !== null ? (n = Xa !== null ? {
                id: dr,
                overflow: pr
            } : null, t.memoizedState = {
                dehydrated: e,
                treeContext: n,
                retryLane: 1073741824
            }, n = lo(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, Vn = t, Hn = null, !0) : !1;
        default:
            return !1
    }
}

function Sf(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}

function bf(t) {
    if (Le) {
        var e = Hn;
        if (e) {
            var n = e;
            if (!Z2(t, e)) {
                if (Sf(t)) throw Error(B(418));
                e = Zr(n.nextSibling);
                var o = Vn;
                e && Z2(t, e) ? _x(o, n) : (t.flags = t.flags & -4097 | 2, Le = !1, Vn = t)
            }
        } else {
            if (Sf(t)) throw Error(B(418));
            t.flags = t.flags & -4097 | 2, Le = !1, Vn = t
        }
    }
}

function J2(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
    Vn = t
}

function Tc(t) {
    if (t !== Vn) return !1;
    if (!Le) return J2(t), Le = !0, !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !xf(t.type, t.memoizedProps)), e && (e = Hn)) {
        if (Sf(t)) throw Sx(), Error(B(418));
        for (; e;) _x(t, e), e = Zr(e.nextSibling)
    }
    if (J2(t), t.tag === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(B(317));
        e: {
            for (t = t.nextSibling, e = 0; t;) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Hn = Zr(t.nextSibling);
                            break e
                        }
                        e--
                    } else n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Hn = null
        }
    } else Hn = Vn ? Zr(t.stateNode.nextSibling) : null;
    return !0
}

function Sx() {
    for (var t = Hn; t;) t = Zr(t.nextSibling)
}

function rs() {
    Hn = Vn = null, Le = !1
}

function th(t) {
    Eo === null ? Eo = [t] : Eo.push(t)
}
var Hb = Tr.ReactCurrentBatchConfig;

function js(t, e, n) {
    if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(B(309));
                var o = n.stateNode
            }
            if (!o) throw Error(B(147, t));
            var r = o,
                a = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === a ? e.ref : (e = function(i) {
                var s = r.refs;
                i === null ? delete s[a] : s[a] = i
            }, e._stringRef = a, e)
        }
        if (typeof t != "string") throw Error(B(284));
        if (!n._owner) throw Error(B(290, t))
    }
    return t
}

function Ec(t, e) {
    throw t = Object.prototype.toString.call(e), Error(B(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}

function e0(t) {
    var e = t._init;
    return e(t._payload)
}

function bx(t) {
    function e(v, h) {
        if (t) {
            var x = v.deletions;
            x === null ? (v.deletions = [h], v.flags |= 16) : x.push(h)
        }
    }

    function n(v, h) {
        if (!t) return null;
        for (; h !== null;) e(v, h), h = h.sibling;
        return null
    }

    function o(v, h) {
        for (v = new Map; h !== null;) h.key !== null ? v.set(h.key, h) : v.set(h.index, h), h = h.sibling;
        return v
    }

    function r(v, h) {
        return v = na(v, h), v.index = 0, v.sibling = null, v
    }

    function a(v, h, x) {
        return v.index = x, t ? (x = v.alternate, x !== null ? (x = x.index, x < h ? (v.flags |= 2, h) : x) : (v.flags |= 2, h)) : (v.flags |= 1048576, h)
    }

    function i(v) {
        return t && v.alternate === null && (v.flags |= 2), v
    }

    function s(v, h, x, _) {
        return h === null || h.tag !== 6 ? (h = wp(x, v.mode, _), h.return = v, h) : (h = r(h, x), h.return = v, h)
    }

    function l(v, h, x, _) {
        var b = x.type;
        return b === vi ? u(v, h, x.props.children, _, x.key) : h !== null && (h.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Rr && e0(b) === h.type) ? (_ = r(h, x.props), _.ref = js(v, h, x), _.return = v, _) : (_ = lu(x.type, x.key, x.props, null, v.mode, _), _.ref = js(v, h, x), _.return = v, _)
    }

    function c(v, h, x, _) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== x.containerInfo || h.stateNode.implementation !== x.implementation ? (h = _p(x, v.mode, _), h.return = v, h) : (h = r(h, x.children || []), h.return = v, h)
    }

    function u(v, h, x, _, b) {
        return h === null || h.tag !== 7 ? (h = za(x, v.mode, _, b), h.return = v, h) : (h = r(h, x), h.return = v, h)
    }

    function p(v, h, x) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = wp("" + h, v.mode, x), h.return = v, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case hc:
                    return x = lu(h.type, h.key, h.props, null, v.mode, x), x.ref = js(v, null, h), x.return = v, x;
                case hi:
                    return h = _p(h, v.mode, x), h.return = v, h;
                case Rr:
                    var _ = h._init;
                    return p(v, _(h._payload), x)
            }
            if (Ys(h) || ks(h)) return h = za(h, v.mode, x, null), h.return = v, h;
            Ec(v, h)
        }
        return null
    }

    function d(v, h, x, _) {
        var b = h !== null ? h.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number") return b !== null ? null : s(v, h, "" + x, _);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case hc:
                    return x.key === b ? l(v, h, x, _) : null;
                case hi:
                    return x.key === b ? c(v, h, x, _) : null;
                case Rr:
                    return b = x._init, d(v, h, b(x._payload), _)
            }
            if (Ys(x) || ks(x)) return b !== null ? null : u(v, h, x, _, null);
            Ec(v, x)
        }
        return null
    }

    function f(v, h, x, _, b) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number") return v = v.get(x) || null, s(h, v, "" + _, b);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
                case hc:
                    return v = v.get(_.key === null ? x : _.key) || null, l(h, v, _, b);
                case hi:
                    return v = v.get(_.key === null ? x : _.key) || null, c(h, v, _, b);
                case Rr:
                    var E = _._init;
                    return f(v, h, x, E(_._payload), b)
            }
            if (Ys(_) || ks(_)) return v = v.get(x) || null, u(h, v, _, b, null);
            Ec(h, _)
        }
        return null
    }

    function g(v, h, x, _) {
        for (var b = null, E = null, C = h, A = h = 0, P = null; C !== null && A < x.length; A++) {
            C.index > A ? (P = C, C = null) : P = C.sibling;
            var k = d(v, C, x[A], _);
            if (k === null) {
                C === null && (C = P);
                break
            }
            t && C && k.alternate === null && e(v, C), h = a(k, h, A), E === null ? b = k : E.sibling = k, E = k, C = P
        }
        if (A === x.length) return n(v, C), Le && Ta(v, A), b;
        if (C === null) {
            for (; A < x.length; A++) C = p(v, x[A], _), C !== null && (h = a(C, h, A), E === null ? b = C : E.sibling = C, E = C);
            return Le && Ta(v, A), b
        }
        for (C = o(v, C); A < x.length; A++) P = f(C, v, A, x[A], _), P !== null && (t && P.alternate !== null && C.delete(P.key === null ? A : P.key), h = a(P, h, A), E === null ? b = P : E.sibling = P, E = P);
        return t && C.forEach(function(L) {
            return e(v, L)
        }), Le && Ta(v, A), b
    }

    function m(v, h, x, _) {
        var b = ks(x);
        if (typeof b != "function") throw Error(B(150));
        if (x = b.call(x), x == null) throw Error(B(151));
        for (var E = b = null, C = h, A = h = 0, P = null, k = x.next(); C !== null && !k.done; A++, k = x.next()) {
            C.index > A ? (P = C, C = null) : P = C.sibling;
            var L = d(v, C, k.value, _);
            if (L === null) {
                C === null && (C = P);
                break
            }
            t && C && L.alternate === null && e(v, C), h = a(L, h, A), E === null ? b = L : E.sibling = L, E = L, C = P
        }
        if (k.done) return n(v, C), Le && Ta(v, A), b;
        if (C === null) {
            for (; !k.done; A++, k = x.next()) k = p(v, k.value, _), k !== null && (h = a(k, h, A), E === null ? b = k : E.sibling = k, E = k);
            return Le && Ta(v, A), b
        }
        for (C = o(v, C); !k.done; A++, k = x.next()) k = f(C, v, A, k.value, _), k !== null && (t && k.alternate !== null && C.delete(k.key === null ? A : k.key), h = a(k, h, A), E === null ? b = k : E.sibling = k, E = k);
        return t && C.forEach(function(R) {
            return e(v, R)
        }), Le && Ta(v, A), b
    }

    function y(v, h, x, _) {
        if (typeof x == "object" && x !== null && x.type === vi && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case hc:
                    e: {
                        for (var b = x.key, E = h; E !== null;) {
                            if (E.key === b) {
                                if (b = x.type, b === vi) {
                                    if (E.tag === 7) {
                                        n(v, E.sibling), h = r(E, x.props.children), h.return = v, v = h;
                                        break e
                                    }
                                } else if (E.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Rr && e0(b) === E.type) {
                                    n(v, E.sibling), h = r(E, x.props), h.ref = js(v, E, x), h.return = v, v = h;
                                    break e
                                }
                                n(v, E);
                                break
                            } else e(v, E);
                            E = E.sibling
                        }
                        x.type === vi ? (h = za(x.props.children, v.mode, _, x.key), h.return = v, v = h) : (_ = lu(x.type, x.key, x.props, null, v.mode, _), _.ref = js(v, h, x), _.return = v, v = _)
                    }
                    return i(v);
                case hi:
                    e: {
                        for (E = x.key; h !== null;) {
                            if (h.key === E)
                                if (h.tag === 4 && h.stateNode.containerInfo === x.containerInfo && h.stateNode.implementation === x.implementation) {
                                    n(v, h.sibling), h = r(h, x.children || []), h.return = v, v = h;
                                    break e
                                } else {
                                    n(v, h);
                                    break
                                }
                            else e(v, h);
                            h = h.sibling
                        }
                        h = _p(x, v.mode, _),
                        h.return = v,
                        v = h
                    }
                    return i(v);
                case Rr:
                    return E = x._init, y(v, h, E(x._payload), _)
            }
            if (Ys(x)) return g(v, h, x, _);
            if (ks(x)) return m(v, h, x, _);
            Ec(v, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, h !== null && h.tag === 6 ? (n(v, h.sibling), h = r(h, x), h.return = v, v = h) : (n(v, h), h = wp(x, v.mode, _), h.return = v, v = h), i(v)) : n(v, h)
    }
    return y
}
var as = bx(!0),
    Cx = bx(!1),
    Bu = ga(null),
    Lu = null,
    Ci = null,
    nh = null;

function oh() {
    nh = Ci = Lu = null
}

function rh(t) {
    var e = Bu.current;
    je(Bu), t._currentValue = e
}

function Cf(t, e, n) {
    for (; t !== null;) {
        var o = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, o !== null && (o.childLanes |= e)) : o !== null && (o.childLanes & e) !== e && (o.childLanes |= e), t === n) break;
        t = t.return
    }
}

function ji(t, e) {
    Lu = t, nh = Ci = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (yn = !0), t.firstContext = null)
}

function mo(t) {
    var e = t._currentValue;
    if (nh !== t)
        if (t = {
                context: t,
                memoizedValue: e,
                next: null
            }, Ci === null) {
            if (Lu === null) throw Error(B(308));
            Ci = t, Lu.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else Ci = Ci.next = t;
    return e
}
var Da = null;

function ah(t) {
    Da === null ? Da = [t] : Da.push(t)
}

function Tx(t, e, n, o) {
    var r = e.interleaved;
    return r === null ? (n.next = n, ah(e)) : (n.next = r.next, r.next = n), e.interleaved = n, xr(t, o)
}

function xr(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null;) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var Or = !1;

function ih(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Ex(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}

function mr(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Jr(t, e, n) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ge & 2) {
        var r = o.pending;
        return r === null ? e.next = e : (e.next = r.next, r.next = e), o.pending = e, xr(t, n)
    }
    return r = o.interleaved, r === null ? (e.next = e, ah(o)) : (e.next = r.next, r.next = e), o.interleaved = e, xr(t, n)
}

function nu(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
        var o = e.lanes;
        o &= t.pendingLanes, n |= o, e.lanes = n, Wm(t, n)
    }
}

function t0(t, e) {
    var n = t.updateQueue,
        o = t.alternate;
    if (o !== null && (o = o.updateQueue, n === o)) {
        var r = null,
            a = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                a === null ? r = a = i : a = a.next = i, n = n.next
            } while (n !== null);
            a === null ? r = a = e : a = a.next = e
        } else r = a = e;
        n = {
            baseState: o.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: a,
            shared: o.shared,
            effects: o.effects
        }, t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
}

function Iu(t, e, n, o) {
    var r = t.updateQueue;
    Or = !1;
    var a = r.firstBaseUpdate,
        i = r.lastBaseUpdate,
        s = r.shared.pending;
    if (s !== null) {
        r.shared.pending = null;
        var l = s,
            c = l.next;
        l.next = null, i === null ? a = c : i.next = c, i = l;
        var u = t.alternate;
        u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== i && (s === null ? u.firstBaseUpdate = c : s.next = c, u.lastBaseUpdate = l))
    }
    if (a !== null) {
        var p = r.baseState;
        i = 0, u = c = l = null, s = a;
        do {
            var d = s.lane,
                f = s.eventTime;
            if ((o & d) === d) {
                u !== null && (u = u.next = {
                    eventTime: f,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var g = t,
                        m = s;
                    switch (d = e, f = n, m.tag) {
                        case 1:
                            if (g = m.payload, typeof g == "function") {
                                p = g.call(f, p, d);
                                break e
                            }
                            p = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = m.payload, d = typeof g == "function" ? g.call(f, p, d) : g, d == null) break e;
                            p = Ge({}, p, d);
                            break e;
                        case 2:
                            Or = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (t.flags |= 64, d = r.effects, d === null ? r.effects = [s] : d.push(s))
            } else f = {
                eventTime: f,
                lane: d,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, u === null ? (c = u = f, l = p) : u = u.next = f, i |= d;
            if (s = s.next, s === null) {
                if (s = r.shared.pending, s === null) break;
                d = s, s = d.next, d.next = null, r.lastBaseUpdate = d, r.shared.pending = null
            }
        } while (!0);
        if (u === null && (l = p), r.baseState = l, r.firstBaseUpdate = c, r.lastBaseUpdate = u, e = r.shared.interleaved, e !== null) {
            r = e;
            do i |= r.lane, r = r.next; while (r !== e)
        } else a === null && (r.shared.lanes = 0);
        Ka |= i, t.lanes = i, t.memoizedState = p
    }
}

function n0(t, e, n) {
    if (t = e.effects, e.effects = null, t !== null)
        for (e = 0; e < t.length; e++) {
            var o = t[e],
                r = o.callback;
            if (r !== null) {
                if (o.callback = null, o = n, typeof r != "function") throw Error(B(191, r));
                r.call(o)
            }
        }
}
var lc = {},
    Xo = ga(lc),
    jl = ga(lc),
    Fl = ga(lc);

function Ra(t) {
    if (t === lc) throw Error(B(174));
    return t
}

function sh(t, e) {
    switch (De(Fl, e), De(jl, t), De(Xo, lc), t = e.nodeType, t) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : of (null, "");
            break;
        default:
            t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = of (e, t)
    }
    je(Xo), De(Xo, e)
}

function is() {
    je(Xo), je(jl), je(Fl)
}

function Ax(t) {
    Ra(Fl.current);
    var e = Ra(Xo.current),
        n = of (e, t.type);
    e !== n && (De(jl, t), De(Xo, n))
}

function lh(t) {
    jl.current === t && (je(Xo), je(jl))
}
var Ue = ga(0);

function zu(t) {
    for (var e = t; e !== null;) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e
        } else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue
        }
        if (e === t) break;
        for (; e.sibling === null;) {
            if (e.return === null || e.return === t) return null;
            e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
    }
    return null
}
var mp = [];

function ch() {
    for (var t = 0; t < mp.length; t++) mp[t]._workInProgressVersionPrimary = null;
    mp.length = 0
}
var ou = Tr.ReactCurrentDispatcher,
    hp = Tr.ReactCurrentBatchConfig,
    qa = 0,
    Ye = null,
    wt = null,
    Et = null,
    $u = !1,
    sl = !1,
    Bl = 0,
    Ub = 0;

function Ut() {
    throw Error(B(321))
}

function uh(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!Po(t[n], e[n])) return !1;
    return !0
}

function dh(t, e, n, o, r, a) {
    if (qa = a, Ye = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, ou.current = t === null || t.memoizedState === null ? Gb : Qb, t = n(o, r), sl) {
        a = 0;
        do {
            if (sl = !1, Bl = 0, 25 <= a) throw Error(B(301));
            a += 1, Et = wt = null, e.updateQueue = null, ou.current = Xb, t = n(o, r)
        } while (sl)
    }
    if (ou.current = Hu, e = wt !== null && wt.next !== null, qa = 0, Et = wt = Ye = null, $u = !1, e) throw Error(B(300));
    return t
}

function ph() {
    var t = Bl !== 0;
    return Bl = 0, t
}

function Lo() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Et === null ? Ye.memoizedState = Et = t : Et = Et.next = t, Et
}

function ho() {
    if (wt === null) {
        var t = Ye.alternate;
        t = t !== null ? t.memoizedState : null
    } else t = wt.next;
    var e = Et === null ? Ye.memoizedState : Et.next;
    if (e !== null) Et = e, wt = t;
    else {
        if (t === null) throw Error(B(310));
        wt = t, t = {
            memoizedState: wt.memoizedState,
            baseState: wt.baseState,
            baseQueue: wt.baseQueue,
            queue: wt.queue,
            next: null
        }, Et === null ? Ye.memoizedState = Et = t : Et = Et.next = t
    }
    return Et
}

function Ll(t, e) {
    return typeof e == "function" ? e(t) : e
}

function vp(t) {
    var e = ho(),
        n = e.queue;
    if (n === null) throw Error(B(311));
    n.lastRenderedReducer = t;
    var o = wt,
        r = o.baseQueue,
        a = n.pending;
    if (a !== null) {
        if (r !== null) {
            var i = r.next;
            r.next = a.next, a.next = i
        }
        o.baseQueue = r = a, n.pending = null
    }
    if (r !== null) {
        a = r.next, o = o.baseState;
        var s = i = null,
            l = null,
            c = a;
        do {
            var u = c.lane;
            if ((qa & u) === u) l !== null && (l = l.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), o = c.hasEagerState ? c.eagerState : t(o, c.action);
            else {
                var p = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (s = l = p, i = o) : l = l.next = p, Ye.lanes |= u, Ka |= u
            }
            c = c.next
        } while (c !== null && c !== a);
        l === null ? i = o : l.next = s, Po(o, e.memoizedState) || (yn = !0), e.memoizedState = o, e.baseState = i, e.baseQueue = l, n.lastRenderedState = o
    }
    if (t = n.interleaved, t !== null) {
        r = t;
        do a = r.lane, Ye.lanes |= a, Ka |= a, r = r.next; while (r !== t)
    } else r === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}

function gp(t) {
    var e = ho(),
        n = e.queue;
    if (n === null) throw Error(B(311));
    n.lastRenderedReducer = t;
    var o = n.dispatch,
        r = n.pending,
        a = e.memoizedState;
    if (r !== null) {
        n.pending = null;
        var i = r = r.next;
        do a = t(a, i.action), i = i.next; while (i !== r);
        Po(a, e.memoizedState) || (yn = !0), e.memoizedState = a, e.baseQueue === null && (e.baseState = a), n.lastRenderedState = a
    }
    return [a, o]
}

function Nx() {}

function Px(t, e) {
    var n = Ye,
        o = ho(),
        r = e(),
        a = !Po(o.memoizedState, r);
    if (a && (o.memoizedState = r, yn = !0), o = o.queue, fh(Rx.bind(null, n, o, t), [t]), o.getSnapshot !== e || a || Et !== null && Et.memoizedState.tag & 1) {
        if (n.flags |= 2048, Il(9, Dx.bind(null, n, o, r, e), void 0, null), At === null) throw Error(B(349));
        qa & 30 || kx(n, e, r)
    }
    return r
}

function kx(t, e, n) {
    t.flags |= 16384, t = {
        getSnapshot: e,
        value: n
    }, e = Ye.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, Ye.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
}

function Dx(t, e, n, o) {
    e.value = n, e.getSnapshot = o, Ox(e) && Mx(t)
}

function Rx(t, e, n) {
    return n(function() {
        Ox(e) && Mx(t)
    })
}

function Ox(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !Po(t, n)
    } catch {
        return !0
    }
}

function Mx(t) {
    var e = xr(t, 1);
    e !== null && No(e, t, 1, -1)
}

function o0(t) {
    var e = Lo();
    return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ll,
        lastRenderedState: t
    }, e.queue = t, t = t.dispatch = Yb.bind(null, Ye, t), [e.memoizedState, t]
}

function Il(t, e, n, o) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: o,
        next: null
    }, e = Ye.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, Ye.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (o = n.next, n.next = t, t.next = o, e.lastEffect = t)), t
}

function jx() {
    return ho().memoizedState
}

function ru(t, e, n, o) {
    var r = Lo();
    Ye.flags |= t, r.memoizedState = Il(1 | e, n, void 0, o === void 0 ? null : o)
}

function Sd(t, e, n, o) {
    var r = ho();
    o = o === void 0 ? null : o;
    var a = void 0;
    if (wt !== null) {
        var i = wt.memoizedState;
        if (a = i.destroy, o !== null && uh(o, i.deps)) {
            r.memoizedState = Il(e, n, a, o);
            return
        }
    }
    Ye.flags |= t, r.memoizedState = Il(1 | e, n, a, o)
}

function r0(t, e) {
    return ru(8390656, 8, t, e)
}

function fh(t, e) {
    return Sd(2048, 8, t, e)
}

function Fx(t, e) {
    return Sd(4, 2, t, e)
}

function Bx(t, e) {
    return Sd(4, 4, t, e)
}

function Lx(t, e) {
    if (typeof e == "function") return t = t(), e(t),
        function() {
            e(null)
        };
    if (e != null) return t = t(), e.current = t,
        function() {
            e.current = null
        }
}

function Ix(t, e, n) {
    return n = n != null ? n.concat([t]) : null, Sd(4, 4, Lx.bind(null, e, t), n)
}

function mh() {}

function zx(t, e) {
    var n = ho();
    e = e === void 0 ? null : e;
    var o = n.memoizedState;
    return o !== null && e !== null && uh(e, o[1]) ? o[0] : (n.memoizedState = [t, e], t)
}

function $x(t, e) {
    var n = ho();
    e = e === void 0 ? null : e;
    var o = n.memoizedState;
    return o !== null && e !== null && uh(e, o[1]) ? o[0] : (t = t(), n.memoizedState = [t, e], t)
}

function Hx(t, e, n) {
    return qa & 21 ? (Po(n, e) || (n = Gg(), Ye.lanes |= n, Ka |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, yn = !0), t.memoizedState = n)
}

function Vb(t, e) {
    var n = be;
    be = n !== 0 && 4 > n ? n : 4, t(!0);
    var o = hp.transition;
    hp.transition = {};
    try {
        t(!1), e()
    } finally {
        be = n, hp.transition = o
    }
}

function Ux() {
    return ho().memoizedState
}

function Wb(t, e, n) {
    var o = ta(t);
    if (n = {
            lane: o,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Vx(t)) Wx(e, n);
    else if (n = Tx(t, e, n, o), n !== null) {
        var r = fn();
        No(n, t, o, r), Yx(n, e, o)
    }
}

function Yb(t, e, n) {
    var o = ta(t),
        r = {
            lane: o,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Vx(t)) Wx(e, r);
    else {
        var a = t.alternate;
        if (t.lanes === 0 && (a === null || a.lanes === 0) && (a = e.lastRenderedReducer, a !== null)) try {
            var i = e.lastRenderedState,
                s = a(i, n);
            if (r.hasEagerState = !0, r.eagerState = s, Po(s, i)) {
                var l = e.interleaved;
                l === null ? (r.next = r, ah(e)) : (r.next = l.next, l.next = r), e.interleaved = r;
                return
            }
        } catch {} finally {}
        n = Tx(t, e, r, o), n !== null && (r = fn(), No(n, t, o, r), Yx(n, e, o))
    }
}

function Vx(t) {
    var e = t.alternate;
    return t === Ye || e !== null && e === Ye
}

function Wx(t, e) {
    sl = $u = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
}

function Yx(t, e, n) {
    if (n & 4194240) {
        var o = e.lanes;
        o &= t.pendingLanes, n |= o, e.lanes = n, Wm(t, n)
    }
}
var Hu = {
        readContext: mo,
        useCallback: Ut,
        useContext: Ut,
        useEffect: Ut,
        useImperativeHandle: Ut,
        useInsertionEffect: Ut,
        useLayoutEffect: Ut,
        useMemo: Ut,
        useReducer: Ut,
        useRef: Ut,
        useState: Ut,
        useDebugValue: Ut,
        useDeferredValue: Ut,
        useTransition: Ut,
        useMutableSource: Ut,
        useSyncExternalStore: Ut,
        useId: Ut,
        unstable_isNewReconciler: !1
    },
    Gb = {
        readContext: mo,
        useCallback: function(t, e) {
            return Lo().memoizedState = [t, e === void 0 ? null : e], t
        },
        useContext: mo,
        useEffect: r0,
        useImperativeHandle: function(t, e, n) {
            return n = n != null ? n.concat([t]) : null, ru(4194308, 4, Lx.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return ru(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            return ru(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = Lo();
            return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t
        },
        useReducer: function(t, e, n) {
            var o = Lo();
            return e = n !== void 0 ? n(e) : e, o.memoizedState = o.baseState = e, t = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: e
            }, o.queue = t, t = t.dispatch = Wb.bind(null, Ye, t), [o.memoizedState, t]
        },
        useRef: function(t) {
            var e = Lo();
            return t = {
                current: t
            }, e.memoizedState = t
        },
        useState: o0,
        useDebugValue: mh,
        useDeferredValue: function(t) {
            return Lo().memoizedState = t
        },
        useTransition: function() {
            var t = o0(!1),
                e = t[0];
            return t = Vb.bind(null, t[1]), Lo().memoizedState = t, [e, t]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(t, e, n) {
            var o = Ye,
                r = Lo();
            if (Le) {
                if (n === void 0) throw Error(B(407));
                n = n()
            } else {
                if (n = e(), At === null) throw Error(B(349));
                qa & 30 || kx(o, e, n)
            }
            r.memoizedState = n;
            var a = {
                value: n,
                getSnapshot: e
            };
            return r.queue = a, r0(Rx.bind(null, o, a, t), [t]), o.flags |= 2048, Il(9, Dx.bind(null, o, a, n, e), void 0, null), n
        },
        useId: function() {
            var t = Lo(),
                e = At.identifierPrefix;
            if (Le) {
                var n = pr,
                    o = dr;
                n = (o & ~(1 << 32 - Ao(o) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = Bl++, 0 < n && (e += "H" + n.toString(32)), e += ":"
            } else n = Ub++, e = ":" + e + "r" + n.toString(32) + ":";
            return t.memoizedState = e
        },
        unstable_isNewReconciler: !1
    },
    Qb = {
        readContext: mo,
        useCallback: zx,
        useContext: mo,
        useEffect: fh,
        useImperativeHandle: Ix,
        useInsertionEffect: Fx,
        useLayoutEffect: Bx,
        useMemo: $x,
        useReducer: vp,
        useRef: jx,
        useState: function() {
            return vp(Ll)
        },
        useDebugValue: mh,
        useDeferredValue: function(t) {
            var e = ho();
            return Hx(e, wt.memoizedState, t)
        },
        useTransition: function() {
            var t = vp(Ll)[0],
                e = ho().memoizedState;
            return [t, e]
        },
        useMutableSource: Nx,
        useSyncExternalStore: Px,
        useId: Ux,
        unstable_isNewReconciler: !1
    },
    Xb = {
        readContext: mo,
        useCallback: zx,
        useContext: mo,
        useEffect: fh,
        useImperativeHandle: Ix,
        useInsertionEffect: Fx,
        useLayoutEffect: Bx,
        useMemo: $x,
        useReducer: gp,
        useRef: jx,
        useState: function() {
            return gp(Ll)
        },
        useDebugValue: mh,
        useDeferredValue: function(t) {
            var e = ho();
            return wt === null ? e.memoizedState = t : Hx(e, wt.memoizedState, t)
        },
        useTransition: function() {
            var t = gp(Ll)[0],
                e = ho().memoizedState;
            return [t, e]
        },
        useMutableSource: Nx,
        useSyncExternalStore: Px,
        useId: Ux,
        unstable_isNewReconciler: !1
    };

function So(t, e) {
    if (t && t.defaultProps) {
        e = Ge({}, e), t = t.defaultProps;
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}

function Tf(t, e, n, o) {
    e = t.memoizedState, n = n(o, e), n = n == null ? e : Ge({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
}
var bd = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? ai(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var o = fn(),
            r = ta(t),
            a = mr(o, r);
        a.payload = e, n != null && (a.callback = n), e = Jr(t, a, r), e !== null && (No(e, t, r, o), nu(e, t, r))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var o = fn(),
            r = ta(t),
            a = mr(o, r);
        a.tag = 1, a.payload = e, n != null && (a.callback = n), e = Jr(t, a, r), e !== null && (No(e, t, r, o), nu(e, t, r))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = fn(),
            o = ta(t),
            r = mr(n, o);
        r.tag = 2, e != null && (r.callback = e), e = Jr(t, r, o), e !== null && (No(e, t, o, n), nu(e, t, o))
    }
};

function a0(t, e, n, o, r, a, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(o, a, i) : e.prototype && e.prototype.isPureReactComponent ? !Dl(n, o) || !Dl(r, a) : !0
}

function Gx(t, e, n) {
    var o = !1,
        r = la,
        a = e.contextType;
    return typeof a == "object" && a !== null ? a = mo(a) : (r = _n(e) ? Qa : Zt.current, o = e.contextTypes, a = (o = o != null) ? os(t, r) : la), e = new e(n, a), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = bd, t.stateNode = e, e._reactInternals = t, o && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = a), e
}

function i0(t, e, n, o) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, o), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, o), e.state !== t && bd.enqueueReplaceState(e, e.state, null)
}

function Ef(t, e, n, o) {
    var r = t.stateNode;
    r.props = n, r.state = t.memoizedState, r.refs = {}, ih(t);
    var a = e.contextType;
    typeof a == "object" && a !== null ? r.context = mo(a) : (a = _n(e) ? Qa : Zt.current, r.context = os(t, a)), r.state = t.memoizedState, a = e.getDerivedStateFromProps, typeof a == "function" && (Tf(t, e, a, n), r.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (e = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), e !== r.state && bd.enqueueReplaceState(r, r.state, null), Iu(t, n, r, o), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308)
}

function ss(t, e) {
    try {
        var n = "",
            o = e;
        do n += bS(o), o = o.return; while (o);
        var r = n
    } catch (a) {
        r = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: t,
        source: e,
        stack: r,
        digest: null
    }
}

function xp(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ? ? null,
        digest: e ? ? null
    }
}

function Af(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var qb = typeof WeakMap == "function" ? WeakMap : Map;

function Qx(t, e, n) {
    n = mr(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var o = e.value;
    return n.callback = function() {
        Vu || (Vu = !0, Bf = o), Af(t, e)
    }, n
}

function Xx(t, e, n) {
    n = mr(-1, n), n.tag = 3;
    var o = t.type.getDerivedStateFromError;
    if (typeof o == "function") {
        var r = e.value;
        n.payload = function() {
            return o(r)
        }, n.callback = function() {
            Af(t, e)
        }
    }
    var a = t.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
        Af(t, e), typeof o != "function" && (ea === null ? ea = new Set([this]) : ea.add(this));
        var i = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function s0(t, e, n) {
    var o = t.pingCache;
    if (o === null) {
        o = t.pingCache = new qb;
        var r = new Set;
        o.set(e, r)
    } else r = o.get(e), r === void 0 && (r = new Set, o.set(e, r));
    r.has(n) || (r.add(n), t = uC.bind(null, t, e, n), e.then(t, t))
}

function l0(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
        t = t.return
    } while (t !== null);
    return null
}

function c0(t, e, n, o, r) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = r, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = mr(-1, 1), e.tag = 2, Jr(n, e, 1))), n.lanes |= 1), t)
}
var Kb = Tr.ReactCurrentOwner,
    yn = !1;

function sn(t, e, n, o) {
    e.child = t === null ? Cx(e, null, n, o) : as(e, t.child, n, o)
}

function u0(t, e, n, o, r) {
    n = n.render;
    var a = e.ref;
    return ji(e, r), o = dh(t, e, n, o, a, r), n = ph(), t !== null && !yn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~r, yr(t, e, r)) : (Le && n && Jm(e), e.flags |= 1, sn(t, e, o, r), e.child)
}

function d0(t, e, n, o, r) {
    if (t === null) {
        var a = n.type;
        return typeof a == "function" && !Sh(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = a, qx(t, e, a, o, r)) : (t = lu(n.type, null, o, e, e.mode, r), t.ref = e.ref, t.return = e, e.child = t)
    }
    if (a = t.child, !(t.lanes & r)) {
        var i = a.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Dl, n(i, o) && t.ref === e.ref) return yr(t, e, r)
    }
    return e.flags |= 1, t = na(a, o), t.ref = e.ref, t.return = e, e.child = t
}

function qx(t, e, n, o, r) {
    if (t !== null) {
        var a = t.memoizedProps;
        if (Dl(a, o) && t.ref === e.ref)
            if (yn = !1, e.pendingProps = o = a, (t.lanes & r) !== 0) t.flags & 131072 && (yn = !0);
            else return e.lanes = t.lanes, yr(t, e, r)
    }
    return Nf(t, e, n, o, r)
}

function Kx(t, e, n) {
    var o = e.pendingProps,
        r = o.children,
        a = t !== null ? t.memoizedState : null;
    if (o.mode === "hidden")
        if (!(e.mode & 1)) e.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, De(Ei, jn), jn |= n;
        else {
            if (!(n & 1073741824)) return t = a !== null ? a.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
                baseLanes: t,
                cachePool: null,
                transitions: null
            }, e.updateQueue = null, De(Ei, jn), jn |= t, null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, o = a !== null ? a.baseLanes : n, De(Ei, jn), jn |= o
        }
    else a !== null ? (o = a.baseLanes | n, e.memoizedState = null) : o = n, De(Ei, jn), jn |= o;
    return sn(t, e, r, n), e.child
}

function Zx(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152)
}

function Nf(t, e, n, o, r) {
    var a = _n(n) ? Qa : Zt.current;
    return a = os(e, a), ji(e, r), n = dh(t, e, n, o, a, r), o = ph(), t !== null && !yn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~r, yr(t, e, r)) : (Le && o && Jm(e), e.flags |= 1, sn(t, e, n, r), e.child)
}

function p0(t, e, n, o, r) {
    if (_n(n)) {
        var a = !0;
        Mu(e)
    } else a = !1;
    if (ji(e, r), e.stateNode === null) au(t, e), Gx(e, n, o), Ef(e, n, o, r), o = !0;
    else if (t === null) {
        var i = e.stateNode,
            s = e.memoizedProps;
        i.props = s;
        var l = i.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = mo(c) : (c = _n(n) ? Qa : Zt.current, c = os(e, c));
        var u = n.getDerivedStateFromProps,
            p = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== o || l !== c) && i0(e, i, o, c), Or = !1;
        var d = e.memoizedState;
        i.state = d, Iu(e, o, i, r), l = e.memoizedState, s !== o || d !== l || wn.current || Or ? (typeof u == "function" && (Tf(e, n, u, o), l = e.memoizedState), (s = Or || a0(e, n, s, o, d, l, c)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = o, e.memoizedState = l), i.props = o, i.state = l, i.context = c, o = s) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), o = !1)
    } else {
        i = e.stateNode, Ex(t, e), s = e.memoizedProps, c = e.type === e.elementType ? s : So(e.type, s), i.props = c, p = e.pendingProps, d = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = mo(l) : (l = _n(n) ? Qa : Zt.current, l = os(e, l));
        var f = n.getDerivedStateFromProps;
        (u = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== p || d !== l) && i0(e, i, o, l), Or = !1, d = e.memoizedState, i.state = d, Iu(e, o, i, r);
        var g = e.memoizedState;
        s !== p || d !== g || wn.current || Or ? (typeof f == "function" && (Tf(e, n, f, o), g = e.memoizedState), (c = Or || a0(e, n, c, o, d, g, l) || !1) ? (u || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(o, g, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(o, g, l)), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), e.memoizedProps = o, e.memoizedState = g), i.props = o, i.state = g, i.context = l, o = c) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), o = !1)
    }
    return Pf(t, e, n, o, a, r)
}

function Pf(t, e, n, o, r, a) {
    Zx(t, e);
    var i = (e.flags & 128) !== 0;
    if (!o && !i) return r && K2(e, n, !1), yr(t, e, a);
    o = e.stateNode, Kb.current = e;
    var s = i && typeof n.getDerivedStateFromError != "function" ? null : o.render();
    return e.flags |= 1, t !== null && i ? (e.child = as(e, t.child, null, a), e.child = as(e, null, s, a)) : sn(t, e, s, a), e.memoizedState = o.state, r && K2(e, n, !0), e.child
}

function Jx(t) {
    var e = t.stateNode;
    e.pendingContext ? q2(t, e.pendingContext, e.pendingContext !== e.context) : e.context && q2(t, e.context, !1), sh(t, e.containerInfo)
}

function f0(t, e, n, o, r) {
    return rs(), th(r), e.flags |= 256, sn(t, e, n, o), e.child
}
var kf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Df(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}

function ey(t, e, n) {
    var o = e.pendingProps,
        r = Ue.current,
        a = !1,
        i = (e.flags & 128) !== 0,
        s;
    if ((s = i) || (s = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0), s ? (a = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (r |= 1), De(Ue, r & 1), t === null) return bf(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (i = o.children, t = o.fallback, a ? (o = e.mode, a = e.child, i = {
        mode: "hidden",
        children: i
    }, !(o & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = i) : a = Ed(i, o, 0, null), t = za(t, o, n, null), a.return = e, t.return = e, a.sibling = t, e.child = a, e.child.memoizedState = Df(n), e.memoizedState = kf, t) : hh(e, i));
    if (r = t.memoizedState, r !== null && (s = r.dehydrated, s !== null)) return Zb(t, e, i, o, s, r, n);
    if (a) {
        a = o.fallback, i = e.mode, r = t.child, s = r.sibling;
        var l = {
            mode: "hidden",
            children: o.children
        };
        return !(i & 1) && e.child !== r ? (o = e.child, o.childLanes = 0, o.pendingProps = l, e.deletions = null) : (o = na(r, l), o.subtreeFlags = r.subtreeFlags & 14680064), s !== null ? a = na(s, a) : (a = za(a, i, n, null), a.flags |= 2), a.return = e, o.return = e, o.sibling = a, e.child = o, o = a, a = e.child, i = t.child.memoizedState, i = i === null ? Df(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, a.memoizedState = i, a.childLanes = t.childLanes & ~n, e.memoizedState = kf, o
    }
    return a = t.child, t = a.sibling, o = na(a, {
        mode: "visible",
        children: o.children
    }), !(e.mode & 1) && (o.lanes = n), o.return = e, o.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = o, e.memoizedState = null, o
}

function hh(t, e) {
    return e = Ed({
        mode: "visible",
        children: e
    }, t.mode, 0, null), e.return = t, t.child = e
}

function Ac(t, e, n, o) {
    return o !== null && th(o), as(e, t.child, null, n), t = hh(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
}

function Zb(t, e, n, o, r, a, i) {
    if (n) return e.flags & 256 ? (e.flags &= -257, o = xp(Error(B(422))), Ac(t, e, i, o)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (a = o.fallback, r = e.mode, o = Ed({
        mode: "visible",
        children: o.children
    }, r, 0, null), a = za(a, r, i, null), a.flags |= 2, o.return = e, a.return = e, o.sibling = a, e.child = o, e.mode & 1 && as(e, t.child, null, i), e.child.memoizedState = Df(i), e.memoizedState = kf, a);
    if (!(e.mode & 1)) return Ac(t, e, i, null);
    if (r.data === "$!") {
        if (o = r.nextSibling && r.nextSibling.dataset, o) var s = o.dgst;
        return o = s, a = Error(B(419)), o = xp(a, o, void 0), Ac(t, e, i, o)
    }
    if (s = (i & t.childLanes) !== 0, yn || s) {
        if (o = At, o !== null) {
            switch (i & -i) {
                case 4:
                    r = 2;
                    break;
                case 16:
                    r = 8;
                    break;
                case 64:
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    r = 32;
                    break;
                case 536870912:
                    r = 268435456;
                    break;
                default:
                    r = 0
            }
            r = r & (o.suspendedLanes | i) ? 0 : r, r !== 0 && r !== a.retryLane && (a.retryLane = r, xr(t, r), No(o, t, r, -1))
        }
        return _h(), o = xp(Error(B(421))), Ac(t, e, i, o)
    }
    return r.data === "$?" ? (e.flags |= 128, e.child = t.child, e = dC.bind(null, t), r._reactRetry = e, null) : (t = a.treeContext, Hn = Zr(r.nextSibling), Vn = e, Le = !0, Eo = null, t !== null && (oo[ro++] = dr, oo[ro++] = pr, oo[ro++] = Xa, dr = t.id, pr = t.overflow, Xa = e), e = hh(e, o.children), e.flags |= 4096, e)
}

function m0(t, e, n) {
    t.lanes |= e;
    var o = t.alternate;
    o !== null && (o.lanes |= e), Cf(t.return, e, n)
}

function yp(t, e, n, o, r) {
    var a = t.memoizedState;
    a === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: n,
        tailMode: r
    } : (a.isBackwards = e, a.rendering = null, a.renderingStartTime = 0, a.last = o, a.tail = n, a.tailMode = r)
}

function ty(t, e, n) {
    var o = e.pendingProps,
        r = o.revealOrder,
        a = o.tail;
    if (sn(t, e, o.children, n), o = Ue.current, o & 2) o = o & 1 | 2, e.flags |= 128;
    else {
        if (t !== null && t.flags & 128) e: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && m0(t, n, e);
            else if (t.tag === 19) m0(t, n, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break e;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        o &= 1
    }
    if (De(Ue, o), !(e.mode & 1)) e.memoizedState = null;
    else switch (r) {
        case "forwards":
            for (n = e.child, r = null; n !== null;) t = n.alternate, t !== null && zu(t) === null && (r = n), n = n.sibling;
            n = r, n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null), yp(e, !1, r, n, a);
            break;
        case "backwards":
            for (n = null, r = e.child, e.child = null; r !== null;) {
                if (t = r.alternate, t !== null && zu(t) === null) {
                    e.child = r;
                    break
                }
                t = r.sibling, r.sibling = n, n = r, r = t
            }
            yp(e, !0, n, null, a);
            break;
        case "together":
            yp(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
    }
    return e.child
}

function au(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2)
}

function yr(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Ka |= e.lanes, !(n & e.childLanes)) return null;
    if (t !== null && e.child !== t.child) throw Error(B(153));
    if (e.child !== null) {
        for (t = e.child, n = na(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = na(t, t.pendingProps), n.return = e;
        n.sibling = null
    }
    return e.child
}

function Jb(t, e, n) {
    switch (e.tag) {
        case 3:
            Jx(e), rs();
            break;
        case 5:
            Ax(e);
            break;
        case 1:
            _n(e.type) && Mu(e);
            break;
        case 4:
            sh(e, e.stateNode.containerInfo);
            break;
        case 10:
            var o = e.type._context,
                r = e.memoizedProps.value;
            De(Bu, o._currentValue), o._currentValue = r;
            break;
        case 13:
            if (o = e.memoizedState, o !== null) return o.dehydrated !== null ? (De(Ue, Ue.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? ey(t, e, n) : (De(Ue, Ue.current & 1), t = yr(t, e, n), t !== null ? t.sibling : null);
            De(Ue, Ue.current & 1);
            break;
        case 19:
            if (o = (n & e.childLanes) !== 0, t.flags & 128) {
                if (o) return ty(t, e, n);
                e.flags |= 128
            }
            if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), De(Ue, Ue.current), o) break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0, Kx(t, e, n)
    }
    return yr(t, e, n)
}
var ny, Rf, oy, ry;
ny = function(t, e) {
    for (var n = e.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Rf = function() {};
oy = function(t, e, n, o) {
    var r = t.memoizedProps;
    if (r !== o) {
        t = e.stateNode, Ra(Xo.current);
        var a = null;
        switch (n) {
            case "input":
                r = Jp(t, r), o = Jp(t, o), a = [];
                break;
            case "select":
                r = Ge({}, r, {
                    value: void 0
                }), o = Ge({}, o, {
                    value: void 0
                }), a = [];
                break;
            case "textarea":
                r = nf(t, r), o = nf(t, o), a = [];
                break;
            default:
                typeof r.onClick != "function" && typeof o.onClick == "function" && (t.onclick = Ru)
        }
        rf(n, o);
        var i;
        n = null;
        for (c in r)
            if (!o.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
                if (c === "style") {
                    var s = r[c];
                    for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Cl.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
        for (c in o) {
            var l = o[c];
            if (s = r != null ? r[c] : void 0, o.hasOwnProperty(c) && l !== s && (l != null || s != null))
                if (c === "style")
                    if (s) {
                        for (i in s) !s.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in l) l.hasOwnProperty(i) && s[i] !== l[i] && (n || (n = {}), n[i] = l[i])
                    } else n || (a || (a = []), a.push(c, n)), n = l;
            else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Cl.hasOwnProperty(c) ? (l != null && c === "onScroll" && Me("scroll", t), a || s === l || (a = [])) : (a = a || []).push(c, l))
        }
        n && (a = a || []).push("style", n);
        var c = a;
        (e.updateQueue = c) && (e.flags |= 4)
    }
};
ry = function(t, e, n, o) {
    n !== o && (e.flags |= 4)
};

function Fs(t, e) {
    if (!Le) switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var o = null; n !== null;) n.alternate !== null && (o = n), n = n.sibling;
            o === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : o.sibling = null
    }
}

function Vt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        o = 0;
    if (e)
        for (var r = t.child; r !== null;) n |= r.lanes | r.childLanes, o |= r.subtreeFlags & 14680064, o |= r.flags & 14680064, r.return = t, r = r.sibling;
    else
        for (r = t.child; r !== null;) n |= r.lanes | r.childLanes, o |= r.subtreeFlags, o |= r.flags, r.return = t, r = r.sibling;
    return t.subtreeFlags |= o, t.childLanes = n, e
}

function eC(t, e, n) {
    var o = e.pendingProps;
    switch (eh(e), e.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Vt(e), null;
        case 1:
            return _n(e.type) && Ou(), Vt(e), null;
        case 3:
            return o = e.stateNode, is(), je(wn), je(Zt), ch(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (t === null || t.child === null) && (Tc(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Eo !== null && (zf(Eo), Eo = null))), Rf(t, e), Vt(e), null;
        case 5:
            lh(e);
            var r = Ra(Fl.current);
            if (n = e.type, t !== null && e.stateNode != null) oy(t, e, n, o, r), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
            else {
                if (!o) {
                    if (e.stateNode === null) throw Error(B(166));
                    return Vt(e), null
                }
                if (t = Ra(Xo.current), Tc(e)) {
                    o = e.stateNode, n = e.type;
                    var a = e.memoizedProps;
                    switch (o[Vo] = e, o[Ml] = a, t = (e.mode & 1) !== 0, n) {
                        case "dialog":
                            Me("cancel", o), Me("close", o);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Me("load", o);
                            break;
                        case "video":
                        case "audio":
                            for (r = 0; r < Qs.length; r++) Me(Qs[r], o);
                            break;
                        case "source":
                            Me("error", o);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Me("error", o), Me("load", o);
                            break;
                        case "details":
                            Me("toggle", o);
                            break;
                        case "input":
                            b2(o, a), Me("invalid", o);
                            break;
                        case "select":
                            o._wrapperState = {
                                wasMultiple: !!a.multiple
                            }, Me("invalid", o);
                            break;
                        case "textarea":
                            T2(o, a), Me("invalid", o)
                    }
                    rf(n, a), r = null;
                    for (var i in a)
                        if (a.hasOwnProperty(i)) {
                            var s = a[i];
                            i === "children" ? typeof s == "string" ? o.textContent !== s && (a.suppressHydrationWarning !== !0 && Cc(o.textContent, s, t), r = ["children", s]) : typeof s == "number" && o.textContent !== "" + s && (a.suppressHydrationWarning !== !0 && Cc(o.textContent, s, t), r = ["children", "" + s]) : Cl.hasOwnProperty(i) && s != null && i === "onScroll" && Me("scroll", o)
                        }
                    switch (n) {
                        case "input":
                            vc(o), C2(o, a, !0);
                            break;
                        case "textarea":
                            vc(o), E2(o);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof a.onClick == "function" && (o.onclick = Ru)
                    }
                    o = r, e.updateQueue = o, o !== null && (e.flags |= 4)
                } else {
                    i = r.nodeType === 9 ? r : r.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Rg(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = i.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof o.is == "string" ? t = i.createElement(n, {
                        is: o.is
                    }) : (t = i.createElement(n), n === "select" && (i = t, o.multiple ? i.multiple = !0 : o.size && (i.size = o.size))) : t = i.createElementNS(t, n), t[Vo] = e, t[Ml] = o, ny(t, e, !1, !1), e.stateNode = t;
                    e: {
                        switch (i = af(n, o), n) {
                            case "dialog":
                                Me("cancel", t), Me("close", t), r = o;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Me("load", t), r = o;
                                break;
                            case "video":
                            case "audio":
                                for (r = 0; r < Qs.length; r++) Me(Qs[r], t);
                                r = o;
                                break;
                            case "source":
                                Me("error", t), r = o;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Me("error", t), Me("load", t), r = o;
                                break;
                            case "details":
                                Me("toggle", t), r = o;
                                break;
                            case "input":
                                b2(t, o), r = Jp(t, o), Me("invalid", t);
                                break;
                            case "option":
                                r = o;
                                break;
                            case "select":
                                t._wrapperState = {
                                    wasMultiple: !!o.multiple
                                }, r = Ge({}, o, {
                                    value: void 0
                                }), Me("invalid", t);
                                break;
                            case "textarea":
                                T2(t, o), r = nf(t, o), Me("invalid", t);
                                break;
                            default:
                                r = o
                        }
                        rf(n, r),
                        s = r;
                        for (a in s)
                            if (s.hasOwnProperty(a)) {
                                var l = s[a];
                                a === "style" ? jg(t, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Og(t, l)) : a === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Tl(t, l) : typeof l == "number" && Tl(t, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Cl.hasOwnProperty(a) ? l != null && a === "onScroll" && Me("scroll", t) : l != null && Im(t, a, l, i))
                            }
                        switch (n) {
                            case "input":
                                vc(t), C2(t, o, !1);
                                break;
                            case "textarea":
                                vc(t), E2(t);
                                break;
                            case "option":
                                o.value != null && t.setAttribute("value", "" + sa(o.value));
                                break;
                            case "select":
                                t.multiple = !!o.multiple, a = o.value, a != null ? Di(t, !!o.multiple, a, !1) : o.defaultValue != null && Di(t, !!o.multiple, o.defaultValue, !0);
                                break;
                            default:
                                typeof r.onClick == "function" && (t.onclick = Ru)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                o = !!o.autoFocus;
                                break e;
                            case "img":
                                o = !0;
                                break e;
                            default:
                                o = !1
                        }
                    }
                    o && (e.flags |= 4)
                }
                e.ref !== null && (e.flags |= 512, e.flags |= 2097152)
            }
            return Vt(e), null;
        case 6:
            if (t && e.stateNode != null) ry(t, e, t.memoizedProps, o);
            else {
                if (typeof o != "string" && e.stateNode === null) throw Error(B(166));
                if (n = Ra(Fl.current), Ra(Xo.current), Tc(e)) {
                    if (o = e.stateNode, n = e.memoizedProps, o[Vo] = e, (a = o.nodeValue !== n) && (t = Vn, t !== null)) switch (t.tag) {
                        case 3:
                            Cc(o.nodeValue, n, (t.mode & 1) !== 0);
                            break;
                        case 5:
                            t.memoizedProps.suppressHydrationWarning !== !0 && Cc(o.nodeValue, n, (t.mode & 1) !== 0)
                    }
                    a && (e.flags |= 4)
                } else o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o), o[Vo] = e, e.stateNode = o
            }
            return Vt(e), null;
        case 13:
            if (je(Ue), o = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (Le && Hn !== null && e.mode & 1 && !(e.flags & 128)) Sx(), rs(), e.flags |= 98560, a = !1;
                else if (a = Tc(e), o !== null && o.dehydrated !== null) {
                    if (t === null) {
                        if (!a) throw Error(B(318));
                        if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(B(317));
                        a[Vo] = e
                    } else rs(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
                    Vt(e), a = !1
                } else Eo !== null && (zf(Eo), Eo = null), a = !0;
                if (!a) return e.flags & 65536 ? e : null
            }
            return e.flags & 128 ? (e.lanes = n, e) : (o = o !== null, o !== (t !== null && t.memoizedState !== null) && o && (e.child.flags |= 8192, e.mode & 1 && (t === null || Ue.current & 1 ? St === 0 && (St = 3) : _h())), e.updateQueue !== null && (e.flags |= 4), Vt(e), null);
        case 4:
            return is(), Rf(t, e), t === null && Rl(e.stateNode.containerInfo), Vt(e), null;
        case 10:
            return rh(e.type._context), Vt(e), null;
        case 17:
            return _n(e.type) && Ou(), Vt(e), null;
        case 19:
            if (je(Ue), a = e.memoizedState, a === null) return Vt(e), null;
            if (o = (e.flags & 128) !== 0, i = a.rendering, i === null)
                if (o) Fs(a, !1);
                else {
                    if (St !== 0 || t !== null && t.flags & 128)
                        for (t = e.child; t !== null;) {
                            if (i = zu(t), i !== null) {
                                for (e.flags |= 128, Fs(a, !1), o = i.updateQueue, o !== null && (e.updateQueue = o, e.flags |= 4), e.subtreeFlags = 0, o = n, n = e.child; n !== null;) a = n, t = o, a.flags &= 14680066, i = a.alternate, i === null ? (a.childLanes = 0, a.lanes = t, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = i.childLanes, a.lanes = i.lanes, a.child = i.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = i.memoizedProps, a.memoizedState = i.memoizedState, a.updateQueue = i.updateQueue, a.type = i.type, t = i.dependencies, a.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }), n = n.sibling;
                                return De(Ue, Ue.current & 1 | 2), e.child
                            }
                            t = t.sibling
                        }
                    a.tail !== null && ct() > ls && (e.flags |= 128, o = !0, Fs(a, !1), e.lanes = 4194304)
                }
            else {
                if (!o)
                    if (t = zu(i), t !== null) {
                        if (e.flags |= 128, o = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Fs(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !Le) return Vt(e), null
                    } else 2 * ct() - a.renderingStartTime > ls && n !== 1073741824 && (e.flags |= 128, o = !0, Fs(a, !1), e.lanes = 4194304);
                a.isBackwards ? (i.sibling = e.child, e.child = i) : (n = a.last, n !== null ? n.sibling = i : e.child = i, a.last = i)
            }
            return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ct(), e.sibling = null, n = Ue.current, De(Ue, o ? n & 1 | 2 : n & 1), e) : (Vt(e), null);
        case 22:
        case 23:
            return wh(), o = e.memoizedState !== null, t !== null && t.memoizedState !== null !== o && (e.flags |= 8192), o && e.mode & 1 ? jn & 1073741824 && (Vt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Vt(e), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(B(156, e.tag))
}

function tC(t, e) {
    switch (eh(e), e.tag) {
        case 1:
            return _n(e.type) && Ou(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
            return is(), je(wn), je(Zt), ch(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
        case 5:
            return lh(e), null;
        case 13:
            if (je(Ue), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                if (e.alternate === null) throw Error(B(340));
                rs()
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
            return je(Ue), null;
        case 4:
            return is(), null;
        case 10:
            return rh(e.type._context), null;
        case 22:
        case 23:
            return wh(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Nc = !1,
    Qt = !1,
    nC = typeof WeakSet == "function" ? WeakSet : Set,
    Y = null;

function Ti(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (o) {
            et(t, e, o)
        } else n.current = null
}

function Of(t, e, n) {
    try {
        n()
    } catch (o) {
        et(t, e, o)
    }
}
var h0 = !1;

function oC(t, e) {
    if (vf = Pu, t = cx(), Zm(t)) {
        if ("selectionStart" in t) var n = {
            start: t.selectionStart,
            end: t.selectionEnd
        };
        else e: {
            n = (n = t.ownerDocument) && n.defaultView || window;
            var o = n.getSelection && n.getSelection();
            if (o && o.rangeCount !== 0) {
                n = o.anchorNode;
                var r = o.anchorOffset,
                    a = o.focusNode;
                o = o.focusOffset;
                try {
                    n.nodeType, a.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    s = -1,
                    l = -1,
                    c = 0,
                    u = 0,
                    p = t,
                    d = null;
                t: for (;;) {
                    for (var f; p !== n || r !== 0 && p.nodeType !== 3 || (s = i + r), p !== a || o !== 0 && p.nodeType !== 3 || (l = i + o), p.nodeType === 3 && (i += p.nodeValue.length), (f = p.firstChild) !== null;) d = p, p = f;
                    for (;;) {
                        if (p === t) break t;
                        if (d === n && ++c === r && (s = i), d === a && ++u === o && (l = i), (f = p.nextSibling) !== null) break;
                        p = d, d = p.parentNode
                    }
                    p = f
                }
                n = s === -1 || l === -1 ? null : {
                    start: s,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (gf = {
            focusedElem: t,
            selectionRange: n
        }, Pu = !1, Y = e; Y !== null;)
        if (e = Y, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Y = t;
        else
            for (; Y !== null;) {
                e = Y;
                try {
                    var g = e.alternate;
                    if (e.flags & 1024) switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var m = g.memoizedProps,
                                    y = g.memoizedState,
                                    v = e.stateNode,
                                    h = v.getSnapshotBeforeUpdate(e.elementType === e.type ? m : So(e.type, m), y);
                                v.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var x = e.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(B(163))
                    }
                } catch (_) {
                    et(e, e.return, _)
                }
                if (t = e.sibling, t !== null) {
                    t.return = e.return, Y = t;
                    break
                }
                Y = e.return
            }
    return g = h0, h0 = !1, g
}

function ll(t, e, n) {
    var o = e.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
        var r = o = o.next;
        do {
            if ((r.tag & t) === t) {
                var a = r.destroy;
                r.destroy = void 0, a !== void 0 && Of(e, n, a)
            }
            r = r.next
        } while (r !== o)
    }
}

function Cd(t, e) {
    if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var o = n.create;
                n.destroy = o()
            }
            n = n.next
        } while (n !== e)
    }
}

function Mf(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}

function ay(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, ay(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[Vo], delete e[Ml], delete e[wf], delete e[Ib], delete e[zb])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
}

function iy(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}

function v0(t) {
    e: for (;;) {
        for (; t.sibling === null;) {
            if (t.return === null || iy(t.return)) return null;
            t = t.return
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            t.child.return = t, t = t.child
        }
        if (!(t.flags & 2)) return t.stateNode
    }
}

function jf(t, e, n) {
    var o = t.tag;
    if (o === 5 || o === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Ru));
    else if (o !== 4 && (t = t.child, t !== null))
        for (jf(t, e, n), t = t.sibling; t !== null;) jf(t, e, n), t = t.sibling
}

function Ff(t, e, n) {
    var o = t.tag;
    if (o === 5 || o === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (o !== 4 && (t = t.child, t !== null))
        for (Ff(t, e, n), t = t.sibling; t !== null;) Ff(t, e, n), t = t.sibling
}
var Ot = null,
    To = !1;

function Ar(t, e, n) {
    for (n = n.child; n !== null;) sy(t, e, n), n = n.sibling
}

function sy(t, e, n) {
    if (Qo && typeof Qo.onCommitFiberUnmount == "function") try {
        Qo.onCommitFiberUnmount(vd, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Qt || Ti(n, e);
        case 6:
            var o = Ot,
                r = To;
            Ot = null, Ar(t, e, n), Ot = o, To = r, Ot !== null && (To ? (t = Ot, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Ot.removeChild(n.stateNode));
            break;
        case 18:
            Ot !== null && (To ? (t = Ot, n = n.stateNode, t.nodeType === 8 ? pp(t.parentNode, n) : t.nodeType === 1 && pp(t, n), Pl(t)) : pp(Ot, n.stateNode));
            break;
        case 4:
            o = Ot, r = To, Ot = n.stateNode.containerInfo, To = !0, Ar(t, e, n), Ot = o, To = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Qt && (o = n.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
                r = o = o.next;
                do {
                    var a = r,
                        i = a.destroy;
                    a = a.tag, i !== void 0 && (a & 2 || a & 4) && Of(n, e, i), r = r.next
                } while (r !== o)
            }
            Ar(t, e, n);
            break;
        case 1:
            if (!Qt && (Ti(n, e), o = n.stateNode, typeof o.componentWillUnmount == "function")) try {
                o.props = n.memoizedProps, o.state = n.memoizedState, o.componentWillUnmount()
            } catch (s) {
                et(n, e, s)
            }
            Ar(t, e, n);
            break;
        case 21:
            Ar(t, e, n);
            break;
        case 22:
            n.mode & 1 ? (Qt = (o = Qt) || n.memoizedState !== null, Ar(t, e, n), Qt = o) : Ar(t, e, n);
            break;
        default:
            Ar(t, e, n)
    }
}

function g0(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new nC), e.forEach(function(o) {
            var r = pC.bind(null, t, o);
            n.has(o) || (n.add(o), o.then(r, r))
        })
    }
}

function wo(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var o = 0; o < n.length; o++) {
            var r = n[o];
            try {
                var a = t,
                    i = e,
                    s = i;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            Ot = s.stateNode, To = !1;
                            break e;
                        case 3:
                            Ot = s.stateNode.containerInfo, To = !0;
                            break e;
                        case 4:
                            Ot = s.stateNode.containerInfo, To = !0;
                            break e
                    }
                    s = s.return
                }
                if (Ot === null) throw Error(B(160));
                sy(a, i, r), Ot = null, To = !1;
                var l = r.alternate;
                l !== null && (l.return = null), r.return = null
            } catch (c) {
                et(r, e, c)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null;) ly(e, t), e = e.sibling
}

function ly(t, e) {
    var n = t.alternate,
        o = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (wo(e, t), Bo(t), o & 4) {
                try {
                    ll(3, t, t.return), Cd(3, t)
                } catch (m) {
                    et(t, t.return, m)
                }
                try {
                    ll(5, t, t.return)
                } catch (m) {
                    et(t, t.return, m)
                }
            }
            break;
        case 1:
            wo(e, t), Bo(t), o & 512 && n !== null && Ti(n, n.return);
            break;
        case 5:
            if (wo(e, t), Bo(t), o & 512 && n !== null && Ti(n, n.return), t.flags & 32) {
                var r = t.stateNode;
                try {
                    Tl(r, "")
                } catch (m) {
                    et(t, t.return, m)
                }
            }
            if (o & 4 && (r = t.stateNode, r != null)) {
                var a = t.memoizedProps,
                    i = n !== null ? n.memoizedProps : a,
                    s = t.type,
                    l = t.updateQueue;
                if (t.updateQueue = null, l !== null) try {
                    s === "input" && a.type === "radio" && a.name != null && kg(r, a), af(s, i);
                    var c = af(s, a);
                    for (i = 0; i < l.length; i += 2) {
                        var u = l[i],
                            p = l[i + 1];
                        u === "style" ? jg(r, p) : u === "dangerouslySetInnerHTML" ? Og(r, p) : u === "children" ? Tl(r, p) : Im(r, u, p, c)
                    }
                    switch (s) {
                        case "input":
                            ef(r, a);
                            break;
                        case "textarea":
                            Dg(r, a);
                            break;
                        case "select":
                            var d = r._wrapperState.wasMultiple;
                            r._wrapperState.wasMultiple = !!a.multiple;
                            var f = a.value;
                            f != null ? Di(r, !!a.multiple, f, !1) : d !== !!a.multiple && (a.defaultValue != null ? Di(r, !!a.multiple, a.defaultValue, !0) : Di(r, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    r[Ml] = a
                } catch (m) {
                    et(t, t.return, m)
                }
            }
            break;
        case 6:
            if (wo(e, t), Bo(t), o & 4) {
                if (t.stateNode === null) throw Error(B(162));
                r = t.stateNode, a = t.memoizedProps;
                try {
                    r.nodeValue = a
                } catch (m) {
                    et(t, t.return, m)
                }
            }
            break;
        case 3:
            if (wo(e, t), Bo(t), o & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Pl(e.containerInfo)
            } catch (m) {
                et(t, t.return, m)
            }
            break;
        case 4:
            wo(e, t), Bo(t);
            break;
        case 13:
            wo(e, t), Bo(t), r = t.child, r.flags & 8192 && (a = r.memoizedState !== null, r.stateNode.isHidden = a, !a || r.alternate !== null && r.alternate.memoizedState !== null || (xh = ct())), o & 4 && g0(t);
            break;
        case 22:
            if (u = n !== null && n.memoizedState !== null, t.mode & 1 ? (Qt = (c = Qt) || u, wo(e, t), Qt = c) : wo(e, t), Bo(t), o & 8192) {
                if (c = t.memoizedState !== null, (t.stateNode.isHidden = c) && !u && t.mode & 1)
                    for (Y = t, u = t.child; u !== null;) {
                        for (p = Y = u; Y !== null;) {
                            switch (d = Y, f = d.child, d.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ll(4, d, d.return);
                                    break;
                                case 1:
                                    Ti(d, d.return);
                                    var g = d.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        o = d, n = d.return;
                                        try {
                                            e = o, g.props = e.memoizedProps, g.state = e.memoizedState, g.componentWillUnmount()
                                        } catch (m) {
                                            et(o, n, m)
                                        }
                                    }
                                    break;
                                case 5:
                                    Ti(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        y0(p);
                                        continue
                                    }
                            }
                            f !== null ? (f.return = d, Y = f) : y0(p)
                        }
                        u = u.sibling
                    }
                e: for (u = null, p = t;;) {
                    if (p.tag === 5) {
                        if (u === null) {
                            u = p;
                            try {
                                r = p.stateNode, c ? (a = r.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = p.stateNode, l = p.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = Mg("display", i))
                            } catch (m) {
                                et(t, t.return, m)
                            }
                        }
                    } else if (p.tag === 6) {
                        if (u === null) try {
                            p.stateNode.nodeValue = c ? "" : p.memoizedProps
                        } catch (m) {
                            et(t, t.return, m)
                        }
                    } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === t) && p.child !== null) {
                        p.child.return = p, p = p.child;
                        continue
                    }
                    if (p === t) break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === t) break e;
                        u === p && (u = null), p = p.return
                    }
                    u === p && (u = null), p.sibling.return = p.return, p = p.sibling
                }
            }
            break;
        case 19:
            wo(e, t), Bo(t), o & 4 && g0(t);
            break;
        case 21:
            break;
        default:
            wo(e, t), Bo(t)
    }
}

function Bo(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null;) {
                    if (iy(n)) {
                        var o = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(B(160))
            }
            switch (o.tag) {
                case 5:
                    var r = o.stateNode;
                    o.flags & 32 && (Tl(r, ""), o.flags &= -33);
                    var a = v0(t);
                    Ff(t, a, r);
                    break;
                case 3:
                case 4:
                    var i = o.stateNode.containerInfo,
                        s = v0(t);
                    jf(t, s, i);
                    break;
                default:
                    throw Error(B(161))
            }
        }
        catch (l) {
            et(t, t.return, l)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}

function rC(t, e, n) {
    Y = t, cy(t)
}

function cy(t, e, n) {
    for (var o = (t.mode & 1) !== 0; Y !== null;) {
        var r = Y,
            a = r.child;
        if (r.tag === 22 && o) {
            var i = r.memoizedState !== null || Nc;
            if (!i) {
                var s = r.alternate,
                    l = s !== null && s.memoizedState !== null || Qt;
                s = Nc;
                var c = Qt;
                if (Nc = i, (Qt = l) && !c)
                    for (Y = r; Y !== null;) i = Y, l = i.child, i.tag === 22 && i.memoizedState !== null ? w0(r) : l !== null ? (l.return = i, Y = l) : w0(r);
                for (; a !== null;) Y = a, cy(a), a = a.sibling;
                Y = r, Nc = s, Qt = c
            }
            x0(t)
        } else r.subtreeFlags & 8772 && a !== null ? (a.return = r, Y = a) : x0(t)
    }
}

function x0(t) {
    for (; Y !== null;) {
        var e = Y;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772) switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Qt || Cd(5, e);
                        break;
                    case 1:
                        var o = e.stateNode;
                        if (e.flags & 4 && !Qt)
                            if (n === null) o.componentDidMount();
                            else {
                                var r = e.elementType === e.type ? n.memoizedProps : So(e.type, n.memoizedProps);
                                o.componentDidUpdate(r, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = e.updateQueue;
                        a !== null && n0(e, a, o);
                        break;
                    case 3:
                        var i = e.updateQueue;
                        if (i !== null) {
                            if (n = null, e.child !== null) switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                            }
                            n0(e, i, n)
                        }
                        break;
                    case 5:
                        var s = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = s;
                            var l = e.memoizedProps;
                            switch (e.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var c = e.alternate;
                            if (c !== null) {
                                var u = c.memoizedState;
                                if (u !== null) {
                                    var p = u.dehydrated;
                                    p !== null && Pl(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(B(163))
                }
                Qt || e.flags & 512 && Mf(e)
            } catch (d) {
                et(e, e.return, d)
            }
        }
        if (e === t) {
            Y = null;
            break
        }
        if (n = e.sibling, n !== null) {
            n.return = e.return, Y = n;
            break
        }
        Y = e.return
    }
}

function y0(t) {
    for (; Y !== null;) {
        var e = Y;
        if (e === t) {
            Y = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return, Y = n;
            break
        }
        Y = e.return
    }
}

function w0(t) {
    for (; Y !== null;) {
        var e = Y;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        Cd(4, e)
                    } catch (l) {
                        et(e, n, l)
                    }
                    break;
                case 1:
                    var o = e.stateNode;
                    if (typeof o.componentDidMount == "function") {
                        var r = e.return;
                        try {
                            o.componentDidMount()
                        } catch (l) {
                            et(e, r, l)
                        }
                    }
                    var a = e.return;
                    try {
                        Mf(e)
                    } catch (l) {
                        et(e, a, l)
                    }
                    break;
                case 5:
                    var i = e.return;
                    try {
                        Mf(e)
                    } catch (l) {
                        et(e, i, l)
                    }
            }
        } catch (l) {
            et(e, e.return, l)
        }
        if (e === t) {
            Y = null;
            break
        }
        var s = e.sibling;
        if (s !== null) {
            s.return = e.return, Y = s;
            break
        }
        Y = e.return
    }
}
var aC = Math.ceil,
    Uu = Tr.ReactCurrentDispatcher,
    vh = Tr.ReactCurrentOwner,
    po = Tr.ReactCurrentBatchConfig,
    ge = 0,
    At = null,
    ht = null,
    jt = 0,
    jn = 0,
    Ei = ga(0),
    St = 0,
    zl = null,
    Ka = 0,
    Td = 0,
    gh = 0,
    cl = null,
    xn = null,
    xh = 0,
    ls = 1 / 0,
    ir = null,
    Vu = !1,
    Bf = null,
    ea = null,
    Pc = !1,
    Hr = null,
    Wu = 0,
    ul = 0,
    Lf = null,
    iu = -1,
    su = 0;

function fn() {
    return ge & 6 ? ct() : iu !== -1 ? iu : iu = ct()
}

function ta(t) {
    return t.mode & 1 ? ge & 2 && jt !== 0 ? jt & -jt : Hb.transition !== null ? (su === 0 && (su = Gg()), su) : (t = be, t !== 0 || (t = window.event, t = t === void 0 ? 16 : ex(t.type)), t) : 1
}

function No(t, e, n, o) {
    if (50 < ul) throw ul = 0, Lf = null, Error(B(185));
    ac(t, n, o), (!(ge & 2) || t !== At) && (t === At && (!(ge & 2) && (Td |= n), St === 4 && jr(t, jt)), Sn(t, o), n === 1 && ge === 0 && !(e.mode & 1) && (ls = ct() + 500, _d && xa()))
}

function Sn(t, e) {
    var n = t.callbackNode;
    HS(t, e);
    var o = Nu(t, t === At ? jt : 0);
    if (o === 0) n !== null && P2(n), t.callbackNode = null, t.callbackPriority = 0;
    else if (e = o & -o, t.callbackPriority !== e) {
        if (n != null && P2(n), e === 1) t.tag === 0 ? $b(_0.bind(null, t)) : yx(_0.bind(null, t)), Bb(function() {
            !(ge & 6) && xa()
        }), n = null;
        else {
            switch (Qg(o)) {
                case 1:
                    n = Vm;
                    break;
                case 4:
                    n = Wg;
                    break;
                case 16:
                    n = Au;
                    break;
                case 536870912:
                    n = Yg;
                    break;
                default:
                    n = Au
            }
            n = gy(n, uy.bind(null, t))
        }
        t.callbackPriority = e, t.callbackNode = n
    }
}

function uy(t, e) {
    if (iu = -1, su = 0, ge & 6) throw Error(B(327));
    var n = t.callbackNode;
    if (Fi() && t.callbackNode !== n) return null;
    var o = Nu(t, t === At ? jt : 0);
    if (o === 0) return null;
    if (o & 30 || o & t.expiredLanes || e) e = Yu(t, o);
    else {
        e = o;
        var r = ge;
        ge |= 2;
        var a = py();
        (At !== t || jt !== e) && (ir = null, ls = ct() + 500, Ia(t, e));
        do try {
            lC();
            break
        } catch (s) {
            dy(t, s)
        }
        while (!0);
        oh(), Uu.current = a, ge = r, ht !== null ? e = 0 : (At = null, jt = 0, e = St)
    }
    if (e !== 0) {
        if (e === 2 && (r = df(t), r !== 0 && (o = r, e = If(t, r))), e === 1) throw n = zl, Ia(t, 0), jr(t, o), Sn(t, ct()), n;
        if (e === 6) jr(t, o);
        else {
            if (r = t.current.alternate, !(o & 30) && !iC(r) && (e = Yu(t, o), e === 2 && (a = df(t), a !== 0 && (o = a, e = If(t, a))), e === 1)) throw n = zl, Ia(t, 0), jr(t, o), Sn(t, ct()), n;
            switch (t.finishedWork = r, t.finishedLanes = o, e) {
                case 0:
                case 1:
                    throw Error(B(345));
                case 2:
                    Ea(t, xn, ir);
                    break;
                case 3:
                    if (jr(t, o), (o & 130023424) === o && (e = xh + 500 - ct(), 10 < e)) {
                        if (Nu(t, 0) !== 0) break;
                        if (r = t.suspendedLanes, (r & o) !== o) {
                            fn(), t.pingedLanes |= t.suspendedLanes & r;
                            break
                        }
                        t.timeoutHandle = yf(Ea.bind(null, t, xn, ir), e);
                        break
                    }
                    Ea(t, xn, ir);
                    break;
                case 4:
                    if (jr(t, o), (o & 4194240) === o) break;
                    for (e = t.eventTimes, r = -1; 0 < o;) {
                        var i = 31 - Ao(o);
                        a = 1 << i, i = e[i], i > r && (r = i), o &= ~a
                    }
                    if (o = r, o = ct() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * aC(o / 1960)) - o, 10 < o) {
                        t.timeoutHandle = yf(Ea.bind(null, t, xn, ir), o);
                        break
                    }
                    Ea(t, xn, ir);
                    break;
                case 5:
                    Ea(t, xn, ir);
                    break;
                default:
                    throw Error(B(329))
            }
        }
    }
    return Sn(t, ct()), t.callbackNode === n ? uy.bind(null, t) : null
}

function If(t, e) {
    var n = cl;
    return t.current.memoizedState.isDehydrated && (Ia(t, e).flags |= 256), t = Yu(t, e), t !== 2 && (e = xn, xn = n, e !== null && zf(e)), t
}

function zf(t) {
    xn === null ? xn = t : xn.push.apply(xn, t)
}

function iC(t) {
    for (var e = t;;) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var o = 0; o < n.length; o++) {
                    var r = n[o],
                        a = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!Po(a(), r)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
        else {
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return !0;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
    }
    return !0
}

function jr(t, e) {
    for (e &= ~gh, e &= ~Td, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) {
        var n = 31 - Ao(e),
            o = 1 << n;
        t[n] = -1, e &= ~o
    }
}

function _0(t) {
    if (ge & 6) throw Error(B(327));
    Fi();
    var e = Nu(t, 0);
    if (!(e & 1)) return Sn(t, ct()), null;
    var n = Yu(t, e);
    if (t.tag !== 0 && n === 2) {
        var o = df(t);
        o !== 0 && (e = o, n = If(t, o))
    }
    if (n === 1) throw n = zl, Ia(t, 0), jr(t, e), Sn(t, ct()), n;
    if (n === 6) throw Error(B(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = e, Ea(t, xn, ir), Sn(t, ct()), null
}

function yh(t, e) {
    var n = ge;
    ge |= 1;
    try {
        return t(e)
    } finally {
        ge = n, ge === 0 && (ls = ct() + 500, _d && xa())
    }
}

function Za(t) {
    Hr !== null && Hr.tag === 0 && !(ge & 6) && Fi();
    var e = ge;
    ge |= 1;
    var n = po.transition,
        o = be;
    try {
        if (po.transition = null, be = 1, t) return t()
    } finally {
        be = o, po.transition = n, ge = e, !(ge & 6) && xa()
    }
}

function wh() {
    jn = Ei.current, je(Ei)
}

function Ia(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1, Fb(n)), ht !== null)
        for (n = ht.return; n !== null;) {
            var o = n;
            switch (eh(o), o.tag) {
                case 1:
                    o = o.type.childContextTypes, o != null && Ou();
                    break;
                case 3:
                    is(), je(wn), je(Zt), ch();
                    break;
                case 5:
                    lh(o);
                    break;
                case 4:
                    is();
                    break;
                case 13:
                    je(Ue);
                    break;
                case 19:
                    je(Ue);
                    break;
                case 10:
                    rh(o.type._context);
                    break;
                case 22:
                case 23:
                    wh()
            }
            n = n.return
        }
    if (At = t, ht = t = na(t.current, null), jt = jn = e, St = 0, zl = null, gh = Td = Ka = 0, xn = cl = null, Da !== null) {
        for (e = 0; e < Da.length; e++)
            if (n = Da[e], o = n.interleaved, o !== null) {
                n.interleaved = null;
                var r = o.next,
                    a = n.pending;
                if (a !== null) {
                    var i = a.next;
                    a.next = r, o.next = i
                }
                n.pending = o
            }
        Da = null
    }
    return t
}

function dy(t, e) {
    do {
        var n = ht;
        try {
            if (oh(), ou.current = Hu, $u) {
                for (var o = Ye.memoizedState; o !== null;) {
                    var r = o.queue;
                    r !== null && (r.pending = null), o = o.next
                }
                $u = !1
            }
            if (qa = 0, Et = wt = Ye = null, sl = !1, Bl = 0, vh.current = null, n === null || n.return === null) {
                St = 1, zl = e, ht = null;
                break
            }
            e: {
                var a = t,
                    i = n.return,
                    s = n,
                    l = e;
                if (e = jt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l,
                        u = s,
                        p = u.tag;
                    if (!(u.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var d = u.alternate;
                        d ? (u.updateQueue = d.updateQueue, u.memoizedState = d.memoizedState, u.lanes = d.lanes) : (u.updateQueue = null, u.memoizedState = null)
                    }
                    var f = l0(i);
                    if (f !== null) {
                        f.flags &= -257, c0(f, i, s, a, e), f.mode & 1 && s0(a, c, e), e = f, l = c;
                        var g = e.updateQueue;
                        if (g === null) {
                            var m = new Set;
                            m.add(l), e.updateQueue = m
                        } else g.add(l);
                        break e
                    } else {
                        if (!(e & 1)) {
                            s0(a, c, e), _h();
                            break e
                        }
                        l = Error(B(426))
                    }
                } else if (Le && s.mode & 1) {
                    var y = l0(i);
                    if (y !== null) {
                        !(y.flags & 65536) && (y.flags |= 256), c0(y, i, s, a, e), th(ss(l, s));
                        break e
                    }
                }
                a = l = ss(l, s),
                St !== 4 && (St = 2),
                cl === null ? cl = [a] : cl.push(a),
                a = i;do {
                    switch (a.tag) {
                        case 3:
                            a.flags |= 65536, e &= -e, a.lanes |= e;
                            var v = Qx(a, l, e);
                            t0(a, v);
                            break e;
                        case 1:
                            s = l;
                            var h = a.type,
                                x = a.stateNode;
                            if (!(a.flags & 128) && (typeof h.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (ea === null || !ea.has(x)))) {
                                a.flags |= 65536, e &= -e, a.lanes |= e;
                                var _ = Xx(a, s, e);
                                t0(a, _);
                                break e
                            }
                    }
                    a = a.return
                } while (a !== null)
            }
            my(n)
        } catch (b) {
            e = b, ht === n && n !== null && (ht = n = n.return);
            continue
        }
        break
    } while (!0)
}

function py() {
    var t = Uu.current;
    return Uu.current = Hu, t === null ? Hu : t
}

function _h() {
    (St === 0 || St === 3 || St === 2) && (St = 4), At === null || !(Ka & 268435455) && !(Td & 268435455) || jr(At, jt)
}

function Yu(t, e) {
    var n = ge;
    ge |= 2;
    var o = py();
    (At !== t || jt !== e) && (ir = null, Ia(t, e));
    do try {
        sC();
        break
    } catch (r) {
        dy(t, r)
    }
    while (!0);
    if (oh(), ge = n, Uu.current = o, ht !== null) throw Error(B(261));
    return At = null, jt = 0, St
}

function sC() {
    for (; ht !== null;) fy(ht)
}

function lC() {
    for (; ht !== null && !OS();) fy(ht)
}

function fy(t) {
    var e = vy(t.alternate, t, jn);
    t.memoizedProps = t.pendingProps, e === null ? my(t) : ht = e, vh.current = null
}

function my(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return, e.flags & 32768) {
            if (n = tC(n, e), n !== null) {
                n.flags &= 32767, ht = n;
                return
            }
            if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
            else {
                St = 6, ht = null;
                return
            }
        } else if (n = eC(n, e, jn), n !== null) {
            ht = n;
            return
        }
        if (e = e.sibling, e !== null) {
            ht = e;
            return
        }
        ht = e = t
    } while (e !== null);
    St === 0 && (St = 5)
}

function Ea(t, e, n) {
    var o = be,
        r = po.transition;
    try {
        po.transition = null, be = 1, cC(t, e, n, o)
    } finally {
        po.transition = r, be = o
    }
    return null
}

function cC(t, e, n, o) {
    do Fi(); while (Hr !== null);
    if (ge & 6) throw Error(B(327));
    n = t.finishedWork;
    var r = t.finishedLanes;
    if (n === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(B(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (US(t, a), t === At && (ht = At = null, jt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pc || (Pc = !0, gy(Au, function() {
            return Fi(), null
        })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
        a = po.transition, po.transition = null;
        var i = be;
        be = 1;
        var s = ge;
        ge |= 4, vh.current = null, oC(t, n), ly(n, t), Pb(gf), Pu = !!vf, gf = vf = null, t.current = n, rC(n), MS(), ge = s, be = i, po.transition = a
    } else t.current = n;
    if (Pc && (Pc = !1, Hr = t, Wu = r), a = t.pendingLanes, a === 0 && (ea = null), BS(n.stateNode), Sn(t, ct()), e !== null)
        for (o = t.onRecoverableError, n = 0; n < e.length; n++) r = e[n], o(r.value, {
            componentStack: r.stack,
            digest: r.digest
        });
    if (Vu) throw Vu = !1, t = Bf, Bf = null, t;
    return Wu & 1 && t.tag !== 0 && Fi(), a = t.pendingLanes, a & 1 ? t === Lf ? ul++ : (ul = 0, Lf = t) : ul = 0, xa(), null
}

function Fi() {
    if (Hr !== null) {
        var t = Qg(Wu),
            e = po.transition,
            n = be;
        try {
            if (po.transition = null, be = 16 > t ? 16 : t, Hr === null) var o = !1;
            else {
                if (t = Hr, Hr = null, Wu = 0, ge & 6) throw Error(B(331));
                var r = ge;
                for (ge |= 4, Y = t.current; Y !== null;) {
                    var a = Y,
                        i = a.child;
                    if (Y.flags & 16) {
                        var s = a.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var c = s[l];
                                for (Y = c; Y !== null;) {
                                    var u = Y;
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ll(8, u, a)
                                    }
                                    var p = u.child;
                                    if (p !== null) p.return = u, Y = p;
                                    else
                                        for (; Y !== null;) {
                                            u = Y;
                                            var d = u.sibling,
                                                f = u.return;
                                            if (ay(u), u === c) {
                                                Y = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = f, Y = d;
                                                break
                                            }
                                            Y = f
                                        }
                                }
                            }
                            var g = a.alternate;
                            if (g !== null) {
                                var m = g.child;
                                if (m !== null) {
                                    g.child = null;
                                    do {
                                        var y = m.sibling;
                                        m.sibling = null, m = y
                                    } while (m !== null)
                                }
                            }
                            Y = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && i !== null) i.return = a, Y = i;
                    else e: for (; Y !== null;) {
                        if (a = Y, a.flags & 2048) switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ll(9, a, a.return)
                        }
                        var v = a.sibling;
                        if (v !== null) {
                            v.return = a.return, Y = v;
                            break e
                        }
                        Y = a.return
                    }
                }
                var h = t.current;
                for (Y = h; Y !== null;) {
                    i = Y;
                    var x = i.child;
                    if (i.subtreeFlags & 2064 && x !== null) x.return = i, Y = x;
                    else e: for (i = h; Y !== null;) {
                        if (s = Y, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Cd(9, s)
                            }
                        } catch (b) {
                            et(s, s.return, b)
                        }
                        if (s === i) {
                            Y = null;
                            break e
                        }
                        var _ = s.sibling;
                        if (_ !== null) {
                            _.return = s.return, Y = _;
                            break e
                        }
                        Y = s.return
                    }
                }
                if (ge = r, xa(), Qo && typeof Qo.onPostCommitFiberRoot == "function") try {
                    Qo.onPostCommitFiberRoot(vd, t)
                } catch {}
                o = !0
            }
            return o
        } finally {
            be = n, po.transition = e
        }
    }
    return !1
}

function S0(t, e, n) {
    e = ss(n, e), e = Qx(t, e, 1), t = Jr(t, e, 1), e = fn(), t !== null && (ac(t, 1, e), Sn(t, e))
}

function et(t, e, n) {
    if (t.tag === 3) S0(t, t, n);
    else
        for (; e !== null;) {
            if (e.tag === 3) {
                S0(e, t, n);
                break
            } else if (e.tag === 1) {
                var o = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ea === null || !ea.has(o))) {
                    t = ss(n, t), t = Xx(e, t, 1), e = Jr(e, t, 1), t = fn(), e !== null && (ac(e, 1, t), Sn(e, t));
                    break
                }
            }
            e = e.return
        }
}

function uC(t, e, n) {
    var o = t.pingCache;
    o !== null && o.delete(e), e = fn(), t.pingedLanes |= t.suspendedLanes & n, At === t && (jt & n) === n && (St === 4 || St === 3 && (jt & 130023424) === jt && 500 > ct() - xh ? Ia(t, 0) : gh |= n), Sn(t, e)
}

function hy(t, e) {
    e === 0 && (t.mode & 1 ? (e = yc, yc <<= 1, !(yc & 130023424) && (yc = 4194304)) : e = 1);
    var n = fn();
    t = xr(t, e), t !== null && (ac(t, e, n), Sn(t, n))
}

function dC(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), hy(t, n)
}

function pC(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var o = t.stateNode,
                r = t.memoizedState;
            r !== null && (n = r.retryLane);
            break;
        case 19:
            o = t.stateNode;
            break;
        default:
            throw Error(B(314))
    }
    o !== null && o.delete(e), hy(t, n)
}
var vy;
vy = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || wn.current) yn = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128)) return yn = !1, Jb(t, e, n);
            yn = !!(t.flags & 131072)
        }
    else yn = !1, Le && e.flags & 1048576 && wx(e, Fu, e.index);
    switch (e.lanes = 0, e.tag) {
        case 2:
            var o = e.type;
            au(t, e), t = e.pendingProps;
            var r = os(e, Zt.current);
            ji(e, n), r = dh(null, e, o, t, r, n);
            var a = ph();
            return e.flags |= 1, typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, _n(o) ? (a = !0, Mu(e)) : a = !1, e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, ih(e), r.updater = bd, e.stateNode = r, r._reactInternals = e, Ef(e, o, t, n), e = Pf(null, e, o, !0, a, n)) : (e.tag = 0, Le && a && Jm(e), sn(null, e, r, n), e = e.child), e;
        case 16:
            o = e.elementType;
            e: {
                switch (au(t, e), t = e.pendingProps, r = o._init, o = r(o._payload), e.type = o, r = e.tag = mC(o), t = So(o, t), r) {
                    case 0:
                        e = Nf(null, e, o, t, n);
                        break e;
                    case 1:
                        e = p0(null, e, o, t, n);
                        break e;
                    case 11:
                        e = u0(null, e, o, t, n);
                        break e;
                    case 14:
                        e = d0(null, e, o, So(o.type, t), n);
                        break e
                }
                throw Error(B(306, o, ""))
            }
            return e;
        case 0:
            return o = e.type, r = e.pendingProps, r = e.elementType === o ? r : So(o, r), Nf(t, e, o, r, n);
        case 1:
            return o = e.type, r = e.pendingProps, r = e.elementType === o ? r : So(o, r), p0(t, e, o, r, n);
        case 3:
            e: {
                if (Jx(e), t === null) throw Error(B(387));o = e.pendingProps,
                a = e.memoizedState,
                r = a.element,
                Ex(t, e),
                Iu(e, o, null, n);
                var i = e.memoizedState;
                if (o = i.element, a.isDehydrated)
                    if (a = {
                            element: o,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, e.updateQueue.baseState = a, e.memoizedState = a, e.flags & 256) {
                        r = ss(Error(B(423)), e), e = f0(t, e, o, n, r);
                        break e
                    } else if (o !== r) {
                    r = ss(Error(B(424)), e), e = f0(t, e, o, n, r);
                    break e
                } else
                    for (Hn = Zr(e.stateNode.containerInfo.firstChild), Vn = e, Le = !0, Eo = null, n = Cx(e, null, o, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (rs(), o === r) {
                        e = yr(t, e, n);
                        break e
                    }
                    sn(t, e, o, n)
                }
                e = e.child
            }
            return e;
        case 5:
            return Ax(e), t === null && bf(e), o = e.type, r = e.pendingProps, a = t !== null ? t.memoizedProps : null, i = r.children, xf(o, r) ? i = null : a !== null && xf(o, a) && (e.flags |= 32), Zx(t, e), sn(t, e, i, n), e.child;
        case 6:
            return t === null && bf(e), null;
        case 13:
            return ey(t, e, n);
        case 4:
            return sh(e, e.stateNode.containerInfo), o = e.pendingProps, t === null ? e.child = as(e, null, o, n) : sn(t, e, o, n), e.child;
        case 11:
            return o = e.type, r = e.pendingProps, r = e.elementType === o ? r : So(o, r), u0(t, e, o, r, n);
        case 7:
            return sn(t, e, e.pendingProps, n), e.child;
        case 8:
            return sn(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return sn(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (o = e.type._context, r = e.pendingProps, a = e.memoizedProps, i = r.value, De(Bu, o._currentValue), o._currentValue = i, a !== null)
                    if (Po(a.value, i)) {
                        if (a.children === r.children && !wn.current) {
                            e = yr(t, e, n);
                            break e
                        }
                    } else
                        for (a = e.child, a !== null && (a.return = e); a !== null;) {
                            var s = a.dependencies;
                            if (s !== null) {
                                i = a.child;
                                for (var l = s.firstContext; l !== null;) {
                                    if (l.context === o) {
                                        if (a.tag === 1) {
                                            l = mr(-1, n & -n), l.tag = 2;
                                            var c = a.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var u = c.pending;
                                                u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l
                                            }
                                        }
                                        a.lanes |= n, l = a.alternate, l !== null && (l.lanes |= n), Cf(a.return, n, e), s.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (a.tag === 10) i = a.type === e.type ? null : a.child;
                            else if (a.tag === 18) {
                                if (i = a.return, i === null) throw Error(B(341));
                                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Cf(i, n, e), i = a.sibling
                            } else i = a.child;
                            if (i !== null) i.return = a;
                            else
                                for (i = a; i !== null;) {
                                    if (i === e) {
                                        i = null;
                                        break
                                    }
                                    if (a = i.sibling, a !== null) {
                                        a.return = i.return, i = a;
                                        break
                                    }
                                    i = i.return
                                }
                            a = i
                        }
                sn(t, e, r.children, n),
                e = e.child
            }
            return e;
        case 9:
            return r = e.type, o = e.pendingProps.children, ji(e, n), r = mo(r), o = o(r), e.flags |= 1, sn(t, e, o, n), e.child;
        case 14:
            return o = e.type, r = So(o, e.pendingProps), r = So(o.type, r), d0(t, e, o, r, n);
        case 15:
            return qx(t, e, e.type, e.pendingProps, n);
        case 17:
            return o = e.type, r = e.pendingProps, r = e.elementType === o ? r : So(o, r), au(t, e), e.tag = 1, _n(o) ? (t = !0, Mu(e)) : t = !1, ji(e, n), Gx(e, o, r), Ef(e, o, r, n), Pf(null, e, o, !0, t, n);
        case 19:
            return ty(t, e, n);
        case 22:
            return Kx(t, e, n)
    }
    throw Error(B(156, e.tag))
};

function gy(t, e) {
    return Vg(t, e)
}

function fC(t, e, n, o) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function lo(t, e, n, o) {
    return new fC(t, e, n, o)
}

function Sh(t) {
    return t = t.prototype, !(!t || !t.isReactComponent)
}

function mC(t) {
    if (typeof t == "function") return Sh(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof, t === $m) return 11;
        if (t === Hm) return 14
    }
    return 2
}

function na(t, e) {
    var n = t.alternate;
    return n === null ? (n = lo(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
}

function lu(t, e, n, o, r, a) {
    var i = 2;
    if (o = t, typeof t == "function") Sh(t) && (i = 1);
    else if (typeof t == "string") i = 5;
    else e: switch (t) {
        case vi:
            return za(n.children, r, a, e);
        case zm:
            i = 8, r |= 8;
            break;
        case Xp:
            return t = lo(12, n, e, r | 2), t.elementType = Xp, t.lanes = a, t;
        case qp:
            return t = lo(13, n, e, r), t.elementType = qp, t.lanes = a, t;
        case Kp:
            return t = lo(19, n, e, r), t.elementType = Kp, t.lanes = a, t;
        case Ag:
            return Ed(n, r, a, e);
        default:
            if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                case Tg:
                    i = 10;
                    break e;
                case Eg:
                    i = 9;
                    break e;
                case $m:
                    i = 11;
                    break e;
                case Hm:
                    i = 14;
                    break e;
                case Rr:
                    i = 16, o = null;
                    break e
            }
            throw Error(B(130, t == null ? t : typeof t, ""))
    }
    return e = lo(i, n, e, r), e.elementType = t, e.type = o, e.lanes = a, e
}

function za(t, e, n, o) {
    return t = lo(7, t, o, e), t.lanes = n, t
}

function Ed(t, e, n, o) {
    return t = lo(22, t, o, e), t.elementType = Ag, t.lanes = n, t.stateNode = {
        isHidden: !1
    }, t
}

function wp(t, e, n) {
    return t = lo(6, t, null, e), t.lanes = n, t
}

function _p(t, e, n) {
    return e = lo(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    }, e
}

function hC(t, e, n, o, r) {
    this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = tp(0), this.expirationTimes = tp(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tp(0), this.identifierPrefix = o, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null
}

function bh(t, e, n, o, r, a, i, s, l) {
    return t = new hC(t, e, n, s, l), e === 1 ? (e = 1, a === !0 && (e |= 8)) : e = 0, a = lo(3, null, null, e), t.current = a, a.stateNode = t, a.memoizedState = {
        element: o,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, ih(a), t
}

function vC(t, e, n) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: hi,
        key: o == null ? null : "" + o,
        children: t,
        containerInfo: e,
        implementation: n
    }
}

function xy(t) {
    if (!t) return la;
    t = t._reactInternals;
    e: {
        if (ai(t) !== t || t.tag !== 1) throw Error(B(170));
        var e = t;do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (_n(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            e = e.return
        } while (e !== null);
        throw Error(B(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (_n(n)) return xx(t, n, e)
    }
    return e
}

function yy(t, e, n, o, r, a, i, s, l) {
    return t = bh(n, o, !0, t, r, a, i, s, l), t.context = xy(null), n = t.current, o = fn(), r = ta(n), a = mr(o, r), a.callback = e ? ? null, Jr(n, a, r), t.current.lanes = r, ac(t, r, o), Sn(t, o), t
}

function Ad(t, e, n, o) {
    var r = e.current,
        a = fn(),
        i = ta(r);
    return n = xy(n), e.context === null ? e.context = n : e.pendingContext = n, e = mr(a, i), e.payload = {
        element: t
    }, o = o === void 0 ? null : o, o !== null && (e.callback = o), t = Jr(r, e, i), t !== null && (No(t, r, i, a), nu(t, r, i)), i
}

function Gu(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode
    }
}

function b0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}

function Ch(t, e) {
    b0(t, e), (t = t.alternate) && b0(t, e)
}

function gC() {
    return null
}
var wy = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
};

function Th(t) {
    this._internalRoot = t
}
Nd.prototype.render = Th.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(B(409));
    Ad(t, e, null, null)
};
Nd.prototype.unmount = Th.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Za(function() {
            Ad(null, t, null, null)
        }), e[gr] = null
    }
};

function Nd(t) {
    this._internalRoot = t
}
Nd.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Kg();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < Mr.length && e !== 0 && e < Mr[n].priority; n++);
        Mr.splice(n, 0, t), n === 0 && Jg(t)
    }
};

function Eh(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}

function Pd(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}

function C0() {}

function xC(t, e, n, o, r) {
    if (r) {
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var c = Gu(i);
                a.call(c)
            }
        }
        var i = yy(e, o, t, 0, null, !1, !1, "", C0);
        return t._reactRootContainer = i, t[gr] = i.current, Rl(t.nodeType === 8 ? t.parentNode : t), Za(), i
    }
    for (; r = t.lastChild;) t.removeChild(r);
    if (typeof o == "function") {
        var s = o;
        o = function() {
            var c = Gu(l);
            s.call(c)
        }
    }
    var l = bh(t, 0, !1, null, null, !1, !1, "", C0);
    return t._reactRootContainer = l, t[gr] = l.current, Rl(t.nodeType === 8 ? t.parentNode : t), Za(function() {
        Ad(e, l, n, o)
    }), l
}

function kd(t, e, n, o, r) {
    var a = n._reactRootContainer;
    if (a) {
        var i = a;
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var l = Gu(i);
                s.call(l)
            }
        }
        Ad(e, i, t, r)
    } else i = xC(n, e, t, r, o);
    return Gu(i)
}
Xg = function(t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = Gs(e.pendingLanes);
                n !== 0 && (Wm(e, n | 1), Sn(e, ct()), !(ge & 6) && (ls = ct() + 500, xa()))
            }
            break;
        case 13:
            Za(function() {
                var o = xr(t, 1);
                if (o !== null) {
                    var r = fn();
                    No(o, t, 1, r)
                }
            }), Ch(t, 1)
    }
};
Ym = function(t) {
    if (t.tag === 13) {
        var e = xr(t, 134217728);
        if (e !== null) {
            var n = fn();
            No(e, t, 134217728, n)
        }
        Ch(t, 134217728)
    }
};
qg = function(t) {
    if (t.tag === 13) {
        var e = ta(t),
            n = xr(t, e);
        if (n !== null) {
            var o = fn();
            No(n, t, e, o)
        }
        Ch(t, e)
    }
};
Kg = function() {
    return be
};
Zg = function(t, e) {
    var n = be;
    try {
        return be = t, e()
    } finally {
        be = n
    }
};
lf = function(t, e, n) {
    switch (e) {
        case "input":
            if (ef(t, n), e = n.name, n.type === "radio" && e != null) {
                for (n = t; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                    var o = n[e];
                    if (o !== t && o.form === t.form) {
                        var r = wd(o);
                        if (!r) throw Error(B(90));
                        Pg(o), ef(o, r)
                    }
                }
            }
            break;
        case "textarea":
            Dg(t, n);
            break;
        case "select":
            e = n.value, e != null && Di(t, !!n.multiple, e, !1)
    }
};
Lg = yh;
Ig = Za;
var yC = {
        usingClientEntryPoint: !1,
        Events: [sc, wi, wd, Fg, Bg, yh]
    },
    Bs = {
        findFiberByHostInstance: ka,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    wC = {
        bundleType: Bs.bundleType,
        version: Bs.version,
        rendererPackageName: Bs.rendererPackageName,
        rendererConfig: Bs.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Tr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(t) {
            return t = Hg(t), t === null ? null : t.stateNode
        },
        findFiberByHostInstance: Bs.findFiberByHostInstance || gC,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var kc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!kc.isDisabled && kc.supportsFiber) try {
        vd = kc.inject(wC), Qo = kc
    } catch {}
}
qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yC;
qn.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Eh(e)) throw Error(B(200));
    return vC(t, e, null, n)
};
qn.createRoot = function(t, e) {
    if (!Eh(t)) throw Error(B(299));
    var n = !1,
        o = "",
        r = wy;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (o = e.identifierPrefix), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = bh(t, 1, !1, null, null, n, !1, o, r), t[gr] = e.current, Rl(t.nodeType === 8 ? t.parentNode : t), new Th(e)
};
qn.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(B(188)) : (t = Object.keys(t).join(","), Error(B(268, t)));
    return t = Hg(e), t = t === null ? null : t.stateNode, t
};
qn.flushSync = function(t) {
    return Za(t)
};
qn.hydrate = function(t, e, n) {
    if (!Pd(e)) throw Error(B(200));
    return kd(null, t, e, !0, n)
};
qn.hydrateRoot = function(t, e, n) {
    if (!Eh(t)) throw Error(B(405));
    var o = n != null && n.hydratedSources || null,
        r = !1,
        a = "",
        i = wy;
    if (n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), e = yy(e, null, t, 1, n ? ? null, r, !1, a, i), t[gr] = e.current, Rl(t), o)
        for (t = 0; t < o.length; t++) n = o[t], r = n._getVersion, r = r(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, r] : e.mutableSourceEagerHydrationData.push(n, r);
    return new Nd(e)
};
qn.render = function(t, e, n) {
    if (!Pd(e)) throw Error(B(200));
    return kd(null, t, e, !1, n)
};
qn.unmountComponentAtNode = function(t) {
    if (!Pd(t)) throw Error(B(40));
    return t._reactRootContainer ? (Za(function() {
        kd(null, null, t, !1, function() {
            t._reactRootContainer = null, t[gr] = null
        })
    }), !0) : !1
};
qn.unstable_batchedUpdates = yh;
qn.unstable_renderSubtreeIntoContainer = function(t, e, n, o) {
    if (!Pd(n)) throw Error(B(200));
    if (t == null || t._reactInternals === void 0) throw Error(B(38));
    return kd(t, e, n, !1, o)
};
qn.version = "18.3.1-next-f1338f8080-20240426";

function _y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_y)
    } catch (t) {
        console.error(t)
    }
}
_y(), _g.exports = qn;
var Ss = _g.exports;
const Sy = xs(Ss);
var by, T0 = Ss;
by = T0.createRoot, T0.hydrateRoot;
const _C = 1,
    SC = 1e6;
let Sp = 0;

function bC() {
    return Sp = (Sp + 1) % Number.MAX_SAFE_INTEGER, Sp.toString()
}
const bp = new Map,
    E0 = t => {
        if (bp.has(t)) return;
        const e = setTimeout(() => {
            bp.delete(t), dl({
                type: "REMOVE_TOAST",
                toastId: t
            })
        }, SC);
        bp.set(t, e)
    },
    CC = (t, e) => {
        switch (e.type) {
            case "ADD_TOAST":
                return { ...t,
                    toasts: [e.toast, ...t.toasts].slice(0, _C)
                };
            case "UPDATE_TOAST":
                return { ...t,
                    toasts: t.toasts.map(n => n.id === e.toast.id ? { ...n,
                        ...e.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = e;
                    return n ? E0(n) : t.toasts.forEach(o => {
                        E0(o.id)
                    }),
                    { ...t,
                        toasts: t.toasts.map(o => o.id === n || n === void 0 ? { ...o,
                            open: !1
                        } : o)
                    }
                }
            case "REMOVE_TOAST":
                return e.toastId === void 0 ? { ...t,
                    toasts: []
                } : { ...t,
                    toasts: t.toasts.filter(n => n.id !== e.toastId)
                }
        }
    },
    cu = [];
let uu = {
    toasts: []
};

function dl(t) {
    uu = CC(uu, t), cu.forEach(e => {
        e(uu)
    })
}

function TC({ ...t
}) {
    const e = bC(),
        n = r => dl({
            type: "UPDATE_TOAST",
            toast: { ...r,
                id: e
            }
        }),
        o = () => dl({
            type: "DISMISS_TOAST",
            toastId: e
        });
    return dl({
        type: "ADD_TOAST",
        toast: { ...t,
            id: e,
            open: !0,
            onOpenChange: r => {
                r || o()
            }
        }
    }), {
        id: e,
        dismiss: o,
        update: n
    }
}

function Cy() {
    const [t, e] = S.useState(uu);
    return S.useEffect(() => (cu.push(e), () => {
        const n = cu.indexOf(e);
        n > -1 && cu.splice(n, 1)
    }), [t]), { ...t,
        toast: TC,
        dismiss: n => dl({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function tt(t, e, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(r) {
        if (t == null || t(r), n === !1 || !r.defaultPrevented) return e == null ? void 0 : e(r)
    }
}

function EC(t, e) {
    typeof t == "function" ? t(e) : t != null && (t.current = e)
}

function Ty(...t) {
    return e => t.forEach(n => EC(n, e))
}

function An(...t) {
    return S.useCallback(Ty(...t), t)
}

function Ah(t, e = []) {
    let n = [];

    function o(a, i) {
        const s = S.createContext(i),
            l = n.length;
        n = [...n, i];

        function c(p) {
            const {
                scope: d,
                children: f,
                ...g
            } = p, m = (d == null ? void 0 : d[t][l]) || s, y = S.useMemo(() => g, Object.values(g));
            return w.jsx(m.Provider, {
                value: y,
                children: f
            })
        }

        function u(p, d) {
            const f = (d == null ? void 0 : d[t][l]) || s,
                g = S.useContext(f);
            if (g) return g;
            if (i !== void 0) return i;
            throw new Error(`\`${p}\` must be used within \`${a}\``)
        }
        return c.displayName = a + "Provider", [c, u]
    }
    const r = () => {
        const a = n.map(i => S.createContext(i));
        return function(s) {
            const l = (s == null ? void 0 : s[t]) || a;
            return S.useMemo(() => ({
                [`__scope${t}`]: { ...s,
                    [t]: l
                }
            }), [s, l])
        }
    };
    return r.scopeName = t, [o, AC(r, ...e)]
}

function AC(...t) {
    const e = t[0];
    if (t.length === 1) return e;
    const n = () => {
        const o = t.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(a) {
            const i = o.reduce((s, {
                useScope: l,
                scopeName: c
            }) => {
                const p = l(a)[`__scope${c}`];
                return { ...s,
                    ...p
                }
            }, {});
            return S.useMemo(() => ({
                [`__scope${e.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = e.scopeName, n
}
var $l = S.forwardRef((t, e) => {
    const {
        children: n,
        ...o
    } = t, r = S.Children.toArray(n), a = r.find(NC);
    if (a) {
        const i = a.props.children,
            s = r.map(l => l === a ? S.Children.count(i) > 1 ? S.Children.only(null) : S.isValidElement(i) ? i.props.children : null : l);
        return w.jsx($f, { ...o,
            ref: e,
            children: S.isValidElement(i) ? S.cloneElement(i, void 0, s) : null
        })
    }
    return w.jsx($f, { ...o,
        ref: e,
        children: n
    })
});
$l.displayName = "Slot";
var $f = S.forwardRef((t, e) => {
    const {
        children: n,
        ...o
    } = t;
    if (S.isValidElement(n)) {
        const r = kC(n);
        return S.cloneElement(n, { ...PC(o, n.props),
            ref: e ? Ty(e, r) : r
        })
    }
    return S.Children.count(n) > 1 ? S.Children.only(null) : null
});
$f.displayName = "SlotClone";
var Ey = ({
    children: t
}) => w.jsx(w.Fragment, {
    children: t
});

function NC(t) {
    return S.isValidElement(t) && t.type === Ey
}

function PC(t, e) {
    const n = { ...e
    };
    for (const o in e) {
        const r = t[o],
            a = e[o];
        /^on[A-Z]/.test(o) ? r && a ? n[o] = (...s) => {
            a(...s), r(...s)
        } : r && (n[o] = r) : o === "style" ? n[o] = { ...r,
            ...a
        } : o === "className" && (n[o] = [r, a].filter(Boolean).join(" "))
    }
    return { ...t,
        ...n
    }
}

function kC(t) {
    var o, r;
    let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get,
        n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref)
}

function DC(t) {
    const e = t + "CollectionProvider",
        [n, o] = Ah(e),
        [r, a] = n(e, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        i = f => {
            const {
                scope: g,
                children: m
            } = f, y = F.useRef(null), v = F.useRef(new Map).current;
            return w.jsx(r, {
                scope: g,
                itemMap: v,
                collectionRef: y,
                children: m
            })
        };
    i.displayName = e;
    const s = t + "CollectionSlot",
        l = F.forwardRef((f, g) => {
            const {
                scope: m,
                children: y
            } = f, v = a(s, m), h = An(g, v.collectionRef);
            return w.jsx($l, {
                ref: h,
                children: y
            })
        });
    l.displayName = s;
    const c = t + "CollectionItemSlot",
        u = "data-radix-collection-item",
        p = F.forwardRef((f, g) => {
            const {
                scope: m,
                children: y,
                ...v
            } = f, h = F.useRef(null), x = An(g, h), _ = a(c, m);
            return F.useEffect(() => (_.itemMap.set(h, {
                ref: h,
                ...v
            }), () => void _.itemMap.delete(h))), w.jsx($l, {
                [u]: "",
                ref: x,
                children: y
            })
        });
    p.displayName = c;

    function d(f) {
        const g = a(t + "CollectionConsumer", f);
        return F.useCallback(() => {
            const y = g.collectionRef.current;
            if (!y) return [];
            const v = Array.from(y.querySelectorAll(`[${u}]`));
            return Array.from(g.itemMap.values()).sort((_, b) => v.indexOf(_.ref.current) - v.indexOf(b.ref.current))
        }, [g.collectionRef, g.itemMap])
    }
    return [{
        Provider: i,
        Slot: l,
        ItemSlot: p
    }, d, o]
}
var RC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    Jt = RC.reduce((t, e) => {
        const n = S.forwardRef((o, r) => {
            const {
                asChild: a,
                ...i
            } = o, s = a ? $l : e;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), w.jsx(s, { ...i,
                ref: r
            })
        });
        return n.displayName = `Primitive.${e}`, { ...t,
            [e]: n
        }
    }, {});

function Nh(t, e) {
    t && Ss.flushSync(() => t.dispatchEvent(e))
}

function vo(t) {
    const e = S.useRef(t);
    return S.useEffect(() => {
        e.current = t
    }), S.useMemo(() => (...n) => {
        var o;
        return (o = e.current) == null ? void 0 : o.call(e, ...n)
    }, [])
}

function Ay(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = vo(t);
    S.useEffect(() => {
        const o = r => {
            r.key === "Escape" && n(r)
        };
        return e.addEventListener("keydown", o, {
            capture: !0
        }), () => e.removeEventListener("keydown", o, {
            capture: !0
        })
    }, [n, e])
}
var OC = "DismissableLayer",
    Hf = "dismissableLayer.update",
    MC = "dismissableLayer.pointerDownOutside",
    jC = "dismissableLayer.focusOutside",
    A0, Ny = S.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Py = S.forwardRef((t, e) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: r,
            onFocusOutside: a,
            onInteractOutside: i,
            onDismiss: s,
            ...l
        } = t, c = S.useContext(Ny), [u, p] = S.useState(null), d = (u == null ? void 0 : u.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, f] = S.useState({}), g = An(e, C => p(C)), m = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), v = m.indexOf(y), h = u ? m.indexOf(u) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = h >= v, b = BC(C => {
            const A = C.target,
                P = [...c.branches].some(k => k.contains(A));
            !_ || P || (r == null || r(C), i == null || i(C), C.defaultPrevented || s == null || s())
        }, d), E = LC(C => {
            const A = C.target;
            [...c.branches].some(k => k.contains(A)) || (a == null || a(C), i == null || i(C), C.defaultPrevented || s == null || s())
        }, d);
        return Ay(C => {
            h === c.layers.size - 1 && (o == null || o(C), !C.defaultPrevented && s && (C.preventDefault(), s()))
        }, d), S.useEffect(() => {
            if (u) return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (A0 = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), N0(), () => {
                n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = A0)
            }
        }, [u, d, n, c]), S.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), N0())
        }, [u, c]), S.useEffect(() => {
            const C = () => f({});
            return document.addEventListener(Hf, C), () => document.removeEventListener(Hf, C)
        }, []), w.jsx(Jt.div, { ...l,
            ref: g,
            style: {
                pointerEvents: x ? _ ? "auto" : "none" : void 0,
                ...t.style
            },
            onFocusCapture: tt(t.onFocusCapture, E.onFocusCapture),
            onBlurCapture: tt(t.onBlurCapture, E.onBlurCapture),
            onPointerDownCapture: tt(t.onPointerDownCapture, b.onPointerDownCapture)
        })
    });
Py.displayName = OC;
var FC = "DismissableLayerBranch",
    ky = S.forwardRef((t, e) => {
        const n = S.useContext(Ny),
            o = S.useRef(null),
            r = An(e, o);
        return S.useEffect(() => {
            const a = o.current;
            if (a) return n.branches.add(a), () => {
                n.branches.delete(a)
            }
        }, [n.branches]), w.jsx(Jt.div, { ...t,
            ref: r
        })
    });
ky.displayName = FC;

function BC(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = vo(t),
        o = S.useRef(!1),
        r = S.useRef(() => {});
    return S.useEffect(() => {
        const a = s => {
                if (s.target && !o.current) {
                    let l = function() {
                        Dy(MC, n, c, {
                            discrete: !0
                        })
                    };
                    const c = {
                        originalEvent: s
                    };
                    s.pointerType === "touch" ? (e.removeEventListener("click", r.current), r.current = l, e.addEventListener("click", r.current, {
                        once: !0
                    })) : l()
                } else e.removeEventListener("click", r.current);
                o.current = !1
            },
            i = window.setTimeout(() => {
                e.addEventListener("pointerdown", a)
            }, 0);
        return () => {
            window.clearTimeout(i), e.removeEventListener("pointerdown", a), e.removeEventListener("click", r.current)
        }
    }, [e, n]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function LC(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = vo(t),
        o = S.useRef(!1);
    return S.useEffect(() => {
        const r = a => {
            a.target && !o.current && Dy(jC, n, {
                originalEvent: a
            }, {
                discrete: !1
            })
        };
        return e.addEventListener("focusin", r), () => e.removeEventListener("focusin", r)
    }, [e, n]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function N0() {
    const t = new CustomEvent(Hf);
    document.dispatchEvent(t)
}

function Dy(t, e, n, {
    discrete: o
}) {
    const r = n.originalEvent.target,
        a = new CustomEvent(t, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    e && r.addEventListener(t, e, {
        once: !0
    }), o ? Nh(r, a) : r.dispatchEvent(a)
}
var IC = Py,
    zC = ky,
    wr = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
    $C = "Portal",
    Ry = S.forwardRef((t, e) => {
        var s;
        const {
            container: n,
            ...o
        } = t, [r, a] = S.useState(!1);
        wr(() => a(!0), []);
        const i = n || r && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
        return i ? Sy.createPortal(w.jsx(Jt.div, { ...o,
            ref: e
        }), i) : null
    });
Ry.displayName = $C;

function HC(t, e) {
    return S.useReducer((n, o) => e[n][o] ? ? n, t)
}
var Oy = t => {
    const {
        present: e,
        children: n
    } = t, o = UC(e), r = typeof n == "function" ? n({
        present: o.isPresent
    }) : S.Children.only(n), a = An(o.ref, VC(r));
    return typeof n == "function" || o.isPresent ? S.cloneElement(r, {
        ref: a
    }) : null
};
Oy.displayName = "Presence";

function UC(t) {
    const [e, n] = S.useState(), o = S.useRef({}), r = S.useRef(t), a = S.useRef("none"), i = t ? "mounted" : "unmounted", [s, l] = HC(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return S.useEffect(() => {
        const c = Dc(o.current);
        a.current = s === "mounted" ? c : "none"
    }, [s]), wr(() => {
        const c = o.current,
            u = r.current;
        if (u !== t) {
            const d = a.current,
                f = Dc(c);
            t ? l("MOUNT") : f === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && d !== f ? "ANIMATION_OUT" : "UNMOUNT"), r.current = t
        }
    }, [t, l]), wr(() => {
        if (e) {
            const c = p => {
                    const f = Dc(o.current).includes(p.animationName);
                    p.target === e && f && Ss.flushSync(() => l("ANIMATION_END"))
                },
                u = p => {
                    p.target === e && (a.current = Dc(o.current))
                };
            return e.addEventListener("animationstart", u), e.addEventListener("animationcancel", c), e.addEventListener("animationend", c), () => {
                e.removeEventListener("animationstart", u), e.removeEventListener("animationcancel", c), e.removeEventListener("animationend", c)
            }
        } else l("ANIMATION_END")
    }, [e, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: S.useCallback(c => {
            c && (o.current = getComputedStyle(c)), n(c)
        }, [])
    }
}

function Dc(t) {
    return (t == null ? void 0 : t.animationName) || "none"
}

function VC(t) {
    var o, r;
    let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get,
        n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref)
}

function WC({
    prop: t,
    defaultProp: e,
    onChange: n = () => {}
}) {
    const [o, r] = YC({
        defaultProp: e,
        onChange: n
    }), a = t !== void 0, i = a ? t : o, s = vo(n), l = S.useCallback(c => {
        if (a) {
            const p = typeof c == "function" ? c(t) : c;
            p !== t && s(p)
        } else r(c)
    }, [a, t, r, s]);
    return [i, l]
}

function YC({
    defaultProp: t,
    onChange: e
}) {
    const n = S.useState(t),
        [o] = n,
        r = S.useRef(o),
        a = vo(e);
    return S.useEffect(() => {
        r.current !== o && (a(o), r.current = o)
    }, [o, r, a]), n
}
var GC = "VisuallyHidden",
    Dd = S.forwardRef((t, e) => w.jsx(Jt.span, { ...t,
        ref: e,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...t.style
        }
    }));
Dd.displayName = GC;
var QC = Dd,
    Ph = "ToastProvider",
    [kh, XC, qC] = DC("Toast"),
    [My, h7] = Ah("Toast", [qC]),
    [KC, Rd] = My(Ph),
    jy = t => {
        const {
            __scopeToast: e,
            label: n = "Notification",
            duration: o = 5e3,
            swipeDirection: r = "right",
            swipeThreshold: a = 50,
            children: i
        } = t, [s, l] = S.useState(null), [c, u] = S.useState(0), p = S.useRef(!1), d = S.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Ph}\`. Expected non-empty \`string\`.`), w.jsx(kh.Provider, {
            scope: e,
            children: w.jsx(KC, {
                scope: e,
                label: n,
                duration: o,
                swipeDirection: r,
                swipeThreshold: a,
                toastCount: c,
                viewport: s,
                onViewportChange: l,
                onToastAdd: S.useCallback(() => u(f => f + 1), []),
                onToastRemove: S.useCallback(() => u(f => f - 1), []),
                isFocusedToastEscapeKeyDownRef: p,
                isClosePausedRef: d,
                children: i
            })
        })
    };
jy.displayName = Ph;
var Fy = "ToastViewport",
    ZC = ["F8"],
    Uf = "toast.viewportPause",
    Vf = "toast.viewportResume",
    By = S.forwardRef((t, e) => {
        const {
            __scopeToast: n,
            hotkey: o = ZC,
            label: r = "Notifications ({hotkey})",
            ...a
        } = t, i = Rd(Fy, n), s = XC(n), l = S.useRef(null), c = S.useRef(null), u = S.useRef(null), p = S.useRef(null), d = An(e, p, i.onViewportChange), f = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = i.toastCount > 0;
        S.useEffect(() => {
            const y = v => {
                var x;
                o.every(_ => v[_] || v.code === _) && ((x = p.current) == null || x.focus())
            };
            return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y)
        }, [o]), S.useEffect(() => {
            const y = l.current,
                v = p.current;
            if (g && y && v) {
                const h = () => {
                        if (!i.isClosePausedRef.current) {
                            const E = new CustomEvent(Uf);
                            v.dispatchEvent(E), i.isClosePausedRef.current = !0
                        }
                    },
                    x = () => {
                        if (i.isClosePausedRef.current) {
                            const E = new CustomEvent(Vf);
                            v.dispatchEvent(E), i.isClosePausedRef.current = !1
                        }
                    },
                    _ = E => {
                        !y.contains(E.relatedTarget) && x()
                    },
                    b = () => {
                        y.contains(document.activeElement) || x()
                    };
                return y.addEventListener("focusin", h), y.addEventListener("focusout", _), y.addEventListener("pointermove", h), y.addEventListener("pointerleave", b), window.addEventListener("blur", h), window.addEventListener("focus", x), () => {
                    y.removeEventListener("focusin", h), y.removeEventListener("focusout", _), y.removeEventListener("pointermove", h), y.removeEventListener("pointerleave", b), window.removeEventListener("blur", h), window.removeEventListener("focus", x)
                }
            }
        }, [g, i.isClosePausedRef]);
        const m = S.useCallback(({
            tabbingDirection: y
        }) => {
            const h = s().map(x => {
                const _ = x.ref.current,
                    b = [_, ...dT(_)];
                return y === "forwards" ? b : b.reverse()
            });
            return (y === "forwards" ? h.reverse() : h).flat()
        }, [s]);
        return S.useEffect(() => {
            const y = p.current;
            if (y) {
                const v = h => {
                    var b, E, C;
                    const x = h.altKey || h.ctrlKey || h.metaKey;
                    if (h.key === "Tab" && !x) {
                        const A = document.activeElement,
                            P = h.shiftKey;
                        if (h.target === y && P) {
                            (b = c.current) == null || b.focus();
                            return
                        }
                        const R = m({
                                tabbingDirection: P ? "backwards" : "forwards"
                            }),
                            H = R.findIndex(M => M === A);
                        Cp(R.slice(H + 1)) ? h.preventDefault() : P ? (E = c.current) == null || E.focus() : (C = u.current) == null || C.focus()
                    }
                };
                return y.addEventListener("keydown", v), () => y.removeEventListener("keydown", v)
            }
        }, [s, m]), w.jsxs(zC, {
            ref: l,
            role: "region",
            "aria-label": r.replace("{hotkey}", f),
            tabIndex: -1,
            style: {
                pointerEvents: g ? void 0 : "none"
            },
            children: [g && w.jsx(Wf, {
                ref: c,
                onFocusFromOutsideViewport: () => {
                    const y = m({
                        tabbingDirection: "forwards"
                    });
                    Cp(y)
                }
            }), w.jsx(kh.Slot, {
                scope: n,
                children: w.jsx(Jt.ol, {
                    tabIndex: -1,
                    ...a,
                    ref: d
                })
            }), g && w.jsx(Wf, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const y = m({
                        tabbingDirection: "backwards"
                    });
                    Cp(y)
                }
            })]
        })
    });
By.displayName = Fy;
var Ly = "ToastFocusProxy",
    Wf = S.forwardRef((t, e) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: o,
            ...r
        } = t, a = Rd(Ly, n);
        return w.jsx(Dd, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...r,
            ref: e,
            style: {
                position: "fixed"
            },
            onFocus: i => {
                var c;
                const s = i.relatedTarget;
                !((c = a.viewport) != null && c.contains(s)) && o()
            }
        })
    });
Wf.displayName = Ly;
var Od = "Toast",
    JC = "toast.swipeStart",
    eT = "toast.swipeMove",
    tT = "toast.swipeCancel",
    nT = "toast.swipeEnd",
    Iy = S.forwardRef((t, e) => {
        const {
            forceMount: n,
            open: o,
            defaultOpen: r,
            onOpenChange: a,
            ...i
        } = t, [s = !0, l] = WC({
            prop: o,
            defaultProp: r,
            onChange: a
        });
        return w.jsx(Oy, {
            present: n || s,
            children: w.jsx(aT, {
                open: s,
                ...i,
                ref: e,
                onClose: () => l(!1),
                onPause: vo(t.onPause),
                onResume: vo(t.onResume),
                onSwipeStart: tt(t.onSwipeStart, c => {
                    c.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: tt(t.onSwipeMove, c => {
                    const {
                        x: u,
                        y: p
                    } = c.detail.delta;
                    c.currentTarget.setAttribute("data-swipe", "move"), c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`)
                }),
                onSwipeCancel: tt(t.onSwipeCancel, c => {
                    c.currentTarget.setAttribute("data-swipe", "cancel"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: tt(t.onSwipeEnd, c => {
                    const {
                        x: u,
                        y: p
                    } = c.detail.delta;
                    c.currentTarget.setAttribute("data-swipe", "end"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), l(!1)
                })
            })
        })
    });
Iy.displayName = Od;
var [oT, rT] = My(Od, {
    onClose() {}
}), aT = S.forwardRef((t, e) => {
    const {
        __scopeToast: n,
        type: o = "foreground",
        duration: r,
        open: a,
        onClose: i,
        onEscapeKeyDown: s,
        onPause: l,
        onResume: c,
        onSwipeStart: u,
        onSwipeMove: p,
        onSwipeCancel: d,
        onSwipeEnd: f,
        ...g
    } = t, m = Rd(Od, n), [y, v] = S.useState(null), h = An(e, M => v(M)), x = S.useRef(null), _ = S.useRef(null), b = r || m.duration, E = S.useRef(0), C = S.useRef(b), A = S.useRef(0), {
        onToastAdd: P,
        onToastRemove: k
    } = m, L = vo(() => {
        var V;
        (y == null ? void 0 : y.contains(document.activeElement)) && ((V = m.viewport) == null || V.focus()), i()
    }), R = S.useCallback(M => {
        !M || M === 1 / 0 || (window.clearTimeout(A.current), E.current = new Date().getTime(), A.current = window.setTimeout(L, M))
    }, [L]);
    S.useEffect(() => {
        const M = m.viewport;
        if (M) {
            const V = () => {
                    R(C.current), c == null || c()
                },
                z = () => {
                    const $ = new Date().getTime() - E.current;
                    C.current = C.current - $, window.clearTimeout(A.current), l == null || l()
                };
            return M.addEventListener(Uf, z), M.addEventListener(Vf, V), () => {
                M.removeEventListener(Uf, z), M.removeEventListener(Vf, V)
            }
        }
    }, [m.viewport, b, l, c, R]), S.useEffect(() => {
        a && !m.isClosePausedRef.current && R(b)
    }, [a, b, m.isClosePausedRef, R]), S.useEffect(() => (P(), () => k()), [P, k]);
    const H = S.useMemo(() => y ? Yy(y) : null, [y]);
    return m.viewport ? w.jsxs(w.Fragment, {
        children: [H && w.jsx(iT, {
            __scopeToast: n,
            role: "status",
            "aria-live": o === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: H
        }), w.jsx(oT, {
            scope: n,
            onClose: L,
            children: Ss.createPortal(w.jsx(kh.ItemSlot, {
                scope: n,
                children: w.jsx(IC, {
                    asChild: !0,
                    onEscapeKeyDown: tt(s, () => {
                        m.isFocusedToastEscapeKeyDownRef.current || L(), m.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: w.jsx(Jt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": a ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...g,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...t.style
                        },
                        onKeyDown: tt(t.onKeyDown, M => {
                            M.key === "Escape" && (s == null || s(M.nativeEvent), M.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, L()))
                        }),
                        onPointerDown: tt(t.onPointerDown, M => {
                            M.button === 0 && (x.current = {
                                x: M.clientX,
                                y: M.clientY
                            })
                        }),
                        onPointerMove: tt(t.onPointerMove, M => {
                            if (!x.current) return;
                            const V = M.clientX - x.current.x,
                                z = M.clientY - x.current.y,
                                $ = !!_.current,
                                N = ["left", "right"].includes(m.swipeDirection),
                                j = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                                T = N ? j(0, V) : 0,
                                I = N ? 0 : j(0, z),
                                W = M.pointerType === "touch" ? 10 : 2,
                                J = {
                                    x: T,
                                    y: I
                                },
                                ee = {
                                    originalEvent: M,
                                    delta: J
                                };
                            $ ? (_.current = J, Rc(eT, p, ee, {
                                discrete: !1
                            })) : P0(J, m.swipeDirection, W) ? (_.current = J, Rc(JC, u, ee, {
                                discrete: !1
                            }), M.target.setPointerCapture(M.pointerId)) : (Math.abs(V) > W || Math.abs(z) > W) && (x.current = null)
                        }),
                        onPointerUp: tt(t.onPointerUp, M => {
                            const V = _.current,
                                z = M.target;
                            if (z.hasPointerCapture(M.pointerId) && z.releasePointerCapture(M.pointerId), _.current = null, x.current = null, V) {
                                const $ = M.currentTarget,
                                    N = {
                                        originalEvent: M,
                                        delta: V
                                    };
                                P0(V, m.swipeDirection, m.swipeThreshold) ? Rc(nT, f, N, {
                                    discrete: !0
                                }) : Rc(tT, d, N, {
                                    discrete: !0
                                }), $.addEventListener("click", j => j.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), m.viewport)
        })]
    }) : null
}), iT = t => {
    const {
        __scopeToast: e,
        children: n,
        ...o
    } = t, r = Rd(Od, e), [a, i] = S.useState(!1), [s, l] = S.useState(!1);
    return cT(() => i(!0)), S.useEffect(() => {
        const c = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(c)
    }, []), s ? null : w.jsx(Ry, {
        asChild: !0,
        children: w.jsx(Dd, { ...o,
            children: a && w.jsxs(w.Fragment, {
                children: [r.label, " ", n]
            })
        })
    })
}, sT = "ToastTitle", zy = S.forwardRef((t, e) => {
    const {
        __scopeToast: n,
        ...o
    } = t;
    return w.jsx(Jt.div, { ...o,
        ref: e
    })
});
zy.displayName = sT;
var lT = "ToastDescription",
    $y = S.forwardRef((t, e) => {
        const {
            __scopeToast: n,
            ...o
        } = t;
        return w.jsx(Jt.div, { ...o,
            ref: e
        })
    });
$y.displayName = lT;
var Hy = "ToastAction",
    Uy = S.forwardRef((t, e) => {
        const {
            altText: n,
            ...o
        } = t;
        return n.trim() ? w.jsx(Wy, {
            altText: n,
            asChild: !0,
            children: w.jsx(Dh, { ...o,
                ref: e
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Hy}\`. Expected non-empty \`string\`.`), null)
    });
Uy.displayName = Hy;
var Vy = "ToastClose",
    Dh = S.forwardRef((t, e) => {
        const {
            __scopeToast: n,
            ...o
        } = t, r = rT(Vy, n);
        return w.jsx(Wy, {
            asChild: !0,
            children: w.jsx(Jt.button, {
                type: "button",
                ...o,
                ref: e,
                onClick: tt(t.onClick, r.onClose)
            })
        })
    });
Dh.displayName = Vy;
var Wy = S.forwardRef((t, e) => {
    const {
        __scopeToast: n,
        altText: o,
        ...r
    } = t;
    return w.jsx(Jt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": o || void 0,
        ...r,
        ref: e
    })
});

function Yy(t) {
    const e = [];
    return Array.from(t.childNodes).forEach(o => {
        if (o.nodeType === o.TEXT_NODE && o.textContent && e.push(o.textContent), uT(o)) {
            const r = o.ariaHidden || o.hidden || o.style.display === "none",
                a = o.dataset.radixToastAnnounceExclude === "";
            if (!r)
                if (a) {
                    const i = o.dataset.radixToastAnnounceAlt;
                    i && e.push(i)
                } else e.push(...Yy(o))
        }
    }), e
}

function Rc(t, e, n, {
    discrete: o
}) {
    const r = n.originalEvent.currentTarget,
        a = new CustomEvent(t, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    e && r.addEventListener(t, e, {
        once: !0
    }), o ? Nh(r, a) : r.dispatchEvent(a)
}
var P0 = (t, e, n = 0) => {
    const o = Math.abs(t.x),
        r = Math.abs(t.y),
        a = o > r;
    return e === "left" || e === "right" ? a && o > n : !a && r > n
};

function cT(t = () => {}) {
    const e = vo(t);
    wr(() => {
        let n = 0,
            o = 0;
        return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(e)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(o)
        }
    }, [e])
}

function uT(t) {
    return t.nodeType === t.ELEMENT_NODE
}

function dT(t) {
    const e = [],
        n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const r = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) e.push(n.currentNode);
    return e
}

function Cp(t) {
    const e = document.activeElement;
    return t.some(n => n === e ? !0 : (n.focus(), document.activeElement !== e))
}
var pT = jy,
    Gy = By,
    Qy = Iy,
    Xy = zy,
    qy = $y,
    Ky = Uy,
    Zy = Dh;

function Jy(t) {
    var e, n, o = "";
    if (typeof t == "string" || typeof t == "number") o += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var r = t.length;
            for (e = 0; e < r; e++) t[e] && (n = Jy(t[e])) && (o && (o += " "), o += n)
        } else
            for (n in t) t[n] && (o && (o += " "), o += n);
    return o
}

function e1() {
    for (var t, e, n = 0, o = "", r = arguments.length; n < r; n++)(t = arguments[n]) && (e = Jy(t)) && (o && (o += " "), o += e);
    return o
}
const k0 = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t,
    D0 = e1,
    t1 = (t, e) => n => {
        var o;
        if ((e == null ? void 0 : e.variants) == null) return D0(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: r,
            defaultVariants: a
        } = e, i = Object.keys(r).map(c => {
            const u = n == null ? void 0 : n[c],
                p = a == null ? void 0 : a[c];
            if (u === null) return null;
            const d = k0(u) || k0(p);
            return r[c][d]
        }), s = n && Object.entries(n).reduce((c, u) => {
            let [p, d] = u;
            return d === void 0 || (c[p] = d), c
        }, {}), l = e == null || (o = e.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
            let {
                class: p,
                className: d,
                ...f
            } = u;
            return Object.entries(f).every(g => {
                let [m, y] = g;
                return Array.isArray(y) ? y.includes({ ...a,
                    ...s
                }[m]) : { ...a,
                    ...s
                }[m] === y
            }) ? [...c, p, d] : c
        }, []);
        return D0(t, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fT = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    n1 = (...t) => t.filter((e, n, o) => !!e && e.trim() !== "" && o.indexOf(e) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mT = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hT = S.forwardRef(({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: a,
    iconNode: i,
    ...s
}, l) => S.createElement("svg", {
    ref: l,
    ...mT,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: o ? Number(n) * 24 / Number(e) : n,
    className: n1("lucide", r),
    ...s
}, [...i.map(([c, u]) => S.createElement(c, u)), ...Array.isArray(a) ? a : [a]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = (t, e) => {
    const n = S.forwardRef(({
        className: o,
        ...r
    }, a) => S.createElement(hT, {
        ref: a,
        iconNode: e,
        className: n1(`lucide-${fT(t)}`, o),
        ...r
    }));
    return n.displayName = `${t}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vT = Qe("ArrowLeft", [
    ["path", {
        d: "m12 19-7-7 7-7",
        key: "1l729n"
    }],
    ["path", {
        d: "M19 12H5",
        key: "x3x0zl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = Qe("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gT = Qe("ArrowUp", [
    ["path", {
        d: "m5 12 7-7 7 7",
        key: "hav0vg"
    }],
    ["path", {
        d: "M12 19V5",
        key: "x0mq9r"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xT = Qe("CalendarDays", [
    ["path", {
        d: "M8 2v4",
        key: "1cmpym"
    }],
    ["path", {
        d: "M16 2v4",
        key: "4m81vk"
    }],
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        key: "1hopcy"
    }],
    ["path", {
        d: "M3 10h18",
        key: "8toen8"
    }],
    ["path", {
        d: "M8 14h.01",
        key: "6423bh"
    }],
    ["path", {
        d: "M12 14h.01",
        key: "1etili"
    }],
    ["path", {
        d: "M16 14h.01",
        key: "1gbofw"
    }],
    ["path", {
        d: "M8 18h.01",
        key: "lrp35t"
    }],
    ["path", {
        d: "M12 18h.01",
        key: "mhygvu"
    }],
    ["path", {
        d: "M16 18h.01",
        key: "kzsmim"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = Qe("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yT = Qe("Cpu", [
    ["rect", {
        width: "16",
        height: "16",
        x: "4",
        y: "4",
        rx: "2",
        key: "14l7u7"
    }],
    ["rect", {
        width: "6",
        height: "6",
        x: "9",
        y: "9",
        rx: "1",
        key: "5aljv4"
    }],
    ["path", {
        d: "M15 2v2",
        key: "13l42r"
    }],
    ["path", {
        d: "M15 20v2",
        key: "15mkzm"
    }],
    ["path", {
        d: "M2 15h2",
        key: "1gxd5l"
    }],
    ["path", {
        d: "M2 9h2",
        key: "1bbxkp"
    }],
    ["path", {
        d: "M20 15h2",
        key: "19e6y8"
    }],
    ["path", {
        d: "M20 9h2",
        key: "19tzq7"
    }],
    ["path", {
        d: "M9 2v2",
        key: "165o2o"
    }],
    ["path", {
        d: "M9 20v2",
        key: "i2bqo8"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1 = Qe("Database", [
    ["ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3",
        key: "msslwz"
    }],
    ["path", {
        d: "M3 5V19A9 3 0 0 0 21 19V5",
        key: "1wlel7"
    }],
    ["path", {
        d: "M3 12A9 3 0 0 0 21 12",
        key: "mv7ke4"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wT = Qe("Gauge", [
    ["path", {
        d: "m12 14 4-4",
        key: "9kzdfg"
    }],
    ["path", {
        d: "M3.34 19a10 10 0 1 1 17.32 0",
        key: "19p75a"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _T = Qe("Github", [
    ["path", {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
    }],
    ["path", {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "9comsn"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = Qe("Linkedin", [
    ["path", {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f"
    }],
    ["rect", {
        width: "4",
        height: "12",
        x: "2",
        y: "9",
        key: "mk3on5"
    }],
    ["circle", {
        cx: "4",
        cy: "4",
        r: "2",
        key: "bt5ra8"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = Qe("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = Qe("MapPin", [
    ["path", {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
    }],
    ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ST = Qe("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bT = Qe("Moon", [
    ["path", {
        d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
        key: "a7tn18"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CT = Qe("PanelsTopLeft", [
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        key: "afitv7"
    }],
    ["path", {
        d: "M3 9h18",
        key: "1pudct"
    }],
    ["path", {
        d: "M9 21V9",
        key: "1oto5p"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TT = Qe("PenTool", [
    ["path", {
        d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
        key: "nt11vn"
    }],
    ["path", {
        d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
        key: "15qc1e"
    }],
    ["path", {
        d: "m2.3 2.3 7.286 7.286",
        key: "1wuzzi"
    }],
    ["circle", {
        cx: "11",
        cy: "11",
        r: "2",
        key: "xmgehs"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ET = Qe("Phone", [
    ["path", {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AT = Qe("Server", [
    ["rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2",
        key: "ngkwjq"
    }],
    ["rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2",
        key: "iecqi9"
    }],
    ["line", {
        x1: "6",
        x2: "6.01",
        y1: "6",
        y2: "6",
        key: "16zg32"
    }],
    ["line", {
        x1: "6",
        x2: "6.01",
        y1: "18",
        y2: "18",
        key: "nzw8ys"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NT = Qe("Settings", [
    ["path", {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PT = Qe("Sun", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "4",
        key: "4exip2"
    }],
    ["path", {
        d: "M12 2v2",
        key: "tus03m"
    }],
    ["path", {
        d: "M12 20v2",
        key: "1lh1kg"
    }],
    ["path", {
        d: "m4.93 4.93 1.41 1.41",
        key: "149t6j"
    }],
    ["path", {
        d: "m17.66 17.66 1.41 1.41",
        key: "ptbguv"
    }],
    ["path", {
        d: "M2 12h2",
        key: "1t8f8n"
    }],
    ["path", {
        d: "M20 12h2",
        key: "1q8mjw"
    }],
    ["path", {
        d: "m6.34 17.66-1.41 1.41",
        key: "1m8zz5"
    }],
    ["path", {
        d: "m19.07 4.93-1.41 1.41",
        key: "1shlcs"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = Qe("Twitter", [
    ["path", {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kT = Qe("Workflow", [
    ["rect", {
        width: "8",
        height: "8",
        x: "3",
        y: "3",
        rx: "2",
        key: "by2w9f"
    }],
    ["path", {
        d: "M7 11v4a2 2 0 0 0 2 2h4",
        key: "xkn7yn"
    }],
    ["rect", {
        width: "8",
        height: "8",
        x: "13",
        y: "13",
        rx: "2",
        key: "1cgmvn"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = Qe("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    Rh = "-",
    DT = t => {
        const e = OT(t),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: o
            } = t;
        return {
            getClassGroupId: i => {
                const s = i.split(Rh);
                return s[0] === "" && s.length !== 1 && s.shift(), d1(s, e) || RT(i)
            },
            getConflictingClassGroupIds: (i, s) => {
                const l = n[i] || [];
                return s && o[i] ? [...l, ...o[i]] : l
            }
        }
    },
    d1 = (t, e) => {
        var i;
        if (t.length === 0) return e.classGroupId;
        const n = t[0],
            o = e.nextPart.get(n),
            r = o ? d1(t.slice(1), o) : void 0;
        if (r) return r;
        if (e.validators.length === 0) return;
        const a = t.join(Rh);
        return (i = e.validators.find(({
            validator: s
        }) => s(a))) == null ? void 0 : i.classGroupId
    },
    R0 = /^\[(.+)\]$/,
    RT = t => {
        if (R0.test(t)) {
            const e = R0.exec(t)[1],
                n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    OT = t => {
        const {
            theme: e,
            prefix: n
        } = t, o = {
            nextPart: new Map,
            validators: []
        };
        return jT(Object.entries(t.classGroups), n).forEach(([a, i]) => {
            Yf(i, o, a, e)
        }), o
    },
    Yf = (t, e, n, o) => {
        t.forEach(r => {
            if (typeof r == "string") {
                const a = r === "" ? e : O0(e, r);
                a.classGroupId = n;
                return
            }
            if (typeof r == "function") {
                if (MT(r)) {
                    Yf(r(o), e, n, o);
                    return
                }
                e.validators.push({
                    validator: r,
                    classGroupId: n
                });
                return
            }
            Object.entries(r).forEach(([a, i]) => {
                Yf(i, O0(e, a), n, o)
            })
        })
    },
    O0 = (t, e) => {
        let n = t;
        return e.split(Rh).forEach(o => {
            n.nextPart.has(o) || n.nextPart.set(o, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(o)
        }), n
    },
    MT = t => t.isThemeGetter,
    jT = (t, e) => e ? t.map(([n, o]) => {
        const r = o.map(a => typeof a == "string" ? e + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [e + i, s])) : a);
        return [n, r]
    }) : t,
    FT = t => {
        if (t < 1) return {
            get: () => {},
            set: () => {}
        };
        let e = 0,
            n = new Map,
            o = new Map;
        const r = (a, i) => {
            n.set(a, i), e++, e > t && (e = 0, o = n, n = new Map)
        };
        return {
            get(a) {
                let i = n.get(a);
                if (i !== void 0) return i;
                if ((i = o.get(a)) !== void 0) return r(a, i), i
            },
            set(a, i) {
                n.has(a) ? n.set(a, i) : r(a, i)
            }
        }
    },
    p1 = "!",
    BT = t => {
        const {
            separator: e,
            experimentalParseClassName: n
        } = t, o = e.length === 1, r = e[0], a = e.length, i = s => {
            const l = [];
            let c = 0,
                u = 0,
                p;
            for (let y = 0; y < s.length; y++) {
                let v = s[y];
                if (c === 0) {
                    if (v === r && (o || s.slice(y, y + a) === e)) {
                        l.push(s.slice(u, y)), u = y + a;
                        continue
                    }
                    if (v === "/") {
                        p = y;
                        continue
                    }
                }
                v === "[" ? c++ : v === "]" && c--
            }
            const d = l.length === 0 ? s : s.substring(u),
                f = d.startsWith(p1),
                g = f ? d.substring(1) : d,
                m = p && p > u ? p - u : void 0;
            return {
                modifiers: l,
                hasImportantModifier: f,
                baseClassName: g,
                maybePostfixModifierPosition: m
            }
        };
        return n ? s => n({
            className: s,
            parseClassName: i
        }) : i
    },
    LT = t => {
        if (t.length <= 1) return t;
        const e = [];
        let n = [];
        return t.forEach(o => {
            o[0] === "[" ? (e.push(...n.sort(), o), n = []) : n.push(o)
        }), e.push(...n.sort()), e
    },
    IT = t => ({
        cache: FT(t.cacheSize),
        parseClassName: BT(t),
        ...DT(t)
    }),
    zT = /\s+/,
    $T = (t, e) => {
        const {
            parseClassName: n,
            getClassGroupId: o,
            getConflictingClassGroupIds: r
        } = e, a = [], i = t.trim().split(zT);
        let s = "";
        for (let l = i.length - 1; l >= 0; l -= 1) {
            const c = i[l],
                {
                    modifiers: u,
                    hasImportantModifier: p,
                    baseClassName: d,
                    maybePostfixModifierPosition: f
                } = n(c);
            let g = !!f,
                m = o(g ? d.substring(0, f) : d);
            if (!m) {
                if (!g) {
                    s = c + (s.length > 0 ? " " + s : s);
                    continue
                }
                if (m = o(d), !m) {
                    s = c + (s.length > 0 ? " " + s : s);
                    continue
                }
                g = !1
            }
            const y = LT(u).join(":"),
                v = p ? y + p1 : y,
                h = v + m;
            if (a.includes(h)) continue;
            a.push(h);
            const x = r(m, g);
            for (let _ = 0; _ < x.length; ++_) {
                const b = x[_];
                a.push(v + b)
            }
            s = c + (s.length > 0 ? " " + s : s)
        }
        return s
    };

function HT() {
    let t = 0,
        e, n, o = "";
    for (; t < arguments.length;)(e = arguments[t++]) && (n = f1(e)) && (o && (o += " "), o += n);
    return o
}
const f1 = t => {
    if (typeof t == "string") return t;
    let e, n = "";
    for (let o = 0; o < t.length; o++) t[o] && (e = f1(t[o])) && (n && (n += " "), n += e);
    return n
};

function UT(t, ...e) {
    let n, o, r, a = i;

    function i(l) {
        const c = e.reduce((u, p) => p(u), t());
        return n = IT(c), o = n.cache.get, r = n.cache.set, a = s, s(l)
    }

    function s(l) {
        const c = o(l);
        if (c) return c;
        const u = $T(l, n);
        return r(l, u), u
    }
    return function() {
        return a(HT.apply(null, arguments))
    }
}
const Oe = t => {
        const e = n => n[t] || [];
        return e.isThemeGetter = !0, e
    },
    m1 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    VT = /^\d+\/\d+$/,
    WT = new Set(["px", "full", "screen"]),
    YT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    GT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    QT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    XT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    qT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    rr = t => Bi(t) || WT.has(t) || VT.test(t),
    Nr = t => bs(t, "length", rE),
    Bi = t => !!t && !Number.isNaN(Number(t)),
    Tp = t => bs(t, "number", Bi),
    Ls = t => !!t && Number.isInteger(Number(t)),
    KT = t => t.endsWith("%") && Bi(t.slice(0, -1)),
    ie = t => m1.test(t),
    Pr = t => YT.test(t),
    ZT = new Set(["length", "size", "percentage"]),
    JT = t => bs(t, ZT, h1),
    eE = t => bs(t, "position", h1),
    tE = new Set(["image", "url"]),
    nE = t => bs(t, tE, iE),
    oE = t => bs(t, "", aE),
    Is = () => !0,
    bs = (t, e, n) => {
        const o = m1.exec(t);
        return o ? o[1] ? typeof e == "string" ? o[1] === e : e.has(o[1]) : n(o[2]) : !1
    },
    rE = t => GT.test(t) && !QT.test(t),
    h1 = () => !1,
    aE = t => XT.test(t),
    iE = t => qT.test(t),
    sE = () => {
        const t = Oe("colors"),
            e = Oe("spacing"),
            n = Oe("blur"),
            o = Oe("brightness"),
            r = Oe("borderColor"),
            a = Oe("borderRadius"),
            i = Oe("borderSpacing"),
            s = Oe("borderWidth"),
            l = Oe("contrast"),
            c = Oe("grayscale"),
            u = Oe("hueRotate"),
            p = Oe("invert"),
            d = Oe("gap"),
            f = Oe("gradientColorStops"),
            g = Oe("gradientColorStopPositions"),
            m = Oe("inset"),
            y = Oe("margin"),
            v = Oe("opacity"),
            h = Oe("padding"),
            x = Oe("saturate"),
            _ = Oe("scale"),
            b = Oe("sepia"),
            E = Oe("skew"),
            C = Oe("space"),
            A = Oe("translate"),
            P = () => ["auto", "contain", "none"],
            k = () => ["auto", "hidden", "clip", "visible", "scroll"],
            L = () => ["auto", ie, e],
            R = () => [ie, e],
            H = () => ["", rr, Nr],
            M = () => ["auto", Bi, ie],
            V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            z = () => ["solid", "dashed", "dotted", "double", "none"],
            $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            j = () => ["", "0", ie],
            T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            I = () => [Bi, ie];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Is],
                spacing: [rr, Nr],
                blur: ["none", "", Pr, ie],
                brightness: I(),
                borderColor: [t],
                borderRadius: ["none", "", "full", Pr, ie],
                borderSpacing: R(),
                borderWidth: H(),
                contrast: I(),
                grayscale: j(),
                hueRotate: I(),
                invert: j(),
                gap: R(),
                gradientColorStops: [t],
                gradientColorStopPositions: [KT, Nr],
                inset: L(),
                margin: L(),
                opacity: I(),
                padding: R(),
                saturate: I(),
                scale: I(),
                sepia: j(),
                skew: I(),
                space: R(),
                translate: R()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", ie]
                }],
                container: ["container"],
                columns: [{
                    columns: [Pr]
                }],
                "break-after": [{
                    "break-after": T()
                }],
                "break-before": [{
                    "break-before": T()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...V(), ie]
                }],
                overflow: [{
                    overflow: k()
                }],
                "overflow-x": [{
                    "overflow-x": k()
                }],
                "overflow-y": [{
                    "overflow-y": k()
                }],
                overscroll: [{
                    overscroll: P()
                }],
                "overscroll-x": [{
                    "overscroll-x": P()
                }],
                "overscroll-y": [{
                    "overscroll-y": P()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [m]
                }],
                "inset-x": [{
                    "inset-x": [m]
                }],
                "inset-y": [{
                    "inset-y": [m]
                }],
                start: [{
                    start: [m]
                }],
                end: [{
                    end: [m]
                }],
                top: [{
                    top: [m]
                }],
                right: [{
                    right: [m]
                }],
                bottom: [{
                    bottom: [m]
                }],
                left: [{
                    left: [m]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Ls, ie]
                }],
                basis: [{
                    basis: L()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", ie]
                }],
                grow: [{
                    grow: j()
                }],
                shrink: [{
                    shrink: j()
                }],
                order: [{
                    order: ["first", "last", "none", Ls, ie]
                }],
                "grid-cols": [{
                    "grid-cols": [Is]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Ls, ie]
                    }, ie]
                }],
                "col-start": [{
                    "col-start": M()
                }],
                "col-end": [{
                    "col-end": M()
                }],
                "grid-rows": [{
                    "grid-rows": [Is]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Ls, ie]
                    }, ie]
                }],
                "row-start": [{
                    "row-start": M()
                }],
                "row-end": [{
                    "row-end": M()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", ie]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", ie]
                }],
                gap: [{
                    gap: [d]
                }],
                "gap-x": [{
                    "gap-x": [d]
                }],
                "gap-y": [{
                    "gap-y": [d]
                }],
                "justify-content": [{
                    justify: ["normal", ...N()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...N(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...N(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [h]
                }],
                px: [{
                    px: [h]
                }],
                py: [{
                    py: [h]
                }],
                ps: [{
                    ps: [h]
                }],
                pe: [{
                    pe: [h]
                }],
                pt: [{
                    pt: [h]
                }],
                pr: [{
                    pr: [h]
                }],
                pb: [{
                    pb: [h]
                }],
                pl: [{
                    pl: [h]
                }],
                m: [{
                    m: [y]
                }],
                mx: [{
                    mx: [y]
                }],
                my: [{
                    my: [y]
                }],
                ms: [{
                    ms: [y]
                }],
                me: [{
                    me: [y]
                }],
                mt: [{
                    mt: [y]
                }],
                mr: [{
                    mr: [y]
                }],
                mb: [{
                    mb: [y]
                }],
                ml: [{
                    ml: [y]
                }],
                "space-x": [{
                    "space-x": [C]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [C]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ie, e]
                }],
                "min-w": [{
                    "min-w": [ie, e, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [ie, e, "none", "full", "min", "max", "fit", "prose", {
                        screen: [Pr]
                    }, Pr]
                }],
                h: [{
                    h: [ie, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [ie, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [ie, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [ie, e, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", Pr, Nr]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Tp]
                }],
                "font-family": [{
                    font: [Is]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ie]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Bi, Tp]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", rr, ie]
                }],
                "list-image": [{
                    "list-image": ["none", ie]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", ie]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [t]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [v]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [t]
                }],
                "text-opacity": [{
                    "text-opacity": [v]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...z(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", rr, Nr]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", rr, ie]
                }],
                "text-decoration-color": [{
                    decoration: [t]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: R()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ie]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", ie]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [v]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...V(), eE]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", JT]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, nE]
                }],
                "bg-color": [{
                    bg: [t]
                }],
                "gradient-from-pos": [{
                    from: [g]
                }],
                "gradient-via-pos": [{
                    via: [g]
                }],
                "gradient-to-pos": [{
                    to: [g]
                }],
                "gradient-from": [{
                    from: [f]
                }],
                "gradient-via": [{
                    via: [f]
                }],
                "gradient-to": [{
                    to: [f]
                }],
                rounded: [{
                    rounded: [a]
                }],
                "rounded-s": [{
                    "rounded-s": [a]
                }],
                "rounded-e": [{
                    "rounded-e": [a]
                }],
                "rounded-t": [{
                    "rounded-t": [a]
                }],
                "rounded-r": [{
                    "rounded-r": [a]
                }],
                "rounded-b": [{
                    "rounded-b": [a]
                }],
                "rounded-l": [{
                    "rounded-l": [a]
                }],
                "rounded-ss": [{
                    "rounded-ss": [a]
                }],
                "rounded-se": [{
                    "rounded-se": [a]
                }],
                "rounded-ee": [{
                    "rounded-ee": [a]
                }],
                "rounded-es": [{
                    "rounded-es": [a]
                }],
                "rounded-tl": [{
                    "rounded-tl": [a]
                }],
                "rounded-tr": [{
                    "rounded-tr": [a]
                }],
                "rounded-br": [{
                    "rounded-br": [a]
                }],
                "rounded-bl": [{
                    "rounded-bl": [a]
                }],
                "border-w": [{
                    border: [s]
                }],
                "border-w-x": [{
                    "border-x": [s]
                }],
                "border-w-y": [{
                    "border-y": [s]
                }],
                "border-w-s": [{
                    "border-s": [s]
                }],
                "border-w-e": [{
                    "border-e": [s]
                }],
                "border-w-t": [{
                    "border-t": [s]
                }],
                "border-w-r": [{
                    "border-r": [s]
                }],
                "border-w-b": [{
                    "border-b": [s]
                }],
                "border-w-l": [{
                    "border-l": [s]
                }],
                "border-opacity": [{
                    "border-opacity": [v]
                }],
                "border-style": [{
                    border: [...z(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [s]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [s]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [v]
                }],
                "divide-style": [{
                    divide: z()
                }],
                "border-color": [{
                    border: [r]
                }],
                "border-color-x": [{
                    "border-x": [r]
                }],
                "border-color-y": [{
                    "border-y": [r]
                }],
                "border-color-t": [{
                    "border-t": [r]
                }],
                "border-color-r": [{
                    "border-r": [r]
                }],
                "border-color-b": [{
                    "border-b": [r]
                }],
                "border-color-l": [{
                    "border-l": [r]
                }],
                "divide-color": [{
                    divide: [r]
                }],
                "outline-style": [{
                    outline: ["", ...z()]
                }],
                "outline-offset": [{
                    "outline-offset": [rr, ie]
                }],
                "outline-w": [{
                    outline: [rr, Nr]
                }],
                "outline-color": [{
                    outline: [t]
                }],
                "ring-w": [{
                    ring: H()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [t]
                }],
                "ring-opacity": [{
                    "ring-opacity": [v]
                }],
                "ring-offset-w": [{
                    "ring-offset": [rr, Nr]
                }],
                "ring-offset-color": [{
                    "ring-offset": [t]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", Pr, oE]
                }],
                "shadow-color": [{
                    shadow: [Is]
                }],
                opacity: [{
                    opacity: [v]
                }],
                "mix-blend": [{
                    "mix-blend": [...$(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": $()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [o]
                }],
                contrast: [{
                    contrast: [l]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", Pr, ie]
                }],
                grayscale: [{
                    grayscale: [c]
                }],
                "hue-rotate": [{
                    "hue-rotate": [u]
                }],
                invert: [{
                    invert: [p]
                }],
                saturate: [{
                    saturate: [x]
                }],
                sepia: [{
                    sepia: [b]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [o]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [l]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [c]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [u]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [p]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [v]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [x]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [b]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [i]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [i]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [i]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ie]
                }],
                duration: [{
                    duration: I()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", ie]
                }],
                delay: [{
                    delay: I()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", ie]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [_]
                }],
                "scale-x": [{
                    "scale-x": [_]
                }],
                "scale-y": [{
                    "scale-y": [_]
                }],
                rotate: [{
                    rotate: [Ls, ie]
                }],
                "translate-x": [{
                    "translate-x": [A]
                }],
                "translate-y": [{
                    "translate-y": [A]
                }],
                "skew-x": [{
                    "skew-x": [E]
                }],
                "skew-y": [{
                    "skew-y": [E]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ie]
                }],
                accent: [{
                    accent: ["auto", t]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ie]
                }],
                "caret-color": [{
                    caret: [t]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": R()
                }],
                "scroll-mx": [{
                    "scroll-mx": R()
                }],
                "scroll-my": [{
                    "scroll-my": R()
                }],
                "scroll-ms": [{
                    "scroll-ms": R()
                }],
                "scroll-me": [{
                    "scroll-me": R()
                }],
                "scroll-mt": [{
                    "scroll-mt": R()
                }],
                "scroll-mr": [{
                    "scroll-mr": R()
                }],
                "scroll-mb": [{
                    "scroll-mb": R()
                }],
                "scroll-ml": [{
                    "scroll-ml": R()
                }],
                "scroll-p": [{
                    "scroll-p": R()
                }],
                "scroll-px": [{
                    "scroll-px": R()
                }],
                "scroll-py": [{
                    "scroll-py": R()
                }],
                "scroll-ps": [{
                    "scroll-ps": R()
                }],
                "scroll-pe": [{
                    "scroll-pe": R()
                }],
                "scroll-pt": [{
                    "scroll-pt": R()
                }],
                "scroll-pr": [{
                    "scroll-pr": R()
                }],
                "scroll-pb": [{
                    "scroll-pb": R()
                }],
                "scroll-pl": [{
                    "scroll-pl": R()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", ie]
                }],
                fill: [{
                    fill: [t, "none"]
                }],
                "stroke-w": [{
                    stroke: [rr, Nr, Tp]
                }],
                stroke: [{
                    stroke: [t, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    lE = UT(sE);

function Er(...t) {
    return lE(e1(t))
}
const cE = pT,
    v1 = S.forwardRef(({
        className: t,
        ...e
    }, n) => w.jsx(Gy, {
        "data-lov-id": "src/components/ui/toast.tsx:14:2",
        "data-lov-name": "ToastPrimitives.Viewport",
        "data-component-path": "src/components/ui/toast.tsx",
        "data-component-line": "14",
        "data-component-file": "toast.tsx",
        "data-component-name": "ToastPrimitives.Viewport",
        "data-component-content": "%7B%7D",
        ref: n,
        className: Er("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
        ...e
    }));
v1.displayName = Gy.displayName;
const uE = t1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    g1 = S.forwardRef(({
        className: t,
        variant: e,
        ...n
    }, o) => w.jsx(Qy, {
        "data-lov-id": "src/components/ui/toast.tsx:47:4",
        "data-lov-name": "ToastPrimitives.Root",
        "data-component-path": "src/components/ui/toast.tsx",
        "data-component-line": "47",
        "data-component-file": "toast.tsx",
        "data-component-name": "ToastPrimitives.Root",
        "data-component-content": "%7B%7D",
        ref: o,
        className: Er(uE({
            variant: e
        }), t),
        ...n
    }));
g1.displayName = Qy.displayName;
const dE = S.forwardRef(({
    className: t,
    ...e
}, n) => w.jsx(Ky, {
    "data-lov-id": "src/components/ui/toast.tsx:60:2",
    "data-lov-name": "ToastPrimitives.Action",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "60",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Action",
    "data-component-content": "%7B%7D",
    ref: n,
    className: Er("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
dE.displayName = Ky.displayName;
const x1 = S.forwardRef(({
    className: t,
    ...e
}, n) => w.jsx(Zy, {
    "data-lov-id": "src/components/ui/toast.tsx:75:2",
    "data-lov-name": "ToastPrimitives.Close",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "75",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Close",
    "data-component-content": "%7B%7D",
    ref: n,
    className: Er("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: w.jsx(u1, {
        "data-lov-id": "src/components/ui/toast.tsx:84:4",
        "data-lov-name": "X",
        "data-component-path": "src/components/ui/toast.tsx",
        "data-component-line": "84",
        "data-component-file": "toast.tsx",
        "data-component-name": "X",
        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
        className: "h-4 w-4"
    })
}));
x1.displayName = Zy.displayName;
const y1 = S.forwardRef(({
    className: t,
    ...e
}, n) => w.jsx(Xy, {
    "data-lov-id": "src/components/ui/toast.tsx:93:2",
    "data-lov-name": "ToastPrimitives.Title",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "93",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Title",
    "data-component-content": "%7B%7D",
    ref: n,
    className: Er("text-sm font-semibold", t),
    ...e
}));
y1.displayName = Xy.displayName;
const w1 = S.forwardRef(({
    className: t,
    ...e
}, n) => w.jsx(qy, {
    "data-lov-id": "src/components/ui/toast.tsx:105:2",
    "data-lov-name": "ToastPrimitives.Description",
    "data-component-path": "src/components/ui/toast.tsx",
    "data-component-line": "105",
    "data-component-file": "toast.tsx",
    "data-component-name": "ToastPrimitives.Description",
    "data-component-content": "%7B%7D",
    ref: n,
    className: Er("text-sm opacity-90", t),
    ...e
}));
w1.displayName = qy.displayName;

function pE() {
    const {
        toasts: t
    } = Cy();
    return w.jsxs(cE, {
        "data-lov-id": "src/components/ui/toaster.tsx:15:4",
        "data-lov-name": "ToastProvider",
        "data-component-path": "src/components/ui/toaster.tsx",
        "data-component-line": "15",
        "data-component-file": "toaster.tsx",
        "data-component-name": "ToastProvider",
        "data-component-content": "%7B%7D",
        children: [t.map(function({
            id: e,
            title: n,
            description: o,
            action: r,
            ...a
        }) {
            return w.jsxs(g1, {
                "data-lov-id": "src/components/ui/toaster.tsx:18:10",
                "data-lov-name": "Toast",
                "data-component-path": "src/components/ui/toaster.tsx",
                "data-component-line": "18",
                "data-component-file": "toaster.tsx",
                "data-component-name": "Toast",
                "data-component-content": "%7B%7D",
                ...a,
                children: [w.jsxs("div", {
                    "data-lov-id": "src/components/ui/toaster.tsx:19:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ui/toaster.tsx",
                    "data-component-line": "19",
                    "data-component-file": "toaster.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20gap-1%22%7D",
                    className: "grid gap-1",
                    children: [n && w.jsx(y1, {
                        "data-lov-id": "src/components/ui/toaster.tsx:20:24",
                        "data-lov-name": "ToastTitle",
                        "data-component-path": "src/components/ui/toaster.tsx",
                        "data-component-line": "20",
                        "data-component-file": "toaster.tsx",
                        "data-component-name": "ToastTitle",
                        "data-component-content": "%7B%7D",
                        children: n
                    }), o && w.jsx(w1, {
                        "data-lov-id": "src/components/ui/toaster.tsx:22:16",
                        "data-lov-name": "ToastDescription",
                        "data-component-path": "src/components/ui/toaster.tsx",
                        "data-component-line": "22",
                        "data-component-file": "toaster.tsx",
                        "data-component-name": "ToastDescription",
                        "data-component-content": "%7B%7D",
                        children: o
                    })]
                }), r, w.jsx(x1, {
                    "data-lov-id": "src/components/ui/toaster.tsx:26:12",
                    "data-lov-name": "ToastClose",
                    "data-component-path": "src/components/ui/toaster.tsx",
                    "data-component-line": "26",
                    "data-component-file": "toaster.tsx",
                    "data-component-name": "ToastClose",
                    "data-component-content": "%7B%7D"
                })]
            }, e)
        }), w.jsx(v1, {
            "data-lov-id": "src/components/ui/toaster.tsx:30:6",
            "data-lov-name": "ToastViewport",
            "data-component-path": "src/components/ui/toaster.tsx",
            "data-component-line": "30",
            "data-component-file": "toaster.tsx",
            "data-component-name": "ToastViewport",
            "data-component-content": "%7B%7D"
        })]
    })
}
var M0 = ["light", "dark"],
    fE = "(prefers-color-scheme: dark)",
    mE = S.createContext(void 0),
    hE = {
        setTheme: t => {},
        themes: []
    },
    vE = () => {
        var t;
        return (t = S.useContext(mE)) != null ? t : hE
    };
S.memo(({
    forcedTheme: t,
    storageKey: e,
    attribute: n,
    enableSystem: o,
    enableColorScheme: r,
    defaultTheme: a,
    value: i,
    attrs: s,
    nonce: l
}) => {
    let c = a === "system",
        u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map(g=>`'${g}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        p = r ? M0.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        d = (g, m = !1, y = !0) => {
            let v = i ? i[g] : g,
                h = m ? g + "|| ''" : `'${v}'`,
                x = "";
            return r && y && !m && M0.includes(g) && (x += `d.style.colorScheme = '${g}';`), n === "class" ? m || v ? x += `c.add(${h})` : x += "null" : v && (x += `d[s](n,${h})`), x
        },
        f = t ? `!function(){${u}${d(t)}}()` : o ? `!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${fE}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${d(i?"x[e]":"e",!0)}}${c?"":"else{"+d(a,!1,!1)+"}"}${p}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${d(i?"x[e]":"e",!0)}}else{${d(a,!1,!1)};}${p}}catch(t){}}();`;
    return S.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
});
var gE = t => {
        switch (t) {
            case "success":
                return wE;
            case "info":
                return SE;
            case "warning":
                return _E;
            case "error":
                return bE;
            default:
                return null
        }
    },
    xE = Array(12).fill(0),
    yE = ({
        visible: t
    }) => F.createElement("div", {
        className: "sonner-loading-wrapper",
        "data-visible": t
    }, F.createElement("div", {
        className: "sonner-spinner"
    }, xE.map((e, n) => F.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${n}`
    })))),
    wE = F.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, F.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    _E = F.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, F.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    SE = F.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, F.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    bE = F.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, F.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    CE = () => {
        let [t, e] = F.useState(document.hidden);
        return F.useEffect(() => {
            let n = () => {
                e(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), t
    },
    Gf = 1,
    TE = class {
        constructor() {
            this.subscribe = t => (this.subscribers.push(t), () => {
                let e = this.subscribers.indexOf(t);
                this.subscribers.splice(e, 1)
            }), this.publish = t => {
                this.subscribers.forEach(e => e(t))
            }, this.addToast = t => {
                this.publish(t), this.toasts = [...this.toasts, t]
            }, this.create = t => {
                var e;
                let {
                    message: n,
                    ...o
                } = t, r = typeof(t == null ? void 0 : t.id) == "number" || ((e = t.id) == null ? void 0 : e.length) > 0 ? t.id : Gf++, a = this.toasts.find(s => s.id === r), i = t.dismissible === void 0 ? !0 : t.dismissible;
                return a ? this.toasts = this.toasts.map(s => s.id === r ? (this.publish({ ...s,
                    ...t,
                    id: r,
                    title: n
                }), { ...s,
                    ...t,
                    id: r,
                    dismissible: i,
                    title: n
                }) : s) : this.addToast({
                    title: n,
                    ...o,
                    dismissible: i,
                    id: r
                }), r
            }, this.dismiss = t => (t || this.toasts.forEach(e => {
                this.subscribers.forEach(n => n({
                    id: e.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(e => e({
                id: t,
                dismiss: !0
            })), t), this.message = (t, e) => this.create({ ...e,
                message: t
            }), this.error = (t, e) => this.create({ ...e,
                message: t,
                type: "error"
            }), this.success = (t, e) => this.create({ ...e,
                type: "success",
                message: t
            }), this.info = (t, e) => this.create({ ...e,
                type: "info",
                message: t
            }), this.warning = (t, e) => this.create({ ...e,
                type: "warning",
                message: t
            }), this.loading = (t, e) => this.create({ ...e,
                type: "loading",
                message: t
            }), this.promise = (t, e) => {
                if (!e) return;
                let n;
                e.loading !== void 0 && (n = this.create({ ...e,
                    promise: t,
                    type: "loading",
                    message: e.loading,
                    description: typeof e.description != "function" ? e.description : void 0
                }));
                let o = t instanceof Promise ? t : t(),
                    r = n !== void 0;
                return o.then(async a => {
                    if (AE(a) && !a.ok) {
                        r = !1;
                        let i = typeof e.error == "function" ? await e.error(`HTTP error! status: ${a.status}`) : e.error,
                            s = typeof e.description == "function" ? await e.description(`HTTP error! status: ${a.status}`) : e.description;
                        this.create({
                            id: n,
                            type: "error",
                            message: i,
                            description: s
                        })
                    } else if (e.success !== void 0) {
                        r = !1;
                        let i = typeof e.success == "function" ? await e.success(a) : e.success,
                            s = typeof e.description == "function" ? await e.description(a) : e.description;
                        this.create({
                            id: n,
                            type: "success",
                            message: i,
                            description: s
                        })
                    }
                }).catch(async a => {
                    if (e.error !== void 0) {
                        r = !1;
                        let i = typeof e.error == "function" ? await e.error(a) : e.error,
                            s = typeof e.description == "function" ? await e.description(a) : e.description;
                        this.create({
                            id: n,
                            type: "error",
                            message: i,
                            description: s
                        })
                    }
                }).finally(() => {
                    var a;
                    r && (this.dismiss(n), n = void 0), (a = e.finally) == null || a.call(e)
                }), n
            }, this.custom = (t, e) => {
                let n = (e == null ? void 0 : e.id) || Gf++;
                return this.create({
                    jsx: t(n),
                    id: n,
                    ...e
                }), n
            }, this.subscribers = [], this.toasts = []
        }
    },
    On = new TE,
    EE = (t, e) => {
        let n = (e == null ? void 0 : e.id) || Gf++;
        return On.addToast({
            title: t,
            ...e,
            id: n
        }), n
    },
    AE = t => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number",
    NE = EE,
    PE = () => On.toasts;
Object.assign(NE, {
    success: On.success,
    info: On.info,
    warning: On.warning,
    error: On.error,
    custom: On.custom,
    message: On.message,
    promise: On.promise,
    dismiss: On.dismiss,
    loading: On.loading
}, {
    getHistory: PE
});

function kE(t, {
    insertAt: e
} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        o = document.createElement("style");
    o.type = "text/css", e === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t))
}
kE(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function Oc(t) {
    return t.label !== void 0
}
var DE = 3,
    RE = "32px",
    OE = 4e3,
    ME = 356,
    jE = 14,
    FE = 20,
    BE = 200;

function LE(...t) {
    return t.filter(Boolean).join(" ")
}
var IE = t => {
    var e, n, o, r, a, i, s, l, c, u;
    let {
        invert: p,
        toast: d,
        unstyled: f,
        interacting: g,
        setHeights: m,
        visibleToasts: y,
        heights: v,
        index: h,
        toasts: x,
        expanded: _,
        removeToast: b,
        defaultRichColors: E,
        closeButton: C,
        style: A,
        cancelButtonStyle: P,
        actionButtonStyle: k,
        className: L = "",
        descriptionClassName: R = "",
        duration: H,
        position: M,
        gap: V,
        loadingIcon: z,
        expandByDefault: $,
        classNames: N,
        icons: j,
        closeButtonAriaLabel: T = "Close toast",
        pauseWhenPageIsHidden: I,
        cn: W
    } = t, [J, ee] = F.useState(!1), [ye, te] = F.useState(!1), [xe, Fe] = F.useState(!1), [Re, Pt] = F.useState(!1), [dt, rt] = F.useState(0), [ae, Te] = F.useState(0), vt = F.useRef(null), Xe = F.useRef(null), D = h === 0, kt = h + 1 <= y, Ee = d.type, en = d.dismissible !== !1, ze = d.className || "", go = d.descriptionClassName || "", kn = F.useMemo(() => v.findIndex(K => K.toastId === d.id) || 0, [v, d.id]), tr = F.useMemo(() => {
        var K;
        return (K = d.closeButton) != null ? K : C
    }, [d.closeButton, C]), at = F.useMemo(() => d.duration || H || OE, [d.duration, H]), Zn = F.useRef(0), Ce = F.useRef(0), vn = F.useRef(0), gt = F.useRef(null), [Jn, wa] = M.split("-"), $e = F.useMemo(() => v.reduce((K, Q, ve) => ve >= kn ? K : K + Q.height, 0), [v, kn]), _a = CE(), xo = d.invert || p, Ro = Ee === "loading";
    Ce.current = F.useMemo(() => kn * V + $e, [kn, $e]), F.useEffect(() => {
        ee(!0)
    }, []), F.useLayoutEffect(() => {
        if (!J) return;
        let K = Xe.current,
            Q = K.style.height;
        K.style.height = "auto";
        let ve = K.getBoundingClientRect().height;
        K.style.height = Q, Te(ve), m(qe => qe.find(Ke => Ke.toastId === d.id) ? qe.map(Ke => Ke.toastId === d.id ? { ...Ke,
            height: ve
        } : Ke) : [{
            toastId: d.id,
            height: ve,
            position: d.position
        }, ...qe])
    }, [J, d.title, d.description, m, d.id]);
    let tn = F.useCallback(() => {
        te(!0), rt(Ce.current), m(K => K.filter(Q => Q.toastId !== d.id)), setTimeout(() => {
            b(d)
        }, BE)
    }, [d, b, m, Ce]);
    F.useEffect(() => {
        if (d.promise && Ee === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
        let K, Q = at;
        return _ || g || I && _a ? (() => {
            if (vn.current < Zn.current) {
                let ve = new Date().getTime() - Zn.current;
                Q = Q - ve
            }
            vn.current = new Date().getTime()
        })() : Q !== 1 / 0 && (Zn.current = new Date().getTime(), K = setTimeout(() => {
            var ve;
            (ve = d.onAutoClose) == null || ve.call(d, d), tn()
        }, Q)), () => clearTimeout(K)
    }, [_, g, $, d, at, tn, d.promise, Ee, I, _a]), F.useEffect(() => {
        let K = Xe.current;
        if (K) {
            let Q = K.getBoundingClientRect().height;
            return Te(Q), m(ve => [{
                toastId: d.id,
                height: Q,
                position: d.position
            }, ...ve]), () => m(ve => ve.filter(qe => qe.toastId !== d.id))
        }
    }, [m, d.id]), F.useEffect(() => {
        d.delete && tn()
    }, [tn, d.delete]);

    function Oo() {
        return j != null && j.loading ? F.createElement("div", {
            className: "sonner-loader",
            "data-visible": Ee === "loading"
        }, j.loading) : z ? F.createElement("div", {
            className: "sonner-loader",
            "data-visible": Ee === "loading"
        }, z) : F.createElement(yE, {
            visible: Ee === "loading"
        })
    }
    return F.createElement("li", {
        "aria-live": d.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: Xe,
        className: W(L, ze, N == null ? void 0 : N.toast, (e = d == null ? void 0 : d.classNames) == null ? void 0 : e.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[Ee], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Ee]),
        "data-sonner-toast": "",
        "data-rich-colors": (o = d.richColors) != null ? o : E,
        "data-styled": !(d.jsx || d.unstyled || f),
        "data-mounted": J,
        "data-promise": !!d.promise,
        "data-removed": ye,
        "data-visible": kt,
        "data-y-position": Jn,
        "data-x-position": wa,
        "data-index": h,
        "data-front": D,
        "data-swiping": xe,
        "data-dismissible": en,
        "data-type": Ee,
        "data-invert": xo,
        "data-swipe-out": Re,
        "data-expanded": !!(_ || $ && J),
        style: {
            "--index": h,
            "--toasts-before": h,
            "--z-index": x.length - h,
            "--offset": `${ye?dt:Ce.current}px`,
            "--initial-height": $ ? "auto" : `${ae}px`,
            ...A,
            ...d.style
        },
        onPointerDown: K => {
            Ro || !en || (vt.current = new Date, rt(Ce.current), K.target.setPointerCapture(K.pointerId), K.target.tagName !== "BUTTON" && (Fe(!0), gt.current = {
                x: K.clientX,
                y: K.clientY
            }))
        },
        onPointerUp: () => {
            var K, Q, ve, qe;
            if (Re || !en) return;
            gt.current = null;
            let Ke = Number(((K = Xe.current) == null ? void 0 : K.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
                Lt = new Date().getTime() - ((Q = vt.current) == null ? void 0 : Q.getTime()),
                nr = Math.abs(Ke) / Lt;
            if (Math.abs(Ke) >= FE || nr > .11) {
                rt(Ce.current), (ve = d.onDismiss) == null || ve.call(d, d), tn(), Pt(!0);
                return
            }(qe = Xe.current) == null || qe.style.setProperty("--swipe-amount", "0px"), Fe(!1)
        },
        onPointerMove: K => {
            var Q;
            if (!gt.current || !en) return;
            let ve = K.clientY - gt.current.y,
                qe = K.clientX - gt.current.x,
                Ke = (Jn === "top" ? Math.min : Math.max)(0, ve),
                Lt = K.pointerType === "touch" ? 10 : 2;
            Math.abs(Ke) > Lt ? (Q = Xe.current) == null || Q.style.setProperty("--swipe-amount", `${ve}px`) : Math.abs(qe) > Lt && (gt.current = null)
        }
    }, tr && !d.jsx ? F.createElement("button", {
        "aria-label": T,
        "data-disabled": Ro,
        "data-close-button": !0,
        onClick: Ro || !en ? () => {} : () => {
            var K;
            tn(), (K = d.onDismiss) == null || K.call(d, d)
        },
        className: W(N == null ? void 0 : N.closeButton, (r = d == null ? void 0 : d.classNames) == null ? void 0 : r.closeButton)
    }, F.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, F.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), F.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, d.jsx || F.isValidElement(d.title) ? d.jsx || d.title : F.createElement(F.Fragment, null, Ee || d.icon || d.promise ? F.createElement("div", {
        "data-icon": "",
        className: W(N == null ? void 0 : N.icon, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Oo() : null, d.type !== "loading" ? d.icon || (j == null ? void 0 : j[Ee]) || gE(Ee) : null) : null, F.createElement("div", {
        "data-content": "",
        className: W(N == null ? void 0 : N.content, (i = d == null ? void 0 : d.classNames) == null ? void 0 : i.content)
    }, F.createElement("div", {
        "data-title": "",
        className: W(N == null ? void 0 : N.title, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.title)
    }, d.title), d.description ? F.createElement("div", {
        "data-description": "",
        className: W(R, go, N == null ? void 0 : N.description, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.description)
    }, d.description) : null), F.isValidElement(d.cancel) ? d.cancel : d.cancel && Oc(d.cancel) ? F.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || P,
        onClick: K => {
            var Q, ve;
            Oc(d.cancel) && en && ((ve = (Q = d.cancel).onClick) == null || ve.call(Q, K), tn())
        },
        className: W(N == null ? void 0 : N.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, F.isValidElement(d.action) ? d.action : d.action && Oc(d.action) ? F.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || k,
        onClick: K => {
            var Q, ve;
            Oc(d.action) && (K.defaultPrevented || ((ve = (Q = d.action).onClick) == null || ve.call(Q, K), tn()))
        },
        className: W(N == null ? void 0 : N.actionButton, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.actionButton)
    }, d.action.label) : null))
};

function j0() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t
}
var zE = t => {
    let {
        invert: e,
        position: n = "bottom-right",
        hotkey: o = ["altKey", "KeyT"],
        expand: r,
        closeButton: a,
        className: i,
        offset: s,
        theme: l = "light",
        richColors: c,
        duration: u,
        style: p,
        visibleToasts: d = DE,
        toastOptions: f,
        dir: g = j0(),
        gap: m = jE,
        loadingIcon: y,
        icons: v,
        containerAriaLabel: h = "Notifications",
        pauseWhenPageIsHidden: x,
        cn: _ = LE
    } = t, [b, E] = F.useState([]), C = F.useMemo(() => Array.from(new Set([n].concat(b.filter(I => I.position).map(I => I.position)))), [b, n]), [A, P] = F.useState([]), [k, L] = F.useState(!1), [R, H] = F.useState(!1), [M, V] = F.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), z = F.useRef(null), $ = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = F.useRef(null), j = F.useRef(!1), T = F.useCallback(I => {
        var W;
        (W = b.find(J => J.id === I.id)) != null && W.delete || On.dismiss(I.id), E(J => J.filter(({
            id: ee
        }) => ee !== I.id))
    }, [b]);
    return F.useEffect(() => On.subscribe(I => {
        if (I.dismiss) {
            E(W => W.map(J => J.id === I.id ? { ...J,
                delete: !0
            } : J));
            return
        }
        setTimeout(() => {
            Sy.flushSync(() => {
                E(W => {
                    let J = W.findIndex(ee => ee.id === I.id);
                    return J !== -1 ? [...W.slice(0, J), { ...W[J],
                        ...I
                    }, ...W.slice(J + 1)] : [I, ...W]
                })
            })
        })
    }), []), F.useEffect(() => {
        if (l !== "system") {
            V(l);
            return
        }
        l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? V("dark") : V("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({
            matches: I
        }) => {
            V(I ? "dark" : "light")
        })
    }, [l]), F.useEffect(() => {
        b.length <= 1 && L(!1)
    }, [b]), F.useEffect(() => {
        let I = W => {
            var J, ee;
            o.every(ye => W[ye] || W.code === ye) && (L(!0), (J = z.current) == null || J.focus()), W.code === "Escape" && (document.activeElement === z.current || (ee = z.current) != null && ee.contains(document.activeElement)) && L(!1)
        };
        return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I)
    }, [o]), F.useEffect(() => {
        if (z.current) return () => {
            N.current && (N.current.focus({
                preventScroll: !0
            }), N.current = null, j.current = !1)
        }
    }, [z.current]), b.length ? F.createElement("section", {
        "aria-label": `${h} ${$}`,
        tabIndex: -1
    }, C.map((I, W) => {
        var J;
        let [ee, ye] = I.split("-");
        return F.createElement("ol", {
            key: I,
            dir: g === "auto" ? j0() : g,
            tabIndex: -1,
            ref: z,
            className: i,
            "data-sonner-toaster": !0,
            "data-theme": M,
            "data-y-position": ee,
            "data-x-position": ye,
            style: {
                "--front-toast-height": `${((J=A[0])==null?void 0:J.height)||0}px`,
                "--offset": typeof s == "number" ? `${s}px` : s || RE,
                "--width": `${ME}px`,
                "--gap": `${m}px`,
                ...p
            },
            onBlur: te => {
                j.current && !te.currentTarget.contains(te.relatedTarget) && (j.current = !1, N.current && (N.current.focus({
                    preventScroll: !0
                }), N.current = null))
            },
            onFocus: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || j.current || (j.current = !0, N.current = te.relatedTarget)
            },
            onMouseEnter: () => L(!0),
            onMouseMove: () => L(!0),
            onMouseLeave: () => {
                R || L(!1)
            },
            onPointerDown: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || H(!0)
            },
            onPointerUp: () => H(!1)
        }, b.filter(te => !te.position && W === 0 || te.position === I).map((te, xe) => {
            var Fe, Re;
            return F.createElement(IE, {
                key: te.id,
                icons: v,
                index: xe,
                toast: te,
                defaultRichColors: c,
                duration: (Fe = f == null ? void 0 : f.duration) != null ? Fe : u,
                className: f == null ? void 0 : f.className,
                descriptionClassName: f == null ? void 0 : f.descriptionClassName,
                invert: e,
                visibleToasts: d,
                closeButton: (Re = f == null ? void 0 : f.closeButton) != null ? Re : a,
                interacting: R,
                position: I,
                style: f == null ? void 0 : f.style,
                unstyled: f == null ? void 0 : f.unstyled,
                classNames: f == null ? void 0 : f.classNames,
                cancelButtonStyle: f == null ? void 0 : f.cancelButtonStyle,
                actionButtonStyle: f == null ? void 0 : f.actionButtonStyle,
                removeToast: T,
                toasts: b.filter(Pt => Pt.position == te.position),
                heights: A.filter(Pt => Pt.position == te.position),
                setHeights: P,
                expandByDefault: r,
                gap: m,
                loadingIcon: y,
                expanded: k,
                pauseWhenPageIsHidden: x,
                cn: _
            })
        }))
    })) : null
};
const $E = ({ ...t
}) => {
    const {
        theme: e = "system"
    } = vE();
    return w.jsx(zE, {
        "data-lov-id": "src/components/ui/sonner.tsx:10:4",
        "data-lov-name": "Sonner",
        "data-component-path": "src/components/ui/sonner.tsx",
        "data-component-line": "10",
        "data-component-file": "sonner.tsx",
        "data-component-name": "Sonner",
        "data-component-content": "%7B%22className%22%3A%22toaster%20group%22%7D",
        theme: e,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...t
    })
};

function HE(t, e = []) {
    let n = [];

    function o(a, i) {
        const s = S.createContext(i),
            l = n.length;
        n = [...n, i];
        const c = p => {
            var v;
            const {
                scope: d,
                children: f,
                ...g
            } = p, m = ((v = d == null ? void 0 : d[t]) == null ? void 0 : v[l]) || s, y = S.useMemo(() => g, Object.values(g));
            return w.jsx(m.Provider, {
                value: y,
                children: f
            })
        };
        c.displayName = a + "Provider";

        function u(p, d) {
            var m;
            const f = ((m = d == null ? void 0 : d[t]) == null ? void 0 : m[l]) || s,
                g = S.useContext(f);
            if (g) return g;
            if (i !== void 0) return i;
            throw new Error(`\`${p}\` must be used within \`${a}\``)
        }
        return [c, u]
    }
    const r = () => {
        const a = n.map(i => S.createContext(i));
        return function(s) {
            const l = (s == null ? void 0 : s[t]) || a;
            return S.useMemo(() => ({
                [`__scope${t}`]: { ...s,
                    [t]: l
                }
            }), [s, l])
        }
    };
    return r.scopeName = t, [o, UE(r, ...e)]
}

function UE(...t) {
    const e = t[0];
    if (t.length === 1) return e;
    const n = () => {
        const o = t.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(a) {
            const i = o.reduce((s, {
                useScope: l,
                scopeName: c
            }) => {
                const p = l(a)[`__scope${c}`];
                return { ...s,
                    ...p
                }
            }, {});
            return S.useMemo(() => ({
                [`__scope${e.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = e.scopeName, n
}
var VE = "DismissableLayer",
    Qf = "dismissableLayer.update",
    WE = "dismissableLayer.pointerDownOutside",
    YE = "dismissableLayer.focusOutside",
    F0, _1 = S.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    S1 = S.forwardRef((t, e) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: r,
            onFocusOutside: a,
            onInteractOutside: i,
            onDismiss: s,
            ...l
        } = t, c = S.useContext(_1), [u, p] = S.useState(null), d = (u == null ? void 0 : u.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, f] = S.useState({}), g = An(e, C => p(C)), m = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), v = m.indexOf(y), h = u ? m.indexOf(u) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = h >= v, b = XE(C => {
            const A = C.target,
                P = [...c.branches].some(k => k.contains(A));
            !_ || P || (r == null || r(C), i == null || i(C), C.defaultPrevented || s == null || s())
        }, d), E = qE(C => {
            const A = C.target;
            [...c.branches].some(k => k.contains(A)) || (a == null || a(C), i == null || i(C), C.defaultPrevented || s == null || s())
        }, d);
        return Ay(C => {
            h === c.layers.size - 1 && (o == null || o(C), !C.defaultPrevented && s && (C.preventDefault(), s()))
        }, d), S.useEffect(() => {
            if (u) return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (F0 = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), B0(), () => {
                n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = F0)
            }
        }, [u, d, n, c]), S.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), B0())
        }, [u, c]), S.useEffect(() => {
            const C = () => f({});
            return document.addEventListener(Qf, C), () => document.removeEventListener(Qf, C)
        }, []), w.jsx(Jt.div, { ...l,
            ref: g,
            style: {
                pointerEvents: x ? _ ? "auto" : "none" : void 0,
                ...t.style
            },
            onFocusCapture: tt(t.onFocusCapture, E.onFocusCapture),
            onBlurCapture: tt(t.onBlurCapture, E.onBlurCapture),
            onPointerDownCapture: tt(t.onPointerDownCapture, b.onPointerDownCapture)
        })
    });
S1.displayName = VE;
var GE = "DismissableLayerBranch",
    QE = S.forwardRef((t, e) => {
        const n = S.useContext(_1),
            o = S.useRef(null),
            r = An(e, o);
        return S.useEffect(() => {
            const a = o.current;
            if (a) return n.branches.add(a), () => {
                n.branches.delete(a)
            }
        }, [n.branches]), w.jsx(Jt.div, { ...t,
            ref: r
        })
    });
QE.displayName = GE;

function XE(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = vo(t),
        o = S.useRef(!1),
        r = S.useRef(() => {});
    return S.useEffect(() => {
        const a = s => {
                if (s.target && !o.current) {
                    let l = function() {
                        b1(WE, n, c, {
                            discrete: !0
                        })
                    };
                    const c = {
                        originalEvent: s
                    };
                    s.pointerType === "touch" ? (e.removeEventListener("click", r.current), r.current = l, e.addEventListener("click", r.current, {
                        once: !0
                    })) : l()
                } else e.removeEventListener("click", r.current);
                o.current = !1
            },
            i = window.setTimeout(() => {
                e.addEventListener("pointerdown", a)
            }, 0);
        return () => {
            window.clearTimeout(i), e.removeEventListener("pointerdown", a), e.removeEventListener("click", r.current)
        }
    }, [e, n]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function qE(t, e = globalThis == null ? void 0 : globalThis.document) {
    const n = vo(t),
        o = S.useRef(!1);
    return S.useEffect(() => {
        const r = a => {
            a.target && !o.current && b1(YE, n, {
                originalEvent: a
            }, {
                discrete: !1
            })
        };
        return e.addEventListener("focusin", r), () => e.removeEventListener("focusin", r)
    }, [e, n]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function B0() {
    const t = new CustomEvent(Qf);
    document.dispatchEvent(t)
}

function b1(t, e, n, {
    discrete: o
}) {
    const r = n.originalEvent.target,
        a = new CustomEvent(t, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    e && r.addEventListener(t, e, {
        once: !0
    }), o ? Nh(r, a) : r.dispatchEvent(a)
}
const KE = ["top", "right", "bottom", "left"],
    ca = Math.min,
    Ln = Math.max,
    Qu = Math.round,
    Mc = Math.floor,
    ua = t => ({
        x: t,
        y: t
    }),
    ZE = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    JE = {
        start: "end",
        end: "start"
    };

function Xf(t, e, n) {
    return Ln(t, ca(e, n))
}

function _r(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Sr(t) {
    return t.split("-")[0]
}

function Cs(t) {
    return t.split("-")[1]
}

function Oh(t) {
    return t === "x" ? "y" : "x"
}

function Mh(t) {
    return t === "y" ? "height" : "width"
}

function da(t) {
    return ["top", "bottom"].includes(Sr(t)) ? "y" : "x"
}

function jh(t) {
    return Oh(da(t))
}

function eA(t, e, n) {
    n === void 0 && (n = !1);
    const o = Cs(t),
        r = jh(t),
        a = Mh(r);
    let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
    return e.reference[a] > e.floating[a] && (i = Xu(i)), [i, Xu(i)]
}

function tA(t) {
    const e = Xu(t);
    return [qf(t), e, qf(e)]
}

function qf(t) {
    return t.replace(/start|end/g, e => JE[e])
}

function nA(t, e, n) {
    const o = ["left", "right"],
        r = ["right", "left"],
        a = ["top", "bottom"],
        i = ["bottom", "top"];
    switch (t) {
        case "top":
        case "bottom":
            return n ? e ? r : o : e ? o : r;
        case "left":
        case "right":
            return e ? a : i;
        default:
            return []
    }
}

function oA(t, e, n, o) {
    const r = Cs(t);
    let a = nA(Sr(t), n === "start", o);
    return r && (a = a.map(i => i + "-" + r), e && (a = a.concat(a.map(qf)))), a
}

function Xu(t) {
    return t.replace(/left|right|bottom|top/g, e => ZE[e])
}

function rA(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}

function C1(t) {
    return typeof t != "number" ? rA(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}

function qu(t) {
    const {
        x: e,
        y: n,
        width: o,
        height: r
    } = t;
    return {
        width: o,
        height: r,
        top: n,
        left: e,
        right: e + o,
        bottom: n + r,
        x: e,
        y: n
    }
}

function L0(t, e, n) {
    let {
        reference: o,
        floating: r
    } = t;
    const a = da(e),
        i = jh(e),
        s = Mh(i),
        l = Sr(e),
        c = a === "y",
        u = o.x + o.width / 2 - r.width / 2,
        p = o.y + o.height / 2 - r.height / 2,
        d = o[s] / 2 - r[s] / 2;
    let f;
    switch (l) {
        case "top":
            f = {
                x: u,
                y: o.y - r.height
            };
            break;
        case "bottom":
            f = {
                x: u,
                y: o.y + o.height
            };
            break;
        case "right":
            f = {
                x: o.x + o.width,
                y: p
            };
            break;
        case "left":
            f = {
                x: o.x - r.width,
                y: p
            };
            break;
        default:
            f = {
                x: o.x,
                y: o.y
            }
    }
    switch (Cs(e)) {
        case "start":
            f[i] -= d * (n && c ? -1 : 1);
            break;
        case "end":
            f[i] += d * (n && c ? -1 : 1);
            break
    }
    return f
}
const aA = async (t, e, n) => {
    const {
        placement: o = "bottom",
        strategy: r = "absolute",
        middleware: a = [],
        platform: i
    } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(e));
    let c = await i.getElementRects({
            reference: t,
            floating: e,
            strategy: r
        }),
        {
            x: u,
            y: p
        } = L0(c, o, l),
        d = o,
        f = {},
        g = 0;
    for (let m = 0; m < s.length; m++) {
        const {
            name: y,
            fn: v
        } = s[m], {
            x: h,
            y: x,
            data: _,
            reset: b
        } = await v({
            x: u,
            y: p,
            initialPlacement: o,
            placement: d,
            strategy: r,
            middlewareData: f,
            rects: c,
            platform: i,
            elements: {
                reference: t,
                floating: e
            }
        });
        u = h ? ? u, p = x ? ? p, f = { ...f,
            [y]: { ...f[y],
                ..._
            }
        }, b && g <= 50 && (g++, typeof b == "object" && (b.placement && (d = b.placement), b.rects && (c = b.rects === !0 ? await i.getElementRects({
            reference: t,
            floating: e,
            strategy: r
        }) : b.rects), {
            x: u,
            y: p
        } = L0(c, d, l)), m = -1)
    }
    return {
        x: u,
        y: p,
        placement: d,
        strategy: r,
        middlewareData: f
    }
};
async function Hl(t, e) {
    var n;
    e === void 0 && (e = {});
    const {
        x: o,
        y: r,
        platform: a,
        rects: i,
        elements: s,
        strategy: l
    } = t, {
        boundary: c = "clippingAncestors",
        rootBoundary: u = "viewport",
        elementContext: p = "floating",
        altBoundary: d = !1,
        padding: f = 0
    } = _r(e, t), g = C1(f), y = s[d ? p === "floating" ? "reference" : "floating" : p], v = qu(await a.getClippingRect({
        element: (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null || n ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
        boundary: c,
        rootBoundary: u,
        strategy: l
    })), h = p === "floating" ? {
        x: o,
        y: r,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, b = qu(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: h,
        offsetParent: x,
        strategy: l
    }) : h);
    return {
        top: (v.top - b.top + g.top) / _.y,
        bottom: (b.bottom - v.bottom + g.bottom) / _.y,
        left: (v.left - b.left + g.left) / _.x,
        right: (b.right - v.right + g.right) / _.x
    }
}
const iA = t => ({
        name: "arrow",
        options: t,
        async fn(e) {
            const {
                x: n,
                y: o,
                placement: r,
                rects: a,
                platform: i,
                elements: s,
                middlewareData: l
            } = e, {
                element: c,
                padding: u = 0
            } = _r(t, e) || {};
            if (c == null) return {};
            const p = C1(u),
                d = {
                    x: n,
                    y: o
                },
                f = jh(r),
                g = Mh(f),
                m = await i.getDimensions(c),
                y = f === "y",
                v = y ? "top" : "left",
                h = y ? "bottom" : "right",
                x = y ? "clientHeight" : "clientWidth",
                _ = a.reference[g] + a.reference[f] - d[f] - a.floating[g],
                b = d[f] - a.reference[f],
                E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
            let C = E ? E[x] : 0;
            (!C || !await (i.isElement == null ? void 0 : i.isElement(E))) && (C = s.floating[x] || a.floating[g]);
            const A = _ / 2 - b / 2,
                P = C / 2 - m[g] / 2 - 1,
                k = ca(p[v], P),
                L = ca(p[h], P),
                R = k,
                H = C - m[g] - L,
                M = C / 2 - m[g] / 2 + A,
                V = Xf(R, M, H),
                z = !l.arrow && Cs(r) != null && M !== V && a.reference[g] / 2 - (M < R ? k : L) - m[g] / 2 < 0,
                $ = z ? M < R ? M - R : M - H : 0;
            return {
                [f]: d[f] + $,
                data: {
                    [f]: V,
                    centerOffset: M - V - $,
                    ...z && {
                        alignmentOffset: $
                    }
                },
                reset: z
            }
        }
    }),
    sA = function(t) {
        return t === void 0 && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
                var n, o;
                const {
                    placement: r,
                    middlewareData: a,
                    rects: i,
                    initialPlacement: s,
                    platform: l,
                    elements: c
                } = e, {
                    mainAxis: u = !0,
                    crossAxis: p = !0,
                    fallbackPlacements: d,
                    fallbackStrategy: f = "bestFit",
                    fallbackAxisSideDirection: g = "none",
                    flipAlignment: m = !0,
                    ...y
                } = _r(t, e);
                if ((n = a.arrow) != null && n.alignmentOffset) return {};
                const v = Sr(r),
                    h = da(s),
                    x = Sr(s) === s,
                    _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
                    b = d || (x || !m ? [Xu(s)] : tA(s)),
                    E = g !== "none";
                !d && E && b.push(...oA(s, m, g, _));
                const C = [s, ...b],
                    A = await Hl(e, y),
                    P = [];
                let k = ((o = a.flip) == null ? void 0 : o.overflows) || [];
                if (u && P.push(A[v]), p) {
                    const M = eA(r, i, _);
                    P.push(A[M[0]], A[M[1]])
                }
                if (k = [...k, {
                        placement: r,
                        overflows: P
                    }], !P.every(M => M <= 0)) {
                    var L, R;
                    const M = (((L = a.flip) == null ? void 0 : L.index) || 0) + 1,
                        V = C[M];
                    if (V) return {
                        data: {
                            index: M,
                            overflows: k
                        },
                        reset: {
                            placement: V
                        }
                    };
                    let z = (R = k.filter($ => $.overflows[0] <= 0).sort(($, N) => $.overflows[1] - N.overflows[1])[0]) == null ? void 0 : R.placement;
                    if (!z) switch (f) {
                        case "bestFit":
                            {
                                var H;
                                const $ = (H = k.filter(N => {
                                    if (E) {
                                        const j = da(N.placement);
                                        return j === h || j === "y"
                                    }
                                    return !0
                                }).map(N => [N.placement, N.overflows.filter(j => j > 0).reduce((j, T) => j + T, 0)]).sort((N, j) => N[1] - j[1])[0]) == null ? void 0 : H[0];$ && (z = $);
                                break
                            }
                        case "initialPlacement":
                            z = s;
                            break
                    }
                    if (r !== z) return {
                        reset: {
                            placement: z
                        }
                    }
                }
                return {}
            }
        }
    };

function I0(t, e) {
    return {
        top: t.top - e.height,
        right: t.right - e.width,
        bottom: t.bottom - e.height,
        left: t.left - e.width
    }
}

function z0(t) {
    return KE.some(e => t[e] >= 0)
}
const lA = function(t) {
    return t === void 0 && (t = {}), {
        name: "hide",
        options: t,
        async fn(e) {
            const {
                rects: n
            } = e, {
                strategy: o = "referenceHidden",
                ...r
            } = _r(t, e);
            switch (o) {
                case "referenceHidden":
                    {
                        const a = await Hl(e, { ...r,
                                elementContext: "reference"
                            }),
                            i = I0(a, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: i,
                                referenceHidden: z0(i)
                            }
                        }
                    }
                case "escaped":
                    {
                        const a = await Hl(e, { ...r,
                                altBoundary: !0
                            }),
                            i = I0(a, n.floating);
                        return {
                            data: {
                                escapedOffsets: i,
                                escaped: z0(i)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function cA(t, e) {
    const {
        placement: n,
        platform: o,
        elements: r
    } = t, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = Sr(n), s = Cs(n), l = da(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, u = a && l ? -1 : 1, p = _r(e, t);
    let {
        mainAxis: d,
        crossAxis: f,
        alignmentAxis: g
    } = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return s && typeof g == "number" && (f = s === "end" ? g * -1 : g), l ? {
        x: f * u,
        y: d * c
    } : {
        x: d * c,
        y: f * u
    }
}
const uA = function(t) {
        return t === void 0 && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
                var n, o;
                const {
                    x: r,
                    y: a,
                    placement: i,
                    middlewareData: s
                } = e, l = await cA(e, t);
                return i === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
                    x: r + l.x,
                    y: a + l.y,
                    data: { ...l,
                        placement: i
                    }
                }
            }
        }
    },
    dA = function(t) {
        return t === void 0 && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
                const {
                    x: n,
                    y: o,
                    placement: r
                } = e, {
                    mainAxis: a = !0,
                    crossAxis: i = !1,
                    limiter: s = {
                        fn: y => {
                            let {
                                x: v,
                                y: h
                            } = y;
                            return {
                                x: v,
                                y: h
                            }
                        }
                    },
                    ...l
                } = _r(t, e), c = {
                    x: n,
                    y: o
                }, u = await Hl(e, l), p = da(Sr(r)), d = Oh(p);
                let f = c[d],
                    g = c[p];
                if (a) {
                    const y = d === "y" ? "top" : "left",
                        v = d === "y" ? "bottom" : "right",
                        h = f + u[y],
                        x = f - u[v];
                    f = Xf(h, f, x)
                }
                if (i) {
                    const y = p === "y" ? "top" : "left",
                        v = p === "y" ? "bottom" : "right",
                        h = g + u[y],
                        x = g - u[v];
                    g = Xf(h, g, x)
                }
                const m = s.fn({ ...e,
                    [d]: f,
                    [p]: g
                });
                return { ...m,
                    data: {
                        x: m.x - n,
                        y: m.y - o,
                        enabled: {
                            [d]: a,
                            [p]: i
                        }
                    }
                }
            }
        }
    },
    pA = function(t) {
        return t === void 0 && (t = {}), {
            options: t,
            fn(e) {
                const {
                    x: n,
                    y: o,
                    placement: r,
                    rects: a,
                    middlewareData: i
                } = e, {
                    offset: s = 0,
                    mainAxis: l = !0,
                    crossAxis: c = !0
                } = _r(t, e), u = {
                    x: n,
                    y: o
                }, p = da(r), d = Oh(p);
                let f = u[d],
                    g = u[p];
                const m = _r(s, e),
                    y = typeof m == "number" ? {
                        mainAxis: m,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...m
                    };
                if (l) {
                    const x = d === "y" ? "height" : "width",
                        _ = a.reference[d] - a.floating[x] + y.mainAxis,
                        b = a.reference[d] + a.reference[x] - y.mainAxis;
                    f < _ ? f = _ : f > b && (f = b)
                }
                if (c) {
                    var v, h;
                    const x = d === "y" ? "width" : "height",
                        _ = ["top", "left"].includes(Sr(r)),
                        b = a.reference[p] - a.floating[x] + (_ && ((v = i.offset) == null ? void 0 : v[p]) || 0) + (_ ? 0 : y.crossAxis),
                        E = a.reference[p] + a.reference[x] + (_ ? 0 : ((h = i.offset) == null ? void 0 : h[p]) || 0) - (_ ? y.crossAxis : 0);
                    g < b ? g = b : g > E && (g = E)
                }
                return {
                    [d]: f,
                    [p]: g
                }
            }
        }
    },
    fA = function(t) {
        return t === void 0 && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
                var n, o;
                const {
                    placement: r,
                    rects: a,
                    platform: i,
                    elements: s
                } = e, {
                    apply: l = () => {},
                    ...c
                } = _r(t, e), u = await Hl(e, c), p = Sr(r), d = Cs(r), f = da(r) === "y", {
                    width: g,
                    height: m
                } = a.floating;
                let y, v;
                p === "top" || p === "bottom" ? (y = p, v = d === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (v = p, y = d === "end" ? "top" : "bottom");
                const h = m - u.top - u.bottom,
                    x = g - u.left - u.right,
                    _ = ca(m - u[y], h),
                    b = ca(g - u[v], x),
                    E = !e.middlewareData.shift;
                let C = _,
                    A = b;
                if ((n = e.middlewareData.shift) != null && n.enabled.x && (A = x), (o = e.middlewareData.shift) != null && o.enabled.y && (C = h), E && !d) {
                    const k = Ln(u.left, 0),
                        L = Ln(u.right, 0),
                        R = Ln(u.top, 0),
                        H = Ln(u.bottom, 0);
                    f ? A = g - 2 * (k !== 0 || L !== 0 ? k + L : Ln(u.left, u.right)) : C = m - 2 * (R !== 0 || H !== 0 ? R + H : Ln(u.top, u.bottom))
                }
                await l({ ...e,
                    availableWidth: A,
                    availableHeight: C
                });
                const P = await i.getDimensions(s.floating);
                return g !== P.width || m !== P.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Md() {
    return typeof window < "u"
}

function Ts(t) {
    return T1(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function Wn(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}

function er(t) {
    var e;
    return (e = (T1(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}

function T1(t) {
    return Md() ? t instanceof Node || t instanceof Wn(t).Node : !1
}

function ko(t) {
    return Md() ? t instanceof Element || t instanceof Wn(t).Element : !1
}

function Zo(t) {
    return Md() ? t instanceof HTMLElement || t instanceof Wn(t).HTMLElement : !1
}

function $0(t) {
    return !Md() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Wn(t).ShadowRoot
}

function cc(t) {
    const {
        overflow: e,
        overflowX: n,
        overflowY: o,
        display: r
    } = Do(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(r)
}

function mA(t) {
    return ["table", "td", "th"].includes(Ts(t))
}

function jd(t) {
    return [":popover-open", ":modal"].some(e => {
        try {
            return t.matches(e)
        } catch {
            return !1
        }
    })
}

function Fh(t) {
    const e = Bh(),
        n = ko(t) ? Do(t) : t;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(o => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some(o => (n.contain || "").includes(o))
}

function hA(t) {
    let e = pa(t);
    for (; Zo(e) && !cs(e);) {
        if (Fh(e)) return e;
        if (jd(e)) return null;
        e = pa(e)
    }
    return null
}

function Bh() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function cs(t) {
    return ["html", "body", "#document"].includes(Ts(t))
}

function Do(t) {
    return Wn(t).getComputedStyle(t)
}

function Fd(t) {
    return ko(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}

function pa(t) {
    if (Ts(t) === "html") return t;
    const e = t.assignedSlot || t.parentNode || $0(t) && t.host || er(t);
    return $0(e) ? e.host : e
}

function E1(t) {
    const e = pa(t);
    return cs(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Zo(e) && cc(e) ? e : E1(e)
}

function Ul(t, e, n) {
    var o;
    e === void 0 && (e = []), n === void 0 && (n = !0);
    const r = E1(t),
        a = r === ((o = t.ownerDocument) == null ? void 0 : o.body),
        i = Wn(r);
    if (a) {
        const s = Kf(i);
        return e.concat(i, i.visualViewport || [], cc(r) ? r : [], s && n ? Ul(s) : [])
    }
    return e.concat(r, Ul(r, [], n))
}

function Kf(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}

function A1(t) {
    const e = Do(t);
    let n = parseFloat(e.width) || 0,
        o = parseFloat(e.height) || 0;
    const r = Zo(t),
        a = r ? t.offsetWidth : n,
        i = r ? t.offsetHeight : o,
        s = Qu(n) !== a || Qu(o) !== i;
    return s && (n = a, o = i), {
        width: n,
        height: o,
        $: s
    }
}

function Lh(t) {
    return ko(t) ? t : t.contextElement
}

function Li(t) {
    const e = Lh(t);
    if (!Zo(e)) return ua(1);
    const n = e.getBoundingClientRect(),
        {
            width: o,
            height: r,
            $: a
        } = A1(e);
    let i = (a ? Qu(n.width) : n.width) / o,
        s = (a ? Qu(n.height) : n.height) / r;
    return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
        x: i,
        y: s
    }
}
const vA = ua(0);

function N1(t) {
    const e = Wn(t);
    return !Bh() || !e.visualViewport ? vA : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}

function gA(t, e, n) {
    return e === void 0 && (e = !1), !n || e && n !== Wn(t) ? !1 : e
}

function Ja(t, e, n, o) {
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    const r = t.getBoundingClientRect(),
        a = Lh(t);
    let i = ua(1);
    e && (o ? ko(o) && (i = Li(o)) : i = Li(t));
    const s = gA(a, n, o) ? N1(a) : ua(0);
    let l = (r.left + s.x) / i.x,
        c = (r.top + s.y) / i.y,
        u = r.width / i.x,
        p = r.height / i.y;
    if (a) {
        const d = Wn(a),
            f = o && ko(o) ? Wn(o) : o;
        let g = d,
            m = Kf(g);
        for (; m && o && f !== g;) {
            const y = Li(m),
                v = m.getBoundingClientRect(),
                h = Do(m),
                x = v.left + (m.clientLeft + parseFloat(h.paddingLeft)) * y.x,
                _ = v.top + (m.clientTop + parseFloat(h.paddingTop)) * y.y;
            l *= y.x, c *= y.y, u *= y.x, p *= y.y, l += x, c += _, g = Wn(m), m = Kf(g)
        }
    }
    return qu({
        width: u,
        height: p,
        x: l,
        y: c
    })
}

function xA(t) {
    let {
        elements: e,
        rect: n,
        offsetParent: o,
        strategy: r
    } = t;
    const a = r === "fixed",
        i = er(o),
        s = e ? jd(e.floating) : !1;
    if (o === i || s && a) return n;
    let l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        c = ua(1);
    const u = ua(0),
        p = Zo(o);
    if ((p || !p && !a) && ((Ts(o) !== "body" || cc(i)) && (l = Fd(o)), Zo(o))) {
        const d = Ja(o);
        c = Li(o), u.x = d.x + o.clientLeft, u.y = d.y + o.clientTop
    }
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - l.scrollLeft * c.x + u.x,
        y: n.y * c.y - l.scrollTop * c.y + u.y
    }
}

function yA(t) {
    return Array.from(t.getClientRects())
}

function Zf(t, e) {
    const n = Fd(t).scrollLeft;
    return e ? e.left + n : Ja(er(t)).left + n
}

function wA(t) {
    const e = er(t),
        n = Fd(t),
        o = t.ownerDocument.body,
        r = Ln(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
        a = Ln(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
    let i = -n.scrollLeft + Zf(t);
    const s = -n.scrollTop;
    return Do(o).direction === "rtl" && (i += Ln(e.clientWidth, o.clientWidth) - r), {
        width: r,
        height: a,
        x: i,
        y: s
    }
}

function _A(t, e) {
    const n = Wn(t),
        o = er(t),
        r = n.visualViewport;
    let a = o.clientWidth,
        i = o.clientHeight,
        s = 0,
        l = 0;
    if (r) {
        a = r.width, i = r.height;
        const c = Bh();
        (!c || c && e === "fixed") && (s = r.offsetLeft, l = r.offsetTop)
    }
    return {
        width: a,
        height: i,
        x: s,
        y: l
    }
}

function SA(t, e) {
    const n = Ja(t, !0, e === "fixed"),
        o = n.top + t.clientTop,
        r = n.left + t.clientLeft,
        a = Zo(t) ? Li(t) : ua(1),
        i = t.clientWidth * a.x,
        s = t.clientHeight * a.y,
        l = r * a.x,
        c = o * a.y;
    return {
        width: i,
        height: s,
        x: l,
        y: c
    }
}

function H0(t, e, n) {
    let o;
    if (e === "viewport") o = _A(t, n);
    else if (e === "document") o = wA(er(t));
    else if (ko(e)) o = SA(e, n);
    else {
        const r = N1(t);
        o = { ...e,
            x: e.x - r.x,
            y: e.y - r.y
        }
    }
    return qu(o)
}

function P1(t, e) {
    const n = pa(t);
    return n === e || !ko(n) || cs(n) ? !1 : Do(n).position === "fixed" || P1(n, e)
}

function bA(t, e) {
    const n = e.get(t);
    if (n) return n;
    let o = Ul(t, [], !1).filter(s => ko(s) && Ts(s) !== "body"),
        r = null;
    const a = Do(t).position === "fixed";
    let i = a ? pa(t) : t;
    for (; ko(i) && !cs(i);) {
        const s = Do(i),
            l = Fh(i);
        !l && s.position === "fixed" && (r = null), (a ? !l && !r : !l && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || cc(i) && !l && P1(t, i)) ? o = o.filter(u => u !== i) : r = s, i = pa(i)
    }
    return e.set(t, o), o
}

function CA(t) {
    let {
        element: e,
        boundary: n,
        rootBoundary: o,
        strategy: r
    } = t;
    const i = [...n === "clippingAncestors" ? jd(e) ? [] : bA(e, this._c) : [].concat(n), o],
        s = i[0],
        l = i.reduce((c, u) => {
            const p = H0(e, u, r);
            return c.top = Ln(p.top, c.top), c.right = ca(p.right, c.right), c.bottom = ca(p.bottom, c.bottom), c.left = Ln(p.left, c.left), c
        }, H0(e, s, r));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}

function TA(t) {
    const {
        width: e,
        height: n
    } = A1(t);
    return {
        width: e,
        height: n
    }
}

function EA(t, e, n) {
    const o = Zo(e),
        r = er(e),
        a = n === "fixed",
        i = Ja(t, !0, a, e);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = ua(0);
    if (o || !o && !a)
        if ((Ts(e) !== "body" || cc(r)) && (s = Fd(e)), o) {
            const f = Ja(e, !0, a, e);
            l.x = f.x + e.clientLeft, l.y = f.y + e.clientTop
        } else r && (l.x = Zf(r));
    let c = 0,
        u = 0;
    if (r && !o && !a) {
        const f = r.getBoundingClientRect();
        u = f.top + s.scrollTop, c = f.left + s.scrollLeft - Zf(r, f)
    }
    const p = i.left + s.scrollLeft - l.x - c,
        d = i.top + s.scrollTop - l.y - u;
    return {
        x: p,
        y: d,
        width: i.width,
        height: i.height
    }
}

function Ep(t) {
    return Do(t).position === "static"
}

function U0(t, e) {
    if (!Zo(t) || Do(t).position === "fixed") return null;
    if (e) return e(t);
    let n = t.offsetParent;
    return er(t) === n && (n = n.ownerDocument.body), n
}

function k1(t, e) {
    const n = Wn(t);
    if (jd(t)) return n;
    if (!Zo(t)) {
        let r = pa(t);
        for (; r && !cs(r);) {
            if (ko(r) && !Ep(r)) return r;
            r = pa(r)
        }
        return n
    }
    let o = U0(t, e);
    for (; o && mA(o) && Ep(o);) o = U0(o, e);
    return o && cs(o) && Ep(o) && !Fh(o) ? n : o || hA(t) || n
}
const AA = async function(t) {
    const e = this.getOffsetParent || k1,
        n = this.getDimensions,
        o = await n(t.floating);
    return {
        reference: EA(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: o.width,
            height: o.height
        }
    }
};

function NA(t) {
    return Do(t).direction === "rtl"
}
const PA = {
    convertOffsetParentRelativeRectToViewportRelativeRect: xA,
    getDocumentElement: er,
    getClippingRect: CA,
    getOffsetParent: k1,
    getElementRects: AA,
    getClientRects: yA,
    getDimensions: TA,
    getScale: Li,
    isElement: ko,
    isRTL: NA
};

function kA(t, e) {
    let n = null,
        o;
    const r = er(t);

    function a() {
        var s;
        clearTimeout(o), (s = n) == null || s.disconnect(), n = null
    }

    function i(s, l) {
        s === void 0 && (s = !1), l === void 0 && (l = 1), a();
        const {
            left: c,
            top: u,
            width: p,
            height: d
        } = t.getBoundingClientRect();
        if (s || e(), !p || !d) return;
        const f = Mc(u),
            g = Mc(r.clientWidth - (c + p)),
            m = Mc(r.clientHeight - (u + d)),
            y = Mc(c),
            h = {
                rootMargin: -f + "px " + -g + "px " + -m + "px " + -y + "px",
                threshold: Ln(0, ca(1, l)) || 1
            };
        let x = !0;

        function _(b) {
            const E = b[0].intersectionRatio;
            if (E !== l) {
                if (!x) return i();
                E ? i(!1, E) : o = setTimeout(() => {
                    i(!1, 1e-7)
                }, 1e3)
            }
            x = !1
        }
        try {
            n = new IntersectionObserver(_, { ...h,
                root: r.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(_, h)
        }
        n.observe(t)
    }
    return i(!0), a
}

function DA(t, e, n, o) {
    o === void 0 && (o = {});
    const {
        ancestorScroll: r = !0,
        ancestorResize: a = !0,
        elementResize: i = typeof ResizeObserver == "function",
        layoutShift: s = typeof IntersectionObserver == "function",
        animationFrame: l = !1
    } = o, c = Lh(t), u = r || a ? [...c ? Ul(c) : [], ...Ul(e)] : [];
    u.forEach(v => {
        r && v.addEventListener("scroll", n, {
            passive: !0
        }), a && v.addEventListener("resize", n)
    });
    const p = c && s ? kA(c, n) : null;
    let d = -1,
        f = null;
    i && (f = new ResizeObserver(v => {
        let [h] = v;
        h && h.target === c && f && (f.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
            var x;
            (x = f) == null || x.observe(e)
        })), n()
    }), c && !l && f.observe(c), f.observe(e));
    let g, m = l ? Ja(t) : null;
    l && y();

    function y() {
        const v = Ja(t);
        m && (v.x !== m.x || v.y !== m.y || v.width !== m.width || v.height !== m.height) && n(), m = v, g = requestAnimationFrame(y)
    }
    return n(), () => {
        var v;
        u.forEach(h => {
            r && h.removeEventListener("scroll", n), a && h.removeEventListener("resize", n)
        }), p == null || p(), (v = f) == null || v.disconnect(), f = null, l && cancelAnimationFrame(g)
    }
}
const RA = uA,
    OA = dA,
    MA = sA,
    jA = fA,
    FA = lA,
    V0 = iA,
    BA = pA,
    LA = (t, e, n) => {
        const o = new Map,
            r = {
                platform: PA,
                ...n
            },
            a = { ...r.platform,
                _c: o
            };
        return aA(t, e, { ...r,
            platform: a
        })
    };
var du = typeof document < "u" ? S.useLayoutEffect : S.useEffect;

function Ku(t, e) {
    if (t === e) return !0;
    if (typeof t != typeof e) return !1;
    if (typeof t == "function" && t.toString() === e.toString()) return !0;
    let n, o, r;
    if (t && e && typeof t == "object") {
        if (Array.isArray(t)) {
            if (n = t.length, n !== e.length) return !1;
            for (o = n; o-- !== 0;)
                if (!Ku(t[o], e[o])) return !1;
            return !0
        }
        if (r = Object.keys(t), n = r.length, n !== Object.keys(e).length) return !1;
        for (o = n; o-- !== 0;)
            if (!{}.hasOwnProperty.call(e, r[o])) return !1;
        for (o = n; o-- !== 0;) {
            const a = r[o];
            if (!(a === "_owner" && t.$$typeof) && !Ku(t[a], e[a])) return !1
        }
        return !0
    }
    return t !== t && e !== e
}

function D1(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function W0(t, e) {
    const n = D1(t);
    return Math.round(e * n) / n
}

function Ap(t) {
    const e = S.useRef(t);
    return du(() => {
        e.current = t
    }), e
}

function IA(t) {
    t === void 0 && (t = {});
    const {
        placement: e = "bottom",
        strategy: n = "absolute",
        middleware: o = [],
        platform: r,
        elements: {
            reference: a,
            floating: i
        } = {},
        transform: s = !0,
        whileElementsMounted: l,
        open: c
    } = t, [u, p] = S.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: e,
        middlewareData: {},
        isPositioned: !1
    }), [d, f] = S.useState(o);
    Ku(d, o) || f(o);
    const [g, m] = S.useState(null), [y, v] = S.useState(null), h = S.useCallback(N => {
        N !== E.current && (E.current = N, m(N))
    }, []), x = S.useCallback(N => {
        N !== C.current && (C.current = N, v(N))
    }, []), _ = a || g, b = i || y, E = S.useRef(null), C = S.useRef(null), A = S.useRef(u), P = l != null, k = Ap(l), L = Ap(r), R = Ap(c), H = S.useCallback(() => {
        if (!E.current || !C.current) return;
        const N = {
            placement: e,
            strategy: n,
            middleware: d
        };
        L.current && (N.platform = L.current), LA(E.current, C.current, N).then(j => {
            const T = { ...j,
                isPositioned: R.current !== !1
            };
            M.current && !Ku(A.current, T) && (A.current = T, Ss.flushSync(() => {
                p(T)
            }))
        })
    }, [d, e, n, L, R]);
    du(() => {
        c === !1 && A.current.isPositioned && (A.current.isPositioned = !1, p(N => ({ ...N,
            isPositioned: !1
        })))
    }, [c]);
    const M = S.useRef(!1);
    du(() => (M.current = !0, () => {
        M.current = !1
    }), []), du(() => {
        if (_ && (E.current = _), b && (C.current = b), _ && b) {
            if (k.current) return k.current(_, b, H);
            H()
        }
    }, [_, b, H, k, P]);
    const V = S.useMemo(() => ({
            reference: E,
            floating: C,
            setReference: h,
            setFloating: x
        }), [h, x]),
        z = S.useMemo(() => ({
            reference: _,
            floating: b
        }), [_, b]),
        $ = S.useMemo(() => {
            const N = {
                position: n,
                left: 0,
                top: 0
            };
            if (!z.floating) return N;
            const j = W0(z.floating, u.x),
                T = W0(z.floating, u.y);
            return s ? { ...N,
                transform: "translate(" + j + "px, " + T + "px)",
                ...D1(z.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: j,
                top: T
            }
        }, [n, s, z.floating, u.x, u.y]);
    return S.useMemo(() => ({ ...u,
        update: H,
        refs: V,
        elements: z,
        floatingStyles: $
    }), [u, H, V, z, $])
}
const zA = t => {
        function e(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: t,
            fn(n) {
                const {
                    element: o,
                    padding: r
                } = typeof t == "function" ? t(n) : t;
                return o && e(o) ? o.current != null ? V0({
                    element: o.current,
                    padding: r
                }).fn(n) : {} : o ? V0({
                    element: o,
                    padding: r
                }).fn(n) : {}
            }
        }
    },
    $A = (t, e) => ({ ...RA(t),
        options: [t, e]
    }),
    HA = (t, e) => ({ ...OA(t),
        options: [t, e]
    }),
    UA = (t, e) => ({ ...BA(t),
        options: [t, e]
    }),
    VA = (t, e) => ({ ...MA(t),
        options: [t, e]
    }),
    WA = (t, e) => ({ ...jA(t),
        options: [t, e]
    }),
    YA = (t, e) => ({ ...FA(t),
        options: [t, e]
    }),
    GA = (t, e) => ({ ...zA(t),
        options: [t, e]
    });
var QA = "Arrow",
    R1 = S.forwardRef((t, e) => {
        const {
            children: n,
            width: o = 10,
            height: r = 5,
            ...a
        } = t;
        return w.jsx(Jt.svg, { ...a,
            ref: e,
            width: o,
            height: r,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: t.asChild ? n : w.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
R1.displayName = QA;
var XA = R1;

function qA(t) {
    const [e, n] = S.useState(void 0);
    return wr(() => {
        if (t) {
            n({
                width: t.offsetWidth,
                height: t.offsetHeight
            });
            const o = new ResizeObserver(r => {
                if (!Array.isArray(r) || !r.length) return;
                const a = r[0];
                let i, s;
                if ("borderBoxSize" in a) {
                    const l = a.borderBoxSize,
                        c = Array.isArray(l) ? l[0] : l;
                    i = c.inlineSize, s = c.blockSize
                } else i = t.offsetWidth, s = t.offsetHeight;
                n({
                    width: i,
                    height: s
                })
            });
            return o.observe(t, {
                box: "border-box"
            }), () => o.unobserve(t)
        } else n(void 0)
    }, [t]), e
}
var O1 = "Popper",
    [M1, j1] = Ah(O1),
    [v7, F1] = M1(O1),
    B1 = "PopperAnchor",
    L1 = S.forwardRef((t, e) => {
        const {
            __scopePopper: n,
            virtualRef: o,
            ...r
        } = t, a = F1(B1, n), i = S.useRef(null), s = An(e, i);
        return S.useEffect(() => {
            a.onAnchorChange((o == null ? void 0 : o.current) || i.current)
        }), o ? null : w.jsx(Jt.div, { ...r,
            ref: s
        })
    });
L1.displayName = B1;
var Ih = "PopperContent",
    [KA, ZA] = M1(Ih),
    I1 = S.forwardRef((t, e) => {
        var xe, Fe, Re, Pt, dt, rt;
        const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: r = 0,
            align: a = "center",
            alignOffset: i = 0,
            arrowPadding: s = 0,
            avoidCollisions: l = !0,
            collisionBoundary: c = [],
            collisionPadding: u = 0,
            sticky: p = "partial",
            hideWhenDetached: d = !1,
            updatePositionStrategy: f = "optimized",
            onPlaced: g,
            ...m
        } = t, y = F1(Ih, n), [v, h] = S.useState(null), x = An(e, ae => h(ae)), [_, b] = S.useState(null), E = qA(_), C = (E == null ? void 0 : E.width) ? ? 0, A = (E == null ? void 0 : E.height) ? ? 0, P = o + (a !== "center" ? "-" + a : ""), k = typeof u == "number" ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
        }, L = Array.isArray(c) ? c : [c], R = L.length > 0, H = {
            padding: k,
            boundary: L.filter(e3),
            altBoundary: R
        }, {
            refs: M,
            floatingStyles: V,
            placement: z,
            isPositioned: $,
            middlewareData: N
        } = IA({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...ae) => DA(...ae, {
                animationFrame: f === "always"
            }),
            elements: {
                reference: y.anchor
            },
            middleware: [$A({
                mainAxis: r + A,
                alignmentAxis: i
            }), l && HA({
                mainAxis: !0,
                crossAxis: !1,
                limiter: p === "partial" ? UA() : void 0,
                ...H
            }), l && VA({ ...H
            }), WA({ ...H,
                apply: ({
                    elements: ae,
                    rects: Te,
                    availableWidth: vt,
                    availableHeight: Xe
                }) => {
                    const {
                        width: D,
                        height: kt
                    } = Te.reference, Ee = ae.floating.style;
                    Ee.setProperty("--radix-popper-available-width", `${vt}px`), Ee.setProperty("--radix-popper-available-height", `${Xe}px`), Ee.setProperty("--radix-popper-anchor-width", `${D}px`), Ee.setProperty("--radix-popper-anchor-height", `${kt}px`)
                }
            }), _ && GA({
                element: _,
                padding: s
            }), t3({
                arrowWidth: C,
                arrowHeight: A
            }), d && YA({
                strategy: "referenceHidden",
                ...H
            })]
        }), [j, T] = H1(z), I = vo(g);
        wr(() => {
            $ && (I == null || I())
        }, [$, I]);
        const W = (xe = N.arrow) == null ? void 0 : xe.x,
            J = (Fe = N.arrow) == null ? void 0 : Fe.y,
            ee = ((Re = N.arrow) == null ? void 0 : Re.centerOffset) !== 0,
            [ye, te] = S.useState();
        return wr(() => {
            v && te(window.getComputedStyle(v).zIndex)
        }, [v]), w.jsx("div", {
            ref: M.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...V,
                transform: $ ? V.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ye,
                "--radix-popper-transform-origin": [(Pt = N.transformOrigin) == null ? void 0 : Pt.x, (dt = N.transformOrigin) == null ? void 0 : dt.y].join(" "),
                ...((rt = N.hide) == null ? void 0 : rt.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: t.dir,
            children: w.jsx(KA, {
                scope: n,
                placedSide: j,
                onArrowChange: b,
                arrowX: W,
                arrowY: J,
                shouldHideArrow: ee,
                children: w.jsx(Jt.div, {
                    "data-side": j,
                    "data-align": T,
                    ...m,
                    ref: x,
                    style: { ...m.style,
                        animation: $ ? void 0 : "none"
                    }
                })
            })
        })
    });
I1.displayName = Ih;
var z1 = "PopperArrow",
    JA = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    $1 = S.forwardRef(function(e, n) {
        const {
            __scopePopper: o,
            ...r
        } = e, a = ZA(z1, o), i = JA[a.placedSide];
        return w.jsx("span", {
            ref: a.onArrowChange,
            style: {
                position: "absolute",
                left: a.arrowX,
                top: a.arrowY,
                [i]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[a.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[a.placedSide],
                visibility: a.shouldHideArrow ? "hidden" : void 0
            },
            children: w.jsx(XA, { ...r,
                ref: n,
                style: { ...r.style,
                    display: "block"
                }
            })
        })
    });
$1.displayName = z1;

function e3(t) {
    return t !== null
}
var t3 = t => ({
    name: "transformOrigin",
    options: t,
    fn(e) {
        var y, v, h;
        const {
            placement: n,
            rects: o,
            middlewareData: r
        } = e, i = ((y = r.arrow) == null ? void 0 : y.centerOffset) !== 0, s = i ? 0 : t.arrowWidth, l = i ? 0 : t.arrowHeight, [c, u] = H1(n), p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[u], d = (((v = r.arrow) == null ? void 0 : v.x) ? ? 0) + s / 2, f = (((h = r.arrow) == null ? void 0 : h.y) ? ? 0) + l / 2;
        let g = "",
            m = "";
        return c === "bottom" ? (g = i ? p : `${d}px`, m = `${-l}px`) : c === "top" ? (g = i ? p : `${d}px`, m = `${o.floating.height+l}px`) : c === "right" ? (g = `${-l}px`, m = i ? p : `${f}px`) : c === "left" && (g = `${o.floating.width+l}px`, m = i ? p : `${f}px`), {
            data: {
                x: g,
                y: m
            }
        }
    }
});

function H1(t) {
    const [e, n = "center"] = t.split("-");
    return [e, n]
}
var n3 = L1,
    o3 = I1,
    r3 = $1;

function a3(t, e) {
    return S.useReducer((n, o) => e[n][o] ? ? n, t)
}
var U1 = t => {
    const {
        present: e,
        children: n
    } = t, o = i3(e), r = typeof n == "function" ? n({
        present: o.isPresent
    }) : S.Children.only(n), a = An(o.ref, s3(r));
    return typeof n == "function" || o.isPresent ? S.cloneElement(r, {
        ref: a
    }) : null
};
U1.displayName = "Presence";

function i3(t) {
    const [e, n] = S.useState(), o = S.useRef({}), r = S.useRef(t), a = S.useRef("none"), i = t ? "mounted" : "unmounted", [s, l] = a3(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return S.useEffect(() => {
        const c = jc(o.current);
        a.current = s === "mounted" ? c : "none"
    }, [s]), wr(() => {
        const c = o.current,
            u = r.current;
        if (u !== t) {
            const d = a.current,
                f = jc(c);
            t ? l("MOUNT") : f === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && d !== f ? "ANIMATION_OUT" : "UNMOUNT"), r.current = t
        }
    }, [t, l]), wr(() => {
        if (e) {
            let c;
            const u = e.ownerDocument.defaultView ? ? window,
                p = f => {
                    const m = jc(o.current).includes(f.animationName);
                    if (f.target === e && m && (l("ANIMATION_END"), !r.current)) {
                        const y = e.style.animationFillMode;
                        e.style.animationFillMode = "forwards", c = u.setTimeout(() => {
                            e.style.animationFillMode === "forwards" && (e.style.animationFillMode = y)
                        })
                    }
                },
                d = f => {
                    f.target === e && (a.current = jc(o.current))
                };
            return e.addEventListener("animationstart", d), e.addEventListener("animationcancel", p), e.addEventListener("animationend", p), () => {
                u.clearTimeout(c), e.removeEventListener("animationstart", d), e.removeEventListener("animationcancel", p), e.removeEventListener("animationend", p)
            }
        } else l("ANIMATION_END")
    }, [e, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: S.useCallback(c => {
            c && (o.current = getComputedStyle(c)), n(c)
        }, [])
    }
}

function jc(t) {
    return (t == null ? void 0 : t.animationName) || "none"
}

function s3(t) {
    var o, r;
    let e = (o = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : o.get,
        n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (r = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref)
}
var [Bd, g7] = HE("Tooltip", [j1]), zh = j1(), V1 = "TooltipProvider", l3 = 700, Y0 = "tooltip.open", [c3, W1] = Bd(V1), Y1 = t => {
    const {
        __scopeTooltip: e,
        delayDuration: n = l3,
        skipDelayDuration: o = 300,
        disableHoverableContent: r = !1,
        children: a
    } = t, [i, s] = S.useState(!0), l = S.useRef(!1), c = S.useRef(0);
    return S.useEffect(() => {
        const u = c.current;
        return () => window.clearTimeout(u)
    }, []), w.jsx(c3, {
        scope: e,
        isOpenDelayed: i,
        delayDuration: n,
        onOpen: S.useCallback(() => {
            window.clearTimeout(c.current), s(!1)
        }, []),
        onClose: S.useCallback(() => {
            window.clearTimeout(c.current), c.current = window.setTimeout(() => s(!0), o)
        }, [o]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: S.useCallback(u => {
            l.current = u
        }, []),
        disableHoverableContent: r,
        children: a
    })
};
Y1.displayName = V1;
var G1 = "Tooltip",
    [x7, Ld] = Bd(G1),
    Jf = "TooltipTrigger",
    u3 = S.forwardRef((t, e) => {
        const {
            __scopeTooltip: n,
            ...o
        } = t, r = Ld(Jf, n), a = W1(Jf, n), i = zh(n), s = S.useRef(null), l = An(e, s, r.onTriggerChange), c = S.useRef(!1), u = S.useRef(!1), p = S.useCallback(() => c.current = !1, []);
        return S.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), w.jsx(n3, {
            asChild: !0,
            ...i,
            children: w.jsx(Jt.button, {
                "aria-describedby": r.open ? r.contentId : void 0,
                "data-state": r.stateAttribute,
                ...o,
                ref: l,
                onPointerMove: tt(t.onPointerMove, d => {
                    d.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (r.onTriggerEnter(), u.current = !0)
                }),
                onPointerLeave: tt(t.onPointerLeave, () => {
                    r.onTriggerLeave(), u.current = !1
                }),
                onPointerDown: tt(t.onPointerDown, () => {
                    c.current = !0, document.addEventListener("pointerup", p, {
                        once: !0
                    })
                }),
                onFocus: tt(t.onFocus, () => {
                    c.current || r.onOpen()
                }),
                onBlur: tt(t.onBlur, r.onClose),
                onClick: tt(t.onClick, r.onClose)
            })
        })
    });
u3.displayName = Jf;
var d3 = "TooltipPortal",
    [y7, p3] = Bd(d3, {
        forceMount: void 0
    }),
    us = "TooltipContent",
    Q1 = S.forwardRef((t, e) => {
        const n = p3(us, t.__scopeTooltip),
            {
                forceMount: o = n.forceMount,
                side: r = "top",
                ...a
            } = t,
            i = Ld(us, t.__scopeTooltip);
        return w.jsx(U1, {
            present: o || i.open,
            children: i.disableHoverableContent ? w.jsx(X1, {
                side: r,
                ...a,
                ref: e
            }) : w.jsx(f3, {
                side: r,
                ...a,
                ref: e
            })
        })
    }),
    f3 = S.forwardRef((t, e) => {
        const n = Ld(us, t.__scopeTooltip),
            o = W1(us, t.__scopeTooltip),
            r = S.useRef(null),
            a = An(e, r),
            [i, s] = S.useState(null),
            {
                trigger: l,
                onClose: c
            } = n,
            u = r.current,
            {
                onPointerInTransitChange: p
            } = o,
            d = S.useCallback(() => {
                s(null), p(!1)
            }, [p]),
            f = S.useCallback((g, m) => {
                const y = g.currentTarget,
                    v = {
                        x: g.clientX,
                        y: g.clientY
                    },
                    h = g3(v, y.getBoundingClientRect()),
                    x = x3(v, h),
                    _ = y3(m.getBoundingClientRect()),
                    b = _3([...x, ..._]);
                s(b), p(!0)
            }, [p]);
        return S.useEffect(() => () => d(), [d]), S.useEffect(() => {
            if (l && u) {
                const g = y => f(y, u),
                    m = y => f(y, l);
                return l.addEventListener("pointerleave", g), u.addEventListener("pointerleave", m), () => {
                    l.removeEventListener("pointerleave", g), u.removeEventListener("pointerleave", m)
                }
            }
        }, [l, u, f, d]), S.useEffect(() => {
            if (i) {
                const g = m => {
                    const y = m.target,
                        v = {
                            x: m.clientX,
                            y: m.clientY
                        },
                        h = (l == null ? void 0 : l.contains(y)) || (u == null ? void 0 : u.contains(y)),
                        x = !w3(v, i);
                    h ? d() : x && (d(), c())
                };
                return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g)
            }
        }, [l, u, i, c, d]), w.jsx(X1, { ...t,
            ref: a
        })
    }),
    [m3, h3] = Bd(G1, {
        isInside: !1
    }),
    X1 = S.forwardRef((t, e) => {
        const {
            __scopeTooltip: n,
            children: o,
            "aria-label": r,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...s
        } = t, l = Ld(us, n), c = zh(n), {
            onClose: u
        } = l;
        return S.useEffect(() => (document.addEventListener(Y0, u), () => document.removeEventListener(Y0, u)), [u]), S.useEffect(() => {
            if (l.trigger) {
                const p = d => {
                    const f = d.target;
                    f != null && f.contains(l.trigger) && u()
                };
                return window.addEventListener("scroll", p, {
                    capture: !0
                }), () => window.removeEventListener("scroll", p, {
                    capture: !0
                })
            }
        }, [l.trigger, u]), w.jsx(S1, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: p => p.preventDefault(),
            onDismiss: u,
            children: w.jsxs(o3, {
                "data-state": l.stateAttribute,
                ...c,
                ...s,
                ref: e,
                style: { ...s.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [w.jsx(Ey, {
                    children: o
                }), w.jsx(m3, {
                    scope: n,
                    isInside: !0,
                    children: w.jsx(QC, {
                        id: l.contentId,
                        role: "tooltip",
                        children: r || o
                    })
                })]
            })
        })
    });
Q1.displayName = us;
var q1 = "TooltipArrow",
    v3 = S.forwardRef((t, e) => {
        const {
            __scopeTooltip: n,
            ...o
        } = t, r = zh(n);
        return h3(q1, n).isInside ? null : w.jsx(r3, { ...r,
            ...o,
            ref: e
        })
    });
v3.displayName = q1;

function g3(t, e) {
    const n = Math.abs(e.top - t.y),
        o = Math.abs(e.bottom - t.y),
        r = Math.abs(e.right - t.x),
        a = Math.abs(e.left - t.x);
    switch (Math.min(n, o, r, a)) {
        case a:
            return "left";
        case r:
            return "right";
        case n:
            return "top";
        case o:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function x3(t, e, n = 5) {
    const o = [];
    switch (e) {
        case "top":
            o.push({
                x: t.x - n,
                y: t.y + n
            }, {
                x: t.x + n,
                y: t.y + n
            });
            break;
        case "bottom":
            o.push({
                x: t.x - n,
                y: t.y - n
            }, {
                x: t.x + n,
                y: t.y - n
            });
            break;
        case "left":
            o.push({
                x: t.x + n,
                y: t.y - n
            }, {
                x: t.x + n,
                y: t.y + n
            });
            break;
        case "right":
            o.push({
                x: t.x - n,
                y: t.y - n
            }, {
                x: t.x - n,
                y: t.y + n
            });
            break
    }
    return o
}

function y3(t) {
    const {
        top: e,
        right: n,
        bottom: o,
        left: r
    } = t;
    return [{
        x: r,
        y: e
    }, {
        x: n,
        y: e
    }, {
        x: n,
        y: o
    }, {
        x: r,
        y: o
    }]
}

function w3(t, e) {
    const {
        x: n,
        y: o
    } = t;
    let r = !1;
    for (let a = 0, i = e.length - 1; a < e.length; i = a++) {
        const s = e[a].x,
            l = e[a].y,
            c = e[i].x,
            u = e[i].y;
        l > o != u > o && n < (c - s) * (o - l) / (u - l) + s && (r = !r)
    }
    return r
}

function _3(t) {
    const e = t.slice();
    return e.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), S3(e)
}

function S3(t) {
    if (t.length <= 1) return t.slice();
    const e = [];
    for (let o = 0; o < t.length; o++) {
        const r = t[o];
        for (; e.length >= 2;) {
            const a = e[e.length - 1],
                i = e[e.length - 2];
            if ((a.x - i.x) * (r.y - i.y) >= (a.y - i.y) * (r.x - i.x)) e.pop();
            else break
        }
        e.push(r)
    }
    e.pop();
    const n = [];
    for (let o = t.length - 1; o >= 0; o--) {
        const r = t[o];
        for (; n.length >= 2;) {
            const a = n[n.length - 1],
                i = n[n.length - 2];
            if ((a.x - i.x) * (r.y - i.y) >= (a.y - i.y) * (r.x - i.x)) n.pop();
            else break
        }
        n.push(r)
    }
    return n.pop(), e.length === 1 && n.length === 1 && e[0].x === n[0].x && e[0].y === n[0].y ? e : e.concat(n)
}
var b3 = Y1,
    K1 = Q1;
const C3 = b3,
    T3 = S.forwardRef(({
        className: t,
        sideOffset: e = 4,
        ...n
    }, o) => w.jsx(K1, {
        "data-lov-id": "src/components/ui/tooltip.tsx:16:2",
        "data-lov-name": "TooltipPrimitive.Content",
        "data-component-path": "src/components/ui/tooltip.tsx",
        "data-component-line": "16",
        "data-component-file": "tooltip.tsx",
        "data-component-name": "TooltipPrimitive.Content",
        "data-component-content": "%7B%7D",
        ref: o,
        sideOffset: e,
        className: Er("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
        ...n
    }));
T3.displayName = K1.displayName;
var Id = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(t) {
            return this.listeners.add(t), this.onSubscribe(), () => {
                this.listeners.delete(t), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    zd = typeof window > "u" || "Deno" in globalThis;

function bo() {}

function E3(t, e) {
    return typeof t == "function" ? t(e) : t
}

function A3(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}

function N3(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}

function G0(t, e) {
    return typeof t == "function" ? t(e) : t
}

function P3(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Q0(t, e) {
    const {
        type: n = "all",
        exact: o,
        fetchStatus: r,
        predicate: a,
        queryKey: i,
        stale: s
    } = t;
    if (i) {
        if (o) {
            if (e.queryHash !== $h(i, e.options)) return !1
        } else if (!Wl(e.queryKey, i)) return !1
    }
    if (n !== "all") {
        const l = e.isActive();
        if (n === "active" && !l || n === "inactive" && l) return !1
    }
    return !(typeof s == "boolean" && e.isStale() !== s || r && r !== e.state.fetchStatus || a && !a(e))
}

function X0(t, e) {
    const {
        exact: n,
        status: o,
        predicate: r,
        mutationKey: a
    } = t;
    if (a) {
        if (!e.options.mutationKey) return !1;
        if (n) {
            if (Vl(e.options.mutationKey) !== Vl(a)) return !1
        } else if (!Wl(e.options.mutationKey, a)) return !1
    }
    return !(o && e.state.status !== o || r && !r(e))
}

function $h(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || Vl)(t)
}

function Vl(t) {
    return JSON.stringify(t, (e, n) => em(n) ? Object.keys(n).sort().reduce((o, r) => (o[r] = n[r], o), {}) : n)
}

function Wl(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some(n => !Wl(t[n], e[n])) : !1
}

function Z1(t, e) {
    if (t === e) return t;
    const n = q0(t) && q0(e);
    if (n || em(t) && em(e)) {
        const o = n ? t : Object.keys(t),
            r = o.length,
            a = n ? e : Object.keys(e),
            i = a.length,
            s = n ? [] : {};
        let l = 0;
        for (let c = 0; c < i; c++) {
            const u = n ? c : a[c];
            (!n && o.includes(u) || n) && t[u] === void 0 && e[u] === void 0 ? (s[u] = void 0, l++) : (s[u] = Z1(t[u], e[u]), s[u] === t[u] && t[u] !== void 0 && l++)
        }
        return r === i && l === r ? t : s
    }
    return e
}

function q0(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}

function em(t) {
    if (!K0(t)) return !1;
    const e = t.constructor;
    if (e === void 0) return !0;
    const n = e.prototype;
    return !(!K0(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}

function K0(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function k3(t) {
    return new Promise(e => {
        setTimeout(e, t)
    })
}

function D3(t, e, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== !1 ? Z1(t, e) : e
}

function R3(t, e, n = 0) {
    const o = [...t, e];
    return n && o.length > n ? o.slice(1) : o
}

function O3(t, e, n = 0) {
    const o = [e, ...t];
    return n && o.length > n ? o.slice(0, -1) : o
}
var J1 = Symbol();

function ew(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === J1 ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
var ja, Fr, Gi, ng, M3 = (ng = class extends Id {
        constructor() {
            super();
            _e(this, ja);
            _e(this, Fr);
            _e(this, Gi);
            le(this, Gi, e => {
                if (!zd && window.addEventListener) {
                    const n = () => e();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            O(this, Fr) || this.setEventListener(O(this, Gi))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = O(this, Fr)) == null || e.call(this), le(this, Fr, void 0))
        }
        setEventListener(e) {
            var n;
            le(this, Gi, e), (n = O(this, Fr)) == null || n.call(this), le(this, Fr, e(o => {
                typeof o == "boolean" ? this.setFocused(o) : this.onFocus()
            }))
        }
        setFocused(e) {
            O(this, ja) !== e && (le(this, ja, e), this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(n => {
                n(e)
            })
        }
        isFocused() {
            var e;
            return typeof O(this, ja) == "boolean" ? O(this, ja) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
        }
    }, ja = new WeakMap, Fr = new WeakMap, Gi = new WeakMap, ng),
    tw = new M3,
    Qi, Br, Xi, og, j3 = (og = class extends Id {
        constructor() {
            super();
            _e(this, Qi, !0);
            _e(this, Br);
            _e(this, Xi);
            le(this, Xi, e => {
                if (!zd && window.addEventListener) {
                    const n = () => e(!0),
                        o = () => e(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", o, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", o)
                    }
                }
            })
        }
        onSubscribe() {
            O(this, Br) || this.setEventListener(O(this, Xi))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = O(this, Br)) == null || e.call(this), le(this, Br, void 0))
        }
        setEventListener(e) {
            var n;
            le(this, Xi, e), (n = O(this, Br)) == null || n.call(this), le(this, Br, e(this.setOnline.bind(this)))
        }
        setOnline(e) {
            O(this, Qi) !== e && (le(this, Qi, e), this.listeners.forEach(o => {
                o(e)
            }))
        }
        isOnline() {
            return O(this, Qi)
        }
    }, Qi = new WeakMap, Br = new WeakMap, Xi = new WeakMap, og),
    Zu = new j3;

function F3(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}

function nw(t) {
    return (t ? ? "online") === "online" ? Zu.isOnline() : !0
}
var ow = class extends Error {
    constructor(t) {
        super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent
    }
};

function Np(t) {
    return t instanceof ow
}

function rw(t) {
    let e = !1,
        n = 0,
        o = !1,
        r, a, i;
    const s = new Promise((v, h) => {
            a = v, i = h
        }),
        l = v => {
            var h;
            o || (g(new ow(v)), (h = t.abort) == null || h.call(t))
        },
        c = () => {
            e = !0
        },
        u = () => {
            e = !1
        },
        p = () => tw.isFocused() && (t.networkMode === "always" || Zu.isOnline()) && t.canRun(),
        d = () => nw(t.networkMode) && t.canRun(),
        f = v => {
            var h;
            o || (o = !0, (h = t.onSuccess) == null || h.call(t, v), r == null || r(), a(v))
        },
        g = v => {
            var h;
            o || (o = !0, (h = t.onError) == null || h.call(t, v), r == null || r(), i(v))
        },
        m = () => new Promise(v => {
            var h;
            r = x => {
                (o || p()) && v(x)
            }, (h = t.onPause) == null || h.call(t)
        }).then(() => {
            var v;
            r = void 0, o || (v = t.onContinue) == null || v.call(t)
        }),
        y = () => {
            if (o) return;
            let v;
            const h = n === 0 ? t.initialPromise : void 0;
            try {
                v = h ? ? t.fn()
            } catch (x) {
                v = Promise.reject(x)
            }
            Promise.resolve(v).then(f).catch(x => {
                var A;
                if (o) return;
                const _ = t.retry ? ? (zd ? 0 : 3),
                    b = t.retryDelay ? ? F3,
                    E = typeof b == "function" ? b(n, x) : b,
                    C = _ === !0 || typeof _ == "number" && n < _ || typeof _ == "function" && _(n, x);
                if (e || !C) {
                    g(x);
                    return
                }
                n++, (A = t.onFail) == null || A.call(t, n, x), k3(E).then(() => p() ? void 0 : m()).then(() => {
                    e ? g(x) : y()
                })
            })
        };
    return {
        promise: s,
        cancel: l,
        continue: () => (r == null || r(), s),
        cancelRetry: c,
        continueRetry: u,
        canStart: d,
        start: () => (d() ? y() : m().then(y), s)
    }
}

function B3() {
    let t = [],
        e = 0,
        n = s => {
            s()
        },
        o = s => {
            s()
        },
        r = s => setTimeout(s, 0);
    const a = s => {
            e ? t.push(s) : r(() => {
                n(s)
            })
        },
        i = () => {
            const s = t;
            t = [], s.length && r(() => {
                o(() => {
                    s.forEach(l => {
                        n(l)
                    })
                })
            })
        };
    return {
        batch: s => {
            let l;
            e++;
            try {
                l = s()
            } finally {
                e--, e || i()
            }
            return l
        },
        batchCalls: s => (...l) => {
            a(() => {
                s(...l)
            })
        },
        schedule: a,
        setNotifyFunction: s => {
            n = s
        },
        setBatchNotifyFunction: s => {
            o = s
        },
        setScheduler: s => {
            r = s
        }
    }
}
var un = B3(),
    Fa, rg, aw = (rg = class {
        constructor() {
            _e(this, Fa)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), A3(this.gcTime) && le(this, Fa, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ? ? (zd ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            O(this, Fa) && (clearTimeout(O(this, Fa)), le(this, Fa, void 0))
        }
    }, Fa = new WeakMap, rg),
    qi, Ki, no, Yt, nc, Ba, Co, ar, ag, L3 = (ag = class extends aw {
        constructor(e) {
            super();
            _e(this, Co);
            _e(this, qi);
            _e(this, Ki);
            _e(this, no);
            _e(this, Yt);
            _e(this, nc);
            _e(this, Ba);
            le(this, Ba, !1), le(this, nc, e.defaultOptions), this.setOptions(e.options), this.observers = [], le(this, no, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, le(this, qi, z3(this.options)), this.state = e.state ? ? O(this, qi), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var e;
            return (e = O(this, Yt)) == null ? void 0 : e.promise
        }
        setOptions(e) {
            this.options = { ...O(this, nc),
                ...e
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && O(this, no).remove(this)
        }
        setData(e, n) {
            const o = D3(this.state.data, e, this.options);
            return Ht(this, Co, ar).call(this, {
                data: o,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), o
        }
        setState(e, n) {
            Ht(this, Co, ar).call(this, {
                type: "setState",
                state: e,
                setStateOptions: n
            })
        }
        cancel(e) {
            var o, r;
            const n = (o = O(this, Yt)) == null ? void 0 : o.promise;
            return (r = O(this, Yt)) == null || r.cancel(e), n ? n.then(bo).catch(bo) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(O(this, qi))
        }
        isActive() {
            return this.observers.some(e => P3(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(e = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !N3(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            var n;
            const e = this.observers.find(o => o.shouldFetchOnWindowFocus());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (n = O(this, Yt)) == null || n.continue()
        }
        onOnline() {
            var n;
            const e = this.observers.find(o => o.shouldFetchOnReconnect());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (n = O(this, Yt)) == null || n.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), O(this, no).notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(n => n !== e), this.observers.length || (O(this, Yt) && (O(this, Ba) ? O(this, Yt).cancel({
                revert: !0
            }) : O(this, Yt).cancelRetry()), this.scheduleGc()), O(this, no).notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Ht(this, Co, ar).call(this, {
                type: "invalidate"
            })
        }
        fetch(e, n) {
            var l, c, u;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (O(this, Yt)) return O(this, Yt).continueRetry(), O(this, Yt).promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const p = this.observers.find(d => d.options.queryFn);
                p && this.setOptions(p.options)
            }
            const o = new AbortController,
                r = p => {
                    Object.defineProperty(p, "signal", {
                        enumerable: !0,
                        get: () => (le(this, Ba, !0), o.signal)
                    })
                },
                a = () => {
                    const p = ew(this.options, n),
                        d = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return r(d), le(this, Ba, !1), this.options.persister ? this.options.persister(p, d, this) : p(d)
                },
                i = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: a
                };
            r(i), (l = this.options.behavior) == null || l.onFetch(i, this), le(this, Ki, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = i.fetchOptions) == null ? void 0 : c.meta)) && Ht(this, Co, ar).call(this, {
                type: "fetch",
                meta: (u = i.fetchOptions) == null ? void 0 : u.meta
            });
            const s = p => {
                var d, f, g, m;
                Np(p) && p.silent || Ht(this, Co, ar).call(this, {
                    type: "error",
                    error: p
                }), Np(p) || ((f = (d = O(this, no).config).onError) == null || f.call(d, p, this), (m = (g = O(this, no).config).onSettled) == null || m.call(g, this.state.data, p, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            };
            return le(this, Yt, rw({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: i.fetchFn,
                abort: o.abort.bind(o),
                onSuccess: p => {
                    var d, f, g, m;
                    if (p === void 0) {
                        s(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(p)
                    } catch (y) {
                        s(y);
                        return
                    }(f = (d = O(this, no).config).onSuccess) == null || f.call(d, p, this), (m = (g = O(this, no).config).onSettled) == null || m.call(g, p, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                },
                onError: s,
                onFail: (p, d) => {
                    Ht(this, Co, ar).call(this, {
                        type: "failed",
                        failureCount: p,
                        error: d
                    })
                },
                onPause: () => {
                    Ht(this, Co, ar).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Ht(this, Co, ar).call(this, {
                        type: "continue"
                    })
                },
                retry: i.options.retry,
                retryDelay: i.options.retryDelay,
                networkMode: i.options.networkMode,
                canRun: () => !0
            })), O(this, Yt).start()
        }
    }, qi = new WeakMap, Ki = new WeakMap, no = new WeakMap, Yt = new WeakMap, nc = new WeakMap, Ba = new WeakMap, Co = new WeakSet, ar = function(e) {
        const n = o => {
            switch (e.type) {
                case "failed":
                    return { ...o,
                        fetchFailureCount: e.failureCount,
                        fetchFailureReason: e.error
                    };
                case "pause":
                    return { ...o,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...o,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...o,
                        ...I3(o.data, this.options),
                        fetchMeta: e.meta ? ? null
                    };
                case "success":
                    return { ...o,
                        data: e.data,
                        dataUpdateCount: o.dataUpdateCount + 1,
                        dataUpdatedAt: e.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const r = e.error;
                    return Np(r) && r.revert && O(this, Ki) ? { ...O(this, Ki),
                        fetchStatus: "idle"
                    } : { ...o,
                        error: r,
                        errorUpdateCount: o.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: o.fetchFailureCount + 1,
                        fetchFailureReason: r,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...o,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...o,
                        ...e.state
                    }
            }
        };
        this.state = n(this.state), un.batch(() => {
            this.observers.forEach(o => {
                o.onQueryUpdate()
            }), O(this, no).notify({
                query: this,
                type: "updated",
                action: e
            })
        })
    }, ag);

function I3(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: nw(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function z3(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData,
        n = e !== void 0,
        o = n ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? o ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var $o, ig, $3 = (ig = class extends Id {
        constructor(e = {}) {
            super();
            _e(this, $o);
            this.config = e, le(this, $o, new Map)
        }
        build(e, n, o) {
            const r = n.queryKey,
                a = n.queryHash ? ? $h(r, n);
            let i = this.get(a);
            return i || (i = new L3({
                cache: this,
                queryKey: r,
                queryHash: a,
                options: e.defaultQueryOptions(n),
                state: o,
                defaultOptions: e.getQueryDefaults(r)
            }), this.add(i)), i
        }
        add(e) {
            O(this, $o).has(e.queryHash) || (O(this, $o).set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const n = O(this, $o).get(e.queryHash);
            n && (e.destroy(), n === e && O(this, $o).delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            un.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return O(this, $o).get(e)
        }
        getAll() {
            return [...O(this, $o).values()]
        }
        find(e) {
            const n = {
                exact: !0,
                ...e
            };
            return this.getAll().find(o => Q0(n, o))
        }
        findAll(e = {}) {
            const n = this.getAll();
            return Object.keys(e).length > 0 ? n.filter(o => Q0(e, o)) : n
        }
        notify(e) {
            un.batch(() => {
                this.listeners.forEach(n => {
                    n(e)
                })
            })
        }
        onFocus() {
            un.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            un.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    }, $o = new WeakMap, ig),
    Ho, rn, La, Uo, kr, sg, H3 = (sg = class extends aw {
        constructor(e) {
            super();
            _e(this, Uo);
            _e(this, Ho);
            _e(this, rn);
            _e(this, La);
            this.mutationId = e.mutationId, le(this, rn, e.mutationCache), le(this, Ho, []), this.state = e.state || U3(), this.setOptions(e.options), this.scheduleGc()
        }
        setOptions(e) {
            this.options = e, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(e) {
            O(this, Ho).includes(e) || (O(this, Ho).push(e), this.clearGcTimeout(), O(this, rn).notify({
                type: "observerAdded",
                mutation: this,
                observer: e
            }))
        }
        removeObserver(e) {
            le(this, Ho, O(this, Ho).filter(n => n !== e)), this.scheduleGc(), O(this, rn).notify({
                type: "observerRemoved",
                mutation: this,
                observer: e
            })
        }
        optionalRemove() {
            O(this, Ho).length || (this.state.status === "pending" ? this.scheduleGc() : O(this, rn).remove(this))
        }
        continue () {
            var e;
            return ((e = O(this, La)) == null ? void 0 : e.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(e) {
            var r, a, i, s, l, c, u, p, d, f, g, m, y, v, h, x, _, b, E, C;
            le(this, La, rw({
                fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
                onFail: (A, P) => {
                    Ht(this, Uo, kr).call(this, {
                        type: "failed",
                        failureCount: A,
                        error: P
                    })
                },
                onPause: () => {
                    Ht(this, Uo, kr).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Ht(this, Uo, kr).call(this, {
                        type: "continue"
                    })
                },
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => O(this, rn).canRun(this)
            }));
            const n = this.state.status === "pending",
                o = !O(this, La).canStart();
            try {
                if (!n) {
                    Ht(this, Uo, kr).call(this, {
                        type: "pending",
                        variables: e,
                        isPaused: o
                    }), await ((a = (r = O(this, rn).config).onMutate) == null ? void 0 : a.call(r, e, this));
                    const P = await ((s = (i = this.options).onMutate) == null ? void 0 : s.call(i, e));
                    P !== this.state.context && Ht(this, Uo, kr).call(this, {
                        type: "pending",
                        context: P,
                        variables: e,
                        isPaused: o
                    })
                }
                const A = await O(this, La).start();
                return await ((c = (l = O(this, rn).config).onSuccess) == null ? void 0 : c.call(l, A, e, this.state.context, this)), await ((p = (u = this.options).onSuccess) == null ? void 0 : p.call(u, A, e, this.state.context)), await ((f = (d = O(this, rn).config).onSettled) == null ? void 0 : f.call(d, A, null, this.state.variables, this.state.context, this)), await ((m = (g = this.options).onSettled) == null ? void 0 : m.call(g, A, null, e, this.state.context)), Ht(this, Uo, kr).call(this, {
                    type: "success",
                    data: A
                }), A
            } catch (A) {
                try {
                    throw await ((v = (y = O(this, rn).config).onError) == null ? void 0 : v.call(y, A, e, this.state.context, this)), await ((x = (h = this.options).onError) == null ? void 0 : x.call(h, A, e, this.state.context)), await ((b = (_ = O(this, rn).config).onSettled) == null ? void 0 : b.call(_, void 0, A, this.state.variables, this.state.context, this)), await ((C = (E = this.options).onSettled) == null ? void 0 : C.call(E, void 0, A, e, this.state.context)), A
                } finally {
                    Ht(this, Uo, kr).call(this, {
                        type: "error",
                        error: A
                    })
                }
            } finally {
                O(this, rn).runNext(this)
            }
        }
    }, Ho = new WeakMap, rn = new WeakMap, La = new WeakMap, Uo = new WeakSet, kr = function(e) {
        const n = o => {
            switch (e.type) {
                case "failed":
                    return { ...o,
                        failureCount: e.failureCount,
                        failureReason: e.error
                    };
                case "pause":
                    return { ...o,
                        isPaused: !0
                    };
                case "continue":
                    return { ...o,
                        isPaused: !1
                    };
                case "pending":
                    return { ...o,
                        context: e.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: e.isPaused,
                        status: "pending",
                        variables: e.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...o,
                        data: e.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...o,
                        data: void 0,
                        error: e.error,
                        failureCount: o.failureCount + 1,
                        failureReason: e.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), un.batch(() => {
            O(this, Ho).forEach(o => {
                o.onMutationUpdate(e)
            }), O(this, rn).notify({
                mutation: this,
                type: "updated",
                action: e
            })
        })
    }, sg);

function U3() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Rn, oc, lg, V3 = (lg = class extends Id {
    constructor(e = {}) {
        super();
        _e(this, Rn);
        _e(this, oc);
        this.config = e, le(this, Rn, new Map), le(this, oc, Date.now())
    }
    build(e, n, o) {
        const r = new H3({
            mutationCache: this,
            mutationId: ++fc(this, oc)._,
            options: e.defaultMutationOptions(n),
            state: o
        });
        return this.add(r), r
    }
    add(e) {
        const n = Fc(e),
            o = O(this, Rn).get(n) ? ? [];
        o.push(e), O(this, Rn).set(n, o), this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        var o;
        const n = Fc(e);
        if (O(this, Rn).has(n)) {
            const r = (o = O(this, Rn).get(n)) == null ? void 0 : o.filter(a => a !== e);
            r && (r.length === 0 ? O(this, Rn).delete(n) : O(this, Rn).set(n, r))
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        var o;
        const n = (o = O(this, Rn).get(Fc(e))) == null ? void 0 : o.find(r => r.state.status === "pending");
        return !n || n === e
    }
    runNext(e) {
        var o;
        const n = (o = O(this, Rn).get(Fc(e))) == null ? void 0 : o.find(r => r !== e && r.state.isPaused);
        return (n == null ? void 0 : n.continue()) ? ? Promise.resolve()
    }
    clear() {
        un.batch(() => {
            this.getAll().forEach(e => {
                this.remove(e)
            })
        })
    }
    getAll() {
        return [...O(this, Rn).values()].flat()
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(o => X0(n, o))
    }
    findAll(e = {}) {
        return this.getAll().filter(n => X0(e, n))
    }
    notify(e) {
        un.batch(() => {
            this.listeners.forEach(n => {
                n(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(n => n.state.isPaused);
        return un.batch(() => Promise.all(e.map(n => n.continue().catch(bo))))
    }
}, Rn = new WeakMap, oc = new WeakMap, lg);

function Fc(t) {
    var e;
    return ((e = t.options.scope) == null ? void 0 : e.id) ? ? String(t.mutationId)
}

function Z0(t) {
    return {
        onFetch: (e, n) => {
            var u, p, d, f, g;
            const o = e.options,
                r = (d = (p = (u = e.fetchOptions) == null ? void 0 : u.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : d.direction,
                a = ((f = e.state.data) == null ? void 0 : f.pages) || [],
                i = ((g = e.state.data) == null ? void 0 : g.pageParams) || [];
            let s = {
                    pages: [],
                    pageParams: []
                },
                l = 0;
            const c = async () => {
                let m = !1;
                const y = x => {
                        Object.defineProperty(x, "signal", {
                            enumerable: !0,
                            get: () => (e.signal.aborted ? m = !0 : e.signal.addEventListener("abort", () => {
                                m = !0
                            }), e.signal)
                        })
                    },
                    v = ew(e.options, e.fetchOptions),
                    h = async (x, _, b) => {
                        if (m) return Promise.reject();
                        if (_ == null && x.pages.length) return Promise.resolve(x);
                        const E = {
                            queryKey: e.queryKey,
                            pageParam: _,
                            direction: b ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        y(E);
                        const C = await v(E),
                            {
                                maxPages: A
                            } = e.options,
                            P = b ? O3 : R3;
                        return {
                            pages: P(x.pages, C, A),
                            pageParams: P(x.pageParams, _, A)
                        }
                    };
                if (r && a.length) {
                    const x = r === "backward",
                        _ = x ? W3 : J0,
                        b = {
                            pages: a,
                            pageParams: i
                        },
                        E = _(o, b);
                    s = await h(b, E, x)
                } else {
                    const x = t ? ? a.length;
                    do {
                        const _ = l === 0 ? i[0] ? ? o.initialPageParam : J0(o, s);
                        if (l > 0 && _ == null) break;
                        s = await h(s, _), l++
                    } while (l < x)
                }
                return s
            };
            e.options.persister ? e.fetchFn = () => {
                var m, y;
                return (y = (m = e.options).persister) == null ? void 0 : y.call(m, c, {
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, n)
            } : e.fetchFn = c
        }
    }
}

function J0(t, {
    pages: e,
    pageParams: n
}) {
    const o = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[o], e, n[o], n) : void 0
}

function W3(t, {
    pages: e,
    pageParams: n
}) {
    var o;
    return e.length > 0 ? (o = t.getPreviousPageParam) == null ? void 0 : o.call(t, e[0], e, n[0], n) : void 0
}
var Je, Lr, Ir, Zi, Ji, zr, es, ts, cg, Y3 = (cg = class {
        constructor(t = {}) {
            _e(this, Je);
            _e(this, Lr);
            _e(this, Ir);
            _e(this, Zi);
            _e(this, Ji);
            _e(this, zr);
            _e(this, es);
            _e(this, ts);
            le(this, Je, t.queryCache || new $3), le(this, Lr, t.mutationCache || new V3), le(this, Ir, t.defaultOptions || {}), le(this, Zi, new Map), le(this, Ji, new Map), le(this, zr, 0)
        }
        mount() {
            fc(this, zr)._++, O(this, zr) === 1 && (le(this, es, tw.subscribe(async t => {
                t && (await this.resumePausedMutations(), O(this, Je).onFocus())
            })), le(this, ts, Zu.subscribe(async t => {
                t && (await this.resumePausedMutations(), O(this, Je).onOnline())
            })))
        }
        unmount() {
            var t, e;
            fc(this, zr)._--, O(this, zr) === 0 && ((t = O(this, es)) == null || t.call(this), le(this, es, void 0), (e = O(this, ts)) == null || e.call(this), le(this, ts, void 0))
        }
        isFetching(t) {
            return O(this, Je).findAll({ ...t,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(t) {
            return O(this, Lr).findAll({ ...t,
                status: "pending"
            }).length
        }
        getQueryData(t) {
            var n;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (n = O(this, Je).get(e.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(t) {
            const e = this.getQueryData(t.queryKey);
            if (e === void 0) return this.fetchQuery(t); {
                const n = this.defaultQueryOptions(t),
                    o = O(this, Je).build(this, n);
                return t.revalidateIfStale && o.isStaleByTime(G0(n.staleTime, o)) && this.prefetchQuery(n), Promise.resolve(e)
            }
        }
        getQueriesData(t) {
            return O(this, Je).findAll(t).map(({
                queryKey: e,
                state: n
            }) => {
                const o = n.data;
                return [e, o]
            })
        }
        setQueryData(t, e, n) {
            const o = this.defaultQueryOptions({
                    queryKey: t
                }),
                r = O(this, Je).get(o.queryHash),
                a = r == null ? void 0 : r.state.data,
                i = E3(e, a);
            if (i !== void 0) return O(this, Je).build(this, o).setData(i, { ...n,
                manual: !0
            })
        }
        setQueriesData(t, e, n) {
            return un.batch(() => O(this, Je).findAll(t).map(({
                queryKey: o
            }) => [o, this.setQueryData(o, e, n)]))
        }
        getQueryState(t) {
            var n;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (n = O(this, Je).get(e.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(t) {
            const e = O(this, Je);
            un.batch(() => {
                e.findAll(t).forEach(n => {
                    e.remove(n)
                })
            })
        }
        resetQueries(t, e) {
            const n = O(this, Je),
                o = {
                    type: "active",
                    ...t
                };
            return un.batch(() => (n.findAll(t).forEach(r => {
                r.reset()
            }), this.refetchQueries(o, e)))
        }
        cancelQueries(t = {}, e = {}) {
            const n = {
                    revert: !0,
                    ...e
                },
                o = un.batch(() => O(this, Je).findAll(t).map(r => r.cancel(n)));
            return Promise.all(o).then(bo).catch(bo)
        }
        invalidateQueries(t = {}, e = {}) {
            return un.batch(() => {
                if (O(this, Je).findAll(t).forEach(o => {
                        o.invalidate()
                    }), t.refetchType === "none") return Promise.resolve();
                const n = { ...t,
                    type: t.refetchType ? ? t.type ? ? "active"
                };
                return this.refetchQueries(n, e)
            })
        }
        refetchQueries(t = {}, e) {
            const n = { ...e,
                    cancelRefetch: (e == null ? void 0 : e.cancelRefetch) ? ? !0
                },
                o = un.batch(() => O(this, Je).findAll(t).filter(r => !r.isDisabled()).map(r => {
                    let a = r.fetch(void 0, n);
                    return n.throwOnError || (a = a.catch(bo)), r.state.fetchStatus === "paused" ? Promise.resolve() : a
                }));
            return Promise.all(o).then(bo)
        }
        fetchQuery(t) {
            const e = this.defaultQueryOptions(t);
            e.retry === void 0 && (e.retry = !1);
            const n = O(this, Je).build(this, e);
            return n.isStaleByTime(G0(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data)
        }
        prefetchQuery(t) {
            return this.fetchQuery(t).then(bo).catch(bo)
        }
        fetchInfiniteQuery(t) {
            return t.behavior = Z0(t.pages), this.fetchQuery(t)
        }
        prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(bo).catch(bo)
        }
        ensureInfiniteQueryData(t) {
            return t.behavior = Z0(t.pages), this.ensureQueryData(t)
        }
        resumePausedMutations() {
            return Zu.isOnline() ? O(this, Lr).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return O(this, Je)
        }
        getMutationCache() {
            return O(this, Lr)
        }
        getDefaultOptions() {
            return O(this, Ir)
        }
        setDefaultOptions(t) {
            le(this, Ir, t)
        }
        setQueryDefaults(t, e) {
            O(this, Zi).set(Vl(t), {
                queryKey: t,
                defaultOptions: e
            })
        }
        getQueryDefaults(t) {
            const e = [...O(this, Zi).values()];
            let n = {};
            return e.forEach(o => {
                Wl(t, o.queryKey) && (n = { ...n,
                    ...o.defaultOptions
                })
            }), n
        }
        setMutationDefaults(t, e) {
            O(this, Ji).set(Vl(t), {
                mutationKey: t,
                defaultOptions: e
            })
        }
        getMutationDefaults(t) {
            const e = [...O(this, Ji).values()];
            let n = {};
            return e.forEach(o => {
                Wl(t, o.mutationKey) && (n = { ...n,
                    ...o.defaultOptions
                })
            }), n
        }
        defaultQueryOptions(t) {
            if (t._defaulted) return t;
            const e = { ...O(this, Ir).queries,
                ...this.getQueryDefaults(t.queryKey),
                ...t,
                _defaulted: !0
            };
            return e.queryHash || (e.queryHash = $h(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.enabled !== !0 && e.queryFn === J1 && (e.enabled = !1), e
        }
        defaultMutationOptions(t) {
            return t != null && t._defaulted ? t : { ...O(this, Ir).mutations,
                ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
                ...t,
                _defaulted: !0
            }
        }
        clear() {
            O(this, Je).clear(), O(this, Lr).clear()
        }
    }, Je = new WeakMap, Lr = new WeakMap, Ir = new WeakMap, Zi = new WeakMap, Ji = new WeakMap, zr = new WeakMap, es = new WeakMap, ts = new WeakMap, cg),
    G3 = S.createContext(void 0),
    Q3 = ({
        client: t,
        children: e
    }) => (S.useEffect(() => (t.mount(), () => {
        t.unmount()
    }), [t]), w.jsx(G3.Provider, {
        value: t,
        children: e
    }));
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ju() {
    return Ju = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }, Ju.apply(this, arguments)
}
var Ur;
(function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(Ur || (Ur = {}));
const ev = "popstate";

function X3(t) {
    t === void 0 && (t = {});

    function e(o, r) {
        let {
            pathname: a,
            search: i,
            hash: s
        } = o.location;
        return tm("", {
            pathname: a,
            search: i,
            hash: s
        }, r.state && r.state.usr || null, r.state && r.state.key || "default")
    }

    function n(o, r) {
        return typeof r == "string" ? r : sw(r)
    }
    return K3(e, n, null, t)
}

function Nn(t, e) {
    if (t === !1 || t === null || typeof t > "u") throw new Error(e)
}

function iw(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}

function q3() {
    return Math.random().toString(36).substr(2, 8)
}

function tv(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}

function tm(t, e, n, o) {
    return n === void 0 && (n = null), Ju({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? $d(e) : e, {
        state: n,
        key: e && e.key || o || q3()
    })
}

function sw(t) {
    let {
        pathname: e = "/",
        search: n = "",
        hash: o = ""
    } = t;
    return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), o && o !== "#" && (e += o.charAt(0) === "#" ? o : "#" + o), e
}

function $d(t) {
    let e = {};
    if (t) {
        let n = t.indexOf("#");
        n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
        let o = t.indexOf("?");
        o >= 0 && (e.search = t.substr(o), t = t.substr(0, o)), t && (e.pathname = t)
    }
    return e
}

function K3(t, e, n, o) {
    o === void 0 && (o = {});
    let {
        window: r = document.defaultView,
        v5Compat: a = !1
    } = o, i = r.history, s = Ur.Pop, l = null, c = u();
    c == null && (c = 0, i.replaceState(Ju({}, i.state, {
        idx: c
    }), ""));

    function u() {
        return (i.state || {
            idx: null
        }).idx
    }

    function p() {
        s = Ur.Pop;
        let y = u(),
            v = y == null ? null : y - c;
        c = y, l && l({
            action: s,
            location: m.location,
            delta: v
        })
    }

    function d(y, v) {
        s = Ur.Push;
        let h = tm(m.location, y, v);
        c = u() + 1;
        let x = tv(h, c),
            _ = m.createHref(h);
        try {
            i.pushState(x, "", _)
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError") throw b;
            r.location.assign(_)
        }
        a && l && l({
            action: s,
            location: m.location,
            delta: 1
        })
    }

    function f(y, v) {
        s = Ur.Replace;
        let h = tm(m.location, y, v);
        c = u();
        let x = tv(h, c),
            _ = m.createHref(h);
        i.replaceState(x, "", _), a && l && l({
            action: s,
            location: m.location,
            delta: 0
        })
    }

    function g(y) {
        let v = r.location.origin !== "null" ? r.location.origin : r.location.href,
            h = typeof y == "string" ? y : sw(y);
        return h = h.replace(/ $/, "%20"), Nn(v, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, v)
    }
    let m = {
        get action() {
            return s
        },
        get location() {
            return t(r, i)
        },
        listen(y) {
            if (l) throw new Error("A history only accepts one active listener");
            return r.addEventListener(ev, p), l = y, () => {
                r.removeEventListener(ev, p), l = null
            }
        },
        createHref(y) {
            return e(r, y)
        },
        createURL: g,
        encodeLocation(y) {
            let v = g(y);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: d,
        replace: f,
        go(y) {
            return i.go(y)
        }
    };
    return m
}
var nv;
(function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})(nv || (nv = {}));

function Z3(t, e, n) {
    return n === void 0 && (n = "/"), J3(t, e, n, !1)
}

function J3(t, e, n, o) {
    let r = typeof e == "string" ? $d(e) : e,
        a = uw(r.pathname || "/", n);
    if (a == null) return null;
    let i = lw(t);
    eN(i);
    let s = null;
    for (let l = 0; s == null && l < i.length; ++l) {
        let c = dN(a);
        s = cN(i[l], c, o)
    }
    return s
}

function lw(t, e, n, o) {
    e === void 0 && (e = []), n === void 0 && (n = []), o === void 0 && (o = "");
    let r = (a, i, s) => {
        let l = {
            relativePath: s === void 0 ? a.path || "" : s,
            caseSensitive: a.caseSensitive === !0,
            childrenIndex: i,
            route: a
        };
        l.relativePath.startsWith("/") && (Nn(l.relativePath.startsWith(o), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(o.length));
        let c = Ii([o, l.relativePath]),
            u = n.concat(l);
        a.children && a.children.length > 0 && (Nn(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), lw(a.children, e, u, c)), !(a.path == null && !a.index) && e.push({
            path: c,
            score: sN(c, a.index),
            routesMeta: u
        })
    };
    return t.forEach((a, i) => {
        var s;
        if (a.path === "" || !((s = a.path) != null && s.includes("?"))) r(a, i);
        else
            for (let l of cw(a.path)) r(a, i, l)
    }), e
}

function cw(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [n, ...o] = e, r = n.endsWith("?"), a = n.replace(/\?$/, "");
    if (o.length === 0) return r ? [a, ""] : [a];
    let i = cw(o.join("/")),
        s = [];
    return s.push(...i.map(l => l === "" ? a : [a, l].join("/"))), r && s.push(...i), s.map(l => t.startsWith("/") && l === "" ? "/" : l)
}

function eN(t) {
    t.sort((e, n) => e.score !== n.score ? n.score - e.score : lN(e.routesMeta.map(o => o.childrenIndex), n.routesMeta.map(o => o.childrenIndex)))
}
const tN = /^:[\w-]+$/,
    nN = 3,
    oN = 2,
    rN = 1,
    aN = 10,
    iN = -2,
    ov = t => t === "*";

function sN(t, e) {
    let n = t.split("/"),
        o = n.length;
    return n.some(ov) && (o += iN), e && (o += oN), n.filter(r => !ov(r)).reduce((r, a) => r + (tN.test(a) ? nN : a === "" ? rN : aN), o)
}

function lN(t, e) {
    return t.length === e.length && t.slice(0, -1).every((o, r) => o === e[r]) ? t[t.length - 1] - e[e.length - 1] : 0
}

function cN(t, e, n) {
    let {
        routesMeta: o
    } = t, r = {}, a = "/", i = [];
    for (let s = 0; s < o.length; ++s) {
        let l = o[s],
            c = s === o.length - 1,
            u = a === "/" ? e : e.slice(a.length) || "/",
            p = rv({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: c
            }, u),
            d = l.route;
        if (!p && c && n && !o[o.length - 1].route.index && (p = rv({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, u)), !p) return null;
        Object.assign(r, p.params), i.push({
            params: r,
            pathname: Ii([a, p.pathname]),
            pathnameBase: pN(Ii([a, p.pathnameBase])),
            route: d
        }), p.pathnameBase !== "/" && (a = Ii([a, p.pathnameBase]))
    }
    return i
}

function rv(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let [n, o] = uN(t.path, t.caseSensitive, t.end), r = e.match(n);
    if (!r) return null;
    let a = r[0],
        i = a.replace(/(.)\/+$/, "$1"),
        s = r.slice(1);
    return {
        params: o.reduce((c, u, p) => {
            let {
                paramName: d,
                isOptional: f
            } = u;
            if (d === "*") {
                let m = s[p] || "";
                i = a.slice(0, a.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const g = s[p];
            return f && !g ? c[d] = void 0 : c[d] = (g || "").replace(/%2F/g, "/"), c
        }, {}),
        pathname: a,
        pathnameBase: i,
        pattern: t
    }
}

function uN(t, e, n) {
    e === void 0 && (e = !1), n === void 0 && (n = !0), iw(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let o = [],
        r = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, s, l) => (o.push({
            paramName: s,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (o.push({
        paramName: "*"
    }), r += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? r += "\\/*$" : t !== "" && t !== "/" && (r += "(?:(?=\\/|$))"), [new RegExp(r, e ? void 0 : "i"), o]
}

function dN(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return iw(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t
    }
}

function uw(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length,
        o = t.charAt(n);
    return o && o !== "/" ? null : t.slice(n) || "/"
}
const Ii = t => t.join("/").replace(/\/\/+/g, "/"),
    pN = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");

function fN(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
const dw = ["post", "put", "patch", "delete"];
new Set(dw);
const mN = ["get", ...dw];
new Set(mN);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ed() {
    return ed = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }, ed.apply(this, arguments)
}
const hN = S.createContext(null),
    vN = S.createContext(null),
    pw = S.createContext(null),
    Hd = S.createContext(null),
    Ud = S.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    fw = S.createContext(null);

function Hh() {
    return S.useContext(Hd) != null
}

function mw() {
    return Hh() || Nn(!1), S.useContext(Hd).location
}

function gN(t, e) {
    return xN(t, e)
}

function xN(t, e, n, o) {
    Hh() || Nn(!1);
    let {
        navigator: r
    } = S.useContext(pw), {
        matches: a
    } = S.useContext(Ud), i = a[a.length - 1], s = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let c = mw(),
        u;
    if (e) {
        var p;
        let y = typeof e == "string" ? $d(e) : e;
        l === "/" || (p = y.pathname) != null && p.startsWith(l) || Nn(!1), u = y
    } else u = c;
    let d = u.pathname || "/",
        f = d;
    if (l !== "/") {
        let y = l.replace(/^\//, "").split("/");
        f = "/" + d.replace(/^\//, "").split("/").slice(y.length).join("/")
    }
    let g = Z3(t, {
            pathname: f
        }),
        m = bN(g && g.map(y => Object.assign({}, y, {
            params: Object.assign({}, s, y.params),
            pathname: Ii([l, r.encodeLocation ? r.encodeLocation(y.pathname).pathname : y.pathname]),
            pathnameBase: y.pathnameBase === "/" ? l : Ii([l, r.encodeLocation ? r.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
        })), a, n, o);
    return e && m ? S.createElement(Hd.Provider, {
        value: {
            location: ed({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: Ur.Pop
        }
    }, m) : m
}

function yN() {
    let t = AN(),
        e = fN(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
        n = t instanceof Error ? t.stack : null,
        r = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), n ? S.createElement("pre", {
        style: r
    }, n) : null, null)
}
const wN = S.createElement(yN, null);
class _N extends S.Component {
    constructor(e) {
        super(e), this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, n) {
        return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : n.error,
            location: n.location,
            revalidation: e.revalidation || n.revalidation
        }
    }
    componentDidCatch(e, n) {
        console.error("React Router caught the following error during render", e, n)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement(Ud.Provider, {
            value: this.props.routeContext
        }, S.createElement(fw.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function SN(t) {
    let {
        routeContext: e,
        match: n,
        children: o
    } = t, r = S.useContext(hN);
    return r && r.static && r.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = n.route.id), S.createElement(Ud.Provider, {
        value: e
    }, o)
}

function bN(t, e, n, o) {
    var r;
    if (e === void 0 && (e = []), n === void 0 && (n = null), o === void 0 && (o = null), t == null) {
        var a;
        if (!n) return null;
        if (n.errors) t = n.matches;
        else if ((a = o) != null && a.v7_partialHydration && e.length === 0 && !n.initialized && n.matches.length > 0) t = n.matches;
        else return null
    }
    let i = t,
        s = (r = n) == null ? void 0 : r.errors;
    if (s != null) {
        let u = i.findIndex(p => p.route.id && (s == null ? void 0 : s[p.route.id]) !== void 0);
        u >= 0 || Nn(!1), i = i.slice(0, Math.min(i.length, u + 1))
    }
    let l = !1,
        c = -1;
    if (n && o && o.v7_partialHydration)
        for (let u = 0; u < i.length; u++) {
            let p = i[u];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (c = u), p.route.id) {
                let {
                    loaderData: d,
                    errors: f
                } = n, g = p.route.loader && d[p.route.id] === void 0 && (!f || f[p.route.id] === void 0);
                if (p.route.lazy || g) {
                    l = !0, c >= 0 ? i = i.slice(0, c + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((u, p, d) => {
        let f, g = !1,
            m = null,
            y = null;
        n && (f = s && p.route.id ? s[p.route.id] : void 0, m = p.route.errorElement || wN, l && (c < 0 && d === 0 ? (g = !0, y = null) : c === d && (g = !0, y = p.route.hydrateFallbackElement || null)));
        let v = e.concat(i.slice(0, d + 1)),
            h = () => {
                let x;
                return f ? x = m : g ? x = y : p.route.Component ? x = S.createElement(p.route.Component, null) : p.route.element ? x = p.route.element : x = u, S.createElement(SN, {
                    match: p,
                    routeContext: {
                        outlet: u,
                        matches: v,
                        isDataRoute: n != null
                    },
                    children: x
                })
            };
        return n && (p.route.ErrorBoundary || p.route.errorElement || d === 0) ? S.createElement(_N, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: f,
            children: h(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : h()
    }, null)
}
var nm = function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
}(nm || {});

function CN(t) {
    let e = S.useContext(vN);
    return e || Nn(!1), e
}

function TN(t) {
    let e = S.useContext(Ud);
    return e || Nn(!1), e
}

function EN(t) {
    let e = TN(),
        n = e.matches[e.matches.length - 1];
    return n.route.id || Nn(!1), n.route.id
}

function AN() {
    var t;
    let e = S.useContext(fw),
        n = CN(nm.UseRouteError),
        o = EN(nm.UseRouteError);
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[o]
}

function om(t) {
    Nn(!1)
}

function NN(t) {
    let {
        basename: e = "/",
        children: n = null,
        location: o,
        navigationType: r = Ur.Pop,
        navigator: a,
        static: i = !1,
        future: s
    } = t;
    Hh() && Nn(!1);
    let l = e.replace(/^\/*/, "/"),
        c = S.useMemo(() => ({
            basename: l,
            navigator: a,
            static: i,
            future: ed({
                v7_relativeSplatPath: !1
            }, s)
        }), [l, s, a, i]);
    typeof o == "string" && (o = $d(o));
    let {
        pathname: u = "/",
        search: p = "",
        hash: d = "",
        state: f = null,
        key: g = "default"
    } = o, m = S.useMemo(() => {
        let y = uw(u, l);
        return y == null ? null : {
            location: {
                pathname: y,
                search: p,
                hash: d,
                state: f,
                key: g
            },
            navigationType: r
        }
    }, [l, u, p, d, f, g, r]);
    return m == null ? null : S.createElement(pw.Provider, {
        value: c
    }, S.createElement(Hd.Provider, {
        children: n,
        value: m
    }))
}

function PN(t) {
    let {
        children: e,
        location: n
    } = t;
    return gN(rm(e), n)
}
new Promise(() => {});

function rm(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return S.Children.forEach(t, (o, r) => {
        if (!S.isValidElement(o)) return;
        let a = [...e, r];
        if (o.type === S.Fragment) {
            n.push.apply(n, rm(o.props.children, a));
            return
        }
        o.type !== om && Nn(!1), !o.props.index || !o.props.children || Nn(!1);
        let i = {
            id: o.props.id || a.join("-"),
            caseSensitive: o.props.caseSensitive,
            element: o.props.element,
            Component: o.props.Component,
            index: o.props.index,
            path: o.props.path,
            loader: o.props.loader,
            action: o.props.action,
            errorElement: o.props.errorElement,
            ErrorBoundary: o.props.ErrorBoundary,
            hasErrorBoundary: o.props.ErrorBoundary != null || o.props.errorElement != null,
            shouldRevalidate: o.props.shouldRevalidate,
            handle: o.props.handle,
            lazy: o.props.lazy
        };
        o.props.children && (i.children = rm(o.props.children, a)), n.push(i)
    }), n
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const kN = "6";
try {
    window.__reactRouterVersion = kN
} catch {}
const DN = "startTransition",
    av = uS[DN];

function RN(t) {
    let {
        basename: e,
        children: n,
        future: o,
        window: r
    } = t, a = S.useRef();
    a.current == null && (a.current = X3({
        window: r,
        v5Compat: !0
    }));
    let i = a.current,
        [s, l] = S.useState({
            action: i.action,
            location: i.location
        }),
        {
            v7_startTransition: c
        } = o || {},
        u = S.useCallback(p => {
            c && av ? av(() => l(p)) : l(p)
        }, [l, c]);
    return S.useLayoutEffect(() => i.listen(u), [i, u]), S.createElement(NN, {
        basename: e,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: i,
        future: o
    })
}
var iv;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
})(iv || (iv = {}));
var sv;
(function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
})(sv || (sv = {}));
const ON = {
        theme: "dark",
        setTheme: () => null
    },
    hw = S.createContext(ON);

function MN({
    children: t,
    defaultTheme: e = "dark",
    storageKey: n = "gedion-theme",
    ...o
}) {
    const [r, a] = S.useState(() => typeof window > "u" ? e : localStorage.getItem(n) || e);
    S.useEffect(() => {
        const s = window.document.documentElement;
        if (s.classList.remove("light", "dark"), r === "system") {
            const l = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            s.classList.add(l);
            return
        }
        s.classList.add(r)
    }, [r]);
    const i = {
        theme: r,
        setTheme: s => {
            typeof window < "u" && localStorage.setItem(n, s), a(s)
        }
    };
    return w.jsx(hw.Provider, {
        "data-lov-id": "src/components/ThemeProvider.tsx:65:4",
        "data-lov-name": "ThemeProviderContext.Provider",
        "data-component-path": "src/components/ThemeProvider.tsx",
        "data-component-line": "65",
        "data-component-file": "ThemeProvider.tsx",
        "data-component-name": "ThemeProviderContext.Provider",
        "data-component-content": "%7B%7D",
        ...o,
        value: i,
        children: t
    })
}
const jN = () => {
    const t = S.useContext(hw);
    if (t === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return t
};
var vw = {
        exports: {}
    },
    FN = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    BN = FN,
    LN = BN;

function gw() {}

function xw() {}
xw.resetWarningCache = gw;
var IN = function() {
    function t(o, r, a, i, s, l) {
        if (l !== LN) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c
        }
    }
    t.isRequired = t;

    function e() {
        return t
    }
    var n = {
        array: t,
        bigint: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: e,
        element: t,
        elementType: t,
        instanceOf: e,
        node: t,
        objectOf: e,
        oneOf: e,
        oneOfType: e,
        shape: e,
        exact: e,
        checkPropTypes: xw,
        resetWarningCache: gw
    };
    return n.PropTypes = n, n
};
vw.exports = IN();
var zN = vw.exports;
const me = xs(zN);
var $N = typeof Element < "u",
    HN = typeof Map == "function",
    UN = typeof Set == "function",
    VN = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function pu(t, e) {
    if (t === e) return !0;
    if (t && e && typeof t == "object" && typeof e == "object") {
        if (t.constructor !== e.constructor) return !1;
        var n, o, r;
        if (Array.isArray(t)) {
            if (n = t.length, n != e.length) return !1;
            for (o = n; o-- !== 0;)
                if (!pu(t[o], e[o])) return !1;
            return !0
        }
        var a;
        if (HN && t instanceof Map && e instanceof Map) {
            if (t.size !== e.size) return !1;
            for (a = t.entries(); !(o = a.next()).done;)
                if (!e.has(o.value[0])) return !1;
            for (a = t.entries(); !(o = a.next()).done;)
                if (!pu(o.value[1], e.get(o.value[0]))) return !1;
            return !0
        }
        if (UN && t instanceof Set && e instanceof Set) {
            if (t.size !== e.size) return !1;
            for (a = t.entries(); !(o = a.next()).done;)
                if (!e.has(o.value[0])) return !1;
            return !0
        }
        if (VN && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
            if (n = t.length, n != e.length) return !1;
            for (o = n; o-- !== 0;)
                if (t[o] !== e[o]) return !1;
            return !0
        }
        if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
        if (t.valueOf !== Object.prototype.valueOf && typeof t.valueOf == "function" && typeof e.valueOf == "function") return t.valueOf() === e.valueOf();
        if (t.toString !== Object.prototype.toString && typeof t.toString == "function" && typeof e.toString == "function") return t.toString() === e.toString();
        if (r = Object.keys(t), n = r.length, n !== Object.keys(e).length) return !1;
        for (o = n; o-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(e, r[o])) return !1;
        if ($N && t instanceof Element) return !1;
        for (o = n; o-- !== 0;)
            if (!((r[o] === "_owner" || r[o] === "__v" || r[o] === "__o") && t.$$typeof) && !pu(t[r[o]], e[r[o]])) return !1;
        return !0
    }
    return t !== t && e !== e
}
var WN = function(e, n) {
    try {
        return pu(e, n)
    } catch (o) {
        if ((o.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw o
    }
};
const YN = xs(WN);
var GN = function(t, e, n, o, r, a, i, s) {
        if (!t) {
            var l;
            if (e === void 0) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, o, r, a, i, s],
                    u = 0;
                l = new Error(e.replace(/%s/g, function() {
                    return c[u++]
                })), l.name = "Invariant Violation"
            }
            throw l.framesToPop = 1, l
        }
    },
    QN = GN;
const lv = xs(QN);
var XN = function(e, n, o, r) {
    var a = o ? o.call(r, e, n) : void 0;
    if (a !== void 0) return !!a;
    if (e === n) return !0;
    if (typeof e != "object" || !e || typeof n != "object" || !n) return !1;
    var i = Object.keys(e),
        s = Object.keys(n);
    if (i.length !== s.length) return !1;
    for (var l = Object.prototype.hasOwnProperty.bind(n), c = 0; c < i.length; c++) {
        var u = i[c];
        if (!l(u)) return !1;
        var p = e[u],
            d = n[u];
        if (a = o ? o.call(r, p, d, u) : void 0, a === !1 || a === void 0 && p !== d) return !1
    }
    return !0
};
const qN = xs(XN);

function st() {
    return st = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }, st.apply(this, arguments)
}

function Uh(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, am(t, e)
}

function am(t, e) {
    return am = Object.setPrototypeOf || function(n, o) {
        return n.__proto__ = o, n
    }, am(t, e)
}

function cv(t, e) {
    if (t == null) return {};
    var n, o, r = {},
        a = Object.keys(t);
    for (o = 0; o < a.length; o++) e.indexOf(n = a[o]) >= 0 || (r[n] = t[n]);
    return r
}
var q = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title",
        FRAGMENT: "Symbol(react.fragment)"
    },
    KN = {
        rel: ["amphtml", "canonical", "alternate"]
    },
    ZN = {
        type: ["application/ld+json"]
    },
    JN = {
        charset: "",
        name: ["robots", "description"],
        property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
    },
    uv = Object.keys(q).map(function(t) {
        return q[t]
    }),
    td = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    },
    eP = Object.keys(td).reduce(function(t, e) {
        return t[td[e]] = e, t
    }, {}),
    zi = function(t, e) {
        for (var n = t.length - 1; n >= 0; n -= 1) {
            var o = t[n];
            if (Object.prototype.hasOwnProperty.call(o, e)) return o[e]
        }
        return null
    },
    tP = function(t) {
        var e = zi(t, q.TITLE),
            n = zi(t, "titleTemplate");
        if (Array.isArray(e) && (e = e.join("")), n && e) return n.replace(/%s/g, function() {
            return e
        });
        var o = zi(t, "defaultTitle");
        return e || o || void 0
    },
    nP = function(t) {
        return zi(t, "onChangeClientState") || function() {}
    },
    Pp = function(t, e) {
        return e.filter(function(n) {
            return n[t] !== void 0
        }).map(function(n) {
            return n[t]
        }).reduce(function(n, o) {
            return st({}, n, o)
        }, {})
    },
    oP = function(t, e) {
        return e.filter(function(n) {
            return n[q.BASE] !== void 0
        }).map(function(n) {
            return n[q.BASE]
        }).reverse().reduce(function(n, o) {
            if (!n.length)
                for (var r = Object.keys(o), a = 0; a < r.length; a += 1) {
                    var i = r[a].toLowerCase();
                    if (t.indexOf(i) !== -1 && o[i]) return n.concat(o)
                }
            return n
        }, [])
    },
    zs = function(t, e, n) {
        var o = {};
        return n.filter(function(r) {
            return !!Array.isArray(r[t]) || (r[t] !== void 0 && console && typeof console.warn == "function" && console.warn("Helmet: " + t + ' should be of type "Array". Instead found type "' + typeof r[t] + '"'), !1)
        }).map(function(r) {
            return r[t]
        }).reverse().reduce(function(r, a) {
            var i = {};
            a.filter(function(p) {
                for (var d, f = Object.keys(p), g = 0; g < f.length; g += 1) {
                    var m = f[g],
                        y = m.toLowerCase();
                    e.indexOf(y) === -1 || d === "rel" && p[d].toLowerCase() === "canonical" || y === "rel" && p[y].toLowerCase() === "stylesheet" || (d = y), e.indexOf(m) === -1 || m !== "innerHTML" && m !== "cssText" && m !== "itemprop" || (d = m)
                }
                if (!d || !p[d]) return !1;
                var v = p[d].toLowerCase();
                return o[d] || (o[d] = {}), i[d] || (i[d] = {}), !o[d][v] && (i[d][v] = !0, !0)
            }).reverse().forEach(function(p) {
                return r.push(p)
            });
            for (var s = Object.keys(i), l = 0; l < s.length; l += 1) {
                var c = s[l],
                    u = st({}, o[c], i[c]);
                o[c] = u
            }
            return r
        }, []).reverse()
    },
    rP = function(t, e) {
        if (Array.isArray(t) && t.length) {
            for (var n = 0; n < t.length; n += 1)
                if (t[n][e]) return !0
        }
        return !1
    },
    yw = function(t) {
        return Array.isArray(t) ? t.join("") : t
    },
    kp = function(t, e) {
        return Array.isArray(t) ? t.reduce(function(n, o) {
            return function(r, a) {
                for (var i = Object.keys(r), s = 0; s < i.length; s += 1)
                    if (a[i[s]] && a[i[s]].includes(r[i[s]])) return !0;
                return !1
            }(o, e) ? n.priority.push(o) : n.default.push(o), n
        }, {
            priority: [],
            default: []
        }) : {
            default: t
        }
    },
    dv = function(t, e) {
        var n;
        return st({}, t, ((n = {})[e] = void 0, n))
    },
    aP = [q.NOSCRIPT, q.SCRIPT, q.STYLE],
    Dp = function(t, e) {
        return e === void 0 && (e = !0), e === !1 ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    },
    pv = function(t) {
        return Object.keys(t).reduce(function(e, n) {
            var o = t[n] !== void 0 ? n + '="' + t[n] + '"' : "" + n;
            return e ? e + " " + o : o
        }, "")
    },
    fv = function(t, e) {
        return e === void 0 && (e = {}), Object.keys(t).reduce(function(n, o) {
            return n[td[o] || o] = t[o], n
        }, e)
    },
    fu = function(t, e) {
        return e.map(function(n, o) {
            var r, a = ((r = {
                key: o
            })["data-rh"] = !0, r);
            return Object.keys(n).forEach(function(i) {
                var s = td[i] || i;
                s === "innerHTML" || s === "cssText" ? a.dangerouslySetInnerHTML = {
                    __html: n.innerHTML || n.cssText
                } : a[s] = n[i]
            }), F.createElement(t, a)
        })
    },
    eo = function(t, e, n) {
        switch (t) {
            case q.TITLE:
                return {
                    toComponent: function() {
                        return r = e.titleAttributes, (a = {
                            key: o = e.title
                        })["data-rh"] = !0, i = fv(r, a), [F.createElement(q.TITLE, i, o)];
                        var o, r, a, i
                    },
                    toString: function() {
                        return function(o, r, a, i) {
                            var s = pv(a),
                                l = yw(r);
                            return s ? "<" + o + ' data-rh="true" ' + s + ">" + Dp(l, i) + "</" + o + ">" : "<" + o + ' data-rh="true">' + Dp(l, i) + "</" + o + ">"
                        }(t, e.title, e.titleAttributes, n)
                    }
                };
            case "bodyAttributes":
            case "htmlAttributes":
                return {
                    toComponent: function() {
                        return fv(e)
                    },
                    toString: function() {
                        return pv(e)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return fu(t, e)
                    },
                    toString: function() {
                        return function(o, r, a) {
                            return r.reduce(function(i, s) {
                                var l = Object.keys(s).filter(function(p) {
                                        return !(p === "innerHTML" || p === "cssText")
                                    }).reduce(function(p, d) {
                                        var f = s[d] === void 0 ? d : d + '="' + Dp(s[d], a) + '"';
                                        return p ? p + " " + f : f
                                    }, ""),
                                    c = s.innerHTML || s.cssText || "",
                                    u = aP.indexOf(o) === -1;
                                return i + "<" + o + ' data-rh="true" ' + l + (u ? "/>" : ">" + c + "</" + o + ">")
                            }, "")
                        }(t, e, n)
                    }
                }
        }
    },
    im = function(t) {
        var e = t.baseTag,
            n = t.bodyAttributes,
            o = t.encode,
            r = t.htmlAttributes,
            a = t.noscriptTags,
            i = t.styleTags,
            s = t.title,
            l = s === void 0 ? "" : s,
            c = t.titleAttributes,
            u = t.linkTags,
            p = t.metaTags,
            d = t.scriptTags,
            f = {
                toComponent: function() {},
                toString: function() {
                    return ""
                }
            };
        if (t.prioritizeSeoTags) {
            var g = function(m) {
                var y = m.linkTags,
                    v = m.scriptTags,
                    h = m.encode,
                    x = kp(m.metaTags, JN),
                    _ = kp(y, KN),
                    b = kp(v, ZN);
                return {
                    priorityMethods: {
                        toComponent: function() {
                            return [].concat(fu(q.META, x.priority), fu(q.LINK, _.priority), fu(q.SCRIPT, b.priority))
                        },
                        toString: function() {
                            return eo(q.META, x.priority, h) + " " + eo(q.LINK, _.priority, h) + " " + eo(q.SCRIPT, b.priority, h)
                        }
                    },
                    metaTags: x.default,
                    linkTags: _.default,
                    scriptTags: b.default
                }
            }(t);
            f = g.priorityMethods, u = g.linkTags, p = g.metaTags, d = g.scriptTags
        }
        return {
            priority: f,
            base: eo(q.BASE, e, o),
            bodyAttributes: eo("bodyAttributes", n, o),
            htmlAttributes: eo("htmlAttributes", r, o),
            link: eo(q.LINK, u, o),
            meta: eo(q.META, p, o),
            noscript: eo(q.NOSCRIPT, a, o),
            script: eo(q.SCRIPT, d, o),
            style: eo(q.STYLE, i, o),
            title: eo(q.TITLE, {
                title: l,
                titleAttributes: c
            }, o)
        }
    },
    Bc = [],
    sm = function(t, e) {
        var n = this;
        e === void 0 && (e = typeof document < "u"), this.instances = [], this.value = {
            setHelmet: function(o) {
                n.context.helmet = o
            },
            helmetInstances: {
                get: function() {
                    return n.canUseDOM ? Bc : n.instances
                },
                add: function(o) {
                    (n.canUseDOM ? Bc : n.instances).push(o)
                },
                remove: function(o) {
                    var r = (n.canUseDOM ? Bc : n.instances).indexOf(o);
                    (n.canUseDOM ? Bc : n.instances).splice(r, 1)
                }
            }
        }, this.context = t, this.canUseDOM = e, e || (t.helmet = im({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
        }))
    },
    ww = F.createContext({}),
    iP = me.shape({
        setHelmet: me.func,
        helmetInstances: me.shape({
            get: me.func,
            add: me.func,
            remove: me.func
        })
    }),
    sP = typeof document < "u",
    Ai = function(t) {
        function e(n) {
            var o;
            return (o = t.call(this, n) || this).helmetData = new sm(o.props.context, e.canUseDOM), o
        }
        return Uh(e, t), e.prototype.render = function() {
            return F.createElement(ww.Provider, {
                value: this.helmetData.value
            }, this.props.children)
        }, e
    }(S.Component);
Ai.canUseDOM = sP, Ai.propTypes = {
    context: me.shape({
        helmet: me.shape()
    }),
    children: me.node.isRequired
}, Ai.defaultProps = {
    context: {}
}, Ai.displayName = "HelmetProvider";
var ci = function(t, e) {
        var n, o = document.head || document.querySelector(q.HEAD),
            r = o.querySelectorAll(t + "[data-rh]"),
            a = [].slice.call(r),
            i = [];
        return e && e.length && e.forEach(function(s) {
            var l = document.createElement(t);
            for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (c === "innerHTML" ? l.innerHTML = s.innerHTML : c === "cssText" ? l.styleSheet ? l.styleSheet.cssText = s.cssText : l.appendChild(document.createTextNode(s.cssText)) : l.setAttribute(c, s[c] === void 0 ? "" : s[c]));
            l.setAttribute("data-rh", "true"), a.some(function(u, p) {
                return n = p, l.isEqualNode(u)
            }) ? a.splice(n, 1) : i.push(l)
        }), a.forEach(function(s) {
            return s.parentNode.removeChild(s)
        }), i.forEach(function(s) {
            return o.appendChild(s)
        }), {
            oldTags: a,
            newTags: i
        }
    },
    Rp = function(t, e) {
        var n = document.getElementsByTagName(t)[0];
        if (n) {
            for (var o = n.getAttribute("data-rh"), r = o ? o.split(",") : [], a = [].concat(r), i = Object.keys(e), s = 0; s < i.length; s += 1) {
                var l = i[s],
                    c = e[l] || "";
                n.getAttribute(l) !== c && n.setAttribute(l, c), r.indexOf(l) === -1 && r.push(l);
                var u = a.indexOf(l);
                u !== -1 && a.splice(u, 1)
            }
            for (var p = a.length - 1; p >= 0; p -= 1) n.removeAttribute(a[p]);
            r.length === a.length ? n.removeAttribute("data-rh") : n.getAttribute("data-rh") !== i.join(",") && n.setAttribute("data-rh", i.join(","))
        }
    },
    mv = function(t, e) {
        var n = t.baseTag,
            o = t.htmlAttributes,
            r = t.linkTags,
            a = t.metaTags,
            i = t.noscriptTags,
            s = t.onChangeClientState,
            l = t.scriptTags,
            c = t.styleTags,
            u = t.title,
            p = t.titleAttributes;
        Rp(q.BODY, t.bodyAttributes), Rp(q.HTML, o),
            function(m, y) {
                m !== void 0 && document.title !== m && (document.title = yw(m)), Rp(q.TITLE, y)
            }(u, p);
        var d = {
                baseTag: ci(q.BASE, n),
                linkTags: ci(q.LINK, r),
                metaTags: ci(q.META, a),
                noscriptTags: ci(q.NOSCRIPT, i),
                scriptTags: ci(q.SCRIPT, l),
                styleTags: ci(q.STYLE, c)
            },
            f = {},
            g = {};
        Object.keys(d).forEach(function(m) {
            var y = d[m],
                v = y.newTags,
                h = y.oldTags;
            v.length && (f[m] = v), h.length && (g[m] = d[m].oldTags)
        }), e && e(), s(t, f, g)
    },
    $s = null,
    nd = function(t) {
        function e() {
            for (var o, r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
            return (o = t.call.apply(t, [this].concat(a)) || this).rendered = !1, o
        }
        Uh(e, t);
        var n = e.prototype;
        return n.shouldComponentUpdate = function(o) {
            return !qN(o, this.props)
        }, n.componentDidUpdate = function() {
            this.emitChange()
        }, n.componentWillUnmount = function() {
            this.props.context.helmetInstances.remove(this), this.emitChange()
        }, n.emitChange = function() {
            var o, r, a = this.props.context,
                i = a.setHelmet,
                s = null,
                l = (o = a.helmetInstances.get().map(function(c) {
                    var u = st({}, c.props);
                    return delete u.context, u
                }), {
                    baseTag: oP(["href"], o),
                    bodyAttributes: Pp("bodyAttributes", o),
                    defer: zi(o, "defer"),
                    encode: zi(o, "encodeSpecialCharacters"),
                    htmlAttributes: Pp("htmlAttributes", o),
                    linkTags: zs(q.LINK, ["rel", "href"], o),
                    metaTags: zs(q.META, ["name", "charset", "http-equiv", "property", "itemprop"], o),
                    noscriptTags: zs(q.NOSCRIPT, ["innerHTML"], o),
                    onChangeClientState: nP(o),
                    scriptTags: zs(q.SCRIPT, ["src", "innerHTML"], o),
                    styleTags: zs(q.STYLE, ["cssText"], o),
                    title: tP(o),
                    titleAttributes: Pp("titleAttributes", o),
                    prioritizeSeoTags: rP(o, "prioritizeSeoTags")
                });
            Ai.canUseDOM ? (r = l, $s && cancelAnimationFrame($s), r.defer ? $s = requestAnimationFrame(function() {
                mv(r, function() {
                    $s = null
                })
            }) : (mv(r), $s = null)) : im && (s = im(l)), i(s)
        }, n.init = function() {
            this.rendered || (this.rendered = !0, this.props.context.helmetInstances.add(this), this.emitChange())
        }, n.render = function() {
            return this.init(), null
        }, e
    }(S.Component);
nd.propTypes = {
    context: iP.isRequired
}, nd.displayName = "HelmetDispatcher";
var lP = ["children"],
    cP = ["children"],
    mu = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        Uh(e, t);
        var n = e.prototype;
        return n.shouldComponentUpdate = function(o) {
            return !YN(dv(this.props, "helmetData"), dv(o, "helmetData"))
        }, n.mapNestedChildrenToProps = function(o, r) {
            if (!r) return null;
            switch (o.type) {
                case q.SCRIPT:
                case q.NOSCRIPT:
                    return {
                        innerHTML: r
                    };
                case q.STYLE:
                    return {
                        cssText: r
                    };
                default:
                    throw new Error("<" + o.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
            }
        }, n.flattenArrayTypeChildren = function(o) {
            var r, a = o.child,
                i = o.arrayTypeChildren;
            return st({}, i, ((r = {})[a.type] = [].concat(i[a.type] || [], [st({}, o.newChildProps, this.mapNestedChildrenToProps(a, o.nestedChildren))]), r))
        }, n.mapObjectTypeChildren = function(o) {
            var r, a, i = o.child,
                s = o.newProps,
                l = o.newChildProps,
                c = o.nestedChildren;
            switch (i.type) {
                case q.TITLE:
                    return st({}, s, ((r = {})[i.type] = c, r.titleAttributes = st({}, l), r));
                case q.BODY:
                    return st({}, s, {
                        bodyAttributes: st({}, l)
                    });
                case q.HTML:
                    return st({}, s, {
                        htmlAttributes: st({}, l)
                    });
                default:
                    return st({}, s, ((a = {})[i.type] = st({}, l), a))
            }
        }, n.mapArrayTypeChildrenToProps = function(o, r) {
            var a = st({}, r);
            return Object.keys(o).forEach(function(i) {
                var s;
                a = st({}, a, ((s = {})[i] = o[i], s))
            }), a
        }, n.warnOnInvalidChildren = function(o, r) {
            return lv(uv.some(function(a) {
                return o.type === a
            }), typeof o.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + uv.join(", ") + " are allowed. Helmet does not support rendering <" + o.type + "> elements. Refer to our API for more information."), lv(!r || typeof r == "string" || Array.isArray(r) && !r.some(function(a) {
                return typeof a != "string"
            }), "Helmet expects a string as a child of <" + o.type + ">. Did you forget to wrap your children in braces? ( <" + o.type + ">{``}</" + o.type + "> ) Refer to our API for more information."), !0
        }, n.mapChildrenToProps = function(o, r) {
            var a = this,
                i = {};
            return F.Children.forEach(o, function(s) {
                if (s && s.props) {
                    var l = s.props,
                        c = l.children,
                        u = cv(l, lP),
                        p = Object.keys(u).reduce(function(f, g) {
                            return f[eP[g] || g] = u[g], f
                        }, {}),
                        d = s.type;
                    switch (typeof d == "symbol" ? d = d.toString() : a.warnOnInvalidChildren(s, c), d) {
                        case q.FRAGMENT:
                            r = a.mapChildrenToProps(c, r);
                            break;
                        case q.LINK:
                        case q.META:
                        case q.NOSCRIPT:
                        case q.SCRIPT:
                        case q.STYLE:
                            i = a.flattenArrayTypeChildren({
                                child: s,
                                arrayTypeChildren: i,
                                newChildProps: p,
                                nestedChildren: c
                            });
                            break;
                        default:
                            r = a.mapObjectTypeChildren({
                                child: s,
                                newProps: r,
                                newChildProps: p,
                                nestedChildren: c
                            })
                    }
                }
            }), this.mapArrayTypeChildrenToProps(i, r)
        }, n.render = function() {
            var o = this.props,
                r = o.children,
                a = cv(o, cP),
                i = st({}, a),
                s = a.helmetData;
            return r && (i = this.mapChildrenToProps(r, i)), !s || s instanceof sm || (s = new sm(s.context, s.instances)), s ? F.createElement(nd, st({}, i, {
                context: s.value,
                helmetData: void 0
            })) : F.createElement(ww.Consumer, null, function(l) {
                return F.createElement(nd, st({}, i, {
                    context: l
                }))
            })
        }, e
    }(S.Component);
mu.propTypes = {
    base: me.object,
    bodyAttributes: me.object,
    children: me.oneOfType([me.arrayOf(me.node), me.node]),
    defaultTitle: me.string,
    defer: me.bool,
    encodeSpecialCharacters: me.bool,
    htmlAttributes: me.object,
    link: me.arrayOf(me.object),
    meta: me.arrayOf(me.object),
    noscript: me.arrayOf(me.object),
    onChangeClientState: me.func,
    script: me.arrayOf(me.object),
    style: me.arrayOf(me.object),
    title: me.string,
    titleAttributes: me.object,
    titleTemplate: me.string,
    prioritizeSeoTags: me.bool,
    helmetData: me.object
}, mu.defaultProps = {
    defer: !0,
    encodeSpecialCharacters: !0,
    prioritizeSeoTags: !1
}, mu.displayName = "Helmet";
const uP = t1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    so = S.forwardRef(({
        className: t,
        variant: e,
        size: n,
        asChild: o = !1,
        ...r
    }, a) => {
        const i = o ? $l : "button";
        return w.jsx(i, {
            "data-lov-id": "src/components/ui/button.tsx:46:6",
            "data-lov-name": "Comp",
            "data-component-path": "src/components/ui/button.tsx",
            "data-component-line": "46",
            "data-component-file": "button.tsx",
            "data-component-name": "Comp",
            "data-component-content": "%7B%7D",
            className: Er(uP({
                variant: e,
                size: n,
                className: t
            })),
            ref: a,
            ...r
        })
    });
so.displayName = "Button";

function sr(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function _w(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Yn = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    ds = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Vh, Ft, Ie, co = 1e8,
    Pe = 1 / co,
    lm = Math.PI * 2,
    dP = lm / 4,
    pP = 0,
    Sw = Math.sqrt,
    fP = Math.cos,
    mP = Math.sin,
    Nt = function(e) {
        return typeof e == "string"
    },
    nt = function(e) {
        return typeof e == "function"
    },
    br = function(e) {
        return typeof e == "number"
    },
    Wh = function(e) {
        return typeof e > "u"
    },
    Jo = function(e) {
        return typeof e == "object"
    },
    bn = function(e) {
        return e !== !1
    },
    Yh = function() {
        return typeof window < "u"
    },
    Lc = function(e) {
        return nt(e) || Nt(e)
    },
    bw = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    Kt = Array.isArray,
    cm = /(?:-?\.?\d|\.)+/gi,
    Cw = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Ni = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Op = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Tw = /[+-]=-?[.\d]+/,
    Ew = /[^,'"\[\]\s]+/gi,
    hP = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ve, Io, um, Gh, Qn = {},
    od = {},
    Aw, Nw = function(e) {
        return (od = ps(e, Qn)) && Pn
    },
    Qh = function(e, n) {
        return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
    },
    Yl = function(e, n) {
        return !n && console.warn(e)
    },
    Pw = function(e, n) {
        return e && (Qn[e] = n) && od && (od[e] = n) || Qn
    },
    Gl = function() {
        return 0
    },
    vP = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    hu = {
        suppressEvents: !0,
        kill: !1
    },
    gP = {
        suppressEvents: !0
    },
    Xh = {},
    oa = [],
    dm = {},
    kw, Bn = {},
    Mp = {},
    hv = 30,
    vu = [],
    qh = "",
    Kh = function(e) {
        var n = e[0],
            o, r;
        if (Jo(n) || nt(n) || (e = [e]), !(o = (n._gsap || {}).harness)) {
            for (r = vu.length; r-- && !vu[r].targetTest(n););
            o = vu[r]
        }
        for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new e_(e[r], o))) || e.splice(r, 1);
        return e
    },
    $a = function(e) {
        return e._gsap || Kh(uo(e))[0]._gsap
    },
    Dw = function(e, n, o) {
        return (o = e[n]) && nt(o) ? e[n]() : Wh(o) && e.getAttribute && e.getAttribute(n) || o
    },
    Cn = function(e, n) {
        return (e = e.split(",")).forEach(n) || e
    },
    lt = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    mt = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    $i = function(e, n) {
        var o = n.charAt(0),
            r = parseFloat(n.substr(2));
        return e = parseFloat(e), o === "+" ? e + r : o === "-" ? e - r : o === "*" ? e * r : e / r
    },
    xP = function(e, n) {
        for (var o = n.length, r = 0; e.indexOf(n[r]) < 0 && ++r < o;);
        return r < o
    },
    rd = function() {
        var e = oa.length,
            n = oa.slice(0),
            o, r;
        for (dm = {}, oa.length = 0, o = 0; o < e; o++) r = n[o], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    },
    Rw = function(e, n, o, r) {
        oa.length && !Ft && rd(), e.render(n, o, Ft && n < 0 && (e._initted || e._startAt)), oa.length && !Ft && rd()
    },
    Ow = function(e) {
        var n = parseFloat(e);
        return (n || n === 0) && (e + "").match(Ew).length < 2 ? n : Nt(e) ? e.trim() : e
    },
    Mw = function(e) {
        return e
    },
    Xn = function(e, n) {
        for (var o in n) o in e || (e[o] = n[o]);
        return e
    },
    yP = function(e) {
        return function(n, o) {
            for (var r in o) r in n || r === "duration" && e || r === "ease" || (n[r] = o[r])
        }
    },
    ps = function(e, n) {
        for (var o in n) e[o] = n[o];
        return e
    },
    vv = function t(e, n) {
        for (var o in n) o !== "__proto__" && o !== "constructor" && o !== "prototype" && (e[o] = Jo(n[o]) ? t(e[o] || (e[o] = {}), n[o]) : n[o]);
        return e
    },
    ad = function(e, n) {
        var o = {},
            r;
        for (r in e) r in n || (o[r] = e[r]);
        return o
    },
    pl = function(e) {
        var n = e.parent || Ve,
            o = e.keyframes ? yP(Kt(e.keyframes)) : Xn;
        if (bn(e.inherit))
            for (; n;) o(e, n.vars.defaults), n = n.parent || n._dp;
        return e
    },
    wP = function(e, n) {
        for (var o = e.length, r = o === n.length; r && o-- && e[o] === n[o];);
        return o < 0
    },
    jw = function(e, n, o, r, a) {
        var i = e[r],
            s;
        if (a)
            for (s = n[a]; i && i[a] > s;) i = i._prev;
        return i ? (n._next = i._next, i._next = n) : (n._next = e[o], e[o] = n), n._next ? n._next._prev = n : e[r] = n, n._prev = i, n.parent = n._dp = e, n
    },
    Vd = function(e, n, o, r) {
        o === void 0 && (o = "_first"), r === void 0 && (r = "_last");
        var a = n._prev,
            i = n._next;
        a ? a._next = i : e[o] === n && (e[o] = i), i ? i._prev = a : e[r] === n && (e[r] = a), n._next = n._prev = n.parent = null
    },
    fa = function(e, n) {
        e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
    },
    Ha = function(e, n) {
        if (e && (!n || n._end > e._dur || n._start < 0))
            for (var o = e; o;) o._dirty = 1, o = o.parent;
        return e
    },
    _P = function(e) {
        for (var n = e.parent; n && n.parent;) n._dirty = 1, n.totalDuration(), n = n.parent;
        return e
    },
    pm = function(e, n, o, r) {
        return e._startAt && (Ft ? e._startAt.revert(hu) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, r))
    },
    SP = function t(e) {
        return !e || e._ts && t(e.parent)
    },
    gv = function(e) {
        return e._repeat ? fs(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    fs = function(e, n) {
        var o = Math.floor(e = mt(e / n));
        return e && o === e ? o - 1 : o
    },
    id = function(e, n) {
        return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    },
    Wd = function(e) {
        return e._end = mt(e._start + (e._tDur / Math.abs(e._ts || e._rts || Pe) || 0))
    },
    Yd = function(e, n) {
        var o = e._dp;
        return o && o.smoothChildTiming && e._ts && (e._start = mt(o._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), Wd(e), o._dirty || Ha(o, e)), e
    },
    Fw = function(e, n) {
        var o;
        if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (o = id(e.rawTime(), n), (!n._dur || uc(0, n.totalDuration(), o) - n._tTime > Pe) && n.render(o, !0)), Ha(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (o = e; o._dp;) o.rawTime() >= 0 && o.totalTime(o._tTime), o = o._dp;
            e._zTime = -Pe
        }
    },
    Wo = function(e, n, o, r) {
        return n.parent && fa(n), n._start = mt((br(o) ? o : o || e !== Ve ? to(e, o, n) : e._time) + n._delay), n._end = mt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), jw(e, n, "_first", "_last", e._sort ? "_start" : 0), fm(n) || (e._recent = n), r || Fw(e, n), e._ts < 0 && Yd(e, e._tTime), e
    },
    Bw = function(e, n) {
        return (Qn.ScrollTrigger || Qh("scrollTrigger", n)) && Qn.ScrollTrigger.create(n, e)
    },
    Lw = function(e, n, o, r, a) {
        if (Jh(e, n, a), !e._initted) return 1;
        if (!o && e._pt && !Ft && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && kw !== zn.frame) return oa.push(e), e._lazy = [a, r], 1
    },
    bP = function t(e) {
        var n = e.parent;
        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
    },
    fm = function(e) {
        var n = e.data;
        return n === "isFromStart" || n === "isStart"
    },
    CP = function(e, n, o, r) {
        var a = e.ratio,
            i = n < 0 || !n && (!e._start && bP(e) && !(!e._initted && fm(e)) || (e._ts < 0 || e._dp._ts < 0) && !fm(e)) ? 0 : 1,
            s = e._rDelay,
            l = 0,
            c, u, p;
        if (s && e._repeat && (l = uc(0, e._tDur, n), u = fs(l, s), e._yoyo && u & 1 && (i = 1 - i), u !== fs(e._tTime, s) && (a = 1 - i, e.vars.repeatRefresh && e._initted && e.invalidate())), i !== a || Ft || r || e._zTime === Pe || !n && e._zTime) {
            if (!e._initted && Lw(e, n, r, o, l)) return;
            for (p = e._zTime, e._zTime = n || (o ? Pe : 0), o || (o = n && !p), e.ratio = i, e._from && (i = 1 - i), e._time = 0, e._tTime = l, c = e._pt; c;) c.r(i, c.d), c = c._next;
            n < 0 && pm(e, n, o, !0), e._onUpdate && !o && Un(e, "onUpdate"), l && e._repeat && !o && e.parent && Un(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === i && (i && fa(e, 1), !o && !Ft && (Un(e, i ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = n)
    },
    TP = function(e, n, o) {
        var r;
        if (o > n)
            for (r = e._first; r && r._start <= o;) {
                if (r.data === "isPause" && r._start > n) return r;
                r = r._next
            } else
                for (r = e._last; r && r._start >= o;) {
                    if (r.data === "isPause" && r._start < n) return r;
                    r = r._prev
                }
    },
    ms = function(e, n, o, r) {
        var a = e._repeat,
            i = mt(n) || 0,
            s = e._tTime / e._tDur;
        return s && !r && (e._time *= i / e._dur), e._dur = i, e._tDur = a ? a < 0 ? 1e10 : mt(i * (a + 1) + e._rDelay * a) : i, s > 0 && !r && Yd(e, e._tTime = e._tDur * s), e.parent && Wd(e), o || Ha(e.parent, e), e
    },
    xv = function(e) {
        return e instanceof dn ? Ha(e) : ms(e, e._dur)
    },
    EP = {
        _start: 0,
        endTime: Gl,
        totalDuration: Gl
    },
    to = function t(e, n, o) {
        var r = e.labels,
            a = e._recent || EP,
            i = e.duration() >= co ? a.endTime(!1) : e._dur,
            s, l, c;
        return Nt(n) && (isNaN(n) || n in r) ? (l = n.charAt(0), c = n.substr(-1) === "%", s = n.indexOf("="), l === "<" || l === ">" ? (s >= 0 && (n = n.replace(/=/, "")), (l === "<" ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (c ? (s < 0 ? a : o).totalDuration() / 100 : 1)) : s < 0 ? (n in r || (r[n] = i), r[n]) : (l = parseFloat(n.charAt(s - 1) + n.substr(s + 1)), c && o && (l = l / 100 * (Kt(o) ? o[0] : o).totalDuration()), s > 1 ? t(e, n.substr(0, s - 1), o) + l : i + l)) : n == null ? i : +n
    },
    fl = function(e, n, o) {
        var r = br(n[1]),
            a = (r ? 2 : 1) + (e < 2 ? 0 : 1),
            i = n[a],
            s, l;
        if (r && (i.duration = n[1]), i.parent = o, e) {
            for (s = i, l = o; l && !("immediateRender" in s);) s = l.vars.defaults || {}, l = bn(l.vars.inherit) && l.parent;
            i.immediateRender = bn(s.immediateRender), e < 2 ? i.runBackwards = 1 : i.startAt = n[a - 1]
        }
        return new ft(n[0], i, n[a + 1])
    },
    ya = function(e, n) {
        return e || e === 0 ? n(e) : n
    },
    uc = function(e, n, o) {
        return o < e ? e : o > n ? n : o
    },
    Xt = function(e, n) {
        return !Nt(e) || !(n = hP.exec(e)) ? "" : n[1]
    },
    AP = function(e, n, o) {
        return ya(o, function(r) {
            return uc(e, n, r)
        })
    },
    mm = [].slice,
    Iw = function(e, n) {
        return e && Jo(e) && "length" in e && (!n && !e.length || e.length - 1 in e && Jo(e[0])) && !e.nodeType && e !== Io
    },
    NP = function(e, n, o) {
        return o === void 0 && (o = []), e.forEach(function(r) {
            var a;
            return Nt(r) && !n || Iw(r, 1) ? (a = o).push.apply(a, uo(r)) : o.push(r)
        }) || o
    },
    uo = function(e, n, o) {
        return Ie && !n && Ie.selector ? Ie.selector(e) : Nt(e) && !o && (um || !hs()) ? mm.call((n || Gh).querySelectorAll(e), 0) : Kt(e) ? NP(e, o) : Iw(e) ? mm.call(e, 0) : e ? [e] : []
    },
    hm = function(e) {
        return e = uo(e)[0] || Yl("Invalid scope") || {},
            function(n) {
                var o = e.current || e.nativeElement || e;
                return uo(n, o.querySelectorAll ? o : o === e ? Yl("Invalid scope") || Gh.createElement("div") : e)
            }
    },
    zw = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    $w = function(e) {
        if (nt(e)) return e;
        var n = Jo(e) ? e : {
                each: e
            },
            o = Ua(n.ease),
            r = n.from || 0,
            a = parseFloat(n.base) || 0,
            i = {},
            s = r > 0 && r < 1,
            l = isNaN(r) || s,
            c = n.axis,
            u = r,
            p = r;
        return Nt(r) ? u = p = {
                center: .5,
                edges: .5,
                end: 1
            }[r] || 0 : !s && l && (u = r[0], p = r[1]),
            function(d, f, g) {
                var m = (g || n).length,
                    y = i[m],
                    v, h, x, _, b, E, C, A, P;
                if (!y) {
                    if (P = n.grid === "auto" ? 0 : (n.grid || [1, co])[1], !P) {
                        for (C = -co; C < (C = g[P++].getBoundingClientRect().left) && P < m;);
                        P < m && P--
                    }
                    for (y = i[m] = [], v = l ? Math.min(P, m) * u - .5 : r % P, h = P === co ? 0 : l ? m * p / P - .5 : r / P | 0, C = 0, A = co, E = 0; E < m; E++) x = E % P - v, _ = h - (E / P | 0), y[E] = b = c ? Math.abs(c === "y" ? _ : x) : Sw(x * x + _ * _), b > C && (C = b), b < A && (A = b);
                    r === "random" && zw(y), y.max = C - A, y.min = A, y.v = m = (parseFloat(n.amount) || parseFloat(n.each) * (P > m ? m - 1 : c ? c === "y" ? m / P : P : Math.max(P, m / P)) || 0) * (r === "edges" ? -1 : 1), y.b = m < 0 ? a - m : a, y.u = Xt(n.amount || n.each) || 0, o = o && m < 0 ? Kw(o) : o
                }
                return m = (y[d] - y.min) / y.max || 0, mt(y.b + (o ? o(m) : m) * y.v) + y.u
            }
    },
    vm = function(e) {
        var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(o) {
            var r = mt(Math.round(parseFloat(o) / e) * e * n);
            return (r - r % 1) / n + (br(o) ? 0 : Xt(o))
        }
    },
    Hw = function(e, n) {
        var o = Kt(e),
            r, a;
        return !o && Jo(e) && (r = o = e.radius || co, e.values ? (e = uo(e.values), (a = !br(e[0])) && (r *= r)) : e = vm(e.increment)), ya(n, o ? nt(e) ? function(i) {
            return a = e(i), Math.abs(a - i) <= r ? a : i
        } : function(i) {
            for (var s = parseFloat(a ? i.x : i), l = parseFloat(a ? i.y : 0), c = co, u = 0, p = e.length, d, f; p--;) a ? (d = e[p].x - s, f = e[p].y - l, d = d * d + f * f) : d = Math.abs(e[p] - s), d < c && (c = d, u = p);
            return u = !r || c <= r ? e[u] : i, a || u === i || br(i) ? u : u + Xt(i)
        } : vm(e))
    },
    Uw = function(e, n, o, r) {
        return ya(Kt(e) ? !n : o === !0 ? !!(o = 0) : !r, function() {
            return Kt(e) ? e[~~(Math.random() * e.length)] : (o = o || 1e-5) && (r = o < 1 ? Math.pow(10, (o + "").length - 2) : 1) && Math.floor(Math.round((e - o / 2 + Math.random() * (n - e + o * .99)) / o) * o * r) / r
        })
    },
    PP = function() {
        for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
        return function(r) {
            return n.reduce(function(a, i) {
                return i(a)
            }, r)
        }
    },
    kP = function(e, n) {
        return function(o) {
            return e(parseFloat(o)) + (n || Xt(o))
        }
    },
    DP = function(e, n, o) {
        return Ww(e, n, 0, 1, o)
    },
    Vw = function(e, n, o) {
        return ya(o, function(r) {
            return e[~~n(r)]
        })
    },
    RP = function t(e, n, o) {
        var r = n - e;
        return Kt(e) ? Vw(e, t(0, e.length), n) : ya(o, function(a) {
            return (r + (a - e) % r) % r + e
        })
    },
    OP = function t(e, n, o) {
        var r = n - e,
            a = r * 2;
        return Kt(e) ? Vw(e, t(0, e.length - 1), n) : ya(o, function(i) {
            return i = (a + (i - e) % a) % a || 0, e + (i > r ? a - i : i)
        })
    },
    Ql = function(e) {
        for (var n = 0, o = "", r, a, i, s; ~(r = e.indexOf("random(", n));) i = e.indexOf(")", r), s = e.charAt(r + 7) === "[", a = e.substr(r + 7, i - r - 7).match(s ? Ew : cm), o += e.substr(n, r - n) + Uw(s ? a : +a[0], s ? 0 : +a[1], +a[2] || 1e-5), n = i + 1;
        return o + e.substr(n, e.length - n)
    },
    Ww = function(e, n, o, r, a) {
        var i = n - e,
            s = r - o;
        return ya(a, function(l) {
            return o + ((l - e) / i * s || 0)
        })
    },
    MP = function t(e, n, o, r) {
        var a = isNaN(e + n) ? 0 : function(f) {
            return (1 - f) * e + f * n
        };
        if (!a) {
            var i = Nt(e),
                s = {},
                l, c, u, p, d;
            if (o === !0 && (r = 1) && (o = null), i) e = {
                p: e
            }, n = {
                p: n
            };
            else if (Kt(e) && !Kt(n)) {
                for (u = [], p = e.length, d = p - 2, c = 1; c < p; c++) u.push(t(e[c - 1], e[c]));
                p--, a = function(g) {
                    g *= p;
                    var m = Math.min(d, ~~g);
                    return u[m](g - m)
                }, o = n
            } else r || (e = ps(Kt(e) ? [] : {}, e));
            if (!u) {
                for (l in n) Zh.call(s, e, l, "get", n[l]);
                a = function(g) {
                    return n2(g, s) || (i ? e.p : e)
                }
            }
        }
        return ya(o, a)
    },
    yv = function(e, n, o) {
        var r = e.labels,
            a = co,
            i, s, l;
        for (i in r) s = r[i] - n, s < 0 == !!o && s && a > (s = Math.abs(s)) && (l = i, a = s);
        return l
    },
    Un = function(e, n, o) {
        var r = e.vars,
            a = r[n],
            i = Ie,
            s = e._ctx,
            l, c, u;
        if (a) return l = r[n + "Params"], c = r.callbackScope || e, o && oa.length && rd(), s && (Ie = s), u = l ? a.apply(c, l) : a.call(c), Ie = i, u
    },
    Xs = function(e) {
        return fa(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ft), e.progress() < 1 && Un(e, "onInterrupt"), e
    },
    Pi, Yw = [],
    Gw = function(e) {
        if (e)
            if (e = !e.name && e.default || e, Yh() || e.headless) {
                var n = e.name,
                    o = nt(e),
                    r = n && !o && e.init ? function() {
                        this._props = []
                    } : e,
                    a = {
                        init: Gl,
                        render: n2,
                        add: Zh,
                        kill: qP,
                        modifier: XP,
                        rawVars: 0
                    },
                    i = {
                        targetTest: 0,
                        get: 0,
                        getSetter: t2,
                        aliases: {},
                        register: 0
                    };
                if (hs(), e !== r) {
                    if (Bn[n]) return;
                    Xn(r, Xn(ad(e, a), i)), ps(r.prototype, ps(a, ad(e, i))), Bn[r.prop = n] = r, e.targetTest && (vu.push(r), Xh[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
                }
                Pw(n, r), e.register && e.register(Pn, r, Tn)
            } else Yw.push(e)
    },
    Ne = 255,
    qs = {
        aqua: [0, Ne, Ne],
        lime: [0, Ne, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Ne],
        navy: [0, 0, 128],
        white: [Ne, Ne, Ne],
        olive: [128, 128, 0],
        yellow: [Ne, Ne, 0],
        orange: [Ne, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Ne, 0, 0],
        pink: [Ne, 192, 203],
        cyan: [0, Ne, Ne],
        transparent: [Ne, Ne, Ne, 0]
    },
    jp = function(e, n, o) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (o - n) * e * 6 : e < .5 ? o : e * 3 < 2 ? n + (o - n) * (2 / 3 - e) * 6 : n) * Ne + .5 | 0
    },
    Qw = function(e, n, o) {
        var r = e ? br(e) ? [e >> 16, e >> 8 & Ne, e & Ne] : 0 : qs.black,
            a, i, s, l, c, u, p, d, f, g;
        if (!r) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), qs[e]) r = qs[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (a = e.charAt(1), i = e.charAt(2), s = e.charAt(3), e = "#" + a + a + i + i + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [r >> 16, r >> 8 & Ne, r & Ne, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), r = [e >> 16, e >> 8 & Ne, e & Ne]
            } else if (e.substr(0, 3) === "hsl") {
                if (r = g = e.match(cm), !n) l = +r[0] % 360 / 360, c = +r[1] / 100, u = +r[2] / 100, i = u <= .5 ? u * (c + 1) : u + c - u * c, a = u * 2 - i, r.length > 3 && (r[3] *= 1), r[0] = jp(l + 1 / 3, a, i), r[1] = jp(l, a, i), r[2] = jp(l - 1 / 3, a, i);
                else if (~e.indexOf("=")) return r = e.match(Cw), o && r.length < 4 && (r[3] = 1), r
            } else r = e.match(cm) || qs.transparent;
            r = r.map(Number)
        }
        return n && !g && (a = r[0] / Ne, i = r[1] / Ne, s = r[2] / Ne, p = Math.max(a, i, s), d = Math.min(a, i, s), u = (p + d) / 2, p === d ? l = c = 0 : (f = p - d, c = u > .5 ? f / (2 - p - d) : f / (p + d), l = p === a ? (i - s) / f + (i < s ? 6 : 0) : p === i ? (s - a) / f + 2 : (a - i) / f + 4, l *= 60), r[0] = ~~(l + .5), r[1] = ~~(c * 100 + .5), r[2] = ~~(u * 100 + .5)), o && r.length < 4 && (r[3] = 1), r
    },
    Xw = function(e) {
        var n = [],
            o = [],
            r = -1;
        return e.split(ra).forEach(function(a) {
            var i = a.match(Ni) || [];
            n.push.apply(n, i), o.push(r += i.length + 1)
        }), n.c = o, n
    },
    wv = function(e, n, o) {
        var r = "",
            a = (e + r).match(ra),
            i = n ? "hsla(" : "rgba(",
            s = 0,
            l, c, u, p;
        if (!a) return e;
        if (a = a.map(function(d) {
                return (d = Qw(d, n, 1)) && i + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
            }), o && (u = Xw(e), l = o.c, l.join(r) !== u.c.join(r)))
            for (c = e.replace(ra, "1").split(Ni), p = c.length - 1; s < p; s++) r += c[s] + (~l.indexOf(s) ? a.shift() || i + "0,0,0,0)" : (u.length ? u : a.length ? a : o).shift());
        if (!c)
            for (c = e.split(ra), p = c.length - 1; s < p; s++) r += c[s] + a[s];
        return r + c[p]
    },
    ra = function() {
        var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in qs) t += "|" + e + "\\b";
        return new RegExp(t + ")", "gi")
    }(),
    jP = /hsl[a]?\(/,
    qw = function(e) {
        var n = e.join(" "),
            o;
        if (ra.lastIndex = 0, ra.test(n)) return o = jP.test(n), e[1] = wv(e[1], o), e[0] = wv(e[0], o, Xw(e[1])), !0
    },
    Xl, zn = function() {
        var t = Date.now,
            e = 500,
            n = 33,
            o = t(),
            r = o,
            a = 1e3 / 240,
            i = a,
            s = [],
            l, c, u, p, d, f, g = function m(y) {
                var v = t() - r,
                    h = y === !0,
                    x, _, b, E;
                if ((v > e || v < 0) && (o += v - n), r += v, b = r - o, x = b - i, (x > 0 || h) && (E = ++p.frame, d = b - p.time * 1e3, p.time = b = b / 1e3, i += x + (x >= a ? 4 : a - x), _ = 1), h || (l = c(m)), _)
                    for (f = 0; f < s.length; f++) s[f](b, d, E, y)
            };
        return p = {
            time: 0,
            frame: 0,
            tick: function() {
                g(!0)
            },
            deltaRatio: function(y) {
                return d / (1e3 / (y || 60))
            },
            wake: function() {
                Aw && (!um && Yh() && (Io = um = window, Gh = Io.document || {}, Qn.gsap = Pn, (Io.gsapVersions || (Io.gsapVersions = [])).push(Pn.version), Nw(od || Io.GreenSockGlobals || !Io.gsap && Io || {}), Yw.forEach(Gw)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && p.sleep(), c = u || function(y) {
                    return setTimeout(y, i - p.time * 1e3 + 1 | 0)
                }, Xl = 1, g(2))
            },
            sleep: function() {
                (u ? cancelAnimationFrame : clearTimeout)(l), Xl = 0, c = Gl
            },
            lagSmoothing: function(y, v) {
                e = y || 1 / 0, n = Math.min(v || 33, e)
            },
            fps: function(y) {
                a = 1e3 / (y || 240), i = p.time * 1e3 + a
            },
            add: function(y, v, h) {
                var x = v ? function(_, b, E, C) {
                    y(_, b, E, C), p.remove(x)
                } : y;
                return p.remove(y), s[h ? "unshift" : "push"](x), hs(), x
            },
            remove: function(y, v) {
                ~(v = s.indexOf(y)) && s.splice(v, 1) && f >= v && f--
            },
            _listeners: s
        }, p
    }(),
    hs = function() {
        return !Xl && zn.wake()
    },
    he = {},
    FP = /^[\d.\-M][\d.\-,\s]/,
    BP = /["']/g,
    LP = function(e) {
        for (var n = {}, o = e.substr(1, e.length - 3).split(":"), r = o[0], a = 1, i = o.length, s, l, c; a < i; a++) l = o[a], s = a !== i - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, s), n[r] = isNaN(c) ? c.replace(BP, "").trim() : +c, r = l.substr(s + 1).trim();
        return n
    },
    IP = function(e) {
        var n = e.indexOf("(") + 1,
            o = e.indexOf(")"),
            r = e.indexOf("(", n);
        return e.substring(n, ~r && r < o ? e.indexOf(")", o + 1) : o)
    },
    zP = function(e) {
        var n = (e + "").split("("),
            o = he[n[0]];
        return o && n.length > 1 && o.config ? o.config.apply(null, ~e.indexOf("{") ? [LP(n[1])] : IP(e).split(",").map(Ow)) : he._CE && FP.test(e) ? he._CE("", e) : o
    },
    Kw = function(e) {
        return function(n) {
            return 1 - e(1 - n)
        }
    },
    Zw = function t(e, n) {
        for (var o = e._first, r; o;) o instanceof dn ? t(o, n) : o.vars.yoyoEase && (!o._yoyo || !o._repeat) && o._yoyo !== n && (o.timeline ? t(o.timeline, n) : (r = o._ease, o._ease = o._yEase, o._yEase = r, o._yoyo = n)), o = o._next
    },
    Ua = function(e, n) {
        return e && (nt(e) ? e : he[e] || zP(e)) || n
    },
    ii = function(e, n, o, r) {
        o === void 0 && (o = function(l) {
            return 1 - n(1 - l)
        }), r === void 0 && (r = function(l) {
            return l < .5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2
        });
        var a = {
                easeIn: n,
                easeOut: o,
                easeInOut: r
            },
            i;
        return Cn(e, function(s) {
            he[s] = Qn[s] = a, he[i = s.toLowerCase()] = o;
            for (var l in a) he[i + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = he[s + "." + l] = a[l]
        }), a
    },
    Jw = function(e) {
        return function(n) {
            return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
        }
    },
    Fp = function t(e, n, o) {
        var r = n >= 1 ? n : 1,
            a = (o || (e ? .3 : .45)) / (n < 1 ? n : 1),
            i = a / lm * (Math.asin(1 / r) || 0),
            s = function(u) {
                return u === 1 ? 1 : r * Math.pow(2, -10 * u) * mP((u - i) * a) + 1
            },
            l = e === "out" ? s : e === "in" ? function(c) {
                return 1 - s(1 - c)
            } : Jw(s);
        return a = lm / a, l.config = function(c, u) {
            return t(e, c, u)
        }, l
    },
    Bp = function t(e, n) {
        n === void 0 && (n = 1.70158);
        var o = function(i) {
                return i ? --i * i * ((n + 1) * i + n) + 1 : 0
            },
            r = e === "out" ? o : e === "in" ? function(a) {
                return 1 - o(1 - a)
            } : Jw(o);
        return r.config = function(a) {
            return t(e, a)
        }, r
    };
Cn("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
    var n = e < 5 ? e + 1 : e;
    ii(t + ",Power" + (n - 1), e ? function(o) {
        return Math.pow(o, n)
    } : function(o) {
        return o
    }, function(o) {
        return 1 - Math.pow(1 - o, n)
    }, function(o) {
        return o < .5 ? Math.pow(o * 2, n) / 2 : 1 - Math.pow((1 - o) * 2, n) / 2
    })
});
he.Linear.easeNone = he.none = he.Linear.easeIn;
ii("Elastic", Fp("in"), Fp("out"), Fp());
(function(t, e) {
    var n = 1 / e,
        o = 2 * n,
        r = 2.5 * n,
        a = function(s) {
            return s < n ? t * s * s : s < o ? t * Math.pow(s - 1.5 / e, 2) + .75 : s < r ? t * (s -= 2.25 / e) * s + .9375 : t * Math.pow(s - 2.625 / e, 2) + .984375
        };
    ii("Bounce", function(i) {
        return 1 - a(1 - i)
    }, a)
})(7.5625, 2.75);
ii("Expo", function(t) {
    return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
});
ii("Circ", function(t) {
    return -(Sw(1 - t * t) - 1)
});
ii("Sine", function(t) {
    return t === 1 ? 1 : -fP(t * dP) + 1
});
ii("Back", Bp("in"), Bp("out"), Bp());
he.SteppedEase = he.steps = Qn.SteppedEase = {
    config: function(e, n) {
        e === void 0 && (e = 1);
        var o = 1 / e,
            r = e + (n ? 0 : 1),
            a = n ? 1 : 0,
            i = 1 - Pe;
        return function(s) {
            return ((r * uc(0, i, s) | 0) + a) * o
        }
    }
};
ds.ease = he["quad.out"];
Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
    return qh += t + "," + t + "Params,"
});
var e_ = function(e, n) {
        this.id = pP++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : Dw, this.set = n ? n.getSetter : t2
    },
    ql = function() {
        function t(n) {
            this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, ms(this, +n.duration, 1, 1), this.data = n.data, Ie && (this._ctx = Ie, Ie.data.push(this)), Xl || zn.wake()
        }
        var e = t.prototype;
        return e.delay = function(o) {
            return o || o === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + o - this._delay), this._delay = o, this) : this._delay
        }, e.duration = function(o) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? o + (o + this._rDelay) * this._repeat : o) : this.totalDuration() && this._dur
        }, e.totalDuration = function(o) {
            return arguments.length ? (this._dirty = 0, ms(this, this._repeat < 0 ? o : (o - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(o, r) {
            if (hs(), !arguments.length) return this._tTime;
            var a = this._dp;
            if (a && a.smoothChildTiming && this._ts) {
                for (Yd(this, o), !a._dp || a.parent || Fw(a, this); a && a.parent;) a.parent._time !== a._start + (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) && a.totalTime(a._tTime, !0), a = a.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && o < this._tDur || this._ts < 0 && o > 0 || !this._tDur && !o) && Wo(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== o || !this._dur && !r || this._initted && Math.abs(this._zTime) === Pe || !o && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = o), Rw(this, o, r)), this
        }, e.time = function(o, r) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), o + gv(this)) % (this._dur + this._rDelay) || (o ? this._dur : 0), r) : this._time
        }, e.totalProgress = function(o, r) {
            return arguments.length ? this.totalTime(this.totalDuration() * o, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
        }, e.progress = function(o, r) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - o : o) + gv(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }, e.iteration = function(o, r) {
            var a = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (o - 1) * a, r) : this._repeat ? fs(this._tTime, a) + 1 : 1
        }, e.timeScale = function(o, r) {
            if (!arguments.length) return this._rts === -Pe ? 0 : this._rts;
            if (this._rts === o) return this;
            var a = this.parent && this._ts ? id(this.parent._time, this) : this._tTime;
            return this._rts = +o || 0, this._ts = this._ps || o === -Pe ? 0 : this._rts, this.totalTime(uc(-Math.abs(this._delay), this._tDur, a), r !== !1), Wd(this), _P(this)
        }, e.paused = function(o) {
            return arguments.length ? (this._ps !== o && (this._ps = o, o ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (hs(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Pe && (this._tTime -= Pe)))), this) : this._ps
        }, e.startTime = function(o) {
            if (arguments.length) {
                this._start = o;
                var r = this.parent || this._dp;
                return r && (r._sort || !this.parent) && Wo(r, this, o - this._delay), this
            }
            return this._start
        }, e.endTime = function(o) {
            return this._start + (bn(o) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(o) {
            var r = this.parent || this._dp;
            return r ? o && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? id(r.rawTime(o), this) : this._tTime : this._tTime
        }, e.revert = function(o) {
            o === void 0 && (o = gP);
            var r = Ft;
            return Ft = o, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(o), this.totalTime(-.01, o.suppressEvents)), this.data !== "nested" && o.kill !== !1 && this.kill(), Ft = r, this
        }, e.globalTime = function(o) {
            for (var r = this, a = arguments.length ? o : r.rawTime(); r;) a = r._start + a / (Math.abs(r._ts) || 1), r = r._dp;
            return !this.parent && this._sat ? this._sat.globalTime(o) : a
        }, e.repeat = function(o) {
            return arguments.length ? (this._repeat = o === 1 / 0 ? -2 : o, xv(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(o) {
            if (arguments.length) {
                var r = this._time;
                return this._rDelay = o, xv(this), r ? this.time(r) : this
            }
            return this._rDelay
        }, e.yoyo = function(o) {
            return arguments.length ? (this._yoyo = o, this) : this._yoyo
        }, e.seek = function(o, r) {
            return this.totalTime(to(this, o), bn(r))
        }, e.restart = function(o, r) {
            return this.play().totalTime(o ? -this._delay : 0, bn(r)), this._dur || (this._zTime = -Pe), this
        }, e.play = function(o, r) {
            return o != null && this.seek(o, r), this.reversed(!1).paused(!1)
        }, e.reverse = function(o, r) {
            return o != null && this.seek(o || this.totalDuration(), r), this.reversed(!0).paused(!1)
        }, e.pause = function(o, r) {
            return o != null && this.seek(o, r), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(o) {
            return arguments.length ? (!!o !== this.reversed() && this.timeScale(-this._rts || (o ? -Pe : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -Pe, this
        }, e.isActive = function() {
            var o = this.parent || this._dp,
                r = this._start,
                a;
            return !!(!o || this._ts && this._initted && o.isActive() && (a = o.rawTime(!0)) >= r && a < this.endTime(!0) - Pe)
        }, e.eventCallback = function(o, r, a) {
            var i = this.vars;
            return arguments.length > 1 ? (r ? (i[o] = r, a && (i[o + "Params"] = a), o === "onUpdate" && (this._onUpdate = r)) : delete i[o], this) : i[o]
        }, e.then = function(o) {
            var r = this;
            return new Promise(function(a) {
                var i = nt(o) ? o : Mw,
                    s = function() {
                        var c = r.then;
                        r.then = null, nt(i) && (i = i(r)) && (i.then || i === r) && (r.then = c), a(i), r.then = c
                    };
                r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? s() : r._prom = s
            })
        }, e.kill = function() {
            Xs(this)
        }, t
    }();
Xn(ql.prototype, {
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
    _zTime: -Pe,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var dn = function(t) {
    _w(e, t);

    function e(o, r) {
        var a;
        return o === void 0 && (o = {}), a = t.call(this, o) || this, a.labels = {}, a.smoothChildTiming = !!o.smoothChildTiming, a.autoRemoveChildren = !!o.autoRemoveChildren, a._sort = bn(o.sortChildren), Ve && Wo(o.parent || Ve, sr(a), r), o.reversed && a.reverse(), o.paused && a.paused(!0), o.scrollTrigger && Bw(sr(a), o.scrollTrigger), a
    }
    var n = e.prototype;
    return n.to = function(r, a, i) {
        return fl(0, arguments, this), this
    }, n.from = function(r, a, i) {
        return fl(1, arguments, this), this
    }, n.fromTo = function(r, a, i, s) {
        return fl(2, arguments, this), this
    }, n.set = function(r, a, i) {
        return a.duration = 0, a.parent = this, pl(a).repeatDelay || (a.repeat = 0), a.immediateRender = !!a.immediateRender, new ft(r, a, to(this, i), 1), this
    }, n.call = function(r, a, i) {
        return Wo(this, ft.delayedCall(0, r, a), i)
    }, n.staggerTo = function(r, a, i, s, l, c, u) {
        return i.duration = a, i.stagger = i.stagger || s, i.onComplete = c, i.onCompleteParams = u, i.parent = this, new ft(r, i, to(this, l)), this
    }, n.staggerFrom = function(r, a, i, s, l, c, u) {
        return i.runBackwards = 1, pl(i).immediateRender = bn(i.immediateRender), this.staggerTo(r, a, i, s, l, c, u)
    }, n.staggerFromTo = function(r, a, i, s, l, c, u, p) {
        return s.startAt = i, pl(s).immediateRender = bn(s.immediateRender), this.staggerTo(r, a, s, l, c, u, p)
    }, n.render = function(r, a, i) {
        var s = this._time,
            l = this._dirty ? this.totalDuration() : this._tDur,
            c = this._dur,
            u = r <= 0 ? 0 : mt(r),
            p = this._zTime < 0 != r < 0 && (this._initted || !c),
            d, f, g, m, y, v, h, x, _, b, E, C;
        if (this !== Ve && u > l && r >= 0 && (u = l), u !== this._tTime || i || p) {
            if (s !== this._time && c && (u += this._time - s, r += this._time - s), d = u, _ = this._start, x = this._ts, v = !x, p && (c || (s = this._zTime), (r || !a) && (this._zTime = r)), this._repeat) {
                if (E = this._yoyo, y = c + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(y * 100 + r, a, i);
                if (d = mt(u % y), u === l ? (m = this._repeat, d = c) : (b = mt(u / y), m = ~~b, m && m === b && (d = c, m--), d > c && (d = c)), b = fs(this._tTime, y), !s && this._tTime && b !== m && this._tTime - b * y - this._dur <= 0 && (b = m), E && m & 1 && (d = c - d, C = 1), m !== b && !this._lock) {
                    var A = E && b & 1,
                        P = A === (E && m & 1);
                    if (m < b && (A = !A), s = A ? 0 : u % c ? c : u, this._lock = 1, this.render(s || (C ? 0 : mt(m * y)), a, !c)._lock = 0, this._tTime = u, !a && this.parent && Un(this, "onRepeat"), this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1), s && s !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (c = this._dur, l = this._tDur, P && (this._lock = 2, s = A ? c : -1e-4, this.render(s, !0), this.vars.repeatRefresh && !C && this.invalidate()), this._lock = 0, !this._ts && !v) return this;
                    Zw(this, C)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (h = TP(this, mt(s), mt(d)), h && (u -= d - (d = h._start))), this._tTime = u, this._time = d, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, s = 0), !s && d && !a && !m && (Un(this, "onStart"), this._tTime !== u)) return this;
            if (d >= s && r >= 0)
                for (f = this._first; f;) {
                    if (g = f._next, (f._act || d >= f._start) && f._ts && h !== f) {
                        if (f.parent !== this) return this.render(r, a, i);
                        if (f.render(f._ts > 0 ? (d - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (d - f._start) * f._ts, a, i), d !== this._time || !this._ts && !v) {
                            h = 0, g && (u += this._zTime = -Pe);
                            break
                        }
                    }
                    f = g
                } else {
                    f = this._last;
                    for (var k = r < 0 ? r : d; f;) {
                        if (g = f._prev, (f._act || k <= f._end) && f._ts && h !== f) {
                            if (f.parent !== this) return this.render(r, a, i);
                            if (f.render(f._ts > 0 ? (k - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (k - f._start) * f._ts, a, i || Ft && (f._initted || f._startAt)), d !== this._time || !this._ts && !v) {
                                h = 0, g && (u += this._zTime = k ? -Pe : Pe);
                                break
                            }
                        }
                        f = g
                    }
                }
            if (h && !a && (this.pause(), h.render(d >= s ? 0 : -Pe)._zTime = d >= s ? 1 : -1, this._ts)) return this._start = _, Wd(this), this.render(r, a, i);
            this._onUpdate && !a && Un(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && s) && (_ === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((r || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && fa(this, 1), !a && !(r < 0 && !s) && (u || s || !l) && (Un(this, u === l && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, n.add = function(r, a) {
        var i = this;
        if (br(a) || (a = to(this, a, r)), !(r instanceof ql)) {
            if (Kt(r)) return r.forEach(function(s) {
                return i.add(s, a)
            }), this;
            if (Nt(r)) return this.addLabel(r, a);
            if (nt(r)) r = ft.delayedCall(0, r);
            else return this
        }
        return this !== r ? Wo(this, r, a) : this
    }, n.getChildren = function(r, a, i, s) {
        r === void 0 && (r = !0), a === void 0 && (a = !0), i === void 0 && (i = !0), s === void 0 && (s = -co);
        for (var l = [], c = this._first; c;) c._start >= s && (c instanceof ft ? a && l.push(c) : (i && l.push(c), r && l.push.apply(l, c.getChildren(!0, a, i)))), c = c._next;
        return l
    }, n.getById = function(r) {
        for (var a = this.getChildren(1, 1, 1), i = a.length; i--;)
            if (a[i].vars.id === r) return a[i]
    }, n.remove = function(r) {
        return Nt(r) ? this.removeLabel(r) : nt(r) ? this.killTweensOf(r) : (r.parent === this && Vd(this, r), r === this._recent && (this._recent = this._last), Ha(this))
    }, n.totalTime = function(r, a) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = mt(zn.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), t.prototype.totalTime.call(this, r, a), this._forcing = 0, this) : this._tTime
    }, n.addLabel = function(r, a) {
        return this.labels[r] = to(this, a), this
    }, n.removeLabel = function(r) {
        return delete this.labels[r], this
    }, n.addPause = function(r, a, i) {
        var s = ft.delayedCall(0, a || Gl, i);
        return s.data = "isPause", this._hasPause = 1, Wo(this, s, to(this, r))
    }, n.removePause = function(r) {
        var a = this._first;
        for (r = to(this, r); a;) a._start === r && a.data === "isPause" && fa(a), a = a._next
    }, n.killTweensOf = function(r, a, i) {
        for (var s = this.getTweensOf(r, i), l = s.length; l--;) Vr !== s[l] && s[l].kill(r, a);
        return this
    }, n.getTweensOf = function(r, a) {
        for (var i = [], s = uo(r), l = this._first, c = br(a), u; l;) l instanceof ft ? xP(l._targets, s) && (c ? (!Vr || l._initted && l._ts) && l.globalTime(0) <= a && l.globalTime(l.totalDuration()) > a : !a || l.isActive()) && i.push(l) : (u = l.getTweensOf(s, a)).length && i.push.apply(i, u), l = l._next;
        return i
    }, n.tweenTo = function(r, a) {
        a = a || {};
        var i = this,
            s = to(i, r),
            l = a,
            c = l.startAt,
            u = l.onStart,
            p = l.onStartParams,
            d = l.immediateRender,
            f, g = ft.to(i, Xn({
                ease: a.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: s,
                overwrite: "auto",
                duration: a.duration || Math.abs((s - (c && "time" in c ? c.time : i._time)) / i.timeScale()) || Pe,
                onStart: function() {
                    if (i.pause(), !f) {
                        var y = a.duration || Math.abs((s - (c && "time" in c ? c.time : i._time)) / i.timeScale());
                        g._dur !== y && ms(g, y, 0, 1).render(g._time, !0, !0), f = 1
                    }
                    u && u.apply(g, p || [])
                }
            }, a));
        return d ? g.render(0) : g
    }, n.tweenFromTo = function(r, a, i) {
        return this.tweenTo(a, Xn({
            startAt: {
                time: to(this, r)
            }
        }, i))
    }, n.recent = function() {
        return this._recent
    }, n.nextLabel = function(r) {
        return r === void 0 && (r = this._time), yv(this, to(this, r))
    }, n.previousLabel = function(r) {
        return r === void 0 && (r = this._time), yv(this, to(this, r), 1)
    }, n.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + Pe)
    }, n.shiftChildren = function(r, a, i) {
        i === void 0 && (i = 0);
        for (var s = this._first, l = this.labels, c; s;) s._start >= i && (s._start += r, s._end += r), s = s._next;
        if (a)
            for (c in l) l[c] >= i && (l[c] += r);
        return Ha(this)
    }, n.invalidate = function(r) {
        var a = this._first;
        for (this._lock = 0; a;) a.invalidate(r), a = a._next;
        return t.prototype.invalidate.call(this, r)
    }, n.clear = function(r) {
        r === void 0 && (r = !0);
        for (var a = this._first, i; a;) i = a._next, this.remove(a), a = i;
        return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Ha(this)
    }, n.totalDuration = function(r) {
        var a = 0,
            i = this,
            s = i._last,
            l = co,
            c, u, p;
        if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -r : r));
        if (i._dirty) {
            for (p = i.parent; s;) c = s._prev, s._dirty && s.totalDuration(), u = s._start, u > l && i._sort && s._ts && !i._lock ? (i._lock = 1, Wo(i, s, u - s._delay, 1)._lock = 0) : l = u, u < 0 && s._ts && (a -= u, (!p && !i._dp || p && p.smoothChildTiming) && (i._start += u / i._ts, i._time -= u, i._tTime -= u), i.shiftChildren(-u, !1, -1 / 0), l = 0), s._end > a && s._ts && (a = s._end), s = c;
            ms(i, i === Ve && i._time > a ? i._time : a, 1, 1), i._dirty = 0
        }
        return i._tDur
    }, e.updateRoot = function(r) {
        if (Ve._ts && (Rw(Ve, id(r, Ve)), kw = zn.frame), zn.frame >= hv) {
            hv += Yn.autoSleep || 120;
            var a = Ve._first;
            if ((!a || !a._ts) && Yn.autoSleep && zn._listeners.length < 2) {
                for (; a && !a._ts;) a = a._next;
                a || zn.sleep()
            }
        }
    }, e
}(ql);
Xn(dn.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var $P = function(e, n, o, r, a, i, s) {
        var l = new Tn(this._pt, e, n, 0, 1, i_, null, a),
            c = 0,
            u = 0,
            p, d, f, g, m, y, v, h;
        for (l.b = o, l.e = r, o += "", r += "", (v = ~r.indexOf("random(")) && (r = Ql(r)), i && (h = [o, r], i(h, e, n), o = h[0], r = h[1]), d = o.match(Op) || []; p = Op.exec(r);) g = p[0], m = r.substring(c, p.index), f ? f = (f + 1) % 5 : m.substr(-5) === "rgba(" && (f = 1), g !== d[u++] && (y = parseFloat(d[u - 1]) || 0, l._pt = {
            _next: l._pt,
            p: m || u === 1 ? m : ",",
            s: y,
            c: g.charAt(1) === "=" ? $i(y, g) - y : parseFloat(g) - y,
            m: f && f < 4 ? Math.round : 0
        }, c = Op.lastIndex);
        return l.c = c < r.length ? r.substring(c, r.length) : "", l.fp = s, (Tw.test(r) || v) && (l.e = 0), this._pt = l, l
    },
    Zh = function(e, n, o, r, a, i, s, l, c, u) {
        nt(r) && (r = r(a || 0, e, i));
        var p = e[n],
            d = o !== "get" ? o : nt(p) ? c ? e[n.indexOf("set") || !nt(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](c) : e[n]() : p,
            f = nt(p) ? c ? YP : r_ : e2,
            g;
        if (Nt(r) && (~r.indexOf("random(") && (r = Ql(r)), r.charAt(1) === "=" && (g = $i(d, r) + (Xt(d) || 0), (g || g === 0) && (r = g))), !u || d !== r || gm) return !isNaN(d * r) && r !== "" ? (g = new Tn(this._pt, e, n, +d || 0, r - (d || 0), typeof p == "boolean" ? QP : a_, 0, f), c && (g.fp = c), s && g.modifier(s, this, e), this._pt = g) : (!p && !(n in e) && Qh(n, r), $P.call(this, e, n, d, r, f, l || Yn.stringFilter, c))
    },
    HP = function(e, n, o, r, a) {
        if (nt(e) && (e = ml(e, a, n, o, r)), !Jo(e) || e.style && e.nodeType || Kt(e) || bw(e)) return Nt(e) ? ml(e, a, n, o, r) : e;
        var i = {},
            s;
        for (s in e) i[s] = ml(e[s], a, n, o, r);
        return i
    },
    t_ = function(e, n, o, r, a, i) {
        var s, l, c, u;
        if (Bn[e] && (s = new Bn[e]).init(a, s.rawVars ? n[e] : HP(n[e], r, a, i, o), o, r, i) !== !1 && (o._pt = l = new Tn(o._pt, a, e, 0, 1, s.render, s, 0, s.priority), o !== Pi))
            for (c = o._ptLookup[o._targets.indexOf(a)], u = s._props.length; u--;) c[s._props[u]] = l;
        return s
    },
    Vr, gm, Jh = function t(e, n, o) {
        var r = e.vars,
            a = r.ease,
            i = r.startAt,
            s = r.immediateRender,
            l = r.lazy,
            c = r.onUpdate,
            u = r.runBackwards,
            p = r.yoyoEase,
            d = r.keyframes,
            f = r.autoRevert,
            g = e._dur,
            m = e._startAt,
            y = e._targets,
            v = e.parent,
            h = v && v.data === "nested" ? v.vars.targets : y,
            x = e._overwrite === "auto" && !Vh,
            _ = e.timeline,
            b, E, C, A, P, k, L, R, H, M, V, z, $;
        if (_ && (!d || !a) && (a = "none"), e._ease = Ua(a, ds.ease), e._yEase = p ? Kw(Ua(p === !0 ? a : p, ds.ease)) : 0, p && e._yoyo && !e._repeat && (p = e._yEase, e._yEase = e._ease, e._ease = p), e._from = !_ && !!r.runBackwards, !_ || d && !r.stagger) {
            if (R = y[0] ? $a(y[0]).harness : 0, z = R && r[R.prop], b = ad(r, Xh), m && (m._zTime < 0 && m.progress(1), n < 0 && u && s && !f ? m.render(-1, !0) : m.revert(u && g ? hu : vP), m._lazy = 0), i) {
                if (fa(e._startAt = ft.set(y, Xn({
                        data: "isStart",
                        overwrite: !1,
                        parent: v,
                        immediateRender: !0,
                        lazy: !m && bn(l),
                        startAt: null,
                        delay: 0,
                        onUpdate: c && function() {
                            return Un(e, "onUpdate")
                        },
                        stagger: 0
                    }, i))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Ft || !s && !f) && e._startAt.revert(hu), s && g && n <= 0 && o <= 0) {
                    n && (e._zTime = n);
                    return
                }
            } else if (u && g && !m) {
                if (n && (s = !1), C = Xn({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: s && !m && bn(l),
                        immediateRender: s,
                        stagger: 0,
                        parent: v
                    }, b), z && (C[R.prop] = z), fa(e._startAt = ft.set(y, C)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (Ft ? e._startAt.revert(hu) : e._startAt.render(-1, !0)), e._zTime = n, !s) t(e._startAt, Pe, Pe);
                else if (!n) return
            }
            for (e._pt = e._ptCache = 0, l = g && bn(l) || l && !g, E = 0; E < y.length; E++) {
                if (P = y[E], L = P._gsap || Kh(y)[E]._gsap, e._ptLookup[E] = M = {}, dm[L.id] && oa.length && rd(), V = h === y ? E : h.indexOf(P), R && (H = new R).init(P, z || b, e, V, h) !== !1 && (e._pt = A = new Tn(e._pt, P, H.name, 0, 1, H.render, H, 0, H.priority), H._props.forEach(function(N) {
                        M[N] = A
                    }), H.priority && (k = 1)), !R || z)
                    for (C in b) Bn[C] && (H = t_(C, b, e, V, P, h)) ? H.priority && (k = 1) : M[C] = A = Zh.call(e, P, C, "get", b[C], V, h, 0, r.stringFilter);
                e._op && e._op[E] && e.kill(P, e._op[E]), x && e._pt && (Vr = e, Ve.killTweensOf(P, M, e.globalTime(n)), $ = !e.parent, Vr = 0), e._pt && l && (dm[L.id] = 1)
            }
            k && s_(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = c, e._initted = (!e._op || e._pt) && !$, d && n <= 0 && _.render(co, !0, !0)
    },
    UP = function(e, n, o, r, a, i, s, l) {
        var c = (e._pt && e._ptCache || (e._ptCache = {}))[n],
            u, p, d, f;
        if (!c)
            for (c = e._ptCache[n] = [], d = e._ptLookup, f = e._targets.length; f--;) {
                if (u = d[f][n], u && u.d && u.d._pt)
                    for (u = u.d._pt; u && u.p !== n && u.fp !== n;) u = u._next;
                if (!u) return gm = 1, e.vars[n] = "+=0", Jh(e, s), gm = 0, l ? Yl(n + " not eligible for reset") : 1;
                c.push(u)
            }
        for (f = c.length; f--;) p = c[f], u = p._pt || p, u.s = (r || r === 0) && !a ? r : u.s + (r || 0) + i * u.c, u.c = o - u.s, p.e && (p.e = lt(o) + Xt(p.e)), p.b && (p.b = u.s + Xt(p.b))
    },
    VP = function(e, n) {
        var o = e[0] ? $a(e[0]).harness : 0,
            r = o && o.aliases,
            a, i, s, l;
        if (!r) return n;
        a = ps({}, n);
        for (i in r)
            if (i in a)
                for (l = r[i].split(","), s = l.length; s--;) a[l[s]] = a[i];
        return a
    },
    WP = function(e, n, o, r) {
        var a = n.ease || r || "power1.inOut",
            i, s;
        if (Kt(n)) s = o[e] || (o[e] = []), n.forEach(function(l, c) {
            return s.push({
                t: c / (n.length - 1) * 100,
                v: l,
                e: a
            })
        });
        else
            for (i in n) s = o[i] || (o[i] = []), i === "ease" || s.push({
                t: parseFloat(e),
                v: n[i],
                e: a
            })
    },
    ml = function(e, n, o, r, a) {
        return nt(e) ? e.call(n, o, r, a) : Nt(e) && ~e.indexOf("random(") ? Ql(e) : e
    },
    n_ = qh + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    o_ = {};
Cn(n_ + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
    return o_[t] = 1
});
var ft = function(t) {
    _w(e, t);

    function e(o, r, a, i) {
        var s;
        typeof r == "number" && (a.duration = r, r = a, a = null), s = t.call(this, i ? r : pl(r)) || this;
        var l = s.vars,
            c = l.duration,
            u = l.delay,
            p = l.immediateRender,
            d = l.stagger,
            f = l.overwrite,
            g = l.keyframes,
            m = l.defaults,
            y = l.scrollTrigger,
            v = l.yoyoEase,
            h = r.parent || Ve,
            x = (Kt(o) || bw(o) ? br(o[0]) : "length" in r) ? [o] : uo(o),
            _, b, E, C, A, P, k, L;
        if (s._targets = x.length ? Kh(x) : Yl("GSAP target " + o + " not found. https://gsap.com", !Yn.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = f, g || d || Lc(c) || Lc(u)) {
            if (r = s.vars, _ = s.timeline = new dn({
                    data: "nested",
                    defaults: m || {},
                    targets: h && h.data === "nested" ? h.vars.targets : x
                }), _.kill(), _.parent = _._dp = sr(s), _._start = 0, d || Lc(c) || Lc(u)) {
                if (C = x.length, k = d && $w(d), Jo(d))
                    for (A in d) ~n_.indexOf(A) && (L || (L = {}), L[A] = d[A]);
                for (b = 0; b < C; b++) E = ad(r, o_), E.stagger = 0, v && (E.yoyoEase = v), L && ps(E, L), P = x[b], E.duration = +ml(c, sr(s), b, P, x), E.delay = (+ml(u, sr(s), b, P, x) || 0) - s._delay, !d && C === 1 && E.delay && (s._delay = u = E.delay, s._start += u, E.delay = 0), _.to(P, E, k ? k(b, P, x) : 0), _._ease = he.none;
                _.duration() ? c = u = 0 : s.timeline = 0
            } else if (g) {
                pl(Xn(_.vars.defaults, {
                    ease: "none"
                })), _._ease = Ua(g.ease || r.ease || "none");
                var R = 0,
                    H, M, V;
                if (Kt(g)) g.forEach(function(z) {
                    return _.to(x, z, ">")
                }), _.duration();
                else {
                    E = {};
                    for (A in g) A === "ease" || A === "easeEach" || WP(A, g[A], E, g.easeEach);
                    for (A in E)
                        for (H = E[A].sort(function(z, $) {
                                return z.t - $.t
                            }), R = 0, b = 0; b < H.length; b++) M = H[b], V = {
                            ease: M.e,
                            duration: (M.t - (b ? H[b - 1].t : 0)) / 100 * c
                        }, V[A] = M.v, _.to(x, V, R), R += V.duration;
                    _.duration() < c && _.to({}, {
                        duration: c - _.duration()
                    })
                }
            }
            c || s.duration(c = _.duration())
        } else s.timeline = 0;
        return f === !0 && !Vh && (Vr = sr(s), Ve.killTweensOf(x), Vr = 0), Wo(h, sr(s), a), r.reversed && s.reverse(), r.paused && s.paused(!0), (p || !c && !g && s._start === mt(h._time) && bn(p) && SP(sr(s)) && h.data !== "nested") && (s._tTime = -Pe, s.render(Math.max(0, -u) || 0)), y && Bw(sr(s), y), s
    }
    var n = e.prototype;
    return n.render = function(r, a, i) {
        var s = this._time,
            l = this._tDur,
            c = this._dur,
            u = r < 0,
            p = r > l - Pe && !u ? l : r < Pe ? 0 : r,
            d, f, g, m, y, v, h, x, _;
        if (!c) CP(this, r, a, i);
        else if (p !== this._tTime || !r || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
            if (d = p, x = this.timeline, this._repeat) {
                if (m = c + this._rDelay, this._repeat < -1 && u) return this.totalTime(m * 100 + r, a, i);
                if (d = mt(p % m), p === l ? (g = this._repeat, d = c) : (y = mt(p / m), g = ~~y, g && g === y ? (d = c, g--) : d > c && (d = c)), v = this._yoyo && g & 1, v && (_ = this._yEase, d = c - d), y = fs(this._tTime, m), d === s && !i && this._initted && g === y) return this._tTime = p, this;
                g !== y && (x && this._yEase && Zw(x, v), this.vars.repeatRefresh && !v && !this._lock && d !== m && this._initted && (this._lock = i = 1, this.render(mt(m * g), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Lw(this, u ? r : d, i, a, p)) return this._tTime = 0, this;
                if (s !== this._time && !(i && this.vars.repeatRefresh && g !== y)) return this;
                if (c !== this._dur) return this.render(r, a, i)
            }
            if (this._tTime = p, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (_ || this._ease)(d / c), this._from && (this.ratio = h = 1 - h), d && !s && !a && !g && (Un(this, "onStart"), this._tTime !== p)) return this;
            for (f = this._pt; f;) f.r(h, f.d), f = f._next;
            x && x.render(r < 0 ? r : x._dur * x._ease(d / this._dur), a, i) || this._startAt && (this._zTime = r), this._onUpdate && !a && (u && pm(this, r, a, i), Un(this, "onUpdate")), this._repeat && g !== y && this.vars.onRepeat && !a && this.parent && Un(this, "onRepeat"), (p === this._tDur || !p) && this._tTime === p && (u && !this._onUpdate && pm(this, r, !0, !0), (r || !c) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && fa(this, 1), !a && !(u && !s) && (p || s || v) && (Un(this, p === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, n.targets = function() {
        return this._targets
    }, n.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), t.prototype.invalidate.call(this, r)
    }, n.resetTo = function(r, a, i, s, l) {
        Xl || zn.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            u;
        return this._initted || Jh(this, c), u = this._ease(c / this._dur), UP(this, r, a, i, s, u, c, l) ? this.resetTo(r, a, i, s, 1) : (Yd(this, 0), this.parent || jw(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, n.kill = function(r, a) {
        if (a === void 0 && (a = "all"), !r && (!a || a === "all")) return this._lazy = this._pt = 0, this.parent ? Xs(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ft), this;
        if (this.timeline) {
            var i = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, a, Vr && Vr.vars.overwrite !== !0)._first || Xs(this), this.parent && i !== this.timeline.totalDuration() && ms(this, this._dur * this.timeline._tDur / i, 0, 1), this
        }
        var s = this._targets,
            l = r ? uo(r) : s,
            c = this._ptLookup,
            u = this._pt,
            p, d, f, g, m, y, v;
        if ((!a || a === "all") && wP(s, l)) return a === "all" && (this._pt = 0), Xs(this);
        for (p = this._op = this._op || [], a !== "all" && (Nt(a) && (m = {}, Cn(a, function(h) {
                return m[h] = 1
            }), a = m), a = VP(s, a)), v = s.length; v--;)
            if (~l.indexOf(s[v])) {
                d = c[v], a === "all" ? (p[v] = a, g = d, f = {}) : (f = p[v] = p[v] || {}, g = a);
                for (m in g) y = d && d[m], y && ((!("kill" in y.d) || y.d.kill(m) === !0) && Vd(this, y, "_pt"), delete d[m]), f !== "all" && (f[m] = 1)
            }
        return this._initted && !this._pt && u && Xs(this), this
    }, e.to = function(r, a) {
        return new e(r, a, arguments[2])
    }, e.from = function(r, a) {
        return fl(1, arguments)
    }, e.delayedCall = function(r, a, i, s) {
        return new e(a, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: a,
            onReverseComplete: a,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: s
        })
    }, e.fromTo = function(r, a, i) {
        return fl(2, arguments)
    }, e.set = function(r, a) {
        return a.duration = 0, a.repeatDelay || (a.repeat = 0), new e(r, a)
    }, e.killTweensOf = function(r, a, i) {
        return Ve.killTweensOf(r, a, i)
    }, e
}(ql);
Xn(ft.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Cn("staggerTo,staggerFrom,staggerFromTo", function(t) {
    ft[t] = function() {
        var e = new dn,
            n = mm.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n)
    }
});
var e2 = function(e, n, o) {
        return e[n] = o
    },
    r_ = function(e, n, o) {
        return e[n](o)
    },
    YP = function(e, n, o, r) {
        return e[n](r.fp, o)
    },
    GP = function(e, n, o) {
        return e.setAttribute(n, o)
    },
    t2 = function(e, n) {
        return nt(e[n]) ? r_ : Wh(e[n]) && e.setAttribute ? GP : e2
    },
    a_ = function(e, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
    },
    QP = function(e, n) {
        return n.set(n.t, n.p, !!(n.s + n.c * e), n)
    },
    i_ = function(e, n) {
        var o = n._pt,
            r = "";
        if (!e && n.b) r = n.b;
        else if (e === 1 && n.e) r = n.e;
        else {
            for (; o;) r = o.p + (o.m ? o.m(o.s + o.c * e) : Math.round((o.s + o.c * e) * 1e4) / 1e4) + r, o = o._next;
            r += n.c
        }
        n.set(n.t, n.p, r, n)
    },
    n2 = function(e, n) {
        for (var o = n._pt; o;) o.r(e, o.d), o = o._next
    },
    XP = function(e, n, o, r) {
        for (var a = this._pt, i; a;) i = a._next, a.p === r && a.modifier(e, n, o), a = i
    },
    qP = function(e) {
        for (var n = this._pt, o, r; n;) r = n._next, n.p === e && !n.op || n.op === e ? Vd(this, n, "_pt") : n.dep || (o = 1), n = r;
        return !o
    },
    KP = function(e, n, o, r) {
        r.mSet(e, n, r.m.call(r.tween, o, r.mt), r)
    },
    s_ = function(e) {
        for (var n = e._pt, o, r, a, i; n;) {
            for (o = n._next, r = a; r && r.pr > n.pr;) r = r._next;
            (n._prev = r ? r._prev : i) ? n._prev._next = n: a = n, (n._next = r) ? r._prev = n : i = n, n = o
        }
        e._pt = a
    },
    Tn = function() {
        function t(n, o, r, a, i, s, l, c, u) {
            this.t = o, this.s = a, this.c = i, this.p = r, this.r = s || a_, this.d = l || this, this.set = c || e2, this.pr = u || 0, this._next = n, n && (n._prev = this)
        }
        var e = t.prototype;
        return e.modifier = function(o, r, a) {
            this.mSet = this.mSet || this.set, this.set = KP, this.m = o, this.mt = a, this.tween = r
        }, t
    }();
Cn(qh + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
    return Xh[t] = 1
});
Qn.TweenMax = Qn.TweenLite = ft;
Qn.TimelineLite = Qn.TimelineMax = dn;
Ve = new dn({
    sortChildren: !1,
    defaults: ds,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Yn.stringFilter = qw;
var Va = [],
    gu = {},
    ZP = [],
    _v = 0,
    JP = 0,
    Lp = function(e) {
        return (gu[e] || ZP).map(function(n) {
            return n()
        })
    },
    xm = function() {
        var e = Date.now(),
            n = [];
        e - _v > 2 && (Lp("matchMediaInit"), Va.forEach(function(o) {
            var r = o.queries,
                a = o.conditions,
                i, s, l, c;
            for (s in r) i = Io.matchMedia(r[s]).matches, i && (l = 1), i !== a[s] && (a[s] = i, c = 1);
            c && (o.revert(), l && n.push(o))
        }), Lp("matchMediaRevert"), n.forEach(function(o) {
            return o.onMatch(o, function(r) {
                return o.add(null, r)
            })
        }), _v = e, Lp("matchMedia"))
    },
    l_ = function() {
        function t(n, o) {
            this.selector = o && hm(o), this.data = [], this._r = [], this.isReverted = !1, this.id = JP++, n && this.add(n)
        }
        var e = t.prototype;
        return e.add = function(o, r, a) {
            nt(o) && (a = r, r = o, o = nt);
            var i = this,
                s = function() {
                    var c = Ie,
                        u = i.selector,
                        p;
                    return c && c !== i && c.data.push(i), a && (i.selector = hm(a)), Ie = i, p = r.apply(i, arguments), nt(p) && i._r.push(p), Ie = c, i.selector = u, i.isReverted = !1, p
                };
            return i.last = s, o === nt ? s(i, function(l) {
                return i.add(null, l)
            }) : o ? i[o] = s : s
        }, e.ignore = function(o) {
            var r = Ie;
            Ie = null, o(this), Ie = r
        }, e.getTweens = function() {
            var o = [];
            return this.data.forEach(function(r) {
                return r instanceof t ? o.push.apply(o, r.getTweens()) : r instanceof ft && !(r.parent && r.parent.data === "nested") && o.push(r)
            }), o
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(o, r) {
            var a = this;
            if (o ? function() {
                    for (var s = a.getTweens(), l = a.data.length, c; l--;) c = a.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(u) {
                        return s.splice(s.indexOf(u), 1)
                    }));
                    for (s.map(function(u) {
                            return {
                                g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
                                t: u
                            }
                        }).sort(function(u, p) {
                            return p.g - u.g || -1 / 0
                        }).forEach(function(u) {
                            return u.t.revert(o)
                        }), l = a.data.length; l--;) c = a.data[l], c instanceof dn ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof ft) && c.revert && c.revert(o);
                    a._r.forEach(function(u) {
                        return u(o, a)
                    }), a.isReverted = !0
                }() : this.data.forEach(function(s) {
                    return s.kill && s.kill()
                }), this.clear(), r)
                for (var i = Va.length; i--;) Va[i].id === this.id && Va.splice(i, 1)
        }, e.revert = function(o) {
            this.kill(o || {})
        }, t
    }(),
    ek = function() {
        function t(n) {
            this.contexts = [], this.scope = n, Ie && Ie.data.push(this)
        }
        var e = t.prototype;
        return e.add = function(o, r, a) {
            Jo(o) || (o = {
                matches: o
            });
            var i = new l_(0, a || this.scope),
                s = i.conditions = {},
                l, c, u;
            Ie && !i.selector && (i.selector = Ie.selector), this.contexts.push(i), r = i.add("onMatch", r), i.queries = o;
            for (c in o) c === "all" ? u = 1 : (l = Io.matchMedia(o[c]), l && (Va.indexOf(i) < 0 && Va.push(i), (s[c] = l.matches) && (u = 1), l.addListener ? l.addListener(xm) : l.addEventListener("change", xm)));
            return u && r(i, function(p) {
                return i.add(null, p)
            }), this
        }, e.revert = function(o) {
            this.kill(o || {})
        }, e.kill = function(o) {
            this.contexts.forEach(function(r) {
                return r.kill(o, !0)
            })
        }, t
    }(),
    sd = {
        registerPlugin: function() {
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            n.forEach(function(r) {
                return Gw(r)
            })
        },
        timeline: function(e) {
            return new dn(e)
        },
        getTweensOf: function(e, n) {
            return Ve.getTweensOf(e, n)
        },
        getProperty: function(e, n, o, r) {
            Nt(e) && (e = uo(e)[0]);
            var a = $a(e || {}).get,
                i = o ? Mw : Ow;
            return o === "native" && (o = ""), e && (n ? i((Bn[n] && Bn[n].get || a)(e, n, o, r)) : function(s, l, c) {
                return i((Bn[s] && Bn[s].get || a)(e, s, l, c))
            })
        },
        quickSetter: function(e, n, o) {
            if (e = uo(e), e.length > 1) {
                var r = e.map(function(u) {
                        return Pn.quickSetter(u, n, o)
                    }),
                    a = r.length;
                return function(u) {
                    for (var p = a; p--;) r[p](u)
                }
            }
            e = e[0] || {};
            var i = Bn[n],
                s = $a(e),
                l = s.harness && (s.harness.aliases || {})[n] || n,
                c = i ? function(u) {
                    var p = new i;
                    Pi._pt = 0, p.init(e, o ? u + o : u, Pi, 0, [e]), p.render(1, p), Pi._pt && n2(1, Pi)
                } : s.set(e, l);
            return i ? c : function(u) {
                return c(e, l, o ? u + o : u, s, 1)
            }
        },
        quickTo: function(e, n, o) {
            var r, a = Pn.to(e, Xn((r = {}, r[n] = "+=0.1", r.paused = !0, r.stagger = 0, r), o || {})),
                i = function(l, c, u) {
                    return a.resetTo(n, l, c, u)
                };
            return i.tween = a, i
        },
        isTweening: function(e) {
            return Ve.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Ua(e.ease, ds.ease)), vv(ds, e || {})
        },
        config: function(e) {
            return vv(Yn, e || {})
        },
        registerEffect: function(e) {
            var n = e.name,
                o = e.effect,
                r = e.plugins,
                a = e.defaults,
                i = e.extendTimeline;
            (r || "").split(",").forEach(function(s) {
                return s && !Bn[s] && !Qn[s] && Yl(n + " effect requires " + s + " plugin.")
            }), Mp[n] = function(s, l, c) {
                return o(uo(s), Xn(l || {}, a), c)
            }, i && (dn.prototype[n] = function(s, l, c) {
                return this.add(Mp[n](s, Jo(l) ? l : (c = l) && {}, this), c)
            })
        },
        registerEase: function(e, n) {
            he[e] = Ua(n)
        },
        parseEase: function(e, n) {
            return arguments.length ? Ua(e, n) : he
        },
        getById: function(e) {
            return Ve.getById(e)
        },
        exportRoot: function(e, n) {
            e === void 0 && (e = {});
            var o = new dn(e),
                r, a;
            for (o.smoothChildTiming = bn(e.smoothChildTiming), Ve.remove(o), o._dp = 0, o._time = o._tTime = Ve._time, r = Ve._first; r;) a = r._next, (n || !(!r._dur && r instanceof ft && r.vars.onComplete === r._targets[0])) && Wo(o, r, r._start - r._delay), r = a;
            return Wo(Ve, o, 0), o
        },
        context: function(e, n) {
            return e ? new l_(e, n) : Ie
        },
        matchMedia: function(e) {
            return new ek(e)
        },
        matchMediaRefresh: function() {
            return Va.forEach(function(e) {
                var n = e.conditions,
                    o, r;
                for (r in n) n[r] && (n[r] = !1, o = 1);
                o && e.revert()
            }) || xm()
        },
        addEventListener: function(e, n) {
            var o = gu[e] || (gu[e] = []);
            ~o.indexOf(n) || o.push(n)
        },
        removeEventListener: function(e, n) {
            var o = gu[e],
                r = o && o.indexOf(n);
            r >= 0 && o.splice(r, 1)
        },
        utils: {
            wrap: RP,
            wrapYoyo: OP,
            distribute: $w,
            random: Uw,
            snap: Hw,
            normalize: DP,
            getUnit: Xt,
            clamp: AP,
            splitColor: Qw,
            toArray: uo,
            selector: hm,
            mapRange: Ww,
            pipe: PP,
            unitize: kP,
            interpolate: MP,
            shuffle: zw
        },
        install: Nw,
        effects: Mp,
        ticker: zn,
        updateRoot: dn.updateRoot,
        plugins: Bn,
        globalTimeline: Ve,
        core: {
            PropTween: Tn,
            globals: Pw,
            Tween: ft,
            Timeline: dn,
            Animation: ql,
            getCache: $a,
            _removeLinkedListItem: Vd,
            reverting: function() {
                return Ft
            },
            context: function(e) {
                return e && Ie && (Ie.data.push(e), e._ctx = Ie), Ie
            },
            suppressOverwrites: function(e) {
                return Vh = e
            }
        }
    };
Cn("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
    return sd[t] = ft[t]
});
zn.add(dn.updateRoot);
Pi = sd.to({}, {
    duration: 0
});
var tk = function(e, n) {
        for (var o = e._pt; o && o.p !== n && o.op !== n && o.fp !== n;) o = o._next;
        return o
    },
    nk = function(e, n) {
        var o = e._targets,
            r, a, i;
        for (r in n)
            for (a = o.length; a--;) i = e._ptLookup[a][r], i && (i = i.d) && (i._pt && (i = tk(i, r)), i && i.modifier && i.modifier(n[r], e, o[a], r))
    },
    Ip = function(e, n) {
        return {
            name: e,
            rawVars: 1,
            init: function(r, a, i) {
                i._onInit = function(s) {
                    var l, c;
                    if (Nt(a) && (l = {}, Cn(a, function(u) {
                            return l[u] = 1
                        }), a = l), n) {
                        l = {};
                        for (c in a) l[c] = n(a[c]);
                        a = l
                    }
                    nk(s, a)
                }
            }
        }
    },
    Pn = sd.registerPlugin({
        name: "attr",
        init: function(e, n, o, r, a) {
            var i, s, l;
            this.tween = o;
            for (i in n) l = e.getAttribute(i) || "", s = this.add(e, "setAttribute", (l || 0) + "", n[i], r, a, 0, 0, i), s.op = i, s.b = l, this._props.push(i)
        },
        render: function(e, n) {
            for (var o = n._pt; o;) Ft ? o.set(o.t, o.p, o.b, o) : o.r(e, o.d), o = o._next
        }
    }, {
        name: "endArray",
        init: function(e, n) {
            for (var o = n.length; o--;) this.add(e, o, e[o] || 0, n[o], 0, 0, 0, 0, 0, 1)
        }
    }, Ip("roundProps", vm), Ip("modifiers"), Ip("snap", Hw)) || sd;
ft.version = dn.version = Pn.version = "3.12.7";
Aw = 1;
Yh() && hs();
he.Power0;
he.Power1;
he.Power2;
he.Power3;
he.Power4;
he.Linear;
he.Quad;
he.Cubic;
he.Quart;
he.Quint;
he.Strong;
he.Elastic;
he.Back;
he.SteppedEase;
he.Bounce;
he.Sine;
he.Expo;
he.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Sv, Wr, Hi, o2, Oa, bv, r2, ok = function() {
        return typeof window < "u"
    },
    Cr = {},
    Aa = 180 / Math.PI,
    Ui = Math.PI / 180,
    ui = Math.atan2,
    Cv = 1e8,
    a2 = /([A-Z])/g,
    rk = /(left|right|width|margin|padding|x)/i,
    ak = /[\s,\(]\S/,
    Yo = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    ym = function(e, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
    },
    ik = function(e, n) {
        return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
    },
    sk = function(e, n) {
        return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
    },
    lk = function(e, n) {
        var o = n.s + n.c * e;
        n.set(n.t, n.p, ~~(o + (o < 0 ? -.5 : .5)) + n.u, n)
    },
    c_ = function(e, n) {
        return n.set(n.t, n.p, e ? n.e : n.b, n)
    },
    u_ = function(e, n) {
        return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
    },
    ck = function(e, n, o) {
        return e.style[n] = o
    },
    uk = function(e, n, o) {
        return e.style.setProperty(n, o)
    },
    dk = function(e, n, o) {
        return e._gsap[n] = o
    },
    pk = function(e, n, o) {
        return e._gsap.scaleX = e._gsap.scaleY = o
    },
    fk = function(e, n, o, r, a) {
        var i = e._gsap;
        i.scaleX = i.scaleY = o, i.renderTransform(a, i)
    },
    mk = function(e, n, o, r, a) {
        var i = e._gsap;
        i[n] = o, i.renderTransform(a, i)
    },
    We = "transform",
    En = We + "Origin",
    hk = function t(e, n) {
        var o = this,
            r = this.target,
            a = r.style,
            i = r._gsap;
        if (e in Cr && a) {
            if (this.tfm = this.tfm || {}, e !== "transform") e = Yo[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
                return o.tfm[s] = cr(r, s)
            }) : this.tfm[e] = i.x ? i[e] : cr(r, e), e === En && (this.tfm.zOrigin = i.zOrigin);
            else return Yo.transform.split(",").forEach(function(s) {
                return t.call(o, s, n)
            });
            if (this.props.indexOf(We) >= 0) return;
            i.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(En, n, "")), e = We
        }(a || n) && this.props.push(e, n, a[e])
    },
    d_ = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    vk = function() {
        var e = this.props,
            n = this.target,
            o = n.style,
            r = n._gsap,
            a, i;
        for (a = 0; a < e.length; a += 3) e[a + 1] ? e[a + 1] === 2 ? n[e[a]](e[a + 2]) : n[e[a]] = e[a + 2] : e[a + 2] ? o[e[a]] = e[a + 2] : o.removeProperty(e[a].substr(0, 2) === "--" ? e[a] : e[a].replace(a2, "-$1").toLowerCase());
        if (this.tfm) {
            for (i in this.tfm) r[i] = this.tfm[i];
            r.svg && (r.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), a = r2(), (!a || !a.isStart) && !o[We] && (d_(o), r.zOrigin && o[En] && (o[En] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1)
        }
    },
    p_ = function(e, n) {
        var o = {
            target: e,
            props: [],
            revert: vk,
            save: hk
        };
        return e._gsap || Pn.core.getCache(e), n && e.style && e.nodeType && n.split(",").forEach(function(r) {
            return o.save(r)
        }), o
    },
    f_, wm = function(e, n) {
        var o = Wr.createElementNS ? Wr.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Wr.createElement(e);
        return o && o.style ? o : Wr.createElement(e)
    },
    qo = function t(e, n, o) {
        var r = getComputedStyle(e);
        return r[n] || r.getPropertyValue(n.replace(a2, "-$1").toLowerCase()) || r.getPropertyValue(n) || !o && t(e, vs(n) || n, 1) || ""
    },
    Tv = "O,Moz,ms,Ms,Webkit".split(","),
    vs = function(e, n, o) {
        var r = n || Oa,
            a = r.style,
            i = 5;
        if (e in a && !o) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Tv[i] + e in a););
        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? Tv[i] : "") + e
    },
    _m = function() {
        ok() && window.document && (Sv = window, Wr = Sv.document, Hi = Wr.documentElement, Oa = wm("div") || {
            style: {}
        }, wm("div"), We = vs(We), En = We + "Origin", Oa.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", f_ = !!vs("perspective"), r2 = Pn.core.reverting, o2 = 1)
    },
    Ev = function(e) {
        var n = e.ownerSVGElement,
            o = wm("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = e.cloneNode(!0),
            a;
        r.style.display = "block", o.appendChild(r), Hi.appendChild(o);
        try {
            a = r.getBBox()
        } catch {}
        return o.removeChild(r), Hi.removeChild(o), a
    },
    Av = function(e, n) {
        for (var o = n.length; o--;)
            if (e.hasAttribute(n[o])) return e.getAttribute(n[o])
    },
    m_ = function(e) {
        var n, o;
        try {
            n = e.getBBox()
        } catch {
            n = Ev(e), o = 1
        }
        return n && (n.width || n.height) || o || (n = Ev(e)), n && !n.width && !n.x && !n.y ? {
            x: +Av(e, ["x", "cx", "x1"]) || 0,
            y: +Av(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : n
    },
    h_ = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && m_(e))
    },
    ei = function(e, n) {
        if (n) {
            var o = e.style,
                r;
            n in Cr && n !== En && (n = We), o.removeProperty ? (r = n.substr(0, 2), (r === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), o.removeProperty(r === "--" ? n : n.replace(a2, "-$1").toLowerCase())) : o.removeAttribute(n)
        }
    },
    Yr = function(e, n, o, r, a, i) {
        var s = new Tn(e._pt, n, o, 0, 1, i ? u_ : c_);
        return e._pt = s, s.b = r, s.e = a, e._props.push(o), s
    },
    Nv = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    gk = {
        grid: 1,
        flex: 1
    },
    ma = function t(e, n, o, r) {
        var a = parseFloat(o) || 0,
            i = (o + "").trim().substr((a + "").length) || "px",
            s = Oa.style,
            l = rk.test(n),
            c = e.tagName.toLowerCase() === "svg",
            u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
            p = 100,
            d = r === "px",
            f = r === "%",
            g, m, y, v;
        if (r === i || !a || Nv[r] || Nv[i]) return a;
        if (i !== "px" && !d && (a = t(e, n, o, "px")), v = e.getCTM && h_(e), (f || i === "%") && (Cr[n] || ~n.indexOf("adius"))) return g = v ? e.getBBox()[l ? "width" : "height"] : e[u], lt(f ? a / g * p : a / 100 * g);
        if (s[l ? "width" : "height"] = p + (d ? i : r), m = r !== "rem" && ~n.indexOf("adius") || r === "em" && e.appendChild && !c ? e : e.parentNode, v && (m = (e.ownerSVGElement || {}).parentNode), (!m || m === Wr || !m.appendChild) && (m = Wr.body), y = m._gsap, y && f && y.width && l && y.time === zn.time && !y.uncache) return lt(a / y.width * p);
        if (f && (n === "height" || n === "width")) {
            var h = e.style[n];
            e.style[n] = p + r, g = e[u], h ? e.style[n] = h : ei(e, n)
        } else(f || i === "%") && !gk[qo(m, "display")] && (s.position = qo(e, "position")), m === e && (s.position = "static"), m.appendChild(Oa), g = Oa[u], m.removeChild(Oa), s.position = "absolute";
        return l && f && (y = $a(m), y.time = zn.time, y.width = m[u]), lt(d ? g * a / p : g && a ? p / g * a : 0)
    },
    cr = function(e, n, o, r) {
        var a;
        return o2 || _m(), n in Yo && n !== "transform" && (n = Yo[n], ~n.indexOf(",") && (n = n.split(",")[0])), Cr[n] && n !== "transform" ? (a = Zl(e, r), a = n !== "transformOrigin" ? a[n] : a.svg ? a.origin : cd(qo(e, En)) + " " + a.zOrigin + "px") : (a = e.style[n], (!a || a === "auto" || r || ~(a + "").indexOf("calc(")) && (a = ld[n] && ld[n](e, n, o) || qo(e, n) || Dw(e, n) || (n === "opacity" ? 1 : 0))), o && !~(a + "").trim().indexOf(" ") ? ma(e, n, a, o) + o : a
    },
    xk = function(e, n, o, r) {
        if (!o || o === "none") {
            var a = vs(n, e, 1),
                i = a && qo(e, a, 1);
            i && i !== o ? (n = a, o = i) : n === "borderColor" && (o = qo(e, "borderTopColor"))
        }
        var s = new Tn(this._pt, e.style, n, 0, 1, i_),
            l = 0,
            c = 0,
            u, p, d, f, g, m, y, v, h, x, _, b;
        if (s.b = o, s.e = r, o += "", r += "", r === "auto" && (m = e.style[n], e.style[n] = r, r = qo(e, n) || r, m ? e.style[n] = m : ei(e, n)), u = [o, r], qw(u), o = u[0], r = u[1], d = o.match(Ni) || [], b = r.match(Ni) || [], b.length) {
            for (; p = Ni.exec(r);) y = p[0], h = r.substring(l, p.index), g ? g = (g + 1) % 5 : (h.substr(-5) === "rgba(" || h.substr(-5) === "hsla(") && (g = 1), y !== (m = d[c++] || "") && (f = parseFloat(m) || 0, _ = m.substr((f + "").length), y.charAt(1) === "=" && (y = $i(f, y) + _), v = parseFloat(y), x = y.substr((v + "").length), l = Ni.lastIndex - x.length, x || (x = x || Yn.units[n] || _, l === r.length && (r += x, s.e += x)), _ !== x && (f = ma(e, n, m, x) || 0), s._pt = {
                _next: s._pt,
                p: h || c === 1 ? h : ",",
                s: f,
                c: v - f,
                m: g && g < 4 || n === "zIndex" ? Math.round : 0
            });
            s.c = l < r.length ? r.substring(l, r.length) : ""
        } else s.r = n === "display" && r === "none" ? u_ : c_;
        return Tw.test(r) && (s.e = 0), this._pt = s, s
    },
    Pv = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    yk = function(e) {
        var n = e.split(" "),
            o = n[0],
            r = n[1] || "50%";
        return (o === "top" || o === "bottom" || r === "left" || r === "right") && (e = o, o = r, r = e), n[0] = Pv[o] || o, n[1] = Pv[r] || r, n.join(" ")
    },
    wk = function(e, n) {
        if (n.tween && n.tween._time === n.tween._dur) {
            var o = n.t,
                r = o.style,
                a = n.u,
                i = o._gsap,
                s, l, c;
            if (a === "all" || a === !0) r.cssText = "", l = 1;
            else
                for (a = a.split(","), c = a.length; --c > -1;) s = a[c], Cr[s] && (l = 1, s = s === "transformOrigin" ? En : We), ei(o, s);
            l && (ei(o, We), i && (i.svg && o.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", Zl(o, 1), i.uncache = 1, d_(r)))
        }
    },
    ld = {
        clearProps: function(e, n, o, r, a) {
            if (a.data !== "isFromStart") {
                var i = e._pt = new Tn(e._pt, n, o, 0, 0, wk);
                return i.u = r, i.pr = -10, i.tween = a, e._props.push(o), 1
            }
        }
    },
    Kl = [1, 0, 0, 1, 0, 0],
    v_ = {},
    g_ = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    kv = function(e) {
        var n = qo(e, We);
        return g_(n) ? Kl : n.substr(7).match(Cw).map(lt)
    },
    i2 = function(e, n) {
        var o = e._gsap || $a(e),
            r = e.style,
            a = kv(e),
            i, s, l, c;
        return o.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, a = [l.a, l.b, l.c, l.d, l.e, l.f], a.join(",") === "1,0,0,1,0,0" ? Kl : a) : (a === Kl && !e.offsetParent && e !== Hi && !o.svg && (l = r.display, r.display = "block", i = e.parentNode, (!i || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, s = e.nextElementSibling, Hi.appendChild(e)), a = kv(e), l ? r.display = l : ei(e, "display"), c && (s ? i.insertBefore(e, s) : i ? i.appendChild(e) : Hi.removeChild(e))), n && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
    },
    Sm = function(e, n, o, r, a, i) {
        var s = e._gsap,
            l = a || i2(e, !0),
            c = s.xOrigin || 0,
            u = s.yOrigin || 0,
            p = s.xOffset || 0,
            d = s.yOffset || 0,
            f = l[0],
            g = l[1],
            m = l[2],
            y = l[3],
            v = l[4],
            h = l[5],
            x = n.split(" "),
            _ = parseFloat(x[0]) || 0,
            b = parseFloat(x[1]) || 0,
            E, C, A, P;
        o ? l !== Kl && (C = f * y - g * m) && (A = _ * (y / C) + b * (-m / C) + (m * h - y * v) / C, P = _ * (-g / C) + b * (f / C) - (f * h - g * v) / C, _ = A, b = P) : (E = m_(e), _ = E.x + (~x[0].indexOf("%") ? _ / 100 * E.width : _), b = E.y + (~(x[1] || x[0]).indexOf("%") ? b / 100 * E.height : b)), r || r !== !1 && s.smooth ? (v = _ - c, h = b - u, s.xOffset = p + (v * f + h * m) - v, s.yOffset = d + (v * g + h * y) - h) : s.xOffset = s.yOffset = 0, s.xOrigin = _, s.yOrigin = b, s.smooth = !!r, s.origin = n, s.originIsAbsolute = !!o, e.style[En] = "0px 0px", i && (Yr(i, s, "xOrigin", c, _), Yr(i, s, "yOrigin", u, b), Yr(i, s, "xOffset", p, s.xOffset), Yr(i, s, "yOffset", d, s.yOffset)), e.setAttribute("data-svg-origin", _ + " " + b)
    },
    Zl = function(e, n) {
        var o = e._gsap || new e_(e);
        if ("x" in o && !n && !o.uncache) return o;
        var r = e.style,
            a = o.scaleX < 0,
            i = "px",
            s = "deg",
            l = getComputedStyle(e),
            c = qo(e, En) || "0",
            u, p, d, f, g, m, y, v, h, x, _, b, E, C, A, P, k, L, R, H, M, V, z, $, N, j, T, I, W, J, ee, ye;
        return u = p = d = m = y = v = h = x = _ = 0, f = g = 1, o.svg = !!(e.getCTM && h_(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[We] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[We] !== "none" ? l[We] : "")), r.scale = r.rotate = r.translate = "none"), C = i2(e, o.svg), o.svg && (o.uncache ? (N = e.getBBox(), c = o.xOrigin - N.x + "px " + (o.yOrigin - N.y) + "px", $ = "") : $ = !n && e.getAttribute("data-svg-origin"), Sm(e, $ || c, !!$ || o.originIsAbsolute, o.smooth !== !1, C)), b = o.xOrigin || 0, E = o.yOrigin || 0, C !== Kl && (L = C[0], R = C[1], H = C[2], M = C[3], u = V = C[4], p = z = C[5], C.length === 6 ? (f = Math.sqrt(L * L + R * R), g = Math.sqrt(M * M + H * H), m = L || R ? ui(R, L) * Aa : 0, h = H || M ? ui(H, M) * Aa + m : 0, h && (g *= Math.abs(Math.cos(h * Ui))), o.svg && (u -= b - (b * L + E * H), p -= E - (b * R + E * M))) : (ye = C[6], J = C[7], T = C[8], I = C[9], W = C[10], ee = C[11], u = C[12], p = C[13], d = C[14], A = ui(ye, W), y = A * Aa, A && (P = Math.cos(-A), k = Math.sin(-A), $ = V * P + T * k, N = z * P + I * k, j = ye * P + W * k, T = V * -k + T * P, I = z * -k + I * P, W = ye * -k + W * P, ee = J * -k + ee * P, V = $, z = N, ye = j), A = ui(-H, W), v = A * Aa, A && (P = Math.cos(-A), k = Math.sin(-A), $ = L * P - T * k, N = R * P - I * k, j = H * P - W * k, ee = M * k + ee * P, L = $, R = N, H = j), A = ui(R, L), m = A * Aa, A && (P = Math.cos(A), k = Math.sin(A), $ = L * P + R * k, N = V * P + z * k, R = R * P - L * k, z = z * P - V * k, L = $, V = N), y && Math.abs(y) + Math.abs(m) > 359.9 && (y = m = 0, v = 180 - v), f = lt(Math.sqrt(L * L + R * R + H * H)), g = lt(Math.sqrt(z * z + ye * ye)), A = ui(V, z), h = Math.abs(A) > 2e-4 ? A * Aa : 0, _ = ee ? 1 / (ee < 0 ? -ee : ee) : 0), o.svg && ($ = e.getAttribute("transform"), o.forceCSS = e.setAttribute("transform", "") || !g_(qo(e, We)), $ && e.setAttribute("transform", $))), Math.abs(h) > 90 && Math.abs(h) < 270 && (a ? (f *= -1, h += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (g *= -1, h += h <= 0 ? 180 : -180)), n = n || o.uncache, o.x = u - ((o.xPercent = u && (!n && o.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * o.xPercent / 100 : 0) + i, o.y = p - ((o.yPercent = p && (!n && o.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? e.offsetHeight * o.yPercent / 100 : 0) + i, o.z = d + i, o.scaleX = lt(f), o.scaleY = lt(g), o.rotation = lt(m) + s, o.rotationX = lt(y) + s, o.rotationY = lt(v) + s, o.skewX = h + s, o.skewY = x + s, o.transformPerspective = _ + i, (o.zOrigin = parseFloat(c.split(" ")[2]) || !n && o.zOrigin || 0) && (r[En] = cd(c)), o.xOffset = o.yOffset = 0, o.force3D = Yn.force3D, o.renderTransform = o.svg ? Sk : f_ ? x_ : _k, o.uncache = 0, o
    },
    cd = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    zp = function(e, n, o) {
        var r = Xt(n);
        return lt(parseFloat(n) + parseFloat(ma(e, "x", o + "px", r))) + r
    },
    _k = function(e, n) {
        n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, x_(e, n)
    },
    ba = "0deg",
    Hs = "0px",
    Ca = ") ",
    x_ = function(e, n) {
        var o = n || this,
            r = o.xPercent,
            a = o.yPercent,
            i = o.x,
            s = o.y,
            l = o.z,
            c = o.rotation,
            u = o.rotationY,
            p = o.rotationX,
            d = o.skewX,
            f = o.skewY,
            g = o.scaleX,
            m = o.scaleY,
            y = o.transformPerspective,
            v = o.force3D,
            h = o.target,
            x = o.zOrigin,
            _ = "",
            b = v === "auto" && e && e !== 1 || v === !0;
        if (x && (p !== ba || u !== ba)) {
            var E = parseFloat(u) * Ui,
                C = Math.sin(E),
                A = Math.cos(E),
                P;
            E = parseFloat(p) * Ui, P = Math.cos(E), i = zp(h, i, C * P * -x), s = zp(h, s, -Math.sin(E) * -x), l = zp(h, l, A * P * -x + x)
        }
        y !== Hs && (_ += "perspective(" + y + Ca), (r || a) && (_ += "translate(" + r + "%, " + a + "%) "), (b || i !== Hs || s !== Hs || l !== Hs) && (_ += l !== Hs || b ? "translate3d(" + i + ", " + s + ", " + l + ") " : "translate(" + i + ", " + s + Ca), c !== ba && (_ += "rotate(" + c + Ca), u !== ba && (_ += "rotateY(" + u + Ca), p !== ba && (_ += "rotateX(" + p + Ca), (d !== ba || f !== ba) && (_ += "skew(" + d + ", " + f + Ca), (g !== 1 || m !== 1) && (_ += "scale(" + g + ", " + m + Ca), h.style[We] = _ || "translate(0, 0)"
    },
    Sk = function(e, n) {
        var o = n || this,
            r = o.xPercent,
            a = o.yPercent,
            i = o.x,
            s = o.y,
            l = o.rotation,
            c = o.skewX,
            u = o.skewY,
            p = o.scaleX,
            d = o.scaleY,
            f = o.target,
            g = o.xOrigin,
            m = o.yOrigin,
            y = o.xOffset,
            v = o.yOffset,
            h = o.forceCSS,
            x = parseFloat(i),
            _ = parseFloat(s),
            b, E, C, A, P;
        l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= Ui, c *= Ui, b = Math.cos(l) * p, E = Math.sin(l) * p, C = Math.sin(l - c) * -d, A = Math.cos(l - c) * d, c && (u *= Ui, P = Math.tan(c - u), P = Math.sqrt(1 + P * P), C *= P, A *= P, u && (P = Math.tan(u), P = Math.sqrt(1 + P * P), b *= P, E *= P)), b = lt(b), E = lt(E), C = lt(C), A = lt(A)) : (b = p, A = d, E = C = 0), (x && !~(i + "").indexOf("px") || _ && !~(s + "").indexOf("px")) && (x = ma(f, "x", i, "px"), _ = ma(f, "y", s, "px")), (g || m || y || v) && (x = lt(x + g - (g * b + m * C) + y), _ = lt(_ + m - (g * E + m * A) + v)), (r || a) && (P = f.getBBox(), x = lt(x + r / 100 * P.width), _ = lt(_ + a / 100 * P.height)), P = "matrix(" + b + "," + E + "," + C + "," + A + "," + x + "," + _ + ")", f.setAttribute("transform", P), h && (f.style[We] = P)
    },
    bk = function(e, n, o, r, a) {
        var i = 360,
            s = Nt(a),
            l = parseFloat(a) * (s && ~a.indexOf("rad") ? Aa : 1),
            c = l - r,
            u = r + c + "deg",
            p, d;
        return s && (p = a.split("_")[1], p === "short" && (c %= i, c !== c % (i / 2) && (c += c < 0 ? i : -i)), p === "cw" && c < 0 ? c = (c + i * Cv) % i - ~~(c / i) * i : p === "ccw" && c > 0 && (c = (c - i * Cv) % i - ~~(c / i) * i)), e._pt = d = new Tn(e._pt, n, o, r, c, ik), d.e = u, d.u = "deg", e._props.push(o), d
    },
    Dv = function(e, n) {
        for (var o in n) e[o] = n[o];
        return e
    },
    Ck = function(e, n, o) {
        var r = Dv({}, o._gsap),
            a = "perspective,force3D,transformOrigin,svgOrigin",
            i = o.style,
            s, l, c, u, p, d, f, g;
        r.svg ? (c = o.getAttribute("transform"), o.setAttribute("transform", ""), i[We] = n, s = Zl(o, 1), ei(o, We), o.setAttribute("transform", c)) : (c = getComputedStyle(o)[We], i[We] = n, s = Zl(o, 1), i[We] = c);
        for (l in Cr) c = r[l], u = s[l], c !== u && a.indexOf(l) < 0 && (f = Xt(c), g = Xt(u), p = f !== g ? ma(o, l, c, g) : parseFloat(c), d = parseFloat(u), e._pt = new Tn(e._pt, s, l, p, d - p, ym), e._pt.u = g || 0, e._props.push(l));
        Dv(s, r)
    };
Cn("padding,margin,Width,Radius", function(t, e) {
    var n = "Top",
        o = "Right",
        r = "Bottom",
        a = "Left",
        i = (e < 3 ? [n, o, r, a] : [n + a, n + o, r + o, r + a]).map(function(s) {
            return e < 2 ? t + s : "border" + s + t
        });
    ld[e > 1 ? "border" + t : t] = function(s, l, c, u, p) {
        var d, f;
        if (arguments.length < 4) return d = i.map(function(g) {
            return cr(s, g, c)
        }), f = d.join(" "), f.split(d[0]).length === 5 ? d[0] : f;
        d = (u + "").split(" "), f = {}, i.forEach(function(g, m) {
            return f[g] = d[m] = d[m] || d[(m - 1) / 2 | 0]
        }), s.init(l, f, p)
    }
});
var y_ = {
    name: "css",
    register: _m,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, n, o, r, a) {
        var i = this._props,
            s = e.style,
            l = o.vars.startAt,
            c, u, p, d, f, g, m, y, v, h, x, _, b, E, C, A;
        o2 || _m(), this.styles = this.styles || p_(e), A = this.styles.props, this.tween = o;
        for (m in n)
            if (m !== "autoRound" && (u = n[m], !(Bn[m] && t_(m, n, o, r, e, a)))) {
                if (f = typeof u, g = ld[m], f === "function" && (u = u.call(o, r, e, a), f = typeof u), f === "string" && ~u.indexOf("random(") && (u = Ql(u)), g) g(this, e, m, u, o) && (C = 1);
                else if (m.substr(0, 2) === "--") c = (getComputedStyle(e).getPropertyValue(m) + "").trim(), u += "", ra.lastIndex = 0, ra.test(c) || (y = Xt(c), v = Xt(u)), v ? y !== v && (c = ma(e, m, c, v) + v) : y && (u += y), this.add(s, "setProperty", c, u, r, a, 0, 0, m), i.push(m), A.push(m, 0, s[m]);
                else if (f !== "undefined") {
                    if (l && m in l ? (c = typeof l[m] == "function" ? l[m].call(o, r, e, a) : l[m], Nt(c) && ~c.indexOf("random(") && (c = Ql(c)), Xt(c + "") || c === "auto" || (c += Yn.units[m] || Xt(cr(e, m)) || ""), (c + "").charAt(1) === "=" && (c = cr(e, m))) : c = cr(e, m), d = parseFloat(c), h = f === "string" && u.charAt(1) === "=" && u.substr(0, 2), h && (u = u.substr(2)), p = parseFloat(u), m in Yo && (m === "autoAlpha" && (d === 1 && cr(e, "visibility") === "hidden" && p && (d = 0), A.push("visibility", 0, s.visibility), Yr(this, s, "visibility", d ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), m !== "scale" && m !== "transform" && (m = Yo[m], ~m.indexOf(",") && (m = m.split(",")[0]))), x = m in Cr, x) {
                        if (this.styles.save(m), _ || (b = e._gsap, b.renderTransform && !n.parseTransform || Zl(e, n.parseTransform), E = n.smoothOrigin !== !1 && b.smooth, _ = this._pt = new Tn(this._pt, s, We, 0, 1, b.renderTransform, b, 0, -1), _.dep = 1), m === "scale") this._pt = new Tn(this._pt, b, "scaleY", b.scaleY, (h ? $i(b.scaleY, h + p) : p) - b.scaleY || 0, ym), this._pt.u = 0, i.push("scaleY", m), m += "X";
                        else if (m === "transformOrigin") {
                            A.push(En, 0, s[En]), u = yk(u), b.svg ? Sm(e, u, 0, E, 0, this) : (v = parseFloat(u.split(" ")[2]) || 0, v !== b.zOrigin && Yr(this, b, "zOrigin", b.zOrigin, v), Yr(this, s, m, cd(c), cd(u)));
                            continue
                        } else if (m === "svgOrigin") {
                            Sm(e, u, 1, E, 0, this);
                            continue
                        } else if (m in v_) {
                            bk(this, b, m, d, h ? $i(d, h + u) : u);
                            continue
                        } else if (m === "smoothOrigin") {
                            Yr(this, b, "smooth", b.smooth, u);
                            continue
                        } else if (m === "force3D") {
                            b[m] = u;
                            continue
                        } else if (m === "transform") {
                            Ck(this, u, e);
                            continue
                        }
                    } else m in s || (m = vs(m) || m);
                    if (x || (p || p === 0) && (d || d === 0) && !ak.test(u) && m in s) y = (c + "").substr((d + "").length), p || (p = 0), v = Xt(u) || (m in Yn.units ? Yn.units[m] : y), y !== v && (d = ma(e, m, c, v)), this._pt = new Tn(this._pt, x ? b : s, m, d, (h ? $i(d, h + p) : p) - d, !x && (v === "px" || m === "zIndex") && n.autoRound !== !1 ? lk : ym), this._pt.u = v || 0, y !== v && v !== "%" && (this._pt.b = c, this._pt.r = sk);
                    else if (m in s) xk.call(this, e, m, c, h ? h + u : u);
                    else if (m in e) this.add(e, m, c || e[m], h ? h + u : u, r, a);
                    else if (m !== "parseTransform") {
                        Qh(m, u);
                        continue
                    }
                    x || (m in s ? A.push(m, 0, s[m]) : typeof e[m] == "function" ? A.push(m, 2, e[m]()) : A.push(m, 1, c || e[m])), i.push(m)
                }
            }
        C && s_(this)
    },
    render: function(e, n) {
        if (n.tween._time || !r2())
            for (var o = n._pt; o;) o.r(e, o.d), o = o._next;
        else n.styles.revert()
    },
    get: cr,
    aliases: Yo,
    getSetter: function(e, n, o) {
        var r = Yo[n];
        return r && r.indexOf(",") < 0 && (n = r), n in Cr && n !== En && (e._gsap.x || cr(e, "x")) ? o && bv === o ? n === "scale" ? pk : dk : (bv = o || {}) && (n === "scale" ? fk : mk) : e.style && !Wh(e.style[n]) ? ck : ~n.indexOf("-") ? uk : t2(e, n)
    },
    core: {
        _removeProperty: ei,
        _getMatrix: i2
    }
};
Pn.utils.checkPrefix = vs;
Pn.core.getStyleSaver = p_;
(function(t, e, n, o) {
    var r = Cn(t + "," + e + "," + n, function(a) {
        Cr[a] = 1
    });
    Cn(e, function(a) {
        Yn.units[a] = "deg", v_[a] = 1
    }), Yo[r[13]] = t + "," + e, Cn(o, function(a) {
        var i = a.split(":");
        Yo[i[1]] = r[i[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
    Yn.units[t] = "px"
});
Pn.registerPlugin(y_);
var ot = Pn.registerPlugin(y_) || Pn;
ot.core.Tween;

function Tk() {
    const t = S.useRef(null);
    return S.useEffect(() => {
        t.current && (ot.fromTo(t.current, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)"
        }), ot.to(t.current, {
            y: "+=15",
            duration: 2,
            repeat: -1,
            yoyo: !0,
            ease: "sine.inOut"
        }))
    }, []), w.jsxs("div", {
        "data-lov-id": "src/components/AvatarModel.tsx:38:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/AvatarModel.tsx",
        "data-component-line": "38",
        "data-component-file": "AvatarModel.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22relative%20w-full%20h-full%20flex%20items-center%20justify-center%22%7D",
        ref: t,
        className: "relative w-full h-full flex items-center justify-center",
        children: [w.jsx("div", {
            "data-lov-id": "src/components/AvatarModel.tsx:42:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/AvatarModel.tsx",
            "data-component-line": "42",
            "data-component-file": "AvatarModel.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22w-64%20h-64%20md%3Aw-80%20md%3Ah-80%20rounded-full%20overflow-hidden%20border-4%20border-primary%2F30%20shadow-lg%20shadow-primary%2F20%22%7D",
            className: "w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20",
            children: w.jsx("img", {
                "data-lov-id": "src/components/AvatarModel.tsx:43:8",
                "data-lov-name": "img",
                "data-component-path": "src/components/AvatarModel.tsx",
                "data-component-line": "43",
                "data-component-file": "AvatarModel.tsx",
                "data-component-name": "img",
                "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%22%7D",
                src: "/lovable-uploads/2d0c05a9-45f6-4045-9c19-7a64503ce70d.png",
                alt: "Gedion Zewdu",
                className: "w-full h-full object-cover"
            })
        }), w.jsx("div", {
            "data-lov-id": "src/components/AvatarModel.tsx:51:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/AvatarModel.tsx",
            "data-component-line": "51",
            "data-component-file": "AvatarModel.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-r%20from-primary%2F20%20to-accent%2F20%20rounded-full%20blur-xl%20-z-10%22%7D",
            className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl -z-10"
        })]
    })
}

function Ek() {
    return w.jsx("div", {
        "data-lov-id": "src/components/AvatarModel.tsx:59:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/AvatarModel.tsx",
        "data-component-line": "59",
        "data-component-file": "AvatarModel.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20justify-center%20h-full%20w-full%20bg-gradient-to-br%20from-purple-600%20to-indigo-700%20rounded-full%22%7D",
        className: "flex items-center justify-center h-full w-full bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full",
        children: w.jsx("div", {
            "data-lov-id": "src/components/AvatarModel.tsx:60:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/AvatarModel.tsx",
            "data-component-line": "60",
            "data-component-file": "AvatarModel.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22text%22%3A%22GZ%22%2C%22className%22%3A%22text-white%20text-4xl%20font-bold%22%7D",
            className: "text-white text-4xl font-bold",
            children: "GZ"
        })
    })
}

function Ak({
    children: t,
    onError: e
}) {
    try {
        return w.jsx(w.Fragment, {
            children: t
        })
    } catch (n) {
        return n instanceof Error && e(n), null
    }
}

function Nk() {
    const [t, e] = S.useState(!1), [n, o] = S.useState(!1);
    return S.useEffect(() => {
        const r = new Image;
        r.src = "/lovable-uploads/2d0c05a9-45f6-4045-9c19-7a64503ce70d.png", r.onload = () => o(!0), r.onerror = () => e(!0)
    }, []), t ? w.jsx("div", {
        "data-lov-id": "src/components/AvatarModel.tsx:94:6",
        "data-lov-name": "div",
        "data-component-path": "src/components/AvatarModel.tsx",
        "data-component-line": "94",
        "data-component-file": "AvatarModel.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22h-%5B400px%5D%20md%3Ah-%5B600px%5D%20w-full%20flex%20items-center%20justify-center%22%7D",
        className: "h-[400px] md:h-[600px] w-full flex items-center justify-center",
        children: w.jsx(Ek, {
            "data-lov-id": "src/components/AvatarModel.tsx:95:8",
            "data-lov-name": "FallbackAvatar",
            "data-component-path": "src/components/AvatarModel.tsx",
            "data-component-line": "95",
            "data-component-file": "AvatarModel.tsx",
            "data-component-name": "FallbackAvatar",
            "data-component-content": "%7B%7D"
        })
    }) : w.jsx("div", {
        "data-lov-id": "src/components/AvatarModel.tsx:101:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/AvatarModel.tsx",
        "data-component-line": "101",
        "data-component-file": "AvatarModel.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22h-%5B400px%5D%20md%3Ah-%5B600px%5D%20w-full%20flex%20items-center%20justify-center%22%7D",
        className: "h-[400px] md:h-[600px] w-full flex items-center justify-center",
        children: w.jsx(Ak, {
            "data-lov-id": "src/components/AvatarModel.tsx:102:6",
            "data-lov-name": "ErrorBoundary",
            "data-component-path": "src/components/AvatarModel.tsx",
            "data-component-line": "102",
            "data-component-file": "AvatarModel.tsx",
            "data-component-name": "ErrorBoundary",
            "data-component-content": "%7B%7D",
            onError: () => e(!0),
            children: !t && w.jsx(Tk, {
                "data-lov-id": "src/components/AvatarModel.tsx:103:22",
                "data-lov-name": "ProfileImage",
                "data-component-path": "src/components/AvatarModel.tsx",
                "data-component-line": "103",
                "data-component-file": "AvatarModel.tsx",
                "data-component-name": "ProfileImage",
                "data-component-content": "%7B%7D"
            })
        })
    })
}
const Pk = () => {
    const t = S.useRef(null),
        e = S.useRef(null),
        n = S.useRef(null),
        o = S.useRef(null);
    return S.useEffect(() => {
        const r = t.current,
            a = e.current,
            i = n.current,
            s = o.current;
        if (!r || !a || !i || !s) return;
        ot.timeline({
            defaults: {
                ease: "power3.out"
            }
        }).fromTo(a, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        }).fromTo(i, {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1
        }, "-=0.7").fromTo(s, {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: .8
        }, "-=0.5")
    }, []), w.jsxs("section", {
        "data-lov-id": "src/components/HeroSection.tsx:44:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/HeroSection.tsx",
        "data-component-line": "44",
        "data-component-file": "HeroSection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22relative%20min-h-screen%20overflow-hidden%20pt-20%20flex%20flex-col%20justify-center%22%7D",
        ref: t,
        id: "home",
        className: "relative min-h-screen overflow-hidden pt-20 flex flex-col justify-center",
        children: [w.jsx("div", {
            "data-lov-id": "src/components/HeroSection.tsx:50:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/HeroSection.tsx",
            "data-component-line": "50",
            "data-component-file": "HeroSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20top-1%2F2%20left-1%2F2%20-translate-x-1%2F2%20-translate-y-1%2F2%20w-3%2F4%20h-3%2F4%20bg-gradient-to-br%20from-primary%2F20%20via-accent%2F20%20to-indigo-500%2F20%20rounded-full%20blur-3xl%20opacity-50%22%7D",
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-primary/20 via-accent/20 to-indigo-500/20 rounded-full blur-3xl opacity-50"
        }), w.jsxs("div", {
            "data-lov-id": "src/components/HeroSection.tsx:52:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/HeroSection.tsx",
            "data-component-line": "52",
            "data-component-file": "HeroSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20grid%20md%3Agrid-cols-2%20gap-12%20relative%20z-10%22%7D",
            className: "container mx-auto px-4 grid md:grid-cols-2 gap-12 relative z-10",
            children: [w.jsxs("div", {
                "data-lov-id": "src/components/HeroSection.tsx:53:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/HeroSection.tsx",
                "data-component-line": "53",
                "data-component-file": "HeroSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20justify-center%20order-2%20md%3Aorder-1%22%7D",
                className: "flex flex-col justify-center order-2 md:order-1",
                children: [w.jsxs("h1", {
                    "data-lov-id": "src/components/HeroSection.tsx:54:10",
                    "data-lov-name": "h1",
                    "data-component-path": "src/components/HeroSection.tsx",
                    "data-component-line": "54",
                    "data-component-file": "HeroSection.tsx",
                    "data-component-name": "h1",
                    "data-component-content": "%7B%22text%22%3A%22Hi%2C%20I'm%20Full%20Stack%20Developer%22%2C%22className%22%3A%22text-4xl%20md%3Atext-5xl%20lg%3Atext-6xl%20font-bold%20mb-6%22%7D",
                    ref: e,
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
                    children: ["Hi, I'm ", w.jsx("span", {
                        "data-lov-id": "src/components/HeroSection.tsx:58:20",
                        "data-lov-name": "span",
                        "data-component-path": "src/components/HeroSection.tsx",
                        "data-component-line": "58",
                        "data-component-file": "HeroSection.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%22text%22%3A%22Gedion%20Zewdu%22%2C%22className%22%3A%22text-gradient%22%7D",
                        className: "text-gradient",
                        children: "Gedion Zewdu"
                    }), w.jsx("br", {
                        "data-lov-id": "src/components/HeroSection.tsx:59:12",
                        "data-lov-name": "br",
                        "data-component-path": "src/components/HeroSection.tsx",
                        "data-component-line": "59",
                        "data-component-file": "HeroSection.tsx",
                        "data-component-name": "br",
                        "data-component-content": "%7B%7D"
                    }), "Full Stack Developer"]
                }), w.jsx("p", {
                    "data-lov-id": "src/components/HeroSection.tsx:62:10",
                    "data-lov-name": "p",
                    "data-component-path": "src/components/HeroSection.tsx",
                    "data-component-line": "62",
                    "data-component-file": "HeroSection.tsx",
                    "data-component-name": "p",
                    "data-component-content": "%7B%22text%22%3A%22Building%20elegant%2C%20high-performance%20solutions%20with%20modern%20technologies.%5Cn%20%20%20%20%20%20%20%20%20%20%20%20I%20specialize%20in%20creating%20scalable%20applications%20with%20Java%2C%20Spring%20Framework%2C%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20and%20comprehensive%20frontend%20solutions.%22%2C%22className%22%3A%22text-lg%20md%3Atext-xl%20text-muted-foreground%20mb-8%22%7D",
                    ref: n,
                    className: "text-lg md:text-xl text-muted-foreground mb-8",
                    children: "Building elegant, high-performance solutions with modern technologies. I specialize in creating scalable applications with Java, Spring Framework, and comprehensive frontend solutions."
                }), w.jsxs("div", {
                    "data-lov-id": "src/components/HeroSection.tsx:70:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/HeroSection.tsx",
                    "data-component-line": "70",
                    "data-component-file": "HeroSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20gap-4%22%7D",
                    ref: o,
                    className: "flex flex-wrap gap-4",
                    children: [w.jsx(so, {
                        "data-lov-id": "src/components/HeroSection.tsx:71:12",
                        "data-lov-name": "Button",
                        "data-component-path": "src/components/HeroSection.tsx",
                        "data-component-line": "71",
                        "data-component-file": "HeroSection.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-r%20from-primary%20to-accent%20text-white%20hover%3Ashadow-lg%20hover%3Ashadow-primary%2F25%20transition-all%22%7D",
                        asChild: !0,
                        size: "lg",
                        className: "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 transition-all",
                        children: w.jsx("a", {
                            "data-lov-id": "src/components/HeroSection.tsx:76:14",
                            "data-lov-name": "a",
                            "data-component-path": "src/components/HeroSection.tsx",
                            "data-component-line": "76",
                            "data-component-file": "HeroSection.tsx",
                            "data-component-name": "a",
                            "data-component-content": "%7B%22text%22%3A%22Hire%20Me%22%7D",
                            href: "#contact",
                            children: "Hire Me"
                        })
                    }), w.jsx(so, {
                        "data-lov-id": "src/components/HeroSection.tsx:78:12",
                        "data-lov-name": "Button",
                        "data-component-path": "src/components/HeroSection.tsx",
                        "data-component-line": "78",
                        "data-component-file": "HeroSection.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%22className%22%3A%22border-primary%20text-primary%20hover%3Atext-primary-foreground%20hover%3Abg-primary%20group%22%7D",
                        asChild: !0,
                        variant: "outline",
                        size: "lg",
                        className: "border-primary text-primary hover:text-primary-foreground hover:bg-primary group",
                        children: w.jsxs("a", {
                            "data-lov-id": "src/components/HeroSection.tsx:84:14",
                            "data-lov-name": "a",
                            "data-component-path": "src/components/HeroSection.tsx",
                            "data-component-line": "84",
                            "data-component-file": "HeroSection.tsx",
                            "data-component-name": "a",
                            "data-component-content": "%7B%22text%22%3A%22View%20Projects%22%7D",
                            href: "#projects",
                            children: ["View Projects", " ", w.jsx(o1, {
                                "data-lov-id": "src/components/HeroSection.tsx:86:16",
                                "data-lov-name": "ArrowRight",
                                "data-component-path": "src/components/HeroSection.tsx",
                                "data-component-line": "86",
                                "data-component-file": "HeroSection.tsx",
                                "data-component-name": "ArrowRight",
                                "data-component-content": "%7B%22className%22%3A%22ml-2%20h-4%20w-4%20transition-transform%20group-hover%3Atranslate-x-1%22%7D",
                                className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            })]
                        })
                    })]
                })]
            }), w.jsx("div", {
                "data-lov-id": "src/components/HeroSection.tsx:91:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/HeroSection.tsx",
                "data-component-line": "91",
                "data-component-file": "HeroSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20justify-center%20order-1%20md%3Aorder-2%22%7D",
                className: "flex items-center justify-center order-1 md:order-2",
                children: w.jsx("div", {
                    "data-lov-id": "src/components/HeroSection.tsx:92:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/HeroSection.tsx",
                    "data-component-line": "92",
                    "data-component-file": "HeroSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22relative%20w-full%20max-w-md%22%7D",
                    className: "relative w-full max-w-md",
                    children: w.jsx(Nk, {
                        "data-lov-id": "src/components/HeroSection.tsx:93:12",
                        "data-lov-name": "AvatarModel",
                        "data-component-path": "src/components/HeroSection.tsx",
                        "data-component-line": "93",
                        "data-component-file": "HeroSection.tsx",
                        "data-component-name": "AvatarModel",
                        "data-component-content": "%7B%7D"
                    })
                })
            })]
        }), w.jsxs("div", {
            "data-lov-id": "src/components/HeroSection.tsx:99:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/HeroSection.tsx",
            "data-component-line": "99",
            "data-component-file": "HeroSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-8%20left-1%2F2%20-translate-x-1%2F2%20hidden%20md%3Aflex%20flex-col%20items-center%22%7D",
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center",
            children: [w.jsx("span", {
                "data-lov-id": "src/components/HeroSection.tsx:100:8",
                "data-lov-name": "span",
                "data-component-path": "src/components/HeroSection.tsx",
                "data-component-line": "100",
                "data-component-file": "HeroSection.tsx",
                "data-component-name": "span",
                "data-component-content": "%7B%22text%22%3A%22Scroll%20Down%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%20mb-2%22%7D",
                className: "text-sm text-muted-foreground mb-2",
                children: "Scroll Down"
            }), w.jsx("div", {
                "data-lov-id": "src/components/HeroSection.tsx:101:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/HeroSection.tsx",
                "data-component-line": "101",
                "data-component-file": "HeroSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22w-6%20h-10%20border-2%20border-muted-foreground%2F50%20rounded-full%20flex%20justify-center%20p-1%22%7D",
                className: "w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center p-1",
                children: w.jsx("div", {
                    "data-lov-id": "src/components/HeroSection.tsx:102:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/HeroSection.tsx",
                    "data-component-line": "102",
                    "data-component-file": "HeroSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22w-1.5%20h-1.5%20bg-muted-foreground%20rounded-full%20animate-bounce%22%7D",
                    className: "w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"
                })
            })]
        })]
    })
};

function kk(t, e) {
    for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
    }
}

function Dk(t, e, n) {
    return e && kk(t.prototype, e), t
}
/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Mt, xu, $n, Gr, Qr, Vi, w_, Na, hl, __, fr, _o, S_, b_ = function() {
        return Mt || typeof window < "u" && (Mt = window.gsap) && Mt.registerPlugin && Mt
    },
    C_ = 1,
    ki = [],
    de = [],
    Ko = [],
    vl = Date.now,
    bm = function(e, n) {
        return n
    },
    Rk = function() {
        var e = hl.core,
            n = e.bridge || {},
            o = e._scrollers,
            r = e._proxies;
        o.push.apply(o, de), r.push.apply(r, Ko), de = o, Ko = r, bm = function(i, s) {
            return n[i](s)
        }
    },
    aa = function(e, n) {
        return ~Ko.indexOf(e) && Ko[Ko.indexOf(e) + 1][n]
    },
    gl = function(e) {
        return !!~__.indexOf(e)
    },
    on = function(e, n, o, r, a) {
        return e.addEventListener(n, o, {
            passive: r !== !1,
            capture: !!a
        })
    },
    nn = function(e, n, o, r) {
        return e.removeEventListener(n, o, !!r)
    },
    Ic = "scrollLeft",
    zc = "scrollTop",
    Cm = function() {
        return fr && fr.isPressed || de.cache++
    },
    ud = function(e, n) {
        var o = function r(a) {
            if (a || a === 0) {
                C_ && ($n.history.scrollRestoration = "manual");
                var i = fr && fr.isPressed;
                a = r.v = Math.round(a) || (fr && fr.iOS ? 1 : 0), e(a), r.cacheID = de.cache, i && bm("ss", a)
            } else(n || de.cache !== r.cacheID || bm("ref")) && (r.cacheID = de.cache, r.v = e());
            return r.v + r.offset
        };
        return o.offset = 0, e && o
    },
    pn = {
        s: Ic,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: ud(function(t) {
            return arguments.length ? $n.scrollTo(t, _t.sc()) : $n.pageXOffset || Gr[Ic] || Qr[Ic] || Vi[Ic] || 0
        })
    },
    _t = {
        s: zc,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: pn,
        sc: ud(function(t) {
            return arguments.length ? $n.scrollTo(pn.sc(), t) : $n.pageYOffset || Gr[zc] || Qr[zc] || Vi[zc] || 0
        })
    },
    gn = function(e, n) {
        return (n && n._ctx && n._ctx.selector || Mt.utils.toArray)(e)[0] || (typeof e == "string" && Mt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    },
    ha = function(e, n) {
        var o = n.s,
            r = n.sc;
        gl(e) && (e = Gr.scrollingElement || Qr);
        var a = de.indexOf(e),
            i = r === _t.sc ? 1 : 2;
        !~a && (a = de.push(e) - 1), de[a + i] || on(e, "scroll", Cm);
        var s = de[a + i],
            l = s || (de[a + i] = ud(aa(e, o), !0) || (gl(e) ? r : ud(function(c) {
                return arguments.length ? e[o] = c : e[o]
            })));
        return l.target = e, s || (l.smooth = Mt.getProperty(e, "scrollBehavior") === "smooth"), l
    },
    Tm = function(e, n, o) {
        var r = e,
            a = e,
            i = vl(),
            s = i,
            l = n || 50,
            c = Math.max(500, l * 3),
            u = function(g, m) {
                var y = vl();
                m || y - i > l ? (a = r, r = g, s = i, i = y) : o ? r += g : r = a + (g - a) / (y - s) * (i - s)
            },
            p = function() {
                a = r = o ? 0 : r, s = i = 0
            },
            d = function(g) {
                var m = s,
                    y = a,
                    v = vl();
                return (g || g === 0) && g !== r && u(g), i === s || v - s > c ? 0 : (r + (o ? y : -y)) / ((o ? v : i) - m) * 1e3
            };
        return {
            update: u,
            reset: p,
            getVelocity: d
        }
    },
    Us = function(e, n) {
        return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    },
    Rv = function(e) {
        var n = Math.max.apply(Math, e),
            o = Math.min.apply(Math, e);
        return Math.abs(n) >= Math.abs(o) ? n : o
    },
    T_ = function() {
        hl = Mt.core.globals().ScrollTrigger, hl && hl.core && Rk()
    },
    E_ = function(e) {
        return Mt = e || b_(), !xu && Mt && typeof document < "u" && document.body && ($n = window, Gr = document, Qr = Gr.documentElement, Vi = Gr.body, __ = [$n, Gr, Qr, Vi], Mt.utils.clamp, S_ = Mt.core.context || function() {}, Na = "onpointerenter" in Vi ? "pointer" : "mouse", w_ = ut.isTouch = $n.matchMedia && $n.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in $n || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, _o = ut.eventTypes = ("ontouchstart" in Qr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Qr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return C_ = 0
        }, 500), T_(), xu = 1), xu
    };
pn.op = _t;
de.cache = 0;
var ut = function() {
    function t(n) {
        this.init(n)
    }
    var e = t.prototype;
    return e.init = function(o) {
        xu || E_(Mt) || console.warn("Please gsap.registerPlugin(Observer)"), hl || T_();
        var r = o.tolerance,
            a = o.dragMinimum,
            i = o.type,
            s = o.target,
            l = o.lineHeight,
            c = o.debounce,
            u = o.preventDefault,
            p = o.onStop,
            d = o.onStopDelay,
            f = o.ignore,
            g = o.wheelSpeed,
            m = o.event,
            y = o.onDragStart,
            v = o.onDragEnd,
            h = o.onDrag,
            x = o.onPress,
            _ = o.onRelease,
            b = o.onRight,
            E = o.onLeft,
            C = o.onUp,
            A = o.onDown,
            P = o.onChangeX,
            k = o.onChangeY,
            L = o.onChange,
            R = o.onToggleX,
            H = o.onToggleY,
            M = o.onHover,
            V = o.onHoverEnd,
            z = o.onMove,
            $ = o.ignoreCheck,
            N = o.isNormalizer,
            j = o.onGestureStart,
            T = o.onGestureEnd,
            I = o.onWheel,
            W = o.onEnable,
            J = o.onDisable,
            ee = o.onClick,
            ye = o.scrollSpeed,
            te = o.capture,
            xe = o.allowClicks,
            Fe = o.lockAxis,
            Re = o.onLockAxis;
        this.target = s = gn(s) || Qr, this.vars = o, f && (f = Mt.utils.toArray(f)), r = r || 1e-9, a = a || 0, g = g || 1, ye = ye || 1, i = i || "wheel,touch,pointer", c = c !== !1, l || (l = parseFloat($n.getComputedStyle(Vi).lineHeight) || 22);
        var Pt, dt, rt, ae, Te, vt, Xe, D = this,
            kt = 0,
            Ee = 0,
            en = o.passive || !u && o.passive !== !1,
            ze = ha(s, pn),
            go = ha(s, _t),
            kn = ze(),
            tr = go(),
            at = ~i.indexOf("touch") && !~i.indexOf("pointer") && _o[0] === "pointerdown",
            Zn = gl(s),
            Ce = s.ownerDocument || Gr,
            vn = [0, 0, 0],
            gt = [0, 0, 0],
            Jn = 0,
            wa = function() {
                return Jn = vl()
            },
            $e = function(Z, we) {
                return (D.event = Z) && f && ~f.indexOf(Z.target) || we && at && Z.pointerType !== "touch" || $ && $(Z, we)
            },
            _a = function() {
                D._vx.reset(), D._vy.reset(), dt.pause(), p && p(D)
            },
            xo = function() {
                var Z = D.deltaX = Rv(vn),
                    we = D.deltaY = Rv(gt),
                    U = Math.abs(Z) >= r,
                    ne = Math.abs(we) >= r;
                L && (U || ne) && L(D, Z, we, vn, gt), U && (b && D.deltaX > 0 && b(D), E && D.deltaX < 0 && E(D), P && P(D), R && D.deltaX < 0 != kt < 0 && R(D), kt = D.deltaX, vn[0] = vn[1] = vn[2] = 0), ne && (A && D.deltaY > 0 && A(D), C && D.deltaY < 0 && C(D), k && k(D), H && D.deltaY < 0 != Ee < 0 && H(D), Ee = D.deltaY, gt[0] = gt[1] = gt[2] = 0), (ae || rt) && (z && z(D), rt && (y && rt === 1 && y(D), h && h(D), rt = 0), ae = !1), vt && !(vt = !1) && Re && Re(D), Te && (I(D), Te = !1), Pt = 0
            },
            Ro = function(Z, we, U) {
                vn[U] += Z, gt[U] += we, D._vx.update(Z), D._vy.update(we), c ? Pt || (Pt = requestAnimationFrame(xo)) : xo()
            },
            tn = function(Z, we) {
                Fe && !Xe && (D.axis = Xe = Math.abs(Z) > Math.abs(we) ? "x" : "y", vt = !0), Xe !== "y" && (vn[2] += Z, D._vx.update(Z, !0)), Xe !== "x" && (gt[2] += we, D._vy.update(we, !0)), c ? Pt || (Pt = requestAnimationFrame(xo)) : xo()
            },
            Oo = function(Z) {
                if (!$e(Z, 1)) {
                    Z = Us(Z, u);
                    var we = Z.clientX,
                        U = Z.clientY,
                        ne = we - D.x,
                        X = U - D.y,
                        oe = D.isDragging;
                    D.x = we, D.y = U, (oe || (ne || X) && (Math.abs(D.startX - we) >= a || Math.abs(D.startY - U) >= a)) && (rt = oe ? 2 : 1, oe || (D.isDragging = !0), tn(ne, X))
                }
            },
            K = D.onPress = function(re) {
                $e(re, 1) || re && re.button || (D.axis = Xe = null, dt.pause(), D.isPressed = !0, re = Us(re), kt = Ee = 0, D.startX = D.x = re.clientX, D.startY = D.y = re.clientY, D._vx.reset(), D._vy.reset(), on(N ? s : Ce, _o[1], Oo, en, !0), D.deltaX = D.deltaY = 0, x && x(D))
            },
            Q = D.onRelease = function(re) {
                if (!$e(re, 1)) {
                    nn(N ? s : Ce, _o[1], Oo, !0);
                    var Z = !isNaN(D.y - D.startY),
                        we = D.isDragging,
                        U = we && (Math.abs(D.x - D.startX) > 3 || Math.abs(D.y - D.startY) > 3),
                        ne = Us(re);
                    !U && Z && (D._vx.reset(), D._vy.reset(), u && xe && Mt.delayedCall(.08, function() {
                        if (vl() - Jn > 300 && !re.defaultPrevented) {
                            if (re.target.click) re.target.click();
                            else if (Ce.createEvent) {
                                var X = Ce.createEvent("MouseEvents");
                                X.initMouseEvent("click", !0, !0, $n, 1, ne.screenX, ne.screenY, ne.clientX, ne.clientY, !1, !1, !1, !1, 0, null), re.target.dispatchEvent(X)
                            }
                        }
                    })), D.isDragging = D.isGesturing = D.isPressed = !1, p && we && !N && dt.restart(!0), rt && xo(), v && we && v(D), _ && _(D, U)
                }
            },
            ve = function(Z) {
                return Z.touches && Z.touches.length > 1 && (D.isGesturing = !0) && j(Z, D.isDragging)
            },
            qe = function() {
                return (D.isGesturing = !1) || T(D)
            },
            Ke = function(Z) {
                if (!$e(Z)) {
                    var we = ze(),
                        U = go();
                    Ro((we - kn) * ye, (U - tr) * ye, 1), kn = we, tr = U, p && dt.restart(!0)
                }
            },
            Lt = function(Z) {
                if (!$e(Z)) {
                    Z = Us(Z, u), I && (Te = !0);
                    var we = (Z.deltaMode === 1 ? l : Z.deltaMode === 2 ? $n.innerHeight : 1) * g;
                    Ro(Z.deltaX * we, Z.deltaY * we, 0), p && !N && dt.restart(!0)
                }
            },
            nr = function(Z) {
                if (!$e(Z)) {
                    var we = Z.clientX,
                        U = Z.clientY,
                        ne = we - D.x,
                        X = U - D.y;
                    D.x = we, D.y = U, ae = !0, p && dt.restart(!0), (ne || X) && tn(ne, X)
                }
            },
            si = function(Z) {
                D.event = Z, M(D)
            },
            or = function(Z) {
                D.event = Z, V(D)
            },
            Es = function(Z) {
                return $e(Z) || Us(Z, u) && ee(D)
            };
        dt = D._dc = Mt.delayedCall(d || .25, _a).pause(), D.deltaX = D.deltaY = 0, D._vx = Tm(0, 50, !0), D._vy = Tm(0, 50, !0), D.scrollX = ze, D.scrollY = go, D.isDragging = D.isGesturing = D.isPressed = !1, S_(this), D.enable = function(re) {
            return D.isEnabled || (on(Zn ? Ce : s, "scroll", Cm), i.indexOf("scroll") >= 0 && on(Zn ? Ce : s, "scroll", Ke, en, te), i.indexOf("wheel") >= 0 && on(s, "wheel", Lt, en, te), (i.indexOf("touch") >= 0 && w_ || i.indexOf("pointer") >= 0) && (on(s, _o[0], K, en, te), on(Ce, _o[2], Q), on(Ce, _o[3], Q), xe && on(s, "click", wa, !0, !0), ee && on(s, "click", Es), j && on(Ce, "gesturestart", ve), T && on(Ce, "gestureend", qe), M && on(s, Na + "enter", si), V && on(s, Na + "leave", or), z && on(s, Na + "move", nr)), D.isEnabled = !0, D.isDragging = D.isGesturing = D.isPressed = ae = rt = !1, D._vx.reset(), D._vy.reset(), kn = ze(), tr = go(), re && re.type && K(re), W && W(D)), D
        }, D.disable = function() {
            D.isEnabled && (ki.filter(function(re) {
                return re !== D && gl(re.target)
            }).length || nn(Zn ? Ce : s, "scroll", Cm), D.isPressed && (D._vx.reset(), D._vy.reset(), nn(N ? s : Ce, _o[1], Oo, !0)), nn(Zn ? Ce : s, "scroll", Ke, te), nn(s, "wheel", Lt, te), nn(s, _o[0], K, te), nn(Ce, _o[2], Q), nn(Ce, _o[3], Q), nn(s, "click", wa, !0), nn(s, "click", Es), nn(Ce, "gesturestart", ve), nn(Ce, "gestureend", qe), nn(s, Na + "enter", si), nn(s, Na + "leave", or), nn(s, Na + "move", nr), D.isEnabled = D.isPressed = D.isDragging = !1, J && J(D))
        }, D.kill = D.revert = function() {
            D.disable();
            var re = ki.indexOf(D);
            re >= 0 && ki.splice(re, 1), fr === D && (fr = 0)
        }, ki.push(D), N && gl(s) && (fr = D), D.enable(m)
    }, Dk(t, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), t
}();
ut.version = "3.12.7";
ut.create = function(t) {
    return new ut(t)
};
ut.register = E_;
ut.getAll = function() {
    return ki.slice()
};
ut.getById = function(t) {
    return ki.filter(function(e) {
        return e.vars.id === t
    })[0]
};
b_() && Mt.registerPlugin(ut);
/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var G, fi, ue, ke, In, Se, s2, dd, Jl, xl, Ks, $c, Wt, Gd, Em, ln, Ov, Mv, mi, A_, $p, N_, an, Am, P_, k_, Dr, Nm, l2, Wi, c2, pd, Pm, Hp, Hc = 1,
    Gt = Date.now,
    Up = Gt(),
    fo = 0,
    Zs = 0,
    jv = function(e, n, o) {
        var r = Fn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
        return o["_" + n + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
    },
    Fv = function(e, n) {
        return n && (!Fn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
    },
    Ok = function t() {
        return Zs && requestAnimationFrame(t)
    },
    Bv = function() {
        return Gd = 1
    },
    Lv = function() {
        return Gd = 0
    },
    zo = function(e) {
        return e
    },
    Js = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    D_ = function() {
        return typeof window < "u"
    },
    R_ = function() {
        return G || D_() && (G = window.gsap) && G.registerPlugin && G
    },
    ti = function(e) {
        return !!~s2.indexOf(e)
    },
    O_ = function(e) {
        return (e === "Height" ? c2 : ue["inner" + e]) || In["client" + e] || Se["client" + e]
    },
    M_ = function(e) {
        return aa(e, "getBoundingClientRect") || (ti(e) ? function() {
            return bu.width = ue.innerWidth, bu.height = c2, bu
        } : function() {
            return ur(e)
        })
    },
    Mk = function(e, n, o) {
        var r = o.d,
            a = o.d2,
            i = o.a;
        return (i = aa(e, "getBoundingClientRect")) ? function() {
            return i()[r]
        } : function() {
            return (n ? O_(a) : e["client" + a]) || 0
        }
    },
    jk = function(e, n) {
        return !n || ~Ko.indexOf(e) ? M_(e) : function() {
            return bu
        }
    },
    Go = function(e, n) {
        var o = n.s,
            r = n.d2,
            a = n.d,
            i = n.a;
        return Math.max(0, (o = "scroll" + r) && (i = aa(e, o)) ? i() - M_(e)()[a] : ti(e) ? (In[o] || Se[o]) - O_(r) : e[o] - e["offset" + r])
    },
    Uc = function(e, n) {
        for (var o = 0; o < mi.length; o += 3)(!n || ~n.indexOf(mi[o + 1])) && e(mi[o], mi[o + 1], mi[o + 2])
    },
    Fn = function(e) {
        return typeof e == "string"
    },
    qt = function(e) {
        return typeof e == "function"
    },
    el = function(e) {
        return typeof e == "number"
    },
    Pa = function(e) {
        return typeof e == "object"
    },
    Vs = function(e, n, o) {
        return e && e.progress(n ? 0 : 1) && o && e.pause()
    },
    Vp = function(e, n) {
        if (e.enabled) {
            var o = e._ctx ? e._ctx.add(function() {
                return n(e)
            }) : n(e);
            o && o.totalTime && (e.callbackAnimation = o)
        }
    },
    di = Math.abs,
    j_ = "left",
    F_ = "top",
    u2 = "right",
    d2 = "bottom",
    Wa = "width",
    Ya = "height",
    yl = "Right",
    wl = "Left",
    _l = "Top",
    Sl = "Bottom",
    pt = "padding",
    ao = "margin",
    gs = "Width",
    p2 = "Height",
    yt = "px",
    io = function(e) {
        return ue.getComputedStyle(e)
    },
    Fk = function(e) {
        var n = io(e).position;
        e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
    },
    Iv = function(e, n) {
        for (var o in n) o in e || (e[o] = n[o]);
        return e
    },
    ur = function(e, n) {
        var o = n && io(e)[Em] !== "matrix(1, 0, 0, 1, 0, 0)" && G.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            r = e.getBoundingClientRect();
        return o && o.progress(0).kill(), r
    },
    fd = function(e, n) {
        var o = n.d2;
        return e["offset" + o] || e["client" + o] || 0
    },
    B_ = function(e) {
        var n = [],
            o = e.labels,
            r = e.duration(),
            a;
        for (a in o) n.push(o[a] / r);
        return n
    },
    Bk = function(e) {
        return function(n) {
            return G.utils.snap(B_(e), n)
        }
    },
    f2 = function(e) {
        var n = G.utils.snap(e),
            o = Array.isArray(e) && e.slice(0).sort(function(r, a) {
                return r - a
            });
        return o ? function(r, a, i) {
            i === void 0 && (i = .001);
            var s;
            if (!a) return n(r);
            if (a > 0) {
                for (r -= i, s = 0; s < o.length; s++)
                    if (o[s] >= r) return o[s];
                return o[s - 1]
            } else
                for (s = o.length, r += i; s--;)
                    if (o[s] <= r) return o[s];
            return o[0]
        } : function(r, a, i) {
            i === void 0 && (i = .001);
            var s = n(r);
            return !a || Math.abs(s - r) < i || s - r < 0 == a < 0 ? s : n(a < 0 ? r - e : r + e)
        }
    },
    Lk = function(e) {
        return function(n, o) {
            return f2(B_(e))(n, o.direction)
        }
    },
    Vc = function(e, n, o, r) {
        return o.split(",").forEach(function(a) {
            return e(n, a, r)
        })
    },
    Tt = function(e, n, o, r, a) {
        return e.addEventListener(n, o, {
            passive: !r,
            capture: !!a
        })
    },
    Ct = function(e, n, o, r) {
        return e.removeEventListener(n, o, !!r)
    },
    Wc = function(e, n, o) {
        o = o && o.wheelHandler, o && (e(n, "wheel", o), e(n, "touchmove", o))
    },
    zv = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    Yc = {
        toggleActions: "play",
        anticipatePin: 0
    },
    md = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    yu = function(e, n) {
        if (Fn(e)) {
            var o = e.indexOf("="),
                r = ~o ? +(e.charAt(o - 1) + 1) * parseFloat(e.substr(o + 1)) : 0;
            ~o && (e.indexOf("%") > o && (r *= n / 100), e = e.substr(0, o - 1)), e = r + (e in md ? md[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
        }
        return e
    },
    Gc = function(e, n, o, r, a, i, s, l) {
        var c = a.startColor,
            u = a.endColor,
            p = a.fontSize,
            d = a.indent,
            f = a.fontWeight,
            g = ke.createElement("div"),
            m = ti(o) || aa(o, "pinType") === "fixed",
            y = e.indexOf("scroller") !== -1,
            v = m ? Se : o,
            h = e.indexOf("start") !== -1,
            x = h ? c : u,
            _ = "border-color:" + x + ";font-size:" + p + ";color:" + x + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return _ += "position:" + ((y || l) && m ? "fixed;" : "absolute;"), (y || l || !m) && (_ += (r === _t ? u2 : d2) + ":" + (i + parseFloat(d)) + "px;"), s && (_ += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), g._isStart = h, g.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), g.style.cssText = _, g.innerText = n || n === 0 ? e + "-" + n : e, v.children[0] ? v.insertBefore(g, v.children[0]) : v.appendChild(g), g._offset = g["offset" + r.op.d2], wu(g, 0, r, h), g
    },
    wu = function(e, n, o, r) {
        var a = {
                display: "block"
            },
            i = o[r ? "os2" : "p2"],
            s = o[r ? "p2" : "os2"];
        e._isFlipped = r, a[o.a + "Percent"] = r ? -100 : 0, a[o.a] = r ? "1px" : 0, a["border" + i + gs] = 1, a["border" + s + gs] = 0, a[o.p] = n + "px", G.set(e, a)
    },
    ce = [],
    km = {},
    ec, $v = function() {
        return Gt() - fo > 34 && (ec || (ec = requestAnimationFrame(hr)))
    },
    pi = function() {
        (!an || !an.isPressed || an.startX > Se.clientWidth) && (de.cache++, an ? ec || (ec = requestAnimationFrame(hr)) : hr(), fo || oi("scrollStart"), fo = Gt())
    },
    Wp = function() {
        k_ = ue.innerWidth, P_ = ue.innerHeight
    },
    tl = function(e) {
        de.cache++, (e === !0 || !Wt && !N_ && !ke.fullscreenElement && !ke.webkitFullscreenElement && (!Am || k_ !== ue.innerWidth || Math.abs(ue.innerHeight - P_) > ue.innerHeight * .25)) && dd.restart(!0)
    },
    ni = {},
    Ik = [],
    L_ = function t() {
        return Ct(se, "scrollEnd", t) || Ma(!0)
    },
    oi = function(e) {
        return ni[e] && ni[e].map(function(n) {
            return n()
        }) || Ik
    },
    Mn = [],
    I_ = function(e) {
        for (var n = 0; n < Mn.length; n += 5)(!e || Mn[n + 4] && Mn[n + 4].query === e) && (Mn[n].style.cssText = Mn[n + 1], Mn[n].getBBox && Mn[n].setAttribute("transform", Mn[n + 2] || ""), Mn[n + 3].uncache = 1)
    },
    m2 = function(e, n) {
        var o;
        for (ln = 0; ln < ce.length; ln++) o = ce[ln], o && (!n || o._ctx === n) && (e ? o.kill(1) : o.revert(!0, !0));
        pd = !0, n && I_(n), n || oi("revert")
    },
    z_ = function(e, n) {
        de.cache++, (n || !cn) && de.forEach(function(o) {
            return qt(o) && o.cacheID++ && (o.rec = 0)
        }), Fn(e) && (ue.history.scrollRestoration = l2 = e)
    },
    cn, Ga = 0,
    Hv, zk = function() {
        if (Hv !== Ga) {
            var e = Hv = Ga;
            requestAnimationFrame(function() {
                return e === Ga && Ma(!0)
            })
        }
    },
    $_ = function() {
        Se.appendChild(Wi), c2 = !an && Wi.offsetHeight || ue.innerHeight, Se.removeChild(Wi)
    },
    Uv = function(e) {
        return Jl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n) {
            return n.style.display = e ? "none" : "block"
        })
    },
    Ma = function(e, n) {
        if (In = ke.documentElement, Se = ke.body, s2 = [ue, ke, In, Se], fo && !e && !pd) {
            Tt(se, "scrollEnd", L_);
            return
        }
        $_(), cn = se.isRefreshing = !0, de.forEach(function(r) {
            return qt(r) && ++r.cacheID && (r.rec = r())
        });
        var o = oi("refreshInit");
        A_ && se.sort(), n || m2(), de.forEach(function(r) {
            qt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0))
        }), ce.slice(0).forEach(function(r) {
            return r.refresh()
        }), pd = !1, ce.forEach(function(r) {
            if (r._subPinOffset && r.pin) {
                var a = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    i = r.pin[a];
                r.revert(!0, 1), r.adjustPinSpacing(r.pin[a] - i), r.refresh()
            }
        }), Pm = 1, Uv(!0), ce.forEach(function(r) {
            var a = Go(r.scroller, r._dir),
                i = r.vars.end === "max" || r._endClamp && r.end > a,
                s = r._startClamp && r.start >= a;
            (i || s) && r.setPositions(s ? a - 1 : r.start, i ? Math.max(s ? a : r.start + 1, a) : r.end, !0)
        }), Uv(!1), Pm = 0, o.forEach(function(r) {
            return r && r.render && r.render(-1)
        }), de.forEach(function(r) {
            qt(r) && (r.smooth && requestAnimationFrame(function() {
                return r.target.style.scrollBehavior = "smooth"
            }), r.rec && r(r.rec))
        }), z_(l2, 1), dd.pause(), Ga++, cn = 2, hr(2), ce.forEach(function(r) {
            return qt(r.vars.onRefresh) && r.vars.onRefresh(r)
        }), cn = se.isRefreshing = !1, oi("refresh")
    },
    Dm = 0,
    _u = 1,
    bl, hr = function(e) {
        if (e === 2 || !cn && !pd) {
            se.isUpdating = !0, bl && bl.update(0);
            var n = ce.length,
                o = Gt(),
                r = o - Up >= 50,
                a = n && ce[0].scroll();
            if (_u = Dm > a ? -1 : 1, cn || (Dm = a), r && (fo && !Gd && o - fo > 200 && (fo = 0, oi("scrollEnd")), Ks = Up, Up = o), _u < 0) {
                for (ln = n; ln-- > 0;) ce[ln] && ce[ln].update(0, r);
                _u = 1
            } else
                for (ln = 0; ln < n; ln++) ce[ln] && ce[ln].update(0, r);
            se.isUpdating = !1
        }
        ec = 0
    },
    Rm = [j_, F_, d2, u2, ao + Sl, ao + yl, ao + _l, ao + wl, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Su = Rm.concat([Wa, Ya, "boxSizing", "max" + gs, "max" + p2, "position", ao, pt, pt + _l, pt + yl, pt + Sl, pt + wl]),
    $k = function(e, n, o) {
        Yi(o);
        var r = e._gsap;
        if (r.spacerIsNative) Yi(r.spacerState);
        else if (e._gsap.swappedIn) {
            var a = n.parentNode;
            a && (a.insertBefore(e, n), a.removeChild(n))
        }
        e._gsap.swappedIn = !1
    },
    Yp = function(e, n, o, r) {
        if (!e._gsap.swappedIn) {
            for (var a = Rm.length, i = n.style, s = e.style, l; a--;) l = Rm[a], i[l] = o[l];
            i.position = o.position === "absolute" ? "absolute" : "relative", o.display === "inline" && (i.display = "inline-block"), s[d2] = s[u2] = "auto", i.flexBasis = o.flexBasis || "auto", i.overflow = "visible", i.boxSizing = "border-box", i[Wa] = fd(e, pn) + yt, i[Ya] = fd(e, _t) + yt, i[pt] = s[ao] = s[F_] = s[j_] = "0", Yi(r), s[Wa] = s["max" + gs] = o[Wa], s[Ya] = s["max" + p2] = o[Ya], s[pt] = o[pt], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = !0
        }
    },
    Hk = /([A-Z])/g,
    Yi = function(e) {
        if (e) {
            var n = e.t.style,
                o = e.length,
                r = 0,
                a, i;
            for ((e.t._gsap || G.core.getCache(e.t)).uncache = 1; r < o; r += 2) i = e[r + 1], a = e[r], i ? n[a] = i : n[a] && n.removeProperty(a.replace(Hk, "-$1").toLowerCase())
        }
    },
    Qc = function(e) {
        for (var n = Su.length, o = e.style, r = [], a = 0; a < n; a++) r.push(Su[a], o[Su[a]]);
        return r.t = e, r
    },
    Uk = function(e, n, o) {
        for (var r = [], a = e.length, i = o ? 8 : 0, s; i < a; i += 2) s = e[i], r.push(s, s in n ? n[s] : e[i + 1]);
        return r.t = e.t, r
    },
    bu = {
        left: 0,
        top: 0
    },
    Vv = function(e, n, o, r, a, i, s, l, c, u, p, d, f, g) {
        qt(e) && (e = e(l)), Fn(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? yu("0" + e.substr(3), o) : 0));
        var m = f ? f.time() : 0,
            y, v, h;
        if (f && f.seek(0), isNaN(e) || (e = +e), el(e)) f && (e = G.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)), s && wu(s, o, r, !0);
        else {
            qt(n) && (n = n(l));
            var x = (e || "0").split(" "),
                _, b, E, C;
            h = gn(n, l) || Se, _ = ur(h) || {}, (!_ || !_.left && !_.top) && io(h).display === "none" && (C = h.style.display, h.style.display = "block", _ = ur(h), C ? h.style.display = C : h.style.removeProperty("display")), b = yu(x[0], _[r.d]), E = yu(x[1] || "0", o), e = _[r.p] - c[r.p] - u + b + a - E, s && wu(s, E, r, o - E < 20 || s._isStart && E > 20), o -= o - E
        }
        if (g && (l[g] = e || -.001, e < 0 && (e = 0)), i) {
            var A = e + o,
                P = i._isStart;
            y = "scroll" + r.d2, wu(i, A, r, P && A > 20 || !P && (p ? Math.max(Se[y], In[y]) : i.parentNode[y]) <= A + 1), p && (c = ur(s), p && (i.style[r.op.p] = c[r.op.p] - r.op.m - i._offset + yt))
        }
        return f && h && (y = ur(h), f.seek(d), v = ur(h), f._caScrollDist = y[r.p] - v[r.p], e = e / f._caScrollDist * d), f && f.seek(m), f ? e : Math.round(e)
    },
    Vk = /(webkit|moz|length|cssText|inset)/i,
    Wv = function(e, n, o, r) {
        if (e.parentNode !== n) {
            var a = e.style,
                i, s;
            if (n === Se) {
                e._stOrig = a.cssText, s = io(e);
                for (i in s) !+i && !Vk.test(i) && s[i] && typeof a[i] == "string" && i !== "0" && (a[i] = s[i]);
                a.top = o, a.left = r
            } else a.cssText = e._stOrig;
            G.core.getCache(e).uncache = 1, n.appendChild(e)
        }
    },
    H_ = function(e, n, o) {
        var r = n,
            a = r;
        return function(i) {
            var s = Math.round(e());
            return s !== r && s !== a && Math.abs(s - r) > 3 && Math.abs(s - a) > 3 && (i = s, o && o()), a = r, r = Math.round(i), r
        }
    },
    Xc = function(e, n, o) {
        var r = {};
        r[n.p] = "+=" + o, G.set(e, r)
    },
    Yv = function(e, n) {
        var o = ha(e, n),
            r = "_scroll" + n.p2,
            a = function i(s, l, c, u, p) {
                var d = i.tween,
                    f = l.onComplete,
                    g = {};
                c = c || o();
                var m = H_(o, c, function() {
                    d.kill(), i.tween = 0
                });
                return p = u && p || 0, u = u || s - c, d && d.kill(), l[r] = s, l.inherit = !1, l.modifiers = g, g[r] = function() {
                    return m(c + u * d.ratio + p * d.ratio * d.ratio)
                }, l.onUpdate = function() {
                    de.cache++, i.tween && hr()
                }, l.onComplete = function() {
                    i.tween = 0, f && f.call(d)
                }, d = i.tween = G.to(e, l), d
            };
        return e[r] = o, o.wheelHandler = function() {
            return a.tween && a.tween.kill() && (a.tween = 0)
        }, Tt(e, "wheel", o.wheelHandler), se.isTouch && Tt(e, "touchmove", o.wheelHandler), a
    },
    se = function() {
        function t(n, o) {
            fi || t.register(G) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Nm(this), this.init(n, o)
        }
        var e = t.prototype;
        return e.init = function(o, r) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Zs) {
                this.update = this.refresh = this.kill = zo;
                return
            }
            o = Iv(Fn(o) || el(o) || o.nodeType ? {
                trigger: o
            } : o, Yc);
            var a = o,
                i = a.onUpdate,
                s = a.toggleClass,
                l = a.id,
                c = a.onToggle,
                u = a.onRefresh,
                p = a.scrub,
                d = a.trigger,
                f = a.pin,
                g = a.pinSpacing,
                m = a.invalidateOnRefresh,
                y = a.anticipatePin,
                v = a.onScrubComplete,
                h = a.onSnapComplete,
                x = a.once,
                _ = a.snap,
                b = a.pinReparent,
                E = a.pinSpacer,
                C = a.containerAnimation,
                A = a.fastScrollEnd,
                P = a.preventOverlaps,
                k = o.horizontal || o.containerAnimation && o.horizontal !== !1 ? pn : _t,
                L = !p && p !== 0,
                R = gn(o.scroller || ue),
                H = G.core.getCache(R),
                M = ti(R),
                V = ("pinType" in o ? o.pinType : aa(R, "pinType") || M && "fixed") === "fixed",
                z = [o.onEnter, o.onLeave, o.onEnterBack, o.onLeaveBack],
                $ = L && o.toggleActions.split(" "),
                N = "markers" in o ? o.markers : Yc.markers,
                j = M ? 0 : parseFloat(io(R)["border" + k.p2 + gs]) || 0,
                T = this,
                I = o.onRefreshInit && function() {
                    return o.onRefreshInit(T)
                },
                W = Mk(R, M, k),
                J = jk(R, M),
                ee = 0,
                ye = 0,
                te = 0,
                xe = ha(R, k),
                Fe, Re, Pt, dt, rt, ae, Te, vt, Xe, D, kt, Ee, en, ze, go, kn, tr, at, Zn, Ce, vn, gt, Jn, wa, $e, _a, xo, Ro, tn, Oo, K, Q, ve, qe, Ke, Lt, nr, si, or;
            if (T._startClamp = T._endClamp = !1, T._dir = k, y *= 45, T.scroller = R, T.scroll = C ? C.time.bind(C) : xe, dt = xe(), T.vars = o, r = r || o.animation, "refreshPriority" in o && (A_ = 1, o.refreshPriority === -9999 && (bl = T)), H.tweenScroll = H.tweenScroll || {
                    top: Yv(R, _t),
                    left: Yv(R, pn)
                }, T.tweenTo = Fe = H.tweenScroll[k.p], T.scrubDuration = function(U) {
                    ve = el(U) && U, ve ? Q ? Q.duration(U) : Q = G.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: ve,
                        paused: !0,
                        onComplete: function() {
                            return v && v(T)
                        }
                    }) : (Q && Q.progress(1).kill(), Q = 0)
                }, r && (r.vars.lazy = !1, r._initted && !T.isReverted || r.vars.immediateRender !== !1 && o.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), T.animation = r.pause(), r.scrollTrigger = T, T.scrubDuration(p), Oo = 0, l || (l = r.vars.id)), _ && ((!Pa(_) || _.push) && (_ = {
                    snapTo: _
                }), "scrollBehavior" in Se.style && G.set(M ? [Se, In] : R, {
                    scrollBehavior: "auto"
                }), de.forEach(function(U) {
                    return qt(U) && U.target === (M ? ke.scrollingElement || In : R) && (U.smooth = !1)
                }), Pt = qt(_.snapTo) ? _.snapTo : _.snapTo === "labels" ? Bk(r) : _.snapTo === "labelsDirectional" ? Lk(r) : _.directional !== !1 ? function(U, ne) {
                    return f2(_.snapTo)(U, Gt() - ye < 500 ? 0 : ne.direction)
                } : G.utils.snap(_.snapTo), qe = _.duration || {
                    min: .1,
                    max: 2
                }, qe = Pa(qe) ? xl(qe.min, qe.max) : xl(qe, qe), Ke = G.delayedCall(_.delay || ve / 2 || .1, function() {
                    var U = xe(),
                        ne = Gt() - ye < 500,
                        X = Fe.tween;
                    if ((ne || Math.abs(T.getVelocity()) < 10) && !X && !Gd && ee !== U) {
                        var oe = (U - ae) / ze,
                            bt = r && !L ? r.totalProgress() : oe,
                            fe = ne ? 0 : (bt - K) / (Gt() - Ks) * 1e3 || 0,
                            it = G.utils.clamp(-oe, 1 - oe, di(fe / 2) * fe / .185),
                            It = oe + (_.inertia === !1 ? 0 : it),
                            Ze, Be, Ae = _,
                            yo = Ae.onStart,
                            He = Ae.onInterrupt,
                            Dn = Ae.onComplete;
                        if (Ze = Pt(It, T), el(Ze) || (Ze = It), Be = Math.max(0, Math.round(ae + Ze * ze)), U <= Te && U >= ae && Be !== U) {
                            if (X && !X._initted && X.data <= di(Be - U)) return;
                            _.inertia === !1 && (it = Ze - oe), Fe(Be, {
                                duration: qe(di(Math.max(di(It - bt), di(Ze - bt)) * .185 / fe / .05 || 0)),
                                ease: _.ease || "power3",
                                data: di(Be - U),
                                onInterrupt: function() {
                                    return Ke.restart(!0) && He && He(T)
                                },
                                onComplete: function() {
                                    T.update(), ee = xe(), r && !L && (Q ? Q.resetTo("totalProgress", Ze, r._tTime / r._tDur) : r.progress(Ze)), Oo = K = r && !L ? r.totalProgress() : T.progress, h && h(T), Dn && Dn(T)
                                }
                            }, U, it * ze, Be - U - it * ze), yo && yo(T, Fe.tween)
                        }
                    } else T.isActive && ee !== U && Ke.restart(!0)
                }).pause()), l && (km[l] = T), d = T.trigger = gn(d || f !== !0 && f), or = d && d._gsap && d._gsap.stRevert, or && (or = or(T)), f = f === !0 ? d : gn(f), Fn(s) && (s = {
                    targets: d,
                    className: s
                }), f && (g === !1 || g === ao || (g = !g && f.parentNode && f.parentNode.style && io(f.parentNode).display === "flex" ? !1 : pt), T.pin = f, Re = G.core.getCache(f), Re.spacer ? go = Re.pinState : (E && (E = gn(E), E && !E.nodeType && (E = E.current || E.nativeElement), Re.spacerIsNative = !!E, E && (Re.spacerState = Qc(E))), Re.spacer = at = E || ke.createElement("div"), at.classList.add("pin-spacer"), l && at.classList.add("pin-spacer-" + l), Re.pinState = go = Qc(f)), o.force3D !== !1 && G.set(f, {
                    force3D: !0
                }), T.spacer = at = Re.spacer, tn = io(f), wa = tn[g + k.os2], Ce = G.getProperty(f), vn = G.quickSetter(f, k.a, yt), Yp(f, at, tn), tr = Qc(f)), N) {
                Ee = Pa(N) ? Iv(N, zv) : zv, D = Gc("scroller-start", l, R, k, Ee, 0), kt = Gc("scroller-end", l, R, k, Ee, 0, D), Zn = D["offset" + k.op.d2];
                var Es = gn(aa(R, "content") || R);
                vt = this.markerStart = Gc("start", l, Es, k, Ee, Zn, 0, C), Xe = this.markerEnd = Gc("end", l, Es, k, Ee, Zn, 0, C), C && (si = G.quickSetter([vt, Xe], k.a, yt)), !V && !(Ko.length && aa(R, "fixedMarkers") === !0) && (Fk(M ? Se : R), G.set([D, kt], {
                    force3D: !0
                }), _a = G.quickSetter(D, k.a, yt), Ro = G.quickSetter(kt, k.a, yt))
            }
            if (C) {
                var re = C.vars.onUpdate,
                    Z = C.vars.onUpdateParams;
                C.eventCallback("onUpdate", function() {
                    T.update(0, 0, 1), re && re.apply(C, Z || [])
                })
            }
            if (T.previous = function() {
                    return ce[ce.indexOf(T) - 1]
                }, T.next = function() {
                    return ce[ce.indexOf(T) + 1]
                }, T.revert = function(U, ne) {
                    if (!ne) return T.kill(!0);
                    var X = U !== !1 || !T.enabled,
                        oe = Wt;
                    X !== T.isReverted && (X && (Lt = Math.max(xe(), T.scroll.rec || 0), te = T.progress, nr = r && r.progress()), vt && [vt, Xe, D, kt].forEach(function(bt) {
                        return bt.style.display = X ? "none" : "block"
                    }), X && (Wt = T, T.update(X)), f && (!b || !T.isActive) && (X ? $k(f, at, go) : Yp(f, at, io(f), $e)), X || T.update(X), Wt = oe, T.isReverted = X)
                }, T.refresh = function(U, ne, X, oe) {
                    if (!((Wt || !T.enabled) && !ne)) {
                        if (f && U && fo) {
                            Tt(t, "scrollEnd", L_);
                            return
                        }!cn && I && I(T), Wt = T, Fe.tween && !X && (Fe.tween.kill(), Fe.tween = 0), Q && Q.pause(), m && r && r.revert({
                            kill: !1
                        }).invalidate(), T.isReverted || T.revert(!0, !0), T._subPinOffset = !1;
                        var bt = W(),
                            fe = J(),
                            it = C ? C.duration() : Go(R, k),
                            It = ze <= .01,
                            Ze = 0,
                            Be = oe || 0,
                            Ae = Pa(X) ? X.end : o.end,
                            yo = o.endTrigger || d,
                            He = Pa(X) ? X.start : o.start || (o.start === 0 || !d ? 0 : f ? "0 0" : "0 100%"),
                            Dn = T.pinnedContainer = o.pinnedContainer && gn(o.pinnedContainer, T),
                            Mo = d && Math.max(0, ce.indexOf(T)) || 0,
                            Dt = Mo,
                            Rt, zt, Sa, dc, $t, xt, jo, Qd, h2, As, Fo, Ns, pc;
                        for (N && Pa(X) && (Ns = G.getProperty(D, k.p), pc = G.getProperty(kt, k.p)); Dt-- > 0;) xt = ce[Dt], xt.end || xt.refresh(0, 1) || (Wt = T), jo = xt.pin, jo && (jo === d || jo === f || jo === Dn) && !xt.isReverted && (As || (As = []), As.unshift(xt), xt.revert(!0, !0)), xt !== ce[Dt] && (Mo--, Dt--);
                        for (qt(He) && (He = He(T)), He = jv(He, "start", T), ae = Vv(He, d, bt, k, xe(), vt, D, T, fe, j, V, it, C, T._startClamp && "_startClamp") || (f ? -.001 : 0), qt(Ae) && (Ae = Ae(T)), Fn(Ae) && !Ae.indexOf("+=") && (~Ae.indexOf(" ") ? Ae = (Fn(He) ? He.split(" ")[0] : "") + Ae : (Ze = yu(Ae.substr(2), bt), Ae = Fn(He) ? He : (C ? G.utils.mapRange(0, C.duration(), C.scrollTrigger.start, C.scrollTrigger.end, ae) : ae) + Ze, yo = d)), Ae = jv(Ae, "end", T), Te = Math.max(ae, Vv(Ae || (yo ? "100% 0" : it), yo, bt, k, xe() + Ze, Xe, kt, T, fe, j, V, it, C, T._endClamp && "_endClamp")) || -.001, Ze = 0, Dt = Mo; Dt--;) xt = ce[Dt], jo = xt.pin, jo && xt.start - xt._pinPush <= ae && !C && xt.end > 0 && (Rt = xt.end - (T._startClamp ? Math.max(0, xt.start) : xt.start), (jo === d && xt.start - xt._pinPush < ae || jo === Dn) && isNaN(He) && (Ze += Rt * (1 - xt.progress)), jo === f && (Be += Rt));
                        if (ae += Ze, Te += Ze, T._startClamp && (T._startClamp += Ze), T._endClamp && !cn && (T._endClamp = Te || -.001, Te = Math.min(Te, Go(R, k))), ze = Te - ae || (ae -= .01) && .001, It && (te = G.utils.clamp(0, 1, G.utils.normalize(ae, Te, Lt))), T._pinPush = Be, vt && Ze && (Rt = {}, Rt[k.a] = "+=" + Ze, Dn && (Rt[k.p] = "-=" + xe()), G.set([vt, Xe], Rt)), f && !(Pm && T.end >= Go(R, k))) Rt = io(f), dc = k === _t, Sa = xe(), gt = parseFloat(Ce(k.a)) + Be, !it && Te > 1 && (Fo = (M ? ke.scrollingElement || In : R).style, Fo = {
                            style: Fo,
                            value: Fo["overflow" + k.a.toUpperCase()]
                        }, M && io(Se)["overflow" + k.a.toUpperCase()] !== "scroll" && (Fo.style["overflow" + k.a.toUpperCase()] = "scroll")), Yp(f, at, Rt), tr = Qc(f), zt = ur(f, !0), Qd = V && ha(R, dc ? pn : _t)(), g ? ($e = [g + k.os2, ze + Be + yt], $e.t = at, Dt = g === pt ? fd(f, k) + ze + Be : 0, Dt && ($e.push(k.d, Dt + yt), at.style.flexBasis !== "auto" && (at.style.flexBasis = Dt + yt)), Yi($e), Dn && ce.forEach(function(Ps) {
                            Ps.pin === Dn && Ps.vars.pinSpacing !== !1 && (Ps._subPinOffset = !0)
                        }), V && xe(Lt)) : (Dt = fd(f, k), Dt && at.style.flexBasis !== "auto" && (at.style.flexBasis = Dt + yt)), V && ($t = {
                            top: zt.top + (dc ? Sa - ae : Qd) + yt,
                            left: zt.left + (dc ? Qd : Sa - ae) + yt,
                            boxSizing: "border-box",
                            position: "fixed"
                        }, $t[Wa] = $t["max" + gs] = Math.ceil(zt.width) + yt, $t[Ya] = $t["max" + p2] = Math.ceil(zt.height) + yt, $t[ao] = $t[ao + _l] = $t[ao + yl] = $t[ao + Sl] = $t[ao + wl] = "0", $t[pt] = Rt[pt], $t[pt + _l] = Rt[pt + _l], $t[pt + yl] = Rt[pt + yl], $t[pt + Sl] = Rt[pt + Sl], $t[pt + wl] = Rt[pt + wl], kn = Uk(go, $t, b), cn && xe(0)), r ? (h2 = r._initted, $p(1), r.render(r.duration(), !0, !0), Jn = Ce(k.a) - gt + ze + Be, xo = Math.abs(ze - Jn) > 1, V && xo && kn.splice(kn.length - 2, 2), r.render(0, !0, !0), h2 || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), $p(0)) : Jn = ze, Fo && (Fo.value ? Fo.style["overflow" + k.a.toUpperCase()] = Fo.value : Fo.style.removeProperty("overflow-" + k.a));
                        else if (d && xe() && !C)
                            for (zt = d.parentNode; zt && zt !== Se;) zt._pinOffset && (ae -= zt._pinOffset, Te -= zt._pinOffset), zt = zt.parentNode;
                        As && As.forEach(function(Ps) {
                            return Ps.revert(!1, !0)
                        }), T.start = ae, T.end = Te, dt = rt = cn ? Lt : xe(), !C && !cn && (dt < Lt && xe(Lt), T.scroll.rec = 0), T.revert(!1, !0), ye = Gt(), Ke && (ee = -1, Ke.restart(!0)), Wt = 0, r && L && (r._initted || nr) && r.progress() !== nr && r.progress(nr || 0, !0).render(r.time(), !0, !0), (It || te !== T.progress || C || m || r && !r._initted) && (r && !L && r.totalProgress(C && ae < -.001 && !te ? G.utils.normalize(ae, Te, 0) : te, !0), T.progress = It || (dt - ae) / ze === te ? 0 : te), f && g && (at._pinOffset = Math.round(T.progress * Jn)), Q && Q.invalidate(), isNaN(Ns) || (Ns -= G.getProperty(D, k.p), pc -= G.getProperty(kt, k.p), Xc(D, k, Ns), Xc(vt, k, Ns - (oe || 0)), Xc(kt, k, pc), Xc(Xe, k, pc - (oe || 0))), It && !cn && T.update(), u && !cn && !en && (en = !0, u(T), en = !1)
                    }
                }, T.getVelocity = function() {
                    return (xe() - rt) / (Gt() - Ks) * 1e3 || 0
                }, T.endAnimation = function() {
                    Vs(T.callbackAnimation), r && (Q ? Q.progress(1) : r.paused() ? L || Vs(r, T.direction < 0, 1) : Vs(r, r.reversed()))
                }, T.labelToScroll = function(U) {
                    return r && r.labels && (ae || T.refresh() || ae) + r.labels[U] / r.duration() * ze || 0
                }, T.getTrailing = function(U) {
                    var ne = ce.indexOf(T),
                        X = T.direction > 0 ? ce.slice(0, ne).reverse() : ce.slice(ne + 1);
                    return (Fn(U) ? X.filter(function(oe) {
                        return oe.vars.preventOverlaps === U
                    }) : X).filter(function(oe) {
                        return T.direction > 0 ? oe.end <= ae : oe.start >= Te
                    })
                }, T.update = function(U, ne, X) {
                    if (!(C && !X && !U)) {
                        var oe = cn === !0 ? Lt : T.scroll(),
                            bt = U ? 0 : (oe - ae) / ze,
                            fe = bt < 0 ? 0 : bt > 1 ? 1 : bt || 0,
                            it = T.progress,
                            It, Ze, Be, Ae, yo, He, Dn, Mo;
                        if (ne && (rt = dt, dt = C ? xe() : oe, _ && (K = Oo, Oo = r && !L ? r.totalProgress() : fe)), y && f && !Wt && !Hc && fo && (!fe && ae < oe + (oe - rt) / (Gt() - Ks) * y ? fe = 1e-4 : fe === 1 && Te > oe + (oe - rt) / (Gt() - Ks) * y && (fe = .9999)), fe !== it && T.enabled) {
                            if (It = T.isActive = !!fe && fe < 1, Ze = !!it && it < 1, He = It !== Ze, yo = He || !!fe != !!it, T.direction = fe > it ? 1 : -1, T.progress = fe, yo && !Wt && (Be = fe && !it ? 0 : fe === 1 ? 1 : it === 1 ? 2 : 3, L && (Ae = !He && $[Be + 1] !== "none" && $[Be + 1] || $[Be], Mo = r && (Ae === "complete" || Ae === "reset" || Ae in r))), P && (He || Mo) && (Mo || p || !r) && (qt(P) ? P(T) : T.getTrailing(P).forEach(function(Sa) {
                                    return Sa.endAnimation()
                                })), L || (Q && !Wt && !Hc ? (Q._dp._time - Q._start !== Q._time && Q.render(Q._dp._time - Q._start), Q.resetTo ? Q.resetTo("totalProgress", fe, r._tTime / r._tDur) : (Q.vars.totalProgress = fe, Q.invalidate().restart())) : r && r.totalProgress(fe, !!(Wt && (ye || U)))), f) {
                                if (U && g && (at.style[g + k.os2] = wa), !V) vn(Js(gt + Jn * fe));
                                else if (yo) {
                                    if (Dn = !U && fe > it && Te + 1 > oe && oe + 1 >= Go(R, k), b)
                                        if (!U && (It || Dn)) {
                                            var Dt = ur(f, !0),
                                                Rt = oe - ae;
                                            Wv(f, Se, Dt.top + (k === _t ? Rt : 0) + yt, Dt.left + (k === _t ? 0 : Rt) + yt)
                                        } else Wv(f, at);
                                    Yi(It || Dn ? kn : tr), xo && fe < 1 && It || vn(gt + (fe === 1 && !Dn ? Jn : 0))
                                }
                            }
                            _ && !Fe.tween && !Wt && !Hc && Ke.restart(!0), s && (He || x && fe && (fe < 1 || !Hp)) && Jl(s.targets).forEach(function(Sa) {
                                return Sa.classList[It || x ? "add" : "remove"](s.className)
                            }), i && !L && !U && i(T), yo && !Wt ? (L && (Mo && (Ae === "complete" ? r.pause().totalProgress(1) : Ae === "reset" ? r.restart(!0).pause() : Ae === "restart" ? r.restart(!0) : r[Ae]()), i && i(T)), (He || !Hp) && (c && He && Vp(T, c), z[Be] && Vp(T, z[Be]), x && (fe === 1 ? T.kill(!1, 1) : z[Be] = 0), He || (Be = fe === 1 ? 1 : 3, z[Be] && Vp(T, z[Be]))), A && !It && Math.abs(T.getVelocity()) > (el(A) ? A : 2500) && (Vs(T.callbackAnimation), Q ? Q.progress(1) : Vs(r, Ae === "reverse" ? 1 : !fe, 1))) : L && i && !Wt && i(T)
                        }
                        if (Ro) {
                            var zt = C ? oe / C.duration() * (C._caScrollDist || 0) : oe;
                            _a(zt + (D._isFlipped ? 1 : 0)), Ro(zt)
                        }
                        si && si(-oe / C.duration() * (C._caScrollDist || 0))
                    }
                }, T.enable = function(U, ne) {
                    T.enabled || (T.enabled = !0, Tt(R, "resize", tl), M || Tt(R, "scroll", pi), I && Tt(t, "refreshInit", I), U !== !1 && (T.progress = te = 0, dt = rt = ee = xe()), ne !== !1 && T.refresh())
                }, T.getTween = function(U) {
                    return U && Fe ? Fe.tween : Q
                }, T.setPositions = function(U, ne, X, oe) {
                    if (C) {
                        var bt = C.scrollTrigger,
                            fe = C.duration(),
                            it = bt.end - bt.start;
                        U = bt.start + it * U / fe, ne = bt.start + it * ne / fe
                    }
                    T.refresh(!1, !1, {
                        start: Fv(U, X && !!T._startClamp),
                        end: Fv(ne, X && !!T._endClamp)
                    }, oe), T.update()
                }, T.adjustPinSpacing = function(U) {
                    if ($e && U) {
                        var ne = $e.indexOf(k.d) + 1;
                        $e[ne] = parseFloat($e[ne]) + U + yt, $e[1] = parseFloat($e[1]) + U + yt, Yi($e)
                    }
                }, T.disable = function(U, ne) {
                    if (T.enabled && (U !== !1 && T.revert(!0, !0), T.enabled = T.isActive = !1, ne || Q && Q.pause(), Lt = 0, Re && (Re.uncache = 1), I && Ct(t, "refreshInit", I), Ke && (Ke.pause(), Fe.tween && Fe.tween.kill() && (Fe.tween = 0)), !M)) {
                        for (var X = ce.length; X--;)
                            if (ce[X].scroller === R && ce[X] !== T) return;
                        Ct(R, "resize", tl), M || Ct(R, "scroll", pi)
                    }
                }, T.kill = function(U, ne) {
                    T.disable(U, ne), Q && !ne && Q.kill(), l && delete km[l];
                    var X = ce.indexOf(T);
                    X >= 0 && ce.splice(X, 1), X === ln && _u > 0 && ln--, X = 0, ce.forEach(function(oe) {
                        return oe.scroller === T.scroller && (X = 1)
                    }), X || cn || (T.scroll.rec = 0), r && (r.scrollTrigger = null, U && r.revert({
                        kill: !1
                    }), ne || r.kill()), vt && [vt, Xe, D, kt].forEach(function(oe) {
                        return oe.parentNode && oe.parentNode.removeChild(oe)
                    }), bl === T && (bl = 0), f && (Re && (Re.uncache = 1), X = 0, ce.forEach(function(oe) {
                        return oe.pin === f && X++
                    }), X || (Re.spacer = 0)), o.onKill && o.onKill(T)
                }, ce.push(T), T.enable(!1, !1), or && or(T), r && r.add && !ze) {
                var we = T.update;
                T.update = function() {
                    T.update = we, de.cache++, ae || Te || T.refresh()
                }, G.delayedCall(.01, T.update), ze = .01, ae = Te = 0
            } else T.refresh();
            f && zk()
        }, t.register = function(o) {
            return fi || (G = o || R_(), D_() && window.document && t.enable(), fi = Zs), fi
        }, t.defaults = function(o) {
            if (o)
                for (var r in o) Yc[r] = o[r];
            return Yc
        }, t.disable = function(o, r) {
            Zs = 0, ce.forEach(function(i) {
                return i[r ? "kill" : "disable"](o)
            }), Ct(ue, "wheel", pi), Ct(ke, "scroll", pi), clearInterval($c), Ct(ke, "touchcancel", zo), Ct(Se, "touchstart", zo), Vc(Ct, ke, "pointerdown,touchstart,mousedown", Bv), Vc(Ct, ke, "pointerup,touchend,mouseup", Lv), dd.kill(), Uc(Ct);
            for (var a = 0; a < de.length; a += 3) Wc(Ct, de[a], de[a + 1]), Wc(Ct, de[a], de[a + 2])
        }, t.enable = function() {
            if (ue = window, ke = document, In = ke.documentElement, Se = ke.body, G && (Jl = G.utils.toArray, xl = G.utils.clamp, Nm = G.core.context || zo, $p = G.core.suppressOverwrites || zo, l2 = ue.history.scrollRestoration || "auto", Dm = ue.pageYOffset || 0, G.core.globals("ScrollTrigger", t), Se)) {
                Zs = 1, Wi = document.createElement("div"), Wi.style.height = "100vh", Wi.style.position = "absolute", $_(), Ok(), ut.register(G), t.isTouch = ut.isTouch, Dr = ut.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Am = ut.isTouch === 1, Tt(ue, "wheel", pi), s2 = [ue, ke, In, Se], G.matchMedia ? (t.matchMedia = function(c) {
                    var u = G.matchMedia(),
                        p;
                    for (p in c) u.add(p, c[p]);
                    return u
                }, G.addEventListener("matchMediaInit", function() {
                    return m2()
                }), G.addEventListener("matchMediaRevert", function() {
                    return I_()
                }), G.addEventListener("matchMedia", function() {
                    Ma(0, 1), oi("matchMedia")
                }), G.matchMedia().add("(orientation: portrait)", function() {
                    return Wp(), Wp
                })) : console.warn("Requires GSAP 3.11.0 or later"), Wp(), Tt(ke, "scroll", pi);
                var o = Se.hasAttribute("style"),
                    r = Se.style,
                    a = r.borderTopStyle,
                    i = G.core.Animation.prototype,
                    s, l;
                for (i.revert || Object.defineProperty(i, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), r.borderTopStyle = "solid", s = ur(Se), _t.m = Math.round(s.top + _t.sc()) || 0, pn.m = Math.round(s.left + pn.sc()) || 0, a ? r.borderTopStyle = a : r.removeProperty("border-top-style"), o || (Se.setAttribute("style", ""), Se.removeAttribute("style")), $c = setInterval($v, 250), G.delayedCall(.5, function() {
                        return Hc = 0
                    }), Tt(ke, "touchcancel", zo), Tt(Se, "touchstart", zo), Vc(Tt, ke, "pointerdown,touchstart,mousedown", Bv), Vc(Tt, ke, "pointerup,touchend,mouseup", Lv), Em = G.utils.checkPrefix("transform"), Su.push(Em), fi = Gt(), dd = G.delayedCall(.2, Ma).pause(), mi = [ke, "visibilitychange", function() {
                        var c = ue.innerWidth,
                            u = ue.innerHeight;
                        ke.hidden ? (Ov = c, Mv = u) : (Ov !== c || Mv !== u) && tl()
                    }, ke, "DOMContentLoaded", Ma, ue, "load", Ma, ue, "resize", tl], Uc(Tt), ce.forEach(function(c) {
                        return c.enable(0, 1)
                    }), l = 0; l < de.length; l += 3) Wc(Ct, de[l], de[l + 1]), Wc(Ct, de[l], de[l + 2])
            }
        }, t.config = function(o) {
            "limitCallbacks" in o && (Hp = !!o.limitCallbacks);
            var r = o.syncInterval;
            r && clearInterval($c) || ($c = r) && setInterval($v, r), "ignoreMobileResize" in o && (Am = t.isTouch === 1 && o.ignoreMobileResize), "autoRefreshEvents" in o && (Uc(Ct) || Uc(Tt, o.autoRefreshEvents || "none"), N_ = (o.autoRefreshEvents + "").indexOf("resize") === -1)
        }, t.scrollerProxy = function(o, r) {
            var a = gn(o),
                i = de.indexOf(a),
                s = ti(a);
            ~i && de.splice(i, s ? 6 : 2), r && (s ? Ko.unshift(ue, r, Se, r, In, r) : Ko.unshift(a, r))
        }, t.clearMatchMedia = function(o) {
            ce.forEach(function(r) {
                return r._ctx && r._ctx.query === o && r._ctx.kill(!0, !0)
            })
        }, t.isInViewport = function(o, r, a) {
            var i = (Fn(o) ? gn(o) : o).getBoundingClientRect(),
                s = i[a ? Wa : Ya] * r || 0;
            return a ? i.right - s > 0 && i.left + s < ue.innerWidth : i.bottom - s > 0 && i.top + s < ue.innerHeight
        }, t.positionInViewport = function(o, r, a) {
            Fn(o) && (o = gn(o));
            var i = o.getBoundingClientRect(),
                s = i[a ? Wa : Ya],
                l = r == null ? s / 2 : r in md ? md[r] * s : ~r.indexOf("%") ? parseFloat(r) * s / 100 : parseFloat(r) || 0;
            return a ? (i.left + l) / ue.innerWidth : (i.top + l) / ue.innerHeight
        }, t.killAll = function(o) {
            if (ce.slice(0).forEach(function(a) {
                    return a.vars.id !== "ScrollSmoother" && a.kill()
                }), o !== !0) {
                var r = ni.killAll || [];
                ni = {}, r.forEach(function(a) {
                    return a()
                })
            }
        }, t
    }();
se.version = "3.12.7";
se.saveStyles = function(t) {
    return t ? Jl(t).forEach(function(e) {
        if (e && e.style) {
            var n = Mn.indexOf(e);
            n >= 0 && Mn.splice(n, 5), Mn.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), G.core.getCache(e), Nm())
        }
    }) : Mn
};
se.revert = function(t, e) {
    return m2(!t, e)
};
se.create = function(t, e) {
    return new se(t, e)
};
se.refresh = function(t) {
    return t ? tl(!0) : (fi || se.register()) && Ma(!0)
};
se.update = function(t) {
    return ++de.cache && hr(t === !0 ? 2 : 0)
};
se.clearScrollMemory = z_;
se.maxScroll = function(t, e) {
    return Go(t, e ? pn : _t)
};
se.getScrollFunc = function(t, e) {
    return ha(gn(t), e ? pn : _t)
};
se.getById = function(t) {
    return km[t]
};
se.getAll = function() {
    return ce.filter(function(t) {
        return t.vars.id !== "ScrollSmoother"
    })
};
se.isScrolling = function() {
    return !!fo
};
se.snapDirectional = f2;
se.addEventListener = function(t, e) {
    var n = ni[t] || (ni[t] = []);
    ~n.indexOf(e) || n.push(e)
};
se.removeEventListener = function(t, e) {
    var n = ni[t],
        o = n && n.indexOf(e);
    o >= 0 && n.splice(o, 1)
};
se.batch = function(t, e) {
    var n = [],
        o = {},
        r = e.interval || .016,
        a = e.batchMax || 1e9,
        i = function(c, u) {
            var p = [],
                d = [],
                f = G.delayedCall(r, function() {
                    u(p, d), p = [], d = []
                }).pause();
            return function(g) {
                p.length || f.restart(!0), p.push(g.trigger), d.push(g), a <= p.length && f.progress(1)
            }
        },
        s;
    for (s in e) o[s] = s.substr(0, 2) === "on" && qt(e[s]) && s !== "onRefreshInit" ? i(s, e[s]) : e[s];
    return qt(a) && (a = a(), Tt(se, "refresh", function() {
        return a = e.batchMax()
    })), Jl(t).forEach(function(l) {
        var c = {};
        for (s in o) c[s] = o[s];
        c.trigger = l, n.push(se.create(c))
    }), n
};
var Gv = function(e, n, o, r) {
        return n > r ? e(r) : n < 0 && e(0), o > r ? (r - n) / (o - n) : o < 0 ? n / (n - o) : 1
    },
    Gp = function t(e, n) {
        n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (ut.isTouch ? " pinch-zoom" : "") : "none", e === In && t(Se, n)
    },
    qc = {
        auto: 1,
        scroll: 1
    },
    Wk = function(e) {
        var n = e.event,
            o = e.target,
            r = e.axis,
            a = (n.changedTouches ? n.changedTouches[0] : n).target,
            i = a._gsap || G.core.getCache(a),
            s = Gt(),
            l;
        if (!i._isScrollT || s - i._isScrollT > 2e3) {
            for (; a && a !== Se && (a.scrollHeight <= a.clientHeight && a.scrollWidth <= a.clientWidth || !(qc[(l = io(a)).overflowY] || qc[l.overflowX]));) a = a.parentNode;
            i._isScroll = a && a !== o && !ti(a) && (qc[(l = io(a)).overflowY] || qc[l.overflowX]), i._isScrollT = s
        }(i._isScroll || r === "x") && (n.stopPropagation(), n._gsapAllow = !0)
    },
    U_ = function(e, n, o, r) {
        return ut.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: n,
            onWheel: r = r && Wk,
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function() {
                return o && Tt(ke, ut.eventTypes[0], Xv, !1, !0)
            },
            onDisable: function() {
                return Ct(ke, ut.eventTypes[0], Xv, !0)
            }
        })
    },
    Yk = /(input|label|select|textarea)/i,
    Qv, Xv = function(e) {
        var n = Yk.test(e.target.tagName);
        (n || Qv) && (e._gsapAllow = !0, Qv = n)
    },
    Gk = function(e) {
        Pa(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var n = e,
            o = n.normalizeScrollX,
            r = n.momentum,
            a = n.allowNestedScroll,
            i = n.onRelease,
            s, l, c = gn(e.target) || In,
            u = G.core.globals().ScrollSmoother,
            p = u && u.get(),
            d = Dr && (e.content && gn(e.content) || p && e.content !== !1 && !p.smooth() && p.content()),
            f = ha(c, _t),
            g = ha(c, pn),
            m = 1,
            y = (ut.isTouch && ue.visualViewport ? ue.visualViewport.scale * ue.visualViewport.width : ue.outerWidth) / ue.innerWidth,
            v = 0,
            h = qt(r) ? function() {
                return r(s)
            } : function() {
                return r || 2.8
            },
            x, _, b = U_(c, e.type, !0, a),
            E = function() {
                return _ = !1
            },
            C = zo,
            A = zo,
            P = function() {
                l = Go(c, _t), A = xl(Dr ? 1 : 0, l), o && (C = xl(0, Go(c, pn))), x = Ga
            },
            k = function() {
                d._gsap.y = Js(parseFloat(d._gsap.y) + f.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0
            },
            L = function() {
                if (_) {
                    requestAnimationFrame(E);
                    var N = Js(s.deltaY / 2),
                        j = A(f.v - N);
                    if (d && j !== f.v + f.offset) {
                        f.offset = j - f.v;
                        var T = Js((parseFloat(d && d._gsap.y) || 0) - f.offset);
                        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + T + ", 0, 1)", d._gsap.y = T + "px", f.cacheID = de.cache, hr()
                    }
                    return !0
                }
                f.offset && k(), _ = !0
            },
            R, H, M, V, z = function() {
                P(), R.isActive() && R.vars.scrollY > l && (f() > l ? R.progress(1) && f(l) : R.resetTo("scrollY", l))
            };
        return d && G.set(d, {
            y: "+=0"
        }), e.ignoreCheck = function($) {
            return Dr && $.type === "touchmove" && L() || m > 1.05 && $.type !== "touchstart" || s.isGesturing || $.touches && $.touches.length > 1
        }, e.onPress = function() {
            _ = !1;
            var $ = m;
            m = Js((ue.visualViewport && ue.visualViewport.scale || 1) / y), R.pause(), $ !== m && Gp(c, m > 1.01 ? !0 : o ? !1 : "x"), H = g(), M = f(), P(), x = Ga
        }, e.onRelease = e.onGestureStart = function($, N) {
            if (f.offset && k(), !N) V.restart(!0);
            else {
                de.cache++;
                var j = h(),
                    T, I;
                o && (T = g(), I = T + j * .05 * -$.velocityX / .227, j *= Gv(g, T, I, Go(c, pn)), R.vars.scrollX = C(I)), T = f(), I = T + j * .05 * -$.velocityY / .227, j *= Gv(f, T, I, Go(c, _t)), R.vars.scrollY = A(I), R.invalidate().duration(j).play(.01), (Dr && R.vars.scrollY >= l || T >= l - 1) && G.to({}, {
                    onUpdate: z,
                    duration: j
                })
            }
            i && i($)
        }, e.onWheel = function() {
            R._ts && R.pause(), Gt() - v > 1e3 && (x = 0, v = Gt())
        }, e.onChange = function($, N, j, T, I) {
            if (Ga !== x && P(), N && o && g(C(T[2] === N ? H + ($.startX - $.x) : g() + N - T[1])), j) {
                f.offset && k();
                var W = I[2] === j,
                    J = W ? M + $.startY - $.y : f() + j - I[1],
                    ee = A(J);
                W && J !== ee && (M += ee - J), f(ee)
            }(j || N) && hr()
        }, e.onEnable = function() {
            Gp(c, o ? !1 : "x"), se.addEventListener("refresh", z), Tt(ue, "resize", z), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = g.smooth = !1), b.enable()
        }, e.onDisable = function() {
            Gp(c, !0), Ct(ue, "resize", z), se.removeEventListener("refresh", z), b.kill()
        }, e.lockAxis = e.lockAxis !== !1, s = new ut(e), s.iOS = Dr, Dr && !f() && f(1), Dr && G.ticker.add(zo), V = s._dc, R = G.to(s, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: o ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: H_(f, f(), function() {
                    return R.pause()
                })
            },
            onUpdate: hr,
            onComplete: V.vars.onComplete
        }), s
    };
se.sort = function(t) {
    if (qt(t)) return ce.sort(t);
    var e = ue.pageYOffset || 0;
    return se.getAll().forEach(function(n) {
        return n._sortY = n.trigger ? e + n.trigger.getBoundingClientRect().top : n.start + ue.innerHeight
    }), ce.sort(t || function(n, o) {
        return (n.vars.refreshPriority || 0) * -1e6 + (n.vars.containerAnimation ? 1e6 : n._sortY) - ((o.vars.containerAnimation ? 1e6 : o._sortY) + (o.vars.refreshPriority || 0) * -1e6)
    })
};
se.observe = function(t) {
    return new ut(t)
};
se.normalizeScroll = function(t) {
    if (typeof t > "u") return an;
    if (t === !0 && an) return an.enable();
    if (t === !1) {
        an && an.kill(), an = t;
        return
    }
    var e = t instanceof ut ? t : Gk(t);
    return an && an.target === e.target && an.kill(), ti(e.target) && (an = e), e
};
se.core = {
    _getVelocityProp: Tm,
    _inputObserver: U_,
    _scrollers: de,
    _proxies: Ko,
    bridge: {
        ss: function() {
            fo || oi("scrollStart"), fo = Gt()
        },
        ref: function() {
            return Wt
        }
    }
};
R_() && G.registerPlugin(se);
ot.registerPlugin(se);
const Qk = () => {
    const t = S.useRef(null),
        e = S.useRef(null),
        n = S.useRef(null),
        o = S.useRef(null),
        r = [{
            category: "Frontend",
            items: ["React", "Angular", "Vue.js", "TypeScript", "Redux", "HTML/CSS", "TailwindCSS"],
            icon: w.jsx(CT, {
                "data-lov-id": "src/components/AboutSection.tsx:19:12",
                "data-lov-name": "Layout",
                "data-component-path": "src/components/AboutSection.tsx",
                "data-component-line": "19",
                "data-component-file": "AboutSection.tsx",
                "data-component-name": "Layout",
                "data-component-content": "%7B%22className%22%3A%22w-6%20h-6%20text-primary%22%7D",
                className: "w-6 h-6 text-primary"
            })
        }, {
            category: "Backend",
            items: ["Java", "Spring", "Spring Boot", "Microservices", "REST APIs", "GraphQL"],
            icon: w.jsx(AT, {
                "data-lov-id": "src/components/AboutSection.tsx:24:12",
                "data-lov-name": "Server",
                "data-component-path": "src/components/AboutSection.tsx",
                "data-component-line": "24",
                "data-component-file": "AboutSection.tsx",
                "data-component-name": "Server",
                "data-component-content": "%7B%22className%22%3A%22w-6%20h-6%20text-primary%22%7D",
                className: "w-6 h-6 text-primary"
            })
        }, {
            category: "Databases",
            items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
            icon: w.jsx(a1, {
                "data-lov-id": "src/components/AboutSection.tsx:29:12",
                "data-lov-name": "Database",
                "data-component-path": "src/components/AboutSection.tsx",
                "data-component-line": "29",
                "data-component-file": "AboutSection.tsx",
                "data-component-name": "Database",
                "data-component-content": "%7B%22className%22%3A%22w-6%20h-6%20text-primary%22%7D",
                className: "w-6 h-6 text-primary"
            })
        }, {
            category: "DevOps",
            items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Azure", "Jenkins"],
            icon: w.jsx(kT, {
                "data-lov-id": "src/components/AboutSection.tsx:34:12",
                "data-lov-name": "Workflow",
                "data-component-path": "src/components/AboutSection.tsx",
                "data-component-line": "34",
                "data-component-file": "AboutSection.tsx",
                "data-component-name": "Workflow",
                "data-component-content": "%7B%22className%22%3A%22w-6%20h-6%20text-primary%22%7D",
                className: "w-6 h-6 text-primary"
            })
        }, {
            category: "Others",
            items: ["Git", "Agile", "System Design", "Testing", "Performance Optimization"],
            icon: w.jsx(r1, {
                "data-lov-id": "src/components/AboutSection.tsx:39:12",
                "data-lov-name": "Code",
                "data-component-path": "src/components/AboutSection.tsx",
                "data-component-line": "39",
                "data-component-file": "AboutSection.tsx",
                "data-component-name": "Code",
                "data-component-content": "%7B%22className%22%3A%22w-6%20h-6%20text-primary%22%7D",
                className: "w-6 h-6 text-primary"
            })
        }];
    return S.useEffect(() => {
        if (!t.current) return;
        const a = e.current,
            i = n.current,
            s = o.current;
        !a || !i || !s || (ot.fromTo(a, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: .8,
            scrollTrigger: {
                trigger: a,
                start: "top 80%"
            }
        }), ot.fromTo(i, {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: .8,
            scrollTrigger: {
                trigger: i,
                start: "top 75%"
            }
        }), ot.fromTo(".skill-card", {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: .6,
            stagger: .1,
            scrollTrigger: {
                trigger: s,
                start: "top 70%"
            }
        }))
    }, []), w.jsxs("section", {
        "data-lov-id": "src/components/AboutSection.tsx:98:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/AboutSection.tsx",
        "data-component-line": "98",
        "data-component-file": "AboutSection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-20%20md%3Apy-32%20relative%22%7D",
        ref: t,
        id: "about",
        className: "py-20 md:py-32 relative",
        children: [w.jsx("div", {
            "data-lov-id": "src/components/AboutSection.tsx:104:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/AboutSection.tsx",
            "data-component-line": "104",
            "data-component-file": "AboutSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20top-1%2F2%20right-0%20-translate-y-1%2F2%20w-1%2F2%20h-3%2F4%20bg-gradient-to-bl%20from-primary%2F10%20to-accent%2F10%20rounded-l-full%20blur-3xl%20opacity-40%22%7D",
            className: "absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-3/4 bg-gradient-to-bl from-primary/10 to-accent/10 rounded-l-full blur-3xl opacity-40"
        }), w.jsxs("div", {
            "data-lov-id": "src/components/AboutSection.tsx:106:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/AboutSection.tsx",
            "data-component-line": "106",
            "data-component-file": "AboutSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20relative%20z-10%22%7D",
            className: "container mx-auto px-4 relative z-10",
            children: [w.jsxs("div", {
                "data-lov-id": "src/components/AboutSection.tsx:107:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/AboutSection.tsx",
                "data-component-line": "107",
                "data-component-file": "AboutSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
                ref: e,
                className: "text-center mb-16",
                children: [w.jsx("h2", {
                    "data-lov-id": "src/components/AboutSection.tsx:108:10",
                    "data-lov-name": "h2",
                    "data-component-path": "src/components/AboutSection.tsx",
                    "data-component-line": "108",
                    "data-component-file": "AboutSection.tsx",
                    "data-component-name": "h2",
                    "data-component-content": "%7B%22text%22%3A%22About%20Me%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-4%22%7D",
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "About Me"
                }), w.jsx("div", {
                    "data-lov-id": "src/components/AboutSection.tsx:109:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/AboutSection.tsx",
                    "data-component-line": "109",
                    "data-component-file": "AboutSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22w-20%20h-1%20bg-primary%20mx-auto%22%7D",
                    className: "w-20 h-1 bg-primary mx-auto"
                })]
            }), w.jsxs("div", {
                "data-lov-id": "src/components/AboutSection.tsx:112:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/AboutSection.tsx",
                "data-component-line": "112",
                "data-component-file": "AboutSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20mb-16%22%7D",
                ref: n,
                className: "max-w-4xl mx-auto mb-16",
                children: [w.jsx("p", {
                    "data-lov-id": "src/components/AboutSection.tsx:113:10",
                    "data-lov-name": "p",
                    "data-component-path": "src/components/AboutSection.tsx",
                    "data-component-line": "113",
                    "data-component-file": "AboutSection.tsx",
                    "data-component-name": "p",
                    "data-component-content": "%7B%22text%22%3A%22I'm%20a%20passionate%20Full%20Stack%20Developer%20with%20expertise%20in%20building%20robust%20applications%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20using%20modern%20technologies.%20With%20a%20strong%20foundation%20in%20both%20frontend%20and%20backend%20development%2C%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20I%20specialize%20in%20creating%20scalable%2C%20high-performance%20solutions%20that%20solve%20real-world%20problems.%22%2C%22className%22%3A%22text-lg%20md%3Atext-xl%20mb-6%22%7D",
                    className: "text-lg md:text-xl mb-6",
                    children: "I'm a passionate Full Stack Developer with expertise in building robust applications using modern technologies. With a strong foundation in both frontend and backend development, I specialize in creating scalable, high-performance solutions that solve real-world problems."
                }), w.jsx("p", {
                    "data-lov-id": "src/components/AboutSection.tsx:118:10",
                    "data-lov-name": "p",
                    "data-component-path": "src/components/AboutSection.tsx",
                    "data-component-line": "118",
                    "data-component-file": "AboutSection.tsx",
                    "data-component-name": "p",
                    "data-component-content": "%7B%22text%22%3A%22My%20journey%20in%20software%20development%20began%20over%205%20years%20ago%2C%20and%20I've%20since%20worked%20with%20diverse%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20technologies%20and%20frameworks%20to%20deliver%20exceptional%20digital%20experiences.%20I'm%20particularly%20focused%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20on%20Java%20and%20Spring%20ecosystem%20for%20backend%20development%2C%20coupled%20with%20modern%20frontend%20frameworks.%22%2C%22className%22%3A%22text-lg%20md%3Atext-xl%20mb-6%22%7D",
                    className: "text-lg md:text-xl mb-6",
                    children: "My journey in software development began over 5 years ago, and I've since worked with diverse technologies and frameworks to deliver exceptional digital experiences. I'm particularly focused on Java and Spring ecosystem for backend development, coupled with modern frontend frameworks."
                }), w.jsx("p", {
                    "data-lov-id": "src/components/AboutSection.tsx:123:10",
                    "data-lov-name": "p",
                    "data-component-path": "src/components/AboutSection.tsx",
                    "data-component-line": "123",
                    "data-component-file": "AboutSection.tsx",
                    "data-component-name": "p",
                    "data-component-content": "%7B%22text%22%3A%22I'm%20driven%20by%20clean%20code%20principles%2C%20test-driven%20development%2C%20and%20continuous%20learning.%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20When%20I'm%20not%20coding%2C%20you'll%20find%20me%20exploring%20new%20technologies%2C%20contributing%20to%20open-source%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20projects%2C%20or%20sharing%20knowledge%20with%20the%20developer%20community.%22%2C%22className%22%3A%22text-lg%20md%3Atext-xl%22%7D",
                    className: "text-lg md:text-xl",
                    children: "I'm driven by clean code principles, test-driven development, and continuous learning. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
                })]
            }), w.jsxs("div", {
                "data-lov-id": "src/components/AboutSection.tsx:130:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/AboutSection.tsx",
                "data-component-line": "130",
                "data-component-file": "AboutSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22mt-16%22%7D",
                ref: o,
                className: "mt-16",
                children: [w.jsx("h3", {
                    "data-lov-id": "src/components/AboutSection.tsx:131:10",
                    "data-lov-name": "h3",
                    "data-component-path": "src/components/AboutSection.tsx",
                    "data-component-line": "131",
                    "data-component-file": "AboutSection.tsx",
                    "data-component-name": "h3",
                    "data-component-content": "%7B%22text%22%3A%22Technical%20Skills%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-center%20mb-10%22%7D",
                    className: "text-2xl font-bold text-center mb-10",
                    children: "Technical Skills"
                }), w.jsx("div", {
                    "data-lov-id": "src/components/AboutSection.tsx:132:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/AboutSection.tsx",
                    "data-component-line": "132",
                    "data-component-file": "AboutSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: r.map((a, i) => w.jsxs("div", {
                        "data-lov-id": "src/components/AboutSection.tsx:134:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/AboutSection.tsx",
                        "data-component-line": "134",
                        "data-component-file": "AboutSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22skill-card%20glass-card%20p-6%20flex%20flex-col%20h-full%22%7D",
                        className: "skill-card glass-card p-6 flex flex-col h-full",
                        children: [w.jsxs("div", {
                            "data-lov-id": "src/components/AboutSection.tsx:138:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/AboutSection.tsx",
                            "data-component-line": "138",
                            "data-component-file": "AboutSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20mb-4%22%7D",
                            className: "flex items-center mb-4",
                            children: [a.icon, w.jsx("h4", {
                                "data-lov-id": "src/components/AboutSection.tsx:140:18",
                                "data-lov-name": "h4",
                                "data-component-path": "src/components/AboutSection.tsx",
                                "data-component-line": "140",
                                "data-component-file": "AboutSection.tsx",
                                "data-component-name": "h4",
                                "data-component-content": "%7B%22className%22%3A%22text-xl%20font-semibold%20ml-3%22%7D",
                                className: "text-xl font-semibold ml-3",
                                children: a.category
                            })]
                        }), w.jsx("ul", {
                            "data-lov-id": "src/components/AboutSection.tsx:142:16",
                            "data-lov-name": "ul",
                            "data-component-path": "src/components/AboutSection.tsx",
                            "data-component-line": "142",
                            "data-component-file": "AboutSection.tsx",
                            "data-component-name": "ul",
                            "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20gap-2%22%7D",
                            className: "flex flex-wrap gap-2",
                            children: a.items.map((s, l) => w.jsx("li", {
                                "data-lov-id": "src/components/AboutSection.tsx:144:20",
                                "data-lov-name": "li",
                                "data-component-path": "src/components/AboutSection.tsx",
                                "data-component-line": "144",
                                "data-component-file": "AboutSection.tsx",
                                "data-component-name": "li",
                                "data-component-content": "%7B%22className%22%3A%22text-sm%20bg-secondary%20px-3%20py-1%20rounded-full%22%7D",
                                className: "text-sm bg-secondary px-3 py-1 rounded-full",
                                children: s
                            }, l))
                        })]
                    }, i))
                })]
            })]
        })]
    })
};
ot.registerPlugin(se);
const Xk = () => {
    const t = S.useRef(null),
        e = S.useRef(null),
        n = S.useRef(null),
        o = [{
            title: "Web Development",
            description: "Creating responsive, modern web applications with cutting-edge technologies that deliver exceptional user experiences.",
            icon: w.jsx(r1, {
                "data-lov-id": "src/components/ServicesSection.tsx:19:12",
                "data-lov-name": "Code",
                "data-component-path": "src/components/ServicesSection.tsx",
                "data-component-line": "19",
                "data-component-file": "ServicesSection.tsx",
                "data-component-name": "Code",
                "data-component-content": "%7B%22className%22%3A%22w-10%20h-10%20text-accent%20glow-accent%22%7D",
                className: "w-10 h-10 text-accent glow-accent"
            })
        }, {
            title: "API Integration",
            description: "Designing and implementing robust, scalable APIs that connect your systems and enable seamless data exchange.",
            icon: w.jsx(NT, {
                "data-lov-id": "src/components/ServicesSection.tsx:25:12",
                "data-lov-name": "Settings",
                "data-component-path": "src/components/ServicesSection.tsx",
                "data-component-line": "25",
                "data-component-file": "ServicesSection.tsx",
                "data-component-name": "Settings",
                "data-component-content": "%7B%22className%22%3A%22w-10%20h-10%20text-accent%20glow-accent%22%7D",
                className: "w-10 h-10 text-accent glow-accent"
            })
        }, {
            title: "Frontend Development",
            description: "Building engaging user interfaces with React, Angular, or Vue.js that are responsive, accessible, and visually appealing.",
            icon: w.jsx(TT, {
                "data-lov-id": "src/components/ServicesSection.tsx:31:12",
                "data-lov-name": "PenTool",
                "data-component-path": "src/components/ServicesSection.tsx",
                "data-component-line": "31",
                "data-component-file": "ServicesSection.tsx",
                "data-component-name": "PenTool",
                "data-component-content": "%7B%22className%22%3A%22w-10%20h-10%20text-accent%20glow-accent%22%7D",
                className: "w-10 h-10 text-accent glow-accent"
            })
        }, {
            title: "Backend Development",
            description: "Creating stable, high-performance backend systems with Java, Spring Framework, and microservices architecture.",
            icon: w.jsx(a1, {
                "data-lov-id": "src/components/ServicesSection.tsx:37:12",
                "data-lov-name": "Database",
                "data-component-path": "src/components/ServicesSection.tsx",
                "data-component-line": "37",
                "data-component-file": "ServicesSection.tsx",
                "data-component-name": "Database",
                "data-component-content": "%7B%22className%22%3A%22w-10%20h-10%20text-accent%20glow-accent%22%7D",
                className: "w-10 h-10 text-accent glow-accent"
            })
        }, {
            title: "CI/CD Implementation",
            description: "Setting up efficient continuous integration and deployment pipelines to automate testing and deployment processes.",
            icon: w.jsx(yT, {
                "data-lov-id": "src/components/ServicesSection.tsx:43:12",
                "data-lov-name": "Cpu",
                "data-component-path": "src/components/ServicesSection.tsx",
                "data-component-line": "43",
                "data-component-file": "ServicesSection.tsx",
                "data-component-name": "Cpu",
                "data-component-content": "%7B%22className%22%3A%22w-10%20h-10%20text-accent%20glow-accent%22%7D",
                className: "w-10 h-10 text-accent glow-accent"
            })
        }, {
            title: "Technical Consultation",
            description: "Providing expert advice on system architecture, technology stack selection, and best practices for your projects.",
            icon: w.jsx(wT, {
                "data-lov-id": "src/components/ServicesSection.tsx:49:12",
                "data-lov-name": "Gauge",
                "data-component-path": "src/components/ServicesSection.tsx",
                "data-component-line": "49",
                "data-component-file": "ServicesSection.tsx",
                "data-component-name": "Gauge",
                "data-component-content": "%7B%22className%22%3A%22w-10%20h-10%20text-accent%20glow-accent%22%7D",
                className: "w-10 h-10 text-accent glow-accent"
            })
        }];
    return S.useEffect(() => {
        if (!t.current) return;
        const r = e.current,
            a = n.current;
        !r || !a || (ot.fromTo(r, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: .8,
            scrollTrigger: {
                trigger: r,
                start: "top 80%"
            }
        }), ot.fromTo(".service-card", {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: .6,
            stagger: .1,
            scrollTrigger: {
                trigger: a,
                start: "top 75%"
            }
        }))
    }, []), w.jsxs("section", {
        "data-lov-id": "src/components/ServicesSection.tsx:93:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/ServicesSection.tsx",
        "data-component-line": "93",
        "data-component-file": "ServicesSection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-20%20md%3Apy-32%20relative%20bg-secondary%2F30%22%7D",
        ref: t,
        id: "services",
        className: "py-20 md:py-32 relative bg-secondary/30",
        children: [w.jsxs("div", {
            "data-lov-id": "src/components/ServicesSection.tsx:99:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/ServicesSection.tsx",
            "data-component-line": "99",
            "data-component-file": "ServicesSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20top-0%20left-0%20w-full%20h-full%20overflow-hidden%22%7D",
            className: "absolute top-0 left-0 w-full h-full overflow-hidden",
            children: [w.jsx("div", {
                "data-lov-id": "src/components/ServicesSection.tsx:100:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/ServicesSection.tsx",
                "data-component-line": "100",
                "data-component-file": "ServicesSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20top-1%2F3%20left-1%2F4%20w-2%2F3%20h-1%2F2%20bg-primary%2F5%20rounded-full%20blur-3xl%22%7D",
                className: "absolute top-1/3 left-1/4 w-2/3 h-1/2 bg-primary/5 rounded-full blur-3xl"
            }), w.jsx("div", {
                "data-lov-id": "src/components/ServicesSection.tsx:101:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/ServicesSection.tsx",
                "data-component-line": "101",
                "data-component-file": "ServicesSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-1%2F4%20right-1%2F3%20w-1%2F2%20h-1%2F3%20bg-accent%2F5%20rounded-full%20blur-3xl%22%7D",
                className: "absolute bottom-1/4 right-1/3 w-1/2 h-1/3 bg-accent/5 rounded-full blur-3xl"
            })]
        }), w.jsxs("div", {
            "data-lov-id": "src/components/ServicesSection.tsx:104:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/ServicesSection.tsx",
            "data-component-line": "104",
            "data-component-file": "ServicesSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20relative%20z-10%22%7D",
            className: "container mx-auto px-4 relative z-10",
            children: [w.jsxs("div", {
                "data-lov-id": "src/components/ServicesSection.tsx:105:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/ServicesSection.tsx",
                "data-component-line": "105",
                "data-component-file": "ServicesSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
                ref: e,
                className: "text-center mb-16",
                children: [w.jsx("h2", {
                    "data-lov-id": "src/components/ServicesSection.tsx:106:10",
                    "data-lov-name": "h2",
                    "data-component-path": "src/components/ServicesSection.tsx",
                    "data-component-line": "106",
                    "data-component-file": "ServicesSection.tsx",
                    "data-component-name": "h2",
                    "data-component-content": "%7B%22text%22%3A%22My%20Services%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-4%22%7D",
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "My Services"
                }), w.jsx("div", {
                    "data-lov-id": "src/components/ServicesSection.tsx:107:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ServicesSection.tsx",
                    "data-component-line": "107",
                    "data-component-file": "ServicesSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22w-20%20h-1%20bg-primary%20mx-auto%20mb-6%22%7D",
                    className: "w-20 h-1 bg-primary mx-auto mb-6"
                }), w.jsx("p", {
                    "data-lov-id": "src/components/ServicesSection.tsx:108:10",
                    "data-lov-name": "p",
                    "data-component-path": "src/components/ServicesSection.tsx",
                    "data-component-line": "108",
                    "data-component-file": "ServicesSection.tsx",
                    "data-component-name": "p",
                    "data-component-content": "%7B%22text%22%3A%22I%20offer%20comprehensive%20development%20services%20tailored%20to%20meet%20your%20project's%20specific%20needs.%5Cn%20%20%20%20%20%20%20%20%20%20%20%20From%20conceptualization%20to%20deployment%2C%20I%20ensure%20high-quality%20deliverables%20at%20every%20step.%22%2C%22className%22%3A%22text-lg%20max-w-3xl%20mx-auto%20text-muted-foreground%22%7D",
                    className: "text-lg max-w-3xl mx-auto text-muted-foreground",
                    children: "I offer comprehensive development services tailored to meet your project's specific needs. From conceptualization to deployment, I ensure high-quality deliverables at every step."
                })]
            }), w.jsx("div", {
                "data-lov-id": "src/components/ServicesSection.tsx:114:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/ServicesSection.tsx",
                "data-component-line": "114",
                "data-component-file": "ServicesSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-8%22%7D",
                ref: n,
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: o.map((r, a) => w.jsxs("div", {
                    "data-lov-id": "src/components/ServicesSection.tsx:116:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ServicesSection.tsx",
                    "data-component-line": "116",
                    "data-component-file": "ServicesSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22service-card%20glass-card%20p-8%20relative%20group%22%7D",
                    className: "service-card glass-card p-8 relative group",
                    children: [w.jsx("div", {
                        "data-lov-id": "src/components/ServicesSection.tsx:120:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ServicesSection.tsx",
                        "data-component-line": "120",
                        "data-component-file": "ServicesSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-br%20from-primary%2F10%20to-accent%2F10%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-300%20rounded-2xl%22%7D",
                        className: "absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    }), w.jsxs("div", {
                        "data-lov-id": "src/components/ServicesSection.tsx:122:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ServicesSection.tsx",
                        "data-component-line": "122",
                        "data-component-file": "ServicesSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22relative%20z-10%22%7D",
                        className: "relative z-10",
                        children: [w.jsx("div", {
                            "data-lov-id": "src/components/ServicesSection.tsx:123:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/ServicesSection.tsx",
                            "data-component-line": "123",
                            "data-component-file": "ServicesSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mb-6%20glass%20inline-flex%20p-4%20rounded-2xl%22%7D",
                            className: "mb-6 glass inline-flex p-4 rounded-2xl",
                            children: r.icon
                        }), w.jsx("h3", {
                            "data-lov-id": "src/components/ServicesSection.tsx:126:16",
                            "data-lov-name": "h3",
                            "data-component-path": "src/components/ServicesSection.tsx",
                            "data-component-line": "126",
                            "data-component-file": "ServicesSection.tsx",
                            "data-component-name": "h3",
                            "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20mb-4%22%7D",
                            className: "text-xl font-bold mb-4",
                            children: r.title
                        }), w.jsx("p", {
                            "data-lov-id": "src/components/ServicesSection.tsx:127:16",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/ServicesSection.tsx",
                            "data-component-line": "127",
                            "data-component-file": "ServicesSection.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22className%22%3A%22text-muted-foreground%22%7D",
                            className: "text-muted-foreground",
                            children: r.description
                        })]
                    })]
                }, a))
            })]
        })]
    })
};
ot.registerPlugin(se);
const qk = () => {
    const t = S.useRef(null),
        e = S.useRef(null),
        n = S.useRef(null),
        o = [{
            company: "Efeson Digitals",
            position: "CEO & Lead Developer",
            period: "Jan 2020 - Present",
            location: "Addis Ababa, Ethiopia",
            description: "Leading a team of developers to create innovative digital solutions for clients across various industries. Responsible for technical architecture, project management, and client relationships.",
            achievements: ["Successfully delivered over 25 projects with 100% client satisfaction", "Grew the company from 2 to 15 team members in 3 years", "Implemented agile methodologies that improved delivery time by 40%", "Developed the award-winning BANCA Platform used by multiple financial institutions"]
        }, {
            company: "EthioTech Institute",
            position: "Senior Software Engineer",
            period: "Mar 2017 - Dec 2019",
            location: "Addis Ababa, Ethiopia",
            description: "Led backend development for enterprise clients using Java and Spring Framework. Designed and implemented RESTful APIs, microservices, and database solutions.",
            achievements: ["Spearheaded the modernization of legacy systems for a major telecom provider", "Reduced system downtime by 85% through architecture improvements", "Mentored junior developers and conducted technical workshops", "Implemented CI/CD pipelines that reduced deployment time from days to hours"]
        }, {
            company: "TechInnovate Solutions",
            position: "Software Developer",
            period: "Jun 2015 - Feb 2017",
            location: "Addis Ababa, Ethiopia",
            description: "Developed and maintained web applications using Java, Spring, and JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
            achievements: ["Contributed to 10+ successful projects for clients in finance and healthcare", "Optimized database queries resulting in 60% faster application performance", "Implemented responsive design principles improving mobile user experience", "Recognized as 'Developer of the Year' in 2016"]
        }];
    return S.useEffect(() => {
        if (!t.current) return;
        const r = e.current,
            a = n.current;
        !r || !a || (ot.fromTo(r, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: .8,
            scrollTrigger: {
                trigger: r,
                start: "top 80%"
            }
        }), ot.fromTo(".timeline-item", {
            opacity: 0,
            x: -30
        }, {
            opacity: 1,
            x: 0,
            duration: .8,
            stagger: .3,
            scrollTrigger: {
                trigger: a,
                start: "top 75%"
            }
        }))
    }, []), w.jsxs("section", {
        "data-lov-id": "src/components/ExperienceSection.tsx:97:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/ExperienceSection.tsx",
        "data-component-line": "97",
        "data-component-file": "ExperienceSection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-20%20md%3Apy-32%20relative%22%7D",
        ref: t,
        id: "experience",
        className: "py-20 md:py-32 relative",
        children: [w.jsx("div", {
            "data-lov-id": "src/components/ExperienceSection.tsx:102:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/ExperienceSection.tsx",
            "data-component-line": "102",
            "data-component-file": "ExperienceSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22absolute%20top-0%20left-1%2F2%20-translate-x-1%2F2%20w-1%20h-full%20bg-gradient-to-b%20from-primary%2F0%20via-primary%2F30%20to-primary%2F0%20hidden%20md%3Ablock%22%7D",
            className: "absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 hidden md:block"
        }), w.jsxs("div", {
            "data-lov-id": "src/components/ExperienceSection.tsx:104:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/ExperienceSection.tsx",
            "data-component-line": "104",
            "data-component-file": "ExperienceSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20relative%20z-10%22%7D",
            className: "container mx-auto px-4 relative z-10",
            children: [w.jsxs("div", {
                "data-lov-id": "src/components/ExperienceSection.tsx:105:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/ExperienceSection.tsx",
                "data-component-line": "105",
                "data-component-file": "ExperienceSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
                ref: e,
                className: "text-center mb-16",
                children: [w.jsx("h2", {
                    "data-lov-id": "src/components/ExperienceSection.tsx:106:10",
                    "data-lov-name": "h2",
                    "data-component-path": "src/components/ExperienceSection.tsx",
                    "data-component-line": "106",
                    "data-component-file": "ExperienceSection.tsx",
                    "data-component-name": "h2",
                    "data-component-content": "%7B%22text%22%3A%22Professional%20Experience%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-4%22%7D",
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "Professional Experience"
                }), w.jsx("div", {
                    "data-lov-id": "src/components/ExperienceSection.tsx:107:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ExperienceSection.tsx",
                    "data-component-line": "107",
                    "data-component-file": "ExperienceSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22w-20%20h-1%20bg-primary%20mx-auto%20mb-6%22%7D",
                    className: "w-20 h-1 bg-primary mx-auto mb-6"
                }), w.jsx("p", {
                    "data-lov-id": "src/components/ExperienceSection.tsx:108:10",
                    "data-lov-name": "p",
                    "data-component-path": "src/components/ExperienceSection.tsx",
                    "data-component-line": "108",
                    "data-component-file": "ExperienceSection.tsx",
                    "data-component-name": "p",
                    "data-component-content": "%7B%22text%22%3A%22My%20journey%20in%20software%20development%20spans%20multiple%20roles%20and%20companies%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20each%20contributing%20to%20my%20growth%20as%20a%20developer%20and%20technical%20leader.%22%2C%22className%22%3A%22text-lg%20max-w-3xl%20mx-auto%20text-muted-foreground%22%7D",
                    className: "text-lg max-w-3xl mx-auto text-muted-foreground",
                    children: "My journey in software development spans multiple roles and companies, each contributing to my growth as a developer and technical leader."
                })]
            }), w.jsx("div", {
                "data-lov-id": "src/components/ExperienceSection.tsx:114:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/ExperienceSection.tsx",
                "data-component-line": "114",
                "data-component-file": "ExperienceSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
                ref: n,
                className: "max-w-4xl mx-auto",
                children: o.map((r, a) => w.jsxs("div", {
                    "data-lov-id": "src/components/ExperienceSection.tsx:116:12",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ExperienceSection.tsx",
                    "data-component-line": "116",
                    "data-component-file": "ExperienceSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%7D",
                    className: `timeline-item relative flex flex-col md:flex-row mb-16 last:mb-0 ${a%2===1?"md:flex-row-reverse":""}`,
                    children: [w.jsx("div", {
                        "data-lov-id": "src/components/ExperienceSection.tsx:122:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ExperienceSection.tsx",
                        "data-component-line": "122",
                        "data-component-file": "ExperienceSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22hidden%20md%3Ablock%20absolute%20top-8%20h-0.5%20w-10%20bg-primary%2F70%20left-%5Bcalc(50%25-10px)%5D%22%7D",
                        className: "hidden md:block absolute top-8 h-0.5 w-10 bg-primary/70 left-[calc(50%-10px)]"
                    }), w.jsx("div", {
                        "data-lov-id": "src/components/ExperienceSection.tsx:124:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ExperienceSection.tsx",
                        "data-component-line": "124",
                        "data-component-file": "ExperienceSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        className: `glass-card p-6 md:p-8 md:w-[calc(50%-2rem)] ${a%2===0?"md:mr-auto":"md:ml-auto"}`,
                        children: w.jsxs("div", {
                            "data-lov-id": "src/components/ExperienceSection.tsx:129:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/ExperienceSection.tsx",
                            "data-component-line": "129",
                            "data-component-file": "ExperienceSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%22%7D",
                            className: "flex flex-col",
                            children: [w.jsx("h3", {
                                "data-lov-id": "src/components/ExperienceSection.tsx:130:18",
                                "data-lov-name": "h3",
                                "data-component-path": "src/components/ExperienceSection.tsx",
                                "data-component-line": "130",
                                "data-component-file": "ExperienceSection.tsx",
                                "data-component-name": "h3",
                                "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-gradient%20mb-1%22%7D",
                                className: "text-xl font-bold text-gradient mb-1",
                                children: r.company
                            }), w.jsx("h4", {
                                "data-lov-id": "src/components/ExperienceSection.tsx:133:18",
                                "data-lov-name": "h4",
                                "data-component-path": "src/components/ExperienceSection.tsx",
                                "data-component-line": "133",
                                "data-component-file": "ExperienceSection.tsx",
                                "data-component-name": "h4",
                                "data-component-content": "%7B%22className%22%3A%22text-lg%20font-semibold%20mb-4%22%7D",
                                className: "text-lg font-semibold mb-4",
                                children: r.position
                            }), w.jsxs("div", {
                                "data-lov-id": "src/components/ExperienceSection.tsx:137:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/ExperienceSection.tsx",
                                "data-component-line": "137",
                                "data-component-file": "ExperienceSection.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-muted-foreground%20mb-2%22%7D",
                                className: "flex items-center text-sm text-muted-foreground mb-2",
                                children: [w.jsx(xT, {
                                    "data-lov-id": "src/components/ExperienceSection.tsx:138:20",
                                    "data-lov-name": "CalendarDays",
                                    "data-component-path": "src/components/ExperienceSection.tsx",
                                    "data-component-line": "138",
                                    "data-component-file": "ExperienceSection.tsx",
                                    "data-component-name": "CalendarDays",
                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                    className: "h-4 w-4 mr-2"
                                }), w.jsx("span", {
                                    "data-lov-id": "src/components/ExperienceSection.tsx:139:20",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/ExperienceSection.tsx",
                                    "data-component-line": "139",
                                    "data-component-file": "ExperienceSection.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%7D",
                                    children: r.period
                                })]
                            }), w.jsxs("div", {
                                "data-lov-id": "src/components/ExperienceSection.tsx:142:18",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/ExperienceSection.tsx",
                                "data-component-line": "142",
                                "data-component-file": "ExperienceSection.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-muted-foreground%20mb-4%22%7D",
                                className: "flex items-center text-sm text-muted-foreground mb-4",
                                children: [w.jsx(l1, {
                                    "data-lov-id": "src/components/ExperienceSection.tsx:143:20",
                                    "data-lov-name": "MapPin",
                                    "data-component-path": "src/components/ExperienceSection.tsx",
                                    "data-component-line": "143",
                                    "data-component-file": "ExperienceSection.tsx",
                                    "data-component-name": "MapPin",
                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                    className: "h-4 w-4 mr-2"
                                }), w.jsx("span", {
                                    "data-lov-id": "src/components/ExperienceSection.tsx:144:20",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/ExperienceSection.tsx",
                                    "data-component-line": "144",
                                    "data-component-file": "ExperienceSection.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%7D",
                                    children: r.location
                                })]
                            }), w.jsx("p", {
                                "data-lov-id": "src/components/ExperienceSection.tsx:147:18",
                                "data-lov-name": "p",
                                "data-component-path": "src/components/ExperienceSection.tsx",
                                "data-component-line": "147",
                                "data-component-file": "ExperienceSection.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%22className%22%3A%22mb-4%22%7D",
                                className: "mb-4",
                                children: r.description
                            }), w.jsx("h5", {
                                "data-lov-id": "src/components/ExperienceSection.tsx:149:18",
                                "data-lov-name": "h5",
                                "data-component-path": "src/components/ExperienceSection.tsx",
                                "data-component-line": "149",
                                "data-component-file": "ExperienceSection.tsx",
                                "data-component-name": "h5",
                                "data-component-content": "%7B%22text%22%3A%22Key%20Achievements%3A%22%2C%22className%22%3A%22text-md%20font-semibold%20mb-2%22%7D",
                                className: "text-md font-semibold mb-2",
                                children: "Key Achievements:"
                            }), w.jsx("ul", {
                                "data-lov-id": "src/components/ExperienceSection.tsx:150:18",
                                "data-lov-name": "ul",
                                "data-component-path": "src/components/ExperienceSection.tsx",
                                "data-component-line": "150",
                                "data-component-file": "ExperienceSection.tsx",
                                "data-component-name": "ul",
                                "data-component-content": "%7B%22className%22%3A%22list-disc%20list-inside%20text-sm%20space-y-1%22%7D",
                                className: "list-disc list-inside text-sm space-y-1",
                                children: r.achievements.map((i, s) => w.jsx("li", {
                                    "data-lov-id": "src/components/ExperienceSection.tsx:152:22",
                                    "data-lov-name": "li",
                                    "data-component-path": "src/components/ExperienceSection.tsx",
                                    "data-component-line": "152",
                                    "data-component-file": "ExperienceSection.tsx",
                                    "data-component-name": "li",
                                    "data-component-content": "%7B%7D",
                                    children: i
                                }, s))
                            })]
                        })
                    }), w.jsx("div", {
                        "data-lov-id": "src/components/ExperienceSection.tsx:158:14",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ExperienceSection.tsx",
                        "data-component-line": "158",
                        "data-component-file": "ExperienceSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22hidden%20md%3Aflex%20absolute%20left-1%2F2%20-translate-x-1%2F2%20top-8%20-translate-y-1%2F2%20w-6%20h-6%20rounded-full%20bg-primary%20items-center%20justify-center%22%7D",
                        className: "hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 -translate-y-1/2 w-6 h-6 rounded-full bg-primary items-center justify-center",
                        children: w.jsx("div", {
                            "data-lov-id": "src/components/ExperienceSection.tsx:159:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/ExperienceSection.tsx",
                            "data-component-line": "159",
                            "data-component-file": "ExperienceSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22w-3%20h-3%20rounded-full%20bg-background%22%7D",
                            className: "w-3 h-3 rounded-full bg-background"
                        })
                    })]
                }, a))
            })]
        })]
    })
};
ot.registerPlugin(se);
const Kk = () => {
        const t = S.useRef(null),
            e = S.useRef(null),
            n = S.useRef(null),
            [o, r] = S.useState(0),
            a = [{
                title: "BANCA Platform",
                description: "A comprehensive banking platform with customer portal, transaction management, and admin dashboard. Built with Spring Boot, React, and PostgreSQL.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
                tags: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"]
            }, {
                title: "Legacy System Modernization",
                description: "Transformed a monolithic legacy system into a modern microservices architecture, improving scalability and reducing maintenance costs.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
                tags: ["Microservices", "Java", "Spring Cloud", "Kubernetes", "React"]
            }, {
                title: "Efeson Digital Solutions",
                description: "Built a scalable e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
                tags: ["Angular", "Node.js", "MongoDB", "Redis", "AWS"]
            }, {
                title: "Healthcare Management System",
                description: "Developed a comprehensive healthcare management system with patient records, appointment scheduling, and billing integration.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000",
                tags: ["Java", "Spring", "React", "MySQL", "Azure"]
            }, {
                title: "AI-Powered Analytics Dashboard",
                description: "Created an analytics platform with machine learning capabilities to provide business insights and predictive analytics.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
                tags: ["Python", "TensorFlow", "React", "D3.js", "AWS"]
            }],
            i = () => {
                r(l => l === a.length - 1 ? 0 : l + 1)
            },
            s = () => {
                r(l => l === 0 ? a.length - 1 : l - 1)
            };
        return S.useEffect(() => {
            if (!t.current) return;
            const l = e.current,
                c = n.current;
            !l || !c || (ot.fromTo(l, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: .8,
                scrollTrigger: {
                    trigger: l,
                    start: "top 80%"
                }
            }), ot.fromTo(c, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: .8,
                scrollTrigger: {
                    trigger: c,
                    start: "top 70%"
                }
            }))
        }, []), S.useEffect(() => {
            const l = document.querySelector(".project-card");
            l && ot.fromTo(l, {
                opacity: 0,
                scale: .95
            }, {
                opacity: 1,
                scale: 1,
                duration: .4,
                ease: "power2.out"
            })
        }, [o]), w.jsxs("section", {
            "data-lov-id": "src/components/ProjectsSection.tsx:113:4",
            "data-lov-name": "section",
            "data-component-path": "src/components/ProjectsSection.tsx",
            "data-component-line": "113",
            "data-component-file": "ProjectsSection.tsx",
            "data-component-name": "section",
            "data-component-content": "%7B%22className%22%3A%22py-20%20md%3Apy-32%20relative%20bg-gradient-to-b%20from-background%20to-secondary%2F30%22%7D",
            ref: t,
            id: "projects",
            className: "py-20 md:py-32 relative bg-gradient-to-b from-background to-secondary/30",
            children: [w.jsxs("div", {
                "data-lov-id": "src/components/ProjectsSection.tsx:119:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/ProjectsSection.tsx",
                "data-component-line": "119",
                "data-component-file": "ProjectsSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20overflow-hidden%22%7D",
                className: "absolute inset-0 overflow-hidden",
                children: [w.jsx("div", {
                    "data-lov-id": "src/components/ProjectsSection.tsx:120:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ProjectsSection.tsx",
                    "data-component-line": "120",
                    "data-component-file": "ProjectsSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22absolute%20top-1%2F4%20left-1%2F5%20w-3%2F4%20h-1%2F2%20bg-primary%2F5%20rounded-full%20blur-3xl%22%7D",
                    className: "absolute top-1/4 left-1/5 w-3/4 h-1/2 bg-primary/5 rounded-full blur-3xl"
                }), w.jsx("div", {
                    "data-lov-id": "src/components/ProjectsSection.tsx:121:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ProjectsSection.tsx",
                    "data-component-line": "121",
                    "data-component-file": "ProjectsSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-1%2F4%20right-1%2F4%20w-1%2F2%20h-1%2F2%20bg-accent%2F5%20rounded-full%20blur-3xl%22%7D",
                    className: "absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl"
                })]
            }), w.jsxs("div", {
                "data-lov-id": "src/components/ProjectsSection.tsx:124:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/ProjectsSection.tsx",
                "data-component-line": "124",
                "data-component-file": "ProjectsSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20relative%20z-10%22%7D",
                className: "container mx-auto px-4 relative z-10",
                children: [w.jsxs("div", {
                    "data-lov-id": "src/components/ProjectsSection.tsx:125:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ProjectsSection.tsx",
                    "data-component-line": "125",
                    "data-component-file": "ProjectsSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
                    ref: e,
                    className: "text-center mb-16",
                    children: [w.jsx("h2", {
                        "data-lov-id": "src/components/ProjectsSection.tsx:126:10",
                        "data-lov-name": "h2",
                        "data-component-path": "src/components/ProjectsSection.tsx",
                        "data-component-line": "126",
                        "data-component-file": "ProjectsSection.tsx",
                        "data-component-name": "h2",
                        "data-component-content": "%7B%22text%22%3A%22Featured%20Projects%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-4%22%7D",
                        className: "text-3xl md:text-4xl font-bold mb-4",
                        children: "Featured Projects"
                    }), w.jsx("div", {
                        "data-lov-id": "src/components/ProjectsSection.tsx:127:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ProjectsSection.tsx",
                        "data-component-line": "127",
                        "data-component-file": "ProjectsSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22w-20%20h-1%20bg-primary%20mx-auto%20mb-6%22%7D",
                        className: "w-20 h-1 bg-primary mx-auto mb-6"
                    }), w.jsx("p", {
                        "data-lov-id": "src/components/ProjectsSection.tsx:128:10",
                        "data-lov-name": "p",
                        "data-component-path": "src/components/ProjectsSection.tsx",
                        "data-component-line": "128",
                        "data-component-file": "ProjectsSection.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22text%22%3A%22Here%20are%20some%20of%20the%20projects%20I've%20worked%20on%20that%20showcase%20my%20skills%20and%20expertise%5Cn%20%20%20%20%20%20%20%20%20%20%20%20in%20building%20robust%2C%20scalable%20applications.%22%2C%22className%22%3A%22text-lg%20max-w-3xl%20mx-auto%20text-muted-foreground%22%7D",
                        className: "text-lg max-w-3xl mx-auto text-muted-foreground",
                        children: "Here are some of the projects I've worked on that showcase my skills and expertise in building robust, scalable applications."
                    })]
                }), w.jsxs("div", {
                    "data-lov-id": "src/components/ProjectsSection.tsx:134:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ProjectsSection.tsx",
                    "data-component-line": "134",
                    "data-component-file": "ProjectsSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22max-w-6xl%20mx-auto%22%7D",
                    ref: n,
                    className: "max-w-6xl mx-auto",
                    children: [w.jsx("div", {
                        "data-lov-id": "src/components/ProjectsSection.tsx:135:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ProjectsSection.tsx",
                        "data-component-line": "135",
                        "data-component-file": "ProjectsSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22project-card%20glass-card%20p-4%20md%3Ap-8%20mb-10%22%7D",
                        className: "project-card glass-card p-4 md:p-8 mb-10",
                        children: w.jsxs("div", {
                            "data-lov-id": "src/components/ProjectsSection.tsx:136:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/ProjectsSection.tsx",
                            "data-component-line": "136",
                            "data-component-file": "ProjectsSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-2%20gap-8%22%7D",
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                            children: [w.jsxs("div", {
                                "data-lov-id": "src/components/ProjectsSection.tsx:137:14",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/ProjectsSection.tsx",
                                "data-component-line": "137",
                                "data-component-file": "ProjectsSection.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22order-2%20lg%3Aorder-1%20flex%20flex-col%20justify-center%22%7D",
                                className: "order-2 lg:order-1 flex flex-col justify-center",
                                children: [w.jsx("h3", {
                                    "data-lov-id": "src/components/ProjectsSection.tsx:138:16",
                                    "data-lov-name": "h3",
                                    "data-component-path": "src/components/ProjectsSection.tsx",
                                    "data-component-line": "138",
                                    "data-component-file": "ProjectsSection.tsx",
                                    "data-component-name": "h3",
                                    "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20mb-4%20text-gradient%22%7D",
                                    className: "text-2xl font-bold mb-4 text-gradient",
                                    children: a[o].title
                                }), w.jsx("p", {
                                    "data-lov-id": "src/components/ProjectsSection.tsx:141:16",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/components/ProjectsSection.tsx",
                                    "data-component-line": "141",
                                    "data-component-file": "ProjectsSection.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22className%22%3A%22mb-6%22%7D",
                                    className: "mb-6",
                                    children: a[o].description
                                }), w.jsx("div", {
                                    "data-lov-id": "src/components/ProjectsSection.tsx:142:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ProjectsSection.tsx",
                                    "data-component-line": "142",
                                    "data-component-file": "ProjectsSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20gap-2%20mb-8%22%7D",
                                    className: "flex flex-wrap gap-2 mb-8",
                                    children: a[o].tags.map((l, c) => w.jsx("span", {
                                        "data-lov-id": "src/components/ProjectsSection.tsx:144:20",
                                        "data-lov-name": "span",
                                        "data-component-path": "src/components/ProjectsSection.tsx",
                                        "data-component-line": "144",
                                        "data-component-file": "ProjectsSection.tsx",
                                        "data-component-name": "span",
                                        "data-component-content": "%7B%22className%22%3A%22bg-secondary%20px-3%20py-1%20text-sm%20rounded-full%22%7D",
                                        className: "bg-secondary px-3 py-1 text-sm rounded-full",
                                        children: l
                                    }, c))
                                })]
                            }), w.jsx("div", {
                                "data-lov-id": "src/components/ProjectsSection.tsx:153:14",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/ProjectsSection.tsx",
                                "data-component-line": "153",
                                "data-component-file": "ProjectsSection.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22order-1%20lg%3Aorder-2%22%7D",
                                className: "order-1 lg:order-2",
                                children: w.jsx("div", {
                                    "data-lov-id": "src/components/ProjectsSection.tsx:154:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ProjectsSection.tsx",
                                    "data-component-line": "154",
                                    "data-component-file": "ProjectsSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22relative%20h-64%20md%3Ah-80%20w-full%20overflow-hidden%20rounded-xl%22%7D",
                                    className: "relative h-64 md:h-80 w-full overflow-hidden rounded-xl",
                                    children: w.jsx("img", {
                                        "data-lov-id": "src/components/ProjectsSection.tsx:155:18",
                                        "data-lov-name": "img",
                                        "data-component-path": "src/components/ProjectsSection.tsx",
                                        "data-component-line": "155",
                                        "data-component-file": "ProjectsSection.tsx",
                                        "data-component-name": "img",
                                        "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20object-center%20transition-transform%20duration-500%20hover%3Ascale-110%22%7D",
                                        src: a[o].image,
                                        alt: a[o].title,
                                        className: "w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                                    })
                                })
                            })]
                        })
                    }), w.jsxs("div", {
                        "data-lov-id": "src/components/ProjectsSection.tsx:165:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ProjectsSection.tsx",
                        "data-component-line": "165",
                        "data-component-file": "ProjectsSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20justify-center%20items-center%20space-x-4%22%7D",
                        className: "flex justify-center items-center space-x-4",
                        children: [w.jsxs(so, {
                            "data-lov-id": "src/components/ProjectsSection.tsx:166:12",
                            "data-lov-name": "Button",
                            "data-component-path": "src/components/ProjectsSection.tsx",
                            "data-component-line": "166",
                            "data-component-file": "ProjectsSection.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%22className%22%3A%22rounded-full%20hover%3Abg-primary%20hover%3Atext-primary-foreground%20transition-all%22%7D",
                            variant: "outline",
                            size: "icon",
                            onClick: s,
                            className: "rounded-full hover:bg-primary hover:text-primary-foreground transition-all",
                            children: [w.jsx(vT, {
                                "data-lov-id": "src/components/ProjectsSection.tsx:172:14",
                                "data-lov-name": "ArrowLeft",
                                "data-component-path": "src/components/ProjectsSection.tsx",
                                "data-component-line": "172",
                                "data-component-file": "ProjectsSection.tsx",
                                "data-component-name": "ArrowLeft",
                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                                className: "h-5 w-5"
                            }), w.jsx("span", {
                                "data-lov-id": "src/components/ProjectsSection.tsx:173:14",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/ProjectsSection.tsx",
                                "data-component-line": "173",
                                "data-component-file": "ProjectsSection.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22Previous%20project%22%2C%22className%22%3A%22sr-only%22%7D",
                                className: "sr-only",
                                children: "Previous project"
                            })]
                        }), w.jsx("div", {
                            "data-lov-id": "src/components/ProjectsSection.tsx:176:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/ProjectsSection.tsx",
                            "data-component-line": "176",
                            "data-component-file": "ProjectsSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22flex%20space-x-2%22%7D",
                            className: "flex space-x-2",
                            children: a.map((l, c) => w.jsx("button", {
                                "data-lov-id": "src/components/ProjectsSection.tsx:178:16",
                                "data-lov-name": "button",
                                "data-component-path": "src/components/ProjectsSection.tsx",
                                "data-component-line": "178",
                                "data-component-file": "ProjectsSection.tsx",
                                "data-component-name": "button",
                                "data-component-content": "%7B%7D",
                                onClick: () => r(c),
                                className: `w-3 h-3 rounded-full transition-all ${c===o?"bg-primary scale-125":"bg-primary/30"}`,
                                "aria-label": `Go to project ${c+1}`
                            }, c))
                        }), w.jsxs(so, {
                            "data-lov-id": "src/components/ProjectsSection.tsx:191:12",
                            "data-lov-name": "Button",
                            "data-component-path": "src/components/ProjectsSection.tsx",
                            "data-component-line": "191",
                            "data-component-file": "ProjectsSection.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%22className%22%3A%22rounded-full%20hover%3Abg-primary%20hover%3Atext-primary-foreground%20transition-all%22%7D",
                            variant: "outline",
                            size: "icon",
                            onClick: i,
                            className: "rounded-full hover:bg-primary hover:text-primary-foreground transition-all",
                            children: [w.jsx(o1, {
                                "data-lov-id": "src/components/ProjectsSection.tsx:197:14",
                                "data-lov-name": "ArrowRight",
                                "data-component-path": "src/components/ProjectsSection.tsx",
                                "data-component-line": "197",
                                "data-component-file": "ProjectsSection.tsx",
                                "data-component-name": "ArrowRight",
                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                                className: "h-5 w-5"
                            }), w.jsx("span", {
                                "data-lov-id": "src/components/ProjectsSection.tsx:198:14",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/ProjectsSection.tsx",
                                "data-component-line": "198",
                                "data-component-file": "ProjectsSection.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22Next%20project%22%2C%22className%22%3A%22sr-only%22%7D",
                                className: "sr-only",
                                children: "Next project"
                            })]
                        })]
                    })]
                })]
            })]
        })
    },
    tc = {
        _origin: "https://api.emailjs.com"
    },
    Zk = (t, e = "https://api.emailjs.com") => {
        tc._userID = t, tc._origin = e
    },
    V_ = (t, e, n) => {
        if (!t) throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
        if (!e) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!n) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
        return !0
    };
class qv {
    constructor(e) {
        this.status = e.status, this.text = e.responseText
    }
}
const W_ = (t, e, n = {}) => new Promise((o, r) => {
        const a = new XMLHttpRequest;
        a.addEventListener("load", ({
            target: i
        }) => {
            const s = new qv(i);
            s.status === 200 || s.text === "OK" ? o(s) : r(s)
        }), a.addEventListener("error", ({
            target: i
        }) => {
            r(new qv(i))
        }), a.open("POST", tc._origin + t, !0), Object.keys(n).forEach(i => {
            a.setRequestHeader(i, n[i])
        }), a.send(e)
    }),
    Jk = (t, e, n, o) => {
        const r = o || tc._userID;
        return V_(r, t, e), W_("/api/v1.0/email/send", JSON.stringify({
            lib_version: "3.2.0",
            user_id: r,
            service_id: t,
            template_id: e,
            template_params: n
        }), {
            "Content-type": "application/json"
        })
    },
    e7 = t => {
        let e;
        if (typeof t == "string" ? e = document.querySelector(t) : e = t, !e || e.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
        return e
    },
    t7 = (t, e, n, o) => {
        const r = o || tc._userID,
            a = e7(n);
        V_(r, t, e);
        const i = new FormData(a);
        return i.append("lib_version", "3.2.0"), i.append("service_id", t), i.append("template_id", e), i.append("user_id", r), W_("/api/v1.0/email/send-form", i)
    },
    n7 = {
        init: Zk,
        send: Jk,
        sendForm: t7
    };
ot.registerPlugin(se);
const Kv = "service_jxnddms",
    Zv = "template_qo2d5xu",
    Jv = "7MuJJ8-sp_NphQIbI",
    o7 = () => {
        const {
            toast: t
        } = Cy(), e = S.useRef(null), n = S.useRef(null), o = S.useRef(null), r = S.useRef(null), [a, i] = S.useState({
            name: "",
            email: "",
            subject: "",
            message: ""
        }), [s, l] = S.useState(!1), c = p => {
            const {
                name: d,
                value: f
            } = p.target;
            i(g => ({ ...g,
                [d]: f
            }))
        }, u = async p => {
            p.preventDefault(), l(!0);
            try {
                const d = {
                    name: a.name,
                    email: a.email,
                    subject: a.subject,
                    message: a.message,
                    to_email: "gedeonzewdu@gmail.com"
                };
                console.log("Sending email with params:", {
                    serviceId: Kv,
                    templateId: Zv,
                    userId: Jv,
                    templateParams: d
                }), await n7.send(Kv, Zv, d, Jv), t({
                    title: "Message sent!",
                    description: "Thanks for reaching out. I'll get back to you soon."
                }), i({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                })
            } catch (d) {
                console.error("Error sending email:", d), t({
                    title: "Error sending message",
                    description: "There was a problem sending your message. Please try again later.",
                    variant: "destructive"
                })
            } finally {
                l(!1)
            }
        };
        return S.useEffect(() => {
            if (!e.current) return;
            const p = n.current,
                d = o.current,
                f = r.current;
            !p || !d || !f || (ot.fromTo(p, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: .8,
                scrollTrigger: {
                    trigger: p,
                    start: "top 80%"
                }
            }), ot.fromTo(d, {
                opacity: 0,
                x: -30
            }, {
                opacity: 1,
                x: 0,
                duration: .8,
                scrollTrigger: {
                    trigger: d,
                    start: "top 75%"
                }
            }), ot.fromTo(f, {
                opacity: 0,
                x: 30
            }, {
                opacity: 1,
                x: 0,
                duration: .8,
                scrollTrigger: {
                    trigger: f,
                    start: "top 75%"
                }
            }))
        }, []), w.jsxs("section", {
            "data-lov-id": "src/components/ContactSection.tsx:148:4",
            "data-lov-name": "section",
            "data-component-path": "src/components/ContactSection.tsx",
            "data-component-line": "148",
            "data-component-file": "ContactSection.tsx",
            "data-component-name": "section",
            "data-component-content": "%7B%22className%22%3A%22py-20%20md%3Apy-32%20relative%22%7D",
            ref: e,
            id: "contact",
            className: "py-20 md:py-32 relative",
            children: [w.jsx("div", {
                "data-lov-id": "src/components/ContactSection.tsx:150:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/ContactSection.tsx",
                "data-component-line": "150",
                "data-component-file": "ContactSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20overflow-hidden%22%7D",
                className: "absolute inset-0 overflow-hidden",
                children: w.jsx("div", {
                    "data-lov-id": "src/components/ContactSection.tsx:151:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ContactSection.tsx",
                    "data-component-line": "151",
                    "data-component-file": "ContactSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-0%20left-0%20w-full%20h-1%2F2%20bg-gradient-to-t%20from-primary%2F10%20to-transparent%22%7D",
                    className: "absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent"
                })
            }), w.jsxs("div", {
                "data-lov-id": "src/components/ContactSection.tsx:154:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/ContactSection.tsx",
                "data-component-line": "154",
                "data-component-file": "ContactSection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20relative%20z-10%22%7D",
                className: "container mx-auto px-4 relative z-10",
                children: [w.jsxs("div", {
                    "data-lov-id": "src/components/ContactSection.tsx:155:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ContactSection.tsx",
                    "data-component-line": "155",
                    "data-component-file": "ContactSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22text-center%20mb-16%22%7D",
                    ref: n,
                    className: "text-center mb-16",
                    children: [w.jsx("h2", {
                        "data-lov-id": "src/components/ContactSection.tsx:156:10",
                        "data-lov-name": "h2",
                        "data-component-path": "src/components/ContactSection.tsx",
                        "data-component-line": "156",
                        "data-component-file": "ContactSection.tsx",
                        "data-component-name": "h2",
                        "data-component-content": "%7B%22text%22%3A%22Get%20In%20Touch%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-4%22%7D",
                        className: "text-3xl md:text-4xl font-bold mb-4",
                        children: "Get In Touch"
                    }), w.jsx("div", {
                        "data-lov-id": "src/components/ContactSection.tsx:159:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ContactSection.tsx",
                        "data-component-line": "159",
                        "data-component-file": "ContactSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22w-20%20h-1%20bg-primary%20mx-auto%20mb-6%22%7D",
                        className: "w-20 h-1 bg-primary mx-auto mb-6"
                    }), w.jsx("p", {
                        "data-lov-id": "src/components/ContactSection.tsx:160:10",
                        "data-lov-name": "p",
                        "data-component-path": "src/components/ContactSection.tsx",
                        "data-component-line": "160",
                        "data-component-file": "ContactSection.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22text%22%3A%22Have%20a%20project%20in%20mind%20or%20want%20to%20discuss%20potential%20opportunities%3F%5Cn%20%20%20%20%20%20%20%20%20%20%20%20I'd%20love%20to%20hear%20from%20you.%20Reach%20out%20and%20let's%20create%20something%20amazing%20together.%22%2C%22className%22%3A%22text-lg%20max-w-3xl%20mx-auto%20text-muted-foreground%22%7D",
                        className: "text-lg max-w-3xl mx-auto text-muted-foreground",
                        children: "Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Reach out and let's create something amazing together."
                    })]
                }), w.jsxs("div", {
                    "data-lov-id": "src/components/ContactSection.tsx:166:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ContactSection.tsx",
                    "data-component-line": "166",
                    "data-component-file": "ContactSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-2%20gap-12%20max-w-6xl%20mx-auto%22%7D",
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto",
                    children: [w.jsx("div", {
                        "data-lov-id": "src/components/ContactSection.tsx:167:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ContactSection.tsx",
                        "data-component-line": "167",
                        "data-component-file": "ContactSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: w.jsx("form", {
                            "data-lov-id": "src/components/ContactSection.tsx:168:12",
                            "data-lov-name": "form",
                            "data-component-path": "src/components/ContactSection.tsx",
                            "data-component-line": "168",
                            "data-component-file": "ContactSection.tsx",
                            "data-component-name": "form",
                            "data-component-content": "%7B%22className%22%3A%22glass-card%20p-8%22%7D",
                            ref: o,
                            onSubmit: u,
                            className: "glass-card p-8",
                            children: w.jsxs("div", {
                                "data-lov-id": "src/components/ContactSection.tsx:169:14",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/ContactSection.tsx",
                                "data-component-line": "169",
                                "data-component-file": "ContactSection.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20gap-6%22%7D",
                                className: "grid grid-cols-1 gap-6",
                                children: [w.jsxs("div", {
                                    "data-lov-id": "src/components/ContactSection.tsx:170:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "170",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [w.jsx("label", {
                                        "data-lov-id": "src/components/ContactSection.tsx:171:18",
                                        "data-lov-name": "label",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "171",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "label",
                                        "data-component-content": "%7B%22text%22%3A%22Your%20Name%22%2C%22className%22%3A%22block%20text-sm%20font-medium%20mb-2%22%7D",
                                        htmlFor: "name",
                                        className: "block text-sm font-medium mb-2",
                                        children: "Your Name"
                                    }), w.jsx("input", {
                                        "data-lov-id": "src/components/ContactSection.tsx:177:18",
                                        "data-lov-name": "input",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "177",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "input",
                                        "data-component-content": "%7B%22placeholder%22%3A%22John%20Doe%22%2C%22className%22%3A%22w-full%20p-3%20rounded-lg%20bg-secondary%2F50%20border%20border-border%20focus%3Aring-2%20focus%3Aring-primary%2F50%20focus%3Aborder-primary%20outline-none%20transition%22%7D",
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        value: a.name,
                                        onChange: c,
                                        required: !0,
                                        className: "w-full p-3 rounded-lg bg-secondary/50 border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition",
                                        placeholder: "John Doe"
                                    })]
                                }), w.jsxs("div", {
                                    "data-lov-id": "src/components/ContactSection.tsx:189:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "189",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [w.jsx("label", {
                                        "data-lov-id": "src/components/ContactSection.tsx:190:18",
                                        "data-lov-name": "label",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "190",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "label",
                                        "data-component-content": "%7B%22text%22%3A%22Your%20Email%22%2C%22className%22%3A%22block%20text-sm%20font-medium%20mb-2%22%7D",
                                        htmlFor: "email",
                                        className: "block text-sm font-medium mb-2",
                                        children: "Your Email"
                                    }), w.jsx("input", {
                                        "data-lov-id": "src/components/ContactSection.tsx:196:18",
                                        "data-lov-name": "input",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "196",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "input",
                                        "data-component-content": "%7B%22placeholder%22%3A%22john%40example.com%22%2C%22className%22%3A%22w-full%20p-3%20rounded-lg%20bg-secondary%2F50%20border%20border-border%20focus%3Aring-2%20focus%3Aring-primary%2F50%20focus%3Aborder-primary%20outline-none%20transition%22%7D",
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        value: a.email,
                                        onChange: c,
                                        required: !0,
                                        className: "w-full p-3 rounded-lg bg-secondary/50 border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition",
                                        placeholder: "john@example.com"
                                    })]
                                }), w.jsxs("div", {
                                    "data-lov-id": "src/components/ContactSection.tsx:208:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "208",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [w.jsx("label", {
                                        "data-lov-id": "src/components/ContactSection.tsx:209:18",
                                        "data-lov-name": "label",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "209",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "label",
                                        "data-component-content": "%7B%22text%22%3A%22Subject%22%2C%22className%22%3A%22block%20text-sm%20font-medium%20mb-2%22%7D",
                                        htmlFor: "subject",
                                        className: "block text-sm font-medium mb-2",
                                        children: "Subject"
                                    }), w.jsx("input", {
                                        "data-lov-id": "src/components/ContactSection.tsx:215:18",
                                        "data-lov-name": "input",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "215",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "input",
                                        "data-component-content": "%7B%22placeholder%22%3A%22Project%20Inquiry%22%2C%22className%22%3A%22w-full%20p-3%20rounded-lg%20bg-secondary%2F50%20border%20border-border%20focus%3Aring-2%20focus%3Aring-primary%2F50%20focus%3Aborder-primary%20outline-none%20transition%22%7D",
                                        type: "text",
                                        id: "subject",
                                        name: "subject",
                                        value: a.subject,
                                        onChange: c,
                                        required: !0,
                                        className: "w-full p-3 rounded-lg bg-secondary/50 border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition",
                                        placeholder: "Project Inquiry"
                                    })]
                                }), w.jsxs("div", {
                                    "data-lov-id": "src/components/ContactSection.tsx:227:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "227",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [w.jsx("label", {
                                        "data-lov-id": "src/components/ContactSection.tsx:228:18",
                                        "data-lov-name": "label",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "228",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "label",
                                        "data-component-content": "%7B%22text%22%3A%22Message%22%2C%22className%22%3A%22block%20text-sm%20font-medium%20mb-2%22%7D",
                                        htmlFor: "message",
                                        className: "block text-sm font-medium mb-2",
                                        children: "Message"
                                    }), w.jsx("textarea", {
                                        "data-lov-id": "src/components/ContactSection.tsx:234:18",
                                        "data-lov-name": "textarea",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "234",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "textarea",
                                        "data-component-content": "%7B%22placeholder%22%3A%22Your%20message%20here...%22%2C%22className%22%3A%22w-full%20p-3%20rounded-lg%20bg-secondary%2F50%20border%20border-border%20focus%3Aring-2%20focus%3Aring-primary%2F50%20focus%3Aborder-primary%20outline-none%20transition%20resize-none%22%7D",
                                        id: "message",
                                        name: "message",
                                        value: a.message,
                                        onChange: c,
                                        required: !0,
                                        rows: 5,
                                        className: "w-full p-3 rounded-lg bg-secondary/50 border border-border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition resize-none",
                                        placeholder: "Your message here..."
                                    })]
                                }), w.jsx("div", {
                                    "data-lov-id": "src/components/ContactSection.tsx:246:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "246",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: w.jsx(so, {
                                        "data-lov-id": "src/components/ContactSection.tsx:247:18",
                                        "data-lov-name": "Button",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "247",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "Button",
                                        "data-component-content": "%7B%22className%22%3A%22w-full%20bg-gradient-to-r%20from-primary%20to-accent%20text-white%20hover%3Ashadow-lg%20hover%3Ashadow-primary%2F25%20transition-all%20py-6%22%7D",
                                        type: "submit",
                                        disabled: s,
                                        className: "w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 transition-all py-6",
                                        children: s ? "Sending..." : "Send Message"
                                    })
                                })]
                            })
                        })
                    }), w.jsxs("div", {
                        "data-lov-id": "src/components/ContactSection.tsx:259:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/ContactSection.tsx",
                        "data-component-line": "259",
                        "data-component-file": "ContactSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%22%7D",
                        ref: r,
                        className: "flex flex-col",
                        children: [w.jsxs("div", {
                            "data-lov-id": "src/components/ContactSection.tsx:260:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/ContactSection.tsx",
                            "data-component-line": "260",
                            "data-component-file": "ContactSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22glass-card%20p-8%20mb-8%22%7D",
                            className: "glass-card p-8 mb-8",
                            children: [w.jsx("h3", {
                                "data-lov-id": "src/components/ContactSection.tsx:261:14",
                                "data-lov-name": "h3",
                                "data-component-path": "src/components/ContactSection.tsx",
                                "data-component-line": "261",
                                "data-component-file": "ContactSection.tsx",
                                "data-component-name": "h3",
                                "data-component-content": "%7B%22text%22%3A%22Contact%20Information%22%2C%22className%22%3A%22text-xl%20font-bold%20mb-6%22%7D",
                                className: "text-xl font-bold mb-6",
                                children: "Contact Information"
                            }), w.jsxs("div", {
                                "data-lov-id": "src/components/ContactSection.tsx:262:14",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/ContactSection.tsx",
                                "data-component-line": "262",
                                "data-component-file": "ContactSection.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                                className: "space-y-4",
                                children: [w.jsxs("div", {
                                    "data-lov-id": "src/components/ContactSection.tsx:263:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "263",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-start%22%7D",
                                    className: "flex items-start",
                                    children: [w.jsx("div", {
                                        "data-lov-id": "src/components/ContactSection.tsx:264:18",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "264",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22glass%20rounded-full%20p-2%20mr-4%22%7D",
                                        className: "glass rounded-full p-2 mr-4",
                                        children: w.jsx(l1, {
                                            "data-lov-id": "src/components/ContactSection.tsx:265:20",
                                            "data-lov-name": "MapPin",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "265",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "MapPin",
                                            "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                                            className: "h-5 w-5 text-primary"
                                        })
                                    }), w.jsxs("div", {
                                        "data-lov-id": "src/components/ContactSection.tsx:267:18",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "267",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%7D",
                                        children: [w.jsx("h4", {
                                            "data-lov-id": "src/components/ContactSection.tsx:268:20",
                                            "data-lov-name": "h4",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "268",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "h4",
                                            "data-component-content": "%7B%22text%22%3A%22Location%22%2C%22className%22%3A%22font-medium%22%7D",
                                            className: "font-medium",
                                            children: "Location"
                                        }), w.jsx("address", {
                                            "data-lov-id": "src/components/ContactSection.tsx:269:20",
                                            "data-lov-name": "address",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "269",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "address",
                                            "data-component-content": "%7B%22text%22%3A%22Addis%20Ababa%2C%20Ethiopia%22%2C%22className%22%3A%22not-italic%20text-muted-foreground%22%7D",
                                            className: "not-italic text-muted-foreground",
                                            children: "Addis Ababa, Ethiopia"
                                        })]
                                    })]
                                }), w.jsxs("div", {
                                    "data-lov-id": "src/components/ContactSection.tsx:275:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "275",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-start%22%7D",
                                    className: "flex items-start",
                                    children: [w.jsx("div", {
                                        "data-lov-id": "src/components/ContactSection.tsx:276:18",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "276",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22glass%20rounded-full%20p-2%20mr-4%22%7D",
                                        className: "glass rounded-full p-2 mr-4",
                                        children: w.jsx(s1, {
                                            "data-lov-id": "src/components/ContactSection.tsx:277:20",
                                            "data-lov-name": "Mail",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "277",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "Mail",
                                            "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                                            className: "h-5 w-5 text-primary"
                                        })
                                    }), w.jsxs("div", {
                                        "data-lov-id": "src/components/ContactSection.tsx:279:18",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "279",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%7D",
                                        children: [w.jsx("h4", {
                                            "data-lov-id": "src/components/ContactSection.tsx:280:20",
                                            "data-lov-name": "h4",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "280",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "h4",
                                            "data-component-content": "%7B%22text%22%3A%22Email%22%2C%22className%22%3A%22font-medium%22%7D",
                                            className: "font-medium",
                                            children: "Email"
                                        }), w.jsx("a", {
                                            "data-lov-id": "src/components/ContactSection.tsx:281:20",
                                            "data-lov-name": "a",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "281",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "a",
                                            "data-component-content": "%7B%22text%22%3A%22gedeonzewdu%40gmail.com%22%2C%22className%22%3A%22text-muted-foreground%20hover%3Atext-primary%20transition-colors%22%7D",
                                            href: "mailto:gedeonzewdu@gmail.com",
                                            className: "text-muted-foreground hover:text-primary transition-colors",
                                            children: "gedeonzewdu@gmail.com"
                                        })]
                                    })]
                                }), w.jsxs("div", {
                                    "data-lov-id": "src/components/ContactSection.tsx:290:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "290",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-start%22%7D",
                                    className: "flex items-start",
                                    children: [w.jsx("div", {
                                        "data-lov-id": "src/components/ContactSection.tsx:291:18",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "291",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22glass%20rounded-full%20p-2%20mr-4%22%7D",
                                        className: "glass rounded-full p-2 mr-4",
                                        children: w.jsx(ET, {
                                            "data-lov-id": "src/components/ContactSection.tsx:292:20",
                                            "data-lov-name": "Phone",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "292",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "Phone",
                                            "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                                            className: "h-5 w-5 text-primary"
                                        })
                                    }), w.jsxs("div", {
                                        "data-lov-id": "src/components/ContactSection.tsx:294:18",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "294",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%7D",
                                        children: [w.jsx("h4", {
                                            "data-lov-id": "src/components/ContactSection.tsx:295:20",
                                            "data-lov-name": "h4",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "295",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "h4",
                                            "data-component-content": "%7B%22text%22%3A%22Phone%22%2C%22className%22%3A%22font-medium%22%7D",
                                            className: "font-medium",
                                            children: "Phone"
                                        }), w.jsx("a", {
                                            "data-lov-id": "src/components/ContactSection.tsx:296:20",
                                            "data-lov-name": "a",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "296",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "a",
                                            "data-component-content": "%7B%22text%22%3A%22%2B251%20976%20959%20946%22%2C%22className%22%3A%22text-muted-foreground%20hover%3Atext-primary%20transition-colors%22%7D",
                                            href: "tel:+251976959946",
                                            className: "text-muted-foreground hover:text-primary transition-colors",
                                            children: "+251 976 959 946"
                                        })]
                                    })]
                                })]
                            })]
                        }), w.jsxs("div", {
                            "data-lov-id": "src/components/ContactSection.tsx:307:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/ContactSection.tsx",
                            "data-component-line": "307",
                            "data-component-file": "ContactSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22glass-card%20p-8%20h-full%22%7D",
                            className: "glass-card p-8 h-full",
                            children: [w.jsx("h3", {
                                "data-lov-id": "src/components/ContactSection.tsx:308:14",
                                "data-lov-name": "h3",
                                "data-component-path": "src/components/ContactSection.tsx",
                                "data-component-line": "308",
                                "data-component-file": "ContactSection.tsx",
                                "data-component-name": "h3",
                                "data-component-content": "%7B%22text%22%3A%22Connect%20With%20Me%22%2C%22className%22%3A%22text-xl%20font-bold%20mb-6%22%7D",
                                className: "text-xl font-bold mb-6",
                                children: "Connect With Me"
                            }), w.jsx("div", {
                                "data-lov-id": "src/components/ContactSection.tsx:309:14",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/ContactSection.tsx",
                                "data-component-line": "309",
                                "data-component-file": "ContactSection.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22mb-6%22%7D",
                                className: "mb-6",
                                children: w.jsx("p", {
                                    "data-lov-id": "src/components/ContactSection.tsx:310:16",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "310",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Follow%20me%20on%20social%20media%20or%20check%20out%20my%20code%20repositories%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20to%20learn%20more%20about%20my%20work%20and%20projects.%22%2C%22className%22%3A%22text-muted-foreground%22%7D",
                                    className: "text-muted-foreground",
                                    children: "Follow me on social media or check out my code repositories to learn more about my work and projects."
                                })
                            }), w.jsxs("div", {
                                "data-lov-id": "src/components/ContactSection.tsx:315:14",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/ContactSection.tsx",
                                "data-component-line": "315",
                                "data-component-file": "ContactSection.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22flex%20space-x-4%22%7D",
                                className: "flex space-x-4",
                                children: [w.jsxs("a", {
                                    "data-lov-id": "src/components/ContactSection.tsx:316:16",
                                    "data-lov-name": "a",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "316",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "a",
                                    "data-component-content": "%7B%22className%22%3A%22glass%20rounded-full%20p-3%20text-foreground%20hover%3Atext-primary%20transition-all%20hover%3Ascale-110%22%7D",
                                    href: "https://github.com/gedionzewdu",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "glass rounded-full p-3 text-foreground hover:text-primary transition-all hover:scale-110",
                                    children: [w.jsx(_T, {
                                        "data-lov-id": "src/components/ContactSection.tsx:322:18",
                                        "data-lov-name": "Github",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "322",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "Github",
                                        "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                                        className: "h-6 w-6"
                                    }), w.jsx("span", {
                                        "data-lov-id": "src/components/ContactSection.tsx:323:18",
                                        "data-lov-name": "span",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "323",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "span",
                                        "data-component-content": "%7B%22text%22%3A%22GitHub%22%2C%22className%22%3A%22sr-only%22%7D",
                                        className: "sr-only",
                                        children: "GitHub"
                                    })]
                                }), w.jsxs("a", {
                                    "data-lov-id": "src/components/ContactSection.tsx:325:16",
                                    "data-lov-name": "a",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "325",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "a",
                                    "data-component-content": "%7B%22className%22%3A%22glass%20rounded-full%20p-3%20text-foreground%20hover%3Atext-primary%20transition-all%20hover%3Ascale-110%22%7D",
                                    href: "https://www.linkedin.com/in/gedionzewdu",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "glass rounded-full p-3 text-foreground hover:text-primary transition-all hover:scale-110",
                                    children: [w.jsx(i1, {
                                        "data-lov-id": "src/components/ContactSection.tsx:331:18",
                                        "data-lov-name": "Linkedin",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "331",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "Linkedin",
                                        "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                                        className: "h-6 w-6"
                                    }), w.jsx("span", {
                                        "data-lov-id": "src/components/ContactSection.tsx:332:18",
                                        "data-lov-name": "span",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "332",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "span",
                                        "data-component-content": "%7B%22text%22%3A%22LinkedIn%22%2C%22className%22%3A%22sr-only%22%7D",
                                        className: "sr-only",
                                        children: "LinkedIn"
                                    })]
                                }), w.jsxs("a", {
                                    "data-lov-id": "src/components/ContactSection.tsx:334:16",
                                    "data-lov-name": "a",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "334",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "a",
                                    "data-component-content": "%7B%22className%22%3A%22glass%20rounded-full%20p-3%20text-foreground%20hover%3Atext-primary%20transition-all%20hover%3Ascale-110%22%7D",
                                    href: "https://x.com/gedion_zewdu",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "glass rounded-full p-3 text-foreground hover:text-primary transition-all hover:scale-110",
                                    children: [w.jsx(c1, {
                                        "data-lov-id": "src/components/ContactSection.tsx:340:18",
                                        "data-lov-name": "Twitter",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "340",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "Twitter",
                                        "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                                        className: "h-6 w-6"
                                    }), w.jsx("span", {
                                        "data-lov-id": "src/components/ContactSection.tsx:341:18",
                                        "data-lov-name": "span",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "341",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "span",
                                        "data-component-content": "%7B%22text%22%3A%22Twitter%22%2C%22className%22%3A%22sr-only%22%7D",
                                        className: "sr-only",
                                        children: "Twitter"
                                    })]
                                })]
                            }), w.jsxs("div", {
                                "data-lov-id": "src/components/ContactSection.tsx:345:14",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/ContactSection.tsx",
                                "data-component-line": "345",
                                "data-component-file": "ContactSection.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22mt-8%22%7D",
                                className: "mt-8",
                                children: [w.jsx("h4", {
                                    "data-lov-id": "src/components/ContactSection.tsx:346:16",
                                    "data-lov-name": "h4",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "346",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "h4",
                                    "data-component-content": "%7B%22text%22%3A%22My%20Location%22%2C%22className%22%3A%22font-medium%20mb-4%22%7D",
                                    className: "font-medium mb-4",
                                    children: "My Location"
                                }), w.jsx("div", {
                                    "data-lov-id": "src/components/ContactSection.tsx:347:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "347",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22rounded-lg%20overflow-hidden%20h-%5B200px%5D%20glass%22%7D",
                                    className: "rounded-lg overflow-hidden h-[200px] glass",
                                    children: w.jsx("iframe", {
                                        "data-lov-id": "src/components/ContactSection.tsx:348:18",
                                        "data-lov-name": "iframe",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "348",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "iframe",
                                        "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20border-0%22%7D",
                                        title: "Map showing Addis Ababa, Ethiopia",
                                        className: "w-full h-full border-0",
                                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125774.73040877505!2d38.6864177!3d9.0106099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1701291213193!5m2!1sen!2sus",
                                        allowFullScreen: !0,
                                        loading: "lazy"
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })
    };

function eg() {
    const {
        theme: t,
        setTheme: e
    } = jN();
    return w.jsxs(so, {
        "data-lov-id": "src/components/ThemeToggle.tsx:10:4",
        "data-lov-name": "Button",
        "data-component-path": "src/components/ThemeToggle.tsx",
        "data-component-line": "10",
        "data-component-file": "ThemeToggle.tsx",
        "data-component-name": "Button",
        "data-component-content": "%7B%22className%22%3A%22rounded-full%20text-foreground%22%7D",
        variant: "ghost",
        size: "icon",
        onClick: () => e(t === "light" ? "dark" : "light"),
        className: "rounded-full text-foreground",
        children: [t === "light" ? w.jsx(bT, {
            "data-lov-id": "src/components/ThemeToggle.tsx:17:8",
            "data-lov-name": "Moon",
            "data-component-path": "src/components/ThemeToggle.tsx",
            "data-component-line": "17",
            "data-component-file": "ThemeToggle.tsx",
            "data-component-name": "Moon",
            "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20transition-all%22%7D",
            className: "h-5 w-5 transition-all"
        }) : w.jsx(PT, {
            "data-lov-id": "src/components/ThemeToggle.tsx:19:8",
            "data-lov-name": "Sun",
            "data-component-path": "src/components/ThemeToggle.tsx",
            "data-component-line": "19",
            "data-component-file": "ThemeToggle.tsx",
            "data-component-name": "Sun",
            "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20transition-all%22%7D",
            className: "h-5 w-5 transition-all"
        }), w.jsx("span", {
            "data-lov-id": "src/components/ThemeToggle.tsx:21:6",
            "data-lov-name": "span",
            "data-component-path": "src/components/ThemeToggle.tsx",
            "data-component-line": "21",
            "data-component-file": "ThemeToggle.tsx",
            "data-component-name": "span",
            "data-component-content": "%7B%22text%22%3A%22Toggle%20theme%22%2C%22className%22%3A%22sr-only%22%7D",
            className: "sr-only",
            children: "Toggle theme"
        })]
    })
}
const r7 = () => {
    const [t, e] = S.useState(!1), [n, o] = S.useState(0), [r, a] = S.useState(!1), i = [{
        name: "Home",
        href: "#home"
    }, {
        name: "About",
        href: "#about"
    }, {
        name: "Services",
        href: "#services"
    }, {
        name: "Experience",
        href: "#experience"
    }, {
        name: "Projects",
        href: "#projects"
    }, {
        name: "Contact",
        href: "#contact"
    }];
    S.useEffect(() => {
        const l = () => {
            const c = window.scrollY;
            o(c), a(c > 500)
        };
        return window.addEventListener("scroll", l), () => {
            window.removeEventListener("scroll", l)
        }
    }, []);
    const s = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };
    return w.jsxs(w.Fragment, {
        children: [w.jsx("header", {
            "data-lov-id": "src/components/Navigation.tsx:44:6",
            "data-lov-name": "header",
            "data-component-path": "src/components/Navigation.tsx",
            "data-component-line": "44",
            "data-component-file": "Navigation.tsx",
            "data-component-name": "header",
            "data-component-content": "%7B%7D",
            className: Er("fixed top-0 left-0 right-0 z-50 transition-all duration-300", n > 50 ? "glass shadow-lg py-2" : "bg-transparent py-4"),
            children: w.jsxs("div", {
                "data-lov-id": "src/components/Navigation.tsx:52:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/Navigation.tsx",
                "data-component-line": "52",
                "data-component-file": "Navigation.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20flex%20justify-between%20items-center%22%7D",
                className: "container mx-auto px-4 flex justify-between items-center",
                children: [w.jsx("a", {
                    "data-lov-id": "src/components/Navigation.tsx:53:10",
                    "data-lov-name": "a",
                    "data-component-path": "src/components/Navigation.tsx",
                    "data-component-line": "53",
                    "data-component-file": "Navigation.tsx",
                    "data-component-name": "a",
                    "data-component-content": "%7B%22text%22%3A%22Gedion%20Zewdu%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-gradient%22%7D",
                    href: "#home",
                    className: "text-2xl font-bold text-gradient",
                    children: "Gedion Zewdu"
                }), w.jsxs("div", {
                    "data-lov-id": "src/components/Navigation.tsx:57:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/Navigation.tsx",
                    "data-component-line": "57",
                    "data-component-file": "Navigation.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22hidden%20md%3Aflex%20items-center%20space-x-8%22%7D",
                    className: "hidden md:flex items-center space-x-8",
                    children: [w.jsx("nav", {
                        "data-lov-id": "src/components/Navigation.tsx:58:12",
                        "data-lov-name": "nav",
                        "data-component-path": "src/components/Navigation.tsx",
                        "data-component-line": "58",
                        "data-component-file": "Navigation.tsx",
                        "data-component-name": "nav",
                        "data-component-content": "%7B%7D",
                        children: w.jsx("ul", {
                            "data-lov-id": "src/components/Navigation.tsx:59:14",
                            "data-lov-name": "ul",
                            "data-component-path": "src/components/Navigation.tsx",
                            "data-component-line": "59",
                            "data-component-file": "Navigation.tsx",
                            "data-component-name": "ul",
                            "data-component-content": "%7B%22className%22%3A%22flex%20space-x-6%22%7D",
                            className: "flex space-x-6",
                            children: i.map(l => w.jsx("li", {
                                "data-lov-id": "src/components/Navigation.tsx:61:18",
                                "data-lov-name": "li",
                                "data-component-path": "src/components/Navigation.tsx",
                                "data-component-line": "61",
                                "data-component-file": "Navigation.tsx",
                                "data-component-name": "li",
                                "data-component-content": "%7B%7D",
                                children: w.jsx("a", {
                                    "data-lov-id": "src/components/Navigation.tsx:62:20",
                                    "data-lov-name": "a",
                                    "data-component-path": "src/components/Navigation.tsx",
                                    "data-component-line": "62",
                                    "data-component-file": "Navigation.tsx",
                                    "data-component-name": "a",
                                    "data-component-content": "%7B%22className%22%3A%22relative%20text-foreground%20hover%3Atext-primary%20transition-colors%20after%3Aabsolute%20after%3Aleft-0%20after%3Abottom-0%20after%3Ah-%5B2px%5D%20after%3Aw-0%20after%3Abg-primary%20after%3Atransition-all%20hover%3Aafter%3Aw-full%22%7D",
                                    href: l.href,
                                    className: "relative text-foreground hover:text-primary transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                                    children: l.name
                                })
                            }, l.name))
                        })
                    }), w.jsxs("div", {
                        "data-lov-id": "src/components/Navigation.tsx:72:12",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/Navigation.tsx",
                        "data-component-line": "72",
                        "data-component-file": "Navigation.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
                        className: "flex items-center space-x-2",
                        children: [w.jsx(eg, {
                            "data-lov-id": "src/components/Navigation.tsx:73:14",
                            "data-lov-name": "ThemeToggle",
                            "data-component-path": "src/components/Navigation.tsx",
                            "data-component-line": "73",
                            "data-component-file": "Navigation.tsx",
                            "data-component-name": "ThemeToggle",
                            "data-component-content": "%7B%7D"
                        }), w.jsx(so, {
                            "data-lov-id": "src/components/Navigation.tsx:74:14",
                            "data-lov-name": "Button",
                            "data-component-path": "src/components/Navigation.tsx",
                            "data-component-line": "74",
                            "data-component-file": "Navigation.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-r%20from-primary%20to-accent%20text-white%20hover%3Ashadow-lg%20hover%3Ashadow-primary%2F25%20transition-all%22%7D",
                            asChild: !0,
                            className: "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 transition-all",
                            children: w.jsx("a", {
                                "data-lov-id": "src/components/Navigation.tsx:78:16",
                                "data-lov-name": "a",
                                "data-component-path": "src/components/Navigation.tsx",
                                "data-component-line": "78",
                                "data-component-file": "Navigation.tsx",
                                "data-component-name": "a",
                                "data-component-content": "%7B%22text%22%3A%22Hire%20Me%22%7D",
                                href: "#contact",
                                children: "Hire Me"
                            })
                        })]
                    })]
                }), w.jsxs("div", {
                    "data-lov-id": "src/components/Navigation.tsx:83:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/Navigation.tsx",
                    "data-component-line": "83",
                    "data-component-file": "Navigation.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22flex%20md%3Ahidden%20items-center%20space-x-2%22%7D",
                    className: "flex md:hidden items-center space-x-2",
                    children: [w.jsx(eg, {
                        "data-lov-id": "src/components/Navigation.tsx:84:12",
                        "data-lov-name": "ThemeToggle",
                        "data-component-path": "src/components/Navigation.tsx",
                        "data-component-line": "84",
                        "data-component-file": "Navigation.tsx",
                        "data-component-name": "ThemeToggle",
                        "data-component-content": "%7B%7D"
                    }), w.jsxs(so, {
                        "data-lov-id": "src/components/Navigation.tsx:85:12",
                        "data-lov-name": "Button",
                        "data-component-path": "src/components/Navigation.tsx",
                        "data-component-line": "85",
                        "data-component-file": "Navigation.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%22className%22%3A%22text-foreground%22%7D",
                        variant: "ghost",
                        size: "icon",
                        className: "text-foreground",
                        onClick: () => e(!t),
                        children: [w.jsx(ST, {
                            "data-lov-id": "src/components/Navigation.tsx:91:14",
                            "data-lov-name": "Menu",
                            "data-component-path": "src/components/Navigation.tsx",
                            "data-component-line": "91",
                            "data-component-file": "Navigation.tsx",
                            "data-component-name": "Menu",
                            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                            className: "h-6 w-6"
                        }), w.jsx("span", {
                            "data-lov-id": "src/components/Navigation.tsx:92:14",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/Navigation.tsx",
                            "data-component-line": "92",
                            "data-component-file": "Navigation.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22Toggle%20menu%22%2C%22className%22%3A%22sr-only%22%7D",
                            className: "sr-only",
                            children: "Toggle menu"
                        })]
                    })]
                })]
            })
        }), t && w.jsxs("div", {
            "data-lov-id": "src/components/Navigation.tsx:100:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/Navigation.tsx",
            "data-component-line": "100",
            "data-component-file": "Navigation.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22fixed%20inset-0%20z-50%20glass%22%7D",
            className: "fixed inset-0 z-50 glass",
            children: [w.jsx("div", {
                "data-lov-id": "src/components/Navigation.tsx:101:10",
                "data-lov-name": "div",
                "data-component-path": "src/components/Navigation.tsx",
                "data-component-line": "101",
                "data-component-file": "Navigation.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22flex%20justify-end%20p-4%22%7D",
                className: "flex justify-end p-4",
                children: w.jsxs(so, {
                    "data-lov-id": "src/components/Navigation.tsx:102:12",
                    "data-lov-name": "Button",
                    "data-component-path": "src/components/Navigation.tsx",
                    "data-component-line": "102",
                    "data-component-file": "Navigation.tsx",
                    "data-component-name": "Button",
                    "data-component-content": "%7B%22className%22%3A%22text-foreground%22%7D",
                    variant: "ghost",
                    size: "icon",
                    className: "text-foreground",
                    onClick: () => e(!1),
                    children: [w.jsx(u1, {
                        "data-lov-id": "src/components/Navigation.tsx:108:14",
                        "data-lov-name": "X",
                        "data-component-path": "src/components/Navigation.tsx",
                        "data-component-line": "108",
                        "data-component-file": "Navigation.tsx",
                        "data-component-name": "X",
                        "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                        className: "h-6 w-6"
                    }), w.jsx("span", {
                        "data-lov-id": "src/components/Navigation.tsx:109:14",
                        "data-lov-name": "span",
                        "data-component-path": "src/components/Navigation.tsx",
                        "data-component-line": "109",
                        "data-component-file": "Navigation.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%22text%22%3A%22Close%20menu%22%2C%22className%22%3A%22sr-only%22%7D",
                        className: "sr-only",
                        children: "Close menu"
                    })]
                })
            }), w.jsx("nav", {
                "data-lov-id": "src/components/Navigation.tsx:112:10",
                "data-lov-name": "nav",
                "data-component-path": "src/components/Navigation.tsx",
                "data-component-line": "112",
                "data-component-file": "Navigation.tsx",
                "data-component-name": "nav",
                "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20items-center%20justify-center%20h-full%22%7D",
                className: "flex flex-col items-center justify-center h-full",
                children: w.jsxs("ul", {
                    "data-lov-id": "src/components/Navigation.tsx:113:12",
                    "data-lov-name": "ul",
                    "data-component-path": "src/components/Navigation.tsx",
                    "data-component-line": "113",
                    "data-component-file": "Navigation.tsx",
                    "data-component-name": "ul",
                    "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20space-y-6%20text-center%22%7D",
                    className: "flex flex-col space-y-6 text-center",
                    children: [i.map(l => w.jsx("li", {
                        "data-lov-id": "src/components/Navigation.tsx:115:16",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Navigation.tsx",
                        "data-component-line": "115",
                        "data-component-file": "Navigation.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: w.jsx("a", {
                            "data-lov-id": "src/components/Navigation.tsx:116:18",
                            "data-lov-name": "a",
                            "data-component-path": "src/components/Navigation.tsx",
                            "data-component-line": "116",
                            "data-component-file": "Navigation.tsx",
                            "data-component-name": "a",
                            "data-component-content": "%7B%22className%22%3A%22text-2xl%20text-foreground%20hover%3Atext-primary%20transition-colors%22%7D",
                            href: l.href,
                            className: "text-2xl text-foreground hover:text-primary transition-colors",
                            onClick: () => e(!1),
                            children: l.name
                        })
                    }, l.name)), w.jsx("li", {
                        "data-lov-id": "src/components/Navigation.tsx:125:14",
                        "data-lov-name": "li",
                        "data-component-path": "src/components/Navigation.tsx",
                        "data-component-line": "125",
                        "data-component-file": "Navigation.tsx",
                        "data-component-name": "li",
                        "data-component-content": "%7B%7D",
                        children: w.jsx(so, {
                            "data-lov-id": "src/components/Navigation.tsx:126:16",
                            "data-lov-name": "Button",
                            "data-component-path": "src/components/Navigation.tsx",
                            "data-component-line": "126",
                            "data-component-file": "Navigation.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%22className%22%3A%22mt-6%20bg-gradient-to-r%20from-primary%20to-accent%20text-white%20hover%3Ashadow-lg%20hover%3Ashadow-primary%2F25%20transition-all%22%7D",
                            asChild: !0,
                            className: "mt-6 bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 transition-all",
                            children: w.jsx("a", {
                                "data-lov-id": "src/components/Navigation.tsx:130:18",
                                "data-lov-name": "a",
                                "data-component-path": "src/components/Navigation.tsx",
                                "data-component-line": "130",
                                "data-component-file": "Navigation.tsx",
                                "data-component-name": "a",
                                "data-component-content": "%7B%22text%22%3A%22Hire%20Me%22%7D",
                                href: "#contact",
                                onClick: () => e(!1),
                                children: "Hire Me"
                            })
                        })
                    })]
                })
            })]
        }), r && w.jsxs(so, {
            "data-lov-id": "src/components/Navigation.tsx:142:8",
            "data-lov-name": "Button",
            "data-component-path": "src/components/Navigation.tsx",
            "data-component-line": "142",
            "data-component-file": "Navigation.tsx",
            "data-component-name": "Button",
            "data-component-content": "%7B%22className%22%3A%22fixed%20bottom-6%20right-6%20z-40%20rounded-full%20glass%20border-primary%20text-primary%20hover%3Atext-primary-foreground%20hover%3Abg-primary%22%7D",
            variant: "outline",
            size: "icon",
            className: "fixed bottom-6 right-6 z-40 rounded-full glass border-primary text-primary hover:text-primary-foreground hover:bg-primary",
            onClick: s,
            children: [w.jsx(gT, {
                "data-lov-id": "src/components/Navigation.tsx:148:10",
                "data-lov-name": "ArrowUp",
                "data-component-path": "src/components/Navigation.tsx",
                "data-component-line": "148",
                "data-component-file": "Navigation.tsx",
                "data-component-name": "ArrowUp",
                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                className: "h-5 w-5"
            }), w.jsx("span", {
                "data-lov-id": "src/components/Navigation.tsx:149:10",
                "data-lov-name": "span",
                "data-component-path": "src/components/Navigation.tsx",
                "data-component-line": "149",
                "data-component-file": "Navigation.tsx",
                "data-component-name": "span",
                "data-component-content": "%7B%22text%22%3A%22Scroll%20to%20top%22%2C%22className%22%3A%22sr-only%22%7D",
                className: "sr-only",
                children: "Scroll to top"
            })]
        })]
    })
};
var Y_ = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    tg = F.createContext && F.createContext(Y_),
    ia = function() {
        return ia = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++) {
                e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }, ia.apply(this, arguments)
    },
    a7 = function(t, e) {
        var n = {};
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
        if (t != null && typeof Object.getOwnPropertySymbols == "function")
            for (var r = 0, o = Object.getOwnPropertySymbols(t); r < o.length; r++) e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]);
        return n
    };

function G_(t) {
    return t && t.map(function(e, n) {
        return F.createElement(e.tag, ia({
            key: n
        }, e.attr), G_(e.child))
    })
}

function i7(t) {
    return function(e) {
        return F.createElement(s7, ia({
            attr: ia({}, t.attr)
        }, e), G_(t.child))
    }
}

function s7(t) {
    var e = function(n) {
        var o = t.attr,
            r = t.size,
            a = t.title,
            i = a7(t, ["attr", "size", "title"]),
            s = r || n.size || "1em",
            l;
        return n.className && (l = n.className), t.className && (l = (l ? l + " " : "") + t.className), F.createElement("svg", ia({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, o, i, {
            className: l,
            style: ia(ia({
                color: t.color || n.color
            }, n.style), t.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg"
        }), a && F.createElement("title", null, a), t.children)
    };
    return tg !== void 0 ? F.createElement(tg.Consumer, null, function(n) {
        return e(n)
    }) : e(Y_)
}

function l7(t) {
    return i7({
        tag: "svg",
        attr: {
            viewBox: "0 0 496 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
            }
        }]
    })(t)
}
const c7 = () => {
        const t = new Date().getFullYear();
        return w.jsx("footer", {
            "data-lov-id": "src/components/Footer.tsx:9:4",
            "data-lov-name": "footer",
            "data-component-path": "src/components/Footer.tsx",
            "data-component-line": "9",
            "data-component-file": "Footer.tsx",
            "data-component-name": "footer",
            "data-component-content": "%7B%22className%22%3A%22py-8%20border-t%20border-border%22%7D",
            className: "py-8 border-t border-border",
            children: w.jsx("div", {
                "data-lov-id": "src/components/Footer.tsx:10:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/Footer.tsx",
                "data-component-line": "10",
                "data-component-file": "Footer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                className: "container mx-auto px-4",
                children: w.jsxs("div", {
                    "data-lov-id": "src/components/Footer.tsx:11:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/Footer.tsx",
                    "data-component-line": "11",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20md%3Aflex-row%20justify-between%20items-center%22%7D",
                    className: "flex flex-col md:flex-row justify-between items-center",
                    children: [w.jsxs("div", {
                        "data-lov-id": "src/components/Footer.tsx:12:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/Footer.tsx",
                        "data-component-line": "12",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22mb-4%20md%3Amb-0%22%7D",
                        className: "mb-4 md:mb-0",
                        children: [w.jsx("h2", {
                            "data-lov-id": "src/components/Footer.tsx:13:12",
                            "data-lov-name": "h2",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "13",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Gedion%20Zewdu%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-gradient%22%7D",
                            className: "text-2xl font-bold text-gradient",
                            children: "Gedion Zewdu"
                        }), w.jsx("p", {
                            "data-lov-id": "src/components/Footer.tsx:14:12",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "14",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Full%20Stack%20Developer%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%20mt-1%22%7D",
                            className: "text-sm text-muted-foreground mt-1",
                            children: "Full Stack Developer"
                        })]
                    }), w.jsxs("div", {
                        "data-lov-id": "src/components/Footer.tsx:19:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/Footer.tsx",
                        "data-component-line": "19",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20space-x-4%20mb-4%20md%3Amb-0%22%7D",
                        className: "flex space-x-4 mb-4 md:mb-0",
                        children: [w.jsx("a", {
                            "data-lov-id": "src/components/Footer.tsx:20:12",
                            "data-lov-name": "a",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "20",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "a",
                            "data-component-content": "%7B%22className%22%3A%22text-muted-foreground%20hover%3Atext-primary%20transition-colors%22%7D",
                            href: "https://t.me/gedionz",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-muted-foreground hover:text-primary transition-colors",
                            "aria-label": "Telegram",
                            children: w.jsx(l7, {
                                "data-lov-id": "src/components/Footer.tsx:27:14",
                                "data-lov-name": "FaTelegram",
                                "data-component-path": "src/components/Footer.tsx",
                                "data-component-line": "27",
                                "data-component-file": "Footer.tsx",
                                "data-component-name": "FaTelegram",
                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                                className: "h-5 w-5"
                            })
                        }), w.jsx("a", {
                            "data-lov-id": "src/components/Footer.tsx:29:12",
                            "data-lov-name": "a",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "29",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "a",
                            "data-component-content": "%7B%22className%22%3A%22text-muted-foreground%20hover%3Atext-primary%20transition-colors%22%7D",
                            href: "https://www.linkedin.com/in/gedionzewdu",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-muted-foreground hover:text-primary transition-colors",
                            "aria-label": "LinkedIn",
                            children: w.jsx(i1, {
                                "data-lov-id": "src/components/Footer.tsx:36:14",
                                "data-lov-name": "Linkedin",
                                "data-component-path": "src/components/Footer.tsx",
                                "data-component-line": "36",
                                "data-component-file": "Footer.tsx",
                                "data-component-name": "Linkedin",
                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                                className: "h-5 w-5"
                            })
                        }), w.jsx("a", {
                            "data-lov-id": "src/components/Footer.tsx:38:12",
                            "data-lov-name": "a",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "38",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "a",
                            "data-component-content": "%7B%22className%22%3A%22text-muted-foreground%20hover%3Atext-primary%20transition-colors%22%7D",
                            href: "https://x.com/gedion_zewdu",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-muted-foreground hover:text-primary transition-colors",
                            "aria-label": "Twitter",
                            children: w.jsx(c1, {
                                "data-lov-id": "src/components/Footer.tsx:45:14",
                                "data-lov-name": "Twitter",
                                "data-component-path": "src/components/Footer.tsx",
                                "data-component-line": "45",
                                "data-component-file": "Footer.tsx",
                                "data-component-name": "Twitter",
                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                                className: "h-5 w-5"
                            })
                        }), w.jsx("a", {
                            "data-lov-id": "src/components/Footer.tsx:47:12",
                            "data-lov-name": "a",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "47",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "a",
                            "data-component-content": "%7B%22className%22%3A%22text-muted-foreground%20hover%3Atext-primary%20transition-colors%22%7D",
                            href: "mailto:gedeonzewdu@gmail.com",
                            className: "text-muted-foreground hover:text-primary transition-colors",
                            "aria-label": "Email",
                            children: w.jsx(s1, {
                                "data-lov-id": "src/components/Footer.tsx:52:14",
                                "data-lov-name": "Mail",
                                "data-component-path": "src/components/Footer.tsx",
                                "data-component-line": "52",
                                "data-component-file": "Footer.tsx",
                                "data-component-name": "Mail",
                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                                className: "h-5 w-5"
                            })
                        })]
                    }), w.jsxs("div", {
                        "data-lov-id": "src/components/Footer.tsx:56:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/Footer.tsx",
                        "data-component-line": "56",
                        "data-component-file": "Footer.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22text%22%3A%22%C2%A9%20Gedion%20Zewdu.%20All%20rights%20reserved.%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                        className: "text-sm text-muted-foreground",
                        children: ["© ", t, " Gedion Zewdu. All rights reserved."]
                    })]
                })
            })
        })
    },
    u7 = () => (S.useEffect(() => {
        ["https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000", "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000"].forEach(e => {
            const n = new Image;
            n.src = e
        })
    }, []), w.jsxs(w.Fragment, {
        children: [w.jsxs(mu, {
            "data-lov-id": "src/pages/Index.tsx:31:6",
            "data-lov-name": "Helmet",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "31",
            "data-component-file": "Index.tsx",
            "data-component-name": "Helmet",
            "data-component-content": "%7B%7D",
            children: [w.jsx("title", {
                "data-lov-id": "src/pages/Index.tsx:32:8",
                "data-lov-name": "title",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "32",
                "data-component-file": "Index.tsx",
                "data-component-name": "title",
                "data-component-content": "%7B%22text%22%3A%22Gedion%20Zewdu%20%7C%20Full%20Stack%20Developer%22%7D",
                children: "Gedion Zewdu | Full Stack Developer"
            }), w.jsx("meta", {
                "data-lov-id": "src/pages/Index.tsx:33:8",
                "data-lov-name": "meta",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "33",
                "data-component-file": "Index.tsx",
                "data-component-name": "meta",
                "data-component-content": "%7B%7D",
                name: "description",
                content: "Portfolio of Gedion Zewdu, a Full Stack Developer specializing in Java, Spring Framework, and modern frontend technologies."
            }), w.jsx("meta", {
                "data-lov-id": "src/pages/Index.tsx:34:8",
                "data-lov-name": "meta",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "34",
                "data-component-file": "Index.tsx",
                "data-component-name": "meta",
                "data-component-content": "%7B%7D",
                name: "keywords",
                content: "Gedion Zewdu, Full Stack Developer, Java Developer, Web Development, Spring Framework, React, Portfolio"
            })]
        }), w.jsx(r7, {
            "data-lov-id": "src/pages/Index.tsx:37:6",
            "data-lov-name": "Navigation",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "37",
            "data-component-file": "Index.tsx",
            "data-component-name": "Navigation",
            "data-component-content": "%7B%7D"
        }), w.jsxs("main", {
            "data-lov-id": "src/pages/Index.tsx:38:6",
            "data-lov-name": "main",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "38",
            "data-component-file": "Index.tsx",
            "data-component-name": "main",
            "data-component-content": "%7B%7D",
            children: [w.jsx(Pk, {
                "data-lov-id": "src/pages/Index.tsx:39:8",
                "data-lov-name": "HeroSection",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "39",
                "data-component-file": "Index.tsx",
                "data-component-name": "HeroSection",
                "data-component-content": "%7B%7D"
            }), w.jsx(Qk, {
                "data-lov-id": "src/pages/Index.tsx:40:8",
                "data-lov-name": "AboutSection",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "40",
                "data-component-file": "Index.tsx",
                "data-component-name": "AboutSection",
                "data-component-content": "%7B%7D"
            }), w.jsx(Xk, {
                "data-lov-id": "src/pages/Index.tsx:41:8",
                "data-lov-name": "ServicesSection",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "41",
                "data-component-file": "Index.tsx",
                "data-component-name": "ServicesSection",
                "data-component-content": "%7B%7D"
            }), w.jsx(qk, {
                "data-lov-id": "src/pages/Index.tsx:42:8",
                "data-lov-name": "ExperienceSection",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "42",
                "data-component-file": "Index.tsx",
                "data-component-name": "ExperienceSection",
                "data-component-content": "%7B%7D"
            }), w.jsx(Kk, {
                "data-lov-id": "src/pages/Index.tsx:43:8",
                "data-lov-name": "ProjectsSection",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "43",
                "data-component-file": "Index.tsx",
                "data-component-name": "ProjectsSection",
                "data-component-content": "%7B%7D"
            }), w.jsx(o7, {
                "data-lov-id": "src/pages/Index.tsx:44:8",
                "data-lov-name": "ContactSection",
                "data-component-path": "src/pages/Index.tsx",
                "data-component-line": "44",
                "data-component-file": "Index.tsx",
                "data-component-name": "ContactSection",
                "data-component-content": "%7B%7D"
            })]
        }), w.jsx(c7, {
            "data-lov-id": "src/pages/Index.tsx:46:6",
            "data-lov-name": "Footer",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "46",
            "data-component-file": "Index.tsx",
            "data-component-name": "Footer",
            "data-component-content": "%7B%7D"
        })]
    })),
    d7 = () => {
        const t = mw();
        return S.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", t.pathname)
        }, [t.pathname]), w.jsx("div", {
            "data-lov-id": "src/pages/NotFound.tsx:15:4",
            "data-lov-name": "div",
            "data-component-path": "src/pages/NotFound.tsx",
            "data-component-line": "15",
            "data-component-file": "NotFound.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20flex%20items-center%20justify-center%20bg-gray-100%22%7D",
            className: "min-h-screen flex items-center justify-center bg-gray-100",
            children: w.jsxs("div", {
                "data-lov-id": "src/pages/NotFound.tsx:16:6",
                "data-lov-name": "div",
                "data-component-path": "src/pages/NotFound.tsx",
                "data-component-line": "16",
                "data-component-file": "NotFound.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                className: "text-center",
                children: [w.jsx("h1", {
                    "data-lov-id": "src/pages/NotFound.tsx:17:8",
                    "data-lov-name": "h1",
                    "data-component-path": "src/pages/NotFound.tsx",
                    "data-component-line": "17",
                    "data-component-file": "NotFound.tsx",
                    "data-component-name": "h1",
                    "data-component-content": "%7B%22text%22%3A%22404%22%2C%22className%22%3A%22text-4xl%20font-bold%20mb-4%22%7D",
                    className: "text-4xl font-bold mb-4",
                    children: "404"
                }), w.jsx("p", {
                    "data-lov-id": "src/pages/NotFound.tsx:18:8",
                    "data-lov-name": "p",
                    "data-component-path": "src/pages/NotFound.tsx",
                    "data-component-line": "18",
                    "data-component-file": "NotFound.tsx",
                    "data-component-name": "p",
                    "data-component-content": "%7B%22text%22%3A%22Oops!%20Page%20not%20found%22%2C%22className%22%3A%22text-xl%20text-gray-600%20mb-4%22%7D",
                    className: "text-xl text-gray-600 mb-4",
                    children: "Oops! Page not found"
                }), w.jsx("a", {
                    "data-lov-id": "src/pages/NotFound.tsx:19:8",
                    "data-lov-name": "a",
                    "data-component-path": "src/pages/NotFound.tsx",
                    "data-component-line": "19",
                    "data-component-file": "NotFound.tsx",
                    "data-component-name": "a",
                    "data-component-content": "%7B%22text%22%3A%22Return%20to%20Home%22%2C%22className%22%3A%22text-blue-500%20hover%3Atext-blue-700%20underline%22%7D",
                    href: "/",
                    className: "text-blue-500 hover:text-blue-700 underline",
                    children: "Return to Home"
                })]
            })
        })
    },
    p7 = new Y3,
    f7 = () => w.jsx(Ai, {
        "data-lov-id": "src/App.tsx:15:2",
        "data-lov-name": "HelmetProvider",
        "data-component-path": "src/App.tsx",
        "data-component-line": "15",
        "data-component-file": "App.tsx",
        "data-component-name": "HelmetProvider",
        "data-component-content": "%7B%7D",
        children: w.jsx(Q3, {
            "data-lov-id": "src/App.tsx:16:4",
            "data-lov-name": "QueryClientProvider",
            "data-component-path": "src/App.tsx",
            "data-component-line": "16",
            "data-component-file": "App.tsx",
            "data-component-name": "QueryClientProvider",
            "data-component-content": "%7B%7D",
            client: p7,
            children: w.jsx(MN, {
                "data-lov-id": "src/App.tsx:17:6",
                "data-lov-name": "ThemeProvider",
                "data-component-path": "src/App.tsx",
                "data-component-line": "17",
                "data-component-file": "App.tsx",
                "data-component-name": "ThemeProvider",
                "data-component-content": "%7B%7D",
                defaultTheme: "dark",
                children: w.jsxs(C3, {
                    "data-lov-id": "src/App.tsx:18:8",
                    "data-lov-name": "TooltipProvider",
                    "data-component-path": "src/App.tsx",
                    "data-component-line": "18",
                    "data-component-file": "App.tsx",
                    "data-component-name": "TooltipProvider",
                    "data-component-content": "%7B%7D",
                    children: [w.jsx(pE, {
                        "data-lov-id": "src/App.tsx:19:10",
                        "data-lov-name": "Toaster",
                        "data-component-path": "src/App.tsx",
                        "data-component-line": "19",
                        "data-component-file": "App.tsx",
                        "data-component-name": "Toaster",
                        "data-component-content": "%7B%7D"
                    }), w.jsx($E, {
                        "data-lov-id": "src/App.tsx:20:10",
                        "data-lov-name": "Sonner",
                        "data-component-path": "src/App.tsx",
                        "data-component-line": "20",
                        "data-component-file": "App.tsx",
                        "data-component-name": "Sonner",
                        "data-component-content": "%7B%7D"
                    }), w.jsx(RN, {
                        "data-lov-id": "src/App.tsx:21:10",
                        "data-lov-name": "BrowserRouter",
                        "data-component-path": "src/App.tsx",
                        "data-component-line": "21",
                        "data-component-file": "App.tsx",
                        "data-component-name": "BrowserRouter",
                        "data-component-content": "%7B%7D",
                        children: w.jsxs(PN, {
                            "data-lov-id": "src/App.tsx:22:12",
                            "data-lov-name": "Routes",
                            "data-component-path": "src/App.tsx",
                            "data-component-line": "22",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Routes",
                            "data-component-content": "%7B%7D",
                            children: [w.jsx(om, {
                                "data-lov-id": "src/App.tsx:23:14",
                                "data-lov-name": "Route",
                                "data-component-path": "src/App.tsx",
                                "data-component-line": "23",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "/",
                                element: w.jsx(u7, {
                                    "data-lov-id": "src/App.tsx:23:39",
                                    "data-lov-name": "Index",
                                    "data-component-path": "src/App.tsx",
                                    "data-component-line": "23",
                                    "data-component-file": "App.tsx",
                                    "data-component-name": "Index",
                                    "data-component-content": "%7B%7D"
                                })
                            }), w.jsx(om, {
                                "data-lov-id": "src/App.tsx:25:14",
                                "data-lov-name": "Route",
                                "data-component-path": "src/App.tsx",
                                "data-component-line": "25",
                                "data-component-file": "App.tsx",
                                "data-component-name": "Route",
                                "data-component-content": "%7B%7D",
                                path: "*",
                                element: w.jsx(d7, {
                                    "data-lov-id": "src/App.tsx:25:39",
                                    "data-lov-name": "NotFound",
                                    "data-component-path": "src/App.tsx",
                                    "data-component-line": "25",
                                    "data-component-file": "App.tsx",
                                    "data-component-name": "NotFound",
                                    "data-component-content": "%7B%7D"
                                })
                            })]
                        })
                    })]
                })
            })
        })
    });
by(document.getElementById("root")).render(w.jsx(f7, {
    "data-lov-id": "src/main.tsx:5:52",
    "data-lov-name": "App",
    "data-component-path": "src/main.tsx",
    "data-component-line": "5",
    "data-component-file": "main.tsx",
    "data-component-name": "App",
    "data-component-content": "%7B%7D"
}));