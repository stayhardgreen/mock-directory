export class ApiError extends Error {
  status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.status = status;
  }
}

type MockOptions = {
  minDelayMs?: number;
  maxDelayMs?: number;
  errorRate?: number; // 0..1
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function mockFetch<T>(data: T, opts: MockOptions = {}): Promise<T> {
  const {
    minDelayMs = 250,
    maxDelayMs = 700,
    errorRate = 0.08,
  } = opts;

  await sleep(randInt(minDelayMs, maxDelayMs));

  if (Math.random() < errorRate) {
    throw new ApiError("Mock API error. Please try again.", 503);
  }

  // structuredClone is supported in modern browsers; fallback to JSON copy if needed
  try {
    // @ts-ignore
    return structuredClone(data);
  } catch {
    return JSON.parse(JSON.stringify(data)) as T;
  }
}
