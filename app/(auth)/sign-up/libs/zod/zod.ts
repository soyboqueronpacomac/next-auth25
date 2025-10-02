import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1,"El nonbre es obligatorio"),
  email: z.string().email("Introduce un correo válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;