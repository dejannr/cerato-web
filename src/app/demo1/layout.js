import "./styles.css";

export const metadata = {
  title: "Shipment Request Demo | Cerato Systems",
  description: "A complete 30-day trial of Cerato's shipment request workflow.",
};

export default function DemoLayout({ children }) {
  return <div className="demo-scope">{children}</div>;
}
