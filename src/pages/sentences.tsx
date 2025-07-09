import { ScrollArea } from "@/components/ui/scroll-area";
import { sentenceData } from "@/utils/constants";
import { PlayIcon, TrashIcon } from "lucide-react";

export default function SentencesPage() {
  return (
    <div>
      <h4 className="mb-4 mt-2 text-xl leading-none font-bold">My Sentences</h4>
      <ScrollArea className="h-70 w-full rounded-md border">
        <div className="p-4 flex flex-col gap-4">
          {sentenceData.map((item, index) => (
            <Sentences
              key={index}
              name={item.name}
              definition={item.definition}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

function Sentences({ name, definition }: { name: string; definition: string }) {
  return (
    <div className="w-full flex justify-between items-start p-4 bg-muted rounded-lg shadow-sm hover:bg-muted/80 transition">
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-primary">{name}</h2>
        <p className="text-sm text-muted-foreground mt-1">{definition}</p>
      </div>
      <div className="flex items-center gap-3 ml-4">
        <button>
          <PlayIcon
            size={18}
            className="text-muted-foreground hover:text-green-500 transition"
          />
        </button>

        <button>
          <TrashIcon
            size={18}
            className="text-muted-foreground hover:text-red-500 transition"
          />
        </button>
      </div>
    </div>
  );
}
