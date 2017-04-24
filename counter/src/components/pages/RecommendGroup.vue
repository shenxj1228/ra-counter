<template>
  <mu-content-block>
    <div>
      <mu-paper class="demo-paper" :zDepth="2">
        <span style="line-height:100px">1234</span>
      </mu-paper>
      <mu-paper class="demo-paper" :zDepth="2">
         <span style="line-height:100px">1234</span>
      </mu-paper>
    </div>
  </mu-content-block>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  .demo-paper {
    display: inline-block;
    height: 100px;
    width: 100px;
    text-align: center;
  }

</style>
