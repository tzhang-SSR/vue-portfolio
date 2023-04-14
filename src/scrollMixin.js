export default {
  props: {
    refName: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // Add event listener for scroll event
    window.addEventListener("scroll", () =>
      this.onScroll(this.$refs[this.refName])
    );
  },
  destroyed() {
    // Remove event listener for scroll event
    window.removeEventListener("scroll", () =>
      this.onScroll(this.$refs[this.refName])
    );
  },
  methods: {
    onScroll(ref) {
      const visibleHeight = 150;
      const windowHeight = window.innerHeight;
      const elementTop = ref.getBoundingClientRect().top;
      if (elementTop < windowHeight - visibleHeight) {
        ref.classList.add("active");
      } else {
        ref.classList.remove("active");
      }
    },
  },
};
