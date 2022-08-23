import {
	Container,
	Paper,
	Typography,
	styled,
	ListItem,
	List,
	Grid,
} from "@mui/material";
import React from "react";
import { cons, pros } from "../../components/pros-cons/constans";
import Head from "../../node_modules/next/head";

const Li = styled(ListItem)({
	display: "list-item",
	listStyleType: "initial",
});

const ProsCons = () => {
	return (
		<>
			<Head>
				<title>Pros & Cons - Why NextJS Demo</title>
			</Head>
			<Container>
				<Paper sx={{ padding: "2ch" }}>
					<Typography variant="h5">Pros & Cons of NextJS</Typography>
					<Grid container>
						<Grid item sm={6}>
							<Typography>
								Below are the pros of using NextJS
							</Typography>
							<Container>
								<List>
									{pros.map((pro) => {
										return (
											<Li>
												<Typography
													dangerouslySetInnerHTML={{
														__html: pro,
													}}
												></Typography>
											</Li>
										);
									})}
								</List>
							</Container>
						</Grid>
						<Grid item sm={6}>
							<Typography>
								Below are the cons of using NextJS
							</Typography>
							<Container>
								<List>
									{cons.map((con) => {
										return (
											<Li>
												<Typography
													dangerouslySetInnerHTML={{
														__html: con,
													}}
												></Typography>
											</Li>
										);
									})}
								</List>
							</Container>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</>
	);
};

export default ProsCons;
