import { useRouter } from "next/router";
import { useState } from "react";

export default function Cart({ orderitems }: any) {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);

  const openDrawer = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  return (
    <>
      <div onClick={openDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-cart4 mr-20"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
      </div>
      <div
        id="dropdown"
        hidden={dropdown}
        className="bg-white w-64 absolute top-20 right-20 rounded-lg px-5 py-3 shadow-lg"
      >
        <div className="flex justify-between font-bold">
          <p className="text-sm">Name</p>
          <p className="text-sm">Quantity</p>
        </div>
        {orderitems.map((orderitem: any, i: number) => (
          <div key={i}>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p className="w-3/6 text-sm">{orderitem.menu_item.menu_item}</p>
              <p className="text-sm">x{orderitem.quantity}</p>
            </div>
          </div>
        ))}
        {!orderitems ?? <p>NO items ordered!</p>}
        <button
          className="w-full mt-8 py-2 rounded-lg 
                text-white  bg-blue-500 text-sm"
          onClick={() => {
            router.push("/checkout");
          }}
        >
          Checkout
        </button>
      </div>
    </>
  );
}
