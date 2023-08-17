import { createContext, useState } from "react"

export const GlobalContext = createContext(null as any)

export function GlobalProvider(props: any) 
{
    const {children} = props
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");
  
    return (
        <GlobalContext.Provider value={{ token, setToken, username, setUsername }}>
            {children}
        </GlobalContext.Provider>
    )
}
