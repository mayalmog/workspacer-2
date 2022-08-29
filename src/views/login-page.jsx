import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState({ email: "", password: "" });
  // TODO: const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    //TODO: dispatch load users
    console.log("hi");
  }, []);

  const handleChange = ({ target }) => {
    const { value } = target;
    setUser(value);
  };

  const handleChangeAdmin = ({ target }) => {
    const { value } = target;
    if (target.name === "adminEmail") {
      setAdmin({ ...admin, email: value });
    }
    if (target.name === "adminPassword") {
      setAdmin({ ...admin, password: value });
    }
  };

  return (
    <section className="login-page flex column justify-center align-center">
      <p>curren user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>curren admin:</p>
      <pre>{JSON.stringify(admin, null, 2)}</pre>
      <h1>Login to your account</h1>
      <form className="flex column justify-center align-center">
        <label htmlFor="users">Choose you name:</label>
        {/* TODO: map  users into select options*/}
        <select name="users" id="users" onChange={handleChange}>
          <option value="default">Choose user:</option>
          <option value="May Almog">May Almog</option>
          <option value="Ziv Bryk">Ziv Bryk</option>
        </select>
        <button>Login</button>
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
        <button>Login as Admin</button>
      </form>
    </section>
  );
};
