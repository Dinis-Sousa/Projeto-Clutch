<template>
    <div>
        <MyNavBar />
        <h1 id="h1Carrinho">Carrinho</h1>
        <div class="centrarContainer">
            <div class="cadaBilheteComprado" v-for="ticket in eachCarrinho" :key="ticket.id">
                <div class="container1st">
                    <img :src="ticket.imgPath" alt="imagem do bilhete">
                </div>
                <div class="container2nd">   
                    <div class="cadaBilheteInfoContainer">
                        <div class="cadaBilheteInfo">
                            <h1>{{ticket.name}}</h1>
                            <span v-if="ticket.id <= 3"> Tipo: Normal</span>
                            <span v-if="ticket.id == 4"> Tipo: Geral </span>
                            <span v-if="ticket.id == 5"> Tipo: VIP </span>
                        </div>    
                        <div class="deleteBtn">
                            <button @click="apagarDoCarrinho(ticket.id)"><img src="../assets/images/image 35.png" alt="botao de apagar"></button>
                        </div>
                    </div>
                    <div class="cadaBilheteNumbers">
                        <div class="btnContainer">    
                            <button class="lowerBtn" @click="minusNumber(ticket.id)">-</button>
                            <span>{{ ticket.number }}</span>
                            <button class="upperBtn" @click="addNumber(ticket.id)">+</button>
                        </div>
                        <h1>{{ showEachTotalprice(ticket.price, ticket.number) }}€</h1>
                    </div>
                </div>
            </div>   
                <div class="containerFinalPrice">
                    <h1>Preço Final: </h1>
                    <h1 id="valorFinal">{{ showTotalPrice}}€</h1>
                </div>
                <div class="containerBtn">    
                    <button class="finalizarcompraBtn">Finalizar Compra</button>
                </div>
        </div>
        <MyFooter />
    </div>
</template>

<script>
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'
import { useUsersStore } from '@/stores/users';
import { useTicketsStore } from '@/stores/tickets';
    export default {
        setup (){
            const store = useUsersStore();

            const eachCarrinho = store.CurrentAuthenticatedCarrinho;
            console.log(eachCarrinho)
            return {eachCarrinho}
        },
        components: {
            MyNavBar,
            MyFooter,
        },
        data() {
            return {
                store: useUsersStore(),
                store1: useTicketsStore(),
            }
        },
        computed: {
            showTotalPrice(){
                const storeId = this.store.AuthenticatedId 
                const userToUpdate = this.store.users.find(u => u.id == storeId)
                return userToUpdate.priceTotal
            }
        },
        methods:{
            showEachTotalprice(price, number){
                const total = price * number
                return total
            },
            addNumber(idTicket){
                const eachCarrinho = this.store.CurrentAuthenticatedCarrinho
                const theTicket = eachCarrinho.find(c => c.id == idTicket)
                if(theTicket){
                    theTicket.number ++
                    const storeId = this.store.AuthenticatedId 
                    const userToUpdate = this.store.users.find(u => u.id == storeId)
                    userToUpdate.priceTotal += theTicket.price 
                }
                this.showEachTotalprice(theTicket.price, theTicket.number)
            },
            minusNumber(idTicket){
                const eachCarrinho = this.store.CurrentAuthenticatedCarrinho
                const theTicket = eachCarrinho.find(c => c.id == idTicket)
                if(theTicket){
                    const storeId = this.store.AuthenticatedId 
                    const userToUpdate = this.store.users.find(u => u.id == storeId)
                    if(userToUpdate.priceTotal > 0){
                        theTicket.number --
                        userToUpdate.priceTotal -= theTicket.price 
                    } else {
                    theTicket.number = 0
                    }
                }
                this.showEachTotalprice(theTicket.price, theTicket.number)
            },
            apagarDoCarrinho(idTicket){
                const eachCarrinho = this.store.CurrentAuthenticatedCarrinho
                const theTicket = eachCarrinho.find(c => c.id == idTicket)
                this.store1.apagarTicketdoCarrinho(idTicket)
                const storeId = this.store.AuthenticatedId 
                const userToUpdate = this.store.users.find(u => u.id == storeId)
                if(userToUpdate.priceTotal > 0){
                    const storeId = this.store.AuthenticatedId 
                    const userToUpdate = this.store.users.find(u => u.id == storeId)
                    userToUpdate.priceTotal -= this.showEachTotalprice(theTicket.price, theTicket.number)
                    if(userToUpdate.priceTotal <= 0){
                        theTicket.number = 0
                    }
                }
                window.location.reload()     
            }
        }

    }
</script>

<style lang="scss" scoped>
#h1Carrinho{
    margin-left: 100px;
}
.cadaBilheteComprado{
    width: 53vw;
    height: 44vh;
    background-color: #2E2E91;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin:50px;
    border-radius: 50px;
}
h1{
    font-family: 'Orbitron';
}
.cadaBilheteNumbers{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
}
.btnContainer{
    font-size: 30px;
}
.btnContainer button{
    background-color: black;
    color:white;
    border-radius: 50%;
    width: 3.5vw;
    height: 7vh;
}
.containerFinalPrice{
    border-top: 1px solid #2E2E91;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 62vw;
    max-width: 100%;
}
.centrarContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.finalizarcompraBtn{
    border-radius: 50px;
    border: 1px solid transparent;
    background-color: #2E2E91;
    color:white;
    font-size: 1.5em ;
    font-family: 'Orbitron';
    font-weight: bold;
    padding:10px 30px;
}
.finalizarcompraBtn:hover{
    transform: scale(1.2);
} 
.containerBtn{
    width: 62vw;
    display:flex;
    flex-direction: row;
    justify-content: start;
    margin-top:20px;
}
#valorFinal{
    font-family: 'Host Grotesk';
}
.cadaBilheteNumbers h1{
    font-family: 'Host Grotesk';
    font-weight: bold;
}
.container2nd{
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 20vh;
    width: 36vw;
}
.container1st img{
    width: 17vw;
    height: 44vh;
}
.cadaBilheteInfoContainer{
    display: flex;
    justify-content: space-between;
}
.deleteBtn button{
    background: transparent;
    border: 0px;
}
</style>