import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import image from '../assets/pasta.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <nav className="shadow bg-white">
        <div className="h-16 mx-auto px-5 flex items-center justify-between">
          <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a>
          <ul className="flex items-center gap-5 pl-5">
            <li><a className="hover:text-cyan-500 transition-colors" href="">Foods</a></li>
            <li><a className="hover:text-cyan-500 transition-colors" href="">Drinks</a></li>
            <li><a className="hover:text-cyan-500 transition-colors" href="">Beverages</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <Link href="/user/login"  className="hover:text-cyan-500 transition-colors">Login</Link>
            <Link href="/user/signup" className="hover:text-cyan-500 transition-colors">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main>
        <section>
          <div className="bg-white w-80 h-96">
            <Image src="https://i.imgur.com/ZF6s192m.jpg" alt="" width={100} height={100} />
          </div>
        </section>
      </main>
    </>
  )
}
