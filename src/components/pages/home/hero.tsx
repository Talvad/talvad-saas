const Hero = () => {
	return (
		<section className="bg-[url(/images/homepage/talvad_hero_bg.png)] w-full min-h-screen bg-cover bg-center">
			<div className="container mx-auto py-10">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
					<div className="text-black">
						<div className="flex items-center gap-2 mb-4">
							<span className="inline-block h-4 w-4 bg-green-700"></span>
							<span className="text-sm md:text-base  font-semibold uppercase">
								the coolest, saas product you have seen
							</span>
						</div>
						<h1 className="text-4xl md:text-7xl font-bold mb-4">
							Make your life easier with our SaaS
						</h1>
						<p className="text-xl text-slate-800 mb-4">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
							ab ratione tempore nostrum delectus doloremque temporibus voluptas
							nam deserunt sed! Error atque, amet reiciendis vitae voluptatibus
							quas provident dicta eligendi!
						</p>
					</div>
					<HeroAnimation />
				</div>
			</div>
		</section>
	);
};

export default Hero;
const HeroAnimation = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="w-2/3 h-[300px] relative">
				<span className="absolute top-0 left-0 w-5 h-5 bg-green-700 rounded-full animate-run"></span>
				<img
					src="/images/homepage/research.svg"
					alt="Research"
					className="w-20 h-20 absolute top-0 left-0 animate-[bounce_2s_ease-in-out_infinite]"
				/>
				<img
					src="/images/homepage/plan.svg"
					alt="Plan"
					className="w-20 h-20 absolute top-0 right-0 animate-[bounce_2s_ease-in-out_infinite]"
				/>
				<img
					src="/images/homepage/implement.svg"
					alt="Implement"
					className="w-20 h-20 absolute bottom-0 left-0 animate-[bounce_2s_ease-in-out_infinite]"
				/>
				<img
					src="/images/homepage/improve.svg"
					alt="Improve"
					className="w-20 h-20 absolute bottom-0 right-0 animate-[bounce_2s_ease-in-out_infinite]"
				/>
				<img
					src="/images/homepage/repeat.svg"
					alt="Repeat"
					className="w-20 h-20 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animate-round"
				/>
			</div>
		</div>
	);
};
