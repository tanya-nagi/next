import { EmailVerified } from "@components/admin/emailVerified";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EmailVerified userId={id} />
    </main>
  );
}
