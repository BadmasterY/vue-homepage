<template>
  <div id="index">
    <div
      id="menu"
      v-on="{mouseout: menuStateChange, mousemove: menuStateChange, mouseover: menuStateChange}"
    >
      <a id="menu-toggle" class="index-a">
        <Icon id="toggle-icon" type="ios-more"/>
      </a>
      <ul v-show="showMenu" id="menu-list">
        <li v-for="menu in menus" :key="menu.id">
          <a class="index-a" @click="changePage">{{ menu.text }}</a>
        </li>
      </ul>
    </div>
    <keep-alive>
      <my-head v-if="showHead"></my-head>
    </keep-alive>
    <keep-alive>
      <my-sao v-if="showSao"></my-sao>
    </keep-alive>
    <keep-alive>
      <me v-if="showMe"></me>
    </keep-alive>
  </div>
</template>

<style scope>
::-moz-selection {
  background: #515a6e;
  color: #fff;
}
::selection {
  background: #515a6e;
  color: #fff;
}
html {
  user-select: none;
}
html,
body,
#index {
  height: 100%;
  background: #f2f2f2;
}
#menu {
  position: fixed;
  right: 15px;
  top: 15px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  z-index: 9;
}
#menu:hover {
  background: #fff;
  box-shadow: 1px 1px 3px #aaa;
}
#menu-toggle {
  display: block;
  padding: 0;
}
#menu-list {
  width: 100px;
  position: absolute;
  right: 0;
  text-align: left;
  line-height: 30px;
  background: #fff;
  padding: 15px 5px;
  box-shadow: 1px 3px 3px #aaa;
}
#menu-list ul,
li {
  list-style: none;
}
#menu-list a {
  font-size: 1.2em;
  display: block;
}
.index-a {
  font-size: 24px;
  padding: 0 5px;
  color: #515a6e;
}
.index-a:hover {
  color: #17233d;
}
</style>

<script>
import myHead from "./components/head";
import mySao from "./components/sao";
import me from "./components/me";
export default {
  data() {
    return {
      showHead: true,
      showSao: false,
      showMe: false,
      showMenu: false,
      menus: [
        { id: 0, text: "首页" },
        { id: 1, text: "马叉虫" },
        { id: 2, text: "Me" }
      ],
    };
  },
  components: {
    myHead,
    mySao,
    me
  },
  methods: {
    menuStateChange: function(event) {
      event.type == "mouseout"
        ? (this.showMenu = false)
        : (this.showMenu = true);
    },
    changePage: function(event) {
        this.showHead = false;
        this.showSao = false;
        this.showMe = false;
        this.showMenu = false;
        
        if(event.target.innerText == '首页')this.showHead = true;
        if(event.target.innerText == '马叉虫')this.showSao = true;
        if(event.target.innerText == 'Me')this.showMe = true;
    }
  }
};
</script>