import { data } from "autoprefixer";

const MenuItem = ({ id, title, category, price, img, desc }) => {
  return (
    <article
      className="my-4 flex justify-center flex-col max-w-[85vw] mx-auto"
      data-menu={category}
    >
      <img src={img} alt={title} className="w-96 mx-auto rounded-md" />
      <div className="mt-4">
        <div className="flex justify-between items-center px-8 mb-4">
          <h4 className="text-lg font-bold m-0">{title}</h4>
          <span className=" rounded-md  capitalize bg-indigo-500  px-2 text-white">
            ${price}
          </span>
        </div>
        <p className="capitalize text-gray-600">{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
