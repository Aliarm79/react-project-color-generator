import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  console.log(list)
  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          ></input>
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              {...color}
              hexIndex={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
