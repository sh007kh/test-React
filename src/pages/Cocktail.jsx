import axios from "axios";
import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
};
const Cocktail = () => {
  const { id, data } = useLoaderData();
  // if (!data) return <Navigate to="/" />;
  // console.log(data);
  if (!data.drinks) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  const {
    strDrinkThumb: image,
    strDrink: name,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  return (
    <section>
      <header className="flex flex-col justify-center items-center pb-8 gap-4">
        <Link to="/" className="btn">
          back home
        </Link>
        <h1 className="title">{name}</h1>
      </header>
      <article className="drink lg:grid lg:grid-cols-[2fr,3fr] lg:items-center lg:gap-16">
        <img src={image} alt={name} className="" />
        <div className="drink-info flex flex-col justify-start gap-4 mt-4">
          <p className="text-xl ">
            <span className="capitalize bg-cyan-500 rounded text-xl p-1">
              name :
            </span>{" "}
            {name}
          </p>
          <p className="text-xl ">
            <span className="capitalize bg-cyan-500 rounded text-xl p-1">
              category :
            </span>{" "}
            {category}
          </p>
          <p className="text-xl ">
            <span className="capitalize bg-cyan-500 rounded text-xl p-1">
              info :
            </span>{" "}
            {info}
          </p>
          <p className="text-xl ">
            <span className="capitalize bg-cyan-500 rounded text-xl p-1">
              glass :
            </span>{" "}
            {glass}
          </p>
          <p className="text-xl ">
            <span className="capitalize bg-cyan-500 rounded text-xl p-1">
              ingredinets :
            </span>{" "}
            {validIngredients.map((item, index) => {
              return (
                <span key={index} className="text-xl">
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>

          <p className="text-xl ">
            <span className="capitalize bg-cyan-500 rounded text-xl p-1">
              instructions :
            </span>{" "}
            {instructions}
          </p>
        </div>
      </article>
    </section>
  );
};

export default Cocktail;
