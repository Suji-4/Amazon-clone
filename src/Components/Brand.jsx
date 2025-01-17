import brand from "../assets/images/brand.png"
import brand1 from "../assets/images/brand1.png"
import brand2 from "../assets/images/brand2.png"
import brand3 from "../assets/images/brand3.png"
import brand4 from "../assets/images/brand4.png"
import brand5 from "../assets/images/brand5.png"
import brand6 from "../assets/images/brand6.png"
import brand7 from "../assets/images/brand7.png"
import brand8 from "../assets/images/brand8.png"
import brand9 from "../assets/images/brand9.png"
import shop from "../assets/images/shop.png"
import shop1 from "../assets/images/shop1.png"
import shop3 from "../assets/images/shop3.png"
import shop4 from "../assets/images/shop4.png"
import shop5 from "../assets/images/shop5.png"
import shop6 from "../assets/images/shop6.png"
import foot1 from "../assets/images/foot1.png"
import foot2 from "../assets/images/foot2.png"
import foot3 from "../assets/images/foot3.png"
import foot4 from "../assets/images/foot4.png"
import foot5 from "../assets/images/foot5.png"
import foot6 from "../assets/images/foot6.png"
import budget from "../assets/images/budget.jpg"
import Footer from "../Components/Footer"
function Brand() {
    return (
      <div>
        <p className="text-2xl font-bold mx-16">Brands of The Week</p>
        <div className="flex my-4 mx-16 gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap">
          <img src={brand} alt="brand" className="h-56 w-36 flex-shrink-0" />
          <img src={brand1} alt="brand1" className="h-56 w-36 flex-shrink-0" />
          <img src={brand2} alt="brand2" className="h-56 w-36 flex-shrink-0" />
          <img src={brand3} alt="brand3" className="h-56 w-36 flex-shrink-0" />
          <img src={brand4} alt="brand4" className="h-56 w-36 flex-shrink-0" />
          <img src={brand5} alt="brand5" className="h-56 w-36 flex-shrink-0" />
          <img src={brand6} alt="brand6" className="h-56 w-36 flex-shrink-0" />
          <img src={brand7} alt="brand7" className="h-56 w-36 flex-shrink-0" />
          <img src={brand8} alt="brand8" className="h-56 w-36 flex-shrink-0" />
          <img src={brand9} alt="brand9" className="h-56 w-36 flex-shrink-0" />
        </div>
         <p className="text-2xl font-bold mx-16 my-4">Shop Clothing</p>
        <div className="flex mx-16 gap-4" >
          <img src={shop} alt="shop" className="w-44 h-90"></img>
          <img src={shop1} alt="shop1" className="w-44 h-90"></img>
          <img src={shop3} alt="shop3" className="w-44 h-90"></img>
          <img src={shop4} alt="shop4" className="w-44 h-90"></img>
          <img src={shop5} alt="shop5" className="w-44 h-90"></img>
          <img src={shop6} alt="shop6" className="w-44 h-90"></img>
           </div>

           <div className=" my-10 section scroll-mt-28" id="Brand" >  
           <p className="text-2xl font-bold mx-16 my-4">Shop Footwear</p>
           <div className="flex mx-16 gap-4 bg-[#EFDCCD] py-10 px-12">
            <img src={foot1} alt="foot1" className="w-40"></img>
            <img src={foot2} alt="foot2"  className="w-40"></img>
            <img src={foot3} alt="foot3"  className="w-40"></img>
            <img src={foot4} alt="foot4"  className="w-40"></img>
            <img src={foot5} alt="foot5"  className="w-40"></img>
            <img src={foot6} alt="foot6"  className="w-40"></img>
           </div>
           </div>
           <div>
           <p className="text-2xl font-bold mx-16 my-4 section scroll-mt-16" id="Bag">Budget Add-Ons</p>
            <img src={budget} alt="budget"></img>
           </div>
           <Footer></Footer>
      </div>
    );
  }
  
  export default Brand;
  