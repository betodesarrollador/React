import React, { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../components/data";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isSeller, setIsSeller] = useState(false);

  
  const currency = "$";

  const getProducts = () => setProducts(dummyProducts);

  useEffect(() => {
    getProducts();
  }, []);

  const value = { products, isSeller, currency };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;



