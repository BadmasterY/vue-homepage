<template>
    <div id="me">
        {{ message }}
    </div>
</template>

<style scope>
    html,body {
        background: #eee;
    }
</style>

<script>
  export default {
      data () {
          return {
              message: 'Hello Vue!'
          }
      }
  }
</script>