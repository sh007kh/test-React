const Review = ({ props }) => {
  const { id, description, regular, name, formattedPrice, removeTour } = props;
  console.log(name);

  return (
    <article className="flex justify-center flex-col items-center mt bg-white shadow-md max-w-[85vw] mx-auto px-4 py-2">
      <div className="relative">
        <p className="absolute top-0 right-0 bg-green-600 px-2 py-1 text-white">
          {formattedPrice}
        </p>
        <img
          src={regular}
          alt={description}
          className=" w-96 h-52 object-cover"
        />
      </div>
      <div className="tour-info">
        <h4 className="info-title">{name}</h4>
        <h4>hello</h4>
        <p className="info-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt odio
          obcaecati fugit ipsum doloremque rerum quae. Dicta id consequatur
          quod?
        </p>
      </div>
      <button type="button" className="btn" onClick={() => removeTour(id)}>
        remove tour
      </button>
    </article>
  );
};
export default Review;
