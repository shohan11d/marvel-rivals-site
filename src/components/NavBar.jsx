import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = [
  {
    label: "News",
    href: "https://www.marvelrivals.com/news/",
  },
  { label: "Game Info", href: "www" },
  { label: "Hero", href: "" },
  { label: "Event", href: "" },
  { label: "Esports", href: "/esports" },
];
function NavBar() {
  return (
    <div className="flex px-4 py-4 justify-between bg gap-6 fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between font-general uppercase  container mx-auto w-full gap-6">
        <a
          href="/"
          className="flex gap-2 items-center justify-center cursor-pointer"
        >
          <img className="w-15" src="img/logo.png" alt="" />
          <span className="font-zentry text-xl">Rivals</span>
        </a>
        <ul className="hidden md:flex gap-6 text-[12px] font-thin justify-center items-center">
          {navItems.map((item, index) => {
            const isExternal = item.href && item.href.startsWith("http");
            return (
              <li key={index} className="text-white cursor-pointer">
                <a
                  href={item.href}
                  className="nav-hover-btn"
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
