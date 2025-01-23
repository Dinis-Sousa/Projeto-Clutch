import { defineStore } from 'pinia';

export const useFaqsStore = defineStore('faqs', {
    state: () => ({
        faqs: [
            {
                id: 0,
                star: '../src/assets/images/Star.png',
                question:'Quem pode participar do evento Clutch?',
                answer: 'Toda a gente que tiver bilhete',
                arrow: '../src/assets/images/Arrow.png'
            },
            {
                id: 1,
                star: '../src/assets/images/Star.png',
                question:'Haverá torneios para jogadores amadores?',
                answer: 'Neste evento, os torneios são apenas para jogadores profissionais',
                arrow: '../src/assets/images/Arrow.png'
            },
            {
                id: 2,
                star: '../src/assets/images/Star.png',
                question:'O que posso esperar da área de colecionáveis?',
                answer: 'A área de colecionáveis é uma área cheio de items à venda relacionadas com o evento e com os jogos do evento',
                arrow: '../src/assets/images/Arrow.png'
            },
            {
                id: 3,
                star: '../src/assets/images/Star.png',
                question:'Quais são os destaques do evento?',
                answer: 'O ponto forte do evento é ser completamente dedicado aos três jogos de fps mais jogados no mundo inteiro',
                arrow: '../src/assets/images/Arrow.png'
            }
        ]
        
    }),
    persist: {
        enabled: true,
        storage:localStorage
    }
})