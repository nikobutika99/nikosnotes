// Decap CMS GitHub OAuth — step 1: redirect the user to GitHub to authorize.
import crypto from 'node:crypto';

const AUTHORIZE = 'https://github.com/login/oauth/authorize';

export async function handler(event) {
  const clientId = process.env.GITHUB_OAUTH_ID;
  if (!clientId) {
    return { statusCode: 500, body: 'Missing GITHUB_OAUTH_ID env var' };
  }
  const proto = event.headers['x-forwarded-proto'] || 'https';
  const host = event.headers.host;
  const redirectUri = `${proto}://${host}/.netlify/functions/callback`;
  const scope =
    (event.queryStringParameters && event.queryStringParameters.scope) || 'repo';
  const state = crypto.randomBytes(12).toString('hex');

  const url =
    `${AUTHORIZE}?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scope)}` +
    `&state=${state}`;

  return { statusCode: 302, headers: { Location: url }, body: '' };
}
