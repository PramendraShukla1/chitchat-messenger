"use client";

import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}
const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        `group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-yellow-100`,
        active && "bg-red-200 text-black"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
