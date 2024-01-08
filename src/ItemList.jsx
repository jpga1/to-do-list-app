export default function ItemList({ list, deleteItem }) {
  return (
    <ul className="list-group">
      {list.map((item) => (
        <li
          key={item.id}
          className="list-group-item text-center list-group-item-info my-1 border rounded"
        >
          {item.data}
          <span> </span>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
