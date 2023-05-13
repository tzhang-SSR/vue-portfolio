<script>
import vClickOutside from "v-click-outside";
export default {
  name: "LanguagePicker",
  directives: {
    ClickOutside: vClickOutside.directives,
  },
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
    onClickOutside() {
      this.showMenu = false;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
<template>
  <div class="picker" v-click-outside="onClickOutside">
    <button class="pickerBtn" @click="toggleMenu">
      <span> {{ localeMap[this.$i18n.locale] }}</span>
    </button>
    <Transition>
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
    </Transition>
  </div>
</template>
<style scoped>
.pickerBtn {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  min-width: 100px;
  text-align: center;
  color: #34495e;
  font-weight: 500 !important;
  letter-spacing: 0.5px;
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
