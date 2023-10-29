import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };

    if (query.length === 0 || query.length > 1) fetch();
  }, [query]);

  {
    /* 
const keys = ["first_name", "last_name", "email"];
  

  const search = (data) => {
    return data.filter((item) => 
    keys.some((key) =>item[key].toLowerCase().includes(query)));
  };*/
  }

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {query.length > 1 && <p> {data.length} results</p>}

      {/* 
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li className="lisItem" key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul>*/}
      <Table data={data} />
    </div>
  );
}

export default App;
