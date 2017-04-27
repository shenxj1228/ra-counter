<template>
  <div>
    <mu-stepper :activeStep="activeStep">
      <mu-step>
        <mu-step-label>
          推荐一个组合
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label>
          组合信息确认
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label>
          输入购买金额
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label>
          查看试算结果
        </mu-step-label>
      </mu-step>
       <mu-step>
        <mu-step-label>
          实际购买结果
        </mu-step-label>
      </mu-step>
    </mu-stepper>
    <div class="demo-step-content" style="text-align: center;">
      <p v-if="finished">
        都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
      </p>
      <template v-if="!finished">
        <router-view></router-view>
        <div>
          <mu-flat-button class="demo-step-button" label="上一步" :disabled="activeStep === 0" @click="handlePrev" />
          <mu-raised-button class="demo-step-button" :label="activeStep === 2 ? '完成' : '下一步'" secondary @click="handleNext" />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeStep: 0
      }
    },
    computed: {

      finished() {
        return this.activeStep > 4
      }
    },
    methods: {
      handleNext() {
        switch(this.activeStep){
          case 0:
            this.$router.push({path:'/buy/groupinfo'});
          break;
          case 1:
            this.$router.push({path:'/buy/inputamt'});
            break;
          case 2:
            this.$router.push({path:'/buy/trial'});
          break;
          case 3:
            this.$router.push({path:'/buy/result'});
            break;
        }
        this.activeStep++
      },
      handlePrev() {
         switch(this.activeStep){
          case 1:
            this.$router.push({path:'/buy'});
          break;
          case 2:
            this.$router.push({path:'/buy/groupinfo'});
            break;
          case 3:
            this.$router.push({path:'/buy/inputamt'});
          break;
          case 4:
            this.$router.push({path:'/buy/trial'});
            break;
        }
        this.activeStep--
      },
      reset() {
        this.activeStep = 0
      }
    }
  }

</script>
<style scoped lang="css">
  .demo-step-container {
    width: 100%;
    max-width: 700px;
    margin: auto;
  }

  .demo-step-content {
    margin: 0 16px;
  }

  .demo-step-button {
    margin-top: 12px;
    margin-right: 12px;
  }

</style>
