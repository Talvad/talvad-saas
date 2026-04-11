import { createFileRoute } from "@tanstack/react-router";
import FeatureGrid from "#/components/pages/home/feature-grid";
import FinalCta from "#/components/pages/home/final-cta";
import Hero from "#/components/pages/home/hero";
import SocialProof from "#/components/pages/home/social-proof";
export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main className="pt-16">
			{/* <!-- Hero Section --> */}
			<Hero />
			{/* <!-- Social Proof Section --> */}
			<SocialProof />
			{/* <!-- Feature Grid --> */}
			<FeatureGrid />
			{/* <!-- Final CTA Section --> */}
			<FinalCta />
		</main>
		// <main className="bg-[url(/images/homepage/hero/hero_bg.png)] dark:bg-[url(/images/homepage/hero/hero_bg_dark.png)]  pb-70 -mb-70">
		// 	<Hero />
		// 	<ScrollClients />
		// </main>
	);
}
