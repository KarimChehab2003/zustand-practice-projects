import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/E-commerceTypes";
import ProductCard from "./ProductCard";

function ProductsList() {

    const getProducts = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Could not fetch products");
        const data: Product[] = await res.json();
        return data;
    }

    const { data: products, isError, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })


    return (
        <section className="flex flex-col justify-center bg-white rounded-lg col-span-1 md:col-span-5 space-y-4 order-2 md:order-1">
            <h1 className="text-4xl font-bold text-gray-800">Featured Products</h1>
            {
                (isLoading || isError || products) && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {
                            isLoading && (
                                <div className="w-8 h-8 rounded-full border-4 border-b-transparent animate-spin"></div>
                            )
                        }
                        {
                            isError && (
                                <div className="flex justify-center items-center p-4 bg-red-200">An error occurred: {error.message}</div>
                            )
                        }
                        {
                            products && (
                                <>
                                    {
                                        products.map((product) => (
                                            <ProductCard key={product.id} {...product} />
                                        ))
                                    }
                                </>
                            )
                        }
                    </div>
                )
            }
        </section>
    );
}

export default ProductsList;