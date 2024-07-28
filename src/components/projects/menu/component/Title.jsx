import data from "./data";

const Title = ({ selectMenu }) => {
  const Categories = [
    "all",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
  // console.log(Categories);

  return (
    <div className="flex justify-center gap-3">
      {Categories.map((btn) => {
        return (
          <button
            type="button"
            className="btn"
            key={btn}
            data-menu={btn}
            onClick={selectMenu}
          >
            ${btn}
          </button>
        );
      })}
    </div>
  );
};
export default Title;
