import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
    state: () => ({
        isAuthenticated: false,
        isAdmin:false,
        users: [
            {
                id:0,
                name: 'admin',
                email: 'admin@gmail.com',
                password: '123456',
                blocked: false,
            },
        ]
    }),
    actions: {
        checkLogin(name, password){
            const nameCheck = this.users.find(u => u.name == name)
            if(nameCheck){
                const passCheck = nameCheck.password == password;
                if(passCheck){
                    this.isAuthenticated = true
                    if(nameCheck.id === 0) {
                        this.isAdmin = true
                    } else {
                        this.isAdmin = false
                    }
                } else{
                    alert('Password incorreta')
                }
            } else{
                alert('Nome do Utilizador não existe!')
            }
        },
        logout(){
            this.isAuthenticated = false
        },
        addUser(name, email, password) {
            const user = {
                id: this.idUser(),
                name: name,
                email: email,
                password: password,
                blocked: false,
                isAdmin: false,
            }
            this.users.push(user)
            alert('Registado com sucesso!')
        },
        idUser() {
            if (this.users.length === 0) {
                return 1
            } else {
                return this.users[this.users.length - 1].id + 1
            }
        },
        blockUser(idUser) {
            const user = this.users.find(u => u.id === idUser);
            if (user) {
                user.blocked = true;
            }
        },
        deleteUser(idUser) {
            this.users = this.users.filter(u => u.id !== idUser);
        },
        unblock(idUser) {
            const user = this.users.find(u => u.id === idUser);
            if (user) {
                user.blocked = false;
            }
        }
        
    },

    persist: {
        enable:true,
        storage: localStorage,
        pick: ['users']
    }
});