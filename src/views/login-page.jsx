import { Select } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsers, setLoggedinUser } from "../store/user/userSlice";
import { userService } from "../services/user.service";
export const LoginPage = () => {
  const [userName, setUserName] = useState(null);
  const [admin, setAdmin] = useState({
    id: "admin-1",
    fullname: "Admin",
    email: "",
    imgUrl: "",
  });
  const [adminPassword, setAdminPassword] = useState({
    password: "",
  });
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setUserName(value);
  };

  const onLoggedinUser = (ev) => {
    ev.preventDefault();
    navigate("/desk");
    const user = userService.onLoginUser(userName);
    dispatch(setLoggedinUser(user));
  };

  const handleChangeAdmin = ({ target }) => {
    const { value } = target;
    if (target.name === "adminEmail") {
      setAdmin({ ...admin, email: value });
    }
    if (target.name === "adminPassword") {
      setAdminPassword({ ...adminPassword, password: value });
    }
  };

  const onLoggedinAdmin = (ev) => {
    ev.preventDefault();
    if (userService.validateAdmin(admin, adminPassword)) {
      navigate("/desk");
      dispatch(setLoggedinUser(admin));
    }
  };

  return (
    <section className="login-page flex column justify-center align-center">
      <form className="user-login-form flex column justify-center align-center">
        {/* <label htmlFor="users">Choose you name:</label> */}
        <h5>Choose you name:</h5>

        <select name="users" id="users" onChange={handleChange}>
          <option value="default">Choose user:</option>
          {users.map((user) => {
            return (
              <option value={user.fullname} key={user.id}>
                {user.fullname}
              </option>
            );
          })}
        </select>
        <button className="btn btn-primary" onClick={onLoggedinUser}>
          Login
        </button>
      </form>

      <hr />
      <form className="flex column justify-center align-center">
        <label htmlFor="adminEmail">Or login as Admin:</label>
        <input
          type="email"
          name="adminEmail"
          placeholder="Email"
          onChange={handleChangeAdmin}
        />
        <input
          type="password"
          name="adminPassword"
          placeholder="Password"
          onChange={handleChangeAdmin}
        />
        <button className="btn btn-primary" onClick={onLoggedinAdmin}>
          Login as Admin
        </button>
      </form>
    </section>
  );
};
