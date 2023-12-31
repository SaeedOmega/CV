<script>
import AboutClientSingle from "./AboutClientSingle.vue";

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clientsHeading: "client-heading",
      clients: [
        {
          id: 1,
          title: "Click",
          img: require("@/assets/images/brands/click.png"),
          link: "https://clickmis.net/",
        },
        {
          id: 2,
          title: "Virasty",
          img: require("@/assets/images/brands/virasty.jpg"),
          link: "https://virasty.com/",
        },
        {
          id: 3,
          title: "Gap",
          img: require("@/assets/images/brands/gap-messanger.jpg"),
          link: "https://gap.im/",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      style="font-variation-settings: 'wght' 500"
      class="text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ $t(clientsHeading) }}
    </p>
    <div
      class="flex mt-10 md:flex-row flex-col items-center sm:mt-14 gap-14 md:justify-center"
    >
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
