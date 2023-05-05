<script>
export default {
  data() {
    return {
      navItems: [
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
      ],
      activeId: "home",
    };
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
      </ul>
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
  width: 25%;
  height: 100%;
}
.navItems {
  right: 0;
  display: flex;
  align-items: center;
  text-align: right;
  height: 100%;
  list-style-type: none;
  padding: 0;
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
  font-weight: 500;
  letter-spacing: 0.5px;
}
</style>
