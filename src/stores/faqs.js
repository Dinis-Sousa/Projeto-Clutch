import { defineStore } from 'pinia';

export const useFaqsStore = defineStore('faqs', {
    state: () => ({
        faqs: [
            {
                id: 0,
                star: '../src/assets/images/Star.png',
                question:'Quem pode participar do evento Clutch?',
                arrow: '../src/assets/images/Arrow.png'
            },
            {
                id: 1,
                star: '../src/assets/images/Star.png',
                question:'Haverá torneios para jogadores amadores?',
                arrow: '../src/assets/images/Arrow.png'
            },
            {
                id: 2,
                star: '../src/assets/images/Star.png',
                question:'O que posso esperar da área de colecionáveis?',
                arrow: '../src/assets/images/Arrow.png'
            },
            {
                id: 3,
                star: '../src/assets/images/Star.png',
                question:'Quais são os destaques do evento?',
                arrow: '../src/assets/images/Arrow.png'
            }
        ]
        
    }),
    persist: {
        enabled: true,
        storage:localStorage
    }
})