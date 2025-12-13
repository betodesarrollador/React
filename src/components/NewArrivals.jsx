import React, { use } from "react";
import Title from "./Title";
import { Item } from "./Item";
import { useAppContext } from "../context/AppContext";

function NewArrivals() {
  const { products } = useAppContext();
  const [stopScroll, setStopScroll] = React.useState(false);
  return (
    <>
      <section className="max-padd-container py-16 xl:py-28">
        {" "}
        {/* ← apertura */}
        <Title title1="New" title2="Arrivals" title1Styles="pb-6" />
        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-background to-transparent" />
          <div
            className="marquee-inner flex w-fit"
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: "22000ms",
            }}
          >
            <div className="flex">
              {products.slice(0, 8).map((product, index) => (
                <div
                  key={index}
                  className="w-56 m-5 h-103 relative flex-shrink-0"
                >
                  <Item product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-l from-background to-transparent" />
        </div>
      </section>
    </>
  );
}

export default NewArrivals;
