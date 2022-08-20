export type {
	topbar,
	drawer,
}

interface topbar {
	toggleDrawer : () => void
}

interface drawer {
	showDrawer: boolean,
	toggleDrawer: () => void
}