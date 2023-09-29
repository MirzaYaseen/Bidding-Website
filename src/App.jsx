import { useEffect, useState } from 'react';
import {
	Backdrop,
	CircularProgress,
	CssBaseline,
	ThemeProvider,
} from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
// import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
import { ColorModeContext, useMode } from './theme';
import Products from './scenes/products';
import AddProduct from './scenes/addProduct';
import SignUp from './scenes/Auth/Signup';
import SignIn from './scenes/Auth/Signin';
import RequireAuth from './scenes/RequireAuth';
import Missing from './scenes/Missing';

import AboutPage from './pagesCustomer/AboutPage';
import LandingPage from './pagesCustomer/LandingPage';
import BlogPage from './pagesCustomer/BlogPage';
import ProductsPage from './pagesCustomer/ProductsPage';
import ContactPage from './pagesCustomer/ContactPage';

import './App.css';
import useAuth from './hooks/useAuth';
import CustomerProducts from './pagesCustomer/CustomerProducts';

function App() {
	const [theme, colorMode] = useMode();
	const [isSidebar, setIsSidebar] = useState(true);
	const [loading, setLoading] = useState(true);
	const { auth, setAuth } = useAuth();

	useEffect(() => {
		const authObj = JSON.parse(localStorage.getItem('auth'));
		if (authObj) setAuth(authObj.member);

		setTimeout(() => setLoading(false), 500);
	}, []);

	if (loading)
		return (
			<Backdrop
				sx={{
					flex: 1,
					color: '#fff',
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={true}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ThemeProvider theme={theme}>
					<CssBaseline />

					{auth?.role === 'admin' ? (
						<div className="app">
							<Sidebar isSidebar={isSidebar} />
							<main className="content">
								<Topbar setIsSidebar={setIsSidebar} />
								<Routes>
									{/*Admin */}
									<Route path="/" element={<Dashboard />} />
									<Route path="/team" element={<Team />} />
									<Route path="/faq" element={<FAQ />} />
									<Route path="/invoices" element={<Invoices />} />

									<Route path="/signin" element={<SignIn />} />
									<Route path="/signup" element={<SignUp />} />

									{/*Protected Routes*/}
									<Route element={<RequireAuth allowedRoles={[2001]} />}>
										<Route path="/products" element={<Products />} />
										<Route path="/addProduct" element={<AddProduct />} />
									</Route>

									{/*Catch all*/}
									<Route path="*" element={<Missing />} />
								</Routes>
							</main>
						</div>
					) : auth?.role === 'customer' ? (
						<Routes>
							<Route path="/" element={<Navigate to="/auctions" replace />} />
							<Route path="/auctions" element={<CustomerProducts />} />
							<Route path="/signin" element={<SignIn />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/blog" element={<BlogPage />} />
							<Route path="/products" element={<ProductsPage />} />
							<Route path="/contact" element={<ContactPage />} />
							<Route path="*" element={<Missing />} />
						</Routes>
					) : (
						<Routes>
							<Route path="/" element={<LandingPage />} />
							<Route path="/signin" element={<SignIn />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/blog" element={<BlogPage />} />
							<Route path="/products" element={<ProductsPage />} />
							<Route path="/contact" element={<ContactPage />} />
							<Route path="*" element={<Missing />} />
						</Routes>
					)}
				</ThemeProvider>
			</LocalizationProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
