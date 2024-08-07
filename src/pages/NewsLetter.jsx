import React from "react";

const NewsLetter = () => {
  return (
    <form className="bg-white px-4 py-8 rounded-md flex flex-col gap-4 max-w-[500px] w-[80vw] mx-auto">
      <h4 className="capitalize text-center pt-4 mb-12">our newsletter</h4>
      <div className=" flex flex-col gap-2 ">
        <label htmlFor="name" className="capitalize">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-100 pl-4 py-1 rounded-md border-[1px] border-gray-300 w-[90%] mx-auto"
          defaultValue="name"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="lastName" className="capitalize">
          last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          defaultValue="lastName"
          className="bg-gray-100 pl-4 py-1 rounded-md border-[1px] border-gray-300 w-[90%] mx-auto"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="email" className="capitalize">
          email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          defaultValue="test@test.com"
          className="bg-gray-100 pl-4 py-1 rounded-md border-[1px] border-gray-300 w-[90%] mx-auto"
        />
      </div>
      <button type="submit" className="btn self-center bg-cyan-500">
        submit
      </button>
    </form>
  );
};

export default NewsLetter;
