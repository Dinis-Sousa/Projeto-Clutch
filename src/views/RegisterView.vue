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

</style>