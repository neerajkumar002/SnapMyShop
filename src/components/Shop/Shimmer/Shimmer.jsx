import React from "react";
const ShimmerCard = () => {
  return (
    <div className="bg-gray-100 w-full h-[300px] rounded-md px-2 py-2 flex flex-col gap-3 justify-around">
      <div className="bg-gray-200 h-[200px] rounded-md animate-pulse"></div>
      <div className="bg-gray-200 h-[20px] rounded-md animate-pulse"></div>
      <div className="bg-gray-200 h-[20px] rounded-md animate-pulse"></div>
      <div className="bg-gray-200 h-[50px] rounded-md animate-pulse"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="lg:px-13 grid grid-cols-2 lg:grid-cols-5 gap-4 mt-20 ">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default Shimmer;
