"use client";

import React, { useEffect } from "react";
import { fabric } from "fabric";
import { useCanvasStore } from "@/hooks/useCanvasStore";

interface CanvasComponentProps {
  canvasType: 'front' | 'back';
  height: string;
  width: string;
  rounded? : boolean;
}

const CanvasComponent: React.FC<CanvasComponentProps> = ({ canvasType, height, width, rounded }) => {
  const { setFrontCanvas, setBackCanvas } = useCanvasStore();


  useEffect(() => {
    const h = Number(height);
    const w = Number(width);
    const canvasId = `${canvasType}-canvas-id`;

    
    const canvas = new fabric.Canvas(canvasId, {
      height: h,
      width: w,
      backgroundColor: "transparent",
      preserveObjectStacking: true,
    });

    if (canvasType === 'front') {
      setFrontCanvas(canvas);
      canvas.requestRenderAll();
    } else {
      setBackCanvas(canvas);
      canvas.requestRenderAll();
    }

    return () => {
      canvas.dispose();
    };
  }, [canvasType, height, width, setFrontCanvas, setBackCanvas]);

  return <canvas id={`${canvasType}-canvas-id`} className={`border border-dashed z-30 border-black ${rounded? 'rounded-full' : ''}`} />;
};

export default CanvasComponent;


