import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";
import BackToTop from "vue-backtotop";
import { createI18n } from "vue-i18n";

// import translations
import fa from "./locales/fa.json";
import en from "./locales/en.json";

// configure i18n
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { fa, en },
});

const feather = require("feather-icons");
feather.replace();

createApp(App).use(router).use(BackToTop).use(i18n).mount("#app");

const appTheme = localStorage.getItem("theme");

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
  appTheme === "dark" &&
  document.querySelector("body").classList.contains("app-theme")
) {
  document.querySelector("body").classList.add("bg-primary-dark");
} else {
  document.querySelector("body").classList.add("bg-secondary-light");
}
