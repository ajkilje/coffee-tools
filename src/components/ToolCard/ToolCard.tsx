import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Tool } from "@/types/tool";

interface ToolCardProps {
  tool: Tool;
}

function ToolCard({ tool }: ToolCardProps) {
  const {
    title,
    description,
    route,
    icon: Icon,
  } = tool;

  return (
    <Link
      to={route}
      className="
        block
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-lg
        focus:outline-none
        focus:ring-2
        focus:ring-[#3B161D]
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-4">
          <Icon
            size={26}
            className="text-[#3B161D]"
          />

          <div>
            <h2 className="text-xl font-semibold text-[#3B161D]">
              {title}
            </h2>

            <p className="mt-1 text-gray-500">
              {description}
            </p>
          </div>
        </div>

        <ChevronRight
          size={22}
          className="text-gray-400"
        />
      </div>
    </Link>
  );
}

export default ToolCard;