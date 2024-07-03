/** @format */

"use client"
import React from "react"
import Image from "next/image"
import Logo from "../../assets/img/logo.svg"
import Link from "next/link"
import { IoIosFingerPrint } from "react-icons/io"
import { MdWork } from "react-icons/md"
import { FaFileCode, FaFilePdf } from "react-icons/fa"
import { IoChatboxEllipsesOutline } from "react-icons/io5"
import "./header.scss"
export default function Header() {
	return (
		<div className="bg-[#F2EEEE] flex flex-col justify-between">
			<div>
				<Image src={Logo} width={100} height={100} alt="Logo" />
			</div>

			<nav>
				<ul className="nav__bar">
					<li className="w-full h-20 items-center flex justify-center  text-5xl">
						<Link className="" href="/">
							<IoIosFingerPrint />
						</Link>
					</li>
					<li className="w-full h-20 items-center flex justify-center  text-5xl">
						<Link href="/">
							<MdWork />
						</Link>
					</li>
					<li className="w-full h-20 items-center flex justify-center  text-5xl">
						<Link href="/">
							<FaFileCode />
						</Link>
					</li>
					<li className="w-full h-20 items-center flex justify-center  text-5xl">
						<Link href="/">
							<IoChatboxEllipsesOutline />
						</Link>
					</li>
					<button className=" md:hidden w-full h-20 items-center flex justify-center  text-5xl">
						<FaFilePdf />
					</button>
				</ul>
			</nav>

			<div>
				<p className="text-xs">
					© 2024 <br />
					Amatov <br /> Muhammednazar
				</p>
			</div>
		</div>
	)
}
