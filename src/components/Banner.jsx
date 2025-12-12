import React from "react";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="max-padd-container">
      <div
        className="flex flex-col rounded-2xl px-10 py-20 md:py-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundColor: "#fe784f", // color-destructive exacto
        }}
      >
        {/* overlay oscuro para que el texto contraste */}
        <div className="absolute inset-00"/>

        <div className="relative z-10 flex flex-col items-start justify-center max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold">
            Mejora tu estilo con una colección de moda premium
          </h1>

          <div className="h-[3px] w-32 my-3 bg-gradient-to-r from-transparent via-destructive to-transparent" />

          <p className="text-sm md:text-base max-w-xl">
            Encuentra ropa que combine la comodidad con las tendencias modernas;
            te dará un toque inteligente y con estilo en cada atuendo del día a
            día.
          </p>

          <button className="btn-destructive w-3xs bg-destructive hover:scale-105 transition duration-300 mt-5">
            Consultar ofertas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
