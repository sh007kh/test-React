import SingleItem from "./SingleItem";
import { nanoid } from "nanoid";
const ItemsList = ({ items, removeItem, editItem, editInput }) => {
  return (
    <div className="w-[80vw] mx-auto ">
      {items.map((item) => {
        return (
          <SingleItem
            removeItem={removeItem}
            item={item}
            editItem={editItem}
            editInput={editInput}
            key={item.id}
          />
        );
      })}
    </div>
  );
};
export default ItemsList;
