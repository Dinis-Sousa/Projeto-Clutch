<template>
    <div>
        <MyNavBar />
        <h1>Carrinho</h1>
        <MyFooter />
    </div>
</template>

<script>
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'
    export default {
        components: {
            MyNavBar,
            MyFooter,
        }    
    }
</script>

<style lang="scss" scoped>

</style>