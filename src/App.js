import CostItem from "./components/CostItem";

function App() {
  const costs = [
    {
      date: new Date(2023, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2023, 1, 10),
      description: "Iphone",
      amount: 659.99,
    },
    {
      date: new Date(2023, 5, 23),
      description: "Nike",
      amount: 18.99,
    },
  ];
  return (
    <div>
      <h1>Изучим REACT.Js!</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      ></CostItem>
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      ></CostItem>
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      ></CostItem>
    </div>
  );
}

export default App;
