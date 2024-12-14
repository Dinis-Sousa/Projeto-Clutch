import { defineStore } from 'pinia';

export const useTicketsStore = defineStore('tickets', {
    state: () => ({
        tickets: [
            {
                id: 1,
                name: 'Clutch Day 1',
                total: 200,
                available: 200,
                price: 25,
                profit: 0
            },
            {
                id: 2,
                name: 'Clutch Day 2',
                total: 200,
                available: 200,
                price: 25,
                profit: 0
            },
            {
                id: 3,
                name: 'Clutch Day 3',
                total: 200,
                available: 200,
                price: 25,
                profit: 0
            },
            {
                id: 4,
                name: 'Clutch General Pass ',
                total: 200,
                available: 200,
                price: 25,
                profit: 0
            },
            {
                id: 5,
                name: 'Clutch VIP Pass',
                total: 200,
                available: 200,
                price: 25,
                profit: 0
            }
        ]
    }),
    actions: {
        buyTicket(idTicket) {
            const ticket = this.tickets.find(t => t.id === idTicket);
            if (ticket && ticket.available > 0) {
                ticket.available--;
                ticket.profit += ticket.price;
            }
        },

        modifyTicket(idTicket, nameTicket, totalTicket, priceTicket) {
            const ticket = this.tickets.find(t => t.id == idTicket);
            if (ticket) {
                ticket.name = nameTicket;
                ticket.total = totalTicket;
                ticket.price = priceTicket;
                
            }
        },

    },
    persist: {
        enabled: true,
        storage:localStorage
    }
})