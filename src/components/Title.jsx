import React from "react";

const Title = ({ title1, title2, title1Styles, paraStyles, para }) => {
  return (
    <div className={`${title1Styles}`}>
      <h3>
        {title1}
        <span className="text-destructive font-light! underline">
          {title2}
        </span>
      </h3>
      <p className={`${paraStyles} max-w-md`}>
        {para
          ? para
          : "Explore our collection of stylish clothing and footwear made confort,quality, and everyday confidence."}
      </p>
    </div>
  );
};

export default Title;
