import { FoodIcon } from "../ui/Icons";
import { useNavigate } from "react-router-dom";

interface StallCardProps {
  title: string;
  color: string;
  subtitle: string;
}

const StallCard = ({ title, color, subtitle }: StallCardProps) => {
  const navigate = useNavigate();
  console.log(color);
  return (
    <div
      onClick={() => navigate(`/paying/${title}`)}
      className="grid grid-cols-12 gap-3 py-5 px-2.5 mb-3 bg-slate-800 rounded-xl mx-6"
    >
      <div className="col-span-3 flex items-center">
        <div
          className={`rounded-full mx-auto w-fit p-2.5 ${
            color === "green"
              ? "bg-green-500"
              : color === "red"
              ? "bg-red-500"
              : color === "purple"
              ? "bg-purple-500"
              : color === "orange"
              ? "bg-orange-500"
              : ""
          }`}
        >
          <FoodIcon activeProp={false} />
        </div>
      </div>
      <div className="col-span-9">
        <h1 className="text-greenColor font-semibold text-xl">{title}</h1>
        <p className="text-white font-extralight text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default StallCard;
