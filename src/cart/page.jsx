import React from "react";
import { useAppContext } from "../context/AppContext";
import CartTotal from "../components/CartTotal"; 
import { useNavigate } from "react-router-dom";
import trash from "../assets/trash.svg";
import back from "../assets/back.svg";

function Cart() {
  const {
    navigation,
    currency,
    products,
    cartItems,
    getCartCount,
    updateCartQuantity,
  } = useAppContext();

  const navigate = useNavigate();

  return (
    <div className="max-padd-container py-28">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 max-w-4xl">
          <h1 className="text-3xl font-medium mb-6">
            Carro de la compra
            <span className="text-sm text-indigo-500">
              {getCartCount()} Items
            </span>
          </h1>

          <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium my-3 p-1 bg-white rounded">
            <p className="text-left">Detalles del producto</p>
            <p className="text-center">Subtotal</p>
            <p className="text-center">Acción</p>
          </div>

          {Object.keys(cartItems).map((itemId) => {
            const product = products.find((product) => product._id === itemId);
            if (!product || cartItems[itemId] <= 0) return null;
            return (
              <div
                key={itemId}
                className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3 bg-white rounded"
              >
                <div className="flex items-center md:gap-6 gap-3">
                  <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                    <img
                      className="w-full"
                      height={33}
                      width={33}
                      src={product.images[0]}
                      alt={product.name}
                    />
                  </div>

                  <div>
                    <p className="hidden md:block font-semibold">
                      {product.name}
                    </p>

                    <div className="font-normal text-gray-500/70">
                      {/* <p>
                      Size: <span>{product.size || "N/A"}</span>
                    </p> */}

                      <div className="flex items-center">
                        <p>Qty:</p>
                        <select
                          value={cartItems[itemId]}
                          onChange={(e) => {
                            updateCartQuantity(
                              product._id,
                              Number(e.target.value)
                            );
                          }}
                          className="outline-none"
                        >
                          {Array(10)
                            .fill("")
                            .map((_, index) => (
                              <option key={index} value={index + 1}>
                                {index + 1}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-center">
                  {currency}
                  {(product.offerPrice * cartItems[itemId]).toFixed(2)}
                </p>

                <button
                  onClick={() => updateCartQuantity(product._id, 0)}
                  className="cursor-pointer mx-auto"
                >
                  <img
                    className="trashIcon"
                    src={trash}
                    height={19}
                    width={19}
                  />
                </button>
              </div>
            );
          })}

          <button
            onClick={() => navigate("/collection")}
            className="group cursor-pointer flex items-center mt-8 gap-2 text-destructive font-medium"
          >
            <img src={back} height={19} width={19} alt="backIcon" />
            Continue Shopping
          </button>
        </div>
        {/* Incluir CartTotal */}
        <CartTotal />
      </div>
    </div>
  );
}

export default Cart;
