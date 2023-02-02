import "./styles.css";
// import Dropdown from "react-dropdown";
import { useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const data = [
    { name: "India", Value: "Ind", cities: ["Hyderabad", "Kurnool"] },
    { name: "Pakistan", Value: "Pak", cities: ["Karachi", "Lahore"] }
  ];
  const handleCountries = (e) => {
    setCountries((p) => [data.find((item) => item.Value === e.target.value)]);
  };
  console.log(countries);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <select onChange={handleCountries}>
        {data.map((item, index) => {
          return <option value={item.Value}>{item.name}</option>;
        })}
      </select>

      <select>
        {countries &&
          countries.map((item, index) => {
            return <option value={item.Value}>{item.cities}</option>;
          })}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      </select>
    </div>
  );
}
