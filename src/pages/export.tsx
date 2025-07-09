import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DownloadIcon, FileJsonIcon, FileTextIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ExportPage() {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex flex-col">
            <h1 className="text-ls font-bold">Export Settings</h1>
            <span className="text-muted-foreground text-sm">
              Choose what data to export and in which format.{" "}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-lg border p-4">
            <h3 className="text-sm font-medium">Content to Export</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="export-words" className="flex flex-col gap-1">
                <span>Words</span>
                <span className="text-xs text-muted-foreground">5 saved</span>
              </Label>
              <Switch id="export-words" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="export-sentences" className="flex flex-col gap-1">
                <span>Sentences</span>
                <span className="text-xs text-muted-foreground">5 saved</span>
              </Label>
              <Switch id="export-sentences" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="format">Export Format</Label>
            <Select value="JSON">
              <SelectTrigger id="format" className="w-full">
                <SelectValue placeholder="Select a format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="json">
                  <div className="flex items-center gap-2">
                    <FileJsonIcon />
                    <span>JSON</span>
                  </div>
                </SelectItem>
                <SelectItem value="csv">
                  <div className="flex items-center gap-2">
                    <FileTextIcon />
                    <span>CSV</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-[#4D3885]" variant={"secondary"}>
            <DownloadIcon />
            Export Data
          </Button>
        </CardFooter>{" "}
      </Card>
    </div>
  );
}
