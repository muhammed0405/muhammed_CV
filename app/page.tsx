/** @format */

import Image from "next/image"
import AboutMe from "./about_me/page"

export default function Home() {
	return (
		<main className="container  bg-[#FCFCFC]  animate-slide-in-from-left overflow-scroll ">
			<AboutMe />
		</main>
	)
}
