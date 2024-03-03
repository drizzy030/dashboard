"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export function HomePage() {
  const [textColor, setTextColor] = useState("");

  return (
    <div
      style={{
        color: textColor,
      }}
    >
      <TypeAnimation
        repeat={Infinity}
        className="lg:text:3xl text-3xl  font-bold xl:text-5xl"
        sequence={[
          "Dashboard Based On ",
          () => setTextColor("#6A3CE2"),
          "Sellix",
          () => setTextColor("#fff"),
        ]}
      />
    </div>
  );
}
