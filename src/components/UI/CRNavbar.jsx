/* eslint-disable react/jsx-no-undef */
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const CRNavbar = ({
  orientation = "top",
  logo = { img: "", label: "Logo", size: "h-6", path: "/" },
  useRouter = false,
  isSticky = false,
  useMenu = true,
  ctaButtons = [],
  links = [],
  auth = false,
  useProfile = null,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const isTopOriented = orientation === "top";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest("button")) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navbarClasses = `
    ${isTopOriented ? "h-16" : "w-64 h-screen"}
    bg-white dark:bg-neutral-800
    ${isSticky ? "sticky top-0 left-0" : ""}
    flex ${isTopOriented ? "flex-row" : "flex-col"}
    items-center justify-between
    px-4 py-2 z-[100] sm:shadow-lg shadow-xl border-b-[1px] border-neutral-400 dark:border-neutral-700
  `;

  const renderLogo = () => {
    if (useRouter) {
      return (
        <Link to={logo.path} className="flex items-center">
          {logo.img ? (
            <img src={logo.img} alt={logo.label} className={logo.size || "h-6 w-auto"} />
          ) : (
            <span className="text-black dark:text-white text-lg font-semibold">{logo.label}</span>
          )}
        </Link>
      );
    }

    return (
      <a href={logo.path} className="flex items-center">
        {logo.img ? (
          <img src={logo.img} alt={logo.label} className={logo.size || "h-6 w-auto"} />
        ) : (
          <span className="text-black dark:text-white text-lg font-semibold">{logo.label}</span>
        )}
      </a>
    );
  };

  const renderLinks = () => (
    <ul className={`flex ${isMobile || !isTopOriented ? "flex-col" : "flex-row"} items-center space-y-2 lg:space-y-0 lg:space-x-1 m-0 sm:mr-3`}>
      {links.map((link, index) => {
        if (link.needAuthenticate && !auth) return null;

        const commonProps = {
          className: `flex items-center text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 px-3 py-2 rounded-md ${
            !isTopOriented && !isMobile ? "justify-center lg:justify-start" : ""
          } cursor-pointer ${link.className || ""}`,
          onClick: (e) => {
            if (link.dropdown && isMobile) {
              e.preventDefault();
              setOpenDropdownIndex(openDropdownIndex === index ? null : index);
            } else {
              isMobile && setIsMenuOpen(false);
            }
          },
        };

        const LinkElement = useRouter ? (
          <Link to={link.path || "#"} {...commonProps}>
            {link.icon && <span className="mr-2">{link.icon}</span>}
            <span className={`transition-opacity duration-300 ${!isTopOriented && !isMobile ? "opacity-0 lg:group-hover:opacity-100" : "opacity-100"}`}>
              {link.label}
            </span>
          </Link>
        ) : (
          <a href={link.path || "#"} {...commonProps}>
            {link.icon && <span className="mr-2">{link.icon}</span>}
            <span className={`transition-opacity duration-300 ${!isTopOriented && !isMobile ? "opacity-0 lg:group-hover:opacity-100" : "opacity-100"}`}>
              {link.label}
            </span>
          </a>
        );

        return (
          <li key={index} className="relative group w-full text-nowrap">
            {LinkElement}
            {link.dropdown && (
              <ul
                className={`${
                  isMobile
                    ? `max-h-0 overflow-hidden transition-all duration-200 ${
                        openDropdownIndex === index ? "max-h-screen pt-2 pb-1 py-1 border-b-[1px] border-l-[1px] border-r-[1px] border-neutral-300" : ""
                      }`
                    : "absolute min-w-max invisible group-hover:visible opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out border-[1px] border-neutral-400 dark:border-neutral-900"
                }  bg-neutral-200 dark:bg-neutral-700 -mt-1 rounded-b-md shadow-lg pr-2 sm:pr-0 overflow-hidden`}
              >
                {link.dropdown.map((subLink, subIndex) => {
                  const subCommonProps = {
                    className: `flex flex-row items-center pl-7 sm:pl-5 sm:pr-5 sm:ml-0 px-4 py-2 text-black dark:text-white hover:scale-105 hover:font-semibold transition-all dark:hover:bg-neutral-600 cursor-pointer whitespace-nowrap ${
                      subLink.className || ""
                    }`,
                    onClick: () => isMobile && setIsMenuOpen(false),
                  };

                  return (
                    <li key={subIndex}>
                      {useRouter ? (
                        <Link to={subLink.path} {...subCommonProps}>
                          {subLink.icon && <span className="mr-2">{subLink.icon}</span>}
                          {subLink.label}
                        </Link>
                      ) : (
                        <a href={subLink.path} {...subCommonProps}>
                          {subLink.icon && <span className="mr-2">{subLink.icon}</span>}
                          {subLink.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );

  // El resto del componente permanece igual...
  const renderCTAButtons = () => (
    <div className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center space-y-2 lg:space-y-0 lg:space-x-2 ${isMobile ? "w-full mt-4" : ""}`}>
      {ctaButtons.map((button, index) => (
        <button
          key={index}
          onClick={() => {
            button.onClick();
            isMobile && setIsMenuOpen(false);
          }}
          className={`flex items-center justify-center text-black dark:text-white bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 px-3 py-2 rounded-md ${
            isMobile ? "w-full" : ""
          } ${button.className || ""}`}
        >
          {button.icon && <span className="mr-2">{button.icon}</span>}
          {button.label}
        </button>
      ))}
    </div>
  );

  const renderProfile = () =>
    useProfile && (
      <div className={`flex items-center sm:pt-0 pt-5`}>
        <button
          onClick={() => {
            useProfile.onClick();
            isMobile && setIsMenuOpen(false);
          }}
          className={`flex items-center w-full px-4 mr-2 py-4 sm:py-2 rounded-lg sm:w-auto bg-neutral-600 text-white dark:bg-neutral-900 dark:text-white hover:bg-neutral-800 dark:hover:bg-neutral-700 cursor-pointer gap-1 sm:ml-0 ${
            useProfile.className || ""
          }`}
        >
          {useProfile.icon ? (
            <div className="w-auto min-h-4 max-h-6 mr-1">{useProfile.icon}</div>
          ) : (
            <span className="w-auto min-h-4 max-h-6 mr-1 rounded-full bg-neutral-200 flex items-center justify-center text-sm font-medium">
              {useProfile.label.charAt(0)}
            </span>
          )}
          <span>{useProfile.label}</span>
        </button>
      </div>
    );

  const renderMobileMenu = () => (
    <div
      ref={menuRef}
      className={`px-4 lg:hidden fixed left-0 right-0 top-16 bg-white dark:bg-neutral-800 z-50 transition-all duration-300 overflow-y-auto ${
        isMenuOpen ? "max-h-screen opacity-100 shadow-2xl border-b-[1px] border-neutral-400 dark:border-neutral-700" : "max-h-0 opacity-0 overflow-hidden"
      }`}
      style={{ maxHeight: isMenuOpen ? "calc(100vh - 4rem)" : "0" }}
    >
      <div className="p-4 flex flex-col space-y-4">
        {renderLinks()}
        {renderProfile()}
        {renderCTAButtons()}
      </div>
    </div>
  );

  return (
    <nav className={navbarClasses}>
      <div className="flex items-center">{renderLogo()}</div>
      <div className="hidden lg:flex items-center justify-end flex-grow">
        {renderLinks()}
        {renderProfile()}
        {renderCTAButtons()}
      </div>
      {useMenu && (
        <>
          <button
            onClick={handleMenuClick}
            className={`lg:hidden p-2 rounded-md text-black dark:text-white focus:outline-none ${isMenuOpen ? "hidden" : ""}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`lg:hidden p-2 rounded-md text-black dark:text-white focus:outline-none ${isMenuOpen ? "" : "hidden"}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </>
      )}
      {renderMobileMenu()}
    </nav>
  );
};

CRNavbar.propTypes = {
  orientation: PropTypes.oneOf(["top", "left"]),
  logo: PropTypes.shape({
    img: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
    path: PropTypes.string,
  }),
  useRouter: PropTypes.bool,
  isSticky: PropTypes.bool,
  useMenu: PropTypes.bool,
  ctaButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      icon: PropTypes.node,
      className: PropTypes.string,
    })
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
      icon: PropTypes.node,
      needAuthenticate: PropTypes.bool,
      className: PropTypes.string,
      dropdown: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
          icon: PropTypes.node,
          className: PropTypes.string,
        })
      ),
    })
  ),
  auth: PropTypes.bool,
  useProfile: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
    direction: PropTypes.oneOf(["left", "right"]),
    className: PropTypes.string,
  }),
};

export default CRNavbar;
