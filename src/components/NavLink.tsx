// components/NavLink.tsx
import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void; // Optional onClick prop
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
  return (
    <Link href={href} onClick={onClick} className="text-black hover:text-gray-700">
      {title}
    </Link>
  );
};

export default NavLink;
