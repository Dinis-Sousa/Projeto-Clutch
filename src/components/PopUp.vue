<template>
    <div class="popUpBackground">
        <h1>Já tens conta?</h1>
        <router-link to="/login"><button>Iniciar Sessão</button></router-link>
        <router-link to="/registar"><button>Resgistar</button></router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.popUpBackground{
    border-radius: 50px;
    border: 1px solid transparent;
}
.popUpBackground button{
    border: 1px solid #0000FF;
    border-radius: 50px;
}
</style>