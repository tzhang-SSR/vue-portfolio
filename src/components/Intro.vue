<template>
  <div class="container top">
    <div class="content introContent">
      <div class="intro">
        <h1>Hi, I'm Teng Zhang.</h1>
        <p>A Front-End Engineer and beginner writer.</p>
      </div>
      <div class="profile"></div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 65px;
}
.top {
  background-color: greenyellow;
}
.intro {
  animation: fade-top;
  animation-duration: 2s;
}
.introContent {
  display: flex;
  align-items: center;
  padding: 125px 0;
}
@keyframes fade-top {
  from {
    padding-top: 100px;
    opacity: 0;
  }
  to {
    padding-top: 0px;
    opacity: 1;
  }
}
</style>
