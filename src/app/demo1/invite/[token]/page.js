import InvitationPage from "@/components/demo/invitation-page";

export default async function InviteRoute({ params }) {
  const { token } = await params;
  return <InvitationPage token={token} />;
}
