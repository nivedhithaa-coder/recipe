import food from "../assets/images.jpeg"
export default function Hero() {
  return (
    <div className="flex justify-between items-center px-20 py-10">
      <div className=" text-white">
        <h1 className="hero_head text-5xl mb-3">Savor the Moments,<br/>One Recipe at a Time</h1>
        <h3 className="italic text-2xl hero_des">Unleash Your Inner Chef!</h3>
      </div>
      <div className="w-80 md:mr-20 hero-pizza mix-blend-multiply">
                <img src={food} alt="food Image." />
            </div>
    </div>
  );
}
