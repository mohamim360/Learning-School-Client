import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
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
                  <NavLink to="/dashboard/reservations"> Add Items</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">Manage Items</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                   Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                     All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home">User Hoe</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/select">Selected Classes</NavLink>
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
