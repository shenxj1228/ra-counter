<template>
  <mu-content-block>
    <mu-row gutter>
      <mu-col width="100" tablet="50" desktop="50" class="left-grid">
        <mu-sub-header>个人资产</mu-sub-header>
        <mu-row gutter>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-paper :zDepth="1">
              <div class="strong-text"><strong>1000000</strong></div>
              <mu-sub-header>总资产（元）</mu-sub-header>
            </mu-paper>
          </mu-col>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-paper :zDepth="1">
              <div class="strong-text"><strong>200</strong></div>
              <mu-sub-header>浮动盈亏（元）</mu-sub-header>
            </mu-paper>
          </mu-col>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-paper :zDepth="1">
              <div class="strong-text"><strong>2</strong></div>
              <mu-sub-header>浮动盈亏率（%）</mu-sub-header>
            </mu-paper>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-paper :zDepth="1">
              <mu-card-title title="10%"></mu-card-title>
              <mu-card-text>
                23
              </mu-card-text>
            </mu-paper>
          </mu-col>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-paper :zDepth="1">
              <mu-card-title title="10%"></mu-card-title>
              <mu-card-text>
                23
              </mu-card-text>
            </mu-paper>
          </mu-col>
        </mu-row>
      </mu-col>
      <mu-col width="100" tablet="50" desktop="50">
        <mu-list>
          <mu-sub-header>持仓情况</mu-sub-header>
          
            <mu-list-item title="组合00001" describeText="Group00001">
              <div slot="right">
                <div>50000</div>
                <div>321</div>
              </div>
            </mu-list-item>
        </mu-list>

      </mu-col>
    </mu-row>
  </mu-content-block>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {

      }
    }
  }

</script>
<style scoped lang="css">
  .strong-text {
    padding: 16px;
    padding-bottom: 8px;
    font-size: 3rem;
  }

  .left-grid .mu-paper {
    text-align: center;
    margin-bottom: 16px;
  }

  .left-grid .mu-paper .mu-sub-header {
    padding-left: 0;
  }

</style>
