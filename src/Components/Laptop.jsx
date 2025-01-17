import laptop from "../assets/images/laptop.jpg"
function Laptop() {
  return (
      <div className="relative flex bottom-28 left-36">
          <img src={laptop} alt="laptop" className="w-60 px-6" />
          <ol className="py-10" >
            <li className="font-semibold text-xl">Dell 14 Thin & Light Laptop, Intel Core i5-1235U</li>
            <li className="font-semibold text-xl">Processor, 8GB + 512GB SSD, 14.0" (35.62cm) FHD</li>
            <li>4 ⭐⭐⭐⭐ 107</li>
            <li><span  className="text-red-600 font-bold">-21% </span> ₹47,990 <span  className="line-through text-gray-500">M.R.P:₹61,098.00</span></li>
          </ol>
      </div>
      
  );
}

export default Laptop;