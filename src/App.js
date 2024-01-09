import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import ContactForm from "./components/pages/ContactForm";
import UnderConst from "./components/pages/UnderConst";
import FormDt from "./components/pages/FormDt";
import Products from "./components/pages/Products";
import Header from "./components/base/Header";
import ProductsCard from "./components/pages/ProductsCard";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/signup" element={<ContactForm />} />
            <Route path="/form" element={<FormDt />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cards" element={<ProductsCard />} />
            <Route path="*" element={<UnderConst />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
