import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Hero from "../components/Hero";
import { useRef, useEffect } from "react";
import Card from "../components/Card";
import Desc from "../components/Desc"
export default function Home(){

const [mealData, setMealData]=useState(null);
const [clickedMeal, setClickedMeal] = useState(null);
const recipes = useRef(null); 

function getDatafromSearch(data){
    setMealData(data);
}
function handleClickOnMeal(id) {
    setClickedMeal(mealData.find(meal => meal.idMeal === id));
  }

  function wrapperClose() {
    setClickedMeal(null);
  }

  useEffect(() => {
    // Scroll to the div with class "mt-8" when mealData is rendered
    if (mealData && recipes.current) {
      recipes.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mealData]);

    return(
        <div>
            <Navbar/>
            <SearchBar sendData={getDatafromSearch}/>
            <Hero/>
            {clickedMeal ? (
          <Desc meal={clickedMeal} handleClose={wrapperClose} />
        ) : (
          mealData && (
            <div className='mt-8 recipes' ref={recipes}>
              <h1 className='text-3xl text-center text-white'>Search results</h1>
              <div className='mt-8 py-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14'>
                {mealData.map(meal => (
                  <Card
                    meal={meal}
                    key={meal.idMeal}
                    handleClick={() => handleClickOnMeal(meal.idMeal)}
                  />
                ))}
              </div>
            </div>
          )
        )}
        </div>
    )
}