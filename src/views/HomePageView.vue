<template>
    <MyNavBar />
    <div class="mainH1">
        <h1 class="homeH1">O MAIOR <br> EVENTO <br></h1>
        <div class="slide">
            <div><div><h1>DE PORTUGAL</h1></div></div>
            <div><div><h1>DE JOGOS FPS</h1></div></div>
        </div>
    </div>
    <div class="mainBtn">
        <router-link to="/">
            <button class="homeBtn">Veja o que temos planeado</button>
        </router-link>
    </div>
    <div class="homeEvento">
        <h1>Evento</h1>
        <p @mouseover="hover = true" @mouseleave="hover = false" :class="{ 'hovered': hover }">ver mais</p>
    </div>
    <MyFooter />
</template>

<script>
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'
    export default {
        components: {
            MyNavBar,
            MyFooter,
        }, 
        data() {
            return {
                hover: false,
            }
        },
        
    }
</script>

<style>
:root{
    --hBackground: linear-gradient(to right, white, ##0000CD);
}
body{
    background-position: 50% 900px;
}
.mainH1{
    margin-top:100px;
    font-size: 70px;
    text-align: center;
    background:linear-gradient(to bottom, #0000CD, #9F00FF);
    background-clip: text;
    color:transparent;
}
.homeH1{
    margin: auto auto 20px auto;
}
.slide {
    overflow: hidden;
    height: 80px;  
    margin-top: -20px; 
}

.slide div {
    display: block;
    height: 100%;
    width: 100%;
}

.slide div h1 {
    margin: 0;
    line-height: 80px; 
    text-align: center;
    background:linear-gradient(to bottom, #0000CD, #9F00FF);
    background-clip: text;
    color:transparent;
}

.slide div:nth-child(1) {
    animation: animate 3s linear infinite;
}

@keyframes animate {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-100%);
    }
    50% {
        transform: translateY(-100%);
    }
    75% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
}   
.homeBtn{
    border-radius: 50px;
    border: 2px solid #0000FF;
    background:transparent;
    color:white;
    padding: 10px;
    text-align: center;
}
.mainBtn{
    margin-top: 200px;
    display:flex;
    justify-content: center;
}
.mainBtn button{
    text-decoration: none;
    margin:20px;
    padding:16px 50px;
    font-size:16px;
}
.homeEvento{
    margin-top: 700px;
}
.homeEvento h1{
    font-weight:normal;
    font-family: 'Host Grotesk';
    padding:0px;
    margin: auto auto auto 50px;
}
.homeEvento p{
    text-align: end;
    font-size: 30px;
    margin-right:50px;
    color:white;
    transition: background 0.3s ease, color 0.3s ease;
}
.homeEvento p:hover{
    cursor: pointer;
    background: linear-gradient(to right, white, #0000CD); 
    background-clip: text; 
    color: transparent;
}
</style>