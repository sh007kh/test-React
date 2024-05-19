import { nanoid } from "nanoid";
import { useState } from "react";
const Form = ({ addItem }) => {
  const [itemValue, setItemValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemValue);
    setItemValue("");
  };
  return (
    <form className="h-32" onSubmit={handleSubmit}>
      <h2 className="title">To do List</h2>
      <div className="flex justify-center items-center flex-row ">
        <input
          type="text"
          placeholder="e.g ..."
          className=" border-gray-300  border-[1px] px-2 py-1 border-r-0"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
        />
        <button
          type="submit"
          className="border-2  px-2 py-1 capitalize bg-blue-500 text-white transition-all duration-200 ease-linear rounded-l-none rounded-r-md "
        >
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
