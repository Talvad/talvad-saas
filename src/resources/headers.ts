import { Boxes, ChartPie, Contact } from "lucide-react";
import type { HeaderNavLinks } from "@/types";

export const headerNavLinks: HeaderNavLinks = [
	{
		label: "Features",
		to: "/features",
		icon: ChartPie,
	},
	{
		label: "Pricing",
		to: "/pricing",
		icon: Boxes,
	},
	{
		label: "Contact",
		to: "/contact",
		icon: Contact,
	},
];
