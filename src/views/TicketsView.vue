<template>
    <MyNavBar />
    <div class="bilhetesContainer">
        <h1 class="bilhetesTítulo" style="margin-top:0px;">Bilhetes</h1>
        <div class="BilhetesContainer">
            <div class="cadaBilheteContainer" v-for="ticket in store.tickets" :key="ticket.id">
                <div class="bilhetesCard">
                    <div class="cardBody">
                        <h5 class="cardTitle">{{ ticket.name }}</h5>
                        <p class="cardText">Bilhetes disponíveis: {{ ticket.available }}</p>
                        <p class="cardText">Preço: {{ ticket.price }}</p>
                        <button @click="buyTicket(ticket.id)" class="cardBtn">Comprar bilhetes</button>
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
.bilhetesTítulo{
    text-align: center;
}
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