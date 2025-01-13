import { defineStore } from 'pinia';

export const useParceirosImgStore = defineStore('ParceirosImg', {
    state: () => ({
        img1: "../src/assets/images/image 20.png",
        img2: "../src/assets/images/image 21.png",
        img3: "../src/assets/images/image 22.png",
        img4: "../src/assets/images/image 26.png",
        img5: "../src/assets/images/image 7.png",
        img6: "../src/assets/images/image 8.png",
        img7: "../src/assets/images/image 9.png",
        img8: "../src/assets/images/image 10.png"
    }),
    actions: {
        showImg(){
            return this.img1
        },
        showImg1(){
            return this.img2
        },
        showImg2(){
            return this.img3
        },
        showImg3(){
            return this.img4
        },
        showImg4(){
            return this.img5
        },
        showImg5(){
            return this.img6
        },
        showImg6(){
            return this.img7
        },
        showImg7(){
            return this.img8
        },
    },
    persist: {
        enabled: true,
        storage:localStorage
    }
})