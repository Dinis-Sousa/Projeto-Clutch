import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
    state: () => ({
        isAuthenticated: false,
        isAdmin: false,
        AuthenticatedId: null,
        users: [
            {
                id:0,
                name: 'admin',
                email: 'admin@gmail.com',
                password: '123456',
                blocked: false,
                isAdminUser: true,
            },
        ],
    }),
    getters: {
        CurrentAuthenticatedCarrinho(){
            const storeId = this.AuthenticatedId 
            const userToUpdate = this.users.find(u => u.id == storeId)
            console.log(userToUpdate.carrinho)
            return Array.from(userToUpdate.carrinho)
        },
        showName(){
            const storeId = this.AuthenticatedId 
            const userToUpdate = this.users.find(u => u.id == storeId)
            return userToUpdate.name
        },
        showEmail(){
            const storeId = this.AuthenticatedId 
            const userToUpdate = this.users.find(u => u.id == storeId)
            return userToUpdate.email
        },
        showValordoCarrinho() {
            const storeId = this.AuthenticatedId 
            const userToUpdate = this.users.find(u => u.id == storeId)
            return userToUpdate.priceTotal
        },
    },
    actions: {
        checkLogin(name, password){
            const nameCheck = this.users.find(u => u.name == name)
            if(nameCheck){
                const passCheck = nameCheck.password == password;
                if(passCheck){
                    if(nameCheck.blocked == true){
                        alert('O ADMIN BLOQUEOU-TE KKKKKKKKK')
                    } else {
                        this.isAuthenticated = true;
                        this.isAdmin = nameCheck.isAdminUser;
                        this.AuthenticatedId = nameCheck.id
                        localStorage.setItem('AuthenticatedId', nameCheck.id);
                        this.isAdmin = nameCheck.isAdminUser;
                    }
                } else{
                    alert('Password incorreta')
                }
            } else{
                alert('Nome do Utilizador não existe!')
            }
        },
        userChangeName(nome){
            const nameCheck = this.users.find(u => u.name == nome)
            if(nameCheck){
                alert('Já está a ser utilizador esse nome')
            } else {
                if(nome == '' ){
                    alert('Campo Vazio')
                } else {
                    const storeId = localStorage.getItem('AuthenticatedId');
                    this.AuthenticatedId = storeId
                    const userToUpdate = this.users.find(u => u.id == storeId)
                    if (userToUpdate){
                    userToUpdate.name = nome
                    this.AuthenticatedName = nome;
                    localStorage.setItem('AuthenticatedName', nome);
                    }
                }
            }
        },
        logout(){
            this.isAdmin = false,
            this.isAuthenticated = false,
            this.AuthenticatedId = null,
            localStorage.removeItem('AuthenticatedId');
        },
        addUser(name, email, password) {
            const nameCheck = this.users.find(u => u.name == name)
            if (nameCheck){
                alert('Esse nome já está a ser usado')
            } else {
                const emailCheck = this.users.find(u => u.email == email)
                if (emailCheck){
                    alert('Esse email já está a ser usado')
                } else {
                    const user = {
                        id: this.idUser(),
                        name: name,
                        email: email,
                        password: password,
                        priceTotal: 0,
                        carrinho: [],
                        blocked: false,
                        isAdminUser: false,
                    }
                    this.users.push(user)
                    alert('Registado com sucesso!')
                }
            }
        },
        modifyUser(idUser, nameUser, emailUser, priceTotalUser){
            const user = this.users.find(u => u.id == idUser);
            if (user) {
                user.name = nameUser;
                user.total = emailUser;
                user.price = priceTotalUser;
            }
        },
        idUser() {
            if (this.users.length === 0) {
                return 1
            } else {
                return this.users[this.users.length - 1].id + 1
            }
        },
        blockUser(idUser) {
            const user = this.users.find(u => u.id == idUser);
            if (user) {
                user.blocked = !user.blocked;
            }
        },
        darAdmin(idUser){
            const user = this.users.find(u => u.id == idUser)
            if (user) {
                user.isAdminUser = !user.isAdminUser;
            }
        },
        deleteUser(idUser) {
            const user = this.users.findIndex(u => u.id == idUser)
            if (user) {
                this.users.splice(user,1)
            }
        },
        resetLocalStorage(){
            localStorage.clear()
        },
        
    },
    persist: {
        enable: true,
        storage:localStorage,
    }
});