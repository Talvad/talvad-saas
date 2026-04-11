import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main className="pt-16">
			{/* <!-- Hero Section --> */}
			<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-8">
				<div className="absolute inset-0 glass-glow -z-10"></div>
				<div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
				<div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/5 rounded-full blur-[120px]"></div>
				<div className="max-w-5xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 mb-8 border border-indigo-100/50">
						<span className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_#4f46e5]"></span>
						<span className="text-xs font-label font-bold tracking-wider text-indigo-700 uppercase">
							New: Workflow Automations 2.0
						</span>
					</div>
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tight mb-8 text-slate-900">
						Optimize Your{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
							Digital Flow.
						</span>
					</h1>
					<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
						The Neon Observatory for modern teams. Consolidate your fragmented
						stack into a single, high-fidelity command center powered by
						intelligence.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
						<button className="group relative px-8 py-4 bg-indigo-600 text-white font-headline font-bold rounded-xl transition-all hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)] active:scale-95">
							Start Building Free
							<span className="ml-2 material-symbols-outlined align-middle transition-transform group-hover:translate-x-1">
								arrow_forward
							</span>
						</button>
						<button className="px-8 py-4 bg-white text-slate-900 font-headline font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors active:scale-95">
							View Demo
						</button>
					</div>
					<div className="mt-20 relative px-4">
						<div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-indigo-100 bg-white p-2">
							<img
								alt="SaaS Dashboard Preview"
								className="rounded-xl w-full"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe1uovIh2acODtTfBXUUaV2_6NVXLMSHPi_l5u3z4jHQ6Arp6iWxS78RmHEzzqCquiPpi0nv4rgN82JymreXrn3G9D92bYUw6oeHz6qqR4zdYMOAxcbiKkyozV0EY4HAVxZ7SrvHoGFfQeSLEct5VJtlXRBKF96JXUuzEDS45Ofxgn5g-nbfdb2xPLYJIWl6se6EDGudB_-Z0lFPx0h_C5HqVhYbTJ0KEUWue_B6adbEluPDnT2p9xNhJJTXEzWeSeBlJf9TlTWjs7"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Social Proof Section --> */}
			<section className="py-24 bg-slate-50">
				<div className="max-w-7xl mx-auto px-8">
					<p className="text-center text-slate-400 font-label text-sm uppercase tracking-[0.2em] mb-12">
						Trusted by the innovators at
					</p>
					<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
						<img
							alt="Company Logo"
							className="h-8 md:h-10 invert-0"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIpvi7MjUr_KwSgAYFOSWK8BD7ZiqNtQ27gkvfy0O-KHVaszfVzlknKVsRzy5OjJp5j821sgPJCKCIz9ZpahLe4v3LPkGl3IT7gtfOkNXzSYUGq8fh2Vt__MySFIym_BKLTiGX7wS5Ul3yDDUl-k556TqL5guMIPZNRL9N7f5yD-kpAla683Rq12apS7Ltm6Wpdx_8m1h4S-AFilUdJcWlajPOosCCNvEGQwi2SQUQ_lPquAf-DOeH7FIAA1R1ziKLBs9BKHyLUHwV"
						/>
						<img
							alt="Company Logo"
							className="h-8 md:h-10 invert-0"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvYvlrNnb5psjogjM4NdbQQOQCSMOaSj_4l79MDa07G9G5WKP6HvOmhL7akr5jzBE3NDlSq_dAUTNh9SsvE0S78ZilZQYib9l_7AAZNUKhbzVXSP6aXvD_fQSXITiKWIToAEn1SoF8r-3N7MJU5QGdbho2he5tj0CejTdZiyj-2nd59zZL_WfIXye9uYZYw0VscH7NdPD0xG8tvXD63PaUNAYAYMxs6vp1nEE88jpjcQGUUz6E1UIxmVhuo6ZQ1733-mpucNAm1zAQ"
						/>
						<img
							alt="Company Logo"
							className="h-8 md:h-10 invert-0"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKeyoW30YwSk32EYQSSVlgdLaCpalWJMHqk4HZH62O_6BhP_ckFngkz0teV-qXAsrsQLXibrcYbxCBr7hHZMvkAqhp0HGxNr9WOVoelg3VEExmPXZj4dfcHwRZxkmrubmJi8m9ZxNb7nwqVoy1vs8v5G_YG_OF60CBJPa55Xuw7T9eU9hUr7M0i-kPecBUbtRrwqr6LMXC_gfDnok5q089w0bNPX9rTQ0qhyO2FnbZ_GrSWjFHcsBv7EVXDgj0jyypbvHRJO69OZPI"
						/>
						<img
							alt="Company Logo"
							className="h-8 md:h-10 invert-0"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeMsrkPBo3RXgaxlPLd3QFkZDWvKBc0gC9zkPhuktT_4C7reqhF6RhMTZj4VkW9FQfsSvjg3XdwQ6kHAOLkwlKv3-3UJsWOA8x8gVYg1o9hNjc7wO8yA1cmAeyPU4yinnHXT_IDQJ8DzOdneVhgKOvJKRPSDYJRfPur5dfyBoVmwoR3zbwCPsjzdZe0fOtwluSOei6zPO7StH0qIxFPeQ0IDIewrM_23W__wA99CEiA8u-L9PRJ9bMx5Ua57FrhQtnjFN163xHoPxq"
						/>
						<img
							alt="Company Logo"
							className="h-8 md:h-10 invert-0"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdghBCTIESmdMLu0emefFwZSnFOb3ALUeMfrFeqmQnSc15l9Jh7b2fbeaeo1e8OgV_ztaOH_KUkqTNXVYYavuXh4yV8Z4Q-PxMqSAOQN6n8f7DJBgtvV_3Gr7rxJdHCPDrhIbzFO4Heh8UJx4iKbjfLgP4Fv7mXkmTeUe__YyBLc7LwfcwYTnw91CYJgVNBTCfjiUiTehe0oaZf0l5dYTT-4WSzRN5pVx6NELhxmDmhfQBqRKxxcra1d60yWA-5a-sFmy60bwh1IqY"
						/>
					</div>
				</div>
			</section>
			{/* <!-- Feature Grid --> */}
			<section className="py-32 px-8 max-w-7xl mx-auto">
				<div className="mb-20">
					<h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight mb-6 text-slate-900">
						Designed for the <span className="text-indigo-600">0.1%.</span>
					</h2>
					<p className="text-slate-600 max-w-xl text-lg">
						We stripped away the noise to give you pure, unadulterated focus.
						Your workflow, magnified.
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
							Enterprise-grade encryption is our baseline. Your data never
							leaves your governance zone.
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
			{/* <!-- Final CTA Section --> */}
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
						<button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white font-headline font-extrabold rounded-xl text-lg shadow-xl shadow-indigo-500/20 active:scale-95 transition-all">
							Create Your Workspace
						</button>
						<button className="w-full sm:w-auto px-10 py-5 font-headline font-bold text-slate-900 hover:text-indigo-600 transition-colors">
							Talk to an Expert
						</button>
					</div>
					<p className="mt-8 text-sm text-slate-400 font-label">
						No credit card required. 14-day premium trial included.
					</p>
				</div>
			</section>
		</main>
		// <main className="bg-[url(/images/homepage/hero/hero_bg.png)] dark:bg-[url(/images/homepage/hero/hero_bg_dark.png)]  pb-70 -mb-70">
		// 	<Hero />
		// 	<ScrollClients />
		// </main>
	);
}
