<template>
  <div id="app">
    <app-header :currbankacc="bankAcc" @closeBottomSheet="changeParentCurrAcc"></app-header>
    <app-content :currbankacc="bankAcc" ></app-content>
    <app-footer :currbankacc="bankAcc"></app-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
       bankAcc:'18888'
    }
  },
  methods: {
    changeParentCurrAcc:function(...arg){
      this.bankAcc=arg[0];
    }
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

header {
  flex: 0 0 auto;
}

.main-content {
  flex: 1 0 auto;
}

footer {
  flex: 0 0 auto;
}
</style>
