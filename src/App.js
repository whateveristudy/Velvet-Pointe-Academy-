
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import "./styles/App.css";

const App = () => {

  return (
    <Router>

      <div className="app-wrapper">

        <Navbar />

        <main className="main-content">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/classes" element={<Classes />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/apply" element={<Apply />} />

            <Route path="/apply/:className" element={<Apply />} />

            <Route
              path="*"
              element={
                <div className="not-found">
                  <h1>404</h1>
                  <p>Sorry, this page could not be found.</p>
                </div>
              }
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </Router>
  );

};

export default App;