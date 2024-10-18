// components/MenuOverlay.tsx
import React from "react";
import NavLink from "./NavLink";

interface LinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: LinkItem[];
  closeMenu: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, closeMenu }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-20">
      <ul className="flex flex-col py-4 items-center space-y-4 bg-white p-6 rounded-md">
        {links.map((link, index) => (
          <li key={index} className="text-black text-xl hover:bg-gray-200 rounded-md p-2 transition">
            <NavLink href={link.path} title={link.title} onClick={closeMenu} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
