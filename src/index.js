import UsoftForm from "./components/Form/Body.vue";

import useForm from "./composables/useForm.js";
import useLayout from "./composables/useLayout.js";

const components = {
    UsoftForm
};

const install = (app) => {
    Object.keys(components).forEach((name) => {
        app.component(name, components[name]);
    });
};

export default { install };
export {
    UsoftForm,
    useLayout,
    useForm
};
