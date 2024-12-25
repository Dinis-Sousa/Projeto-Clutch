<template>
    <div>
        <MyNavBar />
        <h1>Clutch? O que é</h1>
        <div class="eventTextBorder">
            <p>Clutch é o maior evento de jogos de fps,
               uma vez que o evento recebe as melhores
               equipas dos três jogos de fps mais
               populares cs2, valorant e overwatch. O
               evento ocorre em 3 dias sendo cada dia
               dedicada a cada jogo. Para cada dia há
               torneios com prêmio, palestras informativas
               sobre o jogo do dia, a oportunidade de
               experimentar o próprio jogo e de conhecer
               pessoas que partilham da mesma paixão
               que tu!</p>
        </div>
        <h1 id="jogosEmDestaque">Jogos em Destaque</h1>
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
h1{
    text-align: center;
    font-family: 'Orbitron';
    font-size: 4em;
    margin-top:37vh;
    margin-bottom: 20vh;
}
#jogosEmDestaque{
    text-align: start;
}
.eventTextBorder{
    position: relative;
    width: 1000px;
    height: 900px;
    left:50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    padding:20px;
    margin:100px 50px;
    overflow: hidden;
    border-radius: 24px;
}
.eventTextBorder p{
    color: white;
    text-shadow: 2px 2px black;
    font-size: 3em;
    z-index: 2;
}
.eventTextBorder:before{
    content: '';
    position: absolute;
    width: 566px;
    height: 180%;
    background: linear-gradient(#007fc7, #2e2e91);
    animation: rotate 4s linear infinite;               
}
.eventTextBorder:after{
    content: '';
    position: absolute;
    background: black;
    inset: 10px;
    border-radius: 24px;
}
@keyframes rotate {
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
}
</style>
<!-- #007fc7, #2e2e91 -->