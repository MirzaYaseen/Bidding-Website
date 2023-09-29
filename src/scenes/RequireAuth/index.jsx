import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
	const { auth } = useAuth();
	const location = useLocation();

	return auth?.role ? (
		<Outlet />
	) : (
		<Navigate to="/signin" state={{ from: location }} replace />
	);
};

export default RequireAuth;
