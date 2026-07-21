import type { Characteristic } from "../../types/brew";

interface CharacteristicListProps {
  characteristics: Characteristic[];
}

export default function CharacteristicList({ characteristics }: CharacteristicListProps) {
  return (
    <div className="divide-y divide-stone-100 rounded-lg border border-stone-200 bg-stone-50">
      {characteristics.map((characteristic) => (
        <div key={characteristic.label} className="flex items-center justify-between px-4 py-3">
          <span className="text-stone-500">{characteristic.label}</span>

          <span className="font-medium text-[#3B161D]">{characteristic.value}</span>
        </div>
      ))}
    </div>
  );
}
