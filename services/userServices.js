"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
// src/services/userService.ts
const userModel_1 = require("../models/userModel");
class UserService {
    async getAll() {
        const users = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(json => json);
        return users;
    }
    async create(data) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const newUser = await response.json();
            return newUser;
        }
        catch (error) {
            throw new Error(String(error));
        }
    }
    async get(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const user = await response.json();
            return user;
        }
        catch (error) {
            throw new Error(String(error));
        }
    }
    async update(id, data) {
        // Lógica para actualizar un usuario
        return userModel_1.UserModel.update(id, data);
    }
    async delete(id) {
        // Lógica para eliminar un usuario
        return userModel_1.UserModel.delete(id);
    }
}
exports.UserService = UserService;
