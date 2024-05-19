import { useReducer, useState } from "react";
import { data } from "../../data";

const defaultState = {
  people: data,
  toggle: "clear all",
};

const CLEAR_LIST = "CLEAR_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";
const RESET_LIST = "RESET_LIST";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    // if (state.people.length < 1) {
    //   return { ...state, toggle: "reset" };
    // }
    return { ...state, people: [], toggle: "reset" };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data, toggle: "clear all" };
  }
  if (action.type === REMOVE_ITEM) {
    const { id } = action.payload;
    const remainedUsers = state.people.filter((item) => {
      return item.id !== id;
    });
    if (remainedUsers.length < 1) {
      state.toggle = "reset";
    }
    return {
      ...state,
      people: remainedUsers,
    };
  }
};
const ResetReducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    // const remainedUsers = users.filter((item) => {
    //   if (users.length <= 1) {
    //     setToggle("reset");
    //   }
    //   return item.id !== id;
    // });
    // setUsers(remainedUsers);
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <section className="text-center pt-32">
      {state.people.map((user) => {
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
      {state.people.length < 1 ? (
        <button
          type="button"
          className="btn bg-red-400 mt-8 hover:bg-red-700"
          onClick={resetList}
        >
          {state.toggle}
        </button>
      ) : (
        <button
          type="button"
          className="btn bg-red-400 mt-8 hover:bg-red-700"
          onClick={clearList}
        >
          {state.toggle}
        </button>
      )}
    </section>
  );
};
export default ResetReducer;
