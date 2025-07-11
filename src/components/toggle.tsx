// src/ToggleButton.tsx

import { createRoot } from "react-dom/client";
import SubtitleToggleButton from "./subtitles/SubtitleToggleButton";

export function injectReactButton() {
  const observer = new MutationObserver(() => {
    const controls = document.querySelector(".ytp-left-controls");

    if (controls && !document.querySelector("#react-subtitle-button")) {
      const shadowHost = document.createElement("div");
      shadowHost.id = "react-shadow-button";
      shadowHost.style.cssText = `
        display: inline-flex !important;
        align-items: center !important;
        margin-left: 8px !important;
      `;
      const shadowRoot = shadowHost.attachShadow({ mode: "open" });

      const container = document.createElement("div");
      shadowRoot.appendChild(container);
      controls.appendChild(shadowHost);

      const root = createRoot(container);
      root.render(<SubtitleToggleButton />);
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
