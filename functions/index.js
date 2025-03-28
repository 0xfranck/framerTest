export async function onRequest(context) {
    const content = await context.env.MY_KV.get("daily-page");
    const html = content || "<h1>No content available</h1>";
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  }