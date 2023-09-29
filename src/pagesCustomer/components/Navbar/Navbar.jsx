import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';
import LogoutIcon from '@mui/icons-material/Logout';

import './Navbar.css';
import logo from '../../../assets/homeImage.png';
import useAuth from '../../../hooks/useAuth';
import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogTitle,
	useMediaQuery,
} from '@mui/material';
import { useTheme } from '@emotion/react';

function Navbar() {
	const [navbar, setNavbar] = useState('navbar');
	const [header, setHeader] = useState('header');
	const [logoutOpen, setLogoutOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const { auth, setAuth } = useAuth();
	const navigate = useNavigate();

	const showNavbar = () => setNavbar('navbar showNavbar');
	const removeNavbar = () => setNavbar('navbar');

	const addBg = () => {
		if (window.screenY >= 20) setHeader('header addBg');
	};

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

	window.addEventListener('scroll', addBg);

	return (
		<div className={header}>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>

			<Link to={'/'}>
				<div className="logoDiv flex">
					<img src={logo} alt="logo img" className="logo" />
					<span>Horse Auction</span>
				</div>
			</Link>

			<div className={navbar}>
				<ul className="menu">
					{auth.role && (
						<li className="listItem" onClick={removeNavbar}>
							<Link className="link" to="/auctions">
								Auctions
							</Link>
						</li>
					)}
					<li className="listItem" onClick={removeNavbar}>
						<Link className="link" to="/about">
							About Us
						</Link>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<Link className="link" to="/blog">
							Blog
						</Link>
					</li>
					<li className="listItem" onClick={removeNavbar}>
						<Link className="link" to="/products">
							Products
						</Link>
					</li>

					<li className="listItem" onClick={removeNavbar}>
						<Link className="link" to="/contact">
							Contact
						</Link>
					</li>
				</ul>
				<AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar} />
			</div>

			<div className="signUp flex">
				{!auth.role ? (
					<>
						<Link to="/signup">
							<div className="text">Sign Up</div>
						</Link>
						<Link to="/signin">
							<div className="text signin">Sign In</div>
						</Link>
					</>
				) : (
					<div className="text" onClick={() => setLogoutOpen(true)}>
						Logout
					</div>
				)}

				<PiDotsNineBold
					className="icon toggleNavbarIcon"
					onClick={showNavbar}
				/>
			</div>

			<LogoutDialog
				open={logoutOpen}
				setOpen={setLogoutOpen}
				onLogout={handleLogout}
			/>
		</div>
	);
}

export const LogoutDialog = ({ open, setOpen, onLogout }) => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const handleClose = () => setOpen(false);

	return (
		<Dialog
			fullScreen={fullScreen}
			open={open}
			onClose={handleClose}
			aria-labelledby="responsive-dialog-title"
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: 2,
				}}
			>
				<LogoutIcon />
				<DialogTitle id="responsive-dialog-title">
					Are you sure you want to logout?
				</DialogTitle>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						No
					</Button>
					<Button onClick={onLogout} autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default Navbar;
