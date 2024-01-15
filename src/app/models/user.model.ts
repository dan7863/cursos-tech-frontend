export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    active: boolean;
}

export interface Login{
    email: string;
    password: string;
}
