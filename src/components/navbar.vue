<template>
    <nav class="navBarFlex">
        <router-link to="/">
            <img class="navImg" src="../assets/images/Banana_cone_de_mira_estilizado_Descrição__Um_logotipo_com_f3a1d8f7-d031-4e5e-b331-e5a8f41e8720 1.png" alt="logótipo">
        </router-link>    
        <ul>
        <li><router-link :class="{active: isEventPage}" class="navRouterLinkDec" to="/evento">Evento</router-link></li>
        <li><router-link :class="{active: isAreasPage}" class="navRouterLinkDec" to="/areas">Áreas</router-link></li>
        <li><router-link :class="{active: isBilhetesPage}" class="navRouterLinkDec" to="/tickets">Bilhetes</router-link></li>
        <li><router-link :class="{active: isSobrePage}" class="navRouterLinkDec" to="/sobre">Sobre</router-link></li>
        <li><router-link :class="{active: isPerfilPage}" class="navRouterLinkDec" to="/perfil">Perfil</router-link></li>
        </ul>
        <router-link to="/login"><button :class="{active: isLoginPage}" class="navLoginBtn" v-if="!store.isAuthenticated">Login</button></router-link>
        <button class="navLogoutBtn " @click="LogOut" v-if="store.isAuthenticated">Logout</button>   
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
        },
        methods: {
            LogOut(){
                this.store.isAuthenticated =!this.store.isAuthenticated
                window.location.reload();
            }
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
    justify-content: space-between;
    align-items: center;
    margin:30px;
    font-size: 20px;
    font-family: 'Host Grotesk';
}
.navImg{
    height:176px;
}
.navBarFlex ul{
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
    align-items: center;
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
}
.navLogoutBtn{
    width:156px;
    height:62px;
    border: 1px solid #7A7373;
    border-radius:50px;
    background-color: #9F00FF;
    color:white; 
}
.navLoginBtn.active{
    background-color: #2E2E91;
    border: 1px solid transparent;
}
</style>