import { useState } from "react";
import data from "./component/data";
import MenuItem from "./component/MenuItem";
import Title from "./component/Title";
const Menu = () => {
  const [menu, setMenu] = useState(data);

  const selectMenu = (e) => {
    const filter = e.currentTarget.dataset.menu;
    console.log(filter);
    const selectedMenu = [
      ...data.filter((item) => {
        if (filter === "all") {
          return item;
        }
        return item.category == filter;
      }),
    ];
    console.log(selectedMenu);

    setMenu(selectedMenu);
  };
  return (
    <section className="bg-gray-100 pt-20 text-center min-h-screen flex justify-center flex-col">
      <h2 className="title">our menu</h2>
      <div className="underline"></div>
      <div className=" mt-4 grid mx-auto max-w-[80vw] gap-4 md:grid-cols-2 md:max-w-[90vw] lg:grid-cols-3 lg:max-w-5xl "></div>
      <Title selectMenu={selectMenu} />
      {menu.map((item) => {
        const { id, title, category, price, img, desc } = item;
        const prop = { id, title, category, price, img, desc };
        return <MenuItem {...prop} key={id} />;
      })}
    </section>
  );
};
export default Menu;
