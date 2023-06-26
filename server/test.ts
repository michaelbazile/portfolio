import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

// Custom middleware for logging requests
app.use(async (ctx: Context, next) => {
  const { method, url, headers } = ctx.request;
  const startTime = Date.now();

  // Log the incoming request
  console.log(`Incoming request: ${method} ${url}`);
  console.log("Headers:", headers);

  // Wait for the request to be processed
  await next();

  const responseTime = Date.now() - startTime;

  // Log the response status and time
  console.log(`Response status: ${ctx.response.status}`);
  console.log(`Response time: ${responseTime}ms`);
});

router.get("/", (ctx) => {
  ctx.response.body = "Hello, World!";
});

app.use(router.routes());
app.use(router.allowedMethods());
console.log("Server is running on http://localhost:8081");

await app.listen({ port: 8081 });
