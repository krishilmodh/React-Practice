import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeProvider";

export default function Dropdown() {
  const countries = [
    { name: "India", code: "IN", cities: ["Delhi", "Mumbai", "Kolkata"] },
    { name: "USA", code: "US", cities: ["New York", "Los Angeles", "Chicago"] },
    { name: "UK", code: "UK", cities: ["London", "Manchester", "Liverpool"] },
  ];
  const [selectedCountry, setSelectedCountry] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <div className="dropdown-container" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
      <div>Dropdown</div>
      <select
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
      >
        {countries.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <select value={selectedCountry}>
          {countries[selectedCountry].cities.map((city, index) => (
            <option key={index} value={index}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
