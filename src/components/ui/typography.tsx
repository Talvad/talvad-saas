import { cn } from "#/lib/utils";

function H1({ className, ...props }: React.ComponentProps<"h1">) {
	return <h1 {...props} className={cn("", className)} />;
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
	return <h5 {...props} className={cn("", className)} />;
}

function H6({ className, ...props }: React.ComponentProps<"h6">) {
	return <h6 {...props} className={cn("", className)} />;
}

export { H1, H2, H3, H4, H5, H6 };
