<template>
    <div class="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-center mb-4">Tickets Disponíveis</h1>
        <div class="row justify-content-center">
            <div class="col-md-4 mb-4" v-for="ticket in store.tickets" :key="ticket.id">
                <div class="card custom-card">
                    <div class="card-body">
                        <h5 class="card-title custom-title text-primary">{{ ticket.name }}</h5>
                        <p class="card-text custom-text">Bilhetes disponíveis: {{ ticket.available }}</p>
                        <p class="card-text custom-text">Preço: {{ ticket.price }}</p>
                        <button @click="buyTicket(ticket.id)" class="btn btn-dark">Comprar bilhetes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-link to="/adminTickets">
        <span> Admin ticket</span>
    </router-link>
    <router-link to="/login">
        <span>Login</span>
    </router-link>
</template>


<script>
import { useTicketsStore } from '@/stores/tickets';
export default {
    data() {
        return {
            store: useTicketsStore()
        }
    },
    methods: {
        buyTicket(id) {
            this.store.buyTicket(id);
        },

    },

};
</script>

<style lang="scss" scoped></style>