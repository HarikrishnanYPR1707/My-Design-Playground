"use client";

import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import useWindowDimension from "../utils/useWindowDimension";

const image = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg",
  "img7.jpeg",
  "img8.jpeg",
  "img9.jpeg",
  "img10.jpeg",
  "img11.jpeg",
  "img12.jpeg",
];

export default function page() {
  const container = useRef(null);
  const { height } = useWindowDimension();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className={styles.main}>
      <div className={styles.spacer}>
        <p className={styles.para}>Scroll Down</p>
      </div>
      <div ref={container} className={styles.gallery}>
        <Column images={[image[0], image[1], image[2]]} y={y1} />
        <Column images={[image[3], image[4], image[5]]} y={y2} />
        <Column images={[image[6], image[7], image[8]]} y={y3} />
        <Column images={[image[9], image[10], image[11]]} y={y4} />
      </div>
      <div className={styles.spacer}>
        <p className={styles.para}>Scroll Up</p>
      </div>
    </div>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/image/${src}`} fill alt="image" />
          </div>
        );
      })}
    </motion.div>
  );
};
