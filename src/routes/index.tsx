import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/pages/home/hero";
import ScrollClients from "@/components/pages/home/scroll-clients";
export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main className="bg-[url(/images/homepage/hero/hero_bg.png)] dark:bg-[url(/images/homepage/hero/hero_bg_dark.png)]  pb-70 -mb-70">
			<Hero />
			<ScrollClients />
		</main>
	);
}
