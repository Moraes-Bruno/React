import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "maça", calories: 50 },
    { id: 2, name: "laranja", calories: 60 },
    { id: 3, name: "banana", calories: 70 },
    { id: 4, name: "abacaxi", calories: 80 },
    { id: 5, name: "Tangerina", calories: 110 },
  ];

  const vegetables = [
    { id: 6, name: "batata", calories: 55 },
    { id: 7, name: "cenoura", calories: 65 },
    { id: 8, name: "alface", calories: 75},
    { id: 9, name: "brocolis", calories: 85 },
    { id: 10, name: "beringela", calories: 115 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Frutas"></List>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetais"></List>}
    </>
  );
}

export default App;
