export default {
    async fetch(request, env, ctx) {
      try {
        const targetUrl = "https://left-day-437461.framer.app/";
        const response = await fetch(targetUrl);
        const content = await response.text();
  
  
        await env.MY_KV.put("FramerFirst", content);
  
        return new Response("Successful write", {
          status: 201,
        });
      } catch (e) {
        return new Response(e.message, { status: 500 });
      }
    },
  };