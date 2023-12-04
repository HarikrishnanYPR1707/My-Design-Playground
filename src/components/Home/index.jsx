/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import useWindowDimension from "@/app/utils/useWindowDimension";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const index = () => {
  const { width, height } = useWindowDimension();

  return (
    <>
      {width > 1024 ? (
        <>
          <Link
            href="/"
            className="fixed left-10 top-10 z-20 grid aspect-square w-[60px] place-content-center rounded-full bg-[#ec4e39] text-4xl font-black text-[#252525]"
          >
            <FaHome />
          </Link>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default index;
