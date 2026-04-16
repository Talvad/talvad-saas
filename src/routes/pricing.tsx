import { createFileRoute } from "@tanstack/react-router";
import Cta from "#/components/pages/pricing/cta";
import Faq from "#/components/pages/pricing/faq";
import Hero from "#/components/pages/pricing/hero";
import Pricing from "#/components/pages/pricing/pricing";

export const Route = createFileRoute("/pricing")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="pt-32 pb-20 px-6">
			{/* <!-- Hero Section --> */}
			<Hero />
			{/* <!-- Pricing Bento Grid --> */}
			<Pricing />
			{/* <!-- FAQ Section --> */}
			<Faq />
			{/* <!-- CTA Section --> */}
			<Cta />
		</main>
	);
}
