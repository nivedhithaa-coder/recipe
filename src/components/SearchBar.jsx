import { useState, useEffect } from "react";

export default function SearchBar({ sendData }) {
  const [foodName, setFoodName] = useState(null);
  const [input, setInput] = useState(null);
  const [loading, setLoading] = useState(0);
  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFoodName(input);
  }
  useEffect(() => {
    setLoading(true); // Set loading state to true before fetch request
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        sendData(data.meals);
        setRecipes(data.meals);
        setLoading(false); // Set loading state to false after successful fetch
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading state to false in case of error
      });
  }, [foodName]);
  // useEffect(() => {
  //   let url = `https://www.themealdb.com/api/json/v1/1/filter.php?`;
  //   if (Categories) url =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${}`;
  //   else if (Ingredients) url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  //   else if (Name) url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}'
  //   else return;

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => sendData(data.meals));
  // }, [foodName]);
  // // const filteredRecipes = recipes.filter(meal => {
  // //   return (!category || meal.strCategory === category) &&
  // //          (!ingredient || meal.strIngredient.includes(ingredient));
  // // });
  return (
    <div className="m-auto bg-white w-full sm:w-fit rounded search">
      <select
        onChange={(e) => setCategory(e.target.value)}
        id="mySelect"
        className="dropdown mb-2 rounded-full px-3 py-1 mb-4 text-slate-400 bg-white w-full "
      >
        <option value=""></option>
        <option value="Name">Name</option>
        <option value="Ingredients">Ingredients</option>
        
      </select>

      <form
        className="flex h-10 border rounded-md w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-transparent outline-none indent-4 w-full"
          type="text"
          name="foodName"
          placeholder="..."
          onChange={handleChange}
        />
        <button className="px-2 bg-black text-white ml-auto border border-sky-700">
          Search
        </button>
      </form>
    </div>
  );
}
