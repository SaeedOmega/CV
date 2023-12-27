<script>
export default {
  props: ["singleProjectHeader"],
};
</script>

<template>
  <div :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'">
    <!-- Project heading and meta info -->
    <p
      style="font-variation-settings: 'wght' 500"
      class="text-start text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
    >
      {{ $t(singleProjectHeader.singleProjectTitle) }}
    </p>
    <div class="flex">
      <div class="flex items-center mx-10">
        <i
          data-feather="clock"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          style="font-variation-settings: 'wght' 500"
          class="mx-2 leading-none text-primary-dark dark:text-primary-light"
          >{{ $t(singleProjectHeader.singleProjectDate) }}</span
        >
      </div>
      <div class="flex items-center">
        <i
          data-feather="tag"
          :class="[$i18n.locale === 'fa' ? 'rotate-90' : 'rotate-0']"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          style="font-variation-settings: 'wght' 500"
          class="mx-2 leading-none text-primary-dark dark:text-primary-light"
          >{{ $t(singleProjectHeader.singleProjectTag) }}</span
        >
      </div>
    </div>
  </div>
</template>
