<script>
export default {
  props: {
    select: {
      type: String,
      default: "projects",
      required: true,
    },
    selectOptions: {
      type: Array,
      default: () => ["web-application", "mini-project"],
    },
  },
};
</script>

<template>
  <select
    style="font-variation-settings: 'wght' 500"
    :dir="$i18n.locale.value === 'fa' ? 'rtl' : 'ltr'"
    @change="$emit('filter', $event.target.value)"
    :name="select"
    :id="select"
    class="font-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
  >
    <option value class="text-sm sm:text-md">
      {{ $t("all-projects-select") }}
    </option>
    <option
      v-for="option in selectOptions"
      :key="option"
      :value="option"
      class="sm:text-md"
    >
      {{ $t(`${option}-select`) }}
    </option>
  </select>
</template>
