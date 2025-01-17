import men from "../assets/images/men.png"
import women from "../assets/images/women.png"
import kid from "../assets/images/kid.png"
import foot from "../assets/images/foot.png"
import bag from "../assets/images/bag.png"
import jewel from "../assets/images/jewel.png"
import watches from "../assets/images/watches.png"
import beauty from "../assets/images/beauty.png"
import handbag from "../assets/images/handbag.png"
import Brand from "./Brand"
import { Link } from "react-router-dom"
function Prohead()
{
    return(
        <div>
            <div className="w-full flex flex-row justify-start space-x-4 py-6 mx-14 cursor-pointer">
            <div className="flex flex-col items-center ">
             <img src={men} alt="men"></img>
           <p><Link to="/men">Men's Clothing</Link></p>
            </div>
            <div className="flex flex-col items-center">
              <img src={women} alt="women"></img>
            <p><Link to="/women">Women Clothing</Link></p>
            </div>
            <div className="flex flex-col items-center">
            <img src={kid} alt="kid"></img>
            <p><Link to="/kid">Kid's Fashion</Link></p>
            </div>
            <div className="flex flex-col items-center">
          <a href="#Brand">  <img src={foot} alt="foot"></img>
            <p>Footwear</p></a>
            </div>
            <div className="flex flex-col items-center">
            <a href="#Bag"> <img src={bag} alt="bag"></img>
          <p>Luggage & Bags</p></a>
            </div>
            <div className="flex flex-col items-center">
            <img src={jewel} alt="jewel"></img>
            <p>Jewellery</p>
            </div>
            <div className="flex flex-col items-center">
            <img src={watches} alt="watches"></img>
            <p>Watches</p>
            </div>
            <div className="flex flex-col items-center">
            <img src={beauty} alt="beauty"></img>
            <p>Beauty</p>
            </div>
            <div className="flex flex-col items-center">
            <img src={handbag} alt="handbag"></img>
            <p>Handbags</p>
            </div>
            </div>
        <Brand></Brand>
             </div>
    )
    
    
}
export default Prohead
