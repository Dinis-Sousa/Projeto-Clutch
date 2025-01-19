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
        <div class="gamesContainer">
            <h1>{{ csH1 }}</h1>
            <div class="gamesInner">
                <iframe class="videoC" :src="csVideo" frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen controls >
                </iframe>
                <img :src="csIcon" alt="Icon Cs">
            </div>
        </div>
        <div class="backgroundCoisoEvento">
            <div class="gamesContainer">
            <h1>{{ valH1 }}</h1>
            <div class="gamesInner">
                <iframe class="videoC" :src="valVideo" frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen controls >
                </iframe>
                <img :src="valIcon" alt="Icon Val">
            </div>
        </div>
        </div>
        <div class="gamesContainer">
            <h1>{{ overH1 }}</h1>
            <div class="gamesInner">
                <iframe class="videoC" :src="overVideo" frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen controls >
                </iframe>
                <img :src="overIcon" alt="Icon Overwatch">
            </div>
        </div>
        <div class="containerPublicoAlvo">
            <h1>Público Alvo</h1>
            <div class="eventPublicBorder">
                <p>O público-alvo de um evento de gaming pode variar dependendo do foco do evento, mas geralmente inclui os seguintes segmentos principais:<br>
                Jogadores Casuais<br>
                Jogadores Profissionais<br>
                Criadores de Conteúdo<br>
                Famílias e Crianças<br>
                Desenvolvedores e Indústria<br>
                Investidores e Parceiros<br></p>
                <img src="../assets/images/image 27.png" alt="image de Público">
            </div>
        </div>
        <MyFooter />
    </div>
</template>

<script>
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'
import { useJogosEmDestaqueStore } from '@/stores/jogosEmDestaque';

export default {
    setup(){
        const store  = useJogosEmDestaqueStore()
        const arrayCs = store.showCs
        const csH1 = arrayCs[0]
        const csVideo = arrayCs[1]
        const csIcon = arrayCs[2]
        const arrayVal = store.showVal
        const valH1 = arrayVal[0]
        const valVideo = arrayVal[1]
        const valIcon = arrayVal[2]
        const arrayOver = store.showOver
        const overH1 = arrayOver[0]
        const overVideo = arrayOver[1]
        const overIcon = arrayOver[2]
        return {csH1, csVideo, csIcon, valH1, valVideo, valIcon, overH1, overVideo, overIcon}
    },
    components: {
        MyNavBar,
        MyFooter,
    },
    data() {
        return {
            store: useJogosEmDestaqueStore()
        }
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
.videoC{
    width: 48.2vw;
    height: 36,5vh;
}
.gamesContainer{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 200px 0px;
}
.gamesContainer h1{
    margin: 0px 0px 50px 100px;
}
.backgroundCoisoEvento{
    position: relative;
    height:60vh;
    background-image: url("../assets/images/pngfind.com-linhas-png-5482397 3.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0% auto 50% auto;
    z-index: -1;
    color:white;
}
.gamesInner{
    display: flex;
    justify-content: space-around;
    width: 80vw;
    margin-left: 150px;
}~
.containerPublicoAlvo h1{
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: start;
}
.eventPublicBorder{
    position: relative;
    width: 90vw;
    height: 900px;
    left:50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    padding:20px;
    margin:100px 50px 100px 15px;
    overflow: hidden;
    border-radius: 24px;
}
.eventPublicBorder:before{
    content: '';
    position: absolute;
    width: 10vw;
    height: 300%;
    background: linear-gradient(#007fc7, #2e2e91);
    animation: rotate 4s linear infinite;               
}
.eventPublicBorder:after{
    content: '';
    position: absolute;
    background: black;
    inset: 10px;
    border-radius: 24px;
}
.eventPublicBorder p{
    z-index: 2;
    font-size: 2.5rem;
    font-weight: lighter;
}
.eventPublicBorder img{
    z-index: 2;
} 
</style>
<!-- #007fc7, #2e2e91 -->