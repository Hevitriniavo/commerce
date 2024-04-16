import ProductDetail from "@/app/components/product-detail";
import { ProductWithCategory } from "@/app/types/type";

interface ProductDetailProps {
    params: {
        productId: number
    }
}

async function getProduct(id: number): Promise<ProductWithCategory> {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const product = await response.json();
    return product;
}


export default async function ProductDetailPage(props: ProductDetailProps) {
    const productWithCategory = await getProduct(props.params.productId);
    return (
        <>
            <ProductDetail
                productWithCategory={productWithCategory}
            />
        </>
    )
}
