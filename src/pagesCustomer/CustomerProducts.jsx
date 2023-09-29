import React, { useEffect, useRef, useState } from 'react';
import {
	Box,
	Card,
	CardActions,
	CardContent,
	Collapse,
	Button,
	Typography,
	useTheme,
	useMediaQuery,
	Skeleton,
	Badge,
	Grid,
	Divider,
	Tab,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	TextField,
	InputAdornment,
	IconButton,
	Backdrop,
	CircularProgress,
} from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import _ from 'lodash';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import { useTimer } from 'react-timer-hook';

import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Navbar from './components/Navbar/Navbar';

import bidImage from '../assets/bid2.png';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import useAuth from '../hooks/useAuth';

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
// const baseUrl = 'https://erin-impossible-donkey.cyclic.app/';

export default () => {
	return (
		<>
			<Navbar />
			<Header title="Auctions Available" su btitle="See your list of Bids" />
			<Box p="1.5rem 2.5rem" paddingTop={'50px'}>
				<TabViews />
			</Box>
		</>
	);
};

const TabViews = () => {
	const isNonMobile = useMediaQuery('(min-width:600px)');
	const [value, setValue] = useState('1');

	const handleChange = (e) => {
		switch (e.target.textContent) {
			case 'Fixed Price Auctions':
				setValue('1');
				break;
			case 'Realtime Auctions':
				setValue('2');
				break;
		}
	};

	return (
		<>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList
						onChange={handleChange}
						aria-label="lab API tabs example"
						centered={isNonMobile}
					>
						<Tab label="Fixed Price Auctions" value="1" />
						<Tab label="Realtime Auctions" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<FixedAuctions />
				</TabPanel>
				<TabPanel value="2">
					<RealtimeAuctions />
				</TabPanel>
			</TabContext>
		</>
	);
};

const FixedAuctions = () => {
	const isNonMobile = useMediaQuery('(min-width: 1000px)');

	const { data, isLoading } = useQuery({
		queryKey: ['fixed'],
		queryFn: () =>
			axios
				.get(`${baseUrl}auction`, { params: { type: 'Fixed' } })
				.then((res) => res.data),
	});

	return (
		<>
			<Box>
				<Box sx={{ marginTop: 1 }}></Box>

				{isLoading && (
					<Box
						mt="20px"
						display="grid"
						gridTemplateColumns="repeat(4, minmax(0, 1fr))"
						justifyContent="space-between"
						rowGap="20px"
						columnGap="1.33%"
						sx={{
							'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
						}}
					>
						{[...Array(10).fill(1)].map((_, i) => (
							<Box key={i} display="flex" flexDirection="column" gap={1}>
								<Skeleton variant="rounded" height={200} />
								<Skeleton width="90%" />
								<Skeleton width="50%" />
								<Skeleton width="70%" />
								<Skeleton width="80%" />
								<Skeleton width="25%" height={45} />
							</Box>
						))}
					</Box>
				)}

				{(data || !isLoading) && (
					<Box
						mt="20px"
						display="grid"
						gridTemplateColumns="repeat(4, minmax(0, 1fr))"
						justifyContent="space-between"
						rowGap="20px"
						columnGap="1.33%"
						sx={{
							'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
						}}
					>
						{data.map((product) => (
							<FixedAuction key={product._id} item={product} />
						))}
					</Box>
				)}
			</Box>
		</>
	);
};

const RealtimeAuctions = () => {
	const isNonMobile = useMediaQuery('(min-width: 1000px)');

	const { data, isLoading } = useQuery({
		queryKey: ['realtime'],
		queryFn: () =>
			axios
				.get(`${baseUrl}auction`, { params: { type: 'Realtime' } })
				.then((res) => res.data),
	});

	return (
		<>
			<Box>
				<Box sx={{ marginTop: 1 }}></Box>

				{isLoading && (
					<Box
						mt="20px"
						display="grid"
						gridTemplateColumns="repeat(4, minmax(0, 1fr))"
						justifyContent="space-between"
						rowGap="20px"
						columnGap="1.33%"
						sx={{
							'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
						}}
					>
						{[...Array(10).fill(1)].map((_, i) => (
							<Box key={i} display="flex" flexDirection="column" gap={1}>
								<Skeleton variant="rounded" height={200} />
								<Skeleton width="90%" />
								<Skeleton width="50%" />
								<Skeleton width="70%" />
								<Skeleton width="80%" />
								<Skeleton width="25%" height={45} />
							</Box>
						))}
					</Box>
				)}

				{(data || !isLoading) && (
					<Box
						mt="20px"
						display="grid"
						gridTemplateColumns="repeat(4, minmax(0, 1fr))"
						justifyContent="space-between"
						rowGap="20px"
						columnGap="1.33%"
						sx={{
							'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
						}}
					>
						{data.map((product) => (
							<RealtimeAuction key={product._id} item={product} />
						))}
					</Box>
				)}
			</Box>
		</>
	);
};

const FixedAuction = ({ item }) => {
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const [open, setOpen] = useState(false);

	return (
		<>
			<Card
				sx={{
					backgroundImage: 'none',
					backgroundColor: theme.palette.background.alt,
					borderRadius: '0.55rem',
				}}
			>
				<CardContent>
					<ImageSlider imageUrls={item.images} />

					<Typography variant="h5" component="div">
						{item.horseTitle}
					</Typography>
					<Typography variant="h6" component="div">
						{item.type === 'Fixed'
							? 'Fixed Price Auction'
							: 'Real Time Auction'}
					</Typography>
					<Typography
						sx={{ mb: '1.5rem' }}
						color={theme.palette.secondary[400]}
					>
						${item.reservedPrice}
					</Typography>

					<Typography
						sx={{ mb: '1.5rem' }}
						color={theme.palette.secondary[400]}
					>
						Start Time:
						<Typography variant="body2">
							{new Date(item.startTime).toString()}
						</Typography>
					</Typography>

					<Typography variant="body2">Breed: {item.breed}</Typography>
					<Typography variant="body2">Color: {item.color}</Typography>
					<Typography variant="body2">Sex: {item.sex}</Typography>
					<Typography variant="body2">Start Time: {item.startTime}</Typography>
				</CardContent>

				<Box display="flex" justifyContent="flex-end" paddingRight={3}>
					<Badge
						badgeContent={item.bids ? item.bids.length : 0}
						color="primary"
						sx={{ cursor: 'pointer' }}
					>
						<Box
							component="img"
							src={bidImage}
							height={30}
							width={40}
							onClick={() => setOpen(true)}
						/>
					</Badge>
				</Box>

				<CardActions>
					<Button
						variant="primary"
						size="small"
						onClick={() => setIsExpanded(!isExpanded)}
					>
						See More
					</Button>
				</CardActions>

				<Collapse
					in={isExpanded}
					timeout="auto"
					unmountOnExit
					sx={{
						color: theme.palette.neutral[300],
					}}
				>
					<CardContent>
						<Typography>{item.description}</Typography>
					</CardContent>
				</Collapse>
			</Card>

			{open && (
				<Box position="absolute">
					<BidsDialogue open={open} setOpen={setOpen} item={item} />
				</Box>
			)}
		</>
	);
};

const RealtimeAuction = ({ item }) => {
	const theme = useTheme();
	const [isExpanded, setIsExpanded] = useState(false);
	const [open, setOpen] = useState(false);

	var date = new Date();
	date.setDate(date.getDate() + 1);

	const {
		totalSeconds,
		seconds,
		minutes,
		hours,
		days,
		isRunning,
		start,
		pause,
		resume,
		restart,
	} = useTimer({
		// expiryTimestamp: isRealTime ? item.endTime : new Date(),
		expiryTimestamp: date,
		onExpire: () => console.warn('onExpire called'),
	});

	return (
		<>
			<Card
				sx={{
					backgroundImage: 'none',
					backgroundColor: theme.palette.background.alt,
					borderRadius: '0.55rem',
				}}
			>
				<CardContent>
					<ImageSlider imageUrls={item.images} />

					<Box display="flex" gap={2}>
						<Box display="flex" flexDirection="column">
							<Typography color="red"> Hr</Typography>
							<Typography color="red">{hours}</Typography>
						</Box>
						<Box display="flex" flexDirection="column">
							<Typography color="red"> Mins</Typography>
							<Typography color="red">{minutes}</Typography>
						</Box>
						<Box display="flex" flexDirection="column">
							<Typography color="red"> Secs</Typography>
							<Typography color="red">{seconds}</Typography>
						</Box>
					</Box>

					<Typography variant="h5" component="div">
						{item.horseTitle}
					</Typography>
					<Typography variant="h6" component="div">
						{item.type === 'Fixed'
							? 'Fixed Price Auction'
							: 'Real Time Auction'}
					</Typography>
					<Typography
						sx={{ mb: '1.5rem' }}
						color={theme.palette.secondary[400]}
					>
						${item.reservedPrice}
					</Typography>

					<Grid container>
						<Grid item xs>
							<Typography
								sx={{ mb: '1.5rem' }}
								color={theme.palette.secondary[400]}
							>
								Start Time:
								<Typography variant="body2">
									{new Date(item.startTime).toString()}
								</Typography>
							</Typography>
						</Grid>
						<Divider orientation="vertical" flexItem>
							<AccessTimeIcon />
						</Divider>
						<Grid item xs>
							<Typography
								sx={{ mb: '1.5rem' }}
								color={theme.palette.secondary[400]}
							>
								End Time:
								<Typography variant="body2">
									{new Date(item.endTime).toString()}
								</Typography>
							</Typography>
						</Grid>
					</Grid>

					<Typography variant="body2">Breed: {item.breed}</Typography>
					<Typography variant="body2">Color: {item.color}</Typography>
					<Typography variant="body2">Sex: {item.sex}</Typography>
					<Typography variant="body2">Start Time: {item.startTime}</Typography>
				</CardContent>

				<Box display="flex" justifyContent="flex-end" paddingRight={3}>
					<Badge
						badgeContent={item.bids ? item.bids.length : 0}
						color="primary"
						sx={{ cursor: 'pointer' }}
					>
						<Box
							component="img"
							src={bidImage}
							height={30}
							width={40}
							onClick={() => setOpen(true)}
						/>
					</Badge>
				</Box>

				<CardActions>
					<Button
						variant="primary"
						size="small"
						onClick={() => setIsExpanded(!isExpanded)}
					>
						See More
					</Button>
				</CardActions>

				<Collapse
					in={isExpanded}
					timeout="auto"
					unmountOnExit
					sx={{
						color: theme.palette.neutral[300],
					}}
				>
					<CardContent>
						<Typography>{item.description}</Typography>
					</CardContent>
				</Collapse>
			</Card>

			{open && (
				<Box position="absolute">
					<BidsDialogue open={open} setOpen={setOpen} item={item} />
				</Box>
			)}
		</>
	);
};

const BidsDialogue = ({ open, setOpen, item }) => {
	const [data, setData] = useState([...new Array(50)]);
	const [myBid, setMybid] = useState('');
	const descriptionElementRef = useRef(null);
	const { auth: member } = useAuth();
	const queryClient = useQueryClient();

	const bidsGetApi = useQuery({
		queryKey: ['bids'],
		queryFn: () =>
			axios
				.get(`${baseUrl}auction/bid`, { params: { auctionId: item._id } })
				.then((res) => res.data),
	});

	const bidAddApi = useMutation({
		mutationFn: (bid) =>
			axios.post(`${baseUrl}auction/bid`, bid).then((res) => res.data),
		onSuccess: (savedBid, sentAuction) => {
			queryClient.invalidateQueries({ queryKey: ['bids'] });
			queryClient.invalidateQueries({ queryKey: ['fixed'] });
			queryClient.invalidateQueries({ queryKey: ['realtime'] });
		},
	});

	const handleClose = () => setOpen(false);
	const handleBidInput = () => {
		if (!myBid) return;

		bidAddApi.mutate({
			auctionId: item._id,
			bid: {
				member: { memberId: member._id, ...member },
				amount: myBid,
			},
		});
	};

	useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) descriptionElement.focus();
		}
	}, [open]);

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll="paper"
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<DialogTitle id="scroll-dialog-title">
					{item.horseTitle} ({bidsGetApi?.data?.length} bids)
				</DialogTitle>

				{(bidAddApi.isLoading || bidsGetApi.isLoading) && (
					<Box display="flex" justifyContent="center">
						<CircularProgress color="primary" size={30} />
					</Box>
				)}
				<DialogContent sx={{ width: 500 }}>
					<DialogContentText
						id="scroll-dialog-description"
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						<Box display="flex" flexDirection="column" gap={3}>
							{bidsGetApi?.data?.map((bid, i) => (
								<Box display="flex" justifyContent="space-between">
									<Typography>{`Bid ${i + 1}`}</Typography>
									<Typography>${bid.amount}</Typography>
									<Typography>{bid.member.firstName}</Typography>
								</Box>
							))}
						</Box>
					</DialogContentText>
				</DialogContent>

				<Box
					component="form"
					paddingTop={3}
					display="flex"
					justifyContent="center"
				>
					<TextField
						type="number"
						variant="standard"
						value={myBid}
						onChange={(e) => setMybid(e.target.value)}
						placeholder="Give your bid"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										edge="end"
										color="primary"
										onClick={handleBidInput}
									>
										<SendIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
					{/* <Button onClick={handleClose}>Subscribe</Button> */}
				</DialogActions>
			</Dialog>
		</div>
	);
};
