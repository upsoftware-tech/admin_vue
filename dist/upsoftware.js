import { markRaw as Mr, defineComponent as qr, getCurrentInstance as Hr, ref as Jt, provide as Vr, onDeactivated as Kr, onActivated as zr, onMounted as Wt, h as Gr, nextTick as Jr, openBlock as Wr, createBlock as Xr, normalizeProps as Qr, guardReactiveProps as Yr, withCtx as Zr, createElementVNode as en, renderSlot as tn, inject as Ie, reactive as rn, watch as nn } from "vue";
function on(e) {
  return Mr(qr(e));
}
const sn = {
  hasPassive: !1,
  passiveCapture: !0,
  notPassiveCapture: !0
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(sn, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 }
      });
    }
  });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function nt(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
let an = [];
function cn(e) {
  an.length === 0 && e();
}
function un(e, t) {
  return e !== void 0 && e() || t;
}
const ln = "_q_", fn = "_q_fo_";
function dn(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
const pn = on({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(e, { slots: t, emit: r }) {
    const n = Hr(), o = Jt(null);
    let s = 0;
    const a = [];
    function i(h) {
      const p = typeof h == "boolean" ? h : e.noErrorFocus !== !0, y = ++s, v = (m, T) => {
        r(`validation${m === !0 ? "Success" : "Error"}`, T);
      }, _ = (m) => {
        const T = m.validate();
        return typeof T.then == "function" ? T.then(
          (O) => ({ valid: O, comp: m }),
          (O) => ({ valid: !1, comp: m, err: O })
        ) : Promise.resolve({ valid: T, comp: m });
      };
      return (e.greedy === !0 ? Promise.all(a.map(_)).then((m) => m.filter((T) => T.valid !== !0)) : a.reduce(
        (m, T) => m.then(() => _(T).then((O) => {
          if (O.valid === !1)
            return Promise.reject(O);
        })),
        Promise.resolve()
      ).catch((m) => [m])).then((m) => {
        if (m === void 0 || m.length === 0)
          return y === s && v(!0), !0;
        if (y === s) {
          const { comp: T, err: O } = m[0];
          if (O !== void 0 && console.error(O), v(!1, T), p === !0) {
            const A = m.find(({ comp: N }) => typeof N.focus == "function" && dn(N.$) === !1);
            A !== void 0 && A.comp.focus();
          }
        }
        return !1;
      });
    }
    function f() {
      s++, a.forEach((h) => {
        typeof h.resetValidation == "function" && h.resetValidation();
      });
    }
    function l(h) {
      h !== void 0 && nt(h);
      const p = s + 1;
      i().then((y) => {
        p === s && y === !0 && (e.onSubmit !== void 0 ? r("submit", h) : h !== void 0 && h.target !== void 0 && typeof h.target.submit == "function" && h.target.submit());
      });
    }
    function u(h) {
      h !== void 0 && nt(h), r("reset"), Jr(() => {
        f(), e.autofocus === !0 && e.noResetFocus !== !0 && d();
      });
    }
    function d() {
      cn(() => {
        if (o.value === null)
          return;
        const h = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (p) => p.tabIndex !== -1);
        h != null && h.focus({ preventScroll: !0 });
      });
    }
    Vr(fn, {
      bindComponent(h) {
        a.push(h);
      },
      unbindComponent(h) {
        const p = a.indexOf(h);
        p !== -1 && a.splice(p, 1);
      }
    });
    let g = !1;
    return Kr(() => {
      g = !0;
    }), zr(() => {
      g === !0 && e.autofocus === !0 && d();
    }), Wt(() => {
      e.autofocus === !0 && d();
    }), Object.assign(n.proxy, {
      validate: i,
      resetValidation: f,
      submit: l,
      reset: u,
      focus: d,
      getValidationComponents: () => a
    }), () => Gr("form", {
      class: "q-form",
      ref: o,
      onSubmit: l,
      onReset: u
    }, un(t.default));
  }
}), hn = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, yn = {}, bn = { class: "tw-grid tw-gap-y-4" };
function mn(e, t) {
  return Wr(), Xr(pn, Qr(Yr(e.$attrs)), {
    default: Zr(() => [
      en("div", bn, [
        tn(e.$slots, "default")
      ])
    ]),
    _: 3
  }, 16);
}
const gn = /* @__PURE__ */ hn(yn, [["render", mn]]);
function Xt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: vn } = Object.prototype, { getPrototypeOf: Be } = Object, ce = ((e) => (t) => {
  const r = vn.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), R = (e) => (e = e.toLowerCase(), (t) => ce(t) === e), ue = (e) => (t) => typeof t === e, { isArray: B } = Array, G = ue("undefined");
function _n(e) {
  return e !== null && !G(e) && e.constructor !== null && !G(e.constructor) && E(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Qt = R("ArrayBuffer");
function wn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qt(e.buffer), t;
}
const $n = ue("string"), E = ue("function"), Yt = ue("number"), le = (e) => e !== null && typeof e == "object", Sn = (e) => e === !0 || e === !1, Y = (e) => {
  if (ce(e) !== "object")
    return !1;
  const t = Be(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Tn = R("Date"), En = R("File"), On = R("Blob"), An = R("FileList"), Cn = (e) => le(e) && E(e.pipe), jn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || E(e.append) && ((t = ce(e)) === "formdata" || // detect form-data instance
  t === "object" && E(e.toString) && e.toString() === "[object FormData]"));
}, Rn = R("URLSearchParams"), [Pn, xn, Nn, Fn] = ["ReadableStream", "Request", "Response", "Headers"].map(R), Dn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function J(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), B(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let i;
    for (n = 0; n < a; n++)
      i = s[n], t.call(null, e[i], i, e);
  }
}
function Zt(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const er = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), tr = (e) => !G(e) && e !== er;
function Ee() {
  const { caseless: e } = tr(this) && this || {}, t = {}, r = (n, o) => {
    const s = e && Zt(t, o) || o;
    Y(t[s]) && Y(n) ? t[s] = Ee(t[s], n) : Y(n) ? t[s] = Ee({}, n) : B(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && J(arguments[n], r);
  return t;
}
const Ln = (e, t, r, { allOwnKeys: n } = {}) => (J(t, (o, s) => {
  r && E(o) ? e[s] = Xt(o, r) : e[s] = o;
}, { allOwnKeys: n }), e), In = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Bn = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Un = (e, t, r, n) => {
  let o, s, a;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!n || n(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = r !== !1 && Be(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, kn = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Mn = (e) => {
  if (!e)
    return null;
  if (B(e))
    return e;
  let t = e.length;
  if (!Yt(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, qn = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Be(Uint8Array)), Hn = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, Vn = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Kn = R("HTMLFormElement"), zn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), ot = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Gn = R("RegExp"), rr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  J(r, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (n[s] = a || o);
  }), Object.defineProperties(e, n);
}, Jn = (e) => {
  rr(e, (t, r) => {
    if (E(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (E(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Wn = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return B(e) ? n(e) : n(String(e).split(t)), r;
}, Xn = () => {
}, Qn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, _e = "abcdefghijklmnopqrstuvwxyz", st = "0123456789", nr = {
  DIGIT: st,
  ALPHA: _e,
  ALPHA_DIGIT: _e + _e.toUpperCase() + st
}, Yn = (e = 16, t = nr.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Zn(e) {
  return !!(e && E(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const eo = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (le(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const s = B(n) ? [] : {};
        return J(n, (a, i) => {
          const f = r(a, o + 1);
          !G(f) && (s[i] = f);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, to = R("AsyncFunction"), ro = (e) => e && (le(e) || E(e)) && E(e.then) && E(e.catch), c = {
  isArray: B,
  isArrayBuffer: Qt,
  isBuffer: _n,
  isFormData: jn,
  isArrayBufferView: wn,
  isString: $n,
  isNumber: Yt,
  isBoolean: Sn,
  isObject: le,
  isPlainObject: Y,
  isReadableStream: Pn,
  isRequest: xn,
  isResponse: Nn,
  isHeaders: Fn,
  isUndefined: G,
  isDate: Tn,
  isFile: En,
  isBlob: On,
  isRegExp: Gn,
  isFunction: E,
  isStream: Cn,
  isURLSearchParams: Rn,
  isTypedArray: qn,
  isFileList: An,
  forEach: J,
  merge: Ee,
  extend: Ln,
  trim: Dn,
  stripBOM: In,
  inherits: Bn,
  toFlatObject: Un,
  kindOf: ce,
  kindOfTest: R,
  endsWith: kn,
  toArray: Mn,
  forEachEntry: Hn,
  matchAll: Vn,
  isHTMLForm: Kn,
  hasOwnProperty: ot,
  hasOwnProp: ot,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: rr,
  freezeMethods: Jn,
  toObjectSet: Wn,
  toCamelCase: zn,
  noop: Xn,
  toFiniteNumber: Qn,
  findKey: Zt,
  global: er,
  isContextDefined: tr,
  ALPHABET: nr,
  generateString: Yn,
  isSpecCompliantForm: Zn,
  toJSONObject: eo,
  isAsyncFn: to,
  isThenable: ro
};
function b(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
c.inherits(b, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const or = b.prototype, sr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  sr[e] = { value: e };
});
Object.defineProperties(b, sr);
Object.defineProperty(or, "isAxiosError", { value: !0 });
b.from = (e, t, r, n, o, s) => {
  const a = Object.create(or);
  return c.toFlatObject(e, a, function(f) {
    return f !== Error.prototype;
  }, (i) => i !== "isAxiosError"), b.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, s && Object.assign(a, s), a;
};
const no = null;
function Oe(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function ar(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function at(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = ar(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function oo(e) {
  return c.isArray(e) && !e.some(Oe);
}
const so = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function fe(e, t, r) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = c.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, v) {
    return !c.isUndefined(v[y]);
  });
  const n = r.metaTokens, o = r.visitor || u, s = r.dots, a = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null)
      return "";
    if (c.isDate(p))
      return p.toISOString();
    if (!f && c.isBlob(p))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(p) || c.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, y, v) {
    let _ = p;
    if (p && !v && typeof p == "object") {
      if (c.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (c.isArray(p) && oo(p) || (c.isFileList(p) || c.endsWith(y, "[]")) && (_ = c.toArray(p)))
        return y = ar(y), _.forEach(function(m, T) {
          !(c.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? at([y], T, s) : a === null ? y : y + "[]",
            l(m)
          );
        }), !1;
    }
    return Oe(p) ? !0 : (t.append(at(v, y, s), l(p)), !1);
  }
  const d = [], g = Object.assign(so, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Oe
  });
  function h(p, y) {
    if (!c.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p), c.forEach(p, function(_, P) {
        (!(c.isUndefined(_) || _ === null) && o.call(
          t,
          _,
          c.isString(P) ? P.trim() : P,
          y,
          g
        )) === !0 && h(_, y ? y.concat(P) : [P]);
      }), d.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function it(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ue(e, t) {
  this._pairs = [], e && fe(e, this, t);
}
const ir = Ue.prototype;
ir.append = function(t, r) {
  this._pairs.push([t, r]);
};
ir.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, it);
  } : it;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function ao(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function cr(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ao, o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = c.isURLSearchParams(t) ? t.toString() : new Ue(t, r).toString(n), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class io {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    c.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ct = io, ur = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, co = typeof URLSearchParams < "u" ? URLSearchParams : Ue, uo = typeof FormData < "u" ? FormData : null, lo = typeof Blob < "u" ? Blob : null, fo = {
  isBrowser: !0,
  classes: {
    URLSearchParams: co,
    FormData: uo,
    Blob: lo
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ke = typeof window < "u" && typeof document < "u", po = ((e) => ke && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ho = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), yo = ke && window.location.href || "http://localhost", bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ke,
  hasStandardBrowserEnv: po,
  hasStandardBrowserWebWorkerEnv: ho,
  origin: yo
}, Symbol.toStringTag, { value: "Module" })), C = {
  ...bo,
  ...fo
};
function mo(e, t) {
  return fe(e, new C.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, s) {
      return C.isNode && c.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function go(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function vo(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let s;
  for (n = 0; n < o; n++)
    s = r[n], t[s] = e[s];
  return t;
}
function lr(e) {
  function t(r, n, o, s) {
    let a = r[s++];
    if (a === "__proto__")
      return !0;
    const i = Number.isFinite(+a), f = s >= r.length;
    return a = !a && c.isArray(o) ? o.length : a, f ? (c.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !i) : ((!o[a] || !c.isObject(o[a])) && (o[a] = []), t(r, n, o[a], s) && c.isArray(o[a]) && (o[a] = vo(o[a])), !i);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const r = {};
    return c.forEachEntry(e, (n, o) => {
      t(go(n), o, r, 0);
    }), r;
  }
  return null;
}
function _o(e, t, r) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Me = {
  transitional: ur,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = c.isObject(t);
    if (s && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return o ? JSON.stringify(lr(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return mo(t, this.formSerializer).toString();
      if ((i = c.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return fe(
          i ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), _o(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Me.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (c.isResponse(t) || c.isReadableStream(t))
      return t;
    if (t && c.isString(t) && (n && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (a)
          throw i.name === "SyntaxError" ? b.from(i, b.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: C.classes.FormData,
    Blob: C.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Me.headers[e] = {};
});
const qe = Me, wo = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), $o = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && wo[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, ut = Symbol("internals");
function K(e) {
  return e && String(e).trim().toLowerCase();
}
function Z(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(Z) : String(e);
}
function So(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const To = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function we(e, t, r, n, o) {
  if (c.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!c.isString(t)) {
    if (c.isString(n))
      return t.indexOf(n) !== -1;
    if (c.isRegExp(n))
      return n.test(t);
  }
}
function Eo(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Oo(e, t) {
  const r = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, a) {
        return this[n].call(this, t, o, s, a);
      },
      configurable: !0
    });
  });
}
class de {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function s(i, f, l) {
      const u = K(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = c.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || f] = Z(i));
    }
    const a = (i, f) => c.forEach(i, (l, u) => s(l, u, f));
    if (c.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (c.isString(t) && (t = t.trim()) && !To(t))
      a($o(t), r);
    else if (c.isHeaders(t))
      for (const [i, f] of t.entries())
        s(f, i, n);
    else
      t != null && s(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = K(t), t) {
      const n = c.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return So(o);
        if (c.isFunction(r))
          return r.call(this, o, n);
        if (c.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = K(t), t) {
      const n = c.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || we(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function s(a) {
      if (a = K(a), a) {
        const i = c.findKey(n, a);
        i && (!r || we(n, n[i], i, r)) && (delete n[i], o = !0);
      }
    }
    return c.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const s = r[n];
      (!t || we(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return c.forEach(this, (o, s) => {
      const a = c.findKey(n, s);
      if (a) {
        r[a] = Z(o), delete r[s];
        return;
      }
      const i = t ? Eo(s) : String(s).trim();
      i !== s && delete r[s], r[i] = Z(o), n[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && c.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[ut] = this[ut] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const i = K(a);
      n[i] || (Oo(o, a), n[i] = !0);
    }
    return c.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
de.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(de.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
c.freezeMethods(de);
const j = de;
function $e(e, t) {
  const r = this || qe, n = t || r, o = j.from(n.headers);
  let s = n.data;
  return c.forEach(e, function(i) {
    s = i.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function fr(e) {
  return !!(e && e.__CANCEL__);
}
function U(e, t, r) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, r), this.name = "CanceledError";
}
c.inherits(U, b, {
  __CANCEL__: !0
});
function dr(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new b(
    "Request failed with status code " + r.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ao(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Co(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const l = Date.now(), u = n[s];
    a || (a = l), r[o] = f, n[o] = l;
    let d = s, g = 0;
    for (; d !== o; )
      g += r[d++], d = d % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), l - a < t)
      return;
    const h = u && l - u;
    return h ? Math.round(g * 1e3 / h) : void 0;
  };
}
function jo(e, t) {
  let r = 0;
  const n = 1e3 / t;
  let o = null;
  return function() {
    const a = this === !0, i = Date.now();
    if (a || i - r > n)
      return o && (clearTimeout(o), o = null), r = i, e.apply(null, arguments);
    o || (o = setTimeout(() => (o = null, r = Date.now(), e.apply(null, arguments)), n - (i - r)));
  };
}
const re = (e, t, r = 3) => {
  let n = 0;
  const o = Co(50, 250);
  return jo((s) => {
    const a = s.loaded, i = s.lengthComputable ? s.total : void 0, f = a - n, l = o(f), u = a <= i;
    n = a;
    const d = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: f,
      rate: l || void 0,
      estimated: l && i && u ? (i - a) / l : void 0,
      event: s,
      lengthComputable: i != null
    };
    d[t ? "download" : "upload"] = !0, e(d);
  }, r);
}, Ro = C.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(s) {
      let a = s;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = o(window.location.href), function(a) {
      const i = c.isString(a) ? o(a) : a;
      return i.protocol === n.protocol && i.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
), Po = C.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, s) {
      const a = [e + "=" + encodeURIComponent(t)];
      c.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), c.isString(n) && a.push("path=" + n), c.isString(o) && a.push("domain=" + o), s === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function xo(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function No(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function pr(e, t) {
  return e && !xo(t) ? No(e, t) : t;
}
const lt = (e) => e instanceof j ? { ...e } : e;
function L(e, t) {
  t = t || {};
  const r = {};
  function n(l, u, d) {
    return c.isPlainObject(l) && c.isPlainObject(u) ? c.merge.call({ caseless: d }, l, u) : c.isPlainObject(u) ? c.merge({}, u) : c.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(l))
        return n(void 0, l, d);
    } else
      return n(l, u, d);
  }
  function s(l, u) {
    if (!c.isUndefined(u))
      return n(void 0, u);
  }
  function a(l, u) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(l))
        return n(void 0, l);
    } else
      return n(void 0, u);
  }
  function i(l, u, d) {
    if (d in t)
      return n(l, u);
    if (d in e)
      return n(void 0, l);
  }
  const f = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: i,
    headers: (l, u) => o(lt(l), lt(u), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = f[u] || o, g = d(e[u], t[u], u);
    c.isUndefined(g) && d !== i || (r[u] = g);
  }), r;
}
const hr = (e) => {
  const t = L({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: i } = t;
  t.headers = a = j.from(a), t.url = cr(pr(t.baseURL, t.url), e.params, e.paramsSerializer), i && a.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let f;
  if (c.isFormData(r)) {
    if (C.hasStandardBrowserEnv || C.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((f = a.getContentType()) !== !1) {
      const [l, ...u] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      a.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (C.hasStandardBrowserEnv && (n && c.isFunction(n) && (n = n(t)), n || n !== !1 && Ro(t.url))) {
    const l = o && s && Po.read(s);
    l && a.set(o, l);
  }
  return t;
}, Fo = typeof XMLHttpRequest < "u", Do = Fo && function(e) {
  return new Promise(function(r, n) {
    const o = hr(e);
    let s = o.data;
    const a = j.from(o.headers).normalize();
    let { responseType: i } = o, f;
    function l() {
      o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let u = new XMLHttpRequest();
    u.open(o.method.toUpperCase(), o.url, !0), u.timeout = o.timeout;
    function d() {
      if (!u)
        return;
      const h = j.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      dr(function(_) {
        r(_), l();
      }, function(_) {
        n(_), l();
      }, y), u = null;
    }
    "onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (n(new b("Request aborted", b.ECONNABORTED, o, u)), u = null);
    }, u.onerror = function() {
      n(new b("Network Error", b.ERR_NETWORK, o, u)), u = null;
    }, u.ontimeout = function() {
      let p = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || ur;
      o.timeoutErrorMessage && (p = o.timeoutErrorMessage), n(new b(
        p,
        y.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        o,
        u
      )), u = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in u && c.forEach(a.toJSON(), function(p, y) {
      u.setRequestHeader(y, p);
    }), c.isUndefined(o.withCredentials) || (u.withCredentials = !!o.withCredentials), i && i !== "json" && (u.responseType = o.responseType), typeof o.onDownloadProgress == "function" && u.addEventListener("progress", re(o.onDownloadProgress, !0)), typeof o.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", re(o.onUploadProgress)), (o.cancelToken || o.signal) && (f = (h) => {
      u && (n(!h || h.type ? new U(null, e, u) : h), u.abort(), u = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const g = Ao(o.url);
    if (g && C.protocols.indexOf(g) === -1) {
      n(new b("Unsupported protocol " + g + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(s || null);
  });
}, Lo = (e, t) => {
  let r = new AbortController(), n;
  const o = function(f) {
    if (!n) {
      n = !0, a();
      const l = f instanceof Error ? f : this.reason;
      r.abort(l instanceof b ? l : new U(l instanceof Error ? l.message : l));
    }
  };
  let s = t && setTimeout(() => {
    o(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
  }, t);
  const a = () => {
    e && (s && clearTimeout(s), s = null, e.forEach((f) => {
      f && (f.removeEventListener ? f.removeEventListener("abort", o) : f.unsubscribe(o));
    }), e = null);
  };
  e.forEach((f) => f && f.addEventListener && f.addEventListener("abort", o));
  const { signal: i } = r;
  return i.unsubscribe = a, [i, () => {
    s && clearTimeout(s), s = null;
  }];
}, Io = Lo, Bo = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, Uo = async function* (e, t, r) {
  for await (const n of e)
    yield* Bo(ArrayBuffer.isView(n) ? n : await r(String(n)), t);
}, ft = (e, t, r, n, o) => {
  const s = Uo(e, t, o);
  let a = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(i) {
      const { done: f, value: l } = await s.next();
      if (f) {
        i.close(), n();
        return;
      }
      let u = l.byteLength;
      r && r(a += u), i.enqueue(new Uint8Array(l));
    },
    cancel(i) {
      return n(i), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, dt = (e, t) => {
  const r = e != null;
  return (n) => setTimeout(() => t({
    lengthComputable: r,
    total: e,
    loaded: n
  }));
}, pe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", yr = pe && typeof ReadableStream == "function", Ae = pe && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ko = yr && (() => {
  let e = !1;
  const t = new Request(C.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), pt = 64 * 1024, Ce = yr && !!(() => {
  try {
    return c.isReadableStream(new Response("").body);
  } catch {
  }
})(), ne = {
  stream: Ce && ((e) => e.body)
};
pe && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ne[t] && (ne[t] = c.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new b(`Response type '${t}' is not supported`, b.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Mo = async (e) => {
  if (e == null)
    return 0;
  if (c.isBlob(e))
    return e.size;
  if (c.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (c.isArrayBufferView(e))
    return e.byteLength;
  if (c.isURLSearchParams(e) && (e = e + ""), c.isString(e))
    return (await Ae(e)).byteLength;
}, qo = async (e, t) => {
  const r = c.toFiniteNumber(e.getContentLength());
  return r ?? Mo(t);
}, Ho = pe && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: o,
    cancelToken: s,
    timeout: a,
    onDownloadProgress: i,
    onUploadProgress: f,
    responseType: l,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: g
  } = hr(e);
  l = l ? (l + "").toLowerCase() : "text";
  let [h, p] = o || s || a ? Io([o, s], a) : [], y, v;
  const _ = () => {
    !y && setTimeout(() => {
      h && h.unsubscribe();
    }), y = !0;
  };
  let P;
  try {
    if (f && ko && r !== "get" && r !== "head" && (P = await qo(u, n)) !== 0) {
      let A = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), N;
      c.isFormData(n) && (N = A.headers.get("content-type")) && u.setContentType(N), A.body && (n = ft(A.body, pt, dt(
        P,
        re(f)
      ), null, Ae));
    }
    c.isString(d) || (d = d ? "cors" : "omit"), v = new Request(t, {
      ...g,
      signal: h,
      method: r.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: n,
      duplex: "half",
      withCredentials: d
    });
    let m = await fetch(v);
    const T = Ce && (l === "stream" || l === "response");
    if (Ce && (i || T)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((rt) => {
        A[rt] = m[rt];
      });
      const N = c.toFiniteNumber(m.headers.get("content-length"));
      m = new Response(
        ft(m.body, pt, i && dt(
          N,
          re(i, !0)
        ), T && _, Ae),
        A
      );
    }
    l = l || "text";
    let O = await ne[c.findKey(ne, l) || "text"](m, e);
    return !T && _(), p && p(), await new Promise((A, N) => {
      dr(A, N, {
        data: O,
        headers: j.from(m.headers),
        status: m.status,
        statusText: m.statusText,
        config: e,
        request: v
      });
    });
  } catch (m) {
    throw _(), m && m.name === "TypeError" && /fetch/i.test(m.message) ? Object.assign(
      new b("Network Error", b.ERR_NETWORK, e, v),
      {
        cause: m.cause || m
      }
    ) : b.from(m, m && m.code, e, v);
  }
}), je = {
  http: no,
  xhr: Do,
  fetch: Ho
};
c.forEach(je, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ht = (e) => `- ${e}`, Vo = (e) => c.isFunction(e) || e === null || e === !1, br = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let a;
      if (n = r, !Vo(r) && (n = je[(a = String(r)).toLowerCase()], n === void 0))
        throw new b(`Unknown adapter '${a}'`);
      if (n)
        break;
      o[a || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(o).map(
        ([i, f]) => `adapter ${i} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? s.length > 1 ? `since :
` + s.map(ht).join(`
`) : " " + ht(s[0]) : "as no adapter specified";
      throw new b(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: je
};
function Se(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new U(null, e);
}
function yt(e) {
  return Se(e), e.headers = j.from(e.headers), e.data = $e.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), br.getAdapter(e.adapter || qe.adapter)(e).then(function(n) {
    return Se(e), n.data = $e.call(
      e,
      e.transformResponse,
      n
    ), n.headers = j.from(n.headers), n;
  }, function(n) {
    return fr(n) || (Se(e), n && n.response && (n.response.data = $e.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = j.from(n.response.headers))), Promise.reject(n);
  });
}
const mr = "1.7.2", He = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  He[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const bt = {};
He.transitional = function(t, r, n) {
  function o(s, a) {
    return "[Axios v" + mr + "] Transitional option '" + s + "'" + a + (n ? ". " + n : "");
  }
  return (s, a, i) => {
    if (t === !1)
      throw new b(
        o(a, " has been removed" + (r ? " in " + r : "")),
        b.ERR_DEPRECATED
      );
    return r && !bt[a] && (bt[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, a, i) : !0;
  };
};
function Ko(e, t, r) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], a = t[s];
    if (a) {
      const i = e[s], f = i === void 0 || a(i, s, e);
      if (f !== !0)
        throw new b("option " + s + " must be " + f, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new b("Unknown option " + s, b.ERR_BAD_OPTION);
  }
}
const Re = {
  assertOptions: Ko,
  validators: He
}, F = Re.validators;
class oe {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ct(),
      response: new ct()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = L(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: s } = r;
    n !== void 0 && Re.assertOptions(n, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), o != null && (c.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Re.assertOptions(o, {
      encode: F.function,
      serialize: F.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = s && c.merge(
      s.common,
      s[r.method]
    );
    s && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete s[p];
      }
    ), r.headers = j.concat(a, s);
    const i = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (f = f && y.synchronous, i.unshift(y.fulfilled, y.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(y) {
      l.push(y.fulfilled, y.rejected);
    });
    let u, d = 0, g;
    if (!f) {
      const p = [yt.bind(this), void 0];
      for (p.unshift.apply(p, i), p.push.apply(p, l), g = p.length, u = Promise.resolve(r); d < g; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    g = i.length;
    let h = r;
    for (d = 0; d < g; ) {
      const p = i[d++], y = i[d++];
      try {
        h = p(h);
      } catch (v) {
        y.call(this, v);
        break;
      }
    }
    try {
      u = yt.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, g = l.length; d < g; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = L(this.defaults, t);
    const r = pr(t.baseURL, t.url);
    return cr(r, t.params, t.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(t) {
  oe.prototype[t] = function(r, n) {
    return this.request(L(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(s, a, i) {
      return this.request(L(i || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  oe.prototype[t] = r(), oe.prototype[t + "Form"] = r(!0);
});
const ee = oe;
class Ve {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const a = new Promise((i) => {
        n.subscribe(i), s = i;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(s);
      }, a;
    }, t(function(s, a, i) {
      n.reason || (n.reason = new U(s, a, i), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ve(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const zo = Ve;
function Go(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Jo(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const Pe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Pe).forEach(([e, t]) => {
  Pe[t] = e;
});
const Wo = Pe;
function gr(e) {
  const t = new ee(e), r = Xt(ee.prototype.request, t);
  return c.extend(r, ee.prototype, t, { allOwnKeys: !0 }), c.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return gr(L(e, o));
  }, r;
}
const S = gr(qe);
S.Axios = ee;
S.CanceledError = U;
S.CancelToken = zo;
S.isCancel = fr;
S.VERSION = mr;
S.toFormData = fe;
S.AxiosError = b;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = Go;
S.isAxiosError = Jo;
S.mergeConfig = L;
S.AxiosHeaders = j;
S.formToJSON = (e) => lr(c.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = br.getAdapter;
S.HttpStatusCode = Wo;
S.default = S;
const Xo = S, Qo = Xo.create({ baseURL: "http://127.0.0.1:8000/v1/" });
async function Yo(e, t, r, n, o = !0) {
  try {
    const s = await Qo({
      url: e,
      method: t,
      data: r
    });
    return Object.keys(n).forEach((a) => {
      delete n[a];
    }), Object.assign(n, []), s;
  } catch (s) {
    throw o && Object.keys(n).forEach((a) => {
      delete n[a];
    }), s.response && s.response.status === 422 ? n.value ? n.value = s.response.data.errors : Object.assign(n, s.response.data.errors) : console.error("An error occurred:", s), s;
  }
}
var Q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function es() {
  this.__data__ = [], this.size = 0;
}
var ts = es;
function rs(e, t) {
  return e === t || e !== e && t !== t;
}
var vr = rs, ns = vr;
function os(e, t) {
  for (var r = e.length; r--; )
    if (ns(e[r][0], t))
      return r;
  return -1;
}
var he = os, ss = he, as = Array.prototype, is = as.splice;
function cs(e) {
  var t = this.__data__, r = ss(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : is.call(t, r, 1), --this.size, !0;
}
var us = cs, ls = he;
function fs(e) {
  var t = this.__data__, r = ls(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var ds = fs, ps = he;
function hs(e) {
  return ps(this.__data__, e) > -1;
}
var ys = hs, bs = he;
function ms(e, t) {
  var r = this.__data__, n = bs(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var gs = ms, vs = ts, _s = us, ws = ds, $s = ys, Ss = gs;
function k(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
k.prototype.clear = vs;
k.prototype.delete = _s;
k.prototype.get = ws;
k.prototype.has = $s;
k.prototype.set = Ss;
var ye = k, Ts = ye;
function Es() {
  this.__data__ = new Ts(), this.size = 0;
}
var Os = Es;
function As(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Cs = As;
function js(e) {
  return this.__data__.get(e);
}
var Rs = js;
function Ps(e) {
  return this.__data__.has(e);
}
var xs = Ps, Ns = typeof Q == "object" && Q && Q.Object === Object && Q, _r = Ns, Fs = _r, Ds = typeof self == "object" && self && self.Object === Object && self, Ls = Fs || Ds || Function("return this")(), x = Ls, Is = x, Bs = Is.Symbol, Ke = Bs, mt = Ke, wr = Object.prototype, Us = wr.hasOwnProperty, ks = wr.toString, z = mt ? mt.toStringTag : void 0;
function Ms(e) {
  var t = Us.call(e, z), r = e[z];
  try {
    e[z] = void 0;
    var n = !0;
  } catch {
  }
  var o = ks.call(e);
  return n && (t ? e[z] = r : delete e[z]), o;
}
var qs = Ms, Hs = Object.prototype, Vs = Hs.toString;
function Ks(e) {
  return Vs.call(e);
}
var zs = Ks, gt = Ke, Gs = qs, Js = zs, Ws = "[object Null]", Xs = "[object Undefined]", vt = gt ? gt.toStringTag : void 0;
function Qs(e) {
  return e == null ? e === void 0 ? Xs : Ws : vt && vt in Object(e) ? Gs(e) : Js(e);
}
var be = Qs;
function Ys(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var W = Ys, Zs = be, ea = W, ta = "[object AsyncFunction]", ra = "[object Function]", na = "[object GeneratorFunction]", oa = "[object Proxy]";
function sa(e) {
  if (!ea(e))
    return !1;
  var t = Zs(e);
  return t == ra || t == na || t == ta || t == oa;
}
var $r = sa, aa = x, ia = aa["__core-js_shared__"], ca = ia, Te = ca, _t = function() {
  var e = /[^.]+$/.exec(Te && Te.keys && Te.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ua(e) {
  return !!_t && _t in e;
}
var la = ua, fa = Function.prototype, da = fa.toString;
function pa(e) {
  if (e != null) {
    try {
      return da.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Sr = pa, ha = $r, ya = la, ba = W, ma = Sr, ga = /[\\^$.*+?()[\]{}|]/g, va = /^\[object .+?Constructor\]$/, _a = Function.prototype, wa = Object.prototype, $a = _a.toString, Sa = wa.hasOwnProperty, Ta = RegExp(
  "^" + $a.call(Sa).replace(ga, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ea(e) {
  if (!ba(e) || ya(e))
    return !1;
  var t = ha(e) ? Ta : va;
  return t.test(ma(e));
}
var Oa = Ea;
function Aa(e, t) {
  return e == null ? void 0 : e[t];
}
var Ca = Aa, ja = Oa, Ra = Ca;
function Pa(e, t) {
  var r = Ra(e, t);
  return ja(r) ? r : void 0;
}
var I = Pa, xa = I, Na = x, Fa = xa(Na, "Map"), ze = Fa, Da = I, La = Da(Object, "create"), me = La, wt = me;
function Ia() {
  this.__data__ = wt ? wt(null) : {}, this.size = 0;
}
var Ba = Ia;
function Ua(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ka = Ua, Ma = me, qa = "__lodash_hash_undefined__", Ha = Object.prototype, Va = Ha.hasOwnProperty;
function Ka(e) {
  var t = this.__data__;
  if (Ma) {
    var r = t[e];
    return r === qa ? void 0 : r;
  }
  return Va.call(t, e) ? t[e] : void 0;
}
var za = Ka, Ga = me, Ja = Object.prototype, Wa = Ja.hasOwnProperty;
function Xa(e) {
  var t = this.__data__;
  return Ga ? t[e] !== void 0 : Wa.call(t, e);
}
var Qa = Xa, Ya = me, Za = "__lodash_hash_undefined__";
function ei(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ya && t === void 0 ? Za : t, this;
}
var ti = ei, ri = Ba, ni = ka, oi = za, si = Qa, ai = ti;
function M(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
M.prototype.clear = ri;
M.prototype.delete = ni;
M.prototype.get = oi;
M.prototype.has = si;
M.prototype.set = ai;
var ii = M, $t = ii, ci = ye, ui = ze;
function li() {
  this.size = 0, this.__data__ = {
    hash: new $t(),
    map: new (ui || ci)(),
    string: new $t()
  };
}
var fi = li;
function di(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var pi = di, hi = pi;
function yi(e, t) {
  var r = e.__data__;
  return hi(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ge = yi, bi = ge;
function mi(e) {
  var t = bi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var gi = mi, vi = ge;
function _i(e) {
  return vi(this, e).get(e);
}
var wi = _i, $i = ge;
function Si(e) {
  return $i(this, e).has(e);
}
var Ti = Si, Ei = ge;
function Oi(e, t) {
  var r = Ei(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Ai = Oi, Ci = fi, ji = gi, Ri = wi, Pi = Ti, xi = Ai;
function q(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
q.prototype.clear = Ci;
q.prototype.delete = ji;
q.prototype.get = Ri;
q.prototype.has = Pi;
q.prototype.set = xi;
var Ni = q, Fi = ye, Di = ze, Li = Ni, Ii = 200;
function Bi(e, t) {
  var r = this.__data__;
  if (r instanceof Fi) {
    var n = r.__data__;
    if (!Di || n.length < Ii - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Li(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Ui = Bi, ki = ye, Mi = Os, qi = Cs, Hi = Rs, Vi = xs, Ki = Ui;
function H(e) {
  var t = this.__data__ = new ki(e);
  this.size = t.size;
}
H.prototype.clear = Mi;
H.prototype.delete = qi;
H.prototype.get = Hi;
H.prototype.has = Vi;
H.prototype.set = Ki;
var zi = H;
function Gi(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Ji = Gi, Wi = I, Xi = function() {
  try {
    var e = Wi(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Qi = Xi, St = Qi;
function Yi(e, t, r) {
  t == "__proto__" && St ? St(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Tr = Yi, Zi = Tr, ec = vr, tc = Object.prototype, rc = tc.hasOwnProperty;
function nc(e, t, r) {
  var n = e[t];
  (!(rc.call(e, t) && ec(n, r)) || r === void 0 && !(t in e)) && Zi(e, t, r);
}
var Er = nc, oc = Er, sc = Tr;
function ac(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var s = -1, a = t.length; ++s < a; ) {
    var i = t[s], f = n ? n(r[i], e[i], i, r, e) : void 0;
    f === void 0 && (f = e[i]), o ? sc(r, i, f) : oc(r, i, f);
  }
  return r;
}
var ve = ac;
function ic(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var cc = ic;
function uc(e) {
  return e != null && typeof e == "object";
}
var X = uc, lc = be, fc = X, dc = "[object Arguments]";
function pc(e) {
  return fc(e) && lc(e) == dc;
}
var hc = pc, Tt = hc, yc = X, Or = Object.prototype, bc = Or.hasOwnProperty, mc = Or.propertyIsEnumerable, gc = Tt(function() {
  return arguments;
}()) ? Tt : function(e) {
  return yc(e) && bc.call(e, "callee") && !mc.call(e, "callee");
}, vc = gc, _c = Array.isArray, Ge = _c, se = { exports: {} };
function wc() {
  return !1;
}
var $c = wc;
se.exports;
(function(e, t) {
  var r = x, n = $c, o = t && !t.nodeType && t, s = o && !0 && e && !e.nodeType && e, a = s && s.exports === o, i = a ? r.Buffer : void 0, f = i ? i.isBuffer : void 0, l = f || n;
  e.exports = l;
})(se, se.exports);
var Ar = se.exports, Sc = 9007199254740991, Tc = /^(?:0|[1-9]\d*)$/;
function Ec(e, t) {
  var r = typeof e;
  return t = t ?? Sc, !!t && (r == "number" || r != "symbol" && Tc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Oc = Ec, Ac = 9007199254740991;
function Cc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ac;
}
var Cr = Cc, jc = be, Rc = Cr, Pc = X, xc = "[object Arguments]", Nc = "[object Array]", Fc = "[object Boolean]", Dc = "[object Date]", Lc = "[object Error]", Ic = "[object Function]", Bc = "[object Map]", Uc = "[object Number]", kc = "[object Object]", Mc = "[object RegExp]", qc = "[object Set]", Hc = "[object String]", Vc = "[object WeakMap]", Kc = "[object ArrayBuffer]", zc = "[object DataView]", Gc = "[object Float32Array]", Jc = "[object Float64Array]", Wc = "[object Int8Array]", Xc = "[object Int16Array]", Qc = "[object Int32Array]", Yc = "[object Uint8Array]", Zc = "[object Uint8ClampedArray]", eu = "[object Uint16Array]", tu = "[object Uint32Array]", $ = {};
$[Gc] = $[Jc] = $[Wc] = $[Xc] = $[Qc] = $[Yc] = $[Zc] = $[eu] = $[tu] = !0;
$[xc] = $[Nc] = $[Kc] = $[Fc] = $[zc] = $[Dc] = $[Lc] = $[Ic] = $[Bc] = $[Uc] = $[kc] = $[Mc] = $[qc] = $[Hc] = $[Vc] = !1;
function ru(e) {
  return Pc(e) && Rc(e.length) && !!$[jc(e)];
}
var nu = ru;
function ou(e) {
  return function(t) {
    return e(t);
  };
}
var Je = ou, ae = { exports: {} };
ae.exports;
(function(e, t) {
  var r = _r, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, s = o && o.exports === n, a = s && r.process, i = function() {
    try {
      var f = o && o.require && o.require("util").types;
      return f || a && a.binding && a.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(ae, ae.exports);
var We = ae.exports, su = nu, au = Je, Et = We, Ot = Et && Et.isTypedArray, iu = Ot ? au(Ot) : su, cu = iu, uu = cc, lu = vc, fu = Ge, du = Ar, pu = Oc, hu = cu, yu = Object.prototype, bu = yu.hasOwnProperty;
function mu(e, t) {
  var r = fu(e), n = !r && lu(e), o = !r && !n && du(e), s = !r && !n && !o && hu(e), a = r || n || o || s, i = a ? uu(e.length, String) : [], f = i.length;
  for (var l in e)
    (t || bu.call(e, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    pu(l, f))) && i.push(l);
  return i;
}
var jr = mu, gu = Object.prototype;
function vu(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || gu;
  return e === r;
}
var Xe = vu;
function _u(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Rr = _u, wu = Rr, $u = wu(Object.keys, Object), Su = $u, Tu = Xe, Eu = Su, Ou = Object.prototype, Au = Ou.hasOwnProperty;
function Cu(e) {
  if (!Tu(e))
    return Eu(e);
  var t = [];
  for (var r in Object(e))
    Au.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var ju = Cu, Ru = $r, Pu = Cr;
function xu(e) {
  return e != null && Pu(e.length) && !Ru(e);
}
var Pr = xu, Nu = jr, Fu = ju, Du = Pr;
function Lu(e) {
  return Du(e) ? Nu(e) : Fu(e);
}
var Qe = Lu, Iu = ve, Bu = Qe;
function Uu(e, t) {
  return e && Iu(t, Bu(t), e);
}
var ku = Uu;
function Mu(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var qu = Mu, Hu = W, Vu = Xe, Ku = qu, zu = Object.prototype, Gu = zu.hasOwnProperty;
function Ju(e) {
  if (!Hu(e))
    return Ku(e);
  var t = Vu(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Gu.call(e, n)) || r.push(n);
  return r;
}
var Wu = Ju, Xu = jr, Qu = Wu, Yu = Pr;
function Zu(e) {
  return Yu(e) ? Xu(e, !0) : Qu(e);
}
var Ye = Zu, el = ve, tl = Ye;
function rl(e, t) {
  return e && el(t, tl(t), e);
}
var nl = rl, ie = { exports: {} };
ie.exports;
(function(e, t) {
  var r = x, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, s = o && o.exports === n, a = s ? r.Buffer : void 0, i = a ? a.allocUnsafe : void 0;
  function f(l, u) {
    if (u)
      return l.slice();
    var d = l.length, g = i ? i(d) : new l.constructor(d);
    return l.copy(g), g;
  }
  e.exports = f;
})(ie, ie.exports);
var ol = ie.exports;
function sl(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var al = sl;
function il(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, s = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (s[o++] = a);
  }
  return s;
}
var cl = il;
function ul() {
  return [];
}
var xr = ul, ll = cl, fl = xr, dl = Object.prototype, pl = dl.propertyIsEnumerable, At = Object.getOwnPropertySymbols, hl = At ? function(e) {
  return e == null ? [] : (e = Object(e), ll(At(e), function(t) {
    return pl.call(e, t);
  }));
} : fl, Ze = hl, yl = ve, bl = Ze;
function ml(e, t) {
  return yl(e, bl(e), t);
}
var gl = ml;
function vl(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Nr = vl, _l = Rr, wl = _l(Object.getPrototypeOf, Object), Fr = wl, $l = Nr, Sl = Fr, Tl = Ze, El = xr, Ol = Object.getOwnPropertySymbols, Al = Ol ? function(e) {
  for (var t = []; e; )
    $l(t, Tl(e)), e = Sl(e);
  return t;
} : El, Dr = Al, Cl = ve, jl = Dr;
function Rl(e, t) {
  return Cl(e, jl(e), t);
}
var Pl = Rl, xl = Nr, Nl = Ge;
function Fl(e, t, r) {
  var n = t(e);
  return Nl(e) ? n : xl(n, r(e));
}
var Lr = Fl, Dl = Lr, Ll = Ze, Il = Qe;
function Bl(e) {
  return Dl(e, Il, Ll);
}
var Ul = Bl, kl = Lr, Ml = Dr, ql = Ye;
function Hl(e) {
  return kl(e, ql, Ml);
}
var Vl = Hl, Kl = I, zl = x, Gl = Kl(zl, "DataView"), Jl = Gl, Wl = I, Xl = x, Ql = Wl(Xl, "Promise"), Yl = Ql, Zl = I, ef = x, tf = Zl(ef, "Set"), rf = tf, nf = I, of = x, sf = nf(of, "WeakMap"), af = sf, xe = Jl, Ne = ze, Fe = Yl, De = rf, Le = af, Ir = be, V = Sr, Ct = "[object Map]", cf = "[object Object]", jt = "[object Promise]", Rt = "[object Set]", Pt = "[object WeakMap]", xt = "[object DataView]", uf = V(xe), lf = V(Ne), ff = V(Fe), df = V(De), pf = V(Le), D = Ir;
(xe && D(new xe(new ArrayBuffer(1))) != xt || Ne && D(new Ne()) != Ct || Fe && D(Fe.resolve()) != jt || De && D(new De()) != Rt || Le && D(new Le()) != Pt) && (D = function(e) {
  var t = Ir(e), r = t == cf ? e.constructor : void 0, n = r ? V(r) : "";
  if (n)
    switch (n) {
      case uf:
        return xt;
      case lf:
        return Ct;
      case ff:
        return jt;
      case df:
        return Rt;
      case pf:
        return Pt;
    }
  return t;
});
var et = D, hf = Object.prototype, yf = hf.hasOwnProperty;
function bf(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && yf.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var mf = bf, gf = x, vf = gf.Uint8Array, _f = vf, Nt = _f;
function wf(e) {
  var t = new e.constructor(e.byteLength);
  return new Nt(t).set(new Nt(e)), t;
}
var tt = wf, $f = tt;
function Sf(e, t) {
  var r = t ? $f(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Tf = Sf, Ef = /\w*$/;
function Of(e) {
  var t = new e.constructor(e.source, Ef.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Af = Of, Ft = Ke, Dt = Ft ? Ft.prototype : void 0, Lt = Dt ? Dt.valueOf : void 0;
function Cf(e) {
  return Lt ? Object(Lt.call(e)) : {};
}
var jf = Cf, Rf = tt;
function Pf(e, t) {
  var r = t ? Rf(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var xf = Pf, Nf = tt, Ff = Tf, Df = Af, Lf = jf, If = xf, Bf = "[object Boolean]", Uf = "[object Date]", kf = "[object Map]", Mf = "[object Number]", qf = "[object RegExp]", Hf = "[object Set]", Vf = "[object String]", Kf = "[object Symbol]", zf = "[object ArrayBuffer]", Gf = "[object DataView]", Jf = "[object Float32Array]", Wf = "[object Float64Array]", Xf = "[object Int8Array]", Qf = "[object Int16Array]", Yf = "[object Int32Array]", Zf = "[object Uint8Array]", ed = "[object Uint8ClampedArray]", td = "[object Uint16Array]", rd = "[object Uint32Array]";
function nd(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case zf:
      return Nf(e);
    case Bf:
    case Uf:
      return new n(+e);
    case Gf:
      return Ff(e, r);
    case Jf:
    case Wf:
    case Xf:
    case Qf:
    case Yf:
    case Zf:
    case ed:
    case td:
    case rd:
      return If(e, r);
    case kf:
      return new n();
    case Mf:
    case Vf:
      return new n(e);
    case qf:
      return Df(e);
    case Hf:
      return new n();
    case Kf:
      return Lf(e);
  }
}
var od = nd, sd = W, It = Object.create, ad = function() {
  function e() {
  }
  return function(t) {
    if (!sd(t))
      return {};
    if (It)
      return It(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), id = ad, cd = id, ud = Fr, ld = Xe;
function fd(e) {
  return typeof e.constructor == "function" && !ld(e) ? cd(ud(e)) : {};
}
var dd = fd, pd = et, hd = X, yd = "[object Map]";
function bd(e) {
  return hd(e) && pd(e) == yd;
}
var md = bd, gd = md, vd = Je, Bt = We, Ut = Bt && Bt.isMap, _d = Ut ? vd(Ut) : gd, wd = _d, $d = et, Sd = X, Td = "[object Set]";
function Ed(e) {
  return Sd(e) && $d(e) == Td;
}
var Od = Ed, Ad = Od, Cd = Je, kt = We, Mt = kt && kt.isSet, jd = Mt ? Cd(Mt) : Ad, Rd = jd, Pd = zi, xd = Ji, Nd = Er, Fd = ku, Dd = nl, Ld = ol, Id = al, Bd = gl, Ud = Pl, kd = Ul, Md = Vl, qd = et, Hd = mf, Vd = od, Kd = dd, zd = Ge, Gd = Ar, Jd = wd, Wd = W, Xd = Rd, Qd = Qe, Yd = Ye, Zd = 1, ep = 2, tp = 4, Br = "[object Arguments]", rp = "[object Array]", np = "[object Boolean]", op = "[object Date]", sp = "[object Error]", Ur = "[object Function]", ap = "[object GeneratorFunction]", ip = "[object Map]", cp = "[object Number]", kr = "[object Object]", up = "[object RegExp]", lp = "[object Set]", fp = "[object String]", dp = "[object Symbol]", pp = "[object WeakMap]", hp = "[object ArrayBuffer]", yp = "[object DataView]", bp = "[object Float32Array]", mp = "[object Float64Array]", gp = "[object Int8Array]", vp = "[object Int16Array]", _p = "[object Int32Array]", wp = "[object Uint8Array]", $p = "[object Uint8ClampedArray]", Sp = "[object Uint16Array]", Tp = "[object Uint32Array]", w = {};
w[Br] = w[rp] = w[hp] = w[yp] = w[np] = w[op] = w[bp] = w[mp] = w[gp] = w[vp] = w[_p] = w[ip] = w[cp] = w[kr] = w[up] = w[lp] = w[fp] = w[dp] = w[wp] = w[$p] = w[Sp] = w[Tp] = !0;
w[sp] = w[Ur] = w[pp] = !1;
function te(e, t, r, n, o, s) {
  var a, i = t & Zd, f = t & ep, l = t & tp;
  if (r && (a = o ? r(e, n, o, s) : r(e)), a !== void 0)
    return a;
  if (!Wd(e))
    return e;
  var u = zd(e);
  if (u) {
    if (a = Hd(e), !i)
      return Id(e, a);
  } else {
    var d = qd(e), g = d == Ur || d == ap;
    if (Gd(e))
      return Ld(e, i);
    if (d == kr || d == Br || g && !o) {
      if (a = f || g ? {} : Kd(e), !i)
        return f ? Ud(e, Dd(a, e)) : Bd(e, Fd(a, e));
    } else {
      if (!w[d])
        return o ? e : {};
      a = Vd(e, d, i);
    }
  }
  s || (s = new Pd());
  var h = s.get(e);
  if (h)
    return h;
  s.set(e, a), Xd(e) ? e.forEach(function(v) {
    a.add(te(v, t, r, v, e, s));
  }) : Jd(e) && e.forEach(function(v, _) {
    a.set(_, te(v, t, r, _, e, s));
  });
  var p = l ? f ? Md : kd : f ? Yd : Qd, y = u ? void 0 : p(e);
  return xd(y || e, function(v, _) {
    y && (_ = v, v = e[_]), Nd(a, _, te(v, t, r, _, e, s));
  }), a;
}
var Ep = te, Op = Ep, Ap = 1, Cp = 4;
function jp(e) {
  return Op(e, Ap | Cp);
}
var Rp = jp;
const qt = /* @__PURE__ */ Zo(Rp);
function Pp() {
  return Ie(ln);
}
function Bp(e, t = {}) {
  let r = (s) => s;
  const n = Pp();
  let o = qt(typeof e == "object" ? e : data());
  return rn({
    ...e,
    data() {
      return Object.keys(o).reduce((s, a) => (s[a] = this[a], s), {});
    },
    transform(s) {
      return r = s, this;
    },
    processed: !1,
    clearErrors() {
      this.errors = {};
    },
    errors: {},
    reset() {
      this.clearErrors(), this.processed = !1, Object.assign(this, o);
    },
    async submit(s, a, i = {}) {
      n.loading.show();
      const f = r(this.data()), l = {
        onSuccess: async (u) => (this.clearErrors(), i.onSuccess ? await i.onSuccess(u) : null),
        onError: async (u) => i.onError ? await i.onError(u) : null
      };
      try {
        this.processed = !0;
        const u = await Yo(a, s, f, this.errors);
        await l.onSuccess(u.data);
      } catch (u) {
        await l.onError(u);
      }
      this.processed = !1, n.loading.hide();
    },
    post(s, a = {}) {
      this.submit("post", s, a);
    },
    get(s, a = {}) {
      this.submit("get", s, a);
    },
    put(s, a = {}) {
      this.submit("put", s, a);
    },
    patch(s, a = {}) {
      this.submit("patch", s, a);
    },
    delete(s, a = {}) {
      this.submit("delete", s, a);
    }
  });
}
/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var Ht;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ht || (Ht = {}));
var Vt;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Vt || (Vt = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Kt;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Kt || (Kt = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const xp = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Np = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Fp() {
  return Ie(xp);
}
function Dp(e) {
  return Ie(Np);
}
const zt = Jt({});
function Up() {
  Wt(async () => {
    await t();
  });
  const e = Dp();
  Fp();
  const t = async () => {
    const n = await import(`./../${e.meta.componentPath}`), o = [];
    e.matched.map((a) => {
      a.meta.title && o.push({ path: a.path, title: a.meta.title });
    });
    const s = {
      title: n.default.title ? n.default.title : null,
      breadcrumbs: o || []
    };
    return zt.value = s, s;
  };
  return nn(() => e.path, async () => {
    await t();
  }), {
    getOptions: t,
    options: zt
  };
}
const Gt = {
  UsoftForm: gn
}, Lp = (e) => {
  Object.keys(Gt).forEach((t) => {
    e.component(t, Gt[t]);
  });
}, kp = { install: Lp };
export {
  gn as UsoftForm,
  kp as default,
  Bp as useForm,
  Up as useLayout
};
