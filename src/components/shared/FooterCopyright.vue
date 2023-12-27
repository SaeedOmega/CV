<script>
export default {};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'"
      style="font-variation-settings: 'wght' 500"
      class="text-lg flex text-ternary-dark dark:text-ternary-light"
    >
      &copy;
      {{
        new Date().toLocaleString($i18n.locale == "fa" ? "fa-ir" : "en", {
          year: "numeric",
        })
      }}.
      <a
        href="https://github.com/realstoman/vuejs-tailwindcss-portfolio"
        target="__blank"
        style="font-variation-settings: 'wght' 500"
        class="font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
      >
        {{ $t("footer-copyRight") }}
      </a>
      . {{ $t("developed-by") }}
      <a
        href="https://stoman.me"
        target="__blank"
        :class="[$i18n.locale === 'en' ? 'ml-1' : 'mr-1']"
        style="font-variation-settings: 'wght' 500"
        class="font-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
        >{{ $t("name") }}</a
      >
    </div>
  </div>
</template>
