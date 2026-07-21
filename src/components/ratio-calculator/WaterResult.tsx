interface WaterResultProps {
  water: number;
}

export default function WaterResult({ water }: WaterResultProps) {
  return (
    <div>
      <strong>Water</strong>

      <p>{water} g</p>
    </div>
  );
}
