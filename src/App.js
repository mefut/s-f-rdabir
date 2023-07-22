import React from "react";

function App() {
  const selectArray = [
    {
      value: "Thomas Shelby",
      name: "Thomas Shelby",
    },
    {
      value: "Tyler Durden",
      name: "Tyler Durden",
    },
    {
      value: "Patric Bateman",
      name: "Patric Bateman",
    },
    {
      value: "Saul Goodman",
      name: "Saul Goodman",
    },
  ];
  return (
    <main>
      <label htmlFor="character">Choose a character name:</label>

      <select name="character" id="character">
        {selectArray.map((item) => (
          <option class="option" key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </main>
  );
}

export default App;
