import { openBlock as o, createBlock as r, unref as t, withCtx as e, createVNode as a } from "vue";
import { AdminLayout as _, UsoftForm as f, UsoftBox as l, UsoftFieldText as n } from "./upsoftware.js";
const d = {
  __name: "App",
  setup(s) {
    return (c, m) => (o(), r(t(_), null, {
      default: e(() => [
        a(t(f), null, {
          default: e(() => [
            a(t(l), { title: "Podstawowe informacje" }, {
              default: e(() => [
                a(t(n), {
                  admin: "",
                  label: "Nazwa"
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
};
export {
  d as default
};
