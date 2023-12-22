import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import UnderConst from "./components/UnderConst";
import FormDt from "./components/FormDt";
import Products from "./components/Products";
import Header from "./components/Header";

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
            <Route path="*" element={<UnderConst />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
