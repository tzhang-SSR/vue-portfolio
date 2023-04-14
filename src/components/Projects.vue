<script>
import SectionHeader from "./SectionHeader.vue";
import scrollMixin from "../scrollmixin";
import HTMLSVG from "../assets/logos/html.svg";
import CSSSVG from "../assets/logos/css.svg";
import JSSVG from "../assets/logos/javascript.svg";
import TSSVG from "../assets/logos/typescript.svg";
import AngularSVG from "../assets/logos/angular.svg";
import Screenshot from "../assets/screenshot.png";

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
  data() {
    return {
      projects: [
        {
          title: "YoutubePlaylist Upgrade",
          description:
            "A web app that upgrade your experience browsing saved videos from your precious playlists.",
          image: Screenshot,
          live: "https://youtube-playlist-upgrade.vercel.app/",
          github: "https://github.com/tzhang-SSR/youtube-playlist-upgrade",
          stacks: [HTMLSVG, CSSSVG, JSSVG, TSSVG, AngularSVG],
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container" id="projects">
    <SectionHeader title="Projects" />
    <div class="content projectContent" :ref="refName">
      <div class="projectCard" v-for="project in projects" :key="project.title">
        <div class="projectImage">
          <img :src="project.image" width="400" height="250" />
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
.projectContent {
  height: 100%;
  padding: 50px;
}

.projectCard {
  width: 500px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}
.projectInfo > * {
  margin-bottom: 10px;
}
.projectInfo {
  margin: 0 auto;
  width: 400px;
  text-align: left;
}
.projectLinks > a {
  margin-right: 10px;
}
.projectStacks > img {
  margin-right: 5px;
}
</style>
