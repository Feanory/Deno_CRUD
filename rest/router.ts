import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUsers, getUserById, createUser, editUserById, deleteUserById } from "./controller.ts";

const router = new Router();

router
.get('/api/users', getUsers)
.get('/api/users/:id', getUserById)
.post('/api/users', createUser)
.put('/api/users/:id', editUserById)
.delete('/api/users/:id', deleteUserById)

export {router};