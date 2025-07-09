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
        <div className="p-10 w-full h-full">
          <div className="flex pb-8">
            <div className="bg-[#4D3885] h-14 w-14 rounded-md flex justify-center items-center mr-4">
              <BookIcon size={28} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold">LinguaFree</h1>
              <h1>Learn from YouTube captions</h1>
            </div>
          </div>

          <div className="px-5">
            <div className="pb-5">
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

            <div className="flex justify-center items-center w-full h-20 dark:bg-[#4D3885]/20 dark:border dark:border-[#4D3885]/40 rounded-md">
              <h1 className="text-lg">
                Go to YouTube and activate Linguafree to start saving
                vocabulary!
              </h1>
            </div>

            <div className="">
              <h1 className="text-xl font-semibold mb-2">How to Learn</h1>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Review saved words:</strong> Use the "Words" tab to
                  browse your vocabulary. Create flashcards to test your
                  knowledge.
                </li>
                <li>
                  <strong>Practice saved sentences:</strong> Visit the
                  "Sentences" tab to see your words in context. Use the AI tool
                  to perfect translations.
                </li>
                <li>
                  <strong>Export your data:</strong> Go to the "Export" tab to
                  download your word and sentence lists for offline use with
                  other apps.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
