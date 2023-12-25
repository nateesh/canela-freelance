import { writable } from 'svelte/store';

export const isMobileMenuOpen = writable(false);
export const formMessage = writable('');