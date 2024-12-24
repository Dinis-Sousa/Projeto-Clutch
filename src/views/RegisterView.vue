<template>
    <div>
        <MyNavBar />
        <div class="flexDiv">
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
        <MyFooter />
    </div>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import {useRouter} from 'vue-router'
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'

export default {
    components: {
        MyNavBar,
        MyFooter,
    },
    data() {
        return {
            name:'',
            email:'',
            password: '',
            store: useUsersStore(),
            router: useRouter(),
        }
    },
    methods: {
        register(name, email, password){
            this.store.addUser(name,email, password)
            this.router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
body{
    background: black;
    background-position: 50% 500px;
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
.flexDiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

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