import type {ReactNode,FC} from "react";
import { User, userContext } from "./userContext";

interface userProviderProps{
    children:ReactNode
}

export const userProvider:FC<userProviderProps>=({children})=>{
    const value:User={
        name:"odari",
        email:"odari@gmail.com"
    }
    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}
