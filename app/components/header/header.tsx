/** @format */

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { IoIosFingerPrint } from "react-icons/io"
import { MdWork } from "react-icons/md"
import { FaFileCode, FaFilePdf } from "react-icons/fa"
import { IoChatboxEllipsesOutline } from "react-icons/io5"
import Logo from "../../assets/img/logo.svg"
import "./header.scss"

const navItems = [
	{ icon: IoIosFingerPrint, href: "/" },
	{ icon: MdWork, href: "/experience_education" },
	{ icon: FaFileCode, href: "/projects" },
	{ icon: IoChatboxEllipsesOutline, href: "/contact" },
]

export default function Header() {
	return (
		<div className="bg-[#F2EEEE] z-10">
			<div className="flex flex-col w-12 md:w-20 gap-10 md:justify-between md:h-full sticky top-1 ">
				<Image src={Logo} width={100} height={100} alt="Logo" />
				<div className=""></div>
				<nav>
					<ul className="nav__bar">
						{navItems.map(({ icon: Icon, href }, index) => (
							<Link href={href} key={index}>
								<li className="w-full h-20 items-center flex justify-center text-5xl">
									<Icon />
								</li>
							</Link>
						))}
						<li className="md:hidden w-full h-20 items-center flex justify-center text-5xl">
							<button>
								<FaFilePdf />
							</button>
						</li>
					</ul>
				</nav>
				<p className="text-[8px] p-1">
					© {new Date().getFullYear()} <br />
					Amatov <br /> Muhammed
				</p>
			</div>
		</div>
	)
}
