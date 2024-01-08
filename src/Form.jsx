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
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-wrap justify-content-around my-5"
    >
      <input
        type="text"
        name="input"
        id=""
        onChange={(e) => setInput(e.target.value)}
        className="border rounded form-control form-control-lg"
      />
      <input
        type="submit"
        value="+"
        className="font-weight-bold btn btn-primary btn-lg btn-block"
      />
    </form>
  );
}
