import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const ThemeToggle = () => {
	const [mode, setMode] = useState<string>("light");

	useEffect(() => {
		const stored = localStorage.getItem("theme");
		const initialMode = stored === "dark" ? "dark" : "light";
		setMode(initialMode);

		// Ensure document is in sync on mount
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(initialMode);
		document.documentElement.setAttribute("data-theme", initialMode);
	}, []);

	const toggleMode = useCallback(() => {
		setMode((prev) => {
			const nextMode = prev === "light" ? "dark" : "light";
			document.documentElement.classList.remove("light", "dark");
			document.documentElement.classList.add(nextMode);
			document.documentElement.setAttribute("data-theme", nextMode);
			localStorage.setItem("theme", nextMode);
			return nextMode;
		});
	}, []);
	return (
		<button
			onClick={toggleMode}
			className="p-2 cursor-pointer text-slate-500"
			type="button"
		>
			{mode === "light" ? (
				<Moon className="w-5 h-5" />
			) : (
				<Sun className="w-5 h-5" />
			)}
		</button>
	);
};

export default ThemeToggle;
