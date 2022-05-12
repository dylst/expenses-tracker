import React from "react";

import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Sweatshirt",
    amount: 78.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 254.45,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "New Monitor",
    amount: 502.38,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450.0,
    date: new Date(2021, 5, 13),
  },
];

function App() {
  return (
    <div>
      <Expenses items={DUMMY_EXPENSES} />
    </div>
  );
}

export default App;
