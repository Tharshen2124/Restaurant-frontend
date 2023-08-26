import Navbar from '@/components/organisms/Navbar'
import axios from 'axios'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Menu } from '../types/menu'
import Card from '@/components/organisms/Card'
import { useContext } from 'react'
import { GlobalContext } from '@/context'

export const getStaticProps: GetStaticProps<{repo: any}> = async () => {
  let url = 'http://localhost/api/v1/menu'
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

  const {token, username, setUsername, setToken} = useContext(GlobalContext)

  return (
    <>
      <Navbar token={token} setToken={setToken} setUsername={setUsername} />
      <main>
        <section id="food" className="mt-10">
          <h1 className="text-3xl bg-white mx-auto text-center w-48 py-2 rounded-lg shadow-md mb-4 font-semibold">Foods</h1>
          <div className="flex flex-wrap gap-5 justify-center">
          {repo.data.map((post: Menu) => (
            post.type === "food" && 
            <Card 
              key={post.id} 
              menuItem={post.menu_item} 
              price={post.price} 
              id={post.id.toString()}
              showOrderButton={true}
            />
          ))}
          </div>
        </section>
        <section id="drink" className="mt-10">
          <h1 className="text-3xl bg-white mx-auto text-center w-48 py-2 rounded-lg shadow-md mb-4 font-semibold">Drinks</h1>
          <div className="flex flex-wrap gap-5 justify-center">
          {repo.data.map((post: Menu, i: number, token: any) => (
            post.type === "drink" && 
            <Card 
              key={i} 
              menuItem={post.menu_item} 
              price={post.price} 
              id={post.id.toString()}
              showOrderButton={true}
            />
          ))}
          </div>
        </section>
      </main>
    </>
  )
}
