// Decap CMS GitHub OAuth — step 2: exchange the code for a token and hand it
// back to the CMS window via postMessage.
const TOKEN_URL = 'https://github.com/login/oauth/access_token';

function page(message) {
  // `message` is the raw postMessage payload string Decap expects, e.g.
  // authorization:github:success:{"token":"...","provider":"github"}
  const literal = JSON.stringify(message);
  return `<!doctype html><html><head><meta charset="utf-8"></head><body>
<script>
  (function () {
    function receiveMessage(e) {
      window.opener.postMessage(${literal}, e.origin);
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:github', '*');
  })();
</script>
<p>Authorizing… you can close this window.</p>
</body></html>`;
}

function html(body) {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
    body,
  };
}

export async function handler(event) {
  const code = event.queryStringParameters && event.queryStringParameters.code;
  const clientId = process.env.GITHUB_OAUTH_ID;
  const clientSecret = process.env.GITHUB_OAUTH_SECRET;

  if (!code) return html(page('authorization:github:error:{"message":"Missing code"}'));
  if (!clientId || !clientSecret) {
    return html(page('authorization:github:error:{"message":"Missing OAuth env vars"}'));
  }

  try {
    const res = await fetch(TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    const data = await res.json();

    if (data.error || !data.access_token) {
      const msg = data.error_description || data.error || 'No access token';
      return html(page(`authorization:github:error:${JSON.stringify({ message: msg })}`));
    }

    const payload = JSON.stringify({ token: data.access_token, provider: 'github' });
    return html(page(`authorization:github:success:${payload}`));
  } catch (err) {
    return html(page(`authorization:github:error:${JSON.stringify({ message: String(err) })}`));
  }
}
