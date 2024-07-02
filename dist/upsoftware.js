import { inject as Ge, reactive as un, ref as W, onMounted as he, watch as Z, markRaw as fo, defineComponent as po, getCurrentInstance as le, provide as ho, onDeactivated as cn, onActivated as fn, h as T, nextTick as ie, openBlock as We, createBlock as Mt, normalizeProps as mo, guardReactiveProps as vo, withCtx as go, createElementVNode as ne, renderSlot as bo, computed as O, onBeforeUpdate as yo, onBeforeUnmount as Je, Transition as wo, mergeProps as dn, resolveComponent as pn, createElementBlock as _o, createVNode as So } from "vue";
function hn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: xo } = Object.prototype, { getPrototypeOf: Bt } = Object, Ze = ((e) => (t) => {
  const r = xo.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), re = (e) => (e = e.toLowerCase(), (t) => Ze(t) === e), Qe = (e) => (t) => typeof t === e, { isArray: me } = Array, Ee = Qe("undefined");
function $o(e) {
  return e !== null && !Ee(e) && e.constructor !== null && !Ee(e.constructor) && X(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const mn = re("ArrayBuffer");
function Eo(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && mn(e.buffer), t;
}
const Co = Qe("string"), X = Qe("function"), vn = Qe("number"), Xe = (e) => e !== null && typeof e == "object", To = (e) => e === !0 || e === !1, Me = (e) => {
  if (Ze(e) !== "object")
    return !1;
  const t = Bt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Oo = re("Date"), Ao = re("File"), Ro = re("Blob"), ko = re("FileList"), jo = (e) => Xe(e) && X(e.pipe), Po = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || X(e.append) && ((t = Ze(e)) === "formdata" || // detect form-data instance
  t === "object" && X(e.toString) && e.toString() === "[object FormData]"));
}, Fo = re("URLSearchParams"), [Mo, Bo, No, Io] = ["ReadableStream", "Request", "Response", "Headers"].map(re), Do = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Te(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), me(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let i;
    for (n = 0; n < s; n++)
      i = a[n], t.call(null, e[i], i, e);
  }
}
function gn(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const bn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), yn = (e) => !Ee(e) && e !== bn;
function gt() {
  const { caseless: e } = yn(this) && this || {}, t = {}, r = (n, o) => {
    const a = e && gn(t, o) || o;
    Me(t[a]) && Me(n) ? t[a] = gt(t[a], n) : Me(n) ? t[a] = gt({}, n) : me(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Te(arguments[n], r);
  return t;
}
const Lo = (e, t, r, { allOwnKeys: n } = {}) => (Te(t, (o, a) => {
  r && X(o) ? e[a] = hn(o, r) : e[a] = o;
}, { allOwnKeys: n }), e), qo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Uo = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Vo = (e, t, r, n) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!n || n(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = r !== !1 && Bt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, zo = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Ho = (e) => {
  if (!e)
    return null;
  if (me(e))
    return e;
  let t = e.length;
  if (!vn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ko = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Bt(Uint8Array)), Go = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, Wo = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Jo = re("HTMLFormElement"), Zo = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), nr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Qo = re("RegExp"), wn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Te(r, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (n[a] = s || o);
  }), Object.defineProperties(e, n);
}, Xo = (e) => {
  wn(e, (t, r) => {
    if (X(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (X(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Yo = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return me(e) ? n(e) : n(String(e).split(t)), r;
}, ea = () => {
}, ta = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, ut = "abcdefghijklmnopqrstuvwxyz", or = "0123456789", _n = {
  DIGIT: or,
  ALPHA: ut,
  ALPHA_DIGIT: ut + ut.toUpperCase() + or
}, ra = (e = 16, t = _n.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function na(e) {
  return !!(e && X(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const oa = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Xe(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const a = me(n) ? [] : {};
        return Te(n, (s, i) => {
          const f = r(s, o + 1);
          !Ee(f) && (a[i] = f);
        }), t[o] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, aa = re("AsyncFunction"), sa = (e) => e && (Xe(e) || X(e)) && X(e.then) && X(e.catch), u = {
  isArray: me,
  isArrayBuffer: mn,
  isBuffer: $o,
  isFormData: Po,
  isArrayBufferView: Eo,
  isString: Co,
  isNumber: vn,
  isBoolean: To,
  isObject: Xe,
  isPlainObject: Me,
  isReadableStream: Mo,
  isRequest: Bo,
  isResponse: No,
  isHeaders: Io,
  isUndefined: Ee,
  isDate: Oo,
  isFile: Ao,
  isBlob: Ro,
  isRegExp: Qo,
  isFunction: X,
  isStream: jo,
  isURLSearchParams: Fo,
  isTypedArray: Ko,
  isFileList: ko,
  forEach: Te,
  merge: gt,
  extend: Lo,
  trim: Do,
  stripBOM: qo,
  inherits: Uo,
  toFlatObject: Vo,
  kindOf: Ze,
  kindOfTest: re,
  endsWith: zo,
  toArray: Ho,
  forEachEntry: Go,
  matchAll: Wo,
  isHTMLForm: Jo,
  hasOwnProperty: nr,
  hasOwnProp: nr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wn,
  freezeMethods: Xo,
  toObjectSet: Yo,
  toCamelCase: Zo,
  noop: ea,
  toFiniteNumber: ta,
  findKey: gn,
  global: bn,
  isContextDefined: yn,
  ALPHABET: _n,
  generateString: ra,
  isSpecCompliantForm: na,
  toJSONObject: oa,
  isAsyncFn: aa,
  isThenable: sa
};
function $(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
u.inherits($, Error, {
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
const Sn = $.prototype, xn = {};
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
  xn[e] = { value: e };
});
Object.defineProperties($, xn);
Object.defineProperty(Sn, "isAxiosError", { value: !0 });
$.from = (e, t, r, n, o, a) => {
  const s = Object.create(Sn);
  return u.toFlatObject(e, s, function(f) {
    return f !== Error.prototype;
  }, (i) => i !== "isAxiosError"), $.call(s, e.message, t, r, n, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const ia = null;
function bt(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function $n(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ar(e, t, r) {
  return e ? e.concat(t).map(function(o, a) {
    return o = $n(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function la(e) {
  return u.isArray(e) && !e.some(bt);
}
const ua = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ye(e, t, r) {
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
      throw new $("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(p) || u.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, y, x) {
    let C = p;
    if (p && !x && typeof p == "object") {
      if (u.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (u.isArray(p) && la(p) || (u.isFileList(p) || u.endsWith(y, "[]")) && (C = u.toArray(p)))
        return y = $n(y), C.forEach(function(S, B) {
          !(u.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ar([y], B, a) : s === null ? y : y + "[]",
            c(S)
          );
        }), !1;
    }
    return bt(p) ? !0 : (t.append(ar(x, y, a), c(p)), !1);
  }
  const d = [], E = Object.assign(ua, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: bt
  });
  function b(p, y) {
    if (!u.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p), u.forEach(p, function(C, M) {
        (!(u.isUndefined(C) || C === null) && o.call(
          t,
          C,
          u.isString(M) ? M.trim() : M,
          y,
          E
        )) === !0 && b(C, y ? y.concat(M) : [M]);
      }), d.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function sr(e) {
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
function Nt(e, t) {
  this._pairs = [], e && Ye(e, this, t);
}
const En = Nt.prototype;
En.append = function(t, r) {
  this._pairs.push([t, r]);
};
En.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, sr);
  } : sr;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function ca(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cn(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ca, o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = u.isURLSearchParams(t) ? t.toString() : new Nt(t, r).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class fa {
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
const ir = fa, Tn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, da = typeof URLSearchParams < "u" ? URLSearchParams : Nt, pa = typeof FormData < "u" ? FormData : null, ha = typeof Blob < "u" ? Blob : null, ma = {
  isBrowser: !0,
  classes: {
    URLSearchParams: da,
    FormData: pa,
    Blob: ha
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, It = typeof window < "u" && typeof document < "u", va = ((e) => It && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ga = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ba = It && window.location.href || "http://localhost", ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: It,
  hasStandardBrowserEnv: va,
  hasStandardBrowserWebWorkerEnv: ga,
  origin: ba
}, Symbol.toStringTag, { value: "Module" })), ee = {
  ...ya,
  ...ma
};
function wa(e, t) {
  return Ye(e, new ee.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, a) {
      return ee.isNode && u.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function _a(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Sa(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function On(e) {
  function t(r, n, o, a) {
    let s = r[a++];
    if (s === "__proto__")
      return !0;
    const i = Number.isFinite(+s), f = a >= r.length;
    return s = !s && u.isArray(o) ? o.length : s, f ? (u.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !i) : ((!o[s] || !u.isObject(o[s])) && (o[s] = []), t(r, n, o[s], a) && u.isArray(o[s]) && (o[s] = Sa(o[s])), !i);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const r = {};
    return u.forEachEntry(e, (n, o) => {
      t(_a(n), o, r, 0);
    }), r;
  }
  return null;
}
function xa(e, t, r) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Dt = {
  transitional: Tn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = u.isObject(t);
    if (a && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return o ? JSON.stringify(On(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return wa(t, this.formSerializer).toString();
      if ((i = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Ye(
          i ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), xa(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Dt.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (u.isResponse(t) || u.isReadableStream(t))
      return t;
    if (t && u.isString(t) && (n && !this.responseType || o)) {
      const s = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? $.from(i, $.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: ee.classes.FormData,
    Blob: ee.classes.Blob
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
  Dt.headers[e] = {};
});
const Lt = Dt, $a = u.toObjectSet([
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
]), Ea = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), r = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!r || t[r] && $a[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, lr = Symbol("internals");
function Se(e) {
  return e && String(e).trim().toLowerCase();
}
function Be(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Be) : String(e);
}
function Ca(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Ta = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ct(e, t, r, n, o) {
  if (u.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!u.isString(t)) {
    if (u.isString(n))
      return t.indexOf(n) !== -1;
    if (u.isRegExp(n))
      return n.test(t);
  }
}
function Oa(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Aa(e, t) {
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
class et {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function a(i, f, c) {
      const l = Se(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = u.findKey(o, l);
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || f] = Be(i));
    }
    const s = (i, f) => u.forEach(i, (c, l) => a(c, l, f));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (u.isString(t) && (t = t.trim()) && !Ta(t))
      s(Ea(t), r);
    else if (u.isHeaders(t))
      for (const [i, f] of t.entries())
        a(f, i, n);
    else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Se(t), t) {
      const n = u.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Ca(o);
        if (u.isFunction(r))
          return r.call(this, o, n);
        if (u.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Se(t), t) {
      const n = u.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || ct(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function a(s) {
      if (s = Se(s), s) {
        const i = u.findKey(n, s);
        i && (!r || ct(n, n[i], i, r)) && (delete n[i], o = !0);
      }
    }
    return u.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || ct(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return u.forEach(this, (o, a) => {
      const s = u.findKey(n, a);
      if (s) {
        r[s] = Be(o), delete r[a];
        return;
      }
      const i = t ? Oa(a) : String(a).trim();
      i !== a && delete r[a], r[i] = Be(o), n[i] = !0;
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
    const n = (this[lr] = this[lr] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const i = Se(s);
      n[i] || (Aa(o, s), n[i] = !0);
    }
    return u.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
et.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(et.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
u.freezeMethods(et);
const te = et;
function ft(e, t) {
  const r = this || Lt, n = t || r, o = te.from(n.headers);
  let a = n.data;
  return u.forEach(e, function(i) {
    a = i.call(r, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function An(e) {
  return !!(e && e.__CANCEL__);
}
function ve(e, t, r) {
  $.call(this, e ?? "canceled", $.ERR_CANCELED, t, r), this.name = "CanceledError";
}
u.inherits(ve, $, {
  __CANCEL__: !0
});
function Rn(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new $(
    "Request failed with status code " + r.status,
    [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ra(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ka(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const c = Date.now(), l = n[a];
    s || (s = c), r[o] = f, n[o] = c;
    let d = a, E = 0;
    for (; d !== o; )
      E += r[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), c - s < t)
      return;
    const b = l && c - l;
    return b ? Math.round(E * 1e3 / b) : void 0;
  };
}
function ja(e, t) {
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
const De = (e, t, r = 3) => {
  let n = 0;
  const o = ka(50, 250);
  return ja((a) => {
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
}, Pa = ee.hasStandardBrowserEnv ? (
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
), Fa = ee.hasStandardBrowserEnv ? (
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
function Ma(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ba(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kn(e, t) {
  return e && !Ma(t) ? Ba(e, t) : t;
}
const ur = (e) => e instanceof te ? { ...e } : e;
function ce(e, t) {
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
    headers: (c, l) => o(ur(c), ur(l), !0)
  };
  return u.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const d = f[l] || o, E = d(e[l], t[l], l);
    u.isUndefined(E) && d !== i || (r[l] = E);
  }), r;
}
const jn = (e) => {
  const t = ce({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: i } = t;
  t.headers = s = te.from(s), t.url = Cn(kn(t.baseURL, t.url), e.params, e.paramsSerializer), i && s.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let f;
  if (u.isFormData(r)) {
    if (ee.hasStandardBrowserEnv || ee.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((f = s.getContentType()) !== !1) {
      const [c, ...l] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (ee.hasStandardBrowserEnv && (n && u.isFunction(n) && (n = n(t)), n || n !== !1 && Pa(t.url))) {
    const c = o && a && Fa.read(a);
    c && s.set(o, c);
  }
  return t;
}, Na = typeof XMLHttpRequest < "u", Ia = Na && function(e) {
  return new Promise(function(r, n) {
    const o = jn(e);
    let a = o.data;
    const s = te.from(o.headers).normalize();
    let { responseType: i } = o, f;
    function c() {
      o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let l = new XMLHttpRequest();
    l.open(o.method.toUpperCase(), o.url, !0), l.timeout = o.timeout;
    function d() {
      if (!l)
        return;
      const b = te.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: b,
        config: e,
        request: l
      };
      Rn(function(C) {
        r(C), c();
      }, function(C) {
        n(C), c();
      }, y), l = null;
    }
    "onloadend" in l ? l.onloadend = d : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, l.onabort = function() {
      l && (n(new $("Request aborted", $.ECONNABORTED, o, l)), l = null);
    }, l.onerror = function() {
      n(new $("Network Error", $.ERR_NETWORK, o, l)), l = null;
    }, l.ontimeout = function() {
      let p = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Tn;
      o.timeoutErrorMessage && (p = o.timeoutErrorMessage), n(new $(
        p,
        y.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
        o,
        l
      )), l = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in l && u.forEach(s.toJSON(), function(p, y) {
      l.setRequestHeader(y, p);
    }), u.isUndefined(o.withCredentials) || (l.withCredentials = !!o.withCredentials), i && i !== "json" && (l.responseType = o.responseType), typeof o.onDownloadProgress == "function" && l.addEventListener("progress", De(o.onDownloadProgress, !0)), typeof o.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", De(o.onUploadProgress)), (o.cancelToken || o.signal) && (f = (b) => {
      l && (n(!b || b.type ? new ve(null, e, l) : b), l.abort(), l = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const E = Ra(o.url);
    if (E && ee.protocols.indexOf(E) === -1) {
      n(new $("Unsupported protocol " + E + ":", $.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(a || null);
  });
}, Da = (e, t) => {
  let r = new AbortController(), n;
  const o = function(f) {
    if (!n) {
      n = !0, s();
      const c = f instanceof Error ? f : this.reason;
      r.abort(c instanceof $ ? c : new ve(c instanceof Error ? c.message : c));
    }
  };
  let a = t && setTimeout(() => {
    o(new $(`timeout ${t} of ms exceeded`, $.ETIMEDOUT));
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
}, La = Da, qa = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, Ua = async function* (e, t, r) {
  for await (const n of e)
    yield* qa(ArrayBuffer.isView(n) ? n : await r(String(n)), t);
}, cr = (e, t, r, n, o) => {
  const a = Ua(e, t, o);
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
}, fr = (e, t) => {
  const r = e != null;
  return (n) => setTimeout(() => t({
    lengthComputable: r,
    total: e,
    loaded: n
  }));
}, tt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Pn = tt && typeof ReadableStream == "function", yt = tt && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Va = Pn && (() => {
  let e = !1;
  const t = new Request(ee.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), dr = 64 * 1024, wt = Pn && !!(() => {
  try {
    return u.isReadableStream(new Response("").body);
  } catch {
  }
})(), Le = {
  stream: wt && ((e) => e.body)
};
tt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Le[t] && (Le[t] = u.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new $(`Response type '${t}' is not supported`, $.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const za = async (e) => {
  if (e == null)
    return 0;
  if (u.isBlob(e))
    return e.size;
  if (u.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (u.isArrayBufferView(e))
    return e.byteLength;
  if (u.isURLSearchParams(e) && (e = e + ""), u.isString(e))
    return (await yt(e)).byteLength;
}, Ha = async (e, t) => {
  const r = u.toFiniteNumber(e.getContentLength());
  return r ?? za(t);
}, Ka = tt && (async (e) => {
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
    fetchOptions: E
  } = jn(e);
  c = c ? (c + "").toLowerCase() : "text";
  let [b, p] = o || a || s ? La([o, a], s) : [], y, x;
  const C = () => {
    !y && setTimeout(() => {
      b && b.unsubscribe();
    }), y = !0;
  };
  let M;
  try {
    if (f && Va && r !== "get" && r !== "head" && (M = await Ha(l, n)) !== 0) {
      let A = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), R;
      u.isFormData(n) && (R = A.headers.get("content-type")) && l.setContentType(R), A.body && (n = cr(A.body, dr, fr(
        M,
        De(f)
      ), null, yt));
    }
    u.isString(d) || (d = d ? "cors" : "omit"), x = new Request(t, {
      ...E,
      signal: b,
      method: r.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      withCredentials: d
    });
    let S = await fetch(x);
    const B = wt && (c === "stream" || c === "response");
    if (wt && (i || B)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((H) => {
        A[H] = S[H];
      });
      const R = u.toFiniteNumber(S.headers.get("content-length"));
      S = new Response(
        cr(S.body, dr, i && fr(
          R,
          De(i, !0)
        ), B && C, yt),
        A
      );
    }
    c = c || "text";
    let L = await Le[u.findKey(Le, c) || "text"](S, e);
    return !B && C(), p && p(), await new Promise((A, R) => {
      Rn(A, R, {
        data: L,
        headers: te.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: x
      });
    });
  } catch (S) {
    throw C(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new $("Network Error", $.ERR_NETWORK, e, x),
      {
        cause: S.cause || S
      }
    ) : $.from(S, S && S.code, e, x);
  }
}), _t = {
  http: ia,
  xhr: Ia,
  fetch: Ka
};
u.forEach(_t, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const pr = (e) => `- ${e}`, Ga = (e) => u.isFunction(e) || e === null || e === !1, Fn = {
  getAdapter: (e) => {
    e = u.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let s;
      if (n = r, !Ga(r) && (n = _t[(s = String(r)).toLowerCase()], n === void 0))
        throw new $(`Unknown adapter '${s}'`);
      if (n)
        break;
      o[s || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([i, f]) => `adapter ${i} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? a.length > 1 ? `since :
` + a.map(pr).join(`
`) : " " + pr(a[0]) : "as no adapter specified";
      throw new $(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: _t
};
function dt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ve(null, e);
}
function hr(e) {
  return dt(e), e.headers = te.from(e.headers), e.data = ft.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Fn.getAdapter(e.adapter || Lt.adapter)(e).then(function(n) {
    return dt(e), n.data = ft.call(
      e,
      e.transformResponse,
      n
    ), n.headers = te.from(n.headers), n;
  }, function(n) {
    return An(n) || (dt(e), n && n.response && (n.response.data = ft.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = te.from(n.response.headers))), Promise.reject(n);
  });
}
const Mn = "1.7.2", qt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const mr = {};
qt.transitional = function(t, r, n) {
  function o(a, s) {
    return "[Axios v" + Mn + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, i) => {
    if (t === !1)
      throw new $(
        o(s, " has been removed" + (r ? " in " + r : "")),
        $.ERR_DEPRECATED
      );
    return r && !mr[s] && (mr[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, s, i) : !0;
  };
};
function Wa(e, t, r) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], s = t[a];
    if (s) {
      const i = e[a], f = i === void 0 || s(i, a, e);
      if (f !== !0)
        throw new $("option " + a + " must be " + f, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new $("Unknown option " + a, $.ERR_BAD_OPTION);
  }
}
const St = {
  assertOptions: Wa,
  validators: qt
}, se = St.validators;
class qe {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ir(),
      response: new ir()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ce(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: a } = r;
    n !== void 0 && St.assertOptions(n, {
      silentJSONParsing: se.transitional(se.boolean),
      forcedJSONParsing: se.transitional(se.boolean),
      clarifyTimeoutError: se.transitional(se.boolean)
    }, !1), o != null && (u.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : St.assertOptions(o, {
      encode: se.function,
      serialize: se.function
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
    ), r.headers = te.concat(s, a);
    const i = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (f = f && y.synchronous, i.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(y) {
      c.push(y.fulfilled, y.rejected);
    });
    let l, d = 0, E;
    if (!f) {
      const p = [hr.bind(this), void 0];
      for (p.unshift.apply(p, i), p.push.apply(p, c), E = p.length, l = Promise.resolve(r); d < E; )
        l = l.then(p[d++], p[d++]);
      return l;
    }
    E = i.length;
    let b = r;
    for (d = 0; d < E; ) {
      const p = i[d++], y = i[d++];
      try {
        b = p(b);
      } catch (x) {
        y.call(this, x);
        break;
      }
    }
    try {
      l = hr.call(this, b);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, E = c.length; d < E; )
      l = l.then(c[d++], c[d++]);
    return l;
  }
  getUri(t) {
    t = ce(this.defaults, t);
    const r = kn(t.baseURL, t.url);
    return Cn(r, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  qe.prototype[t] = function(r, n) {
    return this.request(ce(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, s, i) {
      return this.request(ce(i || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  qe.prototype[t] = r(), qe.prototype[t + "Form"] = r(!0);
});
const Ne = qe;
class Ut {
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
      n.reason || (n.reason = new ve(a, s, i), r(n.reason));
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
      token: new Ut(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Ja = Ut;
function Za(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Qa(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const xt = {
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
Object.entries(xt).forEach(([e, t]) => {
  xt[t] = e;
});
const Xa = xt;
function Bn(e) {
  const t = new Ne(e), r = hn(Ne.prototype.request, t);
  return u.extend(r, Ne.prototype, t, { allOwnKeys: !0 }), u.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Bn(ce(e, o));
  }, r;
}
const G = Bn(Lt);
G.Axios = Ne;
G.CanceledError = ve;
G.CancelToken = Ja;
G.isCancel = An;
G.VERSION = Mn;
G.toFormData = Ye;
G.AxiosError = $;
G.Cancel = G.CanceledError;
G.all = function(t) {
  return Promise.all(t);
};
G.spread = Za;
G.isAxiosError = Qa;
G.mergeConfig = ce;
G.AxiosHeaders = te;
G.formToJSON = (e) => On(u.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = Fn.getAdapter;
G.HttpStatusCode = Xa;
G.default = G;
const Ya = G, es = Ya.create({ baseURL: "http://127.0.0.1:8000/v1/" });
async function ts(e, t, r, n, o = !0) {
  try {
    const a = await es({
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
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ns() {
  this.__data__ = [], this.size = 0;
}
var os = ns;
function as(e, t) {
  return e === t || e !== e && t !== t;
}
var Nn = as, ss = Nn;
function is(e, t) {
  for (var r = e.length; r--; )
    if (ss(e[r][0], t))
      return r;
  return -1;
}
var rt = is, ls = rt, us = Array.prototype, cs = us.splice;
function fs(e) {
  var t = this.__data__, r = ls(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : cs.call(t, r, 1), --this.size, !0;
}
var ds = fs, ps = rt;
function hs(e) {
  var t = this.__data__, r = ps(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var ms = hs, vs = rt;
function gs(e) {
  return vs(this.__data__, e) > -1;
}
var bs = gs, ys = rt;
function ws(e, t) {
  var r = this.__data__, n = ys(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var _s = ws, Ss = os, xs = ds, $s = ms, Es = bs, Cs = _s;
function ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ge.prototype.clear = Ss;
ge.prototype.delete = xs;
ge.prototype.get = $s;
ge.prototype.has = Es;
ge.prototype.set = Cs;
var nt = ge, Ts = nt;
function Os() {
  this.__data__ = new Ts(), this.size = 0;
}
var As = Os;
function Rs(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var ks = Rs;
function js(e) {
  return this.__data__.get(e);
}
var Ps = js;
function Fs(e) {
  return this.__data__.has(e);
}
var Ms = Fs, Bs = typeof Re == "object" && Re && Re.Object === Object && Re, In = Bs, Ns = In, Is = typeof self == "object" && self && self.Object === Object && self, Ds = Ns || Is || Function("return this")(), oe = Ds, Ls = oe, qs = Ls.Symbol, Vt = qs, vr = Vt, Dn = Object.prototype, Us = Dn.hasOwnProperty, Vs = Dn.toString, xe = vr ? vr.toStringTag : void 0;
function zs(e) {
  var t = Us.call(e, xe), r = e[xe];
  try {
    e[xe] = void 0;
    var n = !0;
  } catch {
  }
  var o = Vs.call(e);
  return n && (t ? e[xe] = r : delete e[xe]), o;
}
var Hs = zs, Ks = Object.prototype, Gs = Ks.toString;
function Ws(e) {
  return Gs.call(e);
}
var Js = Ws, gr = Vt, Zs = Hs, Qs = Js, Xs = "[object Null]", Ys = "[object Undefined]", br = gr ? gr.toStringTag : void 0;
function ei(e) {
  return e == null ? e === void 0 ? Ys : Xs : br && br in Object(e) ? Zs(e) : Qs(e);
}
var ot = ei;
function ti(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Oe = ti, ri = ot, ni = Oe, oi = "[object AsyncFunction]", ai = "[object Function]", si = "[object GeneratorFunction]", ii = "[object Proxy]";
function li(e) {
  if (!ni(e))
    return !1;
  var t = ri(e);
  return t == ai || t == si || t == oi || t == ii;
}
var Ln = li, ui = oe, ci = ui["__core-js_shared__"], fi = ci, pt = fi, yr = function() {
  var e = /[^.]+$/.exec(pt && pt.keys && pt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function di(e) {
  return !!yr && yr in e;
}
var pi = di, hi = Function.prototype, mi = hi.toString;
function vi(e) {
  if (e != null) {
    try {
      return mi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var qn = vi, gi = Ln, bi = pi, yi = Oe, wi = qn, _i = /[\\^$.*+?()[\]{}|]/g, Si = /^\[object .+?Constructor\]$/, xi = Function.prototype, $i = Object.prototype, Ei = xi.toString, Ci = $i.hasOwnProperty, Ti = RegExp(
  "^" + Ei.call(Ci).replace(_i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Oi(e) {
  if (!yi(e) || bi(e))
    return !1;
  var t = gi(e) ? Ti : Si;
  return t.test(wi(e));
}
var Ai = Oi;
function Ri(e, t) {
  return e == null ? void 0 : e[t];
}
var ki = Ri, ji = Ai, Pi = ki;
function Fi(e, t) {
  var r = Pi(e, t);
  return ji(r) ? r : void 0;
}
var fe = Fi, Mi = fe, Bi = oe, Ni = Mi(Bi, "Map"), zt = Ni, Ii = fe, Di = Ii(Object, "create"), at = Di, wr = at;
function Li() {
  this.__data__ = wr ? wr(null) : {}, this.size = 0;
}
var qi = Li;
function Ui(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Vi = Ui, zi = at, Hi = "__lodash_hash_undefined__", Ki = Object.prototype, Gi = Ki.hasOwnProperty;
function Wi(e) {
  var t = this.__data__;
  if (zi) {
    var r = t[e];
    return r === Hi ? void 0 : r;
  }
  return Gi.call(t, e) ? t[e] : void 0;
}
var Ji = Wi, Zi = at, Qi = Object.prototype, Xi = Qi.hasOwnProperty;
function Yi(e) {
  var t = this.__data__;
  return Zi ? t[e] !== void 0 : Xi.call(t, e);
}
var el = Yi, tl = at, rl = "__lodash_hash_undefined__";
function nl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = tl && t === void 0 ? rl : t, this;
}
var ol = nl, al = qi, sl = Vi, il = Ji, ll = el, ul = ol;
function be(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
be.prototype.clear = al;
be.prototype.delete = sl;
be.prototype.get = il;
be.prototype.has = ll;
be.prototype.set = ul;
var cl = be, _r = cl, fl = nt, dl = zt;
function pl() {
  this.size = 0, this.__data__ = {
    hash: new _r(),
    map: new (dl || fl)(),
    string: new _r()
  };
}
var hl = pl;
function ml(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var vl = ml, gl = vl;
function bl(e, t) {
  var r = e.__data__;
  return gl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var st = bl, yl = st;
function wl(e) {
  var t = yl(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var _l = wl, Sl = st;
function xl(e) {
  return Sl(this, e).get(e);
}
var $l = xl, El = st;
function Cl(e) {
  return El(this, e).has(e);
}
var Tl = Cl, Ol = st;
function Al(e, t) {
  var r = Ol(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Rl = Al, kl = hl, jl = _l, Pl = $l, Fl = Tl, Ml = Rl;
function ye(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ye.prototype.clear = kl;
ye.prototype.delete = jl;
ye.prototype.get = Pl;
ye.prototype.has = Fl;
ye.prototype.set = Ml;
var Bl = ye, Nl = nt, Il = zt, Dl = Bl, Ll = 200;
function ql(e, t) {
  var r = this.__data__;
  if (r instanceof Nl) {
    var n = r.__data__;
    if (!Il || n.length < Ll - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Dl(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Ul = ql, Vl = nt, zl = As, Hl = ks, Kl = Ps, Gl = Ms, Wl = Ul;
function we(e) {
  var t = this.__data__ = new Vl(e);
  this.size = t.size;
}
we.prototype.clear = zl;
we.prototype.delete = Hl;
we.prototype.get = Kl;
we.prototype.has = Gl;
we.prototype.set = Wl;
var Jl = we;
function Zl(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Ql = Zl, Xl = fe, Yl = function() {
  try {
    var e = Xl(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), eu = Yl, Sr = eu;
function tu(e, t, r) {
  t == "__proto__" && Sr ? Sr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Un = tu, ru = Un, nu = Nn, ou = Object.prototype, au = ou.hasOwnProperty;
function su(e, t, r) {
  var n = e[t];
  (!(au.call(e, t) && nu(n, r)) || r === void 0 && !(t in e)) && ru(e, t, r);
}
var Vn = su, iu = Vn, lu = Un;
function uu(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], f = n ? n(r[i], e[i], i, r, e) : void 0;
    f === void 0 && (f = e[i]), o ? lu(r, i, f) : iu(r, i, f);
  }
  return r;
}
var it = uu;
function cu(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var fu = cu;
function du(e) {
  return e != null && typeof e == "object";
}
var Ae = du, pu = ot, hu = Ae, mu = "[object Arguments]";
function vu(e) {
  return hu(e) && pu(e) == mu;
}
var gu = vu, xr = gu, bu = Ae, zn = Object.prototype, yu = zn.hasOwnProperty, wu = zn.propertyIsEnumerable, _u = xr(function() {
  return arguments;
}()) ? xr : function(e) {
  return bu(e) && yu.call(e, "callee") && !wu.call(e, "callee");
}, Su = _u, xu = Array.isArray, Ht = xu, Ue = { exports: {} };
function $u() {
  return !1;
}
var Eu = $u;
Ue.exports;
(function(e, t) {
  var r = oe, n = Eu, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, s = a && a.exports === o, i = s ? r.Buffer : void 0, f = i ? i.isBuffer : void 0, c = f || n;
  e.exports = c;
})(Ue, Ue.exports);
var Hn = Ue.exports, Cu = 9007199254740991, Tu = /^(?:0|[1-9]\d*)$/;
function Ou(e, t) {
  var r = typeof e;
  return t = t ?? Cu, !!t && (r == "number" || r != "symbol" && Tu.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Au = Ou, Ru = 9007199254740991;
function ku(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ru;
}
var Kn = ku, ju = ot, Pu = Kn, Fu = Ae, Mu = "[object Arguments]", Bu = "[object Array]", Nu = "[object Boolean]", Iu = "[object Date]", Du = "[object Error]", Lu = "[object Function]", qu = "[object Map]", Uu = "[object Number]", Vu = "[object Object]", zu = "[object RegExp]", Hu = "[object Set]", Ku = "[object String]", Gu = "[object WeakMap]", Wu = "[object ArrayBuffer]", Ju = "[object DataView]", Zu = "[object Float32Array]", Qu = "[object Float64Array]", Xu = "[object Int8Array]", Yu = "[object Int16Array]", ec = "[object Int32Array]", tc = "[object Uint8Array]", rc = "[object Uint8ClampedArray]", nc = "[object Uint16Array]", oc = "[object Uint32Array]", q = {};
q[Zu] = q[Qu] = q[Xu] = q[Yu] = q[ec] = q[tc] = q[rc] = q[nc] = q[oc] = !0;
q[Mu] = q[Bu] = q[Wu] = q[Nu] = q[Ju] = q[Iu] = q[Du] = q[Lu] = q[qu] = q[Uu] = q[Vu] = q[zu] = q[Hu] = q[Ku] = q[Gu] = !1;
function ac(e) {
  return Fu(e) && Pu(e.length) && !!q[ju(e)];
}
var sc = ac;
function ic(e) {
  return function(t) {
    return e(t);
  };
}
var Kt = ic, Ve = { exports: {} };
Ve.exports;
(function(e, t) {
  var r = In, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, s = a && r.process, i = function() {
    try {
      var f = o && o.require && o.require("util").types;
      return f || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Ve, Ve.exports);
var Gt = Ve.exports, lc = sc, uc = Kt, $r = Gt, Er = $r && $r.isTypedArray, cc = Er ? uc(Er) : lc, fc = cc, dc = fu, pc = Su, hc = Ht, mc = Hn, vc = Au, gc = fc, bc = Object.prototype, yc = bc.hasOwnProperty;
function wc(e, t) {
  var r = hc(e), n = !r && pc(e), o = !r && !n && mc(e), a = !r && !n && !o && gc(e), s = r || n || o || a, i = s ? dc(e.length, String) : [], f = i.length;
  for (var c in e)
    (t || yc.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    vc(c, f))) && i.push(c);
  return i;
}
var Gn = wc, _c = Object.prototype;
function Sc(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _c;
  return e === r;
}
var Wt = Sc;
function xc(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Wn = xc, $c = Wn, Ec = $c(Object.keys, Object), Cc = Ec, Tc = Wt, Oc = Cc, Ac = Object.prototype, Rc = Ac.hasOwnProperty;
function kc(e) {
  if (!Tc(e))
    return Oc(e);
  var t = [];
  for (var r in Object(e))
    Rc.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var jc = kc, Pc = Ln, Fc = Kn;
function Mc(e) {
  return e != null && Fc(e.length) && !Pc(e);
}
var Jn = Mc, Bc = Gn, Nc = jc, Ic = Jn;
function Dc(e) {
  return Ic(e) ? Bc(e) : Nc(e);
}
var Jt = Dc, Lc = it, qc = Jt;
function Uc(e, t) {
  return e && Lc(t, qc(t), e);
}
var Vc = Uc;
function zc(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Hc = zc, Kc = Oe, Gc = Wt, Wc = Hc, Jc = Object.prototype, Zc = Jc.hasOwnProperty;
function Qc(e) {
  if (!Kc(e))
    return Wc(e);
  var t = Gc(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Zc.call(e, n)) || r.push(n);
  return r;
}
var Xc = Qc, Yc = Gn, ef = Xc, tf = Jn;
function rf(e) {
  return tf(e) ? Yc(e, !0) : ef(e);
}
var Zt = rf, nf = it, of = Zt;
function af(e, t) {
  return e && nf(t, of(t), e);
}
var sf = af, ze = { exports: {} };
ze.exports;
(function(e, t) {
  var r = oe, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, s = a ? r.Buffer : void 0, i = s ? s.allocUnsafe : void 0;
  function f(c, l) {
    if (l)
      return c.slice();
    var d = c.length, E = i ? i(d) : new c.constructor(d);
    return c.copy(E), E;
  }
  e.exports = f;
})(ze, ze.exports);
var lf = ze.exports;
function uf(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var cf = uf;
function ff(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[o++] = s);
  }
  return a;
}
var df = ff;
function pf() {
  return [];
}
var Zn = pf, hf = df, mf = Zn, vf = Object.prototype, gf = vf.propertyIsEnumerable, Cr = Object.getOwnPropertySymbols, bf = Cr ? function(e) {
  return e == null ? [] : (e = Object(e), hf(Cr(e), function(t) {
    return gf.call(e, t);
  }));
} : mf, Qt = bf, yf = it, wf = Qt;
function _f(e, t) {
  return yf(e, wf(e), t);
}
var Sf = _f;
function xf(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Qn = xf, $f = Wn, Ef = $f(Object.getPrototypeOf, Object), Xn = Ef, Cf = Qn, Tf = Xn, Of = Qt, Af = Zn, Rf = Object.getOwnPropertySymbols, kf = Rf ? function(e) {
  for (var t = []; e; )
    Cf(t, Of(e)), e = Tf(e);
  return t;
} : Af, Yn = kf, jf = it, Pf = Yn;
function Ff(e, t) {
  return jf(e, Pf(e), t);
}
var Mf = Ff, Bf = Qn, Nf = Ht;
function If(e, t, r) {
  var n = t(e);
  return Nf(e) ? n : Bf(n, r(e));
}
var eo = If, Df = eo, Lf = Qt, qf = Jt;
function Uf(e) {
  return Df(e, qf, Lf);
}
var Vf = Uf, zf = eo, Hf = Yn, Kf = Zt;
function Gf(e) {
  return zf(e, Kf, Hf);
}
var Wf = Gf, Jf = fe, Zf = oe, Qf = Jf(Zf, "DataView"), Xf = Qf, Yf = fe, ed = oe, td = Yf(ed, "Promise"), rd = td, nd = fe, od = oe, ad = nd(od, "Set"), sd = ad, id = fe, ld = oe, ud = id(ld, "WeakMap"), cd = ud, $t = Xf, Et = zt, Ct = rd, Tt = sd, Ot = cd, to = ot, _e = qn, Tr = "[object Map]", fd = "[object Object]", Or = "[object Promise]", Ar = "[object Set]", Rr = "[object WeakMap]", kr = "[object DataView]", dd = _e($t), pd = _e(Et), hd = _e(Ct), md = _e(Tt), vd = _e(Ot), ue = to;
($t && ue(new $t(new ArrayBuffer(1))) != kr || Et && ue(new Et()) != Tr || Ct && ue(Ct.resolve()) != Or || Tt && ue(new Tt()) != Ar || Ot && ue(new Ot()) != Rr) && (ue = function(e) {
  var t = to(e), r = t == fd ? e.constructor : void 0, n = r ? _e(r) : "";
  if (n)
    switch (n) {
      case dd:
        return kr;
      case pd:
        return Tr;
      case hd:
        return Or;
      case md:
        return Ar;
      case vd:
        return Rr;
    }
  return t;
});
var Xt = ue, gd = Object.prototype, bd = gd.hasOwnProperty;
function yd(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && bd.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var wd = yd, _d = oe, Sd = _d.Uint8Array, xd = Sd, jr = xd;
function $d(e) {
  var t = new e.constructor(e.byteLength);
  return new jr(t).set(new jr(e)), t;
}
var Yt = $d, Ed = Yt;
function Cd(e, t) {
  var r = t ? Ed(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Td = Cd, Od = /\w*$/;
function Ad(e) {
  var t = new e.constructor(e.source, Od.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Rd = Ad, Pr = Vt, Fr = Pr ? Pr.prototype : void 0, Mr = Fr ? Fr.valueOf : void 0;
function kd(e) {
  return Mr ? Object(Mr.call(e)) : {};
}
var jd = kd, Pd = Yt;
function Fd(e, t) {
  var r = t ? Pd(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Md = Fd, Bd = Yt, Nd = Td, Id = Rd, Dd = jd, Ld = Md, qd = "[object Boolean]", Ud = "[object Date]", Vd = "[object Map]", zd = "[object Number]", Hd = "[object RegExp]", Kd = "[object Set]", Gd = "[object String]", Wd = "[object Symbol]", Jd = "[object ArrayBuffer]", Zd = "[object DataView]", Qd = "[object Float32Array]", Xd = "[object Float64Array]", Yd = "[object Int8Array]", ep = "[object Int16Array]", tp = "[object Int32Array]", rp = "[object Uint8Array]", np = "[object Uint8ClampedArray]", op = "[object Uint16Array]", ap = "[object Uint32Array]";
function sp(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Jd:
      return Bd(e);
    case qd:
    case Ud:
      return new n(+e);
    case Zd:
      return Nd(e, r);
    case Qd:
    case Xd:
    case Yd:
    case ep:
    case tp:
    case rp:
    case np:
    case op:
    case ap:
      return Ld(e, r);
    case Vd:
      return new n();
    case zd:
    case Gd:
      return new n(e);
    case Hd:
      return Id(e);
    case Kd:
      return new n();
    case Wd:
      return Dd(e);
  }
}
var ip = sp, lp = Oe, Br = Object.create, up = function() {
  function e() {
  }
  return function(t) {
    if (!lp(t))
      return {};
    if (Br)
      return Br(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), cp = up, fp = cp, dp = Xn, pp = Wt;
function hp(e) {
  return typeof e.constructor == "function" && !pp(e) ? fp(dp(e)) : {};
}
var mp = hp, vp = Xt, gp = Ae, bp = "[object Map]";
function yp(e) {
  return gp(e) && vp(e) == bp;
}
var wp = yp, _p = wp, Sp = Kt, Nr = Gt, Ir = Nr && Nr.isMap, xp = Ir ? Sp(Ir) : _p, $p = xp, Ep = Xt, Cp = Ae, Tp = "[object Set]";
function Op(e) {
  return Cp(e) && Ep(e) == Tp;
}
var Ap = Op, Rp = Ap, kp = Kt, Dr = Gt, Lr = Dr && Dr.isSet, jp = Lr ? kp(Lr) : Rp, Pp = jp, Fp = Jl, Mp = Ql, Bp = Vn, Np = Vc, Ip = sf, Dp = lf, Lp = cf, qp = Sf, Up = Mf, Vp = Vf, zp = Wf, Hp = Xt, Kp = wd, Gp = ip, Wp = mp, Jp = Ht, Zp = Hn, Qp = $p, Xp = Oe, Yp = Pp, eh = Jt, th = Zt, rh = 1, nh = 2, oh = 4, ro = "[object Arguments]", ah = "[object Array]", sh = "[object Boolean]", ih = "[object Date]", lh = "[object Error]", no = "[object Function]", uh = "[object GeneratorFunction]", ch = "[object Map]", fh = "[object Number]", oo = "[object Object]", dh = "[object RegExp]", ph = "[object Set]", hh = "[object String]", mh = "[object Symbol]", vh = "[object WeakMap]", gh = "[object ArrayBuffer]", bh = "[object DataView]", yh = "[object Float32Array]", wh = "[object Float64Array]", _h = "[object Int8Array]", Sh = "[object Int16Array]", xh = "[object Int32Array]", $h = "[object Uint8Array]", Eh = "[object Uint8ClampedArray]", Ch = "[object Uint16Array]", Th = "[object Uint32Array]", D = {};
D[ro] = D[ah] = D[gh] = D[bh] = D[sh] = D[ih] = D[yh] = D[wh] = D[_h] = D[Sh] = D[xh] = D[ch] = D[fh] = D[oo] = D[dh] = D[ph] = D[hh] = D[mh] = D[$h] = D[Eh] = D[Ch] = D[Th] = !0;
D[lh] = D[no] = D[vh] = !1;
function Ie(e, t, r, n, o, a) {
  var s, i = t & rh, f = t & nh, c = t & oh;
  if (r && (s = o ? r(e, n, o, a) : r(e)), s !== void 0)
    return s;
  if (!Xp(e))
    return e;
  var l = Jp(e);
  if (l) {
    if (s = Kp(e), !i)
      return Lp(e, s);
  } else {
    var d = Hp(e), E = d == no || d == uh;
    if (Zp(e))
      return Dp(e, i);
    if (d == oo || d == ro || E && !o) {
      if (s = f || E ? {} : Wp(e), !i)
        return f ? Up(e, Ip(s, e)) : qp(e, Np(s, e));
    } else {
      if (!D[d])
        return o ? e : {};
      s = Gp(e, d, i);
    }
  }
  a || (a = new Fp());
  var b = a.get(e);
  if (b)
    return b;
  a.set(e, s), Yp(e) ? e.forEach(function(x) {
    s.add(Ie(x, t, r, x, e, a));
  }) : Qp(e) && e.forEach(function(x, C) {
    s.set(C, Ie(x, t, r, C, e, a));
  });
  var p = c ? f ? zp : Vp : f ? th : eh, y = l ? void 0 : p(e);
  return Mp(y || e, function(x, C) {
    y && (C = x, x = e[C]), Bp(s, C, Ie(x, t, r, C, e, a));
  }), s;
}
var Oh = Ie, Ah = Oh, Rh = 1, kh = 4;
function jh(e) {
  return Ah(e, Rh | kh);
}
var Ph = jh;
const qr = /* @__PURE__ */ rs(Ph), Fh = "_q_", ao = "_q_fo_";
function Mh() {
  return Ge(Fh);
}
function ov(e, t = {}) {
  let r = (a) => a;
  const n = Mh();
  let o = qr(typeof e == "object" ? e : data());
  return un({
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
        const l = await ts(s, a, f, this.errors);
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
const Bh = (e, t) => {
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
var Ur;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ur || (Ur = {}));
var Vr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Vr || (Vr = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var zr;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(zr || (zr = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Nh = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Ih = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Dh() {
  return Ge(Nh);
}
function Lh(e) {
  return Ge(Ih);
}
const Hr = W({});
function av() {
  he(async () => {
    await t();
  });
  const e = Lh();
  Dh();
  const t = async () => {
    const r = e.meta.componentPath, n = await Bh(/* @__PURE__ */ Object.assign({ "../App.vue": () => import("./App-9623d125.js") }), `../${r}.vue`), o = [];
    e.matched.map((s) => {
      s.meta.title && o.push({ path: s.path, title: s.meta.title });
    });
    const a = {
      title: n.default.title ? n.default.title : null,
      breadcrumbs: o || []
    };
    return Hr.value = a, a;
  };
  return Z(() => e.path, async () => {
    await t();
  }), {
    getOptions: t,
    options: Hr
  };
}
function er(e, t, r, n) {
  return Object.defineProperty(e, t, {
    get: r,
    set: n,
    enumerable: !0
  }), e;
}
function lt(e) {
  return fo(po(e));
}
const qh = {
  hasPassive: !1,
  passiveCapture: !0,
  notPassiveCapture: !0
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(qh, {
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
function Kr(e) {
  e.stopPropagation();
}
function $e(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function At(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
let Rt = [], Uh = [];
function tr(e) {
  Uh.length === 0 ? e() : Rt.push(e);
}
function Vh(e) {
  Rt = Rt.filter((t) => t !== e);
}
function pe(e, t) {
  return e !== void 0 && e() || t;
}
function ke(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function zh(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
const Hh = lt({
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
    const n = le(), o = W(null);
    let a = 0;
    const s = [];
    function i(b) {
      const p = typeof b == "boolean" ? b : e.noErrorFocus !== !0, y = ++a, x = (S, B) => {
        r(`validation${S === !0 ? "Success" : "Error"}`, B);
      }, C = (S) => {
        const B = S.validate();
        return typeof B.then == "function" ? B.then(
          (L) => ({ valid: L, comp: S }),
          (L) => ({ valid: !1, comp: S, err: L })
        ) : Promise.resolve({ valid: B, comp: S });
      };
      return (e.greedy === !0 ? Promise.all(s.map(C)).then((S) => S.filter((B) => B.valid !== !0)) : s.reduce(
        (S, B) => S.then(() => C(B).then((L) => {
          if (L.valid === !1)
            return Promise.reject(L);
        })),
        Promise.resolve()
      ).catch((S) => [S])).then((S) => {
        if (S === void 0 || S.length === 0)
          return y === a && x(!0), !0;
        if (y === a) {
          const { comp: B, err: L } = S[0];
          if (L !== void 0 && console.error(L), x(!1, B), p === !0) {
            const A = S.find(({ comp: R }) => typeof R.focus == "function" && zh(R.$) === !1);
            A !== void 0 && A.comp.focus();
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
      b !== void 0 && At(b);
      const p = a + 1;
      i().then((y) => {
        p === a && y === !0 && (e.onSubmit !== void 0 ? r("submit", b) : b !== void 0 && b.target !== void 0 && typeof b.target.submit == "function" && b.target.submit());
      });
    }
    function l(b) {
      b !== void 0 && At(b), r("reset"), ie(() => {
        f(), e.autofocus === !0 && e.noResetFocus !== !0 && d();
      });
    }
    function d() {
      tr(() => {
        if (o.value === null)
          return;
        const b = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (p) => p.tabIndex !== -1);
        b != null && b.focus({ preventScroll: !0 });
      });
    }
    ho(ao, {
      bindComponent(b) {
        s.push(b);
      },
      unbindComponent(b) {
        const p = s.indexOf(b);
        p !== -1 && s.splice(p, 1);
      }
    });
    let E = !1;
    return cn(() => {
      E = !0;
    }), fn(() => {
      E === !0 && e.autofocus === !0 && d();
    }), he(() => {
      e.autofocus === !0 && d();
    }), Object.assign(n.proxy, {
      validate: i,
      resetValidation: f,
      submit: c,
      reset: l,
      focus: d,
      getValidationComponents: () => s
    }), () => T("form", {
      class: "q-form",
      ref: o,
      onSubmit: c,
      onReset: l
    }, pe(t.default));
  }
}), rr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, Kh = {}, Gh = { class: "tw-grid tw-gap-y-4" };
function Wh(e, t) {
  return We(), Mt(Hh, mo(vo(e.$attrs)), {
    default: go(() => [
      ne("div", Gh, [
        bo(e.$slots, "default")
      ])
    ]),
    _: 3
  }, 16);
}
const Jh = /* @__PURE__ */ rr(Kh, [["render", Wh]]), kt = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, Zh = {
  size: String
};
function Qh(e, t = kt) {
  return O(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
const Gr = "0 0 24 24", Wr = (e) => e, ht = (e) => `ionicons ${e}`, so = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": Wr,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": ht,
  "ion-ios": ht,
  "ion-logo": ht,
  "iconfont ": Wr,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`
}, io = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, lo = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, Xh = new RegExp("^(" + Object.keys(so).join("|") + ")"), Yh = new RegExp("^(" + Object.keys(io).join("|") + ")"), Jr = new RegExp("^(" + Object.keys(lo).join("|") + ")"), em = /^[Mm]\s?[-+]?\.?\d/, tm = /^img:/, rm = /^svguse:/, nm = /^ion-/, om = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, Zr = lt({
  name: "QIcon",
  props: {
    ...Zh,
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
    const { proxy: { $q: r } } = le(), n = Qh(e), o = O(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), a = O(() => {
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
      if (em.test(i) === !0) {
        const [l, d = Gr] = i.split("|");
        return {
          svg: !0,
          viewBox: d,
          nodes: l.split("&&").map((E) => {
            const [b, p, y] = E.split("@@");
            return T("path", { style: p, d: b, transform: y });
          })
        };
      }
      if (tm.test(i) === !0)
        return {
          img: !0,
          src: i.substring(4)
        };
      if (rm.test(i) === !0) {
        const [l, d = Gr] = i.split("|");
        return {
          svguse: !0,
          src: l.substring(7),
          viewBox: d
        };
      }
      let f = " ";
      const c = i.match(Xh);
      if (c !== null)
        s = so[c[1]](i);
      else if (om.test(i) === !0)
        s = i;
      else if (nm.test(i) === !0)
        s = `ionicons ion-${r.platform.is.ios === !0 ? "ios" : "md"}${i.substring(3)}`;
      else if (Jr.test(i) === !0) {
        s = "notranslate material-symbols";
        const l = i.match(Jr);
        l !== null && (i = i.substring(6), s += lo[l[1]]), f = i;
      } else {
        s = "notranslate material-icons";
        const l = i.match(Yh);
        l !== null && (i = i.substring(2), s += io[l[1]]), f = i;
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
      return a.value.none === !0 ? T(e.tag, s, pe(t.default)) : a.value.img === !0 ? T(e.tag, s, ke(t.default, [
        T("img", { src: a.value.src })
      ])) : a.value.svg === !0 ? T(e.tag, s, ke(t.default, [
        T("svg", {
          viewBox: a.value.viewBox || "0 0 24 24"
        }, a.value.nodes)
      ])) : a.value.svguse === !0 ? T(e.tag, s, ke(t.default, [
        T("svg", {
          viewBox: a.value.viewBox
        }, [
          T("use", { "xlink:href": a.value.src })
        ])
      ])) : (a.value.cls !== void 0 && (s.class += " " + a.value.cls), T(e.tag, s, ke(t.default, [
        a.value.content
      ])));
    };
  }
}), am = {
  size: {
    type: [String, Number],
    default: "1em"
  },
  color: String
};
function sm(e) {
  return {
    cSize: O(() => e.size in kt ? `${kt[e.size]}px` : e.size),
    classes: O(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
const im = lt({
  name: "QSpinner",
  props: {
    ...am,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: r } = sm(e);
    return () => T("svg", {
      class: r.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      T("circle", {
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
let mt, je = 0;
const J = new Array(256);
for (let e = 0; e < 256; e++)
  J[e] = (e + 256).toString(16).substring(1);
const lm = (() => {
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
})(), Qr = 4096;
function jt() {
  (mt === void 0 || je + 16 > Qr) && (je = 0, mt = lm(Qr));
  const e = Array.prototype.slice.call(mt, je, je += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, J[e[0]] + J[e[1]] + J[e[2]] + J[e[3]] + "-" + J[e[4]] + J[e[5]] + "-" + J[e[6]] + J[e[7]] + "-" + J[e[8]] + J[e[9]] + "-" + J[e[10]] + J[e[11]] + J[e[12]] + J[e[13]] + J[e[14]] + J[e[15]];
}
const Ce = W(
  !1
);
let Pt;
function um(e, t) {
  const r = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: r[5] || r[3] || r[1] || "",
    version: r[4] || r[2] || "0",
    platform: t[0] || ""
  };
}
function cm(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
const uo = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function fm(e) {
  const t = e.toLowerCase(), r = cm(t), n = um(t, r), o = {};
  n.browser && (o[n.browser] = !0, o.version = n.version, o.versionNumber = parseInt(n.version, 10)), n.platform && (o[n.platform] = !0);
  const a = o.android || o.ios || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"];
  if (a === !0 || t.indexOf("mobile") !== -1 ? o.mobile = !0 : o.desktop = !0, o["windows phone"] && (o.winphone = !0, delete o["windows phone"]), o.edga || o.edgios || o.edg ? (o.edge = !0, n.browser = "edge") : o.crios ? (o.chrome = !0, n.browser = "chrome") : o.fxios && (o.firefox = !0, n.browser = "firefox"), (o.ipod || o.ipad || o.iphone) && (o.ios = !0), o.vivaldi && (n.browser = "vivaldi", o.vivaldi = !0), // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
  (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === !0 && o.ios !== !0 && a !== !0) && (o.webkit = !0), o.opr && (n.browser = "opera", o.opera = !0), o.safari && (o.blackberry || o.bb ? (n.browser = "blackberry", o.blackberry = !0) : o.playbook ? (n.browser = "playbook", o.playbook = !0) : o.android ? (n.browser = "android", o.android = !0) : o.kindle ? (n.browser = "kindle", o.kindle = !0) : o.silk && (n.browser = "silk", o.silk = !0)), o.name = n.browser, o.platform = n.platform, t.indexOf("electron") !== -1)
    o.electron = !0;
  else if (document.location.href.indexOf("-extension://") !== -1)
    o.bex = !0;
  else {
    if (window.Capacitor !== void 0 ? (o.capacitor = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "cordova"), Ce.value === !0 && (Pt = { is: { ...o } }), uo === !0 && o.mac === !0 && (o.desktop === !0 && o.safari === !0 || o.nativeMobile === !0 && o.android !== !0 && o.ios !== !0 && o.ipad !== !0)) {
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
const Xr = navigator.userAgent || navigator.vendor || window.opera, dm = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, He = {
  userAgent: Xr,
  is: fm(Xr),
  has: {
    touch: uo
  },
  within: {
    iframe: window.self !== window.top
  }
}, Yr = {
  install(e) {
    const { $q: t } = e;
    Ce.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, He), Ce.value = !1;
    }), t.platform = un(this)) : t.platform = this;
  }
};
{
  let e;
  er(He.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), Object.assign(Yr, He), Ce.value === !0 && (Object.assign(Yr, Pt, dm), Pt = null);
}
function pm(e) {
  return e ?? null;
}
function en(e, t) {
  return e ?? (t === !0 ? `f_${jt()}` : null);
}
function hm({ getValue: e, required: t = !0 } = {}) {
  if (Ce.value === !0) {
    const r = e !== void 0 ? W(pm(e())) : W(null);
    return t === !0 && r.value === null && he(() => {
      r.value = `f_${jt()}`;
    }), e !== void 0 && Z(e, (n) => {
      r.value = en(n, t);
    }), r;
  }
  return e !== void 0 ? O(() => en(e(), t)) : W(`f_${jt()}`);
}
const tn = /^on[A-Z]/;
function mm() {
  const { attrs: e, vnode: t } = le(), r = {
    listeners: W({}),
    attributes: W({})
  };
  function n() {
    const o = {}, a = {};
    for (const s in e)
      s !== "class" && s !== "style" && tn.test(s) === !1 && (o[s] = e[s]);
    for (const s in t.props)
      tn.test(s) === !0 && (a[s] = t.props[s]);
    r.attributes.value = o, r.listeners.value = a;
  }
  return yo(n), n(), r;
}
const vm = {
  dark: {
    type: Boolean,
    default: null
  }
};
function gm(e, t) {
  return O(() => e.dark === null ? t.dark.isActive : e.dark);
}
function bm({ validate: e, resetValidation: t, requiresQForm: r }) {
  const n = Ge(ao, !1);
  if (n !== !1) {
    const { props: o, proxy: a } = le();
    Object.assign(a, { validate: e, resetValidation: t }), Z(() => o.disable, (s) => {
      s === !0 ? (typeof t == "function" && t(), n.unbindComponent(a)) : n.bindComponent(a);
    }), he(() => {
      o.disable !== !0 && n.bindComponent(a);
    }), Je(() => {
      o.disable !== !0 && n.unbindComponent(a);
    });
  } else
    r === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const rn = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, nn = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, on = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Pe = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Fe = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, vt = {
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
  hexColor: (e) => rn.test(e),
  hexaColor: (e) => nn.test(e),
  hexOrHexaColor: (e) => on.test(e),
  rgbColor: (e) => Pe.test(e),
  rgbaColor: (e) => Fe.test(e),
  rgbOrRgbaColor: (e) => Pe.test(e) || Fe.test(e),
  hexOrRgbColor: (e) => rn.test(e) || Pe.test(e),
  hexaOrRgbaColor: (e) => nn.test(e) || Fe.test(e),
  anyColor: (e) => on.test(e) || Pe.test(e) || Fe.test(e)
};
function ym(e, t = 250, r) {
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
const wm = [!0, !1, "ondemand"], _m = {
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
    validator: (e) => wm.includes(e)
  }
};
function Sm(e, t) {
  const { props: r, proxy: n } = le(), o = W(!1), a = W(null), s = W(!1);
  bm({ validate: y, resetValidation: p });
  let i = 0, f;
  const c = O(
    () => r.rules !== void 0 && r.rules !== null && r.rules.length !== 0
  ), l = O(() => r.disable !== !0 && c.value === !0 && t.value === !1), d = O(
    () => r.error === !0 || o.value === !0
  ), E = O(() => typeof r.errorMessage == "string" && r.errorMessage.length !== 0 ? r.errorMessage : a.value);
  Z(() => r.modelValue, () => {
    s.value = !0, l.value === !0 && r.lazyRules === !1 && x();
  });
  function b() {
    r.lazyRules !== "ondemand" && l.value === !0 && s.value === !0 && x();
  }
  Z(() => r.reactiveRules, (C) => {
    C === !0 ? f === void 0 && (f = Z(() => r.rules, b, { immediate: !0, deep: !0 })) : f !== void 0 && (f(), f = void 0);
  }, { immediate: !0 }), Z(() => r.lazyRules, b), Z(e, (C) => {
    C === !0 ? s.value = !0 : l.value === !0 && r.lazyRules !== "ondemand" && x();
  });
  function p() {
    i++, t.value = !1, s.value = !1, o.value = !1, a.value = null, x.cancel();
  }
  function y(C = r.modelValue) {
    if (r.disable === !0 || c.value === !1)
      return !0;
    const M = ++i, S = t.value !== !0 ? () => {
      s.value = !0;
    } : () => {
    }, B = (A, R) => {
      A === !0 && S(), o.value = A, a.value = R || null, t.value = !1;
    }, L = [];
    for (let A = 0; A < r.rules.length; A++) {
      const R = r.rules[A];
      let H;
      if (typeof R == "function" ? H = R(C, vt) : typeof R == "string" && vt[R] !== void 0 && (H = vt[R](C)), H === !1 || typeof H == "string")
        return B(!0, H), !1;
      H !== !0 && H !== void 0 && L.push(H);
    }
    return L.length === 0 ? (B(!1), !0) : (t.value = !0, Promise.all(L).then(
      (A) => {
        if (A === void 0 || Array.isArray(A) === !1 || A.length === 0)
          return M === i && B(!1), !0;
        const R = A.find((H) => H === !1 || typeof H == "string");
        return M === i && B(R !== void 0, R), R === void 0;
      },
      (A) => (M === i && (console.error(A), B(!0)), !1)
    ));
  }
  const x = ym(y, 0);
  return Je(() => {
    f !== void 0 && f(), x.cancel();
  }), Object.assign(n, { resetValidation: p, validate: y }), er(n, "hasError", () => d.value), {
    isDirtyModel: s,
    hasRules: c,
    hasError: d,
    errorMessage: E,
    validate: y,
    resetValidation: p
  };
}
function Ft(e) {
  return e != null && ("" + e).length !== 0;
}
const xm = {
  ...vm,
  ..._m,
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
}, $m = {
  ...xm,
  maxlength: [Number, String]
}, Em = ["update:modelValue", "clear", "focus", "blur"];
function Cm({ requiredForAttr: e = !0, tagProp: t, changeEvent: r = !1 } = {}) {
  const { props: n, proxy: o } = le(), a = gm(n, o.$q), s = hm({
    required: e,
    getValue: () => n.for
  });
  return {
    requiredForAttr: e,
    changeEvent: r,
    tag: t === !0 ? O(() => n.tag) : { value: "label" },
    isDark: a,
    editable: O(
      () => n.disable !== !0 && n.readonly !== !0
    ),
    innerLoading: W(!1),
    focused: W(!1),
    hasPopupOpen: !1,
    splitAttrs: mm(),
    targetUid: s,
    rootRef: W(null),
    targetRef: W(null),
    controlRef: W(null)
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
function Tm(e) {
  const { props: t, emit: r, slots: n, attrs: o, proxy: a } = le(), { $q: s } = a;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = O(() => Ft(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (w) => {
    r("update:modelValue", w);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: v,
    onFocusout: m
  }), Object.assign(e, {
    clearValue: _,
    onControlFocusin: v,
    onControlFocusout: m,
    focus: R
  }), e.computedCounter === void 0 && (e.computedCounter = O(() => {
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
    resetValidation: E
  } = Sm(e.focused, e.innerLoading), b = e.floatingLabel !== void 0 ? O(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : O(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), p = O(
    () => t.bottomSlots === !0 || t.hint !== void 0 || c.value === !0 || t.counter === !0 || t.error !== null
  ), y = O(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), x = O(
    () => `q-field row no-wrap items-start q-field--${y.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (b.value === !0 ? " q-field--float" : "") + (M.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (l.value === !0 ? " q-field--error" : "") + (l.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && p.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), C = O(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (l.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), M = O(
    () => t.labelSlot === !0 || t.label !== void 0
  ), S = O(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && l.value !== !0 ? ` text-${t.labelColor}` : "")
  ), B = O(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: b.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue
  })), L = O(() => {
    const w = {};
    return e.targetUid.value && (w.for = e.targetUid.value), t.disable === !0 && (w["aria-disabled"] = "true"), w;
  });
  function A() {
    const w = document.activeElement;
    let k = e.targetRef !== void 0 && e.targetRef.value;
    k && (w === null || w.id !== e.targetUid.value) && (k.hasAttribute("tabindex") === !0 || (k = k.querySelector("[tabindex]")), k && k !== w && k.focus({ preventScroll: !0 }));
  }
  function R() {
    tr(A);
  }
  function H() {
    Vh(A);
    const w = document.activeElement;
    w !== null && e.rootRef.value.contains(w) && w.blur();
  }
  function v(w) {
    i !== null && (clearTimeout(i), i = null), e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0, r("focus", w));
  }
  function m(w, k) {
    i !== null && clearTimeout(i), i = setTimeout(() => {
      i = null, !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1, r("blur", w)), k !== void 0 && k());
    });
  }
  function _(w) {
    At(w), s.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), r("update:modelValue", null), e.changeEvent === !0 && r("change", null), r("clear", t.modelValue), ie(() => {
      const k = f.value;
      E(), f.value = k;
    });
  }
  function g(w) {
    [13, 32].includes(w.keyCode) && _(w);
  }
  function F() {
    const w = [];
    return n.prepend !== void 0 && w.push(
      T("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: $e
      }, n.prepend())
    ), w.push(
      T("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, j())
    ), l.value === !0 && t.noErrorIcon === !1 && w.push(
      P("error", [
        T(Zr, { name: s.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? w.push(
      P(
        "inner-loading-append",
        n.loading !== void 0 ? n.loading() : [T(im, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && w.push(
      P("inner-clearable-append", [
        T(Zr, {
          class: "q-field__focusable-action",
          name: t.clearIcon || s.iconSet.field.clear,
          tabindex: 0,
          role: "button",
          "aria-label": s.lang.label.clear,
          onKeyup: g,
          onClick: _
        })
      ])
    ), n.append !== void 0 && w.push(
      T("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: $e
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
      T("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && w.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? w.push(e.getControl()) : n.rawControl !== void 0 ? w.push(n.rawControl()) : n.control !== void 0 && w.push(
      T("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, n.control(B.value))
    ), M.value === !0 && w.push(
      T("div", {
        class: S.value
      }, pe(n.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && w.push(
      T("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), w.concat(pe(n.default));
  }
  function U() {
    let w, k;
    l.value === !0 ? d.value !== null ? (w = [T("div", { role: "alert" }, d.value)], k = `q--slot-error-${d.value}`) : (w = pe(n.error), k = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (w = [T("div", t.hint)], k = `q--slot-hint-${t.hint}`) : (w = pe(n.hint), k = "q--slot-hint"));
    const I = t.counter === !0 || n.counter !== void 0;
    if (t.hideBottomSpace === !0 && I === !1 && w === void 0)
      return;
    const V = T("div", {
      key: k,
      class: "q-field__messages col"
    }, w);
    return T("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: $e
    }, [
      t.hideBottomSpace === !0 ? V : T(wo, { name: "q-transition--field-message" }, () => V),
      I === !0 ? T("div", {
        class: "q-field__counter"
      }, n.counter !== void 0 ? n.counter() : e.computedCounter.value) : null
    ]);
  }
  function P(w, k) {
    return k === null ? null : T("div", {
      key: w,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, k);
  }
  let N = !1;
  return cn(() => {
    N = !0;
  }), fn(() => {
    N === !0 && t.autofocus === !0 && a.focus();
  }), t.autofocus === !0 && he(() => {
    a.focus();
  }), Je(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(a, { focus: R, blur: H }), function() {
    const k = e.getControl === void 0 && n.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...L.value
    } : L.value;
    return T(e.tag.value, {
      ref: e.rootRef,
      class: [
        x.value,
        o.class
      ],
      style: o.style,
      ...k
    }, [
      n.before !== void 0 ? T("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: $e
      }, n.before()) : null,
      T("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        T("div", {
          ref: e.controlRef,
          class: C.value,
          tabindex: -1,
          ...e.controlEvents
        }, F()),
        p.value === !0 ? U() : null
      ]),
      n.after !== void 0 ? T("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: $e
      }, n.after()) : null
    ]);
  };
}
function Om(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
const an = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
}, Ke = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }
}, co = Object.keys(Ke);
co.forEach((e) => {
  Ke[e].regex = new RegExp(Ke[e].pattern);
});
const Am = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + co.join("") + "])|(.)", "g"), sn = /[.*+?^${}()|[\]\\]/g, K = String.fromCharCode(1), Rm = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function km(e, t, r, n) {
  let o, a, s, i, f, c;
  const l = W(null), d = W(b());
  function E() {
    return e.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  Z(() => e.type + e.autogrow, y), Z(() => e.mask, (v) => {
    if (v !== void 0)
      x(d.value, !0);
    else {
      const m = R(d.value);
      y(), e.modelValue !== m && t("update:modelValue", m);
    }
  }), Z(() => e.fillMask + e.reverseFillMask, () => {
    l.value === !0 && x(d.value, !0);
  }), Z(() => e.unmaskedValue, () => {
    l.value === !0 && x(d.value);
  });
  function b() {
    if (y(), l.value === !0) {
      const v = L(R(e.modelValue));
      return e.fillMask !== !1 ? H(v) : v;
    }
    return e.modelValue;
  }
  function p(v) {
    if (v < o.length)
      return o.slice(-v);
    let m = "", _ = o;
    const g = _.indexOf(K);
    if (g !== -1) {
      for (let F = v - _.length; F > 0; F--)
        m += K;
      _ = _.slice(0, g) + m + _.slice(g);
    }
    return _;
  }
  function y() {
    if (l.value = e.mask !== void 0 && e.mask.length !== 0 && E(), l.value === !1) {
      i = void 0, o = "", a = "";
      return;
    }
    const v = an[e.mask] === void 0 ? e.mask : an[e.mask], m = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", _ = m.replace(sn, "\\$&"), g = [], F = [], j = [];
    let U = e.reverseFillMask === !0, P = "", N = "";
    v.replace(Am, (V, h, z, ae, Y) => {
      if (ae !== void 0) {
        const Q = Ke[ae];
        j.push(Q), N = Q.negate, U === !0 && (F.push("(?:" + N + "+)?(" + Q.pattern + "+)?(?:" + N + "+)?(" + Q.pattern + "+)?"), U = !1), F.push("(?:" + N + "+)?(" + Q.pattern + ")?");
      } else if (z !== void 0)
        P = "\\" + (z === "\\" ? "" : z), j.push(z), g.push("([^" + P + "]+)?" + P + "?");
      else {
        const Q = h !== void 0 ? h : Y;
        P = Q === "\\" ? "\\\\\\\\" : Q.replace(sn, "\\\\$&"), j.push(Q), g.push("([^" + P + "]+)?" + P + "?");
      }
    });
    const w = new RegExp(
      "^" + g.join("") + "(" + (P === "" ? "." : "[^" + P + "]") + "+)?" + (P === "" ? "" : "[" + P + "]*") + "$"
    ), k = F.length - 1, I = F.map((V, h) => h === 0 && e.reverseFillMask === !0 ? new RegExp("^" + _ + "*" + V) : h === k ? new RegExp(
      "^" + V + "(" + (N === "" ? "." : N) + "+)?" + (e.reverseFillMask === !0 ? "$" : _ + "*")
    ) : new RegExp("^" + V));
    s = j, i = (V) => {
      const h = w.exec(e.reverseFillMask === !0 ? V : V.slice(0, j.length + 1));
      h !== null && (V = h.slice(1).join(""));
      const z = [], ae = I.length;
      for (let Y = 0, Q = V; Y < ae; Y++) {
        const de = I[Y].exec(Q);
        if (de === null)
          break;
        Q = Q.slice(de.shift().length), z.push(...de);
      }
      return z.length !== 0 ? z.join("") : V;
    }, o = j.map((V) => typeof V == "string" ? V : K).join(""), a = o.split(K).join(m);
  }
  function x(v, m, _) {
    const g = n.value, F = g.selectionEnd, j = g.value.length - F, U = R(v);
    m === !0 && y();
    const P = L(U), N = e.fillMask !== !1 ? H(P) : P, w = d.value !== N;
    g.value !== N && (g.value = N), w === !0 && (d.value = N), document.activeElement === g && ie(() => {
      if (N === a) {
        const I = e.reverseFillMask === !0 ? a.length : 0;
        g.setSelectionRange(I, I, "forward");
        return;
      }
      if (_ === "insertFromPaste" && e.reverseFillMask !== !0) {
        const I = g.selectionEnd;
        let V = F - 1;
        for (let h = f; h <= V && h < I; h++)
          o[h] !== K && V++;
        M.right(g, V);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(_) !== -1) {
        const I = e.reverseFillMask === !0 ? F === 0 ? N.length > P.length ? 1 : 0 : Math.max(0, N.length - (N === a ? 0 : Math.min(P.length, j) + 1)) + 1 : F;
        g.setSelectionRange(I, I, "forward");
        return;
      }
      if (e.reverseFillMask === !0)
        if (w === !0) {
          const I = Math.max(0, N.length - (N === a ? 0 : Math.min(P.length, j + 1)));
          I === 1 && F === 1 ? g.setSelectionRange(I, I, "forward") : M.rightReverse(g, I);
        } else {
          const I = N.length - j;
          g.setSelectionRange(I, I, "backward");
        }
      else if (w === !0) {
        const I = Math.max(0, o.indexOf(K), Math.min(P.length, F) - 1);
        M.right(g, I);
      } else {
        const I = F - 1;
        M.right(g, I);
      }
    });
    const k = e.unmaskedValue === !0 ? R(N) : N;
    String(e.modelValue) !== k && (e.modelValue !== null || k !== "") && r(k, !0);
  }
  function C(v, m, _) {
    const g = L(R(v.value));
    m = Math.max(0, o.indexOf(K), Math.min(g.length, m)), f = m, v.setSelectionRange(m, _, "forward");
  }
  const M = {
    left(v, m) {
      const _ = o.slice(m - 1).indexOf(K) === -1;
      let g = Math.max(0, m - 1);
      for (; g >= 0; g--)
        if (o[g] === K) {
          m = g, _ === !0 && m++;
          break;
        }
      if (g < 0 && o[m] !== void 0 && o[m] !== K)
        return M.right(v, 0);
      m >= 0 && v.setSelectionRange(m, m, "backward");
    },
    right(v, m) {
      const _ = v.value.length;
      let g = Math.min(_, m + 1);
      for (; g <= _; g++)
        if (o[g] === K) {
          m = g;
          break;
        } else
          o[g - 1] === K && (m = g);
      if (g > _ && o[m - 1] !== void 0 && o[m - 1] !== K)
        return M.left(v, _);
      v.setSelectionRange(m, m, "forward");
    },
    leftReverse(v, m) {
      const _ = p(v.value.length);
      let g = Math.max(0, m - 1);
      for (; g >= 0; g--)
        if (_[g - 1] === K) {
          m = g;
          break;
        } else if (_[g] === K && (m = g, g === 0))
          break;
      if (g < 0 && _[m] !== void 0 && _[m] !== K)
        return M.rightReverse(v, 0);
      m >= 0 && v.setSelectionRange(m, m, "backward");
    },
    rightReverse(v, m) {
      const _ = v.value.length, g = p(_), F = g.slice(0, m + 1).indexOf(K) === -1;
      let j = Math.min(_, m + 1);
      for (; j <= _; j++)
        if (g[j - 1] === K) {
          m = j, m > 0 && F === !0 && m--;
          break;
        }
      if (j > _ && g[m - 1] !== void 0 && g[m - 1] !== K)
        return M.leftReverse(v, _);
      v.setSelectionRange(m, m, "forward");
    }
  };
  function S(v) {
    t("click", v), c = void 0;
  }
  function B(v) {
    if (t("keydown", v), Om(v) === !0 || v.altKey === !0)
      return;
    const m = n.value, _ = m.selectionStart, g = m.selectionEnd;
    if (v.shiftKey || (c = void 0), v.keyCode === 37 || v.keyCode === 39) {
      v.shiftKey && c === void 0 && (c = m.selectionDirection === "forward" ? _ : g);
      const F = M[(v.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === !0 ? "Reverse" : "")];
      if (v.preventDefault(), F(m, c === _ ? g : _), v.shiftKey) {
        const j = m.selectionStart;
        m.setSelectionRange(Math.min(c, j), Math.max(c, j), "forward");
      }
    } else
      v.keyCode === 8 && e.reverseFillMask !== !0 && _ === g ? (M.left(m, _), m.setSelectionRange(m.selectionStart, g, "backward")) : v.keyCode === 46 && e.reverseFillMask === !0 && _ === g && (M.rightReverse(m, g), m.setSelectionRange(_, m.selectionEnd, "forward"));
  }
  function L(v) {
    if (v == null || v === "")
      return "";
    if (e.reverseFillMask === !0)
      return A(v);
    const m = s;
    let _ = 0, g = "";
    for (let F = 0; F < m.length; F++) {
      const j = v[_], U = m[F];
      if (typeof U == "string")
        g += U, j === U && _++;
      else if (j !== void 0 && U.regex.test(j))
        g += U.transform !== void 0 ? U.transform(j) : j, _++;
      else
        return g;
    }
    return g;
  }
  function A(v) {
    const m = s, _ = o.indexOf(K);
    let g = v.length - 1, F = "";
    for (let j = m.length - 1; j >= 0 && g !== -1; j--) {
      const U = m[j];
      let P = v[g];
      if (typeof U == "string")
        F = U + F, P === U && g--;
      else if (P !== void 0 && U.regex.test(P))
        do
          F = (U.transform !== void 0 ? U.transform(P) : P) + F, g--, P = v[g];
        while (_ === j && P !== void 0 && U.regex.test(P));
      else
        return F;
    }
    return F;
  }
  function R(v) {
    return typeof v != "string" || i === void 0 ? typeof v == "number" ? i("" + v) : v : i(v);
  }
  function H(v) {
    return a.length - v.length <= 0 ? v : e.reverseFillMask === !0 && v.length !== 0 ? a.slice(0, -v.length) + v : v + a.slice(v.length);
  }
  return {
    innerValue: d,
    hasMask: l,
    moveCursorForPaste: C,
    updateMaskValue: x,
    onMaskedKeydown: B,
    onMaskedClick: S
  };
}
const jm = {
  name: String
};
function Pm(e) {
  return O(() => e.name || e.for);
}
function Fm(e, t) {
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
  return t === !0 ? O(() => {
    if (e.type === "file")
      return r();
  }) : O(r);
}
const Mm = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, Bm = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, Nm = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, Im = /[a-z0-9_ -]$/i;
function Dm(e) {
  return function(r) {
    if (r.type === "compositionend" || r.type === "change") {
      if (r.target.qComposing !== !0)
        return;
      r.target.qComposing = !1, e(r);
    } else
      r.type === "compositionupdate" && r.target.qComposing !== !0 && typeof r.data == "string" && (He.is.firefox === !0 ? Im.test(r.data) === !1 : Mm.test(r.data) === !0 || Bm.test(r.data) === !0 || Nm.test(r.data) === !0) === !0 && (r.target.qComposing = !0);
  };
}
const Lm = lt({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...$m,
    ...Rm,
    ...jm,
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
    ...Em,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(e, { emit: t, attrs: r }) {
    const { proxy: n } = le(), { $q: o } = n, a = {};
    let s = NaN, i, f, c = null, l;
    const d = W(null), E = Pm(e), {
      innerValue: b,
      hasMask: p,
      moveCursorForPaste: y,
      updateMaskValue: x,
      onMaskedKeydown: C,
      onMaskedClick: M
    } = km(e, t, P, d), S = Fm(
      e,
      /* type guard */
      !0
    ), B = O(() => Ft(b.value)), L = Dm(j), A = Cm({ changeEvent: !0 }), R = O(
      () => e.type === "textarea" || e.autogrow === !0
    ), H = O(
      () => R.value === !0 || ["text", "search", "url", "tel", "password"].includes(e.type)
    ), v = O(() => {
      const h = {
        ...A.splitAttrs.listeners.value,
        onInput: j,
        onPaste: F,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: w,
        onBlur: k,
        onFocus: Kr
      };
      return h.onCompositionstart = h.onCompositionupdate = h.onCompositionend = L, p.value === !0 && (h.onKeydown = C, h.onClick = M), e.autogrow === !0 && (h.onAnimationend = U), h;
    }), m = O(() => {
      const h = {
        tabindex: 0,
        "data-autofocus": e.autofocus === !0 || void 0,
        rows: e.type === "textarea" ? 6 : void 0,
        "aria-label": e.label,
        name: E.value,
        ...A.splitAttrs.attributes.value,
        id: A.targetUid.value,
        maxlength: e.maxlength,
        disabled: e.disable === !0,
        readonly: e.readonly === !0
      };
      return R.value === !1 && (h.type = e.type), e.autogrow === !0 && (h.rows = 1), h;
    });
    Z(() => e.type, () => {
      d.value && (d.value.value = e.modelValue);
    }), Z(() => e.modelValue, (h) => {
      if (p.value === !0) {
        if (f === !0 && (f = !1, String(h) === s))
          return;
        x(h);
      } else
        b.value !== h && (b.value = h, e.type === "number" && a.hasOwnProperty("value") === !0 && (i === !0 ? i = !1 : delete a.value));
      e.autogrow === !0 && ie(N);
    }), Z(() => e.autogrow, (h) => {
      h === !0 ? ie(N) : d.value !== null && r.rows > 0 && (d.value.style.height = "auto");
    }), Z(() => e.dense, () => {
      e.autogrow === !0 && ie(N);
    });
    function _() {
      tr(() => {
        const h = document.activeElement;
        d.value !== null && d.value !== h && (h === null || h.id !== A.targetUid.value) && d.value.focus({ preventScroll: !0 });
      });
    }
    function g() {
      d.value !== null && d.value.select();
    }
    function F(h) {
      if (p.value === !0 && e.reverseFillMask !== !0) {
        const z = h.target;
        y(z, z.selectionStart, z.selectionEnd);
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
      const z = h.target.value;
      if (h.target.qComposing === !0) {
        a.value = z;
        return;
      }
      if (p.value === !0)
        x(z, !1, h.inputType);
      else if (P(z), H.value === !0 && h.target === document.activeElement) {
        const { selectionStart: ae, selectionEnd: Y } = h.target;
        ae !== void 0 && Y !== void 0 && ie(() => {
          h.target === document.activeElement && z.indexOf(h.target.value) === 0 && h.target.setSelectionRange(ae, Y);
        });
      }
      e.autogrow === !0 && N();
    }
    function U(h) {
      t("animationend", h), N();
    }
    function P(h, z) {
      l = () => {
        c = null, e.type !== "number" && a.hasOwnProperty("value") === !0 && delete a.value, e.modelValue !== h && s !== h && (s = h, z === !0 && (f = !0), t("update:modelValue", h), ie(() => {
          s === h && (s = NaN);
        })), l = void 0;
      }, e.type === "number" && (i = !0, a.value = h), e.debounce !== void 0 ? (c !== null && clearTimeout(c), a.value = h, c = setTimeout(l, e.debounce)) : l();
    }
    function N() {
      requestAnimationFrame(() => {
        const h = d.value;
        if (h !== null) {
          const z = h.parentNode.style, { scrollTop: ae } = h, { overflowY: Y, maxHeight: Q } = o.platform.is.firefox === !0 ? {} : window.getComputedStyle(h), de = Y !== void 0 && Y !== "scroll";
          de === !0 && (h.style.overflowY = "hidden"), z.marginBottom = h.scrollHeight - 1 + "px", h.style.height = "1px", h.style.height = h.scrollHeight + "px", de === !0 && (h.style.overflowY = parseInt(Q, 10) < h.scrollHeight ? "auto" : "hidden"), z.marginBottom = "", h.scrollTop = ae;
        }
      });
    }
    function w(h) {
      L(h), c !== null && (clearTimeout(c), c = null), l !== void 0 && l(), t("change", h.target.value);
    }
    function k(h) {
      h !== void 0 && Kr(h), c !== null && (clearTimeout(c), c = null), l !== void 0 && l(), i = !1, f = !1, delete a.value, e.type !== "file" && setTimeout(() => {
        d.value !== null && (d.value.value = b.value !== void 0 ? b.value : "");
      });
    }
    function I() {
      return a.hasOwnProperty("value") === !0 ? a.value : b.value !== void 0 ? b.value : "";
    }
    Je(() => {
      k();
    }), he(() => {
      e.autogrow === !0 && N();
    }), Object.assign(A, {
      innerValue: b,
      fieldClass: O(
        () => `q-${R.value === !0 ? "textarea" : "input"}` + (e.autogrow === !0 ? " q-textarea--autogrow" : "")
      ),
      hasShadow: O(
        () => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0
      ),
      inputRef: d,
      emitValue: P,
      hasValue: B,
      floatingLabel: O(
        () => B.value === !0 && (e.type !== "number" || isNaN(b.value) === !1) || Ft(e.displayValue)
      ),
      getControl: () => T(R.value === !0 ? "textarea" : "input", {
        ref: d,
        class: [
          "q-field__native q-placeholder",
          e.inputClass
        ],
        style: e.inputStyle,
        ...m.value,
        ...v.value,
        ...e.type !== "file" ? { value: I() } : S.value
      }),
      getShadowControl: () => T("div", {
        class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (R.value === !0 ? "" : " text-no-wrap")
      }, [
        T("span", { class: "invisible" }, I()),
        T("span", e.shadowText)
      ])
    });
    const V = Tm(A);
    return Object.assign(n, {
      focus: _,
      select: g,
      getNativeElement: () => d.value
      // deprecated
    }), er(n, "nativeEl", () => d.value), V;
  }
}), qm = {
  __name: "Text",
  props: {
    error: [Boolean, String, Array]
  },
  setup(e) {
    const t = e, r = O(() => !!t.error), n = O(() => t.error ? typeof t.error == "string" ? t.error : t.error[0] : null);
    return (o, a) => (We(), Mt(Lm, dn(o.$attrs, {
      outlined: "",
      error: r.value,
      "error-message": n.value
    }), null, 16, ["error", "error-message"]));
  }
}, Um = {};
function Vm(e, t) {
  const r = pn("usoft-field-text");
  return We(), Mt(r, dn(e.$attrs, { type: "password" }), null, 16);
}
const zm = /* @__PURE__ */ rr(Um, [["render", Vm]]), Hm = {}, Km = { class: "admin__app tw-px-5 sm:twpx-8 tw-py-5" }, Gm = { class: "tw-flex" }, Wm = /* @__PURE__ */ ne("div", { class: "tw-w-64" }, null, -1), Jm = { class: "md:tw-max-w-auto tw-min-w-0 tw-max-w-full tw-flex-1 tw-rounded-[30px] tw-bg-slate-100 tw-px-4 before:tw-block before:tw-h-px before:tw-w-full before:tw-content-[''] dark:tw-bg-darkmode-700 md:tw-px-[22px]" }, Zm = /* @__PURE__ */ ne("div", { class: "tw-relative tw-z-[51] tw-flex tw-h-[67px] tw-items-center tw-border-b tw-border-slate-200" }, [
  /* @__PURE__ */ ne("div", { class: "tw-flex-1" }, " ??? "),
  /* @__PURE__ */ ne("div")
], -1), Qm = { class: "admin__app__content tw-mt-8" }, Xm = /* @__PURE__ */ ne("h2", { class: "intro-y tw-mt-0 tw-text-lg tw-font-medium" }, " ??? ", -1), Ym = { class: "tw-mt-5" };
function ev(e, t) {
  const r = pn("router-view");
  return We(), _o("main", Km, [
    ne("div", Gm, [
      Wm,
      ne("div", Jm, [
        Zm,
        ne("div", Qm, [
          Xm,
          ne("div", Ym, [
            So(r)
          ])
        ])
      ])
    ])
  ]);
}
const tv = /* @__PURE__ */ rr(Hm, [["render", ev]]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AdminLayout: tv,
  UsoftFieldPassword: zm,
  UsoftFieldText: qm,
  UsoftForm: Jh
}, Symbol.toStringTag, { value: "Module" }));
const rv = (e) => {
  Object.keys(ln).forEach((t) => {
    const r = ln[t];
    e.component(r.name, r);
  });
}, sv = { install: rv };
export {
  tv as AdminLayout,
  zm as UsoftFieldPassword,
  qm as UsoftFieldText,
  Jh as UsoftForm,
  sv as default,
  ov as useForm,
  av as useLayout
};
