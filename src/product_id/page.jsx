import React, { useEffect, useState } from "react";
import { useParams,  useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import RelateProducts from "../components/RelateProducts";
import start from "../assets/star.svg";

export default function ProductDetail() {
  const { id } = useParams();
  //console.log(id)
  const { products, addToCart } = useAppContext(); // ← mismo contexto

  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [thumbnail, setThumbnail] = useState("false");

  useEffect(() => {
    if (products.length > 0 && id) {
      const foundProduct = products.find((item) => item._id === id);
      setProduct(foundProduct || null);

      // thumbnail seguro
      if (foundProduct?.images?.length > 0) {
        setThumbnail(foundProduct.images[0]);
      }
    }
  }, [products, id]);

  if (!product) {
    return <p className="text-center py-10">Cargando producto...</p>;
  }

  return (
    product && (
      <>
        <div className="max-padd-container my-28">
          <p>
            <span>Home</span> /<span> Products</span>
            <span> {product.category}</span>
            <span className="text-indigo-500"> {product.name}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-16 mt-4">
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setThumbnail(image)}
                    className="max-w-23 rounded overflow-hidden cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      height={99}
                      width={99}
                    />
                  </div>
                ))}
              </div>

              <div className="max-w-100 rounded overflow-hidden">
                <img
                  src={thumbnail}
                  alt="Selected product"
                  height={399}
                  width={399}
                />
              </div>
            </div>

            <div className="text-sm w-full md:w-1/2">
              <h1 className="text-3xl font-medium">{product.name}</h1>

              <div className="flex items-center gap-0.5 mt-1">
                <img src={start} alt="star" height={22} width={16} />
                <img src={start} alt="star" height={22} width={16} />
                <img src={start} alt="star" height={22} width={16} />
                <img src={start} alt="star" height={22} width={16} />
                <img src={start} alt="star" height={22} width={16} />
                <p className="ml-2">(5.0)</p>
              </div>

              <div className="mt-6">
                <p className="text-gray-500/70 line-through">
                  MRP: ${product.price}
                </p>

                <p className="text-2xl font-medium">
                  MRP: ${product.offerPrice}
                </p>

                <span className="text-gray-500/70">
                  (inclusive of all taxes)
                </span>
              </div>

              <div className="flex gap-x-4 mt-3">
                <div className="flex items-center gap-x-2">
                  <h4 className="text-gray-500 font-medium">Categoria:</h4>
                  <p>{product.category}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <h4 className="text-gray-500 font-medium">SubCategoria:</h4>
                  <p>{product.subCategory}</p>
                </div>
              </div>

              <p className="text-base font-medium mt-6">About Product</p>
              <p>{product.description}</p>
              <div className="flex items-center mt-10 gap-4 text-base">
                <button  onClick={() =>addToCart(product._id)} className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
                  Añadir a la cesta
                </button>

                <button onClick={() =>{addToCart(product._id); navigate("/cart");}} className="w-full py-3.5 cursor-pointer font-medium bg-destructive text-white hover:bg-destructive/90 transition">
                 Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
        <RelateProducts product={product} />
      </>
    )
  );
}
