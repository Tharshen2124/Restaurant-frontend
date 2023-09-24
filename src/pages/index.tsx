import Navbar from '@/components/organisms/Navbar'
import axios from 'axios'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Menu } from '../types/menu'
import Card from '@/components/organisms/Card'
import { useContext } from 'react'
import { GlobalContext } from '@/context'

export const getServerSideProps = (async (context) => {
  const token = context.req.cookies;
  const res = await fetch('http://localhost/api/v1/menu', {
    method: "GET",
    headers: {
      Authorization:`Bearer ${token}`,
    }
  })
  const repo = await res.json()
  return { props: { repo } }

}) satisfies GetServerSideProps<{
  repo: Menu
}>

export default function Home({repo}: InferGetServerSidePropsType<typeof getServerSideProps>)  {
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
              showOrderButton={token ? true : false}
            />
          ))}
          {console.log(token + "fisdfhsdof")}
          </div>
        </section>
        <section id="drink" className="mt-10">
          <h1 className="text-3xl bg-white mx-auto text-center w-48 py-2 rounded-lg shadow-md mb-4 font-semibold">Drinks</h1>
          <div className="flex flex-wrap gap-5 justify-center">
          {repo.data.map((post: Menu) => (
            post.type === "drink" && 
            <Card 
              key={post.id} 
              menuItem={post.menu_item} 
              price={post.price} 
              id={post.id.toString()}
              showOrderButton={token ? true : false}
            />
          ))}
          </div>
        </section>
      </main>
    </>
  )
}
