import React from "react";

interface NavLinkProps {
  href: string;
  section: string;
  active: boolean;
  onClick: (section: string) => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  section,
  active,
  onClick,
  children,
}) => {
  const handleClick = () => {
    onClick(section);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${
        active
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      } block px-3 py-2 rounded-md text-base font-medium transition duration-300`}
    >
      {children}
    </a>
  );
};

export default NavLink;
