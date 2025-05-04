import { Star, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addReview } from "../../../store/slice/Review-slice";
import { toast } from "react-toastify";

const ReviewModal = ({ closeModal, userId, fullName, productId }) => {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const { register, handleSubmit } = useForm();

  function handleReviewForm(data) {
    dispatch(
      addReview({
        ...data,
        reviewValue: rating,
        userId: userId,
        fullName: fullName,
        productId: productId,
      })
    ).then((data) => {
      console.log("then block", data);
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        closeModal();
      } else {
        toast.warn(data?.payload?.message);
        closeModal();
      }
    });
  }

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && closeModal()}
      className="fixed top-0 left-0 flex justify-center items-center w-full min-h-screen bg-gray-500/30"
    >
      <div className="bg-white w-[400px]  flex flex-col gap-3 px-3 py-3 rounded-md">
        <div className="flex justify-between">
          {" "}
          <h4>Submit Review</h4>{" "}
          <button onClick={() => closeModal()} className="cursor-pointer ">
            <X />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(handleReviewForm)}
          className="  flex flex-col gap-3  "
        >
          <div className="flex gap-3">
            {[...Array(5)].map((_, index) => {
              index += 1;
              return (
                <Star
                  key={index}
                  strokeWidth={0}
                  fill="#d6d6d6"
                  size={60}
                  className={`${
                    index <= (hover || rating) ? "fill-amber-400" : ""
                  } cursor-pointer border-none  `}
                  onClick={() => handleClick(index)}
                  onMouseMove={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                />
              );
            })}
          </div>
          <div>
            <textarea
              name=""
              id=""
              {...register("reviewMessage", { required: true })}
              placeholder="Message "
              className="border w-full px-1 py-2 rounded-md  border-gray-400"
            ></textarea>
          </div>
          <div className="">
            <button className="cursor-pointer bg-blue-500 text-white  w-full py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
