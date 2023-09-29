import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkMui from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

// TODO remove, this demo shouldn't need to reset the theme.

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

export default function SignIn() {
	const [error, setError] = useState();
	const [checked, setChecked] = useState(true);
	const { setAuth } = useAuth();
	const navigate = useNavigate();

	const loginApi = useMutation({
		mutationFn: (member) =>
			axios.post(`${baseURL}auth/signin`, member).then((res) => res.data),
		onSuccess: ({ member, token }) => {
			setAuth(member);
			if (checked)
				localStorage.setItem('auth', JSON.stringify({ member, token }));
			if (member.role === 'customer')
				return navigate('/auctions', { replace: true });
			navigate('/', { replace: true });
		},
		onError: ({ response }) => {
			// setError(response.data);
			setError(response.data.email + response.data.password);
		},
	});

	const handleFormSubmit = async (values, { resetForm }) => {
		loginApi.mutate({ ...values });
	};

	return (
		<Container component="main" maxWidth="xs">
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loginApi.isLoading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>

			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>

				{error && <Typography color="red">{error}</Typography>}

				<Formik
					onSubmit={handleFormSubmit}
					initialValues={initialValues}
					validationSchema={validationSchema}
				>
					{({
						values,
						errors,
						touched,
						handleBlur,
						handleChange,
						handleSubmit,
					}) => (
						<Box
							component="form"
							onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								error={!!touched.email && !!errors.email}
								helperText={touched.email && errors.email}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.password}
								error={!!touched.password && !!errors.password}
								helperText={touched.password && errors.password}
							/>
							<FormControlLabel
								control={
									<Checkbox
										value="remember"
										color="primary"
										checked={checked}
										onChange={() => setChecked(!checked)}
									/>
								}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									{/* <Link href="#" variant="body2">
									Forgot password?
								</Link> */}
								</Grid>
								<Grid item>
									<Link to="/signup">
										<Typography sx={{ textDecoration: 'underline' }}>
											Don't have an account? Sign Up
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Box>
					)}
				</Formik>
			</Box>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	);
}

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<LinkMui color="inherit" href="https://horse-auction.vercel.app/">
				Horse Auction by Khinsa
			</LinkMui>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const validationSchema = yup.object().shape({
	email: yup.string().required().label('Email'),
	password: yup.string().required().label('Password'),
});

const initialValues = {
	email: '',
	password: '',
};
