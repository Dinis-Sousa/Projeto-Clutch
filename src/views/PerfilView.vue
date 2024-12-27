<template>
    <div>
        <MyNavBar />
        <div class="pageControl">   
            <div class="greyBorder">    
                <div class="backgroundCoisoPerfil">
                    <div class="containerFlex">    
                        <div class="perfilContainer">
                            <div class="perfilInner">
                                <div class="perfilImg"></div>
                                <div class="perfilInfo">
                                <span>{{showName}}<br></span>
                                    <span>{{ showEmail }}<br></span>
                                    <button @click="changeName">Editar Perfil</button>
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
                </div>
            </div> 
        </div> 
        <MyPopUpChangeName v-if="wannaChangeName"></MyPopUpChangeName>
        <MyFooter />
    </div>
</template>

<script>
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'
import MyPopUpChangeName from '@/components/PopUpChangeName.vue'
import { useUsersStore } from '@/stores/users';

export default {
    components: {
        MyNavBar,
        MyFooter,
        MyPopUpChangeName,
    },
    data() {
        return {
            store: useUsersStore(),
            name:'',
            email: '',
            wannaChangeName: false,
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
    },
    methods: {
        changeName(){
            this.wannaChangeName = !this.wannaChangeName
        }
    }
}
</script>

<style lang="scss" scoped>
.pageControl{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 5vw 0px 15vw 0px;
}
.containerFlex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64vh;
    margin: 0px 0px 15vw 0px;
}
.greyBorder{
    width: 99vw;
    height: 100vh;
    border: 1px solid transparent;
    border-radius: 50px;
    background-color: black;
    left:50%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 0;
}
.perfilContainer{
    width: 67vw;
    height: 69vh;
    border: 1px solid #333;
    border-radius: 50px;
    background-color: transparent;
    left:50%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px; 
}
.backgroundCoisoPerfil{
    width: 100vw;
    max-width: 100vw;
    height: 620px;
    background-image: url('../assets/images/pngfind.com-linhas-png-5482397 3.png');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}
.perfilInner{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 64vh;
    border: 1px solid white;
    background-color: black;
    border-radius: 50px;
    margin:5vw 50px 5vw 100px;
    padding:20px;
    width: 20vw;
    z-index: 2;
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
    background-color: black;
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