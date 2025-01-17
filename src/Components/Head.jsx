import {Link} from "react-router-dom"
function Head()
{
    return(
        <div className="bg-[#FFFFFF] border  text-black flex items-center justify-between p-1 px-6 cursor-pointer ">
            <p className="text-2xl font-bold">Amazon Fahion</p>
            <p className="text-sm underline decoration-transparent hover:decoration-orange-500 "><Link to="/women">Women</Link></p>
            <p className="text-sm underline decoration-transparent hover:decoration-orange-500 "><Link to="/men">Men</Link></p>
            <p className="text-sm underline decoration-transparent hover:decoration-orange-500 "><Link to="/kid">Kids</Link></p>
            
          </div>
    )
}
export default Head