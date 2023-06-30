import { PrismaClient } from '@prisma/client' 
const prisma = new PrismaClient() 

// USER TABLE AUTOMATICALLY GENERATED FROM MODAL USER

async function main() {
//   const user = await prisma.user.create({ data: { name: "Chandrasekar" }})
     const users = await prisma.user.findMany()
     console.log(users);  
}

main()
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})