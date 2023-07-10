import Links from 'next/link';

export default function navlinks() {
    return (
        <div className="hidden lg:flex lg:gap-x-12">
            <Links href="/something" className="text-sm font-semibold leading-6 text-gray-900">Product</Links>
            <Links href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</Links>
            <Links href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</Links>
            <Links href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</Links>
        </div>
    )
}