import { Link } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { headerNavLinks } from "#/resources";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 shadow-md px-4 backdrop-blur-lg flex justify-between items-center">
			{/* <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm shadow-indigo-500/5"> */}
			<div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">
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
						className="px-5 py-2 rounded-lg bg-primary text-on-primary-fixed  font-manrope font-bold text-sm active:scale-90 transform transition-transform duration-200"
					>
						Get Started
					</button>
				</div>
			</div>
			{/* </nav> */}
		</header>
	);
}

// const Nav = () => {
// 	const [open, setOpen] = useState(false);
// 	const navLinks = (
// 		<div className="flex flex-col md:flex-row md:items-center gap-4">
// 			{headerNavLinks.map((link) => (
// 				<div key={link.to} className="flex items-center gap-2">
// 					<Link
// 						to={link.to}
// 						className="flex items-center gap-2 text-slate-500 rounded-md px-3 py-1 hover:shadow-md text-sm font-semibold w-full"
// 						activeProps={{
// 							className:
// 								"bg-[linear-gradient(90deg,#015167,#44ac56)]  shadow-md text-white",
// 						}}
// 						key={link.to}
// 						onClick={() => setOpen(false)}
// 					>
// 						<link.icon className="w-5 h-5" />
// 						{link.label}
// 					</Link>
// 					<div className="h-4 w-px bg-slate-900 hidden md:block" />
// 				</div>
// 			))}
// 		</div>
// 	);
// 	return (
// 		<>
// 			<Drawer direction="right" open={open} onOpenChange={setOpen}>
// 				<DrawerTrigger asChild className="md:hidden">
// 					<Button
// 						size="icon"
// 						variant="outline"
// 						className="text-slate-500 shadow-md"
// 					>
// 						<Menu />
// 					</Button>
// 				</DrawerTrigger>

// 				<DrawerContent className="md:hidden p-4 w-full">
// 					<DrawerHeader>
// 						<DrawerTitle className="sr-only">Nav Menu</DrawerTitle>
// 						<DrawerDescription className="sr-only">
// 							Choose a page
// 						</DrawerDescription>
// 						<div className="flex justify-end w-full">
// 							<Button
// 								size="icon"
// 								variant="outline"
// 								className="text-slate-500 shadow-md"
// 								onClick={() => setOpen(false)}
// 							>
// 								<X />
// 							</Button>
// 						</div>
// 					</DrawerHeader>
// 					{navLinks}
// 				</DrawerContent>
// 			</Drawer>
// 			<nav className="hidden md:block">{navLinks}</nav>
// 		</>
// 	);
// };
