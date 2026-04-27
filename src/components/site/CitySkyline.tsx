import skylineImg from "@/assets/skyline.png";

export const CitySkyline = () => {
  return (
    <div
      className="w-full overflow-hidden relative pointer-events-none select-none"
      style={{ height: "130px", backgroundColor: "#fff" }}
    >
      {/* Two identical strips side by side — animate moves left by 50%, then resets */}
      <div
        style={{
          display: "flex",
          width: "200%",
          height: "100%",
          animation: "skyline-scroll 30s linear infinite",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            backgroundImage: `url(${skylineImg})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "bottom left",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            width: "50%",
            height: "100%",
            backgroundImage: `url(${skylineImg})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "bottom left",
            flexShrink: 0,
          }}
        />
      </div>
    </div>
  );
};
