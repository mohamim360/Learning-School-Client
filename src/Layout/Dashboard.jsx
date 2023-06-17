import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useSir from "../Hooks/useSir";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isSir] = useSir();

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">Admin Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageclasses">Manage Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">All Users</NavLink>
                </li>
              </>
            ) : (
              <>
                {isSir ? (
                  <>
                    <li>
                      <NavLink to="/dashboard/addclass">Add Classes</NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/myclass">My Classes</NavLink>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink to="/dashboard/select">Selected Classes</NavLink>
                  </li>
                )}
                <li>
                  <NavLink to="/dashboard/home">User Home</NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
