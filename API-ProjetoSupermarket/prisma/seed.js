import bcryptjs from "bcryptjs";
import { prisma } from "../src/lib/prisma.js";

async function executeSeed() {
  await prisma.user.create({
    data: {
      email: "admin@gmail.com",
      senha: await bcryptjs.hash("123456", 8),
      cpf: "123.456.789-09",
      nome: "Admin",
      tipoUsuario: "ADMIN",
    },
  });
}

executeSeed();
