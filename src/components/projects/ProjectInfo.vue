<script>
import feather from "feather-icons";

export default {
  props: ["projectInfo"],

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'"
    class="block sm:flex gap-0 sm:gap-10 mt-14"
  >
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-start">
      <!-- Single project client details -->
      <div class="mb-7">
        <p
          style="font-variation-settings: 'wght' 500"
          class="text-2xl text-secondary-dark dark:text-secondary-light mb-2"
        >
          {{ $t("about-client-single-project") }}
        </p>
        <ul class="leading-loose">
          <li
            v-for="info in projectInfo.companyInfos"
            :key="info"
            class="text-ternary-dark dark:text-ternary-light"
          >
            <span>{{ $t(info.title) }}: </span>
            <a
              href="#"
              :class="
                info.title == 'Website' || info.title == 'Phone'
                  ? 'hover:underline cursor-pointer'
                  : ''
              "
              aria-label="Project Website and Phone"
              >{{ info.id !== 3 ? $t(info.details) : info.details }}</a
            >
          </li>
        </ul>
      </div>

      <!-- Single project objectives -->
      <div class="mb-7">
        <p
          style="font-variation-settings: 'wght' 500"
          class="text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ $t("objective") }}
        </p>
        <p class="text-primary-dark dark:text-ternary-light">
          {{ $t(projectInfo.objectivesDetails) }}
        </p>
      </div>

      <!-- Single project technologies -->
      <div class="mb-7">
        <p
          style="font-variation-settings: 'wght' 500"
          class="text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ $t("tools-and-technologies") }}
        </p>
        <p
          class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ projectInfo.technologies[0].techs.join(", ") }}
        </p>
      </div>

      <!-- Single project social sharing -->
      <div>
        <p
          style="font-variation-settings: 'wght' 500"
          class="text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ $t("share-this") }}
        </p>
        <div class="flex items-center gap-3 mt-5">
          <a
            v-for="social in projectInfo.socialSharings"
            :key="social.id"
            :href="social.url"
            target="__blank"
            aria-label="Share Project"
            class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
            ><i :data-feather="social.icon" class="w-4 lg:w-5 h-4 lg:h-5"></i
          ></a>
        </div>
      </div>
    </div>

    <!-- Single project right section details -->
    <div class="w-full sm:w-2/3 text-start mt-10 sm:mt-0">
      <p
        style="font-variation-settings: 'wght' 500"
        class="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
      >
        {{ $t("challenge") }}
      </p>
      <p
        v-for="projectDetail in projectInfo.projectDetails"
        :key="projectDetail.id"
        class="mb-5 text-lg text-ternary-dark dark:text-ternary-light"
      >
        {{ $t(projectDetail.details) }}
      </p>
    </div>
  </div>
</template>
