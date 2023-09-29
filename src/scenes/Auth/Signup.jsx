import { useState } from 'react';
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
import OtpInput from 'react-otp-input';
import {
	Alert,
	Backdrop,
	CircularProgress,
	Fade,
	Modal,
	Snackbar,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

export default function SignUp() {
	const [open, setOpen] = useState(false);
	const [error, setError] = useState();
	const [formData, setFormData] = useState({});
	const [isSuccessSnack, setSuccessSnack] = useState(false);
	const navigate = useNavigate();

	const otpApi = useMutation({
		mutationFn: (email) =>
			axios.post(`${baseURL}auth/generateOtp`, email).then((res) => res.data),
		onSuccess: ({ state_id }) => {
			console.log(state_id);
			setFormData({ ...formData, state_id });
			setOpen(true);
		},
		onError: ({ response }) => {
			setError(response.data.error);
		},
	});

	const registerApi = useMutation({
		mutationFn: (member) =>
			axios.post(`${baseURL}auth/signup`, member).then((res) => res.data),
		onSuccess: (savedMember) => {
			console.log(savedMember);
			setSuccessSnack(true);
		},
		onError: ({ response }) => {
			setError(response.data.error);
		},
	});

	const handleSignUp = (otp) => {
		registerApi.mutate({ ...formData, otp, role: 'customer' });
		if (!registerApi.isError) navigate('/signin');
	};

	const handleFormSubmit = async (values, { resetForm }) => {
		otpApi.mutate({ email: values.email });
		setFormData({ ...values });

		if (!otpApi.isError) resetForm();
	};

	const handleSnackBarClose = (event, reason) => {
		if (reason === 'clickaway') return;
		setSuccessSnack(false);
	};

	return (
		<Container component="main" maxWidth="xs">
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={otpApi.isLoading || registerApi.isLoading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>

			<Snackbar
				open={isSuccessSnack}
				autoHideDuration={5000}
				onClose={handleSnackBarClose}
			>
				<Alert
					onClose={() => setSuccessSnack(false)}
					severity="success"
					sx={{ width: '100%' }}
				>
					<Typography>You have successfully registered!</Typography>
				</Alert>
			</Snackbar>

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
					Sign up
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
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 3 }}
						>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete="given-name"
										name="firstName"
										fullWidth
										label="First Name"
										autoFocus
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.firstName}
										error={!!touched.firstName && !!errors.firstName}
										helperText={touched.firstName && errors.firstName}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										label="Last Name"
										name="lastName"
										autoComplete="family-name"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.lastName}
										error={!!touched.lastName && !!errors.lastName}
										helperText={touched.lastName && errors.lastName}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										label="Email Address"
										name="email"
										autoComplete="email"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.email}
										error={!!touched.email && !!errors.email}
										helperText={touched.email && errors.email}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										name="password"
										label="Password"
										type="password"
										autoComplete="new-password"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.password}
										error={!!touched.password && !!errors.password}
										helperText={touched.password && errors.password}
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControlLabel
										control={
											<Checkbox value="allowExtraEmails" color="primary" />
										}
										label="I want to receive inspiration, marketing promotions and updates via email."
									/>
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Sign Up
							</Button>

							<Grid container justifyContent="flex-end">
								<Grid item>
									<Link to="/signin" variant="body2">
										<Typography sx={{ textDecoration: 'underline' }}>
											Already have an account? Sign in
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Box>
					)}
				</Formik>
			</Box>

			<Copyright sx={{ mt: 5 }} />
			<OTPModal
				open={open}
				onSend={(otp) => {
					setOpen(false);
					handleSignUp(otp);
				}}
			/>
		</Container>
	);
}

const OTPModal = ({ open, onSend }) => {
	const [otp, setOtp] = useState();

	const handleOtpInput = () => {
		if (otp.toString().length) onSend(otp);
	};

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		maxWidth: '90%',
		minHeight: 200,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
		borderRadius: 2,
	};
	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={open}>
				<Box sx={style}>
					<Typography
						variant="h5"
						component="h2"
						textAlign="center"
						fontWeight="bold"
					>
						Enter OTP send to the email
					</Typography>

					<Box marginTop={5}>
						<OtpInput
							inputStyle="inputStyle"
							numInputs={6}
							onChange={setOtp}
							renderSeparator={<span>-</span>}
							value={otp}
							inputType="tel"
							renderInput={(props) => (
								<input
									{...props}
									style={{
										height: 40,
										borderWidth: 1,
										minWidth: 40,
										textAlign: 'center',
									}}
								/>
							)}
							shouldAutoFocus
						/>
						<Box marginTop={2} textAlign="center">
							<Button variant="contained" onClick={handleOtpInput}>
								Send
							</Button>
						</Box>
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
};

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
	firstName: yup.string().required().label('First name'),
	lastName: yup.string().required().label('Last name'),
	email: yup.string().required().label('Email'),
	password: yup.string().required().label('Password'),
});

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};
