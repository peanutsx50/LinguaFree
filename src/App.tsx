import { ThemeProvider } from "@/components/theme-provider";
import DashboardPage from "./pages/dashboard";
import WordsPage from "./pages/words";
import SentencesPage from "./pages/sentences";
import ExportPage from "./pages/export";
import { useState } from "react";
import { Button } from "./components/ui/button";

const pages = [
  {
    name: "dashboard",
    page: <DashboardPage />,
  },
  {
    name: "Words",
    page: <WordsPage />,
  },
  {
    name: "Sentences",
    page: <SentencesPage />,
  },
  {
    name: "Export",
    page: <ExportPage />,
  },
];

function App() {
  const [currentpage, setCurrentPage] = useState(0);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <div>
          <Button onClick={() => setCurrentPage(currentpage + 1)}>
            Change page
          </Button>
        </div>
        {pages[currentpage].page}
      </div>
    </ThemeProvider>
  );
}

export default App;
