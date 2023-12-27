<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "bio-line-1",
        },
        {
          id: 2,
          bio: "bio-line-2",
        },
        {
          id: 3,
          bio: "bio-line-3",
        },
        { id: 4, bio: "bio-line-4" },
      ],
    };
  },
};
</script>

<template>
  <div
    :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'"
    class="block sm:flex sm:gap-10 mt-10 sm:mt-20"
  >
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-start">
      <p
        v-for="bio in bios"
        :key="bio.id"
        style="font-variation-settings: 'wght' 400"
        class="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ $t(bio.bio) }}
      </p>
    </div>
  </div>
</template>
