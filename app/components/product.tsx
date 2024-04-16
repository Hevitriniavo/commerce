import Link from "next/link";
import { ProductPayload } from "../types/type"
import Image from 'next/image';

interface ProductProps {
    product: ProductPayload
}


export default function Product({ product }: ProductProps) {
    return (
        <div className="bg-white w-72 rounded-xl product-card-animation">
            <div className="mt-2 px-4 py-2 overflow-hidden">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg w-full h-32"
                />
            </div>
            <div className="px-4 py-2">
                <h2 className="text-gray-800 text-xl font-bold text-center capitalize">{product.name}</h2>
                <div>
                    <p className="text-gray-600 flex justify-between">
                        <span>Prix: </span>
                        <span className="text-blue-500">${product.price}</span>
                    </p>
                    <p className="text-gray-600 flex justify-between">
                        <span>Quantité: </span>
                        <span className="text-blue-500">{product.quantity}</span>
                    </p>
                    <p className="text-gray-600 flex justify-between">
                        <span>Active: </span>
                        <span className="text-blue-500">{product.isActive ? 'oui' : 'non'}</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center mb-6">
                <Link href={`/products/${product.id}`} className="px-2 py-1 bg-red-600 rounded-sm hover:bg-red-700">voir détails</Link>
            </div>
        </div>
    );
}