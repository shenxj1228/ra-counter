<template>
  <header>
    <mu-appbar :title="currbankacc">
      <mu-icon-button icon="transfer_within_a_station" slot="left" @click="openBottomSheet" />
      <mu-flat-button label="在途交易" slot="right" />
      <mu-flat-button label="历史交易" slot="right" />
      <mu-icon-menu icon="expand_more" slot="right">
        <mu-menu-item title="购 买" @click="goToBuy"  />
        <mu-menu-item title="撤 单" />
        <mu-menu-item title="菜单 3" />
        <mu-menu-item title="菜单 4" />
        <mu-menu-item title="菜单 5" />
      </mu-icon-menu>
    </mu-appbar>
    <mu-bottom-sheet :open="bottomSheet" @close="bottomSheet=false">
      <mu-list>
        <mu-sub-header>
          请选择一个卡号
        </mu-sub-header>
        <mu-list-item v-for="bankacc in bankAccs" :title="bankacc" :key="bankacc" @click="closeBottomSheet(bankacc)" />
      </mu-list>
    </mu-bottom-sheet>
  </header>
</template>
<script>
  export default {
    name: 'app-header',
    props: ['currbankacc'],
    data() {
      return {
        bottomSheet: false,
        bankAccs: ['18888', '19999', '20000', '30000', '40000', '50000']
      }
    },
    methods: {
      closeBottomSheet(bankacc) {
        this.$emit('closeBottomSheet', bankacc);
        this.bottomSheet = false
      },
      openBottomSheet() {
        this.bottomSheet = true
      },
      goToBuy(){
        this.$router.push('/buy');
      }
    }
  }

</script>
<style scoped lang="css">


</style>
