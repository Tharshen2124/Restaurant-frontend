import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

interface Card {
    menuItem :string,
    price: number,
    id: string
}

export default function Card(props: Card, context: any) {
    const {params} = context
    console.log(params)
    return (
        <div className="bg-white w-80 py-7 px-7 rounded-lg shadow-md">
            <Image src="/laksa.jpg" alt="" width={275} height={100} className="mx-auto rounded-md"/>
            <div className="flex justify-between mt-3 px-1">
                <p className="text-lg font-semibold">{props.menuItem}</p>
                <p className="text-lg font-semibold">RM {props.price}</p>
            </div>
            <Link 
                href={`/orderitem/${props.id}`}>
                <button className="bg-slate-500 rounded-lg w-full text-white py-3 mt-5">
                    Order Now
                </button>
            </Link>
        </div>
    )
}