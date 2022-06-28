import { Route, Routes } from "react-router-dom";
import Global from "./components/Global/Global";
import Layout from "./Layout";
import About from "./pages/Covid/About";
import Indonesia from "./pages/Covid/Indonesia";
import Provinsi from "./pages/Covid/Provinsi";
import Home from "./pages/Home";

function App() {
  return (
    <div>
    <Layout>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Covid/global" element={<Home />} />
        <Route path="/Global/Global" element={<Global />} />
        <Route path="/Covid/Indonesia" element={<Indonesia />} />
        <Route path="/Covid/Provinsi" element={<Provinsi />} />
        <Route path="/Covid/About" element={<About />} />
      </Routes>
      
    </Layout>
      
      
  
    </div>
  );
}

export default App;
