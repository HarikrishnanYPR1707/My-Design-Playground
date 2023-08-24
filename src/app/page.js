import Image from "next/image";
import Navbar from "@/components/Navbar/index";
import HomeButton from "@/components/Home/index";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
	return (
		<>
			<Navbar />
			<HomeButton />
			<div className="h-[10vh] text-[30px] text-[#ec4e39] flex flex-col justify-center items-center">
				<Link
					href="Mask-Animation/"
					className="flex justify-center items-center"
				>
					Mask Animation <FaExternalLinkAlt className="ml-2" />
				</Link>
				<Link
					href="Blog-Hover-Animation/"
					className="flex justify-center items-center"
				>
					BLOG HOVER ANIMATION <FaExternalLinkAlt className="ml-2" />
				</Link>
			</div>
		</>
	);
}
