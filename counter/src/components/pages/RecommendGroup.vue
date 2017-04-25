<template>
  <mu-content-block>
    <div>
      <mu-paper class="rate-paper" :zDepth="1">
        <div class="left">1</div>
        <div class="right">2</div>
      </mu-paper>
      <mu-paper style="margin-top:1rem;font-size:3rem">
        <mu-sub-header>投资期限</mu-sub-header>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="recents" title="Recents" icon="restore" />
          <mu-bottom-nav-item value="favorites" title="Favorites" icon="favorite" />
          <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on" />
        </mu-bottom-nav>
        <hr>
        <mu-sub-header>风险等级</mu-sub-header>
        <mu-content-block>
          <mu-slider v-model="value1" :step="10" class="demo-slider" />
        </mu-content-block>

      </mu-paper>
    </div>
  </mu-content-block>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        bottomNav: 'recents',
        value1: 5
      }
    },
    methods: {
      handleChange(val) {
        this.bottomNav = val
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  .rate-paper {
    display: inline-block;
    text-align: center;
    position: relative;
  }

  .rate-paper .left,
  .rate-paper .right {
    display: inline-block;
    padding: 6rem;
    font-size: 3rem;
  }

  .rate-paper .left::after {
    content: "";
    position: absolute;
    top: 10%;
    left: 50%;
    width: 1px;
    height: 80%;
    margin: 0 auto;
    padding: 0;
    background-color: #E5E5E5;
    overflow: hidden;
  }

  .rate-paper .right::before {
    content: "";
    position: absolute;
    top: 10%;
    right: 50%;
    width: 1.5px;
    height: 80%;
    margin: 0 auto;
    padding: 0;
    background-color: #E5E5E5;
    overflow: hidden;
  }



</style>
