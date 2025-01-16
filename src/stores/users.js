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
        ],
        AuthenticatedId: null,
        AuthenticatedName: '',
        AuthenticatedEmail: '',
        AuthenticatedPreçoTotal: null,
        AuthenticatedCarrinho: [],
    }),
    actions: {
        checkLogin(name, password){
            const nameCheck = this.users.find(u => u.name == name)
            if(nameCheck){
                const passCheck = nameCheck.password == password;
                if(passCheck){
                    this.isAuthenticated = true;
                    this.AuthenticatedId = nameCheck.id
                    localStorage.setItem('AuthenticatedId', nameCheck.id);
                    this.AuthenticatedName = name
                    localStorage.setItem('AuthenticatedName', name);
                    this.AuthenticatedEmail = nameCheck.email
                    localStorage.setItem('AuthenticatedEmail', nameCheck.email);
                    this.AuthenticatedBilhetesComprados = nameCheck.bilhetesComprados
                    localStorage.setItem('AuthenticatedBilhetesComprados', nameCheck.bilhetesComprados);
                    this.AuthenticatedCarrinho = nameCheck.carrinho
                    localStorage.setItem('AuthenticatedCarrinho', nameCheck.carrinho);
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
        showName(){
            const storeName = localStorage.getItem('AuthenticatedName');
            this.AuthenticatedName = storeName
            return storeName
        },
        showEmail(){
            const storeEmail = localStorage.getItem('AuthenticatedEmail');
            this.AuthenticatedEmail = storeEmail
            return storeEmail
        },
        showBilhetes() {
            const storeBilhetesComprados = localStorage.getItem('AuthenticatedBilhetesComprados');
            this.AuthenticatedBilhetesComprados = storeBilhetesComprados
            return storeBilhetesComprados
        },
        showCarrinho() {
            const storeCarrinho = localStorage.getItem('AuthenticatedCarrinho');
            this.AuthenticatedCarrinho = storeCarrinho
            return storeCarrinho
        },
        logout(){
            this.isAuthenticated = false
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
                        isAdmin: false,
                    }
                    this.users.push(user)
                    alert('Registado com sucesso!')
                }
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
        enable: true,
        storage:localStorage,
    }
});