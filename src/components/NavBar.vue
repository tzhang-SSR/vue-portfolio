<script>
import LanguagePicker from "./LanguagePicker.vue";
import HamburgerSVG from "../assets/icons/hamburger.svg";
import HTMLSVG from "../assets/icons/html.svg";

export default {
  data() {
    return {
      activeId: "home",
      HamburgerSVG,
      showNavMenu: false,
    };
  },
  computed: {
    navItems() {
      return [
        {
          title: this.$t("sectionTitles.home"),
          link: "#home",
          id: "home",
          isActive: true,
        },
        {
          title: this.$t("sectionTitles.skills"),
          link: "#skills",
          id: "skills",
          isActive: false,
        },
        {
          title: this.$t("sectionTitles.works"),
          link: "#works",
          id: "works",
          isActive: false,
        },
        {
          title: this.$t("sectionTitles.projects"),
          link: "#projects",
          id: "projects",
          isActive: false,
        },
      ];
    },
  },
  mounted() {
    // window.addEventListener("scroll", this.handleScroll);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // setActiveId(entry.target.id);
            this.activeId = entry.target.id;
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    this.navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });
  },
  beforeDestroy() {
    // window.removeEventListener("scroll", this.handleScroll);
    this.navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.unobserve(element);
      }
    });
  },
  methods: {
    handleScroll() {
      const scrollY = window.pageYOffset;
      this.navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            item.isActive = true;
          } else {
            item.isActive = false;
          }
        }
      });
    },
    openNavMenu() {
      this.showNavMenu = true;
    },
    closeNavMenu() {
      this.showNavMenu = false;
    },
  },
  components: {
    LanguagePicker,
  },
};
</script>

<template>
  <div class="navbar">
    <div class="navbarContent">
      <ul class="navItems">
        <li
          v-for="item in navItems"
          :key="item.id"
          :class="item.id === activeId && 'active'"
        >
          <a :href="item.link">{{ item.title }}</a>
        </li>
        <li>
          <LanguagePicker />
        </li>
      </ul>
    </div>
    <div class="hamburger" @click="openNavMenu">
      <img :src="HamburgerSVG" alt="hamburger menu icon" />
    </div>
    <div class="navbarMenu" v-if="showNavMenu">
      <ul class="navMenuItems">
        <li
          v-for="item in navItems"
          :key="item.id"
          :class="item.id === activeId && 'active'"
        >
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
      <div class="closeIcon" @click="closeNavMenu">X</div>
    </div>
  </div>
</template>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 300px;
  height: 80px;
  z-index: 100;
  background-color: #f5f0ff;
}
.navbarContent {
  position: absolute;
  right: 10px;
  width: 35%;
  height: 100%;
}
ul {
  padding: 0;
  list-style-type: none;
}
.navItems {
  right: 0;
  display: flex;
  align-items: center;
  text-align: right;
  height: 100%;
  text-align: right;
}
li {
  font-size: 20px;
  margin: 15px 20px;
}
li:hover {
  border-bottom: 2px solid #41b883;
}
li.active {
  border-bottom: 2px solid #41b883;
}
a {
  letter-spacing: 0.5px;
}
.hamburger {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  right: 20px;
  position: absolute;
  top: 25px;
  display: none;
}
.navbarMenu {
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  background-color: #f5f0ff;
}
.closeIcon {
  font-size: 25px;
  cursor: pointer;
}
@media screen and (max-width: 765px) {
  .navbarContent {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}
</style>
