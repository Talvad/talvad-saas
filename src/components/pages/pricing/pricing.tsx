import { BadgeCheck, CircleCheck, CircleX, Star } from "lucide-react";

const Pricing = () => {
	return (
		<section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
			{/* <!-- Starter Tier --> */}
			<div className="bg-surface-container-low rounded-xl p-8 flex flex-col h-full hover:bg-surface-container transition-colors duration-300">
				<div className="mb-8">
					<span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
						Basic Access
					</span>
					<h3 className="text-3xl font-headline font-extrabold text-on-surface mb-2">
						Starter
					</h3>
					<div className="flex items-baseline gap-1">
						<span className="text-4xl font-black text-on-background">$29</span>
						<span className="text-on-surface-variant text-sm font-label">
							/month
						</span>
					</div>
				</div>
				<ul className="space-y-4 mb-10 grow">
					<li className="flex items-center gap-3 text-on-surface">
						<CircleCheck className="text-primary size-3.5" />

						<span className="text-sm">5 Global Data Pipelines</span>
					</li>
					<li className="flex items-center gap-3 text-on-surface">
						<CircleCheck className="text-primary size-3.5" />
						<span className="text-sm">24-hour Data Retention</span>
					</li>
					<li className="flex items-center gap-3 text-on-surface">
						<CircleCheck className="text-primary size-3.5" />
						<span className="text-sm">Basic Observability Suite</span>
					</li>
					<li className="flex items-center gap-3 text-on-surface-variant opacity-50">
						<CircleX className="size-3.5" />
						<span className="text-sm">Advanced ML Insights</span>
					</li>
				</ul>
				<button
					type="button"
					className="w-full py-3 rounded-lg font-bold border border-outline-variant/15 text-primary hover:bg-surface-bright transition-all duration-200"
				>
					Select Starter
				</button>
			</div>
			{/* <!-- Professional Tier (Best Value) --> */}
			<div className="relative bg-surface-container-highest rounded-xl p-8 flex flex-col h-full border border-primary/20 shadow-[0_0_50px_rgba(155,168,255,0.1)] transform md:-translate-y-4">
				<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tertiary text-on-tertiary font-headline font-bold text-xs py-1 px-4 rounded-full tracking-wider uppercase">
					Best Value
				</div>
				<div className="mb-8">
					<span className="text-tertiary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
						Standard Beam
					</span>
					<h3 className="text-3xl font-headline font-extrabold text-on-surface mb-2">
						Professional
					</h3>
					<div className="flex items-baseline gap-1">
						<span className="text-4xl font-black text-on-background">$99</span>
						<span className="text-on-surface-variant text-sm font-label">
							/month
						</span>
					</div>
				</div>
				<ul className="space-y-4 mb-10 grow">
					<li className="flex items-center gap-3 text-on-surface">
						<BadgeCheck className="text-tertiary size-3.5 glow-gauge rounded-full" />

						<span className="text-sm font-semibold">
							Unlimited Data Pipelines
						</span>
					</li>
					<li className="flex items-center gap-3 text-on-surface">
						<BadgeCheck className="text-tertiary size-3.5 glow-gauge rounded-full" />
						<span className="text-sm">30-day Data Retention</span>
					</li>
					<li className="flex items-center gap-3 text-on-surface">
						<BadgeCheck className="text-tertiary size-3.5 glow-gauge rounded-full" />
						<span className="text-sm">Advanced ML Insights</span>
					</li>
					<li className="flex items-center gap-3 text-on-surface">
						<BadgeCheck className="text-tertiary size-3.5 glow-gauge rounded-full" />
						<span className="text-sm">Priority Beam Support</span>
					</li>
				</ul>
				<button
					type="button"
					className="w-full py-4 rounded-lg font-bold bg-primary text-on-primary-fixed hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg"
				>
					Go Professional
				</button>
			</div>
			{/* <!-- Enterprise Tier --> */}
			<div className="bg-surface-container-low rounded-xl p-8 flex flex-col h-full hover:bg-surface-container transition-colors duration-300">
				<div className="mb-8">
					<span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">
						Custom Constellation
					</span>
					<h3 className="text-3xl font-headline font-extrabold text-on-surface mb-2">
						Enterprise
					</h3>
					<div className="flex items-baseline gap-1">
						<span className="text-4xl font-black text-on-background">
							Custom
						</span>
					</div>
				</div>
				<ul className="space-y-4 mb-10 grow">
					<li className="flex items-center gap-3 text-on-surface">
						<Star className="text-primary size-3.5" />
						<span className="text-sm font-medium">
							Custom Retention Periods
						</span>
					</li>
					<li className="flex items-center gap-3 text-on-surface">
						<Star className="text-primary size-3.5" />
						<span className="text-sm">Dedicated Observatory Node</span>
					</li>
					<li className="flex items-center gap-3 text-on-surface">
						<Star className="text-primary size-3.5" />
						<span className="text-sm">White-glove Onboarding</span>
					</li>
					<li className="flex items-center gap-3 text-on-surface">
						<Star className="text-primary size-3.5" />
						<span className="text-sm">SLA &amp; Security Compliance</span>
					</li>
				</ul>
				<button
					type="button"
					className="w-full py-3 rounded-lg font-bold border border-outline-variant/15 text-primary hover:bg-surface-bright transition-all duration-200"
				>
					Contact Sales
				</button>
			</div>
		</section>
	);
};

export default Pricing;
