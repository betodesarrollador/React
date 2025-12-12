import React from "react";
import Title from "./Title";
import { dummyProducts } from "../components/data";
import { Item } from "./Item";

function NewArrivals() {
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
              {dummyProducts.slice(0, 8).map((product, index) => (
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

