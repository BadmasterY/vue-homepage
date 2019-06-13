<template>
    <div id="app">
        <!-- <h1 id="App">
            {{message}}
        </h1> -->
        <Row type="flex" justify="start" >
            <Col :xs="{span: 24}" :md="{span: 12}" :xl="{span: 6}" v-for="n in 5">
                <Card class="card">
                    <div class="card-content">
                        <img src="../images/vue.png" >
                        <h3>A high quality UI Toolkit based on Vue.js</h3>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<style scope>
    html,body {
        background: #eee;
    }
    .card {
        width: 100%;
    }
    .card:hover {
        cursor: pointer;
    }
    .card-content {
        text-align: center;
    }
</style>

<script>
  export default {
      data () {
          return {
              show:false,
              message: 'Hello Vue!'
          }
      }
  }
</script>