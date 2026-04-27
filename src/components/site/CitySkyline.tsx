import skylineImg from "@/assets/skyline.png";

export const CitySkyline = () => {
  return (
    <div className="w-full overflow-hidden relative pointer-events-none select-none bg-white" style={{ height: "140px" }}>
      <div
        className="flex absolute top-0 left-0 h-full animate-marquee-slow"
        style={{ width: "max-content" }}
      >
        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            src={skylineImg}
            alt=""
            className="h-full w-auto object-contain shrink-0"
          />
        ))}
      </div>
    </div>
  );
};
