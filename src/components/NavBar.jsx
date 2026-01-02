import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
function NavBar() {
  return (
    <div className="flex py-4 justify-between bg gap-6 fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between font-general uppercase  container mx-auto w-full gap-6">
        <div className="flex gap-6">
          <img className="h-10 w-10" src="img/logo.png" alt="" />
          <Button
            id="watch-trailer"
            title="Products"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-white flex-center gap-1 self-start"
          />{" "}
        </div>
        <ul className="flex gap-6 text-[12px] font-thin justify-center items-center">
          {navItems.map((item, index) => (
            <li key={index} className="text-white">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
