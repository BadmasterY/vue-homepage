<template>
    <div id="heading">
      <h1>
        <span id="heading-me">Mr.</span>
        <Avatar id="heading-avatar" size="large" :src="header"/>
      </h1>
      <div id="heading-pin">
        <Icon type="md-pin"/>
        <span>China / beijing</span>
      </div>
      <div id="heading-tagline">
        逗逼，文艺(伪)的渣渣程序猿。喜欢唱跳rap和<Icon type="md-basketball"/>。
      </div>
      <div id="heading-callme">
        <a class="index-a" v-for="link in links" :key="link.id" target="_blank" :href="link.href">
          <Icon :type="link.iconType"/>
        </a>
      </div>
    </div>
</template>

<style scope>
#toggle-icon {
  font-size: 1em;
}
#heading {
  position: absolute;
  width: 100%;
  line-height: 40px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
#heading-me {
    display: none;
}
#heading-avatar {
  width: 240px;
  height: 240px;
}
.index-a {
  font-size: 2em;
  padding: 0 5px;
  color: #515a6e;
}
.index-a:hover {
  color: #17233d;
}
</style>

<script>
export default {
  data() {
    return {
      header: require("../static/images/me.jpg"),
      links: [
        {
          id: 0,
          href: "https://github.com/BadmasterY",
          iconType: "logo-github"
        },
        { id: 1, href: "mailto:yuzhoujie95@gmail.com", iconType: "md-mail" },
        {
          id: 2,
          href: "http://wpa.qq.com/msgrd?v=3&uin=854007673&site=qq&menu=yes",
          iconType: "md-chatboxes"
        },
        {
          id: 3,
          href: "https://badmastery.github.io/",
          iconType: "md-home"
        }
      ]
    };
  }
};
</script>