import { User, OakContext } from "./interface.ts";

let users: User[] = [
    { id: 1, name: 'Denys' },
    { id: 2, name: 'Olya' }
] 

export const getUsers = ({ response }: { response: any }) => {
    response.status = 200;
    response.body = {
        users
    }
}

export const getUserById = ({ response, params }: OakContext) => {
    const user: User | undefined = users.find(u => u.id === +params.id);

    if (user) {
        response.status = 200;
        response.body = {
            user
        }
    } else {
        response.status = 404;
        response.body = {
            message: 'User not found'
        }
    }
}

export const createUser = async ({ response, request }: { response: any, request: any }) => {
    const body: any = await request.body();

    if (!request.hasBody) {
        response.status = 400;
        response.body = {
            message: 'Invalid data'
        }
    } else {
        const user: User = body.value;
        user.id = users.length + 1;
        users.push(user);
        response.status = 201;
        response.body = {
            users
        }
    }
}

export const editUserById = async ({ response, request, params }: { response: any, request: any, params: any }) => {
    const body: any = await request.body();
    const userIndex = users.findIndex(u => u.id === +params.id);
    if (userIndex < 0) {
        response.status = 404;
        response.body = {
            message: 'User not found'
        }
    } else {
        if (!request.hasBody) {
            response.status = 400;
            response.body = {
                message: 'Invalid data'
            }
        } else {
            users[userIndex].name = body.value.name;
            response.status = 201;
            response.body = {
                users
            }
        }   
    }
}

export const deleteUserById = async ({ response, params }: { response: any, params: any }) => {
    const userIndex = users.findIndex(u => u.id === +params.id);
    if (userIndex < 0) {
        response.status = 404;
        response.body = {
            message: 'User not found'
        }
    } else {
        users = users.filter((user, index) => index !== userIndex);
        response.status = 201;
        response.body = {
            users
        }
    }
}