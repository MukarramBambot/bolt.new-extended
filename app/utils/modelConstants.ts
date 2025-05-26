export type Provider = 'Anthropic';

export type ModelInfo = {
  name: string;
  provider: Provider;
  label: string;
  inputPrice?: number;
  outputPrice?: number;
  maxOutputTokens?: number;
  description?: string;
  deprecated?: boolean;
};

export type ModelConfig = {
  provider?: Provider;
  model?: string;
  apiKey?: string;
  baseUrl?: string;
  temperature?: number
  topP?: number
  topK?: number
}

const STATIC_MODELS: ModelInfo[] = [
  // Anthropic
  {
    name: 'claude-3-5-sonnet-20241022',
    label: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    inputPrice: 3,
    outputPrice: 15,
  }
];

export const DEFAULT_MODEL = 'claude-3-5-sonnet-20241022';
export const DEFAULT_PROVIDER: Provider = 'Anthropic';

export let MODEL_LIST: ModelInfo[] = [...STATIC_MODELS];

export function getModelsByProvider(provider: Provider): ModelInfo[] {
  return MODEL_LIST.filter(model => model.provider === provider);
}

export function getModelByName(name: string): ModelInfo | undefined {
  return MODEL_LIST.find(model => model.name === name);
}

export async function initializeModelList(): Promise<void> {
  MODEL_LIST = [...STATIC_MODELS];
}

initializeModelList().then();

export { MODEL_LIST }