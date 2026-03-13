import { Link } from "@tanstack/react-router";

const Logo = () => {
	return (
		<Link to="/">
			<img src="images/logo.png" className="w-40 rounded-md" alt="Talvad" />
		</Link>
	);
};

export default Logo;
