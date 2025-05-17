import type { Chat } from "./types.d.ts";

declare module "./chats.js" {
  export function log(chats: Chat[]): void;
  export const chats: Chat[];
}
