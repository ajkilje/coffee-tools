import Card from "./Card";

interface ComingSoonCardProps {
  emoji: string;
  title: string;
  tagline: string;
  description: string;
}

export default function ComingSoonCard({
  emoji,
  title,
  tagline,
  description,
}: ComingSoonCardProps) {
  return (
    <Card>
      <div className="flex flex-col items-center py-12 text-center">
        <div className="mb-5 text-5xl">{emoji}</div>

        <h2 className="text-3xl font-bold text-[#3B161D]">{title}</h2>

        <p className="mt-4 text-lg font-medium text-stone-700">{tagline}</p>

        <p className="mt-6 max-w-lg leading-7 text-stone-600">{description}</p>
      </div>
    </Card>
  );
}
