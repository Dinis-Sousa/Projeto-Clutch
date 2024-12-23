<template>
    <MyNavBar />
    <div class="flexDiv">
        <h1>Iniciar Sessão</h1>
        <form @submit.prevent="submit(name,password)">
            <label for="userName" >Nome Utilizador</label><br>
            <input type="text" placeholder="Escreve o teu username" id="userName" v-model="name"><br><br>
            <label for="password">Password</label><br>
            <input type="password" placeholder="Escreve a tua password" id="password" v-model="password"><br><br>
            <button type="submit">Login</button>
        </form>
        <router-link to="/register" class="routerLinkDec">Não tens uma conta?</router-link>
    </div>
    <MyFooter />
</template>

<script>
import { useUsersStore } from '@/stores/users';
import {useRouter} from 'vue-router'
import MyNavBar from '@/components/navbar.vue';
import MyFooter from '@/components/footer.vue';

export default {
    components: {
        MyNavBar,
        MyFooter,
    },
    data() {
        return {
            name: '',
            password: '',
            store: useUsersStore(),
            router: useRouter()
        }
    },
    methods: {
        submit(name, password) {
            this.store.checkLogin(name, password);
            console.log(this.store.isAuthenticated)
            if (this.store.isAuthenticated){
                this.router.push('/tickets')
            }
        }
    }
}
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Orbitron:wght@400..900&display=swap');
body{
    background: black;
    background-image: url("../assets/images/pngfind.com-linhas-png-5482397 3.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 50% 500px;
    color:white;
    font-family: 'host grotesk';
    margin: 0px;
}
.navBar{
    height:100px;
    width: 100vh;
}
.flexDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

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
}
.routerLinkDec {
  text-decoration: none;
  margin:30px;
  color:white;
  font-size:18px;
}
</style>