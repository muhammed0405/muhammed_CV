/** @format */

import React from "react"
import { BiMoviePlay } from "react-icons/bi"
import { FaBook, FaHandshake, FaMicrochip, FaTableTennis } from "react-icons/fa"
import { FaPeopleGroup } from "react-icons/fa6"
import {
	GiChameleonGlyph,
	GiPencilBrush,
	GiPublicSpeaker,
	GiStairsGoal,
} from "react-icons/gi"
import { GoGoal, GoGraph, GoRocket } from "react-icons/go"
import { GrUserSettings } from "react-icons/gr"
import { HiLightBulb } from "react-icons/hi"
import { IoGameControllerOutline } from "react-icons/io5"
import { MdPsychology } from "react-icons/md"
import { TbWorld } from "react-icons/tb"

const skills = [
	{ icon: FaHandshake, text: "Interpersonal skills" },
	{ icon: HiLightBulb, text: "Resourceful" },
	{ icon: GiPencilBrush, text: "Creative" },
	{ icon: GoRocket, text: "Ambitious" },
	{ icon: GoGoal, text: "Direct" },
	{ icon: GiPublicSpeaker, text: "Public speaking" },
	{ icon: FaPeopleGroup, text: "Extrovert" },
	{ icon: GiChameleonGlyph, text: "Flexible" },
	{ icon: GiStairsGoal, text: "Decisive" },
	{ icon: GrUserSettings, text: "Self-Improvement" },
]

const hobbies = [
	{ icon: FaMicrochip, text: "Technology" },
	{ icon: GoGraph, text: "Economy" },
	{ icon: TbWorld, text: "(Geo)politics" },
	{ icon: MdPsychology, text: "Psychology" },
	{ icon: FaBook, text: "Books" },
	{ icon: IoGameControllerOutline, text: "Games" },
	{ icon: BiMoviePlay, text: "Movies" },
	{ icon: FaTableTennis, text: "Ping pong" },
]

const SkillItem = ({ Icon, text }: { Icon: any; text: string }) => (
	<li className="flex items-center gap-5">
		<p className="text-blue-500 text-3xl transition-all duration-300 hover:scale-150 3xl:text-5xl">
			<Icon />
		</p>
		<p className="3xl:text-2xl">{text}</p>
	</li>
)

const HobbyItem = ({ Icon, text }: { Icon: any; text: string }) => (
	<li className="h-10 group relative flex flex-col items-center">
		<i>
			<Icon className="text-3xl group-hover:rotate-[30deg] group-hover:scale-150 transition duration-300" />
		</i>
		<p className="text-sm md:text-lg opacity-0 absolute top-[30%] group-hover:top-full group-hover:opacity-100 transition-all duration-300 ease-in-out">
			{text}
		</p>
	</li>
)

export default function AboutMe() {
	return (
		<div className="w-[90%]  mx-auto flex flex-col gap-8  ">
			<div>
				<h1 className="flex items-end  text-3xl sm:text-4xl md:text-5xl">
					about me <div className="text-blue-500 ">.</div>{" "}
					<div className="w-4  h-10 bg-blue-500 animate-blink"></div>
				</h1>
				<div className="w-40 my-2 h-2 bg-blue-500"></div>
			</div>
			<h3 className="text-2xl font-bold">
				Bishkek <span>/</span> Frontend developer
			</h3>
			<p className="text-xl lg:2xl 3xl:text-3xl text-justify	">
				I am a frontend developer with a strong passion for technology and
				coding. My main areas of expertise include HTML, CSS, SASS, JavaScript,
				React, Next, Vite and Webpack. I am also outgoing and ambitious, with a
				strong desire for self-improvement, both personally and professionally.
				My main goal is to build top-class web applications and websites.
			</p>

			<div className="border-b border-gray-300 py-20  pl-4">
				<ul className="grid gird-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-5">
					{skills.map((skill, index) => (
						<SkillItem key={index} Icon={skill.icon} text={skill.text} />
					))}
				</ul>
			</div>

			<div>
				<h1 className="text-center text-3xl font-bold">
					hobbies <span className="text-blue-500 text-4xl">.</span>
				</h1>
				<ul className="py-10 hobbies grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10">
					{hobbies.map((hobby, index) => (
						<HobbyItem key={index} Icon={hobby.icon} text={hobby.text} />
					))}
				</ul>
			</div>
		</div>
	)
}
