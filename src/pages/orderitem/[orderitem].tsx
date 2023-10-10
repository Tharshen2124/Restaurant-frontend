import Card from "@/components/organisms/Card";
import { GlobalContext } from "@/context";
import type {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function Orderitems({
  menuItem,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { token } = useContext(GlobalContext);
  const { data } = menuItem;
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(0);
  console.log(quantity);
  const submitMenuItem = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost/api/v1/add-to-cart", {
      method: "POST",
      body: JSON.stringify({ menu_id: data.id, quantity: quantity }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    router.push("/");
  };
  return (
    <>
      <Link href="/">Back</Link>
      <div className="flex justify-center mt-10">
        <form onSubmit={submitMenuItem}>
          <Card
            menuItem={data.menu_item}
            price={data.price}
            id={data.id}
            showOrderButton={false}
          />
          <p>
            <input
              className="w-80 my-5"
              type="number"
              min="1"
              max="10"
              onChange={(e: any) => setQuantity(e.target.value)}
            />
          </p>
          <input
            className="w-80 bg-slate-500 py-3 rounded-lg text-white"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: { orderitem: "1" },
      },
      {
        params: { orderitem: "2" },
      },
      {
        params: { orderitem: "3" },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{ menuItem: any }> = async (
  context: any,
) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost/api/v1/menu/${params.orderitem}`,
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /posts/${params.orderitem}`);

  return {
    props: {
      menuItem: data,
    },
  };
};
