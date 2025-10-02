"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { RegisterFormValues, registerSchema } from "../../libs";



// Simula tu acción de login (sustituye por server action o fetch)
async function loginAction(values: RegisterFormValues) {
  console.log("Login:", values);
  // await signIn(...) / fetch("/api/login", { method: "POST", body: JSON.stringify(values) })
}

export function SignUpForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "",  email: "", password: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await loginAction(values);
  });

  return (
    <>
      <Card className="w-full max-w-lg p-8">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Inicia sesión en tu cuenta</CardTitle>
              <CardDescription>
                Introduce tu correo electrónico para acceder a tu cuenta
              </CardDescription>
            </div>
            <Button asChild variant="link" className="px-0 ml-2">
              <a href="/sign-in">Iniciar sessión</a>
            </Button>
          </div>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={onSubmit}>
            <CardContent className="flex flex-col gap-4 mb-6">
              {/* Email */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="introduce tu nombre..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="ejemplo@correo.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Contraseña</FormLabel>
                      <Button asChild variant="link" className="px-0 text-sm">
                        <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
                      </Button>
                    </div>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Enviando..." : "Registrarte"}
              </Button>

              {/*
                <Button type="button" variant="outline" className="w-full">
                Iniciar sesión con Google
              </Button>
              */}
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
}