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
        <div className="w-[400px] h-fit overflow-hidden">
          <header className="dark:bg-gradient-to-b from-[#4D3885]/30 to-[#2B1C57]/0 py-3">
            <div className="container mx-auto flex items-center gap-4 px-3">
              <div className="text-primary-foreground p-3 rounded-lg dark:bg-[#4D3885]">
                <BookIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold font-headline">
                  Linguafree
                </h1>
                <p className="text-sm md:text-base text-muted-foreground">
                  Learn from YouTube captions
                </p>
              </div>
            </div>
          </header>
          <div className="px-3">
            <div className="pb-2">
              <Tabs defaultValue="dashboard" className="w-full">
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

            <div className="px-3 mb-2 flex justify-center items-center w-full h-20 dark:bg-[#4D3885]/20 dark:border dark:border-[#4D3885]/40 rounded-md">
              <h1 className="text-sm text-center">
                Go to YouTube and activate Linguafree to start saving
                vocabulary!
              </h1>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
