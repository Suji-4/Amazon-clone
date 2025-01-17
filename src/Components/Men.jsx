import { useState } from "react";
import Navbar from "./Navbar"
import Header from "./Header"
import Head from "./Head"
import Section1 from "./Section1"
import Footer from "./Footer"
function Men()
{
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    return(
        <div>
          <Navbar setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery */}
      <Header />
      <Head />
      <Section1 searchQuery={searchQuery} /> {/* Pass searchQuery */}
      <Footer />
        </div>
    )
}
export default Men