import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { Paper, Toolbar } from "@mui/material";
import Image from "next/image";
import buildPng from '../public/build-pages.png'

const Home: NextPage = () => {
	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					my: 4,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h4" component="h1" gutterBottom>
					Why use NextJS?
				</Typography>
				<Typography variant="body1">
					Click the hamburger button 🍔 at top left and explore the features of
					NextJS!
				</Typography>
				<Toolbar />
				<Typography variant="body1">
					This app is built with NextJS and MUI v5
				</Typography>
				{/* <Toolbar /> */}
				<Typography variant="body1">
					Check out the source code of this app on{" "}
					<a
						href="https://github.com/firdaus-edymainoe/why-nextjs-demo"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</Typography>
				{/* <Toolbar /> */}
				<Paper sx={{padding: '2ch',marginTop: '3ch'}}>
					<Container>
						<Typography variant="body1" align='center' sx={{marginBottom: '1ch'}}>Below is the build result of this app. You can see all the routes and their page type (SSR, ISG or SSG).</Typography>
						<Image src={buildPng} />
					</Container>
				</Paper>
			</Box>
		</Container>
	);
};

export default Home;
