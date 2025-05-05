// Cart.js
import { useCart } from "./CartContext";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleIncreaseQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    updateQuantity(productId, product.quantity + 1);
  };

  const handleDecreaseQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (product.quantity > 1) {
      updateQuantity(productId, product.quantity - 1);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#EAEDED] min-h-screen">
        <div className="bg-white p-20 mx-auto max-w-4xl rounded-lg shadow-md">
          {cart.length === 0 ? (
            <p className="text-black text-3xl text-center">Your Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <img src={item.img} alt={item.name} className="w-16 h-16" />
                <div className="flex flex-col">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                  <span>{item.quantity} item(s)</span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="px-4 py-2 bg-gray-300 rounded-full"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="px-4 py-2 bg-gray-300 rounded-full ml-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
          <Link to="/checkout">
            <button className="bg-yellow-300 px-6 py-2 rounded-full">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
