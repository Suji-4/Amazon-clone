
import pant from "../assets/images/pant.jpg"
import socks from "../assets/images/socks.jpg"
import jacket from "../assets/images/jacket.jpg"
import cap from "../assets/images/cap.jpg"
import dresses from "../assets/images/dresses.jpg"
import sock from "../assets/images/sock.jpg"
import jacket1 from "../assets/images/jacket1.jpg"


function Bestseller()
{
    return(
        <div>
            
            <div className="container border border-white bottom-48 relative bg-white p-6 mx-4  ">
                <p className="text-black font-bold text-2xl">Best Sellers in Clothing & Accessories</p>
                <div className="flex  gap-8" >
            <img src={pant} alt="pant" className="w-52 h-52" ></img>
            <img src={socks} alt="socks" className="w-52 h-52" ></img>
            <img src={dresses} alt="dresses"className="w-52 h-52" ></img>
            <img src={jacket} alt="jacket"className="w-52 h-52" ></img>
            <img src={cap} alt="cap"className="w-52 h-52" ></img>
            <img src={sock} alt="sock"className="w-52 h-52" ></img>
            <img src={jacket1} alt="jacket1"className="w-52 h-52" ></img>
            
            </div>
            </div>
        </div>
    )
    

    
}
export default Bestseller