<script>
import GitHubIcon from "../assets/icons/github.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import WeChatIcon from "../assets/icons/wechat.svg";
import MailIcon from "../assets/icons/mail.svg";
export default {
  name: "Social",
  data() {
    return {
      socials: [
        {
          title: "GitHub",
          link: "/",
          icon: GitHubIcon,
        },
        {
          title: "LinkedIn",
          link: "/",
          icon: LinkedInIcon,
        },
        {
          title: "ztengc5@gmail.com",
          link: "mailto: ztengc5@gmail.com",
          icon: MailIcon,
          isLong: true,
        },
      ],
      WeChatIcon,
    };
  },
  methods: {
    getClass: function (isLong) {
      console.log({ isLong });
      let className = "socialRow";
      if (isLong) {
        className += " long";
      }
      return className;
    },
  },
};
</script>
<template>
  <div class="social">
    <a
      :href="social.link"
      :class="social.isLong ? 'socialRow long' : 'socialRow'"
      v-for="social in socials"
      :key="social.title"
    >
      <div class="title">{{ social.title }}</div>
      <div class="icon">
        <img :src="social.icon" :alt="social.title" />
      </div>
    </a>
    <div class="socialRow">
      <div class="title">ThisAdair</div>
      <div class="icon">
        <img :src="WeChatIcon" alt="wechat" />
      </div>
    </div>
  </div>
</template>
<style>
.social {
  position: fixed;
  top: calc(50% - 200px);
  left: 20;
}
.socialRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width: 175px;
  height: 50px;
  margin-left: -125px;
  padding-left: 10px;
  transition: 0.4s;
  background-color: #41b883;
}
.socialRow.long {
  width: 275px;
  margin-left: -225px;
}
.socialRow:hover {
  margin-left: 0;
}
.socialRow .title {
  font-weight: bold;
}
.socialRow .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}
</style>
