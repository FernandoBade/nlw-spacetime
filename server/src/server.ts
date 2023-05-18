import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';

const app = fastify();
const prisma = new PrismaClient();
const localHost: string = 'http://localhost/3333';

app.get('/users', async () => {
  const users = await prisma.user.findMany();
  return users;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`🚀 HTTP server created and running at: ${localHost}`);
  });
