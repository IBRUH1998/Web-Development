

const MarqueeComponent = () => {
  return (
    <div className="w-full bg-gray-200 py-2 shadow-md mx-auto container ">
      <div className=" flex items-center justify-between px-4">
        {/* Button */}
        <button className="bg-[#D72050] text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Latest
        </button>
        {/* Marquee */}
        <marquee className="text-gray-800 font-medium">
          Match Highlights: Germany vs Spain — as it happened! Match Highlights:
          Germany vs Spain as...
        </marquee>
      </div>
    </div>
  )
}

export default MarqueeComponent
