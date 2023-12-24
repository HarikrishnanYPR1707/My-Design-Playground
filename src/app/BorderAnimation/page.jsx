import React from "react";

const page = () => {
  return (
    <div className="flex h-screen items-center justify-center border-2">
      <div className="relative flex h-[350px] w-[250px] items-center justify-center rounded-xl border-[1px] border-dashed border-cyan-300 p-1">
        <div className="h-full w-full rounded-xl border-[1px] border-dashed border-red-300 bg-[#252525]"></div>
        <div className="absolute h-[500px] w-[100px] border-2"></div>
      </div>
    </div>
  );
};

export default page;
