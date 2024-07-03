/** @format */

import React from "react"
import { FaHandshake } from "react-icons/fa"
import { FaPeopleGroup } from "react-icons/fa6"
import {
	GiChameleonGlyph,
	GiPencilBrush,
	GiPublicSpeaker,
	GiStairsGoal,
} from "react-icons/gi"
import { GoGoal, GoRocket } from "react-icons/go"
import { GrUserSettings } from "react-icons/gr"
import { HiLightBulb } from "react-icons/hi"

export default function AboutMe() {
	return (
		<div className="w-[90%] mx-auto ">
			<div>
				<h1 className="text-7xl">about me<div className="text-blue-500 w-10 h-10 "></div></h1>
				<div className="w-40 my-5 h-5 bg-blue-500"></div>
			</div>
			<h4>
				Bishkek <span>/</span> Frontend developer
			</h4>
			<p>
				I am a frontend developer with an economics background and a strong
				passion for technology and coding. My main areas of expertise include
				HTML, CSS, SASS, JavaScript, React,Next, Vite and Webpack. I am also
				outgoing and ambitious, with a strong desire for self-improvement, both
				personally and professionally. My main goal is to build top-class web
				applications and websites.
			</p>

			<div>
				<ul>
					<li>
						<p>
							<FaHandshake />
						</p>
						<p>Interpersonal skills</p>
					</li>
					<li>
						<p>
							<HiLightBulb />
						</p>
						<p>Resourceful</p>
					</li>
					<li>
						<p>
							<GiPencilBrush />
						</p>
						<p>Creative</p>
					</li>
					<li>
						<p>
							<GoRocket />
						</p>
						<p>Ambitious</p>
					</li>
					<li>
						<p>
							<GoGoal />
						</p>
						<p>Direct</p>
					</li>
					<li>
						<p>
							<GiPublicSpeaker />
						</p>
						<p>Public speaking</p>
					</li>
					<li>
						<p>
							<FaPeopleGroup />
						</p>
						<p>Extrovert</p>
					</li>
					<li>
						<p>
							<GiChameleonGlyph />
						</p>
						<p>Flexible</p>
					</li>
					<li>
						<p>
							<GiStairsGoal />
						</p>
						<p>Decisive</p>
					</li>
					<li>
						<p>
							<GrUserSettings />
						</p>
						<p>Self-Improvement</p>
					</li>
				</ul>
			</div>
		</div>
	)
}
