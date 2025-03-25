export async function onRequest(context) {
    const content = await context.env.MY_KV.get("daily-page");
    const html = `
      <!DOCTYPE html>
    <html>
      <head>
        <title>Test Static Content</title>
        <style>
          body { font-family: sans-serif; padding: 2em; }
        </style>
      </head>
      <body>
        <h1>Hello from Cloudflare Pages!</h1>
        <p>This is static HTML content served at the root.</p>
      </body>
    </html>
  `;
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  }