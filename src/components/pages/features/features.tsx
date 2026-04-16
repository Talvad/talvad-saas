import {
	ChartNoAxesCombined,
	Component,
	Layers2,
	PackageSearch,
	Rocket,
	ShieldBan,
	Users,
} from "lucide-react";

const Features = () => {
	return (
		<section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
			{/* <!-- Feature 1: Main Highlight (Real-time Collaboration) --> */}
			<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-8">
				<div className="relative z-10 h-full flex flex-col">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
							<Users />
						</div>
						<h3 className="text-2xl font-bold font-headline text-on-background">
							Real-time Collaboration
						</h3>
					</div>
					<p className="text-on-surface-variant text-lg mb-8 max-w-md leading-snug">
						Sync your entire team instantly. Our "Observatory" engine ensures
						zero-latency updates across all shared workspace modules.
					</p>
					<div className="mt-auto pt-8">
						<div className="flex -space-x-4">
							<div className="w-10 h-10 rounded-full border-2 border-surface-container bg-surface-container-highest flex items-center justify-center text-xs overflow-hidden">
								<span>S</span>
							</div>
							<div className="w-10 h-10 rounded-full border-2 border-surface-container bg-surface-container-highest flex items-center justify-center text-xs overflow-hidden">
								<span>T</span>
							</div>
							<div className="w-10 h-10 rounded-full border-2 border-surface-container bg-surface-container-highest flex items-center justify-center text-xs overflow-hidden text-primary font-bold">
								+12
							</div>
						</div>
						<div className="mt-4 flex items-center gap-2">
							<div className="h-1.5 w-32 bg-surface-container-highest rounded-full overflow-hidden">
								<div className="h-full bg-primary glow-gauge w-[85%]"></div>
							</div>
							<span className="text-xs text-on-surface-variant font-label">
								Active Presence
							</span>
						</div>
					</div>
				</div>
				{/* <!-- Decorative element --> */}
				<div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
			</div>
			{/* <!-- Feature 2: Automated Reporting --> */}
			<div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container p-8">
				<div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
					<ChartNoAxesCombined />
				</div>
				<h3 className="text-xl font-bold font-headline text-on-background mb-3">
					Automated Reporting
				</h3>
				<p className="text-on-surface-variant font-body mb-6">
					Data flows directly into stunning editorial layouts. Set it once, and
					let TALVAD curate your weekly insights.
				</p>
				<div className="p-4 rounded-lg bg-surface-container-highest flex flex-col gap-2">
					<div className="h-2 w-3/4 bg-tertiary/20 rounded"></div>
					<div className="h-2 w-full bg-tertiary/20 rounded"></div>
					<div className="h-2 w-1/2 bg-tertiary glow-gauge rounded"></div>
				</div>
			</div>
			{/* <!-- Feature 3: Smart Search --> */}
			<div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container p-8">
				<div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
					<PackageSearch />
				</div>
				<h3 className="text-xl font-bold font-headline text-on-background mb-3">
					Contextual Discovery
				</h3>
				<p className="text-on-surface-variant font-body">
					Navigate your workspace with a search engine that understands project
					hierarchy and temporal links.
				</p>
			</div>
			{/* <!-- Feature 4: Atmospheric Depth (Visualizer) --> */}
			<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-8 flex flex-col md:flex-row gap-8 items-center">
				<div className="flex-1">
					<div className="w-12 h-12 rounded-lg bg-primary-dim/10 flex items-center justify-center text-primary-dim mb-6">
						<Layers2 />
					</div>
					<h3 className="text-2xl font-bold font-headline text-on-background mb-4">
						Tonal Architecture
					</h3>
					<p className="text-on-surface-variant font-body leading-relaxed">
						Say goodbye to cluttered borders. Our UI uses tonal stacking to
						create natural visual boundaries that reduce cognitive load.
					</p>
				</div>
				<div className="flex-1 relative aspect-video w-full max-w-sm rounded-lg overflow-hidden glass-panel border border-outline-variant/10">
					<img
						className="w-full h-full object-cover opacity-40 mix-blend-screen"
						data-alt="abstract technological digital interface with circuit board patterns and glowing blue data lines"
						alt="abstract technological digital interface with circuit board patterns and glowing blue data lines"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDohN4WWvBjC8hPcovRW5Ng8MKNdLrM0MmRVfUI2m-X7P0fKgvtRe8B0BxUHj1daRNHUJ4qpZWWEgFtuwYwvLU6qnf8NiJri6-3qiO25ntd2ntXaQMETlIVNnLdfsmVPao1IWsuK82UhEoZHkW9Mp4nC1wuezbQWkVVVljXoa3aTke_qdG3AxPphSvqQqnhpp_CBEWTlToYkVLXcuoIv0tPBFTsVkYfqH96I6JQ-XoGdsWv6hsBMldty7w9j0FxhqXlpq8C48pgLA-j"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent"></div>
				</div>
			</div>
			{/* <!-- Row 3 --> */}
			<div className="md:col-span-4 group rounded-xl bg-surface-container p-8">
				<div className="w-10 h-10 rounded-lg bg-outline-variant/20 flex items-center justify-center text-on-surface-variant mb-4">
					<ShieldBan />
				</div>
				<h4 className="font-bold text-on-background mb-2">
					Military-Grade Encryption
				</h4>
				<p className="text-sm text-on-surface-variant leading-relaxed">
					End-to-end security protocols that protect your most sensitive
					strategic data assets.
				</p>
			</div>
			<div className="md:col-span-4 group rounded-xl bg-surface-container p-8">
				<div className="w-10 h-10 rounded-lg bg-outline-variant/20 flex items-center justify-center text-on-surface-variant mb-4">
					<Component />
				</div>
				<h4 className="font-bold text-on-background mb-2">
					Extensible API Hub
				</h4>
				<p className="text-sm text-on-surface-variant leading-relaxed">
					Connect your existing tech stack seamlessly with our robust,
					documented API ecosystem.
				</p>
			</div>
			<div className="md:col-span-4 group rounded-xl bg-surface-container p-8">
				<div className="w-10 h-10 rounded-lg bg-outline-variant/20 flex items-center justify-center text-on-surface-variant mb-4">
					<Rocket />
				</div>
				<h4 className="font-bold text-on-background mb-2">
					Instant Deployment
				</h4>
				<p className="text-sm text-on-surface-variant leading-relaxed">
					Provision new workspace environments in seconds without touching a
					single line of code.
				</p>
			</div>
		</section>
	);
};

export default Features;
