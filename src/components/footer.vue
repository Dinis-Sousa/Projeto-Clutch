<template>
    <div>
        <div class="footerBackground">
            <h1>Site Links</h1>
            <div class="firstFlex">
                <div class="secondFlex1">
                    <router-link class="footerRouterLinkDec" to="/sobre">About us</router-link>
                    <router-link class="footerRouterLinkDec" to="/evento">Eventos</router-link>
                    <router-link class="footerRouterLinkDec" to="/areas">Áreas</router-link>
                    <router-link class="footerRouterLinkDec" to="/tickets">Bilhetes</router-link>
                </div>
                <div class="secondFlex2">
                    <router-link class="footerRouterLinkDec" to="/agenda">Agenda</router-link>
                    <router-link class="footerRouterLinkDec" to="/sobre">Patrocinadores</router-link>
                    <router-link class="footerRouterLinkDec" to="/sobre">FAQs</router-link>
                    <router-link class="footerRouterLinkDec" to="/carrinho">Carrinho</router-link>
                </div>
            </div>
            <div class="thirdFlex">
                <router-link to="/">
                    <img class="FooterImg" src="../assets/images/Banana_cone_de_mira_estilizado_Descrição__Um_logotipo_com_f3a1d8f7-d031-4e5e-b331-e5a8f41e8720 1.png" alt="logótipo">
                </router-link>
                <div class="insideFlex">
                    <img src="../assets/images/Line 96.png" alt="linhaFooter">
                    <span>Segue-nos em:</span>
                    <a target="_blank" href="https://www.instagram.com/">
                        <img class="iconsDec" src="../assets/images/instagram-white-icon 1.png" alt="instaIcon">
                    </a>
                    <a target="_blank" href="https://www.facebook.com/">
                        <img class="iconsDec" src="../assets/images/Vector.png" alt="faceIcon">
                    </a>
                    <a target="_blank" href="https://x.com/">
                        <img class="iconsDec" src="../assets/images/Vector (1).png" alt="XIcon">
                    </a>
                    <a target="_blank" href="https://www.youtube.com/">
                        <img class="iconsDec" src="../assets/images/youtube-app-white-icon 1.png" alt="YTIcon">
                    </a>
                    <img src="../assets/images/Line 96.png" alt="linhaFooter">
                </div>
                <div class="insideFlex1">
                    <p>Inscreve-te para receber as últimas novidades:</p>
                    <div>
                        <input type="email" placeholder="1234@gmail.com">
                        <button type="submit">Go</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MyFooter",
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Orbitron:wght@400..900&display=swap');
body{
    width: 100vh;
    margin-top:100px;
    margin-bottom: 0px;
}
.footerBackground{
    height:52vh;
    width: 100%;
    border-radius: 50px 50px 0px 0px;
    background-color: #2E2E91;
    margin-top:150px;
    margin-bottom: 0px;
}
.footerBackground h1{
    padding:20px 0px 0px 100px;
    font-size:40px;
    font-family: 'Host Grotesk';
    margin-bottom: 20px;
}
.firstFlex{
    padding-left:100px;
    display: flex;
    height:18.5vh;
    width:22.8vw;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
}
.secondFlex1{
    display: flex;
    height:15vh;
    flex-direction: column;
    justify-content: space-between;
}
.secondFlex2{
    display: flex;
    height:15vh;
    flex-direction: column;
    justify-content:space-between;
}
.footerRouterLinkDec{
    text-decoration: none;
    color:white;
    transition: transform 0.3s ease-in-out, color 0.3s ease, background-color 0.3s ease;
}
.footerRouterLinkDec:hover{
    transform: scale(1.2);
}
.FooterImg{
    height: auto;
    width: 6vw;
    margin: 0px 0px 100px 100px;
}
.thirdFlex{
    margin-top:50px;
    display: flex;
    flex-direction: row;
    width: 99vw;
    justify-content: space-between;
    align-items: center;
}
.insideFlex{
    display: flex;
    flex-direction: row;
    width: 25vw;
    justify-content: space-between;
    align-items: center;
}
.insideFlex span{
    font-size: 24px;
    font-family: 'Host Grotesk';
    font-weight: lighter;
}
.insideFlex1{
    display: flex;
    flex-direction: column;
    padding-right:50px;
}
.insideFlex1 p{
    font-size: 19px;
}
.insideFlex1 input{
    border-radius:0px;
    height:50px;
    width:10vw;
}
.insideFlex1 button{
    border: 0px solid transparent;
    height:50px;
    width: 3vw;
    color:white;
    background-color: #0000CD;
}
.iconsDec{
    transition: transform 0.3s ease-in-out, color 0.3s ease, background-color 0.3s ease;
}
.iconsDec:hover{
    transform: scale(1.2);
}
</style>