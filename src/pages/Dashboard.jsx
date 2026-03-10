import { useEffect, useState } from "react";
import api from "../api/axios";
import Card from "../components/Card";

function Dashboard() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/users");
      setTotalUsers(res.data.total);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Card title="Total Users" value={totalUsers} />
        <Card title="Revenue" value="$23,000" />
        <Card title="Orders" value="320" />
      </div>
    </div>
  );
}

export default Dashboard;