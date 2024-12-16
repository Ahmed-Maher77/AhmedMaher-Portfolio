import React from "react";
import MyPicture from "../../assets/My_Picture_3.jpg";
import "./MainPicture.scss";

function MainPicture({ XLScreen, margin }) {
	return (
		<figure
			className={`MainPicture rounded-full ${
				XLScreen ? "w-[380px] h-[380px]" : "w-[270px] h-[270px]"
			} outline outline-[5px] purple-c ${margin}`}
		>
			<img
				className="block w-full h-full rounded-full"
				src={MyPicture}
				alt="Ahmed Maher's Picture"
				title="Ahmed Maher's Picture"
			/>
		</figure>
	);
}

export default MainPicture;
