import useForm from "./composables/useForm.js";
import useLayout from "./composables/useLayout.js";
import * as components from './components';

import './styles/quasar.components.scss';
import './styles/admin/app.scss';

const install = (app) => {
    Object.keys(components).forEach((key) => {
        const component = components[key];
        app.component(component.name, component);
    });
};

export default { install };
export { useForm, useLayout };
export * from './components';
