import { useEffect, useRef, useState } from "react";

const SingleItem = ({ item, removeItem, editItem, editInput }) => {
  const [isEdited, setIsEdited] = useState(false);
  const [editedValue, setEditedValue] = useState(item.name);
  const refContainer = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, [editedValue]);

  const handleClickOutside = (e) => {
    if (!refContainer.current.contains(e.target)) {
      console.log("click outside");
      editInput(item.id, editedValue);
      setIsEdited(false);
    } else {
      console.log("click inside");
    }
  };
  // complete task handle
  const handleClick = (e) => {
    setIsEdited(true);
    console.log(e.target.textContent);
  };
  // edit value handle

  const handleChange = (e) => {
    setEditedValue(e.target.value);
    console.log(editedValue);
  };
  // submit edit value handle

  const handleKey = (e) => {
    if (e.key === "Enter") {
      editInput(item.id, editedValue);
      setIsEdited(false);
    }
  };
  return (
    <article
      className="flex flex-row w-full justify-between items-center mb-4 transition-all duration-300 ease-in-out hover:bg-slate-200"
      ref={refContainer}
    >
      <div className="name-container flex flex-row gap-2">
        <input
          type="checkbox"
          name="completed"
          id="completed"
          onChange={() => editItem(item.id)}
        />
        {item.completed ? (
          <h4 className="line-through">{item.name}</h4>
        ) : isEdited ? (
          <input
            type="text"
            value={editedValue}
            onChange={handleChange}
            onKeyDown={handleKey}
          />
        ) : (
          <h4 onClick={handleClick}>{item.name}</h4>
        )}
      </div>
      <button type="button" className="btn" onClick={() => removeItem(item.id)}>
        remove Item
      </button>
    </article>
  );
};
export default SingleItem;
