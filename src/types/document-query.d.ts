// Give the enquiry form's ID-based selectors their concrete DOM element types.
// This keeps the inline script type-safe without weakening DOM typings globally.
interface Document {
  querySelector(selectors: '#enquiry-form'): HTMLFormElement | null;
  querySelector(selectors: '#form-status'): HTMLDivElement | null;
  querySelector(selectors: '#enquiry-copy'): HTMLTextAreaElement | null;
  querySelector(selectors: '#copy-enquiry'): HTMLButtonElement | null;
  querySelector(selectors: '#copy-status'): HTMLSpanElement | null;
}
