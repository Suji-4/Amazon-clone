import Navbar from "./Navbar"
import { Link } from "react-router-dom"; 
function Cart()
{
    return(
        <div>
        <Navbar></Navbar>
        <div className="bg-[#EAEDED] min-h-screen"> 
          <div className="bg-white p-20 mx-auto max-w-4xl rounded-lg shadow-md"> 
            <p className="text-black text-3xl text-center">Your Amazon Cart is empty</p>
            <div className="flex justify-center mt-4">
              <button className="bg-yellow-300 px-8 py-2 rounded-full mx-2"> <Link to="/signin">Sign in to your account</Link>  </button>
              <button className="p-2 px-8 border border-black rounded-full text-sm mx-2"><Link to="/signin">Sign up Now</Link></button>
            </div>
          </div>
          <p className="text-sm p-10 py-40">The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
        </div>
      </div>
      
    )
}
export default Cart 