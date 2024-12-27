<template>
    <div>
        <MyNavBar />
        <h1>Área de Jogos</h1>
        <div class="areaJTextContainer">
            <p>A área de jogos é um espaço dedicado à competição e diversão, onde jogadores e equipas enfrentam-se em partidas intensas. Esta área está equipada com computadores ou consolas de última geração, monitores full hd, teclados, ratos e auscultadores de alta qualidade.</p>
        </div>
        <div class="areaJImages">
            <div class="image1"></div>
            <div class="image2"></div>
        </div>
        <h1>Área de Snacks</h1>
        <div class="areaJTextContainer">
            <p>A área de snacks oferece lanches rápidos, como sandes, batatas fritas e bebidas, permitindo que quem está a participar do evento alimente-se e descanse entre as partidas. O ambiente é prático, com mesas e cadeiras para socialização.</p>
        </div>
        <div class="backgroundCoisoAreas">    
            <div class="areaJImages">
                <div class="image3"></div>
                <div class="image4"></div>
            </div>
        </div>
        <h1>Área de Colecionáveis</h1>
        <div class="areaJTextContainer">
            <p>A área de colecionáveis oferece uma seleção diversificada de produtos relacionados ao mundo dos jogos. É o espaço ideal para os fãs adquirirem itens exclusivos e levarem um pedaço do evento consigo. O ambiente é organizado, com expositores temáticos e staff disponível para auxiliar na escolha dos produtos.</p>
        </div>
        <div class="areaJImages">
            <div class="image5"></div>
            <div class="image6"></div>
        </div>
        <h1>Área de Repouso</h1>
        <div class="areaJTextContainer">
            <p>A área de repouso é um espaço tranquilo, com cadeiras confortáveis e um ambiente mais silencioso, onde os participantes podem relaxar e recarregar as energias, ideal para jogadores e visitantes que precisam de um descanso durante o evento.</p>
        </div>
        <div class="areaJImages">
            <div class="image7"></div>
            <div class="image8"></div>
        </div>
        <h1>E-Área</h1>
        <div class="areaJTextContainer">
            <p>A E-Area é o centro dos torneios de eSports, onde as competições de jogos como Valorant, CS2 e Overwatch 2 acontecem. Este espaço é projetado para oferecer uma experiência imersiva, com estações de jogo de alta performance e uma atmosfera eletrizante.</p>
        </div>
        <div class="areaEImages">
            <div class="image9"></div>
        </div>
        <div class="backgroundCoisoAreas1">      
            <div class="areaButtonContainer">
                <router-link to="/agenda"><button class="areaButton">Veja o que temos agendado para si</button></router-link>
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
*{
    max-width: 100vw;
}
h1{
    font-family: 'Orbitron';
    margin: 200px 0px 100px 30px;
    font-size:5em;
}
.areaJTextContainer{
    position: relative;
    z-index: 1;
    left:50%;
    transform: translate(-50%, 0);
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    padding:20px 50px;
    border-radius: 50px;
    overflow: hidden;
    margin:200px 50px;
    overflow: hidden;
}
.areaJTextContainer p{
    position: relative;
    z-index: 3;
    font-size: 3em;
    font-family: 'Host Grotesk';
    color: white;
}
.areaJTextContainer:before{
    content: '';
    position: absolute;
    height: 600%;
    width: 10%;
    background: linear-gradient(#007fc7,#9F00FF);
    border-radius: 50px;
    padding:3px;
    z-index: -1;
    animation: rotate 5s linear infinite;
}
@keyframes rotate {
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
}
.areaJTextContainer:after{
    content: '';
    position: absolute;
    background: black;
    inset: 5px;
    border-radius: 50px;
    z-index: -1;
}
.areaJImages{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 99vw;
    max-width: 100vw;
    height: 404px;
    position: relative;
}
.image1{
    width: 720px;
    height: 404px;
    background-image: url('../assets/images/image 14.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.image2{
    width: 720px;
    height: 404px;
    background-image: url('../assets/images/image 15.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.image3{
    width: 720px;
    height: 404px;
    background-image: url('../assets/images/image 2.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.image4{
    width: 720px;
    height: 404px;
    background-image: url('../assets/images/image 5.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.image5{
    width: 720px;
    height: 404px;
    background-image: url('../assets/images/image 15.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.image6{
    width: 720px;
    height: 404px;
    background-image: url('../assets/images/image 16.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.image7{
    width: 720px;
    height: 404px;
    background-image: url('../assets/images/image 18.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.image8{
    width: 720px;
    height: 404px;
    background-image: url('../assets/images/image 19.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.image9{
    width: 1418px;
    height: 649px;
    background-image: url('../assets/images/image 6.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.areaEImages{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 99vw;
    max-width: 100vw;
    height: 649px;
    position: relative; 
}
.areaButtonContainer{
    display: flex;
    justify-content: center;
}
.areaButton{
    border: 1px solid black;
    background-color: white;
    color:black;
    border-radius: 100px;
    margin: 300px 0px;
    padding:16px;
    width: 473px;
    height: 144px;
    font-size: 1.8em;
    font-weight: lighter;
}
.areaButton:hover{
    background: linear-gradient(to right, #0000CD,#9F00FF);
    color:white;
}
.backgroundCoisoAreas{
    width: 99vw;
    max-width: 100vw;
    height: 620px;
    background-image: url('../assets/images/pngfind.com-linhas-png-5482397 3.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.backgroundCoisoAreas1{
    width: 99vw;
    max-width: 100vw;
    height: 620px;
    background-image: url('../assets/images/pngfind.com-linhas-png-5482397 2.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
