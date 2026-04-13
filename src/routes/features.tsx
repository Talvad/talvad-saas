import { createFileRoute } from "@tanstack/react-router";
import Cta from "#/components/pages/features/cta";
import Features from "#/components/pages/features/features";
import Hero from "#/components/pages/features/hero";

export const Route = createFileRoute("/features")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="pt-32 pb-20 px-6">
			{/* <!-- Hero Section --> */}
			<Hero />
			{/* <!-- Features Bento Grid --> */}
			<Features />
			{/* <!-- CTA Section --> */}
			<Cta />
		</main>
	);
}
