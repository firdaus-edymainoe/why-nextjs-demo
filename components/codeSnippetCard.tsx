import { Container, Paper, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const CodeSnippetCard = ({text, image}) => {
	return (
		<>
			<Container sx={{ display: "flex", justifyContent: "center" }}>
				<Paper sx={{ padding: "2ch", width: "90%" }}>
					<Typography variant="body1" align="justify">
						{text}
					</Typography>
					<Container
						sx={{
							display: "flex",
							justifyContent: "center",
							marginTop: "10px",
						}}
					>
						<Image src={image} style={{ borderRadius: '15px'}} />
					</Container>
				</Paper>
			</Container>
		</>
	);
};

export default CodeSnippetCard
