import { Application, Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const app = new Application();
const router = new Router();
// const viteAppDir = `../web/${Deno.cwd()}`;
//
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
// console.log(viteAppDir);
await app.listen({ port: 8000 });
