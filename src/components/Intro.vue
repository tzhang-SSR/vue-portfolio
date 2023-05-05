<script></script>
<template>
  <div class="container top" id="home">
    <div class="introContent">
      <div class="intro">
        <h1>{{ $t("greeting") }}</h1>
        <p>{{ $t("intro") }}</p>
      </div>
      <div class="profile"></div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 65px;
}
.intro {
  animation: fade-top;
  animation-duration: 2s;
}

.introContent {
  width: 60%;
  min-width: 400px;
  height: 100vh;
  margin: 0 auto;
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
