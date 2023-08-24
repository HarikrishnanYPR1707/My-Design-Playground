import Image from "next/image";
import Navbar from "@/components/Navbar/index";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-[10vh] flex-col items-center justify-center text-[30px] text-[#ec4e39]">
        <Link
          href="Mask-Animation/"
          className="flex items-center justify-center"
        >
          Mask Animation <FaExternalLinkAlt className="ml-2" />
        </Link>
        <Link
          href="Blob-Hover-Animation/"
          className="flex items-center justify-center"
        >
          BLOG HOVER ANIMATION <FaExternalLinkAlt className="ml-2" />
        </Link>
      </div>
    </>
  );
}
