export default function Card({ meal, handleClick }) {
    return (
        <div 
        className='relative card h-56 w-full shadow-md p-2'
        onClick={handleClick}
        >
            <div className='absolute bg-img w-full h-full'></div>

            <div className='absolute w-full'>
                <div
                    className='relative h-56 w-full aspect-[6/5] cursor-pointer rounded-lg overflow-hidden border border-white'>

                    <img
                        className='object-cover w-full h-full'
                        src={meal.strMealThumb}
                        alt={meal.strMealThumb}
                    />

                    <div className='overlay w-full absolute bottom-0 px-6 py-4'>
                        <h2 className='text-xl font-semibold'>
                            {meal.strMeal}
                        </h2>

                        <p>
                            <span className='mr-2'>
                                <i className="bi bi-geo-alt-fill"></i>
                            </span>
                            {meal.strArea}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}