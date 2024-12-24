// src/controllers/userController.ts
import { FastifyReply, FastifyRequest } from 'fastify';
import { UserService } from '../services/userServices';

const userService = new UserService()
 const getUsers = async (request: FastifyRequest, reply: FastifyReply) => {
  const users = await userService.getAll();
  reply.code(200).send(users)
  }


const createUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const { body } = request;
  const user = await userService.create(body)
  reply.code(201).send(user)
}
 const getUser = async (request: FastifyRequest<{Params : {id: string}}>, reply: FastifyReply) => {
  const { params } = request;
  const user = await userService.get(params.id)
  reply.send(user)
}
 const updateUser = async (request: FastifyRequest<{Params: {id : string}}>, reply: FastifyReply) => {
  const { params } = request;
  const user = await userService.update(params.id, request.body)
  reply.send(user)
}

const deleteUser = async (request: FastifyRequest<{Params: {id: string}}>, reply: FastifyReply) => {
  const {params} = request
  await userService.delete(params.id)
  reply.code(204).send()
}

export { createUser, deleteUser, getUser, getUsers, updateUser };
