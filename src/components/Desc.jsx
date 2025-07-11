
export default function Desc({ meal, handleClose }) {

    let ingredientsList = []

    function setIngredients() {
        for (let i = 1; i <= 20; i++) {
            let ingredient = "strIngredient" + i
            let measure = "strMeasure" + i

            if (meal[[ingredient]]) {
                ingredientsList.push({
                    ingredient: meal[[ingredient]],
                    measure: meal[[measure]]
                })
            }
        }
    }
    setIngredients()

    return (
        <div
            className="absolute right-0 top-0 overflow-auto w-screen backdrop-blur-3xl flex items-center justify-center px-8 md:px-32 py-14">
            <div className="pt-10">
                <button
                    className="fixed text-lg rounded-full w-8 bg-white hover:text-sky-500 top-6 right-6 md:top-14 md:right-14"
                    onClick={handleClose}
                >
                    X
                </button>

                <div
                    className="flex flex-col md:flex-row text-center md:text-left items-center">
                    <img
                        className='object-cover w-64 rounded-xl'
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                    />

                    <div className="md:ml-6">
                        <h1 className="mt-4 text-4xl font-semibold">
                            {meal.strMeal}
                        </h1>

                        <ul className="flex flex-wrap gap-4 md:flex-col mt-4">
                            <li>
                                <span className="mr-2  text-sky-500">
                                    <i className="bi bi-tag-fill"></i>
                                </span>
                                <span className="text-lg">{meal.strCategory}</span>
                            </li>

                            <li>
                                <span className="mr-2 text-sky-500">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </span>

                                <span className="text-lg">
                                    {meal.strArea}
                                </span>
                            </li>

                            <li>

                                <a
                                    href={meal.strYoutube}
                                    target="_blank"
                                >
                                    
                                    <span className="text-red-600 mr-2">
                                        <i className="bi bi-youtube"></i>
                                    </span>
                                    <span className="italic underline">Watch on YouTube</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl mt-6 font-semibold">Instructions</h3>
                    <p className="">{meal.strInstructions}</p>
                </div>

                <div className="mt-6">
                    <h3 className="text-3xl font-semibold">Ingredients</h3>

                    <ul className="list-disc ml-6">
                        {
                            ingredientsList.map(ing => (
                                <li>
                                    <span>{ing.ingredient}</span>
                                    <span className="text-white ml-2">{ing.measure}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}