import Table from "./components/Table/Table";

const App = () => {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const avgIncome =
    netIncomes
      .map((company) => company.income)
      .reduce((prev, cur) => prev + cur) / netIncomes.length;

  return (
    <div className="App">
      <Table data={netIncomes} />
      <p>
        Promedio de ingreso neto entre todas las marcas: {avgIncome.toFixed(2)}
      </p>
    </div>
  );
};

export default App;
