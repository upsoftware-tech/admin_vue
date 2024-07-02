import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

const app = createApp(App);
app.use(Quasar, {});
app.mount('#app');
