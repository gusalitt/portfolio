import { cn } from "../../utils";

const badgeVariants = {
	default: "bg-primary text-popover hover:bg-primary/80",
	secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
	outline: "text-foreground border border-input hover:bg-accent hover:text-accent-foreground",
	destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
};

export default function Badge({ className, variant = "default", ...props }) {
	return (
		<div className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", 
            badgeVariants[variant], 
            className
        )} {...props} />
	);
}
