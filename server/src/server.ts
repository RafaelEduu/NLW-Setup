import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors"
import { appRoutes } from "./routes";

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.register(appRoutes)

app.listen ({
    port: 3333, 
    host: '0.0.0.0'
}).then(() => {
    console.log('server runing')
})