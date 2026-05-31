# HTTP Server Benchmark Results

## Environment

- Date: 2026-05-31
- Tool: [oha](https://github.com/hatoo/oha) 1.14.0
- Requests: 100,000
- Concurrency: 50
- Endpoint: `GET /` → `hello\n`

## Servers

| Server | Runtime | Port |
|---|---|---|
| Gerbil | Gerbil (Gambit Scheme) | 8080 |
| Hono | Deno 2.5.4 | 8000 |
| Python | Python 3.15 stdlib (`ThreadingMixIn`) | 8001 |

## Results

| Metric | Hono (Deno) | Gerbil | Python (stdlib) |
|---|---|---|---|
| **RPS** | **80,307** | 47,482 | 3,631 |
| **Avg latency** | **0.62 ms** | 1.10 ms | 13.76 ms |
| **P50** | 0.55 ms | 0.50 ms | 12.61 ms |
| **P99** | 2.12 ms | 3.10 ms | 30.97 ms |
| **P99.99** | 7.63 ms | 1,225 ms | 64.29 ms |
| **Slowest** | 9.62 ms | 1,435 ms | 68.26 ms |
| **Total time** | 1.25 s | 2.11 s | 27.54 s |
| **Errors** | 0 | 0 | 0 |
| **vs Python** | 22.1x | 13.1x | 1.0x |

## Raw Output

### Gerbil

```
Summary:
  Success rate:	100.00%
  Total:	2.1061 sec
  Slowest:	1.4350 sec
  Fastest:	0.0000 sec
  Average:	0.0011 sec
  Requests/sec:	47481.9067

Response time distribution:
  10.00% in 0.0003 sec
  25.00% in 0.0003 sec
  50.00% in 0.0005 sec
  75.00% in 0.0008 sec
  90.00% in 0.0014 sec
  95.00% in 0.0022 sec
  99.00% in 0.0031 sec
  99.90% in 0.0064 sec
  99.99% in 1.2257 sec
```

### Hono (Deno)

```
Summary:
  Success rate:	100.00%
  Total:	1245.2186 ms
  Slowest:	9.6206 ms
  Fastest:	0.1034 ms
  Average:	0.6194 ms
  Requests/sec:	80307.1842

Response time distribution:
  10.00% in 0.4214 ms
  25.00% in 0.4848 ms
  50.00% in 0.5510 ms
  75.00% in 0.6562 ms
  90.00% in 0.8235 ms
  95.00% in 1.0154 ms
  99.00% in 2.1199 ms
  99.90% in 3.4462 ms
  99.99% in 7.6295 ms
```

### Python (stdlib)

```
Summary:
  Success rate:	100.00%
  Total:	27541.5512 ms
  Slowest:	68.2616 ms
  Fastest:	4.8622 ms
  Average:	13.7616 ms
  Requests/sec:	3630.8776

Response time distribution:
  10.00% in 11.0040 ms
  25.00% in 11.6955 ms
  50.00% in 12.6071 ms
  75.00% in 14.1530 ms
  90.00% in 17.7083 ms
  95.00% in 21.1697 ms
  99.00% in 30.9676 ms
  99.90% in 47.8973 ms
  99.99% in 64.2919 ms
```

## Notes

- GerbilはP99.99で1,225msのスパイクが発生（27件）。keep-alive接続の再確立コストが原因と推測
- HonoはHTTP keep-aliveが効率的に機能しており安定したレイテンシ分布
- PythonはI/Oブロッキングのスレッドモデルのため他と比較にならない差。`uvicorn`等の非同期サーバーでは改善が見込まれる
