import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { styled } from "@mui/material/styles";

interface propType {
	href: string;
	label: string;
}

const LinkText = styled(Typography)({
	"&:hover": {
		color: "blue",
	},
});

const CustomLink = ({ href, label }: propType) => {
	return (
		<Link href={href}>
			<LinkText variant="body1" sx={{ paddingTop: "10px", width: '100%' }}>
				{label}
			</LinkText>
		</Link>
	);
};

export default CustomLink;
