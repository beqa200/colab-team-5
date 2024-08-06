import React from "react";

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
        onMouseEnter={() => console.log("Modal hover")} // Keep modal open on hover
        onMouseLeave={onClose} // Close modal on mouse leave
        style={{ height: "240px", padding: "16px" }}
      >
        <div className="relative bg-white w-full h-full rounded">
          <a
            href="#"
            className="absolute top-2 right-2 text-gray-700 text-2xl font-bold"
            onClick={onClose}
          >
            X
          </a>
          <h3 className="text-center text-xl font-semibold mt-4">
            Modal Title
          </h3>
          <p className="text-center">{title}</p>
        </div>
      </div>
    )
  );
};

export default GenderCategoryHoverModal;
