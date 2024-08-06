import React from "react";
import Data from "../data.json";
import { Link } from "react-router-dom";

interface GenderCategoryHoverModalProps {
  isOpen: boolean;
  onClose: () => void;
  hoveredLink: string | null;
}

const GenderCategoryHoverModal: React.FC<GenderCategoryHoverModalProps> = ({
  isOpen,
  onClose,
  hoveredLink,
}) => {
  const title =
    hoveredLink === "boy"
      ? "Content for BOY"
      : hoveredLink === "girl"
      ? "Content for GIRL"
      : null;

  return (
    isOpen &&
    title && (
      <div
        className="absolute bottom-[-22rem] left-0 w-full bg-white shadow-md modal-section"
        onMouseEnter={() => console.log("Modal hover")}
        onMouseLeave={onClose}
        style={{ height: "240px", padding: "16px" }}
        role="dialog"
        aria-labelledby="modal-title"
        aria-hidden={!isOpen}
      >
        <div className="relative bg-white w-full h-full rounded">
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-700 text-2xl font-bold"
            onClick={onClose}
            aria-label="Close modal"
          >
            X
          </button>
          <div className="flex pt-8 px-12  gap-4 text-base font-medium">
            <div className="flex flex-col gap-[1rem]">
              {Data.categories.map((category, index) => (
                <Link
                  key={index}
                  className={`${
                    hoveredLink === "boy" ? "text-start " : "text-end"
                  } category-item-link`}
                  to=""
                >
                  {category}
                </Link>
              ))}
              <span
                className={` ${
                  hoveredLink === "boy" ? "text-start " : "text-end"
                } font-semibold text-lg text-red-500`}
              >
                BIG SALE
              </span>
            </div>
            <div>
              {Data.products.map((item, index) => (
                <div className="flex " key={index}>
                  {item.images.map((img) => (
                    <img className="w-[50px] h-[50px]" src={img} alt="" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default GenderCategoryHoverModal;
