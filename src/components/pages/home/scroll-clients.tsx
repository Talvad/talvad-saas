import { Image } from "#/components/ui/image";
import InfiniteScroll from "#/components/ui/infinite-scroll";
import Section from "#/components/ui/section";
import { H6 } from "#/components/ui/typography";

const partners = [
	{
		img: "/images/homepage/partners/logoipsum-logo-1.svg",
		alt: "Logoipsum1",
	},
	{
		img: "/images/homepage/partners/logoipsum-logo-2.svg",
		alt: "Logoipsum2",
	},
	{
		img: "/images/homepage/partners/logoipsum-logo-3.svg",
		alt: "Logoipsum3",
	},
	{
		img: "/images/homepage/partners/logoipsum-logo-4.svg",
		alt: "Logoipsum4",
	},
	{
		img: "/images/homepage/partners/logoipsum-logo-5.svg",
		alt: "Logoipsum5",
	},
	{
		img: "/images/homepage/partners/logoipsum-logo-6.svg",
		alt: "Logoipsum6",
	},
	{
		img: "/images/homepage/partners/logoipsum-logo-7.svg",
		alt: "Logoipsum7",
	},
];
const ScrollClients = () => {
	return (
		<Section className="py-10 space-y-8">
			<H6 className="text-center uppercase font-bold ">
				official partners with
			</H6>
			<InfiniteScroll>
				{partners.map((partner) => (
					<div
						key={partner.alt}
						className="flex items-center justify-center w-64 h-10 border rounded-lg bg-white"
					>
						<Image alt={partner.alt} className="p-2" src={partner.img} />
					</div>
				))}
			</InfiniteScroll>
		</Section>
	);
};

export default ScrollClients;
