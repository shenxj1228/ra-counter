<template>
    <footer>
        <mu-appbar title="交易列表">
            <mu-icon-button icon="menu" slot="left" />
           
        </mu-appbar>
    </footer>
</template>
<script>
export default {
    name: 'app-footer',
    props:['currbankacc'],
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>

</style>