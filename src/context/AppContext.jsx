import React, { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../components/data";

const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isSeller, setIsSeller] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // vALOR D ELA MONEDA
  const currency = import.meta.env.VITE_CURRENCY || "$";

  // AddToCart al Cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    //console.log(cartData);
  };
  // total cantidad del cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalCount += cartItems[itemId];
      }
    }
    return totalCount;
  };
  // update cantidad del cart
  const updateCartQuantity = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    if (quantity === 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }
    setCartItems(cartData);
  };

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        isSeller,
        currency,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount,
        updateCartQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
