import { createApp } from 'vue';
import App from './App.vue';
import i18n from './plugins/i18n';
// This Module only introduces components globally before login
import globalCom from './plugins/registerComponents';
import router from './router';
import store from './store';
import { isDevMode } from './utils/env';

(async () => {
  const app = createApp(App);
  app.use(globalCom).use(router).use(store);
  await Promise.all([app.use(i18n), router.isReady()]);
  app.mount('#app', true);
  if (isDevMode()) {
    app.config.performance = true;
    window.__APP__ = app;
  }
})();
