import { useState } from "react";
import SingleTab from "./component/SingleTab";
import useFetch from "./component/useFetch";
import BtnContainer from "./component/BtnContainer";
const accessKey = "b5zgNs0dMdasX0l1UfAr58wY_Zj1QEH4OTPaPfIZTSk";

const Tabs = () => {
  const [job, setJob] = useState([]);
  const [num, setNum] = useState(0);

  // const url = `https://api.unsplash.com/search/photos/?client_id=${accessKey}&page=1&query=profile+picture`;
  const url = "https://course-api.com/react-tabs-project";
  const [isLoading, isError, data] = useFetch(url);
  // console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  // console.log(job);

  const btnCategories = [
    ...new Set(
      data.map((item) => {
        const { company, id } = item;
        return { company, id };
      })
    ),
  ];
  const toggleBtn = (id) => {
    const newIndex = data.findIndex((item) => {
      return item.id == id;
    });
    // console.log(newIndex);
    setNum(newIndex);
  };
  // console.log(data[0].id);
  const { id, order, title, dates, duties, company } = data[num];
  const prop = { id, order, title, dates, duties, company };
  // console.log(prop);
  // console.log(btnCategories);
  return (
    <section className="">
      <div className="section-center">
        <BtnContainer btnCategories={btnCategories} toggleBtn={toggleBtn} />
        <SingleTab {...prop} />
      </div>
    </section>
  );
};
export default Tabs;
