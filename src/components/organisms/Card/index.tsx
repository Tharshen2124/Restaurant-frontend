import Image from "next/image"

interface Card {
    menuItem :string,
    price: number
}

export default function Card(props: Card) {
    return (
        <div className="bg-white w-80 h-96 py-4 px-5 rounded-lg shadow-md">
            <Image src="/laksa.jpg" alt="" width={275} height={100} className="mx-auto rounded-md"/>
            <div className="flex justify-between mt-3 px-1">
            <p className="text-lg font-semibold">{props.menuItem}</p>
            <p className="text-lg font-semibold">RM {props.price}</p>
            </div>
        </div>
    )
}