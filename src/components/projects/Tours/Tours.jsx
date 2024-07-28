import { useEffect, useState, useCallback } from "react";
import Tour from "./component/Tour";
import useFetch from "./component/useFetch";
const accessKey = "b5zgNs0dMdasX0l1UfAr58wY_Zj1QEH4OTPaPfIZTSk";
const secretKey = "5gO9oZxJBNREVtofLxTrrZ4gKKPW1RZtkzctgGOQuVg ";

const Tours = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const url = `https://api.unsplash.com/photos/?client_id=${accessKey}&page=${randomNumber}&query=tour`;
  // const url = `https://api.unsplash.com/photos/?client_id=${accessKey}&page=1&query=tour`;
  // console.log(url);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // change state value
  const [tour, setTour] = useState(null);
  const [generate, setGenerate] = useState(false);

  useEffect(() => {
    // change name
    const fetchData = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        // change to response
        const response = await resp.json();
        setTour(response);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    // invoke fetch data
    fetchData();
  }, [generate]);
  // order matters
  // don't place user JSX before loading or error

  const newTour = () => {
    setTour(tour);
    setGenerate(!generate);
  };
  const removeTour = (id) => {
    const newTours = tour.filter((tour) => {
      return tour.id !== id;
    });
    // console.log(newTours);
    setTour(newTours);
    console.log(tour);
  };
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <section className="bg-gray-200 pt-20 text-center">
      <h2 className="title">our tours</h2>
      <div className="underline"></div>
      <div className=" mt-4 grid mx-auto max-w-[80vw] gap-4 md:grid-cols-2 md:max-w-[90vw] lg:grid-cols-3 lg:max-w-5xl ">
        {[...tour].map((item) => {
          const {
            id,
            description,
            urls: { regular },
            user: { location },
          } = item;

          const price = Math.floor(Math.random() * 1500) + 1000;
          const formattedPrice = price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });

          const props = { id, description, regular, location, formattedPrice };
          return <Tour {...props} key={id} removeTour={removeTour} />;
        })}
      </div>
      {tour.length < 1 ? (
        <button
          type="button"
          className="btn text-center mx-auto mb-4"
          onClick={newTour}
        >
          show more tour
        </button>
      ) : (
        ""
      )}
    </section>
  );
};
export default Tours;
