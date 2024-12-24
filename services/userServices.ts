// src/services/userService.ts
import { UserModel } from '../models/userModel';

export class UserService {
  
  async getAll(){
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(json =>json)
    return users;
  }
  
  async create(data: any) {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      });
      const newUser = await response.json();
      return newUser;
    } catch (error) {
      throw new Error(String(error))
    }
  }
  
  async get(id: string) {
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        },
      });
      const user = await response.json();
      return user;
    } catch (error) {
      throw new Error(String(error));
    }  
  }

  async update(id: string, data: any) {
    // Lógica para actualizar un usuario
    return UserModel.update(id, data)
  }

  async delete(id: string) {
    // Lógica para eliminar un usuario
    return UserModel.delete(id)
  }
}