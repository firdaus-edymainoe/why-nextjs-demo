import {
	Container,
	Grid,
	Stack,
	Typography,
	List,
	ListItem,
	styled,
	Box,
	Table,
	TableRow,
	TableCell,
	TableBody,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const Li = styled(ListItem)({
	display: "list-item",
	listStyleType: "initial",
});

const Folders = () => {
	return (
		<>
			<Container>
				<Typography variant="body1">
					Image on the left shows the "Pages" folder of this app.
					NextJS automatically use the folder and file name as the URL
					endpoints.
				</Typography>

				<Container sx={{ marginBottom: "20px" }}>
					<List>
						<Li>Folder and file names are endpoints</Li>
						<Li>
							Dynamic routing is created by enclosing the name
							with square brackers (i.e. [name].tsx)
						</Li>
						<Li>index.tsx is the entry page for the folder</Li>
						<Li>
							<Typography>
								<Link
									href="https://nextjs.org/docs/advanced-features/custom-app"
									target="_blank"
								>
									"_app.tsx"
								</Link>{" "}
								and{" "}
								<Link href="https://nextjs.org/docs/advanced-features/custom-document">
									"_document.tsx"
								</Link>{" "}
								are reserved names for NextJS
							</Typography>
						</Li>
					</List>
				</Container>

				<Grid container rowSpacing={100}>
					<Grid item xs={4}>
						<Typography variant="body1">/csr/index.tsx</Typography>
						<Typography variant="body1">/isg/index.tsx</Typography>
						<Typography variant="body1">/pros-cons/index.tsx</Typography>
						<Typography variant="body1">/router/index.tsx</Typography>
						<Typography variant="body1">/ssg/index.tsx</Typography>
						<Typography variant="body1">/ssr/index.tsx</Typography>
						<Typography variant="body1">
							/ssr/name/[name].tsx
						</Typography>
						<Typography variant="body1">/index.tsx</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant="body1">
							{"--------------->"}
						</Typography>
						<Typography variant="body1">
							{"--------------->"}
						</Typography>
						<Typography variant="body1">
							{"--------------->"}
						</Typography>
						<Typography variant="body1">
							{"--------------->"}
						</Typography>
						<Typography variant="body1">
							{"--------------->"}
						</Typography>
						<Typography variant="body1">
							{"--------------->"}
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Stack>
							<Link href="/csr">Client Side Rendering</Link>
							<Link href="/isg">
								Incremental Static Generation
							</Link>
							<Link href="/pros-cons">Pros & Cons</Link>
							<Link href="/router">Built-in Router</Link>
							<Link href="/ssg">Static Site Generation</Link>
							<Link href="/ssr">Server Side Rendering</Link>
							<span style={{ whiteSpace: "nowrap" }}>
								<Link href="/ssr/name/Harsha">
									Dynamic Routing Server Side Rendering
								</Link>
							</span>
							<Link href="/">Home</Link>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Folders;
