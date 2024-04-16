import Image from "next/image";
import { ProductWithCategory } from "../types/type"
import Link from "next/link";

interface ProductDetailProps {
    productWithCategory: ProductWithCategory
}
export default function ProductDetail({ productWithCategory: product }: ProductDetailProps) {
    return (
        <div className="mb-20 mt-2">
            <h1 className="text-green-300 text-center font-extrabold text-4xl pt-3 p-5">{product.category.name}</h1>
            <div className="flex flex-row justify-evenly gap-32 px-3">
                <div>
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="object-cover flex h-96 rounded-sm"
                    />
                </div>
                <div className="flex flex-col basis-2/3 rounded-lg p-8">
                    <div className="w-full">
                        <h2 className="text-xl text-left font-bold mb-4 capitalize">{product.name}</h2>
                        <p className="text-gray-700">{product.description}</p>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start">
                        <p className="mt-4">
                            <span className="font-bold text-gray-900 text-3xl">${product.price}</span>
                        </p>
                        <p className="mt-2 text-sm">
                            <span className="text-gray-600">Quantité: </span>
                            <span className="text-gray-800">{product.quantity}</span>
                        </p>
                        <p className="mt-2 text-sm">
                            <span className="text-gray-600">Active: </span>
                            <span className="text-gray-800">{product.isActive ? 'oui' : 'non'}</span>
                        </p>

                    </div>
                    <div className="flex justify-start items-center mt-24">
                        <Link href="/products" className="px-2 py-1 bg-blue-600 rounded-sm hover:bg-blue-700">voir tout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
