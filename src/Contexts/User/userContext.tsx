import { createContext } from "react";

export interface User{
    name:string,
    email:string

}

export const userContext=createContext<User|null>(null)