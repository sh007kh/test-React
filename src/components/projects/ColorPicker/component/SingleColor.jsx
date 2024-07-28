const SingleColor = ({ hex, weight, copyColor }) => {
  return (
    <article
      className="grid place-items-center text-center h-28 cursor-pointer transition-all duration-200 ease-in-out hover:scale-110"
      style={{ background: `#${hex}` }}
      onClick={() => {
        copyColor(hex);
      }}
    >
      <p className="m-0 font-bold">%{weight}</p>
      <h4 className="uppercase">#{hex}</h4>
    </article>
  );
};
export default SingleColor;
