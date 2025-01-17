import { useState } from "react";
import Navbar from "./Navbar"
import Header from "./Header"
import Head from "./Head"
import Section2 from "./Section2"
import Footer from "./Footer"
function Kid
()
{
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    return(
        <div>
          <Navbar setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery */}
      <Header />
      <Head />
      <Section2 searchQuery={searchQuery} /> {/* Pass searchQuery */}
      <Footer />
        </div>
    )
}
export default Kid