<script>
export default {
  props: ["client"],
};
</script>

<template>
  <div>
    <a :href="client.link" target="_blank"
      ><img
        :src="client.img"
        :alt="client.title"
        class="py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 dark:bg-secondary-light"
    /></a>
  </div>
</template>
