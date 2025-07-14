"use client";

import TypewriterOutput from "./TypeWriter";

export default function Output({
  text,
  type,
  typewriter = false,
  speed = 20,
  delay = 0,
}) {
  const getOutputStyle = () => {
    switch (type) {
      case "error":
        return "text-red-600";
      case "success":
        return "text-green-500";
      case "warning":
        return "text-yellow-500";
      case "command":
        return "text-matrix-green";
      case "entity":
        return "text-red-500 font-bold drop-shadow-[0_0_6px_rgba(255,0,0,0.75)]";
      default:
        return "text-white";
    }
  };

  return (
    <p
      className={`${getOutputStyle()} font-prime whitespace-pre-wrap break-words text-sm sm:text-base`}
    >
      {type === "command" && "> "}
      {typewriter ? (
        <TypewriterOutput text={text} speed={speed} delay={delay} type={type} />
      ) : (
        text
      )}
    </p>
  );
}
