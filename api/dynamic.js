export async function onRequest(context) {
    const content = await context.env.MY_KV.get("FramerFirst");
    return new Response(content || "No content available", {
      headers: { "Content-Type": "text/html" },
    });
  }