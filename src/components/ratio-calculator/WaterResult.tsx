import { motion } from "motion/react";

interface WaterResultProps {
  water: number;
  coffee: number;
  ratio: number;
}

export default function WaterResult({ water, coffee, ratio }: WaterResultProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-xl bg-[#F8F4ED] p-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Water</p>

      <motion.p
        className="mt-4 text-6xl font-bold leading-none text-[#3B161D]"
        key={water}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
        {water}
        <span className="ml-2 text-2xl font-medium">g</span>
      </motion.p>

      <p className="mt-4 text-sm text-stone-500">
        For <span className="font-medium text-[#3B161D]">{coffee} g</span> coffee at{" "}
        <span className="font-medium text-[#3B161D]">1:{ratio}</span>
      </p>
    </div>
  );
}
