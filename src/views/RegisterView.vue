<template>
    <div>
        <h1>Registar Conta</h1>
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
</template>

<script>
import { useUsersStore } from '@/stores/users';
export default {
    data() {
        return {
            name:'',
            email:'',
            password: '',
            store: useUsersStore(),
        }
    },
    methods: {
        register(name, email, password){
            this.store.addUser(name,email, password)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>