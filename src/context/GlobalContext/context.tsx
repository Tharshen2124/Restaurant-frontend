import { 
    useState, 
    useEffect, 
    createContext, 
} from "react";


export const GlobalContext = createContext(null as any)

export function GlobalProvider(props: any) 
{
    const {children} = props
    const [token, setToken] = useState<any>("");
    const [username, setUsername] = useState<any>("");
    
    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        const storedUsername = sessionStorage.getItem('username');
        
        if (storedToken && storedUsername) {
            document.cookie = `token=${storedToken}`;
            setToken(storedToken);
            setUsername(storedUsername);
        }
    }, [])
      
    useEffect(() => {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('username', username);
    }, [token, username])

    return (
        <GlobalContext.Provider value={{ token, setToken, username, setUsername }}>
            {children}
        </GlobalContext.Provider>
    )
}



