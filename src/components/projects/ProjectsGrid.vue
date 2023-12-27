<script>
import feather from "feather-icons";
import ProjectsFilter from "./ProjectsFilter.vue";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";

export default {
  components: { ProjectSingle, ProjectsFilter },
  data: () => {
    return {
      projects,
      selectedCategory: "",
      searchProject: "",
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        console.log(item.categoryShow.charAt(0) + item.categoryShow.slice(1));
        let category = item.categoryShow.charAt(0) + item.categoryShow.slice(1);
        return category.includes(this.selectedCategory);
      });
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center">
      <p
        style="font-variation-settings: 'wght' 500"
        class="text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        {{ $t("projects-portfolio-0") }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-10 sm:mt-10">
      <h3
        class="text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"
      >
        {{ $t("search-projects") }}
      </h3>
      <div
        :dir="$i18n.locale === 'fa' ? 'rtl' : 'ltr'"
        class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
      >
        <div class="flex justify-between gap-2">
          <span
            class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            <i
              data-feather="search"
              class="text-ternary-dark dark:text-ternary-light"
            ></i>
          </span>
          <input
            v-model="searchProject"
            style="font-variation-settings: 'wght' 500"
            class="font-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name"
            name="name"
            type="search"
            required=""
            :placeholder="$t('search-projects-placeHolder')"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter @filter="selectedCategory = $event" />
      </div>
    </div>

    <!-- Projects grid -->
    <div
      class="text-secondary-dark text-md sm:text-xl mt-6 font-normal dark:text-ternary-light text-center"
      v-show="filteredProjects.length <= 0"
    >
      {{ $t("no-founded-project") }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
