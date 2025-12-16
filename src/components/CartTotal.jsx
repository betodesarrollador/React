import React from "react";

const CartTotal = () => {
  return (
    <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
      <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>

      <hr className="border-gray-300 my-5" />

      <div className="mb-6">
        <p className="text-sm font-medium uppercase">Delivery Address</p>

        <div className="relative flex justify-between items-start mt-2">
          <p className="text-gray-500">No address found</p>

          <button
            onClick={() => setShowAddress(!showAddress)}
            className="text-indigo-500 hover:underline cursor-pointer"
          >
            Change
          </button>

          {showAddress && (
            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
              <p
                onClick={() => setShowAddress(false)}
                className="text-gray-500 p-2 hover:bg-gray-100"
              >
                New York, USA
              </p>

              <p
                onClick={() => setShowAddress(false)}
                className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10"
              >
                Add address
              </p>
            </div>
          )}
        </div>

        <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

        <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
          <option value="COD">Cash On Delivery</option>

          <option value="Online">Online Payment</option>
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
