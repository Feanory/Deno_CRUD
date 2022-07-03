export interface User {
    id: number;
    name: string;
}

export interface OakContext {
    response: any;
    params: {
        id: string;
    }
}