import ToolCard from "../../components/ToolCard/ToolCard";
import { tools } from "../../data/tools";

function Home() {
  return (
    <main className="min-h-screen bg-[#F1EBE1] p-6">
      <div className="mx-auto max-w-md">
        <div className="mt-8 space-y-4">
          {tools.map((tool) => (
            <ToolCard
                key={tool.id}
                tool={tool}
            />
            ))}
        </div>
      </div>
    </main>
  );
}

export default Home;