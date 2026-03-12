import { Link } from "@tanstack/react-router";
import { Menu, Moon, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/ui/logo";
import { headerNavLinks } from "@/resources";
import { Button } from "./ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./ui/drawer";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 shadow-md px-4 py-6 backdrop-blur-lg flex justify-between items-center">
			<Logo />
			<div className="flex items-center gap-4">
				<Nav />
				<button type="button" className="text-slate-500">
					<Moon />
				</button>
			</div>
		</header>
	);
}

const Nav = () => {
	const [open, setOpen] = useState(false);
	const navLinks = (
		<div className="flex flex-col md:flex-row md:items-center gap-4">
			{headerNavLinks.map((link) => (
				<div key={link.to} className="flex items-center gap-2">
					<Link
						to={link.to}
						className="flex items-center gap-2 text-slate-500 rounded-md px-3 py-1 hover:shadow-md text-sm font-semibold w-full"
						activeProps={{
							className:
								"bg-[linear-gradient(90deg,#015167,#44ac56)]  shadow-md text-white",
						}}
						key={link.to}
						onClick={() => setOpen(false)}
					>
						<link.icon className="w-5 h-5" />
						{link.label}
					</Link>
					<div className="h-4 w-px bg-slate-900 hidden md:block" />
				</div>
			))}
		</div>
	);
	return (
		<>
			<Drawer direction="right" open={open} onOpenChange={setOpen}>
				<DrawerTrigger asChild className="md:hidden">
					<Button
						size="icon"
						variant="outline"
						className="text-slate-500 shadow-md"
					>
						<Menu />
					</Button>
				</DrawerTrigger>

				<DrawerContent className="md:hidden p-4 w-full">
					<DrawerHeader>
						<DrawerTitle className="sr-only">Nav Menu</DrawerTitle>
						<DrawerDescription className="sr-only">
							Choose a page
						</DrawerDescription>
						<div className="flex justify-end w-full">
							<Button
								size="icon"
								variant="outline"
								className="text-slate-500 shadow-md"
								onClick={() => setOpen(false)}
							>
								<X />
							</Button>
						</div>
					</DrawerHeader>
					{navLinks}
				</DrawerContent>
			</Drawer>
			<nav className="hidden md:block">{navLinks}</nav>
		</>
	);
};
