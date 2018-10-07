import React from "react";

export default function Display({ active, handleToggleActive }) {
  return (
    <div>
      <h1>Currently I am {active ? "active" : "not active"}</h1>
      <button onClick={handleToggleActive}>Toggle Active</button>
    </div>
  );
}
