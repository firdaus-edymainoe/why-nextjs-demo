import {
	Button,
	Container,
	Divider,
	Paper,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";

const SsrContent = ({ name }: { name?: string }) => {
	return (
		<>
			<Container sx={{ marginBottom: "20px" }}>
				{name ? (
					<>
						<Typography align="center" variant="h4">
							Hi {name}!
						</Typography>
						<Typography
							align="center"
							sx={{ marginBottom: "10px" }}
						>
							You can change your name from the URL!
						</Typography>
					</>
				) : (
					<></>
				)}
				<Typography variant="h5">Server Side Rendering</Typography>
				<Typography variant="body1">
					This whole page is server rendered! Nothing was loaded on
					client side. Check out the Network tab to see the static
					HTML.
				</Typography>
				<Toolbar />
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Paper
						sx={{ padding: "2ch", backgroundColor: "lightgreen" }}
					>
						<Container>
							<Typography variant="body1" align="center">
								Rendered? 🤣
							</Typography>
						</Container>
					</Paper>

					<Toolbar />

					<Paper sx={{ padding: "3ch", width: "90%", backkgroundColor: 'oldlace' }}>
						<Typography variant="body1">
							The card below represents the classic React{" "}
							{"<div id='root'>"}
						</Typography>
						<Toolbar />
						<Paper sx={{ width: "100%" }} elevation={5}>
							<Typography
								variant="body1"
								align="center"
								sx={{ padding: "2ch" }}
							>
								Ya, I'm up and loaded already pal! Head to the
								Network tab in the developer tools and refresh
								this page. I arrive with the page! Zero loading
								required! 😎
							</Typography>
						</Paper>
						<Toolbar />
						<Stack>
							<Button variant="contained">Restart timer</Button>
						</Stack>
					</Paper>
				</Container>
			</Container>
		</>
	);
};

export default SsrContent;
