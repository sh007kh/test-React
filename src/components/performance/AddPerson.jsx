import { useState } from "react";
import { data } from "../../data";
const AddPerson = ({ addPerson }) => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setIsHidden(false);
      setTimeout(() => {
        setIsHidden(true);
      }, 1000);
      return;
    }
    addPerson(name);
    setName("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="btn btn-block" type="submit">
        submit
      </button>
      <p
        className={` mt-6 text-center bg-red-200 text-red-800 capitalize font-bold  ${
          isHidden ? "hidden" : ""
        }`}
      >
        input can't be empty
      </p>
    </form>
  );
};

export default AddPerson;
