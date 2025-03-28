import { useEffect, useReducer } from "react";
import React from "react";
import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name} kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = ["Mac and cheese", "milk", "paneer"];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div class="bg-slate-950 text-red-300">
        <button onClick={() => onStatus(true)}>i want to be open</button>
        <h2 class="text-3xl font-bold underline ">
          Welcome to new york {openStatus ? "Open" : "Closed"}
        </h2>
      </div>
      <main>
        <img
          src="https://github.com/devshi3.png"
          height={200}
          alt="A phot of chef"
        />

        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
function App() {
  const [status, toggle] = useReducer((status) => !status, true);
  useEffect(() => {
    console.log(`the restaurant is ${status ? "open" : "closed"}`);
  }, [status]);
  return (
    <div>
      <h1>The restaurant is {status ? "open" : "closed"}.</h1>
      <button onClick={toggle}>{status ? "close" : "open"} restaurant</button>
      <Header name="alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </div>
  );
}

export default App;
