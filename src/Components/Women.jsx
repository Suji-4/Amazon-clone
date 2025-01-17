import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Head from "./Head";
import Section from "./Section";
import Footer from "./Footer";

function Women() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery */}
      <Header />
      <Head />
      <Section searchQuery={searchQuery} /> {/* Pass searchQuery */}
      <Footer />
    </div>
  );
}

export default Women;
