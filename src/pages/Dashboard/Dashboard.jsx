import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard() {
	return (
		<div className="Dashboard-Page h-screen w-full mt-[-68px] flex justify-center items-center text-lg">
            <div className="text-center">
			<h1 className="leading-[2]">
				You are <b>not authorized</b> to access the Dashboard
				<br />
                <span>Only the Admin can <br /><i className='bx bxs-error-circle text-red-600 text-3xl ms-3'></i></span>
			</h1>
            <NavLink to="/" className="inline-block purple-bg purple-bg-hover w-fit p-3 px-7 mt-7 rounded-full text-white"><i className='bx bx-arrow-back' ></i> Go Back</NavLink>
            </div>
		</div>
	);
}

export default Dashboard;
