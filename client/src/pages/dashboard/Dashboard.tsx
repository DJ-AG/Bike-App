import { useEffect } from "react";
function Dashboard() {
  const fetchData = async () => {
    const response = await fetch("/test");
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>

    </div>
  );
}

export default Dashboard;
