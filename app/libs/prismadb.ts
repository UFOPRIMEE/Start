import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

<<<<<<< HEAD
export default client
=======
export default client
  // creating this to make prisma client globally available 
>>>>>>> 8b5d983d6547af2e74a4e49ba16533cc0a068063
