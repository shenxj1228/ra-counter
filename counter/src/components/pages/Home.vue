<template>
  <mu-content-block>
    <mu-row gutter>
      <mu-col width="100" tablet="50" desktop="50" class="left-grid">
        <mu-sub-header>个人资产</mu-sub-header>
        <mu-row gutter>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-card style="text-align: center;">
              <mu-card-title title="100000"></mu-card-title>
              <mu-card-text>
                总资产
              </mu-card-text>
            </mu-card>
          </mu-col>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-card style="text-align: center;">
              <mu-card-title title="20" />
              <mu-card-text>
                浮动盈亏
              </mu-card-text>
            </mu-card>
          </mu-col>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-card style="text-align: center;">
              <mu-card-title title="2%" />
              <mu-card-text>
                浮动盈亏率
              </mu-card-text>
            </mu-card>
          </mu-col>
        </mu-row>
        <mu-row gutter >
          <mu-col width="33" tablet="33" desktop="33">
            <mu-card style="text-align: center;">
              <mu-card-title title="10%"></mu-card-title>
              <mu-card-text>
                23
              </mu-card-text>
            </mu-card>
          </mu-col>
           <mu-col width="33" tablet="33" desktop="33">
            <mu-card style="text-align: center;">
              <mu-card-title title="10%"></mu-card-title>
              <mu-card-text>
                23
              </mu-card-text>
            </mu-card>
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
<style scoped>
 
  .mu-card .mu-card-text {
    padding-top: 0;
  }

.left-grid div[class*="col-"] {
  text-align: center;
  margin-bottom: 16px;
}
</style>
