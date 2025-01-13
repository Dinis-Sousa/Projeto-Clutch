import { defineStore } from 'pinia';

export const useJogosEmDestaqueStore = defineStore('JogosEmDestaque', {
    state: () => ({
        csH1: 'CS2',
        csVideo: "https://www.youtube.com/watch?v=P22HqM9w500",
        csIcon: "../src/assets/images/cs2_icon 1",
        valH1: 'Valorant',
        valVideo: "https://www.youtube.com/watch?v=DQqXOLPyWDU",
        valIcon: "../src/assets/images/valorant_icon 1",
        overH1: 'OverWatch 2',
        overVideo: "https://www.youtube.com/watch?v=lkTHRdZzl1o",
        overIcon: "../src/assets/images/overwatch_icon 1"
        
    }),
    actions: {
        showCs(){
            showCs = []
            h1 = this.csH1
            video = this.csVideo
            icon = this.csIcon
            showCs.push(h1, video, icon)
            return showCs
        },
    },
    persist: {
        enabled: true,
        storage:localStorage
    }
})