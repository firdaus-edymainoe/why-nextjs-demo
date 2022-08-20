import {
	Button,
	Container,
	Paper,
	Stack,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const CardToName = () => {
	const [name, setName] = useState("");

	function handleChange(e: any) {
		e.preventDefault();

		setName(e.target.value);
	}

	return (
		<>
			<Container>
				<Paper sx={{ padding: "2ch" }}>
					<Stack>
						<Typography variant="body1">
							Insert your name below to experience server side
							rendering with user props.
						</Typography>

						<Toolbar />

						<TextField
							type='text'
							autoComplete="new-text"
							inputProps={{
								type: 'text',
								autoComplete: 'new-text',
							}}
							label="Enter your name"
							variant="outlined"
							onChange={(e) => {
								handleChange(e);
							}}
						/>

						<Toolbar />

						<Container
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Link href={`ssr/name/${name}`} passHref>
								<Button variant="contained">Enter</Button>
							</Link>
						</Container>
					</Stack>
				</Paper>
			</Container>
		</>
	);
};

export default CardToName;
