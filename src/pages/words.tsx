import { ScrollArea } from "@/components/ui/scroll-area";
import { PlayIcon, StarIcon, TrashIcon } from "lucide-react";

const data = [
  {
    name: "Vergänglich",
    liked: true,
    definition:
      "Etwas, das nur für kurze Zeit besteht; nicht dauerhaft (ephemeral).",
  },
  {
    name: "Sehnsucht",
    liked: false,
    definition:
      "Ein tiefes Verlangen oder starke innere Wunsch nach etwas oder jemandem.",
  },
  {
    name: "Geborgenheit",
    liked: true,
    definition:
      "Das Gefühl von Sicherheit und Wärme, meist im zwischenmenschlichen Kontext.",
  },
  {
    name: "Weltschmerz",
    liked: false,
    definition:
      "Eine melancholische Stimmung, die aus der Unvollkommenheit der Welt resultiert.",
  },
  {
    name: "Fremdschämen",
    liked: true,
    definition: "Das Gefühl von Scham für das Verhalten anderer Menschen.",
  },
  {
    name: "Zeitgeist",
    liked: true,
    definition:
      "Der geistige und kulturelle Klima eines bestimmten Zeitabschnitts.",
  },
  {
    name: "Torschlusspanik",
    liked: false,
    definition:
      "Die Angst, etwas Wichtiges zu verpassen, wenn die Zeit knapp wird.",
  },
];

export default function WordsPage() {
  return (
    <div>
      <h4 className="my-4 text-lg leading-none font-bold">My Vocabulary</h4>
      <ScrollArea className="h-70 w-full rounded-md border">
        <div className="p-4 flex flex-col gap-4">
          {data.map((item, index) => (
            <Vocabulary
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

function Vocabulary({
  name,
  definition,
}: {
  name: string;
  definition: string;
}) {
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
          <StarIcon
            size={18}
            className="text-muted-foreground hover:text-yellow-500 transition"
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
