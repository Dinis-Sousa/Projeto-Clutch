<template>
    <MyNavBar />
    <h1 class="bilhetesTítulo">Bilhetes</h1>
    <div class="bilhetesContainer">
        <div class="BilhetesContainer">
            <div class="cadaBilheteItem" v-for="ticket in store.tickets" :key="ticket.id">
                <div class="bilhetesCard">
                    <div class="cardBody">
                        <h5 class="cardTitle">{{ ticket.name }}</h5>
                        <p class="cardText">Bilhetes disponíveis: {{ ticket.available }}</p>
                        <p class="cardText">Preço: {{ ticket.price }}€</p>
                        <button @click="buyTicket(ticket.id)" class="cardBtn">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-link class="ticketsRouterLinkDec" to="/adminTickets" v-if="this.store1.isAdmin == true">Admin ticket</router-link>
    <router-link class="usersRouterLinkDec" to="/adminUsers" v-if="this.store1.isAdmin == true">Users ticket</router-link>
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
.bilhetesContainer{
    display:flex;
    justify-content: center;
}
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
.usersRouterLinkDec{
    text-decoration: none;
    color:white;
    padding:20px;
    border: 1px solid transparent;
    border-radius:50px;
    background-color: blue;
}
.BilhetesContainer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 10vw;
}
.cadaBilheteItem{
    padding:20px;
    background-color: #171617;
    border-radius:20px;
    backdrop-filter: blur(10px);
}
.cadaBilheteItem button{
    border-radius:50px;
    border: 1px solid #816fa8;
    background-color: #171617;
    color: #816fa8;
}
.cadaBilheteItem button:hover{
    transform:scale(1.2);
    color:white;
    border: 1px solid white;
}
</style>