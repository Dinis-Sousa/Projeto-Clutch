<template>
    <div>
        <MyNavBar />
        <div class="eachArea">
            <h1>Área de Jogos</h1>
            <div class="AreaTextContainer">
            <p>A área de jogos é um espaço dedicado à competição e diversão, onde jogadores e equipas enfrentam-se em partidas intensas. Esta área está equipada com computadores ou consolas de última geração, monitores full hd, teclados, ratos e auscultadores de alta qualidade.</p>
            </div>
        </div>
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
    },
    
}
</script>

<style lang="scss" scoped>
.eachArea{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.AreaTextContainer{
    width: 20vw;
    font-size: 2em;
}

</style>
