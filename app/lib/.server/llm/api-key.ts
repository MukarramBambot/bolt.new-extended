import { env } from 'node:process';

export function getAPIKey(cloudflareEnv: Env, provider: string) {
  switch (provider) {
    case 'Anthropic':
      return env.ANTHROPIC_API_KEY || cloudflareEnv.ANTHROPIC_API_KEY;
    default:
      return "";
  }
}

export function getBaseURL(cloudflareEnv: Env, provider: string) {
  return "";
}