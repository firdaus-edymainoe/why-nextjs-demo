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
					The image shows the "Pages" folder of this app. NextJS
					automatically use the folder and file name as the URL
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

				<Container>
					<Typography variant="body1">
						Below are all the directory paths as links to their
						corresponding pages. By utilizing{" "}
						<a
							href="https://nextjs.org/docs/api-reference/next/link"
							target="_blank"
							rel="noreferrer"
						>
							Next/Link
						</a>{" "}
						navigation will occurs as if it is a single page application (SPA) as the  client will
						prefetch the next pages providing a snappy UX ⚡. 
					</Typography>
					<List>
						<Li>
							<Typography variant="body1">
								<Link href="/csr">/csr/index.tsx</Link>
							</Typography>
						</Li>
						<Li>
							<Typography variant="body1">
								<Link href="/isg">/isg/index.tsx</Link>
							</Typography>
						</Li>
						<Li>
							<Typography variant="body1">
								<Link href="/pros-cons">
									/pros-cons/index.tsx
								</Link>
							</Typography>
						</Li>
						<Li>
							<Typography variant="body1">
								<Link href="/router">/router/index.tsx</Link>
							</Typography>
						</Li>
						<Li>
							<Typography variant="body1">
								<Link href="/ssg">/ssg/index.tsx</Link>
							</Typography>
						</Li>
						<Li>
							<Typography variant='body1'>
								<Link href='/ssg/Amin/'>/ssg/[bosses].tsx</Link>
							</Typography>
						</Li>
						<Li>
							<Typography variant='body1'>
								<Link href='/ssg/Harsha/'>/ssg/[bosses]>.tsx (mini 🤣)</Link>
							</Typography>
						</Li>
						<Li>
							<Typography variant="body1">
								<Link href="/ssr">/ssr/index.tsx</Link>
							</Typography>
						</Li>
						<Li>
							<Typography variant="body1">
								<Link href="/ssr/name/Harsha">
									/ssr/name/[name].tsx
								</Link>
							</Typography>
						</Li>
						<Li>
							<Typography variant="body1">
								<Link href="/">/index.tsx</Link>
							</Typography>
						</Li>
					</List>
				</Container>
			</Container>
		</>
	);
};

export default Folders;
