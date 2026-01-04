import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ["News", "Game Info", "Hero", "Event", "Esports"];
function NavBar() {
  return (
    <div className="flex px-4 py-4 justify-between bg gap-6 fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between font-general uppercase  container mx-auto w-full gap-6">
        <div className="flex gap-6">
          <img className="w-15 cursor-pointer" src="img/logo.png" alt="" />
        </div>
        <ul className="hidden md:flex gap-6 text-[12px] font-thin justify-center items-center">
          {navItems.map((item, index) => (
            <li key={index} className="text-white cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
