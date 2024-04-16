import Header from "../components/header";
import Product from "../components/product";
import { Paginate, ProductPayload } from "../types/type";

async function getData(): Promise<Paginate<ProductPayload>> {
    const response = await fetch("http://localhost:8080/products")
    const data = await response.json();
    return data;
}

export default async function ProductPage() {
    const data = await getData();
    return (
        <div className="flex flex-col justify-center">
            <Header className="h-80" />
            <div className="flex flex-wrap justify-center gap-20 px-36 py-20">
                {data.content.length > 0 && (
                    data.content.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>

    )
}
