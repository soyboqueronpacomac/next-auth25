import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || "Admin1234!";
  const userPassword = process.env.SEED_USER_PASSWORD || "User1234!";

  const adminHash = await bcrypt.hash(adminPassword, 10);
  const userHash = await bcrypt.hash(userPassword, 10);

  // Crear admin
  await prisma.user.upsert({
    where: { email: "elboqueronpaco@icloud.com" },
    update: {},
    create: {
      name: "Pacodev",
      email: "elboqueronpaco@icloud.com",
      password: adminHash,
      role: "admin",
    },
  });

  // Crear usuario normal
  await prisma.user.upsert({
    where: { email: "elboqueronpaco@gmail.com" },
    update: {},
    create: {
      name: "elboqueropaco",
      email: "elboqueronpaco@gmail.com",
      password: userHash,
      role: "user",
    },
  });

  console.log("Usuarios de seed creados ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });