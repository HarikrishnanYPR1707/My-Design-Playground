import Image from "next/image";
import Navbar from "@/components/Navbar/index";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-10 flex h-[10vh] flex-col items-center justify-center text-[30px] text-[#ec4e39]">
        <Link
          href="Mask-Cursor-Animation/"
          className="flex items-center justify-center"
        >
          Mask Cursor Animation <FaExternalLinkAlt className="ml-2" />
        </Link>
        <Link
          href="Background-Hover-Animation/"
          className="flex items-center justify-center"
        >
          Background Hover Animation <FaExternalLinkAlt className="ml-2" />
        </Link>
        <Link
          href="Hacker-Text-Animation/"
          className="flex items-center justify-center"
        >
          Hacker Text Animation <FaExternalLinkAlt className="ml-2" />
        </Link>
        <Link
          href="ImageCarousel/"
          className="flex items-center justify-center"
        >
          Image Carousel <FaExternalLinkAlt className="ml-2" />
        </Link>
      </div>
    </>
  );
}
