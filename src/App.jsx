import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppContextProvider from "./context/AppContext";
import Home from "./Home";
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
          </Routes>
          {/* Footer */}
          <Footer />
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
