import UsoftForm from "./components/Form/Body.vue";
import UsoftFieldText from "./components/Form/Field/Text.vue";
import UsoftFieldPassword from "./components/Form/Field/Password.vue";

import useForm from "./composables/useForm.js";
import useLayout from "./composables/useLayout.js";

const components = {
    UsoftForm,
    UsoftFieldText,
    UsoftFieldPassword
};

const install = (app) => {
    Object.keys(components).forEach((name) => {
        app.component(name, components[name]);
    });
};

export default { install };
export {
    UsoftForm,
    UsoftFieldText,
    UsoftFieldPassword,
    useLayout,
    useForm
};
