import Form from "./Form.jsx";
import ItemList from "./ItemList.jsx";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  function deleteItem(id) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <>
      <Form setList={setList} />
      <ItemList list={list} deleteItem={deleteItem} />
    </>
  );
}
