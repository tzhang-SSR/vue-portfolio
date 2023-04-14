<script setup>
import Intro from "./components/Intro.vue";
import Skills from "./components/Skills.vue";
import Works from "./components/Works.vue";
import Projects from "./components/Projects.vue";
import Social from "./components/Social.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <Intro />
  <Skills refName="skillsContent" />
  <Works refName="works" />
  <Projects refName="projects" />
  <Social />
</template>
<style></style>
