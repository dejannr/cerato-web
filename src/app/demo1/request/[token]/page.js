import PublicRequestForm from "@/components/demo/public-request-form";

export default async function RequestPage({ params }) {
  const { token } = await params;
  return <PublicRequestForm token={token} />;
}
