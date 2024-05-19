import { useState } from "react";
import { data } from "../../data";

const Reset = () => {
  const [users, setUsers] = useState(data);
  const [toggle, setToggle] = useState("clear all");

  const removeItem = (id) => {
    const remainedUsers = users.filter((item) => {
      if (users.length <= 1) {
        setToggle("reset");
      }
      return item.id !== id;
    });
    setUsers(remainedUsers);
  };

  const toggleUsers = () => {
    if (users.length == 0) {
      setUsers(data);
      setToggle("clear all");
    } else {
      setUsers([]);
      setToggle("reset");
    }
  };

  return (
    <section className="text-center pt-32">
      {users.map((user) => {
        const { name, id } = user;

        return (
          <article key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn bg-blue-300"
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </article>
        );
      })}

      <button
        type="button"
        className="btn bg-red-400 mt-8 hover:bg-red-700"
        onClick={toggleUsers}
      >
        {toggle}
      </button>
    </section>
  );
};
export default Reset;
