const FinalCta = () => {
	return (
		<section className="py-32 px-8 relative overflow-hidden ">
			<div className="absolute inset-0 bg-primary/5 -z-10"></div>
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight mb-8 ">
					Ready to step into the observatory?
				</h2>
				<p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto">
					Join the 10,000+ teams who have transcended traditional workflows.
					Your future is waiting.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<button
						type="button"
						className="w-full sm:w-auto px-10 py-5 bg-primary  text-on-primary-fixed font-headline font-extrabold rounded-xl text-lg shadow-xl shadow-primary/20 active:scale-95 transition-all"
					>
						Create Your Workspace
					</button>
					<button
						type="button"
						className="w-full sm:w-auto px-10 py-5 font-headline font-bold text-on-surface hover:text-primary transition-colors"
					>
						Talk to an Expert
					</button>
				</div>
				<p className="mt-8 text-sm text-on-surface-variant/60 font-label">
					No credit card required. 14-day premium trial included.
				</p>
			</div>
		</section>
	);
};

export default FinalCta;
