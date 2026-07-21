import type { Characteristic } from "../../types/brew";

interface CharacteristicListProps {
  characteristics: Characteristic[];
}

export default function CharacteristicList({ characteristics }: CharacteristicListProps) {
  return (
    <div>
      <strong>Characteristics</strong>

      <ul>
        {characteristics.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
