<script>
import AboutClientSingle from "./AboutClientSingle.vue";

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clientsHeading: "Some of the brands I have worked with",
      clients: [
        {
          id: 1,
          title: "Click",
          img: require("@/assets/images/brands/click.png"),
        },
        {
          id: 2,
          title: "Virasty",
          img: require("@/assets/images/brands/virasty.jpg"),
        },
        {
          id: 3,
          title: "Gap",
          img: require("@/assets/images/brands/gap-messanger.jpg"),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="flex mt-10 sm:mt-14 gap-14 justify-center">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
