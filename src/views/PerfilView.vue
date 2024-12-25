<template>
    <div>
        <MyNavBar />
        <div class="containerFlex">    
            <div class="perfilContainer">
                <div class="perfilInner">
                    <div class="perfilImg"></div>
                    <div class="perfilInfo">
                       <span>{{showName}}<br></span>
                        <span>{{ showEmail }}<br></span>
                        <button>Editar Perfil</button>
                    </div>
                </div>
                <div class="perfilCenas">
                    <div class="cenasCenadas">
                        <span>Bilhetes Comprados</span>
                        <span>Métodos Pagamento</span>
                    </div>
                    <div class="cenasdoCarrinho">
                        <router-link to="/carrinho"><button>Ver Carrinho</button></router-link>
                    </div>
                </div>
            </div>
        </div>
        <MyFooter />
    </div>
</template>

<script>
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'
import { useUsersStore } from '@/stores/users';

export default {
    components: {
        MyNavBar,
        MyFooter,
    },
    data() {
        return {
            store: useUsersStore(),
            name:'',
            email: '',
        }
    },
    computed: {
        showName(){
                this.name = this.store.showName()
                return this.name
            },
        showEmail() {
            this.email = this.store.showEmail()
            return this.email
        },
    }
}
</script>

<style lang="scss" scoped>
.containerFlex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.perfilContainer{
    width: 67vw;
    height: 69vh;
    border: 1px solid #7A7373;
    border-radius: 50px;
    background-color: black;
    left:50%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;    
}
.perfilInner{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 64vh;
    border: 1px solid white;
    border-radius: 50px;
    margin:50px 50px 100px 100px;
    padding:20px;
    width: 20vw;
}
.perfilImg{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 33vh;
    padding: 0px;
}
.perfilInfo{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 33vh;
    padding: 0px;
}
.perfilInfo span{
    border: 1px solid white;
    border-radius: 50px;
    padding:20px;
    font-weight: bold;
    font-size: 1.3em;
    text-align: center;
}
.perfilInfo button{
    padding:10px 20px;
    border-radius: 50px;
    font-weight: bold;
    font-size: 1.3em;
    transition: transform .3 ease-in-out;
}
.perfilInfo button:hover{
    transform: scale(1.2);
}
.perfilCenas{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 69vh;
    padding: 0px;
}
.cenasCenadas{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 28vh;
    width: 30vw;
    padding: 0px;
    border: 1px solid white;
    border-radius: 50px;
    padding:20px;
    margin:50px 100px 100px 100px;
}
.cenasCenadas span{
    border: 1px solid white;
    border-radius: 50px;
    padding:20px;
    font-weight: bold;
    font-size: 1.8em;
    text-align: center;
}
.cenasdoCarrinho{
    display: flex;
    justify-content: center;
}
.cenasdoCarrinho button{
    border: 1px solid transparent;
    border-radius: 50px;
    padding:15px 40px;
    background-color: #161a20;
    color: white ;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 0;
}
.cenasdoCarrinho button::after{
    content: '';
    position: absolute;
    height: 107%;
    width: 102%;
    border-radius: 50px;
    background: red;
    background-image: linear-gradient(to bottom, #008cff, #e100ff);
    z-index: -1;
}
.cenasdoCarrinho button:hover{
    z-index: 0;
    box-shadow: 40px 0 100px #008cff, -40px 0 100px #e100ff ;
}
</style>