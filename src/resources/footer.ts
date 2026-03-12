import type { FooterNavGroups } from "@/types";

export const footerNavGroups: FooterNavGroups = [
	{
		title: "Company",
		links: [
			{
				label: "Terms of Use",
				to: "/pricing",
			},
			{
				label: "Privacy Policy",
				to: "/features",
			},
			{
				label: "Cookie Policy",
				to: "/contact",
			},
		],
	},
	{
		title: "Product",
		links: [
			{
				label: "Features",
				to: "/features",
			},
			{
				label: "Something",
				to: "/pricing",
			},
			{
				label: "Something Else",
				to: "/contact",
			},
			{
				label: "And Something Else",
				to: "/contact",
			},
		],
	},
	{
		title: "Knowledge",
		links: [
			{
				label: "Blog",
				to: "/features",
			},
			{
				label: "Contact",
				to: "/pricing",
			},
			{
				label: "FAQs",
				to: "/contact",
			},
			{
				label: "Help Center",
				to: "/contact",
			},
		],
	},
	{
		title: "Something",
		links: [
			{
				label: "Features2",
				to: "/features",
			},
			{
				label: "Something2",
				to: "/pricing",
			},
			{
				label: "Something Else2",
				to: "/contact",
			},
			{
				label: "And Something Else2",
				to: "/contact",
			},
		],
	},
];
