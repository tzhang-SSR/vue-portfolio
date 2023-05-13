<script>
import SectionHeader from "./SectionHeader.vue";
import scrollMixin from "../scrollmixin";
export default {
  name: "Works",
  props: {
    refName: {
      type: String,
      required: true,
    },
  },
  computed: {
    works() {
      return this.$tm("works");
    },
    title() {
      return this.$tm("sectionTitles.works");
    },
  },
  components: {
    SectionHeader,
  },
  mixins: [scrollMixin],
};
</script>

<template>
  <div class="container" id="works">
    <SectionHeader :title="title" />
    <div class="content workContent" :ref="refName">
      <ul class="timeline">
        <li v-for="work in works" :key="work.title">
          <time>{{ work.time }}</time>
          <h3>{{ work.company }}</h3>
          <h4>{{ work.title }}</h4>
          <p v-for="description in work.description" :key="description">
            - {{ description }}
          </p>
        </li>
      </ul>
      <div class="timelineMarker"><div class="innerCircle"></div></div>
    </div>
  </div>
</template>
<style scoped>
.timeline {
  position: relative;
  margin-top: 50px;
  padding: 0;
  list-style: none;
}

.timeline:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: #34495e;
}

.timeline li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-bottom: 50px;
  padding-left: 50px;
  list-style: none;
}

.timeline li:nth-child(even) {
  align-items: flex-end;
  padding-right: 50px;
}

.timeline li:before {
  content: "";
  position: absolute;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #34495e;
  z-index: 2;
}

.timeline li:after {
  content: "";
  position: absolute;
  top: 15px;
  width: 30%;
  height: 2px;
  background-color: #34495e;
}

.timeline li:before,
.timeline li:after {
  left: 20%;
}
.timeline li:nth-child(even):before,
.timeline li:nth-child(even):after {
  left: auto;
  right: 20%;
}

.timeline li time {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0;
  z-index: 2;
}

.timeline li h3 {
  margin-bottom: 20px;
}

.timeline li p {
  font-size: 16px;
}
.timeline li p,
.timeline li h3,
.timeline li time {
  max-width: 45%;
}

.timeline li:last-child {
  margin-bottom: 0;
}

.timelineMarker {
  width: 40px;
  height: 40px;
  left: calc(50% - 20px);
  border-radius: 50%;
  border: 2px solid #34495e;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.innerCircle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #34495e;
}
</style>
