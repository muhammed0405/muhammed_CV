/** @format */

import Link from "next/link"
import React from "react"
import { IoPhonePortrait } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { RiUserLocationFill } from "react-icons/ri"
import Image from "next/image"
import TelegramIcon from "../assets/img/telegram_icon.svg"
import GithubIcon from "../assets/img/github_icon.svg"
import LinkedinIcon from "../assets/img/linkedin_icon.svg"
export default function Contact() {
	return (
		<div className="w-[90%]  flex flex-col py-10 pl-5 md:pl-8 lg:pl-14 bg-[#FCFCFC] gap-8 overflow-auto animate-slide-in-from-left ">
			<div>
				<h1 className="flex  items-end gap-1 text-5xl ">
					contact <span className="text-blue-500">.</span>{" "}
					<div className="w-4  h-10 bg-blue-500 animate-blink"></div>
				</h1>

				<div className="w-28 my-5 h-2 bg-blue-500"></div>
			</div>

			<p>
				If you are looking for young and ambitious Frontend Devoloper, please do
				not hesitate to contact me.
			</p>

			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28320.583376034345!2d92.84913960764631!3d56.01683391599319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7afc9a1ff37e3%3A0xd597e1468fd647ff!2sKrasnojarsk%2C%20Kraj%20Krasnojarsk%2C%20Rusland!5e0!3m2!1snl!2snl!4v1720065373736!5m2!1snl!2snl"
					width="90%"
					height="300"
					style={{ border: "5" }}
					allowFullScreen={false}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
				<div className="flex gap-2 ">
					<p>
						<RiUserLocationFill />
					</p>
					<p className="text-[13px] sm:text-md md:text-[16px]">
						Russia , Krasnoyarsk
					</p>
				</div>
				<div className="flex gap-2 ">
					<p>
						<IoPhonePortrait />
					</p>
					<p className="text-[13px] sm:text-md md:text-[16px]">
						+7 999 442 74 38
					</p>
				</div>

				<div className="flex gap-2 ">
					<p>
						<MdEmail />
					</p>
					<p className="text-[13px] sm:text-md md:text-[16px]">
						muhammednazardev@gmail.com
					</p>
				</div>

				<div>
					<a href="mailto:muhammednazardev@gmail.com?subject=Email%20from%20Website&body=This%20is%20an%20automated%20email.%0D%0A%0D%0ASent%20from%20your%20website.">
						<button className="group relative w-40 h-8  bg-blue-500 text-white p-2 rounded-lg overflow-hidden">
							<p className="absolute top-[-30px] text-2xl right-16 transition-all duration-300 group-hover:top-1">
								<MdEmail />
							</p>
							<p className="absolute top-1 right-8 transition-all duration-300 group-hover:top-10">
								Message me
							</p>
						</button>
					</a>
				</div>
			</div>
			<div className="flex flex-col items-center gap-5">
				<div className="mb-5">
					<h1 className="flex  items-end gap-1 text-3xl ">
						social<span className="text-blue-600 text-4xl">.</span>
					</h1>
				</div>
				<div className="flex gap-5">
					<Link href="https://t.me/muhammetnazar_05">
						<Image
							className="w-12 sm:w-16 hover:rotate-[15deg] hover:scale-125 transition-all duration-300 "
							src={TelegramIcon}
							alt="telegram icon"
						/>
					</Link>
					<Link href="https://www.linkedin.com/in/muhammednazar-amatov-a23718310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
						<Image
							className="w-12 sm:w-16 hover:rotate-[15deg] hover:scale-125 transition-all duration-300 "
							src={LinkedinIcon}
							alt="linkedin icon"
						/>
					</Link>
					<Link href="https://github.com/muhammet2005">
						<Image
							className="w-12 sm:w-16 hover:rotate-[15deg] hover:scale-125 transition-all duration-300 "
							src={GithubIcon}
							alt="github icon"
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}
