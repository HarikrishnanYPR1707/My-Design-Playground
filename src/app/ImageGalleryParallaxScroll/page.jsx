"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div className={styles.main}>
      <div className={styles.spacer}>
        <p className={styles.para}>Scroll Down</p>
      </div>
      <div ref={container} className={styles.gallery}>
        <Column images={[image[0], image[1], image[2]]} />
        <Column images={[image[3], image[4], image[5]]} />
        <Column images={[image[6], image[7], image[8]]} />
        <Column images={[image[9], image[10], image[11]]} />
      </div>
      <div className={styles.spacer}>
        <p className={styles.para}>Scroll Up</p>
      </div>
    </div>
  );
}

const Column = ({ images }) => {
  return (
    <div className={styles.column}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/image/${src}`} fill alt="image" />
          </div>
        );
      })}
    </div>
  );
};
