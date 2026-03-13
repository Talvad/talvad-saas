import { cn } from "#/lib/utils";

const Image = ({ className, alt, ...props }: React.ComponentProps<"img">) => {
	return (
		<img loading="lazy" {...props} className={cn("", className)} alt={alt} />
	);
};

export { Image };
