"use client";

import { useAppSelector } from "@/redux/store";
import { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useAppSelector((state) => state.tool[activeMenuItem]);
  console.log(color, size);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
