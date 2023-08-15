import React from "react";
import style from "./style.module.css";

const index = () => {
	return (
		<nav className={style.main}>
			<div className={style.logo}>
                <a href="">
                    <span>My</span> <span>Design Playground</span>
                </a>
            </div>
		</nav>
	);
};

export default index;
