import * as React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { topbar } from "./types";
import Link from "next/link";

const Topbar = ({ toggleDrawer }: topbar) => {
	return (
		<>
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={toggleDrawer}
					>
						<LunchDiningIcon />
					</IconButton>
					<Link href="/">
						<Typography>NextJS Demo</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Topbar;
