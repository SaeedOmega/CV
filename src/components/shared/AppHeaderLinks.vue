<script>
export default {
  props: ["showModal", "isOpen"],
  data() {
    return {
      lang: this.$i18n.locale === "en" ? "En" : "فا",
    };
  },
  watch: {
    lang(newLang) {
      if (newLang === "En") this.$i18n.locale = "en";
      else this.$i18n.locale = "fa";
    },
  },
};
</script>

<template>
  <!-- Header links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <router-link
      to="/projects"
      class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2"
      aria-label="Projects"
      >{{ $t("headerLinkProjects") }}</router-link
    >
    <router-link
      to="/about"
      class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="About Me"
      >{{ $t("headerLinkAboutMe") }}</router-link
    >
    <router-link
      to="/contact"
      class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
      aria-label="Contact"
      >{{ $t("headerLinkContact") }}</router-link
    >
    <div
      class="border-t-2 mt-2 flex sm:hidden flex-row-reverse items-center justify-end pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
    >
      <div
        :class="[lang !== 'En' ? 'mr-5' : 'ml-5']"
        class="flex gap-2 items-center"
      >
        <img
          v-if="lang === 'En'"
          src="../../../public/united-kingdom.png"
          height="32"
        />
        <img
          v-if="lang === 'فا'"
          src="../../../public/flag.png"
          width="32"
        />
        <select
          v-model="lang"
          class="border-none bg-primary-light dark:bg-ternary-dark shadow-sm rounded-xl cursor-pointer"
        >
          <option>En</option>
          <option class="font-mikhak">فا</option>
        </select>
      </div>
      <button
        class="text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 duration-500"
        @click="showModal()"
        aria-label="Hire Me Button"
      >
        {{ $t("send-email") }}
      </button>
    </div>
  </div>
</template>
