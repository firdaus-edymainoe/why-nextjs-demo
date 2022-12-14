import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import styles from './_app.module.css'

const drawerWidth = 240;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>Why NextJS Demo</title>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and<title>Instant Waktu Solat</title> simple baseline to build upon. */}
				<CssBaseline />
				<Navbar />
				<Toolbar />
				<div className={styles.contentBody}>
					<Component {...pageProps} />
				</div>
			</ThemeProvider>
		</CacheProvider>
	);
}
