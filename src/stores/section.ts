import { writable } from "svelte/store";

export type Section = "top" | "intro" | "languages" | "platforms" | "projects" | "tools"

export default writable<Section>("top");