<template>
    <MyNavBar />
    <div class="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-center mb-4" style="margin-top:0px;">Tickets Disponíveis</h1>
        <div class="row justify-content-center">
            <div class="col-md-4 mb-4" v-for="ticket in store.tickets" :key="ticket.id">
                <div class="card custom-card">
                    <div class="card-body">
                        <h5 class="card-title custom-title text-primary">{{ ticket.name }}</h5>
                        <p class="card-text custom-text">Bilhetes disponíveis: {{ ticket.available }}</p>
                        <p class="card-text custom-text">Preço: {{ ticket.price }}</p>
                        <button @click="buyTicket(ticket.id)" class="btn btn-dark">Comprar bilhetes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-link class="ticketsRouterLinkDec" to="/adminTickets" v-if="this.store1.isAdmin === true">Admin ticket</router-link>
    <MyFooter />
</template>


<script>
import { useTicketsStore } from '@/stores/tickets';
import {useUsersStore} from '@/stores/users';
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
            store: useTicketsStore(),
            store1: useUsersStore(),
            router:useRouter()
        }
    },
    methods: {
        buyTicket(id) {
            this.store.buyTicket(id);
        },
        logout(){
            this.store1.logout();
            this.router.push('/login')
        }
    },

};
</script>

<style lang="scss" scoped>
.logoutBtn{
    width:100px;
    height:50px;
}
.ticketsRouterLinkDec{
    text-decoration: none;
    color:white;
    padding:20px;
    border: 1px solid transparent;
    border-radius:50px;
    background-color: red;
}
</style>