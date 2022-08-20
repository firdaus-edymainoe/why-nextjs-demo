import { Grid } from "@mui/material";
import React from "react";
import CodeSnippetCard from "../../../components/codeSnippetCard";
import ssrCode from "../../../public/ssr.svg";
import SsrContent from "../../../components/ssr/ssrContent";

const SsrWithName = (props: { name: string | undefined }) => {
	return (
		<>
			<Grid container>
				<Grid item md={6}>
					<SsrContent name={props.name} />
				</Grid>
				<Grid item md={6}>
					<CodeSnippetCard
						image={ssrCode}
						text="Below is the code snippet for this page. The getServerSideProps() is at the bottom of the snippet. The component receives props from getServerSideProps()"
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default SsrWithName;

export const getServerSideProps = async (context: {
	query: { name: string };
}) => {
	console.log(context);
	let name = context.query.name as string;

	return {
		props: {
			name: name,
		},
	};
};
