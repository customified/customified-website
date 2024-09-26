import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dataURLtoFile(dataurl: string | null, filename: string) {

  if (!dataurl) return null; 

  const arr = dataurl?.split(',');
  const mime = arr?.[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr? arr[1] : '' );
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export const isCanvasBlank = (canvas: HTMLCanvasElement): boolean => {
  const context = canvas.getContext('2d');
  if (!context) return true;

  const pixelBuffer = new Uint32Array(
    context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
  );

  return !pixelBuffer.some(color => color !== 0);
};


