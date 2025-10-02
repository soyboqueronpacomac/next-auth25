
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { loginSchema } from "./app/(auth)/sign-in/libs"
import { db } from "./lib"
import { compare } from "bcryptjs"
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { data, success } = loginSchema.safeParse(credentials)
        if (!success) {
            throw new Error("Los credeciales son incorrectos.")
        }
        const { email, password} = data
        // Verificar si el usuario existe en base de datos
        const user = await db.user.findUnique({where: { email}})
        if (!user || !user.password) {
            throw new Error("El usuario no existe")
        }
        // Verificar si la contraseña es correcta
        const isValid = await compare(password, user.password)
        if (!isValid) {
            throw new Error("La contraseña es incorrecta")
        }
        // return user object with their profile data
        return user
      },
    }),
  ],
} satisfies NextAuthConfig