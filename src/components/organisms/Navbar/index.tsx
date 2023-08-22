import Logout from "@/components/atoms/Logout"
import Link from "next/link"

export default function Navbar({ token, setToken, setUsername }: any) {
    console.log(token);
    
    return (
        <nav className="shadow bg-white">
            <div className="h-16 mx-auto px-5 flex items-center justify-between">
            <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a>
            <ul className="flex items-center gap-5 pl-5">
                <li><a className="hover:text-cyan-500 transition-colors" href="#food">Foods</a></li>
                <li><a className="hover:text-cyan-500 transition-colors" href="#drink">Drinks</a></li>
                <li><a className="hover:text-cyan-500 transition-colors" href="">Beverages</a></li>
            </ul>
          
            {!token ? (
                    <div className="flex items-center gap-3">
                        <Link href="/login"  className="hover:text-cyan-500 transition-colors">Login</Link>
                        <Link href="/register" className="hover:text-cyan-500 transition-colors">Sign Up</Link>
                    </div>
                ) : (
                    <div>
                        <Logout token={token} setToken={setToken} setUsername={setUsername}/>
                    </div>
                )
            }
            </div>
        </nav>
    )
}