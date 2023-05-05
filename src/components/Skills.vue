<script>
import SectionHeader from "./SectionHeader.vue";
import scrollMixin from "../scrollmixin";
import HTMLSVG from "../assets/logos/html.svg";
import CSSSVG from "../assets/logos/css.svg";
import JSSVG from "../assets/logos/javascript.svg";
import TSSVG from "../assets/logos/typescript.svg";
import ReactSVG from "../assets/logos/react.svg";
import NextSVG from "../assets/logos/next.svg";
import AngularSVG from "../assets/logos/angular.svg";
import VueSVG from "../assets/logos/vue.svg";
import WebpackSVG from "../assets/logos/webpack.svg";

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
      summary: this.$tm("skillSummary"),
      title: this.$t("sectionTitles.skills"),
    };
  },
};
</script>

<template>
  <section class="container skills" id="skills">
    <SectionHeader :title="title" />
    <div class="content skillsContent" :ref="refName">
      <div class="summary">
        <p v-for="(message, index) in summary" :key="index">
          {{ message }}
        </p>
      </div>
      <ul>
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
h2 {
  font-size: 38px;
  line-height: 57px;
}
img {
  transition: transform 0.3s;
}
img:hover {
  transform: scale(1.5);
}
.skillsContent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  transform: translateY(150px);
  opacity: 0;
  transition: 2s all ease;
  padding: 50px;
  width: 60%;
}
.skillsContent.active {
  transform: translateY(0);
  opacity: 1;
}

.skills h2 {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}

.skills li {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
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
  min-width: 300px;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.skill-level span {
  display: block;
  height: 100%;
  background-color: #41b883;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
}
</style>
