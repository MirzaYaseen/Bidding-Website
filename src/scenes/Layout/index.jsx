import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Sidebar from '../global/Sidebar';
import Topbar from '../global/Topbar';

function Layout() {
	const isNonMobile = useMediaQuery('(min-width: 600px)');

	return (
		<Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
			<Sidebar />
			<Box flexGrow={1}>
				<Topbar />
				<Outlet />
			</Box>
		</Box>
	);
}

export default Layout;
