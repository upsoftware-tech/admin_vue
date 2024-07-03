import { inject as ce, reactive as dn, ref as J, onMounted as ve, watch as Q, markRaw as yo, defineComponent as pn, getCurrentInstance as fe, provide as wo, onDeactivated as hn, onActivated as mn, h as A, nextTick as ue, openBlock as Y, createBlock as Ve, normalizeProps as gn, guardReactiveProps as _o, withCtx as So, createElementVNode as L, renderSlot as Xe, computed as $, onBeforeUpdate as xo, onBeforeUnmount as Ye, Transition as $o, createElementBlock as re, toDisplayString as vn, createVNode as bn, mergeProps as Ae, resolveComponent as Eo, createCommentVNode as yn, unref as Co, createTextVNode as To, normalizeClass as Ao } from "vue";
function wn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Oo } = Object.prototype, { getPrototypeOf: It } = Object, et = ((e) => (t) => {
  const r = Oo.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ae = (e) => (e = e.toLowerCase(), (t) => et(t) === e), tt = (e) => (t) => typeof t === e, { isArray: be } = Array, Oe = tt("undefined");
function Ro(e) {
  return e !== null && !Oe(e) && e.constructor !== null && !Oe(e.constructor) && ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _n = ae("ArrayBuffer");
function ko(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _n(e.buffer), t;
}
const jo = tt("string"), ee = tt("function"), Sn = tt("number"), rt = (e) => e !== null && typeof e == "object", Po = (e) => e === !0 || e === !1, Ie = (e) => {
  if (et(e) !== "object")
    return !1;
  const t = It(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Mo = ae("Date"), Fo = ae("File"), Bo = ae("Blob"), No = ae("FileList"), Do = (e) => rt(e) && ee(e.pipe), Io = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ee(e.append) && ((t = et(e)) === "formdata" || // detect form-data instance
  t === "object" && ee(e.toString) && e.toString() === "[object FormData]"));
}, Lo = ae("URLSearchParams"), [qo, Uo, Vo, zo] = ["ReadableStream", "Request", "Response", "Headers"].map(ae), Ho = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ke(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), be(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let i;
    for (n = 0; n < s; n++)
      i = a[n], t.call(null, e[i], i, e);
  }
}
function xn(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const $n = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), En = (e) => !Oe(e) && e !== $n;
function _t() {
  const { caseless: e } = En(this) && this || {}, t = {}, r = (n, o) => {
    const a = e && xn(t, o) || o;
    Ie(t[a]) && Ie(n) ? t[a] = _t(t[a], n) : Ie(n) ? t[a] = _t({}, n) : be(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && ke(arguments[n], r);
  return t;
}
const Ko = (e, t, r, { allOwnKeys: n } = {}) => (ke(t, (o, a) => {
  r && ee(o) ? e[a] = wn(o, r) : e[a] = o;
}, { allOwnKeys: n }), e), Go = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wo = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Jo = (e, t, r, n) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!n || n(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = r !== !1 && It(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Zo = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Qo = (e) => {
  if (!e)
    return null;
  if (be(e))
    return e;
  let t = e.length;
  if (!Sn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Xo = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && It(Uint8Array)), Yo = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, ea = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, ta = ae("HTMLFormElement"), ra = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), sr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), na = ae("RegExp"), Cn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ke(r, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (n[a] = s || o);
  }), Object.defineProperties(e, n);
}, oa = (e) => {
  Cn(e, (t, r) => {
    if (ee(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (ee(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, aa = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return be(e) ? n(e) : n(String(e).split(t)), r;
}, sa = () => {
}, ia = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, pt = "abcdefghijklmnopqrstuvwxyz", ir = "0123456789", Tn = {
  DIGIT: ir,
  ALPHA: pt,
  ALPHA_DIGIT: pt + pt.toUpperCase() + ir
}, la = (e = 16, t = Tn.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function ua(e) {
  return !!(e && ee(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ca = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (rt(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const a = be(n) ? [] : {};
        return ke(n, (s, i) => {
          const f = r(s, o + 1);
          !Oe(f) && (a[i] = f);
        }), t[o] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, fa = ae("AsyncFunction"), da = (e) => e && (rt(e) || ee(e)) && ee(e.then) && ee(e.catch), u = {
  isArray: be,
  isArrayBuffer: _n,
  isBuffer: Ro,
  isFormData: Io,
  isArrayBufferView: ko,
  isString: jo,
  isNumber: Sn,
  isBoolean: Po,
  isObject: rt,
  isPlainObject: Ie,
  isReadableStream: qo,
  isRequest: Uo,
  isResponse: Vo,
  isHeaders: zo,
  isUndefined: Oe,
  isDate: Mo,
  isFile: Fo,
  isBlob: Bo,
  isRegExp: na,
  isFunction: ee,
  isStream: Do,
  isURLSearchParams: Lo,
  isTypedArray: Xo,
  isFileList: No,
  forEach: ke,
  merge: _t,
  extend: Ko,
  trim: Ho,
  stripBOM: Go,
  inherits: Wo,
  toFlatObject: Jo,
  kindOf: et,
  kindOfTest: ae,
  endsWith: Zo,
  toArray: Qo,
  forEachEntry: Yo,
  matchAll: ea,
  isHTMLForm: ta,
  hasOwnProperty: sr,
  hasOwnProp: sr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Cn,
  freezeMethods: oa,
  toObjectSet: aa,
  toCamelCase: ra,
  noop: sa,
  toFiniteNumber: ia,
  findKey: xn,
  global: $n,
  isContextDefined: En,
  ALPHABET: Tn,
  generateString: la,
  isSpecCompliantForm: ua,
  toJSONObject: ca,
  isAsyncFn: fa,
  isThenable: da
};
function E(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
u.inherits(E, Error, {
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
      config: u.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const An = E.prototype, On = {};
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
  On[e] = { value: e };
});
Object.defineProperties(E, On);
Object.defineProperty(An, "isAxiosError", { value: !0 });
E.from = (e, t, r, n, o, a) => {
  const s = Object.create(An);
  return u.toFlatObject(e, s, function(f) {
    return f !== Error.prototype;
  }, (i) => i !== "isAxiosError"), E.call(s, e.message, t, r, n, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const pa = null;
function St(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function Rn(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function lr(e, t, r) {
  return e ? e.concat(t).map(function(o, a) {
    return o = Rn(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function ha(e) {
  return u.isArray(e) && !e.some(St);
}
const ma = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function nt(e, t, r) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = u.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, x) {
    return !u.isUndefined(x[y]);
  });
  const n = r.metaTokens, o = r.visitor || l, a = r.dots, s = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(t);
  if (!u.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null)
      return "";
    if (u.isDate(p))
      return p.toISOString();
    if (!f && u.isBlob(p))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(p) || u.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, y, x) {
    let T = p;
    if (p && !x && typeof p == "object") {
      if (u.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (u.isArray(p) && ha(p) || (u.isFileList(p) || u.endsWith(y, "[]")) && (T = u.toArray(p)))
        return y = Rn(y), T.forEach(function(S, B) {
          !(u.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? lr([y], B, a) : s === null ? y : y + "[]",
            c(S)
          );
        }), !1;
    }
    return St(p) ? !0 : (t.append(lr(x, y, a), c(p)), !1);
  }
  const d = [], C = Object.assign(ma, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: St
  });
  function b(p, y) {
    if (!u.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p), u.forEach(p, function(T, F) {
        (!(u.isUndefined(T) || T === null) && o.call(
          t,
          T,
          u.isString(F) ? F.trim() : F,
          y,
          C
        )) === !0 && b(T, y ? y.concat(F) : [F]);
      }), d.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function ur(e) {
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
function Lt(e, t) {
  this._pairs = [], e && nt(e, this, t);
}
const kn = Lt.prototype;
kn.append = function(t, r) {
  this._pairs.push([t, r]);
};
kn.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ur);
  } : ur;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function ga(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function jn(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ga, o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = u.isURLSearchParams(t) ? t.toString() : new Lt(t, r).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class va {
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
    u.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const cr = va, Pn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ba = typeof URLSearchParams < "u" ? URLSearchParams : Lt, ya = typeof FormData < "u" ? FormData : null, wa = typeof Blob < "u" ? Blob : null, _a = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ba,
    FormData: ya,
    Blob: wa
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qt = typeof window < "u" && typeof document < "u", Sa = ((e) => qt && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), xa = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), $a = qt && window.location.href || "http://localhost", Ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qt,
  hasStandardBrowserEnv: Sa,
  hasStandardBrowserWebWorkerEnv: xa,
  origin: $a
}, Symbol.toStringTag, { value: "Module" })), ne = {
  ...Ea,
  ..._a
};
function Ca(e, t) {
  return nt(e, new ne.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, a) {
      return ne.isNode && u.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ta(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Aa(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function Mn(e) {
  function t(r, n, o, a) {
    let s = r[a++];
    if (s === "__proto__")
      return !0;
    const i = Number.isFinite(+s), f = a >= r.length;
    return s = !s && u.isArray(o) ? o.length : s, f ? (u.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !i) : ((!o[s] || !u.isObject(o[s])) && (o[s] = []), t(r, n, o[s], a) && u.isArray(o[s]) && (o[s] = Aa(o[s])), !i);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const r = {};
    return u.forEachEntry(e, (n, o) => {
      t(Ta(n), o, r, 0);
    }), r;
  }
  return null;
}
function Oa(e, t, r) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Ut = {
  transitional: Pn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = u.isObject(t);
    if (a && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return o ? JSON.stringify(Mn(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ca(t, this.formSerializer).toString();
      if ((i = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return nt(
          i ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), Oa(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Ut.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (u.isResponse(t) || u.isReadableStream(t))
      return t;
    if (t && u.isString(t) && (n && !this.responseType || o)) {
      const s = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? E.from(i, E.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: ne.classes.FormData,
    Blob: ne.classes.Blob
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
u.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ut.headers[e] = {};
});
const Vt = Ut, Ra = u.toObjectSet([
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
]), ka = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), r = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!r || t[r] && Ra[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, fr = Symbol("internals");
function Ee(e) {
  return e && String(e).trim().toLowerCase();
}
function Le(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Le) : String(e);
}
function ja(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Pa = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ht(e, t, r, n, o) {
  if (u.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!u.isString(t)) {
    if (u.isString(n))
      return t.indexOf(n) !== -1;
    if (u.isRegExp(n))
      return n.test(t);
  }
}
function Ma(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Fa(e, t) {
  const r = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, a, s) {
        return this[n].call(this, t, o, a, s);
      },
      configurable: !0
    });
  });
}
class ot {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function a(i, f, c) {
      const l = Ee(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = u.findKey(o, l);
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || f] = Le(i));
    }
    const s = (i, f) => u.forEach(i, (c, l) => a(c, l, f));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (u.isString(t) && (t = t.trim()) && !Pa(t))
      s(ka(t), r);
    else if (u.isHeaders(t))
      for (const [i, f] of t.entries())
        a(f, i, n);
    else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Ee(t), t) {
      const n = u.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return ja(o);
        if (u.isFunction(r))
          return r.call(this, o, n);
        if (u.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ee(t), t) {
      const n = u.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || ht(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function a(s) {
      if (s = Ee(s), s) {
        const i = u.findKey(n, s);
        i && (!r || ht(n, n[i], i, r)) && (delete n[i], o = !0);
      }
    }
    return u.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || ht(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return u.forEach(this, (o, a) => {
      const s = u.findKey(n, a);
      if (s) {
        r[s] = Le(o), delete r[a];
        return;
      }
      const i = t ? Ma(a) : String(a).trim();
      i !== a && delete r[a], r[i] = Le(o), n[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && u.isArray(n) ? n.join(", ") : n);
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
    const n = (this[fr] = this[fr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const i = Ee(s);
      n[i] || (Fa(o, s), n[i] = !0);
    }
    return u.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
ot.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(ot.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
u.freezeMethods(ot);
const oe = ot;
function mt(e, t) {
  const r = this || Vt, n = t || r, o = oe.from(n.headers);
  let a = n.data;
  return u.forEach(e, function(i) {
    a = i.call(r, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function Fn(e) {
  return !!(e && e.__CANCEL__);
}
function ye(e, t, r) {
  E.call(this, e ?? "canceled", E.ERR_CANCELED, t, r), this.name = "CanceledError";
}
u.inherits(ye, E, {
  __CANCEL__: !0
});
function Bn(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new E(
    "Request failed with status code " + r.status,
    [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ba(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Na(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), l = n[a];
    s || (s = c), r[o] = f, n[o] = c;
    let d = a, C = 0;
    for (; d !== o; )
      C += r[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), c - s < t)
      return;
    const b = l && c - l;
    return b ? Math.round(C * 1e3 / b) : void 0;
  };
}
function Da(e, t) {
  let r = 0;
  const n = 1e3 / t;
  let o = null;
  return function() {
    const s = this === !0, i = Date.now();
    if (s || i - r > n)
      return o && (clearTimeout(o), o = null), r = i, e.apply(null, arguments);
    o || (o = setTimeout(() => (o = null, r = Date.now(), e.apply(null, arguments)), n - (i - r)));
  };
}
const ze = (e, t, r = 3) => {
  let n = 0;
  const o = Na(50, 250);
  return Da((a) => {
    const s = a.loaded, i = a.lengthComputable ? a.total : void 0, f = s - n, c = o(f), l = s <= i;
    n = s;
    const d = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: f,
      rate: c || void 0,
      estimated: c && i && l ? (i - s) / c : void 0,
      event: a,
      lengthComputable: i != null
    };
    d[t ? "download" : "upload"] = !0, e(d);
  }, r);
}, Ia = ne.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function o(a) {
      let s = a;
      return t && (r.setAttribute("href", s), s = r.href), r.setAttribute("href", s), {
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
    return n = o(window.location.href), function(s) {
      const i = u.isString(s) ? o(s) : s;
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
), La = ne.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      u.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), u.isString(n) && s.push("path=" + n), u.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function qa(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ua(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Nn(e, t) {
  return e && !qa(t) ? Ua(e, t) : t;
}
const dr = (e) => e instanceof oe ? { ...e } : e;
function pe(e, t) {
  t = t || {};
  const r = {};
  function n(c, l, d) {
    return u.isPlainObject(c) && u.isPlainObject(l) ? u.merge.call({ caseless: d }, c, l) : u.isPlainObject(l) ? u.merge({}, l) : u.isArray(l) ? l.slice() : l;
  }
  function o(c, l, d) {
    if (u.isUndefined(l)) {
      if (!u.isUndefined(c))
        return n(void 0, c, d);
    } else
      return n(c, l, d);
  }
  function a(c, l) {
    if (!u.isUndefined(l))
      return n(void 0, l);
  }
  function s(c, l) {
    if (u.isUndefined(l)) {
      if (!u.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, l);
  }
  function i(c, l, d) {
    if (d in t)
      return n(c, l);
    if (d in e)
      return n(void 0, c);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: i,
    headers: (c, l) => o(dr(c), dr(l), !0)
  };
  return u.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const d = f[l] || o, C = d(e[l], t[l], l);
    u.isUndefined(C) && d !== i || (r[l] = C);
  }), r;
}
const Dn = (e) => {
  const t = pe({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: i } = t;
  t.headers = s = oe.from(s), t.url = jn(Nn(t.baseURL, t.url), e.params, e.paramsSerializer), i && s.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let f;
  if (u.isFormData(r)) {
    if (ne.hasStandardBrowserEnv || ne.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((f = s.getContentType()) !== !1) {
      const [c, ...l] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (ne.hasStandardBrowserEnv && (n && u.isFunction(n) && (n = n(t)), n || n !== !1 && Ia(t.url))) {
    const c = o && a && La.read(a);
    c && s.set(o, c);
  }
  return t;
}, Va = typeof XMLHttpRequest < "u", za = Va && function(e) {
  return new Promise(function(r, n) {
    const o = Dn(e);
    let a = o.data;
    const s = oe.from(o.headers).normalize();
    let { responseType: i } = o, f;
    function c() {
      o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let l = new XMLHttpRequest();
    l.open(o.method.toUpperCase(), o.url, !0), l.timeout = o.timeout;
    function d() {
      if (!l)
        return;
      const b = oe.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: b,
        config: e,
        request: l
      };
      Bn(function(T) {
        r(T), c();
      }, function(T) {
        n(T), c();
      }, y), l = null;
    }
    "onloadend" in l ? l.onloadend = d : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, l.onabort = function() {
      l && (n(new E("Request aborted", E.ECONNABORTED, o, l)), l = null);
    }, l.onerror = function() {
      n(new E("Network Error", E.ERR_NETWORK, o, l)), l = null;
    }, l.ontimeout = function() {
      let p = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Pn;
      o.timeoutErrorMessage && (p = o.timeoutErrorMessage), n(new E(
        p,
        y.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
        o,
        l
      )), l = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in l && u.forEach(s.toJSON(), function(p, y) {
      l.setRequestHeader(y, p);
    }), u.isUndefined(o.withCredentials) || (l.withCredentials = !!o.withCredentials), i && i !== "json" && (l.responseType = o.responseType), typeof o.onDownloadProgress == "function" && l.addEventListener("progress", ze(o.onDownloadProgress, !0)), typeof o.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", ze(o.onUploadProgress)), (o.cancelToken || o.signal) && (f = (b) => {
      l && (n(!b || b.type ? new ye(null, e, l) : b), l.abort(), l = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const C = Ba(o.url);
    if (C && ne.protocols.indexOf(C) === -1) {
      n(new E("Unsupported protocol " + C + ":", E.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(a || null);
  });
}, Ha = (e, t) => {
  let r = new AbortController(), n;
  const o = function(f) {
    if (!n) {
      n = !0, s();
      const c = f instanceof Error ? f : this.reason;
      r.abort(c instanceof E ? c : new ye(c instanceof Error ? c.message : c));
    }
  };
  let a = t && setTimeout(() => {
    o(new E(`timeout ${t} of ms exceeded`, E.ETIMEDOUT));
  }, t);
  const s = () => {
    e && (a && clearTimeout(a), a = null, e.forEach((f) => {
      f && (f.removeEventListener ? f.removeEventListener("abort", o) : f.unsubscribe(o));
    }), e = null);
  };
  e.forEach((f) => f && f.addEventListener && f.addEventListener("abort", o));
  const { signal: i } = r;
  return i.unsubscribe = s, [i, () => {
    a && clearTimeout(a), a = null;
  }];
}, Ka = Ha, Ga = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, Wa = async function* (e, t, r) {
  for await (const n of e)
    yield* Ga(ArrayBuffer.isView(n) ? n : await r(String(n)), t);
}, pr = (e, t, r, n, o) => {
  const a = Wa(e, t, o);
  let s = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(i) {
      const { done: f, value: c } = await a.next();
      if (f) {
        i.close(), n();
        return;
      }
      let l = c.byteLength;
      r && r(s += l), i.enqueue(new Uint8Array(c));
    },
    cancel(i) {
      return n(i), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, hr = (e, t) => {
  const r = e != null;
  return (n) => setTimeout(() => t({
    lengthComputable: r,
    total: e,
    loaded: n
  }));
}, at = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", In = at && typeof ReadableStream == "function", xt = at && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ja = In && (() => {
  let e = !1;
  const t = new Request(ne.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), mr = 64 * 1024, $t = In && !!(() => {
  try {
    return u.isReadableStream(new Response("").body);
  } catch {
  }
})(), He = {
  stream: $t && ((e) => e.body)
};
at && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !He[t] && (He[t] = u.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new E(`Response type '${t}' is not supported`, E.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Za = async (e) => {
  if (e == null)
    return 0;
  if (u.isBlob(e))
    return e.size;
  if (u.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (u.isArrayBufferView(e))
    return e.byteLength;
  if (u.isURLSearchParams(e) && (e = e + ""), u.isString(e))
    return (await xt(e)).byteLength;
}, Qa = async (e, t) => {
  const r = u.toFiniteNumber(e.getContentLength());
  return r ?? Za(t);
}, Xa = at && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: o,
    cancelToken: a,
    timeout: s,
    onDownloadProgress: i,
    onUploadProgress: f,
    responseType: c,
    headers: l,
    withCredentials: d = "same-origin",
    fetchOptions: C
  } = Dn(e);
  c = c ? (c + "").toLowerCase() : "text";
  let [b, p] = o || a || s ? Ka([o, a], s) : [], y, x;
  const T = () => {
    !y && setTimeout(() => {
      b && b.unsubscribe();
    }), y = !0;
  };
  let F;
  try {
    if (f && Ja && r !== "get" && r !== "head" && (F = await Qa(l, n)) !== 0) {
      let O = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), R;
      u.isFormData(n) && (R = O.headers.get("content-type")) && l.setContentType(R), O.body && (n = pr(O.body, mr, hr(
        F,
        ze(f)
      ), null, xt));
    }
    u.isString(d) || (d = d ? "cors" : "omit"), x = new Request(t, {
      ...C,
      signal: b,
      method: r.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      withCredentials: d
    });
    let S = await fetch(x);
    const B = $t && (c === "stream" || c === "response");
    if ($t && (i || B)) {
      const O = {};
      ["status", "statusText", "headers"].forEach((K) => {
        O[K] = S[K];
      });
      const R = u.toFiniteNumber(S.headers.get("content-length"));
      S = new Response(
        pr(S.body, mr, i && hr(
          R,
          ze(i, !0)
        ), B && T, xt),
        O
      );
    }
    c = c || "text";
    let q = await He[u.findKey(He, c) || "text"](S, e);
    return !B && T(), p && p(), await new Promise((O, R) => {
      Bn(O, R, {
        data: q,
        headers: oe.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: x
      });
    });
  } catch (S) {
    throw T(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new E("Network Error", E.ERR_NETWORK, e, x),
      {
        cause: S.cause || S
      }
    ) : E.from(S, S && S.code, e, x);
  }
}), Et = {
  http: pa,
  xhr: za,
  fetch: Xa
};
u.forEach(Et, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const gr = (e) => `- ${e}`, Ya = (e) => u.isFunction(e) || e === null || e === !1, Ln = {
  getAdapter: (e) => {
    e = u.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let s;
      if (n = r, !Ya(r) && (n = Et[(s = String(r)).toLowerCase()], n === void 0))
        throw new E(`Unknown adapter '${s}'`);
      if (n)
        break;
      o[s || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([i, f]) => `adapter ${i} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? a.length > 1 ? `since :
` + a.map(gr).join(`
`) : " " + gr(a[0]) : "as no adapter specified";
      throw new E(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Et
};
function gt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ye(null, e);
}
function vr(e) {
  return gt(e), e.headers = oe.from(e.headers), e.data = mt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ln.getAdapter(e.adapter || Vt.adapter)(e).then(function(n) {
    return gt(e), n.data = mt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = oe.from(n.headers), n;
  }, function(n) {
    return Fn(n) || (gt(e), n && n.response && (n.response.data = mt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = oe.from(n.response.headers))), Promise.reject(n);
  });
}
const qn = "1.7.2", zt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  zt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const br = {};
zt.transitional = function(t, r, n) {
  function o(a, s) {
    return "[Axios v" + qn + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, i) => {
    if (t === !1)
      throw new E(
        o(s, " has been removed" + (r ? " in " + r : "")),
        E.ERR_DEPRECATED
      );
    return r && !br[s] && (br[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, s, i) : !0;
  };
};
function es(e, t, r) {
  if (typeof e != "object")
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], s = t[a];
    if (s) {
      const i = e[a], f = i === void 0 || s(i, a, e);
      if (f !== !0)
        throw new E("option " + a + " must be " + f, E.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new E("Unknown option " + a, E.ERR_BAD_OPTION);
  }
}
const Ct = {
  assertOptions: es,
  validators: zt
}, le = Ct.validators;
class Ke {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new cr(),
      response: new cr()
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
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = pe(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: a } = r;
    n !== void 0 && Ct.assertOptions(n, {
      silentJSONParsing: le.transitional(le.boolean),
      forcedJSONParsing: le.transitional(le.boolean),
      clarifyTimeoutError: le.transitional(le.boolean)
    }, !1), o != null && (u.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Ct.assertOptions(o, {
      encode: le.function,
      serialize: le.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = a && u.merge(
      a.common,
      a[r.method]
    );
    a && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete a[p];
      }
    ), r.headers = oe.concat(s, a);
    const i = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (f = f && y.synchronous, i.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(y) {
      c.push(y.fulfilled, y.rejected);
    });
    let l, d = 0, C;
    if (!f) {
      const p = [vr.bind(this), void 0];
      for (p.unshift.apply(p, i), p.push.apply(p, c), C = p.length, l = Promise.resolve(r); d < C; )
        l = l.then(p[d++], p[d++]);
      return l;
    }
    C = i.length;
    let b = r;
    for (d = 0; d < C; ) {
      const p = i[d++], y = i[d++];
      try {
        b = p(b);
      } catch (x) {
        y.call(this, x);
        break;
      }
    }
    try {
      l = vr.call(this, b);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, C = c.length; d < C; )
      l = l.then(c[d++], c[d++]);
    return l;
  }
  getUri(t) {
    t = pe(this.defaults, t);
    const r = Nn(t.baseURL, t.url);
    return jn(r, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  Ke.prototype[t] = function(r, n) {
    return this.request(pe(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, s, i) {
      return this.request(pe(i || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  Ke.prototype[t] = r(), Ke.prototype[t + "Form"] = r(!0);
});
const qe = Ke;
class Ht {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const s = new Promise((i) => {
        n.subscribe(i), a = i;
      }).then(o);
      return s.cancel = function() {
        n.unsubscribe(a);
      }, s;
    }, t(function(a, s, i) {
      n.reason || (n.reason = new ye(a, s, i), r(n.reason));
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
      token: new Ht(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const ts = Ht;
function rs(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function ns(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const Tt = {
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
Object.entries(Tt).forEach(([e, t]) => {
  Tt[t] = e;
});
const os = Tt;
function Un(e) {
  const t = new qe(e), r = wn(qe.prototype.request, t);
  return u.extend(r, qe.prototype, t, { allOwnKeys: !0 }), u.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Un(pe(e, o));
  }, r;
}
const W = Un(Vt);
W.Axios = qe;
W.CanceledError = ye;
W.CancelToken = ts;
W.isCancel = Fn;
W.VERSION = qn;
W.toFormData = nt;
W.AxiosError = E;
W.Cancel = W.CanceledError;
W.all = function(t) {
  return Promise.all(t);
};
W.spread = rs;
W.isAxiosError = ns;
W.mergeConfig = pe;
W.AxiosHeaders = oe;
W.formToJSON = (e) => Mn(u.isHTMLForm(e) ? new FormData(e) : e);
W.getAdapter = Ln.getAdapter;
W.HttpStatusCode = os;
W.default = W;
const as = W, ss = as.create({ baseURL: "http://127.0.0.1:8000/v1/" });
async function is(e, t, r, n, o = !0) {
  try {
    const a = await ss({
      url: e,
      method: t,
      data: r
    });
    return Object.keys(n).forEach((s) => {
      delete n[s];
    }), Object.assign(n, []), a;
  } catch (a) {
    throw o && Object.keys(n).forEach((s) => {
      delete n[s];
    }), a.response && a.response.status === 422 ? n.value ? n.value = a.response.data.errors : Object.assign(n, a.response.data.errors) : console.error("An error occurred:", a), a;
  }
}
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ls(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function us() {
  this.__data__ = [], this.size = 0;
}
var cs = us;
function fs(e, t) {
  return e === t || e !== e && t !== t;
}
var Vn = fs, ds = Vn;
function ps(e, t) {
  for (var r = e.length; r--; )
    if (ds(e[r][0], t))
      return r;
  return -1;
}
var st = ps, hs = st, ms = Array.prototype, gs = ms.splice;
function vs(e) {
  var t = this.__data__, r = hs(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : gs.call(t, r, 1), --this.size, !0;
}
var bs = vs, ys = st;
function ws(e) {
  var t = this.__data__, r = ys(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var _s = ws, Ss = st;
function xs(e) {
  return Ss(this.__data__, e) > -1;
}
var $s = xs, Es = st;
function Cs(e, t) {
  var r = this.__data__, n = Es(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Ts = Cs, As = cs, Os = bs, Rs = _s, ks = $s, js = Ts;
function we(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
we.prototype.clear = As;
we.prototype.delete = Os;
we.prototype.get = Rs;
we.prototype.has = ks;
we.prototype.set = js;
var it = we, Ps = it;
function Ms() {
  this.__data__ = new Ps(), this.size = 0;
}
var Fs = Ms;
function Bs(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Ns = Bs;
function Ds(e) {
  return this.__data__.get(e);
}
var Is = Ds;
function Ls(e) {
  return this.__data__.has(e);
}
var qs = Ls, Us = typeof Me == "object" && Me && Me.Object === Object && Me, zn = Us, Vs = zn, zs = typeof self == "object" && self && self.Object === Object && self, Hs = Vs || zs || Function("return this")(), se = Hs, Ks = se, Gs = Ks.Symbol, Kt = Gs, yr = Kt, Hn = Object.prototype, Ws = Hn.hasOwnProperty, Js = Hn.toString, Ce = yr ? yr.toStringTag : void 0;
function Zs(e) {
  var t = Ws.call(e, Ce), r = e[Ce];
  try {
    e[Ce] = void 0;
    var n = !0;
  } catch {
  }
  var o = Js.call(e);
  return n && (t ? e[Ce] = r : delete e[Ce]), o;
}
var Qs = Zs, Xs = Object.prototype, Ys = Xs.toString;
function ei(e) {
  return Ys.call(e);
}
var ti = ei, wr = Kt, ri = Qs, ni = ti, oi = "[object Null]", ai = "[object Undefined]", _r = wr ? wr.toStringTag : void 0;
function si(e) {
  return e == null ? e === void 0 ? ai : oi : _r && _r in Object(e) ? ri(e) : ni(e);
}
var lt = si;
function ii(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var je = ii, li = lt, ui = je, ci = "[object AsyncFunction]", fi = "[object Function]", di = "[object GeneratorFunction]", pi = "[object Proxy]";
function hi(e) {
  if (!ui(e))
    return !1;
  var t = li(e);
  return t == fi || t == di || t == ci || t == pi;
}
var Kn = hi, mi = se, gi = mi["__core-js_shared__"], vi = gi, vt = vi, Sr = function() {
  var e = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function bi(e) {
  return !!Sr && Sr in e;
}
var yi = bi, wi = Function.prototype, _i = wi.toString;
function Si(e) {
  if (e != null) {
    try {
      return _i.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Gn = Si, xi = Kn, $i = yi, Ei = je, Ci = Gn, Ti = /[\\^$.*+?()[\]{}|]/g, Ai = /^\[object .+?Constructor\]$/, Oi = Function.prototype, Ri = Object.prototype, ki = Oi.toString, ji = Ri.hasOwnProperty, Pi = RegExp(
  "^" + ki.call(ji).replace(Ti, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Mi(e) {
  if (!Ei(e) || $i(e))
    return !1;
  var t = xi(e) ? Pi : Ai;
  return t.test(Ci(e));
}
var Fi = Mi;
function Bi(e, t) {
  return e == null ? void 0 : e[t];
}
var Ni = Bi, Di = Fi, Ii = Ni;
function Li(e, t) {
  var r = Ii(e, t);
  return Di(r) ? r : void 0;
}
var he = Li, qi = he, Ui = se, Vi = qi(Ui, "Map"), Gt = Vi, zi = he, Hi = zi(Object, "create"), ut = Hi, xr = ut;
function Ki() {
  this.__data__ = xr ? xr(null) : {}, this.size = 0;
}
var Gi = Ki;
function Wi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ji = Wi, Zi = ut, Qi = "__lodash_hash_undefined__", Xi = Object.prototype, Yi = Xi.hasOwnProperty;
function el(e) {
  var t = this.__data__;
  if (Zi) {
    var r = t[e];
    return r === Qi ? void 0 : r;
  }
  return Yi.call(t, e) ? t[e] : void 0;
}
var tl = el, rl = ut, nl = Object.prototype, ol = nl.hasOwnProperty;
function al(e) {
  var t = this.__data__;
  return rl ? t[e] !== void 0 : ol.call(t, e);
}
var sl = al, il = ut, ll = "__lodash_hash_undefined__";
function ul(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = il && t === void 0 ? ll : t, this;
}
var cl = ul, fl = Gi, dl = Ji, pl = tl, hl = sl, ml = cl;
function _e(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_e.prototype.clear = fl;
_e.prototype.delete = dl;
_e.prototype.get = pl;
_e.prototype.has = hl;
_e.prototype.set = ml;
var gl = _e, $r = gl, vl = it, bl = Gt;
function yl() {
  this.size = 0, this.__data__ = {
    hash: new $r(),
    map: new (bl || vl)(),
    string: new $r()
  };
}
var wl = yl;
function _l(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Sl = _l, xl = Sl;
function $l(e, t) {
  var r = e.__data__;
  return xl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ct = $l, El = ct;
function Cl(e) {
  var t = El(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Tl = Cl, Al = ct;
function Ol(e) {
  return Al(this, e).get(e);
}
var Rl = Ol, kl = ct;
function jl(e) {
  return kl(this, e).has(e);
}
var Pl = jl, Ml = ct;
function Fl(e, t) {
  var r = Ml(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Bl = Fl, Nl = wl, Dl = Tl, Il = Rl, Ll = Pl, ql = Bl;
function Se(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Se.prototype.clear = Nl;
Se.prototype.delete = Dl;
Se.prototype.get = Il;
Se.prototype.has = Ll;
Se.prototype.set = ql;
var Ul = Se, Vl = it, zl = Gt, Hl = Ul, Kl = 200;
function Gl(e, t) {
  var r = this.__data__;
  if (r instanceof Vl) {
    var n = r.__data__;
    if (!zl || n.length < Kl - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Hl(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Wl = Gl, Jl = it, Zl = Fs, Ql = Ns, Xl = Is, Yl = qs, eu = Wl;
function xe(e) {
  var t = this.__data__ = new Jl(e);
  this.size = t.size;
}
xe.prototype.clear = Zl;
xe.prototype.delete = Ql;
xe.prototype.get = Xl;
xe.prototype.has = Yl;
xe.prototype.set = eu;
var tu = xe;
function ru(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var nu = ru, ou = he, au = function() {
  try {
    var e = ou(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), su = au, Er = su;
function iu(e, t, r) {
  t == "__proto__" && Er ? Er(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Wn = iu, lu = Wn, uu = Vn, cu = Object.prototype, fu = cu.hasOwnProperty;
function du(e, t, r) {
  var n = e[t];
  (!(fu.call(e, t) && uu(n, r)) || r === void 0 && !(t in e)) && lu(e, t, r);
}
var Jn = du, pu = Jn, hu = Wn;
function mu(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], f = n ? n(r[i], e[i], i, r, e) : void 0;
    f === void 0 && (f = e[i]), o ? hu(r, i, f) : pu(r, i, f);
  }
  return r;
}
var ft = mu;
function gu(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var vu = gu;
function bu(e) {
  return e != null && typeof e == "object";
}
var Pe = bu, yu = lt, wu = Pe, _u = "[object Arguments]";
function Su(e) {
  return wu(e) && yu(e) == _u;
}
var xu = Su, Cr = xu, $u = Pe, Zn = Object.prototype, Eu = Zn.hasOwnProperty, Cu = Zn.propertyIsEnumerable, Tu = Cr(function() {
  return arguments;
}()) ? Cr : function(e) {
  return $u(e) && Eu.call(e, "callee") && !Cu.call(e, "callee");
}, Au = Tu, Ou = Array.isArray, Wt = Ou, Ge = { exports: {} };
function Ru() {
  return !1;
}
var ku = Ru;
Ge.exports;
(function(e, t) {
  var r = se, n = ku, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, s = a && a.exports === o, i = s ? r.Buffer : void 0, f = i ? i.isBuffer : void 0, c = f || n;
  e.exports = c;
})(Ge, Ge.exports);
var Qn = Ge.exports, ju = 9007199254740991, Pu = /^(?:0|[1-9]\d*)$/;
function Mu(e, t) {
  var r = typeof e;
  return t = t ?? ju, !!t && (r == "number" || r != "symbol" && Pu.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Fu = Mu, Bu = 9007199254740991;
function Nu(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Bu;
}
var Xn = Nu, Du = lt, Iu = Xn, Lu = Pe, qu = "[object Arguments]", Uu = "[object Array]", Vu = "[object Boolean]", zu = "[object Date]", Hu = "[object Error]", Ku = "[object Function]", Gu = "[object Map]", Wu = "[object Number]", Ju = "[object Object]", Zu = "[object RegExp]", Qu = "[object Set]", Xu = "[object String]", Yu = "[object WeakMap]", ec = "[object ArrayBuffer]", tc = "[object DataView]", rc = "[object Float32Array]", nc = "[object Float64Array]", oc = "[object Int8Array]", ac = "[object Int16Array]", sc = "[object Int32Array]", ic = "[object Uint8Array]", lc = "[object Uint8ClampedArray]", uc = "[object Uint16Array]", cc = "[object Uint32Array]", U = {};
U[rc] = U[nc] = U[oc] = U[ac] = U[sc] = U[ic] = U[lc] = U[uc] = U[cc] = !0;
U[qu] = U[Uu] = U[ec] = U[Vu] = U[tc] = U[zu] = U[Hu] = U[Ku] = U[Gu] = U[Wu] = U[Ju] = U[Zu] = U[Qu] = U[Xu] = U[Yu] = !1;
function fc(e) {
  return Lu(e) && Iu(e.length) && !!U[Du(e)];
}
var dc = fc;
function pc(e) {
  return function(t) {
    return e(t);
  };
}
var Jt = pc, We = { exports: {} };
We.exports;
(function(e, t) {
  var r = zn, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, s = a && r.process, i = function() {
    try {
      var f = o && o.require && o.require("util").types;
      return f || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(We, We.exports);
var Zt = We.exports, hc = dc, mc = Jt, Tr = Zt, Ar = Tr && Tr.isTypedArray, gc = Ar ? mc(Ar) : hc, vc = gc, bc = vu, yc = Au, wc = Wt, _c = Qn, Sc = Fu, xc = vc, $c = Object.prototype, Ec = $c.hasOwnProperty;
function Cc(e, t) {
  var r = wc(e), n = !r && yc(e), o = !r && !n && _c(e), a = !r && !n && !o && xc(e), s = r || n || o || a, i = s ? bc(e.length, String) : [], f = i.length;
  for (var c in e)
    (t || Ec.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Sc(c, f))) && i.push(c);
  return i;
}
var Yn = Cc, Tc = Object.prototype;
function Ac(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Tc;
  return e === r;
}
var Qt = Ac;
function Oc(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var eo = Oc, Rc = eo, kc = Rc(Object.keys, Object), jc = kc, Pc = Qt, Mc = jc, Fc = Object.prototype, Bc = Fc.hasOwnProperty;
function Nc(e) {
  if (!Pc(e))
    return Mc(e);
  var t = [];
  for (var r in Object(e))
    Bc.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Dc = Nc, Ic = Kn, Lc = Xn;
function qc(e) {
  return e != null && Lc(e.length) && !Ic(e);
}
var to = qc, Uc = Yn, Vc = Dc, zc = to;
function Hc(e) {
  return zc(e) ? Uc(e) : Vc(e);
}
var Xt = Hc, Kc = ft, Gc = Xt;
function Wc(e, t) {
  return e && Kc(t, Gc(t), e);
}
var Jc = Wc;
function Zc(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Qc = Zc, Xc = je, Yc = Qt, ef = Qc, tf = Object.prototype, rf = tf.hasOwnProperty;
function nf(e) {
  if (!Xc(e))
    return ef(e);
  var t = Yc(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !rf.call(e, n)) || r.push(n);
  return r;
}
var of = nf, af = Yn, sf = of, lf = to;
function uf(e) {
  return lf(e) ? af(e, !0) : sf(e);
}
var Yt = uf, cf = ft, ff = Yt;
function df(e, t) {
  return e && cf(t, ff(t), e);
}
var pf = df, Je = { exports: {} };
Je.exports;
(function(e, t) {
  var r = se, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, s = a ? r.Buffer : void 0, i = s ? s.allocUnsafe : void 0;
  function f(c, l) {
    if (l)
      return c.slice();
    var d = c.length, C = i ? i(d) : new c.constructor(d);
    return c.copy(C), C;
  }
  e.exports = f;
})(Je, Je.exports);
var hf = Je.exports;
function mf(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var gf = mf;
function vf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[o++] = s);
  }
  return a;
}
var bf = vf;
function yf() {
  return [];
}
var ro = yf, wf = bf, _f = ro, Sf = Object.prototype, xf = Sf.propertyIsEnumerable, Or = Object.getOwnPropertySymbols, $f = Or ? function(e) {
  return e == null ? [] : (e = Object(e), wf(Or(e), function(t) {
    return xf.call(e, t);
  }));
} : _f, er = $f, Ef = ft, Cf = er;
function Tf(e, t) {
  return Ef(e, Cf(e), t);
}
var Af = Tf;
function Of(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var no = Of, Rf = eo, kf = Rf(Object.getPrototypeOf, Object), oo = kf, jf = no, Pf = oo, Mf = er, Ff = ro, Bf = Object.getOwnPropertySymbols, Nf = Bf ? function(e) {
  for (var t = []; e; )
    jf(t, Mf(e)), e = Pf(e);
  return t;
} : Ff, ao = Nf, Df = ft, If = ao;
function Lf(e, t) {
  return Df(e, If(e), t);
}
var qf = Lf, Uf = no, Vf = Wt;
function zf(e, t, r) {
  var n = t(e);
  return Vf(e) ? n : Uf(n, r(e));
}
var so = zf, Hf = so, Kf = er, Gf = Xt;
function Wf(e) {
  return Hf(e, Gf, Kf);
}
var Jf = Wf, Zf = so, Qf = ao, Xf = Yt;
function Yf(e) {
  return Zf(e, Xf, Qf);
}
var ed = Yf, td = he, rd = se, nd = td(rd, "DataView"), od = nd, ad = he, sd = se, id = ad(sd, "Promise"), ld = id, ud = he, cd = se, fd = ud(cd, "Set"), dd = fd, pd = he, hd = se, md = pd(hd, "WeakMap"), gd = md, At = od, Ot = Gt, Rt = ld, kt = dd, jt = gd, io = lt, $e = Gn, Rr = "[object Map]", vd = "[object Object]", kr = "[object Promise]", jr = "[object Set]", Pr = "[object WeakMap]", Mr = "[object DataView]", bd = $e(At), yd = $e(Ot), wd = $e(Rt), _d = $e(kt), Sd = $e(jt), de = io;
(At && de(new At(new ArrayBuffer(1))) != Mr || Ot && de(new Ot()) != Rr || Rt && de(Rt.resolve()) != kr || kt && de(new kt()) != jr || jt && de(new jt()) != Pr) && (de = function(e) {
  var t = io(e), r = t == vd ? e.constructor : void 0, n = r ? $e(r) : "";
  if (n)
    switch (n) {
      case bd:
        return Mr;
      case yd:
        return Rr;
      case wd:
        return kr;
      case _d:
        return jr;
      case Sd:
        return Pr;
    }
  return t;
});
var tr = de, xd = Object.prototype, $d = xd.hasOwnProperty;
function Ed(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && $d.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Cd = Ed, Td = se, Ad = Td.Uint8Array, Od = Ad, Fr = Od;
function Rd(e) {
  var t = new e.constructor(e.byteLength);
  return new Fr(t).set(new Fr(e)), t;
}
var rr = Rd, kd = rr;
function jd(e, t) {
  var r = t ? kd(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Pd = jd, Md = /\w*$/;
function Fd(e) {
  var t = new e.constructor(e.source, Md.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Bd = Fd, Br = Kt, Nr = Br ? Br.prototype : void 0, Dr = Nr ? Nr.valueOf : void 0;
function Nd(e) {
  return Dr ? Object(Dr.call(e)) : {};
}
var Dd = Nd, Id = rr;
function Ld(e, t) {
  var r = t ? Id(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var qd = Ld, Ud = rr, Vd = Pd, zd = Bd, Hd = Dd, Kd = qd, Gd = "[object Boolean]", Wd = "[object Date]", Jd = "[object Map]", Zd = "[object Number]", Qd = "[object RegExp]", Xd = "[object Set]", Yd = "[object String]", ep = "[object Symbol]", tp = "[object ArrayBuffer]", rp = "[object DataView]", np = "[object Float32Array]", op = "[object Float64Array]", ap = "[object Int8Array]", sp = "[object Int16Array]", ip = "[object Int32Array]", lp = "[object Uint8Array]", up = "[object Uint8ClampedArray]", cp = "[object Uint16Array]", fp = "[object Uint32Array]";
function dp(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case tp:
      return Ud(e);
    case Gd:
    case Wd:
      return new n(+e);
    case rp:
      return Vd(e, r);
    case np:
    case op:
    case ap:
    case sp:
    case ip:
    case lp:
    case up:
    case cp:
    case fp:
      return Kd(e, r);
    case Jd:
      return new n();
    case Zd:
    case Yd:
      return new n(e);
    case Qd:
      return zd(e);
    case Xd:
      return new n();
    case ep:
      return Hd(e);
  }
}
var pp = dp, hp = je, Ir = Object.create, mp = function() {
  function e() {
  }
  return function(t) {
    if (!hp(t))
      return {};
    if (Ir)
      return Ir(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), gp = mp, vp = gp, bp = oo, yp = Qt;
function wp(e) {
  return typeof e.constructor == "function" && !yp(e) ? vp(bp(e)) : {};
}
var _p = wp, Sp = tr, xp = Pe, $p = "[object Map]";
function Ep(e) {
  return xp(e) && Sp(e) == $p;
}
var Cp = Ep, Tp = Cp, Ap = Jt, Lr = Zt, qr = Lr && Lr.isMap, Op = qr ? Ap(qr) : Tp, Rp = Op, kp = tr, jp = Pe, Pp = "[object Set]";
function Mp(e) {
  return jp(e) && kp(e) == Pp;
}
var Fp = Mp, Bp = Fp, Np = Jt, Ur = Zt, Vr = Ur && Ur.isSet, Dp = Vr ? Np(Vr) : Bp, Ip = Dp, Lp = tu, qp = nu, Up = Jn, Vp = Jc, zp = pf, Hp = hf, Kp = gf, Gp = Af, Wp = qf, Jp = Jf, Zp = ed, Qp = tr, Xp = Cd, Yp = pp, eh = _p, th = Wt, rh = Qn, nh = Rp, oh = je, ah = Ip, sh = Xt, ih = Yt, lh = 1, uh = 2, ch = 4, lo = "[object Arguments]", fh = "[object Array]", dh = "[object Boolean]", ph = "[object Date]", hh = "[object Error]", uo = "[object Function]", mh = "[object GeneratorFunction]", gh = "[object Map]", vh = "[object Number]", co = "[object Object]", bh = "[object RegExp]", yh = "[object Set]", wh = "[object String]", _h = "[object Symbol]", Sh = "[object WeakMap]", xh = "[object ArrayBuffer]", $h = "[object DataView]", Eh = "[object Float32Array]", Ch = "[object Float64Array]", Th = "[object Int8Array]", Ah = "[object Int16Array]", Oh = "[object Int32Array]", Rh = "[object Uint8Array]", kh = "[object Uint8ClampedArray]", jh = "[object Uint16Array]", Ph = "[object Uint32Array]", I = {};
I[lo] = I[fh] = I[xh] = I[$h] = I[dh] = I[ph] = I[Eh] = I[Ch] = I[Th] = I[Ah] = I[Oh] = I[gh] = I[vh] = I[co] = I[bh] = I[yh] = I[wh] = I[_h] = I[Rh] = I[kh] = I[jh] = I[Ph] = !0;
I[hh] = I[uo] = I[Sh] = !1;
function Ue(e, t, r, n, o, a) {
  var s, i = t & lh, f = t & uh, c = t & ch;
  if (r && (s = o ? r(e, n, o, a) : r(e)), s !== void 0)
    return s;
  if (!oh(e))
    return e;
  var l = th(e);
  if (l) {
    if (s = Xp(e), !i)
      return Kp(e, s);
  } else {
    var d = Qp(e), C = d == uo || d == mh;
    if (rh(e))
      return Hp(e, i);
    if (d == co || d == lo || C && !o) {
      if (s = f || C ? {} : eh(e), !i)
        return f ? Wp(e, zp(s, e)) : Gp(e, Vp(s, e));
    } else {
      if (!I[d])
        return o ? e : {};
      s = Yp(e, d, i);
    }
  }
  a || (a = new Lp());
  var b = a.get(e);
  if (b)
    return b;
  a.set(e, s), ah(e) ? e.forEach(function(x) {
    s.add(Ue(x, t, r, x, e, a));
  }) : nh(e) && e.forEach(function(x, T) {
    s.set(T, Ue(x, t, r, T, e, a));
  });
  var p = c ? f ? Zp : Jp : f ? ih : sh, y = l ? void 0 : p(e);
  return qp(y || e, function(x, T) {
    y && (T = x, x = e[T]), Up(s, T, Ue(x, t, r, T, e, a));
  }), s;
}
var Mh = Ue, Fh = Mh, Bh = 1, Nh = 4;
function Dh(e) {
  return Fh(e, Bh | Nh);
}
var Ih = Dh;
const zr = /* @__PURE__ */ ls(Ih), Lh = "_q_", fo = "_q_fo_";
function qh() {
  return ce(Lh);
}
function zg(e, t = {}) {
  let r = (a) => a;
  const n = qh();
  let o = zr(typeof e == "object" ? e : data());
  return dn({
    ...e,
    data() {
      return Object.keys(o).reduce((a, s) => (a[s] = this[s], a), {});
    },
    transform(a) {
      return r = a, this;
    },
    processed: !1,
    clearErrors() {
      this.errors = {};
    },
    errors: {},
    reset() {
      this.clearErrors(), this.processed = !1, Object.assign(this, o);
    },
    async submit(a, s, i = {}) {
      n.loading.show();
      const f = r(this.data()), c = {
        onSuccess: async (l) => (this.clearErrors(), i.onSuccess ? await i.onSuccess(l) : null),
        onError: async (l) => i.onError ? await i.onError(l) : null
      };
      try {
        this.processed = !0;
        const l = await is(s, a, f, this.errors);
        await c.onSuccess(l.data);
      } catch (l) {
        await c.onError(l);
      }
      this.processed = !1, n.loading.hide();
    },
    post(a, s = {}) {
      this.submit("post", a, s);
    },
    get(a, s = {}) {
      this.submit("get", a, s);
    },
    put(a, s = {}) {
      this.submit("put", a, s);
    },
    patch(a, s = {}) {
      this.submit("patch", a, s);
    },
    delete(a, s = {}) {
      this.submit("delete", a, s);
    }
  });
}
const Uh = (e, t) => {
  const r = e[t];
  return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((n, o) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(o.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var Hr;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Hr || (Hr = {}));
var Kr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Kr || (Kr = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Gr;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Gr || (Gr = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Vh = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), zh = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Hh() {
  return ce(Vh);
}
function Kh(e) {
  return ce(zh);
}
const Wr = J({});
function Hg() {
  ve(async () => {
    await t();
  });
  const e = Kh();
  Hh();
  const t = async () => {
    const r = e.meta.componentPath, n = await Uh(/* @__PURE__ */ Object.assign({ "../App.vue": () => import("./App-01c5602b.js") }), `../${r}.vue`), o = [];
    e.matched.map((s) => {
      s.meta.title && o.push({ path: s.path, title: s.meta.title });
    });
    const a = {
      title: n.default.title ? n.default.title : null,
      breadcrumbs: o || []
    };
    return Wr.value = a, a;
  };
  return Q(() => e.path, async () => {
    await t();
  }), {
    getOptions: t,
    options: Wr
  };
}
function nr(e, t, r, n) {
  return Object.defineProperty(e, t, {
    get: r,
    set: n,
    enumerable: !0
  }), e;
}
function dt(e) {
  return yo(pn(e));
}
const Gh = {
  hasPassive: !1,
  passiveCapture: !0,
  notPassiveCapture: !0
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(Gh, {
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
function Jr(e) {
  e.stopPropagation();
}
function Te(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Pt(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
let Mt = [], Wh = [];
function or(e) {
  Wh.length === 0 ? e() : Mt.push(e);
}
function Jh(e) {
  Mt = Mt.filter((t) => t !== e);
}
function ge(e, t) {
  return e !== void 0 && e() || t;
}
function Fe(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function Zh(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
const Qh = dt({
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
    const n = fe(), o = J(null);
    let a = 0;
    const s = [];
    function i(b) {
      const p = typeof b == "boolean" ? b : e.noErrorFocus !== !0, y = ++a, x = (S, B) => {
        r(`validation${S === !0 ? "Success" : "Error"}`, B);
      }, T = (S) => {
        const B = S.validate();
        return typeof B.then == "function" ? B.then(
          (q) => ({ valid: q, comp: S }),
          (q) => ({ valid: !1, comp: S, err: q })
        ) : Promise.resolve({ valid: B, comp: S });
      };
      return (e.greedy === !0 ? Promise.all(s.map(T)).then((S) => S.filter((B) => B.valid !== !0)) : s.reduce(
        (S, B) => S.then(() => T(B).then((q) => {
          if (q.valid === !1)
            return Promise.reject(q);
        })),
        Promise.resolve()
      ).catch((S) => [S])).then((S) => {
        if (S === void 0 || S.length === 0)
          return y === a && x(!0), !0;
        if (y === a) {
          const { comp: B, err: q } = S[0];
          if (q !== void 0 && console.error(q), x(!1, B), p === !0) {
            const O = S.find(({ comp: R }) => typeof R.focus == "function" && Zh(R.$) === !1);
            O !== void 0 && O.comp.focus();
          }
        }
        return !1;
      });
    }
    function f() {
      a++, s.forEach((b) => {
        typeof b.resetValidation == "function" && b.resetValidation();
      });
    }
    function c(b) {
      b !== void 0 && Pt(b);
      const p = a + 1;
      i().then((y) => {
        p === a && y === !0 && (e.onSubmit !== void 0 ? r("submit", b) : b !== void 0 && b.target !== void 0 && typeof b.target.submit == "function" && b.target.submit());
      });
    }
    function l(b) {
      b !== void 0 && Pt(b), r("reset"), ue(() => {
        f(), e.autofocus === !0 && e.noResetFocus !== !0 && d();
      });
    }
    function d() {
      or(() => {
        if (o.value === null)
          return;
        const b = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (p) => p.tabIndex !== -1);
        b != null && b.focus({ preventScroll: !0 });
      });
    }
    wo(fo, {
      bindComponent(b) {
        s.push(b);
      },
      unbindComponent(b) {
        const p = s.indexOf(b);
        p !== -1 && s.splice(p, 1);
      }
    });
    let C = !1;
    return hn(() => {
      C = !0;
    }), mn(() => {
      C === !0 && e.autofocus === !0 && d();
    }), ve(() => {
      e.autofocus === !0 && d();
    }), Object.assign(n.proxy, {
      validate: i,
      resetValidation: f,
      submit: c,
      reset: l,
      focus: d,
      getValidationComponents: () => s
    }), () => A("form", {
      class: "q-form",
      ref: o,
      onSubmit: c,
      onReset: l
    }, ge(t.default));
  }
}), ar = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, Xh = {}, Yh = { class: "tw-grid tw-gap-y-4" };
function em(e, t) {
  return Y(), Ve(Qh, gn(_o(e.$attrs)), {
    default: So(() => [
      L("div", Yh, [
        Xe(e.$slots, "default")
      ])
    ]),
    _: 3
  }, 16);
}
const tm = /* @__PURE__ */ ar(Xh, [["render", em]]), Ft = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, rm = {
  size: String
};
function nm(e, t = Ft) {
  return $(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
const Zr = "0 0 24 24", Qr = (e) => e, bt = (e) => `ionicons ${e}`, po = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": Qr,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": bt,
  "ion-ios": bt,
  "ion-logo": bt,
  "iconfont ": Qr,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`
}, ho = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, mo = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, om = new RegExp("^(" + Object.keys(po).join("|") + ")"), am = new RegExp("^(" + Object.keys(ho).join("|") + ")"), Xr = new RegExp("^(" + Object.keys(mo).join("|") + ")"), sm = /^[Mm]\s?[-+]?\.?\d/, im = /^img:/, lm = /^svguse:/, um = /^ion-/, cm = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, Yr = dt({
  name: "QIcon",
  props: {
    ...rm,
    tag: {
      type: String,
      default: "i"
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: r } } = fe(), n = nm(e), o = $(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), a = $(() => {
      let s, i = e.name;
      if (i === "none" || !i)
        return { none: !0 };
      if (r.iconMapFn !== null) {
        const l = r.iconMapFn(i);
        if (l !== void 0)
          if (l.icon !== void 0) {
            if (i = l.icon, i === "none" || !i)
              return { none: !0 };
          } else
            return {
              cls: l.cls,
              content: l.content !== void 0 ? l.content : " "
            };
      }
      if (sm.test(i) === !0) {
        const [l, d = Zr] = i.split("|");
        return {
          svg: !0,
          viewBox: d,
          nodes: l.split("&&").map((C) => {
            const [b, p, y] = C.split("@@");
            return A("path", { style: p, d: b, transform: y });
          })
        };
      }
      if (im.test(i) === !0)
        return {
          img: !0,
          src: i.substring(4)
        };
      if (lm.test(i) === !0) {
        const [l, d = Zr] = i.split("|");
        return {
          svguse: !0,
          src: l.substring(7),
          viewBox: d
        };
      }
      let f = " ";
      const c = i.match(om);
      if (c !== null)
        s = po[c[1]](i);
      else if (cm.test(i) === !0)
        s = i;
      else if (um.test(i) === !0)
        s = `ionicons ion-${r.platform.is.ios === !0 ? "ios" : "md"}${i.substring(3)}`;
      else if (Xr.test(i) === !0) {
        s = "notranslate material-symbols";
        const l = i.match(Xr);
        l !== null && (i = i.substring(6), s += mo[l[1]]), f = i;
      } else {
        s = "notranslate material-icons";
        const l = i.match(am);
        l !== null && (i = i.substring(2), s += ho[l[1]]), f = i;
      }
      return {
        cls: s,
        content: f
      };
    });
    return () => {
      const s = {
        class: o.value,
        style: n.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      return a.value.none === !0 ? A(e.tag, s, ge(t.default)) : a.value.img === !0 ? A(e.tag, s, Fe(t.default, [
        A("img", { src: a.value.src })
      ])) : a.value.svg === !0 ? A(e.tag, s, Fe(t.default, [
        A("svg", {
          viewBox: a.value.viewBox || "0 0 24 24"
        }, a.value.nodes)
      ])) : a.value.svguse === !0 ? A(e.tag, s, Fe(t.default, [
        A("svg", {
          viewBox: a.value.viewBox
        }, [
          A("use", { "xlink:href": a.value.src })
        ])
      ])) : (a.value.cls !== void 0 && (s.class += " " + a.value.cls), A(e.tag, s, Fe(t.default, [
        a.value.content
      ])));
    };
  }
}), fm = {
  size: {
    type: [String, Number],
    default: "1em"
  },
  color: String
};
function dm(e) {
  return {
    cSize: $(() => e.size in Ft ? `${Ft[e.size]}px` : e.size),
    classes: $(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
const pm = dt({
  name: "QSpinner",
  props: {
    ...fm,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: r } = dm(e);
    return () => A("svg", {
      class: r.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      A("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": e.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
let yt, Be = 0;
const Z = new Array(256);
for (let e = 0; e < 256; e++)
  Z[e] = (e + 256).toString(16).substring(1);
const hm = (() => {
  const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
  if (e !== void 0) {
    if (e.randomBytes !== void 0)
      return e.randomBytes;
    if (e.getRandomValues !== void 0)
      return (t) => {
        const r = new Uint8Array(t);
        return e.getRandomValues(r), r;
      };
  }
  return (t) => {
    const r = [];
    for (let n = t; n > 0; n--)
      r.push(Math.floor(Math.random() * 256));
    return r;
  };
})(), en = 4096;
function Bt() {
  (yt === void 0 || Be + 16 > en) && (Be = 0, yt = hm(en));
  const e = Array.prototype.slice.call(yt, Be, Be += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Z[e[0]] + Z[e[1]] + Z[e[2]] + Z[e[3]] + "-" + Z[e[4]] + Z[e[5]] + "-" + Z[e[6]] + Z[e[7]] + "-" + Z[e[8]] + Z[e[9]] + "-" + Z[e[10]] + Z[e[11]] + Z[e[12]] + Z[e[13]] + Z[e[14]] + Z[e[15]];
}
const Re = J(
  !1
);
let Nt;
function mm(e, t) {
  const r = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: r[5] || r[3] || r[1] || "",
    version: r[4] || r[2] || "0",
    platform: t[0] || ""
  };
}
function gm(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
const go = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function vm(e) {
  const t = e.toLowerCase(), r = gm(t), n = mm(t, r), o = {};
  n.browser && (o[n.browser] = !0, o.version = n.version, o.versionNumber = parseInt(n.version, 10)), n.platform && (o[n.platform] = !0);
  const a = o.android || o.ios || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"];
  if (a === !0 || t.indexOf("mobile") !== -1 ? o.mobile = !0 : o.desktop = !0, o["windows phone"] && (o.winphone = !0, delete o["windows phone"]), o.edga || o.edgios || o.edg ? (o.edge = !0, n.browser = "edge") : o.crios ? (o.chrome = !0, n.browser = "chrome") : o.fxios && (o.firefox = !0, n.browser = "firefox"), (o.ipod || o.ipad || o.iphone) && (o.ios = !0), o.vivaldi && (n.browser = "vivaldi", o.vivaldi = !0), // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
  (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === !0 && o.ios !== !0 && a !== !0) && (o.webkit = !0), o.opr && (n.browser = "opera", o.opera = !0), o.safari && (o.blackberry || o.bb ? (n.browser = "blackberry", o.blackberry = !0) : o.playbook ? (n.browser = "playbook", o.playbook = !0) : o.android ? (n.browser = "android", o.android = !0) : o.kindle ? (n.browser = "kindle", o.kindle = !0) : o.silk && (n.browser = "silk", o.silk = !0)), o.name = n.browser, o.platform = n.platform, t.indexOf("electron") !== -1)
    o.electron = !0;
  else if (document.location.href.indexOf("-extension://") !== -1)
    o.bex = !0;
  else {
    if (window.Capacitor !== void 0 ? (o.capacitor = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "cordova"), Re.value === !0 && (Nt = { is: { ...o } }), go === !0 && o.mac === !0 && (o.desktop === !0 && o.safari === !0 || o.nativeMobile === !0 && o.android !== !0 && o.ios !== !0 && o.ipad !== !0)) {
      delete o.mac, delete o.desktop;
      const s = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(o, {
        mobile: !0,
        ios: !0,
        platform: s,
        [s]: !0
      });
    }
    o.mobile !== !0 && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete o.desktop, o.mobile = !0);
  }
  return o;
}
const tn = navigator.userAgent || navigator.vendor || window.opera, bm = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, Ze = {
  userAgent: tn,
  is: vm(tn),
  has: {
    touch: go
  },
  within: {
    iframe: window.self !== window.top
  }
}, rn = {
  install(e) {
    const { $q: t } = e;
    Re.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, Ze), Re.value = !1;
    }), t.platform = dn(this)) : t.platform = this;
  }
};
{
  let e;
  nr(Ze.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), Object.assign(rn, Ze), Re.value === !0 && (Object.assign(rn, Nt, bm), Nt = null);
}
function ym(e) {
  return e ?? null;
}
function nn(e, t) {
  return e ?? (t === !0 ? `f_${Bt()}` : null);
}
function wm({ getValue: e, required: t = !0 } = {}) {
  if (Re.value === !0) {
    const r = e !== void 0 ? J(ym(e())) : J(null);
    return t === !0 && r.value === null && ve(() => {
      r.value = `f_${Bt()}`;
    }), e !== void 0 && Q(e, (n) => {
      r.value = nn(n, t);
    }), r;
  }
  return e !== void 0 ? $(() => nn(e(), t)) : J(`f_${Bt()}`);
}
const on = /^on[A-Z]/;
function _m() {
  const { attrs: e, vnode: t } = fe(), r = {
    listeners: J({}),
    attributes: J({})
  };
  function n() {
    const o = {}, a = {};
    for (const s in e)
      s !== "class" && s !== "style" && on.test(s) === !1 && (o[s] = e[s]);
    for (const s in t.props)
      on.test(s) === !0 && (a[s] = t.props[s]);
    r.attributes.value = o, r.listeners.value = a;
  }
  return xo(n), n(), r;
}
const Sm = {
  dark: {
    type: Boolean,
    default: null
  }
};
function xm(e, t) {
  return $(() => e.dark === null ? t.dark.isActive : e.dark);
}
function $m({ validate: e, resetValidation: t, requiresQForm: r }) {
  const n = ce(fo, !1);
  if (n !== !1) {
    const { props: o, proxy: a } = fe();
    Object.assign(a, { validate: e, resetValidation: t }), Q(() => o.disable, (s) => {
      s === !0 ? (typeof t == "function" && t(), n.unbindComponent(a)) : n.bindComponent(a);
    }), ve(() => {
      o.disable !== !0 && n.bindComponent(a);
    }), Ye(() => {
      o.disable !== !0 && n.unbindComponent(a);
    });
  } else
    r === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const an = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, sn = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, ln = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Ne = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, De = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, wt = {
  date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
  time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
  fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
  timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
  email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
  hexColor: (e) => an.test(e),
  hexaColor: (e) => sn.test(e),
  hexOrHexaColor: (e) => ln.test(e),
  rgbColor: (e) => Ne.test(e),
  rgbaColor: (e) => De.test(e),
  rgbOrRgbaColor: (e) => Ne.test(e) || De.test(e),
  hexOrRgbColor: (e) => an.test(e) || Ne.test(e),
  hexaOrRgbaColor: (e) => sn.test(e) || De.test(e),
  anyColor: (e) => ln.test(e) || Ne.test(e) || De.test(e)
};
function Em(e, t = 250, r) {
  let n = null;
  function o() {
    const a = arguments, s = () => {
      n = null, r !== !0 && e.apply(this, a);
    };
    n !== null ? clearTimeout(n) : r === !0 && e.apply(this, a), n = setTimeout(s, t);
  }
  return o.cancel = () => {
    n !== null && clearTimeout(n);
  }, o;
}
const Cm = [!0, !1, "ondemand"], Tm = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    default: !1,
    // statement unneeded but avoids future vue implementation changes
    validator: (e) => Cm.includes(e)
  }
};
function Am(e, t) {
  const { props: r, proxy: n } = fe(), o = J(!1), a = J(null), s = J(!1);
  $m({ validate: y, resetValidation: p });
  let i = 0, f;
  const c = $(
    () => r.rules !== void 0 && r.rules !== null && r.rules.length !== 0
  ), l = $(() => r.disable !== !0 && c.value === !0 && t.value === !1), d = $(
    () => r.error === !0 || o.value === !0
  ), C = $(() => typeof r.errorMessage == "string" && r.errorMessage.length !== 0 ? r.errorMessage : a.value);
  Q(() => r.modelValue, () => {
    s.value = !0, l.value === !0 && r.lazyRules === !1 && x();
  });
  function b() {
    r.lazyRules !== "ondemand" && l.value === !0 && s.value === !0 && x();
  }
  Q(() => r.reactiveRules, (T) => {
    T === !0 ? f === void 0 && (f = Q(() => r.rules, b, { immediate: !0, deep: !0 })) : f !== void 0 && (f(), f = void 0);
  }, { immediate: !0 }), Q(() => r.lazyRules, b), Q(e, (T) => {
    T === !0 ? s.value = !0 : l.value === !0 && r.lazyRules !== "ondemand" && x();
  });
  function p() {
    i++, t.value = !1, s.value = !1, o.value = !1, a.value = null, x.cancel();
  }
  function y(T = r.modelValue) {
    if (r.disable === !0 || c.value === !1)
      return !0;
    const F = ++i, S = t.value !== !0 ? () => {
      s.value = !0;
    } : () => {
    }, B = (O, R) => {
      O === !0 && S(), o.value = O, a.value = R || null, t.value = !1;
    }, q = [];
    for (let O = 0; O < r.rules.length; O++) {
      const R = r.rules[O];
      let K;
      if (typeof R == "function" ? K = R(T, wt) : typeof R == "string" && wt[R] !== void 0 && (K = wt[R](T)), K === !1 || typeof K == "string")
        return B(!0, K), !1;
      K !== !0 && K !== void 0 && q.push(K);
    }
    return q.length === 0 ? (B(!1), !0) : (t.value = !0, Promise.all(q).then(
      (O) => {
        if (O === void 0 || Array.isArray(O) === !1 || O.length === 0)
          return F === i && B(!1), !0;
        const R = O.find((K) => K === !1 || typeof K == "string");
        return F === i && B(R !== void 0, R), R === void 0;
      },
      (O) => (F === i && (console.error(O), B(!0)), !1)
    ));
  }
  const x = Em(y, 0);
  return Ye(() => {
    f !== void 0 && f(), x.cancel();
  }), Object.assign(n, { resetValidation: p, validate: y }), nr(n, "hasError", () => d.value), {
    isDirtyModel: s,
    hasRules: c,
    hasError: d,
    errorMessage: C,
    validate: y,
    resetValidation: p
  };
}
function Dt(e) {
  return e != null && ("" + e).length !== 0;
}
const Om = {
  ...Sm,
  ...Tm,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String
}, Rm = {
  ...Om,
  maxlength: [Number, String]
}, km = ["update:modelValue", "clear", "focus", "blur"];
function jm({ requiredForAttr: e = !0, tagProp: t, changeEvent: r = !1 } = {}) {
  const { props: n, proxy: o } = fe(), a = xm(n, o.$q), s = wm({
    required: e,
    getValue: () => n.for
  });
  return {
    requiredForAttr: e,
    changeEvent: r,
    tag: t === !0 ? $(() => n.tag) : { value: "label" },
    isDark: a,
    editable: $(
      () => n.disable !== !0 && n.readonly !== !0
    ),
    innerLoading: J(!1),
    focused: J(!1),
    hasPopupOpen: !1,
    splitAttrs: _m(),
    targetUid: s,
    rootRef: J(null),
    targetRef: J(null),
    controlRef: J(null)
    /**
         * user supplied additionals:
    
         * innerValue - computed
         * floatingLabel - computed
         * inputRef - computed
    
         * fieldClass - computed
         * hasShadow - computed
    
         * controlEvents - Object with fn(e)
    
         * getControl - fn
         * getInnerAppend - fn
         * getControlChild - fn
         * getShadowControl - fn
         * showPopup - fn
         */
  };
}
function Pm(e) {
  const { props: t, emit: r, slots: n, attrs: o, proxy: a } = fe(), { $q: s } = a;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = $(() => Dt(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (w) => {
    r("update:modelValue", w);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: g,
    onFocusout: m
  }), Object.assign(e, {
    clearValue: _,
    onControlFocusin: g,
    onControlFocusout: m,
    focus: R
  }), e.computedCounter === void 0 && (e.computedCounter = $(() => {
    if (t.counter !== !1) {
      const w = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0, k = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return w + (k !== void 0 ? " / " + k : "");
    }
  }));
  const {
    isDirtyModel: f,
    hasRules: c,
    hasError: l,
    errorMessage: d,
    resetValidation: C
  } = Am(e.focused, e.innerLoading), b = e.floatingLabel !== void 0 ? $(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : $(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), p = $(
    () => t.bottomSlots === !0 || t.hint !== void 0 || c.value === !0 || t.counter === !0 || t.error !== null
  ), y = $(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), x = $(
    () => `q-field row no-wrap items-start q-field--${y.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (b.value === !0 ? " q-field--float" : "") + (F.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (l.value === !0 ? " q-field--error" : "") + (l.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && p.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), T = $(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (l.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), F = $(
    () => t.labelSlot === !0 || t.label !== void 0
  ), S = $(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && l.value !== !0 ? ` text-${t.labelColor}` : "")
  ), B = $(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: b.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue
  })), q = $(() => {
    const w = {};
    return e.targetUid.value && (w.for = e.targetUid.value), t.disable === !0 && (w["aria-disabled"] = "true"), w;
  });
  function O() {
    const w = document.activeElement;
    let k = e.targetRef !== void 0 && e.targetRef.value;
    k && (w === null || w.id !== e.targetUid.value) && (k.hasAttribute("tabindex") === !0 || (k = k.querySelector("[tabindex]")), k && k !== w && k.focus({ preventScroll: !0 }));
  }
  function R() {
    or(O);
  }
  function K() {
    Jh(O);
    const w = document.activeElement;
    w !== null && e.rootRef.value.contains(w) && w.blur();
  }
  function g(w) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0, r("focus", w));
  }
  function m(w, k) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1, r("blur", w)), k !== void 0 && k());
    });
  }
  function _(w) {
    Pt(w), s.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), r("update:modelValue", null), e.changeEvent === !0 && r("change", null), r("clear", t.modelValue), ue(() => {
      const k = f.value;
      C(), f.value = k;
    });
  }
  function v(w) {
    [13, 32].includes(w.keyCode) && _(w);
  }
  function M() {
    const w = [];
    return n.prepend !== void 0 && w.push(
      A("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: Te
      }, n.prepend())
    ), w.push(
      A("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, j())
    ), l.value === !0 && t.noErrorIcon === !1 && w.push(
      P("error", [
        A(Yr, { name: s.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? w.push(
      P(
        "inner-loading-append",
        n.loading !== void 0 ? n.loading() : [A(pm, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && w.push(
      P("inner-clearable-append", [
        A(Yr, {
          class: "q-field__focusable-action",
          name: t.clearIcon || s.iconSet.field.clear,
          tabindex: 0,
          role: "button",
          "aria-label": s.lang.label.clear,
          onKeyup: v,
          onClick: _
        })
      ])
    ), n.append !== void 0 && w.push(
      A("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: Te
      }, n.append())
    ), e.getInnerAppend !== void 0 && w.push(
      P("inner-append", e.getInnerAppend())
    ), e.getControlChild !== void 0 && w.push(
      e.getControlChild()
    ), w;
  }
  function j() {
    const w = [];
    return t.prefix !== void 0 && t.prefix !== null && w.push(
      A("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && w.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? w.push(e.getControl()) : n.rawControl !== void 0 ? w.push(n.rawControl()) : n.control !== void 0 && w.push(
      A("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, n.control(B.value))
    ), F.value === !0 && w.push(
      A("div", {
        class: S.value
      }, ge(n.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && w.push(
      A("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), w.concat(ge(n.default));
  }
  function V() {
    let w, k;
    l.value === !0 ? d.value !== null ? (w = [A("div", { role: "alert" }, d.value)], k = `q--slot-error-${d.value}`) : (w = ge(n.error), k = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (w = [A("div", t.hint)], k = `q--slot-hint-${t.hint}`) : (w = ge(n.hint), k = "q--slot-hint"));
    const D = t.counter === !0 || n.counter !== void 0;
    if (t.hideBottomSpace === !0 && D === !1 && w === void 0)
      return;
    const z = A("div", {
      key: k,
      class: "q-field__messages col"
    }, w);
    return A("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: Te
    }, [
      t.hideBottomSpace === !0 ? z : A($o, { name: "q-transition--field-message" }, () => z),
      D === !0 ? A("div", {
        class: "q-field__counter"
      }, n.counter !== void 0 ? n.counter() : e.computedCounter.value) : null
    ]);
  }
  function P(w, k) {
    return k === null ? null : A("div", {
      key: w,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, k);
  }
  let N = !1;
  return hn(() => {
    N = !0;
  }), mn(() => {
    N === !0 && t.autofocus === !0 && a.focus();
  }), t.autofocus === !0 && ve(() => {
    a.focus();
  }), Ye(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(a, { focus: R, blur: K }), function() {
    const k = e.getControl === void 0 && n.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...q.value
    } : q.value;
    return A(e.tag.value, {
      ref: e.rootRef,
      class: [
        x.value,
        o.class
      ],
      style: o.style,
      ...k
    }, [
      n.before !== void 0 ? A("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: Te
      }, n.before()) : null,
      A("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        A("div", {
          ref: e.controlRef,
          class: T.value,
          tabindex: -1,
          ...e.controlEvents
        }, M()),
        p.value === !0 ? V() : null
      ]),
      n.after !== void 0 ? A("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: Te
      }, n.after()) : null
    ]);
  };
}
function Mm(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
const un = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
}, Qe = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }
}, vo = Object.keys(Qe);
vo.forEach((e) => {
  Qe[e].regex = new RegExp(Qe[e].pattern);
});
const Fm = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + vo.join("") + "])|(.)", "g"), cn = /[.*+?^${}()|[\]\\]/g, G = String.fromCharCode(1), Bm = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function Nm(e, t, r, n) {
  let o, a, s, i, f, c;
  const l = J(null), d = J(b());
  function C() {
    return e.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  Q(() => e.type + e.autogrow, y), Q(() => e.mask, (g) => {
    if (g !== void 0)
      x(d.value, !0);
    else {
      const m = R(d.value);
      y(), e.modelValue !== m && t("update:modelValue", m);
    }
  }), Q(() => e.fillMask + e.reverseFillMask, () => {
    l.value === !0 && x(d.value, !0);
  }), Q(() => e.unmaskedValue, () => {
    l.value === !0 && x(d.value);
  });
  function b() {
    if (y(), l.value === !0) {
      const g = q(R(e.modelValue));
      return e.fillMask !== !1 ? K(g) : g;
    }
    return e.modelValue;
  }
  function p(g) {
    if (g < o.length)
      return o.slice(-g);
    let m = "", _ = o;
    const v = _.indexOf(G);
    if (v !== -1) {
      for (let M = g - _.length; M > 0; M--)
        m += G;
      _ = _.slice(0, v) + m + _.slice(v);
    }
    return _;
  }
  function y() {
    if (l.value = e.mask !== void 0 && e.mask.length !== 0 && C(), l.value === !1) {
      i = void 0, o = "", a = "";
      return;
    }
    const g = un[e.mask] === void 0 ? e.mask : un[e.mask], m = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", _ = m.replace(cn, "\\$&"), v = [], M = [], j = [];
    let V = e.reverseFillMask === !0, P = "", N = "";
    g.replace(Fm, (z, h, H, ie, te) => {
      if (ie !== void 0) {
        const X = Qe[ie];
        j.push(X), N = X.negate, V === !0 && (M.push("(?:" + N + "+)?(" + X.pattern + "+)?(?:" + N + "+)?(" + X.pattern + "+)?"), V = !1), M.push("(?:" + N + "+)?(" + X.pattern + ")?");
      } else if (H !== void 0)
        P = "\\" + (H === "\\" ? "" : H), j.push(H), v.push("([^" + P + "]+)?" + P + "?");
      else {
        const X = h !== void 0 ? h : te;
        P = X === "\\" ? "\\\\\\\\" : X.replace(cn, "\\\\$&"), j.push(X), v.push("([^" + P + "]+)?" + P + "?");
      }
    });
    const w = new RegExp(
      "^" + v.join("") + "(" + (P === "" ? "." : "[^" + P + "]") + "+)?" + (P === "" ? "" : "[" + P + "]*") + "$"
    ), k = M.length - 1, D = M.map((z, h) => h === 0 && e.reverseFillMask === !0 ? new RegExp("^" + _ + "*" + z) : h === k ? new RegExp(
      "^" + z + "(" + (N === "" ? "." : N) + "+)?" + (e.reverseFillMask === !0 ? "$" : _ + "*")
    ) : new RegExp("^" + z));
    s = j, i = (z) => {
      const h = w.exec(e.reverseFillMask === !0 ? z : z.slice(0, j.length + 1));
      h !== null && (z = h.slice(1).join(""));
      const H = [], ie = D.length;
      for (let te = 0, X = z; te < ie; te++) {
        const me = D[te].exec(X);
        if (me === null)
          break;
        X = X.slice(me.shift().length), H.push(...me);
      }
      return H.length !== 0 ? H.join("") : z;
    }, o = j.map((z) => typeof z == "string" ? z : G).join(""), a = o.split(G).join(m);
  }
  function x(g, m, _) {
    const v = n.value, M = v.selectionEnd, j = v.value.length - M, V = R(g);
    m === !0 && y();
    const P = q(V), N = e.fillMask !== !1 ? K(P) : P, w = d.value !== N;
    v.value !== N && (v.value = N), w === !0 && (d.value = N), document.activeElement === v && ue(() => {
      if (N === a) {
        const D = e.reverseFillMask === !0 ? a.length : 0;
        v.setSelectionRange(D, D, "forward");
        return;
      }
      if (_ === "insertFromPaste" && e.reverseFillMask !== !0) {
        const D = v.selectionEnd;
        let z = M - 1;
        for (let h = f; h <= z && h < D; h++)
          o[h] !== G && z++;
        F.right(v, z);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(_) !== -1) {
        const D = e.reverseFillMask === !0 ? M === 0 ? N.length > P.length ? 1 : 0 : Math.max(0, N.length - (N === a ? 0 : Math.min(P.length, j) + 1)) + 1 : M;
        v.setSelectionRange(D, D, "forward");
        return;
      }
      if (e.reverseFillMask === !0)
        if (w === !0) {
          const D = Math.max(0, N.length - (N === a ? 0 : Math.min(P.length, j + 1)));
          D === 1 && M === 1 ? v.setSelectionRange(D, D, "forward") : F.rightReverse(v, D);
        } else {
          const D = N.length - j;
          v.setSelectionRange(D, D, "backward");
        }
      else if (w === !0) {
        const D = Math.max(0, o.indexOf(G), Math.min(P.length, M) - 1);
        F.right(v, D);
      } else {
        const D = M - 1;
        F.right(v, D);
      }
    });
    const k = e.unmaskedValue === !0 ? R(N) : N;
    String(e.modelValue) !== k && (e.modelValue !== null || k !== "") && r(k, !0);
  }
  function T(g, m, _) {
    const v = q(R(g.value));
    m = Math.max(0, o.indexOf(G), Math.min(v.length, m)), f = m, g.setSelectionRange(m, _, "forward");
  }
  const F = {
    left(g, m) {
      const _ = o.slice(m - 1).indexOf(G) === -1;
      let v = Math.max(0, m - 1);
      for (; v >= 0; v--)
        if (o[v] === G) {
          m = v, _ === !0 && m++;
          break;
        }
      if (v < 0 && o[m] !== void 0 && o[m] !== G)
        return F.right(g, 0);
      m >= 0 && g.setSelectionRange(m, m, "backward");
    },
    right(g, m) {
      const _ = g.value.length;
      let v = Math.min(_, m + 1);
      for (; v <= _; v++)
        if (o[v] === G) {
          m = v;
          break;
        } else
          o[v - 1] === G && (m = v);
      if (v > _ && o[m - 1] !== void 0 && o[m - 1] !== G)
        return F.left(g, _);
      g.setSelectionRange(m, m, "forward");
    },
    leftReverse(g, m) {
      const _ = p(g.value.length);
      let v = Math.max(0, m - 1);
      for (; v >= 0; v--)
        if (_[v - 1] === G) {
          m = v;
          break;
        } else if (_[v] === G && (m = v, v === 0))
          break;
      if (v < 0 && _[m] !== void 0 && _[m] !== G)
        return F.rightReverse(g, 0);
      m >= 0 && g.setSelectionRange(m, m, "backward");
    },
    rightReverse(g, m) {
      const _ = g.value.length, v = p(_), M = v.slice(0, m + 1).indexOf(G) === -1;
      let j = Math.min(_, m + 1);
      for (; j <= _; j++)
        if (v[j - 1] === G) {
          m = j, m > 0 && M === !0 && m--;
          break;
        }
      if (j > _ && v[m - 1] !== void 0 && v[m - 1] !== G)
        return F.leftReverse(g, _);
      g.setSelectionRange(m, m, "forward");
    }
  };
  function S(g) {
    t("click", g), c = void 0;
  }
  function B(g) {
    if (t("keydown", g), Mm(g) === !0 || g.altKey === !0)
      return;
    const m = n.value, _ = m.selectionStart, v = m.selectionEnd;
    if (g.shiftKey || (c = void 0), g.keyCode === 37 || g.keyCode === 39) {
      g.shiftKey && c === void 0 && (c = m.selectionDirection === "forward" ? _ : v);
      const M = F[(g.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === !0 ? "Reverse" : "")];
      if (g.preventDefault(), M(m, c === _ ? v : _), g.shiftKey) {
        const j = m.selectionStart;
        m.setSelectionRange(Math.min(c, j), Math.max(c, j), "forward");
      }
    } else
      g.keyCode === 8 && e.reverseFillMask !== !0 && _ === v ? (F.left(m, _), m.setSelectionRange(m.selectionStart, v, "backward")) : g.keyCode === 46 && e.reverseFillMask === !0 && _ === v && (F.rightReverse(m, v), m.setSelectionRange(_, m.selectionEnd, "forward"));
  }
  function q(g) {
    if (g == null || g === "")
      return "";
    if (e.reverseFillMask === !0)
      return O(g);
    const m = s;
    let _ = 0, v = "";
    for (let M = 0; M < m.length; M++) {
      const j = g[_], V = m[M];
      if (typeof V == "string")
        v += V, j === V && _++;
      else if (j !== void 0 && V.regex.test(j))
        v += V.transform !== void 0 ? V.transform(j) : j, _++;
      else
        return v;
    }
    return v;
  }
  function O(g) {
    const m = s, _ = o.indexOf(G);
    let v = g.length - 1, M = "";
    for (let j = m.length - 1; j >= 0 && v !== -1; j--) {
      const V = m[j];
      let P = g[v];
      if (typeof V == "string")
        M = V + M, P === V && v--;
      else if (P !== void 0 && V.regex.test(P))
        do
          M = (V.transform !== void 0 ? V.transform(P) : P) + M, v--, P = g[v];
        while (_ === j && P !== void 0 && V.regex.test(P));
      else
        return M;
    }
    return M;
  }
  function R(g) {
    return typeof g != "string" || i === void 0 ? typeof g == "number" ? i("" + g) : g : i(g);
  }
  function K(g) {
    return a.length - g.length <= 0 ? g : e.reverseFillMask === !0 && g.length !== 0 ? a.slice(0, -g.length) + g : g + a.slice(g.length);
  }
  return {
    innerValue: d,
    hasMask: l,
    moveCursorForPaste: T,
    updateMaskValue: x,
    onMaskedKeydown: B,
    onMaskedClick: S
  };
}
const Dm = {
  name: String
};
function Im(e) {
  return $(() => e.name || e.for);
}
function Lm(e, t) {
  function r() {
    const n = e.modelValue;
    try {
      const o = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(n) === n && ("length" in n ? Array.from(n) : [n]).forEach((a) => {
        o.items.add(a);
      }), {
        files: o.files
      };
    } catch {
      return {
        files: void 0
      };
    }
  }
  return t === !0 ? $(() => {
    if (e.type === "file")
      return r();
  }) : $(r);
}
const qm = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, Um = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, Vm = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, zm = /[a-z0-9_ -]$/i;
function Hm(e) {
  return function(r) {
    if (r.type === "compositionend" || r.type === "change") {
      if (r.target.qComposing !== !0)
        return;
      r.target.qComposing = !1, e(r);
    } else
      r.type === "compositionupdate" && r.target.qComposing !== !0 && typeof r.data == "string" && (Ze.is.firefox === !0 ? zm.test(r.data) === !1 : qm.test(r.data) === !0 || Um.test(r.data) === !0 || Vm.test(r.data) === !0) === !0 && (r.target.qComposing = !0);
  };
}
const bo = dt({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...Rm,
    ...Bm,
    ...Dm,
    // override of useFieldProps > modelValue
    modelValue: [String, Number, FileList],
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    // makes a textarea
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...km,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(e, { emit: t, attrs: r }) {
    const { proxy: n } = fe(), { $q: o } = n, a = {};
    let s = NaN, i, f, c = null, l;
    const d = J(null), C = Im(e), {
      innerValue: b,
      hasMask: p,
      moveCursorForPaste: y,
      updateMaskValue: x,
      onMaskedKeydown: T,
      onMaskedClick: F
    } = Nm(e, t, P, d), S = Lm(
      e,
      /* type guard */
      !0
    ), B = $(() => Dt(b.value)), q = Hm(j), O = jm({ changeEvent: !0 }), R = $(
      () => e.type === "textarea" || e.autogrow === !0
    ), K = $(
      () => R.value === !0 || ["text", "search", "url", "tel", "password"].includes(e.type)
    ), g = $(() => {
      const h = {
        ...O.splitAttrs.listeners.value,
        onInput: j,
        onPaste: M,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: w,
        onBlur: k,
        onFocus: Jr
      };
      return h.onCompositionstart = h.onCompositionupdate = h.onCompositionend = q, p.value === !0 && (h.onKeydown = T, h.onClick = F), e.autogrow === !0 && (h.onAnimationend = V), h;
    }), m = $(() => {
      const h = {
        tabindex: 0,
        "data-autofocus": e.autofocus === !0 || void 0,
        rows: e.type === "textarea" ? 6 : void 0,
        "aria-label": e.label,
        name: C.value,
        ...O.splitAttrs.attributes.value,
        id: O.targetUid.value,
        maxlength: e.maxlength,
        disabled: e.disable === !0,
        readonly: e.readonly === !0
      };
      return R.value === !1 && (h.type = e.type), e.autogrow === !0 && (h.rows = 1), h;
    });
    Q(() => e.type, () => {
      d.value && (d.value.value = e.modelValue);
    }), Q(() => e.modelValue, (h) => {
      if (p.value === !0) {
        if (f === !0 && (f = !1, String(h) === s))
          return;
        x(h);
      } else
        b.value !== h && (b.value = h, e.type === "number" && a.hasOwnProperty("value") === !0 && (i === !0 ? i = !1 : delete a.value));
      e.autogrow === !0 && ue(N);
    }), Q(() => e.autogrow, (h) => {
      h === !0 ? ue(N) : d.value !== null && r.rows > 0 && (d.value.style.height = "auto");
    }), Q(() => e.dense, () => {
      e.autogrow === !0 && ue(N);
    });
    function _() {
      or(() => {
        const h = document.activeElement;
        d.value !== null && d.value !== h && (h === null || h.id !== O.targetUid.value) && d.value.focus({ preventScroll: !0 });
      });
    }
    function v() {
      d.value !== null && d.value.select();
    }
    function M(h) {
      if (p.value === !0 && e.reverseFillMask !== !0) {
        const H = h.target;
        y(H, H.selectionStart, H.selectionEnd);
      }
      t("paste", h);
    }
    function j(h) {
      if (!h || !h.target)
        return;
      if (e.type === "file") {
        t("update:modelValue", h.target.files);
        return;
      }
      const H = h.target.value;
      if (h.target.qComposing === !0) {
        a.value = H;
        return;
      }
      if (p.value === !0)
        x(H, !1, h.inputType);
      else if (P(H), K.value === !0 && h.target === document.activeElement) {
        const { selectionStart: ie, selectionEnd: te } = h.target;
        ie !== void 0 && te !== void 0 && ue(() => {
          h.target === document.activeElement && H.indexOf(h.target.value) === 0 && h.target.setSelectionRange(ie, te);
        });
      }
      e.autogrow === !0 && N();
    }
    function V(h) {
      t("animationend", h), N();
    }
    function P(h, H) {
      l = () => {
        c = null, e.type !== "number" && a.hasOwnProperty("value") === !0 && delete a.value, e.modelValue !== h && s !== h && (s = h, H === !0 && (f = !0), t("update:modelValue", h), ue(() => {
          s === h && (s = NaN);
        })), l = void 0;
      }, e.type === "number" && (i = !0, a.value = h), e.debounce !== void 0 ? (c !== null && clearTimeout(c), a.value = h, c = setTimeout(l, e.debounce)) : l();
    }
    function N() {
      requestAnimationFrame(() => {
        const h = d.value;
        if (h !== null) {
          const H = h.parentNode.style, { scrollTop: ie } = h, { overflowY: te, maxHeight: X } = o.platform.is.firefox === !0 ? {} : window.getComputedStyle(h), me = te !== void 0 && te !== "scroll";
          me === !0 && (h.style.overflowY = "hidden"), H.marginBottom = h.scrollHeight - 1 + "px", h.style.height = "1px", h.style.height = h.scrollHeight + "px", me === !0 && (h.style.overflowY = parseInt(X, 10) < h.scrollHeight ? "auto" : "hidden"), H.marginBottom = "", h.scrollTop = ie;
        }
      });
    }
    function w(h) {
      q(h), c !== null && (clearTimeout(c), c = null), l !== void 0 && l(), t("change", h.target.value);
    }
    function k(h) {
      h !== void 0 && Jr(h), c !== null && (clearTimeout(c), c = null), l !== void 0 && l(), i = !1, f = !1, delete a.value, e.type !== "file" && setTimeout(() => {
        d.value !== null && (d.value.value = b.value !== void 0 ? b.value : "");
      });
    }
    function D() {
      return a.hasOwnProperty("value") === !0 ? a.value : b.value !== void 0 ? b.value : "";
    }
    Ye(() => {
      k();
    }), ve(() => {
      e.autogrow === !0 && N();
    }), Object.assign(O, {
      innerValue: b,
      fieldClass: $(
        () => `q-${R.value === !0 ? "textarea" : "input"}` + (e.autogrow === !0 ? " q-textarea--autogrow" : "")
      ),
      hasShadow: $(
        () => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0
      ),
      inputRef: d,
      emitValue: P,
      hasValue: B,
      floatingLabel: $(
        () => B.value === !0 && (e.type !== "number" || isNaN(b.value) === !1) || Dt(e.displayValue)
      ),
      getControl: () => A(R.value === !0 ? "textarea" : "input", {
        ref: d,
        class: [
          "q-field__native q-placeholder",
          e.inputClass
        ],
        style: e.inputStyle,
        ...m.value,
        ...g.value,
        ...e.type !== "file" ? { value: D() } : S.value
      }),
      getShadowControl: () => A("div", {
        class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (R.value === !0 ? "" : " text-no-wrap")
      }, [
        A("span", { class: "invisible" }, D()),
        A("span", e.shadowText)
      ])
    });
    const z = Pm(O);
    return Object.assign(n, {
      focus: _,
      select: v,
      getNativeElement: () => d.value
      // deprecated
    }), nr(n, "nativeEl", () => d.value), z;
  }
}), Km = { class: "tw-block sm:tw-flex tw-group tw-mt-10 tw-flex-col tw-items-start xl:tw-flex-row" }, Gm = { class: "tw-inline-block tw-mb-2 tw-group-[.form-inline]:tw-mb-2 group-[.form-inline]:sm:tw-mb-0 group-[.form-inline]:sm:tw-mr-5 group-[.form-inline]:sm:tw-text-right tw-w-full xl:!tw-mr-10 xl:tw-w-64" }, Wm = { class: "tw-text-left" }, Jm = { class: "tw-flex tw-items-center" }, Zm = { class: "tw-font-medium" }, Qm = /* @__PURE__ */ L("div", { class: "tw-ml-2 tw-rounded-md tw-bg-red-200 tw-text-red-600 tw-px-2 tw-py-0.5 tw-text-xs dark:tw-bg-darkmode-300 dark:tw-text-slate-400" }, "Wymagane", -1), Xm = /* @__PURE__ */ L("div", { class: "tw-mt-3 tw-text-xs tw-leading-relaxed tw-text-slate-500" }, " The image format is .jpg .jpeg .png and a minimum size of 300 x 300 pixels (For optimal images use a minimum size of 700 x 700 pixels). ", -1), Ym = { class: "tw-mt-3 tw-w-full tw-flex-1 xl:tw-mt-0" }, eg = {
  __name: "Text",
  props: {
    label: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (t, r) => (Y(), re("div", Km, [
      L("label", Gm, [
        L("div", Wm, [
          L("div", Jm, [
            L("div", Zm, vn(e.label), 1),
            Qm
          ]),
          Xm
        ])
      ]),
      L("div", Ym, [
        bn(bo, Ae(t.$attrs, {
          outlined: "",
          class: "admin__field__text"
        }), null, 16)
      ])
    ]));
  }
}, tg = {
  __name: "Text",
  props: {
    admin: {
      type: Boolean,
      default: !1
    },
    error: [Boolean, String, Array]
  },
  setup(e) {
    const t = e, r = $(() => !!t.error), n = $(() => t.error ? typeof t.error == "string" ? t.error : t.error[0] : null);
    return (o, a) => e.admin ? (Y(), Ve(eg, gn(Ae({ key: 0 }, o.$attrs)), null, 16)) : (Y(), Ve(bo, Ae({ key: 1 }, o.$attrs, {
      outlined: "",
      error: r.value,
      "error-message": n.value
    }), null, 16, ["error", "error-message"]));
  }
}, rg = {};
function ng(e, t) {
  const r = Eo("usoft-field-text");
  return Y(), Ve(r, Ae(e.$attrs, { type: "password" }), null, 16);
}
const og = /* @__PURE__ */ ar(rg, [["render", ng]]), ag = ["width", "height", "fill", "transform"], sg = { key: 0 }, ig = /* @__PURE__ */ L("path", { d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" }, null, -1), lg = [
  ig
], ug = { key: 1 }, cg = /* @__PURE__ */ L("path", {
  d: "M208,96l-80,80L48,96Z",
  opacity: "0.2"
}, null, -1), fg = /* @__PURE__ */ L("path", { d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z" }, null, -1), dg = [
  cg,
  fg
], pg = { key: 2 }, hg = /* @__PURE__ */ L("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" }, null, -1), mg = [
  hg
], gg = { key: 3 }, vg = /* @__PURE__ */ L("path", { d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z" }, null, -1), bg = [
  vg
], yg = { key: 4 }, wg = /* @__PURE__ */ L("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), _g = [
  wg
], Sg = { key: 5 }, xg = /* @__PURE__ */ L("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), $g = [
  xg
], Eg = {
  name: "PhCaretDown"
}, Cg = /* @__PURE__ */ pn({
  ...Eg,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, r = ce("weight", "regular"), n = ce("size", "1em"), o = ce("color", "currentColor"), a = ce("mirrored", !1), s = $(() => t.weight ?? r), i = $(() => t.size ?? n), f = $(() => t.color ?? o), c = $(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : a ? "scale(-1, 1)" : void 0);
    return (l, d) => (Y(), re("svg", Ae({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: f.value,
      transform: c.value
    }, l.$attrs), [
      Xe(l.$slots, "default"),
      s.value === "bold" ? (Y(), re("g", sg, lg)) : s.value === "duotone" ? (Y(), re("g", ug, dg)) : s.value === "fill" ? (Y(), re("g", pg, mg)) : s.value === "light" ? (Y(), re("g", gg, bg)) : s.value === "regular" ? (Y(), re("g", yg, _g)) : s.value === "thin" ? (Y(), re("g", Sg, $g)) : yn("", !0)
    ], 16, ag));
  }
}), Tg = { class: "tw-p-5 tw-bg-white tw-border tw-border-neutral-200 tw-rounded-md tw-shadow-[0_3px_5px_#0000000b]" }, Ag = { class: "tw-rounded-md tw-border tw-border-slate-200/60 tw-p-5 dark:tw-border-darkmode-400" }, Og = {
  key: 0,
  class: "tw-flex tw-text-slate-700 tw-items-center tw-border-b tw-border-slate-200/60 tw-pb-5 tw-text-base tw-font-medium dark:tw-border-darkmode-400"
}, Rg = {
  __name: "index",
  props: {
    title: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (t, r) => (Y(), re("div", Tg, [
      L("div", Ag, [
        e.title ? (Y(), re("div", Og, [
          bn(Co(Cg), {
            class: "tw-mr-2",
            size: "16",
            weight: "regular"
          }),
          To(" " + vn(e.title), 1)
        ])) : yn("", !0),
        L("div", {
          class: Ao({ "tw-mt-5": e.title })
        }, [
          Xe(t.$slots, "default")
        ], 2)
      ])
    ]));
  }
}, kg = {}, jg = { class: "admin__app tw-px-5 sm:twpx-8 tw-py-5" }, Pg = { class: "tw-flex" }, Mg = /* @__PURE__ */ L("div", { class: "tw-w-64" }, null, -1), Fg = { class: "md:tw-max-w-auto tw-min-w-0 tw-max-w-full tw-flex-1 tw-rounded-[30px] tw-bg-slate-100 tw-px-4 before:tw-block before:tw-h-px before:tw-w-full before:tw-content-[''] dark:tw-bg-darkmode-700 md:tw-px-[22px]" }, Bg = /* @__PURE__ */ L("div", { class: "tw-relative tw-z-[51] tw-flex tw-h-[67px] tw-items-center tw-border-b tw-border-slate-200" }, [
  /* @__PURE__ */ L("div", { class: "tw-flex-1" }, " ??? "),
  /* @__PURE__ */ L("div")
], -1), Ng = { class: "admin__app__content tw-mt-8" }, Dg = /* @__PURE__ */ L("h2", { class: "intro-y tw-mt-0 tw-text-lg tw-font-medium" }, " ??? ", -1), Ig = { class: "tw-mt-5" };
function Lg(e, t) {
  return Y(), re("main", jg, [
    L("div", Pg, [
      Mg,
      L("div", Fg, [
        Bg,
        L("div", Ng, [
          Dg,
          L("div", Ig, [
            Xe(e.$slots, "default")
          ])
        ])
      ])
    ])
  ]);
}
const qg = /* @__PURE__ */ ar(kg, [["render", Lg]]);
const fn = [
  qg,
  tm,
  tg,
  og,
  Rg
], Ug = (e) => {
  Object.keys(fn).forEach((t) => {
    const r = fn[t];
    e.component(r.name, r);
  });
}, Kg = { install: Ug };
export {
  qg as AdminLayout,
  Rg as UsoftBox,
  og as UsoftFieldPassword,
  tg as UsoftFieldText,
  tm as UsoftForm,
  Kg as default,
  zg as useForm,
  Hg as useLayout
};
