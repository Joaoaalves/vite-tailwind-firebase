import { Navigate, Outlet, Route } from 'react-router-dom';
import { useAuth } from "../hooks"

export default function PrivateRoute() {
    const { currentUser } = useAuth()

    return currentUser ? <Outlet /> : <Navigate to="/login" />
}