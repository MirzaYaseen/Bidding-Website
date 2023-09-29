import {
	Backdrop,
	Box,
	CircularProgress,
	IconButton,
	useTheme,
} from '@mui/material';
import { useContext, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';

import { ColorModeContext, tokens } from '../../theme';
import { LogoutDialog } from '../../pagesCustomer/components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Topbar = () => {
	const [logoutOpen, setLogoutOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);
	const { auth, setAuth } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		setLogoutOpen(false);
		setLoading(true);
		setTimeout(() => {
			setAuth({});
			localStorage.removeItem('auth');
			navigate('/', { replace: true });
			setLoading(false);
		}, 2000);
	};

	return (
		<>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>

			<Box display="flex" justifyContent="space-between" p={2}>
				{/* SEARCH BAR */}
				<Box
					display="flex"
					backgroundColor={colors.primary[400]}
					borderRadius="3px"
				>
					<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
					<IconButton type="button" sx={{ p: 1 }}>
						<SearchIcon />
					</IconButton>
				</Box>

				{/* ICONS */}
				<Box display="flex">
					<IconButton onClick={colorMode.toggleColorMode}>
						{theme.palette.mode === 'dark' ? (
							<DarkModeOutlinedIcon />
						) : (
							<LightModeOutlinedIcon />
						)}
					</IconButton>
					<IconButton>
						<NotificationsOutlinedIcon />
					</IconButton>
					<IconButton>
						<SettingsOutlinedIcon />
					</IconButton>
					<IconButton onClick={() => setLogoutOpen(true)}>
						<LogoutIcon />
					</IconButton>
				</Box>
			</Box>

			<LogoutDialog
				open={logoutOpen}
				setOpen={setLogoutOpen}
				onLogout={handleLogout}
			/>
		</>
	);
};

export default Topbar;
