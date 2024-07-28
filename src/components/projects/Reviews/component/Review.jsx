import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

const Review = ({
  id,
  slug,
  description,
  regular,
  name,
  prevReview,
  nextReview,
  randomReview,
}) => {
  return (
    <article className="flex justify-center flex-col items-center mt bg-white shadow-md max-w-[85vw] mx-auto px-4 py-4">
      <div className="relative w-36 h-36 before:content-['']  before:absolute before:bg-green-500 before:-top-1 before:left-1 before:h-full before:w-full before:rounded-full">
        <img
          src={regular}
          alt={description}
          className="relative h-full w-full object-cover rounded-full z-10"
        />
        <span className="px-3 py-1 bg-green-500 rounded-full absolute top-2 -left-1 z-20">
          <FontAwesomeIcon icon={faQuoteRight} />
        </span>
      </div>
      <div className="tour-info">
        <h4 className="info-title">{name}</h4>
        <p className="info-text">
          {slug ??
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt odio obcaecati fugit ipsum doloremque rerum quae. Dicta id consequatur quod?"}
        </p>
      </div>
      <div className="">
        <button type="button" className="btn">
          <FontAwesomeIcon icon={faChevronLeft} onClick={prevReview} />
        </button>
        <button type="button" className="btn">
          <FontAwesomeIcon icon={faChevronRight} onClick={nextReview} />
        </button>
      </div>
      <button type="button" className="btn" onClick={randomReview}>
        surprise
      </button>
    </article>
  );
};
export default Review;
