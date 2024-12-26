<template>
    <MyNavBar />
    <div class="flexDiv">
        <h1>Iniciar Sessão</h1>
        <div class="backgroundCoisoLogin">   
            <form @submit.prevent="submit(name,password)">
                <label for="userName" >Nome Utilizador</label><br>
                <input type="text" placeholder="Escreve o teu username" id="userName" v-model="name"><br><br>
                <label for="password">Password</label><br>
                <input type="password" placeholder="Escreve a tua password" id="password" v-model="password"><br><br>
                <button type="submit">Login</button>
                <router-link to="/registar" class="routerLinkDec">Não tens uma conta?</router-link>
            </form>
        </div>
    </div>
    <Transition name="fade"><MyPopUpLogin v-if="isNowLoggedIn"></MyPopUpLogin></Transition>
    <MyFooter />
</template>

<script>
import { useUsersStore } from '@/stores/users';
import {useRouter} from 'vue-router'
import MyNavBar from '@/components/navbar.vue';
import MyFooter from '@/components/footer.vue';
import MyPopUpLogin from '@/components/PopUpLogin.vue'

export default {
    components: {
        MyNavBar,
        MyFooter,
        MyPopUpLogin,
    },
    data() {
        return {
            name: '',
            password: '',
            store: useUsersStore(),
            router: useRouter(),
            isNowLoggedIn: false,
        }
    },
    methods: {
        submit(name, password) {
            this.store.checkLogin(name, password);
            if (this.store.isAuthenticated){
                this.isNowLoggedIn = !this.isNowLoggedIn
            }
        }
    }
}
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Orbitron:wght@400..900&display=swap');
.navBar{
    height: 100px;
    width: 100vh;
}
.flexDiv {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    z-index: 1;   
    position: relative;
    height:55vh;
    width:99vw;
    max-width: 100vw;
    background-image: url("../assets/images/pngfind.com-linhas-png-5482397 3.png");
    background-repeat: no-repeat;
    background-size: 100% 50%;
    background-position: 100% 80%;
    color:white;      
}

.flexDiv form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    z-index: 1;             
}
h1{
    font-family: 'Orbitron';
    font-size: 70px;
    font-weight: bold;
    margin: auto auto 100px auto;
}
input{
    border: 1px solid #7A7373;
    height:5vh;
    width:30vh;
    border-radius:50px;
    color:white;
    background-color: black;
    font-size: 18px;
    padding: 0px 0px 0px 10px;

}
label{
    font-size: 25px;
    padding-bottom:20px;
}
form button{
    width:30vh;
    border-radius:50px;
    height:5vh;
    font-size:20px;
    padding:10px;
    background-color: white;
    transition: background 0.3s ease, transform 0.2s ease;
}
form button:hover{
    background: linear-gradient(to right, white, #9F00FF);
    transform: scale(1.05);
}
.routerLinkDec {
  text-decoration: none;
  margin:30px;
  color:white;
  font-size:18px;
  transition: transform 0.2s ease;
}
.routerLinkDec:hover{
    background: linear-gradient(to right, white,#0000CD);
    background-clip: text; 
    color: transparent;
    transform: scale(1.05);
}
</style>