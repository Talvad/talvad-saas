import { Link } from "@tanstack/react-router";
import { headerNavLinks } from "#/resources";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 shadow-md px-4 backdrop-blur-lg flex justify-between items-center">
			{/* <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm shadow-indigo-500/5"> */}
			<div className="flex justify-between items-center px-2 md:px-8 h-16 w-full max-w-screen-2xl mx-auto">
				<Link
					to="/"
					className="text-2xl font-bold tracking-tighter text-primary font-headline"
				>
					TALVAD
				</Link>
				<div className="hidden md:flex items-center space-x-8 font-manrope tracking-tight text-sm font-medium">
					{headerNavLinks.map((link) => (
						<Link
							key={link.to}
							className="text-slate-500 hover:text-indigo-500 transition-colors"
							to={link.to}
						>
							{link.label}
						</Link>
					))}
				</div>
				<div className="flex items-center gap-4">
					<ThemeToggle />

					<button
						type="button"
						className="px-2 md:px-5 py-1 md:py-2 rounded-lg bg-primary text-on-primary-fixed  font-manrope font-bold text-sm active:scale-90 transform transition-transform duration-200"
					>
						Get Started
					</button>
				</div>
			</div>
			{/* </nav> */}
		</header>
	);
}
