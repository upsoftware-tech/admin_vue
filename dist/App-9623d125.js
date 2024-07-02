import { openBlock as t, createBlock as r, unref as e, withCtx as o, createVNode as a } from "vue";
import { UsoftForm as _, UsoftFieldText as c } from "./upsoftware.js";
const p = {
  __name: "App",
  setup(l) {
    return (s, f) => (t(), r(e(_), null, {
      default: o(() => [
        a(e(c), { label: "Adres e-mail" })
      ]),
      _: 1
    }));
  }
};
export {
  p as default
};
