<template>
  <div id="sao">
    <Row type="flex" justify="start">
      <Col id="sao-col" :xs="{span: 24}" :md="{span: 12}" :xl="{span: 6}" v-for="n in 12" :key="n">
        <Card class="card">
          <div class="card-content">
            <img src="../images/me.jpg" width="50%">
            <h3>webgl小玩具</h3>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<style scope>
#sao {
  overflow-x: hidden;
  padding: 35px 60px;
}
#sao-col {
  padding: 8px;
}
.card {
  overflow: hidden;
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
  data() {
    return {
      show: false,
      message: "Hello Vue!"
    };
  }
};
</script>