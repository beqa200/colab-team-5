// pages/StartPage.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div className="flex  w-full">
      <div className="w-1/2 flex items-center justify-center bg-green-500">
        <Link to="/boy">Boy</Link>
      </div>

      <div className="w-1/2 h-screen flex items-center justify-center bg-yellow-500">
        <Link to="/girl">Girl</Link>
      </div>
    </div>
  );
}
