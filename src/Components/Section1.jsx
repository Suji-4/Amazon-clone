import { useState } from "react";
import casio from "../assets/images/casio.jpg"
import wallet from "../assets/images/wallet.jpg"
import watch from "../assets/images/watch - Copy.jpg"
import mantra from "../assets/images/mantra.jpg"

function Section1({ searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState(""); // State for category selection

  const products = [
    {
      id: 1,
      img:  casio,
      brand: "Casio ",
      name: " Stainless Steel Men Vintage Digital Grey",
      category: "Casio Watch",
      rating: "⭐⭐⭐⭐",
      price: 1399,
      Delivery: "FREE delivery ,Mon 20 Jan",
    },
    {
      id: 2,
      img: wallet,
      brand: " WildHorn",
      name: "WildHorn Leather Wallet For Men, Brown",
      category: "Men's Wallet",
      rating: "⭐⭐⭐⭐",
      price: 999,
      Delivery: "FREE delivery ,Mon 20 Jan",
    },
    {
      id: 3,
      img: watch ,
      brand: "Fastrack",
      name: "Fastrack New  X2 Smart Watch",
      category: " Watches",
      rating: "⭐⭐⭐⭐",
      price: 1500,
      Delivery: "FREE delivery ,Mon 20 Jan",
    },
    {
      id: 4,
      img: mantra,
      brand: " Fitness Mantra ",
      name: "Fitness Mantra® Sports Winters Cap",
      category: "Men's Accessories",
      rating: "⭐⭐⭐⭐",
      price: 149,
      Delivery: "FREE delivery ,Mon 20 Jan",
    },
  ];

  // Filter products by search query and selected category
  const filteredProducts = products.filter(
    (product) =>
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === "" || product.category === selectedCategory)
  );

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Category Section */}
      <div className="w-full lg:w-1/4 bg-gray-100 p-4">
        <p className="font-semibold text-lg mb-4">Categories</p>
        <ul>
          <li
            className={`cursor-pointer my-2 ${
              selectedCategory === "" ? "font-bold text-blue-600" : ""
            }`}
            onClick={() => setSelectedCategory("")}
          >
            All Products
          </li>
          <li
            className={`cursor-pointer my-2 ${
              selectedCategory === "Casio Watch" ? "font-bold text-blue-600" : ""
            }`}
            onClick={() => setSelectedCategory("Casio Watch")}
          >
         Casio Watch
          </li>
          <li
            className={`cursor-pointer my-2 ${
              selectedCategory === "Men's Wallet"
                ? "font-bold text-blue-600"
                : ""
            }`}
            onClick={() => setSelectedCategory("Men's Wallet")}
          >
            Men's Wallet
          </li>
          <li
            className={`cursor-pointer my-2 ${
              selectedCategory === "Men's Accessories"
                ? "font-bold text-blue-600"
                : ""
            }`}
            onClick={() => setSelectedCategory("Men's Accessories")}
          >
           Men's Accessories
          </li>
          <li
            className={`cursor-pointer my-2 ${
              selectedCategory === " Watches"
                ? "font-bold text-blue-600"
                : ""
            }`}
            onClick={() => setSelectedCategory(" Watches")}
          >
           Watches
          </li>
        </ul>
      </div>

      {/* Product Section */}
      <div className="w-full lg:w-3/4 p-4">
        {filteredProducts.length > 0 ? (
          <div className="flex flex-wrap gap-28">
            {filteredProducts.map((product) => (
              <div key={product.id} className="text-center">
                <img src={product.img} alt={product.name} className="w-72 h-60" />
                <p className="font-bold text-xl">{product.brand}</p>
                <p>{product.name}</p>
                <p>{product.rating}</p>
                <p className="text-black font-semibold text-3xl">₹{product.price}</p>
                <p className="text-black font-semibold ">{product.Delivery}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
}

export default Section1;
