  export async function onRequest(context) {
    const content = await context.env.MY_KV.get("daily-page");
    return new Response(content || "No content available", {
      headers: { "Content-Type": "text/html" },
    });
  }