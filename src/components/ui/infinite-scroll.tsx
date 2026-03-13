const InfiniteScroll = ({
	className = "",
	children,
}: React.ComponentProps<"div">) => {
	return (
		<div className="flex space-x-10 overflow-hidden group">
			<div
				className={`flex space-x-10 animate-infinite-scroll group-hover:paused ${className}`}
			>
				{children}
			</div>
			<div
				className={`flex space-x-10 animate-infinite-scroll group-hover:paused ${className}`}
				aria-hidden="true"
			>
				{children}
			</div>
		</div>
	);
};

export default InfiniteScroll;
