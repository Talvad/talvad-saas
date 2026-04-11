const FinalCta = () => {
	return (
		<section className="py-32 px-8 relative overflow-hidden bg-slate-50">
			<div className="absolute inset-0 bg-indigo-600/5 -z-10"></div>
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight mb-8 text-slate-900">
					Ready to step into the observatory?
				</h2>
				<p className="text-slate-600 text-lg mb-12 max-w-xl mx-auto">
					Join the 10,000+ teams who have transcended traditional workflows.
					Your future is waiting.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<button
						type="button"
						className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white font-headline font-extrabold rounded-xl text-lg shadow-xl shadow-indigo-500/20 active:scale-95 transition-all"
					>
						Create Your Workspace
					</button>
					<button
						type="button"
						className="w-full sm:w-auto px-10 py-5 font-headline font-bold text-slate-900 hover:text-indigo-600 transition-colors"
					>
						Talk to an Expert
					</button>
				</div>
				<p className="mt-8 text-sm text-slate-400 font-label">
					No credit card required. 14-day premium trial included.
				</p>
			</div>
		</section>
	);
};

export default FinalCta;
