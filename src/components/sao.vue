<template>
  <div id="sao">
    <Row type="flex" justify="start">
      <Col id="sao-col" :xs="{span: 24}" :md="{span: 12}" :xl="{span: 6}" v-for="list in lists" :key="list.id">
        <a :href="list.href" class="sao-a">
          <Card class="card">
            <div class="card-content">
              <img :src="list.src" width="50%">
              <h3>{{ list.title }}</h3>
            </div>
          </Card>
        </a>
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
.sao-a {
  color: #515a6e;
}
.sao-a:hover {
  color: #17233d;
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
import axios from 'axios';
export default {
  data() {
    return {
      lists: []
    };
  },
  created () {
    if(this.lists.length !== 0) return;
    axios.post('/lists')
    .then( response => {
      this.lists = response.data;
    })
    .catch(err => {
      throw new Error(err);
    })
  }
};
</script>