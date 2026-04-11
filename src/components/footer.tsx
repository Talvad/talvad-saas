export default function Footer() {
	return (
		<footer className="bg-slate-50 w-full border-t border-slate-200/15">
			<div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full">
				<div className="mb-6 md:mb-0">
					<div className="font-black text-lg text-slate-900 font-headline mb-2">
						TALVAD
					</div>
					<p className="font-manrope text-xs tracking-wide text-slate-400">
						© 2024 TALVAD. The Ethereal Lab Edition.
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-8 font-manrope text-xs tracking-wide">
					<a
						className="text-slate-500 hover:underline decoration-indigo-500 underline-offset-4 transition-all opacity-80 hover:opacity-100"
						href="#"
					>
						Privacy Policy
					</a>
					<a
						className="text-slate-500 hover:underline decoration-indigo-500 underline-offset-4 transition-all opacity-80 hover:opacity-100"
						href="#"
					>
						Terms of Service
					</a>
					<a
						className="text-slate-500 hover:underline decoration-indigo-500 underline-offset-4 transition-all opacity-80 hover:opacity-100"
						href="#"
					>
						Security
					</a>
					<a
						className="text-slate-500 hover:underline decoration-indigo-500 underline-offset-4 transition-all opacity-80 hover:opacity-100"
						href="#"
					>
						Status
					</a>
				</div>
				<div className="mt-6 md:mt-0 flex gap-4">
					<a
						className="text-slate-400 hover:text-indigo-600 transition-colors"
						href="#"
					>
						<span className="material-symbols-outlined text-lg">public</span>
					</a>
					<a
						className="text-slate-400 hover:text-indigo-600 transition-colors"
						href="#"
					>
						<span className="material-symbols-outlined text-lg">language</span>
					</a>
				</div>
			</div>
		</footer>
	);
}
