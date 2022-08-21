import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { Toolbar } from "@mui/material";

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
				<Toolbar />
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
			</Box>
		</Container>
	);
};

export default Home;
