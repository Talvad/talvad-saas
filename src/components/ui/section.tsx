import { cn } from "#/lib/utils";

const Section = ({ className, ...props }: React.ComponentProps<"section">) => {
	return (
		<section className={cn("container mx-auto px-4 ", className)} {...props} />
	);
};

export default Section;
