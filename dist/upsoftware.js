import { openBlock as _, createElementBlock as a, toDisplayString as r } from "vue";
const p = (t, c) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of c)
    o[e] = s;
  return o;
}, l = { class: "btn-cta" }, u = {
  __name: "FccButton",
  props: {
    text: String
  },
  setup(t) {
    return (c, o) => (_(), a("button", l, r(t.text), 1));
  }
}, i = /* @__PURE__ */ p(u, [["__scopeId", "data-v-8ca0b1b1"]]), n = {
  FccButton: i
}, b = (t) => {
  Object.keys(n).forEach((c) => {
    t.component(c, n[c]);
  });
}, x = { install: b };
export {
  i as FccButton,
  x as default
};
