<template>
    <div class="popUpBackground">
        <div class="popUpInner">
            <p>O nome que está a tentar usar já está associado a outra conta</p>
            <div class="popUpBtns">
                <router-link to="/login"><button>Tente Novamente</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyPopUpNomeExistente",
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
    background-color: rgba(0,0,0,0.6);

    display: flex;
    align-items: center;
    justify-content: center;
}
.popUpInner{
    background-color: #333;
    border-radius: 50px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
.popUpBackground button{
    border: 1px solid #0000FF;
    border-radius: 50px;
}
.popUpInner p{
    padding: 50px 100px 0px 100px;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: lighter;
    z-index:101;
}
.popUpBtns{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding:30px;
    width:100%;
    z-index:99;
}
.popUpBtns button{
    border: 1px solid #0000FF;
    border-radius: 50px;
    background: transparent;
    color: #7A7373;
    padding:5px 30px;
    transition: transform 0.3s ease-in-out, color 0.3s ease, background-color 0.3s ease;
}
.popUpBtns button:hover{
    transform: scale(1.2);
    color:white;
    background: black;
}
</style>