<script>
import counter from "vue3-autocounter";
export default {
  components: {
    counter,
  },
  data: () => {
    return {
      experienceTitle: "years-of-experience",
      projectsTitle: "projects-completed",
      text1: "Junior" + "\xa0\xa0\xa0" + "<",
      text2: "Me ",
      text3: "<" + "\xa0\xa0\xa0" + "Senior",
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
    <!-- About me counters -->
    <div
      class="container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
    >
      <!-- Years of experience counter -->
      <div class="mb-20 sm:mb-0">
        <counter
          ref="counter"
          :startAmount="0"
          :endAmount="1"
          :duration="1"
          :autoinit="true"
          @finished="alert(`Counting finished!`)"
          style="font-variation-settings: 'wght' 700"
          class="text-4xl text-secondary-dark dark:text-secondary-light mb-2"
          aria-label="About Status Counter"
        />
        <span class="block text-md text-ternary-dark dark:text-ternary-light">
          {{ $t(experienceTitle) }}
        </span>
      </div>

      <div
        class="text-3xl py-20 flex items-center text-ternary-dark dark:text-ternary-light"
      >
        <div>{{ text1 }}</div>
        <div class="font-extrabold text-6xl">&nbsp; {{ text2 }} &nbsp;</div>
        <div>{{ text3 }}</div>
      </div>

      <!-- Projects completed counter -->
      <div class="mb-20 sm:mb-0">
        <counter
          ref="counter"
          :startAmount="0"
          :endAmount="3"
          :duration="1"
          :autoinit="true"
          @finished="alert(`Counting finished!`)"
          style="font-variation-settings: 'wght' 700"
          class="text-4xl text-secondary-dark dark:text-secondary-light mb-2"
        />
        <span class="block text-md text-ternary-dark dark:text-ternary-light">
          {{ $t(projectsTitle) }}
        </span>
      </div>
    </div>
  </div>
</template>
