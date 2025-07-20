import { cartSelector, useCartStore } from "../store/cart-store";
import CartItem from "./CartItem";

function Cart() {
    const cart = useCartStore(cartSelector);
    return (
        <section className="flex flex-col justify-center bg-white rounded-lg self-start col-span-1 md:col-span-2 p-4 space-y-4 order-1 md:order-2">
            <h2 className="text-2xl font-semibold">Your Cart</h2>
            <ul className="flex flex-col justify-center space-y-2">
                {
                    cart.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))
                }
            </ul>
            <div className="flex justify-between items-center text-lg font-semibold">
                <p>Total:</p>
                <p>${cart.reduce((sum, currentItem) => sum + (currentItem.price * currentItem.quantity), 0).toFixed(2)}</p>
            </div>
        </section>
    );
}

export default Cart;