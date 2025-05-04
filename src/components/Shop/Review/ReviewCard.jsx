import { format } from "date-fns";
import { Star } from "lucide-react";

const ReviewCard = ({ fullName, reviewMessage, reviewValue, dateTime }) => {
  return (
    <div className="bg-white shadow-md px-2 py-2">
      <div className="flex justify-between">
        <div className="inline-flex items-center gap-3">
          <p className="font-semibold text-xl">{fullName}</p>
          <p className="inline-flex gap-2 bg-green-400 items-center px-2 rounded-full text-white font-semibold">
            <Star color="gold " fill="gold" size={20} /> {reviewValue}
          </p>
        </div>
        <p> {format(new Date(dateTime), "dd/MM/yyyy")}</p>
      </div>
      <p className="text-sm lg:text-base">{reviewMessage}</p>
    </div>
  );
};

export default ReviewCard;
