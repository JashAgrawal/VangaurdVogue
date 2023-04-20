import React from "react";
import {
	FaUserCircle,
	FaCalendarAlt,
	FaLanguage,
	FaFileContract,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
export default function PersonalInfo() {
	const details = [
		{ value: "Jash Agrawal", title: "Name", logo: <FaUserCircle /> },
		{ value: "06/04/2002", title: "Date of birth", logo: <FaCalendarAlt /> },
		{ value: "India", title: "Country", logo: <BsGlobe /> },
		{ value: "English", title: "Language", logo: <FaLanguage size={20} /> },
		{ value: "7021280686", title: "Contact", logo: <FaFileContract /> },
	];
	return (
		<div className="flex pt-10 flex-col">
			<div>
				<h1 className="font-extrabold text-3xl mb-4">Personal Information</h1>
				<p className="text-lg">
					Manage your personal Information . including phone numbers and email
					address where you can be contacted
				</p>
				<div className="flex py-12 w-4/5 flex-wrap">
					{details.map((detail, idx) => (
						<div key={idx} className="w-48 m-3 p-6 border rounded-xl">
							<h1 className="pb-2 border-b border-accent text-lg">
								{detail.title}
							</h1>
							<div className="flex mt-2 justify-between">
								<h1>{detail.value}</h1>
								<p className="mt-1">{detail.logo}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
