
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  
  if (user && isAdmin) {
    return children;
}
  if(loading || isAdminLoading){
    return <span className="loading loading-spinner loading-lg"></span>
}

  return (
    <Navigate to="/login" state={{from: location}} replace></Navigate>
  );
};

export default AdminRoute;