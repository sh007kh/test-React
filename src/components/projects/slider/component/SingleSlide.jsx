import {
  FaQuoteRight,
  FaCircleChevronLeft,
  FaCircleChevronRight,
} from "react-icons/fa6";

const SingleSlide = ({
  id,
  index,
  alt_description,
  description,
  regular,
  name,
  currentIndex,
  newTranslate,
}) => {
  // if (index == currentIndex) {
  // }
  // console.log(currentIndex);
  // console.log(index);
  return (
    <article
      className="absolute flex justify-center items-center flex-col w-full h-full  m-2 top-0 left-0 transition-all duration-150 ease-in-out"
      style={{
        transform: `translateX(${newTranslate * 100}%)`,
        // opacity: index === currentIndex ? 1 : 0,
        // visibility: index === currentIndex ? "visible" : "hidden",
      }}
    >
      <img
        src={regular}
        alt={alt_description}
        className="w-32 h-32 object-cover rounded-full border-4 border-indigo-700"
      />
      <h4 className="slideTitle">{name}</h4>
      <p className="slideJob">{description || alt_description}</p>
      <p className="slideInfo">{alt_description}</p>
      <FaQuoteRight />
    </article>
  );
};
export default SingleSlide;
