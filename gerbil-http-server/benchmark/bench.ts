const DURATION_MS = 10_000;
const CONCURRENCY = 50;
const WARMUP_MS = 2_000;

async function loadTest(url: string, durationMs: number, concurrency: number): Promise<{
  rps: number;
  avgLatencyMs: number;
  p99LatencyMs: number;
  errors: number;
  total: number;
}> {
  let completed = 0;
  let errors = 0;
  const latencies: number[] = [];
  const deadline = Date.now() + durationMs;

  async function worker() {
    while (Date.now() < deadline) {
      const start = performance.now();
      try {
        const res = await fetch(url);
        await res.text();
        latencies.push(performance.now() - start);
        completed++;
      } catch {
        errors++;
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  latencies.sort((a, b) => a - b);
  const avg = latencies.reduce((s, v) => s + v, 0) / latencies.length;
  const p99 = latencies[Math.floor(latencies.length * 0.99)] ?? 0;

  return {
    rps: Math.round((completed / durationMs) * 1000),
    avgLatencyMs: Math.round(avg * 100) / 100,
    p99LatencyMs: Math.round(p99 * 100) / 100,
    errors,
    total: completed,
  };
}

async function waitReady(url: string, timeoutMs = 5000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      await fetch(url);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  throw new Error(`Server not ready: ${url}`);
}

async function bench(name: string, url: string) {
  console.log(`\n[${name}] ${url}`);
  console.log("  Waiting for server...");
  await waitReady(url);

  console.log(`  Warmup ${WARMUP_MS / 1000}s...`);
  await loadTest(url, WARMUP_MS, CONCURRENCY);

  console.log(`  Benchmarking ${DURATION_MS / 1000}s, concurrency=${CONCURRENCY}...`);
  const result = await loadTest(url, DURATION_MS, CONCURRENCY);

  console.log(`  RPS:         ${result.rps}`);
  console.log(`  Avg latency: ${result.avgLatencyMs} ms`);
  console.log(`  P99 latency: ${result.p99LatencyMs} ms`);
  console.log(`  Total reqs:  ${result.total}`);
  console.log(`  Errors:      ${result.errors}`);
  return result;
}

const targets = [
  { name: "Gerbil", url: "http://127.0.0.1:8080/" },
  { name: "Hono (Deno)", url: "http://127.0.0.1:8000/" },
  { name: "Python (stdlib)", url: "http://127.0.0.1:8001/" },
];

const results: Record<string, { rps: number; avgLatencyMs: number; p99LatencyMs: number }> = {};

const shuffled = [...targets].sort(() => Math.random() - 0.5);
console.log(`\nBench order: ${shuffled.map((t) => t.name).join(" → ")}`);

for (const t of shuffled) {
  const r = await bench(t.name, t.url);
  results[t.name] = r;
}

console.log("\n=== Summary ===");
const entries = Object.entries(results).sort((a, b) => b[1].rps - a[1].rps);
const baseline = entries[entries.length - 1][1].rps;
for (const [name, r] of entries) {
  const ratio = (r.rps / baseline).toFixed(2);
  console.log(`${name.padEnd(20)} RPS: ${String(r.rps).padStart(6)}  avg: ${r.avgLatencyMs}ms  p99: ${r.p99LatencyMs}ms  (${ratio}x)`);
}
