interface Props {
  items?: Array<{ id: number; name: string; calories: number }>;
  category?: String;
}

const df = [{ id: 0, name: "Desconhecido", calories: 0 }];

function List({ items = df, category = "Desconhecido" }: Props) {
  items.sort((a, b) => a.name.localeCompare(b.name));

  //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-item">{listItems}</ul>
    </>
  );
}

export default List;
