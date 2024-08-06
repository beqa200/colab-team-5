import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import GenderCategoryHoverModal from "./GenderCategoryHoverModal";
import SignInModal from "./SignIn";

const Layout: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
    setModalOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (relatedTarget && relatedTarget.closest(".modal-section")) {
      return;
    }
    setModalOpen(false);
    setHoveredLink(null);
  };

  return (
    <div>
      <Header />
      <section
        className="relative w-full flex sticky top-0 justify-between px-8 py-8 bg-blue-500 hover-section"
        onMouseEnter={() => setModalOpen(true)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          className="px-[2rem] py-[1rem] rounded-sm bg-[red]"
          onMouseEnter={() => handleMouseEnter("boy")}
          to="/boy"
        >
          BOY
        </Link>

        <Link
          className="px-[2rem] py-[1rem] rounded-sm bg-[red]"
          onMouseEnter={() => handleMouseEnter("girl")}
          to="/girl"
        >
          GIRL
        </Link>
        <GenderCategoryHoverModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          hoveredLink={hoveredLink}
        />
      </section>
      <main className="py-4 px-4">
        <SignInModal />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
