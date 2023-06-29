import './assets/main.css';
import { useStore } from './stores/store.js';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
const store = useStore(pinia);

app.use(pinia);
app.use(router);

app.provide('store', store);

app.mount('#app');