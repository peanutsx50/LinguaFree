export default function SubtitleToggleButton() {
  return (
    <button
      style={{
        backgroundColor: "#4D3885",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "6px",
        padding: "8px 16px",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      Subtitles
      <div
        style={{
          width: "1px",
          height: "20px",
          backgroundColor: "white",
        }}
      ></div>
      ON
    </button>
  );
}
