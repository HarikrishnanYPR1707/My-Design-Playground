const page = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative flex h-[350px] w-[350px] items-center justify-center overflow-hidden rounded-full p-1 duration-300 md:scale-150">
        <div className="h-full w-full overflow-hidden rounded-full bg-[#252525] p-2">
          <div className="h-full w-full overflow-hidden rounded-full border bg-[#252525]">
            <img src="./myImage.jpg" alt="myImage" className="" />
          </div>
        </div>
        <div className="animate-spin-slow absolute -z-10 h-[500px] w-[300px]">
          <div className="h-1/2 bg-gradient-to-l from-blue-600 via-purple-500 to-transparent"></div>
          <div className="h-1/2 bg-gradient-to-r from-blue-600 via-purple-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
