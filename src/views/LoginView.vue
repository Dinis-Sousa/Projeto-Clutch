<template>
    <div>
        <h1>Iniciar Sessão</h1>
        <form @submit.prevent="submit(name,password)">
            <label for="userName" >Nome Utilizador</label><br>
            <input type="text" placeholder="Nome Utilizador" id="userName" v-model="name"><br><br>
            <label for="password">Password</label><br>
            <input type="password" placeholder="password" id="password" v-model="password"><br><br>
            <button type="submit">Login</button>
        </form>
        <router-link to="/register">
            <span>Não tens uma conta?</span>
        </router-link>
    </div>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import {useRouter} from 'vue-router'
export default {
    
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

<style lang="scss" scoped>

</style>