import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const BubbleSearch: React.FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [activeBubbleColor, setActiveBubbleColor] = useState<string>("#b92121");
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLElement[]>([]);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    const bubbleElements = Array.from(
      document.querySelectorAll<HTMLElement>(".bubble")
    );
    bubblesRef.current = bubbleElements;
    bubbleElements.forEach((bubble) => bubble.classList.add("animate"));
  }, []);

  const handleBubbleClick = (index: number) => {
    setShowInput(true);
    setInputValue("");
    setActiveBubbleColor(bubbleColors[index]);
    bubblesRef.current.forEach((bubble) => bubble.classList.add("hidden"));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowInput(false);
      bubblesRef.current.forEach((bubble) => bubble.classList.remove("hidden"));
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setShowInput(false);
      bubblesRef.current.forEach((bubble) => bubble.classList.remove("hidden"));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const bubbleColors = [
    "#b92121",
    "#D1333B",
    "#EEB80B",
    "#4C83F0",
    "#1CAF60",
    "#D1333B",
  ];

  return (
    <div className="relative z-[2] xl:flex-1 flex items-center justify-center">
      <div
        className="relative md:w-[350px] h-[80px] flex items-center justify-center"
        ref={containerRef}
      >
        <div
          id="searchBox"
          className="absolute top-0 left-0 flex items-center justify-center md:w-full h-full"
        >
          {bubbleColors.map((color, index) => {
            const leftPosition = isMobile ? index * 40 : index * 50;

            return (
              <div
                key={index}
                className={`bubble ${showInput ? "hidden" : ""} ${
                  index === 5 ? "searchIcon" : ""
                }`}
                style={{
                  bottom: "11px",
                  left: `${leftPosition}px`,
                  backgroundColor: color,
                  transition: "left 0.3s ease-in-out",
                }}
                onClick={() => handleBubbleClick(index)}
              >
                <p
                  className={`text-white font-extrabold transition-colors duration-1000 ${
                    showInput && index === 5 ? "text-[#333]" : "text-[#f9f9f9]"
                  }`}
                >
                  {showInput && index === 5
                    ? ""
                    : ["S", "E", "A", "R", "C", "H"][index]}
                </p>
              </div>
            );
          })}
          <input
            type="text"
            className={`inputSearch ${showInput ? "show" : ""}`}
            style={{ color: "white", backgroundColor: activeBubbleColor }}
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default BubbleSearch;
