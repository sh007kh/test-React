import { v4 as uuidv4 } from "uuid";

import { FaAnglesRight } from "react-icons/fa6";
const SingleTab = ({ order, title, dates, duties, company }) => {
  console.log(duties);
  return (
    <article>
      <h2 className="title">{title}</h2>
      <p className="company">{company}</p>
      <p className="date">{dates}</p>
      <div className="duticontainer">
        {duties.map((duty) => {
          const id = uuidv4();
          return (
            <p className="duty-info" key={id}>
              <span className="duty-icon">
                <FaAnglesRight />
              </span>
              {duty}
            </p>
          );
        })}
      </div>
    </article>
  );
};
export default SingleTab;
