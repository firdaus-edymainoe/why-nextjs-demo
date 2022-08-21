import React from "react";
import Folders from "../../components/router/folders";
import foldersImage from "../../public/folders.jpg";
import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { Container } from "@mui/system";

const Router = () => {
	return (
		<>
			<Container>
				<Paper sx={{padding: '2ch'}}>
					<Typography variant="h5" sx={{ marginBottom: "10px" }}>
						Folder Based Routing
					</Typography>
					<Grid container>
						<Grid item md={4} container={true}>
							<Container
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									marginBottom: "20px",
								}}
							>
								<Image src={foldersImage} layout="fixed" />
								<Typography
									variant="caption"
									sx={{ marginTop: "10px" }}
								>
									Folder structure of "Pages"
								</Typography>
							</Container>
						</Grid>
						<Grid item md={8}>
							<Folders />
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</>
	);
};

export default Router;
