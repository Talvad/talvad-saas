import {
	Braces,
	ChartColumnStacked,
	ChevronsLeftRightEllipsis,
	Cloud,
	Code,
	Component,
	Database,
	Shield,
	SquareTerminal,
	Zap,
} from "lucide-react";

const FeatureGrid = () => {
	return (
		<section className="py-32 px-8 max-w-7xl mx-auto">
			<div className="mb-20">
				<h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight mb-6 ">
					Designed for the <span className="text-indigo-600">0.1%.</span>
				</h2>
				<p className="text-on-surface-variant max-w-xl text-lg">
					We stripped away the noise to give you pure, unadulterated focus. Your
					workflow, magnified.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
				{/* <!-- Feature 1: Large --> */}
				<div className="md:col-span-8 bg-surface-container rounded-2xl p-8 flex flex-col justify-between min-h-[400px] group hover:bg-surface-container-high transition-colors">
					<div>
						<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
							<ChartColumnStacked />
						</div>
						<h3 className="text-2xl font-headline font-bold mb-4 ">
							Neural Data Synthesis
						</h3>
						<p className="text-on-surface-variant leading-relaxed max-w-md">
							Our proprietary engine connects your disparate data sources and
							visualizes them through a single lens of truth.
						</p>
					</div>
					<div className="mt-8 rounded-xl overflow-hidden outline outline-outline-variant/15">
						<img
							alt="Data Synthesis Visualization"
							className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
							src="./images/homepage/neural_network.png"
						/>
					</div>
				</div>
				{/* <!-- Feature 2: Small --> */}
				<div className="md:col-span-4 bg-surface-container-highest rounded-2xl p-8 flex flex-col group hover:bg-surface-bright transition-colors">
					<div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
						<Zap />
					</div>
					<h3 className="text-2xl font-headline font-bold mb-4">
						Real-time Velocity
					</h3>
					<p className="text-on-surface-variant leading-relaxed">
						Zero latency synchronization across your global workforce. If it
						happens there, you see it here. Instantly.
					</p>
					<div className="mt-auto pt-8">
						<div className="flex items-center gap-1">
							<div className="h-1 w-full bg-tertiary/20 rounded-full overflow-hidden">
								<div className="h-full w-4/5 bg-tertiary shadow-[0_0_10px_#ffa4e4]"></div>
							</div>
							<span className="text-[10px] font-bold text-tertiary ml-2 text-nowrap">
								99.9%
							</span>
						</div>
					</div>
				</div>
				{/* <!-- Feature 3: Small --> */}
				<div className="md:col-span-4 bg-surface-container-high rounded-2xl p-8 group hover:bg-surface-container transition-colors">
					<div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
						<Shield />
					</div>
					<h3 className="text-2xl font-headline font-bold mb-4">
						Fortress Protocol
					</h3>
					<p className="text-on-surface-variant leading-relaxed">
						Enterprise-grade encryption is our baseline. Your data never leaves
						your governance zone.
					</p>
				</div>
				{/* <!-- Feature 4: Large --> */}
				<div className="md:col-span-8 bg-surface-container-low rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
					<div className="flex-1">
						<div className="w-12 h-12 rounded-xl bg-primary-dim/10 flex items-center justify-center text-primary-dim mb-6">
							<Component />
						</div>
						<h3 className="text-2xl font-headline font-bold mb-4">
							Unified Ecosystem
						</h3>
						<p className="text-on-surface-variant leading-relaxed">
							Native integrations with 100+ platforms. Stop context switching
							and start executing.
						</p>
					</div>
					<div className="flex-1 grid grid-cols-3 gap-3">
						<div className="aspect-square bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant/10">
							<SquareTerminal className="text-on-surface-variant" />
						</div>
						<div className="aspect-square bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant/10">
							<Database className="text-on-surface-variant" />
						</div>
						<div className="aspect-square bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant/10">
							<Cloud className="text-on-surface-variant" />
						</div>
						<div className="aspect-square bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant/10">
							<Braces className="text-on-surface-variant" />
						</div>
						<div className="aspect-square bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant/10">
							<Code className="text-on-surface-variant" />
						</div>
						<div className="aspect-square bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant/10">
							<ChevronsLeftRightEllipsis className="text-on-surface-variant" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureGrid;
