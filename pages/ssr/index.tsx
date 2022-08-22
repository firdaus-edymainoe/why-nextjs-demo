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
import CardToName from "../../components/ssr/cardToName";
import SsrContent from "../../components/ssr/ssrContent";
import Head from "../../node_modules/next/head";

const Ssr = () => {
	return (
		<>
			<Head>
				<title>SSR - Why NextJS Demo</title>
			</Head>
			<Grid container spacing={2}>
				<Grid item md={6}>
					<SsrContent />
				</Grid>

				<Grid item md={6}>
					<CardToName />
				</Grid>
			</Grid>
		</>
	);
};

export default Ssr;
