import FccButton from "./components/FccButton.vue";

const components = {
    FccButton
};

const install = (app) => {
    Object.keys(components).forEach((name) => {
        app.component(name, components[name]);
    });
};

export default { install };
export { FccButton };
