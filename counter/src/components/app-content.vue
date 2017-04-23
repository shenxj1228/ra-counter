<template>
    <section class="main-content">
        <router-view></router-view>
    </section>
</template>
<script>
export default {
    name: 'app-content',
    data() {
        return {
            bankAcc: '18888'
        }
    }
}
</script>
<style scoped>

</style>