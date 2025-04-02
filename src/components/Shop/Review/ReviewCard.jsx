import { Star } from "lucide-react";

const ReviewCard = () => {
  return (
    <div className="bg-white shadow-md px-2 py-2">
      <div className="flex justify-between">
        <div className="inline-flex items-center gap-3">
          <p className="font-semibold text-xl">Neeraj Kumar</p>
          <p className="inline-flex gap-2 bg-green-400 items-center px-2 rounded-full text-white font-semibold">
            <Star color="gold " fill="gold" size={20} /> 5
          </p>
        </div>
        <p>02/04/2025</p>
      </div>
      <p className="text-sm lg:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maiores.
      </p>
    </div>
  );
};

export default ReviewCard;
