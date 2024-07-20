;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l)
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(l) {
    const o = {}
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(l) {
    if (l.ep) return
    l.ep = !0
    const o = n(l)
    fetch(l.href, o)
  }
})()
function xc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var os = { exports: {} },
  ll = {},
  is = { exports: {} },
  T = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xn = Symbol.for('react.element'),
  Ec = Symbol.for('react.portal'),
  Cc = Symbol.for('react.fragment'),
  _c = Symbol.for('react.strict_mode'),
  Nc = Symbol.for('react.profiler'),
  Pc = Symbol.for('react.provider'),
  jc = Symbol.for('react.context'),
  zc = Symbol.for('react.forward_ref'),
  Tc = Symbol.for('react.suspense'),
  Lc = Symbol.for('react.memo'),
  Oc = Symbol.for('react.lazy'),
  Vi = Symbol.iterator
function Rc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Vi && e[Vi]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var us = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ss = Object.assign,
  as = {}
function ln(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = as),
    (this.updater = n || us)
}
ln.prototype.isReactComponent = {}
ln.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function cs() {}
cs.prototype = ln.prototype
function Yo(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = as),
    (this.updater = n || us)
}
var Xo = (Yo.prototype = new cs())
Xo.constructor = Yo
ss(Xo, ln.prototype)
Xo.isPureReactComponent = !0
var Wi = Array.isArray,
  fs = Object.prototype.hasOwnProperty,
  Go = { current: null },
  ds = { key: !0, ref: !0, __self: !0, __source: !0 }
function ps(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      fs.call(t, r) && !ds.hasOwnProperty(r) && (l[r] = t[r])
  var u = arguments.length - 2
  if (u === 1) l.children = n
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2]
    l.children = s
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r])
  return { $$typeof: Xn, type: e, key: o, ref: i, props: l, _owner: Go.current }
}
function Dc(e, t) {
  return {
    $$typeof: Xn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Zo(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Xn
}
function Ic(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Qi = /\/+/g
function Cl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Ic('' + e.key)
    : t.toString(36)
}
function kr(e, t, n, r, l) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var i = !1
  if (e === null) i = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Xn:
          case Ec:
            i = !0
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Cl(i, 0) : r),
      Wi(l)
        ? ((n = ''),
          e != null && (n = e.replace(Qi, '$&/') + '/'),
          kr(l, t, n, '', function (c) {
            return c
          }))
        : l != null &&
          (Zo(l) &&
            (l = Dc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Qi, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    )
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Wi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u]
      var s = r + Cl(o, u)
      i += kr(o, t, n, s, l)
    }
  else if (((s = Rc(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Cl(o, u++)), (i += kr(o, t, n, s, l))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return i
}
function tr(e, t, n) {
  if (e == null) return e
  var r = [],
    l = 0
  return (
    kr(e, r, '', '', function (o) {
      return t.call(n, o, l++)
    }),
    r
  )
}
function Mc(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var se = { current: null },
  xr = { transition: null },
  Fc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: xr,
    ReactCurrentOwner: Go,
  }
function ms() {
  throw Error('act(...) is not supported in production builds of React.')
}
T.Children = {
  map: tr,
  forEach: function (e, t, n) {
    tr(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      tr(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      tr(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Zo(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
T.Component = ln
T.Fragment = Cc
T.Profiler = Nc
T.PureComponent = Yo
T.StrictMode = _c
T.Suspense = Tc
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fc
T.act = ms
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = ss({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Go.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps
    for (s in t)
      fs.call(t, s) &&
        !ds.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    u = Array(s)
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2]
    r.children = u
  }
  return { $$typeof: Xn, type: e.type, key: l, ref: o, props: r, _owner: i }
}
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: jc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pc, _context: e }),
    (e.Consumer = e)
  )
}
T.createElement = ps
T.createFactory = function (e) {
  var t = ps.bind(null, e)
  return (t.type = e), t
}
T.createRef = function () {
  return { current: null }
}
T.forwardRef = function (e) {
  return { $$typeof: zc, render: e }
}
T.isValidElement = Zo
T.lazy = function (e) {
  return { $$typeof: Oc, _payload: { _status: -1, _result: e }, _init: Mc }
}
T.memo = function (e, t) {
  return { $$typeof: Lc, type: e, compare: t === void 0 ? null : t }
}
T.startTransition = function (e) {
  var t = xr.transition
  xr.transition = {}
  try {
    e()
  } finally {
    xr.transition = t
  }
}
T.unstable_act = ms
T.useCallback = function (e, t) {
  return se.current.useCallback(e, t)
}
T.useContext = function (e) {
  return se.current.useContext(e)
}
T.useDebugValue = function () {}
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e)
}
T.useEffect = function (e, t) {
  return se.current.useEffect(e, t)
}
T.useId = function () {
  return se.current.useId()
}
T.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n)
}
T.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t)
}
T.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t)
}
T.useMemo = function (e, t) {
  return se.current.useMemo(e, t)
}
T.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n)
}
T.useRef = function (e) {
  return se.current.useRef(e)
}
T.useState = function (e) {
  return se.current.useState(e)
}
T.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n)
}
T.useTransition = function () {
  return se.current.useTransition()
}
T.version = '18.3.1'
is.exports = T
var X = is.exports
const Uc = xc(X)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c = X,
  Ac = Symbol.for('react.element'),
  Bc = Symbol.for('react.fragment'),
  Hc = Object.prototype.hasOwnProperty,
  Vc = $c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wc = { key: !0, ref: !0, __self: !0, __source: !0 }
function hs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref)
  for (r in t) Hc.call(t, r) && !Wc.hasOwnProperty(r) && (l[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r])
  return { $$typeof: Ac, type: e, key: o, ref: i, props: l, _owner: Vc.current }
}
ll.Fragment = Bc
ll.jsx = hs
ll.jsxs = hs
os.exports = ll
var v = os.exports,
  Zl = {},
  vs = { exports: {} },
  we = {},
  ys = { exports: {} },
  gs = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(C, j) {
    var z = C.length
    C.push(j)
    e: for (; 0 < z; ) {
      var W = (z - 1) >>> 1,
        Z = C[W]
      if (0 < l(Z, j)) (C[W] = j), (C[z] = Z), (z = W)
      else break e
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0]
  }
  function r(C) {
    if (C.length === 0) return null
    var j = C[0],
      z = C.pop()
    if (z !== j) {
      C[0] = z
      e: for (var W = 0, Z = C.length, bn = Z >>> 1; W < bn; ) {
        var vt = 2 * (W + 1) - 1,
          El = C[vt],
          yt = vt + 1,
          er = C[yt]
        if (0 > l(El, z))
          yt < Z && 0 > l(er, El)
            ? ((C[W] = er), (C[yt] = z), (W = yt))
            : ((C[W] = El), (C[vt] = z), (W = vt))
        else if (yt < Z && 0 > l(er, z)) (C[W] = er), (C[yt] = z), (W = yt)
        else break e
      }
    }
    return j
  }
  function l(C, j) {
    var z = C.sortIndex - j.sortIndex
    return z !== 0 ? z : C.id - j.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var i = Date,
      u = i.now()
    e.unstable_now = function () {
      return i.now() - u
    }
  }
  var s = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    y = !1,
    S = !1,
    k = !1,
    R = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function d(C) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c)
      else if (j.startTime <= C) r(c), (j.sortIndex = j.expirationTime), t(s, j)
      else break
      j = n(c)
    }
  }
  function g(C) {
    if (((k = !1), d(C), !S))
      if (n(s) !== null) (S = !0), kl(E)
      else {
        var j = n(c)
        j !== null && xl(g, j.startTime - C)
      }
  }
  function E(C, j) {
    ;(S = !1), k && ((k = !1), f(P), (P = -1)), (y = !0)
    var z = p
    try {
      for (
        d(j), h = n(s);
        h !== null && (!(h.expirationTime > j) || (C && !Pe()));

      ) {
        var W = h.callback
        if (typeof W == 'function') {
          ;(h.callback = null), (p = h.priorityLevel)
          var Z = W(h.expirationTime <= j)
          ;(j = e.unstable_now()),
            typeof Z == 'function' ? (h.callback = Z) : h === n(s) && r(s),
            d(j)
        } else r(s)
        h = n(s)
      }
      if (h !== null) var bn = !0
      else {
        var vt = n(c)
        vt !== null && xl(g, vt.startTime - j), (bn = !1)
      }
      return bn
    } finally {
      ;(h = null), (p = z), (y = !1)
    }
  }
  var _ = !1,
    N = null,
    P = -1,
    V = 5,
    L = -1
  function Pe() {
    return !(e.unstable_now() - L < V)
  }
  function sn() {
    if (N !== null) {
      var C = e.unstable_now()
      L = C
      var j = !0
      try {
        j = N(!0, C)
      } finally {
        j ? an() : ((_ = !1), (N = null))
      }
    } else _ = !1
  }
  var an
  if (typeof a == 'function')
    an = function () {
      a(sn)
    }
  else if (typeof MessageChannel < 'u') {
    var Hi = new MessageChannel(),
      kc = Hi.port2
    ;(Hi.port1.onmessage = sn),
      (an = function () {
        kc.postMessage(null)
      })
  } else
    an = function () {
      R(sn, 0)
    }
  function kl(C) {
    ;(N = C), _ || ((_ = !0), an())
  }
  function xl(C, j) {
    P = R(function () {
      C(e.unstable_now())
    }, j)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null
    }),
    (e.unstable_continueExecution = function () {
      S || y || ((S = !0), kl(E))
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (V = 0 < C ? Math.floor(1e3 / C) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var j = 3
          break
        default:
          j = p
      }
      var z = p
      p = j
      try {
        return C()
      } finally {
        p = z
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, j) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          C = 3
      }
      var z = p
      p = C
      try {
        return j()
      } finally {
        p = z
      }
    }),
    (e.unstable_scheduleCallback = function (C, j, z) {
      var W = e.unstable_now()
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? W + z : W))
          : (z = W),
        C)
      ) {
        case 1:
          var Z = -1
          break
        case 2:
          Z = 250
          break
        case 5:
          Z = 1073741823
          break
        case 4:
          Z = 1e4
          break
        default:
          Z = 5e3
      }
      return (
        (Z = z + Z),
        (C = {
          id: m++,
          callback: j,
          priorityLevel: C,
          startTime: z,
          expirationTime: Z,
          sortIndex: -1,
        }),
        z > W
          ? ((C.sortIndex = z),
            t(c, C),
            n(s) === null &&
              C === n(c) &&
              (k ? (f(P), (P = -1)) : (k = !0), xl(g, z - W)))
          : ((C.sortIndex = Z), t(s, C), S || y || ((S = !0), kl(E))),
        C
      )
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (C) {
      var j = p
      return function () {
        var z = p
        p = j
        try {
          return C.apply(this, arguments)
        } finally {
          p = z
        }
      }
    })
})(gs)
ys.exports = gs
var Qc = ys.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kc = X,
  ge = Qc
function w(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var ws = new Set(),
  Ln = {}
function Tt(e, t) {
  Jt(e, t), Jt(e + 'Capture', t)
}
function Jt(e, t) {
  for (Ln[e] = t, e = 0; e < t.length; e++) ws.add(t[e])
}
var Qe = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Jl = Object.prototype.hasOwnProperty,
  Yc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ki = {},
  Yi = {}
function Xc(e) {
  return Jl.call(Yi, e)
    ? !0
    : Jl.call(Ki, e)
      ? !1
      : Yc.test(e)
        ? (Yi[e] = !0)
        : ((Ki[e] = !0), !1)
}
function Gc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Zc(e, t, n, r) {
  if (t === null || typeof t > 'u' || Gc(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ae(e, t, n, r, l, o, i) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i)
}
var te = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Jo = /[\-:]([a-z])/g
function qo(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Jo, qo)
    te[t] = new ae(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Jo, qo)
    te[t] = new ae(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Jo, qo)
  te[t] = new ae(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
te.xlinkHref = new ae(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function bo(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null
  ;(l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Zc(t, n, l, r) && (n = null),
    r || l === null
      ? Xc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ge = Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nr = Symbol.for('react.element'),
  Rt = Symbol.for('react.portal'),
  Dt = Symbol.for('react.fragment'),
  ei = Symbol.for('react.strict_mode'),
  ql = Symbol.for('react.profiler'),
  Ss = Symbol.for('react.provider'),
  ks = Symbol.for('react.context'),
  ti = Symbol.for('react.forward_ref'),
  bl = Symbol.for('react.suspense'),
  eo = Symbol.for('react.suspense_list'),
  ni = Symbol.for('react.memo'),
  Je = Symbol.for('react.lazy'),
  xs = Symbol.for('react.offscreen'),
  Xi = Symbol.iterator
function cn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Xi && e[Xi]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var B = Object.assign,
  _l
function gn(e) {
  if (_l === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      _l = (t && t[1]) || ''
    }
  return (
    `
` +
    _l +
    e
  )
}
var Nl = !1
function Pl(e, t) {
  if (!e || Nl) return ''
  Nl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (c) {
          var r = c
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (c) {
          r = c
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (c) {
        r = c
      }
      e()
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                )
              }
            while (1 <= i && 0 <= u)
          break
        }
    }
  } finally {
    ;(Nl = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? gn(e) : ''
}
function Jc(e) {
  switch (e.tag) {
    case 5:
      return gn(e.type)
    case 16:
      return gn('Lazy')
    case 13:
      return gn('Suspense')
    case 19:
      return gn('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Pl(e.type, !1)), e
    case 11:
      return (e = Pl(e.type.render, !1)), e
    case 1:
      return (e = Pl(e.type, !0)), e
    default:
      return ''
  }
}
function to(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Dt:
      return 'Fragment'
    case Rt:
      return 'Portal'
    case ql:
      return 'Profiler'
    case ei:
      return 'StrictMode'
    case bl:
      return 'Suspense'
    case eo:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ks:
        return (e.displayName || 'Context') + '.Consumer'
      case Ss:
        return (e._context.displayName || 'Context') + '.Provider'
      case ti:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case ni:
        return (
          (t = e.displayName || null), t !== null ? t : to(e.type) || 'Memo'
        )
      case Je:
        ;(t = e._payload), (e = e._init)
        try {
          return to(e(t))
        } catch {}
    }
  return null
}
function qc(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return to(t)
    case 8:
      return t === ei ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function ft(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Es(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function bc(e) {
  var t = Es(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this)
        },
        set: function (i) {
          ;(r = '' + i), o.call(this, i)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (i) {
          r = '' + i
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = bc(e))
}
function Cs(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Es(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Rr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function no(e, t) {
  var n = t.checked
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Gi(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function _s(e, t) {
  ;(t = t.checked), t != null && bo(e, 'checked', t, !1)
}
function ro(e, t) {
  _s(e, t)
  var n = ft(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? lo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && lo(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Zi(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function lo(e, t, n) {
  ;(t !== 'number' || Rr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var wn = Array.isArray
function Qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
        return
      }
      t !== null || e[l].disabled || (t = e[l])
    }
    t !== null && (t.selected = !0)
  }
}
function oo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91))
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Ji(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92))
      if (wn(n)) {
        if (1 < n.length) throw Error(w(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: ft(n) }
}
function Ns(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function qi(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Ps(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function io(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ps(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var lr,
  js = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        lr = lr || document.createElement('div'),
          lr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function On(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var xn = {
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
    strokeWidth: !0,
  },
  ef = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(xn).forEach(function (e) {
  ef.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xn[t] = xn[e])
  })
})
function zs(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (xn.hasOwnProperty(e) && xn[e])
      ? ('' + t).trim()
      : t + 'px'
}
function Ts(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = zs(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l)
    }
}
var tf = B(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
)
function uo(e, t) {
  if (t) {
    if (tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(w(62))
  }
}
function so(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var ao = null
function ri(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var co = null,
  Kt = null,
  Yt = null
function bi(e) {
  if ((e = Jn(e))) {
    if (typeof co != 'function') throw Error(w(280))
    var t = e.stateNode
    t && ((t = al(t)), co(e.stateNode, e.type, t))
  }
}
function Ls(e) {
  Kt ? (Yt ? Yt.push(e) : (Yt = [e])) : (Kt = e)
}
function Os() {
  if (Kt) {
    var e = Kt,
      t = Yt
    if (((Yt = Kt = null), bi(e), t)) for (e = 0; e < t.length; e++) bi(t[e])
  }
}
function Rs(e, t) {
  return e(t)
}
function Ds() {}
var jl = !1
function Is(e, t, n) {
  if (jl) return e(t, n)
  jl = !0
  try {
    return Rs(e, t, n)
  } finally {
    ;(jl = !1), (Kt !== null || Yt !== null) && (Ds(), Os())
  }
}
function Rn(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = al(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(w(231, t, typeof n))
  return n
}
var fo = !1
if (Qe)
  try {
    var fn = {}
    Object.defineProperty(fn, 'passive', {
      get: function () {
        fo = !0
      },
    }),
      window.addEventListener('test', fn, fn),
      window.removeEventListener('test', fn, fn)
  } catch {
    fo = !1
  }
function nf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, c)
  } catch (m) {
    this.onError(m)
  }
}
var En = !1,
  Dr = null,
  Ir = !1,
  po = null,
  rf = {
    onError: function (e) {
      ;(En = !0), (Dr = e)
    },
  }
function lf(e, t, n, r, l, o, i, u, s) {
  ;(En = !1), (Dr = null), nf.apply(rf, arguments)
}
function of(e, t, n, r, l, o, i, u, s) {
  if ((lf.apply(this, arguments), En)) {
    if (En) {
      var c = Dr
      ;(En = !1), (Dr = null)
    } else throw Error(w(198))
    Ir || ((Ir = !0), (po = c))
  }
}
function Lt(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Ms(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function eu(e) {
  if (Lt(e) !== e) throw Error(w(188))
}
function uf(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Lt(e)), t === null)) throw Error(w(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var l = n.return
    if (l === null) break
    var o = l.alternate
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return eu(l), e
        if (o === r) return eu(l), t
        o = o.sibling
      }
      throw Error(w(188))
    }
    if (n.return !== r.return) (n = l), (r = o)
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          ;(i = !0), (n = l), (r = o)
          break
        }
        if (u === r) {
          ;(i = !0), (r = l), (n = o)
          break
        }
        u = u.sibling
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            ;(i = !0), (n = o), (r = l)
            break
          }
          if (u === r) {
            ;(i = !0), (r = o), (n = l)
            break
          }
          u = u.sibling
        }
        if (!i) throw Error(w(189))
      }
    }
    if (n.alternate !== r) throw Error(w(190))
  }
  if (n.tag !== 3) throw Error(w(188))
  return n.stateNode.current === n ? e : t
}
function Fs(e) {
  return (e = uf(e)), e !== null ? Us(e) : null
}
function Us(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Us(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var $s = ge.unstable_scheduleCallback,
  tu = ge.unstable_cancelCallback,
  sf = ge.unstable_shouldYield,
  af = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  cf = ge.unstable_getCurrentPriorityLevel,
  li = ge.unstable_ImmediatePriority,
  As = ge.unstable_UserBlockingPriority,
  Mr = ge.unstable_NormalPriority,
  ff = ge.unstable_LowPriority,
  Bs = ge.unstable_IdlePriority,
  ol = null,
  Ue = null
function df(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == 'function')
    try {
      Ue.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : hf,
  pf = Math.log,
  mf = Math.LN2
function hf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pf(e) / mf) | 0)) | 0
}
var or = 64,
  ir = 4194304
function Sn(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
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
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Fr(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455
  if (i !== 0) {
    var u = i & ~l
    u !== 0 ? (r = Sn(u)) : ((o &= i), o !== 0 && (r = Sn(o)))
  } else (i = n & ~l), i !== 0 ? (r = Sn(i)) : o !== 0 && (r = Sn(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l)
  return r
}
function vf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
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
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function yf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Oe(o),
      u = 1 << i,
      s = l[i]
    s === -1
      ? (!(u & n) || u & r) && (l[i] = vf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u)
  }
}
function mo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Hs() {
  var e = or
  return (or <<= 1), !(or & 4194240) && (or = 64), e
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Gn(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n)
}
function gf(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      o = 1 << l
    ;(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o)
  }
}
function oi(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r
    ;(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l)
  }
}
var D = 0
function Vs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Ws,
  ii,
  Qs,
  Ks,
  Ys,
  ho = !1,
  ur = [],
  rt = null,
  lt = null,
  ot = null,
  Dn = new Map(),
  In = new Map(),
  be = [],
  wf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function nu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      rt = null
      break
    case 'dragenter':
    case 'dragleave':
      lt = null
      break
    case 'mouseover':
    case 'mouseout':
      ot = null
      break
    case 'pointerover':
    case 'pointerout':
      Dn.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      In.delete(t.pointerId)
  }
}
function dn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Jn(t)), t !== null && ii(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e)
}
function Sf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (rt = dn(rt, e, t, n, r, l)), !0
    case 'dragenter':
      return (lt = dn(lt, e, t, n, r, l)), !0
    case 'mouseover':
      return (ot = dn(ot, e, t, n, r, l)), !0
    case 'pointerover':
      var o = l.pointerId
      return Dn.set(o, dn(Dn.get(o) || null, e, t, n, r, l)), !0
    case 'gotpointercapture':
      return (
        (o = l.pointerId), In.set(o, dn(In.get(o) || null, e, t, n, r, l)), !0
      )
  }
  return !1
}
function Xs(e) {
  var t = St(e.target)
  if (t !== null) {
    var n = Lt(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ms(n)), t !== null)) {
          ;(e.blockedOn = t),
            Ys(e.priority, function () {
              Qs(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Er(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(ao = r), n.target.dispatchEvent(r), (ao = null)
    } else return (t = Jn(n)), t !== null && ii(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function ru(e, t, n) {
  Er(e) && n.delete(t)
}
function kf() {
  ;(ho = !1),
    rt !== null && Er(rt) && (rt = null),
    lt !== null && Er(lt) && (lt = null),
    ot !== null && Er(ot) && (ot = null),
    Dn.forEach(ru),
    In.forEach(ru)
}
function pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ho ||
      ((ho = !0), ge.unstable_scheduleCallback(ge.unstable_NormalPriority, kf)))
}
function Mn(e) {
  function t(l) {
    return pn(l, e)
  }
  if (0 < ur.length) {
    pn(ur[0], e)
    for (var n = 1; n < ur.length; n++) {
      var r = ur[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    rt !== null && pn(rt, e),
      lt !== null && pn(lt, e),
      ot !== null && pn(ot, e),
      Dn.forEach(t),
      In.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Xs(n), n.blockedOn === null && be.shift()
}
var Xt = Ge.ReactCurrentBatchConfig,
  Ur = !0
function xf(e, t, n, r) {
  var l = D,
    o = Xt.transition
  Xt.transition = null
  try {
    ;(D = 1), ui(e, t, n, r)
  } finally {
    ;(D = l), (Xt.transition = o)
  }
}
function Ef(e, t, n, r) {
  var l = D,
    o = Xt.transition
  Xt.transition = null
  try {
    ;(D = 4), ui(e, t, n, r)
  } finally {
    ;(D = l), (Xt.transition = o)
  }
}
function ui(e, t, n, r) {
  if (Ur) {
    var l = vo(e, t, n, r)
    if (l === null) $l(e, t, r, $r, n), nu(e, r)
    else if (Sf(l, e, t, n, r)) r.stopPropagation()
    else if ((nu(e, r), t & 4 && -1 < wf.indexOf(e))) {
      for (; l !== null; ) {
        var o = Jn(l)
        if (
          (o !== null && Ws(o),
          (o = vo(e, t, n, r)),
          o === null && $l(e, t, r, $r, n),
          o === l)
        )
          break
        l = o
      }
      l !== null && r.stopPropagation()
    } else $l(e, t, r, null, n)
  }
}
var $r = null
function vo(e, t, n, r) {
  if ((($r = null), (e = ri(r)), (e = St(e)), e !== null))
    if (((t = Lt(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Ms(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return ($r = e), null
}
function Gs(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (cf()) {
        case li:
          return 1
        case As:
          return 4
        case Mr:
        case ff:
          return 16
        case Bs:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var tt = null,
  si = null,
  Cr = null
function Zs() {
  if (Cr) return Cr
  var e,
    t = si,
    n = t.length,
    r,
    l = 'value' in tt ? tt.value : tt.textContent,
    o = l.length
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Cr = l.slice(e, 1 < r ? 1 - r : void 0))
}
function _r(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function sr() {
  return !0
}
function lu() {
  return !1
}
function Se(e) {
  function t(n, r, l, o, i) {
    ;(this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null)
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? sr
        : lu),
      (this.isPropagationStopped = lu),
      this
    )
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = sr))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = sr))
      },
      persist: function () {},
      isPersistent: sr,
    }),
    t
  )
}
var on = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ai = Se(on),
  Zn = B({}, on, { view: 0, detail: 0 }),
  Cf = Se(Zn),
  Tl,
  Ll,
  mn,
  il = B({}, Zn, {
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
    getModifierState: ci,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== mn &&
            (mn && e.type === 'mousemove'
              ? ((Tl = e.screenX - mn.screenX), (Ll = e.screenY - mn.screenY))
              : (Ll = Tl = 0),
            (mn = e)),
          Tl)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ll
    },
  }),
  ou = Se(il),
  _f = B({}, il, { dataTransfer: 0 }),
  Nf = Se(_f),
  Pf = B({}, Zn, { relatedTarget: 0 }),
  Ol = Se(Pf),
  jf = B({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zf = Se(jf),
  Tf = B({}, on, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Lf = Se(Tf),
  Of = B({}, on, { data: 0 }),
  iu = Se(Of),
  Rf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Df = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  If = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Mf(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = If[e]) ? !!t[e] : !1
}
function ci() {
  return Mf
}
var Ff = B({}, Zn, {
    key: function (e) {
      if (e.key) {
        var t = Rf[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = _r(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Df[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ci,
    charCode: function (e) {
      return e.type === 'keypress' ? _r(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? _r(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    },
  }),
  Uf = Se(Ff),
  $f = B({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  uu = Se($f),
  Af = B({}, Zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ci,
  }),
  Bf = Se(Af),
  Hf = B({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vf = Se(Hf),
  Wf = B({}, il, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Qf = Se(Wf),
  Kf = [9, 13, 27, 32],
  fi = Qe && 'CompositionEvent' in window,
  Cn = null
Qe && 'documentMode' in document && (Cn = document.documentMode)
var Yf = Qe && 'TextEvent' in window && !Cn,
  Js = Qe && (!fi || (Cn && 8 < Cn && 11 >= Cn)),
  su = ' ',
  au = !1
function qs(e, t) {
  switch (e) {
    case 'keyup':
      return Kf.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function bs(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var It = !1
function Xf(e, t) {
  switch (e) {
    case 'compositionend':
      return bs(t)
    case 'keypress':
      return t.which !== 32 ? null : ((au = !0), su)
    case 'textInput':
      return (e = t.data), e === su && au ? null : e
    default:
      return null
  }
}
function Gf(e, t) {
  if (It)
    return e === 'compositionend' || (!fi && qs(e, t))
      ? ((e = Zs()), (Cr = si = tt = null), (It = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Js && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Zf = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
}
function cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Zf[e.type] : t === 'textarea'
}
function ea(e, t, n, r) {
  Ls(r),
    (t = Ar(t, 'onChange')),
    0 < t.length &&
      ((n = new ai('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var _n = null,
  Fn = null
function Jf(e) {
  fa(e, 0)
}
function ul(e) {
  var t = Ut(e)
  if (Cs(t)) return e
}
function qf(e, t) {
  if (e === 'change') return t
}
var ta = !1
if (Qe) {
  var Rl
  if (Qe) {
    var Dl = 'oninput' in document
    if (!Dl) {
      var fu = document.createElement('div')
      fu.setAttribute('oninput', 'return;'),
        (Dl = typeof fu.oninput == 'function')
    }
    Rl = Dl
  } else Rl = !1
  ta = Rl && (!document.documentMode || 9 < document.documentMode)
}
function du() {
  _n && (_n.detachEvent('onpropertychange', na), (Fn = _n = null))
}
function na(e) {
  if (e.propertyName === 'value' && ul(Fn)) {
    var t = []
    ea(t, Fn, e, ri(e)), Is(Jf, t)
  }
}
function bf(e, t, n) {
  e === 'focusin'
    ? (du(), (_n = t), (Fn = n), _n.attachEvent('onpropertychange', na))
    : e === 'focusout' && du()
}
function ed(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ul(Fn)
}
function td(e, t) {
  if (e === 'click') return ul(t)
}
function nd(e, t) {
  if (e === 'input' || e === 'change') return ul(t)
}
function rd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var De = typeof Object.is == 'function' ? Object.is : rd
function Un(e, t) {
  if (De(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var l = n[r]
    if (!Jl.call(t, l) || !De(e[l], t[l])) return !1
  }
  return !0
}
function pu(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function mu(e, t) {
  var n = pu(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = pu(n)
  }
}
function ra(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ra(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function la() {
  for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Rr(e.document)
  }
  return t
}
function di(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function ld(e) {
  var t = la(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ra(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && di(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var l = n.textContent.length,
          o = Math.min(r.start, l)
        ;(r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = mu(n, o))
        var i = mu(n, r)
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var od = Qe && 'documentMode' in document && 11 >= document.documentMode,
  Mt = null,
  yo = null,
  Nn = null,
  go = !1
function hu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  go ||
    Mt == null ||
    Mt !== Rr(r) ||
    ((r = Mt),
    'selectionStart' in r && di(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Nn && Un(Nn, r)) ||
      ((Nn = r),
      (r = Ar(yo, 'onSelect')),
      0 < r.length &&
        ((t = new ai('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mt))))
}
function ar(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Ft = {
    animationend: ar('Animation', 'AnimationEnd'),
    animationiteration: ar('Animation', 'AnimationIteration'),
    animationstart: ar('Animation', 'AnimationStart'),
    transitionend: ar('Transition', 'TransitionEnd'),
  },
  Il = {},
  oa = {}
Qe &&
  ((oa = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ft.animationend.animation,
    delete Ft.animationiteration.animation,
    delete Ft.animationstart.animation),
  'TransitionEvent' in window || delete Ft.transitionend.transition)
function sl(e) {
  if (Il[e]) return Il[e]
  if (!Ft[e]) return e
  var t = Ft[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in oa) return (Il[e] = t[n])
  return e
}
var ia = sl('animationend'),
  ua = sl('animationiteration'),
  sa = sl('animationstart'),
  aa = sl('transitionend'),
  ca = new Map(),
  vu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function pt(e, t) {
  ca.set(e, t), Tt(t, [e])
}
for (var Ml = 0; Ml < vu.length; Ml++) {
  var Fl = vu[Ml],
    id = Fl.toLowerCase(),
    ud = Fl[0].toUpperCase() + Fl.slice(1)
  pt(id, 'on' + ud)
}
pt(ia, 'onAnimationEnd')
pt(ua, 'onAnimationIteration')
pt(sa, 'onAnimationStart')
pt('dblclick', 'onDoubleClick')
pt('focusin', 'onFocus')
pt('focusout', 'onBlur')
pt(aa, 'onTransitionEnd')
Jt('onMouseEnter', ['mouseout', 'mouseover'])
Jt('onMouseLeave', ['mouseout', 'mouseover'])
Jt('onPointerEnter', ['pointerout', 'pointerover'])
Jt('onPointerLeave', ['pointerout', 'pointerover'])
Tt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Tt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Tt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Tt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Tt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Tt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var kn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  sd = new Set('cancel close invalid load scroll toggle'.split(' ').concat(kn))
function yu(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), of(r, t, void 0, e), (e.currentTarget = null)
}
function fa(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e
          yu(l, u, c), (o = s)
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e
          yu(l, u, c), (o = s)
        }
    }
  }
  if (Ir) throw ((e = po), (Ir = !1), (po = null), e)
}
function M(e, t) {
  var n = t[Eo]
  n === void 0 && (n = t[Eo] = new Set())
  var r = e + '__bubble'
  n.has(r) || (da(t, e, 2, !1), n.add(r))
}
function Ul(e, t, n) {
  var r = 0
  t && (r |= 4), da(n, e, r, t)
}
var cr = '_reactListening' + Math.random().toString(36).slice(2)
function $n(e) {
  if (!e[cr]) {
    ;(e[cr] = !0),
      ws.forEach(function (n) {
        n !== 'selectionchange' && (sd.has(n) || Ul(n, !1, e), Ul(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[cr] || ((t[cr] = !0), Ul('selectionchange', !1, t))
  }
}
function da(e, t, n, r) {
  switch (Gs(t)) {
    case 1:
      var l = xf
      break
    case 4:
      l = Ef
      break
    default:
      l = ui
  }
  ;(n = l.bind(null, t, n, e)),
    (l = void 0),
    !fo ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1)
}
function $l(e, t, n, r, l) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var i = r.tag
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return
            i = i.return
          }
        for (; u !== null; ) {
          if (((i = St(u)), i === null)) return
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
  Is(function () {
    var c = o,
      m = ri(n),
      h = []
    e: {
      var p = ca.get(e)
      if (p !== void 0) {
        var y = ai,
          S = e
        switch (e) {
          case 'keypress':
            if (_r(n) === 0) break e
          case 'keydown':
          case 'keyup':
            y = Uf
            break
          case 'focusin':
            ;(S = 'focus'), (y = Ol)
            break
          case 'focusout':
            ;(S = 'blur'), (y = Ol)
            break
          case 'beforeblur':
          case 'afterblur':
            y = Ol
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = ou
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = Nf
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = Bf
            break
          case ia:
          case ua:
          case sa:
            y = zf
            break
          case aa:
            y = Vf
            break
          case 'scroll':
            y = Cf
            break
          case 'wheel':
            y = Qf
            break
          case 'copy':
          case 'cut':
          case 'paste':
            y = Lf
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = uu
        }
        var k = (t & 4) !== 0,
          R = !k && e === 'scroll',
          f = k ? (p !== null ? p + 'Capture' : null) : p
        k = []
        for (var a = c, d; a !== null; ) {
          d = a
          var g = d.stateNode
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = Rn(a, f)), g != null && k.push(An(a, g, d)))),
            R)
          )
            break
          a = a.return
        }
        0 < k.length &&
          ((p = new y(p, S, null, n, m)), h.push({ event: p, listeners: k }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== ao &&
            (S = n.relatedTarget || n.fromElement) &&
            (St(S) || S[Ke]))
        )
          break e
        if (
          (y || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((S = n.relatedTarget || n.toElement),
              (y = c),
              (S = S ? St(S) : null),
              S !== null &&
                ((R = Lt(S)), S !== R || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((y = null), (S = c)),
          y !== S)
        ) {
          if (
            ((k = ou),
            (g = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = uu),
              (g = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (a = 'pointer')),
            (R = y == null ? p : Ut(y)),
            (d = S == null ? p : Ut(S)),
            (p = new k(g, a + 'leave', y, n, m)),
            (p.target = R),
            (p.relatedTarget = d),
            (g = null),
            St(m) === c &&
              ((k = new k(f, a + 'enter', S, n, m)),
              (k.target = d),
              (k.relatedTarget = R),
              (g = k)),
            (R = g),
            y && S)
          )
            t: {
              for (k = y, f = S, a = 0, d = k; d; d = Ot(d)) a++
              for (d = 0, g = f; g; g = Ot(g)) d++
              for (; 0 < a - d; ) (k = Ot(k)), a--
              for (; 0 < d - a; ) (f = Ot(f)), d--
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t
                ;(k = Ot(k)), (f = Ot(f))
              }
              k = null
            }
          else k = null
          y !== null && gu(h, p, y, k, !1),
            S !== null && R !== null && gu(h, R, S, k, !0)
        }
      }
      e: {
        if (
          ((p = c ? Ut(c) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && p.type === 'file'))
        )
          var E = qf
        else if (cu(p))
          if (ta) E = nd
          else {
            E = ed
            var _ = bf
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (E = td)
        if (E && (E = E(e, c))) {
          ea(h, E, n, m)
          break e
        }
        _ && _(e, p, c),
          e === 'focusout' &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === 'number' &&
            lo(p, 'number', p.value)
      }
      switch (((_ = c ? Ut(c) : window), e)) {
        case 'focusin':
          ;(cu(_) || _.contentEditable === 'true') &&
            ((Mt = _), (yo = c), (Nn = null))
          break
        case 'focusout':
          Nn = yo = Mt = null
          break
        case 'mousedown':
          go = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(go = !1), hu(h, n, m)
          break
        case 'selectionchange':
          if (od) break
        case 'keydown':
        case 'keyup':
          hu(h, n, m)
      }
      var N
      if (fi)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart'
              break e
            case 'compositionend':
              P = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              P = 'onCompositionUpdate'
              break e
          }
          P = void 0
        }
      else
        It
          ? qs(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart')
      P &&
        (Js &&
          n.locale !== 'ko' &&
          (It || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && It && (N = Zs())
            : ((tt = m),
              (si = 'value' in tt ? tt.value : tt.textContent),
              (It = !0))),
        (_ = Ar(c, P)),
        0 < _.length &&
          ((P = new iu(P, e, null, n, m)),
          h.push({ event: P, listeners: _ }),
          N ? (P.data = N) : ((N = bs(n)), N !== null && (P.data = N)))),
        (N = Yf ? Xf(e, n) : Gf(e, n)) &&
          ((c = Ar(c, 'onBeforeInput')),
          0 < c.length &&
            ((m = new iu('onBeforeInput', 'beforeinput', null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = N)))
    }
    fa(h, t)
  })
}
function An(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Ar(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Rn(e, n)),
      o != null && r.unshift(An(e, o, l)),
      (o = Rn(e, t)),
      o != null && r.push(An(e, o, l))),
      (e = e.return)
  }
  return r
}
function Ot(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function gu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode
    if (s !== null && s === r) break
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Rn(n, o)), s != null && i.unshift(An(n, s, u)))
        : l || ((s = Rn(n, o)), s != null && i.push(An(n, s, u)))),
      (n = n.return)
  }
  i.length !== 0 && e.push({ event: t, listeners: i })
}
var ad = /\r\n?/g,
  cd = /\u0000|\uFFFD/g
function wu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      ad,
      `
`
    )
    .replace(cd, '')
}
function fr(e, t, n) {
  if (((t = wu(t)), wu(e) !== t && n)) throw Error(w(425))
}
function Br() {}
var wo = null,
  So = null
function ko(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var xo = typeof setTimeout == 'function' ? setTimeout : void 0,
  fd = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Su = typeof Promise == 'function' ? Promise : void 0,
  dd =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Su < 'u'
        ? function (e) {
            return Su.resolve(null).then(e).catch(pd)
          }
        : xo
function pd(e) {
  setTimeout(function () {
    throw e
  })
}
function Al(e, t) {
  var n = t,
    r = 0
  do {
    var l = n.nextSibling
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Mn(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = l
  } while (n)
  Mn(t)
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function ku(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var un = Math.random().toString(36).slice(2),
  Fe = '__reactFiber$' + un,
  Bn = '__reactProps$' + un,
  Ke = '__reactContainer$' + un,
  Eo = '__reactEvents$' + un,
  md = '__reactListeners$' + un,
  hd = '__reactHandles$' + un
function St(e) {
  var t = e[Fe]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Fe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ku(e); e !== null; ) {
          if ((n = e[Fe])) return n
          e = ku(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Jn(e) {
  return (
    (e = e[Fe] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(w(33))
}
function al(e) {
  return e[Bn] || null
}
var Co = [],
  $t = -1
function mt(e) {
  return { current: e }
}
function F(e) {
  0 > $t || ((e.current = Co[$t]), (Co[$t] = null), $t--)
}
function I(e, t) {
  $t++, (Co[$t] = e.current), (e.current = t)
}
var dt = {},
  oe = mt(dt),
  de = mt(!1),
  _t = dt
function qt(e, t) {
  var n = e.type.contextTypes
  if (!n) return dt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var l = {},
    o
  for (o in n) l[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  )
}
function pe(e) {
  return (e = e.childContextTypes), e != null
}
function Hr() {
  F(de), F(oe)
}
function xu(e, t, n) {
  if (oe.current !== dt) throw Error(w(168))
  I(oe, t), I(de, n)
}
function pa(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var l in r) if (!(l in t)) throw Error(w(108, qc(e) || 'Unknown', l))
  return B({}, n, r)
}
function Vr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (_t = oe.current),
    I(oe, e),
    I(de, de.current),
    !0
  )
}
function Eu(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(w(169))
  n
    ? ((e = pa(e, t, _t)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(de),
      F(oe),
      I(oe, e))
    : F(de),
    I(de, n)
}
var Be = null,
  cl = !1,
  Bl = !1
function ma(e) {
  Be === null ? (Be = [e]) : Be.push(e)
}
function vd(e) {
  ;(cl = !0), ma(e)
}
function ht() {
  if (!Bl && Be !== null) {
    Bl = !0
    var e = 0,
      t = D
    try {
      var n = Be
      for (D = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Be = null), (cl = !1)
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), $s(li, ht), l)
    } finally {
      ;(D = t), (Bl = !1)
    }
  }
  return null
}
var At = [],
  Bt = 0,
  Wr = null,
  Qr = 0,
  ke = [],
  xe = 0,
  Nt = null,
  He = 1,
  Ve = ''
function gt(e, t) {
  ;(At[Bt++] = Qr), (At[Bt++] = Wr), (Wr = e), (Qr = t)
}
function ha(e, t, n) {
  ;(ke[xe++] = He), (ke[xe++] = Ve), (ke[xe++] = Nt), (Nt = e)
  var r = He
  e = Ve
  var l = 32 - Oe(r) - 1
  ;(r &= ~(1 << l)), (n += 1)
  var o = 32 - Oe(t) + l
  if (30 < o) {
    var i = l - (l % 5)
    ;(o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (He = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Ve = o + e)
  } else (He = (1 << o) | (n << l) | r), (Ve = e)
}
function pi(e) {
  e.return !== null && (gt(e, 1), ha(e, 1, 0))
}
function mi(e) {
  for (; e === Wr; )
    (Wr = At[--Bt]), (At[Bt] = null), (Qr = At[--Bt]), (At[Bt] = null)
  for (; e === Nt; )
    (Nt = ke[--xe]),
      (ke[xe] = null),
      (Ve = ke[--xe]),
      (ke[xe] = null),
      (He = ke[--xe]),
      (ke[xe] = null)
}
var ye = null,
  ve = null,
  U = !1,
  Le = null
function va(e, t) {
  var n = Ee(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Cu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = it(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Nt !== null ? { id: He, overflow: Ve } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function _o(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function No(e) {
  if (U) {
    var t = ve
    if (t) {
      var n = t
      if (!Cu(e, t)) {
        if (_o(e)) throw Error(w(418))
        t = it(n.nextSibling)
        var r = ye
        t && Cu(e, t)
          ? va(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e))
      }
    } else {
      if (_o(e)) throw Error(w(418))
      ;(e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e)
    }
  }
}
function _u(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  ye = e
}
function dr(e) {
  if (e !== ye) return !1
  if (!U) return _u(e), (U = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ko(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (_o(e)) throw (ya(), Error(w(418)))
    for (; t; ) va(e, t), (t = it(t.nextSibling))
  }
  if ((_u(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              ve = it(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      ve = null
    }
  } else ve = ye ? it(e.stateNode.nextSibling) : null
  return !0
}
function ya() {
  for (var e = ve; e; ) e = it(e.nextSibling)
}
function bt() {
  ;(ve = ye = null), (U = !1)
}
function hi(e) {
  Le === null ? (Le = [e]) : Le.push(e)
}
var yd = Ge.ReactCurrentBatchConfig
function hn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309))
        var r = n.stateNode
      }
      if (!r) throw Error(w(147, e))
      var l = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs
            i === null ? delete u[o] : (u[o] = i)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(w(284))
    if (!n._owner) throw Error(w(290, e))
  }
  return e
}
function pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Nu(e) {
  var t = e._init
  return t(e._payload)
}
function ga(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a)
    }
  }
  function n(f, a) {
    if (!e) return null
    for (; a !== null; ) t(f, a), (a = a.sibling)
    return null
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling)
    return f
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    )
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f
  }
  function u(f, a, d, g) {
    return a === null || a.tag !== 6
      ? ((a = Xl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a)
  }
  function s(f, a, d, g) {
    var E = d.type
    return E === Dt
      ? m(f, a, d.props.children, g, d.key)
      : a !== null &&
          (a.elementType === E ||
            (typeof E == 'object' &&
              E !== null &&
              E.$$typeof === Je &&
              Nu(E) === a.type))
        ? ((g = l(a, d.props)), (g.ref = hn(f, a, d)), (g.return = f), g)
        : ((g = Or(d.type, d.key, d.props, null, f.mode, g)),
          (g.ref = hn(f, a, d)),
          (g.return = f),
          g)
  }
  function c(f, a, d, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Gl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a)
  }
  function m(f, a, d, g, E) {
    return a === null || a.tag !== 7
      ? ((a = Ct(d, f.mode, g, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a)
  }
  function h(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = Xl('' + a, f.mode, d)), (a.return = f), a
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case nr:
          return (
            (d = Or(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = hn(f, null, a)),
            (d.return = f),
            d
          )
        case Rt:
          return (a = Gl(a, f.mode, d)), (a.return = f), a
        case Je:
          var g = a._init
          return h(f, g(a._payload), d)
      }
      if (wn(a) || cn(a)) return (a = Ct(a, f.mode, d, null)), (a.return = f), a
      pr(f, a)
    }
    return null
  }
  function p(f, a, d, g) {
    var E = a !== null ? a.key : null
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return E !== null ? null : u(f, a, '' + d, g)
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case nr:
          return d.key === E ? s(f, a, d, g) : null
        case Rt:
          return d.key === E ? c(f, a, d, g) : null
        case Je:
          return (E = d._init), p(f, a, E(d._payload), g)
      }
      if (wn(d) || cn(d)) return E !== null ? null : m(f, a, d, g, null)
      pr(f, d)
    }
    return null
  }
  function y(f, a, d, g, E) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (f = f.get(d) || null), u(a, f, '' + g, E)
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case nr:
          return (f = f.get(g.key === null ? d : g.key) || null), s(a, f, g, E)
        case Rt:
          return (f = f.get(g.key === null ? d : g.key) || null), c(a, f, g, E)
        case Je:
          var _ = g._init
          return y(f, a, d, _(g._payload), E)
      }
      if (wn(g) || cn(g)) return (f = f.get(d) || null), m(a, f, g, E, null)
      pr(a, g)
    }
    return null
  }
  function S(f, a, d, g) {
    for (
      var E = null, _ = null, N = a, P = (a = 0), V = null;
      N !== null && P < d.length;
      P++
    ) {
      N.index > P ? ((V = N), (N = null)) : (V = N.sibling)
      var L = p(f, N, d[P], g)
      if (L === null) {
        N === null && (N = V)
        break
      }
      e && N && L.alternate === null && t(f, N),
        (a = o(L, a, P)),
        _ === null ? (E = L) : (_.sibling = L),
        (_ = L),
        (N = V)
    }
    if (P === d.length) return n(f, N), U && gt(f, P), E
    if (N === null) {
      for (; P < d.length; P++)
        (N = h(f, d[P], g)),
          N !== null &&
            ((a = o(N, a, P)), _ === null ? (E = N) : (_.sibling = N), (_ = N))
      return U && gt(f, P), E
    }
    for (N = r(f, N); P < d.length; P++)
      (V = y(N, f, P, d[P], g)),
        V !== null &&
          (e && V.alternate !== null && N.delete(V.key === null ? P : V.key),
          (a = o(V, a, P)),
          _ === null ? (E = V) : (_.sibling = V),
          (_ = V))
    return (
      e &&
        N.forEach(function (Pe) {
          return t(f, Pe)
        }),
      U && gt(f, P),
      E
    )
  }
  function k(f, a, d, g) {
    var E = cn(d)
    if (typeof E != 'function') throw Error(w(150))
    if (((d = E.call(d)), d == null)) throw Error(w(151))
    for (
      var _ = (E = null), N = a, P = (a = 0), V = null, L = d.next();
      N !== null && !L.done;
      P++, L = d.next()
    ) {
      N.index > P ? ((V = N), (N = null)) : (V = N.sibling)
      var Pe = p(f, N, L.value, g)
      if (Pe === null) {
        N === null && (N = V)
        break
      }
      e && N && Pe.alternate === null && t(f, N),
        (a = o(Pe, a, P)),
        _ === null ? (E = Pe) : (_.sibling = Pe),
        (_ = Pe),
        (N = V)
    }
    if (L.done) return n(f, N), U && gt(f, P), E
    if (N === null) {
      for (; !L.done; P++, L = d.next())
        (L = h(f, L.value, g)),
          L !== null &&
            ((a = o(L, a, P)), _ === null ? (E = L) : (_.sibling = L), (_ = L))
      return U && gt(f, P), E
    }
    for (N = r(f, N); !L.done; P++, L = d.next())
      (L = y(N, f, P, L.value, g)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? P : L.key),
          (a = o(L, a, P)),
          _ === null ? (E = L) : (_.sibling = L),
          (_ = L))
    return (
      e &&
        N.forEach(function (sn) {
          return t(f, sn)
        }),
      U && gt(f, P),
      E
    )
  }
  function R(f, a, d, g) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Dt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case nr:
          e: {
            for (var E = d.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (((E = d.type), E === Dt)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (a = l(_, d.props.children)),
                      (a.return = f),
                      (f = a)
                    break e
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === Je &&
                    Nu(E) === _.type)
                ) {
                  n(f, _.sibling),
                    (a = l(_, d.props)),
                    (a.ref = hn(f, _, d)),
                    (a.return = f),
                    (f = a)
                  break e
                }
                n(f, _)
                break
              } else t(f, _)
              _ = _.sibling
            }
            d.type === Dt
              ? ((a = Ct(d.props.children, f.mode, g, d.key)),
                (a.return = f),
                (f = a))
              : ((g = Or(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = hn(f, a, d)),
                (g.return = f),
                (f = g))
          }
          return i(f)
        case Rt:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a)
                  break e
                } else {
                  n(f, a)
                  break
                }
              else t(f, a)
              a = a.sibling
            }
            ;(a = Gl(d, f.mode, g)), (a.return = f), (f = a)
          }
          return i(f)
        case Je:
          return (_ = d._init), R(f, a, _(d._payload), g)
      }
      if (wn(d)) return S(f, a, d, g)
      if (cn(d)) return k(f, a, d, g)
      pr(f, d)
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Xl(d, f.mode, g)), (a.return = f), (f = a)),
        i(f))
      : n(f, a)
  }
  return R
}
var en = ga(!0),
  wa = ga(!1),
  Kr = mt(null),
  Yr = null,
  Ht = null,
  vi = null
function yi() {
  vi = Ht = Yr = null
}
function gi(e) {
  var t = Kr.current
  F(Kr), (e._currentValue = t)
}
function Po(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Gt(e, t) {
  ;(Yr = e),
    (vi = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null))
}
function _e(e) {
  var t = e._currentValue
  if (vi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Yr === null) throw Error(w(308))
      ;(Ht = e), (Yr.dependencies = { lanes: 0, firstContext: e })
    } else Ht = Ht.next = e
  return t
}
var kt = null
function wi(e) {
  kt === null ? (kt = [e]) : kt.push(e)
}
function Sa(e, t, n, r) {
  var l = t.interleaved
  return (
    l === null ? ((n.next = n), wi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  )
}
function Ye(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var qe = !1
function Si(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function ka(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function ut(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), O & 2)) {
    var l = r.pending
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    )
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), wi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  )
}
function Nr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), oi(e, n)
  }
}
function Pu(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next)
      } while (n !== null)
      o === null ? (l = o = t) : (o = o.next = t)
    } else l = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Xr(e, t, n, r) {
  var l = e.updateQueue
  qe = !1
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending
  if (u !== null) {
    l.shared.pending = null
    var s = u,
      c = s.next
    ;(s.next = null), i === null ? (o = c) : (i.next = c), (i = s)
    var m = e.alternate
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== i &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = s)))
  }
  if (o !== null) {
    var h = l.baseState
    ;(i = 0), (m = c = s = null), (u = o)
    do {
      var p = u.lane,
        y = u.eventTime
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            })
        e: {
          var S = e,
            k = u
          switch (((p = t), (y = n), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == 'function')) {
                h = S.call(y, h, p)
                break e
              }
              h = S
              break e
            case 3:
              S.flags = (S.flags & -65537) | 128
            case 0:
              if (
                ((S = k.payload),
                (p = typeof S == 'function' ? S.call(y, h, p) : S),
                p == null)
              )
                break e
              h = B({}, h, p)
              break e
            case 2:
              qe = !0
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u))
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = y), (s = h)) : (m = m.next = y),
          (i |= p)
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break
        ;(p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null)
      }
    } while (!0)
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t
      do (i |= l.lane), (l = l.next)
      while (l !== t)
    } else o === null && (l.shared.lanes = 0)
    ;(jt |= i), (e.lanes = i), (e.memoizedState = h)
  }
}
function ju(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(w(191, l))
        l.call(r)
      }
    }
}
var qn = {},
  $e = mt(qn),
  Hn = mt(qn),
  Vn = mt(qn)
function xt(e) {
  if (e === qn) throw Error(w(174))
  return e
}
function ki(e, t) {
  switch ((I(Vn, t), I(Hn, e), I($e, qn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : io(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = io(t, e))
  }
  F($e), I($e, t)
}
function tn() {
  F($e), F(Hn), F(Vn)
}
function xa(e) {
  xt(Vn.current)
  var t = xt($e.current),
    n = io(t, e.type)
  t !== n && (I(Hn, e), I($e, n))
}
function xi(e) {
  Hn.current === e && (F($e), F(Hn))
}
var $ = mt(0)
function Gr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Hl = []
function Ei() {
  for (var e = 0; e < Hl.length; e++) Hl[e]._workInProgressVersionPrimary = null
  Hl.length = 0
}
var Pr = Ge.ReactCurrentDispatcher,
  Vl = Ge.ReactCurrentBatchConfig,
  Pt = 0,
  A = null,
  Y = null,
  J = null,
  Zr = !1,
  Pn = !1,
  Wn = 0,
  gd = 0
function ne() {
  throw Error(w(321))
}
function Ci(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1
  return !0
}
function _i(e, t, n, r, l, o) {
  if (
    ((Pt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Pr.current = e === null || e.memoizedState === null ? xd : Ed),
    (e = n(r, l)),
    Pn)
  ) {
    o = 0
    do {
      if (((Pn = !1), (Wn = 0), 25 <= o)) throw Error(w(301))
      ;(o += 1),
        (J = Y = null),
        (t.updateQueue = null),
        (Pr.current = Cd),
        (e = n(r, l))
    } while (Pn)
  }
  if (
    ((Pr.current = Jr),
    (t = Y !== null && Y.next !== null),
    (Pt = 0),
    (J = Y = A = null),
    (Zr = !1),
    t)
  )
    throw Error(w(300))
  return e
}
function Ni() {
  var e = Wn !== 0
  return (Wn = 0), e
}
function Me() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return J === null ? (A.memoizedState = J = e) : (J = J.next = e), J
}
function Ne() {
  if (Y === null) {
    var e = A.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Y.next
  var t = J === null ? A.memoizedState : J.next
  if (t !== null) (J = t), (Y = e)
  else {
    if (e === null) throw Error(w(310))
    ;(Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      J === null ? (A.memoizedState = J = e) : (J = J.next = e)
  }
  return J
}
function Qn(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Wl(e) {
  var t = Ne(),
    n = t.queue
  if (n === null) throw Error(w(311))
  n.lastRenderedReducer = e
  var r = Y,
    l = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (l !== null) {
      var i = l.next
      ;(l.next = o.next), (o.next = i)
    }
    ;(r.baseQueue = l = o), (n.pending = null)
  }
  if (l !== null) {
    ;(o = l.next), (r = r.baseState)
    var u = (i = null),
      s = null,
      c = o
    do {
      var m = c.lane
      if ((Pt & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action))
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        }
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (A.lanes |= m),
          (jt |= m)
      }
      c = c.next
    } while (c !== null && c !== o)
    s === null ? (i = r) : (s.next = u),
      De(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    l = e
    do (o = l.lane), (A.lanes |= o), (jt |= o), (l = l.next)
    while (l !== e)
  } else l === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Ql(e) {
  var t = Ne(),
    n = t.queue
  if (n === null) throw Error(w(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState
  if (l !== null) {
    n.pending = null
    var i = (l = l.next)
    do (o = e(o, i.action)), (i = i.next)
    while (i !== l)
    De(o, t.memoizedState) || (fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function Ea() {}
function Ca(e, t) {
  var n = A,
    r = Ne(),
    l = t(),
    o = !De(r.memoizedState, l)
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    Pi(Pa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, Na.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(w(349))
    Pt & 30 || _a(n, t, l)
  }
  return l
}
function _a(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Na(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), ja(t) && za(e)
}
function Pa(e, t, n) {
  return n(function () {
    ja(t) && za(e)
  })
}
function ja(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !De(e, n)
  } catch {
    return !0
  }
}
function za(e) {
  var t = Ye(e, 1)
  t !== null && Re(t, e, 1, -1)
}
function zu(e) {
  var t = Me()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = kd.bind(null, A, e)),
    [t.memoizedState, e]
  )
}
function Kn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Ta() {
  return Ne().memoizedState
}
function jr(e, t, n, r) {
  var l = Me()
  ;(A.flags |= e),
    (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r))
}
function fl(e, t, n, r) {
  var l = Ne()
  r = r === void 0 ? null : r
  var o = void 0
  if (Y !== null) {
    var i = Y.memoizedState
    if (((o = i.destroy), r !== null && Ci(r, i.deps))) {
      l.memoizedState = Kn(t, n, o, r)
      return
    }
  }
  ;(A.flags |= e), (l.memoizedState = Kn(1 | t, n, o, r))
}
function Tu(e, t) {
  return jr(8390656, 8, e, t)
}
function Pi(e, t) {
  return fl(2048, 8, e, t)
}
function La(e, t) {
  return fl(4, 2, e, t)
}
function Oa(e, t) {
  return fl(4, 4, e, t)
}
function Ra(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Da(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fl(4, 4, Ra.bind(null, t, e), n)
  )
}
function ji() {}
function Ia(e, t) {
  var n = Ne()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Ci(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function Ma(e, t) {
  var n = Ne()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Ci(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Fa(e, t, n) {
  return Pt & 21
    ? (De(n, t) || ((n = Hs()), (A.lanes |= n), (jt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n))
}
function wd(e, t) {
  var n = D
  ;(D = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Vl.transition
  Vl.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(D = n), (Vl.transition = r)
  }
}
function Ua() {
  return Ne().memoizedState
}
function Sd(e, t, n) {
  var r = at(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $a(e))
  )
    Aa(t, n)
  else if (((n = Sa(e, t, n, r)), n !== null)) {
    var l = ue()
    Re(n, e, r, l), Ba(n, t, r)
  }
}
function kd(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if ($a(e)) Aa(t, l)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n)
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, i))) {
          var s = t.interleaved
          s === null
            ? ((l.next = l), wi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Sa(e, t, l, r)),
      n !== null && ((l = ue()), Re(n, e, r, l), Ba(n, t, r))
  }
}
function $a(e) {
  var t = e.alternate
  return e === A || (t !== null && t === A)
}
function Aa(e, t) {
  Pn = Zr = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Ba(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), oi(e, n)
  }
}
var Jr = {
    readContext: _e,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  xd = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Me().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: _e,
    useEffect: Tu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        jr(4194308, 4, Ra.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return jr(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return jr(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Me()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Me()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Sd.bind(null, A, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Me()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: zu,
    useDebugValue: ji,
    useDeferredValue: function (e) {
      return (Me().memoizedState = e)
    },
    useTransition: function () {
      var e = zu(!1),
        t = e[0]
      return (e = wd.bind(null, e[1])), (Me().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Me()
      if (U) {
        if (n === void 0) throw Error(w(407))
        n = n()
      } else {
        if (((n = t()), q === null)) throw Error(w(349))
        Pt & 30 || _a(r, t, n)
      }
      l.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (l.queue = o),
        Tu(Pa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Kn(9, Na.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Me(),
        t = q.identifierPrefix
      if (U) {
        var n = Ve,
          r = He
        ;(n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Wn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = gd++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Ed = {
    readContext: _e,
    useCallback: Ia,
    useContext: _e,
    useEffect: Pi,
    useImperativeHandle: Da,
    useInsertionEffect: La,
    useLayoutEffect: Oa,
    useMemo: Ma,
    useReducer: Wl,
    useRef: Ta,
    useState: function () {
      return Wl(Qn)
    },
    useDebugValue: ji,
    useDeferredValue: function (e) {
      var t = Ne()
      return Fa(t, Y.memoizedState, e)
    },
    useTransition: function () {
      var e = Wl(Qn)[0],
        t = Ne().memoizedState
      return [e, t]
    },
    useMutableSource: Ea,
    useSyncExternalStore: Ca,
    useId: Ua,
    unstable_isNewReconciler: !1,
  },
  Cd = {
    readContext: _e,
    useCallback: Ia,
    useContext: _e,
    useEffect: Pi,
    useImperativeHandle: Da,
    useInsertionEffect: La,
    useLayoutEffect: Oa,
    useMemo: Ma,
    useReducer: Ql,
    useRef: Ta,
    useState: function () {
      return Ql(Qn)
    },
    useDebugValue: ji,
    useDeferredValue: function (e) {
      var t = Ne()
      return Y === null ? (t.memoizedState = e) : Fa(t, Y.memoizedState, e)
    },
    useTransition: function () {
      var e = Ql(Qn)[0],
        t = Ne().memoizedState
      return [e, t]
    },
    useMutableSource: Ea,
    useSyncExternalStore: Ca,
    useId: Ua,
    unstable_isNewReconciler: !1,
  }
function ze(e, t) {
  if (e && e.defaultProps) {
    ;(t = B({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function jo(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Lt(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = ue(),
      l = at(e),
      o = We(r, l)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Re(t, e, l, r), Nr(t, e, l))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = ue(),
      l = at(e),
      o = We(r, l)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Re(t, e, l, r), Nr(t, e, l))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = ue(),
      r = at(e),
      l = We(n, r)
    ;(l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Re(t, e, r, n), Nr(t, e, r))
  },
}
function Lu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Un(n, r) || !Un(l, o)
        : !0
  )
}
function Ha(e, t, n) {
  var r = !1,
    l = dt,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = _e(o))
      : ((l = pe(t) ? _t : oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? qt(e, l) : dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function Ou(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null)
}
function zo(e, t, n, r) {
  var l = e.stateNode
  ;(l.props = n), (l.state = e.memoizedState), (l.refs = {}), Si(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (l.context = _e(o))
    : ((o = pe(t) ? _t : oe.current), (l.context = qt(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (jo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && dl.enqueueReplaceState(l, l.state, null),
      Xr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308)
}
function nn(e, t) {
  try {
    var n = '',
      r = t
    do (n += Jc(r)), (r = r.return)
    while (r)
    var l = n
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: l, digest: null }
}
function Kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function To(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var _d = typeof WeakMap == 'function' ? WeakMap : Map
function Va(e, t, n) {
  ;(n = We(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      br || ((br = !0), (Ao = r)), To(e, t)
    }),
    n
  )
}
function Wa(e, t, n) {
  ;(n = We(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var l = t.value
    ;(n.payload = function () {
      return r(l)
    }),
      (n.callback = function () {
        To(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        To(e, t),
          typeof r != 'function' &&
            (st === null ? (st = new Set([this])) : st.add(this))
        var i = t.stack
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' })
      }),
    n
  )
}
function Ru(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new _d()
    var l = new Set()
    r.set(t, l)
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l))
  l.has(n) || (l.add(n), (e = $d.bind(null, e, t, n)), t.then(e, e))
}
function Du(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Iu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = We(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Nd = Ge.ReactCurrentOwner,
  fe = !1
function ie(e, t, n, r) {
  t.child = e === null ? wa(t, null, n, r) : en(t, e.child, n, r)
}
function Mu(e, t, n, r, l) {
  n = n.render
  var o = t.ref
  return (
    Gt(t, l),
    (r = _i(e, t, n, r, o, l)),
    (n = Ni()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && n && pi(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  )
}
function Fu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !Mi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Qa(e, t, o, r, l))
      : ((e = Or(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Un), n(i, r) && e.ref === t.ref)
    )
      return Xe(e, t, l)
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function Qa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps
    if (Un(o, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0)
      else return (t.lanes = e.lanes), Xe(e, t, l)
  }
  return Lo(e, t, n, r, l)
}
function Ka(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Wt, he),
        (he |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Wt, he),
          (he |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        I(Wt, he),
        (he |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Wt, he),
      (he |= r)
  return ie(e, t, l, n), t.child
}
function Ya(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Lo(e, t, n, r, l) {
  var o = pe(n) ? _t : oe.current
  return (
    (o = qt(t, o)),
    Gt(t, l),
    (n = _i(e, t, n, r, o, l)),
    (r = Ni()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && r && pi(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  )
}
function Uu(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0
    Vr(t)
  } else o = !1
  if ((Gt(t, l), t.stateNode === null))
    zr(e, t), Ha(t, n, r), zo(t, n, r, l), (r = !0)
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps
    i.props = u
    var s = i.context,
      c = n.contextType
    typeof c == 'object' && c !== null
      ? (c = _e(c))
      : ((c = pe(n) ? _t : oe.current), (c = qt(t, c)))
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && Ou(t, i, r, c)),
      (qe = !1)
    var p = t.memoizedState
    ;(i.state = p),
      Xr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || de.current || qe
        ? (typeof m == 'function' && (jo(t, n, m, r), (s = t.memoizedState)),
          (u = qe || Lu(t, n, u, r, p, s, c))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(i = t.stateNode),
      ka(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : ze(t.type, u)),
      (i.props = c),
      (h = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = _e(s))
        : ((s = pe(n) ? _t : oe.current), (s = qt(t, s)))
    var y = n.getDerivedStateFromProps
    ;(m =
      typeof y == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== h || p !== s) && Ou(t, i, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (i.state = p),
      Xr(t, r, i, l)
    var S = t.memoizedState
    u !== h || p !== S || de.current || qe
      ? (typeof y == 'function' && (jo(t, n, y, r), (S = t.memoizedState)),
        (c = qe || Lu(t, n, c, r, p, S, s) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, S, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, S, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Oo(e, t, n, r, o, l)
}
function Oo(e, t, n, r, l, o) {
  Ya(e, t)
  var i = (t.flags & 128) !== 0
  if (!r && !i) return l && Eu(t, n, !1), Xe(e, t, o)
  ;(r = t.stateNode), (Nd.current = t)
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = en(t, e.child, null, o)), (t.child = en(t, null, u, o)))
      : ie(e, t, u, o),
    (t.memoizedState = r.state),
    l && Eu(t, n, !0),
    t.child
  )
}
function Xa(e) {
  var t = e.stateNode
  t.pendingContext
    ? xu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xu(e, t.context, !1),
    ki(e, t.containerInfo)
}
function $u(e, t, n, r, l) {
  return bt(), hi(l), (t.flags |= 256), ie(e, t, n, r), t.child
}
var Ro = { dehydrated: null, treeContext: null, retryLane: 0 }
function Do(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Ga(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I($, l & 1),
    e === null)
  )
    return (
      No(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = hl(i, r, 0, null)),
              (e = Ct(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Do(n)),
              (t.memoizedState = Ro),
              e)
            : zi(t, i))
    )
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Pd(e, t, i, r, u, l, n)
  if (o) {
    ;(o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ct(u, o)) : ((o = Ct(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Do(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ro),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function zi(e, t) {
  return (
    (t = hl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function mr(e, t, n, r) {
  return (
    r !== null && hi(r),
    en(t, e.child, null, n),
    (e = zi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Pd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Kl(Error(w(422)))), mr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = hl({ mode: 'visible', children: r.children }, l, 0, null)),
          (o = Ct(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && en(t, e.child, null, i),
          (t.child.memoizedState = Do(i)),
          (t.memoizedState = Ro),
          o)
  if (!(t.mode & 1)) return mr(e, t, i, null)
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst
    return (r = u), (o = Error(w(419))), (r = Kl(o, r, void 0)), mr(e, t, i, r)
  }
  if (((u = (i & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2
          break
        case 16:
          l = 8
          break
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
          l = 32
          break
        case 536870912:
          l = 268435456
          break
        default:
          l = 0
      }
      ;(l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ye(e, l), Re(r, e, l, -1))
    }
    return Ii(), (r = Kl(Error(w(421)))), mr(e, t, i, r)
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ad.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = it(l.nextSibling)),
      (ye = t),
      (U = !0),
      (Le = null),
      e !== null &&
        ((ke[xe++] = He),
        (ke[xe++] = Ve),
        (ke[xe++] = Nt),
        (He = e.id),
        (Ve = e.overflow),
        (Nt = t)),
      (t = zi(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Au(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Po(e.return, t, n)
}
function Yl(e, t, n, r, l) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l))
}
function Za(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail
  if ((ie(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Au(e, n, t)
        else if (e.tag === 19) Au(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((I($, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Gr(e) === null && (l = n),
            (n = n.sibling)
        ;(n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Yl(t, !1, l, n, o)
        break
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Gr(e) === null)) {
            t.child = l
            break
          }
          ;(e = l.sibling), (l.sibling = n), (n = l), (l = e)
        }
        Yl(t, !0, n, null, o)
        break
      case 'together':
        Yl(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function zr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jt |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(w(153))
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function jd(e, t, n) {
  switch (t.tag) {
    case 3:
      Xa(t), bt()
      break
    case 5:
      xa(t)
      break
    case 1:
      pe(t.type) && Vr(t)
      break
    case 4:
      ki(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value
      I(Kr, r._currentValue), (r._currentValue = l)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ga(e, t, n)
            : (I($, $.current & 1),
              (e = Xe(e, t, n)),
              e !== null ? e.sibling : null)
      I($, $.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Za(e, t, n)
        t.flags |= 128
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I($, $.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Ka(e, t, n)
  }
  return Xe(e, t, n)
}
var Ja, Io, qa, ba
Ja = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Io = function () {}
qa = function (e, t, n, r) {
  var l = e.memoizedProps
  if (l !== r) {
    ;(e = t.stateNode), xt($e.current)
    var o = null
    switch (n) {
      case 'input':
        ;(l = no(e, l)), (r = no(e, r)), (o = [])
        break
      case 'select':
        ;(l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(l = oo(e, l)), (r = oo(e, r)), (o = [])
        break
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Br)
    }
    uo(n, r)
    var i
    n = null
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c]
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Ln.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null))
    for (c in r) {
      var s = r[c]
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''))
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]))
          } else n || (o || (o = []), o.push(c, n)), (n = s)
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (o = o || []).push(c, '' + s)
              : c !== 'suppressContentEditableWarning' &&
                c !== 'suppressHydrationWarning' &&
                (Ln.hasOwnProperty(c)
                  ? (s != null && c === 'onScroll' && M('scroll', e),
                    o || u === s || (o = []))
                  : (o = o || []).push(c, s))
    }
    n && (o = o || []).push('style', n)
    var c = o
    ;(t.updateQueue = c) && (t.flags |= 4)
  }
}
ba = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function vn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling)
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function zd(e, t, n) {
  var r = t.pendingProps
  switch ((mi(t), t.tag)) {
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
      return re(t), null
    case 1:
      return pe(t.type) && Hr(), re(t), null
    case 3:
      return (
        (r = t.stateNode),
        tn(),
        F(de),
        F(oe),
        Ei(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Le !== null && (Vo(Le), (Le = null)))),
        Io(e, t),
        re(t),
        null
      )
    case 5:
      xi(t)
      var l = xt(Vn.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        qa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166))
          return re(t), null
        }
        if (((e = xt($e.current)), dr(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Fe] = t), (r[Bn] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              M('cancel', r), M('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              M('load', r)
              break
            case 'video':
            case 'audio':
              for (l = 0; l < kn.length; l++) M(kn[l], r)
              break
            case 'source':
              M('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              M('error', r), M('load', r)
              break
            case 'details':
              M('toggle', r)
              break
            case 'input':
              Gi(r, o), M('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                M('invalid', r)
              break
            case 'textarea':
              Ji(r, o), M('invalid', r)
          }
          uo(n, o), (l = null)
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i]
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Ln.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  M('scroll', r)
            }
          switch (n) {
            case 'input':
              rr(r), Zi(r, o, !0)
              break
            case 'textarea':
              rr(r), qi(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = Br)
          }
          ;(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ps(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Fe] = t),
            (e[Bn] = r),
            Ja(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((i = so(n, r)), n)) {
              case 'dialog':
                M('cancel', e), M('close', e), (l = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                M('load', e), (l = r)
                break
              case 'video':
              case 'audio':
                for (l = 0; l < kn.length; l++) M(kn[l], e)
                l = r
                break
              case 'source':
                M('error', e), (l = r)
                break
              case 'img':
              case 'image':
              case 'link':
                M('error', e), M('load', e), (l = r)
                break
              case 'details':
                M('toggle', e), (l = r)
                break
              case 'input':
                Gi(e, r), (l = no(e, r)), M('invalid', e)
                break
              case 'option':
                l = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  M('invalid', e)
                break
              case 'textarea':
                Ji(e, r), (l = oo(e, r)), M('invalid', e)
                break
              default:
                l = r
            }
            uo(n, l), (u = l)
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o]
                o === 'style'
                  ? Ts(e, s)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && js(e, s))
                    : o === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && On(e, s)
                        : typeof s == 'number' && On(e, '' + s)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (Ln.hasOwnProperty(o)
                          ? s != null && o === 'onScroll' && M('scroll', e)
                          : s != null && bo(e, o, s, i))
              }
            switch (n) {
              case 'input':
                rr(e), Zi(e, r, !1)
                break
              case 'textarea':
                rr(e), qi(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + ft(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Qt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Qt(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof l.onClick == 'function' && (e.onclick = Br)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return re(t), null
    case 6:
      if (e && t.stateNode != null) ba(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(w(166))
        if (((n = xt(Vn.current)), xt($e.current), dr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fe] = t),
            (o = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fe] = t),
            (t.stateNode = r)
      }
      return re(t), null
    case 13:
      if (
        (F($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
          ya(), bt(), (t.flags |= 98560), (o = !1)
        else if (((o = dr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(w(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(w(317))
            o[Fe] = t
          } else
            bt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          re(t), (o = !1)
        } else Le !== null && (Vo(Le), (Le = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? G === 0 && (G = 3) : Ii())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null)
    case 4:
      return (
        tn(), Io(e, t), e === null && $n(t.stateNode.containerInfo), re(t), null
      )
    case 10:
      return gi(t.type._context), re(t), null
    case 17:
      return pe(t.type) && Hr(), re(t), null
    case 19:
      if ((F($), (o = t.memoizedState), o === null)) return re(t), null
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) vn(o, !1)
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Gr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    vn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return I($, ($.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            Q() > rn &&
            ((t.flags |= 128), (r = !0), vn(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Gr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vn(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !U)
            )
              return re(t), null
          } else
            2 * Q() - o.renderingStartTime > rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vn(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = $.current),
          I($, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null)
    case 22:
    case 23:
      return (
        Di(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(w(156, t.tag))
}
function Td(e, t) {
  switch ((mi(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Hr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        tn(),
        F(de),
        F(oe),
        Ei(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return xi(t), null
    case 13:
      if ((F($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340))
        bt()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return F($), null
    case 4:
      return tn(), null
    case 10:
      return gi(t.type._context), null
    case 22:
    case 23:
      return Di(), null
    case 24:
      return null
    default:
      return null
  }
}
var hr = !1,
  le = !1,
  Ld = typeof WeakSet == 'function' ? WeakSet : Set,
  x = null
function Vt(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        H(e, t, r)
      }
    else n.current = null
}
function Mo(e, t, n) {
  try {
    n()
  } catch (r) {
    H(e, t, r)
  }
}
var Bu = !1
function Od(e, t) {
  if (((wo = Ur), (e = la()), di(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var l = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            m = 0,
            h = e,
            p = null
          t: for (;;) {
            for (
              var y;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (p = h), (h = y)
            for (;;) {
              if (h === e) break t
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++m === r && (s = i),
                (y = h.nextSibling) !== null)
              )
                break
              ;(h = p), (p = h.parentNode)
            }
            h = y
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (So = { focusedElem: e, selectionRange: n }, Ur = !1, x = t; x !== null; )
    if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (x = e)
    else
      for (; x !== null; ) {
        t = x
        try {
          var S = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (S !== null) {
                  var k = S.memoizedProps,
                    R = S.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ze(t.type, k),
                      R
                    )
                  f.__reactInternalSnapshotBeforeUpdate = a
                }
                break
              case 3:
                var d = t.stateNode.containerInfo
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(w(163))
            }
        } catch (g) {
          H(t, t.return, g)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (x = e)
          break
        }
        x = t.return
      }
  return (S = Bu), (Bu = !1), S
}
function jn(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next)
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy
        ;(l.destroy = void 0), o !== void 0 && Mo(t, n, o)
      }
      l = l.next
    } while (l !== r)
  }
}
function pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Fo(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function ec(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), ec(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fe], delete t[Bn], delete t[Eo], delete t[md], delete t[hd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function tc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Hu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || tc(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Uo(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Br))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uo(e, t, n), e = e.sibling; e !== null; ) Uo(e, t, n), (e = e.sibling)
}
function $o(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($o(e, t, n), e = e.sibling; e !== null; ) $o(e, t, n), (e = e.sibling)
}
var b = null,
  Te = !1
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) nc(e, t, n), (n = n.sibling)
}
function nc(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == 'function')
    try {
      Ue.onCommitFiberUnmount(ol, n)
    } catch {}
  switch (n.tag) {
    case 5:
      le || Vt(n, t)
    case 6:
      var r = b,
        l = Te
      ;(b = null),
        Ze(e, t, n),
        (b = r),
        (Te = l),
        b !== null &&
          (Te
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode))
      break
    case 18:
      b !== null &&
        (Te
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            Mn(e))
          : Al(b, n.stateNode))
      break
    case 4:
      ;(r = b),
        (l = Te),
        (b = n.stateNode.containerInfo),
        (Te = !0),
        Ze(e, t, n),
        (b = r),
        (Te = l)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next
        do {
          var o = l,
            i = o.destroy
          ;(o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Mo(n, t, i),
            (l = l.next)
        } while (l !== r)
      }
      Ze(e, t, n)
      break
    case 1:
      if (
        !le &&
        (Vt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (u) {
          H(n, t, u)
        }
      Ze(e, t, n)
      break
    case 21:
      Ze(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Ze(e, t, n), (le = r))
        : Ze(e, t, n)
      break
    default:
      Ze(e, t, n)
  }
}
function Vu(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Ld()),
      t.forEach(function (r) {
        var l = Bd.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(l, l))
      })
  }
}
function je(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r]
      try {
        var o = e,
          i = t,
          u = i
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ;(b = u.stateNode), (Te = !1)
              break e
            case 3:
              ;(b = u.stateNode.containerInfo), (Te = !0)
              break e
            case 4:
              ;(b = u.stateNode.containerInfo), (Te = !0)
              break e
          }
          u = u.return
        }
        if (b === null) throw Error(w(160))
        nc(o, i, l), (b = null), (Te = !1)
        var s = l.alternate
        s !== null && (s.return = null), (l.return = null)
      } catch (c) {
        H(l, t, c)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rc(t, e), (t = t.sibling)
}
function rc(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), Ie(e), r & 4)) {
        try {
          jn(3, e, e.return), pl(3, e)
        } catch (k) {
          H(e, e.return, k)
        }
        try {
          jn(5, e, e.return)
        } catch (k) {
          H(e, e.return, k)
        }
      }
      break
    case 1:
      je(t, e), Ie(e), r & 512 && n !== null && Vt(n, n.return)
      break
    case 5:
      if (
        (je(t, e),
        Ie(e),
        r & 512 && n !== null && Vt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode
        try {
          On(l, '')
        } catch (k) {
          H(e, e.return, k)
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && _s(l, o),
              so(u, i)
            var c = so(u, o)
            for (i = 0; i < s.length; i += 2) {
              var m = s[i],
                h = s[i + 1]
              m === 'style'
                ? Ts(l, h)
                : m === 'dangerouslySetInnerHTML'
                  ? js(l, h)
                  : m === 'children'
                    ? On(l, h)
                    : bo(l, m, h, c)
            }
            switch (u) {
              case 'input':
                ro(l, o)
                break
              case 'textarea':
                Ns(l, o)
                break
              case 'select':
                var p = l._wrapperState.wasMultiple
                l._wrapperState.wasMultiple = !!o.multiple
                var y = o.value
                y != null
                  ? Qt(l, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Qt(l, !!o.multiple, o.defaultValue, !0)
                      : Qt(l, !!o.multiple, o.multiple ? [] : '', !1))
            }
            l[Bn] = o
          } catch (k) {
            H(e, e.return, k)
          }
      }
      break
    case 6:
      if ((je(t, e), Ie(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162))
        ;(l = e.stateNode), (o = e.memoizedProps)
        try {
          l.nodeValue = o
        } catch (k) {
          H(e, e.return, k)
        }
      }
      break
    case 3:
      if (
        (je(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mn(t.containerInfo)
        } catch (k) {
          H(e, e.return, k)
        }
      break
    case 4:
      je(t, e), Ie(e)
      break
    case 13:
      je(t, e),
        Ie(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Oi = Q())),
        r & 4 && Vu(e)
      break
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || m), je(t, e), (le = c)) : je(t, e),
        Ie(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (x = e, m = e.child; m !== null; ) {
            for (h = x = m; x !== null; ) {
              switch (((p = x), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jn(4, p, p.return)
                  break
                case 1:
                  Vt(p, p.return)
                  var S = p.stateNode
                  if (typeof S.componentWillUnmount == 'function') {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount()
                    } catch (k) {
                      H(r, n, k)
                    }
                  }
                  break
                case 5:
                  Vt(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    Qu(h)
                    continue
                  }
              }
              y !== null ? ((y.return = p), (x = y)) : Qu(h)
            }
            m = m.sibling
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h
              try {
                ;(l = h.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = zs('display', i)))
              } catch (k) {
                H(e, e.return, k)
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? '' : h.memoizedProps
              } catch (k) {
                H(e, e.return, k)
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ;(h.child.return = h), (h = h.child)
            continue
          }
          if (h === e) break e
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e
            m === h && (m = null), (h = h.return)
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling)
        }
      }
      break
    case 19:
      je(t, e), Ie(e), r & 4 && Vu(e)
      break
    case 21:
      break
    default:
      je(t, e), Ie(e)
  }
}
function Ie(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tc(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(w(160))
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode
          r.flags & 32 && (On(l, ''), (r.flags &= -33))
          var o = Hu(e)
          $o(e, o, l)
          break
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Hu(e)
          Uo(e, u, i)
          break
        default:
          throw Error(w(161))
      }
    } catch (s) {
      H(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Rd(e, t, n) {
  ;(x = e), lc(e)
}
function lc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x,
      o = l.child
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || hr
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le
        u = hr
        var c = le
        if (((hr = i), (le = s) && !c))
          for (x = l; x !== null; )
            (i = x),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ku(l)
                : s !== null
                  ? ((s.return = i), (x = s))
                  : Ku(l)
        for (; o !== null; ) (x = o), lc(o), (o = o.sibling)
        ;(x = l), (hr = u), (le = c)
      }
      Wu(e)
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (x = o)) : Wu(e)
  }
}
function Wu(e) {
  for (; x !== null; ) {
    var t = x
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || pl(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount()
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = t.updateQueue
              o !== null && ju(t, o, r)
              break
            case 3:
              var i = t.updateQueue
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                ju(t, i, n)
              }
              break
            case 5:
              var u = t.stateNode
              if (n === null && t.flags & 4) {
                n = u
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus()
                    break
                  case 'img':
                    s.src && (n.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate
                if (c !== null) {
                  var m = c.memoizedState
                  if (m !== null) {
                    var h = m.dehydrated
                    h !== null && Mn(h)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(w(163))
          }
        le || (t.flags & 512 && Fo(t))
      } catch (p) {
        H(t, t.return, p)
      }
    }
    if (t === e) {
      x = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (x = n)
      break
    }
    x = t.return
  }
}
function Qu(e) {
  for (; x !== null; ) {
    var t = x
    if (t === e) {
      x = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (x = n)
      break
    }
    x = t.return
  }
}
function Ku(e) {
  for (; x !== null; ) {
    var t = x
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            pl(4, t)
          } catch (s) {
            H(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var l = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              H(t, l, s)
            }
          }
          var o = t.return
          try {
            Fo(t)
          } catch (s) {
            H(t, o, s)
          }
          break
        case 5:
          var i = t.return
          try {
            Fo(t)
          } catch (s) {
            H(t, i, s)
          }
      }
    } catch (s) {
      H(t, t.return, s)
    }
    if (t === e) {
      x = null
      break
    }
    var u = t.sibling
    if (u !== null) {
      ;(u.return = t.return), (x = u)
      break
    }
    x = t.return
  }
}
var Dd = Math.ceil,
  qr = Ge.ReactCurrentDispatcher,
  Ti = Ge.ReactCurrentOwner,
  Ce = Ge.ReactCurrentBatchConfig,
  O = 0,
  q = null,
  K = null,
  ee = 0,
  he = 0,
  Wt = mt(0),
  G = 0,
  Yn = null,
  jt = 0,
  ml = 0,
  Li = 0,
  zn = null,
  ce = null,
  Oi = 0,
  rn = 1 / 0,
  Ae = null,
  br = !1,
  Ao = null,
  st = null,
  vr = !1,
  nt = null,
  el = 0,
  Tn = 0,
  Bo = null,
  Tr = -1,
  Lr = 0
function ue() {
  return O & 6 ? Q() : Tr !== -1 ? Tr : (Tr = Q())
}
function at(e) {
  return e.mode & 1
    ? O & 2 && ee !== 0
      ? ee & -ee
      : yd.transition !== null
        ? (Lr === 0 && (Lr = Hs()), Lr)
        : ((e = D),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gs(e.type))),
          e)
    : 1
}
function Re(e, t, n, r) {
  if (50 < Tn) throw ((Tn = 0), (Bo = null), Error(w(185)))
  Gn(e, n, r),
    (!(O & 2) || e !== q) &&
      (e === q && (!(O & 2) && (ml |= n), G === 4 && et(e, ee)),
      me(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((rn = Q() + 500), cl && ht()))
}
function me(e, t) {
  var n = e.callbackNode
  yf(e, t)
  var r = Fr(e, e === q ? ee : 0)
  if (r === 0)
    n !== null && tu(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && tu(n), t === 1))
      e.tag === 0 ? vd(Yu.bind(null, e)) : ma(Yu.bind(null, e)),
        dd(function () {
          !(O & 6) && ht()
        }),
        (n = null)
    else {
      switch (Vs(r)) {
        case 1:
          n = li
          break
        case 4:
          n = As
          break
        case 16:
          n = Mr
          break
        case 536870912:
          n = Bs
          break
        default:
          n = Mr
      }
      n = dc(n, oc.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function oc(e, t) {
  if (((Tr = -1), (Lr = 0), O & 6)) throw Error(w(327))
  var n = e.callbackNode
  if (Zt() && e.callbackNode !== n) return null
  var r = Fr(e, e === q ? ee : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r)
  else {
    t = r
    var l = O
    O |= 2
    var o = uc()
    ;(q !== e || ee !== t) && ((Ae = null), (rn = Q() + 500), Et(e, t))
    do
      try {
        Fd()
        break
      } catch (u) {
        ic(e, u)
      }
    while (!0)
    yi(),
      (qr.current = o),
      (O = l),
      K !== null ? (t = 0) : ((q = null), (ee = 0), (t = G))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = mo(e)), l !== 0 && ((r = l), (t = Ho(e, l)))), t === 1)
    )
      throw ((n = Yn), Et(e, 0), et(e, r), me(e, Q()), n)
    if (t === 6) et(e, r)
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Id(l) &&
          ((t = tl(e, r)),
          t === 2 && ((o = mo(e)), o !== 0 && ((r = o), (t = Ho(e, o)))),
          t === 1))
      )
        throw ((n = Yn), Et(e, 0), et(e, r), me(e, Q()), n)
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345))
        case 2:
          wt(e, ce, Ae)
          break
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = Oi + 500 - Q()), 10 < t))
          ) {
            if (Fr(e, 0) !== 0) break
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l)
              break
            }
            e.timeoutHandle = xo(wt.bind(null, e, ce, Ae), t)
            break
          }
          wt(e, ce, Ae)
          break
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r)
            ;(o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o)
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Dd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xo(wt.bind(null, e, ce, Ae), r)
            break
          }
          wt(e, ce, Ae)
          break
        case 5:
          wt(e, ce, Ae)
          break
        default:
          throw Error(w(329))
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? oc.bind(null, e) : null
}
function Ho(e, t) {
  var n = zn
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    (e = tl(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Vo(t)),
    e
  )
}
function Vo(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e)
}
function Id(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot
          l = l.value
          try {
            if (!De(o(), l)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function et(e, t) {
  for (
    t &= ~Li,
      t &= ~ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Yu(e) {
  if (O & 6) throw Error(w(327))
  Zt()
  var t = Fr(e, 0)
  if (!(t & 1)) return me(e, Q()), null
  var n = tl(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = mo(e)
    r !== 0 && ((t = r), (n = Ho(e, r)))
  }
  if (n === 1) throw ((n = Yn), Et(e, 0), et(e, t), me(e, Q()), n)
  if (n === 6) throw Error(w(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ce, Ae),
    me(e, Q()),
    null
  )
}
function Ri(e, t) {
  var n = O
  O |= 1
  try {
    return e(t)
  } finally {
    ;(O = n), O === 0 && ((rn = Q() + 500), cl && ht())
  }
}
function zt(e) {
  nt !== null && nt.tag === 0 && !(O & 6) && Zt()
  var t = O
  O |= 1
  var n = Ce.transition,
    r = D
  try {
    if (((Ce.transition = null), (D = 1), e)) return e()
  } finally {
    ;(D = r), (Ce.transition = n), (O = t), !(O & 6) && ht()
  }
}
function Di() {
  ;(he = Wt.current), F(Wt)
}
function Et(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), fd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n
      switch ((mi(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Hr()
          break
        case 3:
          tn(), F(de), F(oe), Ei()
          break
        case 5:
          xi(r)
          break
        case 4:
          tn()
          break
        case 13:
          F($)
          break
        case 19:
          F($)
          break
        case 10:
          gi(r.type._context)
          break
        case 22:
        case 23:
          Di()
      }
      n = n.return
    }
  if (
    ((q = e),
    (K = e = ct(e.current, null)),
    (ee = he = t),
    (G = 0),
    (Yn = null),
    (Li = ml = jt = 0),
    (ce = zn = null),
    kt !== null)
  ) {
    for (t = 0; t < kt.length; t++)
      if (((n = kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var l = r.next,
          o = n.pending
        if (o !== null) {
          var i = o.next
          ;(o.next = l), (r.next = i)
        }
        n.pending = r
      }
    kt = null
  }
  return e
}
function ic(e, t) {
  do {
    var n = K
    try {
      if ((yi(), (Pr.current = Jr), Zr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue
          l !== null && (l.pending = null), (r = r.next)
        }
        Zr = !1
      }
      if (
        ((Pt = 0),
        (J = Y = A = null),
        (Pn = !1),
        (Wn = 0),
        (Ti.current = null),
        n === null || n.return === null)
      ) {
        ;(G = 1), (Yn = t), (K = null)
        break
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            m = u,
            h = m.tag
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null))
          }
          var y = Du(i)
          if (y !== null) {
            ;(y.flags &= -257),
              Iu(y, i, u, o, t),
              y.mode & 1 && Ru(o, c, t),
              (t = y),
              (s = c)
            var S = t.updateQueue
            if (S === null) {
              var k = new Set()
              k.add(s), (t.updateQueue = k)
            } else S.add(s)
            break e
          } else {
            if (!(t & 1)) {
              Ru(o, c, t), Ii()
              break e
            }
            s = Error(w(426))
          }
        } else if (U && u.mode & 1) {
          var R = Du(i)
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Iu(R, i, u, o, t),
              hi(nn(s, u))
            break e
          }
        }
        ;(o = s = nn(s, u)),
          G !== 4 && (G = 2),
          zn === null ? (zn = [o]) : zn.push(o),
          (o = i)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var f = Va(o, s, t)
              Pu(o, f)
              break e
            case 1:
              u = s
              var a = o.type,
                d = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (st === null || !st.has(d))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var g = Wa(o, u, t)
                Pu(o, g)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      ac(n)
    } catch (E) {
      ;(t = E), K === n && n !== null && (K = n = n.return)
      continue
    }
    break
  } while (!0)
}
function uc() {
  var e = qr.current
  return (qr.current = Jr), e === null ? Jr : e
}
function Ii() {
  ;(G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || (!(jt & 268435455) && !(ml & 268435455)) || et(q, ee)
}
function tl(e, t) {
  var n = O
  O |= 2
  var r = uc()
  ;(q !== e || ee !== t) && ((Ae = null), Et(e, t))
  do
    try {
      Md()
      break
    } catch (l) {
      ic(e, l)
    }
  while (!0)
  if ((yi(), (O = n), (qr.current = r), K !== null)) throw Error(w(261))
  return (q = null), (ee = 0), G
}
function Md() {
  for (; K !== null; ) sc(K)
}
function Fd() {
  for (; K !== null && !sf(); ) sc(K)
}
function sc(e) {
  var t = fc(e.alternate, e, he)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? ac(e) : (K = t),
    (Ti.current = null)
}
function ac(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Td(n, t)), n !== null)) {
        ;(n.flags &= 32767), (K = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(G = 6), (K = null)
        return
      }
    } else if (((n = zd(n, t, he)), n !== null)) {
      K = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      K = t
      return
    }
    K = t = e
  } while (t !== null)
  G === 0 && (G = 5)
}
function wt(e, t, n) {
  var r = D,
    l = Ce.transition
  try {
    ;(Ce.transition = null), (D = 1), Ud(e, t, n, r)
  } finally {
    ;(Ce.transition = l), (D = r)
  }
  return null
}
function Ud(e, t, n, r) {
  do Zt()
  while (nt !== null)
  if (O & 6) throw Error(w(327))
  n = e.finishedWork
  var l = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (gf(e, o),
    e === q && ((K = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vr ||
      ((vr = !0),
      dc(Mr, function () {
        return Zt(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = Ce.transition), (Ce.transition = null)
    var i = D
    D = 1
    var u = O
    ;(O |= 4),
      (Ti.current = null),
      Od(e, n),
      rc(n, e),
      ld(So),
      (Ur = !!wo),
      (So = wo = null),
      (e.current = n),
      Rd(n),
      af(),
      (O = u),
      (D = i),
      (Ce.transition = o)
  } else e.current = n
  if (
    (vr && ((vr = !1), (nt = e), (el = l)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    df(n.stateNode),
    me(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest })
  if (br) throw ((br = !1), (e = Ao), (Ao = null), e)
  return (
    el & 1 && e.tag !== 0 && Zt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Bo ? Tn++ : ((Tn = 0), (Bo = e))) : (Tn = 0),
    ht(),
    null
  )
}
function Zt() {
  if (nt !== null) {
    var e = Vs(el),
      t = Ce.transition,
      n = D
    try {
      if (((Ce.transition = null), (D = 16 > e ? 16 : e), nt === null))
        var r = !1
      else {
        if (((e = nt), (nt = null), (el = 0), O & 6)) throw Error(w(331))
        var l = O
        for (O |= 4, x = e.current; x !== null; ) {
          var o = x,
            i = o.child
          if (x.flags & 16) {
            var u = o.deletions
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s]
                for (x = c; x !== null; ) {
                  var m = x
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jn(8, m, o)
                  }
                  var h = m.child
                  if (h !== null) (h.return = m), (x = h)
                  else
                    for (; x !== null; ) {
                      m = x
                      var p = m.sibling,
                        y = m.return
                      if ((ec(m), m === c)) {
                        x = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = y), (x = p)
                        break
                      }
                      x = y
                    }
                }
              }
              var S = o.alternate
              if (S !== null) {
                var k = S.child
                if (k !== null) {
                  S.child = null
                  do {
                    var R = k.sibling
                    ;(k.sibling = null), (k = R)
                  } while (k !== null)
                }
              }
              x = o
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (x = i)
          else
            e: for (; x !== null; ) {
              if (((o = x), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    jn(9, o, o.return)
                }
              var f = o.sibling
              if (f !== null) {
                ;(f.return = o.return), (x = f)
                break e
              }
              x = o.return
            }
        }
        var a = e.current
        for (x = a; x !== null; ) {
          i = x
          var d = i.child
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (x = d)
          else
            e: for (i = a; x !== null; ) {
              if (((u = x), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, u)
                  }
                } catch (E) {
                  H(u, u.return, E)
                }
              if (u === i) {
                x = null
                break e
              }
              var g = u.sibling
              if (g !== null) {
                ;(g.return = u.return), (x = g)
                break e
              }
              x = u.return
            }
        }
        if (
          ((O = l), ht(), Ue && typeof Ue.onPostCommitFiberRoot == 'function')
        )
          try {
            Ue.onPostCommitFiberRoot(ol, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(D = n), (Ce.transition = t)
    }
  }
  return !1
}
function Xu(e, t, n) {
  ;(t = nn(n, t)),
    (t = Va(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = ue()),
    e !== null && (Gn(e, 1, t), me(e, t))
}
function H(e, t, n) {
  if (e.tag === 3) Xu(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xu(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (st === null || !st.has(r)))
        ) {
          ;(e = nn(n, e)),
            (e = Wa(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = ue()),
            t !== null && (Gn(t, 1, e), me(t, e))
          break
        }
      }
      t = t.return
    }
}
function $d(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > Q() - Oi)
        ? Et(e, 0)
        : (Li |= n)),
    me(e, t)
}
function cc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ir), (ir <<= 1), !(ir & 130023424) && (ir = 4194304))
      : (t = 1))
  var n = ue()
  ;(e = Ye(e, t)), e !== null && (Gn(e, t, n), me(e, n))
}
function Ad(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), cc(e, n)
}
function Bd(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState
      l !== null && (n = l.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(w(314))
  }
  r !== null && r.delete(t), cc(e, n)
}
var fc
fc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), jd(e, t, n)
      fe = !!(e.flags & 131072)
    }
  else (fe = !1), U && t.flags & 1048576 && ha(t, Qr, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      zr(e, t), (e = t.pendingProps)
      var l = qt(t, oe.current)
      Gt(t, n), (l = _i(null, t, r, e, l, n))
      var o = Ni()
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((o = !0), Vr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Si(t),
            (l.updater = dl),
            (t.stateNode = l),
            (l._reactInternals = t),
            zo(t, r, e, n),
            (t = Oo(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && pi(t), ie(null, t, l, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (zr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Vd(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Lo(null, t, r, e, n)
            break e
          case 1:
            t = Uu(null, t, r, e, n)
            break e
          case 11:
            t = Mu(null, t, r, e, n)
            break e
          case 14:
            t = Fu(null, t, r, ze(r.type, e), n)
            break e
        }
        throw Error(w(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Lo(e, t, r, l, n)
      )
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Uu(e, t, r, l, n)
      )
    case 3:
      e: {
        if ((Xa(t), e === null)) throw Error(w(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ka(e, t),
          Xr(t, r, null, n)
        var i = t.memoizedState
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(l = nn(Error(w(423)), t)), (t = $u(e, t, r, n, l))
            break e
          } else if (r !== l) {
            ;(l = nn(Error(w(424)), t)), (t = $u(e, t, r, n, l))
            break e
          } else
            for (
              ve = it(t.stateNode.containerInfo.firstChild),
                ye = t,
                U = !0,
                Le = null,
                n = wa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((bt(), r === l)) {
            t = Xe(e, t, n)
            break e
          }
          ie(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        xa(t),
        e === null && No(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ko(r, l) ? (i = null) : o !== null && ko(r, o) && (t.flags |= 32),
        Ya(e, t),
        ie(e, t, i, n),
        t.child
      )
    case 6:
      return e === null && No(t), null
    case 13:
      return Ga(e, t, n)
    case 4:
      return (
        ki(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = en(t, null, r, n)) : ie(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Mu(e, t, r, l, n)
      )
    case 7:
      return ie(e, t, t.pendingProps, n), t.child
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          I(Kr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (De(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = Xe(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies
              if (u !== null) {
                i = o.child
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      ;(s = We(-1, n & -n)), (s.tag = 2)
                      var c = o.updateQueue
                      if (c !== null) {
                        c = c.shared
                        var m = c.pending
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s)
                      }
                    }
                    ;(o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Po(o.return, n, t),
                      (u.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(w(341))
                ;(i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Po(i, n, t),
                  (i = o.sibling)
              } else i = o.child
              if (i !== null) i.return = o
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null
                    break
                  }
                  if (((o = i.sibling), o !== null)) {
                    ;(o.return = i.return), (i = o)
                    break
                  }
                  i = i.return
                }
              o = i
            }
        ie(e, t, l.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Gt(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        Fu(e, t, r, l, n)
      )
    case 15:
      return Qa(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        zr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Vr(t)) : (e = !1),
        Gt(t, n),
        Ha(t, r, l),
        zo(t, r, l, n),
        Oo(null, t, r, !0, e, n)
      )
    case 19:
      return Za(e, t, n)
    case 22:
      return Ka(e, t, n)
  }
  throw Error(w(156, t.tag))
}
function dc(e, t) {
  return $s(e, t)
}
function Hd(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Ee(e, t, n, r) {
  return new Hd(e, t, n, r)
}
function Mi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Vd(e) {
  if (typeof e == 'function') return Mi(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === ti)) return 11
    if (e === ni) return 14
  }
  return 2
}
function ct(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Or(e, t, n, r, l, o) {
  var i = 2
  if (((r = e), typeof e == 'function')) Mi(e) && (i = 1)
  else if (typeof e == 'string') i = 5
  else
    e: switch (e) {
      case Dt:
        return Ct(n.children, l, o, t)
      case ei:
        ;(i = 8), (l |= 8)
        break
      case ql:
        return (e = Ee(12, n, t, l | 2)), (e.elementType = ql), (e.lanes = o), e
      case bl:
        return (e = Ee(13, n, t, l)), (e.elementType = bl), (e.lanes = o), e
      case eo:
        return (e = Ee(19, n, t, l)), (e.elementType = eo), (e.lanes = o), e
      case xs:
        return hl(n, l, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ss:
              i = 10
              break e
            case ks:
              i = 9
              break e
            case ti:
              i = 11
              break e
            case ni:
              i = 14
              break e
            case Je:
              ;(i = 16), (r = null)
              break e
          }
        throw Error(w(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Ee(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function Ct(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e
}
function hl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = xs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Xl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e
}
function Gl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Wd(e, t, n, r, l) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zl(0)),
    (this.expirationTimes = zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null)
}
function Fi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Wd(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ee(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Si(o),
    e
  )
}
function Qd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Rt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function pc(e) {
  if (!e) return dt
  e = e._reactInternals
  e: {
    if (Lt(e) !== e || e.tag !== 1) throw Error(w(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(w(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (pe(n)) return pa(e, n, t)
  }
  return t
}
function mc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Fi(n, r, !0, e, l, o, i, u, s)),
    (e.context = pc(null)),
    (n = e.current),
    (r = ue()),
    (l = at(n)),
    (o = We(r, l)),
    (o.callback = t ?? null),
    ut(n, o, l),
    (e.current.lanes = l),
    Gn(e, l, r),
    me(e, r),
    e
  )
}
function vl(e, t, n, r) {
  var l = t.current,
    o = ue(),
    i = at(l)
  return (
    (n = pc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, i)),
    e !== null && (Re(e, l, i, o), Nr(e, l, i)),
    i
  )
}
function nl(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Gu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ui(e, t) {
  Gu(e, t), (e = e.alternate) && Gu(e, t)
}
function Kd() {
  return null
}
var hc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function $i(e) {
  this._internalRoot = e
}
yl.prototype.render = $i.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(w(409))
  vl(e, t, null, null)
}
yl.prototype.unmount = $i.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    zt(function () {
      vl(null, e, null, null)
    }),
      (t[Ke] = null)
  }
}
function yl(e) {
  this._internalRoot = e
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ks()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Xs(e)
  }
}
function Ai(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Zu() {}
function Yd(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var c = nl(i)
        o.call(c)
      }
    }
    var i = mc(t, r, e, 0, null, !1, !1, '', Zu)
    return (
      (e._reactRootContainer = i),
      (e[Ke] = i.current),
      $n(e.nodeType === 8 ? e.parentNode : e),
      zt(),
      i
    )
  }
  for (; (l = e.lastChild); ) e.removeChild(l)
  if (typeof r == 'function') {
    var u = r
    r = function () {
      var c = nl(s)
      u.call(c)
    }
  }
  var s = Fi(e, 0, !1, null, null, !1, !1, '', Zu)
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    zt(function () {
      vl(t, s, n, r)
    }),
    s
  )
}
function wl(e, t, n, r, l) {
  var o = n._reactRootContainer
  if (o) {
    var i = o
    if (typeof l == 'function') {
      var u = l
      l = function () {
        var s = nl(i)
        u.call(s)
      }
    }
    vl(t, i, e, l)
  } else i = Yd(n, t, e, l, r)
  return nl(i)
}
Ws = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes)
        n !== 0 &&
          (oi(t, n | 1), me(t, Q()), !(O & 6) && ((rn = Q() + 500), ht()))
      }
      break
    case 13:
      zt(function () {
        var r = Ye(e, 1)
        if (r !== null) {
          var l = ue()
          Re(r, e, 1, l)
        }
      }),
        Ui(e, 1)
  }
}
ii = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728)
    if (t !== null) {
      var n = ue()
      Re(t, e, 134217728, n)
    }
    Ui(e, 134217728)
  }
}
Qs = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ye(e, t)
    if (n !== null) {
      var r = ue()
      Re(n, e, t, r)
    }
    Ui(e, t)
  }
}
Ks = function () {
  return D
}
Ys = function (e, t) {
  var n = D
  try {
    return (D = e), t()
  } finally {
    D = n
  }
}
co = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ro(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var l = al(r)
            if (!l) throw Error(w(90))
            Cs(r), ro(r, l)
          }
        }
      }
      break
    case 'textarea':
      Ns(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Qt(e, !!n.multiple, t, !1)
  }
}
Rs = Ri
Ds = zt
var Xd = { usingClientEntryPoint: !1, Events: [Jn, Ut, al, Ls, Os, Ri] },
  yn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Gd = {
    bundleType: yn.bundleType,
    version: yn.version,
    rendererPackageName: yn.rendererPackageName,
    rendererConfig: yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Fs(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: yn.findFiberByHostInstance || Kd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      ;(ol = yr.inject(Gd)), (Ue = yr)
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xd
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Ai(t)) throw Error(w(200))
  return Qd(e, t, null, n)
}
we.createRoot = function (e, t) {
  if (!Ai(e)) throw Error(w(299))
  var n = !1,
    r = '',
    l = hc
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Fi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    new $i(t)
  )
}
we.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(w(188))
      : ((e = Object.keys(e).join(',')), Error(w(268, e)))
  return (e = Fs(t)), (e = e === null ? null : e.stateNode), e
}
we.flushSync = function (e) {
  return zt(e)
}
we.hydrate = function (e, t, n) {
  if (!gl(t)) throw Error(w(200))
  return wl(null, e, t, !0, n)
}
we.hydrateRoot = function (e, t, n) {
  if (!Ai(e)) throw Error(w(405))
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = hc
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = mc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ke] = t.current),
    $n(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l)
  return new yl(t)
}
we.render = function (e, t, n) {
  if (!gl(t)) throw Error(w(200))
  return wl(null, e, t, !1, n)
}
we.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(w(40))
  return e._reactRootContainer
    ? (zt(function () {
        wl(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Ke] = null)
        })
      }),
      !0)
    : !1
}
we.unstable_batchedUpdates = Ri
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gl(n)) throw Error(w(200))
  if (e == null || e._reactInternals === void 0) throw Error(w(38))
  return wl(e, t, n, !1, r)
}
we.version = '18.3.1-next-f1338f8080-20240426'
function vc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vc)
    } catch (e) {
      console.error(e)
    }
}
vc(), (vs.exports = we)
var Zd = vs.exports,
  Ju = Zd
;(Zl.createRoot = Ju.createRoot), (Zl.hydrateRoot = Ju.hydrateRoot)
const Jd = '_header_vn5t8_1',
  qd = '_container_vn5t8_6',
  bd = { header: Jd, container: qd },
  ep = ({ name: e, title: t, meetingUrl: n }) =>
    v.jsx('header', {
      className: bd.header,
      children: v.jsxs('div', {
        className: 'container mx-auto flex items-center justify-between',
        children: [
          v.jsxs('div', {
            className: 'space-y-1',
            children: [
              v.jsx('h1', { className: 'text-3xl font-bold', children: e }),
              v.jsx('p', { className: 'text-lg font-medium', children: t }),
            ],
          }),
          v.jsxs('ul', {
            className: 'flex items-center gap-4',
            children: [
              v.jsx('li', {
                children: v.jsx('a', { href: n, children: 'Contact' }),
              }),
              v.jsx('li', {
                children: v.jsx('a', { href: '#skills', children: 'Skills' }),
              }),
              v.jsx('li', {
                children: v.jsx('a', { href: '#teams', children: 'Teams' }),
              }),
              v.jsx('li', {
                children: v.jsx('a', {
                  href: '#projects',
                  children: 'Projects',
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  tp = '_stickyHeader_mkbz4_1',
  np = '_slideIn_mkbz4_15',
  rp = '_slideOut_mkbz4_18',
  lp = '_styledButton_mkbz4_21',
  op = '_fadeIn_mkbz4_1',
  gr = {
    stickyHeader: tp,
    slideIn: np,
    slideOut: rp,
    styledButton: lp,
    fadeIn: op,
  },
  ip = ({ headerRef: e, meetingUrl: t }) => {
    const [n, r] = X.useState(!1),
      [l, o] = X.useState(!1),
      i = () => {
        if (e.current) {
          const s = e.current.getBoundingClientRect().bottom
          s < 1 && !n
            ? (r(!0), o(!0))
            : s >= 1 && n && (o(!1), setTimeout(() => r(!1), 300))
        }
      }
    X.useEffect(
      () => (
        window.addEventListener('scroll', i),
        () => {
          window.removeEventListener('scroll', i)
        }
      ),
      [n]
    )
    const u = () => {
      window.open(t, '_blank', 'noopener noreferrer')
    }
    return (
      n &&
      v.jsx('div', {
        className: `${gr.stickyHeader} ${l ? gr.slideIn : gr.slideOut}`,
        children: v.jsxs('button', {
          className: gr.styledButton,
          onClick: u,
          children: [
            'ONLINE Meeting',
            v.jsx('span', {
              className: 'ml-4 text-sm font-normal',
              children: '30 ～ 40分',
            }),
          ],
        }),
      })
    )
  }
var up = {}
const sp = ({
    imagePath: e,
    zennLink: t,
    gitLink: n,
    aboutTitle: r,
    aboutText1: l,
    aboutText2: o,
  }) => {
    const i = up.GITHUB_PAGES ? '/portfolio-app' : './'
    return v.jsx('section', {
      id: 'about',
      className: 'bg-gray-100 bg-opacity-75 py-12',
      children: v.jsxs('div', {
        className: 'container mx-auto grid md:grid-cols-2 gap-8 items-center',
        children: [
          v.jsx('div', {
            children: v.jsx('img', {
              src: e,
              width: 500,
              height: 500,
              alt: 'Profile Image',
              className: 'mx-auto rounded-full w-64 h-64 object-cover',
            }),
          }),
          v.jsxs('div', {
            className: 'space-y-4 mx-2',
            children: [
              v.jsx('h2', { className: 'text-3xl font-bold', children: r }),
              v.jsx('p', {
                className: 'text-muted-foreground text-sm',
                children: l,
              }),
              v.jsx('p', {
                className: 'text-muted-foreground text-sm',
                children: o,
              }),
              v.jsx('a', {
                href: t,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'inline-flex items-center mt-4 mr-4',
                children: v.jsx('img', {
                  src: `${i}/zenn-logo.png`,
                  alt: 'zenn-logo',
                  width: '80px',
                }),
              }),
              v.jsxs('a', {
                href: n,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'inline-flex items-center ml-4 mt-4',
                children: [
                  v.jsx('img', {
                    src: `${i}/github-mark.png`,
                    alt: 'github-mark',
                    width: '21px',
                  }),
                  v.jsx('img', {
                    src: `${i}/github-logo.png`,
                    alt: 'github-logo',
                    width: '70px',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  },
  wr = [
    {
      name: 'React',
      description:
        'Experienced in building web apps with React, Express, and TypeScript.',
      svgPath: v.jsxs(v.Fragment, {
        children: [
          v.jsx('polygon', {
            points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2',
          }),
          v.jsx('line', { x1: '12', x2: '12', y1: '22', y2: '15.5' }),
          v.jsx('polyline', { points: '22 8.5 12 15.5 2 8.5' }),
          v.jsx('polyline', { points: '2 15.5 12 8.5 22 15.5' }),
          v.jsx('line', { x1: '12', x2: '12', y1: '2', y2: '8.5' }),
        ],
      }),
    },
    {
      name: 'Laravel',
      description:
        'Experienced in crafting server-side applications with Laravel and PHP.',
      svgPath: v.jsxs(v.Fragment, {
        children: [
          v.jsx('rect', { x: '16', y: '16', width: '6', height: '6', rx: '1' }),
          v.jsx('rect', { x: '2', y: '16', width: '6', height: '6', rx: '1' }),
          v.jsx('rect', { x: '9', y: '2', width: '6', height: '6', rx: '1' }),
          v.jsx('path', { d: 'M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3' }),
          v.jsx('path', { d: 'M12 12V8' }),
        ],
      }),
    },
    {
      name: 'MySQL',
      description:
        'Experienced in designing and implementing relational databases.',
      svgPath: v.jsxs(v.Fragment, {
        children: [
          v.jsx('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
          v.jsx('path', { d: 'M3 5V19A9 3 0 0 0 21 19V5' }),
          v.jsx('path', { d: 'M3 12A9 3 0 0 0 21 12' }),
        ],
      }),
    },
    {
      name: 'Linux',
      description:
        'Experienced in using Ubuntu on WSL (Windows Subsystem for Linux).',
      svgPath: v.jsxs(v.Fragment, {
        children: [
          v.jsx('polyline', { points: '16 18 22 12 16 6' }),
          v.jsx('polyline', { points: '8 6 2 12 8 18' }),
        ],
      }),
    },
  ],
  qu = [
    'Great job!',
    'Keep it up!',
    'You can do it!',
    'Amazing work!',
    'Fantastic effort!',
  ],
  ap = () => qu[Math.floor(Math.random() * qu.length)],
  cp = ({ milestones: e }) => {
    const [t, n] = X.useState([]),
      [r, l] = X.useState(!1),
      [o, i] = X.useState(null),
      [u, s] = X.useState(0),
      [c, m] = X.useState(''),
      h = () => {
        s((p) => p + 1)
      }
    return (
      X.useEffect(() => {
        wr.forEach((y, S) => {
          setTimeout(
            () => {
              n((k) => [...k, S]),
                setTimeout(() => {
                  n((k) => k.filter((R) => R !== S)),
                    S === wr.length - 1 && l(!0)
                }, 6e3)
            },
            S * 300 + (S === 1 ? 100 : 0)
          )
        })
        const p = setTimeout(() => {
          const y = () => {
            const S = Math.floor(Math.random() * wr.length)
            i(S),
              m(ap()),
              s((R) => R + 1),
              setTimeout(() => {
                i(null)
              }, 1e3)
            const k = Math.random() * 1e3 + 1500
            setTimeout(y, k)
          }
          y()
        }, 9e3)
        return () => {
          clearTimeout(p)
        }
      }, []),
      v.jsx('section', {
        className: 'bg-white py-12',
        id: 'skills',
        children: v.jsxs('div', {
          className: 'container mx-auto',
          children: [
            v.jsxs('h2', {
              className: `text-3xl font-bold mb-8 ${r ? 'scaled-parent' : ''}`,
              children: [
                'Skills ',
                v.jsxs('p', { children: ['Count Up: ', u] }),
              ],
            }),
            v.jsx('div', {
              className: `grid grid-cols-2 md:grid-cols-4 gap-6 ${r ? 'scaled-current' : ''}`,
              children: wr.map((p, y) =>
                v.jsx(
                  'div',
                  {
                    className: `bg-gray-100 bg-opacity-75 rounded-lg p-4 flex flex-col items-center ${t.includes(y) ? 'floating' : ''}`,
                    children:
                      o === y
                        ? v.jsxs('button', {
                            className: 'scaled-button',
                            onClick: h,
                            children: [
                              c,
                              v.jsx('p', { className: 'text-sm', children: u }),
                            ],
                          })
                        : v.jsxs(v.Fragment, {
                            children: [
                              v.jsx('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '24',
                                height: '24',
                                viewBox: '0 0 24 24',
                                fill: 'none',
                                stroke: 'currentColor',
                                strokeWidth: '2',
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                className: `w-8 h-8 mb-2 ${r ? 'scaled-child' : ''}`,
                                children: p.svgPath,
                              }),
                              v.jsx('h3', {
                                className: 'text-lg font-bold',
                                children: p.name,
                              }),
                              v.jsx('p', {
                                className: 'text-muted-foreground text-sm',
                                children: p.description,
                              }),
                            ],
                          }),
                  },
                  y
                )
              ),
            }),
            v.jsx('ul', {
              className: 'pt-10 pl-10 w-full pr-0',
              children: e.map((p, y) => v.jsx('li', { children: p }, y)),
            }),
          ],
        }),
      })
    )
  }
var Sl = {},
  fp = function () {
    var e = document.getSelection()
    if (!e.rangeCount) return function () {}
    for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
      n.push(e.getRangeAt(r))
    switch (t.tagName.toUpperCase()) {
      case 'INPUT':
      case 'TEXTAREA':
        t.blur()
        break
      default:
        t = null
        break
    }
    return (
      e.removeAllRanges(),
      function () {
        e.type === 'Caret' && e.removeAllRanges(),
          e.rangeCount ||
            n.forEach(function (l) {
              e.addRange(l)
            }),
          t && t.focus()
      }
    )
  },
  dp = fp,
  bu = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' },
  pp = 'Copy to clipboard: #{key}, Enter'
function mp(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C'
  return e.replace(/#{\s*key\s*}/g, t)
}
function hp(e, t) {
  var n,
    r,
    l,
    o,
    i,
    u,
    s = !1
  t || (t = {}), (n = t.debug || !1)
  try {
    ;(l = dp()),
      (o = document.createRange()),
      (i = document.getSelection()),
      (u = document.createElement('span')),
      (u.textContent = e),
      (u.ariaHidden = 'true'),
      (u.style.all = 'unset'),
      (u.style.position = 'fixed'),
      (u.style.top = 0),
      (u.style.clip = 'rect(0, 0, 0, 0)'),
      (u.style.whiteSpace = 'pre'),
      (u.style.webkitUserSelect = 'text'),
      (u.style.MozUserSelect = 'text'),
      (u.style.msUserSelect = 'text'),
      (u.style.userSelect = 'text'),
      u.addEventListener('copy', function (m) {
        if ((m.stopPropagation(), t.format))
          if ((m.preventDefault(), typeof m.clipboardData > 'u')) {
            n && console.warn('unable to use e.clipboardData'),
              n && console.warn('trying IE specific stuff'),
              window.clipboardData.clearData()
            var h = bu[t.format] || bu.default
            window.clipboardData.setData(h, e)
          } else
            m.clipboardData.clearData(), m.clipboardData.setData(t.format, e)
        t.onCopy && (m.preventDefault(), t.onCopy(m.clipboardData))
      }),
      document.body.appendChild(u),
      o.selectNodeContents(u),
      i.addRange(o)
    var c = document.execCommand('copy')
    if (!c) throw new Error('copy command was unsuccessful')
    s = !0
  } catch (m) {
    n && console.error('unable to copy using execCommand: ', m),
      n && console.warn('trying IE specific stuff')
    try {
      window.clipboardData.setData(t.format || 'text', e),
        t.onCopy && t.onCopy(window.clipboardData),
        (s = !0)
    } catch (h) {
      n && console.error('unable to copy using clipboardData: ', h),
        n && console.error('falling back to prompt'),
        (r = mp('message' in t ? t.message : pp)),
        window.prompt(r, e)
    }
  } finally {
    i &&
      (typeof i.removeRange == 'function'
        ? i.removeRange(o)
        : i.removeAllRanges()),
      u && document.body.removeChild(u),
      l()
  }
  return s
}
var vp = hp
function Wo(e) {
  '@babel/helpers - typeof'
  return (
    (Wo =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Wo(e)
  )
}
Object.defineProperty(Sl, '__esModule', { value: !0 })
Sl.CopyToClipboard = void 0
var Sr = yc(X),
  yp = yc(vp),
  gp = ['text', 'onCopy', 'options', 'children']
function yc(e) {
  return e && e.__esModule ? e : { default: e }
}
function es(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? es(Object(n), !0).forEach(function (r) {
          Bi(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : es(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return e
}
function wp(e, t) {
  if (e == null) return {}
  var n = Sp(e, t),
    r,
    l
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r])
  }
  return n
}
function Sp(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    l,
    o
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l])
  return n
}
function kp(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function')
}
function xp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function Ep(e, t, n) {
  return (
    t && xp(e.prototype, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  )
}
function Cp(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Qo(e, t)
}
function Qo(e, t) {
  return (
    (Qo =
      Object.setPrototypeOf ||
      function (r, l) {
        return (r.__proto__ = l), r
      }),
    Qo(e, t)
  )
}
function _p(e) {
  var t = Pp()
  return function () {
    var r = rl(e),
      l
    if (t) {
      var o = rl(this).constructor
      l = Reflect.construct(r, arguments, o)
    } else l = r.apply(this, arguments)
    return Np(this, l)
  }
}
function Np(e, t) {
  if (t && (Wo(t) === 'object' || typeof t == 'function')) return t
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    )
  return gc(e)
}
function gc(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return e
}
function Pp() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1
  if (typeof Proxy == 'function') return !0
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    )
  } catch {
    return !1
  }
}
function rl(e) {
  return (
    (rl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n)
        }),
    rl(e)
  )
}
function Bi(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var wc = (function (e) {
  Cp(n, e)
  var t = _p(n)
  function n() {
    var r
    kp(this, n)
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++)
      o[i] = arguments[i]
    return (
      (r = t.call.apply(t, [this].concat(o))),
      Bi(gc(r), 'onClick', function (u) {
        var s = r.props,
          c = s.text,
          m = s.onCopy,
          h = s.children,
          p = s.options,
          y = Sr.default.Children.only(h),
          S = (0, yp.default)(c, p)
        m && m(c, S),
          y &&
            y.props &&
            typeof y.props.onClick == 'function' &&
            y.props.onClick(u)
      }),
      r
    )
  }
  return (
    Ep(n, [
      {
        key: 'render',
        value: function () {
          var l = this.props
          l.text, l.onCopy, l.options
          var o = l.children,
            i = wp(l, gp),
            u = Sr.default.Children.only(o)
          return Sr.default.cloneElement(
            u,
            ts(ts({}, i), {}, { onClick: this.onClick })
          )
        },
      },
    ]),
    n
  )
})(Sr.default.PureComponent)
Sl.CopyToClipboard = wc
Bi(wc, 'defaultProps', { onCopy: void 0, options: void 0 })
var jp = Sl,
  Ko = jp.CopyToClipboard
Ko.CopyToClipboard = Ko
var ns = Ko
const zp = '_app_1byep_1',
  Tp = '_textareaStyle_1byep_9',
  Sc = { app: zp, textareaStyle: Tp },
  rs = ({
    id: e,
    title: t,
    appName: n,
    image1: r,
    image2: l,
    linkUrl: o,
    userId: i,
    password: u,
    description: s,
    comment: c,
  }) => {
    const [m, h] = X.useState(!1),
      p = X.useRef(null),
      [y, S] = X.useState(''),
      [k, R] = X.useState(''),
      f = (a) => {
        S('Copied!'),
          R(a),
          setTimeout(() => {
            S(''), R('')
          }, 2e3)
      }
    return (
      X.useEffect(() => {
        const a = p.current
        if (a) {
          const d = () => {
            ;(a.style.height = 'auto'), (a.style.height = a.scrollHeight + 'px')
          }
          return (
            d(),
            a.addEventListener('input', d),
            window.addEventListener('resize', d),
            () => {
              a.removeEventListener('input', d),
                window.removeEventListener('resize', d)
            }
          )
        }
      }, []),
      v.jsxs('section', {
        className: 'bg-white pt-8 md:pt-12 pb-8 my-4 projects',
        id: e,
        children: [
          v.jsx('h2', {
            className: 'text-3xl col-span-3 font-bold mb-0',
            children: t,
          }),
          v.jsxs('div', {
            className:
              'container mx-auto grid grid-cols-1 md:grid-cols-3 items-center',
            children: [
              v.jsxs('div', {
                className: 'flex flex-col md:col-span-1 md:mr-3',
                children: [
                  v.jsx('h3', {
                    className: 'text-2xl font-semibold mb-4',
                    children: n,
                  }),
                  v.jsx('p', {
                    className: 'text-muted-foreground text-base mx-2 md:ml-5',
                    children: s,
                  }),
                  v.jsxs('div', {
                    className:
                      'mt-2 p-2 md:ml-2 sm:pr-5 sm:pt-4 md:p-0 xl:pt-3 xl:pr-3 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row md:flex-col lg:flex-col xl:flex-row justify-between items-center',
                    children: [
                      v.jsx('div', {
                        className:
                          'sm:pl-3 md:pl-0 mb-2 mt-2 sm:mb-0 sm:mt-0 md:mt-2 lg:m-4',
                        children: v.jsxs('a', {
                          href: o,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className:
                            'flex items-center text-green-500 hover:underline',
                          children: [
                            v.jsx('svg', {
                              className: 'w-6 h-6 mr-2',
                              fill: 'none',
                              stroke: 'currentColor',
                              viewBox: '0 0 24 24',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: v.jsx('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 2,
                                d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                              }),
                            }),
                            'Link',
                          ],
                        }),
                      }),
                      v.jsxs('div', {
                        className: 'flex flex-col items-end',
                        children: [
                          v.jsxs('div', {
                            className:
                              'flex md:flex-col lg:flex-row items-start mb-2',
                            children: [
                              v.jsx('label', {
                                className: 'mr-2 lg:mb-2',
                                htmlFor: 'userId',
                                children: 'ID:',
                              }),
                              v.jsxs('div', {
                                className: 'flex items-start',
                                children: [
                                  v.jsx('input', {
                                    type: 'text',
                                    id: 'userId',
                                    value: i,
                                    readOnly: !0,
                                    className:
                                      'border rounded p-1 w-36 text-xs',
                                    title: 'User ID',
                                    placeholder: 'User ID',
                                  }),
                                  v.jsx(ns.CopyToClipboard, {
                                    text: i,
                                    onCopy: () => f('User ID'),
                                    children: v.jsx('button', {
                                      className:
                                        'ml-2 px-2 py-1 bg-green-500 text-white rounded text-sm',
                                      children: 'Copy',
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          v.jsxs('div', {
                            className:
                              'flex md:flex-col lg:flex-row items-start mb-2',
                            children: [
                              v.jsx('label', {
                                className: 'mr-2 lg:mb-2 ',
                                htmlFor: 'userId',
                                children: 'Pass:',
                              }),
                              v.jsxs('div', {
                                className: 'flex items-start',
                                children: [
                                  v.jsx('input', {
                                    type: 'text',
                                    id: 'password',
                                    value: u,
                                    readOnly: !0,
                                    className:
                                      'border rounded p-1 w-36 text-xs',
                                    title: 'Password',
                                    placeholder: 'Password',
                                  }),
                                  v.jsx(ns.CopyToClipboard, {
                                    text: u,
                                    onCopy: () => f('Password'),
                                    children: v.jsx('button', {
                                      className:
                                        'ml-2 px-2 py-1 bg-green-500 text-white rounded text-sm',
                                      children: 'Copy',
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          y &&
                            k &&
                            v.jsxs('div', {
                              className: 'mt-2 text-green-500 text-sm',
                              children: [k, ' ', y],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs('div', {
                className: 'relative flex-shrink-0 md:col-span-2',
                onMouseEnter: () => h(!0),
                onMouseLeave: () => h(!1),
                onTouchStart: () => h(!m),
                children: [
                  v.jsx('img', {
                    src: r,
                    alt: 'Project Image 1',
                    className: `h-auto rounded-lg shadow-lg md:absolute md:top-4 md:left-1 transform transition-transform duration-300 ${m ? 'z-0 scale-95' : 'z-10 md:scale-100 scale-95'}`,
                  }),
                  v.jsx('img', {
                    src: l,
                    alt: 'Project Image 2',
                    className: `h-auto rounded-lg shadow-lg md:relative md:top-9 md:left-1 transform transition-transform duration-300 ${m ? 'z-10 md:scale-100 scale-95' : 'z-0 scale-95'} relative`,
                  }),
                ],
              }),
            ],
          }),
          v.jsx('textarea', {
            ref: p,
            className: `mt-8 md:mt-6 lg:mt-12 text-sm md:px-10 ${Sc.textareaStyle}`,
            'aria-label': 'Comment',
            value: c,
            readOnly: !0,
          }),
        ],
      })
    )
  }
var Lp = {}
const Op = () => {
    const e = X.useRef(null),
      t = Lp.GITHUB_PAGES ? '/portfolio-app' : './',
      n = [
        'HTML・CSS・JavaScript・Laravel・MySQL 学習を開始：2023年12月3日',
        'first commit：2024年1月19日',
        '30 commit：2024年2月17日',
        '60 commit：2024年3月5日',
        'チーム開発の現場へメンバーの一員として参加：2024年3月8日',
        'チーム開発 search の責任者として MVC を制作：2024年4月5日（Heroku：Heroku CLI）',
        'オンラインプログラミングスクール向けwebアプリを制作：2024年5月17日（X-Server：SSH）',
        '自走力があり、自社開発企業で十分に活躍できるランク：2024年6月20日（TechTrain の Rank Up 判定＝Junior Engineer）',
        'ubuntu の環境構築と Linux コマンドを使用した個人用パスワードマネージャーを制作：2024年6月27日（公開鍵と秘密鍵）',
        'Portfolio サイトを公開：2024年7月3日（Render：Vite + React）',
      ]
    return v.jsxs('div', {
      className: Sc.app,
      children: [
        v.jsx('div', {
          ref: e,
          children: v.jsx(ep, {
            name: '丸岡裕也',
            title: 'Junior Engineer',
            meetingUrl: 'https://calendar.app.google/jypE761CoXB6LJi87',
          }),
        }),
        v.jsx(ip, {
          headerRef: e,
          meetingUrl: 'https://calendar.app.google/jypE761CoXB6LJi87',
        }),
        v.jsxs('main', {
          className: 'flex-1',
          children: [
            v.jsx(sp, {
              imagePath: `${t}/profile-image.jpg`,
              zennLink: 'https://zenn.dev/souomou',
              gitLink: 'https://github.com/totemosouomou',
              aboutTitle: 'About Me',
              aboutText1:
                '親子エンジニアになることは一つ目標としていることです。',
              aboutText2:
                '「息子との関係を良好に保つこと」と両立して、「困っていることを一つ一つ解決できること」や、「短期間でスピーディーに新しいサービスを生み出せること」に憧れています。フルスタックエンジニアになりたい！',
            }),
            v.jsx(cp, { milestones: n.map((r, l) => r) }),
            v.jsx(rs, {
              id: 'teams',
              title: 'Team Project',
              appName: 'Gift Catalog',
              image1: `${t}/baby-detail.png`,
              image2: `${t}/baby-search.png`,
              linkUrl: 'https://team199-bcdc2192c3c3.herokuapp.com/',
              userId: 'maruoka@example.com',
              password: 'password',
              description:
                'チーム4人体制で、自社内商品を管理するシステムとして開発。ユーザー（社員ID）管理と在庫管理の機能追加。また、自動的にギフト化する仕組みがあるシステムへ移行することで、お客様への同時提案件数が増えることを期待した。',
              comment:
                '講師コメント：家事や仕事で忙しい方が多い中、一か月間の短い期間ですごく頑張られていたかと思います。Slack でのやり取りも良くできており、チーム内での情報共有と連携もできていました。今後は自分が書いたコードと他の方のコードを見て、どのように連携しているかや、皆さんの機能についても検証・解析を行ってみましょう！また、今回の開発で身についたスキルは今後の自主制作等の開発に活かしてもらえたらと思います。',
            }),
            v.jsx(rs, {
              id: 'projects',
              title: 'My Project',
              appName: 'Share Article',
              image1: `${t}/school-detail.png`,
              image2: `${t}/school-top.png`,
              linkUrl: 'https://souomou.cloudfree.jp/techis/login',
              userId: 'maruoka@example.com',
              password: 'password',
              description:
                'ユーザー（生徒さん）が、カリキュラムを学ぶ中で役に立った記事をシェアする・コメントの仕組みを開発。学びのアウトプット機会を増やし、オンラインで離れた中でも、同期と切磋琢磨する気持ちが育まれることを期待した。',
              comment:
                '講師コメント：明確な問題意識を持って、持てる技術を注力し解決に取り組まれています！機能が本当に素晴らしいですね！同じ入校月の生徒さん同士が切磋琢磨できる環境が一段と整うのではないでしょうか！^^そして機能だけではなくデザインも優れています！ブランドカラーが設定されており、まるで既存のアプリケーションのような仕上がりです！NGワードも設定されており、ユーザーの安心安全にも配慮がなされています！「何となくサイトを開くと、一つ記事が目に入って、読んでしまう」→これだけでも学習に繋がりますね！^^',
            }),
          ],
        }),
      ],
    })
  },
  ls = document.getElementById('root')
if (ls)
  Zl.createRoot(ls).render(v.jsx(Uc.StrictMode, { children: v.jsx(Op, {}) }))
else throw new Error('Root element with id "root" not found.')
