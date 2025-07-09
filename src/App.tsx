import { ThemeProvider } from "@/components/theme-provider";
import { BookIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardPage from "./pages/dashboard";
import WordsPage from "./pages/words";
import SentencesPage from "./pages/sentences";
import ExportPage from "./pages/export";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="p-10">
          <div className="flex pb-8">
            <div className="bg-[#4D3885] h-14 w-14 rounded-md flex justify-center items-center mr-4">
              <BookIcon size={28} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold">LinguaFree</h1>
              <h1>Learn from YouTube captions</h1>
            </div>
          </div>

          <div>
            <div>
              <Tabs defaultValue="dashboard" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="words">Words</TabsTrigger>
                  <TabsTrigger value="sentences">Sentences</TabsTrigger>
                  <TabsTrigger value="export">Export</TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard">
                  <DashboardPage />
                </TabsContent>
                <TabsContent value="words">
                  <WordsPage />
                </TabsContent>
                <TabsContent value="sentences">
                  <SentencesPage />
                </TabsContent>
                <TabsContent value="export">
                  <ExportPage />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
