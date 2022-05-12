import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Pillows",
    amount: 94.12,
    date: new Date(2020, 6, 12),
  },
  {
    id: "e2",
    title: "New Monitor",
    amount: 499.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 298.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 350.0,
    date: new Date(2021, 5, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
