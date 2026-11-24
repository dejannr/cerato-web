import "@/styles/globals.css";
import { headers } from "next/headers";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata = {
  metadataBase: new URL("https://ceratosystems.com"),
  title: { default: "Cerato Systems — Logistics, Freight & Transportation Software", template: "%s" },
  description: "Custom logistics software, workflow automation, and TMS, ERP, and CRM integrations for freight and transportation companies.",
  openGraph: { type: "website", siteName: "Cerato Systems", images: [{ url: "/og-placeholder.svg", width: 1200, height: 630, alt: "PLACEHOLDER: SOCIAL / OPEN GRAPH IMAGE" }] },
  twitter: { card: "summary_large_image", images: ["/og-placeholder.svg"] },
};

export default async function RootLayout({ children }) {
  const isDemo = (await headers()).get("x-cerato-demo") === "1";
  return <html lang="en"><body>{isDemo ? children : <><SiteHeader /><main>{children}</main><SiteFooter /></>}</body></html>;
}
