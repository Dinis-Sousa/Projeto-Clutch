<template>
    <div>
        <MyNavBar />
        <h1>Destaques dos Convidados</h1>
        <div class="convidadosContainer" v-for="convidado in this.file" :key="convidado.id">
            <div class="containers">
                <div><img :src="convidado.image" alt="zorlak imagem"></div>
                <div class="text Zorlak">
                    <p>{{convidado.introduction}}</p>
                </div>
            </div>
        </div>
        <div class="backgroundCoisoSobre"></div>
        <h1 class="sobreFaqs">FAQ'S</h1>
        <div class="FaqsContainer">
            <div class="faqsContainerEach" v-for="faq in store1.faqs" :key="faq.id">
                <ul>
                    <li><img class="starCoiso" :src="faq.star" alt="star"></li>
                    <li class="question">
                        <h2>{{ faq.question }}</h2>
                        <ul class="dropdown">
                            <li><h3>{{ faq.answer }}</h3></li>
                        </ul>
                    </li>
                    <li><img class="arrowCoiso" :src="faq.arrow" alt="arrow"></li>
                </ul>    
            </div>
        </div>
        <h1 class="sobreParceirosTitle"> Parceiros e Patrocinadores</h1>
        <div class="sobreParceirosContainer">
            <div class="sobreParceiros1stLine">
                <img :src="showImg1" alt="img1">
                <img :src="showImg2" alt="img2">
                <img :src="showImg3" alt="img3">
            </div>
            <div class="sobreParceiros1stLine2">
                <img :src="showImg4" alt="img4">
                <img :src="showImg5" alt="img5">
            </div>
            <div class="sobreParceiros1stLine">
                <img :src="showImg6" alt="img6">
                <img :src="showImg7" alt="img7">
                <img :src="showImg8" alt="img8">
            </div>
        </div>
        <MyFooter />
    </div>
</template>

<script>
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'
import {useParceirosImgStore} from '@/stores/ParceirosImg'
import { useFaqsStore } from '@/stores/faqs';
import json from '@/api/db.json'

export default {
    components: {
        MyNavBar,
        MyFooter,

    },
    data() {
        return {
            store: useParceirosImgStore(),
            store1: useFaqsStore(),
            file: json.convidados,
        }
    },
    computed: {
        showImg1(){
            return this.store.showImg()
        },
        showImg2(){
            return this.store.showImg1()
        },
        showImg3(){
            return this.store.showImg2()
        },
        showImg4(){
            return this.store.showImg3()
        },
        showImg5(){
            return this.store.showImg4()
        },
        showImg6(){
            return this.store.showImg5()
        },
        showImg7(){
            return this.store.showImg6()
        },
        showImg8(){
            return this.store.showImg7()
        }
    }
    
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
.containers img{
    width: 20vw;
    height: 60vh;
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
    width: 19.5vw;
    background-repeat: no-repeat;
    background-size: cover;
}
.overWatch{
    height: 50vh;
    width: 19.5vw;
    background-repeat: no-repeat;
    background-size: cover;
}
.backgroundCoisoSobre{
    position: relative;
    height:80vh;
    width: 99vw;
    background-image: url("../assets/images/pngfind.com-linhas-png-5482397 3.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    z-index: 1;
    color:white;
}
.sobreParceirosTitle{
    text-align: center;
}
.sobreParceirosContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.sobreParceiros1stLine{
    display: flex;
    justify-content: space-around;
    padding:50px;
    padding-bottom: 20vh;
    align-items: center;
    width:99vw;
}
.sobreParceiros1stLine2{
    display: flex;
    justify-content: space-around;
    padding:50px 150px;
    padding-bottom: 20vh;
    align-items: center;
    width:80vw;
}
.sobreParceiros1stLine2 img{
    width: 15vw;
    height: 18vh;
}
.sobreParceiros1stLine img{
    width: 15vw;
    height: 18vh;
}
.FaqsContainer{
    margin-left: auto;
    margin-right: auto;
    background-color: #007FC7;
    border-radius: 50px;
    width: 73.8vw;
    height: 70vh;
    padding-bottom:5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-items: center;
}
.faqsContainerEach{
    width:100%;
}
.faqsContainerEach ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
    margin: 2vw 0vh;
    color: #D9D9D9;
    position: relative;
}
.question h2{
    width: 36vw;
}
.faqsContainerEach ul .dropdown {
    display: none;
    width:45%;
    position: absolute;
    margin: 2vw 0vh;
    color: #D9D9D9;
    text-align: start;
    opacity: 0;
    transition: opacity 0.5s ease;
}
.faqsContainerEach ul:hover{
    padding-bottom:5vh;
}
.faqsContainerEach ul:hover .dropdown{
    display: flex;
    justify-content: start;
    text-align: start;
    color: white;
    font-weight: bold;
    opacity: 1;
    transition: opacity 0.5s ease;
}
.faqsContainerEach ul:hover .arrowCoiso{
    transform: rotate(180deg) scale(2);
    transition: transform 0.3s ease;
}
.faqsContainerEach ul:hover .starCoiso{
    transform: scale(1.2);
    transition: transform 0.3s ease;
}
</style> 
<!-- #D9D9D9 -->