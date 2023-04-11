<script>
import works from "../assets/works.json";
import SectionHeader from "./SectionHeader.vue";
export default {
  name: "Works",
  data() {
    return {
      works,
    };
  },
  components: {
    SectionHeader,
  },
};
</script>

<template>
  <div class="container">
    <SectionHeader title="Works" />
    <div class="content">
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
  background-color: #ccc;
  transform: translateX(-50%);
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
  border: 2px solid #ccc;
  z-index: 2;
}

.timeline li:after {
  content: "";
  position: absolute;
  top: 15px;
  width: 30%;
  height: 2px;
  background-color: #ccc;
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
  margin-bottom: 10px;
  background-color: #fff;
  z-index: 2;
}

.timeline li h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.timeline li p {
  font-size: 16px;
  line-height: 1.5;
  max-width: 45%;
}

.timeline li:last-child {
  margin-bottom: 0;
}

.timelineMarker {
  width: 40px;
  height: 40px;
  left: calc(50% - 20px);
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #ccc;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.innerCircle {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #ccc;
}
</style>
