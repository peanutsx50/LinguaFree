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
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full">
      <Card className="">
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

      <Card className="">
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
