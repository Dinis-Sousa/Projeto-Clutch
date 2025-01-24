import { defineStore } from 'pinia';
import {get} from '@/api/api.js'

const apiBaseUrl = 'https://localhost:3000';
const ENDPOINT = 'convidados';

export const useConvidadosStore = defineStore('convidados', {
    state: () => ({
        convidados: []
        
    }),
    actions:{
        async fetchConvidados(){
            try{
                this.convidados = await get(apiBaseUrl, ENDPOINT)
            } catch(error) {
                console.error(error)
            }
        }
    },
    persist: {
        enabled: true,
        storage:localStorage
    }
})