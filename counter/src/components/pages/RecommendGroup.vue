<template>
  <mu-content-block>
    <mu-paper class="rate-paper" :zDepth="1">
      <div class="left">1</div>
      <div class="right">2</div>
    </mu-paper>
    <mu-paper style="margin-top:1rem;font-size:3rem">
      <mu-sub-header>投资期限</mu-sub-header>
      <mu-bottom-nav :value="investmentTerm" shift @change="handleChange">
        <mu-bottom-nav-item value="360"  title="短期一年" icon="looks_one" />
        <mu-bottom-nav-item value="1080" title="中期三年" icon="looks_3" />
        <mu-bottom-nav-item value="1800" title="长期五年" icon="looks_5" />
      </mu-bottom-nav>
      <div style="margin:2rem 0"></div>
      <mu-sub-header>风险等级</mu-sub-header>
      <mu-content-block>
        <mu-slider v-model="riskLevel" :step="10" class="demo-slider" />
        <p  style="font-size:1.5rem;">
          当前风险等级: <strong style="color:#ff5252;font-size:2.5rem" >{{riskLevel/10}}</strong>
        </p>
      </mu-content-block>
    </mu-paper>
  </mu-content-block>
</template>

<script>
  export default {
    name: 'recommendgroup',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        investmentTerm: '1080',
        riskLevel: 0
      }
    },
    methods: {
      handleChange(val) {
        this.investmentTerm = val
      }
    }
  }

</script>
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
    color:#ff5252;
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
