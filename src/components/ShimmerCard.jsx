const ShimmerCard = () => {
  return (
    <div class="flex rounded-lg animate-pulse bg-gradient-to-t border border-black w-[33vw] h-[50vh] max-w-sm    shadow :bg-gray-800 :border-gray-700 mx-2 my-2 bg-white opacity-70">
      <div className="flex flex-1 flex-col justify-start overflow-hidden">
        <div className="h-72 bg-gray-300 animate-pulse border border-black"></div>
        <div className="h-32 bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
