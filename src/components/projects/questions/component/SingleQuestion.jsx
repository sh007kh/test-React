import { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
const SingleQuestion = ({ id, title, info, toggleShow, activeId }) => {
  const [showInfo, setShowInfo] = useState(false);
  const isActive = id === activeId;
  const toggleBtn = (id) => {
    setShowInfo(!showInfo);
  };
  return (
    <article className="flex justify-center flex-col items-center mt bg-white shadow-md max-w-[85vw] mx-auto px-4 py-4 cursor-pointer">
      <div className="header flex  justify-between items-center w-full">
        <h4 className="">{title}</h4>
        <div className="btn-holder justify-self-end ml-4 text-2xl">
          {isActive ? (
            <FaCircleMinus
              className="justify-self-end "
              onClick={() => toggleShow(id)}
            />
          ) : (
            <FaCirclePlus
              className=" justify-self-end"
              onClick={() => toggleShow(id)}
            />
          )}
        </div>
      </div>
      {isActive ? <div className="tour-info">{info}</div> : ""}
    </article>
  );
};
export default SingleQuestion;
