import React, { useContext, useState } from "react";
import ChangeColorsIcon from "./ChangeColorsIcon";
import ShareIcon from "./ShareIcon";
import { changeColorsContext } from "../../contexts/ChangeColorsContext";

const FloatingIcons = () => {
	const [showColorsBox, setShowColorsBox] = useState(false);
	const {setMainColor} = useContext(changeColorsContext);

	return (
		<section className={`FloatingIcons flex lg:flex-row-reverse gap-7 fixed ${showColorsBox? "left-3 lg:left-auto lg:right-3" : "left-[-180px] lg:left-auto lg:right-[-180px]"} bottom-[-5px] lg:bottom-auto lg:top-5 trans-3`}>
			<div className="colors-box white-bg p-4 font-semibold rounded mb-8">
				<h4 className="black-c">Theme Colors</h4>
				<div className="flex gap-1 mt-2">
					<div onClick={() => setMainColor('red')} className="w-[25px] h-[25px] bg-red rounded-full cursor-pointer"></div>
					<div onClick={() => setMainColor('orange')} className="w-[25px] h-[25px] bg-orange rounded-full cursor-pointer"></div>
					<div onClick={() => setMainColor('green')} className="w-[25px] h-[25px] bg-green rounded-full cursor-pointer"></div>
					<div onClick={() => setMainColor('blue')} className="w-[25px] h-[25px] bg-blue rounded-full cursor-pointer"></div>
					<div onClick={() => setMainColor('pink')} className="w-[25px] h-[25px] bg-pink rounded-full cursor-pointer"></div>
				</div>
			</div>
			<div className="color-modes-controllers flex flex-col gap-3">
				<ChangeColorsIcon setShowColorsBox={setShowColorsBox} />
				<ShareIcon />
			</div>
		</section>
	);
};

export default FloatingIcons;
