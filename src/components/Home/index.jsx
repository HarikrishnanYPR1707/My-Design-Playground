/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import useWindowSize from "@/app/utils/useWindowSize";

const index = () => {

  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <>
      {(innerWidth > 1024) ? (
        <>
          <Link
            href="/"
            className="absolute left-10 top-10 z-20 grid aspect-square w-[60px] place-content-center rounded-full bg-[#ec4e39] text-4xl font-black text-[#252525]"
          >
            <FaHome />
          </Link>
        </>
      ) : <></>}
    </>
  );
};

export default index;
