/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useRef } from 'react';
import style from "./styles.module.css";

const card = () => {

    const ref = useRef(null);


    return (
        <div className={style.main}>
            <div ref={ref} className={style.innerRadialGradient}></div>
            <div className={style.borderContainer}></div>
            card
        </div>
    )
}

export default card
