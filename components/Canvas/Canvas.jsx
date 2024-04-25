"use client";

import { MENU_ITEMS } from "@/constants";
import { actionClickHandler } from "@/redux/feature/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const shouldDraw = useRef(false);
  const { activeMenuItem, actionMenuItem } = useAppSelector(
    (state) => state.menu
  );
  const { color, size } = useAppSelector((state) => state.tool[activeMenuItem]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (actionMenuItem === MENU_ITEMS.DOWNLOAD) {
      const URL = canvas.toDataURL();
      let link = document.createElement("a");
      link.download = "image.png";
      link.href = URL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    dispatch(actionClickHandler(null));
  }, [actionMenuItem]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x, y) => {
      context.beginPath();
      context.moveTo(x, y);
    };

    const drawLine = (x, y) => {
      context.lineTo(x, y);
      context.stroke();
    };

    const handleMouseDown = (e) => {
      shouldDraw.current = true;
      beginPath(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
      if (!shouldDraw.current) return;
      drawLine(e.clientX, e.clientY);
    };

    const handleMouseUp = (e) => {
      shouldDraw.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");

    context.strokeStyle = color;
    context.lineWidth = size;
  }, [color, size]);

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
