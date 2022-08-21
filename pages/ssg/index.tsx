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
import React from "react";
import CodeSnippetCard from "../../components/codeSnippetCard";
import ssgCode from "../../public/ssg.svg";

interface propsType {
	builtDate : string,
}

const StaticSiteGeneration = (props : propsType) => {
	return (
		<>
			<Grid container>
				<Grid item md={6}>
					<Container sx={{ marginBottom: "20px" }}>
						<Typography variant="h5">
							Static Site Generation
						</Typography>
						<Typography variant="body1">
							NextJS will automatically generate all static HTML
							whenever possible upon build time.
						</Typography>
						<Toolbar />
						<Container>
							<Paper sx={{ padding: "4ch" }}>
								<Typography align="center" variant="body1">
									This page was built on{" "}
									{props.builtDate}
									{" MYT"}
								</Typography>
							</Paper>
						</Container>
						<Toolbar />{" "}
					</Container>
				</Grid>
				<Grid item md={6}>
					<CodeSnippetCard
						image={ssgCode}
						text="Below is the simplified code snippet for this page."
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default StaticSiteGeneration;

export const getStaticProps = async () => {

	return ({
		props: {
			builtDate: new Date().toLocaleString("en-GB", {
				dateStyle: "long",
				timeStyle: "medium",
				hour12: false,
				timeZone: "Asia/Singapore",
			})
		}
	})
}
