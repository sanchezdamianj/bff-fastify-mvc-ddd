"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUsers = exports.getUser = exports.deleteUser = exports.createUser = void 0;
const userServices_1 = require("../services/userServices");
const userService = new userServices_1.UserService();
const getUsers = async (request, reply) => {
    const users = await userService.getAll();
    reply.code(200).send(users);
};
exports.getUsers = getUsers;
const createUser = async (request, reply) => {
    const { body } = request;
    const user = await userService.create(body);
    reply.code(201).send(user);
};
exports.createUser = createUser;
const getUser = async (request, reply) => {
    const { params } = request;
    const user = await userService.get(params.id);
    reply.send(user);
};
exports.getUser = getUser;
const updateUser = async (request, reply) => {
    const { params } = request;
    const user = await userService.update(params.id, request.body);
    reply.send(user);
};
exports.updateUser = updateUser;
const deleteUser = async (request, reply) => {
    const { params } = request;
    await userService.delete(params.id);
    reply.code(204).send();
};
exports.deleteUser = deleteUser;
