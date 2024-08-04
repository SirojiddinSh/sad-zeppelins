import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Portfolio from "./routes/portfolio/Portfolio";
import Cv from "./routes/cv/Cv";
import Single from "./routes/single/SinglePage";

function App() {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/single/:id" element={<Single />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
