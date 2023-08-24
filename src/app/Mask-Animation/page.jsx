/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import style from "./styles.module.css";
import useMousePosition from "../../app/utils/useMousePosition";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/index";

const page = () => {
	const [isHOvered, setIsHOvered] = useState(false);
	const { x, y } = useMousePosition();
	const size = isHOvered ? 400 : 40;

	return (
		<>
			{/* <Navbar /> */}
			<div className={style.main}>
				<motion.div
					className={style.mask}
					animate={{
						WebkitMaskPosition: `${x - size / 2}px ${
							y - size / 2
						}px`,
						WebkitMaskSize: `${size}px`,
					}}
					transition={{
						type: "tween",
						ease: "backOut",
					}}
				>
					<p
						onMouseEnter={() => setIsHOvered(true)}
						onMouseLeave={() => setIsHOvered(false)}
					>
						In theory, theory and practice are the same. In
						practice, they are not. - Yogi Berra
					</p>
				</motion.div>
				<div className={style.body}>
					<p>
						<span>Debugging</span> is like being the detective in a
						crime movie where you are also the murderer.
					</p>
				</div>
			</div>
		</>
	);
};

export default page;
