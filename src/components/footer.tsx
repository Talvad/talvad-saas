import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";
import { footerNavGroups, socialLinks } from "#/resources";
import { Button } from "./ui/button";
import WavySvg from "./ui/wavy";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-20 pt-10 ">
			<WavySvg />
			<section className="bg-[#0a121e] text-white -mt-1 py-4">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl md:text-6xl px-5 md:px-10 text-center font-bold">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
						delectus?.
					</h1>
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 py-10">
						<Button
							size={"lg"}
							className="border border-white bg-blue-500 rounded-sm cursor-pointer px-1 md:px-10 py-6 hover:scale-105 transition duration-300 ease-in-out uppercase font-bold text-sm w-full md:w-auto"
						>
							subscribe to the newsletter
							<MoveRight />
						</Button>
						<Button
							size={"lg"}
							className="border border-white bg-transparent rounded-sm cursor-pointer px-10 py-6 hover:scale-105 transition duration-300 ease-in-out uppercase font-bold text-sm w-full md:w-auto"
						>
							features
							<MoveRight />
						</Button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{footerNavGroups.map((group) => (
							<div key={group.title} className="shadow-lg p-6 bg-[#1b232f]">
								<h2 className="text-2xl font-bold pb-4">{group.title}</h2>
								<nav className="flex flex-col gap-2">
									{group.links.map((link) => (
										<Link key={link.label} to={link.to}>
											{link.label}
										</Link>
									))}
								</nav>
							</div>
						))}
					</div>
					<div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
						<div className="flex items-center justify-center gap-4">
							{socialLinks.map((link) => (
								<a
									href={link.to}
									key={link.label}
									target="_blank"
									rel="noreferrer"
								>
									{link.icon({ className: "w-10 h-10" })}
								</a>
							))}
						</div>
						<p className="text-xs">
							&copy; {year} Talvad. All rights reserved.
						</p>
					</div>
				</div>
			</section>
		</footer>
	);
}
