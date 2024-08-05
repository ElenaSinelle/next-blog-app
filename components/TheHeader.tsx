import Link from "next/link";
import Navigation from "./Navigation";

//здесь мы просто прописываем navItems. Но мы можем их брать с бэка в зависимости от типа пользователя
const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const TheHeader = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { TheHeader };
