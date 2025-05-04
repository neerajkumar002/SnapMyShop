import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../store/slice/product-slice";
import { addToCart } from "../../../store/slice/Cart-Slice";
import { toast } from "react-toastify";
import ShopProductCard from "../../../components/Shop/Products/Card";
import Shimmer from "../../../components/Shop/Shimmer/Shimmer";
import Breadcrumbs from "../../../components/common/Breadcrumbs";

const categoryData = [
  {
    id: 1,
    category: "all",
    lable: "ALL",
  },
  { id: 2, category: "mens-clothing", lable: "MENS" },
  { id: 3, category: "womens-clothing", lable: "WOMENS" },
];

const sortOptions = [
  {
    id: "price-hightolow",
    label: "Price - High to Low",
  },
  {
    id: "price-lowtohigh",
    label: "Price - Low to High",
  },
];

const ProductsListing = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.auth);
  const { productList, isLoading } = useSelector((state) => state.product);

  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [currentSort, setCurrentSort] = useState("");
  const [currentActiveTab, setCurrentActiveTab] = useState("all");

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (productList && productList?.length > 0) {
      handleFilter(productList, currentCategory, currentSort);
    }
  }, [productList, currentCategory, currentSort]);

  function handleFilter(productList, category, getSortOption) {
    let filteredProducts =
      category === "all"
        ? productList
        : productList.filter((item) => item.category === category);

    if (getSortOption) {
      const sortMethod = {
        "price-hightolow": (a, b) => b.price - a.price,
        "price-lowtohigh": (a, b) => a.price - b.price,
      };

      filteredProducts = [...filteredProducts].sort(sortMethod[getSortOption]);
    }

    setProducts(filteredProducts);
  }

  function handleCategoryFilter(getCategory) {
    setCurrentCategory(getCategory);
  }
  function handleSortSelection(getSortOption) {
    setCurrentSort(getSortOption);
  }

  function handleAddToCart(productId) {
    console.log(productId);
    if (!userData) {
      toast.warn("Please Login First!");
      return;
    }
    dispatch(
      addToCart({
        userId: userData?.id,
        productId: productId,
        quantity: 1,
      })
    ).then((data) => {
      if (data.payload.success) {
        toast.success("Product added in cart");
      }
    });
  }

  if (isLoading) return <Shimmer />;

  return (
    <div className="w-full lg:px-6 ">
      <div>
        {/* main products */}
        <div>
          <div>
            <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between lg:px-8  ">
              <div className="flex gap-3">
                {categoryData &&
                  categoryData.map((btn, index) => (
                    <button
                      key={btn.id}
                      onClick={() => {
                        handleCategoryFilter(btn.category);
                        setCurrentActiveTab(btn.category);
                      }}
                      className={` px-2 rounded-md font-semibold cursor-pointer transition-all duration-300 active:bg-black
                        ${
                          currentActiveTab === btn.category
                            ? "bg-black text-white"
                            : "bg-gray-200"
                        }
                        `}
                    >
                      {btn.lable}
                    </button>
                  ))}
              </div>
              <select
                name=""
                id=""
                className="border px-2 py-1"
                onChange={(e) => handleSortSelection(e.target.value)}
              >
                <option value="" hidden>
                  Sort By: Relavent
                </option>
                {sortOptions &&
                  sortOptions.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-2  lg:grid-cols-4 lg:place-items-center lg:px-8 py-4">
            {products && products.length > 0 ? (
              products.map((item) => (
                <ShopProductCard
                  key={item?._id}
                  id={item?._id}
                  title={item?.title}
                  price={item?.price}
                  image={item?.image}
                  averageReview={item?.averageReview}
                  handleAddToCart={handleAddToCart}
                />
              ))
            ) : (
              <p>No Products Available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
