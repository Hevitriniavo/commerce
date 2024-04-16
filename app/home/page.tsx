import Image from "next/image";
import Header from "../components/header";
import Link from "next/link";

export default async function Home() {
    return (
        <>
            <Header className="h-96" />
            <div className="mb-28 mt-2">
            <h1 className="text-green-300 text-center font-extrabold text-4xl pt-3 p-5">Fresh Fruit & Veggie</h1>
            <div className="flex flex-row justify-evenly gap-32 px-3">
                <div>
                    <Image
                        src="/home-fresh.jpg"
                        alt="Fresh Fruit & Veggie"
                        width={600}
                        height={600}
                        className="object-cover flex h-96 rounded-sm"
                    />
                </div>
                <div className="flex flex-col basis-2/3 rounded-lg p-8">
                    <div className="w-full">
                        <h2 className="text-xl text-left font-bold mb-4">Fresh Fruit & Veggie</h2>
                        <p className="text-gray-700">
                        Fresh Fruit & Veggie est un site de vente en ligne qui propose une large gamme de fruits frais et de légumes savoureux. Vous pouvez parcourir une sélection soigneusement choisie de produits saisonniers, cultivés avec soin pour garantir leur fraîcheur et leur qualité. Fresh Fruit & Veggie s'engage à fournir des aliments frais et délicieux directement à votre porte, facilitant ainsi votre accès à une alimentation saine et équilibrée. En plus des fruits et légumes frais, le site peut également offrir des conseils sur les bienfaits pour la santé de différents produits, des recettes inspirantes et des conseils nutritionnels pour vous aider à tirer le meilleur parti de votre alimentation. Avec Fresh Fruit & Veggie, vous pouvez être sûr de la qualité et de la fraîcheur de vos achats en ligne de fruits et légumes.
                        </p>
                    </div>
                   
                    <div className="flex justify-start items-center mt-10">
                        <Link href="/products" className="px-2 py-1 bg-blue-600 rounded-sm hover:bg-blue-700">voir tout</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
