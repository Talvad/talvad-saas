const Cta = () => {
	return (
		<section className="max-w-4xl mx-auto mt-32 text-center py-20 px-8 rounded-3xl bg-surface-container-high relative overflow-hidden">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
			<h2 className="text-3xl md:text-4xl font-black font-headline text-on-background mb-6">
				Ready to see the future?
			</h2>
			<p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
				Join the observatory and transform how your team visualizes complex
				systems.
			</p>
			<div className="flex flex-col sm:flex-row justify-center gap-4">
				<button
					type="button"
					className="bg-primary text-on-primary-fixed px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all"
				>
					Start Free Trial
				</button>
				<button
					type="button"
					className="px-8 py-3.5 rounded-xl font-bold border border-outline-variant/20 text-primary hover:bg-surface-bright transition-all"
				>
					Request Demo
				</button>
			</div>
		</section>
	);
};

export default Cta;
