import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./pages/Home.jsx";
import OurProducts from "./pages/OurProducts.jsx";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Styleguide from "./pages/Styleguide.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="OurProducts" element={<OurProducts />}></Route>
          <Route path="Blog" element={<Blog />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Styleguide" element={<Styleguide />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
