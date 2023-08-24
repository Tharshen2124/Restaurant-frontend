import Card from '@/components/organisms/Card';
import type { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import Link from 'next/link';

export default function Orderitems({menuItem}: InferGetStaticPropsType<typeof getStaticProps>) 
{
  const { data } = menuItem;
  return (
    <>
    <Link href="/">Back</Link>
    <div className="flex justify-center mt-10">
        <Card 
          menuItem={data.menu_item} 
          price={data.price} 
          id={data.id}
        />
        <input type="text" placeholder="sfoofi" required/>
    </div>
     
    </>
  )
}
// meow meow
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: {orderitem: '1'},
      },
      { 
        params: {orderitem: '2'},
      },
      {
        params: {orderitem: '3'},
      }
    ], 
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<{menuItem: any}> = async (context :any) => {

    const { params } = context
    const response = await fetch(`http://localhost/api/v1/menu/${params.orderitem}`);
    const data = await response.json()
    
    if(!data) 
    {
        return {
            notFound : true,
        }
    }

    console.log(`Generating page for /posts/${params.orderitem}`)

    return {
        props: {
            menuItem:data,
        }
    }
}



