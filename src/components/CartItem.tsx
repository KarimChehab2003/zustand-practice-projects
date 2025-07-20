import type { Product } from "../types/E-commerceTypes";
import { removeFromCartSelector, updateQuantitySelector, useCartStore } from "../store/cart-store";

function CartItem(product: Product) {
    const updateQuantity = useCartStore(updateQuantitySelector);
    const removeFromCart = useCartStore(removeFromCartSelector);

    const handleDecrement = () => {
        if (product.quantity == 1) {
            removeFromCart(product.id);
            return;
        }
        updateQuantity(product.id, product.quantity - 1)
    }

    const handleIncrement = () => {
        updateQuantity(product.id, product.quantity + 1)
    }

    return (
        <li className="flex justify-between items-center space-x-2 bg-white p-4 shadow-lg rounded-md">
            <figure className="w-[100px] h-[100px] overflow-hidden">
                <img className="w-full h-full object-cover" src={product.image} alt={`image of ${product.title}`} />
            </figure>
            <div className="flex flex-col justify-center">
                <p className="text-lg font-semibold">{product.title}</p>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center space-x-2">
                        <button className="cursor-pointer bg-red-600 text-white px-2.5 py-0.5 rounded" onClick={handleDecrement}>-</button>
                        <p>{product.quantity}</p>
                        <button className="cursor-pointer bg-emerald-600 text-white px-2.5 py-0.5 rounded" onClick={handleIncrement}>+</button>
                    </div>
                    <p className="font-semibold">${product.price * product.quantity}</p>
                </div>
            </div>
            <button className="text-xl cursor-pointer text-red-500" onClick={() => removeFromCart(product.id)} >x</button>
        </li>
    );
}

export default CartItem;