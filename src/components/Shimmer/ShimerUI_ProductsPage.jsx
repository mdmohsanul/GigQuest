import React from "react";
import ShimmerProductCard from "./ShimmerProductCard";

const ShimerUI_ProductsPage = () => {
  const shimmerCardDummyArr = [5, 12, 8, 19, 27, 33, 14, 6, 21, 9, 42, 17];
  return (
    <>
      <div className="mt-16 max-w-7xl min-h-screen flex justify-around gap-3">
        <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
          {shimmerCardDummyArr.map((item, i) => (
            <ShimmerProductCard key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShimerUI_ProductsPage;
