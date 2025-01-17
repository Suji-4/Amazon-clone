import {Link} from "react-router-dom"
function Header()
{
    return(
        <div>
        {/*Header*/}
    <div className="bg-[#232F3E] text-white font-semibold flex justify-between p-1  cursor-pointer">
    <p className="border border-gray-900 p-1 hover:border-white"><a href="#Bestseller"> Best Sellers</a></p>
    <p className="border border-gray-900 p-1 hover:border-white"><a href="#Card">Today Deals</a></p>
    <p className="border border-gray-900 p-1 hover:border-white"><a href="#Laptop">New Releases</a></p>
    <p className="border border-gray-900 p-1 hover:border-white"><a href="#Fashion">Fashion</a></p>
    <p className="border border-gray-900 p-1 hover:border-white"><Link to="/products"> Products</Link></p>
  </div>
  </div>
    )
}
export default Header