import Image from "next/image";
import Navbar from "@/components/Navbar/index";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-10 grid grid-cols-3 gap-4 px-10 text-[30px] text-[#ec4e39]">
        <Link
          href="Mask-Cursor-Animation/"
          className="flex items-center justify-center rounded-xl px-7 py-3 duration-700 hover:bg-[#2e2e2e]"
        >
          Mask Cursor Animation <FaExternalLinkAlt className="ml-2" />
        </Link>
        <Link
          href="Background-Hover-Animation/"
          className="flex items-center justify-center rounded-xl px-7 py-3 duration-700 hover:bg-[#2e2e2e]"
        >
          Background Hover Animation <FaExternalLinkAlt className="ml-2" />
        </Link>
        <Link
          href="Hacker-Text-Animation/"
          className="flex items-center justify-center rounded-xl px-7 py-3 duration-700 hover:bg-[#2e2e2e]"
        >
          Hacker Text Animation <FaExternalLinkAlt className="ml-2" />
        </Link>
        <Link
          href="ImageCarousel/"
          className="flex items-center justify-center rounded-xl px-7 py-3 duration-700 hover:bg-[#2e2e2e]"
        >
          Image Carousel <FaExternalLinkAlt className="ml-2" />
        </Link>
        <Link
          href="ImageRevealHoverAnimation/"
          className="flex items-center justify-center rounded-xl px-7 py-3 duration-700 hover:bg-[#2e2e2e]"
        >
          Image Reveal Hover Animation <FaExternalLinkAlt className="ml-2" />
        </Link>
      </div>
    </>
  );
}
