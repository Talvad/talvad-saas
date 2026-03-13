import { cn } from "#/lib/utils";

function H1({ className, ...props }: React.ComponentProps<"h1">) {
	return (
		<h1
			{...props}
			className={cn("text-4xl md:text-7xl font-bold", className)}
		/>
	);
}

function H2({ className, ...props }: React.ComponentProps<"h2">) {
	return <h2 {...props} className={cn("", className)} />;
}

function H3({ className, ...props }: React.ComponentProps<"h3">) {
	return <h3 {...props} className={cn("", className)} />;
}

function H4({ className, ...props }: React.ComponentProps<"h4">) {
	return <h4 {...props} className={cn("", className)} />;
}

function H5({ className, ...props }: React.ComponentProps<"h5">) {
	return (
		<h5
			{...props}
			className={cn("text-xl font-semibold text-slate-800", className)}
		/>
	);
}

function H6({ className, ...props }: React.ComponentProps<"h6">) {
	return (
		<h6
			{...props}
			className={cn("text-sm font-semibold text-slate-800", className)}
		/>
	);
}
function DottedTitle({ className, ...props }: React.ComponentProps<"h2">) {
	return (
		<h2
			{...props}
			className={cn(
				'inline-flex items-center gap-2 before:content-[""] before:block before:w-4 before:h-4 before:bg-green-700 text-sm md:text-base font-semibold uppercase',
				className,
			)}
		/>
	);
}
function P({ className, ...props }: React.ComponentProps<"p">) {
	return <p {...props} className={cn("text-xl text-slate-800", className)} />;
}
function Sm({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span {...props} className={cn("text-sm text-slate-800", className)} />
	);
}
export { H1, H2, H3, H4, H5, H6, P, DottedTitle, Sm };
