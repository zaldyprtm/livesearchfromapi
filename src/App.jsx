// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import { Data } from "./assets/components/Data";
import { Navbar } from "./assets/components/Navbar";

function App(props) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setMeals(data.categories);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <Data meals={meals} loading={loading} search={search} />

    </>
  );
}

export default App;
