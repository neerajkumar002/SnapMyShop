import { Star } from "lucide-react";

const ReviewCard = () => {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-md px-1 py-2 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="font-semibold">Neeraj Kumar</p>
          <dov className="inline-flex gap-1 bg-green-400 items-center rounded-full px-2 text-white">
            <Star fill="gold" stroke="none" size={20} /> 5.0
          </dov>
        </div>
        <p>01/04/2025</p>
      </div>
      <p className="text-xs lg:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, cumque.
      </p>
    </div>
  );
};

export default ReviewCard;
