import SingleSlide from "./component/SingleSlide";
import useFetch from "../slider/component/useFetch";
import {
  FaQuoteRight,
  FaCircleChevronLeft,
  FaCircleChevronRight,
} from "react-icons/fa6";
import { useState } from "react";
const accessKey = "b5zgNs0dMdasX0l1UfAr58wY_Zj1QEH4OTPaPfIZTSk";

const Carousel = () => {
  const [people, setPeople] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  let newTranslate = 0;
  const url = `https://api.unsplash.com/search/photos/?client_id=${accessKey}&page=1&query=profile+picture`;
  const [isLoading, isError, data] = useFetch(url);

  // console.log(data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { results } = data;
  // setPeople(data);
  const prevSlide = () => {
    setCurrentIndex((oldIndex) => {
      const newIndex = (oldIndex - 1 + results.length) % results.length;
      // console.log(newIndex);
      return newIndex;
    });
  };
  const nextSlide = () => {
    setCurrentIndex((oldIndex) => {
      let newIndex = (oldIndex + 1) % results.length;
      // console.log(newIndex);
      if (newIndex == 0) {
        console.log(oldIndex);
        // results.push(results[0]);
        // return (newIndex = 0);
      }
      return newIndex;
    });
  };

  return (
    <section className=" grid place-items-center">
      <div className="relative slide-center w-[85vw] h-[100vh] max-w-[800px] bg-slate-400 overflow-hidden">
        {results.map((item, index) => {
          const {
            id,

            alt_description,
            description,
            urls: { regular },
            user: { name },
          } = item;

          newTranslate = index - currentIndex;
          // setCurrentTranslate(newTranslate);
          const props = {
            id,
            index,
            alt_description,
            description,
            regular,
            name,
            newTranslate,
          };
          // console.log(props);
          return (
            <SingleSlide
              {...props}
              key={id}
              currentIndex={currentIndex}
              newTranslate={newTranslate}
            />
          );
        })}
        <button
          type="button"
          className="btn absolute top-[50%] left-0"
          onClick={prevSlide}
        >
          <FaCircleChevronLeft />
        </button>
        <button
          type="button"
          className="btn absolute top-[50%] right-0"
          onClick={() => nextSlide(currentIndex)}
        >
          <FaCircleChevronRight />
        </button>
      </div>
    </section>
  );
};
export default Carousel;
