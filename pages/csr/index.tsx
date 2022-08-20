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
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CodeSnippetCard from "../../components/codeSnippetCard";
import csrCode from "../../public/csr.svg";

const countdownValue = 5;

const Csr = () => {
	const [counter, setCounter] = useState(countdownValue);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prev) => prev - 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	function restartTimer() {
		setCounter(countdownValue);
	}

	return (
		<>
			<Grid container>
				<Grid item md={6}>
					<Container sx={{marginBottom: '20px'}}>
						{/* HEADER */}
						<Typography variant="h5">
							Client Side Rendering
						</Typography>

						{/* DESCRIPTION */}
						<Typography variant="body1">
							The following content below replicates what would
							happen in client side rendering albeit a tad
							exaggerated. This is the default for ReactJS.
						</Typography>
						<Toolbar />

						{/* BODY */}
						<Container
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							{/* COUNTDOWN TIMER */}
							<Paper
								sx={{
									padding: "2ch",
									backgroundColor:
										counter <= 0 ? "lightgreen" : "white",
								}}
							>
								<Container>
									<Typography variant="body1" align="center">
										{counter > 0 ? (
											`${counter} seconds remaining...`
										) : (
											<Typography noWrap>
												Client side rendered
												successfully!
											</Typography>
										)}
									</Typography>
								</Container>
							</Paper>

							<Toolbar />

							{/* CLASSIC REACT ROOT DIV */}
							<Paper sx={{ padding: "3ch", width: "90%" }}>
								<Typography variant="body1">
									The card below represents the classic React{" "}
									{"<div id='root'>"}{" "}
									{counter > 0 ? " which is empty..." : ""}
								</Typography>
								<Toolbar />
								<Paper
									sx={{
										width: "100%",
										backgroundColor:
											counter <= 0 ? "oldlace" : "white",
									}}
									elevation={5}
								>
									<Typography
										variant="body1"
										align="center"
										sx={{ padding: "2ch" }}
									>
										{counter <= 0 ? (
											"If the internet was bad, I would be loaded even slower... 🥱"
										) : (
											<span style={{ color: "grey" }}>
												{
													"//I'm a blank page... My user sees a pristine white page 😥"
												}
											</span>
										)}
									</Typography>
								</Paper>
								<Toolbar />
								<Container
									sx={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Button
										variant="contained"
										onClick={restartTimer}
									>
										Restart timer
									</Button>
								</Container>
							</Paper>
						</Container>
					</Container>
				</Grid>
				<Grid item md={6}>
					<CodeSnippetCard
						image={csrCode}
						text="Below is the simplified code snippet for this page. It
				is as ReactJS as it gets. At this point, you can
				consider NextJS as ReactJS with built-in routing and a
				few low-level improvements (i.e. faster compiler)"
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default Csr;
