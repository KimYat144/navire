import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation, useNavigate } from "react-router-dom";
import { categories } from "../../utils/constants";

const MinCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (cat) => {
    const params = new URLSearchParams(location.search);
    params.set("category", cat);
    navigate(`/products?${params.toString()}`);
  };

  return (
    <section className="hidden sm:block bg-white w-full px-2 sm:px-12 overflow-hidden border-b mt-14">
      <div className="flex items-center justify-between p-0.5 flex-wrap gap-2">
        {categories.map((el, i) => (
          <span
            key={i}
            onClick={() => handleClick(el)}
            className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue flex items-center gap-0.5 cursor-pointer group rounded hover:bg-gray-100"
          >
            {el}{" "}
            <span className="text-gray-400 group-hover:text-primary-blue">
              <ExpandMoreIcon sx={{ fontSize: "16px" }} />
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default MinCategory;
