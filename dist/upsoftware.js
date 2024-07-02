import { markRaw as uo, defineComponent as co, getCurrentInstance as ie, ref as W, provide as fo, onDeactivated as sn, onActivated as ln, onMounted as pe, h as T, nextTick as se, openBlock as Pt, createBlock as Ft, normalizeProps as po, guardReactiveProps as ho, withCtx as mo, createElementVNode as go, renderSlot as vo, computed as O, reactive as un, watch as Z, onBeforeUpdate as bo, inject as Ke, onBeforeUnmount as Ge, Transition as yo, mergeProps as cn, resolveComponent as wo } from "vue";
function Mt(e, t, r, n) {
  return Object.defineProperty(e, t, {
    get: r,
    set: n,
    enumerable: !0
  }), e;
}
function We(e) {
  return uo(co(e));
}
const _o = {
  hasPassive: !1,
  passiveCapture: !0,
  notPassiveCapture: !0
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(_o, {
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
function tr(e) {
  e.stopPropagation();
}
function _e(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function mt(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
let gt = [], So = [];
function Bt(e) {
  So.length === 0 ? e() : gt.push(e);
}
function $o(e) {
  gt = gt.filter((t) => t !== e);
}
function de(e, t) {
  return e !== void 0 && e() || t;
}
function Ae(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
const xo = "_q_", fn = "_q_fo_";
function Eo(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
const Co = We({
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
    const n = ie(), o = W(null);
    let a = 0;
    const s = [];
    function i(b) {
      const p = typeof b == "boolean" ? b : e.noErrorFocus !== !0, y = ++a, $ = (S, B) => {
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
          return y === a && $(!0), !0;
        if (y === a) {
          const { comp: B, err: L } = S[0];
          if (L !== void 0 && console.error(L), $(!1, B), p === !0) {
            const A = S.find(({ comp: R }) => typeof R.focus == "function" && Eo(R.$) === !1);
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
      b !== void 0 && mt(b);
      const p = a + 1;
      i().then((y) => {
        p === a && y === !0 && (e.onSubmit !== void 0 ? r("submit", b) : b !== void 0 && b.target !== void 0 && typeof b.target.submit == "function" && b.target.submit());
      });
    }
    function l(b) {
      b !== void 0 && mt(b), r("reset"), se(() => {
        f(), e.autofocus === !0 && e.noResetFocus !== !0 && d();
      });
    }
    function d() {
      Bt(() => {
        if (o.value === null)
          return;
        const b = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (p) => p.tabIndex !== -1);
        b != null && b.focus({ preventScroll: !0 });
      });
    }
    fo(fn, {
      bindComponent(b) {
        s.push(b);
      },
      unbindComponent(b) {
        const p = s.indexOf(b);
        p !== -1 && s.splice(p, 1);
      }
    });
    let E = !1;
    return sn(() => {
      E = !0;
    }), ln(() => {
      E === !0 && e.autofocus === !0 && d();
    }), pe(() => {
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
    }, de(t.default));
  }
}), dn = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
}, To = {}, Oo = { class: "tw-grid tw-gap-y-4" };
function Ao(e, t) {
  return Pt(), Ft(Co, po(ho(e.$attrs)), {
    default: mo(() => [
      go("div", Oo, [
        vo(e.$slots, "default")
      ])
    ]),
    _: 3
  }, 16);
}
const Ro = /* @__PURE__ */ dn(To, [["render", Ao]]), vt = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, ko = {
  size: String
};
function jo(e, t = vt) {
  return O(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
const rr = "0 0 24 24", nr = (e) => e, it = (e) => `ionicons ${e}`, pn = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": nr,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": it,
  "ion-ios": it,
  "ion-logo": it,
  "iconfont ": nr,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`
}, hn = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, mn = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, Po = new RegExp("^(" + Object.keys(pn).join("|") + ")"), Fo = new RegExp("^(" + Object.keys(hn).join("|") + ")"), or = new RegExp("^(" + Object.keys(mn).join("|") + ")"), Mo = /^[Mm]\s?[-+]?\.?\d/, Bo = /^img:/, No = /^svguse:/, Io = /^ion-/, Do = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, ar = We({
  name: "QIcon",
  props: {
    ...ko,
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
    const { proxy: { $q: r } } = ie(), n = jo(e), o = O(
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
      if (Mo.test(i) === !0) {
        const [l, d = rr] = i.split("|");
        return {
          svg: !0,
          viewBox: d,
          nodes: l.split("&&").map((E) => {
            const [b, p, y] = E.split("@@");
            return T("path", { style: p, d: b, transform: y });
          })
        };
      }
      if (Bo.test(i) === !0)
        return {
          img: !0,
          src: i.substring(4)
        };
      if (No.test(i) === !0) {
        const [l, d = rr] = i.split("|");
        return {
          svguse: !0,
          src: l.substring(7),
          viewBox: d
        };
      }
      let f = " ";
      const c = i.match(Po);
      if (c !== null)
        s = pn[c[1]](i);
      else if (Do.test(i) === !0)
        s = i;
      else if (Io.test(i) === !0)
        s = `ionicons ion-${r.platform.is.ios === !0 ? "ios" : "md"}${i.substring(3)}`;
      else if (or.test(i) === !0) {
        s = "notranslate material-symbols";
        const l = i.match(or);
        l !== null && (i = i.substring(6), s += mn[l[1]]), f = i;
      } else {
        s = "notranslate material-icons";
        const l = i.match(Fo);
        l !== null && (i = i.substring(2), s += hn[l[1]]), f = i;
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
      return a.value.none === !0 ? T(e.tag, s, de(t.default)) : a.value.img === !0 ? T(e.tag, s, Ae(t.default, [
        T("img", { src: a.value.src })
      ])) : a.value.svg === !0 ? T(e.tag, s, Ae(t.default, [
        T("svg", {
          viewBox: a.value.viewBox || "0 0 24 24"
        }, a.value.nodes)
      ])) : a.value.svguse === !0 ? T(e.tag, s, Ae(t.default, [
        T("svg", {
          viewBox: a.value.viewBox
        }, [
          T("use", { "xlink:href": a.value.src })
        ])
      ])) : (a.value.cls !== void 0 && (s.class += " " + a.value.cls), T(e.tag, s, Ae(t.default, [
        a.value.content
      ])));
    };
  }
}), Lo = {
  size: {
    type: [String, Number],
    default: "1em"
  },
  color: String
};
function qo(e) {
  return {
    cSize: O(() => e.size in vt ? `${vt[e.size]}px` : e.size),
    classes: O(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
const Uo = We({
  name: "QSpinner",
  props: {
    ...Lo,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: r } = qo(e);
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
let lt, Re = 0;
const J = new Array(256);
for (let e = 0; e < 256; e++)
  J[e] = (e + 256).toString(16).substring(1);
const Vo = (() => {
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
})(), sr = 4096;
function bt() {
  (lt === void 0 || Re + 16 > sr) && (Re = 0, lt = Vo(sr));
  const e = Array.prototype.slice.call(lt, Re, Re += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, J[e[0]] + J[e[1]] + J[e[2]] + J[e[3]] + "-" + J[e[4]] + J[e[5]] + "-" + J[e[6]] + J[e[7]] + "-" + J[e[8]] + J[e[9]] + "-" + J[e[10]] + J[e[11]] + J[e[12]] + J[e[13]] + J[e[14]] + J[e[15]];
}
const xe = W(
  !1
);
let yt;
function Ho(e, t) {
  const r = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: r[5] || r[3] || r[1] || "",
    version: r[4] || r[2] || "0",
    platform: t[0] || ""
  };
}
function zo(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
const gn = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Ko(e) {
  const t = e.toLowerCase(), r = zo(t), n = Ho(t, r), o = {};
  n.browser && (o[n.browser] = !0, o.version = n.version, o.versionNumber = parseInt(n.version, 10)), n.platform && (o[n.platform] = !0);
  const a = o.android || o.ios || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"];
  if (a === !0 || t.indexOf("mobile") !== -1 ? o.mobile = !0 : o.desktop = !0, o["windows phone"] && (o.winphone = !0, delete o["windows phone"]), o.edga || o.edgios || o.edg ? (o.edge = !0, n.browser = "edge") : o.crios ? (o.chrome = !0, n.browser = "chrome") : o.fxios && (o.firefox = !0, n.browser = "firefox"), (o.ipod || o.ipad || o.iphone) && (o.ios = !0), o.vivaldi && (n.browser = "vivaldi", o.vivaldi = !0), // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
  (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === !0 && o.ios !== !0 && a !== !0) && (o.webkit = !0), o.opr && (n.browser = "opera", o.opera = !0), o.safari && (o.blackberry || o.bb ? (n.browser = "blackberry", o.blackberry = !0) : o.playbook ? (n.browser = "playbook", o.playbook = !0) : o.android ? (n.browser = "android", o.android = !0) : o.kindle ? (n.browser = "kindle", o.kindle = !0) : o.silk && (n.browser = "silk", o.silk = !0)), o.name = n.browser, o.platform = n.platform, t.indexOf("electron") !== -1)
    o.electron = !0;
  else if (document.location.href.indexOf("-extension://") !== -1)
    o.bex = !0;
  else {
    if (window.Capacitor !== void 0 ? (o.capacitor = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "cordova"), xe.value === !0 && (yt = { is: { ...o } }), gn === !0 && o.mac === !0 && (o.desktop === !0 && o.safari === !0 || o.nativeMobile === !0 && o.android !== !0 && o.ios !== !0 && o.ipad !== !0)) {
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
const ir = navigator.userAgent || navigator.vendor || window.opera, Go = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, Ie = {
  userAgent: ir,
  is: Ko(ir),
  has: {
    touch: gn
  },
  within: {
    iframe: window.self !== window.top
  }
}, lr = {
  install(e) {
    const { $q: t } = e;
    xe.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, Ie), xe.value = !1;
    }), t.platform = un(this)) : t.platform = this;
  }
};
{
  let e;
  Mt(Ie.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), Object.assign(lr, Ie), xe.value === !0 && (Object.assign(lr, yt, Go), yt = null);
}
function Wo(e) {
  return e ?? null;
}
function ur(e, t) {
  return e ?? (t === !0 ? `f_${bt()}` : null);
}
function Jo({ getValue: e, required: t = !0 } = {}) {
  if (xe.value === !0) {
    const r = e !== void 0 ? W(Wo(e())) : W(null);
    return t === !0 && r.value === null && pe(() => {
      r.value = `f_${bt()}`;
    }), e !== void 0 && Z(e, (n) => {
      r.value = ur(n, t);
    }), r;
  }
  return e !== void 0 ? O(() => ur(e(), t)) : W(`f_${bt()}`);
}
const cr = /^on[A-Z]/;
function Zo() {
  const { attrs: e, vnode: t } = ie(), r = {
    listeners: W({}),
    attributes: W({})
  };
  function n() {
    const o = {}, a = {};
    for (const s in e)
      s !== "class" && s !== "style" && cr.test(s) === !1 && (o[s] = e[s]);
    for (const s in t.props)
      cr.test(s) === !0 && (a[s] = t.props[s]);
    r.attributes.value = o, r.listeners.value = a;
  }
  return bo(n), n(), r;
}
const Qo = {
  dark: {
    type: Boolean,
    default: null
  }
};
function Xo(e, t) {
  return O(() => e.dark === null ? t.dark.isActive : e.dark);
}
function Yo({ validate: e, resetValidation: t, requiresQForm: r }) {
  const n = Ke(fn, !1);
  if (n !== !1) {
    const { props: o, proxy: a } = ie();
    Object.assign(a, { validate: e, resetValidation: t }), Z(() => o.disable, (s) => {
      s === !0 ? (typeof t == "function" && t(), n.unbindComponent(a)) : n.bindComponent(a);
    }), pe(() => {
      o.disable !== !0 && n.bindComponent(a);
    }), Ge(() => {
      o.disable !== !0 && n.unbindComponent(a);
    });
  } else
    r === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const fr = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, dr = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, pr = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, ke = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, je = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, ut = {
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
  hexColor: (e) => fr.test(e),
  hexaColor: (e) => dr.test(e),
  hexOrHexaColor: (e) => pr.test(e),
  rgbColor: (e) => ke.test(e),
  rgbaColor: (e) => je.test(e),
  rgbOrRgbaColor: (e) => ke.test(e) || je.test(e),
  hexOrRgbColor: (e) => fr.test(e) || ke.test(e),
  hexaOrRgbaColor: (e) => dr.test(e) || je.test(e),
  anyColor: (e) => pr.test(e) || ke.test(e) || je.test(e)
};
function ea(e, t = 250, r) {
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
const ta = [!0, !1, "ondemand"], ra = {
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
    validator: (e) => ta.includes(e)
  }
};
function na(e, t) {
  const { props: r, proxy: n } = ie(), o = W(!1), a = W(null), s = W(!1);
  Yo({ validate: y, resetValidation: p });
  let i = 0, f;
  const c = O(
    () => r.rules !== void 0 && r.rules !== null && r.rules.length !== 0
  ), l = O(() => r.disable !== !0 && c.value === !0 && t.value === !1), d = O(
    () => r.error === !0 || o.value === !0
  ), E = O(() => typeof r.errorMessage == "string" && r.errorMessage.length !== 0 ? r.errorMessage : a.value);
  Z(() => r.modelValue, () => {
    s.value = !0, l.value === !0 && r.lazyRules === !1 && $();
  });
  function b() {
    r.lazyRules !== "ondemand" && l.value === !0 && s.value === !0 && $();
  }
  Z(() => r.reactiveRules, (C) => {
    C === !0 ? f === void 0 && (f = Z(() => r.rules, b, { immediate: !0, deep: !0 })) : f !== void 0 && (f(), f = void 0);
  }, { immediate: !0 }), Z(() => r.lazyRules, b), Z(e, (C) => {
    C === !0 ? s.value = !0 : l.value === !0 && r.lazyRules !== "ondemand" && $();
  });
  function p() {
    i++, t.value = !1, s.value = !1, o.value = !1, a.value = null, $.cancel();
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
      let z;
      if (typeof R == "function" ? z = R(C, ut) : typeof R == "string" && ut[R] !== void 0 && (z = ut[R](C)), z === !1 || typeof z == "string")
        return B(!0, z), !1;
      z !== !0 && z !== void 0 && L.push(z);
    }
    return L.length === 0 ? (B(!1), !0) : (t.value = !0, Promise.all(L).then(
      (A) => {
        if (A === void 0 || Array.isArray(A) === !1 || A.length === 0)
          return M === i && B(!1), !0;
        const R = A.find((z) => z === !1 || typeof z == "string");
        return M === i && B(R !== void 0, R), R === void 0;
      },
      (A) => (M === i && (console.error(A), B(!0)), !1)
    ));
  }
  const $ = ea(y, 0);
  return Ge(() => {
    f !== void 0 && f(), $.cancel();
  }), Object.assign(n, { resetValidation: p, validate: y }), Mt(n, "hasError", () => d.value), {
    isDirtyModel: s,
    hasRules: c,
    hasError: d,
    errorMessage: E,
    validate: y,
    resetValidation: p
  };
}
function wt(e) {
  return e != null && ("" + e).length !== 0;
}
const oa = {
  ...Qo,
  ...ra,
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
}, aa = {
  ...oa,
  maxlength: [Number, String]
}, sa = ["update:modelValue", "clear", "focus", "blur"];
function ia({ requiredForAttr: e = !0, tagProp: t, changeEvent: r = !1 } = {}) {
  const { props: n, proxy: o } = ie(), a = Xo(n, o.$q), s = Jo({
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
    splitAttrs: Zo(),
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
function la(e) {
  const { props: t, emit: r, slots: n, attrs: o, proxy: a } = ie(), { $q: s } = a;
  let i = null;
  e.hasValue === void 0 && (e.hasValue = O(() => wt(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (w) => {
    r("update:modelValue", w);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: g,
    onFocusout: m
  }), Object.assign(e, {
    clearValue: _,
    onControlFocusin: g,
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
  } = na(e.focused, e.innerLoading), b = e.floatingLabel !== void 0 ? O(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : O(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), p = O(
    () => t.bottomSlots === !0 || t.hint !== void 0 || c.value === !0 || t.counter === !0 || t.error !== null
  ), y = O(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), $ = O(
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
    Bt(A);
  }
  function z() {
    $o(A);
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
    mt(w), s.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), r("update:modelValue", null), e.changeEvent === !0 && r("change", null), r("clear", t.modelValue), se(() => {
      const k = f.value;
      E(), f.value = k;
    });
  }
  function v(w) {
    [13, 32].includes(w.keyCode) && _(w);
  }
  function F() {
    const w = [];
    return n.prepend !== void 0 && w.push(
      T("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: _e
      }, n.prepend())
    ), w.push(
      T("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, j())
    ), l.value === !0 && t.noErrorIcon === !1 && w.push(
      P("error", [
        T(ar, { name: s.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? w.push(
      P(
        "inner-loading-append",
        n.loading !== void 0 ? n.loading() : [T(Uo, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && w.push(
      P("inner-clearable-append", [
        T(ar, {
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
      T("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: _e
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
      }, de(n.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && w.push(
      T("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), w.concat(de(n.default));
  }
  function U() {
    let w, k;
    l.value === !0 ? d.value !== null ? (w = [T("div", { role: "alert" }, d.value)], k = `q--slot-error-${d.value}`) : (w = de(n.error), k = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (w = [T("div", t.hint)], k = `q--slot-hint-${t.hint}`) : (w = de(n.hint), k = "q--slot-hint"));
    const I = t.counter === !0 || n.counter !== void 0;
    if (t.hideBottomSpace === !0 && I === !1 && w === void 0)
      return;
    const V = T("div", {
      key: k,
      class: "q-field__messages col"
    }, w);
    return T("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: _e
    }, [
      t.hideBottomSpace === !0 ? V : T(yo, { name: "q-transition--field-message" }, () => V),
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
  return sn(() => {
    N = !0;
  }), ln(() => {
    N === !0 && t.autofocus === !0 && a.focus();
  }), t.autofocus === !0 && pe(() => {
    a.focus();
  }), Ge(() => {
    i !== null && clearTimeout(i);
  }), Object.assign(a, { focus: R, blur: z }), function() {
    const k = e.getControl === void 0 && n.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...L.value
    } : L.value;
    return T(e.tag.value, {
      ref: e.rootRef,
      class: [
        $.value,
        o.class
      ],
      style: o.style,
      ...k
    }, [
      n.before !== void 0 ? T("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: _e
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
        onClick: _e
      }, n.after()) : null
    ]);
  };
}
function ua(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
const hr = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
}, De = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }
}, vn = Object.keys(De);
vn.forEach((e) => {
  De[e].regex = new RegExp(De[e].pattern);
});
const ca = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + vn.join("") + "])|(.)", "g"), mr = /[.*+?^${}()|[\]\\]/g, K = String.fromCharCode(1), fa = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function da(e, t, r, n) {
  let o, a, s, i, f, c;
  const l = W(null), d = W(b());
  function E() {
    return e.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  Z(() => e.type + e.autogrow, y), Z(() => e.mask, (g) => {
    if (g !== void 0)
      $(d.value, !0);
    else {
      const m = R(d.value);
      y(), e.modelValue !== m && t("update:modelValue", m);
    }
  }), Z(() => e.fillMask + e.reverseFillMask, () => {
    l.value === !0 && $(d.value, !0);
  }), Z(() => e.unmaskedValue, () => {
    l.value === !0 && $(d.value);
  });
  function b() {
    if (y(), l.value === !0) {
      const g = L(R(e.modelValue));
      return e.fillMask !== !1 ? z(g) : g;
    }
    return e.modelValue;
  }
  function p(g) {
    if (g < o.length)
      return o.slice(-g);
    let m = "", _ = o;
    const v = _.indexOf(K);
    if (v !== -1) {
      for (let F = g - _.length; F > 0; F--)
        m += K;
      _ = _.slice(0, v) + m + _.slice(v);
    }
    return _;
  }
  function y() {
    if (l.value = e.mask !== void 0 && e.mask.length !== 0 && E(), l.value === !1) {
      i = void 0, o = "", a = "";
      return;
    }
    const g = hr[e.mask] === void 0 ? e.mask : hr[e.mask], m = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", _ = m.replace(mr, "\\$&"), v = [], F = [], j = [];
    let U = e.reverseFillMask === !0, P = "", N = "";
    g.replace(ca, (V, h, H, oe, Y) => {
      if (oe !== void 0) {
        const Q = De[oe];
        j.push(Q), N = Q.negate, U === !0 && (F.push("(?:" + N + "+)?(" + Q.pattern + "+)?(?:" + N + "+)?(" + Q.pattern + "+)?"), U = !1), F.push("(?:" + N + "+)?(" + Q.pattern + ")?");
      } else if (H !== void 0)
        P = "\\" + (H === "\\" ? "" : H), j.push(H), v.push("([^" + P + "]+)?" + P + "?");
      else {
        const Q = h !== void 0 ? h : Y;
        P = Q === "\\" ? "\\\\\\\\" : Q.replace(mr, "\\\\$&"), j.push(Q), v.push("([^" + P + "]+)?" + P + "?");
      }
    });
    const w = new RegExp(
      "^" + v.join("") + "(" + (P === "" ? "." : "[^" + P + "]") + "+)?" + (P === "" ? "" : "[" + P + "]*") + "$"
    ), k = F.length - 1, I = F.map((V, h) => h === 0 && e.reverseFillMask === !0 ? new RegExp("^" + _ + "*" + V) : h === k ? new RegExp(
      "^" + V + "(" + (N === "" ? "." : N) + "+)?" + (e.reverseFillMask === !0 ? "$" : _ + "*")
    ) : new RegExp("^" + V));
    s = j, i = (V) => {
      const h = w.exec(e.reverseFillMask === !0 ? V : V.slice(0, j.length + 1));
      h !== null && (V = h.slice(1).join(""));
      const H = [], oe = I.length;
      for (let Y = 0, Q = V; Y < oe; Y++) {
        const fe = I[Y].exec(Q);
        if (fe === null)
          break;
        Q = Q.slice(fe.shift().length), H.push(...fe);
      }
      return H.length !== 0 ? H.join("") : V;
    }, o = j.map((V) => typeof V == "string" ? V : K).join(""), a = o.split(K).join(m);
  }
  function $(g, m, _) {
    const v = n.value, F = v.selectionEnd, j = v.value.length - F, U = R(g);
    m === !0 && y();
    const P = L(U), N = e.fillMask !== !1 ? z(P) : P, w = d.value !== N;
    v.value !== N && (v.value = N), w === !0 && (d.value = N), document.activeElement === v && se(() => {
      if (N === a) {
        const I = e.reverseFillMask === !0 ? a.length : 0;
        v.setSelectionRange(I, I, "forward");
        return;
      }
      if (_ === "insertFromPaste" && e.reverseFillMask !== !0) {
        const I = v.selectionEnd;
        let V = F - 1;
        for (let h = f; h <= V && h < I; h++)
          o[h] !== K && V++;
        M.right(v, V);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(_) !== -1) {
        const I = e.reverseFillMask === !0 ? F === 0 ? N.length > P.length ? 1 : 0 : Math.max(0, N.length - (N === a ? 0 : Math.min(P.length, j) + 1)) + 1 : F;
        v.setSelectionRange(I, I, "forward");
        return;
      }
      if (e.reverseFillMask === !0)
        if (w === !0) {
          const I = Math.max(0, N.length - (N === a ? 0 : Math.min(P.length, j + 1)));
          I === 1 && F === 1 ? v.setSelectionRange(I, I, "forward") : M.rightReverse(v, I);
        } else {
          const I = N.length - j;
          v.setSelectionRange(I, I, "backward");
        }
      else if (w === !0) {
        const I = Math.max(0, o.indexOf(K), Math.min(P.length, F) - 1);
        M.right(v, I);
      } else {
        const I = F - 1;
        M.right(v, I);
      }
    });
    const k = e.unmaskedValue === !0 ? R(N) : N;
    String(e.modelValue) !== k && (e.modelValue !== null || k !== "") && r(k, !0);
  }
  function C(g, m, _) {
    const v = L(R(g.value));
    m = Math.max(0, o.indexOf(K), Math.min(v.length, m)), f = m, g.setSelectionRange(m, _, "forward");
  }
  const M = {
    left(g, m) {
      const _ = o.slice(m - 1).indexOf(K) === -1;
      let v = Math.max(0, m - 1);
      for (; v >= 0; v--)
        if (o[v] === K) {
          m = v, _ === !0 && m++;
          break;
        }
      if (v < 0 && o[m] !== void 0 && o[m] !== K)
        return M.right(g, 0);
      m >= 0 && g.setSelectionRange(m, m, "backward");
    },
    right(g, m) {
      const _ = g.value.length;
      let v = Math.min(_, m + 1);
      for (; v <= _; v++)
        if (o[v] === K) {
          m = v;
          break;
        } else
          o[v - 1] === K && (m = v);
      if (v > _ && o[m - 1] !== void 0 && o[m - 1] !== K)
        return M.left(g, _);
      g.setSelectionRange(m, m, "forward");
    },
    leftReverse(g, m) {
      const _ = p(g.value.length);
      let v = Math.max(0, m - 1);
      for (; v >= 0; v--)
        if (_[v - 1] === K) {
          m = v;
          break;
        } else if (_[v] === K && (m = v, v === 0))
          break;
      if (v < 0 && _[m] !== void 0 && _[m] !== K)
        return M.rightReverse(g, 0);
      m >= 0 && g.setSelectionRange(m, m, "backward");
    },
    rightReverse(g, m) {
      const _ = g.value.length, v = p(_), F = v.slice(0, m + 1).indexOf(K) === -1;
      let j = Math.min(_, m + 1);
      for (; j <= _; j++)
        if (v[j - 1] === K) {
          m = j, m > 0 && F === !0 && m--;
          break;
        }
      if (j > _ && v[m - 1] !== void 0 && v[m - 1] !== K)
        return M.leftReverse(g, _);
      g.setSelectionRange(m, m, "forward");
    }
  };
  function S(g) {
    t("click", g), c = void 0;
  }
  function B(g) {
    if (t("keydown", g), ua(g) === !0 || g.altKey === !0)
      return;
    const m = n.value, _ = m.selectionStart, v = m.selectionEnd;
    if (g.shiftKey || (c = void 0), g.keyCode === 37 || g.keyCode === 39) {
      g.shiftKey && c === void 0 && (c = m.selectionDirection === "forward" ? _ : v);
      const F = M[(g.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === !0 ? "Reverse" : "")];
      if (g.preventDefault(), F(m, c === _ ? v : _), g.shiftKey) {
        const j = m.selectionStart;
        m.setSelectionRange(Math.min(c, j), Math.max(c, j), "forward");
      }
    } else
      g.keyCode === 8 && e.reverseFillMask !== !0 && _ === v ? (M.left(m, _), m.setSelectionRange(m.selectionStart, v, "backward")) : g.keyCode === 46 && e.reverseFillMask === !0 && _ === v && (M.rightReverse(m, v), m.setSelectionRange(_, m.selectionEnd, "forward"));
  }
  function L(g) {
    if (g == null || g === "")
      return "";
    if (e.reverseFillMask === !0)
      return A(g);
    const m = s;
    let _ = 0, v = "";
    for (let F = 0; F < m.length; F++) {
      const j = g[_], U = m[F];
      if (typeof U == "string")
        v += U, j === U && _++;
      else if (j !== void 0 && U.regex.test(j))
        v += U.transform !== void 0 ? U.transform(j) : j, _++;
      else
        return v;
    }
    return v;
  }
  function A(g) {
    const m = s, _ = o.indexOf(K);
    let v = g.length - 1, F = "";
    for (let j = m.length - 1; j >= 0 && v !== -1; j--) {
      const U = m[j];
      let P = g[v];
      if (typeof U == "string")
        F = U + F, P === U && v--;
      else if (P !== void 0 && U.regex.test(P))
        do
          F = (U.transform !== void 0 ? U.transform(P) : P) + F, v--, P = g[v];
        while (_ === j && P !== void 0 && U.regex.test(P));
      else
        return F;
    }
    return F;
  }
  function R(g) {
    return typeof g != "string" || i === void 0 ? typeof g == "number" ? i("" + g) : g : i(g);
  }
  function z(g) {
    return a.length - g.length <= 0 ? g : e.reverseFillMask === !0 && g.length !== 0 ? a.slice(0, -g.length) + g : g + a.slice(g.length);
  }
  return {
    innerValue: d,
    hasMask: l,
    moveCursorForPaste: C,
    updateMaskValue: $,
    onMaskedKeydown: B,
    onMaskedClick: S
  };
}
const pa = {
  name: String
};
function ha(e) {
  return O(() => e.name || e.for);
}
function ma(e, t) {
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
const ga = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, va = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, ba = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, ya = /[a-z0-9_ -]$/i;
function wa(e) {
  return function(r) {
    if (r.type === "compositionend" || r.type === "change") {
      if (r.target.qComposing !== !0)
        return;
      r.target.qComposing = !1, e(r);
    } else
      r.type === "compositionupdate" && r.target.qComposing !== !0 && typeof r.data == "string" && (Ie.is.firefox === !0 ? ya.test(r.data) === !1 : ga.test(r.data) === !0 || va.test(r.data) === !0 || ba.test(r.data) === !0) === !0 && (r.target.qComposing = !0);
  };
}
const _a = We({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...aa,
    ...fa,
    ...pa,
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
    ...sa,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(e, { emit: t, attrs: r }) {
    const { proxy: n } = ie(), { $q: o } = n, a = {};
    let s = NaN, i, f, c = null, l;
    const d = W(null), E = ha(e), {
      innerValue: b,
      hasMask: p,
      moveCursorForPaste: y,
      updateMaskValue: $,
      onMaskedKeydown: C,
      onMaskedClick: M
    } = da(e, t, P, d), S = ma(
      e,
      /* type guard */
      !0
    ), B = O(() => wt(b.value)), L = wa(j), A = ia({ changeEvent: !0 }), R = O(
      () => e.type === "textarea" || e.autogrow === !0
    ), z = O(
      () => R.value === !0 || ["text", "search", "url", "tel", "password"].includes(e.type)
    ), g = O(() => {
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
        onFocus: tr
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
        $(h);
      } else
        b.value !== h && (b.value = h, e.type === "number" && a.hasOwnProperty("value") === !0 && (i === !0 ? i = !1 : delete a.value));
      e.autogrow === !0 && se(N);
    }), Z(() => e.autogrow, (h) => {
      h === !0 ? se(N) : d.value !== null && r.rows > 0 && (d.value.style.height = "auto");
    }), Z(() => e.dense, () => {
      e.autogrow === !0 && se(N);
    });
    function _() {
      Bt(() => {
        const h = document.activeElement;
        d.value !== null && d.value !== h && (h === null || h.id !== A.targetUid.value) && d.value.focus({ preventScroll: !0 });
      });
    }
    function v() {
      d.value !== null && d.value.select();
    }
    function F(h) {
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
        $(H, !1, h.inputType);
      else if (P(H), z.value === !0 && h.target === document.activeElement) {
        const { selectionStart: oe, selectionEnd: Y } = h.target;
        oe !== void 0 && Y !== void 0 && se(() => {
          h.target === document.activeElement && H.indexOf(h.target.value) === 0 && h.target.setSelectionRange(oe, Y);
        });
      }
      e.autogrow === !0 && N();
    }
    function U(h) {
      t("animationend", h), N();
    }
    function P(h, H) {
      l = () => {
        c = null, e.type !== "number" && a.hasOwnProperty("value") === !0 && delete a.value, e.modelValue !== h && s !== h && (s = h, H === !0 && (f = !0), t("update:modelValue", h), se(() => {
          s === h && (s = NaN);
        })), l = void 0;
      }, e.type === "number" && (i = !0, a.value = h), e.debounce !== void 0 ? (c !== null && clearTimeout(c), a.value = h, c = setTimeout(l, e.debounce)) : l();
    }
    function N() {
      requestAnimationFrame(() => {
        const h = d.value;
        if (h !== null) {
          const H = h.parentNode.style, { scrollTop: oe } = h, { overflowY: Y, maxHeight: Q } = o.platform.is.firefox === !0 ? {} : window.getComputedStyle(h), fe = Y !== void 0 && Y !== "scroll";
          fe === !0 && (h.style.overflowY = "hidden"), H.marginBottom = h.scrollHeight - 1 + "px", h.style.height = "1px", h.style.height = h.scrollHeight + "px", fe === !0 && (h.style.overflowY = parseInt(Q, 10) < h.scrollHeight ? "auto" : "hidden"), H.marginBottom = "", h.scrollTop = oe;
        }
      });
    }
    function w(h) {
      L(h), c !== null && (clearTimeout(c), c = null), l !== void 0 && l(), t("change", h.target.value);
    }
    function k(h) {
      h !== void 0 && tr(h), c !== null && (clearTimeout(c), c = null), l !== void 0 && l(), i = !1, f = !1, delete a.value, e.type !== "file" && setTimeout(() => {
        d.value !== null && (d.value.value = b.value !== void 0 ? b.value : "");
      });
    }
    function I() {
      return a.hasOwnProperty("value") === !0 ? a.value : b.value !== void 0 ? b.value : "";
    }
    Ge(() => {
      k();
    }), pe(() => {
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
        () => B.value === !0 && (e.type !== "number" || isNaN(b.value) === !1) || wt(e.displayValue)
      ),
      getControl: () => T(R.value === !0 ? "textarea" : "input", {
        ref: d,
        class: [
          "q-field__native q-placeholder",
          e.inputClass
        ],
        style: e.inputStyle,
        ...m.value,
        ...g.value,
        ...e.type !== "file" ? { value: I() } : S.value
      }),
      getShadowControl: () => T("div", {
        class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (R.value === !0 ? "" : " text-no-wrap")
      }, [
        T("span", { class: "invisible" }, I()),
        T("span", e.shadowText)
      ])
    });
    const V = la(A);
    return Object.assign(n, {
      focus: _,
      select: v,
      getNativeElement: () => d.value
      // deprecated
    }), Mt(n, "nativeEl", () => d.value), V;
  }
}), Sa = {
  __name: "Text",
  props: {
    error: [Boolean, String, Array]
  },
  setup(e) {
    const t = e, r = O(() => !!t.error), n = O(() => t.error ? typeof t.error == "string" ? t.error : t.error[0] : null);
    return (o, a) => (Pt(), Ft(_a, cn(o.$attrs, {
      outlined: "",
      error: r.value,
      "error-message": n.value
    }), null, 16, ["error", "error-message"]));
  }
}, $a = {};
function xa(e, t) {
  const r = wo("usoft-field-text");
  return Pt(), Ft(r, cn(e.$attrs, { type: "password" }), null, 16);
}
const Ea = /* @__PURE__ */ dn($a, [["render", xa]]);
function bn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ca } = Object.prototype, { getPrototypeOf: Nt } = Object, Je = ((e) => (t) => {
  const r = Ca.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), re = (e) => (e = e.toLowerCase(), (t) => Je(t) === e), Ze = (e) => (t) => typeof t === e, { isArray: he } = Array, Ee = Ze("undefined");
function Ta(e) {
  return e !== null && !Ee(e) && e.constructor !== null && !Ee(e.constructor) && X(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yn = re("ArrayBuffer");
function Oa(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && yn(e.buffer), t;
}
const Aa = Ze("string"), X = Ze("function"), wn = Ze("number"), Qe = (e) => e !== null && typeof e == "object", Ra = (e) => e === !0 || e === !1, Fe = (e) => {
  if (Je(e) !== "object")
    return !1;
  const t = Nt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ka = re("Date"), ja = re("File"), Pa = re("Blob"), Fa = re("FileList"), Ma = (e) => Qe(e) && X(e.pipe), Ba = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || X(e.append) && ((t = Je(e)) === "formdata" || // detect form-data instance
  t === "object" && X(e.toString) && e.toString() === "[object FormData]"));
}, Na = re("URLSearchParams"), [Ia, Da, La, qa] = ["ReadableStream", "Request", "Response", "Headers"].map(re), Ua = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ce(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), he(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let i;
    for (n = 0; n < s; n++)
      i = a[n], t.call(null, e[i], i, e);
  }
}
function _n(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const Sn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), $n = (e) => !Ee(e) && e !== Sn;
function _t() {
  const { caseless: e } = $n(this) && this || {}, t = {}, r = (n, o) => {
    const a = e && _n(t, o) || o;
    Fe(t[a]) && Fe(n) ? t[a] = _t(t[a], n) : Fe(n) ? t[a] = _t({}, n) : he(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Ce(arguments[n], r);
  return t;
}
const Va = (e, t, r, { allOwnKeys: n } = {}) => (Ce(t, (o, a) => {
  r && X(o) ? e[a] = bn(o, r) : e[a] = o;
}, { allOwnKeys: n }), e), Ha = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), za = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Ka = (e, t, r, n) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!n || n(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = r !== !1 && Nt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Ga = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Wa = (e) => {
  if (!e)
    return null;
  if (he(e))
    return e;
  let t = e.length;
  if (!wn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ja = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Nt(Uint8Array)), Za = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, Qa = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Xa = re("HTMLFormElement"), Ya = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), gr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), es = re("RegExp"), xn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ce(r, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (n[a] = s || o);
  }), Object.defineProperties(e, n);
}, ts = (e) => {
  xn(e, (t, r) => {
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
}, rs = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return he(e) ? n(e) : n(String(e).split(t)), r;
}, ns = () => {
}, os = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, ct = "abcdefghijklmnopqrstuvwxyz", vr = "0123456789", En = {
  DIGIT: vr,
  ALPHA: ct,
  ALPHA_DIGIT: ct + ct.toUpperCase() + vr
}, as = (e = 16, t = En.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function ss(e) {
  return !!(e && X(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const is = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (Qe(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const a = he(n) ? [] : {};
        return Ce(n, (s, i) => {
          const f = r(s, o + 1);
          !Ee(f) && (a[i] = f);
        }), t[o] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, ls = re("AsyncFunction"), us = (e) => e && (Qe(e) || X(e)) && X(e.then) && X(e.catch), u = {
  isArray: he,
  isArrayBuffer: yn,
  isBuffer: Ta,
  isFormData: Ba,
  isArrayBufferView: Oa,
  isString: Aa,
  isNumber: wn,
  isBoolean: Ra,
  isObject: Qe,
  isPlainObject: Fe,
  isReadableStream: Ia,
  isRequest: Da,
  isResponse: La,
  isHeaders: qa,
  isUndefined: Ee,
  isDate: ka,
  isFile: ja,
  isBlob: Pa,
  isRegExp: es,
  isFunction: X,
  isStream: Ma,
  isURLSearchParams: Na,
  isTypedArray: Ja,
  isFileList: Fa,
  forEach: Ce,
  merge: _t,
  extend: Va,
  trim: Ua,
  stripBOM: Ha,
  inherits: za,
  toFlatObject: Ka,
  kindOf: Je,
  kindOfTest: re,
  endsWith: Ga,
  toArray: Wa,
  forEachEntry: Za,
  matchAll: Qa,
  isHTMLForm: Xa,
  hasOwnProperty: gr,
  hasOwnProp: gr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xn,
  freezeMethods: ts,
  toObjectSet: rs,
  toCamelCase: Ya,
  noop: ns,
  toFiniteNumber: os,
  findKey: _n,
  global: Sn,
  isContextDefined: $n,
  ALPHABET: En,
  generateString: as,
  isSpecCompliantForm: ss,
  toJSONObject: is,
  isAsyncFn: ls,
  isThenable: us
};
function x(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
u.inherits(x, Error, {
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
const Cn = x.prototype, Tn = {};
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
  Tn[e] = { value: e };
});
Object.defineProperties(x, Tn);
Object.defineProperty(Cn, "isAxiosError", { value: !0 });
x.from = (e, t, r, n, o, a) => {
  const s = Object.create(Cn);
  return u.toFlatObject(e, s, function(f) {
    return f !== Error.prototype;
  }, (i) => i !== "isAxiosError"), x.call(s, e.message, t, r, n, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const cs = null;
function St(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function On(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function br(e, t, r) {
  return e ? e.concat(t).map(function(o, a) {
    return o = On(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function fs(e) {
  return u.isArray(e) && !e.some(St);
}
const ds = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Xe(e, t, r) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = u.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, $) {
    return !u.isUndefined($[y]);
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
      throw new x("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(p) || u.isTypedArray(p) ? f && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, y, $) {
    let C = p;
    if (p && !$ && typeof p == "object") {
      if (u.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), p = JSON.stringify(p);
      else if (u.isArray(p) && fs(p) || (u.isFileList(p) || u.endsWith(y, "[]")) && (C = u.toArray(p)))
        return y = On(y), C.forEach(function(S, B) {
          !(u.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? br([y], B, a) : s === null ? y : y + "[]",
            c(S)
          );
        }), !1;
    }
    return St(p) ? !0 : (t.append(br($, y, a), c(p)), !1);
  }
  const d = [], E = Object.assign(ds, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: St
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
function yr(e) {
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
function It(e, t) {
  this._pairs = [], e && Xe(e, this, t);
}
const An = It.prototype;
An.append = function(t, r) {
  this._pairs.push([t, r]);
};
An.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, yr);
  } : yr;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function ps(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Rn(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ps, o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = u.isURLSearchParams(t) ? t.toString() : new It(t, r).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class hs {
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
const wr = hs, kn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ms = typeof URLSearchParams < "u" ? URLSearchParams : It, gs = typeof FormData < "u" ? FormData : null, vs = typeof Blob < "u" ? Blob : null, bs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ms,
    FormData: gs,
    Blob: vs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Dt = typeof window < "u" && typeof document < "u", ys = ((e) => Dt && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ws = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), _s = Dt && window.location.href || "http://localhost", Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Dt,
  hasStandardBrowserEnv: ys,
  hasStandardBrowserWebWorkerEnv: ws,
  origin: _s
}, Symbol.toStringTag, { value: "Module" })), ee = {
  ...Ss,
  ...bs
};
function $s(e, t) {
  return Xe(e, new ee.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, a) {
      return ee.isNode && u.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function xs(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Es(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function jn(e) {
  function t(r, n, o, a) {
    let s = r[a++];
    if (s === "__proto__")
      return !0;
    const i = Number.isFinite(+s), f = a >= r.length;
    return s = !s && u.isArray(o) ? o.length : s, f ? (u.hasOwnProp(o, s) ? o[s] = [o[s], n] : o[s] = n, !i) : ((!o[s] || !u.isObject(o[s])) && (o[s] = []), t(r, n, o[s], a) && u.isArray(o[s]) && (o[s] = Es(o[s])), !i);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const r = {};
    return u.forEachEntry(e, (n, o) => {
      t(xs(n), o, r, 0);
    }), r;
  }
  return null;
}
function Cs(e, t, r) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Lt = {
  transitional: kn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = u.isObject(t);
    if (a && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return o ? JSON.stringify(jn(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return $s(t, this.formSerializer).toString();
      if ((i = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return Xe(
          i ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), Cs(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Lt.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (u.isResponse(t) || u.isReadableStream(t))
      return t;
    if (t && u.isString(t) && (n && !this.responseType || o)) {
      const s = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? x.from(i, x.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
  Lt.headers[e] = {};
});
const qt = Lt, Ts = u.toObjectSet([
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
]), Os = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), r = s.substring(0, o).trim().toLowerCase(), n = s.substring(o + 1).trim(), !(!r || t[r] && Ts[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, _r = Symbol("internals");
function Se(e) {
  return e && String(e).trim().toLowerCase();
}
function Me(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Me) : String(e);
}
function As(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Rs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ft(e, t, r, n, o) {
  if (u.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!u.isString(t)) {
    if (u.isString(n))
      return t.indexOf(n) !== -1;
    if (u.isRegExp(n))
      return n.test(t);
  }
}
function ks(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function js(e, t) {
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
class Ye {
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
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || f] = Me(i));
    }
    const s = (i, f) => u.forEach(i, (c, l) => a(c, l, f));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (u.isString(t) && (t = t.trim()) && !Rs(t))
      s(Os(t), r);
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
          return As(o);
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
      return !!(n && this[n] !== void 0 && (!r || ft(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function a(s) {
      if (s = Se(s), s) {
        const i = u.findKey(n, s);
        i && (!r || ft(n, n[i], i, r)) && (delete n[i], o = !0);
      }
    }
    return u.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || ft(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return u.forEach(this, (o, a) => {
      const s = u.findKey(n, a);
      if (s) {
        r[s] = Me(o), delete r[a];
        return;
      }
      const i = t ? ks(a) : String(a).trim();
      i !== a && delete r[a], r[i] = Me(o), n[i] = !0;
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
    const n = (this[_r] = this[_r] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const i = Se(s);
      n[i] || (js(o, s), n[i] = !0);
    }
    return u.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Ye.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(Ye.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
u.freezeMethods(Ye);
const te = Ye;
function dt(e, t) {
  const r = this || qt, n = t || r, o = te.from(n.headers);
  let a = n.data;
  return u.forEach(e, function(i) {
    a = i.call(r, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function Pn(e) {
  return !!(e && e.__CANCEL__);
}
function me(e, t, r) {
  x.call(this, e ?? "canceled", x.ERR_CANCELED, t, r), this.name = "CanceledError";
}
u.inherits(me, x, {
  __CANCEL__: !0
});
function Fn(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new x(
    "Request failed with status code " + r.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ps(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Fs(e, t) {
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
function Ms(e, t) {
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
const Le = (e, t, r = 3) => {
  let n = 0;
  const o = Fs(50, 250);
  return Ms((a) => {
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
}, Bs = ee.hasStandardBrowserEnv ? (
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
), Ns = ee.hasStandardBrowserEnv ? (
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
function Is(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ds(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Mn(e, t) {
  return e && !Is(t) ? Ds(e, t) : t;
}
const Sr = (e) => e instanceof te ? { ...e } : e;
function ue(e, t) {
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
    headers: (c, l) => o(Sr(c), Sr(l), !0)
  };
  return u.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const d = f[l] || o, E = d(e[l], t[l], l);
    u.isUndefined(E) && d !== i || (r[l] = E);
  }), r;
}
const Bn = (e) => {
  const t = ue({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: i } = t;
  t.headers = s = te.from(s), t.url = Rn(Mn(t.baseURL, t.url), e.params, e.paramsSerializer), i && s.set(
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
  if (ee.hasStandardBrowserEnv && (n && u.isFunction(n) && (n = n(t)), n || n !== !1 && Bs(t.url))) {
    const c = o && a && Ns.read(a);
    c && s.set(o, c);
  }
  return t;
}, Ls = typeof XMLHttpRequest < "u", qs = Ls && function(e) {
  return new Promise(function(r, n) {
    const o = Bn(e);
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
      Fn(function(C) {
        r(C), c();
      }, function(C) {
        n(C), c();
      }, y), l = null;
    }
    "onloadend" in l ? l.onloadend = d : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, l.onabort = function() {
      l && (n(new x("Request aborted", x.ECONNABORTED, o, l)), l = null);
    }, l.onerror = function() {
      n(new x("Network Error", x.ERR_NETWORK, o, l)), l = null;
    }, l.ontimeout = function() {
      let p = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || kn;
      o.timeoutErrorMessage && (p = o.timeoutErrorMessage), n(new x(
        p,
        y.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        o,
        l
      )), l = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in l && u.forEach(s.toJSON(), function(p, y) {
      l.setRequestHeader(y, p);
    }), u.isUndefined(o.withCredentials) || (l.withCredentials = !!o.withCredentials), i && i !== "json" && (l.responseType = o.responseType), typeof o.onDownloadProgress == "function" && l.addEventListener("progress", Le(o.onDownloadProgress, !0)), typeof o.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", Le(o.onUploadProgress)), (o.cancelToken || o.signal) && (f = (b) => {
      l && (n(!b || b.type ? new me(null, e, l) : b), l.abort(), l = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const E = Ps(o.url);
    if (E && ee.protocols.indexOf(E) === -1) {
      n(new x("Unsupported protocol " + E + ":", x.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(a || null);
  });
}, Us = (e, t) => {
  let r = new AbortController(), n;
  const o = function(f) {
    if (!n) {
      n = !0, s();
      const c = f instanceof Error ? f : this.reason;
      r.abort(c instanceof x ? c : new me(c instanceof Error ? c.message : c));
    }
  };
  let a = t && setTimeout(() => {
    o(new x(`timeout ${t} of ms exceeded`, x.ETIMEDOUT));
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
}, Vs = Us, Hs = function* (e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, zs = async function* (e, t, r) {
  for await (const n of e)
    yield* Hs(ArrayBuffer.isView(n) ? n : await r(String(n)), t);
}, $r = (e, t, r, n, o) => {
  const a = zs(e, t, o);
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
}, xr = (e, t) => {
  const r = e != null;
  return (n) => setTimeout(() => t({
    lengthComputable: r,
    total: e,
    loaded: n
  }));
}, et = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Nn = et && typeof ReadableStream == "function", $t = et && (typeof TextEncoder == "function" ? ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ks = Nn && (() => {
  let e = !1;
  const t = new Request(ee.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), Er = 64 * 1024, xt = Nn && !!(() => {
  try {
    return u.isReadableStream(new Response("").body);
  } catch {
  }
})(), qe = {
  stream: xt && ((e) => e.body)
};
et && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !qe[t] && (qe[t] = u.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new x(`Response type '${t}' is not supported`, x.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Gs = async (e) => {
  if (e == null)
    return 0;
  if (u.isBlob(e))
    return e.size;
  if (u.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (u.isArrayBufferView(e))
    return e.byteLength;
  if (u.isURLSearchParams(e) && (e = e + ""), u.isString(e))
    return (await $t(e)).byteLength;
}, Ws = async (e, t) => {
  const r = u.toFiniteNumber(e.getContentLength());
  return r ?? Gs(t);
}, Js = et && (async (e) => {
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
  } = Bn(e);
  c = c ? (c + "").toLowerCase() : "text";
  let [b, p] = o || a || s ? Vs([o, a], s) : [], y, $;
  const C = () => {
    !y && setTimeout(() => {
      b && b.unsubscribe();
    }), y = !0;
  };
  let M;
  try {
    if (f && Ks && r !== "get" && r !== "head" && (M = await Ws(l, n)) !== 0) {
      let A = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), R;
      u.isFormData(n) && (R = A.headers.get("content-type")) && l.setContentType(R), A.body && (n = $r(A.body, Er, xr(
        M,
        Le(f)
      ), null, $t));
    }
    u.isString(d) || (d = d ? "cors" : "omit"), $ = new Request(t, {
      ...E,
      signal: b,
      method: r.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      withCredentials: d
    });
    let S = await fetch($);
    const B = xt && (c === "stream" || c === "response");
    if (xt && (i || B)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((z) => {
        A[z] = S[z];
      });
      const R = u.toFiniteNumber(S.headers.get("content-length"));
      S = new Response(
        $r(S.body, Er, i && xr(
          R,
          Le(i, !0)
        ), B && C, $t),
        A
      );
    }
    c = c || "text";
    let L = await qe[u.findKey(qe, c) || "text"](S, e);
    return !B && C(), p && p(), await new Promise((A, R) => {
      Fn(A, R, {
        data: L,
        headers: te.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: $
      });
    });
  } catch (S) {
    throw C(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new x("Network Error", x.ERR_NETWORK, e, $),
      {
        cause: S.cause || S
      }
    ) : x.from(S, S && S.code, e, $);
  }
}), Et = {
  http: cs,
  xhr: qs,
  fetch: Js
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
const Cr = (e) => `- ${e}`, Zs = (e) => u.isFunction(e) || e === null || e === !1, In = {
  getAdapter: (e) => {
    e = u.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let s;
      if (n = r, !Zs(r) && (n = Et[(s = String(r)).toLowerCase()], n === void 0))
        throw new x(`Unknown adapter '${s}'`);
      if (n)
        break;
      o[s || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([i, f]) => `adapter ${i} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? a.length > 1 ? `since :
` + a.map(Cr).join(`
`) : " " + Cr(a[0]) : "as no adapter specified";
      throw new x(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Et
};
function pt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new me(null, e);
}
function Tr(e) {
  return pt(e), e.headers = te.from(e.headers), e.data = dt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), In.getAdapter(e.adapter || qt.adapter)(e).then(function(n) {
    return pt(e), n.data = dt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = te.from(n.headers), n;
  }, function(n) {
    return Pn(n) || (pt(e), n && n.response && (n.response.data = dt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = te.from(n.response.headers))), Promise.reject(n);
  });
}
const Dn = "1.7.2", Ut = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ut[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Or = {};
Ut.transitional = function(t, r, n) {
  function o(a, s) {
    return "[Axios v" + Dn + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, i) => {
    if (t === !1)
      throw new x(
        o(s, " has been removed" + (r ? " in " + r : "")),
        x.ERR_DEPRECATED
      );
    return r && !Or[s] && (Or[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, s, i) : !0;
  };
};
function Qs(e, t, r) {
  if (typeof e != "object")
    throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], s = t[a];
    if (s) {
      const i = e[a], f = i === void 0 || s(i, a, e);
      if (f !== !0)
        throw new x("option " + a + " must be " + f, x.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new x("Unknown option " + a, x.ERR_BAD_OPTION);
  }
}
const Ct = {
  assertOptions: Qs,
  validators: Ut
}, ae = Ct.validators;
class Ue {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new wr(),
      response: new wr()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ue(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: a } = r;
    n !== void 0 && Ct.assertOptions(n, {
      silentJSONParsing: ae.transitional(ae.boolean),
      forcedJSONParsing: ae.transitional(ae.boolean),
      clarifyTimeoutError: ae.transitional(ae.boolean)
    }, !1), o != null && (u.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Ct.assertOptions(o, {
      encode: ae.function,
      serialize: ae.function
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
      const p = [Tr.bind(this), void 0];
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
      } catch ($) {
        y.call(this, $);
        break;
      }
    }
    try {
      l = Tr.call(this, b);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, E = c.length; d < E; )
      l = l.then(c[d++], c[d++]);
    return l;
  }
  getUri(t) {
    t = ue(this.defaults, t);
    const r = Mn(t.baseURL, t.url);
    return Rn(r, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  Ue.prototype[t] = function(r, n) {
    return this.request(ue(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, s, i) {
      return this.request(ue(i || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  Ue.prototype[t] = r(), Ue.prototype[t + "Form"] = r(!0);
});
const Be = Ue;
class Vt {
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
      n.reason || (n.reason = new me(a, s, i), r(n.reason));
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
      token: new Vt(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const Xs = Vt;
function Ys(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function ei(e) {
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
const ti = Tt;
function Ln(e) {
  const t = new Be(e), r = bn(Be.prototype.request, t);
  return u.extend(r, Be.prototype, t, { allOwnKeys: !0 }), u.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return Ln(ue(e, o));
  }, r;
}
const G = Ln(qt);
G.Axios = Be;
G.CanceledError = me;
G.CancelToken = Xs;
G.isCancel = Pn;
G.VERSION = Dn;
G.toFormData = Xe;
G.AxiosError = x;
G.Cancel = G.CanceledError;
G.all = function(t) {
  return Promise.all(t);
};
G.spread = Ys;
G.isAxiosError = ei;
G.mergeConfig = ue;
G.AxiosHeaders = te;
G.formToJSON = (e) => jn(u.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = In.getAdapter;
G.HttpStatusCode = ti;
G.default = G;
const ri = G, ni = ri.create({ baseURL: "http://127.0.0.1:8000/v1/" });
async function oi(e, t, r, n, o = !0) {
  try {
    const a = await ni({
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
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function si() {
  this.__data__ = [], this.size = 0;
}
var ii = si;
function li(e, t) {
  return e === t || e !== e && t !== t;
}
var qn = li, ui = qn;
function ci(e, t) {
  for (var r = e.length; r--; )
    if (ui(e[r][0], t))
      return r;
  return -1;
}
var tt = ci, fi = tt, di = Array.prototype, pi = di.splice;
function hi(e) {
  var t = this.__data__, r = fi(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : pi.call(t, r, 1), --this.size, !0;
}
var mi = hi, gi = tt;
function vi(e) {
  var t = this.__data__, r = gi(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var bi = vi, yi = tt;
function wi(e) {
  return yi(this.__data__, e) > -1;
}
var _i = wi, Si = tt;
function $i(e, t) {
  var r = this.__data__, n = Si(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var xi = $i, Ei = ii, Ci = mi, Ti = bi, Oi = _i, Ai = xi;
function ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ge.prototype.clear = Ei;
ge.prototype.delete = Ci;
ge.prototype.get = Ti;
ge.prototype.has = Oi;
ge.prototype.set = Ai;
var rt = ge, Ri = rt;
function ki() {
  this.__data__ = new Ri(), this.size = 0;
}
var ji = ki;
function Pi(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Fi = Pi;
function Mi(e) {
  return this.__data__.get(e);
}
var Bi = Mi;
function Ni(e) {
  return this.__data__.has(e);
}
var Ii = Ni, Di = typeof Pe == "object" && Pe && Pe.Object === Object && Pe, Un = Di, Li = Un, qi = typeof self == "object" && self && self.Object === Object && self, Ui = Li || qi || Function("return this")(), ne = Ui, Vi = ne, Hi = Vi.Symbol, Ht = Hi, Ar = Ht, Vn = Object.prototype, zi = Vn.hasOwnProperty, Ki = Vn.toString, $e = Ar ? Ar.toStringTag : void 0;
function Gi(e) {
  var t = zi.call(e, $e), r = e[$e];
  try {
    e[$e] = void 0;
    var n = !0;
  } catch {
  }
  var o = Ki.call(e);
  return n && (t ? e[$e] = r : delete e[$e]), o;
}
var Wi = Gi, Ji = Object.prototype, Zi = Ji.toString;
function Qi(e) {
  return Zi.call(e);
}
var Xi = Qi, Rr = Ht, Yi = Wi, el = Xi, tl = "[object Null]", rl = "[object Undefined]", kr = Rr ? Rr.toStringTag : void 0;
function nl(e) {
  return e == null ? e === void 0 ? rl : tl : kr && kr in Object(e) ? Yi(e) : el(e);
}
var nt = nl;
function ol(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Te = ol, al = nt, sl = Te, il = "[object AsyncFunction]", ll = "[object Function]", ul = "[object GeneratorFunction]", cl = "[object Proxy]";
function fl(e) {
  if (!sl(e))
    return !1;
  var t = al(e);
  return t == ll || t == ul || t == il || t == cl;
}
var Hn = fl, dl = ne, pl = dl["__core-js_shared__"], hl = pl, ht = hl, jr = function() {
  var e = /[^.]+$/.exec(ht && ht.keys && ht.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ml(e) {
  return !!jr && jr in e;
}
var gl = ml, vl = Function.prototype, bl = vl.toString;
function yl(e) {
  if (e != null) {
    try {
      return bl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zn = yl, wl = Hn, _l = gl, Sl = Te, $l = zn, xl = /[\\^$.*+?()[\]{}|]/g, El = /^\[object .+?Constructor\]$/, Cl = Function.prototype, Tl = Object.prototype, Ol = Cl.toString, Al = Tl.hasOwnProperty, Rl = RegExp(
  "^" + Ol.call(Al).replace(xl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function kl(e) {
  if (!Sl(e) || _l(e))
    return !1;
  var t = wl(e) ? Rl : El;
  return t.test($l(e));
}
var jl = kl;
function Pl(e, t) {
  return e == null ? void 0 : e[t];
}
var Fl = Pl, Ml = jl, Bl = Fl;
function Nl(e, t) {
  var r = Bl(e, t);
  return Ml(r) ? r : void 0;
}
var ce = Nl, Il = ce, Dl = ne, Ll = Il(Dl, "Map"), zt = Ll, ql = ce, Ul = ql(Object, "create"), ot = Ul, Pr = ot;
function Vl() {
  this.__data__ = Pr ? Pr(null) : {}, this.size = 0;
}
var Hl = Vl;
function zl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Kl = zl, Gl = ot, Wl = "__lodash_hash_undefined__", Jl = Object.prototype, Zl = Jl.hasOwnProperty;
function Ql(e) {
  var t = this.__data__;
  if (Gl) {
    var r = t[e];
    return r === Wl ? void 0 : r;
  }
  return Zl.call(t, e) ? t[e] : void 0;
}
var Xl = Ql, Yl = ot, eu = Object.prototype, tu = eu.hasOwnProperty;
function ru(e) {
  var t = this.__data__;
  return Yl ? t[e] !== void 0 : tu.call(t, e);
}
var nu = ru, ou = ot, au = "__lodash_hash_undefined__";
function su(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ou && t === void 0 ? au : t, this;
}
var iu = su, lu = Hl, uu = Kl, cu = Xl, fu = nu, du = iu;
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ve.prototype.clear = lu;
ve.prototype.delete = uu;
ve.prototype.get = cu;
ve.prototype.has = fu;
ve.prototype.set = du;
var pu = ve, Fr = pu, hu = rt, mu = zt;
function gu() {
  this.size = 0, this.__data__ = {
    hash: new Fr(),
    map: new (mu || hu)(),
    string: new Fr()
  };
}
var vu = gu;
function bu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var yu = bu, wu = yu;
function _u(e, t) {
  var r = e.__data__;
  return wu(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var at = _u, Su = at;
function $u(e) {
  var t = Su(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var xu = $u, Eu = at;
function Cu(e) {
  return Eu(this, e).get(e);
}
var Tu = Cu, Ou = at;
function Au(e) {
  return Ou(this, e).has(e);
}
var Ru = Au, ku = at;
function ju(e, t) {
  var r = ku(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Pu = ju, Fu = vu, Mu = xu, Bu = Tu, Nu = Ru, Iu = Pu;
function be(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
be.prototype.clear = Fu;
be.prototype.delete = Mu;
be.prototype.get = Bu;
be.prototype.has = Nu;
be.prototype.set = Iu;
var Du = be, Lu = rt, qu = zt, Uu = Du, Vu = 200;
function Hu(e, t) {
  var r = this.__data__;
  if (r instanceof Lu) {
    var n = r.__data__;
    if (!qu || n.length < Vu - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Uu(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var zu = Hu, Ku = rt, Gu = ji, Wu = Fi, Ju = Bi, Zu = Ii, Qu = zu;
function ye(e) {
  var t = this.__data__ = new Ku(e);
  this.size = t.size;
}
ye.prototype.clear = Gu;
ye.prototype.delete = Wu;
ye.prototype.get = Ju;
ye.prototype.has = Zu;
ye.prototype.set = Qu;
var Xu = ye;
function Yu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var ec = Yu, tc = ce, rc = function() {
  try {
    var e = tc(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), nc = rc, Mr = nc;
function oc(e, t, r) {
  t == "__proto__" && Mr ? Mr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Kn = oc, ac = Kn, sc = qn, ic = Object.prototype, lc = ic.hasOwnProperty;
function uc(e, t, r) {
  var n = e[t];
  (!(lc.call(e, t) && sc(n, r)) || r === void 0 && !(t in e)) && ac(e, t, r);
}
var Gn = uc, cc = Gn, fc = Kn;
function dc(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], f = n ? n(r[i], e[i], i, r, e) : void 0;
    f === void 0 && (f = e[i]), o ? fc(r, i, f) : cc(r, i, f);
  }
  return r;
}
var st = dc;
function pc(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var hc = pc;
function mc(e) {
  return e != null && typeof e == "object";
}
var Oe = mc, gc = nt, vc = Oe, bc = "[object Arguments]";
function yc(e) {
  return vc(e) && gc(e) == bc;
}
var wc = yc, Br = wc, _c = Oe, Wn = Object.prototype, Sc = Wn.hasOwnProperty, $c = Wn.propertyIsEnumerable, xc = Br(function() {
  return arguments;
}()) ? Br : function(e) {
  return _c(e) && Sc.call(e, "callee") && !$c.call(e, "callee");
}, Ec = xc, Cc = Array.isArray, Kt = Cc, Ve = { exports: {} };
function Tc() {
  return !1;
}
var Oc = Tc;
Ve.exports;
(function(e, t) {
  var r = ne, n = Oc, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, s = a && a.exports === o, i = s ? r.Buffer : void 0, f = i ? i.isBuffer : void 0, c = f || n;
  e.exports = c;
})(Ve, Ve.exports);
var Jn = Ve.exports, Ac = 9007199254740991, Rc = /^(?:0|[1-9]\d*)$/;
function kc(e, t) {
  var r = typeof e;
  return t = t ?? Ac, !!t && (r == "number" || r != "symbol" && Rc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var jc = kc, Pc = 9007199254740991;
function Fc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pc;
}
var Zn = Fc, Mc = nt, Bc = Zn, Nc = Oe, Ic = "[object Arguments]", Dc = "[object Array]", Lc = "[object Boolean]", qc = "[object Date]", Uc = "[object Error]", Vc = "[object Function]", Hc = "[object Map]", zc = "[object Number]", Kc = "[object Object]", Gc = "[object RegExp]", Wc = "[object Set]", Jc = "[object String]", Zc = "[object WeakMap]", Qc = "[object ArrayBuffer]", Xc = "[object DataView]", Yc = "[object Float32Array]", ef = "[object Float64Array]", tf = "[object Int8Array]", rf = "[object Int16Array]", nf = "[object Int32Array]", of = "[object Uint8Array]", af = "[object Uint8ClampedArray]", sf = "[object Uint16Array]", lf = "[object Uint32Array]", q = {};
q[Yc] = q[ef] = q[tf] = q[rf] = q[nf] = q[of] = q[af] = q[sf] = q[lf] = !0;
q[Ic] = q[Dc] = q[Qc] = q[Lc] = q[Xc] = q[qc] = q[Uc] = q[Vc] = q[Hc] = q[zc] = q[Kc] = q[Gc] = q[Wc] = q[Jc] = q[Zc] = !1;
function uf(e) {
  return Nc(e) && Bc(e.length) && !!q[Mc(e)];
}
var cf = uf;
function ff(e) {
  return function(t) {
    return e(t);
  };
}
var Gt = ff, He = { exports: {} };
He.exports;
(function(e, t) {
  var r = Un, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, s = a && r.process, i = function() {
    try {
      var f = o && o.require && o.require("util").types;
      return f || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(He, He.exports);
var Wt = He.exports, df = cf, pf = Gt, Nr = Wt, Ir = Nr && Nr.isTypedArray, hf = Ir ? pf(Ir) : df, mf = hf, gf = hc, vf = Ec, bf = Kt, yf = Jn, wf = jc, _f = mf, Sf = Object.prototype, $f = Sf.hasOwnProperty;
function xf(e, t) {
  var r = bf(e), n = !r && vf(e), o = !r && !n && yf(e), a = !r && !n && !o && _f(e), s = r || n || o || a, i = s ? gf(e.length, String) : [], f = i.length;
  for (var c in e)
    (t || $f.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    wf(c, f))) && i.push(c);
  return i;
}
var Qn = xf, Ef = Object.prototype;
function Cf(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ef;
  return e === r;
}
var Jt = Cf;
function Tf(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Xn = Tf, Of = Xn, Af = Of(Object.keys, Object), Rf = Af, kf = Jt, jf = Rf, Pf = Object.prototype, Ff = Pf.hasOwnProperty;
function Mf(e) {
  if (!kf(e))
    return jf(e);
  var t = [];
  for (var r in Object(e))
    Ff.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Bf = Mf, Nf = Hn, If = Zn;
function Df(e) {
  return e != null && If(e.length) && !Nf(e);
}
var Yn = Df, Lf = Qn, qf = Bf, Uf = Yn;
function Vf(e) {
  return Uf(e) ? Lf(e) : qf(e);
}
var Zt = Vf, Hf = st, zf = Zt;
function Kf(e, t) {
  return e && Hf(t, zf(t), e);
}
var Gf = Kf;
function Wf(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Jf = Wf, Zf = Te, Qf = Jt, Xf = Jf, Yf = Object.prototype, ed = Yf.hasOwnProperty;
function td(e) {
  if (!Zf(e))
    return Xf(e);
  var t = Qf(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !ed.call(e, n)) || r.push(n);
  return r;
}
var rd = td, nd = Qn, od = rd, ad = Yn;
function sd(e) {
  return ad(e) ? nd(e, !0) : od(e);
}
var Qt = sd, id = st, ld = Qt;
function ud(e, t) {
  return e && id(t, ld(t), e);
}
var cd = ud, ze = { exports: {} };
ze.exports;
(function(e, t) {
  var r = ne, n = t && !t.nodeType && t, o = n && !0 && e && !e.nodeType && e, a = o && o.exports === n, s = a ? r.Buffer : void 0, i = s ? s.allocUnsafe : void 0;
  function f(c, l) {
    if (l)
      return c.slice();
    var d = c.length, E = i ? i(d) : new c.constructor(d);
    return c.copy(E), E;
  }
  e.exports = f;
})(ze, ze.exports);
var fd = ze.exports;
function dd(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var pd = dd;
function hd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[o++] = s);
  }
  return a;
}
var md = hd;
function gd() {
  return [];
}
var eo = gd, vd = md, bd = eo, yd = Object.prototype, wd = yd.propertyIsEnumerable, Dr = Object.getOwnPropertySymbols, _d = Dr ? function(e) {
  return e == null ? [] : (e = Object(e), vd(Dr(e), function(t) {
    return wd.call(e, t);
  }));
} : bd, Xt = _d, Sd = st, $d = Xt;
function xd(e, t) {
  return Sd(e, $d(e), t);
}
var Ed = xd;
function Cd(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var to = Cd, Td = Xn, Od = Td(Object.getPrototypeOf, Object), ro = Od, Ad = to, Rd = ro, kd = Xt, jd = eo, Pd = Object.getOwnPropertySymbols, Fd = Pd ? function(e) {
  for (var t = []; e; )
    Ad(t, kd(e)), e = Rd(e);
  return t;
} : jd, no = Fd, Md = st, Bd = no;
function Nd(e, t) {
  return Md(e, Bd(e), t);
}
var Id = Nd, Dd = to, Ld = Kt;
function qd(e, t, r) {
  var n = t(e);
  return Ld(e) ? n : Dd(n, r(e));
}
var oo = qd, Ud = oo, Vd = Xt, Hd = Zt;
function zd(e) {
  return Ud(e, Hd, Vd);
}
var Kd = zd, Gd = oo, Wd = no, Jd = Qt;
function Zd(e) {
  return Gd(e, Jd, Wd);
}
var Qd = Zd, Xd = ce, Yd = ne, ep = Xd(Yd, "DataView"), tp = ep, rp = ce, np = ne, op = rp(np, "Promise"), ap = op, sp = ce, ip = ne, lp = sp(ip, "Set"), up = lp, cp = ce, fp = ne, dp = cp(fp, "WeakMap"), pp = dp, Ot = tp, At = zt, Rt = ap, kt = up, jt = pp, ao = nt, we = zn, Lr = "[object Map]", hp = "[object Object]", qr = "[object Promise]", Ur = "[object Set]", Vr = "[object WeakMap]", Hr = "[object DataView]", mp = we(Ot), gp = we(At), vp = we(Rt), bp = we(kt), yp = we(jt), le = ao;
(Ot && le(new Ot(new ArrayBuffer(1))) != Hr || At && le(new At()) != Lr || Rt && le(Rt.resolve()) != qr || kt && le(new kt()) != Ur || jt && le(new jt()) != Vr) && (le = function(e) {
  var t = ao(e), r = t == hp ? e.constructor : void 0, n = r ? we(r) : "";
  if (n)
    switch (n) {
      case mp:
        return Hr;
      case gp:
        return Lr;
      case vp:
        return qr;
      case bp:
        return Ur;
      case yp:
        return Vr;
    }
  return t;
});
var Yt = le, wp = Object.prototype, _p = wp.hasOwnProperty;
function Sp(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && _p.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var $p = Sp, xp = ne, Ep = xp.Uint8Array, Cp = Ep, zr = Cp;
function Tp(e) {
  var t = new e.constructor(e.byteLength);
  return new zr(t).set(new zr(e)), t;
}
var er = Tp, Op = er;
function Ap(e, t) {
  var r = t ? Op(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Rp = Ap, kp = /\w*$/;
function jp(e) {
  var t = new e.constructor(e.source, kp.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Pp = jp, Kr = Ht, Gr = Kr ? Kr.prototype : void 0, Wr = Gr ? Gr.valueOf : void 0;
function Fp(e) {
  return Wr ? Object(Wr.call(e)) : {};
}
var Mp = Fp, Bp = er;
function Np(e, t) {
  var r = t ? Bp(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Ip = Np, Dp = er, Lp = Rp, qp = Pp, Up = Mp, Vp = Ip, Hp = "[object Boolean]", zp = "[object Date]", Kp = "[object Map]", Gp = "[object Number]", Wp = "[object RegExp]", Jp = "[object Set]", Zp = "[object String]", Qp = "[object Symbol]", Xp = "[object ArrayBuffer]", Yp = "[object DataView]", eh = "[object Float32Array]", th = "[object Float64Array]", rh = "[object Int8Array]", nh = "[object Int16Array]", oh = "[object Int32Array]", ah = "[object Uint8Array]", sh = "[object Uint8ClampedArray]", ih = "[object Uint16Array]", lh = "[object Uint32Array]";
function uh(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Xp:
      return Dp(e);
    case Hp:
    case zp:
      return new n(+e);
    case Yp:
      return Lp(e, r);
    case eh:
    case th:
    case rh:
    case nh:
    case oh:
    case ah:
    case sh:
    case ih:
    case lh:
      return Vp(e, r);
    case Kp:
      return new n();
    case Gp:
    case Zp:
      return new n(e);
    case Wp:
      return qp(e);
    case Jp:
      return new n();
    case Qp:
      return Up(e);
  }
}
var ch = uh, fh = Te, Jr = Object.create, dh = function() {
  function e() {
  }
  return function(t) {
    if (!fh(t))
      return {};
    if (Jr)
      return Jr(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), ph = dh, hh = ph, mh = ro, gh = Jt;
function vh(e) {
  return typeof e.constructor == "function" && !gh(e) ? hh(mh(e)) : {};
}
var bh = vh, yh = Yt, wh = Oe, _h = "[object Map]";
function Sh(e) {
  return wh(e) && yh(e) == _h;
}
var $h = Sh, xh = $h, Eh = Gt, Zr = Wt, Qr = Zr && Zr.isMap, Ch = Qr ? Eh(Qr) : xh, Th = Ch, Oh = Yt, Ah = Oe, Rh = "[object Set]";
function kh(e) {
  return Ah(e) && Oh(e) == Rh;
}
var jh = kh, Ph = jh, Fh = Gt, Xr = Wt, Yr = Xr && Xr.isSet, Mh = Yr ? Fh(Yr) : Ph, Bh = Mh, Nh = Xu, Ih = ec, Dh = Gn, Lh = Gf, qh = cd, Uh = fd, Vh = pd, Hh = Ed, zh = Id, Kh = Kd, Gh = Qd, Wh = Yt, Jh = $p, Zh = ch, Qh = bh, Xh = Kt, Yh = Jn, em = Th, tm = Te, rm = Bh, nm = Zt, om = Qt, am = 1, sm = 2, im = 4, so = "[object Arguments]", lm = "[object Array]", um = "[object Boolean]", cm = "[object Date]", fm = "[object Error]", io = "[object Function]", dm = "[object GeneratorFunction]", pm = "[object Map]", hm = "[object Number]", lo = "[object Object]", mm = "[object RegExp]", gm = "[object Set]", vm = "[object String]", bm = "[object Symbol]", ym = "[object WeakMap]", wm = "[object ArrayBuffer]", _m = "[object DataView]", Sm = "[object Float32Array]", $m = "[object Float64Array]", xm = "[object Int8Array]", Em = "[object Int16Array]", Cm = "[object Int32Array]", Tm = "[object Uint8Array]", Om = "[object Uint8ClampedArray]", Am = "[object Uint16Array]", Rm = "[object Uint32Array]", D = {};
D[so] = D[lm] = D[wm] = D[_m] = D[um] = D[cm] = D[Sm] = D[$m] = D[xm] = D[Em] = D[Cm] = D[pm] = D[hm] = D[lo] = D[mm] = D[gm] = D[vm] = D[bm] = D[Tm] = D[Om] = D[Am] = D[Rm] = !0;
D[fm] = D[io] = D[ym] = !1;
function Ne(e, t, r, n, o, a) {
  var s, i = t & am, f = t & sm, c = t & im;
  if (r && (s = o ? r(e, n, o, a) : r(e)), s !== void 0)
    return s;
  if (!tm(e))
    return e;
  var l = Xh(e);
  if (l) {
    if (s = Jh(e), !i)
      return Vh(e, s);
  } else {
    var d = Wh(e), E = d == io || d == dm;
    if (Yh(e))
      return Uh(e, i);
    if (d == lo || d == so || E && !o) {
      if (s = f || E ? {} : Qh(e), !i)
        return f ? zh(e, qh(s, e)) : Hh(e, Lh(s, e));
    } else {
      if (!D[d])
        return o ? e : {};
      s = Zh(e, d, i);
    }
  }
  a || (a = new Nh());
  var b = a.get(e);
  if (b)
    return b;
  a.set(e, s), rm(e) ? e.forEach(function($) {
    s.add(Ne($, t, r, $, e, a));
  }) : em(e) && e.forEach(function($, C) {
    s.set(C, Ne($, t, r, C, e, a));
  });
  var p = c ? f ? Gh : Kh : f ? om : nm, y = l ? void 0 : p(e);
  return Ih(y || e, function($, C) {
    y && (C = $, $ = e[C]), Dh(s, C, Ne($, t, r, C, e, a));
  }), s;
}
var km = Ne, jm = km, Pm = 1, Fm = 4;
function Mm(e) {
  return jm(e, Pm | Fm);
}
var Bm = Mm;
const en = /* @__PURE__ */ ai(Bm);
function Nm() {
  return Ke(xo);
}
function zm(e, t = {}) {
  let r = (a) => a;
  const n = Nm();
  let o = en(typeof e == "object" ? e : data());
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
        const l = await oi(s, a, f, this.errors);
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
const Im = (e, t) => {
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
var tn;
(function(e) {
  e.pop = "pop", e.push = "push";
})(tn || (tn = {}));
var rn;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(rn || (rn = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var nn;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(nn || (nn = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Dm = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Lm = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function qm() {
  return Ke(Dm);
}
function Um(e) {
  return Ke(Lm);
}
const on = W({});
function Km() {
  pe(async () => {
    await t();
  });
  const e = Um();
  qm();
  const t = async () => {
    const r = e.meta.componentPath, n = await Im(/* @__PURE__ */ Object.assign({ "../App.vue": () => import("./App-9623d125.js") }), `../${r}.vue`), o = [];
    e.matched.map((s) => {
      s.meta.title && o.push({ path: s.path, title: s.meta.title });
    });
    const a = {
      title: n.default.title ? n.default.title : null,
      breadcrumbs: o || []
    };
    return on.value = a, a;
  };
  return Z(() => e.path, async () => {
    await t();
  }), {
    getOptions: t,
    options: on
  };
}
const an = {
  UsoftForm: Ro,
  UsoftFieldText: Sa,
  UsoftFieldPassword: Ea
}, Vm = (e) => {
  Object.keys(an).forEach((t) => {
    e.component(t, an[t]);
  });
}, Gm = { install: Vm };
export {
  Ea as UsoftFieldPassword,
  Sa as UsoftFieldText,
  Ro as UsoftForm,
  Gm as default,
  zm as useForm,
  Km as useLayout
};
