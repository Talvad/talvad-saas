const FeatureGrid = () => {
	return (
		<section className="py-32 px-8 max-w-7xl mx-auto">
			<div className="mb-20">
				<h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight mb-6 text-slate-900">
					Designed for the <span className="text-indigo-600">0.1%.</span>
				</h2>
				<p className="text-slate-600 max-w-xl text-lg">
					We stripped away the noise to give you pure, unadulterated focus. Your
					workflow, magnified.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
				{/* <!-- Feature 1: Large --> */}
				<div className="md:col-span-8 bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between min-h-[400px] group hover:border-indigo-300 transition-all hover:shadow-xl hover:shadow-indigo-500/5">
					<div>
						<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
							<span className="material-symbols-outlined">analytics</span>
						</div>
						<h3 className="text-2xl font-headline font-bold mb-4 text-slate-900">
							Neural Data Synthesis
						</h3>
						<p className="text-slate-600 leading-relaxed max-w-md">
							Our proprietary engine connects your disparate data sources and
							visualizes them through a single lens of truth.
						</p>
					</div>
					<div className="mt-8 rounded-xl overflow-hidden border border-slate-100">
						<img
							alt="Data Synthesis Visualization"
							className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIHf_EMn9rFZRupsT1IWVheOcabRAtkjH5paYTTAiYIUZllI6-HG_p1WZux0S6Wzd_njPmzXR5IDWGNBZ7a_Q6o750-S1i9aO_Jqt7b9Sd1zdbMT4gJLBEDwsOuxVH-lnoxB7m7gTojlVo3OkCtKhbAJG4gCqxDdkxCa5DZwxGH-ToQaHPVfT_EnZBAwoaGWeZ5GJzF7a3WSNgEyjILnUW8y0J23DljCrggq8_Ayus7ABuRgw_xIfn73cKwJZgLnBGwHICComImtwY"
						/>
					</div>
				</div>
				{/* <!-- Feature 2: Small --> */}
				<div className="md:col-span-4 bg-indigo-50 border border-indigo-100 rounded-2xl p-8 flex flex-col group hover:bg-indigo-100/50 transition-colors">
					<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
						<span className="material-symbols-outlined">bolt</span>
					</div>
					<h3 className="text-2xl font-headline font-bold mb-4 text-indigo-900">
						Real-time Velocity
					</h3>
					<p className="text-indigo-800/70 leading-relaxed">
						Zero latency synchronization across your global workforce. If it
						happens there, you see it here. Instantly.
					</p>
					<div className="mt-auto pt-8">
						<div className="flex items-center gap-1">
							<div className="h-2 w-full bg-indigo-200/50 rounded-full overflow-hidden">
								<div className="h-full w-4/5 bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.3)]"></div>
							</div>
							<span className="text-[10px] font-bold text-indigo-600 ml-2">
								99.9%
							</span>
						</div>
					</div>
				</div>
				{/* <!-- Feature 3: Small --> */}
				<div className="md:col-span-4 bg-white border border-slate-200 rounded-2xl p-8 group hover:border-indigo-300 transition-colors">
					<div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 mb-6">
						<span className="material-symbols-outlined">shield</span>
					</div>
					<h3 className="text-2xl font-headline font-bold mb-4 text-slate-900">
						Fortress Protocol
					</h3>
					<p className="text-slate-600 leading-relaxed">
						Enterprise-grade encryption is our baseline. Your data never leaves
						your governance zone.
					</p>
				</div>
				{/* <!-- Feature 4: Large --> */}
				<div className="md:col-span-8 bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
					<div className="flex-1">
						<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
							<span className="material-symbols-outlined">hub</span>
						</div>
						<h3 className="text-2xl font-headline font-bold mb-4 text-slate-900">
							Unified Ecosystem
						</h3>
						<p className="text-slate-600 leading-relaxed">
							Native integrations with 100+ platforms. Stop context switching
							and start executing.
						</p>
					</div>
					<div className="flex-1 grid grid-cols-3 gap-3">
						<div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
							<span className="material-symbols-outlined">terminal</span>
						</div>
						<div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
							<span className="material-symbols-outlined">database</span>
						</div>
						<div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
							<span className="material-symbols-outlined">cloud</span>
						</div>
						<div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
							<span className="material-symbols-outlined">api</span>
						</div>
						<div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
							<span className="material-symbols-outlined">code</span>
						</div>
						<div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
							<span className="material-symbols-outlined">
								settings_ethernet
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureGrid;
