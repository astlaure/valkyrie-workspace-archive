export {};

declare global {
  interface Window {
    valkyrie?: { basename: string };
  }
}
