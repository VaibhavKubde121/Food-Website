/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const RecipeCard = ({recipe}) => {
  // eslint-disable-next-line no-unused-vars
  const {image,label,cuisineType,dietLabel,mealType,uri} = recipe?.recipe;
  // console.log("recipe.recipe: ",recipe.recipe);
  const id = uri?.split('#')[1]
  // console.log(id);
  return (
    <Link to={`/recipes/${id}`} className="w-full md:w-[230px]">
    <div className="bg-gradient shadow w-full rounded-lg">
      <img src={image} alt={label} className="rounded-lg h-[250px] md:h-[150px] w-full" />
      <div className="p-3">
        <p className="text-white font-semibold">{label}</p>
        <div className="mt-2">
          <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
            {cuisineType}
          </span>
          <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full text-green-500">
            {mealType}
          </span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default RecipeCard
