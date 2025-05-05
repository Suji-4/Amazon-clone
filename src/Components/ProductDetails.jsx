
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext"; // Import CartContext
import bag1 from "../assets/images/bag1.jpg";
import pant from "../assets/images/pant - Copy.jpg";
import watch from "../assets/images/watch - Copy.jpg";
import mantra from "../assets/images/mantra.jpg";
import Navbar from "./Navbar";
import Header from "./Header";
import Head from "./Head";
import Footer from "./Footer";

function ProductDetails() {
  const { id } = useParams();
  const productId = parseInt(id);
  const { addToCart } = useCart(); // Use the CartContext

  const products = [
    {
      id: 1,
      img: bag1,
      brand: "ZOUK",
      name: "Printed Women's Hand Crafted Leather Flap Sling Bag",
      category: "Handbags",
      rating: "⭐⭐⭐⭐",
      price: 1000,
      Delivery: "FREE delivery ,Mon 20 Jan",
      Button: "Add to cart",
      details: {
        "Closure Type": "Flap",
        "Outer Material": "Jute",
        "Style": "Contemporary",
        "Occasion Type": "Casual",
        "Number of Pockets": "2",
        "Lining": "Polyester",
        "Country of Origin": "India",
      },
    },
    {
      id: 2,
      img: pant,
      brand: "Boldfit",
      name: "Boldfit Gym Pants for Women Leggings Gym Wear",
      category: "Women's Clothing",
      rating: "⭐⭐⭐⭐",
      price: 999,
      Delivery: "FREE delivery ,Mon 20 Jan",
      Button: "Add to cart",
      details: {
        "Material type": "Cotton",
        "Length": "Mid Thigh Length",
        "Style": "Classic",
        "Closure type": "Pull On",
        "Occasion type": "Daily wear",
        "Care instructions": "Machine Wash",
        "Country of Origin": "India",
      },
    },
    {
      id: 3,
      img: watch,
      brand: "Fastrack",
      name: "Fastrack New X2 Smart Watch UltraVU with Rotating Crown",
      category: "Women's Watches",
      rating: "⭐⭐⭐⭐",
      price: 1500,
      Delivery: "FREE delivery ,Mon 20 Jan",
      Button: "Add to cart",
      details: {
        "Operating System": "android",
        "Special Feature": "Multisport Tracker, Activity Tracker, Phone Call, Stress Tracking, Heart Rate Monitor",
        "Battery Capacity": "300 Milliamp Hours",
        "Occasion Type": "Casual",
        "Connectivity Technology": "Bluetooth",
        "Wireless Communication Standard": "Bluetooth",
        "Country of Origin": "India",
      },
    },
    {
      id: 4,
      img: mantra,
      brand: "Fitness Mantra",
      name: "Sports Winters Cap & Muffler for Men & Women",
      category: "Women's Accessories",
      rating: "⭐⭐⭐⭐",
      price: 149,
      Delivery: "FREE delivery ,Mon 20 Jan",
      Button: "Add to cart",
      details: {
        "Department": "unisex-adult",
        "Manufacturer": "Urban International",
        "Style": "Contemporary",
        "Occasion Type": "Casual",
        "Item model number": "FM-BEANIECAPA-MIX-1S",
        "ASIN": "B0CQ7VNMJY",
        "Country of Origin": "India",
      },
    },
  ];

  // Find the selected product based on the id from the URL
  const product = products.find((p) => p.id === productId);

  // If product not found, show a message
  if (!product) {
    return <p className="text-center text-gray-500">Product not found</p>;
  }

  // Handle the "Add to Cart" button click
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Head />

      <div className="flex flex-col lg:flex-row items-start gap-10 border p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
        {/* Image Section (Left) */}
        <div className="w-64 flex-shrink-0">
          <img src={product.img} alt={product.name} className="w-full h-auto" />
        </div>

        {/* Product Details (Right) */}
        <div className="flex flex-col text-left flex-grow">
          <h2 className="text-2xl font-bold">{product.brand}</h2>
          <p className="text-lg">{product.name}</p>
          <p className="text-yellow-500">{product.rating}</p>
          <p className="text-black font-semibold text-3xl">₹{product.price}</p>
          <p className="text-black font-semibold">{product.Delivery}</p>

          {/* Add to Cart Button */}
          <div className="flex justify-start mt-3">
            <button
              className="bg-yellow-300 px-6 py-2 rounded-full text-center min-w-[150px] max-w-[200px]"
              onClick={handleAddToCart}
            >
              {product.Button}
            </button>
          </div>

          {/* Product Additional Details */}
          <div className="mt-4 p-4 border rounded-lg bg-gray-100">
            <h3 className="font-bold text-lg mb-2">Product Details:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {Object.entries(product.details).map(([key, value]) => (
                <li key={key}>
                  <span className="font-semibold">{key}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;
