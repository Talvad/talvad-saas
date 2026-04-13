import { ChevronDown } from "lucide-react";

const Faq = () => {
	return (
		<section className="max-w-4xl mx-auto">
			<h2 className="text-3xl md:text-4xl font-headline font-black mb-12 text-center tracking-tight">
				Frequently Asked Questions
			</h2>
			<div className="space-y-4">
				<div className="bg-surface-container-low rounded-lg p-6">
					<h4 className="text-lg font-bold text-primary mb-2 flex items-center justify-between">
						Can I switch plans at any time?
						<ChevronDown />
					</h4>
					<p className="text-on-surface-variant leading-relaxed">
						Yes, you can upgrade or downgrade your plan directly from your
						dashboard settings. Upgrades take effect immediately, while
						downgrades apply at the start of your next billing cycle.
					</p>
				</div>
				<div className="bg-surface-container-low rounded-lg p-6">
					<h4 className="text-lg font-bold text-primary mb-2 flex items-center justify-between">
						What is "Data Retention" specifically?
						<ChevronDown />
					</h4>
					<p className="text-on-surface-variant leading-relaxed">
						Data retention refers to the period during which we store your
						full-fidelity observability logs and metrics. After this period,
						data is aggregated or archived depending on your configuration.
					</p>
				</div>
				<div className="bg-surface-container-low rounded-lg p-6">
					<h4 className="text-lg font-bold text-primary mb-2 flex items-center justify-between">
						Do you offer academic discounts?
						<ChevronDown />
					</h4>
					<p className="text-on-surface-variant leading-relaxed">
						Absolutely. We support the research community. Students and academic
						institutions can apply for a 50% discount on any Professional tier
						beam.
					</p>
				</div>
				<div className="bg-surface-container-low rounded-lg p-6">
					<h4 className="text-lg font-bold text-primary mb-2 flex items-center justify-between">
						How secure is my observatory data?
						<ChevronDown />
					</h4>
					<p className="text-on-surface-variant leading-relaxed">
						Security is our foundation. All data is encrypted at rest (AES-256)
						and in transit (TLS 1.3). We are SOC2 Type II compliant and perform
						regular third-party audits.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Faq;
