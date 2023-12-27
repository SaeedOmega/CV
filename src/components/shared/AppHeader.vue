<script>
import ThemeSwitcher from "../ThemeSwitcher";
import feather from "feather-icons";
import AppHeaderLinks from "./AppHeaderLinks.vue";
import Button from "../reusable/Button.vue";

export default {
  components: {
    ThemeSwitcher,
    AppHeaderLinks,
    Button,
  },
  data() {
    return {
      isOpen: false,
      theme: "",
      modal: false,
      categories: [
        {
          id: 1,
          value: "web",
          name: "Web Application",
        },
        {
          id: 2,
          value: "web",
          name: "Mini Project",
        },
      ],
    };
  },

  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  methods: {
    onLangClick(event) {
      this.$i18n.locale = event.target.innerText === "En" ? "en" : "fa";
      localStorage.lang = this.$i18n.locale;
    },
    updateTheme(theme) {
      this.theme = theme;
    },
    showModal() {
      window.open("mailto:SaeedNitro2017@gmail.com");
    },
    setDir() {
      if (this.$i18n.locale === "fa") return "rtl";
      return "ltr";
    },
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div
      :dir="setDir()"
      class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-4 sm:px-0">
        <!-- Header logos -->
        <div>
          <router-link class="flex gap-2.5 items-center" to="/"
            ><p
              class="font-extrabold text-4xl font-sans pb-0 text-indigo-600 bg-[#ececf4] p-2.5 rounded-xl pt-1"
            >
              S
            </p>
            <p
              class="font-medium text-xl font-sans text-primary-dark dark:text-secondary-light"
            >
              {{ $t("name") }}
            </p>
          </router-link>
        </div>

        <!-- Theme switcher small screen -->
        <theme-switcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"
        />

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Header links -->
      <AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />

      <!-- Header right section buttons -->
      <div
        class="hidden gap-4 sm:flex justify-between items-center flex-col md:flex-row"
      >
        <div class="flex gap-2 items-center">
          <img
            v-if="$i18n.locale === 'en'"
            src="../../../public/united-kingdom.png"
            height="32"
          />
          <img
            v-if="$i18n.locale === 'fa'"
            src="../../../public/flag.png"
            width="32"
          />
          <div class="border-none flex cursor-pointer">
            <div
              @click="onLangClick"
              :class="{
                'ml-2 dark:text-primary-light': $i18n.locale === 'fa',
                'bg-primary-light hover:bg-gray-200 hover:dark:text-black':
                  $i18n.locale === 'en',
              }"
              class="p-2 rounded-xl hover:bg-gray-100 hover:dark:text-black"
            >
              En
            </div>
            <div
              @click="onLangClick"
              :class="{
                'ml-2 dark:text-primary-light': $i18n.locale === 'en',
                'bg-primary-light hover:bg-gray-200 hover:dark:text-black':
                  $i18n.locale === 'fa',
              }"
              class="font-mikhak p-2 px-3 rounded-xl hover:bg-gray-100 hover:dark:text-black"
            >
              فا
            </div>
          </div>
        </div>
        <!-- Hire me button -->
        <div class="hidden md:block">
          <Button
            :title="$t('send-email')"
            class="text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
            @click="showModal()"
          />
        </div>

        <!-- Theme switcher large screen -->
        <theme-switcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
  @apply text-indigo-700;
  @apply dark:text-indigo-400;
  @apply font-medium;
}
</style>
