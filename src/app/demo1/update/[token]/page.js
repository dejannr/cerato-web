import CustomerUpdateForm from "@/components/demo/customer-update-form";

export default async function CustomerUpdatePage({ params }) {
  const { token } = await params;
  return <CustomerUpdateForm token={token} />;
}
