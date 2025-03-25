export async function onRequest(context) {
  //const content = await context.env.MY_KV.get("FramerFirst");
  const html = "<h1>No content available</h1>";
  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}