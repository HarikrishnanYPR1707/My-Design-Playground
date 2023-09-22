/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from 'react';
import style from './styles.module.css';
import { motion } from "framer-motion";

const page = () => {

    const [isHovered, setIsHovered] = useState(false);

    const size = isHovered ? 2100 : 0;

    return (
        <div
            className={style.main}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Text Container */}
            <div className={style.textContainer}>
                <p>Hover To Reveal</p>
            </div>
            {/* Image Container */}
            <motion.div
                className={style.imageContainer}
                animate={{
                    WebkitMaskSize: `${size}px`
                }}
                transition={{
                    // type: 'tween',
                    // ease: "circOut",
                    duration: 0.75,
                    // delay: 0.1
                }}
            />
        </div>
    )
}

export default page
