import React from 'react';
import style from './styles.module.css';
import Card from "@/components/Card/card";

const page = () => {
    const cardComponent = [];

    const cardPrint = () => {
        for (let i = 0; i < 6; i++) {
            cardComponent.push(<Card />)
        }
    }

    cardPrint();

    return (
        <div className={style.main}>
            {/* background hover element */}
            <div className="h-100"></div>
            <div className={style.innerContainer}>
                {cardComponent}
            </div>
        </div>
    )
}

export default page
