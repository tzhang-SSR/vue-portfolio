<script>
import SectionHeader from "./SectionHeader.vue";
import scrollMixin from "../scrollmixin";
import HTMLSVG from "../assets/icons/html.svg";
import CSSSVG from "../assets/icons/css.svg";
import JSSVG from "../assets/icons/javascript.svg";
import TSSVG from "../assets/icons/typescript.svg";
import ReactSVG from "../assets/icons/react.svg";
import NextSVG from "../assets/icons/next.svg";
import AngularSVG from "../assets/icons/angular.svg";
import VueSVG from "../assets/icons/vue.svg";
import WebpackSVG from "../assets/icons/webpack.svg";

export default {
  name: "Skills",
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
      skillItems: [
        {
          title: "HTML",
          icon: HTMLSVG,
          level: 96,
        },
        {
          title: "CSS",
          icon: CSSSVG,
          level: 95,
        },
        {
          title: "JavaScript",
          icon: JSSVG,
          level: 99,
        },
        {
          title: "TypeScript",
          icon: TSSVG,
          level: 89,
        },
        {
          title: "React.js",
          icon: ReactSVG,
          level: 95,
        },
        {
          title: "Next.js",
          icon: NextSVG,
          level: 85,
        },
        {
          title: "Angular",
          icon: AngularSVG,
          level: 80,
        },
        {
          title: "Vue.js",
          icon: VueSVG,
          level: 70,
        },
        {
          title: "Webpack",
          icon: WebpackSVG,
          level: 75,
        },
      ],
    };
  },
  computed: {
    summary() {
      return this.$tm("skillSummary");
    },
    title() {
      return this.$t("sectionTitles.skills");
    },
  },
};
</script>

<template>
  <section class="container skills" id="skills">
    <SectionHeader :title="title" />
    <div class="content skillsContent" :ref="refName">
      <div class="skillSummary">
        <p v-for="(message, index) in summary" :key="index">
          {{ message }}
        </p>
      </div>
      <ul class="skillProgress">
        <li v-for="skill in skillItems" :key="skill.title">
          <div class="skill-info">
            <img :src="skill.icon" :alt="skill.title" />
            <div>{{ skill.title }}</div>
          </div>
          <div class="skill-level">
            <span :style="{ width: skill.level + '%' }"></span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
img {
  transition: transform 0.3s;
}
img:hover {
  transform: scale(1.5);
}
.skills {
  max-width: 100%;
}
.skillsContent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  opacity: 0;
  padding: 50px;
  justify-items: center;
}
.skillsContent.active {
  transform: translateY(0);
  opacity: 1;
}

.skillProgress {
  width: 100%;
}
.skillSummary,
.skillProgress {
  max-width: 80%;
}

.skillProgress li {
  display: grid;
  grid-template-columns: 1fr minmax(100px, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.skill-info {
  display: flex;
  align-items: center;
  text-align: left;
  display: flex;
}
.skill-info img {
  margin-right: 10px;
}

.skill-level {
  width: 50%;
  min-width: 100px;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  right: 0;
}

.skill-level span {
  display: block;
  height: 100%;
  background-color: #41b883;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
}
@media screen and (max-width: 768px) {
  .skillsContent {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 10px;
  }
}
</style>
