<template>
    <div>
        <MyNavBar />
        <h1>Destaques dos Convidados</h1>
        <div class="containers">
            <div class="zorlak"></div>
            <div class="text Zorlak">
                <p>Aos 32 anos, Ricardo Sousa — conhecido como “Zorlak” — fez valer os quase 20 anos ligados aos videojogos para se tornar streamer, aplicando os seus conhecimentos sobre o jogo Counter Strike num “projecto pioneiro a nível mundial” a partir da plataforma Twitch, destinada à transmissão de videojogos.</p>
            </div>
        </div>
        <div class="containers Valorant">
            <div class="valorant"></div>
            <div class="text Valorant">
                <p>Tomás ‘tomasyz’ Machado é um jogador profissional de valorant e neste momento considerado o melhor jogador de valorant português, atualmente joga na equipa GiantX.</p>
            </div>
        </div>
        <div class="containersO">
            <div class="overWatch"></div>
            <div class="text OverWatch">
                <p>  Félix ‘xQc’ Lengyel é um ex-jogador profissional de Overwatch, amplamente reconhecido como um dos melhores jogadores da história do jogo. 
                    Atualmente, ele é um dos maiores streamers do mundo, mas seu legado no cenário competitivo de Overwatch permanece marcante.</p>
            </div>
        </div>
        <div class="backgroundCoisoSobre"></div>
        <h1 class="sobreFaqs">FAQ'S</h1>
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
    font-family: 'Orbitron';
    font-size: 4em;
    padding:37vh 0px 20vh 2vw;
}
.sobreFaqs{
    padding-top: 0px;
}
.containers{
    height: 90vh;
    max-width: 100vw;
    padding:200px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0px;
}
.containersO{
    height: 90vh;
    max-width: 100vw;
    padding:200px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0px 0px 0px;
}
.zorlak{
    height: 50vh;
    width: 344px;
    background-image: url('../assets/images/image.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.text{
    position: relative;
    width: 40vw;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    padding:20px;
    overflow: hidden;
    border-radius: 24px;
    font-size: 2em;
}
.text p{
    color: white;
    text-shadow: 2px 2px black;
    font-size: 1.5em;
    z-index: 2;
}
.text:before{
    content: '';
    position: absolute;
    width: 434px;
    height: 150%;
    background: linear-gradient(#007fc7, #2e2e91);
    animation: rotate 4s linear infinite;   
}
.text:after{
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
.valorant{
    height: 50vh;
    width: 376px;
    background-image: url('../assets/images/image (1).png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 100px;
}
.overWatch{
    height: 50vh;
    width: 376px;
    background-image: url('../assets/images/image 28.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 100px;
}
.backgroundCoisoSobre{
    position: relative;
    height:80vh;
    background-image: url("../assets/images/pngfind.com-linhas-png-5482397 3.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0% 99vw 50% 99vw;
    z-index: 1;
    color:white;
}
</style>