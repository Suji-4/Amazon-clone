import { useState } from "react";
import bag1 from "../assets/images/bag1.jpg";
import pant from "../assets/images/pant - Copy.jpg";
import watch from "../assets/images/watch - Copy.jpg";
import mantra from "../assets/images/mantra.jpg";

function Section({ searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState(""); 

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
      Button:"Add to cart",
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
      Button:"Add to cart",
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
      Button:"Add to cart",
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
      Button:"Add to cart",
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
          <li className={`cursor-pointer my-2 ${  selectedCategory === "" ? "font-bold text-blue-600" : "" }`} onClick={() => setSelectedCategory("")}  > All Products </li>
          <li className={`cursor-pointer my-2 ${ selectedCategory === "Handbags" ? "font-bold text-blue-600" : "" }`} onClick={() => setSelectedCategory("Handbags")} > Handbags </li>
          <li className={`cursor-pointer my-2 ${ selectedCategory === "Women's Clothing" ? "font-bold text-blue-600"  : "" }`}  onClick={() => setSelectedCategory("Women's Clothing")} > Women's Clothing </li>
          <li className={`cursor-pointer my-2 $  selectedCategory === "Women's Watches"  ? "font-bold text-blue-600"  : ""  }`} onClick={() => setSelectedCategory("Women's Watches")}  > Women's Watches</li>
          <li className={`cursor-pointer my-2 ${  selectedCategory === "Women's Accessories"  ? "font-bold text-blue-600"  : "" }`} onClick={() => setSelectedCategory("Women's Accessories")} >  Women's Accessories</li>
        </ul>
      </div>

      {/* Product Section */}
      <div className="w-full lg:w-3/4 p-4">
        {filteredProducts.length > 0 ? (
          <div className="flex flex-wrap gap-20">
            {filteredProducts.map((product) => (
              <div key={product.id} className="text-center">
                <img src={product.img} alt={product.name} className="w-64 h-60" />
                <p className="font-bold text-xl">{product.brand}</p>
                <p>{product.name}</p>
                <p>{product.rating}</p>
                <p className="text-black font-semibold text-3xl">₹{product.price}</p>
                <p className="text-black font-semibold ">{product.Delivery}</p>
                <button className="bg-yellow-300 px-8 py-2 my-2 rounded-full mx-2">{product.Button}</button>
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

export default Section;
