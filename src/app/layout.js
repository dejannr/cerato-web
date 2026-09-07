import "@/styles/globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata = {
  metadataBase: new URL("https://ceratosystems.com"),
  title: { default: "Cerato Systems — Custom Software Built Around Your Business", template: "%s" },
  description: "Cerato Systems designs and builds custom operational software for businesses that have outgrown spreadsheets, manual processes, and disconnected tools.",
  openGraph: { type: "website", siteName: "Cerato Systems", images: [{ url: "/og-placeholder.svg", width: 1200, height: 630, alt: "PLACEHOLDER: SOCIAL / OPEN GRAPH IMAGE" }] },
  twitter: { card: "summary_large_image", images: ["/og-placeholder.svg"] },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
