import React from "react";
import { Cocktail } from "../pages";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <div>your drink is not found</div>;
  }
  const formattedDrink = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      key: idDrink,
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <>
      {formattedDrink.map((item) => {
        return <Cocktail key={item.id} {...item} />;
      })}
    </>
  );
};

export default CocktailList;
