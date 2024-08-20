import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { GithubProvider } from "./context/github/GithubContext";
function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <div className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<Notfound />} />
              <Route path="/*" element={<Notfound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
