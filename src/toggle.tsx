// src/ToggleButton.tsx

import { createRoot } from "react-dom/client";
import { Button } from "./components/ui/button";

export function injectReactButton() {
  const observer = new MutationObserver(() => {
    const controls = document.querySelector(".ytp-left-controls");

    if (controls && !document.querySelector("#react-subtitle-button")) {
      const container = document.createElement("div");
      container.id = "react-subtitle-button";
      controls.insertBefore(container, controls.children[3]);

      const root = createRoot(container);
      root.render(<Button variant={"secondary"}>Hello world</Button>);

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
