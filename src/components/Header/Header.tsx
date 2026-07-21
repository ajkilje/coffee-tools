import { Link } from "react-router-dom";
import logo from "../../assets/flour-feine-logo.svg";

function Header() {
  return (
    <header className="border-b border-stone-200 bg-[#F1EBE1]">
      <div className="mx-auto flex max-w-5xl items-center gap-8 px-8 py-6">
        <Link to="/" className="flex w-full items-center gap-8 no-underline">
          <img src={logo} alt="Flour & Feine" className="h-24 w-24 flex-shrink-0 object-contain" />

          <div className="flex-1">
            <h1 className="text-3xl font-bold leading-none tracking-tight text-[#3B161D]">
              Coffee Tools
            </h1>

            <p className="mt-3 text-xl text-stone-600">Brew better coffee. Less guesswork.</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
