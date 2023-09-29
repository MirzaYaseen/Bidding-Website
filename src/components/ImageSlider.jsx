import { Box, Button, Fab } from '@mui/material';
import React, { useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import LeftIcon from '@mui/icons-material/ChevronLeftOutlined';
import RightIcon from '@mui/icons-material/ChevronRightOutlined';

export default function Example({ imageUrls }) {
	const slideRef = useRef(null);

	return (
		<>
			<Slide
				ref={slideRef}
				autoplay={false}
				prevArrow={<></>}
				nextArrow={<></>}
				transitionDuration={300}
			>
				{imageUrls.map((url, index) => (
					<Box key={index} sx={{ height: 200, width: '100%' }}>
						<img
							src={url}
							alt="The house from the offer."
							style={{
								height: '100%',
								width: '100%',
								borderRadius: 1,
								objectFit: 'cover',
							}}
						/>
					</Box>
				))}
			</Slide>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					margin: '10px 0',
				}}
			>
				<Button
					size="small"
					onClick={() => slideRef.current.goBack()}
					sx={{ borderRadius: 70 }}
				>
					<LeftIcon color="secondary" />
				</Button>
				<Button
					size="small"
					onClick={() => slideRef.current.goNext()}
					sx={{ borderRadius: 70 }}
				>
					<RightIcon color="secondary" />
				</Button>
			</Box>
		</>
	);
}

const slideImages = [
	'https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
	'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80',
	'https://images.unsplash.com/photo-1494984858525-798dd0b282f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
	'https://plus.unsplash.com/premium_photo-1661886008804-9e5b219fc587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9yc2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1636014470337-fd160bee5530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvcnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
	'https://plus.unsplash.com/premium_photo-1669276196849-e501611273e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvcnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1522575196731-217bd9006602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvcnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1516704135885-dc4c68a189e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvcnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
	'https://plus.unsplash.com/premium_photo-1675181193708-3f496d8ee730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvcnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1547581849-38ba650ad0de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvcnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1553284966-19b8815c7817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvcnNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60',
];
