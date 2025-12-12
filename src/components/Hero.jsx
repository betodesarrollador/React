import React from "react";
import { Link } from "react-router";
import img from "../assets/bg.png";

const Hero = () => {
  return (
    <section>
      <div
        className="max-padd-container bg-cover bg-center bg-no-repeat h-screen w-full"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex items-center h-full">
          <div>
            <h4 className="uppercase medium-18 tracking-wide">
              TESOROS DE MODA
            </h4>
            <h1 className="capitalize max-w-160">
              Mejora tu look{" "}
              <span className="text-destructive">Con cada clic.</span> Compra hoy
            </h1>
            <p className="my-5 max-w-132">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              nostrum similique soluta repudiandae nobis laborum explicabo vero,
              exercitationem laudantium iure!
            </p>
            {/* Buton */}
            <div className="inline-flex items-center justify-center gap-4 bg-white rounded-xl">
              <div className="text-center regular-14 leading-tight pl-5">
                <h5>30% Off</h5>
                <p>En todos los artículos</p>
              </div>
              <Link
                href="/cart"
                className="btn-destructive rounded-xl flex items-center justify-center px-6 py-3 text-white font-semibold"
              >
                Show Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
