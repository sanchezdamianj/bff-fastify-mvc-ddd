"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
const userRoutes = async (fastify) => {
    fastify.post('/', userController_1.createUser);
    fastify.get('/', userController_1.getUsers);
    fastify.get('/:id', userController_1.getUser);
    fastify.put('/:id', userController_1.updateUser);
    fastify.delete('/:id', userController_1.deleteUser);
};
exports.default = userRoutes;
