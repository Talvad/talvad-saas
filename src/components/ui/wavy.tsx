const WavySvg = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
			<title>Wavy</title>
			<path
				fill="#0a121e"
				fillOpacity="1"
				d="M0,64L48,101.3C96,139,192,213,288,240C384,267,480,245,576,208C672,171,768,117,864,90.7C960,64,1056,64,1152,90.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
			></path>
		</svg>
	);
};

export default WavySvg;
