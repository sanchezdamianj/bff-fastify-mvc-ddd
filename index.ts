import cors from '@fastify/cors'
import Fastify from 'fastify'
import userRoutes from './routes/userRoutes'

const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.register(cors, {})
fastify.register(userRoutes,{ prefix: '/users/'})

/**
 * Run the server!
 */


const start = async () => {
  try {
    await fastify.listen({ port: 3000  })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start(); 

export default fastify;