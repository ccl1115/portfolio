import { writable } from "svelte/store";

export type Section = "intro" | "languages" | "platforms" | "projects" | "tools"

export default writable<Section>("intro");