const Cta = () => {
	return (
		<section className="max-w-7xl mx-auto mt-32 relative overflow-hidden rounded-2xl bg-surface-container-highest p-12 text-center">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-[-50%] left-[-20%] w-full h-[200%] bg-primary/5 blur-[120px] rounded-full"></div>
			</div>
			<div className="relative z-10">
				<h2 className="text-4xl font-headline font-black mb-6">
					Ready to expand your horizon?
				</h2>
				<p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
					Join over 500 teams using TALVAD to monitor their most critical
					systems with neon precision.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button
						type="button"
						className="bg-primary text-on-primary font-bold px-8 py-4 rounded-lg hover:bg-primary-container transition-all"
					>
						Start Free Trial
					</button>
					<button
						type="button"
						className="bg-transparent border border-outline-variant text-primary font-bold px-8 py-4 rounded-lg hover:bg-surface-bright transition-all"
					>
						Schedule Demo
					</button>
				</div>
			</div>
		</section>
	);
};

export default Cta;
