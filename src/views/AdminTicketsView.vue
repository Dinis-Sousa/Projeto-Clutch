<template>
    <MyNavBar />
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>total</th>
                <th>available</th>
                <th>price</th>
                <th>profit</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="t in store.tickets" :key="t.id">
                <td>{{ t.id }}</td>
                <td>{{ t.name }}</td>
                <td>{{ t.total }}</td>
                <td>{{ t.available }}</td>
                <td>{{ t.price }}</td>
                <td>{{ t.profit }}</td>

            </tr>
        </tbody>
    </table>
    <div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Id</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" v-model="id">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" v-model="name">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Total</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="total" v-model="total">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Price</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="price" v-model="price">
        </div>
        <button class="btn btn-dark" @click="modifyTicket(id, name, total, price)">Edit</button>
    </div>
    <MyFooter/>
</template>

<script>
import { useTicketsStore } from '@/stores/tickets';
import MyNavBar from '@/components/navbar.vue'
import MyFooter from '@/components/footer.vue'

export default {
    components: {
        MyNavBar,
        MyFooter,
    },
    data() {
        return {
            id: 0,
            name: '',
            total: 0,
            price: 0,
            store: useTicketsStore()
        }
    },
    methods: {
        modifyTicket(id, name, total, price) {
            this.store.modifyTicket(id, name, total, price);
        }
    },

}
</script>

<style lang="scss" scoped></style>