import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px" }}>
      <h3>Admin</h3>

      <nav>
        <Link to="/">Dashboard</Link>
        <br />
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
}

export default Sidebar;