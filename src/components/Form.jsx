import { useState } from "react";
import { data } from "../data";

const Form = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    let newId = users[users.length - 1].id + 1;
    console.log(name);
    users.push({ id: newId, name });
    console.log(users);
    setUsers(users);
    setName("");
  };
  const removeItem = (id) => {
    const remainedUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(remainedUsers);
  };
  return (
    <section className="bg-gray-200 min-h-screen">
      <article className="bg-white rounded  max-w-80 mx-auto translate-y-16 ">
        <h2 className="text-center text-3xl  capitalize pt-8">add user</h2>
        <form
          className="flex flex-col px-8 py-8 space-y-5"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="capitalize">
            name
          </label>
          <input
            type="text"
            placeholder="name"
            value={name}
            id="name"
            className="border-2 rounded-md capitalize px-2 py-1"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border-2 border-blue-500 px-2 py-2 text-center capitalize rounded-lg hover:bg-blue-500 hover:text-white transition-all active:bg-blue-400"
          >
            add user
          </button>
        </form>
        <div className="space-y-4 pb-4">
          {users.map((user) => {
            const { id, name } = user;
            return (
              <div key={id} className="flex justify-between items-center px-8 ">
                <h4 className="capitalize">{name}</h4>
                <button
                  type="button"
                  className="btn"
                  onClick={() => removeItem(id)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
export default Form;
