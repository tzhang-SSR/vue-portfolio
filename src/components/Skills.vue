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
    };
  },
};
</script>

<template>
  <section class="container skills" id="skills">
    <SectionHeader title="Skills" />
    <div class="content skillsContent" :ref="refName">
      <div class="summary">
        <p>
          Hi! I'm a <strong>Frontend Engineer</strong> with a strong background
          in modern Frontend libraries and frameworks such as React.js, Next.js,
          Vue.js, and Bootstrap. I specialize in building high-performance web
          applications using HTML, CSS, JavaScript, and TypeScript, and have 3
          years of experience in this field.
        </p>
        <br />
        <p>
          Currently working as a Frontend Engineer at data.ai, I develop
          innovative data analysis web reports and handle data integration and
          functionality testing. My hard-working nature, along with an
          innovative mindset, helps me tackle complex challenges and come up
          with fresh solutions.
        </p>
        <br />
        <p>
          With a strong work ethic, I am dedicated to ensuring the success of
          any project or task I undertake. I am always willing to go the extra
          mile and take pride in delivering exceptional results.
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
