import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppContextProvider from "./context/AppContext";
import Home from "./Home";
import Collection from "./collection/page";
import ProductDetail from "./product_id/page";
import Cart from "./cart/page";
import "./index.css";

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          {/* Header */}
          <Header />
          {/* Routes */}
          <Routes>
            {/* Ruta Home */}
            <Route path="/" element={<Home />} />
             {/* Ruta Collection */}
            <Route path="/Collection" element={<Collection />} />
             {/* Ruta Product/id */}
            <Route path="/Product/:id" element={<ProductDetail />} />
             {/* Ruta Cart */}
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
          {/* Footer */}
          <Footer />
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
