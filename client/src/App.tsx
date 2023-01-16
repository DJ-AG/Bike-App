import React, { useEffect } from "react";

const App = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("/test");
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>hello</div>;
};
export default App;
