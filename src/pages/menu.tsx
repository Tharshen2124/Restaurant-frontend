import type { InferGetStaticPropsType, GetStaticProps } from 'next'
 
export const getStaticProps: GetStaticProps<{repo: any}> = async () => {
  const res = await fetch('http://0.0.0.0:80/api/v1/menu')
    const repo = await res.json()
    return { props: { repo } }
  
}
 
export default function Page({repo,}: InferGetStaticPropsType<typeof getStaticProps>) {
  try {
  return repo.data[1].type
  } catch(err) {
    console.log("Error :" + err);
  }
}