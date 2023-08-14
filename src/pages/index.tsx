import Navbar from '@/components/organisms/Navbar'
import axios from 'axios'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Menu } from '../types/menu'
import Card from '@/components/organisms/Card'

export const getStaticProps: GetStaticProps<{repo: any}> = async () => {
  let url = 'http://0.0.0.0:80/api/v1/menu'
  let repo;
  
  try {
      const response = await axios.get(url);
      console.log(response)
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
      <Navbar/>
      <main>
        <section id="food" className="mt-10">
          <h1 className="text-3xl bg-white mx-auto text-center w-48 py-2 rounded-lg shadow-md mb-4 font-semibold">Foods</h1>
          <div className="flex flex-wrap gap-5 justify-center">
          {repo.data.map((post: Menu, i: number) => (
            post.type === "food" && 
            <Card key={i} menuItem={post.menu_item} price={post.price}/>
          ))}
          </div>
        </section>
        <section id="drink" className="mt-10">
          <h1 className="text-3xl bg-white mx-auto text-center w-48 py-2 rounded-lg shadow-md mb-4 font-semibold">Drinks</h1>
          <div className="flex flex-wrap gap-5 justify-center">
          {repo.data.map((post: Menu, i: number) => (
            post.type === "drink" && 
            <Card key={i} menuItem={post.menu_item} price={post.price}/>
          ))}
          </div>
        </section>
      </main>
    </>
  )
}
