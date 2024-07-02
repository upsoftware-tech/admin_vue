import UsoftForm from "./components/Form/Body.vue";

const components = {
    UsoftForm
};

const install = (app) => {
    Object.keys(components).forEach((name) => {
        app.component(name, components[name]);
    });
};

export default { install };
export { UsoftForm };
