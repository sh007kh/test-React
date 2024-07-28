import { useState } from "react";
import data from "./component/data";
import SingleQuestion from "./component/SingleQuestion";
const Questions = () => {
  const [questions, setQuestion] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const [answer, setAnswer] = useState("");

  const toggleShow = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
    console.log(id);
  };
  return (
    <section className="bg-gray-200 pt-20 text-center min-h-screen">
      <h2 className="title">our Questions</h2>
      <div className="underline"></div>
      <div className=" mt-4 grid mx-auto max-w-[80vw] gap-4 md:grid-cols-2 md:max-w-[90vw] lg:grid-cols-3 lg:max-w-5xl ">
        {questions.map((item) => {
          const { id, title, info } = item;
          const prop = { id, title, info };
          return (
            <SingleQuestion
              {...prop}
              toggleShow={toggleShow}
              activeId={activeId}
              key={id}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Questions;
