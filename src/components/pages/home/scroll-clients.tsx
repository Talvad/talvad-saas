import InfiniteScroll from "#/components/ui/infinite-scroll";

const ScrollClients = () => {
	return (
		<InfiniteScroll className="w-full">
			<div className="flex items-center justify-center w-64 h-10 border rounded-lg">
				1
			</div>
			<div className="flex items-center justify-center w-64 h-10 border rounded-lg">
				2
			</div>
			<div className="flex items-center justify-center w-64 h-10 border rounded-lg">
				3
			</div>
			<div className="flex items-center justify-center w-64 h-10 border rounded-lg">
				4
			</div>
		</InfiniteScroll>
	);
};

export default ScrollClients;
