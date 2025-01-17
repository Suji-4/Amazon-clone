import viewall from "../assets/images/viewall.jpg"
import cloth from "../assets/images/cloth.jpg"
import backpack from "../assets/images/backpack.jpg"
import footwear from "../assets/images/footwear.jpg"
import top3 from "../assets/images/top3.jpg"
import top4 from "../assets/images/top4.jpg"
import top5 from "../assets/images/top5.jpg"
import top6 from "../assets/images/top6.jpg"
import dress1 from "../assets/images/dress1.jpg"
function Fashion()
{
    return(
        <div>
            {/*card*/}
<div className="bg-gray-200 ">
     <div className="container px-4 py-6 flex justify-between gap-1 cursor-pointer ">
      <div className="card px-6 py-4 border border-white w-80 bg-white ">
       <p className="text-2xl font-bold ">Under ₹449| pocket-</p>
       <p className="text-2xl font-bold">Friendly fashion</p>

       <div className="flex gap-4 py-4">
       <div className="img">
       <img src={cloth} alt="cloth" className="w-32 h-24"></img>
       <p className="text-sm">Clothing </p>
       </div>
       <div className="img1 ">
       <img src={backpack} alt="backpack" className="w-32 h-24"></img>
       <p className="text-sm">Backpack</p>
       </div>
       </div>

      <div className="flex gap-4">
       <div className="img2 ">
         <img src={footwear} alt="footwear" className="w-32 h-24"></img>
         <p className="text-sm">Footwear</p>
       </div>
       <div className="img3">
       <img src={viewall} alt="viewall" className="w-32 h-24"></img>
       <p className="text-sm">View all</p>
       </div>
      </div>
      <p className="py-6 text-cyan-500 hover:text-red-500">See all offers</p>
      </div>
   

      {/*card2*/}
      <div className="card px-6 py-4 border border-white w-80 bg-white ">
       <p className="text-2xl font-bold ">Customers' Most-Loved</p>
       <p className="text-2xl font-bold">Fashion for you</p>

       <div className="flex gap-12 py-4">
       <div className="img">
       <img src={top3} alt="top3" className="w-24 h-32"></img>
      
       </div>
       <div className="img1 ">
       <img src={top4} alt="top4" className="w-24 h-32"></img>
      
       </div>
       </div>

      <div className="flex gap-12">
       <div className="img2 ">
         <img src={top5} alt="top5" className="w-24 h-24"></img>
       
       </div>
       <div className="img3">
       <img src={top6} alt="top6" className="w-24 h-32"></img>
      
       </div>
      </div>
      <p className="py-6 text-cyan-500 hover:text-red-500">Explore more</p>
      </div>
     

      {/*card3*/}
      <div className="card px-6 py-4 border border-white w-80 bg-white ">
       <p className="text-2xl font-bold ">Up to 75% off|party</p>
       <p className="text-2xl font-bold">dresses for small...</p>

       <div className="flex gap-12 py-4">
       <div className="img">
       <img src={dress1} alt="dress1" className="w-80 h-80"></img>
      </div>
       </div>
       <p className="py-6 text-cyan-500 hover:text-red-500">see more</p>
       </div>
</div>


      </div>
      </div>


        
    )
}
export default Fashion 