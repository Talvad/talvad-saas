import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/pages/home/hero";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main className="bg-[url(/images/homepage/talvad_hero_bg.png)] container mx-auto px-4">
			<Hero />
		</main>
	);
}
