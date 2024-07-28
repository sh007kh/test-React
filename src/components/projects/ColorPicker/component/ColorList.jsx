import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ color, copyColor }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
      {color.map((item) => {
        const { hex, weight } = item;
        const props = { hex, weight };
        // console.log({ hex, weight });
        return <SingleColor {...props} key={nanoid()} copyColor={copyColor} />;
      })}
    </section>
  );
};
export default ColorList;
