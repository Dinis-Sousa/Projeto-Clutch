<template>
    <nav class="navBarFlex">
        <router-link to="/">
            <img class="navImg" src="../assets/images/Banana_cone_de_mira_estilizado_Descrição__Um_logotipo_com_f3a1d8f7-d031-4e5e-b331-e5a8f41e8720 1.png" alt="logótipo">
        </router-link>    
        <ul>
        <li><router-link :class="{active: isEventPage}" class="navRouterLinkDec" to="/evento" >Evento</router-link></li>
        <li><router-link :class="{active: isAreasPage}" class="navRouterLinkDec" to="/areas">Áreas</router-link></li>
        <li><router-link :class="{active: isBilhetesPage}" class="navRouterLinkDec" to="/tickets">Bilhetes</router-link></li>
        <li><router-link :class="{active: isSobrePage}" class="navRouterLinkDec" to="/sobre">Sobre</router-link></li>
        <li><router-link :class="{active: isPerfilPage}" class="navRouterLinkDec" to="/perfil">Perfil</router-link></li>
        </ul>
            <div class="navbarBtns">   
                <router-link to="/carrinho" :class="{active: isCarrinhoPage}" class="navRouterLinkDec"><button class="carrinhoBtn"><img class="carrinhBtnIcon" src="../assets/images/image 36.png" alt="carrinho"></button></router-link>
                <router-link to="/login"><button :class="{active: isLoginPage}" class="navLoginBtn"  v-if="!store.isAuthenticated">Login</button></router-link>
                <button class="navLogoutBtn" :class="{active: isLoginPage}" @click="LogOut" v-if="store.isAuthenticated">Logout</button>
            </div>    
    </nav>
    
</template>

<script>
import { useUsersStore } from '@/stores/users';
import {useRouter} from 'vue-router';
    export default {
        name:"MyNavBar",
        data() {
            return {
                currentRoute:this.$route.path,
                store: useUsersStore(),
                router: useRouter(),
            }
        },
        computed: {
            isLoginPage(){
                return this.$route.path === '/login';
            },
            isEventPage(){
                return this.$route.path === '/evento';
            },
            isAreasPage(){
                return this.$route.path === '/areas';
            },
            isBilhetesPage(){
                return this.$route.path === '/tickets';
            },
            isSobrePage(){
                return this.$route.path === '/sobre';
            },
            isPerfilPage(){
                return this.$route.path === '/perfil';
            },
            isCarrinhoPage(){
                return this.$route.path === '/carrinho';
            }
        },
        methods: {
            LogOut(){
                this.store.isAuthenticated =!this.store.isAuthenticated
                window.location.reload();
            },
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Orbitron:wght@400..900&display=swap');
body{
    height:176px;
    width:100vh;
}
.navBarFlex{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin:30px;
    font-size: 1.8em;
    font-family: 'Orbitron';
}
.navImg{
    height:176px;
}
.navBarFlex ul{
    width: 62.5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
    align-items: center;
    padding: 0px;
}
.navBarFlex ul li{
    text-decoration: none;
}
.navRouterLinkDec{
    text-decoration: none;
    color:white;
}
.navRouterLinkDec.active{
    background-color: #2E2E91;
    border: 1px solid transparent;
    border-radius: 50px;
    padding: 2px 20px;
}
.navLoginBtn{
    width:156px;
    height:62px;
    border: 1px solid #7A7373;
    border-radius:50px;
    background-color: black;
    color:white;
    font-family: 'Host-Grotesk';
    font-weight: bold;
}
.navLoginBtn.active{
    background-color: #2E2E91;
    border: 1px solid transparent;
    font-family: 'Host-Grotesk';
    font-weight: bold;
}
.navLogoutBtn{
    width:156px;
    height:62px;
    border: 1px solid #7A7373;
    border-radius:50px;
    background-color: #9F00FF;
    color:white; 
    font-family: 'Host-Grotesk';
    font-weight: bold;
}
.navbarBtns{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 15vw;
}
.carrinhoBtn{
    background: transparent;
    border: 0px;
}
.carrinhBtnIcon{
    width: 2.5vw;
    height: 5vh;
}
</style>