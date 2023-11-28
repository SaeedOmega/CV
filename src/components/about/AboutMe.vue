<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "Hi, I am Saeed Saadatifar ,I have 23 Years Old and I live in Neyshabour City but I have no problem with living in another city. ",
        },
        {
          id: 2,
          bio: 'I am Frontend Developer 👨‍💻, I am good at "HTML" , "CSS" , "JS" , "ReactJs" , "Zustand" , "NextJs" , "React Router" , "VueJs" , "Pinia" , "NuxtJs" , "Vue Router" , "Material UI" , "TailwindCss". I have Bachelor of Engineering from Shahrood University of Technology, I learn Many Programing Language For Ex: C++, Java, Python.',
        },
        {
          id: 3,
          bio: "I Love programing😎",
        },
        { id: 4, bio: "I am Achieving My Goals💯" },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
