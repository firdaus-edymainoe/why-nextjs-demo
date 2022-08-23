import { Container, Paper, Typography } from "@mui/material";
import React from "react";

const Bosses = (params: { desc: string, builtDate: string }) => {
	return (
		<>
			<Container>
				<Paper
					sx={{
						height: '85vh',
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Typography align="center">Hi, {params.desc}!</Typography>
					<Typography variant='outline' sx={{marginTop: '2ch'}}>This page was built on {params.builtDate}</Typography>
				</Paper>
			</Container>
		</>
	);
};

export default Bosses;

export const getStaticPaths = async () => {
	return {
		paths: [
			{ params: { bosses: "Amin" } },
			{ params: { bosses: "Harsha" } },
		],
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	let desc = "";
	let builtDate = new Date().toLocaleString("en-GB", {
		dateStyle: "long",
		timeStyle: "medium",
		hour12: false,
		timeZone: "Asia/Singapore",
	})

	if (params.bosses === "Amin") {
		desc = "Amin me beloved real boss! Happy birthday boss!!! 🎉🎉🎉";
	} else {
		desc = "Harsha me beloved mini boss! 🤪";
	}
	return {
		props: { desc: desc, builtDate: builtDat },
	};
};
