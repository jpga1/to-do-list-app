import { useState } from "react";

export default function Form({ setList }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (input === "") return;

    setList((currentList) => [
      ...currentList,
      { id: crypto.randomUUID(), data: input },
    ]);

    e.target.reset();
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        id=""
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" value="add" />
    </form>
  );
}
