import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { UseAppContext } from "../context/AppContext";

const Collection = () => {
  const { products } = UseAppContext();

  return (
    <div>
      <Title title1={"Todos"} title2={"Productos"} titleStyles={"pb-10"} />
      <div>
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
