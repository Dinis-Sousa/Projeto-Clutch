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
                <div class="backgroundCoisoTicekts" v-if="ticket.id == 4">
                    <img :src="ticket.imgPath" alt="imagem do bilhete">
                </div>
                <div class="bilheteVip">
                    <img v-if="ticket.id == 5" id:="vipCoisa" :src="ticket.imgVip" alt="imagem do bilhete">
                </div>
            </div>
            <p class="cardText">{{ ticket.price }},00€</p>
            <button @click="buyTicket(ticket.id)" class="cardBtn">Comprar</button>
        </div>
    </div>
    <MyFooter />
</template>


<script>
import { useTicketsStore } from '@/stores/tickets';
import {useUsersStore} from '@/stores/users';
import {useRouter} from 'vue-router';
import MyNavBar from '@/components/navbar.vue';
import MyFooter from '@/components/footer.vue';

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
.BilhetesContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cadaBilheteItem{
    background-color: transparent;
    border-radius:20px;
    backdrop-filter: blur(10px);
    padding: 20px 0px;
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
    font-weight: bold;
    font-size: 2em;
}
.BilhetesContainer img{
    width: 20vw;
    height: 60vh;
}
.cadaBilheteItem img{
    width: 20vw;
    height: 60vh;
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
    max-height:60vh;
    width: 99vw;
    background-image: url("../assets/images/pngfind.com-linhas-png-5482397 3.png");
    background-repeat: no-repeat;
    background-size: 100% 80%;
    background-position: center bottom;
    z-index: -1;
    color:white;
    display: flex;
    justify-content: center;
}
</style>