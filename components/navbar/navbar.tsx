import * as React from "react";
import Topbar from "./topbar";
import LeftDrawer from "./drawer";

const Navbar = () => {
	const [showDrawer, setShowDrawer] = React.useState(false);

	function toggleDrawer() {
		setShowDrawer(!showDrawer);
	}

	return (
		<>
			<Topbar toggleDrawer={toggleDrawer} />
			<LeftDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
		</>
	);
};

export default Navbar;
