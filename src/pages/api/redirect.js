export async function onRequest({ request, url }) {
  const target = url.searchParams.get('url');
  
  if (!target) {
    return new Response('Missing target URL', { status: 400 });
  }

  // 验证URL格式
  try {
    new URL(target);
  } catch (e) {
    return new Response('Invalid URL format', { status: 400 });
  }

  // 返回302重定向
  return Response.redirect(target, 302);
} 
