<script>
export default {
  name: "LanguagePicker",
  data() {
    return {
      locales: ["en", "cn"],
      locale: this.$i18n.locale,
      showMenu: false,
      localeMap: {
        en: "English",
        cn: "中文",
      },
    };
  },
  methods: {
    changeLocale(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>
<template>
  <button class="pickerBtn" @click="() => (showMenu = !showMenu)">
    {{ localeMap[this.$i18n.locale] }}
  </button>
  <div class="pickerMenu" v-if="showMenu">
    <ul>
      <li
        v-for="locale in locales"
        :key="locale"
        :value="locale"
        @click="changeLocale(locale)"
        :class="locale === this.$i18n.locale && 'active'"
      >
        {{ localeMap[locale] }}
      </li>
    </ul>
  </div>
</template>
<style scoped>
.pickerBtn {
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  min-width: 100px;
  text-align: center;
}
.pickerMenu {
  position: absolute;
}
ul {
  padding-left: 0;
  list-style: none;
  box-shadow: 1px;
  border: 1px solid #34495e;
}
li {
  cursor: pointer;
  min-width: 100px;
  text-align: center;
}
li.active {
  background-color: #41b883;
}
li:hover {
  background-color: #41b883;
}
</style>
