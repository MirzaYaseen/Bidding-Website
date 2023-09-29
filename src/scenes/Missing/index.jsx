import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import unAuthImage from '../../assets/404.jpg';

function Missing() {
	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			height={'80%'}
		>
			<Box
				width={400}
				height={400}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
			>
				<Box component="img" src={unAuthImage} />
				<Link to="/">
					<Typography sx={{ textDecoration: 'underline' }}>
						Go Back to Home
					</Typography>
				</Link>
			</Box>
		</Box>
	);
}

export default Missing;
