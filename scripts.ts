import { PrismaClient } from '@prisma/client' 
const prisma = new PrismaClient() 

// USER TABLE AUTOMATICALLY GENERATED FROM MODAL USER

async function main() {
//   const user = await prisma.user.create({ data: { name: "Chandrasekar" }})
//     const users = await prisma.user.deleteMany()
//     console.log(users); 
      await prisma.user.deleteMany();
      const user = await prisma.user.createMany({ 
         data: [{
            name: "Dinesh",
            email: "1234@gmail.com",
            age: 27,
            },{
             name: "Banu",
             email: "12345@gmail.com",
             age: 28 ,  
            }]
         })
      console.log(user);
}

main()
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})