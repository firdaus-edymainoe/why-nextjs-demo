import React from "react";
import Folders from "../../components/router/folders";
import foldersImage from "../../public/folders.jpg";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { Container } from "@mui/system";

const Router = () => {
	return (
		<>
			<Container>
				<Paper sx={{ padding: "2ch" }}>
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
								<Box
									sx={{
										display: "block",
										position: "relative",
										height: "60vh",
										width: "100%",
									}}
								>
									<Image
										src={foldersImage}
										layout="fill"
										objectFit="contain"
										// width={384}
										// height={1115}
									/>
								</Box>
								<Typography
									variant="caption"
									sx={{ marginTop: "10px" }}
								>
									The "pages" folder of this app
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
