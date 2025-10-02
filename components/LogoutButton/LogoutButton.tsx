"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export  function LogoutButton() {
  const handleClick = async () => {
    await signOut({ callbackUrl: "/sign-in" }); // opcional: redirige tras cerrar sesión
  };

  return <Button onClick={handleClick}>Cerrar sesión</Button>;
}