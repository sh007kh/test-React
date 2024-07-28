import { useState, useEffect } from "react";
import List from "./component/List";
// import useFetch from "../form/useFetch";

const accessKey = "b5zgNs0dMdasX0l1UfAr58wY_Zj1QEH4OTPaPfIZTSk";
const secretKey = "5gO9oZxJBNREVtofLxTrrZ4gKKPW1RZtkzctgGOQuVg ";
const EventReminder = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const url = `https://api.unsplash.com/photos/?client_id=${accessKey}&page=${randomNumber}`;
  // const url = `https://api.unsplash.com/photos/?client_id=${accessKey}&page=1`;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [generate, setGenerate] = useState(false);

  const newPhoto = () => {
    setData(data);
    setGenerate(!generate);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await resp.json();
        setData(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData(url);
  }, [generate]);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <section className="bg-purple-400 place-items-center min-h-screen py-12">
      <div className="bg-white rounded shadow-md mx-auto px-6 py-6 w-[640px] max-w-[80vw]">
        <h2 className="pb-4 uppercase">
          {data.length || "generate"} best photos
        </h2>
        <List data={data} />
        {data.length > 1 ? (
          <button
            type="button"
            className="btn w-full"
            onClick={() => setData([])}
          >
            clear all
          </button>
        ) : (
          <button type="button" className="btn w-full" onClick={newPhoto}>
            more photo
          </button>
        )}
      </div>
    </section>
  );
};
export default EventReminder;
