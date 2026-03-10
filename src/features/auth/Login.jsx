import { useDispatch } from "react-redux";
import { loginSuccess } from "./authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(loginSuccess({ user: { name: "Admin" } }));
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;