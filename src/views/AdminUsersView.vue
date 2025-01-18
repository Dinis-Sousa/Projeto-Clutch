<template>
    <MyNavBar />
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>Id</th>                                                     
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>PriceTotal</th>
                <th>Carrinho</th>
                <th>Bloqueado</th>
                <th>Admin</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="u in store.users" :key="u.id">
                <td>{{ u.id }}</td>
                <td>{{ u.name }}</td>
                <td>{{ u.email }}</td>
                <td>{{ u.password }}</td>
                <td>{{ u.priceTotal }}</td>
                <td>{{ u.carrinho }}</td>
                <td>{{ u.blocked }}</td>
                <td>{{ u.isAdminUser }}</td>

            </tr>
        </tbody>
    </table>
    <div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Id</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" v-model="id">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" v-model="name">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="total" v-model="email">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="price" v-model="password">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">PriceTotal</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="price" v-model="priceTotal">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Carrinho</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="price" v-model="carrinho">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">bloquear</label><br>
            <button class="blockBtn" @click="BloquearUtilizador(id)">Bloquear</button>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Admin</label><br>
            <button class="blockBtn" @click="darAdminUtilizador(id)">Admin</button>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Apagar Utilizador</label><br>
            <button class="blockBtn" @click="deleteUtilizador(id)">Apagar</button>
        </div>
        <button class="btn btn-dark" @click="modifyUser(id, name, total, price)">Edit</button>
    </div>
    <MyFooter/>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'

export default {
    components: {
        MyNavBar,
        MyFooter,
    },
    data() {
        return {
            id: 0,
            name: '',
            email: '',
            priceTotal: 0,
            store: useUsersStore()
        }
    },
    methods: {
        modifyUser(id, name, email, priceTotal) {
            this.store.modifyUser(id, name, email, priceTotal);
        },
        BloquearUtilizador(id){
            this.store.blockUser(id);
        },
        darAdminUtilizador(id){
            this.store.darAdmin(id);
        },
        deleteUtilizador(id){
            this.store.deleteUser(id);
        },
    },

}
</script>

<style lang="scss" scoped>
</style>