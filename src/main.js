import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import "./assets/main.css";
import en from "./assets/locale/en.json";
import cn from "./assets/locale/cn.json";
import vClickOutside from "v-click-outside";
const { bind, unbind } = vClickOutside.directive;

const app = createApp(App);

const messages = {
  en,
  cn,
};

const i18n = createI18n({
  locale: "en",
  messages,
});

app.directive("click-outside", {
  mounted(el, bindling) {
    bind(el, { value: bindling.value });
  },
  beforeUnmount(el) {
    unbind(el);
  },
});

app.use(i18n).mount("#app");
