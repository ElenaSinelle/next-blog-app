"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type NavProps = {
  navLinks: NavLink[];
};

function Navigation({ navLinks }: NavProps) {
  //берём текущий адрес из адресной строки
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = link.href === pathname;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

export default Navigation;
