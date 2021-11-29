import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Hörlurar",
      amount: 999,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "Glass", amount: 20, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Skor",
      amount: 699,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Datorskärm",
      amount: 1450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
