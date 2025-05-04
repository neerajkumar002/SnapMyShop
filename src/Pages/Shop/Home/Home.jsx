import { useDispatch, useSelector } from "react-redux";
import bannerImage from "/public/pexels-jmendezrf-1536619.jpg";
import { useEffect } from "react";
import { fetchAllProducts } from "../../../store/slice/product-slice";
import { Link } from "react-router-dom";

const LatestCollectionProductItem = ({ id, title, image, price }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="w-full lg:w-[200px]    lg:h-[300px]  "
    >
      <div className="h-[300px] lg:h-[250px]">
        <img
          src={image || "/public/placeholder.svg"}
          alt=""
          className="h-full w-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="">
        <p className="py-1 text-sm">{title.slice(0, 20)}</p>
        <p>₹ {price}</p>
      </div>
    </Link>
  );
};

const ShopHome = () => {
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="lg:px-13">
      <div
        className="flex flex-col lg:flex-row h-[500px] border justify-between
      "
      >
        <div className="flex justify-center items-center lg:w-[50%] h-full">
          <div>
            <div className="flex items-center gap-2">
              <p className="h-[2px] w-8 bg-[#414141]"></p>
              <p className="font-medium text-sm  ">OUR BESTSELLERS</p>
            </div>
            <p className="prata-regular leading-relaxed  text-3xl lg:text-6xl">
              Latest Arrivals
            </p>
            <div className="flex items-center gap-2">
              <p className="h-[2px] w-8 bg-[#414141]"></p>
              <p className="font-medium text-sm  ">SHOP NOW</p>
            </div>
          </div>
        </div>
        <div>
          <img src={bannerImage} alt="" className="w-full h-full" />
        </div>
      </div>

      {/* latest collection */}
      <div className="py-5">
        <div className="text-center ">
          <h3 className="text-3xl">
            <span className="text-gray-500">LATEST </span>
            <span className="text-gray-700 font-medium">COLLECTIONS</span>
          </h3>
          <p className="text-xs lg:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 py-3">
          {[...productList]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 6)
            .map((item) => (
              <LatestCollectionProductItem
                key={item?._id}
                id={item?._id}
                image={item?.image}
                title={item?.title}
                price={item?.price}
              />
            ))}
        </div>
      </div>

      {/* best sellers */}
      {/* <div className="py-5">
        <div className="text-center ">
          <h3 className="text-3xl">
            <span className="text-gray-500">BEST </span>
            <span className="text-gray-700 font-medium">Sellers</span>
          </h3>
          <p className="text-xs lg:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
      </div> */}

      <section className="flex flex-col  gap-3 w-full items-center  mb-30 ">
        <div className="  flex flex-col xl:flex-row    ">
          <div className="flex flex-col items-center text-center  w-[400px] py-10">
            <img
              src="/public/exchange-line.svg"
              alt=""
              className=" w-[50px] mb-5 "
            />

            <p className="font-semibold  text-2xl text-gray-700">
              Easy Exchange Policy
            </p>
            <p className="text-gray-400  text-xl">
              We offer free exchange policy
            </p>
          </div>
          <div className="flex flex-col items-center  w-[400px] py-10">
            <img
              src="/public/truck-return.svg"
              alt=""
              className=" w-[50px] mb-5 "
            />
            <p className="font-semibold  text-2xl text-gray-700">
              7 Days Return Policy
            </p>
            <p className="text-gray-400  text-xl">
              We provide 7 days free return policy
            </p>
          </div>
          <div className="flex flex-col items-center  w-[400px] py-10">
            <img src="/public/support.svg" alt="" className=" w-[50px] mb-5 " />
            <p className="font-semibold  text-2xl text-gray-700">
              Best customer support
            </p>
            <p className="text-gray-400  text-xl">
              We provide 24/7 customer support
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center px-10    ">
          <p className="font-bold text-xl lg:text-2xl text-gray-700">
            Subscribe now & get 25% off
          </p>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ex?
          </p>
          <div className="flex border w-full">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full px-2 border-none outline-none"
            />{" "}
            <button className="bg-black text-white px-3 py-3">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopHome;
