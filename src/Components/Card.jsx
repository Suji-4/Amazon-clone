import boat from "../assets/images/boat.jpg"
import boult from "../assets/images/boult.jpg"
import noise from "../assets/images/noise.jpg"
import zebronic from "../assets/images/zebronic.jpg"
import fashion from "../assets/images/fashion.jpg"
import glass from "../assets/images/glass.jpg"
import clock from "../assets/images/clock.jpg"
import dress from "../assets/images/dress.jpg"
import cushion from "../assets/images/cushion.jpg"
import vase from "../assets/images/vase.jpg"
import storage from "../assets/images/storage.jpg"
import light from "../assets/images/light.jpg"
import iphone from "../assets/images/iphone.jpg"
import air from "../assets/images/air.jpg"
import washing from "../assets/images/washing.jpg"
import fridge from "../assets/images/fridge.jpg"
import micro from "../assets/images/micro.jpg"
import clean from "../assets/images/clean.jpg"
import vaccum from "../assets/images/vacuum.jpg"
import helmet from "../assets/images/helmet.jpg"
import tyre from "../assets/images/tyre.jpg"
import home from "../assets/images/home.jpg"
import bed from "../assets/images/home.jpg"
import iron from "../assets/images/iron.jpg"
import curtain from "../assets/images/curtain.jpg"
import women from "../assets/images/women.jpg"
import foot from "../assets/images/foot.jpg"
import watch from "../assets/images/watch.jpg"
import jewel from "../assets/images/jewel.jpg"
import { Link } from "react-router-dom"; 
function Card()
{
    return(
        <div>
        {/*card*/}
<div className="bg-gray-200 ">
     <div className="container px-4 relative bottom-48 flex justify-between gap-1 cursor-pointer ">
      <div className="card px-6 py-4 border border-white w-80 bg-white ">
       <p className="text-2xl font-bold ">Starting ₹149|</p>
       <p className="text-2xl font-bold">HeadPhones</p>

       <div className="flex gap-4 py-4">
       <div className="img">
       <img src={boat} alt="boat" className="w-32 h-24"></img>
       <p className="text-sm">Starting ₹249| boat </p>
       </div>
       <div className="img1 ">
       <img src={boult} alt="boult" className="w-32 h-24"></img>
       <p className="text-sm">Starting ₹349| boult </p>
       </div>
       </div>

      <div className="flex gap-4">
       <div className="img2 ">
         <img src={noise} alt="noise" className="w-32 h-24"></img>
         <p className="text-sm">Starting ₹649| Noise</p>
       </div>
       <div className="img3">
       <img src={zebronic} alt="zebronic" className="w-32 h-24"></img>
       <p className="text-sm">Starting ₹149|   zebronics</p>
       </div>
      </div>
      <p className="py-6 text-cyan-500 hover:text-red-500">See all offers</p>
      </div>
     

    {/*card2*/}
      <div className="card px-6 py-4 border border-white w-80 bg-white ">
       <p className="text-2xl font-bold ">Explore more from </p>
       <p className="text-2xl font-bold">Businesses</p>

       <div className="flex gap-4 py-4">
       <div className="img4">
       <img src={fashion} alt="fashion" className="w-32 h-24"></img>
       <p className="text-sm">Fashion accessories </p>
       </div>
       <div className="img5 ">
       <img src={glass} alt="glass" className="w-32 h-24"></img>
       <p className="text-sm">Glassware &drinkware </p>
       </div>
       </div>

      <div className="flex gap-4">
       <div className="img6 ">
         <img src={dress} alt="dress" className="w-32 h-24"></img>
         <p className="text-sm">Ethic,dresses & more</p>
       </div>
       <div className="img7">
       <img src={clock} alt="clock" className="w-32 h-24"></img>
       <p className="text-sm">Decor</p>
       </div>
      </div>
      <p className="py-6 text-cyan-500 hover:text-red-500">Explore all</p>
      </div>

      {/*card 3*/}
      <div className="card px-6 py-4 border border-white w-80 bg-white ">
       <p className="text-2xl font-bold ">Revamp yourhome in </p>
       <p className="text-2xl font-bold">Style</p>

       <div className="flex gap-4 py-4">
       <div className="img4">
       <img src={cushion} alt="cushion" className="w-32 h-24"></img>
       <p className="text-sm">Cushion covers,bedsheets & more </p>
       </div>
       <div className="img5 ">
       <img src={light} alt="light" className="w-32 h-24"></img>
       <p className="text-sm">Lighting solutions </p>
       </div>
       </div>

      <div className="flex gap-4">
       <div className="img6 ">
         <img src={storage} alt="storage" className="w-32 h-24"></img>
         <p className="text-sm">Home storage</p>
       </div>
       <div className="img7">
       <img src={vase} alt="vase" className="w-32 h-24"></img>
       <p className="text-sm">Figurines,vases</p>
       </div>
      </div>
      <p className="py-6 text-cyan-500 hover:text-red-500">Explore all</p>
      </div>

      {/*card4*/}
      <div className="card px-6 py-4 border border-white w-72 h-36 bg-white ">
       <p className="text-2xl font-bold ">Sign in for your best </p>
       <p className="text-2xl font-bold">experience</p>
       <button className="bg-yellow-300 px-14 rounded-full my-4"><Link to="/signin"> Sign in securely</Link></button>
       <div className="card  border border-white w-72  bg-white -mx-6 my-12  ">
        <img src={iphone} alt="iphone"className="w-56" ></img>
        <p className="text-sm">Daily Objects Polycarbonate case for iphone...</p>
        <p className="font-semibold">₹989 <span className="text-sm text-gray-400 line-through">M.R.P:₹1,399.00</span></p>
        <p className="text-sm font-semibold">Save ₹10 with coupon </p>
       </div>
       </div>
       </div>

       {/*card5*/}
       <div className="container px-4 relative bottom-48 flex justify-between gap-1 cursor-pointer my-7 ">
       <div className="card px-6 py-4 border border-white w-80 bg-white ">
       <p className="text-2xl font-bold ">Application for your  </p>
       <p className="text-2xl font-bold">home| Up to 55% off</p>

       <div className="flex gap-4 py-4">
       <div className="img8">
       <img src={air} alt="air" className="w-32 h-24"></img>
       <p className="text-sm">Air conditioners </p>
       </div>
       <div className="img9 ">
       <img src={fridge} alt="fridge" className="w-32 h-24"></img>
       <p className="text-sm">Refrigerators </p>
       </div>
       </div>

      <div className="flex gap-4">
       <div className="img0 ">
         <img src={micro} alt="micro" className="w-32 h-24"></img>
         <p className="text-sm">Microwaves</p>
       </div>
       <div className="img11">
       <img src={washing} alt="washing" className="w-32 h-24"></img>
       <p className="text-sm">Washing machines</p>
       </div>
      </div>
      <p className="py-6 text-cyan-500 hover:text-red-500">See more</p>
      </div>

      {/*card6*/}
      <div className="card px-6 py-4 border border-white w-80 bg-white ">
       <p className="text-2xl font-bold ">Automative essentials|  </p>
       <p className="text-2xl font-bold"> Up to 60% off</p>

       <div className="flex gap-4 py-4">
       <div className="img12">
       <img src={clean} alt="clean" className="w-32 h-24"></img>
       <p className="text-sm">Cleaning accessories </p>
       </div>
       <div className="img13 ">
       <img src={tyre} alt="tyre" className="w-32 h-24"></img>
       <p className="text-sm">Tyre & rim care</p>
       </div>
       </div>

      <div className="flex gap-4">
       <div className="img14 ">
         <img src={helmet} alt="helmet" className="w-32 h-24"></img>
         <p className="text-sm">Helmets</p>
       </div>
       <div className="img15">
       <img src={vaccum} alt="vaccum" className="w-32 h-24"></img>
       <p className="text-sm">Vaccum Cleaner</p>
       </div>
      </div>
      <p className="py-6 text-cyan-500 hover:text-red-500">See more</p>
      </div>

      {/*card7*/}
      <div className="card px-6 py-4 border border-white w-80 bg-white ">
       <p className="text-2xl font-bold ">Starting ₹199|Amazon   </p>
       <p className="text-2xl font-bold"> Brands & more</p>

       <div className="flex gap-4 py-4">
       <div className="img16">
       <img src={bed} alt="bed" className="w-32 h-24"></img>
       <p className="text-sm">Starting  ₹199| Bedsheets  </p>
       </div>
       <div className="img17 ">
       <img src={curtain} alt="curtain" className="w-32 h-24"></img>
       <p className="text-sm">Starting  ₹199| curtains</p>
       </div>
       </div>

      <div className="flex gap-4">
       <div className="img18 ">
         <img src={iron} alt="iron" className="w-32 h-24"></img>
         <p className="text-sm">Ironing board</p>
       </div>
       <div className="img19">
       <img src={home} alt="home" className="w-32 h-24"></img>
       <p className="text-sm">Home Decor</p>
       </div>
      </div>
      <p className="py-6 text-cyan-500 hover:text-red-500">See more</p>
      </div>
    
    {/*card8*/}
    <div className="card px-6 py-4 border border-white w-80 bg-white ">
       <p className="text-2xl font-bold ">Up to 60% off |styles   </p>
       <p className="text-2xl font-bold"> for women</p>

       <div className="flex gap-4 py-4">
       <div className="img20">
       <img src={women} alt="women" className="w-32 h-24"></img>
       <p className="text-sm">women's clothing </p>
       </div>
       <div className="img21 ">
       <img src={foot} alt="foot" className="w-32 h-24"></img>
       <p className="text-sm">Footwear & Handbag</p>
       </div>
       </div>

      <div className="flex gap-4">
       <div className="img22 ">
         <img src={watch} alt="watch" className="w-32 h-24"></img>
         <p className="text-sm">Watches</p>
       </div>
       <div className="img23">
       <img src={jewel} alt="jewel" className="w-32 h-24"></img>
       <p className="text-sm">Fashion jewellery</p>
       </div>
      </div>
      <p className="py-6 text-cyan-500 hover:text-red-500">End of season sale</p>
      </div>
      </div>   
</div>
</div>
    )
}
export default Card