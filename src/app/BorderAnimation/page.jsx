import React from "react";

const page = () => {
  return (
    <div className="flex h-screen items-center justify-center border-2">
      <div className="relative flex h-[350px] w-[250px] items-center justify-center overflow-hidden rounded-xl p-1">
        <div className="h-full w-full rounded-xl bg-[#252525]"></div>
        <div className="animate-spin-slow absolute -z-10 h-[500px] w-[150px]">
          <div className="h-1/2 bg-gradient-to-l from-blue-500 to-transparent"></div>
          <div className="h-1/2 bg-gradient-to-r from-red-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
