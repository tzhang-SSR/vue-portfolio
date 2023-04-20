<script>
export default {
  name: "SectionHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
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
};
</script>
<template>
  <section>
    <div class="sectionHeader" ref="content">
      <h2>{{ title }}</h2>
      <div class="underline"></div>
    </div>
  </section>
</template>
<style scoped>
h2 {
  font-size: 35px;
}
.sectionHeader {
  transform: translateY(150px);
  opacity: 0;
  transition: 2s all ease;
  text-align: center;
  text-align: center;
  padding-top: 100px;
}
.sectionHeader.active {
  transform: translateY(0);
  opacity: 1;
}
.underline {
  margin: 10px auto;
  width: 150px;
  border-bottom: 3px solid #41b883;
}
</style>
