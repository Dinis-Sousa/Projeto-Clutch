<template>
    <div>
        <MyNavBar />
        <div class="backgroundCoisoAgenda"> 
            <h1>Agenda do Evento</h1>
        </div>
        <div class="dataContainer">
            <div class="dataCantinhoroxo">
                <div class="innerData">
                    <h1>27 Jan</h1>
                    <div class="data2ndpart">
                        <div class="data2ndpart1">
                            <h1 id="text2ndpart">seg. feira</h1>
                            <h1>10 H - 22 H</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="textDataContainer">
            <h1>10 H - 12 H </h1>
            <div class="textdataConteudo">
                <h1>Cerimónia de Abertura </h1>
                <p>Apresentação do evento, introdução das equipas profissionais e amadoras, e briefing sobre as atividades</p>
            </div>
            <h1>14 H - 16 H </h1>
            <div class="textdataConteudo">
                <h1>Workshop</h1>
                <p>Sessão com especialistas e jogadores profissionais de FPS para ensinar técnicas e rotinas de treino</p>
            </div>
            <h1>18 H - 20 H </h1>
            <div class="textdataConteudo">
                <h1>Meet & Greet ( exclusivo passe VIP )</h1>
                <p>Sessão na Lounge Area para fãs conhecerem jogadores e criadores de conteúdo convidados</p>
            </div>
        </div>
        <div class="dataContainer">
            <div class="dataCantinhoroxo">
                <div class="innerData">
                    <h1>28 Jan</h1>
                    <div class="data2ndpart">
                        <div class="data2ndpart1">
                            <h1 id="text2ndpart">ter. feira</h1>
                            <h1>10 H - 22 H</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="textDataContainer">
            <h1>10 H - 12 H </h1>
            <div class="textdataConteudo">
                <h1>Desafio 1v1 ( exclusivo passe VIP ) </h1>
                <p>Duelo entre jogadores e convidados na Game Area em mapas personalizados para diferentes FPS</p>
            </div>
            <h1>14 H - 20 H </h1>
            <div class="textdataConteudo">
                <h1>Torneio Rondas Eliminatórias</h1>
                <p>Primeiras fases do torneio amador e profissional na E-Area</p>
            </div>
            <h1>20 H - 22 H </h1>
            <div class="textdataConteudo">
                <h1>Showmatch Especial</h1>
                <p>Partidas de exibição entre jogadores profissionais e convidados, usando regras e modos de jogo pouco convencionais</p>
            </div>
        </div>
        <div class="dataContainer">
            <div class="dataCantinhoroxo">
                <div class="innerData">
                    <h1>29 Jan</h1>
                    <div class="data2ndpart">
                        <div class="data2ndpart1">
                            <h1 id="text2ndpart">qua. feira</h1>
                            <h1>10 H - 22 H</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="textDataContainer">
            <h1>10 H - 12 H </h1>
            <div class="textdataConteudo">
                <h1>Copa das Estrelas </h1>
                <p>Convidados especiais (influencers e streamers) competem em equipas mistas</p>
            </div>
            <h1>14 H - 16 H </h1>
            <div class="textdataConteudo">
                <h1>Torneio Semi Finais e Finais</h1>
                <p>Semi Finais e Finais do torneio amador e profissional na E-Area</p>
            </div>
            <h1>18 H - 20 H </h1>
            <div class="textdataConteudo">
                <h1>Encerramento e Entrega de Prêmios</h1>
                <p>Cerimônia de encerramento com destaques do evento e entrega de troféus para os vencedores dos torneios</p>
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
        }
    }
</script>

<style lang="scss" scoped>
.backgroundCoisoAgenda{
    width: 99vw;
    max-width: 100vw;
    height: 60vh;
    background-image: url('../assets/images/pngfind.com-linhas-png-5482397 3.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.backgroundCoisoAgenda h1{
    text-align: center;
    margin: 0px;
    font-family: 'Orbitron';
    font-weight: bold;
    font-size: 5.5em;
    padding-bottom: 12vh;
}
.dataContainer{
    width: 31vw;
    height: 12.5vh;
    background-color: #E1ECFF;
    position: relative;
    margin-left: 6vw;

}
.dataContainer::before{
    width: 7.8vw;
    height: 14vh;
}
.innerData{
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color:black;
    width: 80%;
    height: 100%;
}
.innerData h1{
    font-family: 'Orbitron';
    font-weight: bold;
    margin: 0px;
    font-size: 2.5em;
    height: 50%;
    width: 11,8vw;
    padding: 0px 10px 0px 30px
}
.data2ndpart{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1em;
    width: 19,2vw;
    height: 11,2vh;
}
.data2ndpart1 h1{
    font-size: 1.8em;
    font-weight: bold;
}
#text2ndpart{
    font-weight: bold;
    font-size: 2em;
}
.data2ndpart1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1em;
    width: 19,2vw;
    height: 11,2vh;
    border-left: 5px solid black
}
.textDataContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border-left: 1px solid white;
    font-weight: bold;
    padding-left: 2vw;
    margin: 15vh 10vw;
}
.textdataConteudo{
    padding-left: 8vw;
}
.textdataConteudo p{
    font-size: 1.5em;
}
.textDataContainer h1{
    font-family: 'Orbitron';
    padding: 2vh 0px;
}
.textdataConteudo h1{
    font-weight: lighter;
    padding: 0;
}
</style>
<!-- #E1ECFF -->
<!-- 151px -->