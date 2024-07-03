import useForm from "./composables/useForm.js";
import useLayout from "./composables/useLayout.js";
import UsoftForm from "./components/Form/Body.vue";
import UsoftFieldText from "./components/Form/Field/Text.vue";
import UsoftFieldPassword from "./components/Form/Field/Password.vue";
import UsoftBox from "./components/Box/index.vue";
import AdminLayout from "./layouts/AdminLayout.vue";

const components = [
    AdminLayout,
    UsoftForm,
    UsoftFieldText,
    UsoftFieldPassword,
    UsoftBox
]

import './styles/quasar.components.scss';
import './styles/admin/app.scss';

const install = (app) => {
    Object.keys(components).forEach((key) => {
        const component = components[key];
        app.component(component.name, component);
    });
};

export default { install };
export { useForm, useLayout, AdminLayout, UsoftForm, UsoftFieldText, UsoftFieldPassword, UsoftBox };
