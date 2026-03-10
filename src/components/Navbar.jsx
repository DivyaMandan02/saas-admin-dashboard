import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Navbar;