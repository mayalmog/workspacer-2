import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsers, setLoggedinUser } from "../store/user/userSlice";
import { userService } from "../services/user.service";
export const LoginPage = () => {
  const [user, setUser] = useState(null);
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
    setUser(value);
  };

  const onLoggedinUser = (ev) => {
    ev.preventDefault();
    navigate("/desk");
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
      <h1>Login to your account</h1>
      <form className="flex column justify-center align-center">
        <label htmlFor="users">Choose you name:</label>
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
        <button onClick={onLoggedinUser}>Login</button>
      </form>

      <hr />
      <form className="flex column justify-center align-center">
        <h5>Or login as Admin:</h5>
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
        <button onClick={onLoggedinAdmin}>Login as Admin</button>
      </form>
    </section>
  );
};
