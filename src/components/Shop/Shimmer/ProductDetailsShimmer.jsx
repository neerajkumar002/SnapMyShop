const ProductDetailsShimmer = () => {
  return (
    <div className="lg:px-14 w-full py-13 flex flex-col lg:flex-row gap-3">
      <div className="bg-gray-300 lg:w-[500px] h-[400px] animate-pulse"></div>
      <div className="lg:w-[800px] flex flex-col gap-3">
        <div className="bg-gray-300 w-[400px] h-[20px] rounded-md animate-pulse"></div>
        <div className="bg-gray-300 lg:w-[500px] h-[15px] rounded-md animate-pulse"></div>
        <div className="bg-gray-300 lg:w-full h-[40px] rounded-md animate-pulse"></div>
        <div className="bg-gray-300 w-[100px] h-[15px] rounded-md animate-pulse"></div>
        <div className="bg-gray-300 w-[100px] h-[15px] rounded-md animate-pulse"></div>
        <div className="bg-gray-300 w-[200px] h-[15px] rounded-md animate-pulse"></div>
        <div className="bg-gray-300 w-[300px] h-[40px] rounded-md animate-pulse"></div>
        <div className="bg-gray-300 w-full h-[40px] rounded-md animate-pulse"></div>
        <div className="bg-gray-300 w-full h-[40px] rounded-md animate-pulse"></div>
        <div className="bg-gray-300 w-full h-[40px] rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductDetailsShimmer;
