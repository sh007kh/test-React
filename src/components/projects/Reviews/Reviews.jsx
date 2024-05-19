import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import Review from "./component/Review";
import useFetch from "./component/useFetch";
const accessKey = "b5zgNs0dMdasX0l1UfAr58wY_Zj1QEH4OTPaPfIZTSk";
const secretKey = "5gO9oZxJBNREVtofLxTrrZ4gKKPW1RZtkzctgGOQuVg ";

const Reviews = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const [index, setIndex] = useState(0);
  //   const url = `https://api.unsplash.com/photos/?client_id=${accessKey}&page=${randomNumber}&query=profile`;
  const url = `https://api.unsplash.com/search/photos/?client_id=${accessKey}&page=1&query=profile+picture`;

  // console.log(url);
  const { isLoading, isError, data } = useFetch(url);

  // }, []);
  // order matters
  // don't place user JSX before loading or error
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  // console.log(data);
  const { results } = data;
  // console.log(results);

  const nextReview = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % results.length;
      return newIndex;
    });
  };
  const prevReview = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + results.length) % results.length;
      return newIndex;
    });
  };

  const randomReview = () => {
    const randomIndex = Math.floor(Math.random() * results.length);
    if (randomIndex == index) {
      randomIndex + 1;
    }
    const newIndex = randomIndex % results.length;
    setIndex(newIndex);
  };

  const {
    id,
    slug,
    description,
    urls: { regular },
    user: { name },
  } = results[index];
  //   console.log(name);
  const props = {
    id,
    slug,
    description,
    regular,
    name,
    prevReview,
    nextReview,
    randomReview,
  };
  //   console.log(props);
  // console.log(data);

  return (
    <section className="bg-gray-200 pt-20 text-center min-h-screen">
      <h2 className="title">our reviews</h2>
      <div className="underline"></div>
      <div className=" mt-4 grid mx-auto max-w-[80vw] gap-4 md:grid-cols-2 md:max-w-[90vw] lg:grid-cols-3 lg:max-w-5xl ">
        <Review {...props} key={id} />
      </div>
    </section>
  );
};
export default Reviews;
