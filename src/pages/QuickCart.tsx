import { FaShoppingCart } from "react-icons/fa";
import Cart from "../components/Cart";
import ProductsList from "../components/ProductsList";

function QuickCart() {
    return (
        <main className="min-h-screen flex flex-col items-center space-y-8 ">
            <header className="p-4 text-white bg-[#03045E] w-full ">
                <div className="flex justify-between items-center max-w-7xl w-full mx-auto ">
                    <h1 className="text-4xl font-bold ">QuickCart</h1>
                    <FaShoppingCart className="text-xl cursor-pointer" />
                </div>
            </header>
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-7 gap-8 w-full ">
                <ProductsList />
                <Cart />
            </div>
        </main>
    );
}

export default QuickCart;