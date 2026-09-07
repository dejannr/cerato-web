/** Future analytics integration point; connect a vendor here when selected. */
export function trackEvent(name, properties = {}) {
  if (process.env.NODE_ENV === "development") console.info("[analytics placeholder]", name, properties);
}
