

const AdminOrderDetailItem = ({ title, image, price, quantity }) => {
  return (
    <div className="w-full flex justify-between  h-[80px] shadow rounded-md">
      <div className=" flex lg:gap-3 items-center    ">
        <div className="w-[100px] h-[80px]">
          <img
            src={image || "/public/placeholder.svg "}
            alt=""
            className=" h-full"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-semibold">{title}</p>
          <div className="flex gap-2">
            <p>
              Price: <span className="font-semibold">₹ {price}</span>
            </p>
            <p>
              Qty: <span className="font-semibold">₹ {quantity}</span>
            </p>
            <p>
              Total Amount:{" "}
              <span className="font-semibold">
                ₹ {Number(price) * quantity}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminOrderDetailItem;
