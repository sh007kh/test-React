import React from "react";
import { Link } from "react-router-dom";

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <article className="w-[85vw] max-w-[300px] bg-white  shadow-md">
      <div className="image-container ">
        <img src={image} alt={name} className="h-52 object-cover w-full" />
      </div>
      <div className="cocktail-info flex flex-col px-8 py-4 gap-2">
        <h3 className="font-bold lg:text-3xl">{name}</h3>
        <h4>{glass}</h4>
        <p className="text-gray-400">{info}</p>
        <Link to={`/cocktail/${id}`} className="btn self-start">
          details
        </Link>
      </div>
    </article>
  );
};

export default CocktailCard;
