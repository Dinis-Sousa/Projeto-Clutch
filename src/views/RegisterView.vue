<template>
    <div>
        <MyNavBar />
        <div class="flexDivReg">
            <h1>Registar</h1>    
                <form @submit.prevent="register(name, email, password)" >
                    <label for="userName" >Nome Utilizador</label><br>
                    <input type="text" placeholder="Nome Utilizador" id="userName" v-model="name" required><br><br>
                    <label for="userEmail" >Email</label><br>
                    <input type="email" placeholder="Email" id="userEmail" v-model="email" required><br><br>
                    <label for="password">Password</label><br>
                    <input type="password" placeholder="password" id="password" v-model="password" required><br><br>
                    <button type="submit">Registar</button>
                </form>
        </div>
        <MyPopUpRegister v-if="isNowRegistered"></MyPopUpRegister>
        <MyPopUpNomeExistente v-if="nomeExistente"></MyPopUpNomeExistente>
        <MyPopUpEmailExistente v-if="emailExistente"></MyPopUpEmailExistente>
        <MyFooter />
    </div>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import {useRouter} from 'vue-router'
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'
import MyPopUpRegister from '@/components/PopUpRegister.vue'
import MyPopUpNomeExistente from '@/components/PopUpNomeExistente.vue'
import MyPopUpEmailExistente from '@/components/PopUpEmailExistente.vue'

export default {
    components: {
        MyNavBar,
        MyFooter,
        MyPopUpRegister,
        MyPopUpNomeExistente,
        MyPopUpEmailExistente,
    },
    data() {
        return {
            name:'',
            email:'',
            password: '',
            store: useUsersStore(),
            router: useRouter(),
            isNowRegistered: false,
            nomeExistente: false,
            emailExistente: false,
        }
    },
    methods: {
        register(name, email, password){
            const resultado = this.store.addUser(name,email, password)
            switch (resultado){
                case 'nome existente':
                    this.nomeExistente = !this.nomeExistente;
                    break;
                case 'email existente':
                    this.emailExistente = !this.emailExistente;
                    break;
                case 'registado':
                    console.log(this.isNowRegistered)
                    this.isNowRegistered = !this.isNowRegistered;
                    console.log(this.isNowRegistered)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
body{
    background: black;
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
.flexDivReg {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;     
    height: 80vh;
    position: relative;
    height:55vh;
    width:99vw;
    max-width: 100vw;
    background-image: url("../assets/images/pngfind.com-linhas-png-5482397 2.png");
    background-repeat: no-repeat;
    background-size: 110% 80%;
    background-position: 100% 20%;
    color:white;
      
}

.flexDiv form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 1;
             
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
</style>