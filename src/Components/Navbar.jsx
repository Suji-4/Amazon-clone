import { Link } from "react-router-dom";
import amazon from "../assets/images/amazon.jpeg";
import icon from "../assets/images/icon.png";
import search from "../assets/images/search.png";
import cart from "../assets/images/cart.png";

function Navbar({ setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update searchQuery
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#131921] py-1">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 space-x-4">
          {/* Amazon Logo */}
          <div className="border border-gray-900 p-1 hover:border-white">
            <Link to="/">
              <img src={amazon} alt="amazon" className="w-32" />
            </Link>
          </div>

          {/* Location and Update Section */}
          <ol className="border border-gray-900 p-1 hover:border-white">
            <li className="text-gray-100 text-sm">Delivering to Chennai 6000056</li>
            <li className="flex items-center space-x-2 mt-2">
              <img src={icon} alt="icon" className="md:w-4 w-6" />
              <span className="font-bold text-white">Update location</span>
            </li>
          </ol>

          {/* Search Bar */}
          <div className="flex flex-grow items-center border-none">
            <input
              placeholder="Search Amazon"
              id="search"
              className="px-8 py-2 flex-grow border-none rounded-l-sm focus:outline-none"
              onChange={handleSearchChange} // Call handleSearchChange
            />
            <button className="bg-orange-300 hover:bg-orange-400 py-2.5 px-4 rounded-r-sm">
              <img src={search} alt="search" className="w-5" />
            </button>
          </div>

          {/* Sign In and Links */}
          <div className="text-white flex items-center space-x-4">
            <h1 className="text-white text-sm cursor-pointer border border-gray-900 p-1 hover:border-white">
              <Link to="/signin">Hello, Sign In</Link>
            </h1>
            <div className="text-white cursor-pointer border border-gray-900 p-1 hover:border-white">
              <p className="text-sm">Returns &</p>
              <p className="font-bold">Orders</p>
            </div>
          </div>

          {/* Cart Section */}
          <div className="flex items-center space-x-2 cursor-pointer border border-gray-900 p-1 hover:border-white">
            <img src={cart} alt="cart" className="w-8" />
            <span className="text-white font-bold"><Link to="/cart">Cart</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
