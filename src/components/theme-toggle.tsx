import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	// Initialize state as null to avoid hydration mismatch
	const [theme, setTheme] = useState<"light" | "dark" | null>(null);

	useEffect(() => {
		const isDark = document.documentElement.classList.contains("dark");
		setTheme(isDark ? "dark" : "light");
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);

		if (newTheme === "dark") {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	// Prevent rendering the button until we know the theme (avoids icon flickering)
	if (!theme) return <div className="p-4" />;

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="p-1 rounded-full border border-on-surface/10 bg-surface text-on-surface hover:opacity-80 transition-opacity"
		>
			{theme === "light" ? (
				<Moon className="size-4" />
			) : (
				<Sun className="size-4" />
			)}
		</button>
	);
}
