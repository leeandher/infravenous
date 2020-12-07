// Dependenies
const fetch = require("node-fetch");

// Declaring constants
const URL = "http://localhost:2021/latency-test";
const RESULTS = [];
const SAMPLE_SIZE = 5000;

// Create a mock authentication request
async function mockPostRequest(iteration) {
  const confidence = Math.random();
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "reload",
    body: JSON.stringify({
      id: 2021,
      account_id: 3,
      account_name: "test-company",
      result: {
        confidence,
        is_authenticated: confidence > 0.8,
      },
      attemptCount: iteration,
      timestamp: Date.now(),
    }),
  });
  return response.json();
}

// Creates N latency tests
async function runLatencyTests(n) {
  for (let i = 0; i < n; i++) {
    const preRequestInstant = Date.now();
    const response = await mockPostRequest(i);
    const postRequestInstant = Date.now();
    RESULTS.push({
      ...response,
      incomingDelta: postRequestInstant - response.timestamp,
      roundDelta: postRequestInstant - preRequestInstant,
    });
  }
}

// Run tests and print results to the console
async function main() {
  console.info(`Starting ${SAMPLE_SIZE} test(s) at ${new Date()}`);
  await runLatencyTests(SAMPLE_SIZE);
  console.info(`Starting ${SAMPLE_SIZE} test(s) at ${new Date()}`);
  const summary = RESULTS.reduce(
    (avg, res) => {
      avg.outgoingDelta += res.outgoingDelta;
      avg.incomingDelta += res.incomingDelta;
      avg.roundDelta += res.roundDelta;
      return avg;
    },
    {
      outgoingDelta: 0,
      incomingDelta: 0,
      roundDelta: 0,
    }
  );
  console.log("-------------------------");
  console.info(
    `Average outgoing latency (ms): ${summary.outgoingDelta / SAMPLE_SIZE}`
  );
  console.info(
    `Average incoming latency (ms): ${summary.incomingDelta / SAMPLE_SIZE}`
  );
  console.info(
    `Average round-trip latency (ms): ${summary.roundDelta / SAMPLE_SIZE}`
  );
}

main();
