import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Words Saved</CardTitle>
          <CardAction>
            <BookIcon size={16} />
          </CardAction>
        </CardHeader>
        <CardContent className="font-bold text-2xl">5</CardContent>
        <CardFooter>
          <p className="text-muted-foreground text-sm">
            Total vocabulary words in your collection
          </p>
        </CardFooter>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Sentences Saved</CardTitle>
          <CardAction>
            <BookIcon size={16} />
          </CardAction>
        </CardHeader>
        <CardContent className="font-bold text-2xl">3</CardContent>
        <CardFooter>
          <p className="text-muted-foreground text-sm">
            Total example sentences you have saved
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
