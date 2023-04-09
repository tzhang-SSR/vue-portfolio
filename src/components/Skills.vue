<script>
import SectionHeader from "./SectionHeader.vue";
export default {
  name: "Skills",
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  components: {
    SectionHeader,
  },
  methods: {
    onScroll(event) {
      const visibleHeight = 150;
      const windowHeight = window.innerHeight;
      const elementTop = this.$refs.content.getBoundingClientRect().top;
      if (elementTop < windowHeight - visibleHeight) {
        this.$refs.content.classList.add("active");
      } else {
        this.$refs.content.classList.remove("active");
      }
    },
  },
  data() {
    return {
      skillItems: [
        {
          title: "HTML",
          icon: "fab fa-html5",
          level: 96,
        },
        {
          title: "CSS",
          icon: "fab fa-css3-alt",
          level: 95,
        },
        {
          title: "JavaScript",
          icon: "fab fa-js",
          level: 99,
        },
        {
          title: "TypeScript",
          icon: "fab fa-js",
          level: 89,
        },
        {
          title: "React.js",
          icon: "fab fa-react",
          level: 95,
        },
        {
          title: "Next.js",
          icon: "fab fa-react",
          level: 85,
        },
      ],
    };
  },
};
</script>

<template>
  <section class="container skills">
    <SectionHeader title="Skills" />
    <div class="content skillsContent" ref="content">
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
            <i :class="skill.icon"></i>
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
.skills {
  background-color: aqua;
}
.skillsContent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  transform: translateY(150px);
  opacity: 0;
  transition: 2s all ease;
  padding: 50px;
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

.skills i {
  font-size: 20px;
  margin-right: 10px;
}

.skill-info {
  display: flex;
  align-items: center;
  text-align: left;
  display: flex;
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
  background-color: #007bff;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
}
</style>
