/** @format */

"use client"
import React from "react"
import JavaScript from "../assets/img/skills/js_icon.svg"
import ReactIcon from "../assets/img/skills/react_icon.svg"
import CssIcon from "../assets/img/skills/css3_icon.svg"
import HtmlIcon from "../assets/img/skills/html5_icon.svg"
import TailwindIcon from "../assets/img/skills/tailwind_icon.svg"
import TypescriptIcon from "../assets/img/skills/typescript_icon.svg"
import ViteIcon from "../assets/img/skills/vite_icon.svg"
import GitIcon from "../assets/img/skills/git_icon.svg"
import NodejsIcon from "../assets/img/skills/nodejs_icon.svg"
import NextjsIcon from "../assets/img/skills/next_js_icon.svg"
import Scss2Icon from "../assets/img/skills/scss2_icon.svg"
import ExcelIcon from "../assets/img/skills/excel_icon.svg"
import Image from "next/image"
import { text } from "stream/consumers"
import ReduxIcon from "../assets/img/skills/redux_icon.svg"
import { IoIosSpeedometer } from "react-icons/io"
import { PiStudentFill } from "react-icons/pi"

export default function Experience() {
	const skills = [
		{ Icon: JavaScript, text: "JavaScript" },
		{
			Icon: CssIcon,
			text: "CSS",
		},

		{
			Icon: HtmlIcon,
			text: "HTML",
		},
		{
			Icon: ReactIcon,
			text: "React",
		},
		{
			Icon: ViteIcon,
			text: "Vite",
		},
		{
			Icon: TypescriptIcon,
			text: "TypeScript",
		},
		{
			Icon: GitIcon,
			text: "Git",
		},
		{
			Icon: NodejsIcon,
			text: "Node.js",
		},
		{
			Icon: NextjsIcon,
			text: "Next.js",
		},
		{
			Icon: Scss2Icon,
			text: "SCSS",
		},
		{
			Icon: ExcelIcon,
			text: "Excel",
		},
		{
			Icon: TailwindIcon,
			text: "Tailwind",
		},
		{
			Icon: ReduxIcon,
			text: "Redux",
		},
	]

	const education = [
		{
			date: "January 2023  ",
			courseName: "English Language",
			university: "Moution Web",
			place: "Bishkek, Kyrgyzstan",
			desc: "upper-intermediate , advanced",
		},
		{
			date: "January 2023 - May 2024 ",
			courseName: "Frontend Developer",
			university: "Moution Web",
			place: "Bishkek, Kyrgyzstan",
			desc: "HTML ,CSS, JavaScript, React, ",
		},

		{
			date: "September 2021 -  June 2023",
			courseName: "English Language",
			university: "Maatkabyl Uulu Sharhenbayajy",
			place: "Bishkek, Kyrgyzstan",
			desc: "Elemantary , pre-intermediate",
		},
	]
	return (
		<div className="w-[90%]  flex flex-col p-5 md:pl-8 lg:pl-14 bg-[#FCFCFC] gap-6 overflow-auto animate-slide-in-from-left ">
			<h1 className="text-2xl text-center font-bold">
				14 months in frontend / 5+ projects{" "}
			</h1>

			<p className="text-[1.2rem] text-gray-500  text-justify lg:2xl 3xl:text-3xl">
				Completed four Udemy courses HTML, CSS (SASS, Flexbox, Grid),
				JavaScript, and React, and built 10+ projects. Conducted a case study
				project on {'"React vs. Vanilla" '}
				{"'JavaScript'"} as part of personal development. Skilled in
				implementing the Model-View-Controller (MVC) architecture in JavaScript
				and creating UML diagrams. Experienced in writing React components using
				context and hooks, APIs, and custom hooks. Demonstrated proficiency in
				task management, meeting deadlines, efficiency and market analysis, and
				getting knowledge and insights by fostering a collaborative team
				environment during a three-year experience in a large corporation.
			</p>
			<div className="border-y border-gray-300 py-10 ">
				<div className="flex gap-2 items-center text-3xl  justify-center">
					<IoIosSpeedometer />
					<h1>
						skills<span className="text-blue-500">.</span>
					</h1>
				</div>
				<ul className="py-10 hobbies grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-10">
					{skills.map((skill, index) => (
						<li
							className="h-10 group relative flex flex-col items-center"
							key={index}
						>
							<Image
								src={skill.Icon}
								alt={skill.text}
								className="w-10 h-10 group-hover:rotate-[15deg] group-hover:scale-125 transition duration-300"
							/>
							<p className="text-sm md:text-lg opacity-0 absolute top-[30%] group-hover:top-12 group-hover:opacity-100 transition-all duration-300 ease-in-out">
								{skill.text}
							</p>
						</li>
					))}
				</ul>
			</div>

			<div>
				<div className="flex flex-col gap-5 items-center">
					<h1 className="text-3xl font-bold flex ">
						<PiStudentFill />
						education
					</h1>

					<div className="flex flex-wrap gap-5">
						{education.map((edu, index) => (
							<div
								key={index}
								className="flex flex-col gap-3 border-b border-gray-300 py-3"
							>
								<p className="text-blue-500">{edu.date}</p>
								<h1 className="text-xl font-bold">{edu.courseName}</h1>
								<p className="text-gray-500">{edu.university}</p>
								<p className="text-gray-500">{edu.place}</p>
								<p className="text-gray-500">{edu.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
