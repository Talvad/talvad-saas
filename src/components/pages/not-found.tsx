const NotFound = () => {
	return (
		<section>
			<img
				src="/images/not-found.svg"
				className="md:w-1/2 w-full mx-auto"
				alt="Page Not Found"
			/>
			<h2 className="text-2xl md:text-4xl font-bold text-center text-slate-700">
				The page you are looking for does not exist
			</h2>
		</section>
	);
};

export default NotFound;
