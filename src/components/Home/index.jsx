import React from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const index = () => {
  return (
    <Link
      href="/"
      className="absolute left-10 top-10 z-20 grid aspect-square w-[60px] place-content-center rounded-full bg-[#ec4e39] text-4xl font-black text-[#252525]"
    >
      <FaHome />
    </Link>
  );
};

export default index;
