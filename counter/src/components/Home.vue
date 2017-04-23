<template>
  <div flex flex-box="1">
    <mu-row gutter>
      <mu-col width="100" tablet="50" desktop="50">
        <mu-row gutter>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-card style="text-align: center;">
               <mu-card-title title="10000"  />
              <mu-card-text>
                总资产
              </mu-card-text>
             
              </mu-card>
          </mu-col>
          <mu-col width="33" tablet="33" desktop="33">
           <mu-card style="text-align: center;">
             <mu-card-title title="20"  />
              <mu-card-text>
                浮动盈亏
              </mu-card-text>
              </mu-card>
          </mu-col>
          <mu-col width="33" tablet="33" desktop="33">
            <mu-card style="text-align: center;">
              <mu-card-title title="2%"  />
              <mu-card-text>
                浮动盈亏率
              </mu-card-text>
              </mu-card>
          </mu-col>
        </mu-row>
        <mu-row gutter>
          <mu-col width="33" tablet="33" desktop="33">33</mu-col>
          <mu-col width="33" tablet="33" desktop="33">33</mu-col>
          <mu-col width="33" tablet="33" desktop="33">33</mu-col>
        </mu-row>
      </mu-col>
      <mu-col width="100" tablet="50" desktop="50">50</mu-col>
    </mu-row>
  </div>
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
<style>
  .mu-card{
    text-align:center;
  }
  .mu-card .mu-card-text{
    padding-top:0;
  }

</style>
