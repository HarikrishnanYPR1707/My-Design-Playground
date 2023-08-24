/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useRef } from "react";

const page = () => {
  const ref = useRef(null);

  useEffect(() => {
    const textRef = ref.current;

    const letters = "abcdefghijklmnopqrstuvwxyz";

    const hackerTextEffect = (e) => {
      let iteration = 0;
      const text = "Hacker Text Animation";

      const interval = setInterval(() => {
        textRef.innerText = textRef.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= text.length) clearInterval(interval);

        iteration += 1 / 3;
      }, 45);
    };

    textRef.addEventListener("mouseenter", hackerTextEffect);

    //cleanup function
    return () => {
      textRef.removeEventListener("mouseenter", hackerTextEffect);
    };
  }, []);

  return (
    <section className="grid h-screen place-content-center bg-[#252525]">
      <p
        ref={ref}
        className="font-space-mono text-[4rem] uppercase text-[#ec4e39]"
      >
        Hacker Text Animation
      </p>
    </section>
  );
};

export default page;
