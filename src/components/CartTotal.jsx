import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { addressDummyData } from "../components/data";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const { currency, getCartAmount, cartItems, setCartItems, user } =
    useAppContext();
  const [showAddress, setShowAddress] = React.useState(false);
  const [selectedAddress, setSelectedAddress] = React.useState(null);
  const [userAddresses, setUserAddresses] = React.useState([]);
  const [PaymentMethod, setPaymentMethod] = React.useState("COD");

  // User registrado o no
  const fetchUserAddresses = () => {
    setSelectedAddress();
    setUserAddresses(addressDummyData);
    if (addressDummyData.length > 0) {
      setSelectedAddress(addressDummyData[0]);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserAddresses();
    }
  }, [user]);

  // Use navigate
  const navigate = useNavigate();

  return (
    <div className="max-w-[360px] w-full bg-white p-5 max-md:mt-16 rounded">
      <h2 className="text-xl md:text-xl font-medium">Resumen del pedido</h2>

      <hr className="border-gray-300 my-5" />

      <div className="mb-6">
        <p className="text-sm font-medium uppercase">Dirección de entrega</p>

        <div className="relative flex justify-between items-start mt-2">
          {selectedAddress && (
            <p className="text-gray-500">
              {selectedAddress.dirección}, {selectedAddress.ciudad},
              {selectedAddress.pais}
            </p>
          )}
          {!selectedAddress && (
            <p className="text-gray-500">No se encontró ninguna dirección</p>
          )}

          <button
            onClick={() => setShowAddress(!showAddress)}
            className="text-destructive hover:underline ml-1 cursor-pointer"
          >
            Cambiar
          </button>

          {showAddress && (
            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
              {userAddresses.map((address, index) => (
                <p
                  key={index}
                  onClick={() => {
                    setSelectedAddress(address);
                    setShowAddress(false);
                  }}
                  className="text-gray-500 p-2 hover:bg-gray-100"
                >
                  {address.streetAddress}, {address.ciudad},
                  {address.pais}
                </p>
              ))}

              <p
                onClick={() => setShowAddress(false)}
                className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10"
              >
                Agregar dirección
              </p>
            </div>
          )}
        </div>

        <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

        <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
          <option value="COD">Pago contra reembolso</option>

          <option value="Online">Pago en línea</option>
        </select>
      </div>

      <hr className="border-gray-300" />

      <div className="text-gray-500 mt-4 space-y-2">
        <p className="flex justify-between">
          <span>Price</span>
          <span>$20</span>
        </p>

        <p className="flex justify-between">
          <span>Shipping Fee</span>
          <span className="text-green-600">Free</span>
        </p>

        <p className="flex justify-between">
          <span>Tax (2%)</span>
          <span>$20</span>
        </p>

        <p className="flex justify-between text-lg font-medium mt-3">
          <span>Total Amount:</span>
          <span>$20</span>
        </p>
      </div>

      <button className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
        Place Order
      </button>
    </div>
  );
};

export default CartTotal;
