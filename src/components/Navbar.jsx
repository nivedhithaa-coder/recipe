import food from "../assets/food.png";

export default function Navbar(){
    return(
        <div>
             <header className="text-white px-8 py-5 sm:px-14 flex justify-center md:justify-start items-center flex-wrap">
                <img className="w-14 md:w-16 bg-white rounded-full"
                    src={food} alt="Food Logo." />

                <div className="ml-6 ">
                    <h1 className="brand text-3xl font-semibold">Home Foods</h1>
                    <p>Make your Dream food healthy with us</p>
                </div>
            </header>
        </div>
    )
}