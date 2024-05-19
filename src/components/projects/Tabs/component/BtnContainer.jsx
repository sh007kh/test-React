const BtnContainer = ({ btnCategories, toggleBtn }) => {
  return (
    <>
      {btnCategories.map((btn) => {
        const { company, id } = btn;
        return (
          <button
            type="button"
            className="btn"
            key={id}
            onClick={() => toggleBtn(id)}
          >
            {company}
          </button>
        );
      })}
    </>
  );
};
export default BtnContainer;
