import { auth } from "@/auth";            // 👈 v5
import { redirect } from "next/navigation";
import {LogoutButton} from "@/components/LogoutButton"; // 👈 importa por ruta directa

export default async function Page() {
  const session = await auth();

  if (!session) {
    // si no hay sesión, fuera
    redirect("/sign-in");
  }

  return (
    <div className="container py-6">
      <pre className="mb-4">{JSON.stringify(session, null, 2)}</pre>
      <LogoutButton />
    </div>
  );
}