import React from "react";
//import { Link } from "react-router-dom";
import Title from "../components/Title";
import { Item } from "../components/Item";
import { useAppContext as UseAppContext } from "../context/AppContext";


const Collection = () => {
  const { products } = UseAppContext();

  return (
    <div className="max-padd-container my-28">
      <Title title1={"Todos"} title2={"Productos"} titleStyles={"pb-10"} />
      <div className="bg-primary p-4 rounded-l-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-8 gap-y-12!">
          {products.length > 0 ? (
            products.map((product) => (
              <Item key={product._id} product={product} />
            ))
          ) : (
            <p className="capitalize">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;