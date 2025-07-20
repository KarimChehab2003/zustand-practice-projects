import { addToCartSelector, useCartStore } from "../store/cart-store";
import type { Product } from "../types/E-commerceTypes";

function ProductCard(product: Product) {


    const addToCart = useCartStore(addToCartSelector);

    return (
        <article className="flex flex-col justify-between p-4 shadow-lg rounded-lg ">
            <figure className="flex justify-center items-center overflow-hidden ">
                <img className="w-full h-full object-cover" src={product.image} alt={"picture of " + product.title} />
            </figure>
            <div className="flex flex-col space-y-2">
                <p className="text-lg font-semibold">{product.title}</p>
                <p className="text-gray-700">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <p className="font-medium text-xl">${product.price.toFixed(2)}</p>
                    <button className="px-3.5 py-1.5 bg-sky-600 text-white rounded cursor-pointer hover:-translate-y-0.5 duration-300 transition-transform" onClick={() => addToCart({ ...product, quantity: 1 })}>Add To Cart</button>
                </div>
            </div>

        </article>
    );
}

export default ProductCard;