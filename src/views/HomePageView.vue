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
            <button class="homeBtn" >Veja o que temos planeado</button>
        </router-link>
    </div>
    <div class="homeEvento">
        <h1>Evento</h1>
        <div class="relVerMais"><router-link to="/registar" class="routerLinkDecVerMais">ver mais</router-link></div>
        <div class="slideContainer">
            <div class="slideWrapper">
                <div class="wrapperHolder">
                    <div id="sliderImg1"></div>
                    <div id="sliderImg2"></div>
                    <div id="sliderImg3"></div>
                    <div id="sliderImg4"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="homeAreas">
        <h1>Areas</h1>
        <div class="relVerMais"><router-link to="/registar" class="routerLinkDecVerMais">ver mais</router-link></div>
        <div class="slideContainer Areas">
            <div class="slideWrapper Areas">
                <div class="wrapperHolder Areas">
                    <div id="sliderImg5"></div>
                    <div id="sliderImg6"></div>
                    <div id="sliderImg7"></div>
                    <div id="sliderImg8"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="timerDiv">
        <h1 id="timerText">Adquire já o teu<br>bilhete!</h1>
        <h1 id="timerTime">12:30:50</h1>
    </div>
    <div class="backgroundCoiso">
        <button id="homeComprarBilhete" @click="checkLogin">Comprar bilhete</button>
    </div>
    <Transition name="slide-bottom" @before-enter="beforeEnter" @enter="enter"><MyPopUP v-if="buttonTrigger"></MyPopUP></Transition>
    <MyFooter />
</template>

<script>
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'
import MyPopUP from '@/components/PopUp.vue'
import { useUsersStore } from '@/stores/users'
import {useRouter} from 'vue-router'

    export default {
        data() {
            return {
                hover: false,
                buttonTrigger: false,
                store: useUsersStore(),
                router: useRouter(),
            }
        },
        components: {
            MyNavBar,
            MyFooter,
            MyPopUP,
        }, 
        methods: {
            checkLogin() {
                if(!this.store.isAuthenticated){
                    console.log('funciona')
                    this.buttonTrigger = !this.buttonTrigger
                } else {
                    this.router.push('/tickets')
                }
            },
            beforeEnter(el) {
                el.style.transform = 'translateY(100%)';
                el.style.transition = 'transform 0.5s ease-out';
            },
            enter(el, done) {
                el.offsetHeight; // Trigger reflow
                el.style.transform = 'translateY(0)';
            done();
            },
        }
        
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Orbitron:wght@400..900&display=swap');
:root{
    --hBackground: linear-gradient(to right, white, #0000CD);
}
body{
    background: black;
    background-image: url("../assets/images/pngfind.com-linhas-png-5482397 3.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 50% 900px;
    color:white;
    font-family: 'host grotesk';
    margin: 0px;
}
h1{
    font-family: 'Orbitron';
    font-size: 70px;
    font-weight: bold;
    margin: auto auto 100px auto;
}
.routerLinkDec {
  text-decoration: none;
  margin:30px;
  color:white;
  font-size:18px;
}
.navBar{
    height:100px;
    width: 100vh;
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
.homeBtn {
    border-radius: 50px;
    border: 2px solid #0000FF;
    background: transparent;
    color: #7A7373;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, color 0.3s ease, background-color 0.3s ease;
}

.homeBtn:hover {
    color: white;
    transform: scale(1.1);
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
.relVerMais{
    position: relative;
}
.routerLinkDecVerMais{
    text-decoration: none;
    font-size: 30px;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    color:white;
    transition: color 0.3s ease;
}
.routerLinkDecVerMais:hover{
    cursor: pointer;
    background: linear-gradient(to right, white, #0000CD); 
    background-clip: text; 
    color: transparent;
}
.slideContainer{
    position: relative;
}
.slideWrapper{
    width: 70vw;
    height: 45vh;
    box-shadow: 10px 10px 20px white;
    margin: 5rem auto;
    overflow: hidden;
}
.wrapperHolder{
    display:grid;
    grid-template-columns: repeat(4, 100%);
    height:100%;
    width:50%;
    animation: slider 10s ease-in-out infinite alternate;
}
#sliderImg1{
    background-image: url('../assets/images/image 24.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 100%;
    width: 35vw;
    height: 45vh;
    object-fit: cover;
}
#sliderImg2{
    background-image: url('../assets/images/image 25.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 100%;
    width: 35vw;
    height: 45vh;
    object-fit: cover;
}
#sliderImg3{
    background-image: url('../assets/images/image 29.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 100%;
    width: 35vw;
    height: 45vh;
    object-fit: cover;
}
#sliderImg4{
    background-image: url('../assets/images/image 30.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 100%;
    width: 35vw;
    height: 45vh;
    object-fit: cover;
}
@keyframes slider {
    0% { transform: translateX(-20%); }
    50% { transform: translateX(-180%); }
    100% { transform: translateX(-20%); }
}
.homeAreas h1{
    font-weight:normal;
    font-family: 'Host Grotesk';
    padding:0px;
    margin: auto auto auto 50px;
}
.homeAreas p{
    text-align: end;
    font-size: 30px;
    margin-right:50px;
    color:white;
    transition: background 0.3s ease, color 0.3s ease;
}
.homeAreas p:hover{
    cursor: pointer;
    background: linear-gradient(to right, white, #0000CD); 
    background-clip: text; 
    color: transparent;
}
#sliderImg5{
    background-image: url('../assets/images/image 3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 100%;
    width: 35vw;
    height: 45vh;
    object-fit: cover;
}
#sliderImg6{
    background-image: url('../assets/images/image 4.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 100%;
    width: 35vw;
    height: 45vh;
    object-fit: cover;
}
#sliderImg7{
    background-image: url('../assets/images/image 31.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 100%;
    width: 35vw;
    height: 45vh;
    object-fit: cover;
}
#sliderImg8{
    background-image: url('../assets/images/image 32.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 100%;
    width: 35vw;
    height: 45vh;
    object-fit: cover;
}
.timerDiv{
    margin-top:400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:0px;
}
#timerText{
    font-family: 'Orbitron';
    font-weight: bold;
    font-size: 80px;
    text-align: center;
}
#timerTime{
    font-family: 'Orbitron';
    font-weight: lighter;
    font-size: 170px;
    padding-bottom:0px;
}
.backgroundCoiso{
    position: relative;
    height:80vh;
    background-image: url("../assets/images/pngfind.com-linhas-png-5482397 2.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0% auto 50% auto;
    z-index: 1;
    color:white;
}
#homeComprarBilhete{
    border: 1px solid white;
    border-radius:50px;
    background-color: black;
    color:white;
    font-weight: bold;
    font-size:20px;
    padding:10px 30px;
    position: absolute;
    left:44%;
    top:60%;
    transform: translateY(-50%)
}
#homeComprarBilhete:after{
    content:"";
    z-index: -1;
    position: absolute;
    width:100%;
    height:100%;
    background-color: black;
    border-radius: 50px;
    left:0%;
    top:0%;
}
#homeComprarBilhete:before{
    content: "";
    background: linear-gradient(45deg, #FF0000, #FF7300, #FFFB00, #48FF00, #00FFD5, #002BFF, #FF00C8, #FF0000);
    position: absolute;
    top:-2px;
    left: -2px;
    background-size: 600%;
    z-index: -1;
    width:calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing 20s linear infinite;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
    opacity: 1;
}
@keyframes glowing {
    0%{background-position: 0 0;}
    50%{background-position: 400% 0;}
    100%{background-position: 0 0;}
}
#homeComprarBilhete:hover::before{
    opacity: 1;
}
#homeComprarBilhete:hover::after{
    background: transparent;
}
#homeComprarBilhete:active{
    color:black;
    font-weight: bold;
}
</style>