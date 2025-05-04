import { StarIcon } from "lucide-react";
import React from "react";

const StarRatingComponent = ({ rating }) => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star,index) => (
        <StarIcon key={index}
          className={`lg:w-8 lg:h-8   ${
            star <= rating
              ? "fill-yellow-400 stroke-yellow-400"
              : "fill-gray-300 stroke-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRatingComponent;
