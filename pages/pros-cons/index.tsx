import {
	Container,
	Paper,
	Typography,
	styled,
	ListItem,
	List,
} from "@mui/material";
import React from "react";
import { cons, pros } from "../../components/pros-cons/constans";

const Li = styled(ListItem)({
	display: "list-item",
	listStyleType: "initial",
});

const ProsCons = () => {
	return (
		<>
			<Container>
				<Paper sx={{ padding: "2ch" }}>
					<Typography variant="h5">Pros & Cons of NextJS</Typography>
					<Typography>Below are the pros of using NextJS</Typography>
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
					<Typography>Below are the cons of using NextJS</Typography>
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
				</Paper>
			</Container>
		</>
	);
};

export default ProsCons;
