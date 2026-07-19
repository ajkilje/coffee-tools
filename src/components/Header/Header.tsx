import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-[#F1EBE1]">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-3 no-underline"
        >
          <Coffee
            size={32}
            className="text-[#3B161D]"
          />

          <div>
            <h1 className="text-3xl font-bold text-[#3B161D]">
              Coffee Tools
            </h1>

            <p className="mt-1 text-gray-600">
              Brew better coffee. Less guesswork.
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;