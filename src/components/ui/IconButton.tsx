import type { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export default function IconButton({ icon, onClick, disabled = false }: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex h-12 w-12 items-center justify-center
        rounded-full border text-2xl font-medium
        transition-all duration-150
        ${
          disabled
            ? "cursor-not-allowed border-stone-200 bg-stone-100 text-stone-300"
            : "border-stone-300 bg-white text-[#3B161D] hover:bg-stone-100 active:scale-95"
        }
      `}
    >
      {icon}
    </button>
  );
}
