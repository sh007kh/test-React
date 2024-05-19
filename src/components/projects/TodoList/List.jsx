import { useState } from "react";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import { nanoid } from "nanoid";

const List = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  const editItem = (id) => {
    const checkedItems = items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setItems(checkedItems);
    localStorage.setItem("list", JSON.stringify(items));

    // console.log(items);
  };

  // add item to list
  const addItem = (item) => {
    const newItem = {
      name: item,
      id: nanoid(),
      completed: false,
    };
    setItems([...items, newItem]);
    localStorage.setItem("list", JSON.stringify(items));
  };

  // edit item from list
  const editInput = (id, newName) => {
    const editedItems = items.map((item) => {
      if (item.id === id) {
        item.name = newName;
      }
      return item;
    });
    setItems(editedItems);
    localStorage.setItem("list", JSON.stringify(editedItems));
  };

  // remove item from list
  const removeItem = (id) => {
    const remainedItems = items.filter((item) => item.id !== id);

    setItems(remainedItems);
    localStorage.setItem("list", JSON.stringify(remainedItems));
  };
  return (
    <section className="flex justify-center items-center flex-col max-w-[85vw] mx-auto mt-32 drop-shadow-sm transition-all duration-300 ease-in-out hover:shadow-2xl">
      <Form addItem={addItem} />
      <ItemsList
        items={items}
        removeItem={removeItem}
        editItem={editItem}
        editInput={editInput}
      />
    </section>
  );
};
export default List;
