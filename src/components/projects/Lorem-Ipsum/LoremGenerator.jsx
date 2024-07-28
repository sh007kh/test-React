import { useState } from "react";
import text from "./component/data";

const LoremGenerator = () => {
  const [value, setValue] = useState("1");
  const [paraText, setParaText] = useState([]);
  const getPara = () => {
    console.log(value);
    setParaText(text.slice(0, value));
    console.log(text.slice(0, value));
  };
  const handleChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <section>
      <h2 className="sectionTitle">generate whatever lines you need!</h2>
      <div className="loremContainer">
        <label htmlFor="paras" className="loremText">
          paragraphs:
        </label>

        <select
          value={value}
          id="paras"
          onChange={handleChange}
          className="w-16 text-center px-2 py-1"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <button type="submit" className="btn" onClick={getPara}>
          generate
        </button>
      </div>
      <article className="article">
        {paraText.map((item, index) => {
          return (
            <p key={index} className="pb-4">
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
};
export default LoremGenerator;
