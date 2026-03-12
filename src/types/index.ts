import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type HeaderNavLink = {
	label: string;
	to: string;
	icon: LucideIcon;
};
export type HeaderNavLinks = HeaderNavLink[];

export type FooterNavLink = {
	label: string;
	to: string;
};
export type FooterNavGroup = {
	title: string;
	links: FooterNavLink[];
};
export type FooterNavGroups = FooterNavGroup[];

export type SocialLink = {
	label: string;
	to: string;
	icon: ReactNode;
};
export type SocialLinks = SocialLink[];
