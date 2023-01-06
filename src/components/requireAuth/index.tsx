import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/login" state={{ path: location.pathname }} />;
    }

    return children;
};

export default RequireAuth;
