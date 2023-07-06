import { Application, Context } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const app = new Application();

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

// CORS middleware
app.use(oakCors());

// Serve Vite React app
app.use(async (ctx) => {
  if (ctx.request.url.pathname.endsWith(".jsx")) {
    ctx.response.type = "text/javascript";
  }
  await ctx.send({
    root: "../web/dist", // Specify the root directory of your Vite React app
    index: "index.html", // Specify the entry point HTML file of your app
  });
});

// Start the server
console.log("Server is running on http://localhost:8000");
await app.listen({ port: 8000 });
