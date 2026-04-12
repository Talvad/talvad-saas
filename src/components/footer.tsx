import { Link } from "@tanstack/react-router";
import { Earth, Globe } from "lucide-react";
import { footerNavLinks } from "#/resources";

export default function Footer() {
	return (
		<footer className="bg-slate-50 dark:bg-[#0b082f] w-full border-t border-slate-200 dark:border-none">
			<div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full">
				<div className="mb-6 md:mb-0">
					<div className="font-black text-lg text-primary font-headline mb-2">
						TALVAD
					</div>
					<p className="font-manrope text-xs tracking-wide text-slate-400">
						© 2024 TALVAD.
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-8 font-manrope text-xs tracking-wide">
					{footerNavLinks.map((link) => (
						<Link
							key={link.to}
							className="text-slate-500 hover:underline decoration-indigo-500 underline-offset-4 transition-all opacity-80 hover:opacity-100"
							to={link.to}
						>
							{link.label}
						</Link>
					))}
				</div>
				<div className="mt-6 md:mt-0 flex gap-4">
					<a
						className="text-slate-400 hover:text-indigo-600 transition-colors"
						href="/language"
					>
						<Earth className="text-lg" />
					</a>
					<a
						className="text-slate-400 hover:text-indigo-600 transition-colors"
						href="/location"
					>
						<Globe className="text-lg" />
					</a>
				</div>
			</div>
		</footer>
	);
}
