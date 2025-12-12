import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import './index.css';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Header */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
