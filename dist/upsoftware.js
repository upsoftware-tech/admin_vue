import { resolveComponent as s, openBlock as a, createBlock as l, normalizeProps as _, guardReactiveProps as f, withCtx as d, createElementVNode as p, renderSlot as i } from "vue";
const m = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [r, c] of t)
    e[r] = c;
  return e;
}, u = {}, v = { class: "tw-grid tw-gap-y-4" };
function g(o, t) {
  const e = s("q-form");
  return a(), l(e, _(f(o.$attrs)), {
    default: d(() => [
      p("div", v, [
        i(o.$slots, "default")
      ])
    ]),
    _: 3
  }, 16);
}
const h = /* @__PURE__ */ m(u, [["render", g]]), n = {
  UsoftForm: h
}, k = (o) => {
  Object.keys(n).forEach((t) => {
    o.component(t, n[t]);
  });
}, x = { install: k };
export {
  h as UsoftForm,
  x as default
};
