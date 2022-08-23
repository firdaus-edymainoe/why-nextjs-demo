import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import bossesCode from '../../public/SSG-bosses.svg'
import CodeSnippetCard from '../../components/codeSnippetCard'

const Bosses = (params: { desc: string, builtDate: string }) => {
	return (
		<>
			<Container>
				<Paper
					sx={{
						height: '80vh',
						maxHeight: '500px',
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						marginBottom: '2ch',
					}}
				>
					<Typography align="center" variant='h5' dangerouslySetInnerHTML={{
														__html: params.desc,
													}}></Typography>
					<Typography variant='caption' align='center' sx={{ marginTop: '2ch' }}>This page was built on {params.builtDate}</Typography>
				</Paper>
			</Container>
			<CodeSnippetCard image={bossesCode} text='Below is the simplified code snippet for this page.' />
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

export const getStaticProps = async (context: { params: { bosses: string } }) => {

	console.log(context)

	let desc = "";
	let builtDate = new Date().toLocaleString("en-GB", {
		dateStyle: "long",
		timeStyle: "medium",
		hour12: false,
		timeZone: "Asia/Singapore",
	})

	if (context.params.bosses === "Amin") {
		desc = "<p>Hi Amin, me beloved real boss!</p><p>Happy birthday boss!!! 🎉🎉🎉</p>";
	} else {
		desc = "Hi Harsha, me beloved mini boss! 🤪";
	}
	return {
		props: { desc: desc, builtDate: builtDate },
	};
};
