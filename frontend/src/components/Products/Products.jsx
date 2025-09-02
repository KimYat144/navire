import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { useSnackbar } from "notistack";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Slider from "@mui/material/Slider";
import Pagination from "@mui/material/Pagination";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import StarIcon from "@mui/icons-material/Star";

import Loader from "../Layouts/Loader";
import Product from "./Product";
import MinCategory from "../Layouts/MinCategory";
import MetaData from "../Layouts/MetaData";

import { categories } from "../../utils/constants";
import { clearErrors, getProducts } from "../../actions/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const location = useLocation();

  const [price, setPrice] = useState([0, 200000000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryToggle, setCategoryToggle] = useState(true);
  const [ratingsToggle, setRatingsToggle] = useState(true);

  const { products, loading, error, resultPerPage, filteredProductsCount } =
    useSelector((state) => state.products);

  const keyword = params.keyword;

  // Khi URL thay đổi, cập nhật category
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setCategory(params.get("category") || "");
    setCurrentPage(1); // reset page
  }, [location.search]);

  const priceHandler = (e, newPrice) => setPrice(newPrice);

  const clearFilters = () => {
    setPrice([0, 200000000]);
    setCategory("");
    setRatings(0);
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getProducts(keyword, category, price, ratings, currentPage));
  }, [dispatch, keyword, category, price, ratings, currentPage, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="All Products | Flipkart" />
      <MinCategory />

      <main className="w-full mt-14 sm:mt-0">
        <div className="flex gap-3 mt-2 sm:mt-2 sm:mx-3 m-auto mb-7">
          {/* Sidebar */}
          <div className="hidden sm:flex flex-col w-1/5 px-1">
            <div className="flex flex-col bg-white rounded-sm shadow">
              <div className="flex items-center justify-between gap-5 px-4 py-2 border-b">
                <p className="text-lg font-medium">Bộ lọc</p>
                <span
                  className="uppercase text-primary-blue text-xs cursor-pointer font-medium"
                  onClick={clearFilters}
                >
                  Xóa tất cả
                </span>
              </div>

              <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
                {/* Price Filter */}
                <div className="flex flex-col gap-2 border-b px-4">
                  <span className="font-medium text-xs">Giá</span>
                  <Slider
                    value={price}
                    onChange={priceHandler}
                    valueLabelDisplay="auto"
                    min={0}
                    max={200000000}
                  />
                  <div className="flex gap-3 items-center justify-between mb-2 min-w-full">
                    <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                      đ{price[0].toLocaleString()}
                    </span>
                    <span className="font-medium text-gray-400">đến</span>
                    <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                      đ{price[1].toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-col border-b px-4">
                  <div
                    className="flex justify-between cursor-pointer py-2 pb-4 items-center"
                    onClick={() => setCategoryToggle(!categoryToggle)}
                  >
                    <p className="font-medium text-xs uppercase">Loại sản phẩm</p>
                    {categoryToggle ? (
                      <ExpandLessIcon sx={{ fontSize: "20px" }} />
                    ) : (
                      <ExpandMoreIcon sx={{ fontSize: "20px" }} />
                    )}
                  </div>

                  {categoryToggle && (
                    <div className="flex flex-col pb-1">
                      <FormControl>
                        <RadioGroup
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          {categories.map((el, i) => (
                            <FormControlLabel
                              key={i}
                              value={el}
                              control={<Radio size="small" />}
                              label={<span className="text-sm">{el}</span>}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </div>
                  )}
                </div>

                {/* Ratings Filter */}
                <div className="flex flex-col border-b px-4">
                  <div
                    className="flex justify-between cursor-pointer py-2 pb-4 items-center"
                    onClick={() => setRatingsToggle(!ratingsToggle)}
                  >
                    <p className="font-medium text-xs uppercase">Xếp hạng</p>
                    {ratingsToggle ? (
                      <ExpandLessIcon sx={{ fontSize: "20px" }} />
                    ) : (
                      <ExpandMoreIcon sx={{ fontSize: "20px" }} />
                    )}
                  </div>

                  {ratingsToggle && (
                    <div className="flex flex-col pb-1">
                      <FormControl>
                        <RadioGroup
                          value={ratings}
                          onChange={(e) => setRatings(Number(e.target.value))}
                        >
                          {[4, 3, 2, 1].map((el, i) => (
                            <FormControlLabel
                              key={i}
                              value={el}
                              control={<Radio size="small" />}
                              label={
                                <span className="flex items-center text-sm">
                                  {el}
                                  <StarIcon sx={{ fontSize: "12px", mr: 0.5 }} /> trở lên
                                </span>
                              }
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div className="flex-1">
            {loading ? (
              <Loader />
            ) : products?.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-3 bg-white shadow-sm rounded-sm p-6 sm:p-16">
                <img
                  draggable="false"
                  className="w-1/2 h-44 object-contain"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-no-search-results_2353c5.png"
                  alt="Search Not Found"
                />
                <h1 className="text-2xl font-medium text-gray-900">Không tìm thấy kết quả</h1>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pb-4 justify-center items-center w-full overflow-hidden bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-4 w-full place-content-start overflow-hidden pb-4 border-b">
                  {products.map((product) => (
                    <Product key={product._id} {...product} />
                  ))}
                </div>
                {filteredProductsCount > resultPerPage && (
                  <Pagination
                    count={Math.ceil(filteredProductsCount / resultPerPage)}
                    page={currentPage}
                    onChange={(e, val) => setCurrentPage(val)}
                    color="primary"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
