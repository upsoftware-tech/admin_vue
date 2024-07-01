import { openBlock as _, createElementBlock as s, toDisplayString as r } from "vue";
const a = (t, e) => {
  const c = t.__vccOpts || t;
  for (const [o, n] of e)
    c[o] = n;
  return c;
}, p = { class: "btn-cta" }, u = {
  __name: "FccButton",
  props: {
    text: String
  },
  setup(t) {
    return (e, c) => (_(), s("button", p, r(t.text), 1));
  }
}, i = /* @__PURE__ */ a(u, [["__scopeId", "data-v-8ca0b1b1"]]);
export {
  i as FccButton
};
