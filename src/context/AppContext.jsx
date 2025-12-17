import React, { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../components/data";

const AppContext = createContext(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isSeller, setIsSeller] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [user, setUser] = useState(true)

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
  //
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      let itemInfo = products.find((product) => product._id === itemId);
      if (cartItems[itemId] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[itemId];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  // Contar articulos del cart
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
    // getProducts();
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
        getCartAmount,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
