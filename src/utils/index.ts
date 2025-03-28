import { twMerge } from 'tailwind-merge'
import clsx, { ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateArrayByNumber = (number: number) => {
  return Array.from({ length: number }, (_, i) => i + 1)
}

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional: for smooth scrolling
  })
}
