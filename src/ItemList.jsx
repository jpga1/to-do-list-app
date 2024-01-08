export default function ItemList({ list, deleteItem }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.data}
          <span> </span>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
