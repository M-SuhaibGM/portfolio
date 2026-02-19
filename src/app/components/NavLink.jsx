// NavLink.jsx
import Link from "next/link";

const NavLink = ({ href, title, icon }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-cyan-400 font-medium transition-colors"
    >
      <span className="text-sm">{title}</span>
    </Link>
  );
};

export default NavLink;