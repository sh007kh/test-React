import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import { useRef, useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);
  // const autoheight = linksRef.current.getBoundingClientRect().height;

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setShowLinks(false);
    }
  });
  const handleShowLinks = () => {
    // console.log(autoheight);
    setShowLinks(!showLinks);
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="md:(flex justify-between items-center)">
        <div className="flex justify-between items-center px-4 py-2">
          <img src={logo} className="logo" alt="logo" />
          <button
            className="text-2xl text-blue-300 transition-all duration-300 ease-in-out hover:(text-3xl text-blue-500) md:hidden"
            onClick={handleShowLinks}
          >
            <FaBars />
          </button>
        </div>
        <div
          className="
            overflow-hidden h-0 transition-all duration-300 ease-in-out md:!h-auto
          "
          ref={linkContainerRef}
          style={{
            height: showLinks
              ? `${linksRef.current.getBoundingClientRect().height}px`
              : "0px",
          }}
        >
          <ul
            className="md:(flex justify-center items-center gap-4)"
            ref={linksRef}
          >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a
                    href={url}
                    className="block capitalize tracking-[0.1rem] py-1 pl-4 transition-all duration-300 ease-in-out hover:(bg-sky-200 text-blue-500 pl-6) md:hover:(bg-transparent p-0) md:(p-0)"
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="hidden md:(flex justify-between items-center flex-row gap-4 pr-4 text-xl)">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a
                  href={url}
                  className=" transition-all duration-300 ease-in-out hover:(bg-sky-200 text-blue-500) "
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
