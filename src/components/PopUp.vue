<template>
    <div class="popUpBackground">
        <div class="popUpInner">
            <h1>Já tens conta?</h1>
            <div class="popUpBtns">
                <router-link to="/login"><button>Iniciar Sessão</button></router-link>
                <router-link to="/registar"><button>Resgistar</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyPopUp",
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Orbitron:wght@400..900&display=swap');
.popUpBackground{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0,0,0,0.2);

    display: flex;
    align-items: center;
    justify-content: center;
}
.popUpInner{
    background-color: #333;
    backdrop-filter: blur(8px);
    border-radius: 50px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.popUpBackground button{
    border: 1px solid #0000FF;
    border-radius: 50px;
}
.popUpInner h1{
    padding: 50px 100px 0px 100px;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: lighter;
}
.popUpBtns{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding:30px;
    width:100%;
}
.popUpBtns button{
    border: 1px solid #0000FF;
    border-radius: 50px;
    background: transparent;
    color:white;
    padding:5px 30px;
}
</style>