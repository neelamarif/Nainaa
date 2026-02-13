import React, { useEffect, useState } from "react";

const CursorTrail: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 text-pink-400 text-xl"
      style={{
        top: position.y - 10,
        left: position.x - 10,
      }}
    >
      💖
    </div>
  );
};

export default CursorTrail;
