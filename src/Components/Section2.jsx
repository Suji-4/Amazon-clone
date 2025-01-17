import { useState } from "react";
import shoe from "../assets/images/shoe.jpg"
import mantra from "../assets/images/mantra.jpg"
import kitty from "../assets/images/kitty.jpg"
import diva from "../assets/images/diva.jpg"

function Section2({ searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState(""); // State for category selection

  const products = [
    {
      id: 1,
      img:  diva,
      brand: "Shining Diva Fashion ",
      name: " Latest Stylish Birthday Sash and Crown",
      category: "Crown",
      rating: "⭐⭐⭐⭐",
      price: 700,
      Delivery: "FREE delivery ,Mon 20 Jan",
    },
    {
      id: 2,
      img: shoe ,
      brand: " Liberty",
      name: "Boys Skolpro-v School Uniform Shoes",
      category: "Shoes",
      rating: "⭐⭐⭐⭐",
      price: 800,
      Delivery: "FREE delivery ,Mon 20 Jan",
    },
    {
      id: 3,
      img: kitty,
      brand: "Sanjis Enterprise",
      name: "Kids cartoon hardshell Sling Bag ",
      category: "Bag",
      rating: "⭐⭐⭐⭐",
      price: 600,
      Delivery: "FREE delivery ,Mon 20 Jan",
    },
    {
      id: 4,
      img: mantra,
      brand: " Fitness Mantra ",
      name: "Fitness Mantra® Sports Winters Cap",
      category: " Accessories",
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
              selectedCategory === "Crown" ? "font-bold text-blue-600" : ""
            }`}
            onClick={() => setSelectedCategory("Crown")}
          >
         Crown
          </li>
          <li
            className={`cursor-pointer my-2 ${
              selectedCategory === "Bag"
                ? "font-bold text-blue-600"
                : ""
            }`}
            onClick={() => setSelectedCategory("Bag")}
          >
            Bag
          </li>
          <li
            className={`cursor-pointer my-2 ${
              selectedCategory === " Accessories"
                ? "font-bold text-blue-600"
                : ""
            }`}
            onClick={() => setSelectedCategory(" Accessories")}
          >
            Accessories
          </li>
          <li
            className={`cursor-pointer my-2 ${
              selectedCategory === "Shoes"
                ? "font-bold text-blue-600"
                : ""
            }`}
            onClick={() => setSelectedCategory("Shoes")}
          >
           Shoes
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

export default Section2;
