import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request,
) {
<<<<<<< HEAD
  const body = await request.json();
=======
  const body = await request.json() ;
>>>>>>> 8b5d983d6547af2e74a4e49ba16533cc0a068063
  const {
    email,
    name, 
    password,
  } = body ; 
  const hashedPassword = await bcrypt.hash(password,12);
  
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    }
  });
  return NextResponse.json(user);
}
