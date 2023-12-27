<script>
export default {
  props: ["project"],
};
</script>

<template>
  <router-link
    :to="`/projects/${project.path}`"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none w-full h-full"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        style="font-variation-settings: 'wght' 700"
        class="text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ $t(project.title) }}
      </p>
      <span
        style="font-variation-settings: 'wght' 500"
        class="font-medium text-lg text-ternary-dark dark:text-ternary-light"
        >{{ $t(`${project.categoryShow}-select`) }}</span
      >
    </div>
  </router-link>
</template>
