import cors from "@fastify/cors";
import fastify from "fastify";

import { memoriesRoutes } from "./routes/memories";

const app = fastify();
const localHost: string = "http://localhost/3333";

app.register(cors, {
  origin: true,
});

app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`🚀 HTTP server created and running at: ${localHost}`);
  });
