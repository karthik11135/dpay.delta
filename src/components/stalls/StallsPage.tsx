
import BottomBar from "../BottomBar";
import StallCard from "./StallCard";

const stallsList = [
  {
    title: "Rolls on Wheels",
    color: "green",
    subtitle: "Wraps, rolls, mojitos & soda",
  },
  { title: "Fuzan", color: "red", subtitle: "Authentic Chinese" },
  {
    title: "Wings on Fire",
    color: "purple",
    subtitle: "Burgers, fries, wings & tacos",
  },
  {
    title: "Kerala Food Hub",
    color: "orange",
    subtitle: "Arabian and Biryani",
  },
  { title: "Little Town Waffles", color: "green", subtitle: "Waffles" },
  { title: "2k Foodies Hut", color: "red", subtitle: "Juice" },
  { title: "Senthor Bhavan", color: "purple", subtitle: "South Indian" },
  { title: "Anjappar", color: "orange", subtitle: "North Indian" },
  { title: "Delhi Malai Chaap", color: "green", subtitle: "Chaap" },
  {
    title: "Bamboo Garden",
    color: "red",
    subtitle: "Pasta and Quesidellas, Muse cake",
  },
  {
    title: "GB Foods",
    color: "purple",
    subtitle:
      "Milkshakes, Ice gola ,twisters, sandwich, corn and sugarcane juice",
  },
  { title: "Kamartaj Momos", color: "orange", subtitle: "Momos" },
];

const StallsPage = () => {
  return (
    <div className="h-screen bg-bgColor">
      <BottomBar />
      <div className="pt-10 mx-6">
        <h1 className="text-3xl font-semibold text-white mb-2">Food Stalls</h1>
        <p className="text-slate-500 text-xl mb-5">
          Click on the food stall to view the menu and pay.
        </p>
      </div>
      <div className="h-4/6 overflow-scroll rounded-xl mb-2">
        {stallsList.map((stall) => {
          return (
            <StallCard
              title={stall.title}
              color={stall.color}
              subtitle={stall.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StallsPage;
