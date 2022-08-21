import * as React from "react";
import {
	Box,
	Container,
	Drawer,
	SwipeableDrawer,
	Toolbar,
	Typography,
} from "@mui/material";
import { drawer } from "./types";
import Link from "next/link";
import CustomLink from "./customLink";

const drawerWidth = 240;

const LeftDrawer = ({ showDrawer, toggleDrawer }: drawer) => {
	return (
		<>
			<SwipeableDrawer
				anchor="left"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				open={showDrawer}
				onOpen={toggleDrawer}
				onClose={toggleDrawer}
				hysteresis={0.01}
				minFlingVelocity={250}
				swipeAreaWidth={80}
			>
				<Toolbar />
				<Box onClick={toggleDrawer} sx={{margin: '0px 2ch'}}>
					<CustomLink href='/' label='Home'/>
					<CustomLink href='/router' label='Built-in Router'/>
					<CustomLink href='/csr' label='Client Side Rendering'/>
					<CustomLink href='/ssr' label='Server Side Rendering'/>
					<CustomLink href='/ssg' label='Static Site Generation'/>
					<CustomLink href='/isg' label='Incremental Static Regeneration'/>
					<CustomLink href='/pros-cons' label='Pros & Cons (vs CRA)'/>
				</Box>
			</SwipeableDrawer>
		</>
	);
};

export default LeftDrawer;
