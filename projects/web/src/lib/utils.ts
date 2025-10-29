import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// AIDEV-NOTE: Utility for merging Tailwind CSS classes with proper precedence
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
