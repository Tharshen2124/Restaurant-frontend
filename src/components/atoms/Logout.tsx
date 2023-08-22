import { redirect } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

//! why does this props definition does not work
//export default function Logout({token}: {token:string}, {setToken}: {setToken: any}, ) {
/**
 * 'Navbar' cannot be used as a JSX component.
    Its type '({ token }: { token: string; }, { setToken }: { setToken: Function; }, { setUsername }: { setUsername: Function; }) => Element' is not a valid JSX element type.
    Type '({ token }: { token: string; }, { setToken }: { setToken: Function; }, { setUsername }: { setUsername: Function; }) => Element' is not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
    Target signature provides too few arguments. Expected 3 or more, but got 2.ts(2786)
    Tag 'Navbar' expects at least '3' arguments, but the JSX factory 'React.createElement' provides at most '2'.ts(6229) 
 */

export default function Logout({token, setToken, setUsername}: any ) {
    const router = useRouter();
    
    const logoutUser = async(e: any) => {
    
        e.preventDefault();     
        console.log("hello this is the token :" + token)
        const response = await fetch('http://localhost/api/v1/logout', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        
        sessionStorage.clear()
        
        const data = await response.json()
        console.log(data);
        console.log(sessionStorage)
        
        router.reload()
        
    }


  return (
    <div className="flex items-center gap-3">
        <Link onClick={logoutUser} href="/logout"  className="hover:text-cyan-500 transition-colors">Logout</Link>
    </div>
  )
}
