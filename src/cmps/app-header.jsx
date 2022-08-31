import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../store/user/userSlice";

import WorkspacerLogo from "../assets/img/workspacer-logo.svg";
export const AppHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedinUser = useSelector((state) => state.user.loggedinUser);

  const onLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <header className="app-header flex">
      <div className="header-logo flex align-center">
        <img src={WorkspacerLogo} alt="" />
        <h1>Workspacer</h1>
      </div>
      {loggedinUser && (
        <div className="user-actions flex align-center space-between full">
          <div className="user-greeting">
            <h3>Hello {loggedinUser.fullname}</h3>
          </div>
          <button className="btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
};
