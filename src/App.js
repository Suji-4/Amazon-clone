import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import Card from "./Components/Card";
import Bestseller from "./Components/Bestseller";
import Fashion from "./Components/Fashion";
import Laptop from "./Components/Laptop";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import Signin from "./Components/Signin"
import Women from "./Components/Women"
import Men from "./Components/Men"
import Kid from "./Components/Kid"
import Account from "./Components/Account"
import Cart from "./Components/Cart"

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page Layout */}
        <Route path="/" element={
            <div>
              <Navbar  />
              <Header />
              <Carousel />
              <div id="Card" className="section scroll-mt-60"> <Card /> </div>
              <div id="Bestseller" className="section scroll-mt-60">  <Bestseller />  </div>
              <div id="Laptop" className="section scroll-mt-60">  <Laptop /> </div>
              <div id="Fashion" className="section scroll-mt-20">  <Fashion /></div>
              <Footer />
            </div>
          }   />

        {/* Products Page */}
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kid" element={<Kid/>} />
      
        {/*sign page*/}
        <Route path="/account" element={<Account/>} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
