// src/routes/userRoutes.ts
import { FastifyInstance } from 'fastify'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/userController'

const userRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/', createUser)
  fastify.get('/', getUsers)
  fastify.get('/:id', getUser)
  fastify.put('/:id', updateUser)
  fastify.delete('/:id', deleteUser)
}

export default userRoutes