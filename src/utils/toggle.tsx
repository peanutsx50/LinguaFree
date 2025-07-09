// src/ToggleButton.tsx

import { createRoot } from "react-dom/client";

function SubtitleButton() {
  return (
    <button
      onClick={() => alert("React button clicked")}
      style={{
        background: "transparent",
        border: "none",
        color: "white",
        fontSize: "18px",
        marginLeft: "8px",
        cursor: "pointer",
      }}
    >
      💬
    </button>
  );
}

export function injectReactButton() {
  const observer = new MutationObserver(() => {
    const controls = document.querySelector(".ytp-right-controls");

    if (controls && !document.querySelector("#react-subtitle-button")) {
      const container = document.createElement("div");
      container.id = "react-subtitle-button";
      controls.insertBefore(container, controls.children[0]);

      const root = createRoot(container);
      root.render(<SubtitleButton />);

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
