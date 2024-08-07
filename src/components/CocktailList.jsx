import React from "react";
import CocktailCard from "./CocktailCard";

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
    <section className="grid gap-4 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:gap-4">
      {formattedDrink.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </section>
  );
};

export default CocktailList;
