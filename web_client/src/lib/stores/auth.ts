import { writable } from 'svelte/store';

export const authToken = writable<string | null>(null);
export const userRole = writable<string | null>(null);
