<script>
import SectionHeader from "./SectionHeader.vue";
import scrollMixin from "../scrollmixin";

export default {
  props: {
    refName: {
      type: String,
      required: true,
    },
  },
  components: {
    SectionHeader,
  },
  mixins: [scrollMixin],
  computed: {
    title() {
      return this.$tm("sectionTitles.projects");
    },
    projects() {
      return this.$tm("projects");
    },
  },
};
</script>
<template>
  <div class="container" id="projects">
    <SectionHeader :title="title" />
    <div class="content projectContent" :ref="refName">
      <div class="projectCard" v-for="project in projects" :key="project.title">
        <div>
          <img class="projectImage" :src="project.image" />
        </div>
        <div class="projectInfo">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="projectLinks">
            <a :href="project.live" class="projectLink">Live</a>
            <a :href="project.github" class="projectLink">Github</a>
          </div>
          <div class="projectStacks">
            <img v-for="stack in project.stacks" :src="stack" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h3 {
  max-width: 100%;
}
.projectContent {
  height: 100%;
  padding: 50px;
}

.projectCard {
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  border: 2px solid #34495e;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
}
.projectImage {
  max-width: 100%;
}
.projectCard:hover {
  transform: scale(1.05);
}

.projectInfo > * {
  margin-bottom: 10px;
}
.projectInfo {
  margin: 0 auto;
  max-width: 100%;
  text-align: left;
}
.projectLinks > a {
  margin-right: 10px;
}

a:hover {
  border-bottom: 2px solid #41b883;
}
.projectStacks > img {
  margin-right: 5px;
}
@media screen and (max-width: 768px) {
  .projectCard {
    width: 80%;
    min-width: 300px;
  }
}
</style>
