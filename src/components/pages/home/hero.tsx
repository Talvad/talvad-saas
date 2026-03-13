import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "#/components/ui/carousel";
import { Image } from "#/components/ui/image";
import { DottedTitle, H1, H5, P, Sm } from "#/components/ui/typography";
import Section from "@/components/ui/section";

const Hero = () => {
	return (
		<Section>
			<div className="py-10">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
					<div className="space-y-4">
						<DottedTitle>the coolest, saas product you have seen</DottedTitle>
						<H1>Make your life easier with our SaaS</H1>
						<P>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
							ab ratione tempore nostrum delectus doloremque temporibus voluptas
							nam deserunt sed! Error atque, amet reiciendis vitae voluptatibus
							quas provident dicta eligendi!
						</P>
					</div>
					<HeroAnimation />
				</div>
			</div>
		</Section>
	);
};

export default Hero;
const heroAnimationData = [
	{
		img: "/images/homepage/hero/research.svg",
		alt: "Research",
		description: "Constant Research on latest trends to implement ideas",
	},
	{
		img: "/images/homepage/hero/plan.svg",
		alt: "Plan",
		description: "Plan your business with our SaaS",
	},
	{
		img: "/images/homepage/hero/implement.svg",
		alt: "Implement",
		description: "Implement your business with our SaaS",
	},
	{
		img: "/images/homepage/hero/improve.svg",
		alt: "Improve",
		description: "Improve your business with our SaaS",
	},
	{
		img: "/images/homepage/hero/repeat.svg",
		alt: "Repeat",
		description: "Repeat your business with our SaaS",
	},
];
const HeroAnimation = () => {
	return (
		<div className="flex items-center justify-center">
			<Carousel
				opts={{ align: "start", loop: true }}
				orientation="vertical"
				className="w-full md:w-2/3 lg:w-1/2"
				plugins={[Autoplay()]}
			>
				<CarouselContent className="h-[200px] mt-1 gap-4">
					{heroAnimationData.map((item) => (
						<CarouselItem
							key={item.alt}
							className="flex flex-col items-center gap-2 border rounded-lg p-4 shadow-lg bg-white dark:bg-gray-800"
						>
							<Image src={item.img} alt={item.alt} className="w-20 h-20" />
							<H5>{item.alt}</H5>
							<Sm className="text-center">{item.description}</Sm>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};
