import { defineStore } from 'pinia';

export const useJogosEmDestaqueStore = defineStore('JogosEmDestaque', {
    state: () => ({
        csH1: 'CS2',
        csVideo: "https://www.youtube.com/watch?v=P22HqM9w500",
        csIcon: "../src/assets/images/cs2_icon 1.png",
        valH1: 'Valorant',
        valVideo: "https://www.youtube.com/watch?v=DQqXOLPyWDU",
        valIcon: "../src/assets/images/valorant_icon 1.png",
        overH1: 'OverWatch 2',
        overVideo: "https://www.youtube.com/watch?v=lkTHRdZzl1o",
        overIcon: "../src/assets/images/overwatch_icon 1.png"
        
    }),
    getters:{
        showCs(){
            const showCs = []
            showCs.push(this.csH1, this.csVideo, this.csIcon)
            return Array.from(showCs)
        },
        showVal(){
            const showVal = []
            showVal.push(this.valH1, this.valVideo, this.valIcon)
            return Array.from(showVal)
        },
        showOver(){
            const showOver = []
            showOver.push(this.overH1, this.overVideo, this.overIcon)
            return Array.from(showOver)
        },
    },
    persist: {
        enabled: true,
        storage:localStorage
    }
})