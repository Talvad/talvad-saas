import { ArrowRight } from "lucide-react";

const Hero = () => {
	return (
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
					<span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-violet-600 to-purple-600">
						Digital Flow.
					</span>
				</h1>
				<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
					The Neon Observatory for modern teams. Consolidate your fragmented
					stack into a single, high-fidelity command center powered by
					intelligence.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
					<button
						type="button"
						className="flex items-center group relative px-8 py-4 bg-indigo-600 text-white font-headline font-bold rounded-xl transition-all hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)] active:scale-95"
					>
						Start Building Free
						<ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
					</button>
					<button
						type="button"
						className="px-8 py-4 bg-white text-slate-900 font-headline font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors active:scale-95"
					>
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
	);
};

export default Hero;
