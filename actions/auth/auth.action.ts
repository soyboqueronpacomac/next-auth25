"use server";

import  type { LoginFormValues } from "@/app/(auth)/sign-in/libs";
import { signIn } from "@/auth";           // NextAuth v5 (ruta generada por tu setup)
import { AuthError } from "next-auth";


export async function signInAction(values: LoginFormValues) {
  try {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      // si quieres redirigir automáticamente en éxito:
      redirect: false,
    });

    // Si no hay redirect automático (p.e. desactivado en tu config), puedes:
    // return { success: true };

    return { success: true }; // normalmente no llega aquí si redirige
  } catch (error) {
    if (error instanceof AuthError) {
      // Tipos comunes: "CredentialsSignin", "CallbackRouteError", etc.
      if (error.type === "CredentialsSignin") {
        // mensaje amigable al usuario
        return { success: false, error: "Credenciales inválidas" };
      }
      // Si el proveedor lanza más detalle en cause:
      const causeMsg =
        (error.cause as any)?.err?.message ||
        (error.cause as any)?.message ||
        error.message;

      return {
        success: false,
        error: causeMsg || "Error de autenticación",
      };
    }

    console.error("[signInAction] Unexpected error:", error);
    return { success: false, error: "Error interno del servidor" };
  }
}