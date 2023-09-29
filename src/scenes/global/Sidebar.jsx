import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import {
	Box,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import { tokens } from '../../theme';
import userImage from '../../assets/user.jpg';

const SideMenu = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(true);
	const [selected, setSelected] = useState('Dashboard');
	const isMobile = useMediaQuery('(max-width: 490px)');

	return (
		<Box
			sx={{
				'& .pro-sidebar-inner': {
					// background: `${colors.primary[400]} !important`,
					background: `#1F2A40`,
				},
				'& .pro-icon-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#29ab87 !important',
				},
				'& .pro-menu-item.active': {
					color: '#29ab87 !important',
				},
				marginRight: '80px',
			}}
		>
			<ProSidebar collapsed={isCollapsed} style={{ position: 'fixed' }}>
				<Menu iconShape="square">
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: '10px 0 20px 0',
							// color: colors.grey[100],
						}}
					>
						{!isCollapsed && (
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								ml="15px"
							>
								{/* <Typography variant="h3" color={colors.grey[100]}> */}
								<Typography variant="h3" color={'#e0e0e0'}>
									Horse Bidding
								</Typography>
								<IconButton
									onClick={() => setIsCollapsed(!isCollapsed)}
									sx={{ color: '#e0e0e0' }}
								>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{!isCollapsed && (
						<Box mb="25px">
							<Box display="flex" justifyContent="center" alignItems="center">
								<Box
									component="img"
									alt="profile-user"
									width="100px"
									height="100px"
									src={userImage}
									style={{
										cursor: 'pointer',
										borderRadius: '50%',
										objectFit: 'cover',
									}}
								/>
							</Box>
							<Box textAlign="center">
								<Typography
									variant="h4"
									// color={colors.grey[100]}
									color={'#e0e0e0'}
									fontWeight="bold"
									sx={{ m: '10px 0 0 0' }}
								>
									Khinsa
								</Typography>
								<Typography variant="h6" color={'#29ab87  '}>
									Admin
								</Typography>
							</Box>
						</Box>
					)}

					<Box paddingLeft={isCollapsed ? undefined : '10%'}>
						<Item
							title="Dashboard"
							to="/"
							icon={<HomeOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Typography
							variant="h6"
							// color={colors.grey[300]}
							color={'#a3a3a3'}
							sx={{ m: '15px 0 5px 20px' }}
						>
							Data
						</Typography>
						<Item
							title="Manage Users"
							to="/team"
							icon={<PeopleOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							// title="Contacts Information"
							title="Bid Logs"
							to="/contacts"
							icon={<ContactsOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							// title="Invoices Balances"
							title="Winner Logs"
							to="/invoices"
							icon={<ReceiptOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Typography
							variant="h6"
							// color={colors.grey[300]}
							color={'#a3a3a3'}
							sx={{ m: '15px 0 5px 20px' }}
						>
							Pages
						</Typography>
						<Item
							title="Auctions"
							to="/products"
							icon={<ShoppingCartOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							// title="Calendar"
							title="Transaction"
							to="/calendar"
							icon={<CalendarTodayOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="FAQ Page"
							to="/faq"
							icon={<HelpOutlineOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Typography
							variant="h6"
							// color={colors.grey[300]}
							color={'#a3a3a3'}
							sx={{ m: '15px 0 5px 20px' }}
						>
							Charts
						</Typography>
						<Item
							title="Bar Chart"
							to="/bar"
							icon={<BarChartOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Pie Chart"
							to="/pie"
							icon={<PieChartOutlineOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Line Chart"
							to="/line"
							icon={<TimelineOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Geography Chart"
							to="/geography"
							icon={<MapOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};

const Item = ({ title, to, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{
				// color: colors.grey[100],
				color: '#e0e0e0',
			}}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

export default SideMenu;
