import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/pages/home/hero";
import ScrollClients from "@/components/pages/home/scroll-clients";
export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main className="bg-[url(/images/homepage/talvad_hero_bg.png)] container mx-auto px-4 pb-20">
			<Hero />
			<ScrollClients />
		</main>
	);
}
