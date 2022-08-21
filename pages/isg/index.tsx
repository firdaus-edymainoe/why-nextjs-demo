import {
	Button,
	Container,
	Divider,
	Grid,
	Paper,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import CodeSnippetCard from "../../components/codeSnippetCard";
import isgCode from "../../public/isg.svg";

const StaticSiteGeneration = (props: {
	date: string;
	randomNumber: number;
}) => {
	return (
		<>
			<Grid container>
				<Grid item md={6}>
					<Container sx={{ marginBottom: "20px" }}>
						<Typography variant="h5">
							Incremental Static Generation
						</Typography>
						<Typography variant="body1">
							We can also update the static HTML pages by
							utilizing getStaticProps() with revalidate. By
							specifying the revalidate value in seconds, NextJS
							will regenerate the page accordingly.
						</Typography>
						<Toolbar />
						<Typography align="center" variant="body1">
							This page is regenerated every 30 seconds... ish? 😅
						</Typography>
						<Toolbar />
						<Container>
							<Paper sx={{ padding: "4ch" }}>
								<Typography align="center" variant="body1">
									This page was built on {props.date} MYT
								</Typography>
								<Toolbar />
								<Typography align="center" variant="body1">
									Random number is {props.randomNumber}
								</Typography>
							</Paper>
						</Container>
					</Container>
				</Grid>
				<Grid item md={6}>
					<CodeSnippetCard
						image={isgCode}
						text="Below is the code snippet for this page."
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default StaticSiteGeneration;

export const getStaticProps = async () => {
	let randomNumber = Math.floor(Math.random() * 100);

	return {
		props: {
			randomNumber: randomNumber,
			date: new Date().toLocaleString("en-GB", {
				dateStyle: "long",
				timeStyle: "medium",
				hour12: false,
				timeZone: "Asia/Singapore",
			}),
		},
		revalidate: 30,
	};
};
