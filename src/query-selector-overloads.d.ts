// Work around Astro's narrowed querySelector overloads in the inline page script.
interface ParentNode {
  querySelector(selectors: '.menu-toggle'): HTMLButtonElement | null;
  querySelector(selectors: '#primary-nav'): HTMLElement | null;
}
