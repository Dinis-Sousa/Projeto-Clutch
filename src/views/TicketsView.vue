<template>
    <MyNavBar />
    <h1 class="bilhetesTítulo">Bilhetes</h1>
    <div class="bilhetesContainerSingle">
        <div class="BilhetesContainer" v-for="ticket in store.tickets.filter(ticket => ticket.id <= 3)" :key="ticket.id">
            <div class="cadaBilheteItem">
                <img :src="ticket.imgPath" alt="imagem do bilhete">
            </div>
            <p class="cardText">{{ ticket.price }},00€</p>
            <button @click="buyTicket(ticket.id)" class="cardBtn">Comprar</button>
        </div>
    </div>
    <div class="bilhetesContainerSpecial">
        <div class="BilhetesContainer" v-for="ticket in store.tickets.filter(ticket => ticket.id > 3)" :key="ticket.id">
            <h2 class="cardTitle">{{ ticket.name }}</h2>
            <div class="cadaBilheteItem">
                <img :src="ticket.imgPath" alt="imagem do bilhete">
            </div>
            <p class="cardText">{{ ticket.price }},00€</p>
            <button @click="buyTicket(ticket.id)" class="cardBtn">Comprar</button>
            
        </div>
    </div>
    
    <router-link class="ticketsRouterLinkDec" to="/adminTickets" v-if="this.store1.isAdmin == true">Admin ticket</router-link>
    <router-link class="usersRouterLinkDec" to="/adminUsers" v-if="this.store1.isAdmin == true">Admin Users</router-link>
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
        },
    },

};
</script>

<style lang="scss" scoped>
h1{
    font-size: 4em;
}
.bilhetesContainerSingle{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cadaBilheteItem{
    padding:20px;
    background-color: transparent;
    border-radius:20px;
    backdrop-filter: blur(10px);
}
.BilhetesContainer button{
    border-radius:50px;
    border: 1px solid #816fa8;
    background-color: #171617;
    color: #816fa8;
    padding: 5px 40px;
    font-size: 1em;
}
.BilhetesContainer button:hover{
    transform:scale(1.2);
    color:white;
    border: 1px solid white;
}
.BilhetesContainer p{
    font-family: 'Host Grotesk';
    font-weight: black;
    font-size: 2em;
}
.cadaBilheteItem img{
    width: 20vw;
    height: 60vh;
}
.cadaBilheteItemS img{
    width: 30vw;
    height: 80vh;
}
.bilhetesContainerSpecial{
    margin:100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10vh;
}
.backgroundCoisoTicekts{
    position: relative;
    height:60vh;
    width: 99vw;
    background-image: url("../assets/images/pngfind.com-linhas-png-5482397 3.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0% auto 50% auto;
    z-index: -1;
    color:white;
}
</style>