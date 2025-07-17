import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function isLightColor(hexColor: string) {
  // Remove the '#' character if present
  const cleanedHex = hexColor.replace('#', '');

  // Convert hex to RGB values
  const r = parseInt(cleanedHex.slice(0, 2), 16);
  const g = parseInt(cleanedHex.slice(2, 4), 16);
  const b = parseInt(cleanedHex.slice(4, 6), 16);

  // Calculate perceived brightness using the luminosity formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Determine if the color is light based on brightness threshold
  return brightness > 155;
}