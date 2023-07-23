import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Menu } from '../types/menu'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps: GetStaticProps<{repo: any}> = async () => {
  let url = 'http://0.0.0.0:80/api/v1/menu'
  let repo;
  try {
      const response = await axios.get(url);
      repo = response.data;
  } catch (err) {
      console.log(err);
  }

  return { 
    props: {
      repo,
    }
    
  }
}

export default function Home({repo}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <nav className="shadow bg-white">
        <div className="h-16 mx-auto px-5 flex items-center justify-between">
          <a className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a>
          <ul className="flex items-center gap-5 pl-5">
            <li><a className="hover:text-cyan-500 transition-colors" href="#food">Foods</a></li>
            <li><a className="hover:text-cyan-500 transition-colors" href="#drink">Drinks</a></li>
            <li><a className="hover:text-cyan-500 transition-colors" href="">Beverages</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <Link href="/login"  className="hover:text-cyan-500 transition-colors">Login</Link>
            <Link href="/register" className="hover:text-cyan-500 transition-colors">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main>
        <section id="food" className="mt-10">
          <h1 className="text-3xl bg-white mx-auto text-center w-48 py-2 rounded-lg shadow-md mb-4 font-semibold">Foods</h1>
          <div className="flex flex-wrap gap-5 justify-center">
          {repo.data.map((post: Menu, i: number) => (
            post.type === "food" && 
            <div key={i} className="bg-white w-80 h-96 py-4 px-5 rounded-lg shadow-md">
              <Image src="/laksa.jpg" alt="" width={275} height={100} className="mx-auto rounded-md"/>
              <div className="flex justify-between mt-3 px-1">
                <p className="text-lg font-semibold">{post.menu_item}</p>
                <p className="text-lg font-semibold">RM {post.price}</p>
              </div>
            </div>
          ))}
          </div>
        </section>
        <section id="drink" className="mt-10">
          <h1 className="text-3xl bg-white mx-auto text-center w-48 py-2 rounded-lg shadow-md mb-4 font-semibold">Drinks</h1>
          <div className="flex flex-wrap gap-5 justify-center">
          {repo.data.map((post: Menu, i: number) => (
            post.type === "drink" && 
            <div key={i} className="bg-white w-80 h-96 py-4 px-5 rounded-lg shadow-md">
              <Image src="/laksa.jpg" alt="" width={275} height={100} className="mx-auto rounded-md"/>
              <div className="flex justify-between mt-3 px-1">
                <p className="text-lg font-semibold">{post.menu_item}</p>
                <p className="text-lg font-semibold">RM {post.price}</p>
              </div>
            </div>
          ))}
          </div>
        </section>
      </main>
    </>
  )
}
