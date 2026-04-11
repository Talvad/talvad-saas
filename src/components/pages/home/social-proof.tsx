const partners = [
	{
		name: "Logo Ipsum",
		logo: "./images/homepage/partners/logoipsum-logo-1.svg",
	},
	{
		name: "Logo Ipsum",
		logo: "./images/homepage/partners/logoipsum-logo-2.svg",
	},
	{
		name: "Logo Ipsum",
		logo: "./images/homepage/partners/logoipsum-logo-3.svg",
	},
	{
		name: "Logo Ipsum",
		logo: "./images/homepage/partners/logoipsum-logo-4.svg",
	},
	{
		name: "Logo Ipsum",
		logo: "./images/homepage/partners/logoipsum-logo-5.svg",
	},
	{
		name: "Logo Ipsum",
		logo: "./images/homepage/partners/logoipsum-logo-6.svg",
	},
	{
		name: "Logo Ipsum",
		logo: "./images/homepage/partners/logoipsum-logo-7.svg",
	},
];

const SocialProof = () => {
	return (
		<section className="py-24 bg-slate-50">
			<div className="max-w-7xl mx-auto px-8">
				<p className="text-center text-slate-400 font-label text-sm uppercase tracking-[0.2em] mb-12">
					Trusted by the innovators at
				</p>
				<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
					{partners.map((partner) => (
						<img
							key={partner.logo}
							alt={partner.name}
							className="h-8 md:h-10 invert-0"
							src={partner.logo}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default SocialProof;
