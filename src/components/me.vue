<template>
  <div id="me">
    <Card id="me-card" :bordered="false">
      <h2 slot="title" id="me-title">Mr.</h2>
      <div id="me-content">
        <p>有PC端、移动端开发经验，对JavaScript有深入了解。</p>
        <p>
          24岁
          <Divider type="vertical"/>3年经验(2016-至今)
          <Divider type="vertical"/>yuzhoujie95@gmail.com
        </p>
        <ol>
          <li>- 有PC端与移动端的开发经验，了解过hybird。</li>
          <li>- 熟悉 HTML / CSS / JavasScript，同时理解 JavaScript 部分底层原理。</li>
          <li>- 对主流开发框架中的 React 有过项目经验，同时了解与使用过 Vue。</li>
          <li>- 了解 Node.js，同时对于其衍生出的 Express 有过了解，最近在用 Koa。</li>
          <li>- 有十年美术功底，参与过公司页面的设计。</li>
          <li>- 喜欢研究前沿技术，乐于阅读外文文献。</li>
        </ol>
        <p>技能图：</p>
        <Circle v-for="skill in skills" :key="skill.id" :percent="skill.proficiency" dashboard stroke-color="#515a6e">
          <span class="demo-circle-inner" >{{ skill.name }}</span>
        </Circle>
        <p>关于 HTML 与 CSS 就不赘述了，基本功好伐。</p>
        <p>自说自话：<del>重点在这里</del></p>
        <p>干了三年前端，大大小小项目也有一些。当然，这个过程中也有了自己的追求，想要找一些有趣的人，做有趣的事。</p>
        <p>各位观众姥爷放心，我这个人不一定有趣，但逗逼属性一定是点满的😁</p>
        <p>有兴趣一起搞事情的可以发邮件/qq直接私聊/github留言。联系方式全部在首页，不再赘述了。</p>
        <p>最近又捡起来玩了玩 webRTC(<strong>也是业务需要吧</strong>) 发现这个东西还是做为一个小型的多人通话协议存在，直接进行 P2P 的多人通话性能依旧无法办到。同时决定年底把 React 博客那个项目继续抽时间开发完毕。</p>
        <p>立个 flag 不开发完...算了，当我没说~</p>
        <p class="right">2019-11-21</p>
      </div>
    </Card>
  </div>
</template>

<style scope>
#me {
  padding: 35px 60px;
}
#me-card {
  overflow: hidden;
}
#me-title {
  text-align: center;
  font-size: 2em;
}
#me-content {
  text-indent: 1em;
  line-height: 30px;
}
#me-content ol {
  margin: 15px;
}
#me-content .right {
    text-align: right;
}
</style>

<script>
export default {
    data () {
        return {
            skills: [
                {id: 0, name: 'JavaScript', proficiency: 75},
                {id: 1, name: 'React.js', proficiency: 70},
                {id: 2, name: 'Vue.js', proficiency: 50},
                {id: 3, name: 'Node.js', proficiency: 55},
                {id: 4, name: '逗逼', proficiency: 100},
            ]
        }
    }
};
</script>