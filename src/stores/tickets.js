import { defineStore } from 'pinia';
import { useUsersStore } from '@/stores/users';

export const useTicketsStore = defineStore('tickets', {
    state: () => ({
        tickets: [
            {
                id: 1,
                name: 'Clutch Day 1',
                total: 200,
                available: 200,
                price: 15,
                profit: 0,
                imgPath:'../src/assets/images/image 33.png'
            },
            {
                id: 2,
                name: 'Clutch Day 2',
                total: 200,
                available: 200,
                price: 15,
                profit: 0,
                imgPath:'../src/assets/images/image 23.png'
            },
            {
                id: 3,
                name: 'Clutch Day 3',
                total: 200,
                available: 200,
                price: 15,
                profit: 0,
                imgPath:'../src/assets/images/image 12.png'
            },
            {
                id: 4,
                name: 'Clutch General Pass ',
                total: 200,
                available: 200,
                price: 35,
                profit: 0,
                imgPath:'../src/assets/images/image 13.png'
            },
            {
                id: 5,
                name: 'Clutch VIP Pass',
                total: 200,
                available: 200,
                price: 65,
                profit: 0,
                imgPath:'../src/assets/images/image 11.png',
                imgVip: '../src/assets/images/image 34.png',
            }
        ]
    }),
    actions: {
        buyTicket(idTicket) {
            const ticket = this.tickets.find(t => t.id === idTicket);
            if (ticket && ticket.available > 0) {
                ticket.available--;
                ticket.profit += parseInt(ticket.price);
                const userStore = useUsersStore();
                const storeId = userStore.AuthenticatedId 
                const userToUpdate = userStore.users.find(u => u.id == storeId)
                if (userToUpdate){
                    const ticketAlreadyBought = userToUpdate.carrinho.find(carrinho => carrinho.id === idTicket)
                    if(ticketAlreadyBought){
                        ticketAlreadyBought.number ++
                    } else{
                        const boughtTicket = {
                            id : ticket.id,
                            name : ticket.name,
                            price : ticket.price,
                            imgPath: ticket.imgPath,
                            number: 1
                        }
                        userToUpdate.carrinho.push(boughtTicket)
                    }
                    userToUpdate.priceTotal = parseInt(userToUpdate.priceTotal) + parseFloat(ticket.price)
                }
            }
        },

        modifyTicket(idTicket, nameTicket, totalTicket, priceTicket) {
            const ticket = this.tickets.find(t => t.id == idTicket);
            if (ticket) {
                ticket.name = nameTicket;
                ticket.total = totalTicket;
                ticket.price = priceTicket;
                ticket.available = totalTicket;
            }
        },

    },
    persist: {
        enabled: true,
        storage:localStorage
    }
})