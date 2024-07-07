/** @format */

import React from "react"

export default function ProjectDetails({ params }: { params: { id: string } }) {
	return (
		<div className="w-[90%]  flex flex-col py-10 pl-5 md:pl-8 lg:pl-14 bg-[#FCFCFC] gap-8 overflow-auto animate-slide-in-from-left ">
			{" "}
			<h1>project {params.id} </h1>
		</div>
	)
}
