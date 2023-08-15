import Image from "next/image";
import Navbar from "@/components/Navbar/index";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="h-[10vh] text-[30px] text-[#ec4e39] flex justify-center items-center">
				<Link
					href="Mask-Animation/"
					className="flex justify-center items-center"
				>
					Mask Animation <FaExternalLinkAlt className="ml-2" />
				</Link>
			</div>
		</>
	);
}
