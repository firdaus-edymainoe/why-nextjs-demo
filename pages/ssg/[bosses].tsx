import { Container, Paper, Typography } from "@mui/material";
import React from "react";

const Bosses = (params: { desc: string }) => {
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

	if (params.bosses === "Amin") {
		desc = "Amin me beloved real boss! 🤴";
	} else {
		desc = "Harsha me beloved mini boss! 🤪";
	}
	return {
		props: { desc: desc },
	};
};
