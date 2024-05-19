import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // setColor(e.target.value);
    // console.log(color);
    addColor(color);
  };
  return (
    <form
      className="flex justify-center flex-col items-center px-2 py-1 gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center items-center">
        <label htmlFor="color" className="capitalize text-lg mr-4">
          color generator:
        </label>
        <input
          className="h-8 w-8 mr-2"
          type="color"
          id="color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className="uppercase w-20 mr-2"
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <button type="submit" className="btn" style={{ background: `${color}` }}>
        submit
      </button>
    </form>
  );
};
export default Form;
