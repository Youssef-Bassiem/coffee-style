import Home from "./pages/Home.jsx";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
