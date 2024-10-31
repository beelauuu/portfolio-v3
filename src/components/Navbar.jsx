import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const navLinks = [
  {
    id: 1,
    name: "Skills",
    href: "skills",
  },
  {
    id: 2,
    name: "Experience",
    href: "experience",
  },
  {
    id: 3,
    name: "Projects",
    href: "projects",
  },
  {
    id: 4,
    name: "Resume",
    href: "https://drive.google.com/file/d/14YWeZcXRNGlLS9FQZacAw_qLQAVhEE7Y/view?usp=sharing",
  },
];

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        {item.name === "Resume" ? (
          <a
            href={item.href}
            className="nav-li_a"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        ) : (
          <Link
            to={item.href}
            smooth={true}
            duration={700}
            className="nav-li_a"
            onClick={onClick}
          >
            {item.name}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="#"
            className="text-black-700 font-bold text-5xl font-indie-flower hover:text-black-500 transition-colors"
          >
            BL
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-700 hover:text-black focus:outline-none sm:hidden flex transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <IoCloseSharp className="w-5 h-5" />
            ) : (
              <RxHamburgerMenu className="w-5 h-5" />
            )}
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-fit" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
