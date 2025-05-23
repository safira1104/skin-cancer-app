// lib/utils.ts

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn() menggabungkan class dengan penghapusan konflik tailwind (twMerge)
export function cn(...inputs: any[]) {
  return twMerge(clsx(...inputs));
}
