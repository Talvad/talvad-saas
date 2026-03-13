import InfiniteScroll from "#/components/ui/infinite-scroll";
import Section from "#/components/ui/section";

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
		<Section className="py-10">
			<h3 className="text-sm font-bold text-center uppercase pb-10 text-slate-700">
				official partners with
			</h3>
			<InfiniteScroll>
				{partners.map((partner) => (
					<div
						key={partner.alt}
						className="flex items-center justify-center w-64 h-10 border rounded-lg bg-white"
					>
						<img src={partner.img} alt={partner.alt} className="p-2" />
					</div>
				))}
			</InfiniteScroll>
		</Section>
	);
};

export default ScrollClients;
