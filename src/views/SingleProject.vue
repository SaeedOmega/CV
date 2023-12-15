<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import { getProject } from "../data/singleProject";
import { useRoute } from "vue-router";

export default {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data: () => {
    const route = useRoute();
    return {
      ...getProject(route.params.projectName),
    };
  },
  setup() {},
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />
  </div>
</template>

<style scoped></style>
