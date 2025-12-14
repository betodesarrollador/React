import React, { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../components/data";

const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isSeller, setIsSeller] = useState(false);

  // En React (Vite)
  const currency = import.meta.env.VITE_CURRENCY || "$";

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        isSeller,
        currency,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
