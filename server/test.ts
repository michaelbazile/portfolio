import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello, world!";
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server is running on http://localhost:8081");

await app.listen({ port: 8081 });
