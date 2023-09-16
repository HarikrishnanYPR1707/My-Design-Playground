/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const page = () => {

	const slides = [
		{
			url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
		},
		{
			url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
		},
		{
			url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
		},

		{
			url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
		},
		{
			url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const lastFirstSlide = currentIndex === slides.length - 1;
		const newIndex = lastFirstSlide ? 0 : currentIndex + 1;

		setCurrentIndex(newIndex);

	}

	return (
		<div className="max-w-[1400px] h-[780px] w-full m-auto px-10 mt-[6.5rem] relative group">
			<div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
			<div className="hidden group-hover:block rounded-full bg-black/20 text-white absolute top-[50%] -translate-x-0 translate-y-[-50%] left-14 text-2xl p-2 cursor-pointer" onClick={prevSlide}>
				<BsChevronCompactLeft size={30} />
			</div>
			<div className="hidden group-hover:block rounded-full bg-black/20 text-white absolute top-[50%] -translate-x-0 translate-y-[-50%] right-14 text-2xl p-2 cursor-pointer" onClick={nextSlide}>
				<BsChevronCompactRight size={30} />
			</div>
			<div className="flex top-5 justify-center py-2">
				{slides.map((slide, slideIndex) => (
					<div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)} className="text-2xl text-white cursor-pointer">
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
