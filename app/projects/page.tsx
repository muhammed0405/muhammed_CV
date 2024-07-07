/** @format */

import React from "react"
import ReactIcon from "../assets/img/skills/react_icon.svg"
import Image from "next/image"
import TacoHub from "../assets/img/projects/tacohub.png"
import Link from "next/link"
import VoteDog from "../assets/img/projects/vote_dog.png"

const ProjectsCard = ({ id, img, title, description, stack }: Props) => {
	return (
		<Link href={`/projects/${id}`}>
			<div className=" w-[90%] group relative h-64  flex items-end">
				<Image
					className="w-[80%] h-40  absolute top-0 left-[10%] group-hover:top-[-10%] transition-all duration-300 "
					src={img}
					alt="React Icon"
				/>
				<div className=" w-full h-40  flex flex-col gap-3 p-3 z-10 opacity-[0.9] group-hover:opacity-[0.7] transition-all duration-300 shadow-lg bg-white">
					<h1 className="text-3xl font-bold ] group-hover:text-blue-500">
						{title}
					</h1>
					<h3 className="text-lg">{description}</h3>
					<p className="text-lg">{stack}</p>
				</div>
			</div>
		</Link>
	)
}

interface Props {
	id: string
	img: string
	title: string
	description: string
	stack: string
}

export default function Projects() {
	const projects = [
		{
			id: "1",
			img: TacoHub,
			title: "TacoHub",
			description: "application",
			stack: "React,TS,Vite",
		},
		{
			id: "2",
			img: VoteDog,
			title: "Doge Vote",
			description: "application",
			stack: "React,TS,Vite, Tailwind",
		},
	]
	return (
		<div className="w-[90%]  flex flex-col py-10 pl-5 md:pl-8 lg:pl-14 bg-[#FCFCFC] gap-8 overflow-auto animate-slide-in-from-left">
			<div>
				<h1 className="flex items-end  text-3xl sm:text-4xl md:text-5xl">
					projects<div className="text-blue-500 ">.</div>{" "}
					<div className="w-4  h-10 bg-blue-500 animate-blink"></div>
				</h1>

				<div className="w-28 my-5 h-2 bg-blue-500"></div>
			</div>

			<div className="flex items-center gap-5 justify-center mb-10">
				<Image
					className="animate-rotate-icon"
					src={ReactIcon}
					alt="React Icon"
					width={50}
					height={50}
				/>
				<h1 className="text-3xl">React</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-8">
				{projects.map((project, index) => (
					<ProjectsCard
						id={project.id}
						key={index}
						img={project.img}
						title={project.title}
						description={project.description}
						stack={project.stack}
					/>
				))}
			</div>
		</div>
	)
}
